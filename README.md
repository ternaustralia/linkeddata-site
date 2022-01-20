# TERN Linked Data Services Website source code.

> Live at https://linkeddata.tern.org.au.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The `master` branch on the remote repository is protected. All modifications must be performed on a separate branch and merged in via GitHub pull requests.

Tests and builds are automatically performed on each pull request "open" and "synchronisation".

Pull requests automatically build and deploy a preview version of the website to surge.sh.

A merge into the `master` branch automatically creates a containerised development version of the website. TERN's Flux will automatically deploy development versions to https://linkeddata-test.tern.org.au.

A production version is automatically triggered when a GitHub release is made. TERN's Flux will automatically deploy production versions to https://linkeddata.tern.org.au.

For more details on how the GitHub Actions workflows are set up, see [.github/workflows](.github/workflows).

### Installation

```
$ npm
```

### Local Development

```
$ npm start
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

It is useful to run this command to check if builds succeed correctly. Docusaurus will also check for broken links referencing within the website as well.

## Contact

Edmond Chuc  
e.chuc@uq.edu.au
