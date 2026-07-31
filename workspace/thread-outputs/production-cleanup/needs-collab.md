# Needs Collaboration Queue

Items requiring Alison's decision before cut / keep / archive. Resolved entries move to the cleanup ledger.

**Generated:** 2026-05-25
**Source inventories:** Agents A–E

---

## Format

```
### [path or topic]

**Question:** [one-line question]
**Options:**
  A. [option] — [tradeoff]
  B. [option] — [tradeoff]
**Recommendation:** [option + 1-line reason]
**Surface:** [v2/ | docs-guide/ | snippets/ | operations/ | workspace/ | other]
**Source agent:** [A | B | C | D | E]
**Decision:** [pending | A | B | other]
**Decided date:** [YYYY-MM-DD or —]
```

---

## Queue

### Group 1 — User-visible broken links (HIGHEST PRIORITY — 404 in production)

#### `<Card href=>` links to pages not in docs.json (16+ files)

**Question:** Several parent pages link via `<Card href=...>` to child pages that are NOT registered in `docs.json`. Mintlify only serves pages declared in `docs.json` — these links 404 in production.

Affected child pages:
- `v2/solutions/streamplace/introduction/streamplace-{architecture,funding-model,guide,integration,provenance}.mdx` (5)
- `v2/developers/build/ai-and-agents/agents/{agent-sdk,creative-kit,eip-8004-identity}.mdx` (3)
- `v2/developers/build/ai-and-agents/ai-stream-pack/{audio-transcription,comfyui-rtc,streamdiffusion,streamdiffusion-v2,superresolution}.mdx` (5)
- `v2/developers/build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx`
- `v2/developers/resources/deepwiki.mdx`
- `v2/solutions/livepeer-studio/studio-client-use-cases.mdx`

**Options:**
- A. Add all 16+ to `docs.json` sidebar groups (children become live)
- B. Remove the `<Card href=>` references from parent pages (links disappear; orphans become true orphans → cut later)
- C. Mixed: child-by-child decision (most labour)

**Recommendation:** B for stub children (Streamplace 5 + AI Stream Pack 5 are stubs without content), A for substantive children (agent-sdk, creative-kit, eip-8004-identity, deepwiki, studio-client-use-cases). Mixed but with a default rule.
**Surface:** v2/
**Source:** B
**Decision:** pending

---

### Group 2 — Production page copy decisions

#### `v2/orchestrators/quickstart/guide.mdx` "AI quickstart coming soon"

**Question:** This is a LIVE nav page with body text "AI quickstart coming soon." Is this intentional copy or a stub to remediate?
**Options:**
- A. Intentional copy — leave as user-facing notice
- B. Stub — remove the line and ship cleaner copy now
- C. Build out the AI quickstart and replace
**Recommendation:** B for now (remove the line), C as a tracked follow-up in `future-upgrades.md`
**Surface:** v2/
**Source:** E
**Decision:** pending

#### `status: draft` on 148 production v2/ pages

**Question:** 148 production pages carry `status: draft` in frontmatter. Real signal or stale default?
**Options:**
- A. Bulk-clear `status: draft` on all 148
- B. Audit each (~hours of work)
- C. Stop using `status` field entirely (drop from frontmatter standard)
**Recommendation:** A — `status` is not consumed by any rendering pipeline I can see. Bulk-clear with a remediation script + verify nothing breaks
**Surface:** v2/ (cross-cutting)
**Source:** E
**Decision:** pending

#### `v2/home/solutions/trending.mdx` vs `v2/community/connect/trending-topics.mdx`

**Question:** 95% identical — both import the same composable. Which is canonical?
**Options:**
- A. Keep `v2/home/solutions/trending.mdx`, redirect `trending-topics.mdx`
- B. Keep `v2/community/connect/trending-topics.mdx`, redirect `trending.mdx`
- C. Both legitimate (different audience entry points) — leave
**Recommendation:** B — community/connect/ is the more discoverable IA position; home/solutions can redirect
**Surface:** v2/
**Source:** E (with prior flag from Cleanup thread)
**Decision:** pending

#### Hardcoded blockchain addresses in 5+ live pages

**Question:** CLAUDE.md rule: "No hardcoded data in MDX pages. Zero exceptions." Found in `v2/orchestrators/concepts/architecture.mdx`, `video-transcoding-operations.mdx`, `network-participation.mdx`, `governance-and-economics.mdx`, `local-testnet.mdx` and more.
**Options:**
- A. Authorise migration to snippet imports (`snippets/data/contract-addresses/contractAddressesData.jsx`)
- B. Pages with legitimate inline-needs documented + exempted in governance
- C. Leave as-is, accept the violation
**Recommendation:** A — pipeline exists, just needs the swap. ~12 files, ~1 hour
**Surface:** v2/
**Source:** E
**Decision:** pending

---

### Group 3 — Gateways setup/ IA-reorg remainders

#### `v2/gateways/setup/**` orphans (15 files)

**Question:** Likely remainders from recent Connect/Monitor/Verify IA reorganisation (per CLAUDE.md Gateways threads). Is each old page now replaced?
**Files:**
- `setup/connect/{connect-with-offerings,discover-offerings,lp-marketplace}.mdx`
- `setup/publish/connect-with-offerings.mdx`
- `setup/monitor/{monitor-and-optimise,monitoring-setup}.mdx`
- `setup/transcoding/{transcoding,transcoding-options}.mdx`
- `setup/prepare/on-chain-setup.mdx`
- `setup/requirements/{setup,on-chain-setup/bridge-lpt-to-arbitrum,on-chain-setup/on-chain}.mdx`
- `setup/configure/configuration-reference.mdx`

**Options:**
- A. All replaced by `setup/{connect,monitor,verify}.mdx` — cut all 15 in batch
- B. Some still useful — needs per-file walk
**Recommendation:** A pending your "yes the Connect/Monitor/Verify pages cover everything"
**Surface:** v2/gateways/
**Source:** B + E
**Decision:** pending

---

### Group 4 — Internal tab visibility

#### `v2/internal/` — does it render to docs.livepeer.org?

**Question:** 6+ orphan pages in `v2/internal/`. The dir is in production tree without an explicit `.mintignore` entry. Per CLAUDE.md the `internal` audience is "Livepeer team" — should the user-facing site show this content?
**Options:**
- A. Render publicly (current state) — `v2/internal/` stays visible
- B. Add `/v2/internal/**` to `.mintignore` — keeps content for team but hides from docs.livepeer.org
- C. Move entire `v2/internal/` to `workspace/internal/` — content stays in repo but completely out of production tree
**Recommendation:** B — preserves content access for repo work while not exposing to public site. Lower risk than C, less drift than A
**Surface:** v2/internal/
**Source:** B + D
**Decision:** pending

---

### Group 5 — Root-level governance drift

#### `jsconfig.json`

**Question:** Present at root, in `.allowlist`, but missing from `root-governance.json` entries[].
**Options:**
- A. Add `jsconfig.json` to root-governance.json + regenerate `.allowlist`
- B. Delete `jsconfig.json` + remove `.allowlist` entry
**Recommendation:** A — file is legitimate IDE/editor config; the `paths` alias helps MDX authoring
**Surface:** root
**Source:** A
**Decision:** pending

#### `.env`

**Question:** Tracked file at root despite `root-governance.json` `tracking_policy: untracked_only` (line 59). `.gitignore` line 24 ignores it. Do NOT inspect contents.
**Options:**
- A. `git rm --cached .env` and replace with `.env.example` only
- B. Change governance rule to allow tracked `.env`
**Recommendation:** A — security best practice. Verify no secrets are in current tracked version before removing
**Surface:** root
**Source:** A
**Decision:** pending

#### `v1/redirects.json` (42 KB)

**Question:** Referenced only in generated script inventory, never imported in runtime code. `docs.json` already has its own redirects block.
**Options:**
- A. Cut — file is vestigial
- B. Keep — used at runtime via mechanism I haven't found
**Recommendation:** A — but verify via grep across non-generated paths before cut
**Surface:** root
**Source:** A
**Decision:** pending

#### `v1/Dockerfile` (95 bytes)

**Question:** Tiny Dockerfile inside `v1/`. Root has a `Makefile` that builds `livepeer/docs`. Inconsistent.
**Options:**
- A. Cut — vestigial
- B. Keep — used by some pipeline
**Recommendation:** A
**Surface:** root (legacy v1/)
**Source:** A
**Decision:** pending

#### macOS Finder duplicate sweep policy

**Question:** 13+ `.DS_Store` files and 6 " 2"-suffix empty dirs exist despite `forbidden_root_artifacts` rule. Pre-commit gate appears missing or unenforcing.
**Options:**
- A. One-shot sweep + fix the pre-commit gate
- B. One-shot sweep without gate fix (will regenerate)
**Recommendation:** A — see future-upgrades.md for the gate item
**Surface:** repo-wide
**Source:** A
**Decision:** pending

---

### Group 6 — docs.json routing wart

#### Two broken redirects in docs.json

**Question:** Redirects point to `/docs-guide/source-of-truth-guide` and `/docs-guide/policies/governance-index` — but `docs-guide/*` paths are NOT routed; production routes are `/v2/resources/documentation-guide/*` wrappers that import docs-guide.
**Options:**
- A. Re-target redirects to `/v2/resources/documentation-guide/source-of-truth-guide` and `/v2/resources/documentation-guide/policies/governance-index`
- B. Delete both redirects
**Recommendation:** A — preserves redirect intent
**Surface:** docs.json
**Source:** D
**Decision:** pending

---

### Group 7 — Workspace folder hygiene

#### `workspace/plan/active/CONTENT-PIPLEINE/` (typo)

**Question:** Folder name typo. Rename to `CONTENT-PIPELINE/`?
**Options:** A. Rename. B. Leave.
**Recommendation:** A — run /propagate after to update any references
**Surface:** workspace/
**Source:** C
**Decision:** pending

#### `workspace/plan/active/SCRIPT WORKFLOW AUDIT/` (space in name)

**Question:** Space in folder name breaks tooling chains. Rename to `SCRIPT-WORKFLOW-AUDIT/`? (Also in Tier 2 archive list — could combine.)
**Options:** A. Rename + archive. B. Leave.
**Recommendation:** A — and archive since CLAUDE.md says Done
**Surface:** workspace/
**Source:** C
**Decision:** pending

#### `workspace/plan/active/FUCK_CLAUDE/`

**Question:** Load-bearing per CLAUDE.md (VS Code extension diagnostic). Name is profane and shows up in any directory listing.
**Options:**
- A. Rename to `VSCODE-EXTENSION-DIAGNOSTIC/` + update all CLAUDE.md references via /propagate
- B. Leave — the name is the joke
**Recommendation:** A
**Surface:** workspace/
**Source:** C
**Decision:** pending

#### `workspace/plan/active/ACTUAL-CONTRACTS.MDX`

**Question:** Loose 470-line MDX at top of `active/` (not inside any plan subfolder). Looks like an early draft of the contracts page.
**Options:**
- A. Compare against live `v2/about/resources/reference/livepeer-contract-addresses.mdx`. If superseded → archive. Otherwise move into `CONTRACTS/` subfolder
- B. Leave
**Recommendation:** A
**Surface:** workspace/
**Source:** C
**Decision:** pending

#### `workspace/plan/active/DOCUMENTATION/` vs `_MY_PROCESS/`

**Question:** Both contain `master-status.mdx` + meta-process docs. Possible duplication of intent.
**Options:**
- A. Confirm one is authoritative; archive the other
- B. They're distinct — leave both
**Recommendation:** Inspection needed before recommending
**Surface:** workspace/
**Source:** C
**Decision:** pending

---

### Group 8 — Skill / catalog drift

#### `skill-catalog.json` covers 9 skills; filesystem has 35; CLAUDE.md cites ~34

**Question:** Catalog vs filesystem vs CLAUDE.md drift. Is the catalog intentionally scope-limited (only pipeline-orchestratable skills), or stale?
**Options:**
- A. Auto-generate catalog from filesystem `SKILL.md` frontmatter (all 35)
- B. Add explicit scope statement to catalog ("pipeline-orchestratable skills only") + add a `meta/skill-index.json` with all 35
- C. Manually update catalog to all 35
**Recommendation:** A — auto-generated catalog is the gold pattern (matches `docs-guide/catalog/*` autogenerated files)
**Surface:** ai-tools/
**Source:** D
**Decision:** pending

#### `ai-tools/ai-skills/source-content/**` (6 files)

**Question:** Includes `llms.txt` (root has its own), `v2/{cn,fr,es}/` snapshot, `.github/augment-instructions.md`, `contribute/CONTRIBUTING`. Not referenced by any SKILL.md.
**Options:**
- A. Move to `_workspace/` until owner identified
- B. Cut entirely
**Recommendation:** A — preserves history while removing from active tree
**Surface:** ai-tools/
**Source:** D
**Decision:** pending

---

### Group 9 — docs-guide canonical drift

#### `docs-guide/canonical/collation-data/Mintlify/dep-files/**` (11 files)

**Question:** Stale snapshot duplicates of files that live in `workspace/`, `snippets/`, `operations/`, `v2/`. Source-of-Truth violation.
**Options:**
- A. Delete — use the originals
- B. Convert to a generated artifact with sync workflow
**Recommendation:** A — Mintlify constraints are already the canonical reference; snapshots are pure drift risk
**Surface:** docs-guide/
**Source:** D
**Decision:** pending

#### `docs-guide/notes.mdx`

**Question:** "Ally's Notes" personal scratchpad. Not in docs.json, not imported.
**Options:**
- A. Move to `docs-guide/_workspace/` (workspace lifecycle)
- B. Cut
**Recommendation:** A — scratchpad value retained
**Surface:** docs-guide/
**Source:** D
**Decision:** pending

#### `docs-guide/overview.mdx`

**Question:** Unclear relationship to `docs-guide/index.mdx` and `v2/resources/documentation-guide/documentation-overview.mdx`. Track A Session 2 noted documentation-overview retirement is blocked by render-gate.
**Options:**
- A. Compare against the other two and consolidate
**Recommendation:** A — needs inspection before recommending direction
**Surface:** docs-guide/
**Source:** D
**Decision:** pending

#### `.cursor/rules/*.mdc`

**Question:** Cursor-specific format. Auto-synced from canonical governance or hand-maintained?
**Options:**
- A. If hand-maintained: convert to generated from `docs-guide/frameworks/ai-tools-governance.mdx`
- B. If auto-synced: document the sync mechanism
**Recommendation:** Inspection needed
**Surface:** .cursor/
**Source:** D
**Decision:** pending

#### `docs-guide/repo-ops/config/.env.example` vs root `.env.example`

**Question:** Possible duplicate.
**Options:**
- A. If duplicate: pick canonical, delete the other
- B. If distinct purposes: document scope of each
**Recommendation:** Inspection needed
**Surface:** docs-guide/
**Source:** D
**Decision:** pending

---

### Group 10 — v2/ tab-level orphans (case-by-case)

#### `v2/index.mdx` (53 KB) and `v2/README.mdx`

**Question:** Not in docs.json. Mintlify may serve `v2/index.mdx` via default route resolution.
**Options:**
- A. Confirm Mintlify default-route behaviour; add to docs.json explicitly
- B. If not served: archive `v2/index.mdx`
**Recommendation:** A — establish the convention explicitly
**Surface:** v2/
**Source:** B
**Decision:** pending

#### `v2/about/concepts/index.mdx`

**Question:** Has no frontmatter; contains "Content coming soon..." x15. Likely intended as Mintlify redirect but unconfigured.
**Options:**
- A. Configure as redirect to the canonical landing
- B. Cut
**Recommendation:** B + add a docs.json redirect if needed
**Surface:** v2/about/
**Source:** B + E
**Decision:** pending

#### `v2/orchestrators/setup/s-guide.mdx`

**Question:** Naming suggests "scratch guide" or shortened. Orphan.
**Options:** A. Rename + add to nav. B. Cut.
**Recommendation:** B — name suggests temporary scratch
**Surface:** v2/orchestrators/
**Source:** B + E
**Decision:** pending

#### `v2/orchestrators/quickstart/tutorial.mdx`

**Question:** Generic name; check duplication with other tutorial pages.
**Recommendation:** Inspection needed
**Surface:** v2/orchestrators/
**Source:** B
**Decision:** pending

#### `v2/resources/resources/videos.mdx` (doubled folder)

**Question:** Path has `resources/resources/` — likely IA error.
**Options:** A. Move to `v2/resources/videos.mdx`. B. Cut.
**Recommendation:** A — verify content first
**Surface:** v2/resources/
**Source:** B
**Decision:** pending

#### `v2/resources/lpt/delegator-dashboard.mdx`, `v2/resources/portal.mdx`, `v2/resources/references/contract-addresses.mdx`

**Question:** Three orphans in v2/resources/. The `references/contract-addresses.mdx` likely duplicates `v2/about/resources/reference/livepeer-contract-addresses.mdx`.
**Options:** Per-file review
**Recommendation:** Inspection needed
**Surface:** v2/resources/
**Source:** B
**Decision:** pending

#### `v2/about/concepts/{about-livepeer,community,connect,decentralisation,delegators,gateways,governance,journey,orchestrators,participants,protocol}.mdx` and friends

**Question:** about/concepts/ has unclassified, composables, and core concept files. Some in docs.json, some not.
**Recommendation:** Walk the about/ tab as a focused session (Phase 2.6)
**Surface:** v2/about/
**Source:** B
**Decision:** defer to about/ walk

---

### Group 11 — Other

#### `v2/developers/_workspace/developers1/_workspace/` and `developers2/_workspace/`

**Question:** Nested clones of the developers workspace. Iteration debris?
**Options:** A. Flatten/cut. B. Keep nested.
**Recommendation:** A — flatten
**Surface:** v2/developers/_workspace/
**Source:** C
**Decision:** pending

#### `workspace/reports/contracts/` (13 MB)

**Question:** Verify against active CONTRACTS thread before archiving.
**Recommendation:** Cross-check with `workspace/plan/active/CONTRACTS/` outputs; archive what's superseded
**Surface:** workspace/
**Source:** C
**Decision:** pending

#### `workspace/thread-outputs/sessions/recovered-chats/` (7.7 MB, 20 files)

**Question:** Chat recovery dumps from VS Code extension crashes. If FUCK_CLAUDE thread (VS Code repair) is stable, can these be archived/cut?
**Options:** A. Cut now. B. Archive to `_workspace/archive/`. C. Keep until 90 days no-incident.
**Recommendation:** B — preserve briefly, prune in 60 days
**Surface:** workspace/
**Source:** C
**Decision:** pending
