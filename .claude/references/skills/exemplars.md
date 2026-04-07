# Exemplary Skills

> Pointer + analysis. Do not copy files — emulate the patterns.
> Skills define HOW Claude works in this repo. Good skills are methodologies with gates, not checklists.

---

### Thread (Gold Standard — Session Management)

**File:** `ai-tools/ai-skills/thread/SKILL.md`

**Why it's good:** The most mature skill in the repo (v1.3). Mode detection (START vs STATUS) as Step 0 — determines behaviour before any work happens. Step 1b maps a 10-phase lifecycle pipeline with skill mappings and gates per phase — every session declares which phases apply, preventing both premature execution and skipped research. The verify phase (phase 8) is a production-readiness gate with universal and context-aware checks. Anti-loop discipline at Step 6: after 2 failed attempts, STOP and root-cause analyse. Test log tracks real usage with honest failure notes.

**Key patterns:**
- YAML frontmatter: name, description, metadata (version, category, status)
- Mode detection as Step 0 — the first thing the skill does is decide HOW to run
- START mode: define outcome → create TodoWrite tasks → register in CLAUDE.md
- STATUS mode: snapshot output → stop. No re-anchoring, no redefining
- **Lifecycle pipeline (Step 1b):** 10 phases: research → audit → design → implement → test → iterate → test → verify → document → cleanup. Each phase has: skill mapping, description, outputs, gate. Sessions declare lifecycle position showing which phases are done/active/pending
- **Verify phase:** Universal checks (pipeline, framework alignment, self-remediation, risk, scalability, hanging threads, data integrity) + context-aware checks that adapt to what was built (MDX, scripts, components, data, actions, governance). Output template includes future recommendations
- **Scope adaptation:** Not every session uses all phases — quick fix skips audit/design, audit-only session stops after findings, data pipeline emphasises verify
- Phase transitions: restate outcome + gate evidence + confirm before proceeding
- Backlog capture: log tangent, acknowledge, continue — don't chase or ignore
- Drift detection: after 3+ actions without outcome reference, check in
- Anti-loop discipline (Step 6): 2 failures → STOP → root-cause → different approach → wait for approval
- Session close template: finalisation report with outcome evaluation (Met / Partially met / Not met)
- Test log and known limitations documented honestly

**Design reference:** `workspace/plan/active/CANONICAL-TRUTH-GUIDES/Workflow-Alignment-Skills/lifecycle-design.md`

---

### Diagnose (Gold Standard — Debugging Methodology)

**File:** `ai-tools/ai-skills/diagnose/SKILL.md`

**Why it's good:** Replaces the single most destructive Claude behaviour — guess-and-retry loops. The 5-step process enforces evidence-based debugging: reproduce → gather facts → hypothesise from evidence → test one fix → verify. The "gather facts" step is specific: read the code, read the error verbatim, check git log, check dependencies, check platform constraints. Step 3 requires each hypothesis to be grounded in a specific fact — no speculation.

**Key patterns:**
- Structured reproduction: Problem / Expected / Actual / Error / Where — verbatim, not paraphrased
- Fact gathering with sources: "1. [fact — with source/evidence]" — every fact must cite where it came from
- Hypotheses ranked by likelihood, each tied to a specific fact
- One fix at a time: test the most likely hypothesis first, verify, then move to the next
- "Do NOT skip to fixing" — explicit gate before any code changes
- Agent delegation for heavy investigation: "delegate to a background agent using /agent-brief"

---

### Close (Gold Standard — Session Completion)

**File:** `ai-tools/ai-skills/close/SKILL.md`

**Why it's good:** Verifies tasks against the REPO, not the conversation. The debris scan is the key innovation: checks for untracked files, unintended modifications, stale worktrees, and empty directories — classifies each as Deliverable / Debris / Side effect. Forces honest outcome evaluation.

**Key patterns:**
- Verification against repo state (git status, git diff), not conversation history
- Debris scan: untracked files, unintended mods, stale worktrees, empty directories
- Classification: Deliverable / Debris / Side effect
- Completion report template with mandatory sections
- Outcome evaluation: Met / Partially met / Not met — with reasons if not met
- Session log update: outcome, what was done, what's next
- Work streams table update in CLAUDE.md

---

### Design (Good — Thinking Methodology)

**File:** `ai-tools/ai-skills/design/SKILL.md`

**Why it's good:** "Design is thinking, not building. No file edits. No code." This constraint prevents the most common design failure — jumping to implementation before the architecture is clear. The principles-before-structure approach forces reasoning: state principles → challenge your own principles → then propose structure.

**Key patterns:**
- No execution constraint: "No file edits. No code. No implementation details."
- Principles before structure: 3-7 principles, each with reasoning and trade-off
- Self-challenge: "The risk with principle N is..." — forces acknowledgement of trade-offs
- Structure as architecture: Components / Relationships / Flow / Boundaries
- Test criteria: "How will we know this design works?" — written before any building

---

### Dispatch (Good — Parallel Work Coordination)

**File:** `ai-tools/ai-skills/dispatch/SKILL.md`

**Why it's good:** Solves agent coordination: batch proposal → approval gate → parallel execution → synthesis. The key rule: all agents in a batch share the same return format. Inconsistent formats make synthesis impossible. Uses /agent-brief for every agent — no ad-hoc prompts.

**Key patterns:**
- Batch proposal format: purpose, total agents, scope per agent, return format
- Approval gate before launch — "Waiting for go"
- Same return format across entire batch — enforced for synthesis
- Agent-brief for every agent — no shortcuts
- Background execution: main thread stays free
- Synthesis step: rollup all agent returns into single structured output

---

### Propagate (Good — Deterministic Automation)

**File:** `ai-tools/ai-skills/propagate/SKILL.md`

**Why it's good:** Solves a specific, high-risk problem: stale path references after file moves. Audits 10 reference surfaces deterministically. Dry-run first, human approval, then apply. The 10-surface audit list is exhaustive: docs.json, MDX links, hrefs.jsx, llms.txt, sitemap-ai.xml, ai-companion-manifest, config patterns, redirects, etc.

**Key patterns:**
- 3 move detection sources in priority order: explicit args → hook temp file → git staging
- 10 reference surfaces audited: docs.json, MDX links, hrefs.jsx, llms.txt, sitemap-ai.xml, etc.
- Dry-run report with change preview — before any edits
- Human approval gate before applying changes
- Deterministic: same input always produces same output
- "If no moves detected, stop" — no guessing

---

### Research (Good — Investigation Methodology)

**File:** `ai-tools/ai-skills/research/SKILL.md`

**Why it's good:** "Research is not listing. It is reading, synthesising, identifying patterns, and recommending an approach." The scope step prevents unbounded exploration: questions to answer, sources to read, agent plan — all proposed before reading anything.

**Key patterns:**
- Scope before reading: questions, sources, agent plan — proposed and approved
- Output is a brief, not a dump: findings → analysis → recommendation
- Agent delegation for parallel reading
- "Waiting for go" before launching agents

---

## What makes a good skill (patterns across all)

1. **YAML frontmatter** — name, description, version, category, status
2. **When to use / When NOT to use** — prevents misapplication
3. **Mode detection** — determine which path before doing anything
4. **Gates between steps** — approval or verification before proceeding
5. **Evidence over assumption** — read the repo, check the facts, cite sources
6. **Structured output formats** — consistent, reviewable, comparable
7. **Anti-loop / circuit breaker** — explicit rule for when to stop retrying
8. **Test log / known limitations** — honest tracking of what works and what doesn't
9. **One clear purpose** — each skill solves one specific problem
10. **Methodology, not checklist** — teaches thinking, not just doing