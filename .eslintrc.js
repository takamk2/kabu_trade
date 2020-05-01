module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['react', 'jest'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
