# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The website automatically deploys on new commits to the `master` branch.

### Installation

```
$ npm
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Running tests

```
npm test
```

You can use ES6 module imports in your tests. We have set this up following the unmarked answer from https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export#answer-59718259.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
