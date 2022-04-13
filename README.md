# Give Tree - Ares

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg)](https://github.com/airbnb/javascript)

**Welcome to Ares!**

This project is a monorepo to house all the Front End Applications within Give Tree. Shared packages can be found in `packages` and applications in `apps`. You can read more project structure in the section below.

## Projects / Applications / Environments

| Branch       | Environment       | Name         |
| ------------ | ----------------- | ------------ | 
| `master`     | `dev`             | Development  |


| Applications          | HTTP                          | Environment            |
| --------------------- | ----------------------------- | ---------------------- |
| marketplace           | ...                           | `dev`                  | 
| marketplace (TBD)     | ...                           | `stg`                  | 
| marketplace (TBD)     | ...                           | `prd`                  |
| admin (TBD)           | ...                           | `dev`                  |
| admin (TBD)           | ...                           | `stg`                  |
| admin (TBD)           | ...                           | `prd`                  |


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
cd /apps/customer
yarn start
```

## Project Structure

This project uses `lerna` to manage multiple packages/applications in a single repository.

This general structure looks like this:

```
.
├── README.md
├── cypress.json
├── lerna.json
├── packages
│   ├── ui
│   └── utils
├── tsconfig.json
└── apps
    ├── admin
    └── marketplace
        └── cypress
            ├── fixtures
            ├── integration
            ├── plugins
            └── support

10 directories, 19 files
```

## Lerna

> Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm

We use `lerna` in combination with `yarn` workspaces. All packages are scoped with `@givetree-area`.

You can create a new package by executing these commands:

```bash
mkdir packages/<pkg-name> && cd packages/<pkg-name>
yarn init -y

...

lerna add @givetree-ares/<pkg-name> --scope=@givetree-ares/<pkg-name> --exact
```

`...` represents all the additional work necessary to create the package. Such as configuring the `package.json`
installing dependencies, actual implementation, and so on.

Install dependencies:

```bash
lerna add <dependency> --scope=@givetree-ares/<pkg-name> [--exact] [-D]
```

Common `devDep` dependencies shared across multiple packages are installed at the root of the project:

```bash
yarn add <package> [--exact] [-D] -W
```

_Note :warn Do not install common `dev` dependencies at the root!_

Clear and reinstall everything:

```bash
lerna clean && yarn
```
