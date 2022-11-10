"use strict";
const exportDeclarationNewline = require('./rules/export-declaration-newline');
const importDeclarationNewline = require('./rules/import-declaration-newline');

module.exports = {
  rules: {
    'export-declaration-newline': exportDeclarationNewline,
    'import-declaration-newline': importDeclarationNewline,
  },
  configs: {
    recommended: {
      rules: {
        'eslint-plugin-import-export-newline/export-declaration-newline': 'warn',
        'eslint-plugin-import-export-newline/import-declaration-newline': 'warn',
      },
    },
  },
};
