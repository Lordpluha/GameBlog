module.exports = {
  extends: ['@gameblog/eslint-config/Nest'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  }
}
