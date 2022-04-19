const path = require('path');
const { getDirectoryNames, getModuleAliasMap } = require('./jest.helpers.js');

const tsconfigJson = require('./tsconfig.json');

const DIRS_TO_IGNORE = ['__fixtures__', 'build', 'node_modules'];

const modulePathAliases = getModuleAliasMap({
  modules: getDirectoryNames(path.join(__dirname, 'src')).filter(dir => DIRS_TO_IGNORE.every(dirToIgnore => dir !== dirToIgnore)),
  prefix: '@/',
  baseUrl: tsconfigJson.compilerOptions.baseUrl,
});

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  modulePathIgnorePatterns: DIRS_TO_IGNORE,
  runner: 'groups',
  moduleNameMapper: modulePathAliases,
  setupFilesAfterEnv: [],
  testPathIgnorePatterns: DIRS_TO_IGNORE.map(dir => `<rootDir>/${dir}`),
  watchPlugins: [
    [
      'jest-watch-typeahead/filename',
      {
        key: 'k',
        prompt: 'do something with my custom prompt',
      },
    ],
    'jest-watch-typeahead/testname',
  ],
};
