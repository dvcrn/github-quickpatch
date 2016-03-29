/* eslint-disable no-console */
/* eslint no-unused-vars: [2, { "argsIgnorePattern": "^_" }] */
import request from 'request';
import yesno from 'yesno';
import { exec } from 'child_process';

class GithubPatcher {
  constructor() {
    this.renderMenu = this.renderMenu.bind(this);
    this.queryGithub = this.queryGithub.bind(this);
    this.clearTerminal = this.clearTerminal.bind(this);
    this.displayPrsWithSelected = this.displayPrsWithSelected.bind(this);
    this.patchPr = this.patchPr.bind(this);
  }

  clearTerminal(func) {
    const lines = process.stdout.getWindowSize()[1];
    const f = func || console.log;

    for (let i = 0; i < lines; i++) {
      f('\r\n');
    }
  }

  displayPrsWithSelected(prs, _selectedId, consoleTestOverwrite) {
    const logfunc = consoleTestOverwrite || console.log;
    const selectedId = _selectedId || prs[prs.length - 1].id;

    logfunc('please select the PR you want to apply. ("q" to cancel):');
    logfunc('');

    prs.forEach((pr) => {
      let str = '';
      if (selectedId === pr.id) {
        str = `${str}->`;
      } else {
        str = `${str}  `;
      }

      str = `${str} ${pr.title} (${pr.user})`;

      logfunc(str);
    });
  }

  patchPr(pr, cb) {
    yesno.ask(`Are you sure you want to apply the patch '${pr.title}'? [y/n]`, true, (ok) => {
      if (ok) {
        const commands = [];
        commands.push('mkdir -p .patches');
        commands.push(`curl -L '${pr.patch}' >> .patches/${pr.id}`);
        commands.push(`git am .patches/${pr.id}`);
        exec(commands.join(' && '), (err, stdout, stderr) => {
          if (!err) {
            console.log(`patch applied successfully. patch stored at .patch/${pr.id}`);
            process.exit();
          } else {
            console.error(stdout);
            console.error(stderr);
            process.exit();
          }
        });
      } else {
        // clean up all listeners
        process.stdin.listeners('data').forEach((listener) => {
          process.stdin.removeListener('data', listener);
        });

        process.stdin.resume();
        cb();
      }
    });
  }

  renderMenu(prs, _currentId) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.setRawMode(true);

    const prIds = prs.map((pr) => (pr.id));
    let currentId = _currentId || prIds[prIds.length - 1];

    this.clearTerminal();
    this.displayPrsWithSelected(prs, currentId);

    process.stdin.on('data', (text) => {
      const currentIndex = prIds.indexOf(currentId);
      if (text === '\u001b[B') {
        if (currentIndex + 1 <= prIds.length - 1) {
          currentId = prIds[currentIndex + 1];
          this.clearTerminal();
          this.displayPrsWithSelected(prs, currentId);
        }
      }

      if (text === '\u001b[A') {
        if (currentIndex - 1 >= 0) {
          currentId = prIds[currentIndex - 1];
          this.clearTerminal();
          this.displayPrsWithSelected(prs, currentId);
        }
      }

      if (text === '\r') {
        process.stdin.resume();
        process.stdin.setRawMode(false);
        this.patchPr(prs[currentIndex], () => {
          this.renderMenu(prs, currentId);
        });
      }

      if (text === 'q') {
        process.exit();
      }

      if (text === '\u0003') {
        process.exit();
      }
    });
  }

  queryGithub(repository, callback) {
    const options = {
      url: `https://api.github.com/repos/${repository}/pulls`,
      headers: {
        'User-Agent': 'github-quickpatch',
      },
    };

    request(options, (err, res, body) => {
      callback(JSON.parse(body));
    });
  }

  extractPrInformation(data) {
    return data.map((row) => ({
      id: row.id,
      url: row.html_url,
      diff: row.diff_url,
      patch: row.patch_url,
      title: row.title,
      user: row.user.login,
    }));
  }

  isGitRepository(cb) {
    exec('git status', (err, _stdout, _stderr) => {
      if (err) {
        cb(false);
      } else {
        cb(true);
      }
    });
  }

  getRepositoryFromGit(cb) {
    const regex = 'github\\.com\\:?\\/?([a-zA-Z0-9_\-]*\\/[a-zA-Z0-9_\\-]*)';
    const strip = 'sed s/github.com:// | sed s-github.com/--';
    const command = `git config --get remote.origin.url | grep -oE "${regex}" | ${strip}`;

    exec(command, (err, stdout, _stderr) => {
      if (err) {
        cb(null);
      } else {
        cb(stdout.trim());
      }
    });
  }
}

/**
 * @param {Type}
 * @return {Type}
 */
module.exports = new GithubPatcher();
