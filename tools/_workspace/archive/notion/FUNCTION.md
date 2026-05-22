**Script Breakdown**
The script is [tools/notion/sync-v2-en-canonical.js](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js). It is a full Notion sync pipeline for v2 docs, not just a row updater.

It serves these purposes:

1. Build canonical v2 EN navigation rows from `docs.json`.
2. Match canonical rows to existing Notion rows.
3. Create/update rows to reflect current navigation.
4. Move non-navigation rows to stale status.
5. Maintain required Notion schema/properties/options.
6. Generate/update structured page body blocks (Page Info + Review).
7. Emit CSV/JSON reports for auditability.
8. Respect row-level lock via `Leave Me` checkbox.

**Inputs**

1. Environment:

- `NOTION_API_KEY` required ([sync-v2-en-canonical.js:1362](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1362))
- `NOTION_DATABASE_ID` or `NOTION_WRITABLE_DATABASE_ID` ([sync-v2-en-canonical.js:1237](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1237))

2. Repo data:

- `docs.json` v2/en nav source ([sync-v2-en-canonical.js:240](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:240))
- MDX files for metadata/usefulness scoring ([sync-v2-en-canonical.js:577](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:577))

3. Optional QA reports used in page body snapshots:

- Link test report ([sync-v2-en-canonical.js:703](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:703))
- WCAG report ([sync-v2-en-canonical.js:735](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:735))
- Domain load report ([sync-v2-en-canonical.js:759](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:759))

**CLI Behavior**

1. Modes:

- `--dry-run` plans only
- `--write` performs Notion writes

2. Controls:

- stale tab name, content concurrency, sleep knobs, skip content sync, skip unchanged-body logic ([sync-v2-en-canonical.js:56](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:56))

**Core Data Model**
Each canonical row contains:

- `Page Name` (slug fallback)
- `Tab Group`, `Section Group`, `Sub Section`
- `Relative path URL`, live `URL`
- `Sidebar Title`
- `Navigation Order`
  ([sync-v2-en-canonical.js:285](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:285), [sync-v2-en-canonical.js:504](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:504))

**End-to-End Flow (main)**

1. Parse args, init Notion client, resolve data source/database IDs ([sync-v2-en-canonical.js:1360](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1360)).
2. Build canonical rows from `docs.json` traversal order and IA placement ([sync-v2-en-canonical.js:1376](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1376)).
3. Enrich canonical rows with `Sidebar Title` from frontmatter fallback chain: `sidebarTitle -> title -> slug` ([sync-v2-en-canonical.js:652](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:652)).
4. Load existing Notion rows and parse typed properties including `Page Status`, `Navigation Order`, `Sidebar Title`, and `Leave Me` ([sync-v2-en-canonical.js:1288](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1288)).
5. Match canonical rows to existing rows by:

- placement key first
- route fallback second
  ([sync-v2-en-canonical.js:1468](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1468))

6. Plan canonical actions:

- `create`, `update`, `noop`
- `leave-me-noop` when `Leave Me` is checked
  ([sync-v2-en-canonical.js:1512](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1512))

7. Plan legacy-placement cleanup for unmatched rows with old section/subsection data (adds `[MAPPING_REQUIRED]` note marker if Notes exists) ([sync-v2-en-canonical.js:1556](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1556)).
8. Plan stale actions for unmatched rows not in canonical key set:

- set `Tab Group = Stale` (or configured tab)
- set `Page Status = Not In Navigation`
- set large tail `Navigation Order`
  ([sync-v2-en-canonical.js:1587](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1587))

9. Ensure schema:

- `Sidebar Title` property
- `Navigation Order` property
- `Page Status` property + `Not In Navigation` option
- option ordering for `Section Group` and `Sub Section`
  ([sync-v2-en-canonical.js:1685](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1685))

10. In write mode:

- apply canonical create/update
- apply legacy clear
- apply stale updates
- apply schema option reorder
  ([sync-v2-en-canonical.js:1757](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1757))

11. Content sync (unless `--skip-content-sync`):

- regenerate two marker-bounded sections in each page body
- skip unchanged via structural signature
- skip rows with `Leave Me` checked
  ([sync-v2-en-canonical.js:1907](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1907), [sync-v2-en-canonical.js:1184](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1184))

12. Write run artifacts and summary, print run stats/hints ([sync-v2-en-canonical.js:2054](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:2054), [sync-v2-en-canonical.js:2126](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:2126)).

**What Gets Written to Notion**

1. Row properties:

- `Page Name`, `Tab Group`, `Section Group`, `Sub Section`
- `Relative path URL`, `URL`
- `Sidebar Title`, `Navigation Order`
  ([sync-v2-en-canonical.js:504](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:504))

2. Stale row properties:

- `Tab Group`, `Page Status`, `Navigation Order`
  ([sync-v2-en-canonical.js:1844](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1844))

3. Page body blocks:

- marker-delimited `Page Info`
- marker-delimited `Review (Manual)` toggles
  ([sync-v2-en-canonical.js:1064](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1064))

**`Leave Me` Behavior**
When `Leave Me` checkbox is true on a Notion row:

1. No canonical property update.
2. No legacy-placement cleanup.
3. No stale tab/status/order move.
4. No body content rewrite.
5. Counted in summary as `leaveMeProtectedRows`.
   ([sync-v2-en-canonical.js:25](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:25), [sync-v2-en-canonical.js:1512](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1512), [sync-v2-en-canonical.js:1587](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1587), [sync-v2-en-canonical.js:1934](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:1934), [sync-v2-en-canonical.js:2130](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:2130))

**Artifacts Produced**
Under `tools/notion/reports` each run writes:

1. `sync-v2-en-canonical-*.csv`
2. `sync-v2-en-legacy-*.csv`
3. `sync-v2-en-stale-*.csv`
4. `sync-v2-en-schema-*.csv`
5. `sync-v2-en-content-*.csv`
6. `sync-v2-en-summary-*.json`
   ([sync-v2-en-canonical.js:2054](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/notion/sync-v2-en-canonical.js:2054))

If you want, I can also produce a one-page “operator runbook” version of this with only: when to run, which mode, expected outputs, and failure triage.
