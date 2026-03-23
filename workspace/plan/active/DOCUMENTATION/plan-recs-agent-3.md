# Contributor Experience + Content Pipeline — Unified Recommendations

**Date:** 2026-03-23
**Author:** Agent 3 (product-thinking, contributor experience lens)
**Inputs read:** `master-audit.md`, `recommendations-pipeline.md`, `research-best-practices.md`, `system-canonical-design/pages.mdx`, `system-canonical-design/ai.mdx`, `AGENTS.md` (first 150 lines), `CONTENT-WRITING/framework-index-canonical.md`, `CONTENT-WRITING/Frameworks/content-pipeline-framework.md`, `CONTENT-WRITING/prd-canonical.md`

---

## Framing

The governance work and the content writing work are being treated as two separate projects. They are not. Every content pipeline decision produces outputs that the governance system needs to validate, and every governance gap makes the content pipeline harder to run. This document maps where they actually meet and recommends the minimum set of changes to make the full system usable by real contributors — human and AI — next week.

The repo is architecturally sound but incompletely implemented. The problems are not design problems. They are wiring problems, missing connective tissue between what the system declares and what it actually enforces. This means the fixes are mostly small and targeted, not structural rebuilds.

---

## 1. The Contributor Journey — What It Should Feel Like

### Journey 1: New Human Contributor — Writing Their First Docs Page

**Ideal journey (5 steps):**

1. Read `AGENTS.md` → understand repo rules, safety constraints, which files are authoritative
2. Read `docs-guide/` → find the authoring guide → understand which page template to use, what frontmatter fields are required, how to use custom components
3. Copy the right page template from VS Code snippets or `snippets/templates/pages/`
4. Write the page, commit it; pre-commit hook warns if nav alignment is broken or a deletion has no redirect
5. PR opens; CI checks frontmatter on changed files, catalog freshness, nav alignment → pass or specific actionable failure

**What this journey looks like today:**

Step 1 works. `AGENTS.md` is current and comprehensive.

Step 2 breaks immediately. There is no authoring guide. `docs-guide/contributing/mintlify.mdx` is a draft. The custom component catalog (`docs-guide/catalog/`) has 32 generated pages but no page explaining how to actually use them when authoring. `snippets/templates/README.mdx` is a stub. The contributor has to read internal CI scripts to reverse-engineer what templates exist. This is where human contributors stop and ask for help.

Step 3 is possible but undiscoverable. The VS Code snippets exist (`.vscode/templates.code-snippets`, `.vscode/components.code-snippets`) but a new contributor has no reason to know they're there, and the snippet keys are not documented anywhere in human-readable form.

Step 4 works for most cases. Pre-commit hooks are installed via `.githooks/install.sh`, which `AGENTS.md` correctly tells contributors to run first. The hooks validate what they validate; deletion safety (redirect check) does not yet exist.

Step 5 partially works. CI validates catalog freshness and component registry. Frontmatter is advisory-only — no PR check on changed files. Nav alignment has no validator. A new contributor can add a page with invalid frontmatter and it will silently merge.

**The biggest pain point:** The gap between "I have AGENTS.md" and "I know how to write a page" is completely unserviced. There is no single place that answers: which template do I use, what frontmatter fields do I fill in, which components are available, what does a valid page look like.

---

### Journey 2: AI Agent — Tasked With Writing or Updating a Page

**Ideal journey (4 steps):**

1. Read `AGENTS.md` → read adapter file → have complete, current repo rules
2. Query the AI tools registry → find the right skill for the task (content-pipeline-pass-a, content-pipeline-pass-b, etc.)
3. Use the content pipeline framework files to understand taxonomy, voice, audience → use companion files for the target page area for pre-extracted context
4. Write/update the page → run validators → commit with correct conventions → let CI confirm everything

**What this journey looks like today:**

Step 1 works structurally. `AGENTS.md` is current. All 9 adapters exist. But: there is no parity validator, so adapters may have drifted from `AGENTS.md` without detection. An agent using a stale adapter is operating on incorrect rules with no signal that anything is wrong.

Step 2 partially works. The AI tools registry (`ai-tools/registry/ai-tools-registry.json`) exists but validation is manual-only. A new skill can be added without being registered. A registered skill can point to a path that doesn't exist. The agent cannot trust the registry as a source of truth until `validate-ai-tools-registry.js` is wired to CI.

Step 3 is the most painful step. The content pipeline framework exists (`workspace/plan/active/CONTENT-WRITING/`) and is well-developed — locked enums for pageType, audience, purpose, persona, complexity, lifecycleStage, veracityStatus. But these definitions live in workspace planning files, not in the published docs-guide or in any machine-readable format the agent can reliably query. An agent starting fresh would need to know to look in `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` and then navigate to the correct framework sub-files. This is not documented in `AGENTS.md`. There are also critical mismatches: `frontmatter-taxonomy.js` (the validator) uses a 16-value deprecated alias set; the content pipeline framework has settled on the new 15-value intent-based purpose enum. These are not reconciled. An agent using the validator's enum will produce frontmatter that the content pipeline considers wrong.

Step 4 works for git mechanics (`AGENTS.md` → Validation Expectations table is excellent). But validators like `frontmatter-taxonomy.test.js` are advisory, so the agent gets no CI signal if the frontmatter is semantically wrong. The agent cannot verify its own output quality from CI.

**The biggest pain point:** The content pipeline framework decisions (the locked enums) are not visible to an agent starting from `AGENTS.md`. There is no pointer in `AGENTS.md` → required context chain to the framework index. The agent will write pages that are syntactically valid but taxonomically inconsistent with the established framework, and CI will not catch it.

---

### Journey 3: Content Reviewer — Checking a PR for Documentation Quality

**Ideal journey (3 steps):**

1. CI has already run; reviewer sees clear pass/fail status per check with specific error messages
2. Reviewer reads the changed page; can check frontmatter against the taxonomy standard without looking things up manually
3. Reviewer can confirm the page is in nav, companions are current, and no stale content was introduced

**What this journey looks like today:**

Step 1 partially works. CI provides meaningful signals for catalog freshness and component registry. But: frontmatter is not checked on changed files, so the reviewer has no automated signal for taxonomy errors. The reviewer must manually check whether `pageType`, `audience`, `purpose` values are correct — and must know what the correct values are, which requires reading `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` (not in the required context chain for reviewers).

Step 2 does not work. The canonical source of truth for frontmatter taxonomy is split between `docs-guide/frameworks/page-taxonomy-framework.mdx` (which needs to be updated post Phase 1 framework work, per framework-index-canonical.md) and the planning files in `workspace/`. The reviewer cannot find the authoritative enum list in one place.

Step 3 partially works. Catalog PR checks exist. Companion freshness is checked. But nav alignment has no validator (a page can be in a file but not in `docs.json`), and `lastVerified` staleness has no PR warning (a reviewer has no signal that the page they're approving is 200 days stale).

**The biggest pain point:** The reviewer is doing manual taxonomy checking that should be automated, and they're checking against standards that are not yet fully published. The frontmatter taxonomy enforcement gap (Pattern 5 in master-audit.md) directly degrades the reviewer experience on every single PR.

---

## 2. The MVP Documentation System — 3 Changes That Actually Move the Needle

If you are onboarding contributors next week, these are the three changes that remove the most friction per hour of work invested. These are not governance completeness plays — they are usability fixes.

---

### MVP Change 1: Write the Authoring Guide

**File:** `v2/resources/documentation-guide/authoring-guide.mdx`

**What it covers:** One page. Not a policy document. A practical onboarding surface.
- The 5 required frontmatter fields with their valid values and one correct example each
- The 7 VS Code snippet keys and what they produce (with a one-line description of when to use each template type)
- How to find and import a custom component (link to the catalog, the import pattern, one usage example)
- What not to hand-edit (generated files, what a banner means)
- The pre-commit hook install command

**Why this is the highest-leverage change:** Three independent audit concerns (UI, templates, ui-templates — master-audit.md Pattern 6) all converge on the exact same gap. No other single file addresses all three. This is not a "nice to have" — it is the reason a new contributor cannot self-serve today. Every hour a new contributor spends confused about components, templates, or frontmatter is a direct cost of this file not existing.

**Dependency:** The frontmatter section of this guide needs to reflect the new framework (Phase 1 decisions from `content-pipeline-framework.md`). Do not write it using the old validator enum values. The guide should document the new intent-based purpose enum, the 7 pageType values, and the 7 audience tokens — not the deprecated aliases. This means `docs-guide/frameworks/page-taxonomy-framework.mdx` also needs updating from the Phase 1 decisions before this guide is written, or at minimum both files must be updated in the same PR.

---

### MVP Change 2: Wire Frontmatter Taxonomy to the PR Gate (Changed Files Only)

**File to change:** `check-docs-guide-catalogs.yml`
**Script to wire:** `frontmatter-taxonomy.test.js --check-changed`
**Scope:** v2 MDX files changed in the PR only; not all 703 pages

**What this does:** Makes the taxonomy enforcement real for new content entering the repo. A PR that adds a page with `pageType: landing` (deprecated) or an invalid `audience` value fails at CI with a specific error. The contributor knows immediately what to fix and which values are valid.

**Why this is second highest leverage:** The master-audit.md calls this out under Pattern 5 (advisory taxonomy without enforcement) and every governance surface that depends on metadata — catalog queries, agent reads, AI assistant context — is consuming unreliable data until this gate exists. The content pipeline framework has done the hard work of defining the right enums. Wiring this check is the last step that makes that work have any enforcement value. Without it, every content writing sprint that follows will produce pages that say they're in the right taxonomy but haven't been validated.

**The reconciliation requirement:** Before or alongside this, the deprecated alias mapping from `content-pipeline-framework.md` (Decision 2) must be added to `frontmatter-taxonomy.js`. The validator must accept the new intent-based purpose values (`orient`, `explain`, `build`, `configure`, etc.) not just the old format-mirroring values. If the validator is wired before reconciliation, it will fail PRs that use the new correct values.

---

### MVP Change 3: Add a `workspace/plan/active/CONTENT-WRITING` Pointer to `AGENTS.md`

**File to change:** `AGENTS.md`, Required Context section

**What it adds:** One or two lines in the Required Context ordered list pointing AI agents to `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` as the canonical source for page taxonomy, frontmatter schema, audience definitions, and purpose enum when writing or reviewing content pages.

**Why this is third highest leverage:** Right now, the content pipeline framework is completely invisible to AI agents starting from `AGENTS.md`. An agent tasked with writing a docs page follows the Required Context chain (docs.json → v2/ → README → docs-guide/) and finds the advisory frontmatter taxonomy in `docs-guide/`, which has the old deprecated values. They do not find the Phase 1 locked enums. They will produce taxonomically incorrect pages, and CI will not catch it (because of MVP Change 2 not yet being wired). This single pointer costs three lines to add and closes a gap that will otherwise cause systematic frontmatter errors across every AI-assisted content sprint. It also applies to human contributors — adding this pointer makes the authoring guide (MVP Change 1) the standard context source rather than a document people find by accident.

**Exact insertion point:** After item 4 (`docs-guide/**`) in the Required Context list, add: "When writing or reviewing content pages: `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` for the canonical taxonomy schema — pageType, audience, purpose, persona, veracityStatus enums and their locked definitions."

---

## 3. Mintlify Platform Leverage

Based on `research-best-practices.md` findings, here is a direct use/configure/skip breakdown.

### Turn On Now (Zero Effort)

**Mintlify MCP Server**
```bash
npx mcp add [livepeer-docs-subdomain]
```
One command. No maintenance. Makes the live docs site queryable as a tool call from any Claude, Cursor, or Windsurf session working in this repo. Any AI agent can then verify live page content without needing companion files for every page. This is not a future investment — it takes 10 minutes and starts paying back on the next agent session.

**llms.txt — verify first, then stop worrying about it**
Per `recommendations-pipeline.md` R2.1: check whether `https://[subdomain].mintlify.app/llms.txt` exists. If it does, Mintlify is generating it automatically and the repo does not need `generate-llms-files.yml` at all. The audit flags `llms.txt` status as unknown (`ai.mdx` System ④). Verify and close this open question in one command. If Mintlify is generating it: mark the workflow as superseded, document the live URL in `docs-guide/features/ai-features.mdx`, done.

**AI Assistant conversation analytics**
The Mintlify dashboard already has this data. Log in, pull the unanswered question log. High-frequency unanswered questions are content gaps that are costing user and contributor time right now. Feed the top 10 into the content writing backlog as `purpose: reference` or `purpose: explain` pages. This requires no engineering work — it is a product decision based on existing platform data.

### Requires Configuration Work (Do After Data Correctness Fixes)

**Mintlify Workflows**
Do not touch this until R1 (data correctness fixes from `recommendations-pipeline.md`) is complete. Mintlify Workflows spin up an ephemeral AI agent that reads repo files and opens PRs. If it reads stale banner paths, wrong generator references, or draft AI-comment blocks like the one in `dev-tools.mdx`, it will make incorrect suggestions and create noise. The sequence is: fix P0 data correctness → fix stale paths → then wire Mintlify Workflows.

When ready, the two highest-value workflows to configure are:
1. Component doc drift detection: trigger on `snippets/components/**/*.jsx` changes → draft component doc updates as a PR
2. Weekly freshness audit: find pages with `lastVerified` older than their `ttlDays` threshold → open a triage PR listing them

Both of these replace work that would otherwise require custom CI scripts. Use the platform.

**Continuous Translations**
The repo has 4 locale directories. Mintlify supports automatic translation workflows. Assess after the English content pipeline is stable and producing validated output. Do not configure translation workflows against unvalidated English source pages — the errors will propagate to all locales.

### Out of Scope for Now

**Mintlify Agent / Autopilot** — useful for drift detection, but it will surface false positives until data correctness is resolved (stale banners, wrong paths). Re-evaluate after P0 + P1 remediation from master-audit.md.

**Custom llms.txt** — do not maintain a hand-rolled version if the platform generates one. Per research-best-practices.md: "Don't build what the platform provides."

---

## 4. Content Pipeline + Governance Pipeline Interface

These two work streams have a critical dependency relationship that is not currently explicit anywhere. Here is the interface map.

### What Governance Tooling the Content Pipeline Depends On

| Content pipeline need | Governance tool it depends on | Current state |
|---|---|---|
| Know which frontmatter fields are valid | `tools/lib/frontmatter-taxonomy.js` | Exists; uses old enum values |
| Know which pageType/purpose values are current | Phase 1 framework decisions | Locked in `workspace/` planning files; NOT yet in validator |
| Write a page that passes CI | `frontmatter-taxonomy.test.js --check-changed` in PR gate | Not wired; advisory only |
| Trust that a page template is current and usable | `generate-ui-templates.js` wired to CI | Not wired; declared `autofix`, nothing runs |
| Know the page is in navigation after adding it | Navigation alignment validator | Not written yet |
| Confirm page is not silently stale | `lastVerified` staleness PR warning | Not implemented |

The content pipeline's ability to produce correct output is directly blocked by governance gaps. Specifically: if you run a full AI-assisted content sprint on the gateways or orchestrators tab (the declared pilot scope from `framework-index-canonical.md`) and the frontmatter gate is not wired, every page that sprint produces will have advisory-only taxonomy with no enforcement. The pages will look correct but the metadata will not be trustworthy for catalog queries or agent reads.

### What Content Pipeline Outputs Governance Needs to Know About

| Content pipeline output | What governance needs | Where to capture it |
|---|---|---|
| New locked frontmatter enum values (Phase 1 decisions) | Validator must accept new values; deprecated aliases must be mapped | `tools/lib/frontmatter-taxonomy.js` — update in same PR as enum lock |
| New `veracityStatus` field (`verified`/`unverified`/`stale`) | Add to frontmatter taxonomy schema; make advisory at first | `frontmatter-taxonomy.js` + `page-taxonomy-framework.mdx` |
| New pageType values or variants | All existing pages using old values need alias mapping; catalog queries will break | Validator update + migration mapping |
| New audience tokens | Agent adapter files may have hardcoded audience assumptions | `AGENTS.md` note + adapter review |
| Pages produced by the pipeline (new MDX files) | Navigation alignment validator must verify they are in `docs.json` | Navigation alignment validator (not yet written, pages.mdx ① |
| Pages with `veracityStatus: stale` | Freshness report; content health cron | `content-health.yml` output |

The most urgent handoff from content pipeline to governance: **the enum reconciliation**. The content pipeline has settled on new values for `purpose` and `pageType`. The governance validator still uses old values. This mismatch needs to be resolved before either system is trusted — and it needs to happen in a single, atomic PR that updates the validator, adds the deprecated alias mapping, updates `page-taxonomy-framework.mdx`, and adds the pointer to `AGENTS.md`.

### What Should Be Enforced at the PR Gate for New Content Pages

These should be hard failures (exit non-zero):

- `pageType` value is not in the canonical enum (7 primary types: `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`)
- `audience` value is not in the canonical enum (7 tokens, new definitions from framework Decision 3)
- `purpose` value is not in the canonical enum AND is not in the deprecated alias mapping (graceful transition)
- Deprecated alias values emit a warning message naming the correct replacement, but do not fail (30-day burn-in)
- A v2 MDX file is deleted without a corresponding redirect in `docs.json` (pre-commit warning, not CI failure)

These should be warnings (non-blocking, logged to PR comment):

- `lastVerified` is older than 90 days on a modified page
- A deprecated `purpose` alias value is used (30-day grace period, then graduate to failure)
- `veracityStatus` is missing from a content page (new field; advisory while pipeline runs)
- `pageVariant` is missing (optional field; absence is valid)

### What Should Be Optional / Advisory

- JSDoc completeness on touched scripts (advisory warning, not failure — per recommendations-pipeline.md R7.2, graduate to failure after 60-day burn-in)
- Companion file freshness for non-glossary pages (companion generation scoped to glossary pages currently; expanding scope is a separate decision)
- `ttlDays` in frontmatter (add the field to the taxonomy library, document it, but do not enforce until `content-health.yml` is generating the freshness report)
- Industry and niche frontmatter fields (still DRAFT pending final user lock per framework Decision 5 — do not enforce until locked)

---

## 5. AI Agent Self-Service — What an Agent Needs to Work Autonomously

### What Must Exist for Full AI Agent Autonomy on Docs Pages

An AI agent can write, review, or update a docs page without asking a human only when all of the following are true:

**Context layer (what the agent reads at start):**

| Required | Currently exists? | Gap |
|---|---|---|
| `AGENTS.md` with complete repo rules | Yes | No pointer to content framework |
| Adapter file for the agent's tool | Yes (9 adapters) | No parity validator; adapters may be stale |
| Content taxonomy enum definitions | Locked in `workspace/` planning files | Not in `AGENTS.md` required context chain |
| Voice rules per audience | Framework Decision 7 — not yet written (`07-voice-rules.md` not started) | Blocking for content quality |
| Page structure rules per pageType | Framework Decision 9 — not yet written (`09-page-structure-rules.md` not started) | Blocking for content quality |
| Section naming rules | Draft exists (`Prompts/section-naming.md`) | Not formalised as a pipeline resource |
| Which template to use for which pageType | VS Code snippets exist; no mapping | Agent cannot find the right template without this |

**Validation layer (what CI tells the agent about its output):**

| Required | Currently exists? | Gap |
|---|---|---|
| Frontmatter taxonomy check on changed files | No — advisory only | MVP Change 2 |
| Navigation alignment check | No | Not written yet (pages.mdx ①) |
| Companion freshness check | Yes | Active and wired |
| AI tools registry validation | No — manual only | Wire `validate-ai-tools-registry.js` to CI |
| Adapter parity check | No | Validator not yet written |

**Operational layer (what the agent can do after writing):**

| Required | Currently exists? | Gap |
|---|---|---|
| `lpd test --staged` works | Yes | — |
| Frontmatter validator gives actionable error messages | Advisory mode only | Needs to be wired first |
| Generated file repair path works | `repair_commands` in governance config have stale paths | P0 fix from recommendations-pipeline.md R1.2 |
| MCP server for querying live docs | Not yet enabled | 10-minute setup |

### What Is Currently Missing

The minimum viable autonomous-agent package requires three things that don't exist yet:

**Missing 1: Content framework pointer in `AGENTS.md`**
An agent cannot produce audience-correct, purpose-clear documentation without the locked enums. These are in `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` and its sub-files. Without a pointer from `AGENTS.md`, the agent will never find them on its own. This is the single highest-risk gap for content quality.

**Missing 2: Voice rules and page structure rules**
Framework Decisions 7 (`07-voice-rules.md`) and 9 (`09-page-structure-rules.md`) are not yet written. The content pipeline framework explicitly marks these as `Not started`. An agent can get the taxonomy right (with the pointer above) but will default to generic documentation voice without audience-specific voice rules. For a protocol/Web3 product with 7 distinct audiences (founder through community), this matters. Voice rules need to exist as machine-readable or clearly structured text files before any agent-written content sprint is launched.

**Missing 3: Page template selection guide**
The VS Code snippets exist. The templates exist. An agent has no way to know which template corresponds to which `pageType`. There is no mapping. A `tutorial` page and an `instruction` page require different structures, but an agent has no template key to use for either without a template-to-pageType mapping. This is a one-page document (or a frontmatter field in each template file). It is blocking every AI-assisted content sprint that involves more than one page type.

### The Minimum Viable Agent-Readable Documentation Package

For an agent to work autonomously on the gateways or orchestrators tab (the declared pilot scope):

```
1. AGENTS.md                              — repo rules (exists)
2. .claude/CLAUDE.md or equivalent        — adapter (exists, parity uncertain)
3. workspace/plan/active/CONTENT-WRITING/
     framework-index-canonical.md         — taxonomy entry point (exists, not in AGENTS.md)
     Frameworks/content-pipeline-framework.md  — locked enum decisions (exists)
     Frameworks/pagePurpose.md            — purpose definitions (exists)
     Frameworks/veracity.md               — veracity standards (exists)
4. docs-guide/frameworks/page-taxonomy-framework.mdx  — canonical schema (needs update from Phase 1)
5. voice rules per audience               — MISSING (07-voice-rules.md not started)
6. page structure rules per pageType      — MISSING (09-page-structure-rules.md not started)
7. template-to-pageType mapping           — MISSING (no document exists)
8. Section naming rules                   — DRAFT (Prompts/section-naming.md, not formalised)
```

Items 5, 6, and 7 are the blockers. Items 1–4 exist. Item 8 is partially done. A content sprint that starts before items 5–7 exist will produce pages that pass CI (because frontmatter gate is advisory) but have inconsistent voice and structure. This is the difference between a pilot that validates the pipeline and a pilot that produces output that needs to be rewritten.

---

## Implementation Order: The Integrated Sequence

This is the order in which changes create the most cumulative value for contributors:

### Week 1 — Unblock self-service (no CI work needed)

1. **Reconcile frontmatter-taxonomy.js with Phase 1 framework decisions** — add new intent-based purpose enum, map deprecated aliases, update `page-taxonomy-framework.mdx`. This unblocks everything downstream.
2. **Add content framework pointer to `AGENTS.md`** — three lines; immediately visible to every agent that reads `AGENTS.md`.
3. **Write voice rules (`07-voice-rules.md`)** — unblocks the content sprint pilot for gateways/orchestrators.
4. **Write page structure rules (`09-page-structure-rules.md`)** — same.
5. **Write template-to-pageType mapping** — one document; unblocks template selection for any agent or human.

### Week 1–2 — Wire the gate (the governance work)

6. **Fix P0 data correctness** — stale banners, stale paths in `generated-artifacts.json`, `ai-tools.mdx` frontmatter, `dev-tools.mdx` tip callout. These are pre-requisites for any CI work.
7. **Wire `frontmatter-taxonomy.test.js --check-changed` to PR gate** — MVP Change 2.
8. **Write and publish `authoring-guide.mdx`** — MVP Change 1. Depends on steps 1 + 6 being done (so the guide documents correct values and links to current resources).
9. **Enable Mintlify MCP Server** — 10 minutes; no dependencies.
10. **Check `llms.txt` status** — 5 minutes; close the open question.

### Week 2–3 — AI agent self-service

11. **Wire `validate-ai-tools-registry.js --check` to CI** — agents can trust the tools registry.
12. **Write navigation alignment validator** — agents and reviewers can trust that a page in the repo is actually in the nav.
13. **Add `lastVerified` staleness warning to PR gate** — reviewers and agents get a signal for stale content at PR time.
14. **Write adapter parity validator** — close the adapter drift gap.

### After the pilot sprint — platform and freshness

15. **Configure Mintlify Workflows** (component drift + freshness audit) — after data correctness is resolved.
16. **Add `ttlDays` to frontmatter taxonomy; extend `content-health.yml`** — after pipeline is validated.
17. **Complete `ai-features.mdx`** — after all AI system components are actually working.

---

## What Success Looks Like

**For a human contributor opening a PR next week:**
"I wrote my page using the template the authoring guide told me to use, filled in the frontmatter values from the guide, committed, and the PR check told me exactly what was wrong with my `purpose` value and what to change it to. I didn't need to ask anyone."

**For an AI agent tasked with updating a page next week:**
"I read `AGENTS.md`, followed the required context chain to the framework index, found the correct pageType and audience values, found the voice rules for my target audience, picked the right template, wrote the page, ran `lpd test --staged`, got one frontmatter warning (deprecated alias), fixed it to the new value, and the PR passed CI."

**For a content reviewer checking a PR next week:**
"CI has already told me the frontmatter is valid on changed files. Nav alignment is checked. I read the diff, confirmed the voice matches the audience, confirmed the purpose maps to the right section, and approved. Five minutes."

None of these require the governance system to be fully complete. They require the three MVP changes, the framework reconciliation, and the content framework pointer in `AGENTS.md`. Everything else in the remediation plan is improvement on top of a functioning baseline.
