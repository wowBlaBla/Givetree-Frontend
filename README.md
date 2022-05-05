# GiveTree - Ares

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

**Welcome to Ares!**

This project is a monorepo to house all the Front End Applications within GiveTree. Shared packages can be found in `packages` and applications in `apps`. You can read more on the project structure in the section below.

## Projects / Applications / Environments

| Branch   | Environment | Name        |
| -------- | ----------- | ----------- |
| `master` | `dev`       | Development |

| Applications   | HTTP | Environment |
| -------------- | ---- | ----------- |
| platform       | ...  | `dev`       |
| platform (TBD) | ...  | `stg`       |
| platform (TBD) | ...  | `prd`       |
| admin (TBD)    | ...  | `dev`       |
| admin (TBD)    | ...  | `stg`       |
| admin (TBD)    | ...  | `prd`       |

## Getting Started

Clone this project from GitHub:

```bash
git clone https://github.com/Give-Tree/ares.git
```

Install project dependencies:

```bash
yarn install
```

Next, `cd` into the project you would like to develop and execute `yarn start`. For example:

```bash
cd /apps/platform
yarn start
```

## Project Structure

This project uses `lerna` to manage multiple packages/applications in a single repository.

The general structure looks like this:

```
.
├── apps
│   ├── admin
│   └── platform
│       ├── cypress
│       ├── components
│       ├── pages
│       └── styles
├── packages
│   └──
├── lerna.json
├── package.json
├── README.md
└── tsconfig.json


10 directories, 19 files
```

## Lerna

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm

We use `lerna` in combination with `yarn` workspaces. All packages are scoped with `@givetree-ares`.

You can create a new package by executing these commands:

```bash
mkdir packages/<package-name> && cd packages/<package-name>
yarn init -y

...
```

`...` represents all the additional work necessary to create the package. Such as configuring the `package.json`
installing dependencies, actual implementation, and so on.

Install new package on existing apps:

```bash
lerna add @givetree-ares/<package-name> --scope=@givetree-ares/<app-name> --exact
```

Install dependencies:

```bash
lerna add <dependency> --scope=@givetree-ares/<package-name> --exact [-D]
```

Common `dev` dependencies shared across multiple packages are installed at the root of the project:

```bash
yarn add <package> --exact [-D] -W
```

_Note :warn Do not install common `dev` dependencies at the root!_

Clear and reinstall everything:

```bash
lerna clean && yarn
```
