module.exports = {
  trailingComma: 'all',
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  importOrder: [
    '^@angular/(.*)$',
    '^(.*)ngrx(.*)$',
    '^(.*)module(.*)$',
    '^(.*)service(.*)$',
    '^(.*)guard(.*)$',
    '^(.*)pipe(.*)$',
    '^rxjs/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    'typescript',
    'classProperties',
    '["decorators", { "decoratorsBeforeExport": true }]',
  ],
};
