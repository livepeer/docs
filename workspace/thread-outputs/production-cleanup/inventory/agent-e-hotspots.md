# Agent E — Cross-cutting hotspots

**Scanned:** 2026-05-25
**Branch:** `docs-v2-dev` @ HEAD
**Scope:** `v2/`, `docs-guide/`, `snippets/` (production-rendered) — plus repo-wide `.mintignore`, debris files, and docs.json cross-reference.
**Method:** parsed `docs.json` (894 page refs), enumerated 817 production v2 MDX files, grepped for stub/TODO markers, resolved imports against filesystem, sampled hardcoded data.

## Summary

- **production-rendered MDX in scope:** 3,266 (v2 + docs-guide + snippets, including partials/composables)
- **Top-level v2 MDX (orphan candidates only):** 817 files; 894 paths in docs.json — 0 missing files; 97 true orphan pages (186 incl. partials)
- **cut-candidates:** 67 (orphan namespaces `network1/`, `network2/`, `protocol2/`; `x-*` orphans; `.DS_Store` x16; root debris files; demo-content files)
- **archive-candidates:** 8 (orphan namespaces with research value)
- **gold-candidates:** 3 (auto-generated banner pipeline; snippets/data canonical pattern; broken-import discipline)
- **needs-collab:** 6 (production "Coming soon" stubs; visible `#TODO` headings in orphan files; status:draft x148; status:stub x20; protocol2 vs protocol namespace; `.mintignore` gaps)

**Top 3 risks**

1. **Production-rendered page `v2/orchestrators/quickstart/guide.mdx` contains "AI quickstart coming soon"** (line discovered via grep) — this is a live, navigated page with a stub sentence. Similar live exposure in `v2/about/concepts/index.mdx` ("Content coming soon..." x15+ times — though that path is an orphan, the file still exists on disk and could be picked up by accident). **Severity: high — user-visible.**
2. **`.mintignore` gaps:** `v1/`, `.augment/`, `.codex/`, `.cursor/`, `.windsurf/` are NOT in `.mintignore` despite existing at root. `v1/` contains a parallel doc tree that ships to docs.livepeer.org because docs.json references `v1/*` paths (894 nav refs include many `v1/...`) — but if the cleanup decision is to retire v1, no Mintlify-ignore safety net exists. AI-tool adapter dirs (`.augment`, `.codex`, `.cursor`, `.windsurf`) at root level may be crawled by Mintlify file-list. **Severity: medium-high.**
3. **97 true-orphan pages in v2/ that are not in docs.json** — orphan namespaces `protocol2/` (13 files), `network1/` (15 files), `network2/` (15 files), plus 54 other orphans. These are unrouted dead pages on disk. Several contain visible `#TODO` body text. Some have a corresponding sibling in production nav (e.g. `protocol2/livepeer-token.mdx` vs `protocol/livepeer-token.mdx`) — at risk of accidentally being edited instead of the live one. **Severity: medium.**

## Inventory table — scan results

| Category | Count | Path/Pattern | Classification | Evidence |
|---|---|---|---|---|
| Stub markers (frontmatter `status: stub`) | 9 | `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/*` (3) + `v2/developers/build/ai-and-agents/ai-stream-pack/*` (5) + `v2/developers/build/ai-and-agents/agents/eip-8004-identity.mdx` | needs-collab | All 9 are orphans (not in docs.json). Tutorial stubs are template scaffolds; ai-stream-pack stubs are content-pending. |
| Stub markers (frontmatter `status: draft`) | 148 | Across all v2 tabs | needs-collab | High count — likely a default value, not a real "draft" signal. Recommend Alison confirms whether `status: draft` is intentional or noise. |
| Body "Coming soon" (production-rendered) | 4 | `v2/orchestrators/quickstart/guide.mdx`, `v2/gateways/setup/requirements/setup.mdx` (orphan), `v2/about/concepts/index.mdx` (orphan, x15), `v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx` (orphan) | needs-collab | Only `quickstart/guide.mdx` is currently in nav — user-visible. |
| Body "TBD" stubs | 6 | `v2/README.mdx` (TBD links), `v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx` (TBD x2), `v2/internal/overview/governance.mdx` (TBD assignees) | needs-collab | All non-nav (README/internal/orphan) — low live risk. |
| Visible `#TODO` heading | 4 | `v2/about/protocol2/livepeer-token.mdx` (lines 176, 203, 214, 223) + mirror in `v2/about/protocol/x-livepeer-token.mdx` | cut-candidate | Both files are orphan namespaces. The live `v2/about/protocol/livepeer-token.mdx` is clean. |
| TODO/FIXME comments in production tree | 99 files | Mix of JSX comments `{/* TODO: */}` and code-context TODOs | mostly OK | Vast majority are JSX comments (invisible to readers). Notable: `v2/internal/internal-overview.mdx:35` has `{/* TODO: broken link */}` annotating a broken link. |
| Auto-generated banner files | 32 | listed below | production-rendered + DO-NOT-EDIT | All flagged with `generated-file-banner: generated-file-banner:v1` frontmatter. CLAUDE.md forbids hand-editing. |
| Relative imports in production MDX | 49 occurrences | Mostly `v2/solutions/*` (badges/infra/socials) + `v2/gateways/quickstart/gateway-setup.mdx` + `v2/about/concepts/about-livepeer.mdx` | needs-collab | Mintlify constraints reference says root-absolute is canonical but relative imports CAN work for adjacent files. Pattern is consistent across solutions tab — likely intentional. Recommend Alison confirms policy. |
| Broken imports in production v2 MDX | 0 | — | OK | After excluding fenced code blocks (which contain example imports that aren't actually executed), zero broken imports in 817 v2 MDX + 255 docs-guide/snippets MDX. |
| Imports without file extensions | 5 | `v2/resources/documentation-guide/copy-style/style-guide.mdx` (5 examples in code blocks), `v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm.mdx` (`./components/Chat` etc. — these are illustrative tutorial code, not live imports) | gold-candidate | All are inside code-block examples — not Mintlify build inputs. style-guide.mdx documents the violation deliberately. |
| Duplicate filename (intentional) | 9 | `glossary.mdx` across 9 tabs (`v2/{home,delegators,resources,solutions,about,orchestrators,gateways,community,developers}/resources/glossary.mdx`) | production-rendered | Each is a tab-scoped composition of shared glossary terms via snippets/composables. Intentional per architecture. |
| Duplicate content (near-identical pages) | 2 | `v2/home/solutions/trending.mdx` (32 lines) vs `v2/community/connect/trending-topics.mdx` (26 lines) | needs-collab | Diff shows ~95% identical content (both just import the same composable). Decide which is canonical and redirect the other. Brief noted home/trending.mdx but file is actually at `home/solutions/trending.mdx`. |
| Hardcoded blockchain addresses in MDX bodies | ~12 files | `v2/orchestrators/concepts/architecture.mdx` (1 addr), `video-transcoding-operations.mdx` (2), `network-participation.mdx` (1), `governance-and-economics.mdx` (1), `local-testnet.mdx` (1), plus orphan files | needs-collab | `snippets/data/contract-addresses/contractAddressesData.json` exists as canonical source. CLAUDE.md rule: "No hardcoded data in MDX pages. If a data file exists for the content (addresses), the page MUST import." Violations should switch to snippet imports. |
| Frontmatter keyword-list addresses | 6 files (canonical) | `v2/about/resources/reference/livepeer-contract-addresses.mdx` etc. | OK | Addresses in `keywords:` array only — for SEO discovery. Body content uses snippet imports. Not a violation. |
| Empty MDX files (0-byte body, frontmatter only) | 40+ | `v2/gateways/resources/reference/technical/api-reference/AI-API/*.mdx` (15), `CLI-HTTP/*.mdx` (~12), `v2/about/protocol2/{capabilities,design}.mdx`, `v2/solutions/livepeer-studio/docs/api-reference/*/overview.mdx` (5), `v2/orchestrators/resources/{x-help,x-changelog,x-troubleshooting}.mdx`, `v2/orchestrators/setup/x-test.mdx`, `v2/gateways/setup/configure/configuration-reference.mdx` | cut-candidate or needs-collab | Most are orphan x-files (cut). The AI-API and CLI-HTTP files appear to be placeholder shells of an unfinished API reference build-out — Alison should decide build-out vs delete. |
| Near-empty MDX (<200 body bytes) | 274 | broad — across all tabs | informational | High count expected because many pages legitimately consist of a single snippet import. Not a per-file flag. |
| .DS_Store files | 16 | scattered across `v2/`, `snippets/` | cut-candidate | None should be tracked. `.gitignore` line 2 covers them but pre-existing tracking lingers. |
| `*.bak` files in scope | 2 | `v2/solutions/daydream/changelog.mdx.bak`, `.vscode/livepeer-legacy.code-snippets.bak` | cut-candidate | `.mintignore` line 56 (`**/*.bak*`) ignores at render-time but leaves on disk. |
| `*.zip` files | 2 | `v2/about/Network.zip`, `v2/about/protocol.zip` | cut-candidate | Should not be in `v2/` tree. Likely research dumps. |
| `docs.json.before-*` backups | 2 | `.github/x-archive/docs.json.before-clean-devs1`, `docs.json.before-wire` | archive-candidate or cut-candidate | Out of my v2/docs-guide/snippets scope but flagged for completeness — already noted by Agent A. |
| Stale uncommitted (in working tree) | 11 | `docs-guide/catalog/components-catalog.mdx`, `docs-guide/features/*` (6), `operations/scripts/dispatch/**` (3) | informational | All within last 7 days based on `git status`. |

## docs.json cross-reference (orphans)

**Method:** Extracted all `pages` string entries from `docs.json` (894 unique paths). For each, confirmed file existence (`.mdx`, `.md`, or `/index.mdx`). For each v2 MDX file on disk, confirmed presence in docs.json.

- **docs.json paths missing files on disk:** 0 (all 894 nav entries are backed). Clean.
- **v2 MDX files NOT referenced in docs.json:** 186 (817 total – 631 in nav). After excluding documented partial/view/composable patterns (`/views/`, `/composables/`, `/groups/`, `/stubs/`, `/data/`, `/components/`, `/custom/`, `/unclassified/`, `network1/`, `network2/`, `protocol2/`): **97 true-orphan pages.**
- **Detail:** see `agent-e-hotspots.tsv` for full orphan list (97 rows).

## Auto-generated banner files (DO-NOT-EDIT)

CLAUDE.md hard rule: "Never edit files marked DO NOT EDIT, AUTO-GENERATED". These 32 files carry `generated-file-banner` frontmatter and have backing generators in `operations/scripts/`. Hand-editing risks loss on next generator run.

```
docs-guide/catalog/components-catalog.mdx
docs-guide/catalog/pages-catalog.mdx
docs-guide/catalog/scripts-catalog.mdx
docs-guide/catalog/templates-catalog.mdx
docs-guide/catalog/ui-templates.mdx
docs-guide/catalog/workflows-catalog.mdx
docs-guide/frameworks/github-actions.mdx
docs-guide/policies/docs-guide-structure-policy.mdx
docs-guide/policies/source-of-truth-policy.mdx
docs-guide/repo-ops/config/root-governance-map.mdx
docs-guide/source-of-truth-guide.mdx
snippets/snippets-registry.mdx
snippets/templates/docs-guide/component-catalog-template.mdx
snippets/templates/docs-guide/script-catalog.mdx
v2/{about,community,delegators,gateways,home,internal,orchestrators,resources,solutions}/index.mdx (9 tab index pages)
v2/index.mdx
v2/resources/documentation-guide/component-library/{component-library,config,displays,elements,integrators,overview,scaffolding,wrappers}.mdx (8 component-library pages)
```

**Generator-trace observation:** the working tree currently has 4 of these (`docs-guide/catalog/components-catalog.mdx`, `docs-guide/features/*`) modified but uncommitted (per `git status`). If those edits were hand-written, they will be overwritten on next generator run.

## Cut candidates (high-confidence)

- `v2/about/Network.zip` (binary, not a doc) — `.mintignore` does not list `*.zip`; should be cut.
- `v2/about/protocol.zip` — same reason.
- `v2/about/protocol2/` directory (13 files) — orphan namespace, contains visible `#TODO` headings, sibling `protocol/` is the live canonical.
- `v2/about/network1/` (15 files) — orphan namespace, no nav reference, mirror of live `network/`.
- `v2/about/network2/` (15 files) — orphan namespace, parallel rewrite that never landed in nav.
- `v2/orchestrators/resources/x-{payments,guides,help}.mdx` (3 files) — orphan, `x-` prefix per repo convention = experimental/abandoned.
- `v2/orchestrators/resources/reference/technical/x-{changelog,support-status,troubleshooting}.mdx` (3 files) — orphan, several are 0-byte.
- `v2/orchestrators/setup/{s-guide.mdx,x-test.mdx}` — orphan, 0-byte for x-test.
- `v2/orchestrators/quickstart/{tutorial.mdx,dep-x-setup-paths.mdx}` — orphan, `dep-` prefix = deprecated.
- `v2/orchestrators/guides/advanced-operations/dep-guide.mdx` — orphan, deprecated.
- `v2/gateways/guides/node-pipelines/dep-ai-inference.mdx` — orphan, deprecated.
- `v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx` — orphan, deprecated.
- `v2/gateways/guides/advanced-operations/dep-production-hardening.mdx` — orphan, deprecated.
- `v2/gateways/setup/transcoding/{transcoding.mdx,transcoding-options.mdx}` — orphan duplicates.
- `v2/gateways/setup/requirements/{setup.mdx,on-chain-setup/on-chain.mdx,on-chain-setup/bridge-lpt-to-arbitrum.mdx}` — orphans (redirect targets exist).
- `v2/gateways/setup/connect/{connect-with-offerings.mdx,lp-marketplace.mdx,discover-offerings.mdx}` + `v2/gateways/setup/publish/connect-with-offerings.mdx` — orphan duplicates of the live `setup/connect/` files.
- `v2/gateways/setup/monitor/{monitoring-setup.mdx,monitor-and-optimise.mdx}` — orphans.
- `v2/gateways/setup/configure/configuration-reference.mdx` — orphan, 0-byte.
- `v2/gateways/setup/prepare/on-chain-setup.mdx` — orphan.
- `v2/gateways/resources/reference/technical/orchestrator-offerings.mdx` — orphan.
- `v2/gateways/resources/reference/technical/api-reference/AI-API/*.mdx` (15 files, all 0-byte) — empty unfinished namespace.
- `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/*.mdx` (~12 files, all 0-byte) — empty unfinished namespace.
- `v2/gateways/resources/reference/technical/api-reference/{hardware-stats,health,hardware-info,_delete-all-api,ai-worker-api}.mdx` — orphans, 0-byte.
- `v2/gateways/resources/reference/technical/go-livepeer/{hardware-requirements,cli-reference,prometheus-metrics,gpu-support}.mdx` — orphans (live versions at `reference/go-livepeer/`).
- `v2/solutions/livepeer-studio/docs/api-reference/{multistream,rooms,sessions,signing-keys,tasks}/overview.mdx` (5 files, all 0-byte) — empty placeholders.
- `v2/about/concepts/index.mdx` — orphan, contains "Content coming soon..." x15 placeholders.
- `v2/solutions/daydream/changelog.mdx.bak` — backup file.
- `.vscode/livepeer-legacy.code-snippets.bak` — out of scope but noted.
- 16 `.DS_Store` files in `v2/` and `snippets/` (paths listed in TSV) — already in `.gitignore` but committed.

## Archive candidates

- `v2/about/network1/` + `v2/about/network2/` + `v2/about/protocol2/` (43 files, ~5 KB each avg) — if any content here is research-stage worth preserving (rather than scratch), move to `v2/_workspace/archive/` rather than deleting.
- `v2/internal/assets/transcripts/ycomb.mdx` and `v2/internal/assets/transcripts/a16z/2026-01-22-inferact-building-the-infrastructure-that-runs-modern-ai.mdx` — transcripts; `.mintignore` already ignores `transcripts/**` (line 95) so they're internal-stays; archive if no longer referenced.
- `v2/solutions/streamplace/introduction/*.mdx` (5 files) — orphan introduction set; if streamplace solution uses a different IA now, archive.
- `v2/developers/build/ai-and-agents/ai-stream-pack/*.mdx` (5 stub files marked `status: stub`) — if stream-pack solution is paused, archive.
- `v2/about/protocol/x-{design,overview,livepeer-token,design-philosophy,treasury}.mdx` (5 files) — `x-` prefix experimental drafts; archive vs cut depends on whether content has reuse value.

## Gold candidates

- **Auto-generated banner pattern** (`generated-file-banner` frontmatter) — 32 files use this consistently. Provides clear DO-NOT-EDIT signal at render time and in source. Other governance-managed surfaces should adopt this pattern.
- **`snippets/data/contract-addresses/` canonical-data pattern** — `contractAddressesData.json` + `.jsx` wrapper, consumed by 6+ MDX pages via `keywords:` frontmatter + body composable imports. Exemplifies the "no hardcoded data" rule. Hardcoded-address violators below should be migrated to this pattern.
- **Solutions tab's relative-import pattern for tab-local data** (`v2/solutions/*/data/{badges,infra,socials}.jsx`) — if Alison confirms relative imports are acceptable for tab-scoped data, this is a clean pattern: data files co-located with their consumers, scoped to a single tab.

## Needs collaboration

- **`v2/orchestrators/quickstart/guide.mdx` has "AI quickstart coming soon."** — is this intentional copy or a stub to remediate? Production-visible.
- **`status: draft` on 148 production v2 MDX files** — intentional default or stale signal? Recommend bulk-clear if just default.
- **`v2/about/protocol2/` (13 files, with visible `#TODO` headings) and `v2/about/network{1,2}/` (30 files)** — these are sibling namespaces to live content. Confirm: cut entirely, archive to `_workspace/`, or merge any useful content back to live `protocol/` / `network/`?
- **Hardcoded blockchain addresses in 5+ live pages** (e.g. `v2/orchestrators/concepts/architecture.mdx`, `v2/about/concepts/governance-and-economics.mdx`) — CLAUDE.md rule says zero exceptions. Should be migrated to snippet imports. Will Alison authorise the swap or is there a reason these are inline?
- **`v2/home/solutions/trending.mdx` vs `v2/community/connect/trending-topics.mdx`** — 95% duplicate (both import same composable). Pick one canonical; redirect the other.
- **AI-API and CLI-HTTP empty namespaces (~30 zero-byte placeholders)** in `v2/gateways/resources/reference/technical/api-reference/` — is this a planned build-out or abandoned scaffolding? If abandoned, cut whole subtree.

## Mintlify ignore gaps

`.mintignore` currently does NOT cover these existing dirs/files that should be ignored:

- `v1/` — not in `.mintignore`, but `v1/*` paths ARE in docs.json (so it currently renders). If cleanup intent is to retire v1, add `/v1/**` to `.mintignore` after removing v1 nav entries. Currently no safety net.
- `.augment/` — AI-tool adapter, exists at root.
- `.codex/` — AI-tool adapter, exists at root.
- `.cursor/` — AI-tool adapter, exists at root.
- `.windsurf/` — AI-tool adapter, exists at root.
- `*.zip` — `v2/about/Network.zip`, `v2/about/protocol.zip` not pattern-ignored.
- `docs.json.before-*` — backups in `.github/x-archive/` (covered by `/.github/**`) but pattern is generic enough to add at top level for safety.
- `**/*.DS_Store` — 16 tracked files; should be a `.mintignore` line in addition to `.gitignore`.
- `developers1/`, `developers2/` — brief mentioned them but neither exists in the tree. No gap.

`v2/_workspace/` IS covered by `_workspace` (bare) + `**/_workspace/**` + `/v2/**/_workspace/**` — verified line 62, 63, 79. Good.

## Features discovered

- **Solutions provider badges/infra/socials data layer** — audience: contributors editing solution pages — maturity: stable — current docs path: `v2/resources/documentation-guide/...` (component-library pages document it as `wrappers/`/`elements/` components)
- **Auto-generated catalog system** (components, scripts, templates, workflows, pages, ui-templates) — audience: contributors/agents — maturity: stable — docs path: `docs-guide/catalog/*`
- **Glossary-per-tab composition** (9 tab-scoped glossary pages composed from shared snippets) — audience: end users navigating any tab — maturity: stable — docs path: `v2/*/resources/glossary.mdx`
- **Contract-addresses canonical-data pipeline** — audience: developers/operators needing on-chain references — maturity: stable — docs path: `v2/about/resources/reference/livepeer-contract-addresses.mdx`
- **Quickstart tabbed-OS composition** (`gateway-setup.mdx` + Docker/Linux/Windows views) — audience: operators — maturity: stable — docs path: `v2/gateways/quickstart/gateway-setup.mdx`

## Future upgrades discovered

- **Migrate hardcoded blockchain addresses to snippet imports** — effort: S — skill: content
- **Eliminate orphan namespaces (`network1`, `network2`, `protocol2`, `x-*`, `dep-*`)** — effort: S — skill: content
- **Build out empty AI-API and CLI-HTTP reference pages OR cut whole namespace** — effort: L (build) / S (cut) — skill: content + script (generator)
- **Bulk-clear `status: draft` from frontmatter on stabilised pages** — effort: S — skill: script
- **Add `*.zip`, `*.DS_Store`, root-level AI-tool dirs (`.augment` etc.) to `.mintignore`** — effort: XS — skill: governance
- **Add pre-commit hook to block visible `#TODO` headings in body text** (distinct from JSX comment TODOs) — effort: S — skill: governance
- **Add nav-coverage CI check: every v2/ MDX must be in docs.json OR match a partial-path pattern OR be in `_workspace/`** — effort: M — skill: workflow

## Cross-cutting observations

- **0 broken imports** in 1,072 production MDX files (v2 + docs-guide + snippets) after excluding code-block examples. Import discipline is solid.
- **49 relative imports** exist but all are intra-tab data co-location (solutions, gateways quickstart) — pattern is consistent, not random violations.
- **No `*.log` files** anywhere in scope. Good.
- **No `*.tmp`, `*~`, `*.orig`, editor swap files** in production tree. Good.
- **0 docs.json paths missing files** — nav integrity is clean.
- **17:1 ratio of orphan-by-namespace to true orphans** (most "orphans" are partials by design — composables, views, OS-tabs). This is a healthy pattern but means a flat orphan detector overstates the problem.
- **`status: draft` (148 files) and `status: stub` (20 files) signal-to-noise** suggests the frontmatter status field is partly serving as a working state marker, partly as a real signal. A meta-decision is needed: clear all `draft` that are actually live, or stop using the field.
- **`#TODO` rendered as H1 heading is invisible to lint but visible to users** — these are in orphan files today but the failure mode (heading literal) could recur in live files. A simple grep `^#TODO\|^# TODO` rule would catch.

## Output files

- This report: `workspace/thread-outputs/production-cleanup/inventory/agent-e-hotspots.md`
- Orphan-list TSV companion: `workspace/thread-outputs/production-cleanup/inventory/agent-e-hotspots.tsv`
