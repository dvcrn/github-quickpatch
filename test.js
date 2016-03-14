/* eslint-disable */
var foo = require('./src/index');

// console.info(foo);
//
// foo.queryGithub('dvcrn/proton', (r) => {
//   console.info(r);
//
//   foo.renderMenu(foo.extractPrInformation(r));
// });
//

foo.isGitRepository((res) => {
  if (res) {
    console.info('git repo');
    foo.getRepositoryFromGit((name) => {
      console.info(name);
    });
  } else {

    console.info('no git repo');
  }
});
