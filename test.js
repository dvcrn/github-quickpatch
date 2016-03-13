var foo = require('./src/index');

console.info(foo);

foo.queryGithub('dvcrn/proton', (r) => {
  console.info(r);

  foo.renderMenu(foo.extractPrInformation(r));
});

