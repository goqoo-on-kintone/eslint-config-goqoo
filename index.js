module.exports = {
  env: {
    'browser': true,
    'node': true,
    'jest/globals': true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'prettier'],
  globals: {
    kintone: true,
    cybozu: true,
  },
  plugins: ['es'],
  parserOptions: { ecmaVersion: 2021 },
  rules: {
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'spaced-comment': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'es/no-dynamic-import': 'error',
  },
}
