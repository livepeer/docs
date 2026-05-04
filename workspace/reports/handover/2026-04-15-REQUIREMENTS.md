# Livepeer Docs v2 — Production-Ready Handover Requirements

**Date:** 2026-04-15
**Purpose:** Canonical "What Success Looks Like" list. Every requirement here is the bar the repo must meet before handover to Livepeer. This is the source document for the gap audit that follows.
**Rule:** Every requirement is source-cited. If a requirement has no source, it is a proposal, not a rule, and is tagged `[PROPOSAL]`.

<CustomDivider />

## Part 0 — How to use this document

This file defines the finished state. The gap report that follows will map every verified state (`find`, `grep`, read) against the requirements below and classify each as:

- **Met** — evidence exists and passes
- **Partial** — evidence exists but fails a criterion or is stale
- **Missing** — no evidence on disk
- **Conflict** — two canonical sources disagree (both cited)

A surface is production-ready when every `[P0]` and `[P1]` requirement for it is **Met**. `[P2]` is quality drift (should be met, does not block handover). `[P3]` is advisory.

Severity model source: `docs-guide/policies/infrastructure-principles.mdx` (P0 merge/deploy, P1 correctness, P2 quality drift, P3 advisory).

<CustomDivider />

## Part 1 — Scope (verified counts, 2026-04-15)

Counted from the working tree, not from documentation claims.

| Surface | Count | Command / source |
|---|---|---|
| Publishable v2 MDX pages | 2,420 total under `v2/` (793 publishable excluding `_workspace`, `snippets`, `templates`) | `find v2 -name '*.mdx'` |
| v2 `about` tab | 46 | `find v2/about -name '*.mdx'` |
| v2 `community` | 27 | — |
| v2 `delegators` | 42 | — |
| v2 `developers` | 163 | — |
| v2 `gateways` | 567 | — |
| v2 `home` | 20 | — |
| v2 `internal` | 21 | — |
| v2 `orchestrators` | 231 | — |
| v2 `resources` | 51 | — |
| v2 `solutions` | 140 | — |
| v1 frozen pages | 279 | `find v1 -name '*.mdx'` |
| Scripts (`operations/scripts/`) | 249 | `find operations/scripts -name '*.js'` |
| Components (`snippets/components/`) | 58 (34 current + 24 archived) | `find snippets/components -name '*.jsx'` |
| Workflows | 60 | `find .github/workflows -name '*.yml'` |
| Frameworks (`docs-guide/frameworks/`) | 14 | `ls docs-guide/frameworks` |
| Standards (`docs-guide/standards/`) | 5 | `ls docs-guide/standards` |
| Policies (`docs-guide/policies/`) | 17 | `ls docs-guide/policies` |
| `.env` files present on disk | 2 (`./.env`, `./workspace/plan/active/SOLUTIONS-SOCIAL-DATA/.env`) | `find . -name '.env' -not -path '*/node_modules/*'` |

Claims to cross-check against `docs-guide/docs-library/index.mdx`:

- Library claims **49 workflows**, filesystem shows **60** → **stale**.
- Library claims 27 generators / 43 validators / 21 remediators / 19 audits / 34 dispatch / 13+29 automations. These need direct verification before trust.

<CustomDivider />

## Part 2 — Definition of "production-ready handover"

Handover is ready when **all** of the following are true at the same time on the `docs-v2-dev` branch (and, once merged, on `docs-v2`):

1. **Every published page meets the content quality bar** in Part 3 — voice, structure, factual accuracy, frontmatter, renders.
2. **Every governed surface has zero P0/P1 gaps** per Part 4 — no framework/standard/policy is stale or conflicting.
3. **Every enforcement tier passes** per Part 5 — pre-commit, pre-push, PR CI, full sweep all green on a clean clone.
4. **No secrets in the repo** per Part 12 — zero `.env` files outside `.gitignore`-covered scratch paths; no committed tokens.
5. **No orphan or dead-link pages** per Part 3.6 — every `docs.json` entry resolves; no on-disk publishable page is unrouted.
6. **All decisions are locked or explicitly deferred with owner + date** per Part 11 — no in-flight ambiguity that blocks authoring.
7. **The handover document exists** per Part 15 — a human operator can open it and be productive within 30 minutes without asking Alison anything.

Nothing less than all seven counts as production-ready.

<CustomDivider />

## Part 3 — Content requirements (v2/**)

**Source authorities:** `workspace/plan/active/_MY_PROCESS/my-process.mdx`, `workspace/plan/active/CONTENT-WRITING/prd-canonical.md`, `workspace/plan/active/CONTENT-WRITING/plan-canonical.md`, `docs-guide/standards/voice-and-copy.mdx`, `docs-guide/standards/authoring-standard.mdx`, `docs-guide/standards/frontmatter.mdx`, `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md`, `docs-guide/frameworks/content-writing.mdx`.

### 3.1 Pipeline completion (my-process 9 phases)

For every tab (`about`, `community`, `delegators`, `developers`, `gateways`, `home`, `internal`, `orchestrators`, `resources`, `solutions`), each of the 9 phases in `_MY_PROCESS/my-process.mdx` must have shipped output, checked in under `workspace/plan/active/CONTENT-WRITING/context-packs/` or equivalent:

| # | Phase | Required artefact per tab | Severity |
|---|---|---|---|
| 1 | Personas, audience, journey | `{tab}-audience-doc.md` with primary persona, arriving question, JTBDs, terminology lock | P1 |
| 2 | IA section structuring | `{tab}-content-scan.md` with KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP dispositions; `tab-map.mdx` generated | P1 |
| 3 | Content mapping, veracity, terminology | Veracity-checked claims per page; terminology lock checked in | P1 |
| 4 | IA pages + journeys | `REVIEW-REGISTRY.md` per tab with all pages, predecessor/successor links | P1 |
| 5 | Find info + gaps | Research packs per section (`docs-page-research.js` output) | P2 |
| 6 | Copy writing + fill | Full content in every page — no TODO/FIXME/PLACEHOLDER/TBD markers | P1 |
| 7 | Copy quality checks | `rubric-static-review` pass ≥ 80/100 per page | P2 |
| 8 | Layout + style | Component usage audit — no inline styles in MDX, no hardcoded hex, no legacy tokens | P1 |
| 9 | Human style review + refine | Sign-off from Alison per tab recorded in `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md` | P0 |

**Current state per `decisions/tab-status.md` (verified):** all 5 canonical tabs (about/delegators/developers/gateways/orchestrators) show IA NOT approved and terminology NOT locked — Phase 2 incomplete. No tab passes Phase 9.

### 3.2 Frontmatter — required on every publishable v2 page

Source: `docs-guide/standards/frontmatter.mdx` + `docs-guide/frameworks/content-writing.mdx`.

**Required (P0):**
- `title` — string, matches the page title
- `sidebarTitle` — short form used in nav
- `description` — 1–2 sentences, states what the page provides
- `keywords` — list of search terms

**Required for governance (P1):**
- `pageType` — one of the canonical 7: `concept | tutorial | guide | instruction | navigation | reference | resource`
- `audience` — one of the canonical 7: `founder | builder | developer | gateway | orchestrator | delegator | community`
- `purpose` — one of the canonical 15 pagePurpose values (per `content-writing.mdx`)

**Required for veracity (P1):**
- `veracityStatus` — `verified | unverified | stale`
- `lastVerified` — ISO date

**Optional but governed when present (P2):**
- `pageVariant`, `complexity` (1–3), `lifecycleStage` (7 values), `information-type` (9 values), `industry`, `og-image`

**Current state (verified):** only **1** of 793 publishable pages has `veracityStatus`. **105** have no `pageType`. **33** still use deprecated `pageType` values from the old taxonomy (`landing`, `how_to`, `quickstart`, `faq`, `troubleshooting`, `glossary`). **684** have `audience`, **662** have `purpose`, **561** have `lifecycleStage`. Baseline: 519/793 use the 7-type canonical.

### 3.3 Voice — applies to every publishable page

Source: `docs-guide/standards/voice-and-copy.mdx`, `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md`.

Required (P1):
- UK English throughout (`-ise`, `-our`, `-re`; licence noun / license verb)
- No em dashes (`—`) in body prose
- No questions in H1/H2/H3 headings
- No banned words (`effectively`, `essentially`, `basically`, `meaningful`, `significant`, `various`, `several`, `obviously`, `clearly`)
- No banned phrases (`This section covers`, `This page [verb]`, `Understanding X is essential`, `It is important to note`, `As mentioned above`, `and so on`, `rather than`, `what it takes`, `not just X`)
- No banned constructions (`not [X]` in value claims, `if [condition]` in body prose, `can/may [verb]` in value claims)
- Voice register matches `audience` frontmatter per the 7-audience register table

Paragraph discipline (P1):
- One paragraph, one job
- Lead sentence is a fact
- Final sentence is a fact, number, or next step — never a hedge

Audience-specific extras (orchestrator pages, P1 — applies to 231 pages):
- No "simply", "just", "easy"
- Every value claim quantified (numbers, thresholds, ranges)
- No "your orchestrator will automatically…" framings

Enforcement: `validator-brand-check-copy-standards.yml` currently **advisory only** (gap #8, P2). Must be promoted to P2 blocking gate per gap report recommendation.

### 3.4 Structure — every publishable page

Source: `docs-guide/frameworks/content-writing.mdx`, `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` §5.

Required (P1):
- H1 comes from frontmatter `title` only — never in body
- H2 for major sections, H3 for subsections
- No depth beyond H4 (avoid)
- Code formatting: backticks for CLI flags, commands, file names, values; **no** backticks around conceptual terms
- Numbers: ETH decimals (`0.1 ETH`), LPT plain (`100 LPT`), VRAM (`32 GB VRAM`), time as ranges (`~30 minutes`)
- Links: internal = relative path; external = `<DoubleIconLink>` describing destination

Forbidden patterns in MDX (P0 — render-breaking or style-breaking):
- `style={{}}` inline styles in MDX (audit category: `inline-style-mdx`, high severity)
- Hardcoded hex colours outside code blocks (`hardcoded-hex-mdx`, medium)
- `var(--accent)` legacy token — must be `var(--lp-color-accent)` (`legacy-token`, medium)
- Literal spacing values `1rem`/`4px` instead of `var(--lp-spacing-*)` (`literal-spacing`, low)
- `outline: none` / `outline: 0` (WCAG violation, `outline-removal`, high)
- Mermaid init directives not matching standard signature (`mermaid-hardcoded`, medium)

Source: `docs-guide/frameworks/styles-engineering-guide.mdx`. Current baseline (2026-04-08): 0 non-mermaid violations, 69 mermaid variants remaining.

### 3.5 Components — required usage

Source: `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` §6, `docs-guide/frameworks/component-framework-canonical.mdx`.

Required (P1):

| Need | Must use | Must NOT use |
|---|---|---|
| Internal nav | `<GotoLink>`, `<GotoCard>` | Plain `[text](url)` |
| Quotes | `<Quote>`, `<FrameQuote>` | Markdown blockquote `>` |
| External links | `<DoubleIconLink>` | Plain markdown links |
| Tips | `<TipWithArrow>` | `<Tip>` |
| Tables | `<StyledTable variant="bordered">` | Plain markdown tables |
| Procedures | `<StyledSteps>` | Numbered lists |

Import paths: always absolute from root (`/snippets/components/...`) with file extension. No relative imports from v2 pages.

### 3.6 Coverage + routing integrity

Source: `docs.json` + `docs-guide/policies/governance-index.mdx` §11 (site config).

Required (P0):
- Every publishable v2 MDX page resolves from at least one `docs.json` nav entry (or is explicitly marked `managed:true` / `hidden`).
- Every `docs.json` entry points to a file that exists.
- Zero broken internal links (`mint broken-links` clean).
- Zero zombie pages (files on disk unreachable from nav and not declared managed).
- Every renamed page has a redirect in `docs.json`.

### 3.7 Stubs and placeholders

Required (P1):
- Zero pages ≤ 30 lines in publishable v2 paths unless explicitly declared placeholders in `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`.
- Zero `TODO`, `FIXME`, `PLACEHOLDER`, `TBD`, `XXX` markers in publishable body content.

**Current state (verified):** 139 stubs, 100 pages with explicit placeholder markers.

### 3.8 Veracity

Source: `workspace/plan/active/CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md` + `veracity-sources.md`.

Required (P1):
- Every page has `veracityStatus: verified` before handover, unless declared `stale` with owner + reverify date.
- Every factual claim is backed by a source in the 45-source T1/T2/T3 authority library or by SME confirmation logged in the verification queue.
- The 4 items in `workspace/plan/active/SHIP-CONTENT/decisions.md` verification queue (V-01 fee cut direction, V-02 active set size, V-03 AI routing active-set independence, V-04 LIP-92 identity) are resolved before Orchestrators handover.

### 3.9 Terminology lock

Source: `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` §9 + `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`.

Required (P1):
- Per-tab terminology locks committed (45 terms for orchestrators; equivalent for each tab).
- Deprecated terms purged: no "broadcaster" (→ gateway), no "miner" (→ orchestrator), no "node operator" generically, no "API gateway" for `gateway`, no "commission" for reward/fee cut.
- `domain terms` table in `.claude/CLAUDE.md` matches the locked glossary in every tab.

<CustomDivider />

## Part 4 — Governance surface requirements

**Source:** `docs-guide/policies/governance-index.mdx`.

The governance-index is the contract. Every governed surface below must have all four of: **(a)** canonical framework file, **(b)** GOVERNANCE.md marker in its root path, **(c)** active validator in CI, **(d)** `lastVerified` date within 90 days.

### 4.1 — 13 governed surfaces

| # | Surface | Root | Framework | Validator | Current status per governance-index |
|---|---|---|---|---|---|
| 1 | Components | `snippets/components/` | `docs-guide/frameworks/component-framework-canonical.mdx` | component registry validator | Current (badges sub-niche undocumented — P2) |
| 2 | Scripts | `operations/scripts/` | `docs-guide/frameworks/script-framework.mdx` | JSDoc + placement validators | Partially stale (15 old-path refs in working spec; 49 JSDoc violations — P2) |
| 3 | AI tools & skills | `ai-tools/ai-skills/` | `docs-guide/frameworks/ai-tools-governance.mdx` | SKILL.md conformance | Current (95% complete) |
| 4 | Repo structure | Root | `docs-guide/frameworks/repo-structure.mdx` (LOCKED) | root allowlist gate | Current — 100% GOVERNANCE.md coverage |
| 5 | Content writing | `v2/` | `docs-guide/frameworks/content-writing.mdx` | voice/structure/frontmatter validators | **Active — incomplete**, 5 tab IAs not locked (P0 per handover) |
| 6 | Documentation | `docs-guide/` | `docs-guide/frameworks/doc-item-model.mdx` (FROZEN) | doc-item validator | Model locked, execution blocked on human review |
| 7 | Snippets root | `snippets/` | `snippets/guide.mdx` | snippet registry | Current |
| 8 | Mintlify constraints | platform-wide | `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` | pre-commit MDX checks | Current |
| 9 | File placement | cross-cutting | `docs-guide/frameworks/file-placement.mdx` | placement validator | Current |
| 10 | GitHub Actions | `.github/workflows/` | `.github/workspace/framework-canonical.md` + `docs-guide/frameworks/github-actions.mdx` | governance-map validator | Phases 1–5 complete; Phase 6 renames pending (P2) |
| 11 | Styles | `style.css`, MDX, JSX | `docs-guide/frameworks/styles-engineering-guide.mdx` | `audit-styles.js` | Current — 0 non-mermaid violations |
| 12 | Site config (docs.json) | `docs.json` | hand-maintained | Mintlify build + redirect gate | Current |
| 13 | Web contracts (robots.txt) | `robots.txt` | hand-maintained | no automated validator (P3 gap) | Current |

### 4.2 — Framework conflicts to resolve (P1)

Verified by direct read of both files:

- `docs-guide/frameworks/page-taxonomy-framework.mdx` lists pageType as `[landing, overview, tutorial, quickstart, how_to, concept, reference, faq, troubleshooting, changelog, glossary, guide]` and **9** audiences (`developer, gateway-operator, orchestrator, delegator, platform-builder, community, internal, general, everyone`).
- `docs-guide/frameworks/content-writing.mdx` (the canonical) lists 7 pageTypes (`concept, tutorial, guide, instruction, navigation, reference, resource`) and **7** audiences (`founder, builder, developer, gateway, orchestrator, delegator, community`).

Both live in `docs-guide/frameworks/`. One must be retired or aligned. `page-taxonomy-framework.mdx` is the older schema and drives 33 pages that still use deprecated values. **Resolution required before handover** — either the 7-type canonical wins and `page-taxonomy-framework.mdx` is deprecated, or the conflict is documented as a migration plan with owner + dates.

### 4.3 — Governance map freshness

Required (P1):
- `docs-guide/repo-ops/config/repo-governance-map.mdx` regenerated (`generate-governance-map.js --check` exits 0).
- `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json` matches the rendered map.
- Every framework has `lastVerified` ≤ 90 days old at handover date.

<CustomDivider />

## Part 5 — Quality gates (enforcement tiers)

**Source:** `docs-guide/policies/quality-gates.mdx`, `.claude/CLAUDE.md`, `AGENTS.md`.

Required (P0 — all of these must pass on a clean clone before handover):

| Tier | Gate | Must pass | Budget |
|---|---|---|---|
| Pre-commit | `lpd test --staged` | All staged files pass voice + structure + MDX + styles | ≤60s |
| Pre-commit | Root allowlist | `.allowlist` enforces no new root entries | ≤5s |
| Pre-push (codex) | `.codex/task-contract.yaml` | Codex branch validators pass | — |
| PR CI (P2/P3) | Changed-scope checks | Blocking on: structure-lint, frontmatter, broken-links, component registry, a11y, agent-docs-freshness | — |
| Full sweep | `mint validate` | Full build, zero errors, zero warnings unless whitelisted | — |
| Weekly cron | `remediator-brand-repair-style-tokens.yml` | Audit report artefact uploaded | — |

Gaps that must be closed before handover (P1):
- Brand checks advisory → P2 blocking (gap #8).
- Component registry `continue-on-error` → blocking (gap #9).
- JSDoc validator wired into blocking workflow (gap #12).
- Voice register validator shipped (gap #3).
- Script placement validator shipped (gap #7).

<CustomDivider />

## Part 6 — Component requirements

**Source:** `docs-guide/frameworks/component-framework-canonical.mdx`, `docs-guide/frameworks/file-placement.mdx`.

For every `.jsx` in `snippets/components/` (58 current):

Required (P1):
- 7-tag JSDoc header in the canonical order, every tag present
- Placed in the correct category folder: `elements | wrappers | displays | scaffolding | integrators | config`
- Uses `var(--lp-color-*)` tokens — no legacy aliases, no hardcoded hex
- Accepts `style={}` and `className=""` with merge pattern
- Uses `var(--lp-spacing-*)` for standard spacing
- No `outline: none` — uses `:focus-visible` if custom focus needed
- Dark mode works via CSS variables (no JS theme detection)
- Responsive: tested at 375px, 768px, 1024px
- `data-docs-*` attribute if `style.css` targets it

Required (P0):
- Component registry (`snippets/snippets-registry.mdx`) regenerated and matches filesystem
- Every consumer (v2 pages, other components) imports from absolute `/snippets/components/...` path
- No component internals inlined into MDX (hard boundary from `.claude/CLAUDE.md`)
- Archived components (`snippets/components/x-archive/`, 24 files) either removed or formally documented as archived

<CustomDivider />

## Part 7 — Script requirements

**Source:** `docs-guide/frameworks/script-framework.mdx`, gap report #12, #13, #16, #17.

For every `.js` in `operations/scripts/` (249 files):

Required (P1):
- 11-tag JSDoc header in canonical order: `@script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy`
- Placed under correct `type/concern/niche` path
- `--dry-run` flag supported for any script that writes files
- Exit codes: 0 pass, 1 fail, 2 config error (per framework)

Required (P0):
- Zero `.js` files outside governed locations (gap #17 resolved — 2 snippets scripts must move or be registered as exceptions)
- `.github/scripts/` → `operations/scripts/` migration complete (gap #16, D-ACT-06)
- JSDoc validator blocking (gap #12)

**Current state (claimed):** 49 JSDoc violations (gap #13) across contracts modules, translation libs, test files, and `.github/scripts/`.

<CustomDivider />

## Part 8 — Workflow requirements

**Source:** `docs-guide/frameworks/github-actions.mdx`, 8 locked decisions D-ACT-01 through D-ACT-08, gap report.

For every `.yml` in `.github/workflows/` (60 files):

Required (P1):
- Naming: `type-concern-verb-name.yml` with 11-verb closed enum
- One of 7 types: `integrator | generator | validator | audit | remediator | dispatch | interface`
- One of 7 concerns: `copy | health | maintenance | discoverability | governance | brand | integrations`
- One of 8 pipeline tags (P2–P6, manual, event-driven)
- Dispatcher model: workflows dispatch, scripts execute (D-ACT-08)
- Entry in `.github/workspace/actions-library/actions-audit.json`
- Documented page in `.github/workspace/actions-library/`

Required (P0):
- `docs-guide/docs-library/index.mdx` count reflects actual (currently claims 49, actual 60 — **stale**, P1 to fix before handover)
- Contract addresses workflow diverged between branches (gap #1) — documented as deferred to full merge with owner + date

<CustomDivider />

## Part 9 — Mintlify platform requirements

**Source:** `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`.

Required (P0 — violations cause render failures):
- No React / hook imports in MDX
- No Mintlify global imports
- Root-absolute imports for shared resources with file extensions
- Arrow function syntax only for MDX-facing JSX exports
- No file-scope constants in MDX-facing JSX (define inside export bodies)
- No local server on port 3000 or 3333 from agents (those are human-owned)

Required (P0 at render time):
- `render-verify` hook PASSED on every edited v2 MDX file before "done"
- Smoke test passes: `node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/.../page`

<CustomDivider />

## Part 10 — Skills (ai-tools/ai-skills/)

**Source:** `docs-guide/frameworks/ai-tools-governance.mdx`, `ai-tools/ai-skills/`.

For every skill folder (43+ skills per CLAUDE.md):

Required (P1):
- `SKILL.md` conforms to the 5-type classification (atomic, dispatcher, adapter, governance, reference)
- 8-concern classification present
- Run-command documented
- Status (Tested/Known-good | Partial | Draft | Planned) declared

Required (P0):
- No `Planned — Not Built` skills referenced from `.claude/CLAUDE.md` or CLAUDE's operational skills table
- Every skill referenced in `my-process.mdx` tables exists on disk (gaps called out there as "DOES NOT EXIST" — e.g. `tab-map.mdx` — must be resolved)

<CustomDivider />

## Part 11 — Decision registries

**Source:** `docs-guide/decisions/registry.md`, `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`, `workspace/plan/active/SHIP-CONTENT/decisions.md`, `.github/workspace/decisions-log.mdx`.

Required (P0):
- All open decisions in `SHIP-CONTENT/decisions.md` (12 open: D-01 through D-12) either **locked** or explicitly **deferred with owner + date + unblocking criterion**.
- 4 verification queue items (V-01 fee cut, V-02 active set, V-03 AI routing, V-04 LIP-92) all **resolved** with source citation.
- Every locked decision recorded in the unified registry (`docs-guide/decisions/registry.md`).
- No "decision made in chat but not written" — this violates `.claude/CLAUDE.md` rule: "Decisions made in chat that are not written to the decision registry do not exist."

**Current state:** only 1 locked decision (D-NAV-01). 12 pending design decisions + 4 verification queue items outstanding.

<CustomDivider />

## Part 12 — Security and workspace hygiene

**Source:** `AGENTS.md`, `.gitignore`, `.claude/CLAUDE.md`.

Required (P0):
- **Zero `.env` files tracked by git.** `.gitignore` currently covers `.env` but two `.env` files exist on disk (`./.env`, `./workspace/plan/active/SOLUTIONS-SOCIAL-DATA/.env`) — confirm they are not tracked (`git ls-files | grep -E '(^|/)\.env$'` must be empty).
- Zero committed tokens, keys, or credentials.
- `.allowlist` edits only via human commit with `--trailer "allowlist-edit=true"`.
- `.allowlist` has no nested paths, no HTML comments, no prose.

Required (P1):
- `SOLUTIONS-SOCIAL-DATA/.env` (1,452 bytes, dated 2026-03-23) removed from disk or moved to a documented scratch location outside the repo.
- `workspace/` hygiene: outputs routed to `workspace/reports/<category>/` or `workspace/plan/active/<PROJECT>/` per `AGENTS.md`.
- No orphan files in `workspace/` older than 90 days without an active plan.

<CustomDivider />

## Part 13 — Operational safety (agent rules)

**Source:** `AGENTS.md`, `.claude/CLAUDE.md`, `workspace/plan/active/CONTENT-WRITING/plan-canonical.md` (Confirm-Before-Spawn, 2026-03-23).

Required (P0 — must remain enforced after handover):
- **Confirm-Before-Spawn:** no agent spawn without explicit human confirmation in chat.
- No `--no-verify` default.
- No port 3000 / 3333 from agent sessions.
- No branch switching in an existing worktree.
- No `git reset --hard`, `git stash`, `git push --force` without explicit human direction.
- No casual file deletion — deletions require human commit with `--trailer "allow-deletions=true"`.
- No `git add -A` / `git add .` without reviewing what would be staged.
- No mixing unrelated changes in one commit.

Required (P1):
- Every agent session completes `/thread` → `/log` → `/close` lifecycle per `.claude/CLAUDE.md`.
- Session-log, project-state, decision-registry all updated on close.

<CustomDivider />

## Part 14 — Hooks (.githooks/)

**Source:** `AGENTS.md`, `.claude/CLAUDE.md`.

Required (P0):
- `./.githooks/install.sh` completes without error on a clean clone.
- Pre-commit runs in ≤60s.
- Pre-commit gates: voice, structure, MDX render-check, styles audit, root allowlist, JSDoc (once wired per gap #12).
- Render-verify hook reports PASSED on every v2 MDX file edited in a session.

Required (P1):
- Edit-loop hook active (3-edit hypothesis gate, 5-edit hard block per CLAUDE.md).
- PreEdit auto-gen hook active.
- Move-detect hook active.

<CustomDivider />

## Part 15 — Handover artefact

Required (P0):

A single document at `workspace/reports/handover/2026-04-15-HANDOVER.md` (or equivalent) containing:

1. One-page "start here" — how to run the local preview, how to commit safely, where standards live.
2. Index of every governed surface → framework → validator → owner.
3. Current gap report with severity, owner, and eta for every P1 item.
4. Every open decision (D-NN) with default, picks, and resolution path.
5. Every verification queue item (V-NN) with source needed.
6. The 9-phase content pipeline with current status per tab.
7. The voice, structure, frontmatter, component usage rules in one place (may reference `docs-guide/standards/*` rather than duplicate).
8. How to run each enforcement tier (pre-commit, pre-push, PR CI, full sweep).
9. How to run each validator, generator, remediator on demand.
10. Known pitfalls: Mintlify constraints, VS Code extension issues, zombie processes, port reservations, branch rules.

The handover doc must be self-contained enough that a new operator is productive in 30 minutes without consulting Alison.

<CustomDivider />

## Part 16 — What counts as evidence per surface

The gap audit will verify each requirement using exactly one of:

| Evidence type | Used for |
|---|---|
| File exists / count match (`find`, `ls`) | Coverage, scope, inventory |
| Frontmatter field present (`grep` on `---` block) | Taxonomy compliance |
| Validator pass (`node ... --check` exits 0) | Enforcement tiers |
| Framework + validator + GOVERNANCE.md + lastVerified ≤90d | Governed surface health |
| Human sign-off in `tab-status.md` | Tab IA lock |
| Decision row in registry with resolution | Decision closure |
| SME confirmation + source link | Verification queue |
| Render PASSED in smoke test | MDX safety |
| Zero regressions in audit re-run | Remediator correctness |

No "should be fine" — every criterion has exactly one evidence type.

<CustomDivider />

## Part 17 — Non-goals (explicit)

So the gap audit does not chase scope creep:

- Rewriting v1 (279 pages, frozen) to v2 taxonomy.
- New features for Mintlify platform (out of repo control).
- Rebuilding Cowork / VS Code extension (canonical diagnostic exists at `workspace/plan/active/FUCK_CLAUDE/`).
- OG image generation at scale (gap #2, deferred — Puppeteer CI infra separate decision).
- Contract addresses workflow cherry-pick (gap #1, deferred to branch merge).

These remain known gaps. They do not block handover.

<CustomDivider />

## Part 18 — Summary (the 7 bars)

1. Content bar — every v2 page meets §3.
2. Governance bar — 13 surfaces green per §4.
3. Enforcement bar — every gate passes per §5.
4. Safety bar — zero secrets per §12, agent rules intact per §13.
5. Routing bar — zero orphans, zero broken links per §3.6.
6. Decision bar — zero open P0/P1 decisions per §11.
7. Handover bar — the handover document per §15 exists and is correct.

If any of the 7 is unmet, the repo is not production-ready for handover. The gap report to follow will list every unmet criterion with a source citation and a proposed owner + ETA.

<CustomDivider />

**Next step:** run the gap audit against this document. Every requirement above becomes one row in the audit with evidence, status (Met / Partial / Missing / Conflict), owner, and ETA. The user reviews the REQUIREMENTS once, then the gap audit is the single working document through handover.
