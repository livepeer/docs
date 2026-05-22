# SME Audit: `integrations` concern

&gt; 29 scripts | Generated 2026-05-18
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

<CustomDivider />

## validator (2)

### niche: `language-translation` (2)

#### `check-translation-freshness.js`

- **Path:** `operations/scripts/validators/content/language-translation/check-translation-freshness.js`
- **Purpose:** content:translation-staleness
- **Description:** Compares modification dates of source pages to translations, flags stale translations
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, cron -> v2/, v2/es/, v2/fr/, v2/cn/ -> exit-code, stdout:stale-translations
- **Usage:** `node operations/scripts/validators/content/language-translation/check-translation-freshness.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `test-mintlify-version-language-toggle.js`

- **Path:** `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js`
- **Purpose:** feature:translation
- **Description:** test mintlify version language toggle
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** read-only
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/i18n/test-mintlify-version-language-toggle.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

## integrator (26)

### niche: `data` (12)

#### `blockchain-page-spec.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/blockchain-page-spec.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: blockchain-page-spec
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `branch-watch.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/branch-watch.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: branch-watch
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `catalog-config.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/catalog-config.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: catalog-config
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `constants.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/constants.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: constants
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-05-04
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `incidents.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/incidents.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: incidents
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `pipeline.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/pipeline.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: pipeline
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-05-04
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `solidity-parser.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/solidity-parser.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: solidity-parser
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `spec.js`

- **Path:** `operations/scripts/integrators/content/data/contracts/spec.js`
- **Purpose:** content:contract-data
- **Description:** Contract data pipeline module: spec
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual -> contract data sources -> contract data files
- **Usage:** `Internal module — imported by fetch-contract-addresses.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `fetch-external-docs.sh`

- **Path:** `operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh`
- **Purpose:** # @description Fetches upstream markdown from external Livepeer repositories, sanitizes it for MDX, and writes shared page composables under snippets/composables/pages/shared/.
- **Description:** Fetches upstream markdown from external Livepeer repositories, sanitizes it for MDX, and writes shared page composables under snippets/composables/pages/shared/.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`, `validator-health-check-broken-links.yml`, `validator-health-check-page-rendering.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `bash operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `fetch-lpt-exchanges.sh`

- **Path:** `operations/scripts/integrators/content/data/fetching/fetch-lpt-exchanges.sh`
- **Purpose:** # @description LPT exchange data fetcher — pulls exchange listing data for LPT token pages
- **Description:** LPT exchange data fetcher — pulls exchange listing data for LPT token pages
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `bash operations/scripts/integrators/content/data/fetching/fetch-lpt-exchanges.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `fetch-openapi-specs.sh`

- **Path:** `operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh`
- **Purpose:** # @description OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages
- **Description:** OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `bash operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `convert-rss-to-mdx.js`

- **Path:** `operations/scripts/integrators/content/data/transforms/convert-rss-to-mdx.js`
- **Purpose:** * @description RSS-to-MDX converter — imports RSS feed items and converts to MDX page format
- **Description:** RSS-to-MDX converter — imports RSS feed items and converts to MDX page format
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/integrators/content/data/transforms/convert-rss-to-mdx.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

### niche: `language-translation` (14)

#### `generate-localized-docs-json.js`

- **Path:** `operations/scripts/integrators/content/language-translation/generate-localized-docs-json.js`
- **Purpose:** * @description Locale docs.json generator — produces localised docs.json variants from route-map and source docs.json
- **Description:** Locale docs.json generator — produces localised docs.json variants from route-map and source docs.json
- **Workflow callers:** `integrator-copy-update-translations.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** on-demand, translation pipeline)
- **Usage:** `node operations/scripts/integrators/content/language-translation/generate-localized-docs-json.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `common.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/common.js`
- **Purpose:** feature:translation
- **Description:** i18n shared utilities — common helper functions for translation pipeline
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/common.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `config.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/config.js`
- **Purpose:** feature:translation
- **Description:** i18n configuration — language codes, locale paths, translation settings
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/config.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `docs-json-localizer.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/docs-json-localizer.js`
- **Purpose:** feature:translation
- **Description:** docs.json localiser engine — transforms docs.json navigation for locale variants
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/docs-json-localizer.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `docs-routes.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/docs-routes.js`
- **Purpose:** feature:translation
- **Description:** docs route resolver — maps page paths to locale-aware routes
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/docs-routes.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `mdx-parser.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/mdx-parser.js`
- **Purpose:** feature:translation
- **Description:** MDX parser for i18n — extracts translatable content blocks from MDX
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/mdx-parser.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `mdx-translate.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/mdx-translate.js`
- **Purpose:** feature:translation
- **Description:** MDX translation engine — applies translations to MDX content blocks
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/mdx-translate.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `path-utils.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/path-utils.js`
- **Purpose:** feature:translation
- **Description:** Path utilities for i18n — locale-aware path resolution and mapping
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/path-utils.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `provenance.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/provenance.js`
- **Purpose:** feature:translation
- **Description:** Translation provenance tracker — records source, timestamp, and provider for each translated segment
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/provenance.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `provider-mock.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/provider-mock.js`
- **Purpose:** feature:translation
- **Description:** Mock translation provider — returns placeholder translations for testing without API calls
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/provider-mock.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `provider-openrouter.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/provider-openrouter.js`
- **Purpose:** feature:translation
- **Description:** OpenRouter translation provider — calls OpenRouter API for actual translations
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/provider-openrouter.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `providers.js`

- **Path:** `operations/scripts/integrators/content/language-translation/lib/providers.js`
- **Purpose:** feature:translation
- **Description:** Provider registry — selects translation provider (OpenRouter or mock) based on configuration
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** _(unset)_
- **Pipeline:** indirect — library module
- **Usage:** `node operations/scripts/i18n/lib/providers.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `translate-docs.js`

- **Path:** `operations/scripts/integrators/content/language-translation/translate-docs.js`
- **Purpose:** * @description Translation generator — translates v2 MDX pages to target languages via OpenRouter API
- **Description:** Translation generator — translates v2 MDX pages to target languages via OpenRouter API
- **Workflow callers:** `integrator-copy-update-translations.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** on-demand, translation pipeline)
- **Usage:** `node operations/scripts/integrators/content/language-translation/translate-docs.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

#### `validate-generated.js`

- **Path:** `operations/scripts/integrators/content/language-translation/validate-generated.js`
- **Purpose:** * @description Generated localisation validator — checks generated translated MDX files and route-map outputs for integrity
- **Description:** Generated localisation validator — checks generated translated MDX files and route-map outputs for integrity
- **Workflow callers:** `integrator-copy-update-translations.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/integrators/content/language-translation/validate-generated.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />

## dispatch (1)

### niche: `data` (1)

#### `run-solutions-social-fetch.js`

- **Path:** `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Local dispatcher for all social-feed integrators. Loads .env, runs selected fetchers with --dry-run support. Mirrors dispatch-copy-update-social-feeds.yml for local testing and upgrades.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** dispatch
- **Pipeline:** manual → .env + product-social-config.json → operations/scripts/integrators/copy/social-feeds/fetch-*.js → snippets/data/social-feeds/*.jsx + snippets/data/social-feed-solutions/{product}/*.jsx
- **Usage:** `node operations/scripts/dispatch/content/data/run-solutions-social-fetch.js [--mode forum,youtube] [--dry-run] [--env path/to/.env] [--skip discord]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

<CustomDivider />


## Orphan summary (24)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js` — infrastructure:data-feeds
- `operations/scripts/integrators/content/data/contracts/blockchain-page-spec.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/branch-watch.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/catalog-config.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/constants.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/incidents.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/solidity-parser.js` — content:contract-data
- `operations/scripts/integrators/content/data/contracts/spec.js` — content:contract-data
- `operations/scripts/integrators/content/data/fetching/fetch-lpt-exchanges.sh` — # @description LPT exchange data fetcher — pulls exchange listing data for LPT token pages
- `operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh` — # @description OpenAPI spec fetcher — pulls latest OpenAPI specs from Livepeer services for reference pages
- `operations/scripts/integrators/content/data/transforms/convert-rss-to-mdx.js` — * @description RSS-to-MDX converter — imports RSS feed items and converts to MDX page format
- `operations/scripts/integrators/content/language-translation/lib/common.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/config.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/docs-json-localizer.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/docs-routes.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/mdx-parser.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/mdx-translate.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/path-utils.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/provenance.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/provider-mock.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/provider-openrouter.js` — feature:translation
- `operations/scripts/integrators/content/language-translation/lib/providers.js` — feature:translation
- `operations/scripts/validators/content/language-translation/check-translation-freshness.js` — content:translation-staleness
- `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js` — feature:translation
