# Nx - Mmmmagic Issue Reproduction
While trying to build an Nx monorepo using the library [mmmagic](https://www.npmjs.com/package/mmmagic) (for detecting file MIME types),
I run into this issue:

```
> nx run test-mmmagic:serve

✘ [ERROR] Could not resolve "../build/Release/magic"

    node_modules/mmmagic/lib/index.js:1:20:
      1 │ var Magic = require('../build/Release/magic');
        ╵                     ~~~~~~~~~~~~~~~~~~~~~~~~

There was an error with the build. See above.
```

Changing the path to the absolute path also does not work.

## Reproduction Steps
1. Create a new empty Nx monorepo
2. `npm i typescript @nrwl/node mmmagic`
3. Add something consuming the mmmagic library in main.ts
4. `nx serve test-mmmagic:serve`
5. Observe the above error