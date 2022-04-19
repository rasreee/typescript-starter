# TypeScript Starter

🚀 Basic Typescript starter for better DX. ⚡️ Built using: TypeScript, Jest, ESLint, Prettier, Husky, Lint-Staged, VSCode, Nodemon, and more.

### Philosophy

- Minimal
- 🚀 Production-ready

## Features

Developer experience first:

- 🎨 Chalk - Colorful logging
- ⚡️ Nodemon - Watch for file changes and live reload
- ⛑ TypeScript
- 🐶 Husky — For running scripts before committing
- 💖 Prettier — Code Formatter for consistent style
- 📄 Commitizen — To define a standard way of committing rules
- 🔍 ESLint — Find and fix problems in your code
- 🗂 Path Aliases — Import using the `@/` prefix
- 🧪 Jest - Test your code
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- 🛠️ Libary - Common utilities used for Typescript projects

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

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn test` — Run Jest tests
- `yarn test:watch` — Run Jest tests and watch for file changes
- `yarn test:types` — Validate code using TypeScript compiler.
- `yarn test:all` — Validate entire project by running the linter, Typescript compilation, tests, checking for build failure.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn reinstall` - Nukes node_modules and yarn.lock and re-installs dependencies
- `yarn fix:all` - Format and fix all auto-fixable ESLint errors

### Path Aliases

TypeScript are pre-configured with module path aliases. To import anything, use the `@/` prefix.

```ts
import { logger } from '@/lib/logger';
```

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---
