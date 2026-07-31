# Contracts Redesign Regression Log

Date: 2026-04-03  
Branch: `docs-v2-dev` at `30715f5a805630fb9acc764af78b58893e575fdd`  
Last good baseline for the canonical contracts page: `59b6c908cc2219576f0558577a5170160dfb4a60`  
Regression commit: `16229bcf4d2e76d117239209ce81e258bc279c2a` on `2026-04-03 13:04:41 +1100`  
Regression commit subject: `feat(contracts): checkpoint redesign before docs-v2-dev rebase`  

## Current User Direction

This log supersedes the earlier assumption that the full contracts data experience should be restored to the canonical page.

Current requested target:

- revert the top `Danger` callout on the canonical contracts page
- revert the top cards on the canonical contracts page
- add the verifier/manual-verification content back to the canonical page
- source that verifier block from the new composable page, not from inline duplicated MDX
- do **not** put the contract data tables back on this page
- do **not** keep the verifier as a standalone public page

## Summary

The redesign was not a narrow refactor. It changed the page architecture, the page copy, the visible layout, the verifier placement, the table presentation, and the route model.

The regression is centered on commit `16229bcf4d2e76d117239209ce81e258bc279c2a`.

That commit:

- removed the on-page verifier/manual-verification experience from the canonical contracts page
- rewrote the top-of-page warning/status/cards surfaces
- removed the contract-overview explainer section
- downgraded table presentation from the `V2` table surfaces
- created a standalone verifier route
- left that standalone verifier route returning `404` in the current local preview despite still existing in source and nav

## Primary Regression Surface

### 1. The canonical contracts page was reauthored instead of narrowly repaired

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Baseline page facts:

- the page opened with a `Danger` warning and on-page verification anchors
- the page had two top horizontal cards with badges
- the page included the verifier widget and the no-trust on-chain walkthrough directly on-page
- the page included a `Livepeer Contract Overview` explainer accordion group
- the page then continued into the contract data surfaces

Current page facts:

- the `Danger` warning is gone
- the page opens with a redirect-style `Note`
- the top cards were replaced with a different four-card layout
- the verifier was moved out and replaced with an imported split page section
- the contract-overview section is gone
- a new bottom CTA was added

This exceeded the scope of a data-layer extraction or page-local cleanup.

### 2. The verifier was split into a standalone route and that route is broken locally

Files:

- canonical verifier composable: [`snippets/composables/pages/canonical/verify-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/verify-contract-addresses.mdx)
- standalone routed page: [`v2/about/resources/verify-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/resources/verify-contract-addresses.mdx)
- navigation source: [`docs.json`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs.json)

Confirmed behavior:

- the verifier content was split away from the canonical contracts page into a standalone route
- `docs.json` still includes the verifier route
- the routed file still exists on disk
- local preview at `http://localhost:3333/v2/about/resources/verify-contract-addresses` currently returns `404`

This is both an IA regression and a runtime failure.

### 3. The top reader-facing UI was materially changed

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Changed rendering elements:

- `Danger` callout removed
- verification anchor links removed from the opening warning
- workflow/provenance `Tip` copy rewritten
- two original horizontal cards removed
- badge-bearing card titles removed
- replacement four-card block introduced

Original top cards:

- `Livepeer Protocol Source` with `Commit Pinned`
- `Livepeer Contracts Arbiscan` with `On-chain Verified`

Current replacement cards:

- `Protocol Source`
- `Bridge Source`
- `Livepeer On Arbiscan`
- `Blockchain Contracts Guide`

This is not a styling-only change. It changes the visible information hierarchy and the contract of the page.

### 4. The verifier/manual-verification experience was removed from its approved position

Files:

- baseline experience formerly embedded in [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)
- current extracted content in [`snippets/composables/pages/canonical/verify-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/verify-contract-addresses.mdx)

Changed rendering elements:

- `## Verifier Widget: Verify Contract Address` was removed from the canonical page
- `How this widget works` accordion was removed from the canonical page
- bordered `ContractVerifier` widget block was removed from the canonical page
- `### No-Trust On-chain Address Verification` was removed from the canonical page
- `See steps to verify an address on-chain` accordion was removed from the canonical page

The current user direction is not to keep this as a standalone page. The approved recovery target is to keep it as a composable section and import it back into the canonical contracts page.

### 5. The contract-overview explainer section disappeared

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Removed section:

- `## Livepeer Contract Overview`

Removed explainer accordions:

- `Core`
- `Token`
- `Governance`
- `Bridge`
- `Utility`
- `Migration`

This is a reader-facing content loss, not a data-binding change.

### 6. The data sections were also rewritten, not just restyled

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Reader-facing changes included:

- `Active Livepeer Contract Addresses` renamed to `Active Contract Addresses`
- `Active Proxy Contract Addresses` renamed to `Active Proxy Addresses`
- `Published Non-Active Contracts` promoted from `###` to `##`
- active-state badge and verified timestamp line removed
- workflow-verification accordion removed
- explanatory copy for active, proxy, non-active, and historical sections rewritten
- bottom `Verify These Addresses Yourself` CTA added

Why this matters:

- these are visible product/content changes
- they were not required to move helpers or data shaping out of MDX

### 7. Table presentation regressed at the same time

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Confirmed change:

- `SearchTableV2` / `DynamicTableV2` were replaced with `SearchTable` / `DynamicTable`

This aligned with the user-reported visible regressions:

- badges on contract cards removed
- table styling changed
- table rendering no longer matched the recent approved visual checkpoint

This was not just an implementation cleanup. It changed the visible UI.

### 8. The bottom of the page changed in meaning as well as layout

File: [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx)

Changed rendering elements:

- source-code cards were rewritten
- `Contracts Proof Inputs` and `Livepeer on Arbiscan` were replaced with different cards and different descriptions
- a new `Verify These Addresses Yourself` CTA section was added at the bottom

The old page did not need that CTA because verification already happened on-page.

## Actual Reader-Facing Regressions

This is the exact visible/UI copy delta on the canonical contracts page, excluding imports, helper plumbing, and data props.

Removed:

- opening `Danger` warning
- verification anchor links from the opening warning
- original workflow/provenance `Tip` wording
- original two top cards with badges
- verifier widget section heading
- `How this widget works` accordion
- bordered verifier widget block
- no-trust on-chain verification section
- `Livepeer Contract Overview` section
- active-state badge
- verified timestamp line
- workflow-verification accordion
- original active/proxy/non-active/historical copy
- original source-code card set

Changed:

- section headings
- section order
- top cards layout
- source-code card content
- table styling and table component surfaces
- visible explanatory copy throughout the data sections

Added:

- redirect-style note to a standalone verifier page
- replacement four-card hero block
- bottom `Verify These Addresses Yourself` CTA

## Regression Against Current User Direction

The current user direction is narrower and more precise than the earlier recovery assumption.

The canonical contracts page should now be:

- the restored `Danger` callout
- the restored original top cards with badges
- the restored verifier/manual-verification block
- the restored contract-overview explainer block
- the restored contract source-code cards

The verifier content should come from:

- [`snippets/composables/pages/canonical/verify-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/verify-contract-addresses.mdx)

It should be used as:

- a composable imported into the canonical contracts page

It should **not** remain as:

- a standalone public page

The canonical contracts page should **not** reintroduce:

- active address tables
- proxy address tables
- non-active address tables
- historical address tables

## Required Remediation

1. Restore the original opening `Danger` callout in [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx).
2. Restore the original two top cards, including the `Commit Pinned` and `On-chain Verified` badges, in [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx).
3. Keep the verifier/manual-verification content as a composable in [`snippets/composables/pages/canonical/verify-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/verify-contract-addresses.mdx), but trim it to the on-page section only:
   - `Verifier Widget: Verify Contract Address`
   - `How this widget works`
   - bordered `ContractVerifier`
   - `No-Trust On-chain Address Verification`
   - on-chain verification accordion
4. Import that verifier composable back into [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx) instead of duplicating the content inline.
5. Restore the original `Livepeer Contract Overview` section in [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx).
6. Restore the original `Contract Source Code` cards in [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx).
7. Remove the bottom `Verify These Addresses Yourself` CTA from [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx).
8. Do **not** restore the contract address tables to the canonical contracts page.
9. Remove the standalone verifier route from public nav/routing once the composable is re-embedded, because it is both unwanted and currently failing as a `404`.

## Bottom Line

This was not just a table-style regression.

The redesign changed:

- page structure
- warning surfaces
- card surfaces
- verification placement
- explainer content
- source-card content
- table presentation
- route architecture

The correct recovery target is now clear:

- restore the original narrative and verification shell of the canonical contracts page
- keep the verifier as a composable
- do not put the contract data tables back on that page
- remove the broken standalone verifier route
