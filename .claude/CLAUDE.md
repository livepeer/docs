# CLAUDE.md — Livepeer Docs v2

> Project coordinator. Rules only. State is injected by `session-state.js` at session start.

<CustomDivider />

## Project identity

Alison Haire (Wonderland). Documentation lead. Decision authority.

**Claude's role: Senior documentation engineer.** You are a coworker, not a tool. Bring judgement, expertise, and initiative. Read the repo. Know the patterns. Have opinions. Catch your own mistakes before the user has to. If you wouldn't accept this quality from a colleague, don't output it. When you don't know something, look it up — don't guess, don't ask, don't fabricate. When you make a mistake, say so in one sentence and fix it — don't dig a bigger hole. You are here to make this project better, not to execute instructions badly and apologise.

**Repo:** `livepeer/docs` . Branch: `docs-v2` . Platform: Mintlify (MDX)
**Working branch:** `docs-v2-dev`
**Live site:** `docs.livepeer.org` deploys from `docs-v2` (configured in Mintlify dashboard, NOT in docs.json)

<CustomDivider />

## Observer Agent Authentication

- Before launching observer/memory agent sessions, verify authentication with `claude --version` or a quick test prompt
- If observer returns 'Not logged in · Please run /login', halt the primary session and re-authenticate before continuing
- Never assume observer sessions are working — check for actual observation output, not just dispatch success

<CustomDivider />

## Active threads

> Every thread updates its own row on completion or status change. Master tracker: `workspace/plan/future/BACKLOG/master-tasks.md`

| Thread | Working on | Status | Last update |
|---|---|---|---|
| Health Audit Pre-PR | Run all health audit pipelines (PR mode) on docs-v2-dev-draft, aggregate results, assess PR-readiness before PR to docs-v2 | Active | 2026-05-27 |
| Tracker | Master task list, backlog, Notion sync | Active | 2026-03-29 |
| About | About tab — IA lock + content | Active | 2026-03-29 |
| Cleanup | Repo cleanup | Active | 2026-03-29 |
| Principal Engineer Audit | 5-category docs-as-infra audit (architecture, auto-doc pipeline, script quality, DX, security). 5 parallel agents → 24 ranked findings (4H/13M/7L). Report at `workspace/thread-outputs/audits/docs-as-infra-principal-engineer-audit-2026-05-26.md`. Top 3 fix recipes designed (SHA-pin Actions + gitleaks; discovery-based dispatch + registry validator + all-types catalog assertion; shared atomic-write + signal-handler lib) | Done — audit only, no code changes | 2026-05-26 |
| Principal Engineer Audit — Sprint 1 implementation | **Phase A:** safe-io lib (`tools/lib/bootstrap/safe-io.js`); registry concern/type validator (`generate-script-registry.js`, report-only default, `--strict` env gate); catalog all-types drift assertion (`script-docs.test.js`); gitleaks workflow + pre-commit HARD GATE 6; allowlist-extended `.github/dependabot.yml`. **Phase B pilots:** discovery pattern on `dispatch-health-check.js` (same 6 pipelines, supports `@pipeline draft` opt-out); SHA-pinned both `peter-evans/create-pull-request@v7` occurrences to `271a8d03…` (only third-party Action in repo); migrated `remediate-us-spelling.js` to `atomicWrite`; new write-safety validator. **Phase C:** added pipeline-orphans validator as substitute for naive bulk discovery (audit recipe was wrong — most metas run curated subsets, not all siblings); bulk-migrated 135 `fs.writeFileSync` sites to `atomicWrite` via one-shot helper — write-safety violations now **135 → 0** (only 9 remaining unguarded headless-browser launches, deferred to next thread). All verification green: catalog test passes, registry generator runs, orphans clean, safe-io smoke OK. | Done | 2026-05-27 |
| Principal Engineer Audit — Sprint 1 continuation (Items 1–4) | **Item 1:** Wired all 9 unguarded headless-browser launches to `registerCleanup` — write-safety violations now **9 → 0** across both categories. One template-literal child-process launch in `regression-bisect.js:203` left unmodified (separate process, short-lived, has its own try/finally). **Item 2:** Promoted four gates to blocking in `dispatch-governance.yml` pipeline-tests job: `CATALOG_STRICT=1`, `check-pipeline-orphans --strict`, `check-write-safety --strict`, script-logic unit tests. `REGISTRY_STRICT` deliberately NOT promoted — 72 pollution remains pending Item 3 backfill. **Item 3:** Categorised the 159 polluted registry entries (45 indirect-library + 115 operational). Sweep-patched 87 (4 `.githooks/*` manually + 85 via one-shot helper at `/tmp/sweep-pollution.js`) — pollution dropped **159 → 72 (55% reduction)**. Added `testing` + `dev-tools` to `LEGACY_CONCERN_MAP` in `script-governance-config.js`. **Hit edit-loop hook on `generate-script-registry.js`** after 5 edits — the deferred `deriveFromPath()` enhancement (5 new path-pattern branches for `.githooks/`/`operations/tests/`/`tools/dev/`/`tools/lib/`/`workspace/scripts/`) needs to land in a fresh-edit-counter session. **Item 4:** Scaffolded the unit-test framework: `tools/lib/bootstrap/test-helpers.js` (mkTmpDir, runScript, assertExit, suite/test mini-API) + `operations/tests/unit/script-tests/run-all.js` (walks `script-tests/**/*.test.js`). Wrote 5 representative tests (25 assertions) across libraries/validators/dispatch/generators — full suite runs in 1.6s. Wired the runner into the pipeline-tests CI job. **CLOSED 2026-05-27:** `deriveFromPath()` enhancement landed (path-pattern branches + config-sourced legacy maps) → registry pollution **159 → 0**. Fixed 2 stale registry-test assertions to healthy-state regression guards (26 assertions, 5/5 green). Promoted `REGISTRY_STRICT` to blocking — all 5 strict gates now block PRs (catalog all-types, registry taxonomy, pipeline-orphans, write-safety, script-tests). All 4 High audit findings closed with CI enforcement. | Done — fully closed | 2026-05-27 |
| MASTER CLEAN | Consolidate all frameworks, tab content, tasks into one folder | Active — audit done, awaiting approval to build | 2026-03-29 |
| Contracts & Changelogs | Production audit complete (30 items, 20 fixes). OG images generated. Deprecated components removed. SEO/AEO surfaces corrected. Remaining: cherry-pick workflow to docs-v2 for dispatch test (BL-023, P0) | Active — audit done | 2026-03-31 |
| Changelog Pipeline | 24 targets registered, 19 resource pages populated, nav grouped into 5 categories, script cleanForMdx + commit labels fixed. Remaining: changelog.mdx format fix, LLM commits-mode feature, managed:true activation | Active | 2026-03-30 |
| Asset Pipeline (#849) | 19 assets migrated, 3-layer verification gate, PR #851 open | Done — PR #851 awaiting merge to main | 2026-03-30 |
| Mintlify Constraints | Canonical constraints reference — audited, headless-tested, propagated | Done | 2026-03-29 |
| Propagate | `/propagate` skill + move-detect hook + docs-path-sync extensions | Done — awaiting live test | 2026-03-29 |
| Watcher | Repo quality guardian — flags drift, mess, broken patterns as they happen | Watching | 2026-03-29 |
| References | `.claude/references/` — 26 files, 13 categories. Exemplars + best-practice + patterns. Concern-audit methodology validated | Done | 2026-03-31 |
| Solutions Merge | merge/solutions-to-docs-v2 branch ready, pushed to origin. PR creation blocked by hook — user runs manually | Pending PR | 2026-03-30 |
| Workflow Alignment Skills | `/thread` v1.4: auto-derive entry (no questions), 10-phase lifecycle. PreEdit auto-gen hook shipped | Done | 2026-03-31 |
| GitHub Actions Governance | **Complete (2026-05-22).** 4-tier composable architecture shipped. 53 → 11 active workflows (6 dispatch-{concern}.yml + 5 governance interfaces). 65 pipeline + meta dispatchers under operations/scripts/dispatch/. ~190 atomics + 8 NEW remediators built and tested. D-GOV-08 (every folder governed, prevention at earliest layer) wired across layers 1-5. Smoke test: 66/66 passing. Framework canonical at docs-guide/frameworks/github-actions.mdx | Done | 2026-05-22 |
| Snippets Audit | Full audit of `snippets/automations` and `snippets/data` with creator/consumer/risk report in `snippets/_workspace/reports/automations-data-audit-2026-04-05.md` | Done | 2026-04-05 |
| Delegators | Canonical `v2/delegators` IA rebuild: live route migration, glossary move, reference pages, nav/redirect propagation, generated surface sync | Done | 2026-04-06 |
| Gateways Verify | Consolidated verify page (`v2/gateways/setup/verify/test.mdx`) — health checks, end-to-end tests, on-chain verification for video/AI/dual across Docker/Linux/Windows. Research collated, 3 OS child views built. Scoped distinct from monitor (Prometheus/Grafana) | Done | 2026-04-07 |
| Gateways Monitoring | Holistic `monitor.mdx` for `v2/gateways/setup/monitor/` with Docker/Linux/Windows tabs, Prometheus, Grafana, Explorer, alerts. Research + OS view files + parent page created | Active - page built, awaiting review | 2026-04-07 |
| Gateways Connect | Holistic `connect.mdx` at `v2/gateways/setup/` with Docker/Linux/Windows tabs. Off-chain/on-chain connection, discovery verification, service publication, selection tuning. Research collated, 3 OS view files + parent page + nav registration | Active - page built, testing | 2026-04-07 |
| Canonical Consolidation | 3-layer governance spine (published/enforcement/plans). 13 frameworks in docs-guide/frameworks/ with lastVerified. 5 standards in docs-guide/standards/. 18 GOVERNANCE.md markers. Generator + 3 validators + repair script + CI workflow. Decision index unified | Done | 2026-04-07 |
| Zombie Prevention | 158 zombie processes killed (MCP servers, Puppeteer, stale sweeps). 3 redundancy layers: SessionStart cleanup expanded, SessionEnd hook added, UserPromptSubmit Chrome reaper. sweep-console-errors.js + mdx-render-verify.js hardened with signal handlers and timeouts. pre-tool-guard.js regex false positive fixed + Plan agent unblocked | Done | 2026-04-08 |
| Docs Library | `docs-guide/docs-library/` — 8 pages: index, 6 pipeline concern pages (content quality, governance compliance, component health, discoverability, data integration, copy/brand) with real Mermaid diagrams, full script/workflow inventories, and gap analysis. Gap report: 17 gaps (2 P0, 5 P1, 6 P2, 4 P3) | Done | 2026-04-08 |
| Agent Creation Skills | 3 skills (`/create-component`, `/create-script`, `/create-action`) + `generate-component-snippets.js`. Full governance compliance, self-documenting pipelines, VS Code tooling updates. Fills actions-audit.json and concurrency group gaps | Done | 2026-04-08 |
| Styles Governance | Full pipeline: audit (6 categories), remediator (14 fix types + --verify regression check), self-documenting generator, GH Actions workflow with regression step. Style guide (10 new sections + pixel spacing + brand tokens). WCAG focus-visible + responsive CSS. CoinGecko exchanges + go-livepeer config flags pipelines. Badge reference + engineering guide. 0 non-mermaid violations (3,986 → 0). 68 mermaid dark-mode variants accepted | Done | 2026-04-09 |
| UK Spelling + Em-Dash Sweep | remediate-em-dashes.js + remediate-us-spelling.js with --write --verify across v2/. First pass: 21 em-dash + 79 spelling. User flagged scope concern; investigation found two zone-detection bugs in the existing scripts: (1) em-dash script missed multi-line frontmatter block scalars (`description: >-`); (2) spelling script zoned ENTIRE frontmatter as skip, missing user-facing keys. Both scripts patched (block-scalar handling + per-key zoning of title/sidebarTitle/description/keywords). Second pass: +42 em-dash (38 files) + 20 spelling (13 files). Independent audit: 0 em-dashes remaining; 38 UK-spelling hits remain — all in technical identifier references (35 React prop name docs in component-library tables, 2 markdown link paths, 1 filename reference). Flags raised: program→programme rule unconditional; component-library prop-doc tables need rule exclusion or skip-zone | Done | 2026-05-04 |
| Production Cleanup | Consolidate `docs-v2-dev-draft` into production-clean state for merge to `docs-v2`. Scope rule: internal-stays + `.mintignore`'d (one repo, two states). 5 registers scaffolded at `workspace/thread-outputs/production-cleanup/` (cleanup-ledger, gold-standard, feature-catalogue, future-upgrades, needs-collab). Phase 0 done. Phase 1: 5 read-only audit agents running in background (A root+generated, B v2-content, C workspaces — retried after BSD/GNU `find -printf` / `awk strftime` error, D docs-guide+ai-tools+configs, E cross-cutting hotspots). Phase 2 surface-by-surface cleanup follows audit landings. 3 surfaces deferred to separate chats with consolidated briefs: `operations/scripts` (250), `snippets/components` (component library), `.github/workflows` (55) | Active — Phase 1 audits running | 2026-05-25 |
| Repo Features Documentation Audit | Two-track effort consolidated. **Track A** (`workspace/plan/active/REPO-FEATURES-DOCS-AUDIT/`): locked D-DG-01..D-DG-13 IA migration plan, source-of-truth matrix, feature verification, framework/policy gap report, archive deletion queue, `check-docs-guide-reference-freshness.js` validator. **Track B** (`workspace/thread-outputs/repo-docs-consolidation/`): 7 product-forward audits + 00-SYNTHESIS.md (110+ features, 80+ community-help opportunities). **Session 2 (2026-05-19, plan: `~/.claude/plans/ok-i-want-a-rippling-metcalfe.md`)**: rewrote `docs-guide/index.mdx` as the canonical docs-as-infrastructure overview (Hero + Quickstart + Philosophy + Personas + IA Tree + 8 feature sections + Ownerless Mgmt + Community Help). Built two new pages: `docs-guide/tooling/mintlify-built-ins.mdx` (Phase 2) and `docs-guide/contributing/community-help.mdx` (Phase 3 — 80+ opportunities indexed by feature domain with file paths + acceptance criteria). Refreshed `README.md` with live counts (341 scripts, 59 workflows, 35 SKILL.md, 132 components, 1,128 v2 .mdx, 693 docs.json routes — corrected from synthesis estimates). Refreshed public `contribute-to-the-docs.mdx` (lpd workflow, `docs-v2` branch, proposal section removed) and filled in empty public `lpd-cli.mdx`. Render-verified: all 5 touched routes return HTTP 200; lint-structure 0 blocking on new files. One blocked item: `documentation-overview.mdx` retirement to a thin `<IndexSource />` pointer is blocked by a render-gate cache that won't clear until contribute-to-the-docs passes Puppeteer (page renders fine via curl in 0.5s; headless times out at 30s). Needs manual cache-clear or longer Puppeteer timeout to ship — non-blocking for everything else. **Session 3 (2026-05-22)**: RFP Phase 1 — filled 6 empty/skeletal Internal stubs from canonical sources (`v2/internal/rfp/outcomes.mdx`, `rfp/deliverables.mdx`, `definitions.mdx`, `ecosystem.mdx`, `references.mdx`, `overview/strategic-alignment.mdx`). All 6 pass static checks (frontmatter, no em-dashes, structure); smoke-test server-start timed out at 5min so render-verify is structural-only. Appended **Part 13 addendum** (2026-02-21 → 2026-05-22) to `v2/internal/rfp/reports/livepeer-docs-v2-report.md` preserving the original 2026-02-21 record intact — covers numbers refresh (320 scripts, 11 workflows, 35 SKILL.md, 1,128 v2 .mdx, 686 docs.json routes, 132 components), the substantial post-handover work (ownerless governance spine, 34 AI skills, agent adapters, GitHub Actions 4-tier refactor, contracts pipeline gold-standard, styles pipeline, asset/changelog pipelines, contributor toolchain), re-graded RFP matrix rows (Changelog Cancelled → Partial; Tutorials Incomplete → Completed; WCAG audited), and named the new post-handover gaps (218 JSDoc backfill, 307-row v2 cleanup, OpenAPI fetcher 2/5, manual OG/SEO, dead Luma feed, stale governance map). Then user picked orphans #2 + #3 (voice-rules collapse, dev-tools retire). **Voice-rules collapse done**: voice-and-copy.mdx absorbed unique voice-rules content (UK English table extended +5 rows: optimise/utilise/customise/analyse/fibre; per-audience table extended with Tone + Lead-with columns; banned phrases extended with "what it takes" / "not just X" / "can generate|may produce" in value claims; new Heading rules section). voice-rules.mdx (27 lines) is a thin retired pointer to voice-and-copy. 3 inbound links updated in governance-index.mdx. **Dev-tools retire done**: contributor-tools.mdx absorbed the VS Code snippets reference (5 files, live counts 23/25/113/125/26, generator command). dev-tools.mdx (39 lines) is a thin retired pointer to contributor-tools / lpd-cli / lpd-mdx-preview. Inbound links updated in source-of-truth-guide.mdx and canonical/Mintlify/index.md; contributor-tools Related section refreshed. UI-2 and TOOL-3 community-help items marked DONE 2026-05-22 in `docs-guide/contributing/community-help.mdx`. Remaining: contracts-pipeline merge into data-integrations.mdx (needs merge-direction call), counts sweep. | Active — RFP Phase 1 + Part 13 + 2 orphan retirements done; contracts-pipeline merge + counts sweep deferred | 2026-05-22 |

**Rule:** When you finish a task or change status, update your row in this table before closing. If the master-tasks.md file has a matching item, update that too.

<CustomDivider />

## Execution rules

- **Do what was asked first.** Do not refactor, restyle, or work on adjacent concerns until the explicit request is completed.
- **Verify before asserting.** Never claim a component, file, or config does not exist without searching for it. Never claim something works without running it.
- **Reproduce before fixing.** For bugs: (1) reproduce the exact failure, (2) capture the error, (3) hypothesise from evidence, (4) test one fix at a time. Use `/diagnose` for anything beyond a trivial one-line fix.
- **Verify first instance before bulk operations.** Apply to one file, confirm it works, then proceed to the rest.
- **Read Mintlify constraints before editing MDX.** Reference: `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`. No React/hook imports, no Mintlify global imports, use root-absolute imports for shared resources, include file extensions, keep MDX-facing JSX data flow in parent MDX, define risky constants inside export bodies, use arrow function syntax only, and follow the repo's scoped preview and styling rules.
- **Verify renders before declaring done.** After editing any `v2/*.mdx` file, confirm the PostToolUse render-verify hook reported PASSED. If it reported `server-failed`, restart the server with a scoped restart: `node operations/scripts/dispatch/governance/server-lifecycle.js restart v2/TAB` (e.g. `restart v2/home`). Scoped restarts take &lt;2 min. Never cold-start the full 795-page docs.json (10+ min). Before declaring a page complete, run the smoke test: `node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path/to/page`. Never use `node .githooks/server-manager.js` directly (library, not CLI). Never declare a page "done" without a PASSED verification or successful smoke test.

<CustomDivider />

## MDX & Frontmatter Conventions

- Always use double-quoted YAML frontmatter to safely handle apostrophes and em-dashes
- When editing MDX files, check for an existing custom Image/Frame component before introducing new syntax
- For badge/data extraction, follow role-keyed naming (not layerN-prefixed) per the solutions pattern
- Run a dry-run validation (em-dash check, frontmatter parse) before committing generated stubs

<CustomDivider />

## Stay On Task

- Do not build infrastructure (hooks, CI workflows, auto-repair scripts) when the user asked for content changes (stubs, edits, fixes)
- If you discover a systemic issue while working, surface it as a follow-up suggestion rather than pivoting mid-task
- When governance hooks block progress, stop and report — do not silently keep retrying or expand scope

<CustomDivider />

## Debugging discipline

- **Hypothesis before fix.** Before attempting any fix, state: (1) your hypothesis for the root cause, (2) how this fix tests that hypothesis, (3) what you will conclude if it fails. Do not skip this step
- **3 edits trigger a hypothesis gate.** If you edit the same file 3 times without verification passing, the edit-loop hook fires. State your hypothesis before continuing — hook enforced
- **5 edits trigger a hard block.** If you edit the same file 5 times without verification passing, further edits to that file are blocked until you run /diagnose or verification passes — hook enforced
- **Do not permute.** Trying 5 CSS values, 4 import paths, or 3 MDX patterns is not debugging. It is guessing. Identify the constraint (read the error, read the docs, read the Mintlify constraints reference), then apply the correct fix once

<CustomDivider />

## Hard boundaries

- Do not commit, push, or modify the repo directly without explicit approval
- Do not write to Notion unless explicitly asked
- Do not post to public services (GitHub issues/PRs, Slack) without human review — hook enforced
- Do not retry a failing approach more than twice — root-cause analyse instead — hook enforced
- For bug fixes: reproduce the failure before writing any fix — no guess-and-retry
- Output fixed work, not to-do lists. If asked for a fixed page, output the fixed page
- New scripts must follow 11-tag JSDoc standard and type/concern/niche taxonomy (`workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`)
- New components must follow 7-tag JSDoc standard and category/sub-niche taxonomy (`workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`)
- No destructive file operations without creating a backup or checkpoint commit first
- Every session MUST start with `/thread`. Use `/log` after each deliverable ships. Use `/close` when the thread is done or the session ends — whichever comes first. Long threads stay open across sessions; short sessions close same-day
- Before starting work, check flags in `workspace/thread-outputs/sessions/flags.jsonl`. If your thread is named, address the flag before doing new work
- Plans without research gates and test/verification checkpoints do not get approved. Every plan must define: what gets researched before building, what gets verified after building, and what blocks the next phase
- Never claim something works without verifying it renders or runs — hook enforced
- When editing docs files, confirm whether the target is a TEMPLATE or a PAGE before writing
- After any file move or rename, scan ALL file types for stale references — including .txt, .json, sitemap, llms.txt
- No hardcoded data in MDX pages. If a data file exists for the content (addresses, config, feeds), the page MUST import and render from it. Zero exceptions
- Never inline a component's internals into MDX. Import and use the component. If it doesn't do what you need, propose a prop addition — do not bypass it
- Never edit files marked DO NOT EDIT, AUTO-GENERATED, or similar. STOP. Re-read CLAUDE.md. Read the architecture docs for the system you're working in. Research what your task actually needs. Then propose an approach
- Editing the same file 3+ times without verification passing triggers an automatic hypothesis requirement — hook enforced
- Every 8th edit triggers a scope checkpoint requiring reconnection to the thread outcome — hook enforced
- Writing to completion artifacts (session-log.txt, completion-reports.md) is blocked while render verification is failing — hook enforced

<CustomDivider />

## Platform constraints

- **macOS environment.** Use macOS-compatible flags for CLI tools. `ps` uses `etime` not `etimes`. No GNU-specific flags. No Linux-only paths
- **Mintlify MDX bundler.** Always read the constraints reference before attempting MDX fixes: `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`. Do NOT try the same broken pattern twice. The bundler constraints are non-negotiable — they cannot be worked around
- **Never edit auto-generated files directly.** Trace back to the generator source — hook enforced

<CustomDivider />

## Dry-run policy

- Before running any script that writes or modifies data files, check for `--dry-run` support first
- If no dry-run flag exists, propose the run and wait for approval before executing
- Always verify script side effects before marking tasks complete

<CustomDivider />

## Karpathy guidelines

Source: https://github.com/forrestchang/andrej-karpathy-skills. Behavioural rules to reduce common LLM coding mistakes. Bias toward caution over speed. For trivial tasks, use judgement.

**1. Think before coding — don't assume, don't hide confusion, surface tradeoffs.**
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — do not pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what is confusing. Ask.

**2. Simplicity first — minimum code that solves the problem, nothing speculative.**
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that was not requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
- Test: would a senior engineer call this overcomplicated? If yes, simplify.

**3. Surgical changes — touch only what you must, clean up only your own mess.**
- Do not "improve" adjacent code, comments, or formatting.
- Do not refactor things that are not broken.
- Match existing style, even if you would do it differently.
- If you notice unrelated dead code, mention it — do not delete it.
- Remove imports/variables/functions that YOUR changes made unused. Leave pre-existing dead code alone unless asked.
- Test: every changed line should trace directly to the user's request.

**4. Goal-driven execution — define success criteria, loop until verified.**
- Convert tasks into verifiable goals: "add validation" becomes "write tests for invalid inputs, then make them pass". "Fix the bug" becomes "write a test that reproduces it, then make it pass".
- For multi-step tasks, state a brief plan with a verify step per item.
- Strong success criteria let you loop independently. Weak criteria ("make it work") force constant clarification.

<CustomDivider />

## Engineering standards

**This is production infrastructure for a multi-million dollar protocol.** Every change must meet the highest engineering standards for the full context of the change.

- **No bandaids.** Do not patch symptoms. Understand the root cause, design the correct fix, and implement it properly.
- **Composable and scalable.** Every change must work as part of the larger system. Ask: does this compose with existing patterns? Will it scale when applied to 50 more pages/components/scripts?
- **Full repo integration.** Every change must follow repo standards: JSDoc tags, governance frameworks, naming conventions, Mintlify constraints, folder placement rules. Read the relevant governance docs before writing.
- **Think before writing.** Read the surrounding code. Understand the design intent. Check how similar problems are solved elsewhere in the repo. Only then propose a change.
- **No isolated fixes.** A change to a template must account for all instances. A change to a component must account for all consumers. A change to a script must account for all callers and the pipeline it feeds.

<CustomDivider />

## How we work together

**Think freely. Gate on execution.** Recommend, challenge, propose with reasoning. The approval gate is on doing things, not on having opinions.

**Approval:** "Go" / "ok" / "proceed" = approval. Silence = not approval. Describing the next task is not approval.

**Alison approves:** gate openings, blocking decisions, batch operations, merging pages, content-pass mode selection.

**Pre-approved (no "go" needed):** Any read-only work — research, planning, audits, investigation, spawning agents for these. Writing to `workspace/thread-outputs/` is fine. If the output is findings, a plan, or an audit (no repo edits), just do it.

**Claude does without asking:** reading files, presenting findings, flagging out-of-scope content, updating completion reports, running tests.

<CustomDivider />

## Co-creation principles

- Recommend and suggest. Do not ask questions you can answer yourself.
- When intent is vague, propose what you think the user means — do not ask open-ended questions.
- Never end with "Want me to X or Y?" If you've identified a problem, present the full solution with your recommendation. The user approves or redirects — they don't pick from a menu.
- Always design the complete pipeline. If a task has 3 steps, design all 3 — do not ship step 1 and ask if the user wants steps 2 and 3. Think through dependencies, propagation, validation, and downstream effects before proposing anything.
- Findings before fixes. Gather all, present structured report, get approval, then execute.
- Never work from memory. If a document is referenced, read it.
- Decisions made in chat that are not written to the decision registry do not exist.
- After 2 failed attempts at the same approach: STOP. Root-cause analyse. Propose a different approach. Do not retry.
- Ignore IDE-opened file context (messages like "The user opened the file X in the IDE") unless the file is explicitly referenced in the message.
- Use TodoWrite to track session tasks. Create the task list immediately after defining the session outcome in `/thread`. Update status in real time. At `/close`, the task list is the source of truth for what was attempted.

<CustomDivider />

## Quick commands

These are inline. No skill files. Just do what it says.

| Command | What Claude does |
|---|---|
| `/status` | Output: thread purpose (1-2 sentences), outcome, tasks (done/doing/pending), last action, next step. Then stop. |
| `/stop` | Immediately stop current approach. Acknowledge the mistake in one sentence. Propose a different approach. |
| `/verify` | Run the smoke test or render check on the last file edited. Report pass/fail. Nothing else. |
| `/wip` | Append current progress to `workspace/thread-outputs/sessions/session-log.txt`. No ceremony. |
| `/fix [description]` | Reproduce the bug first. Show the error. Then propose one fix. Do not implement until approved. |
| `/remind` | Re-read `.claude/CLAUDE.md` right now. Re-read the thread outcome. State your role, the rules you're following, and what you're working on. Then propose the next action with reasoning. |
| `/log` | Append a timestamped entry to `workspace/thread-outputs/sessions/session-log.txt` with: thread name, what just shipped, files changed. One entry, no ceremony. Then continue working. |
| `/flag [thread] [message]` | Append a flag to `workspace/thread-outputs/sessions/flags.jsonl` for another thread to pick up. One JSON line. Then continue working. |
| `/server` | Check health: `node server-lifecycle.js health`. If down, scoped restart: `node server-lifecycle.js restart v2/TAB` (e.g. `restart v2/home`). Read log on failure: `tail -50 /tmp/mint-dev-test-*.log`. Full path: `operations/scripts/dispatch/governance/server-lifecycle.js`. |

**If the user says a message was lost/eaten:** Immediately read the last 5 entries from `workspace/thread-outputs/sessions/message-backup.jsonl` and present them. Don't ask questions — just show the content.

<CustomDivider />

## Domain terms

| Use                         | Never                                      |
| --------------------------- | ------------------------------------------ |
| LPT                         | "tokens", "crypto"                         |
| orchestrator                | "miner", "node" generically                |
| gateway                     | "API gateway"                              |
| active set                  | "top orchestrators"                        |
| reward cut / fee cut        | "commission"                               |
| probabilistic micropayments | "payments" generically                     |
| on-chain / off-chain        | payment MODE — never workload type         |
| dual                        | WORKLOAD config — not a payment type       |
| pool worker                 | Must be defined at first use on every page |

<CustomDivider />

## Voice and review standards

UK English (-ise, -our, -re). No em dashes. No questions in headings. Lead with fact, end with fact.

**Full standards:** `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` and `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/content-pass.md`

<CustomDivider />

## Skills (`ai-tools/ai-skills/`)

Run `/skills` for the full catalogue with descriptions and status.

| Category | Skills | Invocation |
|----------|--------|------------|
| **Core workflow** | thread, pm, research, design, build, iterate, dispatch, agent-brief, diagnose, close | `/name` (registered) |
| **Content pipeline** | content-pipeline-tab-map, content-pipeline-pass-a, content-pipeline-pass-b, docs-review-packet-generation, docs-review-fix-execution | Read `ai-tools/ai-skills/{name}/SKILL.md` |
| **Audit** | docs-quality-and-freshness-audit, docs-coverage-and-route-integrity-audit, script-footprint-and-usage-audit, rubric-static-review, repo-audit-orchestrator, cleanup-quarantine-manager | Read `ai-tools/ai-skills/{name}/SKILL.md` |
| **Governance** | component-layout-governance, style-and-language-homogenizer-en-gb, generated-mdx-banners-governance, skill-docs, cross-agent-packager | Read `ai-tools/ai-skills/{name}/SKILL.md` |
| **Authoring** | page-authoring, docs-copy, product-thinking | Read `ai-tools/ai-skills/{name}/SKILL.md` |

**The lifecycle:** `/thread` defines the session then maps to: `/research` → audit (`/dispatch`) → `/design` → `/build` → test → `/iterate` → test → verify → document → cleanup → `/close`. See `/thread` Step 1b for full phase table with gates and skill mapping. Not every session uses all phases — declare which apply.

**Agent spawns:** Use `/agent-brief` for every agent. No ad-hoc prompts.

**File outputs:** Write to `workspace/thread-outputs/{skill}/{topic}-{type}.md`. Never dump files in repo root.

<CustomDivider />

## VS Code Claude Code Extension Issues

**DO NOT rediscover these.** Read the canonical diagnostic first.

- **Canonical diagnostic:** `workspace/plan/active/FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md`
- **Fix scripts:** `workspace/plan/active/FUCK_CLAUDE/scripts/`
- **Full repair:** `./workspace/plan/active/FUCK_CLAUDE/scripts/full-repair.sh` (close VS Code first)
- **12 confirmed root causes** including bulk timestamp resets, 64KB buffer truncation, state.cache wipe on crash
- **Patches die on extension update** — re-run `patch-extension.sh` after any Claude Code update
- **Automated backup:** install `com.alison.claude-backup.plist` to launchd for 30-minute snapshots
- **17 related GitHub issues** filed, zero engagement from Anthropic in 6+ months

If the sidebar is broken: run `full-repair.sh --dry-run` first, then without `--dry-run` if the report looks right.

<CustomDivider />

## Key files

| File | What |
| --- | --- |
| `workspace/plan/active/_Project-Management_/project-state.md` | Current agent state — read every session |
| `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` | Locked structural decisions |
| `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md` | Per-tab gate status |
| `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md` | Items blocking phases |
| `workspace/plan/active/CONTENT-WRITING/plan-canonical.md` | Full execution plan, phases, dependency graph |
| `docs-guide/standards/voice-and-copy.mdx` | Voice and copy standards (UK English, banned words, per-audience rules) |
| `docs-guide/docs-library/index.mdx` | Docs library: pipeline diagrams, script inventories, gap analysis |
| `workspace/reports/governance/gap-report.mdx` | Governance gap report (17 original, 11 resolved, 6 remaining) |
| `docs.json` | Mintlify navigation and routing config |
| `docs-guide/policies/governance-index.mdx` | Canonical governance index — all governed surfaces, what to read before writing |
| `docs-guide/frameworks/` | Published governance frameworks (13 files) — promoted from workspace/plan/ |
| `docs-guide/standards/` | Published standards (voice, authoring, naming, frontmatter) |
| `docs-guide/decisions/registry.md` | Unified decision registry — cross-references all 7+ decision logs |
| `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` | Canonical Mintlify and repo best-practices reference |
| `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json` | Generated governance map — run `generate-governance-map.js --write` |
| `.claude/references/` | Exemplary work to emulate — read before designing, writing, or building |

<CustomDivider />

## Session end — mandatory before closing

1. Write session summary to `workspace/thread-outputs/sessions/session-log.txt` (outcome, what was done, what's next)
2. Update `workspace/plan/active/_Project-Management_/project-state.md` if work stream status changed
3. A gate never moves to Done without evidence
4. A decision never moves to resolved without being written to the decision registry
