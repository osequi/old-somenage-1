# somenage

A design system for Os Equi in React.

## Dev

### Add a new package

1. `lerna create <package-name>`
2. Remove `__tests__`
3. Add `tsconfig.json`
4. Update the `package.json`.
5. `lerna bootstrap`
6. Add code into `/src`
7. `yarn tsc`
8. `yarn test`
9. `yarn docs`
10. `yarn readme`

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
- This will generate the README from the compiled `.js`. Make sure first the `.ts` files ar ecompile dto `.js` the generate the README.
- If want to generate from `.ts` change the local task to : `"readme": "jsdoc2md --configure ../../jsdoc2md.json src/breakpoints.ts > README.md"`
- For now generating from `js` makes a better result than generating from `.ts`

#### Global API docs in HTML

- Run the global task: `"docs": "jsdoc -c jsdoc.json",`
