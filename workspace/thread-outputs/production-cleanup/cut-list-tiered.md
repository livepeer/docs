# Cut List — Tiered

Consolidated from Agents A–E, deduplicated across overlap zones (Agents B and E share v2/ findings).

**Generated:** 2026-05-25
**Source inventories:** [agent-a-root-generated.md](inventory/agent-a-root-generated.md), [agent-b-v2-content.md](inventory/agent-b-v2-content.md), [agent-c-workspaces.md](inventory/agent-c-workspaces.md), [agent-d-internal.md](inventory/agent-d-internal.md), [agent-e-hotspots.md](inventory/agent-e-hotspots.md)

## Tier 1 — BULK SAFE CUTS

Zero ambiguity. No Alison decision needed beyond "go". Every item has explicit policy/structural justification.

### 1A — Whole-directory cuts (v2/ research/debris namespaces)

| Path | File count | Evidence | Source |
|---|---:|---|---|
| `v2/gateways/guides/**/x-resources/` | 135 | 0 docs.json refs, 0 MDX imports, filename prefixes `ctx-`/`v1--`/`v2-*--` indicate context dumps | B |
| `v2/**/x-deprecated/` | 62 | Explicit deprecation prefix, 0 refs, 0 imports | B |
| `v2/about/network1/` | 15 | Sibling of canonical `network/` (7 docs.json refs); zero refs/imports | B + E |
| `v2/about/network2/` | 14 | Second sibling; zero refs/imports | B + E |
| `v2/about/protocol2/` | 13 | Sibling of canonical `protocol/` (6 refs); contains visible `#TODO` H1 headings (lines 176, 203, 214, 223 of livepeer-token.mdx) | B + E |
| `api/worker/` | 3 | Explicitly retired by `docs-guide/policies/root-allowlist-governance.mdx` line 140 on 2026-03-21 — pure debris contradicting published policy | A |
| `.cache/` + `.cache/llm-usefulness/` + `.cache/llm-usefulness 2/` | 3 dirs (empty) | In `forbidden_root_artifacts` of `root-governance.json` line 69. Already `.gitignore`'d | A |
| `.github/x-archive/` | ~50+ | Abandoned archive of `docs-guide1` with deep nested `dep-files/v2/_workspace/` | C |
| `workspace/reports/relative-link-audit/` | 67 files / 9.1 MB | One-shot per-tab link audit superseded by CI | C |
| `workspace/reports/navigation-links/` | — / 4.3 MB | One-shot nav report superseded by `docs.json` + CI | C |
| `workspace/reports/v1-v2-mapping-audit/` | — / 3.7 MB | Migration complete | C |
| 6 empty " 2"-suffix dirs | 0 files each | Finder/iCloud duplicates: `.cache/llm-usefulness 2/`, `api/worker/api 2/`, `tools/editor-extensions/components 2/`, `tools/editor-extensions/markdown-list 2/`, `tools/scripts/remediators 2/`, `tools/scripts/validators 2/` | A |

**Subtotal:** ~316 files + ~17 MB workspace reports

### 1B — File-level cuts (zips, backups, debris)

| Path | Size | Evidence | Source |
|---|---:|---|---|
| `v2/about/Network.zip` | 118 KB | Binary in content tree; no consumer | B + E |
| `v2/about/protocol.zip` | 74 KB | Binary in content tree; no consumer | B + E |
| `workspace/plan/active/CONTENT-WRITING.zip` | 3.2 MB | Binary clone of live `CONTENT-WRITING/` folder, 60 days stale | C |
| `workspace/plan/complete/dep-COPYWRITING FRAMEWORK/*.zip` | ~208 KB combined (3 files) | `dep-` prefix; already in `complete/`; zips redundant | C |
| `workspace/plan/active/_MY_PROCESS/.../CLAUDE-FILES.zip` | 32 KB | Nested zip artefact, no consumer | C |
| `.vscode/livepeer-legacy.code-snippets.bak` | 34 KB | Legacy backup, `.mintignore`'d via `**/*.bak*`; replacement is `lp-components.code-snippets` | A + D |
| `v2/solutions/daydream/changelog.mdx.bak` | small | Backup file | E |
| `.githooks/post-commit.disabled` | small | Disabled hook, `.mintignore`'d via `**/*.disabled` | D |
| `docs-guide/composables/` | 0 (empty) | Created 2026-05-18, no contents, no consumers | D |
| `.claude/worktrees/` | 0 (empty) | Empty placeholder | D |
| `.DS_Store` files | 16 files | Already in `.gitignore` but tracked. Listed in `forbidden_root_artifacts` | A + E |
| `.gitattributes` LFS entries for `tasks/...` | — | Dead LFS rules pointing at deleted tree | A |

**Subtotal:** ~3.7 MB + 16 `.DS_Store` cleanup

### 1C — File-level cuts (v2/ orphan x-/dep- pages)

| Path | Notes | Source |
|---|---|---|
| `v2/orchestrators/resources/x-{payments,guides,help}.mdx` | 3 orphan `x-` files | E |
| `v2/orchestrators/resources/reference/technical/x-{changelog,support-status,troubleshooting}.mdx` | 3 orphan, 0-byte | E |
| `v2/orchestrators/setup/x-test.mdx` | Orphan, 0-byte | E |
| `v2/orchestrators/quickstart/dep-x-setup-paths.mdx` | Orphan, deprecated | E |
| `v2/orchestrators/guides/advanced-operations/dep-guide.mdx` | Orphan, deprecated | E |
| `v2/gateways/guides/node-pipelines/dep-ai-inference.mdx` | Orphan, deprecated | E |
| `v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx` | Orphan, deprecated | E |
| `v2/gateways/guides/advanced-operations/dep-production-hardening.mdx` | Orphan, deprecated | E |
| `v2/about/protocol/x-{design,overview,livepeer-token,design-philosophy,treasury}.mdx` | 5 `x-` prefix experimental drafts (cut OR archive — see Tier 3 if reuse value) | E |
| 12 other `**/x-*.mdx` file-level prefixes | Superseded variants | B |
| 5 other `**/dep-*.mdx` file-level prefixes | e.g. `dep-ai-inference.mdx`, `dep-payment-guide.mdx` | B |
| 2 `**/* copy.mdx` files | Backup copies left from editing | B |
| `v2/gateways/custom/views/setup/install/linux-install-content-copy.mdx` | `-copy` variant, not imported | B |

**Subtotal:** ~35 files

### 1D — Byte-identical clones (zero-risk cuts)

| Path | Original | Source |
|---|---|---|
| `v2/gateways/custom/views/quickstart/docker/*Tab.mdx` (2 files) | `v2/gateways/quickstart/views/docker/*Tab.mdx` (imported) | B |
| `v2/gateways/custom/views/quickstart/linux/*Tab.mdx` (2 files) | `v2/gateways/quickstart/views/linux/*Tab.mdx` (imported) | B |
| `v2/gateways/custom/views/quickstart/windows/*Tab.mdx` (2 files) | `v2/gateways/quickstart/views/windows/*Tab.mdx` (imported) | B |

**Subtotal:** 6 files

### 1E — Zero-byte placeholder namespaces (cut whole subtree)

| Path | Files | Notes | Source |
|---|---:|---|---|
| `v2/gateways/resources/reference/technical/api-reference/AI-API/` | 15 (all 0-byte) | Empty unfinished namespace | E |
| `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/` | 12 (all 0-byte) | Empty unfinished namespace | E |
| `v2/gateways/resources/reference/technical/api-reference/{hardware-stats,health,hardware-info,_delete-all-api,ai-worker-api}.mdx` | 5 orphan 0-byte | E |
| `v2/solutions/livepeer-studio/docs/api-reference/{multistream,rooms,sessions,signing-keys,tasks}/overview.mdx` | 5 (all 0-byte) | Empty placeholders | E |
| `v2/gateways/setup/configure/configuration-reference.mdx` | 1 (0-byte) | Orphan | E |

**Subtotal:** ~38 files

### 1F — Gateways setup/ orphans (likely IA-reorg debris)

These are orphans from the recent Connect/Monitor/Verify IA reorganisation (per CLAUDE.md Gateways threads). Cut after confirming each has a live replacement:

| Path | Likely replacement | Source |
|---|---|---|
| `v2/gateways/setup/connect/{connect-with-offerings,discover-offerings,lp-marketplace}.mdx` | `v2/gateways/setup/connect.mdx` | B + E |
| `v2/gateways/setup/publish/connect-with-offerings.mdx` | `v2/gateways/setup/connect.mdx` | B + E |
| `v2/gateways/setup/monitor/{monitor-and-optimise,monitoring-setup}.mdx` | `v2/gateways/setup/monitor.mdx` | B + E |
| `v2/gateways/setup/transcoding/{transcoding,transcoding-options}.mdx` | TBD | B + E |
| `v2/gateways/setup/prepare/on-chain-setup.mdx` | `v2/gateways/setup/requirements/on-chain-setup/` | B + E |
| `v2/gateways/setup/requirements/{setup,on-chain-setup/bridge-lpt-to-arbitrum,on-chain-setup/on-chain}.mdx` | TBD | B + E |

**Subtotal:** ~13 files (cut after 1-line each confirmation)

---

## Tier 1 grand total

**~408 files + ~17 MB workspace reports + 6 empty dirs**

If approved, this drops production-tree file count by ~25% in one batch with zero policy-decision burden.

---

## Tier 2 — ARCHIVE (move, do not delete)

Move from `workspace/plan/active/` to `workspace/plan/complete/`. Listed as Done in CLAUDE.md threads table but still in `active/`:

| Plan | Size | CLAUDE.md status |
|---|---:|---|
| `AI-TOOLS-GOVERNANCE/` | 448 KB | Shipped to `docs-guide/frameworks/ai-tools-governance.mdx` |
| `COMPONENT-GOVERNANCE/` | 264 KB | Shipped to component-framework-canonical.mdx + component-governance.mdx |
| `CONTRACTS-CHANGELOG-PIPELINE/` | 48 KB | Changelog Pipeline thread Done |
| `REPO-STRUCTURE-GOV/` | 276 KB | Canonical Consolidation thread Done |
| `SCRIPT WORKFLOW AUDIT/` (note space) | 320 KB | Snippets Audit Done. Also rename to remove space |
| `CANONICAL-TRUTH-GUIDES/` | 12 KB | Workflow Alignment Skills shipped |
| `DOCUMENTATION/` | 776 KB | Canonical Consolidation absorbed |
| `ORCHESTRATOR-CONTENT-WRITING/` | 152 KB | Superseded by `CONTENT-WRITING/` |
| `TERMINOLOGY-COLLATE/` | 1.1 MB | Terminology lock complete |
| `SNIPPETS/` | 32 KB | Absorbed by Snippets Audit |
| `SOLUTIONS-SOCIAL-DATA/` | 48 KB | Solutions tab work shipped |
| `AUTOMATIONS-RESTRUCTURE/` | 20 KB | small plan, status unclear |

**Subtotal:** ~3.5 MB across 12 plans

### workspace/reports/ archive (move to `workspace/reports/archive/_consolidated/` then prune)

| Path | Size | Notes |
|---|---:|---|
| `workspace/reports/archive/orchestrator-guides-review/` | 12 MB | Single-pass audit Mar-2026 |
| `workspace/reports/archive/gateway-guides-review/` | 3.5 MB | Single-pass |
| `workspace/reports/archive/link-health/` | 3.1 MB | Superseded by CI |
| `workspace/reports/codex-thread-insights/` | 3.7 MB (913 files) | Single date 2026-04-03 |
| `workspace/reports/contracts/` | 13 MB | Verify against CONTRACTS thread first |
| `workspace/reports/v2-nav-gold-standard-audit/` | 2.4 MB | Could inform future audits |
| `workspace/reports/repo-ops/` | 14 MB (96 files) | Single date 2026-03-16 |
| `workspace/reports/handover/` | 44 KB | One-shot handover |
| `workspace/thread-outputs/resource-hub-aggregation/` | 2.0 MB | Verify thread status |

**Subtotal:** ~54 MB

### docs-guide / v2/ archive

| Path | Notes |
|---|---|
| `docs-guide/notes.mdx` | "Ally's Notes" personal scratchpad → `docs-guide/_workspace/` |
| `docs-guide/canonical/collation-data/Mintlify/dep-files/**` (11 files) | Stale snapshot duplicates — delete or convert to generated artefact |
| `ai-tools/ai-skills/x-archive/component-create/SKILL.md` | Already prefixed `x-archive`; superseded by `create-component/` |
| `ai-tools/ai-rules/_retired/**` (8 files) | Already retired by folder naming |
| `ai-tools/ai-skills/source-content/**` (6 files) | Purpose unclear; staging area? Move to `_workspace/` |
| `v2/about/concepts/composables/{actors,network,overview,protocol}.mdx` (4) | Composables of abandoned IA experiment |
| `v2/about/concepts/unclassified/{about-livepeer-all,core-principles,livepeer-capabilities,protocol-and-network}.mdx` (4) | Directory name says it all |
| `v2/about/network/design2.mdx` | Alt-version of `design.mdx` |
| `v2/solutions/streamplace/introduction/*.mdx` (5) | Orphan set; if streamplace IA changed, archive |
| `v2/developers/build/ai-and-agents/ai-stream-pack/*.mdx` (5 stubs) | Status:stub frontmatter; if AI Stream Pack solution paused, archive |

---

## Tier 3 — NEEDS-COLLAB (Alison decisions blocking cuts/archives)

See [needs-collab.md](needs-collab.md) — populated separately with all open questions.

---

## Tier 4 — Pending verification

| Item | Verification needed | Source |
|---|---|---|
| `workspace/thread-outputs/sessions/recovered-chats/` (7.7 MB, 20 files) | Confirm VS Code extension fix is stable (FUCK_CLAUDE thread) | C |
| `workspace/plan/active/SHIP-CONTENT/decisions.md` | Confirm decisions migrated to `decision-registry.md` | C |
| `workspace/plan/active/FULL-CLEANUP/reconciliation-handoff.md` | Confirm if archaeology value, else cut | C |
| `workspace/plan/active/ACTUAL-CONTRACTS.MDX` (470-line MDX at top of active/) | Compare against live contracts page; if superseded → archive | C |
