> This file is archived. It is an early iteration note from design co-creation, superseded by `design-plan-v2.md`.

---
title: Documentation Governance — Holistic Design Plan
status: active
created: 2026-03-22
---

# Feedback givem for iteration 2

- This tells us what we have more than what we need

- Part 0 is missing: The plan needs a holistic structure for canonical docs and concerns.

- Current structure is wrong: I listed 7 different canonical locations (AGENTS.md, .claude/CLAUDE.md, docs-guide/, etc.) — that's not a holistic docs model.

- All canonical docs should end up in docs-guide (with their concern) — with a master-canonical doc bringing them together.

- Need a mermaid diagram showing where docs come from and where they should live.

- docs-guide structure needs co-design if unclear.

- The user wants me to step back and think about the canonical structure holistically — what belongs where, how everything flows together — rather than diving into implementation details.

---

# Documentation Governance — Holistic Top-Down Design Plan

> This document defines the full framework for documentation governance in this repo — top-down.
> It answers: what IS documentation, what triggers updates, what artifacts are produced, where they live,
> and how the model integrates with script, component, and ownerless governance.
> It is the design contract for all execution phases.

---

## Why This Exists

The repo has governance models for scripts (11-tag JSDoc, 9 catalog artifacts, P1–P6 tiers) and components (7-field JSDoc, pre-commit generation, 3 artifacts). But nothing governs the catalog pages themselves, AGENTS.md, ownerless-governance-surfaces.json, or the docs-guide policies. Those are documentation items with no governance model.

Documentation governance is the **meta-layer** — it governs the documentation that describes all other governance. Every script, component, and page generates documentation artifacts. Docs governance defines what those artifacts are, where they live, who reads them, and how they stay current.

The previous audit work was bottom-up (finding problems). This document is top-down (defining the model to fix them).

---

## Part 1: Documentation Tiers

### Tier 1 — Repo-Wide Canonical

Files authoritative for the whole repo. All contributors and agents must be able to locate and trust these.

| File / Location                                   | What it governs                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| `AGENTS.md`                                       | AI agent behaviour baseline — all agents read this first           |
| `.claude/CLAUDE.md`                               | Claude-specific adapter                                            |
| `.cursor/rules/*.mdc`                             | Cursor-specific adapter                                            |
| `.windsurf/rules/`, `.augment/`                   | System-specific adapters                                           |
| `docs-guide/`                                     | Internal governance — policies, frameworks, catalogs, tooling refs |
| `tools/config/ownerless-governance-surfaces.json` | Machine-readable surface manifest                                  |
| `.env.example`                                    | Secrets and env variable contracts                                 |

### Tier 2 — Concern-Specific Canonical

Files authoritative within one governance domain. Generated FROM source data by an established pipeline.

| Concern    | Source data                             | Generated artifacts                                                                           |
| ---------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| Scripts    | JSDoc in `operations/scripts/**/*.js`   | `script-index.md` (×9 folders) + `scripts-catalog.mdx` + `script-registry.json`               |
| Components | JSDoc in `snippets/components/**/*.jsx` | `component-registry.json` + schema + usage-map + `components-catalog.mdx` + v2 component docs |
| Pages      | Frontmatter in `v2/**/*.mdx`            | `pages-catalog.mdx` (to be built)                                                             |
| Governance | All of the above + docs-guide           | `documentation-catalog.mdx` (to be built)                                                     |

### Tier 3 — File-Local

Metadata embedded in the file itself. These are not separate documents — they ARE the documentation for that file.

| Format           | Metadata mechanism                                       | Gate                   |
| ---------------- | -------------------------------------------------------- | ---------------------- |
| `.mdx` / `.md`   | YAML frontmatter (`consumer`, `maintenance`, `status`)   | `pr-changed` soft gate |
| `.jsx`           | Component JSDoc spec (pre-existing — not overridden)     | `pre-commit` hard gate |
| `.js`            | 11-tag script JSDoc spec (pre-existing — not overridden) | `pre-commit` hard gate |
| `.json`          | `_meta` first-key (PROPOSED — see OQ-4)                  | `pr-changed` soft gate |
| `.yml` workflows | Catalog reference only — no inline metadata              | Catalog entry required |
| `.env.example`   | Comment header block (extend existing pattern)           | `pr-changed` soft gate |
| `.mdc`           | YAML frontmatter (same as `.md`)                         | None currently         |

---

## Part 2: The "What Updates When" Model

The core design question: when something changes, what documentation updates, how, and where?

### Trigger → Gate → Artifact Pipeline

```
Action                           Trigger       Gate          What updates
──────────────────────────────────────────────────────────────────────────────────
Add/edit JSX component           git add       pre-commit    component-registry.json (auto-staged)
Push JSX component               merge         post-merge    components-catalog.mdx (cron)
Add/edit JS script               git add       pre-commit    script JSDoc lint (warn only)
Push JS script                   merge         post-merge    script-index.md + scripts-catalog.mdx (cron)
Add/edit docs-guide .mdx page    git add       pre-commit    frontmatter lint (warn only)
Push docs-guide .mdx page        merge         post-merge    documentation-catalog.mdx (cron)
Edit AGENTS.md / adapter files   PR CI         soft gate     adapter parity check (warn)
Add JSON registry file           PR CI         soft gate     catalog entry required (warn)
Change .env.example              PR CI         soft gate     secrets validator (warn)
Add new ownerless surface        manual        on-demand     ownerless manifest + catalog entry
```

### Gate Layer Model (existing — docs governance maps onto this)

| Gate         | Type       | When                                  | Trigger                     |
| ------------ | ---------- | ------------------------------------- | --------------------------- |
| `pre-commit` | Hard block | Before every commit                   | `.githooks/pre-commit`      |
| `pr-changed` | Soft gate  | On PR open/update, changed files only | CI workflow                 |
| `pr-full`    | Soft gate  | Full repo scan (scheduled)            | CI workflow                 |
| `post-merge` | Cron sync  | After merge to `docs-v2`              | `governance-sync.yml`       |
| `on-demand`  | Manual     | Developer-initiated                   | `lpd repair --surface <id>` |

### Complete Artifacts Map

| Artifact                             | Location                         | Maintained by                    | Trigger              |
| ------------------------------------ | -------------------------------- | -------------------------------- | -------------------- |
| `scripts-catalog.mdx`                | `docs-guide/catalog/`            | `script-docs.test.js`            | post-merge cron      |
| `script-index.md` × 9                | `operations/scripts/<type>/`     | `script-docs.test.js`            | post-merge cron      |
| `script-registry.json`               | `operations/scripts/`            | `script-docs.test.js`            | post-merge cron      |
| `components-catalog.mdx`             | `docs-guide/catalog/`            | `generate-component-registry.js` | post-merge cron      |
| `component-registry.json`            | `docs-guide/`                    | `generate-component-registry.js` | pre-commit           |
| `component-usage-map.json`           | `docs-guide/`                    | catalog generator                | post-merge cron      |
| `ui-templates.mdx`                   | `docs-guide/catalog/`            | `generate-ui-templates.js`       | on-demand            |
| `pages-catalog.mdx`                  | `docs-guide/catalog/`            | **to be built**                  | post-merge cron      |
| `documentation-catalog.mdx`          | `docs-guide/catalog/`            | **to be built**                  | post-merge cron      |
| `ownerless-governance-surfaces.json` | `tools/config/`                  | hand-maintained + validator      | on-demand            |
| All `docs-guide/*.mdx` pages         | `docs-guide/`                    | hand-maintained                  | hand-reviewed        |
| `AGENTS.md` + adapter files          | `/`, `.claude/`, `.cursor/` etc. | hand-maintained                  | adapter parity check |

---

## Part 3: Metadata Specification

All documentation items carry governance metadata IN the file itself (not only in a catalog). The catalog is a derived view — the file is the source of truth.

### Agreed fields (all MDX/MD documentation items)

```yaml
---
title: string # REQUIRED — display title
description: string # REQUIRED — one-sentence purpose
consumer: [human | agent | automation] # REQUIRED — array; who reads/acts on this file
maintenance: generated | hand-maintained | mixed # REQUIRED
status: active | draft | deprecated # REQUIRED
# Conditional:
generator: path/to/script.js # REQUIRED if maintenance: generated or mixed
validator: path/to/script.js # REQUIRED if maintenance: hand-maintained or mixed
lastVerified: YYYY-MM-DD # REQUIRED if maintenance: hand-maintained
---
```

### Field definitions

**`consumer`** — who reads and acts on this file in production use:

- `human` — contributors read this for guidance; agents do not act on it operationally
- `agent` — AI agents read this for operational or governance decisions; humans may also read
- `automation` — generator scripts or CI pipelines consume this; humans and agents do not read directly

**`maintenance`** — how the file stays current:

- `generated` — produced by a script; do not edit directly; banner required at top of file
- `hand-maintained` — written by humans; requires `lastVerified` + `validator` fields
- `mixed` — partly generated sections + partly hand-maintained sections; both rules apply

**`status`** — current lifecycle state:

- `active` — in use; reflects current repo state
- `draft` — under construction; not yet authoritative
- `deprecated` — superseded; points to replacement

### JSON files — `_meta` first-key (OPEN DECISION — OQ-4)

Proposed approach:

```json
{
  "_meta": {
    "consumer": ["automation"],
    "maintenance": "generated",
    "generator": "operations/scripts/generators/components/library/generate-component-registry.js",
    "status": "active",
    "description": "Machine-readable component registry — consumed by catalog generators and validators."
  }
}
```

**Decision gate**: Does `_meta` break existing consumers of `component-registry.json`, `ownerless-governance-surfaces.json`, etc.? Must validate before adopting. If it breaks consumers → catalog-only (JSON described in documentation-catalog.mdx only, with ownerless surface entry required).

### YAML workflows — catalog reference only

Workflow `.yml` files are canonical source for CI behaviour. They are referenced BY documentation, not documentation themselves. No inline metadata added. The docs-guide page that references a workflow notes the dependency.

### `.env.example` — comment section header

```
# ─────────────────────────────────────────────────────────────────────────────
# .env.example — Canonical secrets and environment variable reference
# consumer: human, agent | maintenance: hand-maintained
# validator: tools/scripts/validators/governance/compliance/validate-env-example.js
# ─────────────────────────────────────────────────────────────────────────────
```

### AI adapter files — YAML frontmatter (OPEN DECISION — OQ-2)

Options:

- **A**: Add YAML frontmatter to AGENTS.md + all `.md` adapter files (standard approach)
- **B**: No frontmatter — register adapter files in ownerless manifest; catalog-only

Risk of Option A: some agents parse AGENTS.md as plain governance text; YAML frontmatter may confuse them. Must test.
Preferred default: Option A if safe, Option B as fallback.

### `.jsx` and `.js` — pre-existing specs (not overridden)

Docs governance reads their outputs (registries, catalogs) but does NOT add fields to source files.

---

## Part 4: Integration with Existing Governance

Documentation governance is the meta-layer over all other governance systems.

### Integration points

| Governance system        | How docs governance integrates                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Script governance**    | `script-docs.test.js` outputs → fed into `documentation-catalog.mdx`; `scripts-catalog.mdx` gets `consumer`/`maintenance` frontmatter from docs governance spec |
| **Component governance** | `generate-component-registry.js` outputs → fed into `documentation-catalog.mdx`; `components-catalog.mdx` gets docs governance frontmatter                      |
| **Ownerless governance** | Docs governance adds 5 new surfaces to manifest: `.env.example`, adapter file parity, docs-guide pages set, documentation-catalog, pages-catalog                |
| **Content pipeline**     | `pages-catalog.mdx` is a docs governance artifact; `consumer`/`maintenance` spec does NOT touch `v2/` content frontmatter (`audience` field — separate spec)    |
| **AI tools governance**  | `AGENTS.md` and adapter files are docs governance items; adapter parity check becomes ownerless surface                                                         |

### What docs governance uniquely owns

Nothing else governs these:

- `docs-guide/policies/*.mdx` — policy files
- `docs-guide/frameworks/*.mdx` — framework files
- `docs-guide/features/*.mdx` — feature map files
- `docs-guide/tooling/*.mdx` — tooling ref files
- `docs-guide/contributing/*.mdx` — contributor guides
- `docs-guide/catalog/documentation-catalog.mdx` — the governance catalog (to be built)
- `AGENTS.md` + all AI adapter files
- `.env.example`

---

## Part 5: Gaps to Close

| Gap                                                            | Impact                                            | Phase    |
| -------------------------------------------------------------- | ------------------------------------------------- | -------- |
| No `consumer`/`maintenance` frontmatter on any docs-guide page | Agents/validators can't classify docs items       | 3A       |
| `documentation-catalog.mdx` doesn't exist                      | No machine-readable inventory of all doc surfaces | 3B       |
| `pages-catalog.mdx` doesn't exist                              | No inventory of v2/ content pages                 | 3B       |
| `_meta` for JSON — undecided                                   | JSON files have no in-file governance signal      | 1 (OQ-4) |
| No adapter parity validator                                    | AGENTS.md can drift from `.claude/CLAUDE.md` etc. | 5B       |
| `documentation-governance-policy.mdx` doesn't exist            | Governance model is not self-describing           | 7        |
| `components-catalog.mdx` stale (wrong banner path)             | Immediate — no coordination needed                | 2        |
| `.env.example` not in ownerless manifest                       | Secrets doc has no enforcement gate               | 5A       |
| AI adapter files not in ownerless manifest                     | Adapter drift has no enforcement gate             | 5A       |
| `docs-guide/features/ai-features.mdx` stub                     | Gap in feature documentation                      | 4A       |
| `v2/internal/docs-philosophy.mdx` duplicate                    | Confusion for agents reading internal governance  | 2        |

---

## Part 6: Phase Plan

### Phase 1 — Model Co-Creation (inline in chat — human approves each item)

| Task | What                                                                  | Gate                   |
| ---- | --------------------------------------------------------------------- | ---------------------- |
| 1.1  | `consumer` enum — ✅ resolved: `human`, `agent`, `automation` (array) | Done                   |
| 1.2  | `maintenance` enum — confirm: `generated`, `hand-maintained`, `mixed` | ⏸ human confirms       |
| 1.3  | Validator standard for hand-maintained files                          | ⏸ human chooses option |
| 1.4  | Repair path requirements                                              | ⏸ human approves       |
| 1.5  | Ownerless registration scope for docs governance                      | ⏸ human approves       |
| OQ-2 | AI adapter file frontmatter — Option A or B                           | ⏸ human decides        |
| OQ-4 | JSON `_meta` first-key — adopt or catalog-only                        | ⏸ human decides        |
| 1.6  | Freeze `structure.md` — all format specs final                        | ⏸ human approves       |
| 1.7  | Write `Frameworks/doc-item-model.md`                                  | ⏸ FINAL GATE           |

**Rule**: Nothing in Phase 2+ executes until Phase 1 is frozen.

### Phase 2 — Immediate Fixes (no coordination — safe, targeted)

- Fix wrong filename in `docs-guide/policies/source-of-truth-policy.mdx`
- Fix stale `tasks/` path in `docs-guide/docs-glossary.md`
- Re-run `components-catalog.mdx` generator
- Resolve `v2/internal/docs-philosophy.mdx` duplicate (human decides: delete or redirect)
- Add scope cross-links to all three glossary files

### Phase 3 — Inventory Application

- **3A**: Apply `consumer` + `maintenance` frontmatter to all ~40 docs-guide pages
  - Draft review table first → ⏸ human approves → execute
- **3B**: Build `documentation-catalog.mdx` (full inventory — every doc surface in repo)

### Phase 4 — Structural Remediation (coordination-dependent)

- Populate or remove `docs-guide/features/ai-features.mdx`
- Coordinate REPO Phase 1.3 (`contribute/` → `docs-guide/contributing/` merge)
- Resolve AI governance overlap (`v2/internal/overview/governance.mdx` vs docs-guide)
- Secrets documentation decisions (merge `.env.example` files or cross-link)

### Phase 5 — Validator + Ownerless Coverage

- Register 5 new ownerless surfaces: `.env.example`, adapter parity, docs-guide pages, documentation-catalog, pages-catalog
- Write validators: docs-guide naming conventions, adapter parity check, workflow secrets mapping
- Add freshness gates for hand-maintained files (`lpd-cli.mdx`)

### Phase 6 — Public Surface Sync

- Audit `v2/resources/documentation-guide/` (18 pages) against docs-guide counterparts
- Decide: cross-reference + scope note, summary+link, or confirm as genuine public-audience page

### Phase 7 — Governance Doc Output

- Write `docs-guide/policies/documentation-governance-policy.mdx` (the self-describing canonical)
- Update `source-of-truth-policy.mdx` with documentation governance as a boundary
- Update `source-of-truth-guide.mdx` update rules

### Phase 8 — Handoffs + Plan Closure

- Feed outputs to REPO, SCRIPT, COMPONENT, AI-TOOLS plans
- Close CANONICAL-TRUTH-GUIDES stub plan (scope absorbed here)
- Move to `workspace/plan/complete/DOCUMENTATION/`

---

## Part 7: Project Management

### Co-working rules

1. Phase 1 model decisions happen **inline in chat first** — draft, refine, approve — THEN file creation
2. Each phase gate pauses for human approval before next phase begins
3. File creation order: model decision → review table → human approves → execute — never skip to execution
4. Cross-plan flags: any change affecting REPO, SCRIPT, COMPONENT, or AI-TOOLS is flagged before acting
5. No new documentation files created to document the process of documenting — workspace/plan is scratch; docs-guide is the destination

### Working folder state

```
workspace/plan/active/DOCUMENTATION/
├── prd.md                   ✅ complete
├── plan.md                  ✅ complete (phases tracker)
├── context.md               ✅ complete
├── research.md              ✅ complete
├── audit.md                 ✅ complete
├── recommendations.md       ✅ complete
├── designing/
│   ├── design-plan.md       ← this file — holistic top-down framework
│   ├── structure.md         ← needs JSON/YAML decisions (Phase 1 OQ-4, OQ-2)
│   └── consumer-assignments.md  ← premature; revisit after structure.md frozen
├── Frameworks/
│   └── doc-item-model.md    ← NOT YET: Phase 1 gate output
└── Tasks/
    └── (all task files not yet created — Phase 2+)
```

---

## Part 8: Testing & Iteration

### Test suite targets

After each phase, run relevant tests to verify no regression:

| Test                           | Command                                                                                        | Pass condition                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Frontmatter coverage           | `node tests/unit/docs-guide-sot.test.js --check`                                               | Every `docs-guide/*.mdx` has `consumer`, `maintenance`, `status` with valid enum values |
| Script catalog currency        | `node tests/unit/script-docs.test.js --check`                                                  | All script-index.md files + scripts-catalog.mdx match current source                    |
| Component registry currency    | `node operations/scripts/generators/components/library/generate-component-registry.js --check` | component-registry.json matches current JSX source                                      |
| Ownerless surface reachability | `node tools/scripts/validators/governance/compliance/validate-ownerless-surfaces.js --check`   | Every `canonical_sources` path resolves to existing file                                |
| Adapter parity                 | `node tools/scripts/validators/governance/compliance/validate-adapter-parity.js --check`       | All critical AGENTS.md rules exist in `.claude/CLAUDE.md` (or marked adapter-specific)  |

### Agent behaviour test (manual — after Phase 3)

1. New Claude Code session in this repo
2. Ask: "Where is the canonical source for component governance?" → expect: agent navigates to `docs-guide/policies/agent-governance-framework.mdx`
3. Ask: "What scripts are available for content auditing?" → expect: agent references `scripts-catalog.mdx` or `script-index.md` for `audits/content`
4. If agent hallucsinates paths → docs-guide pages are missing, misnamed, or lack machine-readable metadata → fix and retest

### Freshness gate test (Phase 5C)

- Simulate a change to `lpd --help` output (add a flag, remove a flag)
- Run freshness check for `docs-guide/tooling/lpd-cli.mdx`
- Expected: gate emits a warning that file may be stale relative to its source

### Iteration protocol

1. Run tests after each phase gate
2. Failures → diagnose root cause, fix phase tasks, re-run (no sleeping, no retrying same approach)
3. Agent behaviour failures → the metadata or page content needs work — never mask with a redirect
4. Freshness false positives → adjust gate threshold, document why

---

## Part 9: Reusable Infrastructure (do not rebuild)

| Existing asset                       | Path                                                | How this plan uses it                                      |
| ------------------------------------ | --------------------------------------------------- | ---------------------------------------------------------- |
| `governance-pipeline.js`             | `operations/scripts/dispatch/governance/pipelines/` | Add documentation catalog regeneration as a pipeline stage |
| `governance-sync.yml`                | `.github/workflows/`                                | Add catalog generation trigger step                        |
| `script-docs.test.js`                | `operations/tests/unit/`                            | Pattern reference for documentation-catalog generator      |
| `generate-component-registry.js`     | `operations/scripts/generators/components/library/` | Pre-commit generation pattern                              |
| `docs-guide-sot.test.js`             | `tests/unit/`                                       | Extend to check `consumer` + `maintenance` fields          |
| `ownerless-governance-surfaces.json` | `tools/config/`                                     | Add 5 new entries — not a new manifest                     |
| `lpd repair --surface`               | CLI                                                 | New surfaces auto-inherit repair path mechanism            |

---

## Open Decisions

| #    | Question                                                                                       | Blocks              | Status                        |
| ---- | ---------------------------------------------------------------------------------------------- | ------------------- | ----------------------------- |
| OQ-1 | Should `docs-glossary.md` become `.mdx` (Mintlify-served) or stay `.md` (internal only)?       | Format assignment   | Open                          |
| OQ-2 | Add YAML frontmatter to AGENTS.md + adapter files, or catalog-only?                            | Adapter spec        | Open — test required          |
| OQ-3 | What fields apply to `v2/resources/documentation-guide/` public pages? Same spec or different? | Public surface spec | Open                          |
| OQ-4 | JSON `_meta` first-key — adopt or catalog-only?                                                | JSON spec           | Open — consumer test required |
