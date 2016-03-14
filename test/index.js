import mockery from 'mockery';
import { assert } from 'chai';
import sinon from 'sinon';

const testdata = [{
  url: 'https://api.github.com/repos/dvcrn/proton/pulls/171',
  id: 61505390,
  html_url: 'https://github.com/dvcrn/proton/pull/171',
  diff_url: 'https://github.com/dvcrn/proton/pull/171.diff',
  patch_url: 'https://github.com/dvcrn/proton/pull/171.patch',
  issue_url: 'https://api.github.com/repos/dvcrn/proton/issues/171',
  number: 171,
  state: 'open',
  locked: false,
  title: 'Swift layer',
  user: {
    login: 'dvcrn',
    id: 688326,
    avatar_url: 'https://avatars.githubusercontent.com/u/688326?v=3',
    gravatar_id: '',
    url: 'https://api.github.com/users/dvcrn',
    html_url: 'https://github.com/dvcrn',
    followers_url: 'https://api.github.com/users/dvcrn/followers',
    following_url: 'https://api.github.com/users/dvcrn/following{/other_user}',
    gists_url: 'https://api.github.com/users/dvcrn/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/dvcrn/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/dvcrn/subscriptions',
    organizations_url: 'https://api.github.com/users/dvcrn/orgs',
    repos_url: 'https://api.github.com/users/dvcrn/repos',
    events_url: 'https://api.github.com/users/dvcrn/events{/privacy}',
    received_events_url: 'https://api.github.com/users/dvcrn/received_events',
    type: 'User',
    site_admin: false,
  },
  body: 'not yet ready',
  created_at: '2016-03-03T03:23:20Z',
  updated_at: '2016-03-03T03:23:20Z',
  closed_at: null,
  merged_at: null,
  merge_commit_sha: 'cd1555fe4c80ce076d3da973f5e888025308e5df',
  assignee: null,
  milestone: null,
  commits_url: 'https://api.github.com/repos/dvcrn/proton/pulls/171/commits',
  review_comments_url: 'https://api.github.com/repos/dvcrn/proton/pulls/171/comments',
  review_comment_url: 'https://api.github.com/repos/dvcrn/proton/pulls/comments{/number}',
  comments_url: 'https://api.github.com/repos/dvcrn/proton/issues/171/comments',
  statuses_url: 'https://api.github.com/repos/dvcrn/proton/statuses/446fc7e991f68aa944d4bafec461e1f73d2517af',
  head: {
    label: 'dvcrn:feature/swift-lang',
    ref: 'feature/swift-lang',
    sha: '446fc7e991f68aa944d4bafec461e1f73d2517af',
    user: {
      login: 'dvcrn',
      id: 688326,
      avatar_url: 'https://avatars.githubusercontent.com/u/688326?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/dvcrn',
      html_url: 'https://github.com/dvcrn',
      followers_url: 'https://api.github.com/users/dvcrn/followers',
      following_url: 'https://api.github.com/users/dvcrn/following{/other_user}',
      gists_url: 'https://api.github.com/users/dvcrn/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/dvcrn/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/dvcrn/subscriptions',
      organizations_url: 'https://api.github.com/users/dvcrn/orgs',
      repos_url: 'https://api.github.com/users/dvcrn/repos',
      events_url: 'https://api.github.com/users/dvcrn/events{/privacy}',
      received_events_url: 'https://api.github.com/users/dvcrn/received_events',
      type: 'User',
      site_admin: false,
    },
    repo: {
      id: 43730577,
      name: 'proton',
      full_name: 'dvcrn/proton',
      owner: {
        login: 'dvcrn',
        id: 688326,
        avatar_url: 'https://avatars.githubusercontent.com/u/688326?v=3',
        gravatar_id: '',
        url: 'https://api.github.com/users/dvcrn',
        html_url: 'https://github.com/dvcrn',
        followers_url: 'https://api.github.com/users/dvcrn/followers',
        following_url: 'https://api.github.com/users/dvcrn/following{/other_user}',
        gists_url: 'https://api.github.com/users/dvcrn/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dvcrn/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dvcrn/subscriptions',
        organizations_url: 'https://api.github.com/users/dvcrn/orgs',
        repos_url: 'https://api.github.com/users/dvcrn/repos',
        events_url: 'https://api.github.com/users/dvcrn/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dvcrn/received_events',
        type: 'User',
        site_admin: false,
      },
      private: false,
      html_url: 'https://github.com/dvcrn/proton',
      description: 'space-atom. spacemacs and sublimious style editing in atom',
      fork: false,
      url: 'https://api.github.com/repos/dvcrn/proton',
      forks_url: 'https://api.github.com/repos/dvcrn/proton/forks',
      keys_url: 'https://api.github.com/repos/dvcrn/proton/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/dvcrn/proton/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/dvcrn/proton/teams',
      hooks_url: 'https://api.github.com/repos/dvcrn/proton/hooks',
      issue_events_url: 'https://api.github.com/repos/dvcrn/proton/issues/events{/number}',
      events_url: 'https://api.github.com/repos/dvcrn/proton/events',
      assignees_url: 'https://api.github.com/repos/dvcrn/proton/assignees{/user}',
      branches_url: 'https://api.github.com/repos/dvcrn/proton/branches{/branch}',
      tags_url: 'https://api.github.com/repos/dvcrn/proton/tags',
      blobs_url: 'https://api.github.com/repos/dvcrn/proton/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/dvcrn/proton/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/dvcrn/proton/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/dvcrn/proton/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/dvcrn/proton/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/dvcrn/proton/languages',
      stargazers_url: 'https://api.github.com/repos/dvcrn/proton/stargazers',
      contributors_url: 'https://api.github.com/repos/dvcrn/proton/contributors',
      subscribers_url: 'https://api.github.com/repos/dvcrn/proton/subscribers',
      subscription_url: 'https://api.github.com/repos/dvcrn/proton/subscription',
      commits_url: 'https://api.github.com/repos/dvcrn/proton/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/dvcrn/proton/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/dvcrn/proton/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/dvcrn/proton/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/dvcrn/proton/contents/{+path}',
      compare_url: 'https://api.github.com/repos/dvcrn/proton/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/dvcrn/proton/merges',
      archive_url: 'https://api.github.com/repos/dvcrn/proton/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/dvcrn/proton/downloads',
      issues_url: 'https://api.github.com/repos/dvcrn/proton/issues{/number}',
      pulls_url: 'https://api.github.com/repos/dvcrn/proton/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/dvcrn/proton/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/dvcrn/proton/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/dvcrn/proton/labels{/name}',
      releases_url: 'https://api.github.com/repos/dvcrn/proton/releases{/id}',
      deployments_url: 'https://api.github.com/repos/dvcrn/proton/deployments',
      created_at: '2015-10-06T04:54:07Z',
      updated_at: '2016-03-13T00:42:18Z',
      pushed_at: '2016-03-13T02:10:54Z',
      git_url: 'git://github.com/dvcrn/proton.git',
      ssh_url: 'git@github.com:dvcrn/proton.git',
      clone_url: 'https://github.com/dvcrn/proton.git',
      svn_url: 'https://github.com/dvcrn/proton',
      homepage: '',
      size: 1943,
      stargazers_count: 155,
      watchers_count: 155,
      language: 'Clojure',
      has_issues: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 19,
      mirror_url: null,
      open_issues_count: 16,
      forks: 19,
      open_issues: 16,
      watchers: 155,
      default_branch: 'master',
    },
  },
  base: {
    label: 'dvcrn:master',
    ref: 'master',
    sha: '258b9d0f467fe99b676be1d3f59c04a5c88ce7a8',
    user: {
      login: 'dvcrn',
      id: 688326,
      avatar_url: 'https://avatars.githubusercontent.com/u/688326?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/dvcrn',
      html_url: 'https://github.com/dvcrn',
      followers_url: 'https://api.github.com/users/dvcrn/followers',
      following_url: 'https://api.github.com/users/dvcrn/following{/other_user}',
      gists_url: 'https://api.github.com/users/dvcrn/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/dvcrn/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/dvcrn/subscriptions',
      organizations_url: 'https://api.github.com/users/dvcrn/orgs',
      repos_url: 'https://api.github.com/users/dvcrn/repos',
      events_url: 'https://api.github.com/users/dvcrn/events{/privacy}',
      received_events_url: 'https://api.github.com/users/dvcrn/received_events',
      type: 'User',
      site_admin: false,
    },
    repo: {
      id: 43730577,
      name: 'proton',
      full_name: 'dvcrn/proton',
      owner: {
        login: 'dvcrn',
        id: 688326,
        avatar_url: 'https://avatars.githubusercontent.com/u/688326?v=3',
        gravatar_id: '',
        url: 'https://api.github.com/users/dvcrn',
        html_url: 'https://github.com/dvcrn',
        followers_url: 'https://api.github.com/users/dvcrn/followers',
        following_url: 'https://api.github.com/users/dvcrn/following{/other_user}',
        gists_url: 'https://api.github.com/users/dvcrn/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dvcrn/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dvcrn/subscriptions',
        organizations_url: 'https://api.github.com/users/dvcrn/orgs',
        repos_url: 'https://api.github.com/users/dvcrn/repos',
        events_url: 'https://api.github.com/users/dvcrn/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dvcrn/received_events',
        type: 'User',
        site_admin: false,
      },
      private: false,
      html_url: 'https://github.com/dvcrn/proton',
      description: 'space-atom. spacemacs and sublimious style editing in atom',
      fork: false,
      url: 'https://api.github.com/repos/dvcrn/proton',
      forks_url: 'https://api.github.com/repos/dvcrn/proton/forks',
      keys_url: 'https://api.github.com/repos/dvcrn/proton/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/dvcrn/proton/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/dvcrn/proton/teams',
      hooks_url: 'https://api.github.com/repos/dvcrn/proton/hooks',
      issue_events_url: 'https://api.github.com/repos/dvcrn/proton/issues/events{/number}',
      events_url: 'https://api.github.com/repos/dvcrn/proton/events',
      assignees_url: 'https://api.github.com/repos/dvcrn/proton/assignees{/user}',
      branches_url: 'https://api.github.com/repos/dvcrn/proton/branches{/branch}',
      tags_url: 'https://api.github.com/repos/dvcrn/proton/tags',
      blobs_url: 'https://api.github.com/repos/dvcrn/proton/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/dvcrn/proton/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/dvcrn/proton/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/dvcrn/proton/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/dvcrn/proton/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/dvcrn/proton/languages',
      stargazers_url: 'https://api.github.com/repos/dvcrn/proton/stargazers',
      contributors_url: 'https://api.github.com/repos/dvcrn/proton/contributors',
      subscribers_url: 'https://api.github.com/repos/dvcrn/proton/subscribers',
      subscription_url: 'https://api.github.com/repos/dvcrn/proton/subscription',
      commits_url: 'https://api.github.com/repos/dvcrn/proton/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/dvcrn/proton/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/dvcrn/proton/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/dvcrn/proton/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/dvcrn/proton/contents/{+path}',
      compare_url: 'https://api.github.com/repos/dvcrn/proton/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/dvcrn/proton/merges',
      archive_url: 'https://api.github.com/repos/dvcrn/proton/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/dvcrn/proton/downloads',
      issues_url: 'https://api.github.com/repos/dvcrn/proton/issues{/number}',
      pulls_url: 'https://api.github.com/repos/dvcrn/proton/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/dvcrn/proton/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/dvcrn/proton/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/dvcrn/proton/labels{/name}',
      releases_url: 'https://api.github.com/repos/dvcrn/proton/releases{/id}',
      deployments_url: 'https://api.github.com/repos/dvcrn/proton/deployments',
      created_at: '2015-10-06T04:54:07Z',
      updated_at: '2016-03-13T00:42:18Z',
      pushed_at: '2016-03-13T02:10:54Z',
      git_url: 'git://github.com/dvcrn/proton.git',
      ssh_url: 'git@github.com:dvcrn/proton.git',
      clone_url: 'https://github.com/dvcrn/proton.git',
      svn_url: 'https://github.com/dvcrn/proton',
      homepage: '',
      size: 1943,
      stargazers_count: 155,
      watchers_count: 155,
      language: 'Clojure',
      has_issues: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 19,
      mirror_url: null,
      open_issues_count: 16,
      forks: 19,
      open_issues: 16,
      watchers: 155,
      default_branch: 'master',
    },
  },
  _links: {
    self: {
      href: 'https://api.github.com/repos/dvcrn/proton/pulls/171',
    },
    html: {
      href: 'https://github.com/dvcrn/proton/pull/171',
    },
    issue: {
      href: 'https://api.github.com/repos/dvcrn/proton/issues/171',
    },
    comments: {
      href: 'https://api.github.com/repos/dvcrn/proton/issues/171/comments',
    },
    review_comments: {
      href: 'https://api.github.com/repos/dvcrn/proton/pulls/171/comments',
    },
    review_comment: {
      href: 'https://api.github.com/repos/dvcrn/proton/pulls/comments{/number}',
    },
    commits: {
      href: 'https://api.github.com/repos/dvcrn/proton/pulls/171/commits',
    },
    statuses: {
      href: 'https://api.github.com/repos/dvcrn/proton/statuses/446fc7e991f68aa944d4bafec461e1f73d2517af',
    },
  },
},
];

const formatedTestdata = [
  {
    id: 61505390,
    url: 'https://github.com/dvcrn/proton/pull/171',
    diff: 'https://github.com/dvcrn/proton/pull/171.diff',
    patch: 'https://github.com/dvcrn/proton/pull/171.patch',
    title: 'Swift layer',
    user: 'dvcrn',
  },
];

const formatedTestdataMulti = [
  {
    id: 123,
    url: 'https://github.com/dvcrn/proton/pull/171',
    diff: 'https://github.com/dvcrn/proton/pull/171.diff',
    patch: 'https://github.com/dvcrn/proton/pull/171.patch',
    title: 'Something',
    user: 'dvcrn',
  },
  {
    id: 455,
    url: 'https://github.com/dvcrn/proton/pull/171',
    diff: 'https://github.com/dvcrn/proton/pull/171.diff',
    patch: 'https://github.com/dvcrn/proton/pull/171.patch',
    title: 'Something else',
    user: 'dvcrn',
  },
  {
    id: 987,
    url: 'https://github.com/dvcrn/proton/pull/171',
    diff: 'https://github.com/dvcrn/proton/pull/171.diff',
    patch: 'https://github.com/dvcrn/proton/pull/171.patch',
    title: 'another something',
    user: 'dvcrn',
  },
];

function load() {
  return require('../src/index');
}

const sandbox = sinon.sandbox.create();

describe('Github Patcher', () => {
  before(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
    });
  });

  afterEach(() => {
    mockery.deregisterAll();
    delete require.cache[require.resolve('../src/index')];
    sandbox.restore();
  });

  describe('queryGithub()', () => {
    it('calls request()', () => {
      const requestSpy = sinon.spy();
      mockery.registerMock('request', requestSpy);

      const gp = load();
      gp.queryGithub('test/foo', sandbox.spy());

      assert.equal(true, requestSpy.calledOnce);
      assert.equal(true, requestSpy.calledWith({
        url: 'https://api.github.com/repos/test/foo/pulls',
        headers: {
          'User-Agent': 'github-quickpatch',
        },
      }));
    });
  });

  describe('extractPrInformation()', () => {
    it('generates the pr list correctly', () => {
      const gp = load();
      assert.deepEqual(formatedTestdata, gp.extractPrInformation(testdata));
    });
  });

  describe('clearTerminal()', () => {
    it('clears the terminal correctly', () => {
      // mock getWindowSize
      process.stdout.getWindowSize = () => ([1, 3]);
      const counter = sandbox.spy();

      const gp = load();
      gp.clearTerminal(counter);

      assert.equal(3, counter.callCount);
    });
  });

  describe('displayPrsWithSelected()', () => {
    it('select last element if null', () => {
      const consoleSpy = sinon.spy();
      const gp = load();

      gp.displayPrsWithSelected(formatedTestdataMulti, null, consoleSpy);

      assert.equal(5, consoleSpy.callCount);
      assert.equal(true, consoleSpy.calledWith('-> another something (dvcrn)'));
      assert.equal(true, consoleSpy.calledWith('   Something (dvcrn)'));
      assert.equal(true, consoleSpy.calledWith('   Something else (dvcrn)'));
    });

    it('select element with correct id', () => {
      const consoleSpy = sinon.spy();
      const gp = load();

      gp.displayPrsWithSelected(formatedTestdataMulti, 123, consoleSpy);

      assert.equal(5, consoleSpy.callCount);
      assert.equal(true, consoleSpy.calledWith('   another something (dvcrn)'));
      assert.equal(true, consoleSpy.calledWith('-> Something (dvcrn)'));
      assert.equal(true, consoleSpy.calledWith('   Something else (dvcrn)'));
    });
  });

  describe('renderMenu()', () => {
    it('configures stdin like needed', () => {
      process.stdin.resume = sandbox.spy();
      process.stdin.setRawMode = sandbox.spy();
      process.stdin.setEncoding = sandbox.spy();
      process.stdin.on = sandbox.spy();

      const gp = load();
      gp.clearTerminal = sinon.spy();
      gp.displayPrsWithSelected = sinon.spy();
      gp.renderMenu(formatedTestdataMulti);

      assert.isTrue(process.stdin.resume.calledOnce, 'called resume');
      assert.isTrue(process.stdin.setRawMode.calledOnce, 'called setRawMode');
      assert.isTrue(process.stdin.setEncoding.calledOnce, 'called setEncoding');

      assert.isTrue(process.stdin.setRawMode.calledWith(true), 'setRawMode correctly');
      assert.isTrue(process.stdin.setEncoding.calledWith('utf8'), 'setEncoding correctly');

      assert.isTrue(gp.clearTerminal.calledOnce, 'called clearTerminal');
      assert.isTrue(gp.displayPrsWithSelected.calledOnce, 'called displayPrs');
    });

    it('reacts correctly to data events', () => {
      process.stdin.resume = sandbox.spy();
      process.stdin.setRawMode = sandbox.spy();
      process.stdin.setEncoding = sandbox.spy();
      let f = null;
      process.stdin.on = (_, fn) => {
        f = fn;
      };

      const gp = load();
      gp.clearTerminal = sinon.spy();
      gp.displayPrsWithSelected = sinon.spy();
      gp.patchPr = sinon.spy();
      gp.renderMenu(formatedTestdataMulti);

      const ARROW_UP = '\u001b[A';
      const ARROW_DOWN = '\u001b[B';
      const ENTER = '\r';

      assert.equal(1, gp.clearTerminal.callCount);
      assert.equal(1, gp.displayPrsWithSelected.callCount);
      assert.isTrue(gp.displayPrsWithSelected.calledWith(formatedTestdataMulti, 987));

      // on arrow down, don't do anything because we are still on the last
      // element
      f.call(gp, ARROW_DOWN);
      assert.equal(1, gp.clearTerminal.callCount);
      assert.equal(1, gp.displayPrsWithSelected.callCount);
      assert.isTrue(gp.displayPrsWithSelected.calledWith(formatedTestdataMulti, 987));

      // let's try arrow up
      // now it should be the last previous element
      f.call(gp, ARROW_UP);
      assert.equal(2, gp.clearTerminal.callCount);
      assert.equal(2, gp.displayPrsWithSelected.callCount);
      assert.isTrue(gp.displayPrsWithSelected.calledWith(formatedTestdataMulti, 455));

      // now down again
      // this time it should update because we are no longer the last element
      f.call(gp, ARROW_DOWN);
      assert.equal(3, gp.clearTerminal.callCount);
      assert.equal(3, gp.displayPrsWithSelected.callCount);
      assert.isTrue(gp.displayPrsWithSelected.calledWith(formatedTestdataMulti, 987));

      // 2 up and enter
      f.call(gp, ARROW_UP);
      f.call(gp, ARROW_UP);
      f.call(gp, ENTER);

      assert.isTrue(
        gp.patchPr.calledWith(formatedTestdataMulti[0], sinon.match.any),
        'executed patchPr'
      );

      assert.equal(2, process.stdin.resume.callCount);
      assert.equal(2, process.stdin.setRawMode.callCount);
      assert.isTrue(process.stdin.setRawMode.calledWith(false));
    });

    it('quits when q is pressed', () => {
      process.stdin.resume = sandbox.spy();
      process.stdin.setRawMode = sandbox.spy();
      process.stdin.setEncoding = sandbox.spy();
      process.exit = sandbox.spy();
      let f = null;
      process.stdin.on = (_, fn) => {
        f = fn;
      };

      const gp = load();
      gp.clearTerminal = sinon.spy();
      gp.displayPrsWithSelected = sinon.spy();
      gp.patchPr = sinon.spy();
      gp.renderMenu(formatedTestdataMulti);

      const QUIT = 'q';
      const CTRLC = '\u0003';

      f.call(gp, QUIT);
      assert.isTrue(process.exit.calledOnce);
      assert.equal(1, process.exit.callCount);

      f.call(gp, CTRLC);
      assert.equal(2, process.exit.callCount);
    });
  });

  describe('patchPr()', () => {
    it('should ask for verification before doing anything', () => {
      const yesnoSpy = {
        ask: sinon.spy(),
      };
      mockery.registerMock('yesno', yesnoSpy);
      const gp = load();
      gp.patchPr(formatedTestdata[0]);

      assert.isTrue(yesnoSpy.ask.calledOnce, 'yesno called once');
      assert.isTrue(yesnoSpy.ask.calledWith(
        'Are you sure you want to apply the patch \'Swift layer\'? [y/n]',
        true,
        sinon.match.func
      ));
    });

    it('should execute shell command on yes', () => {
      let f = null;
      const yesnoSpy = {
        ask: (question, def, fn) => {
          f = fn;
        },
      };

      const execSpy = { exec: sinon.spy() };

      mockery.registerMock('yesno', yesnoSpy);
      mockery.registerMock('child_process', execSpy);

      const gp = load();
      gp.patchPr(formatedTestdata[0]);

      f(true);

      const commands = [];
      commands.push('mkdir -p .patches');
      commands.push(`curl -L '${formatedTestdata[0].patch}' >> .patches/${formatedTestdata[0].id}`);
      commands.push(`git apply -v --index .patches/${formatedTestdata[0].id}`);

      assert.isTrue(execSpy.exec.calledWith(commands.join(' && '), sinon.match.any));
    });

    it('should clean up listeners and call cb on no', () => {
      let f = null;
      const yesnoSpy = {
        ask: (question, def, fn) => {
          f = fn;
        },
      };

      const execSpy = { exec: sinon.spy() };

      mockery.registerMock('yesno', yesnoSpy);
      mockery.registerMock('child_process', execSpy);

      process.stdin.listeners = sandbox.mock().returns(['foo', 'bar', 'fofo']);
      process.stdin.removeListener = sinon.spy();

      const fakeCb = sinon.spy();
      const gp = load();
      gp.patchPr(formatedTestdata[0], fakeCb);

      f(false);

      assert.isTrue(process.stdin.listeners.calledOnce);
      assert.equal(3, process.stdin.removeListener.callCount);
      assert.isTrue(process.stdin.removeListener.calledWith('data', 'foo'));
      assert.isTrue(process.stdin.removeListener.calledWith('data', 'bar'));
      assert.isTrue(process.stdin.removeListener.calledWith('data', 'fofo'));
      assert.isTrue(fakeCb.calledOnce, 'called cb');
    });
  });

  describe('isGitRepository()', () => {
    it('returns correct status', () => {
      let fn = null;
      const cbSpy = sandbox.spy();
      const execSpy = { exec: (msg, _fn) => {fn = _fn;} };
      mockery.registerMock('child_process', execSpy);

      const gb = load();
      gb.isGitRepository(cbSpy);

      fn(false, 'no', 'nothing');
      assert.isTrue(cbSpy.calledWith(true));
      assert.equal(1, cbSpy.callCount);

      fn(true, 'no', 'nothing');
      assert.isTrue(cbSpy.calledWith(false));
      assert.equal(2, cbSpy.callCount);
    });
  });

  describe('getRepositoryFromGit()', () => {
    it('executes correct command', () => {
      const cbSpy = sandbox.spy();
      const execSpy = { exec: sandbox.spy() };
      mockery.registerMock('child_process', execSpy);

      const gb = load();
      gb.getRepositoryFromGit(cbSpy);

      const regex = '([a-zA-z0-9\\-_]*\\/[a-zA-z0-9\\-_]*)';
      const command = `git config --get remote.origin.url | grep -oE "${regex}"`;
      assert.isTrue(execSpy.exec.calledWith(command, sinon.match.any));
    });

    it('executes correct command', () => {
      let fn = null;
      const cbSpy = sandbox.spy();
      const execSpy = { exec: (msg, _fn) => {fn = _fn;} };
      mockery.registerMock('child_process', execSpy);

      const gb = load();
      gb.getRepositoryFromGit(cbSpy);

      fn(true);
      assert.isTrue(cbSpy.calledWith(null));

      fn(false, '    test', 'err');
      assert.isTrue(cbSpy.calledWith('test'));
    });
  });
});
