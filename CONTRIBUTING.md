# Contributing to the Repository

Thanks for taking the time to contribute !
You can start by reading our first.

## Setup

Install the dependencies

```shell
yarn
```

This project uses [Yarn](https://yarnpkg.com/). To start development run

```shell
yarn start
```

Don't forget to setup your IDE with `eslint` and `prettier`.

## Typing

The whole project is built with JavaScript.
Prefer [using ant designs for fasting build](https://ant.design/).

## Projet structure

The entry point is `src/index.js`.

- **components** contains more complex components with business logic.
- **widgets** contains all the atomic and generic components of the Project.
- **hooks** contains generic hooks.
- **utils** contains internal utils functions. It's not meant to be exported.
- **state** contains internal store.
- **helpers** contains fetch helper for api.

## Tests

Run tests with `yarn test`.
When you create a component, don't forget to create a snapshot test.
