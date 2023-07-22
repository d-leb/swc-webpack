# swc-webpack

**This repository will no longer be maintained. If you are interested in a scaffold that uses SWC, I would suggest trying [Vite](https://github.com/vitejs/vite).**

A library for compiling TypeScript and JavaScript using SWC and Webpack. SWC is an extensible Rust-based platform used for both compilation and bundling. Webpack is static module bundler.
This library can bootstrap a project with default configurations and allows you to customize settings in a non-proprietary way. This library is designed to be used as a dependency in a
project. It is not designed to be used as a standalone project. If you have suggestions or have any problems, please open an issue on the
[d-leb/swc-webpack issues board](https://github.com/d-leb/swc-webpack/issues).

To use this library, add the library to your project as a ***devDependency***.

Install with npm:

```
npm install --save-dev @d-leb/swc-webpack
```

Install with yarn:

```
yarn add -D @d-leb/swc-webpack
```

Add the following scripts to your project's package.json file.

```
  "scripts": {
    "analyze": "swc-webpack analyze",
    "build": "swc-webpack build",
    "defaults": "swc-webpack defaults",
    "start": "swc-webpack start"
  },
```

Create your SWC, Webpack, Browserslist, and TypeScript configuration files by running the following command.

Create default configuration files in npm:

```
npm run defaults
```

Create default configuration files in yarn:

```
yarn defaults
```

Update the following config files located in the root of your project to suit your needs:

| Variable Name | Description |
| --- | --- |
| .browserslistrc | Settings for Browserslist configuration |
| .swcrc | Settings for SWC configuration |
| tsconfig.json | Settings for TypeScript compilation used by SWC |

Update the following webpack override config files located found in ```.swc-webpack``` to suit your needs for:

| Variable Name | Description |
| --- | --- |
| .webpack.analyze.config.mjs | Webpack Bundle Analyzer |
| .webpack.base.config.mjs | All environments |
| .webpack.devel.config.mjs | Development environment |
| .webpack.prod.config.mjs | Production environment |

Using npm or yarn you can run the following commands.

### start

The Development environment will be started and your default web browser should open or you can open any web browser on your development machine and visit
[http://localhost:3000](http://localhost:3000) to view it in the browser.

### build

A complete build is generated and placed in the ***build*** folder.

### analyze

Chunk and module sizes and entry points are calculated and displayed in your default web browser. This is useful for identifying which libraries are
taking up the most space.

### defaults

Default SWC, Browserslist, TypeScript configs are placed in the root directory of the project. Webpack override configs are placed in the .swc-webpack directory.

## Getting Started with library development

These instructions will get your copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

NodeJS is required to run commands and scripts. Both software and installation instructions can be found at [NodeJS.org](https://nodejs.org/). Using the LTS version is recommended.

Nvm is used as the node version manager to ensure the correct version of NodeJS is used with this project. For specific installation instructions, visit the
[nvm-sh/nvm repo](https://github.com/nvm-sh/nvm) and follow the instructions for installation. For Windows, you will need to install Windows WSL or use the bash system installed with git and manually
add the ~/.nvm folder to your user PATH and .bash_profile file. If you choose to not use nvm, you will need to manually install the correct version of NodeJS.

Yarn is used as the package manager and to initiate scripts. You can install Yarn globably by running the command below after you have NodeJS installed.

```
npm install -g yarn
```

### Installing

Install the specific NodeJS version dependencies.

```
nvm install
nvm use
npm install -g npm
```

Setup package dependencies.

```
yarn install
```

Be sure to install recommended extensions for VSCode. The project workspace settings are already pre-configured. This will allow VCode to automatically format your code.

## Linting

Github will automatically lint the project before allowing a PR to be merged. You can manually run all tests by running the following script.

```
yarn lint
```

## Built With

- [Browserslist](https://github.com/browserslist/browserslist) - Used to determine the browser support for a project
- [DotEnv Webpack](https://github.com/mrsteele/dotenv-webpack/) - Environment variables webpack plugin
- [ESLint](https://eslint.org/) - Code quality inspector
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [SWC](https://swc.rs/) - SWC is an extensible Rust-based platform used for both compilation and bundling
- [Webpack](https://webpack.js.org/) - Static module bundler
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer/) - Visualize size of webpack output files with an interactive zoomable treemap
- [Yarn](https://yarnpkg.com/) - Package management

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

Patch level is automatically updated on every merge into the develop branch.

## Authors

- **David LeBlanc** - _Initial work_ - [d-leb](https://github.com/d-leb)

See also the list of [contributors](https://github.com/d-leb/swc-webpack/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
