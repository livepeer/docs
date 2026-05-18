# Data Integrations — Product Audit (2026-05-18)

## What this repo's data layer actually delivers

The data layer is the bit of the docs platform that refuses to let pages drift. Anywhere a number, an address, a release tag, a flag, or a forum post would otherwise rot into staleness, an integrator script pulls fresh truth from an external authority (CoinGecko, GitHub releases, Arbiscan bytecode, Discourse forum, Discord webhook, Ghost, YouTube, Luma, go-livepeer source), runs a validation pass, and writes a deterministic JSX or JSON dataset under `snippets/data/`. The MDX pages import the dataset and render through shared components. No author hand-types an address or a release tag in a published page — when they try, the source-of-truth policy and the canonical contracts pipeline catch it.

The same shape repeats for every data family: a fetch script under `operations/scripts/integrators/`, a transform layer, a deterministic output under `snippets/data/<family>/`, a validation tool, a GitHub Actions workflow that schedules the refresh, and an MDX consumer that imports the data. The contracts pipeline is the gold-standard example — daily cron, shadow workflow for verification-only runs, bytecode verification against Arbitrum One and Ethereum Mainnet, health-check artefacts, incident issue creation on failure, and a publish gate that requires both a successful generation pass and a successful `--check` rerun before anything is committed. The OpenAPI layer is the weak counterexample — five specs sit in `api/` last touched 2026-03-18 with a one-shot `curl` shell script that only fetches two of them, no scheduled workflow, no validation gate.

The economic story the data layer tells: every page that renders contract addresses, exchange listings, configuration flags, latest releases, forum threads, video drops, or community events is structurally incapable of going stale for more than the cron interval, because the truth lives outside MDX and is regenerated on a schedule. The remaining drift surface is the surfaces where the integrator does not yet exist (OpenAPI re-pull) or where the integrator runs but the upstream feed fails silently (Luma, snapshot placeholders, legacy `changelogs/contractAddressesData.jsx`).

## Features (each)

### Feature: OpenAPI Specification Ingestion (Studio, Gateway, AI Worker, CLI)
**What it is:** Five canonical OpenAPI specs live in `api/` and back every API reference page in `v2/`. They cover Studio, the Gateway, the AI Worker, the public AI Gateway, and the go-livepeer CLI HTTP surface.
**Current state:** Partial — specs are present and rendered, but the refresh script is incomplete and not scheduled.
**Last touched:** 2026-03-18 for all five specs (`openapi.yaml`, `openapi.json`, `studio.yaml`, `gateway.openapi.yaml`, `ai-worker.yaml`, `cli-http.yaml`). Two months stale.
**Lives at:** `api/*.yaml`, `api/*.json`, with a fetch script at `operations/scripts/integrators/content/data/fetching/fetch-openapi-specs.sh` and a render generator at `operations/scripts/generators/content/reference/generate-api-docs.sh`. Validation tool: `operations/tests/integration/openapi-reference-audit.js`.
**Validated against source:** No. The fetcher only pulls AI Runner and AI Gateway specs from `livepeer/ai-runner`; Studio, CLI, and the main `openapi.yaml` are not refreshed by the script. There is no scheduled workflow that runs `fetch-openapi-specs.sh`.
**What's complete:** Specs render in the reference pages; render generator is documented; an integration test (`openapi-reference-audit.js`) catches reference drift between MDX endpoint pages and the spec.
**What's incomplete / community-help opportunity:** Expand `fetch-openapi-specs.sh` to cover all five specs from their canonical upstream repos, add a scheduled GitHub Actions workflow (weekly or on upstream release dispatch), and gate publishing through `openapi-reference-audit.js --full --strict`. Document upstream authorities in a single config block.
**Recommended canonical home:** Data Integrations page, "API Specifications" section.

### Feature: Contract Addresses Pipeline (fetch + verify + render)
**What it is:** The flagship integrator. Resolves a proof catalog of Livepeer protocol contracts, verifies bytecode on Arbitrum One and Ethereum Mainnet, rebuilds historical entries from controller `SetContractInfo` logs, writes the canonical JSX dataset, derives every page-facing companion artefact, and publishes only after a successful follow-up `--check` rerun.
**Current state:** Production — full daily cron, shadow workflow, branch-watch state, incident reporting, health-check artefacts.
**Last touched:** Generated data `contractAddressesData.jsx` — 2026-05-04 17:24. Folder mtime 2026-05-04.
**Lives at:** Pipeline at `operations/scripts/integrators/content/data/contracts/pipeline.js`; CLI wrapper `.github/scripts/fetch-contract-addresses.js`; spec at `operations/scripts/integrators/content/data/contracts/spec.js`; outputs under `snippets/data/contract-addresses/` (12 files including `contractAddressesData.jsx`, `canonicalContractsPageData.jsx`, `blockchainContractsPageData.jsx`, `view-model.jsx`, `_health-checks.json`, `_branch-watch-state.json`); workflows `integrator-maintenance-update-contract-addresses.yml` + `…-shadow.yml`; canonical page at `v2/resources/references/contract-addresses.mdx`; canonical composable at `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`.
**Validated against source:** Yes — on-chain bytecode verification, controller log replay, authority manifest from `livepeer/governor-scripts`, branch-watch across four upstream repos.
**What's complete:** Daily cron, shadow check-only workflow, anomaly artefacts, incident issue templates, branch-watch state diffing, health-check JSON, derived JSON outputs, MDX consumers using the composable.
**What's incomplete / community-help opportunity:** Pipeline does not yet do open-ended contract-family discovery from repo diffs (currently catalogued in `spec.js`). Ethereum Mainnet historical replay is not rebuilt through the same controller-log path as Arbitrum. Legacy `snippets/data/changelogs/contractAddressesData.jsx` (last touched 2026-04-03) is an orphaned older copy and should be removed.
**Recommended canonical home:** Data Integrations page, "Contracts Pipeline" deep-dive subsection — and absorb the orphaned `docs-guide/features/contracts-pipeline.mdx` into it.

### Feature: Release and Gateway Globals (latestRelease, gateway version, configuration flags)
**What it is:** Tracks the latest `go-livepeer` release tag, the gateway binary version, and the full set of CLI configuration flags. Powers every "current version" reference and the configuration flags search table.
**Current state:** Production for release + config-flags. Partial for gateway version (manual tracking).
**Last touched:** `globals/latestRelease.jsx` — 2026-04-05; `gateways/version.jsx` — 2026-04-05; `gateways/configuration-flags.jsx` — 2026-04-03.
**Lives at:** Integrators `operations/scripts/integrators/maintenance/release/update-livepeer-release.js` and `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`; outputs `snippets/data/globals/latestRelease.jsx`, `snippets/data/gateways/configuration-flags.jsx`, `snippets/data/gateways/version.jsx`; workflows `integrator-maintenance-update-release-version.yml` and `integrator-maintenance-update-config-flags.yml`.
**Validated against source:** Yes — GitHub API for releases, raw source for flag definitions in `go-livepeer`.
**What's complete:** Both fetchers have `--dry-run`, full JSDoc, scheduled workflows. Outputs are deterministic.
**What's incomplete / community-help opportunity:** `gateways/version.jsx` is a 100-byte hand-edited file that duplicates `latestRelease.jsx` — these should converge into a single source. `gateways/notes.mdx` (last touched 2026-03-18) lives in the data folder but is documentation, not data — move it to docs-guide.
**Recommended canonical home:** Data Integrations page, "Release and Configuration" section.

### Feature: Exchange Data Pipeline
**What it is:** Pulls LPT ticker data from CoinGecko, classifies each listing as CEX vs DEX, scores trust signals, and writes the dataset that powers the exchanges search table.
**Current state:** Production.
**Last touched:** `exchangesData.jsx` — 2026-04-08 13:53. Folder mtime 2026-04-28.
**Lives at:** `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`; output `snippets/data/exchanges/exchangesData.jsx`; workflow `integrator-maintenance-update-exchanges-data.yml`; snapshot at `snippets/data/snapshots/coingecko-livepeer.json`.
**Validated against source:** Yes — CoinGecko API, with a snapshot retained for replay.
**What's complete:** Scheduled fetcher, `--dry-run`, snapshot retention, exchange classification, trust-score colour coding.
**What's incomplete / community-help opportunity:** `snippets/data/snapshots/CoinGeckoExchanges.json` is a 178-byte placeholder file with `_note: "Placeholder - populate with real snapshot data from the API source"`. Either delete the placeholder or wire it into the fetcher. There is no CoinGecko-side outage handling visible in the script.
**Recommended canonical home:** Data Integrations page, "Exchange and Ecosystem Data" section.

### Feature: Social and Community Feeds (Forum, Ghost, GitHub, Discord, RSS, YouTube, Luma)
**What it is:** Seven independent integrators that aggregate community content. Forum (Discourse), Ghost blog, GitHub releases + discussions, Discord announcements, RSS, YouTube, and Luma events.
**Current state:** Mixed — five Production, one Stale (Luma), one Partial (RSS).
**Last touched:**
- `forumData.jsx` — 2026-04-14
- `youtubeData.jsx` — 2026-04-14
- `discordAnnouncementsData.jsx` — 2026-04-14
- `ghostBlogData.jsx` — 2026-04-14
- `lumaEventsData.jsx` — 2026-03-18 (two months stale)
- `lastUpdated.jsx` — 2026-04-14
**Lives at:** Seven fetchers under `operations/scripts/integrators/copy/social-feeds/`; outputs at `snippets/data/social-feeds/*.jsx`; transformer `snippets/data/social-feeds/transformers/filterVideos.js`; workflow `dispatch-copy-update-social-feeds.yml`.
**Validated against source:** Yes for forum/Ghost/YouTube/Discord. Luma fetcher exists in scope but the data file has not refreshed since the initial commit. RSS transformer is a one-off `convert-rss-to-mdx.js`.
**What's complete:** Six of seven feeds refresh on schedule; `lastUpdated.jsx` provides a UX signal; transformers separate fetch from render.
**What's incomplete / community-help opportunity:** Luma feed has not regenerated in two months — diagnose whether the upstream API contract changed or the workflow trigger failed silently. The fact that all of forum/Ghost/YouTube/Discord refreshed on the same day (2026-04-14) suggests they share a workflow run and the last run was over a month ago — the schedule cadence needs review. Forum data file is 968 KB JSX, which is large enough to be worth chunking or pre-rendering.
**Recommended canonical home:** Data Integrations page, "Social and Community Feeds" section.

### Feature: Showcase Feed (Project Showcase Pipeline)
**What it is:** Community-submitted project showcase entries flow from a Google Sheets submission form through a Discord review step into the rendered showcase data.
**Current state:** Production for the pipeline; Partial for the data (two parallel files).
**Last touched:** `showcaseData.jsx` — 2026-04-08; `showcaseDataPopulated.jsx` — 2026-04-08.
**Lives at:** Integrator `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`; outputs `snippets/data/showcase-feed/showcaseData.jsx` + `showcaseDataPopulated.jsx`; workflow `integrator-copy-update-showcase-submissions.yml`.
**Validated against source:** Yes — Google Sheets is the submission source, Discord webhook is the review gate.
**What's complete:** Poll + dispatch modes, secret-driven config, review gate, full pipeline doc embedded in the script header.
**What's incomplete / community-help opportunity:** Two showcase data files coexist (`showcaseData.jsx` and `showcaseDataPopulated.jsx`) — clarify which is canonical and remove the other or document the role split. Embedded media URLs point at `docs-v2-preview` branch raw GitHub assets, which can break if that branch is force-pushed or renamed.
**Recommended canonical home:** Data Integrations page, "Showcase Pipeline" section.

### Feature: Glossary Generator and Companions
**What it is:** Scans every v1 and v2 MDX page for domain terminology, categorises terms (web3, video, AI, Livepeer protocol), and generates a glossary data file plus companion artefacts.
**Current state:** Partial — generator exists but is marked `manual — not yet in pipeline`.
**Last touched:** Generators 2026-04-09. Output `operations/scripts/generators/content/data/glossary-terms.json` 2026-04-09.
**Lives at:** `operations/scripts/generators/content/reference/generate-glossary.js`, `generate-glossary-companions.js`. Reference data at `snippets/data/references/glossaryBadges.jsx`. Component badge map at `snippets/data/reference-maps/badge-map.jsx`. Top-level pointer `snippets/data/glossary-badges.jsx` (328 bytes).
**Validated against source:** Partial — generator reads MDX pages directly, but there is no validator that catches drift between the generated terms and the live pages.
**What's complete:** Generator can produce the glossary dataset; badge map is in place; companion files are designed.
**What's incomplete / community-help opportunity:** Wire `generate-glossary.js` into a scheduled workflow; add a validator that fails CI when a new term appears in MDX without a glossary entry; the `manual — not yet in pipeline` annotation is a P1 gap.
**Recommended canonical home:** Data Integrations page, "Glossary and Reference Maps" section.

### Feature: Reference Maps (Badges, Icons)
**What it is:** Static-ish reference data that maps badge identifiers and icon identifiers to render configurations.
**Current state:** Production but quiet — files are hand-maintained.
**Last touched:** `badge-map.jsx` — 2026-04-08; `icon-map.jsx` — 2026-04-13.
**Lives at:** `snippets/data/reference-maps/badge-map.jsx`, `icon-map.jsx`.
**Validated against source:** No — these are curated maps. There is no upstream feed.
**What's complete:** Maps render correctly.
**What's incomplete / community-help opportunity:** `icon-map.jsx` is 56 KB — worth checking whether icons referenced in the map but not used anywhere in MDX should be pruned, and whether icons used in MDX are missing from the map. A simple validator script would catch both drifts.
**Recommended canonical home:** Data Integrations page, "Reference Maps" subsection.

### Feature: Generated API Reference Pages
**What it is:** Generator that turns an OpenAPI spec into a landing page plus per-endpoint MDX pages plus navigation JSON.
**Current state:** Partial.
**Last touched:** `generate-api-docs.sh` — 2026-04-09.
**Lives at:** `operations/scripts/generators/content/reference/generate-api-docs.sh`.
**Validated against source:** Yes — runs directly off the OpenAPI spec.
**What's complete:** End-to-end shell pipeline (YAML to JSON to MDX to nav JSON).
**What's incomplete / community-help opportunity:** Marked `manual — not yet in pipeline`. There is no scheduled workflow that regenerates API reference pages when a spec changes. Should be triggered by upstream-repo webhook or scheduled in tandem with the OpenAPI refresh.
**Recommended canonical home:** Data Integrations page, "API Specifications" deep-dive.

### Feature: Snapshot Artefacts
**What it is:** Cached snapshots of upstream API responses, retained alongside generated data for replay and forensic analysis.
**Current state:** Partial — only one real snapshot is meaningful; two are placeholders.
**Last touched:** `coingecko-livepeer.json` and `coingecko-arbitrum.json` — 2026-04-03 (initial commit). `CoinGeckoExchanges.json` and `SolidityEmbed.json` — 2026-04-08 (placeholder files).
**Lives at:** `snippets/data/snapshots/`.
**Validated against source:** Partial — the live CoinGecko fetch writes its own state but the snapshot folder is not the canonical replay surface for that.
**What's complete:** Folder exists; retention rule is gestured at in policy.
**What's incomplete / community-help opportunity:** `CoinGeckoExchanges.json` and `SolidityEmbed.json` are 178-byte and 170-byte placeholder files — either populate them through their respective fetchers or remove them. Retention policy is documented but no script enforces bounded retention.
**Recommended canonical home:** Data Integrations page, "Snapshots and Retention" section.

### Feature: Social Feed Solutions (Per-Product Feeds)
**What it is:** Product-scoped feed datasets for Daydream, Embody, Livepeer Studio, Streamplace, and a frameworks bucket.
**Current state:** Production for the structure; unclear whether all five are actively refreshed.
**Last touched:** Folder mtime 2026-04-28.
**Lives at:** `snippets/data/social-feed-solutions/{daydream,embody,frameworks,livepeer-studio,streamplace}/`.
**Validated against source:** Unknown from the audit scope — needs a separate dive.
**What's complete:** Product-scoping is in place.
**What's incomplete / community-help opportunity:** Audit each product folder for fetcher pairing and last-write timestamps; document the solutions-feeds family in the data-integrations page (currently it is not mentioned).
**Recommended canonical home:** Data Integrations page, new "Solution-Scoped Feeds" section.

## Cross-feature observations

- **`contracts-pipeline.mdx` is orphaned.** It is not in `docs.json` (only `data-integrations.mdx` is registered). Its content is the single best deep-dive on a production pipeline in the docs and should either be merged into `data-integrations.mdx` as a section or registered into the docs-guide nav. Recommend merge.
- **OpenAPI refresh is the weakest link.** All five specs in `api/` were last touched on 2026-03-18 — two months stale. The fetcher script only covers two of them and is not scheduled. Compare with the contracts pipeline which has daily cron plus shadow verification.
- **Manual generators flagged from the SEO/AEO audit.** `generate-og-images.js` and `generate-ai-sitemap.js` have workflows (`generator-discoverability-generate-og-images.yml`, `generator-discoverability-generate-ai-sitemap.yml`) — they are CI-registered. The SEO/AEO audit claim that they are manual should be re-checked against the actual workflow schedules.
- **Legacy duplicate.** `snippets/data/changelogs/contractAddressesData.jsx` (2026-04-03) is an older standalone copy. The live pipeline writes to `snippets/data/contract-addresses/contractAddressesData.jsx` (2026-05-04). Remove the changelogs copy.
- **Two showcase data files.** `showcaseData.jsx` and `showcaseDataPopulated.jsx` coexist with no documented role split.
- **Luma is the only stale social feed.** Forum/Ghost/YouTube/Discord all refreshed on 2026-04-14. Luma has not refreshed since 2026-03-18.
- **`snippets/data/social-feed-solutions/` is undocumented** in `data-integrations.mdx` despite being an active subtree.
- **Glossary and API-docs generators are stuck at "manual — not yet in pipeline"** despite the data they produce being consumed in pages.
- **`gateways/version.jsx` and `globals/latestRelease.jsx` overlap** — same release tag, two files.
- **`snippets/data/snapshots/*.json` contains placeholders** that should be populated or removed.
- **`api/_workspace/` and `api/worker/`** subfolders exist alongside the top-level specs but are not described in the data-integrations page.

## Community-help opportunities

1. **Expand `fetch-openapi-specs.sh` to cover all five specs and schedule it.** Currently it pulls only AI Runner + AI Gateway. Acceptance: script pulls `studio.yaml`, `cli-http.yaml`, `openapi.yaml`, `openapi.json`, `ai-worker.yaml`, `gateway.openapi.yaml`; workflow exists at `.github/workflows/integrator-maintenance-update-openapi-specs.yml`; `openapi-reference-audit.js --full --strict` gates the commit.
2. **Wire `generate-glossary.js` into a scheduled pipeline and add a drift validator.** Acceptance: workflow regenerates the glossary weekly; CI test fails when MDX uses a term absent from the glossary; `manual — not yet in pipeline` annotation removed.
3. **Diagnose and revive the Luma feed.** Acceptance: `lumaEventsData.jsx` mtime is within the last 14 days; fetcher logs are reviewed; if the API contract changed, the fetcher is patched; if the workflow is misconfigured, the trigger is fixed.
4. **Wire `generate-api-docs.sh` into a refresh pipeline triggered by OpenAPI spec changes.** Acceptance: workflow regenerates `v2/.../api-reference/` MDX trees when any spec under `api/` changes; PR diff is reviewable; manual annotation removed.
5. **Remove `snippets/data/changelogs/contractAddressesData.jsx`.** Acceptance: file is deleted; any reference to it in tooling or MDX is repointed to `snippets/data/contract-addresses/contractAddressesData.jsx`; CI passes.
6. **Resolve showcase data duplication.** Acceptance: a single canonical file remains; the other is deleted or documented as a build artefact; the showcase MDX consumer imports the canonical file.
7. **Validate reference maps against MDX usage.** Acceptance: a validator (`operations/scripts/validators/content/reference/validate-reference-maps.js`) reports unused entries in `badge-map.jsx` and `icon-map.jsx` and missing entries for badges/icons referenced in MDX; runs in CI.
8. **Populate or remove snapshot placeholders.** Acceptance: `CoinGeckoExchanges.json` and `SolidityEmbed.json` either contain real snapshot data written by the relevant fetcher or are deleted; the snapshots folder readme documents the retention policy.
9. **Document and audit `snippets/data/social-feed-solutions/`.** Acceptance: each product subfolder is listed in the data-integrations page with its fetcher, output, and last-touched signal; orphaned product folders are removed.
10. **Converge `gateways/version.jsx` and `globals/latestRelease.jsx`.** Acceptance: one canonical release file remains; the other becomes a re-export or is removed; the gateway version page imports the canonical file.

## Recommended single-page rewrite outline

Title: **Data Integrations**

1. **Why this exists** — the rule that docs cannot hand-maintain truth; every external data point must be fetched, transformed, verified, and rendered through a deterministic pipeline.
2. **The pipeline shape** — fetch script under `operations/scripts/integrators/`; transform; deterministic output under `snippets/data/<family>/`; validator; scheduled workflow; MDX consumer importing the dataset.
3. **Integration families** (one section each, structured uniformly: purpose · upstream authority · integrator · output · workflow · validator · current state):
   - API Specifications (Studio, Gateway, AI Worker, AI Gateway, CLI)
   - Contracts Pipeline (with the orphaned `contracts-pipeline.mdx` content folded in as the deep-dive)
   - Release and Configuration (latest release, gateway version, configuration flags)
   - Exchange Data (CoinGecko)
   - Social and Community Feeds (Forum, Ghost, GitHub, Discord, RSS, YouTube, Luma)
   - Showcase Pipeline (Google Sheets + Discord review)
   - Solution-Scoped Feeds (Daydream, Embody, Studio, Streamplace, frameworks)
   - Glossary Generator
   - Reference Maps (badges, icons)
   - Generated API Reference Pages
   - Snapshots and Retention
4. **Validation and repair** — table of validators with their concern and repair command, refreshed against the live `operations/tests/` and `operations/scripts/validators/` trees.
5. **Data integration rules** — keep the existing six rules; add a seventh: every integration must declare an upstream authority, a scheduled refresh, a validator, and a deterministic output.
6. **Gaps and roadmap** — community-help table, with each row linking the gap to its acceptance criteria.
7. **Related** — Automations page, Source-of-truth policy, Script framework, Component framework, Contracts pipeline deep-dive (now a section anchor).
