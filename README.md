# TypeScript Starter

๐ Basic Typescript starter for better DX. โก๏ธ Built using: TypeScript, Jest, ESLint, Prettier, Husky, Lint-Staged, VSCode, Nodemon, and more.

### Philosophy

- Minimal
- ๐ Production-ready

## Features

Developer experience first:

- ๐จ Chalk - Colorful logging
- โก๏ธ Nodemon - Watch for file changes and live reload
- โ TypeScript
- ๐ถ Husky โ For running scripts before committing
- ๐ Prettier โ Code Formatter for consistent style
- ๐ Commitizen โ To define a standard way of committing rules
- ๐ ESLint โ Find and fix problems in your code
- ๐ Path Aliases โ Import using the `@/` prefix
- ๐งช Jest - Test your code
- ๐ Commitlint โ Make sure your commit messages follow the convention
- ๐ซ lint-staged โ To run ESLint and Prettier against staged Git files
- ๐ ๏ธ Libary - Common utilities used for Typescript projects

# Quick Start

Create a project with this template:

```
git clone --depth=1 https://github.com/rasreee/typescript-starter.git <my-project-name>
cd <my-project-name>
yarn install
```

Run for development (w/ live reload):

```
yarn dev
```

Run for production:

```
yarn build
yarn start
```

## Project Structure

| Name             | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| **.vscode**      | VSCode settings for launching and debugging and working well with Typescript |
| **src**          | Source code to be built                                                      |
| **src/lib**      | Common utilities used for Typescript projects                                |
| **src**/index.ts | Entry point to app                                                           |

### Scripts

Just some of the scripts in [package.json](package.json).

- `yarn dev` โ Starts the application in development mode at `http://localhost:3000`.
- `yarn build` โ Creates an optimized production build of your application.
- `yarn start` โ Starts the application in production mode.
- `yarn test` โ Run Jest tests
- `yarn test:watch` โ Run Jest tests and watch for file changes
- `yarn test:types` โ Validate code using TypeScript compiler.
- `yarn test:all` โ Validate entire project by running the linter, Typescript compilation, tests, checking for build failure.
- `yarn lint` โ Runs ESLint for all files in the `src` directory.
- `yarn format` โ Runs Prettier for all files in the `src` directory.
- `yarn reinstall` - Nukes node_modules and yarn.lock and re-installs dependencies
- `yarn fix:all` - Format and fix all auto-fixable ESLint errors

### Path Aliases

TypeScript are pre-configured with module path aliases. To import anything, use the `@/` prefix.

```ts
import { logger } from '@/lib/logger';
```

### License

Licensed under the MIT License, Copyright ยฉ 2022

See [LICENSE](LICENSE) for more information.

---
