#!/usr/bin/env node
import quickpatch from './index';

const arg = process.argv[2];

function spawnQuickpatch(repo) {
  quickpatch.queryGithub(repo, (r) => {
    quickpatch.renderMenu(quickpatch.extractPrInformation(r));
  });
}

quickpatch.isGitRepository((isRepo) => {
  if (!isRepo && !arg) {
    console.log('no git info found and no repo passed as arg');
    process.exit();
  }

  if (arg) {
    spawnQuickpatch(arg);
  } else if (isRepo) {
    quickpatch.getRepositoryFromGit((repo) => {
      spawnQuickpatch(repo);
    });
  }
});

