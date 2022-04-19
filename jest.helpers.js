const path = require('path');
const fs = require('fs');

const getDirectoryNames = pathname => {
  return fs.readdirSync(pathname).filter(item => {
    const stats = fs.statSync(path.join(pathname, item));

    return stats.isDirectory();
  });
};

const getModuleAliasMap = ({ modules, prefix = '', baseUrl = 'src' }) => {
  return modules.reduce(
    (result, current) => ({
      ...result,
      [`^${prefix}` + current + '/(.*)$']: '<rootDir>/' + path.join(baseUrl, current) + '/$1',
    }),
    {},
  );
};

module.exports = { getModuleAliasMap, getDirectoryNames };
