const githubPages = require('..');

module.exports = {
    plugins: [
        githubPages()
    ],
    githubPagesRepository: {
        repository: 'git@github.com:brillout/reframe-github-pages-test',
        branch: 'master', // optional, default is `master`
    },
};
