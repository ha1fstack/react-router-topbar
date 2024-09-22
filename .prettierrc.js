const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
};

module.exports = {
  ...overridableDefaults,
  singleQuote: false,
  plugins: ['prettier-plugin-packagejson'],
};
