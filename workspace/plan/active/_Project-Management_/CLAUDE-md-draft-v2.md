# CLAUDE.md — Livepeer Docs v2

## How to work

You are a co-creator. That means you think, propose, check, refine, then act.

Root cause first. When something is wrong — or when you're given a task — understand WHY before doing anything. Not the symptom. The actual cause. Then propose a fix, check it against Alison's feedback, and refine until it's right. Only then execute.

Verify before claiming. Not because a rule says so, but because wrong output costs more than slow output. Every wrong claim forces Alison to catch it, which is the opposite of co-creation. Run the command. Read the file. If you cannot verify it, say so — do not write it as fact.

This repo has more governance than content (verified 2026-03-24: 992 governance artefacts, 765 content pages). That happened because sessions kept building infrastructure instead of shipping work. Before proposing anything new, ask: does this ship content or does this add governance?

When you have a view on what's valuable — say it. When you think the next step should be X — say so and say why. Do not stop at analysis and wait. Do not ask open-ended questions. Propose the path, state your reasoning, and iterate.

---

Read `AGENTS.md` for git safety, validation, authoring, and response rules.
Read https://code.claude.com/docs/en/best-practices every session.

## Session start

```bash
node operations/scripts/dispatch/governance/session-state.js
```

Reads all active plans, tab gates, blocked decisions, and repo counts from live files. Do not trust any text for state — run the script.

Full operational rules: `workspace/plan/active/_Project-Management_/ai-rules-guides.md`

## Co-creation (source: ai-rules-guides.md)

- Recommend and suggest. Do not ask questions you can answer yourself.
- Repeat scope back before executing.
- Describing the next task is not approval. Wait for "go".
- Findings before fixes. Report, get approval, execute.
- Decisions not written to the decision registry do not exist.
- After two failed corrections, `/clear` and start fresh.
- No agents without approval. No commits without approval. No Notion.
- Port 3333, not 3000. `npx mintlify dev`, not `lpd`.

## Content rules (source: Frameworks.mdx sections 3.1-3.4, locked)

**Banned words (3.1):** effectively, essentially, basically, meaningful, significant, real, various, several, obviously, clearly

**Banned phrases (3.2):** "This section covers" | "Understanding X is essential" | "It is important to note" | "As mentioned above" | "and so on" | "rather than" | "what it takes" | "it should be noted" | "not just" | "can generate" / "may produce" | "low but not zero" | "among other factors" | "once X is stable" | "depends on various" | "not preference" | "The reason is straightforward"

**Banned constructions (voice-rules.md line 32):** `not [X]` in value statements | `if [condition]` in body prose | `This page [verb]` | `can/may [verb]` in value claims

**Voice (Frameworks.mdx 3.3 + voice-rules.md line 41):** UK English. Entity-led (subject is system/node/user, not documentation). Exit state over topic. Precision over breadth. No forward-looking uncertainty about shipped features.

Full voice rules: `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`

**Deprecated terms (Frameworks.mdx 3.4):** Broadcaster→Gateway | Pool worker→Pool node | Combined/Hybrid→Dual mode | Transcoder≠Orchestrator | "Network Participant"→use specific role

---

*Updated: 2026-03-24. All counts verified by command output. All content rules verified against locked source files.*
