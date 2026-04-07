# CLAUDE.md — Livepeer Docs v2

> Read `AGENTS.md` first for repo-wide rules. This file is the operational spec for every Claude session.

---

## 1. Project Context

| What | Detail |
|---|---|
| **Repo** | Livepeer documentation v2 — Mintlify-based docs site |
| **Current work** | Content pipeline for orchestrators tab (pilot), then gateways |
| **Branch** | `docs-v2-dev` |
| **Port** | Do NOT use port 3000 for Mintlify — choose a non-3000 port |

### Repo layers

| Layer | Path | What it contains |
|---|---|---|
| Live docs | `v2/` | Published MDX pages |
| Workspace | `v2/[tab]/_workspace/` | Per-tab canonical files, research, plans |
| Pipeline | `workspace/plan/active/CONTENT-WRITING/` | Frameworks, prompts, context packs |
| Pipeline execution | `workspace/plan/active/CONTENTI-PIPLEINE/` | Phase outputs for orchestrators |
| Project management | `workspace/plan/active/_Project-Management_/` | Rules, state, plans |
| Orchestrator spec | `workspace/plan/active/ORCHS/` | Core needs, critical analysis |
| Tools | `tools/`, `ai-tools/` | Scripts, skills, config |
| Guide | `docs-guide/` | Frameworks, policies, components |

---

## 2. Session Process

Every session follows this sequence. No exceptions.

### 2.1 ORIENT (first 60 seconds)
- Read user's first message
- Check IDE open file
- Read this file + AGENTS.md + memory files
- **Output one sentence**: "You want [X]. I'll [Y]."

### 2.2 SCOPE (before any work)
State and confirm:
- What's in scope this session
- What done looks like — concrete deliverable
- What you can decide vs what needs approval
- Where output goes — exact file paths

### 2.3 PLAN (30 seconds max)
- 3-5 bullet steps
- Which are agent-delegated vs main thread
- What the user will see and when
- **No plan files. No plan mode. State it and start.**

### 2.4 EXECUTE
- Spawn ALL agents in a single batch
- Main thread stays responsive to user at all times
- Every agent instruction includes: exact file path, verification step, output format
- Never do research or writing in the main thread

### 2.5 VERIFY (after every agent completes)
- Check file exists on disk (`ls -la`)
- Check line count changed (`wc -l`)
- If failed: re-run immediately with explicit write + verify instruction
- **Report**: "[filename] done — [line count]" — one line, nothing more

### 2.6 DELIVER
- "All files written. [list with line counts]"
- State what to look at first
- Propose next step — not a question, a proposal

### 2.7 ERROR RECOVERY
- Agent didn't write → re-run immediately
- Wrong file → fix, don't explain
- User says stop → stop instantly. No follow-up.
- User says it's wrong → re-read conversation, figure it out. Don't ask.
- Lost context → re-read first message + last 5 messages

### 2.8 SESSION END
- Write status file to workspace: what's done, incomplete, decisions made, next steps
- Never write to memory unless user explicitly asks

---

## 3. Co-Creation Rules

Source: `workspace/plan/active/_Project-Management_/ai-rules-guides.md`

1. **This is co-creation, not mindlessness.** Always suggest and recommend what you think is true — don't ask stupid questions or apply learned helplessness.

2. **Repeat understanding before executing.** For batch or hard-to-reverse operations, dry-run first.

3. **Describing the next task is NOT approval to execute it.** State what comes next and wait. "Go" / "ok" / "proceed" is approval. Silence or a question is NOT.

4. **On each step completion**, provide:
   - Notes on completion
   - Flags / recommendations found
   - Plan status update
   - Next task & blockers

5. **Read before working.** Before any step, read every document it depends on — design-canonical, decision log, locked framework files. Never work from memory.

6. **Before running any phase prompt**: read `pack-guide.md` for that phase first. Pre-flight steps are not optional.

7. **Document decisions.** After every task, write decisions/corrections/scope changes to the decision log. Chat-only decisions do not exist.

8. **Findings before fixes.** Gather all findings first → structured report → approval on scope → execute. Never fix as you find.

9. **Verify preconditions.** If a step depends on something being true, verify it first. Don't execute on false premises.

---

## 4. Behaviour Rules

Source: Session learnings 2026-03-23.

### Speed
- **5-second response window MAX.** Every delay breaks focus.
- Respond first, then act. No tool lookups before responding.

### Delegation
- **Never do work in the main thread.** Spawn agents for all research and writing.
- Spawn ALL agents in a single batch — not sequentially.
- Agents write directly to files. Main thread coordinates and verifies.

### Listening
- **When told to stop — STOP.** No follow-up, no questions, no tool calls.
- **Never ask "what do you want to do"** — re-read what they already said.
- **Never make the user repeat themselves.** Go find what they said.
- **Track the IDE open file** — that's what they're asking about.
- When something is wrong, don't argue — fix or acknowledge.

### Output
- **Present ANSWERS not questions.** Propose decisions for approval.
- No apologies — fixes only.
- Report agent results in one line.
- Don't summarise what agents found — they wrote it to the file.
- Write files where asked, not to memory.

### Focus
- User's focus is sacred. Every interruption compounds.
- No unnecessary messages.
- If 30 minutes pass with no usable file written, something is wrong.
- "Minimal supervision" = AI proposes, human approves. Not the reverse.

---

## 5. Content Pipeline — Orchestrators Tab

Source: `workspace/plan/active/CONTENTI-PIPLEINE/00-TRACKER.md`

### Phase status

| # | Phase | Status | Output |
|---|---|---|---|
| 1 | IA verified | DONE | 01-ia-verification.md |
| 1b | Persona check | DONE | 01b-persona-check.md |
| 2 | Content scan | DONE | 02-content-scan.md |
| 2.5 | Research pack | DONE | 02.5-research-pack.md |
| 3 | Tab map | DONE | 03-tab-map.md |
| 3.5 | Terminology lock | DONE | 03.5-terminology-lock.md |
| 4 | Content audit | DONE | 04-content-audit.md |
| 4.5 | Reconsolidation | DONE | 04.5-reconsolidation.md |
| 6 | Content writing | DONE | content/S01-S12.mdx |
| 7 | Veracity pass | **PENDING** | — |

### Dependencies

```
IA verified → Persona check → IA locked
  → Research pack + Content scan [PARALLEL]
    → Tab map + Terminology lock [PARALLEL]
      → Content audit → Reconsolidation → Content writing → Veracity pass
```

### Blocking items
- Veracity pass not yet run across 12 content pages
- LIP-92 verify flag (blocking)
- Fee cut direction convention needs SME verification

---

## 6. Orchestrator Work Spec

Source: `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md`

### Core need

> Help a GPU operator go from "I have hardware" to "I am earning" — with zero ambiguity at every step.

Every page must move the reader one step closer to earning, configuring, diagnosing, or deciding. If a paragraph doesn't advance that, it is dead weight.

### Arriving question

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

### Primary persona

**Independent GPU operator choosing a path** — Volume 3, Depth 3, Impact 3, Consensus 4/4.

### Voice register

| Dimension | Rule |
|---|---|
| Tone | Practical, numbers-driven, hardware-specific |
| Lead with | Earnings, performance, operational outcomes |
| Vocabulary | Hardware terms freely: VRAM, CPU cores, NVLink, bandwidth |
| Quantify | Always: "8 GB VRAM minimum", "0.05 ETH for gas" |
| Language | UK English throughout |

### Banned

| Type | Examples |
|---|---|
| Words | effectively, essentially, basically, meaningful, significant, various, several, obviously, clearly |
| Phrases | "This section covers", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on", "can generate / may produce" |
| Constructions | `not [X]` → state positive; `if [condition]` → resolve it; `can/may [verb]` → assert directly |
| Orchestrator-specific | "Your orchestrator will automatically…", "Easy to set up", "simply", "just", "thriving ecosystem" |

### Page structure

| Element | Rule |
|---|---|
| H1 | In frontmatter only, never in body |
| H2 | Major sections |
| H3 | Subsections |
| H4+ | Rare — avoid depth > 3 |
| Paragraph | One job. Lead = fact. End = fact/number/next step. Never a hedge. |
| Opening | Value before mechanism. Fact before caveat. Benefit before description. |

---

## 7. Key File Paths

### Canonical (read these first)

| File | What |
|---|---|
| `workspace/plan/active/ORCHS/01-CORE-NEEDS-AND-STANDARDS.md` | Work spec — core need, personas, voice, components |
| `workspace/plan/active/CONTENTI-PIPLEINE/00-TRACKER.md` | Pipeline status — what's done, what's next |
| `workspace/plan/active/_Project-Management_/ai-rules-guides.md` | Co-creation rules |
| `workspace/plan/active/CONTENT-WRITING/design-canonical.mdx` | 6-system architecture |
| `workspace/plan/active/CONTENT-WRITING/framework-index-canonical.md` | Locked enums index |

### Orchestrator workspace

| File | What |
|---|---|
| `v2/orchestrators/_workspace/canonical/Frameworks.mdx` | All taxonomy/voice/content/design frameworks |
| `v2/orchestrators/_workspace/canonical/review/DRAFT-ANSWERS.md` | 47 proposed IA decisions |
| `v2/orchestrators/_workspace/canonical/review/SESSION-REVIEW.md` | Session status and learnings |
| `v2/orchestrators/_workspace/canonical/review/01-07*.md` | Review files with research |

### Frameworks

| File | What |
|---|---|
| `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md` | 15 purpose values |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/industry.md` | Industry + niche tokens |
| `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md` | Veracity standards |
| `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | Voice per audience |
| `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md` | Naming rubric |

### Prompts (per phase)

| Phase | Path |
|---|---|
| 1 Audience design | `CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/` |
| 2 Structure audit | `CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/` |
| 3 Content pass | `CONTENT-WRITING/Prompts/Prompts-By-Phase/3-content-pass/` |
| 4 Layout pass | `CONTENT-WRITING/Prompts/Prompts-By-Phase/4-layout-pass/` |
| 7 Veracity pass | `CONTENT-WRITING/Prompts/Prompts-By-Phase/7-veracity-pass/` |

---

## 8. What NOT to Do

1. **Don't do work in the main thread** — delegate to agents
2. **Don't ask questions you can answer** — re-read the conversation
3. **Don't make the user repeat themselves** — go find what they said
4. **Don't spawn agents one at a time** — batch them
5. **Don't report failures and wait** — fix them immediately
6. **Don't write to memory** — write to workspace files
7. **Don't apologise** — fix the problem
8. **Don't explain what went wrong** — do the right thing
9. **Don't use plan mode** — it blocks agent writes
10. **Don't respond with "understood"** — respond with action
11. **Don't treat "stop" as "stop and ask what's next"** — just stop
12. **Don't present questions for the human to answer** — present answers for the human to approve
13. **Don't ignore the IDE open file** — that's what the user is looking at
14. **Don't leave empty files** — verify every write
15. **Don't work from memory** — read the source documents every time
16. **Don't auto-proceed** — state next step and wait for approval
