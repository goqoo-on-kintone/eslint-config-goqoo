module.exports = {
  env: {
    browser: true,
    node: true,
    // 'jest/globals': true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    // 'jest'
  ],
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jest/recommended',
    'prettier',
  ],
  globals: {
    kintone: true,
    cybozu: true,
  },
  parserOptions: { ecmaVersion: 2021 },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-irregular-whitespace': ['error', { skipTemplates: true }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
