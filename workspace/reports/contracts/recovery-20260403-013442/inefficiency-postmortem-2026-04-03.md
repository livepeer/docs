# Contracts Recovery Inefficiency Postmortem

- Logged: 2026-04-03T03:17:42+11:00
- Scope: contracts-only recovery
- Worktree: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`

## Inefficiencies

- I treated browser validation as a blocker when Mint dev and the IDE were already showing the real failures.
- I spent time designing a validator and harness path before fixing missing imports and MDX parse errors in the page files.
- I introduced extra route data and helper layers instead of keeping the pages on the canonical contracts data source.
- I compared broken contracts implementations to other broken contracts implementations instead of switching immediately to working repo patterns like gateways and solutions.
- I treated stale or misaligned unit-test architecture expectations as if they were target-state truth.
- I optimized for proof structure before restoring basic page render and layout.
- I overused long-running checks for problems that had immediate static error signals.
- I allowed the scope to drift into architecture cleanup while the page was still broken.
- I violated the two-attempt redesign rule by repeating the same category of fix.

## Broader Failures Beyond Debug Order

- I did not follow the repo's working Mintlify patterns first.
- I did not treat the canonical contracts data file as the primary page boundary early enough.
- I let stale tests and broken intermediate architecture influence design decisions.
- I failed to prioritize page render and style restoration over surrounding infrastructure work.
- I did not respond fast enough to direct user corrections about scope, tools, and repo patterns.
- I kept iterating after the user had already identified the real failure signals.
- I did not push slower checks and exploratory work to agents early enough.
- I allowed temporary design ideas to become live file changes before validating them against working repo patterns.
- I did not persist the wasted-work log and operating corrections immediately.
- I consumed time on structural cleanup while the user-facing contracts pages were still visibly broken.

## Simple Signals I Should Have Acted On First

- Mint dev warning: missing `/snippets/composables/pages/canonical/data/livepeer-contract-addresses-page-data.js`
- Mint dev warning: missing `/v2/about/livepeer-protocol/data/blockchain-contracts-page-data.js`
- Console and runtime error: `getActiveTableItems is not defined`
- Mint parse error: `Could not parse expression with acorn`
- IDE Problems panel showing MDX export and top-level expression issues
- The repo pattern mismatch: no healthy page was using the broken helper layout I kept iterating on

## Tests And Checks That Took Time When Faster Signals Already Existed

- `operations/tests/playwright-contract-addresses.js`
- `operations/tests/playwright-blockchain-contracts.js`
- `operations/tests/integration/mdx-component-runtime-smoke.js`
- Repeated browser and server-manager runs just to learn what Mint dev already said
- Repeated `curl` and render checks before clearing the Mint parse and import errors
- Unit-test architecture checks before page render was stable
- Repeated harness and server-port validation work before fixing the MDX files themselves

## Faster Test Order That Should Have Been Used

- `mint dev` output first
- IDE Problems first
- One fast console or error check first
- One direct compile and render confirmation only after static errors were cleared

## Places I Got Stuck And Looped

- Loop 1: browser, harness, and server validation instead of fixing import failures
- Loop 2: creating helper `.js` and `.jsx` route data modules, then changing them again, instead of using the canonical source directly
- Loop 3: trying to satisfy failing architecture tests before matching working repo patterns
- Loop 4: checking rendered HTML repeatedly while Mint was still reporting parse errors
- Loop 5: fixing symptoms around runtime undefined values instead of correcting the page data boundary
- Loop 6: comparing contracts pages to contracts pages even though both were the broken surface
- Loop 7: making MDX top-level declarations in a way Mint rejected, then rechecking runtime instead of correcting MDX structure immediately

## Learned Constraints

- For this repo, the order must be: repo pattern, canonical data source, MDX and import validity, Mint dev and IDE errors, then fast render confirmation.
- Browser automation is not the primary diagnostic tool for a broken Mintlify MDX page.
- If a page needs non-canonical helper files just to render, the implementation is probably wrong.
- After two failed fixes in the same direction, I need to stop and redesign instead of iterating one more time.
- Direct user corrections about visible failures and repo patterns must immediately change the execution path.
- Contracts-only recovery means the page and canonical data shape come before workflow or harness work.
