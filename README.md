# Greenspark products

This project uses [Vue 3 + Typescript](https://github.com/vuejs/create-vue) and [Pinia Store](https://pinia.vuejs.org/) for client side state managment. Component unit tests are written with [Testing Library Vue](https://testing-library.com/docs/vue-testing-library/intro/) and [Vitest](https://vitest.dev/).

## Folder structure

```
src
|-- assets           # Asset files used in the application
   |-- styles        # Global styles
   |-- images        # Image files
|-- components       # Re-usable components for the entire app
   | -- tests        # Component unit tests
|-- stores           # Pinia store files
|-- types            # Typescript entities
...
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
## Install and use latest node version
nvm use 18.16.0

## Install required packages
npm install

## Run development enviroment
npm run dev

## Type-check, compile and minify for production
npm run build

## Run unit tests
npm run test:unit

## Lint with eslint
npm run lint
```
