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
    'no-useless-constructor': 'off',
    'import/no-duplicates': 'off',
    'dot-notation': 'off',
    camelcase: [
      'off',
      {
        allow: ['ja_JP'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      rules: {
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        strict: 'off',
        'import/first': 'off',
        'lines-around-directive': 'off',
        node: 'off',
      },
      plugins: ['@angular-eslint/template'],
    },
    {
      files: ['*.html'],
      plugins: ['html'],
    },
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'jasmine/no-spec-dupes': 'off',
        'jasmine/no-suite-dupes': 'off',
        'jasmine/new-line-before-expect': 'off',
      },
      plugins: ['jasmine'],
      extends: 'plugin:jasmine/recommended',
      env: { jasmine: true },
    },
  ],
};
