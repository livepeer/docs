# CLAUDE.md — Livepeer Docs v2

> This is the project coordinator. Every Claude Code session reads this first. No prior context needed.

---

Always keep these best practices in mind https://code.claude.com/docs/en/best-practices

**This file is long for a CLAUDE.md.** The project complexity justifies it, but if Claude starts ignoring rules or asking questions answered here, the file is too noisy. Prune ruthlessly. Every line must earn its place.

## Project identity

Alison Haire (Wonderland). Documentation lead. Decision authority. Not a babysitter.

**Repo:** `livepeer/docs` . Branch: `docs-v2` . Platform: Mintlify (MDX)
**Working branch:** `docs-v2-dev`

**The finish line:** Every page across all 5 tabs passes the content-pass reviewer. Unverifiable numbers replaced with live links. No TODO flags in decision-critical positions. No undefined jargon. `veracityStatus` set in frontmatter with source citations. Every page traces back to a sub-question of its tab's canonical arriving question and fits its position in the tab map.

---

## What Alison approves vs what runs automatically

| Alison approves                                   | Claude does without asking                           |
| ------------------------------------------------- | ---------------------------------------------------- |
| Gate opening (IA, terminology, content pass)      | Reading files to answer a question                   |
| Any decision in blocking-items.md                 | Session log entry at session end                     |
| Any batch operation before it runs                | Presenting gap reports and findings                  |
| Spawning agents (Rule 2.4 — no exceptions)        | Updating completion reports after approved work      |
| Merging any page into the live tab                | Running `operations/tests/run-all.js`                |
| Content-pass mode selection (WRITE/REWRITE/AUDIT) | Flagging out-of-scope content with correct tab owner |

---

## Co-creation rules

- This is co-creation. Recommend and suggest. Do not ask questions you can answer yourself.
- Repeat scope back before executing. Dry-run batch or hard-to-reverse changes first.
- **Describing the next task is not approval.** State what comes next. Wait. "Go" / "ok" / "proceed" = approval. Silence = not approval.
- After every completed step: completion notes . flags . plan status . next task + blockers.
- Never work from memory. If a document is referenced, read it.
- Findings before fixes. Gather all findings, present structured report, get approval, then execute.
- Decisions made in chat that are not written to the decision registry do not exist.

---

## Session start — before anything else

1. Read `workspace/plan/active/_Project-Management_/project-state.md`
2. Read `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`
3. Read `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`
4. For content-writing pipeline sessions, also read: `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/PROJECT-MANAGEMENT-CANONICAL.md`
5. State in one sentence: what the task is, which gates are open, and what done looks like.

---

## Current project state

> **Active priority:** Orchestrators veracity pass on S01–S12. Phases 1–6 complete (12 MDX section pages written). Phase 7 is the current work. This runs independently of the main pipeline gate sequence below.

**Gate source of truth:** `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`

| Tab           | Path                | IA Approved | Terminology | Content Scan | Content Pass Open | Priority |
| ------------- | ------------------- | ----------- | ----------- | ------------ | ----------------- | -------- |
| Orchestrators | `v2/orchestrators/` | Draft only  | No          | In progress  | No                | 1        |
| Gateways      | `v2/gateways/`      | Draft only  | No          | Done         | No                | 2        |
| Developers    | `v2/developers/`    | Draft only  | No          | In progress  | No                | 3        |
| About         | `v2/about/`         | Draft only  | No          | Done         | No                | 4        |
| Delegators    | `v2/lpt/`           | Draft only  | No          | Done         | No                | 5        |

No tab has reached IA approval. All tabs are blocked on human IA review + lock before downstream phases run.

**Blocked decisions — human only:**

| Decision                                                | Tab           | Blocks                | Owner  |
| ------------------------------------------------------- | ------------- | --------------------- | ------ |
| IA review + lock                                        | Orchestrators | All downstream phases | Alison |
| IA review + lock                                        | Gateways      | All downstream phases | Alison |
| S6 split: real-time/custom compute                      | Developers    | Phase 3               | Alison |
| Rewards placement (before or after operator selection?) | Delegators    | Phase 3               | Alison |
| About multi-audience token                              | About         | Phase 6+              | Alison |
| NaaP terminology lock                                   | Gateways      | Phase 3.5             | Alison |

---

## Tab scope — what each tab owns

| Tab           | Owns                                                                                    | Does NOT own                                            |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Orchestrators | GPU node setup, activation, earning, pricing, AI pipelines, monitoring, troubleshooting | Gateway setup, delegation mechanics, SDK usage          |
| Gateways      | Gateway infrastructure, routing, configuration, orchestrator selection, payments        | Orchestrator node setup, app development, delegation    |
| Developers    | APIs, SDKs, BYOC, building apps on Livepeer, contributor guides                         | Running infrastructure, delegation, protocol governance |
| About         | Protocol mechanics, network architecture, actors, economics, governance model           | Setup procedures, operational guides, API references    |
| Delegators    | LPT, staking, delegation, governance participation, treasury                            | Running nodes, building apps, gateway operation         |

Out-of-scope content found during a session: log it with the correct tab owner. Do not absorb it into current work.

---

## Content pipeline — the actual workflow

Each gate requires a specific artefact AND explicit human sign-off. Artefact existence alone does not open a gate.

### Phases

| #   | Phase                     | What it does                                              |
| --- | ------------------------- | --------------------------------------------------------- |
| 1   | Audience design           | Define personas, JTBDs, arriving questions per tab        |
| 1b  | Persona iteration check   | Verify no new personas needed                             |
| 2   | Content scan              | Read-only inventory of all existing pages per tab         |
| 2.5 | IA-mapped research pack   | Map research to approved IA structure                     |
| 3   | Structure audit / tab map | Categorise pages (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP)     |
| 3.5 | Terminology lock          | Lock all domain terms for the tab                         |
| 4   | Content audit             | Per-page disposition decisions                            |
| 4.5 | Reconsolidation plan      | File-level merge/drop/move plan                           |
| 6   | Content writing           | Write/rewrite pages using content-pass prompt             |
| 7   | Veracity pass             | Resolve all factual claims against source library         |
| 10+ | Layout pass               | MDX components, frontmatter completion, render validation |

### Prompts

All in `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/`:

**Before running any prompt: read its `pack-guide.md` first.** The pack-guide defines pre-flight steps, running order, failure modes, and what good output looks like. Skipping it produces output that looks correct but is built on bad foundations.

### Content-pass modes

| Mode    | Use                                                            |
| ------- | -------------------------------------------------------------- |
| REVIEW  | Existing page — outputs fixed MDX, not a to-do list            |
| WRITE   | Blank page — requires completed page brief first               |
| REWRITE | Full rewrite from scratch                                      |
| AUDIT   | Phase 4 — produces KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP per page |

### Definition of done — a finished page

- Passes content-pass.md REVIEW with no flags
- All `REVIEW:` markers resolved
- `veracityStatus` set in frontmatter with source citations
- No TODO/TBD flags in decision-critical positions
- Unverifiable numbers replaced with live links (Explorer, Arbiscan)
- No undefined jargon — every domain term defined at first use
- Traces back to a sub-question of the tab's canonical arriving question
- Fits its position in the tab map (correct handoff from previous page, sets up next)

---

## AI tools ecosystem

### Skills (`ai-tools/ai-skills/`)

**Skills exist. That does not mean they are good.** Every skill must be manually verified against a known-good page before use in production. Run it, check the output against review standards, confirm it produces the right result. Do not use at scale before validating.

Key skills to verify before use:

- `page-authoring` — writing v2 docs pages
- `docs-copy` — prose quality
- `style-and-language-homogenizer-en-gb` — UK English enforcement
- `rubric-static-review` — rubric-based scoring
- `docs-quality-and-freshness-audit` — TODO/TBD markers, thin content
- `product-thinking` — strategy and prioritisation

### Audit pipeline

6-step static-first pipeline defined in `ai-tools/agent-packs/claude/CLAUDE.md`. Run steps in order. Do not skip.

**Note:** `ai-tools/agent-packs/claude/CLAUDE.md` is auto-generated by `cross-agent-packager.js`. It is a different file from this one (`.claude/CLAUDE.md`). Do not conflate them. Do not edit the generated file manually.

### Operations scripts (`operations/scripts/`)

98 scripts across: audits . validators . generators . remediators . automations . dispatch. Check `operations/scripts/` before writing a new script — it probably already exists.

### Running tests

```bash
node operations/tests/run-all.js
npx mintlify dev
```

Do NOT use `lpd` — deprecated.

---

## Review standards

### Headings

- Name the thing. No questions. 3-6 words (8 max).
- BAD: "Three Viability Questions" -> GOOD: "Viability Check"
- BAD: "Is reward calling profitable?" -> GOOD: "Reward Call Threshold"
- BAD: "What Orchestrators Earn" -> GOOD: "Revenue Streams"
- BAD: "Video vs AI: Starting Workload" -> GOOD: "Video vs AI"

### Delete these sentences

- Opens with "This page", "Use this page", "This section"
- Describes what the following content does
- Restates the table or diagram above it
- Bridges sections with commentary
- Announces a concept instead of stating it

### Banned words

`effectively, essentially, basically, meaningful, significant, real` (intensifier), `various, several, simply, obviously, clearly, just` (minimiser)

### Banned constructions

| Construction                     | Fix                             |
| -------------------------------- | ------------------------------- |
| `not [X]` as primary statement   | State positively                |
| `rather than`                    | Delete contrast, state positive |
| `if [condition]` in body prose   | State threshold directly        |
| `can/may [verb]` in value claims | Assert directly                 |
| `depends on` without ranked list | Add weighting and thresholds    |
| `That means` / `This shows`      | Delete — trust the reader       |
| `This page [verb]`               | Delete — open with content      |

### Prose restating a table — delete it.

### Undefined jargon — define at first use on every page

`pool worker` . `active set` . `probabilistic micropayment tickets` . `reward cut / fee cut` . `NVENC/NVDEC` . `Cascade` . `BYOC` . `Arbitrum One`

---

## Voice

Peer-technical. Experienced operator to capable peer new to this system.

- UK English: -ise, -our, -re endings
- No em dashes — rewrite or use hyphens
- No questions in headings or body
- No conditional gatekeeping
- No hand-holding connectors
- No meta-document description
- Lead with the fact. End with fact, number, or next step. Never a hedge.

Full per-audience voice rules: `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`

---

## Canonical taxonomy (locked)

**Source:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`

**pageTypes (7):** `navigation` . `concept` . `tutorial` . `guide` . `instruction` . `reference` . `resource`

**pagePurposes (15):** `orient` . `explain` . `learn` . `choose` . `evaluate` . `start` . `build` . `configure` . `operate` . `troubleshoot` . `verify` . `integrate` . `optimise` . `reference` . `update`

**Audience tokens (7):** `founder` . `builder` . `developer` . `gateway` . `orchestrator` . `delegator` . `community`

---

## Locked decisions — cannot be re-opened

**Full registry:** `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`

| ID       | Decision                                                                                                                      | Date       |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| D-NAV-01 | `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths | 2026-03-23 |

Do not re-decide anything in this table. If a locked decision looks wrong, flag it — do not override it.

---

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

---

## Session end — mandatory before closing

1. Append entry to session log below
2. Update tab status board if any gate changed
3. A gate never moves to Done without evidence
4. A decision never moves to resolved without being written to the decision registry

---

## Session log

<!-- Append-only. Most recent at top. -->

---

### [YYYY-MM-DD] — [one-line description]

**Done:**
**Decisions made:** (also write to decision-registry.md)
**Blocked on:**
**Next session picks up:** [exact file + exact task — specific enough to start without asking]

---

### 2026-03-24 — CLAUDE.md rewrite from repo audit

**Done:** Full repo audit, gap analysis across 3 input versions, merged draft reviewed, applied to `.claude/CLAUDE.md`
**Decisions made:** None
**Blocked on:** Nothing — file is live
**Next session picks up:** Begin Phase 7 veracity pass on Orchestrators S01-S12 in `workspace/plan/active/CONTENTI-PIPLEINE/content/`

---

## Never do these

- Ask questions answerable by reading the files
- Make Alison repeat herself — go find what she said
- Report a failure and wait — fix it
- Apologise — fix the problem
- Output a to-do list when asked for a fixed page — output the fixed page
- Propose next step without waiting for "go"
- Spawn agents without explicit approval
- Write to Notion unless explicitly asked
- Commit, push, or modify the repo directly
- Fix as you find — findings before fixes, always
- Use a skill at scale without validating it on a known-good page first

---

## Key files

| File                                                                                              | What                                                      |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `workspace/plan/active/_Project-Management_/project-state.md`                                     | Current agent state — read every session                  |
| `workspace/plan/active/_Project-Management_/ai-rules-guides.md`                                   | Full operational rules                                    |
| `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/PROJECT-MANAGEMENT-CANONICAL.md`           | Session protocol, agent rules, gate definitions           |
| `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`                            | Locked structural decisions                               |
| `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`                                   | Per-tab gate status                                       |
| `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md`                               | Items blocking phases                                     |
| `workspace/plan/active/CONTENT-WRITING/plan-canonical.md`                                         | Full execution plan, phase definitions, dependency graph  |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/content-pass.md`   | Content pass prompt                                       |
| `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` | Veracity pass prompt (DRAFT — validate before use)        |
| `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`                                    | Voice rules for all 7 audiences                           |
| `workspace/plan/active/CONTENTI-PIPLEINE/00-TRACKER.md`                                           | Orchestrators pipeline tracker                            |
| `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md`                                      | Orchestrators copywriting standards                       |
| `v2/orchestrators/_workspace/canonical/Frameworks.mdx`                                            | Full taxonomy/voice/content frameworks                    |
| `ai-tools/agent-packs/claude/CLAUDE.md`                                                           | Claude Code audit pipeline (auto-generated — do not edit) |
| `docs.json`                                                                                       | Mintlify navigation and routing config                    |
| `operations/tests/run-all.js`                                                                     | Test runner                                               |

---

_Owner: Alison Haire (Wonderland) . Updated: 2026-03-24_
