# AI Features — Product Audit (2026-05-18)

Auditor: docs-v2-dev / repo-docs-consolidation
Scope: every AI-shaped capability surfaced through `docs-guide/features/ai-features.mdx`, agent adapters, skills, public AI artefacts, MCP, and the generators that feed them.

---

## What this repo's AI layer actually delivers

Livepeer Docs ships two distinct AI products from one codebase. The **outward-facing product** is a set of machine-ingestible doc surfaces — a hosted MCP endpoint at `docs.livepeer.org/mcp`, the Mintlify chat assistant, an `llms.txt` index, and an AI-enriched sitemap (`sitemap-ai.xml`). Together these let any MCP-compatible client (Claude, Cursor, Copilot, ChatGPT plugins) or LLM crawler query Livepeer documentation as authoritative, freshness-stamped source material instead of guessing from old training data. The reader-facing assistant sits inside the Mintlify-rendered docs site itself.

The **inward-facing product** is a governed agent runtime. Every supported AI coding tool (Codex, Claude Code, Cursor, Windsurf, Augment, GitHub Copilot) has a thin native adapter under its agent-recognised path, all rooted in one cross-agent baseline (`AGENTS.md`). On top of that adapter layer sits a 34-skill canonical skill system (`ai-tools/ai-skills/`) covering session lifecycle (`thread`, `pm`, `research`, `design`, `build`, `iterate`, `close`), content pipelines, repo audits, governance generation, and a Codex-specific task-isolation contract with lock files and branch validators. Contributors and agents get the same governance gates as humans, with validators, generators, and registry coverage that flag drift instead of hiding it.

The third strand — and the one most exposed to drift — is the **automation belt that keeps both products honest**: a `generate-llms-files.js`, a `generate-ai-sitemap.js`, a `generate-ai-skills-indexes.js`, a `cross-agent-packager.js` that re-exports skills to per-agent packs, a `sync-codex-skills.js` that lands managed skills in `~/.codex/skills`, and a `validate-ai-tools-registry.js` plus `check-agent-docs-freshness.js` that gate the whole thing. When the user reads `llms.txt` it should never be hand-edited; when an agent reads a skill it should be the canonical template, not a per-agent fork.

---

## Features

### Feature: `llms.txt` — AI-first root artefact
**What it is:** A flat, structured sitemap-by-prose that LLM crawlers and assistant ingestion pipelines fetch to learn the docs hierarchy before page-by-page queries. Public, no auth, conforms to the [llms.txt standard](https://llmstxt.org/).
**Current state:** Production, but **stale**.
**Last touched:** `Apr 15 2026 13:57` (file mtime). `docs.json` last touched `May 17 2026`. Drift window: ~33 days of nav edits not regenerated.
**Lives at:** `/llms.txt` (root, 371 lines, 35 KB).
**Validated against source:** Yes — generator exists at `operations/scripts/generators/ai/llm/generate-llms-files.js` (`Apr 9`), regen command documented in `docs-guide/features/ai-features.mdx`.
**What's complete:** generator, repair path, public URL, documented in both internal and public-facing pages.
**What's incomplete / community-help opportunity:** No CI workflow regenerates after `docs.json` edits; current file misses every nav edit since 15 April. Needs a scheduled or post-merge workflow that runs `node operations/scripts/generators/ai/llm/generate-llms-files.js --write` whenever `docs.json` or `v2/**/*.mdx` change.
**Recommended canonical home:** Section in consolidated `docs-guide/features/ai-features.mdx` under "Public AI surfaces".

### Feature: `sitemap-ai.xml` — AI-enriched sitemap
**What it is:** Standard sitemap XML extended with `ai:section`, `ai:wordCount`, `ai:lastVerified`, and `ai:tags` per URL so LLM retrievers can prioritise and tag-filter without fetching each page.
**Current state:** Production, **stale by the same window as `llms.txt`**.
**Last touched:** `Apr 15 2026 13:57`. 181 URLs registered.
**Lives at:** `/sitemap-ai.xml` (root, 1,440 lines, 71 KB).
**Validated against source:** Generator at `operations/scripts/generators/content/seo/generate-ai-sitemap.js`; CLI wrapper `lpd ai-sitemap --write` is documented.
**What's complete:** Schema namespace, 181 URLs, per-URL freshness stamps, tag taxonomy.
**What's incomplete / community-help opportunity:** Several `ai:lastVerified` entries still show `2026-03-02` — page-level freshness is not propagated by the generator. Needs the same post-merge regeneration job as `llms.txt`, plus a validator step that flags any `ai:lastVerified` older than 90 days.
**Recommended canonical home:** Same section as `llms.txt`.

### Feature: Hosted MCP server (`docs.livepeer.org/mcp`)
**What it is:** Public, no-auth Model Context Protocol endpoint backed by the published docs. Any MCP client (Claude desktop, Cursor, ChatGPT, generic SSE clients) can plug in and call `search_livepeer_docs` to retrieve grounded passages with source links.
**Current state:** Production. Hosted by Mintlify, not generated from repo.
**Last touched:** The repo doc describing it (`v2/resources/documentation-guide/ai-automations/ai-features.mdx`) was last touched `Apr 9`. Endpoint itself is platform-owned.
**Lives at:** runtime endpoint `https://docs.livepeer.org/mcp`; described in `v2/resources/documentation-guide/ai-automations/ai-features.mdx`.
**Validated against source:** Partial — the public page documents the endpoint and one tool (`search_livepeer_docs`). No live tool-list check is wired into validators.
**What's complete:** Endpoint live, three connect recipes (Claude, Cursor, generic), tip on read-only no-key.
**What's incomplete / community-help opportunity:** Only one MCP tool documented; if Mintlify adds tools (e.g. structured retrieval, page navigation), the page won't notice. Wire a periodic check that fetches the live MCP tool list and diffs against the documented set. The internal `docs-guide/features/ai-features.mdx` mentions the MCP only as a one-liner; the richer recipe lives in the public page — duplication risk.
**Recommended canonical home:** Move the connect recipes into `docs-guide/features/ai-features.mdx` and have the v2 page link to it.

### Feature: Mintlify chat assistant
**What it is:** The reader-facing chat widget on `docs.livepeer.org`. Grounded on published Mintlify content, configured by `.mintlify/Assistant.md` (mission, source-of-truth order, IA routing map, fallback behaviour).
**Current state:** Production.
**Last touched:** `.mintlify/Assistant.md` mtime `Apr 5`.
**Lives at:** Mintlify dashboard config + `.mintlify/Assistant.md` (4.4 KB, 114 lines, well-structured).
**Validated against source:** Yes — agent governance framework lists it as canonical chat-assistant context (not an AI coding adapter).
**What's complete:** Mission, IA map, versioning rules, high-risk topic guardrails, fallback behaviour. This file is one of the better-written assistant contracts in the repo.
**What's incomplete / community-help opportunity:** Domain disambiguation rules still reference "Livepeer Studio vs Livepeer Protocol" — confirm wording matches the canonical Solutions tab terminology. No regression test runs sample prompts against the live assistant.
**Recommended canonical home:** Linked from `docs-guide/features/ai-features.mdx`; the file itself stays at `.mintlify/Assistant.md`.

### Feature: `skill.md` (public AI skill artefact)
**What it is:** Documented in `v2/resources/documentation-guide/ai-automations/ai-features.mdx` as a published `https://docs.livepeer.org/skill.md` — a concise AI-readable summary of Livepeer's developer platform for direct injection into agent context windows.
**Current state:** **Documented but the repo has no `skill.md` at root.** File does not exist locally (`ls /skill.md` → not found). Either Mintlify generates it from another input, or the doc is aspirational.
**Last touched:** N/A — file absent.
**Lives at:** Documented at root URL, no repo source.
**Validated against source:** **No.** This is a documentation/implementation gap.
**What's complete:** Public-facing description of the endpoint and its purpose.
**What's incomplete / community-help opportunity:** Either ship a `skill.md` generator (it should derive from `docs.json` + the Developers/Solutions tab) or remove the section from `ai-features.mdx`. Acceptance: generator under `operations/scripts/generators/ai/llm/`, registry entry, regen command, validator stub.
**Recommended canonical home:** Either a new sub-section in `docs-guide/features/ai-features.mdx` or strike from public docs until implemented.

### Feature: Codex adapter and task-isolation contract
**What it is:** Codex-specific runtime: cross-agent baseline at `AGENTS.md`, Codex extension at `.github/AGENTS.md`, a task contract (`.codex/task-contract.yaml`) declaring scope-in/scope-out, lock files under `.codex/locks-local/`, plus preflight/finalise/cleanup scripts and a `validate-locks.js` validator. Stops overlapping concurrent Codex sessions from clobbering each other.
**Current state:** Production.
**Last touched:** Adapter files `Apr 3`–`Apr 8`; `.codex/task-contract.yaml` is a real example for task `20260403`.
**Lives at:** `.codex/`, `.github/AGENTS.md`, `operations/scripts/integrators/ai/codex/`, `operations/scripts/dispatch/ai/codex/`, `operations/scripts/validators/ai/codex/`.
**Validated against source:** Yes — `.codex/README.md` documents the full lifecycle; the `task-contract.yaml` carries acceptance checks and risk flags.
**What's complete:** Lifecycle docs, preflight/validate/finalise/cleanup scripts, `check-no-ai-stash.sh`, `validate-locks.js`, contract validator.
**What's incomplete / community-help opportunity:** The `task-contract.yaml` example is hard-coded to one historical task; consider scaffolding `lpd codex new` that emits a fresh contract from a template. No public-facing page explains the Codex workflow to community contributors.
**Recommended canonical home:** Sub-section in `docs-guide/features/ai-features.mdx` ("Agent adapters → Codex"), link out to `.codex/README.md`.

### Feature: Claude Code adapter
**What it is:** `.claude/CLAUDE.md` (28 KB) — the largest adapter, defining project identity, active threads, execution rules, debugging discipline, MDX conventions, Karpathy guidelines, platform constraints, voice rules, and 12 quick commands. Plus `.claude/skills/` for Claude-native skill discovery.
**Current state:** Production, **but contradicts the "thin adapter" rule everywhere else in the repo.** The agent governance framework says adapters "should not become separate copies of the full repo policy." This file is the most policy-heavy in the repo.
**Last touched:** `May 18` (today; live editing).
**Lives at:** `.claude/CLAUDE.md`, `.claude/skills/` (≥10 skill wrapper directories).
**Validated against source:** Yes — `check-agent-docs-freshness.js` covers this.
**What's complete:** Thread tracking table, skill catalogue links, hard boundaries, Mintlify constraints, observer-agent auth notes.
**What's incomplete / community-help opportunity:** Trim toward thin-adapter target. Anything that duplicates `AGENTS.md` should be removed; anything Claude-specific (skill discovery, observer auth) should stay. Acceptance: file ≤200 lines, no policy duplicated from `AGENTS.md`.
**Recommended canonical home:** Adapter inventory row in `docs-guide/features/ai-features.mdx`; the file itself stays at `.claude/CLAUDE.md`.

### Feature: Cursor adapter
**What it is:** Two `.cursor/rules/*.mdc` files: `repo-governance.mdc` (24 lines, thin) and `no-deletions.mdc` (deletion guardrail).
**Current state:** Production, **correctly thin** — model for what other adapters should look like.
**Last touched:** `Apr 8`.
**Lives at:** `.cursor/rules/repo-governance.mdc`, `.cursor/rules/no-deletions.mdc`.
**Validated against source:** Yes.
**What's complete:** Both rules present, pointers back to `AGENTS.md` and canonical sources, port-3000/3333 rule inline.
**What's incomplete / community-help opportunity:** None — this is the reference implementation.
**Recommended canonical home:** Adapter inventory row only.

### Feature: Windsurf adapter
**What it is:** `.windsurf/rules/repo-governance.md` — 13 lines, ultra-thin.
**Current state:** Production, thin.
**Last touched:** `Apr 8`.
**Lives at:** `.windsurf/rules/repo-governance.md`.
**Validated against source:** Yes.
**What's complete:** Pointer to `AGENTS.md`, governance index, frameworks, standards, port rule.
**What's incomplete / community-help opportunity:** Optional — Windsurf supports `memories` and `AGENTS.md` directly; consider whether to also register `AGENTS.md` as a Windsurf-recognised path.
**Recommended canonical home:** Adapter inventory row only.

### Feature: Augment adapter
**What it is:** `.augment/rules/` — three files: `repo-governance.md`, `git-safety.md`, `no-deletions.md`. Added Phase 9.
**Current state:** Production, thin.
**Last touched:** `Apr 3`–`Apr 8`.
**Lives at:** `.augment/rules/`.
**Validated against source:** Yes — listed in adapter inventory and agent governance framework.
**What's complete:** All three native files present.
**What's incomplete / community-help opportunity:** `git-safety.md` and `no-deletions.md` content is almost certainly duplicated across adapters; check whether they can be replaced by single-line pointers to `AGENTS.md` sections.
**Recommended canonical home:** Adapter inventory row only.

### Feature: GitHub Copilot adapter
**What it is:** `.github/copilot-instructions.md` — thin pointer-style adapter for in-IDE Copilot.
**Current state:** Production, thin.
**Last touched:** `Apr 8`.
**Lives at:** `.github/copilot-instructions.md` (1.2 KB).
**Validated against source:** Yes.
**What's complete:** Native Copilot path, GitHub-specific guidance only.
**What's incomplete / community-help opportunity:** Not currently mentioned in `docs-guide/features/ai-features.mdx` "Agent adapters" table — the table lists Copilot but the rest of the page focuses on Codex/Claude/Cursor/Windsurf/Augment.
**Recommended canonical home:** Adapter inventory row.

### Feature: `ai-tools/ai-skills/` — canonical skill system
**What it is:** 34 active `SKILL.md` skill roots covering session lifecycle (thread, pm, research, design, build, iterate, dispatch, agent-brief, diagnose, close, propagate), content pipelines (docs-copy, page-authoring, content-pipeline-pass-a/b/tab-map), audits (repo-audit-orchestrator, docs-coverage, docs-quality, rubric-static-review, script-footprint), governance creation (create-action/component/script, skill-docs, generated-mdx-banners-governance), component governance, cleanup, and packaging (cross-agent-packager, browser, product-thinking, style-and-language-homogenizer-en-gb).
**Current state:** Production. Skill count documented as **34** in `docs-guide/features/ai-features.mdx`. Live count: **34 active** (+ 1 archived in `x-archive/`). Count is correct.
**Last touched:** Skill files between `Apr 3` and `Apr 9`.
**Lives at:** `ai-tools/ai-skills/<name>/SKILL.md` for the local roots; canonical templates at `ai-tools/ai-skills/templates/*.template.md`.
**Validated against source:** Partial. The `docs-guide/tooling/ai-tools.mdx` page claims "currently contains 42 template files (numbered `01` through `42`)" — live count is **53 `.template.md` files** (numbered up to 53). The agent-packs `skills/` export folder contains **53 SKILL.md** files (matches templates, not the 34-skill local count). **The "42 templates" claim is stale**; same for the same page's "(currently 42 skills)" claim in the agent packs section.
**What's complete:** Canonical-template-driven skill authoring, lifecycle (template → registry → local sync → agent-pack export → validator), `sync-codex-skills.js`, registry schema, lane model, dispatcher family, 6 dispatcher mdx files under `ai-tools/registry/dispatchers/`, ~50 workflow mdx files under `ai-tools/registry/workflows/`.
**What's incomplete / community-help opportunity:** Refresh every hand-maintained count in `docs-guide/tooling/ai-tools.mdx` to read from the generated `ai-tools-inventory.md` or the registry directly. Add a validator that fails CI when the count in any `.mdx` diverges from the live registry. Re-classify whether the 34 local-synced skills versus 53 portable templates difference is intentional or drift.
**Recommended canonical home:** Section in `docs-guide/features/ai-features.mdx`; the registry doc stays at `docs-guide/tooling/ai-tools.mdx`.

### Feature: `AGENTS.md` — cross-agent baseline
**What it is:** The single source of truth that every native adapter points back to: required context order, git safety, root governance, authoring rules, validation expectations, response contract.
**Current state:** Production.
**Last touched:** `May 4`.
**Lives at:** `/AGENTS.md` (8.4 KB, 217 lines).
**Validated against source:** Yes — `check-agent-docs-freshness.js` covers it.
**What's complete:** Native adapter index, source-of-truth order, git/root/authoring/validation sections, no-lazy-tooling rule, response contract.
**What's incomplete / community-help opportunity:** None blocking. Could optionally add a section table-of-contents for skim-readability.
**Recommended canonical home:** Adapter inventory anchor — link from `docs-guide/features/ai-features.mdx`.

### Feature: Public AI artefacts page (`v2/resources/.../ai-automations/ai-features.mdx`)
**What it is:** Reader-facing introduction to the AI surfaces — MCP, `llms.txt`, `skill.md` — for community contributors.
**Current state:** Production, **partial overlap** with `docs-guide/features/ai-features.mdx`. Different audiences but content drifts.
**Last touched:** `Apr 9`.
**Lives at:** `v2/resources/documentation-guide/ai-automations/ai-features.mdx`.
**Validated against source:** Documents endpoints but does not list the generator that produces `llms.txt`. Mentions `skill.md` that has no repo source.
**What's complete:** Three MCP connection recipes, llms.txt endpoint, skill.md endpoint.
**What's incomplete / community-help opportunity:** Decide canonical home — public version should link to internal version, not duplicate it. Remove `skill.md` section until that artefact exists.
**Recommended canonical home:** Stay at the v2 path as the **public-facing landing**, but trim to "what these surfaces are + where to learn more (internal page)".

### Feature: Public research-and-fact-checking workflow page
**What it is:** Contributor-facing how-to for the experimental research workflow — extracting and verifying factual claims across pages.
**Current state:** Production but **scripts referenced don't match repo paths**.
**Last touched:** `Apr 8`.
**Lives at:** `v2/resources/documentation-guide/ai-automations/research-and-fact-checking.mdx`.
**Validated against source:** **No — script paths are wrong.** Page references `operations/scripts/docs-fact-registry.js` and `operations/scripts/docs-page-research.js`; actual paths are `operations/scripts/validators/content/veracity/docs-fact-registry.js` and `operations/scripts/audits/content/veracity/docs-page-research.js` (per `docs-guide/tooling/ai-tools.mdx`).
**What's complete:** When-to-use, evidence sources, workflow outputs, current limits, maintainer-path link.
**What's incomplete / community-help opportunity:** Fix script paths to current locations. Add a CI step that lints code blocks against `find`-discovered script paths. Mention the `docs-research-to-implementation-plan` follow-on skill referenced in internal docs.
**Recommended canonical home:** Stay at v2 path; cross-link from `docs-guide/features/ai-features.mdx` "Skills and workflows" section.

### Feature: AI sitemap generator (`generate-ai-sitemap.js`)
**What it is:** Node script that walks `docs.json` and emits `sitemap-ai.xml` with AI-namespaced metadata per URL.
**Current state:** Production, no scheduled run.
**Last touched:** `Apr 9`.
**Lives at:** `operations/scripts/generators/content/seo/generate-ai-sitemap.js`. CLI wrapper: `lpd ai-sitemap`.
**What's incomplete:** No GitHub Actions schedule; output (`sitemap-ai.xml`) is one month older than `docs.json`.
**Recommended canonical home:** Document inside the `sitemap-ai.xml` feature row in the consolidated page.

### Feature: llms generator (`generate-llms-files.js`)
**What it is:** Node script that emits `llms.txt` from `docs.json` and page frontmatter.
**Current state:** Production, no scheduled run.
**Last touched:** `Apr 9`.
**Lives at:** `operations/scripts/generators/ai/llm/generate-llms-files.js`.
**What's incomplete:** Same as sitemap — needs CI hook.
**Recommended canonical home:** Documented inside the `llms.txt` feature row.

### Feature: AI skills index generator (`generate-ai-skills-indexes.js`)
**What it is:** Generates index files for the skill catalogue so docs pages don't have to hand-maintain counts.
**Current state:** Production.
**Last touched:** `Apr 9`.
**Lives at:** `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`.
**What's incomplete:** Hand-maintained counts in `docs-guide/tooling/ai-tools.mdx` are not consuming this generator's output. Wire it.

### Feature: Cross-agent packager (`cross-agent-packager.js`)
**What it is:** Generates agent-specific packs in `ai-tools/agent-packs/<codex|claude|cursor|windsurf|skills>/` from canonical templates.
**Current state:** Production. Last regen `Apr 28`.
**Lives at:** `operations/scripts/integrators/ai/agents/cross-agent-packager.js`.
**What's complete:** Output for all four named adapters + portable skill exports.
**What's incomplete / community-help opportunity:** 53 skills in `agent-packs/skills/` but only 34 active under `ai-tools/ai-skills/<name>/SKILL.md` — the divergence isn't explained anywhere user-visible. Either reconcile or document why local skills are a curated subset.

### Feature: AI tools registry (`ai-tools-registry.json` + validator)
**What it is:** 344 KB canonical inventory of every `ai-tools/**` artefact, with lane assignment, lifecycle state, validators, repair commands. Validated by `validate-ai-tools-registry.js`.
**Current state:** Production.
**Last touched:** `Apr 8`.
**Lives at:** `ai-tools/registry/ai-tools-registry.json`, schema at `ai-tools-registry.schema.json`, inventory at `ai-tools-inventory.md`.
**What's complete:** Schema, 7-lane model, lifecycle states, full artefact list, generated inventory report.
**What's incomplete / community-help opportunity:** `ai-tools-inventory.md` mtime is `Apr 5` (older than registry); regen the report.

### Feature: Agent governance framework + adapter freshness validator
**What it is:** Canonical policy doc plus a validator (`check-agent-docs-freshness.js`) that proves every adapter exists, is non-empty, and matches the approved set.
**Current state:** Production.
**Last touched:** Framework `Apr 5`; validator path referenced in CLAUDE.md and AGENTS.md.
**Lives at:** `docs-guide/policies/agent-governance-framework.mdx`, `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`.
**What's complete:** Policy taxonomy, must-have rules, retired-legacy table, approved migration map.
**What's incomplete / community-help opportunity:** Validator command in policy doc references `operations/scripts/validators/governance/check-agent-docs-freshness.js` but the AGENTS.md table lists it under `operations/scripts/validators/governance/compliance/`. Trace and fix the canonical path; one of the two is wrong.

### Feature: Codex companion-manifest validator
**What it is:** `check-companion-manifest.js` — verifies that every skill's optional companion bundle (`references/`, `scripts/`, `assets/`) is declared in a manifest before sync.
**Current state:** Active but undocumented in `docs-guide/features/ai-features.mdx`.
**Lives at:** `operations/scripts/validators/governance/ai/check-companion-manifest.js`.
**What's incomplete:** No row in the AI governance contracts table; community contributors won't find it.

### Feature: `ai-tools/ai-rules/` — legacy AI rules
**What it is:** Pre-governance rule docs: `best-practices.md`, `HUMAN-OVERRIDE-POLICY.md`, `ROLLBACK-GUIDE.md`, plus a `_retired/` archive and a stray `.augment/` subtree.
**Current state:** Advisory-only, **flagged for retirement** by the governance framework.
**Last touched:** `Apr 3`.
**Lives at:** `ai-tools/ai-rules/`.
**What's incomplete / community-help opportunity:** `.augment/` subtree under `ai-tools/ai-rules/.augment/` duplicates the canonical `.augment/rules/` and breaks the "one canonical path" rule. Move active content to `.augment/rules/` and delete the duplicate.

---

## Cross-feature observations

### Freshness
- `llms.txt` and `sitemap-ai.xml` are **33 days stale** relative to `docs.json` (Apr 15 vs May 17). Neither has a scheduled regeneration. This is the single highest-impact freshness gap.
- `ai-tools-inventory.md` (Apr 5) is 3 days older than `ai-tools-registry.json` (Apr 8) — small drift, but the report should be regenerated whenever the registry changes.
- `docs-guide/features/ai-features.mdx` has `lastVerified: 2026-05-14`; the page is **content-accurate** for skill count (34 ✓), `Apr 15` artefacts (still stale ✓), but does not call out the drift itself.
- `docs-guide/tooling/ai-tools.mdx` (`lastVerified: 2026-03-27`) claims "42 template files" and "42 skills" — **both numbers are stale** (53 templates, 53 exported skills, 34 local-synced). The hand-maintained counts violate the page's own "use generated indexes" guidance.
- `docs-guide/frameworks/ai-tools-governance.mdx` (`lastVerified: 2026-04-07`) is the cleanest of the three governance pages — no stale numbers found.
- Public-facing `v2/.../ai-features.mdx` has `lastVerified: 2026-03-18` (two months old) and documents a `skill.md` artefact that does not exist in the repo.

### Duplication between `docs-guide/` and `v2/resources/`
- MCP connection recipes appear in `v2/resources/.../ai-features.mdx` (rich) and as a one-line entry in `docs-guide/features/ai-features.mdx` (terse). They drift independently.
- Research workflow appears in `v2/resources/.../research-and-fact-checking.mdx` (with stale script paths) and `docs-guide/tooling/ai-tools.mdx` (with current script paths). Both pages link to each other but the script paths disagree.
- Three internal docs cover overlapping ground: `docs-guide/features/ai-features.mdx` (user-friendly), `docs-guide/frameworks/ai-tools-governance.mdx` (architecture), `docs-guide/tooling/ai-tools.mdx` (registry & lane model). The line between "features", "framework", and "tooling" is blurry — all three discuss adapters, skills, dispatchers, and registry.

### Missing features that exist in code but are undocumented
- `check-companion-manifest.js` is referenced nowhere in `docs-guide/features/ai-features.mdx`.
- `export-portable-skills.js` (`operations/scripts/integrators/ai/agents/`) is undocumented in the features page.
- `validate-codex-task-contract.js` is referenced in the task contract YAML but absent from the features-page governance table.
- `ai-tools/registry/dispatchers/*.mdx` (6 dispatcher pages) and `ai-tools/registry/workflows/*.mdx` (~50 workflow pages) are not surfaced from `docs-guide/features/ai-features.mdx`.

### Documented features that no longer exist (or never existed)
- `skill.md` published artefact — documented at the public URL, no repo source.
- `tasks/research/claims` path referenced in `research-and-fact-checking.mdx` — actual path is `workspace/research/claims` per `docs-guide/tooling/ai-tools.mdx`.

---

## Community-help opportunities

1. **Wire `llms.txt` and `sitemap-ai.xml` regeneration to CI.** Currently both are 33 days stale. Acceptance: a GitHub Actions job that runs `node operations/scripts/generators/ai/llm/generate-llms-files.js --write` and `node operations/scripts/generators/content/seo/generate-ai-sitemap.js --write` whenever `docs.json` or `v2/**/*.mdx` change on `main`/`docs-v2`, and commits the diffs.

2. **Replace hand-maintained skill counts with generator output.** `docs-guide/tooling/ai-tools.mdx` claims 42 templates and 42 skills; live counts are 53 and 34 respectively. Acceptance: any `<<<count>>>` placeholder is filled by `generate-ai-skills-indexes.js`, plus a CI assertion that fails when an `.mdx` contains a literal count that diverges from the registry.

3. **Resolve or document the local-skills vs portable-skills divergence.** 34 local `SKILL.md` roots vs 53 exported portable skills — either sync the missing 19, or document why portable-only skills exist. Acceptance: explicit note in `ai-tools/agent-packs/README.md` and `docs-guide/features/ai-features.mdx`.

4. **Fix the `research-and-fact-checking.mdx` script paths.** Currently references `operations/scripts/docs-fact-registry.js` (does not exist) instead of `operations/scripts/validators/content/veracity/docs-fact-registry.js`. Acceptance: code blocks updated, plus a doctest that `node <path> --help` succeeds.

5. **Decide on `skill.md`.** Either implement a generator that produces `skill.md` from `docs.json` (acceptance: file at `/skill.md`, generator under `operations/scripts/generators/ai/llm/`, registry entry, CI regen), or strike the section from `v2/.../ai-features.mdx`.

6. **Reconcile the `check-agent-docs-freshness.js` canonical path.** `agent-governance-framework.mdx` writes `operations/scripts/validators/governance/check-agent-docs-freshness.js`; `AGENTS.md` writes `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`. Acceptance: one path is correct, the other is updated, and a CI link-check covers script paths in `.mdx`.

7. **Trim `.claude/CLAUDE.md` toward thin-adapter target.** Currently 28 KB and duplicates large policy chunks from `AGENTS.md`. Acceptance: file ≤200 lines, no policy duplicated from `AGENTS.md`, all Claude-specific bits (skill discovery, observer auth, thread tracking) preserved.

8. **Retire the duplicate `.augment/` subtree under `ai-tools/ai-rules/.augment/`.** The canonical Augment path is `.augment/rules/`. Acceptance: `ai-tools/ai-rules/.augment/` moved to `_retired/` and the registry updated.

9. **Document `dispatchers/` and `workflows/` in `docs-guide/features/ai-features.mdx`.** Six dispatcher pages and ~50 workflow pages exist under `ai-tools/registry/` but the features page only mentions skills.

10. **Add an MCP tool-list drift check.** `v2/.../ai-features.mdx` documents one MCP tool (`search_livepeer_docs`). Add a periodic job that fetches the live MCP tool list from `https://docs.livepeer.org/mcp` and flags additions. Acceptance: a scheduled action and a `--check` mode that exits non-zero on drift.

---

## Recommended single-page rewrite outline for `docs-guide/features/ai-features.mdx`

The consolidated page should be product-forward, ~250-350 lines, structured so a contributor can answer "what AI does this repo deliver, what state is it in, and where do I help" in two minutes.

1. **What the AI layer delivers** (3 short paragraphs: outward-facing AI surfaces, inward-facing agent runtime, governance/automations belt).
2. **Public AI surfaces** (`llms.txt`, `sitemap-ai.xml`, hosted MCP, Mintlify chat assistant) — one row per surface with: purpose, current freshness, regen path, owner, status.
3. **Agent adapters** — single table with: agent, native path, role, thin/heavy, last verified. Link AGENTS.md as the canonical baseline. Link Codex task-isolation section.
4. **Skill system** — 1-paragraph product description + a count-table sourced from the generator (templates, local skills, portable exports, dispatchers, workflows). No hand-maintained numbers.
5. **Governance and validators** — `check-agent-docs-freshness.js`, `validate-ai-tools-registry.js`, `validate-locks.js`, `check-companion-manifest.js`. One row each, plus repair command.
6. **Drift watch** — explicit table of "what goes stale and how we detect it" (regen-on-merge jobs, scheduled checks). This is the missing piece today.
7. **Contributor rules** — kept terse; link out to `agent-governance-framework.mdx` and `ai-tools-governance.mdx` for full policy and architecture.
8. **Community-help index** — small section pointing at the open issues / acceptance criteria for the 10 items above. (This is what makes the page "product-forward" — every gap is also a contribution invitation.)

Move the deep architecture (lane model, dispatcher families, target architecture) to `docs-guide/frameworks/ai-tools-governance.mdx`. Keep the registry schema and validator commands in `docs-guide/tooling/ai-tools.mdx`. Public-facing `v2/.../ai-features.mdx` becomes a 30-line landing page that says "Livepeer Docs is AI-ready — here's how to plug in" with three recipes and a link to the internal feature page.
