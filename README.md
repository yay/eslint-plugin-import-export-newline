# eslint-plugin-import-export-newline

Eslint plugin to enforce placing import and export variables on separate lines

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```
or
```
$ yarn add eslint --dev
```

Next, install `eslint-plugin-import-export-newline`:

```
$ npm install eslint-plugin-import-export-newline --save-dev
```
or
```
$ yarn add eslint-plugin-import-export-newline --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-export-newline` globally.

## Usage

Add `eslint-plugin-import-export-newline` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-export-newline"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-export-newline/import-declaration-newline": "warn",
        "import-export-newline/export-declaration-newline": "warn"
    }
}
```

## Supported Rules

* Enforce placing import variables on separate lines (import-declaration-newline)
* Enforce placing export variables on separate lines (export-declaration-newline)

## For maintainers
AST explorer - https://astexplorer.net/#/gist/b6093767261d6a5bce76043dcea24bec/5fe761308f41936beaa30cbe7aef3a6f0283e11d




