# Agent B — v2/ Content (excluding _workspace/)

**Scanned:** 2026-05-25
**Branch:** docs-v2-dev-draft
**Paths:** `v2/**/*.mdx` excluding all `_workspace/` subtrees (Agent C scope)
**Total MDX files in scope:** 1,014
**Companion TSV:** `workspace/thread-outputs/production-cleanup/inventory/agent-b-v2-content.tsv` (1,014 rows)

## Summary

| Classification | Count |
|---|---:|
| production-rendered | 178 |
| production-tree-internal | 1 |
| cut-candidate | 264 |
| archive-candidate | 9 |
| gold-candidate | 488 |
| needs-collab | 74 |
| **Total** | **1,014** |

### By tab × classification

| Tab | total | gold | prod | cut | archive | needs-collab |
|---|---:|---:|---:|---:|---:|---:|
| home | 14 | 10 | 3 | 0 | 0 | 1 |
| about | 105 | 36 | 5 | 47 | 9 | 8 |
| community | 24 | 18 | 4 | 0 | 0 | 2 |
| delegators | 25 | 23 | 2 | 0 | 0 | 0 |
| developers | 113 | 100 | 3 | 0 | 0 | 10 |
| gateways | 326 | 45 | 77 | 177 | 0 | 27 |
| orchestrators | 118 | 40 | 30 | 39 | 0 | 9 |
| resources | 151 | 97 | 49 | 1 | 0 | 4 |
| solutions | 118 | 110 | 2 | 0 | 0 | 6 |
| internal | 18 | 9 | 3 | 0 | 0 | 6 |
| root (v2/) | 2 | 0 | 0 | 0 | 0 | 1 + 1 internal |

### Top 3 risks

1. **264 cut-candidates concentrated in gateways (177) and orchestrators (39).** Largest cluster is 135 files in `v2/gateways/guides/*/x-resources/` directories — these are research/context dumps mixed into the navigable content tree. None are referenced in `docs.json`; none are imported by other MDX. They are functionally invisible to Mintlify but pollute the file tree, search indexes, and any global scans.
2. **Orphan-but-linked pages in `gateways/setup/` and `solutions/streamplace/introduction/`.** 27 gateways and 6 solutions files are not declared in `docs.json` but ARE linked via `<Card href=...>` from parent pages (e.g. `solutions/streamplace/overview.mdx` links to `streamplace-architecture`, `streamplace-guide`, etc). Mintlify only serves pages declared in `docs.json` — these will 404 in production. This is the highest-severity finding because the broken links are user-visible.
3. **Parallel duplicate trees under `v2/about/`.** Three full siblings exist: `network/` (canonical, 7 refs in docs.json), `network1/` (15 files, 0 refs), `network2/` (15 files, 0 refs); plus `protocol/` (canonical, 6 refs) and `protocol2/` (13 files, 0 refs). 42 cut-candidates from these alone. Indicates an unfinished IA migration.

<CustomDivider />

## Inventory table

Full per-file inventory in companion TSV (`agent-b-v2-content.tsv`, 1,014 rows). Summary patterns below.

## Cut candidates (high-confidence)

Detailed breakdown of the 264 cut-candidates:

| Pattern | Count | Evidence |
|---|---:|---|
| `**/x-resources/*.mdx` (mostly gateways) | 135 | 0 docs.json refs; 0 MDX imports anywhere outside `_workspace/`; filename prefixes `ctx-`, `v1--`, `v2-*--` indicate context-dump research notes |
| `**/x-deprecated/*.mdx` | 62 | Explicit deprecation prefix; 0 docs.json refs; 0 imports outside `_workspace/` |
| `v2/about/network1/**` | 15 | Sibling of canonical `network/` (7 docs.json refs); 0 docs.json refs; 0 imports |
| `v2/about/network2/**` | 14 | Second sibling of `network/`; 0 docs.json refs; 0 imports |
| `v2/about/protocol2/**` | 13 | Sibling of canonical `protocol/` (6 refs); 0 docs.json refs; 0 imports |
| `**/x-*.mdx` (file-level prefix) | 12 | e.g. `v2/about/protocol/x-design.mdx`, `x-livepeer-token.mdx`; superseded variants |
| `v2/gateways/custom/views/quickstart/**` | 6 | Byte-identical clones of `v2/gateways/quickstart/views/**`; original is imported, the clone isn't |
| `**/dep-*.mdx` (file-level prefix) | 5 | e.g. `dep-ai-inference.mdx`, `dep-payment-guide.mdx` |
| `**/* copy.mdx` | 2 | Backup copies left behind during editing |

Notable individual items:

- `v2/about/Network.zip` (118 KB) — ZIP file in content tree. Cut.
- `v2/about/protocol.zip` (74 KB) — ZIP file in content tree. Cut.
- `v2/gateways/custom/views/setup/install/linux-install-content-copy.mdx` — `-copy` variant; no imports.

## Archive candidates

- `v2/about/concepts/composables/{actors,network,overview,protocol}.mdx` — 4 files. Not in docs.json, not imported. Composables of an abandoned IA experiment. Either resurrect by importing into a parent page or archive.
- `v2/about/concepts/unclassified/{about-livepeer-all,core-principles,livepeer-capabilities,protocol-and-network}.mdx` — 4 files. The directory name `unclassified/` indicates pending IA decision; nothing references them.
- `v2/about/network/design2.mdx` — alt-version of `design.mdx`; not in docs.json.

## Gold candidates (488)

Exemplary characteristics: `lastVerified` frontmatter present + complete metadata + no STUB/TODO/PLACEHOLDER markers.

Tab leaders:

- **solutions** (110/118 gold; 93 % gold rate) — by far the cleanest tab.
- **developers** (100/113 gold; 88 %) — strong after May 14 migration.
- **resources** (97/151 gold; 64 %) — high quality reference content.
- **delegators** (23/25 gold; 92 %) — recently rebuilt, dense gold.

Lowest gold density:

- **gateways** (45/326; 14 %) — largest tab, heaviest legacy debt.
- **orchestrators** (40/118; 34 %) — second-heaviest debt.
- **about** (36/105; 34 %) — drag from parallel `network*/protocol*/concepts/` siblings.

Specific exemplars worth referencing for the style guide:

- `v2/delegators/concepts/mechanics.mdx`, `v2/delegators/concepts/overview.mdx` — concise concept pages.
- `v2/solutions/daydream/overview.mdx`, `v2/solutions/streamplace/overview.mdx` — solution overview pattern.
- `v2/resources/changelog/ai-compute/ai-runner.mdx` — well-structured changelog with managed pipeline.
- `v2/gateways/resources/reference/technical/contract-addresses.mdx` — full reference page with `lastVerified`, structured frontmatter, and AUTO-GENERATED banner indicating data-file pipeline.
- `v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview.mdx` — feature-rich developer page.

## Needs collaboration (74)

These are orphans not pattern-matched to cut/archive. Most need a decision: link from docs.json, accept as fragment, or cut.

### Group A — `<Card href=...>` linked but not in docs.json (broken in prod)

These pages WILL 404 because Mintlify only serves pages in docs.json. They're linked from parent overview pages, so the link rot is user-visible.

- `v2/solutions/streamplace/introduction/streamplace-{architecture,funding-model,guide,integration,provenance}.mdx` — linked from `solutions/streamplace/overview.mdx`
- `v2/developers/build/ai-and-agents/agents/{agent-sdk,creative-kit,eip-8004-identity}.mdx` — linked from agent overview pages
- `v2/developers/build/ai-and-agents/ai-stream-pack/{audio-transcription,comfyui-rtc,streamdiffusion,streamdiffusion-v2,superresolution}.mdx`
- `v2/developers/build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx`
- `v2/developers/resources/deepwiki.mdx`
- `v2/solutions/livepeer-studio/studio-client-use-cases.mdx`

**Recommended action:** add to `docs.json` sidebar groups (preferred) OR remove the `<Card href=>` link in the parent.

### Group B — `v2/gateways/setup/**` orphans (likely unfinished setup IA refactor)

- `v2/gateways/setup/configure/configuration-reference.mdx`
- `v2/gateways/setup/connect/{connect-with-offerings,discover-offerings,lp-marketplace}.mdx`
- `v2/gateways/setup/monitor/{monitor-and-optimise,monitoring-setup}.mdx`
- `v2/gateways/setup/prepare/on-chain-setup.mdx`
- `v2/gateways/setup/publish/connect-with-offerings.mdx`
- `v2/gateways/setup/requirements/{setup,on-chain-setup/bridge-lpt-to-arbitrum,on-chain-setup/on-chain}.mdx`
- `v2/gateways/setup/transcoding/{transcoding,transcoding-options}.mdx`

**Recommended action:** Per recent "Gateways Connect/Monitor/Verify" threads in CLAUDE.md, the setup IA was reorganised. These look like remainders from the prior structure. Audit each: is the new page (`connect.mdx`, `monitor.mdx`, `verify.mdx`) the replacement? If yes, cut. If no, wire into docs.json.

### Group C — `v2/gateways/resources/reference/technical/**`

- `v2/gateways/resources/reference/technical/api-reference/{_delete-all-api,ai-worker-api,hardware-info,hardware-stats,health}.mdx`
- `v2/gateways/resources/reference/technical/go-livepeer/{cli-reference,gpu-support,hardware-requirements,prometheus-metrics}.mdx`
- `v2/gateways/resources/reference/technical/orchestrator-offerings.mdx`

**Recommended action:** Reference pages — check the parent group in docs.json. Likely missed in last reorganisation.

### Group D — `v2/gateways/guides/tutorials/stubs/` and `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/`

Files named `tutorial-byoc-cpu-pipeline.mdx`, `tutorial-go-production.mdx`, `tutorial-offchain-transcoding-test.mdx`. These ARE stubs (folder name says so).

**Recommended action:** Either flesh out or move to `_workspace/`.

### Group E — `v2/internal/` orphans (6)

- `v2/internal/{definitions,ecosystem,references,internal-overview}.mdx`
- `v2/internal/assets/transcripts/a16z/2026-01-22-inferact-*.mdx`
- `v2/internal/assets/transcripts/ycomb.mdx`

**Recommended action:** Decide whether `v2/internal/` is supposed to render at all. If Mintlify-ignored, move to `.mintignore` or workspace.

### Group F — about and community orphans

- `v2/about/concepts/index.mdx` — has no frontmatter; likely meant to be a Mintlify "redirect" but isn't configured.
- `v2/about/guides/contributor-orientation.mdx`, `v2/about/guides/gateways-vs-orchestrators.mdx` — useful content, just unlinked.
- `v2/about/network/{interfaces,observability,participation}.mdx` — siblings of canonical `network/design.mdx` but not in sidebar.
- `v2/about/protocol/actors.mdx` — sibling of canonical `protocol/*` pages, not in sidebar.
- `v2/about/resources/livepeer-glossary.mdx` — duplicate of `glossary.mdx`?
- `v2/community/connect/news-and-socials.mdx`, `v2/community/ecosystem/governance.mdx`

**Recommended action:** review each — most are likely cut-candidates; a couple may warrant adding to docs.json.

### Group G — single notable orphans

- `v2/index.mdx` (53 KB) — root index. Brief flagged "v2/index.mdx, v2/README.mdx". Not in docs.json (uses root `/` route via Mintlify). Likely production-rendered via Mintlify default, but should confirm with Alison.
- `v2/orchestrators/setup/s-guide.mdx` — naming suggests "scratch guide" or shortened. Cut or rename.
- `v2/orchestrators/quickstart/tutorial.mdx` — generic name; check duplication with other tutorial pages.
- `v2/resources/lpt/delegator-dashboard.mdx`, `v2/resources/portal.mdx`, `v2/resources/references/contract-addresses.mdx`, `v2/resources/resources/videos.mdx` — note `resources/resources/` (double folder) — likely IA error.

## Features discovered (input for feature-catalogue.md)

From 651 titled pages. High-value features by audience:

### About (concepts & protocol)
- Livepeer protocol design | all audiences | mature | `/about/protocol/design`
- Livepeer Token (LPT) mechanics | delegator/orchestrator | mature | `/about/protocol/livepeer-token`
- Governance & treasury | all | mature | `/about/protocol/governance-and-treasury`
- Network metrics & explorer | analyst/operator | mature | `/about/network/metrics`
- Contract addresses (canonical) | developer/operator | mature | `/about/protocol/blockchain-contracts`

### Delegators
- Staking LPT | delegator | mature | `/delegators/concepts/*`
- Reward and fee cuts | delegator | mature | `/delegators/concepts/mechanics`
- Delegator dashboard | delegator | mature | `/resources/lpt/delegator-dashboard` (orphan)

### Gateways
- Gateway setup (off-chain / on-chain) | operator | mature | `/gateways/quickstart/*`
- Gateway connect/configure/install/verify/monitor | operator | mature | `/gateways/setup/*`
- On-chain setup (bridge LPT to Arbitrum) | operator | mature | `/gateways/setup/requirements/on-chain-setup/*`
- AI inference and pipelines | operator | mature | `/gateways/guides/node-pipelines/ai-pipelines`
- Probabilistic micropayments | operator | mature | `/gateways/guides/payments-and-pricing/*`
- CLI reference | operator | mature | `/gateways/resources/reference/technical/go-livepeer/*`
- Prometheus metrics + Grafana | operator | mature | `/gateways/setup/monitor`
- API references (AI worker, hardware, health) | developer | mature | `/gateways/resources/reference/technical/api-reference/*`

### Orchestrators
- Pool operators | operator | mature | `/orchestrators/guides/advanced-operations/pool-operators`
- Gateway-orchestrator relationships | operator | mature | `/orchestrators/guides/advanced-operations/*`
- Staking and rewards | operator/delegator | mature | `/orchestrators/guides/staking-and-rewards/*`
- AI and job workloads (video, ai inference) | operator | mature | `/orchestrators/guides/ai-and-job-workloads/*`

### Developers
- Agent SDK / Eliza / LLM provider routing | developer | beta | `/developers/build/ai-and-agents/*`
- AI Stream Pack (StreamDiffusion, ComfyUI RTC, superresolution, audio transcription) | developer | beta | `/developers/build/ai-and-agents/ai-stream-pack/*`
- ComfyStream realtime AI | developer | beta | `/developers/build/ai-and-agents/realtime-ai/comfystream`
- Livepeer Python gateway | developer | beta | `/developers/build/alt-gateways/livepeer-python-gateway`
- BYOC pipelines | developer | beta | `/developers/build/compute/*`
- Plugins & extensions | developer | beta | `/developers/build/plugins-and-extensions/*`
- VTuber avatar pipeline tutorial | developer | beta | `/developers/build/tutorials/build-a-vtuber-avatar-pipeline`
- Payments: probabilistic micropayments, remote signer, clearinghouse, per-second compute | developer | mature | `/developers/guides/payments/*`
- Auth & security, transport, observability | developer | mature | `/developers/guides/*`
- Production hardening checklist | developer | mature | `/developers/guides/production-hardening-checklist`
- pytrickle reference | developer | mature | `/developers/resources/reference/pytrickle-reference`
- DeepWiki | developer | mature | `/developers/resources/deepwiki` (orphan — link is broken in docs.json)

### Solutions
- Daydream | end-user | mature | `/solutions/daydream/*`
- Streamplace | developer | mature | `/solutions/streamplace/*` (5 sub-pages orphaned)
- Livepeer Studio | developer | mature | `/solutions/livepeer-studio/*`
- LP Marketplace | developer | mature | `/solutions/lp-marketplace/*` (inferred)

### Community
- Connect channels (Discord etc) | community | mature | `/community/connect/connect-channels`
- Events & livestreams | community | mature | `/community/connect/events-and-streams`

### Internal
- Docs philosophy | internal | mature | `/internal/overview/docs-philosophy`
- Governance pipeline | internal | mature | `/internal/overview/governance-pipeline`

## Future upgrades discovered

- **Build a `<Card href>` link-validation script** — S — workflow. Cross-check every `href=...` attribute against `docs.json` page list. Would have caught the 16 broken Streamplace/Developer Card links before now.
- **Auto-derive orphan list as a CI gate** — S — workflow. The script for this audit can run on every PR and fail when a `v2/**/*.mdx` is added without docs.json entry (unless flagged as fragment).
- **`/x-resources/` archival sweep skill** — S — content. 135 files of research dumped into the page tree. Build a skill that moves these to `_workspace/research/` with provenance metadata.
- **Parallel-version detector** — XS — workflow. Generic check for `<dir>/<dir>1/` and `<dir>/<dir>2/` siblings; flag any not in docs.json.
- **Mintlify-only-renders-docs.json banner** — XS — content/governance. Drop a note in `CLAUDE.md` and `docs-guide/standards/` reminding writers that `<Card href=>` doesn't make a page render; only `docs.json` does.
- **Tab landing-page convention audit** — S — content. Several tab index files (`v2/<tab>/index.mdx`) are orphans; some may be intentional (Mintlify maps tab root to first group's first page). Document the convention.
- **Audit `<dir>/<dir>/<...>` doubled-folder paths** — XS — workflow. `v2/resources/resources/videos.mdx` indicates accidental duplication.
- **Zip-file content-tree gate** — XS — governance. Prevent commits of `*.zip` in `v2/**/`. Two found: `v2/about/Network.zip`, `v2/about/protocol.zip`.

## Mintlify ignore gaps

Items in production tree that should likely be in `.mintignore`:

- `v2/internal/` (18 files) — content is "internal" but currently in production tree without `.mintignore` entry. Needs Alison decision: render to docs.livepeer.org or hide?
- `v2/about/_design/` (2 files, .md) — design docs in the tree; `.md` not `.mdx`, won't render anyway, but should still be excluded.
- `v2/about/data/` — contains `.jsx` data file; should be in `.mintignore` if not already.
- `v2/README.mdx` — README in content tree.
- All `**/_workspace/` subtrees (Agent C's scope but flagging for ignore coverage).

## Cross-cutting observations

1. **Three siblings under `v2/about/`**: `network/`, `network1/`, `network2/`; `protocol/`, `protocol2/`. The canonical pair is `network/` and `protocol/` (in docs.json). The numbered siblings are unfinished migrations. 42 cut-candidate files.
2. **`/x-resources/` is a systemic pattern**: 135 files across `v2/gateways/guides/*/x-resources/`. Filename prefixes (`ctx-new--`, `v1--`, `v2-refs--`, `v2-run--`, `v2-tools--`) suggest these are content-pass research/source dumps. Not pages. Should be migrated to `_workspace/research/` or cut.
3. **`/x-deprecated/` is well-used**: 62 files across `gateways/` and `orchestrators/`. Explicit deprecation marker — these are safe to cut wholesale.
4. **`<Card href=>` links to docs.json-orphans are a recurring failure mode**: Streamplace (5), Developers AI agents (3), AI Stream Pack (5), MCP (1), DeepWiki (1), Livepeer Studio (1) — at least 16 pages reachable only by broken hrefs. **Highest user-visible severity.**
5. **gateways `_workspace/` (241 MDX) and developers `_workspace/` (458 MDX, includes nested `developers1/` and `developers2/`)**: Out of my scope but flagging the size — these are massive working dirs that need Agent C's attention. The brief expected `v2/developers1/` and `v2/developers2/` at v2 root with `.zip` files; both moved into `v2/developers/_workspace/` and the `.zip` files weren't there. Brief was outdated.
6. **Two `.zip` files in content tree**: `v2/about/Network.zip` (118 KB), `v2/about/protocol.zip` (74 KB). Should never be in a render tree.
7. **`developers1/` and `developers2/` are inside `v2/developers/_workspace/`**: Both still exist (Agent C's scope to confirm safe-to-cut). They are not referenced in any in-scope MDX (only `_workspace/` cross-references).
8. **Stub markers are concentrated**: 137 in-scope stubs (13.5 % of pages). 79 in gateways, 47 in orchestrators, 3 about, 4 resources, 3 internal, 1 community. Aligns with the cut-candidate density — these are also the tabs with unfinished migrations.
9. **No-frontmatter files (21 in scope)**: All are component fragments under `v2/gateways/custom/views/setup/*-content.mdx` (correctly designed as MDX fragments) plus 3 `v2/about/concepts/` files (broken: should have frontmatter).
10. **`lastVerified` adoption is healthy**: 709/1,014 (70 %) pages have it. Tabs lagging: gateways (137/326 = 42 %), internal (13/18 = 72 %). Developers (113/113 = 100 %) and solutions (116/118 = 98 %) are exemplary.
11. **Contract-address data source exists**: `snippets/data/contract-addresses/contractAddressesData.{jsx,json}` is the canonical source. Pages with hardcoded addresses (38 files identified with raw `0x...` strings) should be audited — some may be using the data file via components (good), others may be hardcoded (must fix).
12. **`AUTO-GENERATED` banner usage**: 13 files (mostly glossary.mdx replicas across tabs + reference pages). These are correctly tagged and the user-rule "never edit auto-generated files" applies.
13. **`v2/gateways/custom/views/quickstart/{docker,linux,windows}/*Tab.mdx` are byte-identical clones of `v2/gateways/quickstart/views/{docker,linux,windows}/*Tab.mdx`**. The original is imported by `v2/gateways/quickstart/gateway-setup.mdx`. The clone is never imported. 6 cut-candidates.
14. **Concept of "fragment" composable is well-used**: `v2/gateways/quickstart/views/`, `v2/gateways/quickstart/groups/`, `v2/gateways/custom/views/setup/` files (28 + 6 + 12 = ~46 files) are correctly designed as content imports — they're orphan to `docs.json` but actively used. The classifier handles these as `production-rendered`.

## Incomplete — clarifications taken

- Brief expected `v2/developers1/` and `v2/developers2/` directories at `v2/` root with `.zip` files alongside. Actual state: both directories moved inside `v2/developers/_workspace/` (Agent C's scope). The `.zip` files predicted there don't exist; instead two zips were found under `v2/about/`.
- Brief expected `developers` tab at 281 MDX with 58 stub remainders. Actual: `v2/developers/` (excluding nested `_workspace/`) = 113 MDX with **0** stub markers — content-pass appears complete for in-scope pages.
- Brief expected `gateways` at 567 MDX. Actual: 326 in-scope + 241 in `_workspace/` (Agent C) = 567. Same total, just scope split.
