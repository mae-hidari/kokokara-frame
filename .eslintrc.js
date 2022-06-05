module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jasmine'],
  rules: {
    'no-useless-constructor': 0,
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'jasmine/no-spec-dupes': 'off',
        'jasmine/no-suite-dupes': 'off',
      },
      plugins: ['jasmine'],
      extends: 'plugin:jasmine/recommended',
      env: { jasmine: true },
    },
  ],
};
