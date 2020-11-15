# somenage

A design system for Os Equi in React.

## Devops

### TS to JS

- Run the global task: `"tsc": "lerna exec --parallel -- tsc --watch"`
- Which needs the local `tsconfig.json` files for the relative `outDir` (`./lib`)
- The global `tsconfig.json` must exclude all `.test.ts` files, otherwise the tests will be compiled too.

### Test

- Run the global task: `"test": "yarn jest --watchAll",`

### Docs

#### README.md for every package

- Run the global task: `"readme": "lerna exec --parallel -- yarn readme",`

### Global API docs in HTML

- Run the global task: `"docs": "jsdoc -c jsdoc.json",`
