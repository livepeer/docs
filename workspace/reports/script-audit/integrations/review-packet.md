# Script audit — integrations concern

Generated 2026-05-24

**13 scripts** in this concern.

## dispatch (1)

### `operations/scripts/dispatch/content/data/run-solutions-social-fetch.js`

**Niche:** social-feeds

**Purpose:** Local-only dispatcher for the 7 social-feed integrators — loads .env, lets contributors fetch live forum/discord/blog/youtube/github data on their workstation with --dry-run, --mode filtering, and --skip support before pushing changes that depend on freshly-generated snippets/data/social-feeds outputs

**Description:** Mirrors what dispatch-social-feeds.yml does in CI but with .env support, selective --mode (e.g. only forum+youtube), and --skip flag for offline-only fetchers. Iterates the configured fetchers under operations/scripts/integrators/copy/social-feeds/, runs each, captures success/failure summary. Local-use only — not in any GitHub Actions workflow.

**Scope:** operations/scripts/integrators/copy/social-feeds/ → snippets/data/social-feeds/, snippets/data/social-feed-solutions/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (12)

### `operations/scripts/integrators/content/data/contracts/blockchain-page-spec.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: blockchain-page-spec

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/branch-watch.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: branch-watch

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/catalog-config.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: catalog-config

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/constants.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: constants

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (12):** `snippets/data/contract-addresses/contractAddressesData.json`, `snippets/data/contract-addresses/contractAddressesData.jsx`, `snippets/data/contract-addresses/blockchainContractsPageData.json`, `snippets/data/contract-addresses/blockchainContractsPageData.jsx`, `snippets/data/contract-addresses/canonicalContractsPageData.json`, `snippets/data/contract-addresses/canonicalContractsPageData.jsx` _(+6 more)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/transforms/convert-rss-to-mdx.js`

**Niche:** transforms

**Purpose:** Convert podcast / interview RSS feed items into v2/internal/assets/transcripts MDX pages — used to ingest external content (e.g. a16z.rss, ycomb.rss already in the transcripts dir) as searchable internal-only MDX

**Description:** Reads .rss files from v2/internal/assets/transcripts/, parses each entry (title, pubDate, link, excerpt, audio link, transcript), emits one MDX page per entry under v2/internal/assets/transcripts/{source}/{episode-slug}.mdx with proper frontmatter. Manual-use only — run when new RSS feeds are added or existing feeds need refresh.

**Scope:** v2/internal/assets/transcripts/*.rss → v2/internal/assets/transcripts/{source}/*.mdx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh`

**Niche:** external-docs

**Purpose:** Fetch upstream markdown from external Livepeer repositories (go-livepeer, livepeer-ai-worker, etc.), sanitise for MDX safety, and write shared page composables — invoked by mint-dev.sh and the page-imports audit so v2 pages can import the latest README/CONTRIBUTING from source repos

**Description:** Iterates a config-mapped list of external repos and files, downloads each via curl, runs mdx-sanitise on the output, writes to snippets/composables/pages/shared/. Pre-build dependency for the dev preview (mint-dev.sh runs it first) so external composables exist before Mintlify boots. Also referenced by page-imports-audit which validates that referenced shared composables exist.

**Scope:** external Livepeer repos → snippets/composables/pages/shared/*.mdx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/audits/content/health/page-imports-audit.js`, `operations/scripts/script-index.md`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/fetching/fetch-lpt-exchanges.sh`

**Niche:** exchanges-data

**Purpose:** Fetch the CoinGecko exchange listings for LPT (where to buy/trade Livepeer token) and append/update snippets/data/exchanges/lpt-exchanges.mdx — manual-use script run when listings change or contributors want to refresh the LPT exchange data

**Description:** Hits CoinGecko's public exchanges-by-token endpoint for the LPT coin ID, transforms the response (exchange name, pair, volume, trust score) into an MDX table, appends or updates the table in snippets/data/exchanges/lpt-exchanges.mdx. Manual-use only — documented in docs-guide/tooling/lpd-cli.mdx as a contributor workflow.

**Scope:** CoinGecko exchanges API → snippets/data/exchanges/lpt-exchanges.mdx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh`

**Niche:** openapi-specs

**Purpose:** Fetch the latest OpenAPI specs for Livepeer services (Studio API, Gateway API, etc.) and write them to api/ so Mintlify can regenerate the v2 API reference pages — note: known RFP gap, currently covers 2 of 5 target services

**Description:** Iterates a config-mapped list of Livepeer service OpenAPI spec URLs, downloads each via curl, validates JSON/YAML parses, writes to api/{service}-openapi.{yaml,json}. Mintlify's reference-page generator picks them up. Manual-use; not yet wired into a scheduled or post-merge pipeline (tracked as RFP gap "OpenAPI fetcher 2/5").

**Scope:** Livepeer service OpenAPI endpoints → api/*.{yaml,json}

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/contributing/community-help.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/gap-analysis.mdx`, `docs-guide/features/data-integrations.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/incidents.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: incidents

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/pipeline.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: pipeline

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (11):** `operations/scripts/dispatch/governance/dispatch-pipelines.js`, `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`, `operations/scripts/dispatch/governance/post-remediation-verify.js`, `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`, `operations/scripts/script-index.md` _(+6 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/solidity-parser.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: solidity-parser

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/contracts/spec.js`

**Niche:** data

**Purpose:** content:contract-data

**Description:** Contract data pipeline module: spec

**Scope:** operations/scripts/integrators/content/data/contracts/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
