import https from 'https';
import util from 'util';
import request from 'request';
import readline from 'readline';
import yesno from 'yesno';
import sys from 'sys';
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

  patchPr(pr) {
    yesno.ask(`Are you sure you want to apply the patch '${pr.title}'? [y/n]`, true, (ok) => {
      if(ok) {
        exec(`curl '${pr.patch}' | git apply -v --index`, (err, stdout, stderr) => {
          console.info(err);
          console.info(stdout);
          console.info(stderr);
        });
      } else {
        console.log("Nope.");
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
        this.patchPr(prs[currentIndex]);
      }
    });
  }

  queryGithub(repository, callback) {
    const options = {
      url: `https://api.github.com/repos/${repository}/pulls`,
      headers: {
        'User-Agent': 'request',
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
}

/**
 * @param {Type}
 * @return {Type}
 */
module.exports = new GithubPatcher();
