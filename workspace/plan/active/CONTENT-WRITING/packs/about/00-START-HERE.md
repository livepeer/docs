# 00 — START HERE

Driver file. Read first. No exceptions.

---

## Read order

1. `00-START-HERE.md` (this file)
2. `01-tab-brief.md` — tab purpose, audience model, page list, scope
3. `02-page-briefs.md` — page-by-page contracts (purpose, type, outcome, word budget)
4. `03-voice-and-anti-lazy.md` — voice, banned words, anti-lazy patterns
5. `05-source-of-truth.md` — verified facts; the only place facts come from without flagging
6. `06-output-contract.md` — output shape per mode (REVIEW / WRITE / REWRITE)
7. `07-self-check.md` — pre-output checklist
8. Then: do the work

`04-exemplars.md` is reference. Read when uncertain about register or opening.
`attachments/` holds raw context. Open only when a brief points there.

---

## Mode selection

The user names the mode in the request. If the mode is not named, stop and ask.

| Mode | When | Output shape |
|---|---|---|
| **WRITE** | New page or full rewrite of a stub | Full page body, no preamble, REVIEW flags inline for unverified claims |
| **REWRITE** | Existing page failing voice or veracity bar; restructure required | Full replacement body matching the page brief in `02-page-briefs.md` |
| **REVIEW** | Existing page that mostly works; assess and recommend | Verdict + assessed frontmatter + prioritised issues + veracity flags + sections marked PASS or FIX (per `06-output-contract.md`) |

Default to REVIEW if unsure. Never WRITE when REVIEW was asked for.

---

## STOP triggers

Halt and surface the gap. Do not proceed.

- **Incomplete brief.** The page in question has no entry in `02-page-briefs.md`, or its block is missing PURPOSE / PAGE_TYPE / OUTCOME / WORD_BUDGET.
- **Primary sources unnamed.** A factual claim is needed and `05-source-of-truth.md` does not cover it. Flag with `{/* REVIEW: [claim] — source needed */}` and continue, or surface the gap if the page cannot proceed without it.
- **Persona mismatch.** The page brief names an audience the reader register cannot serve (e.g. brief says `developer` but content scope is delegator economics). Flag, do not blend two registers.
- **Factual claim without source.** Numbers, contract addresses, percentages, dates — every one traces to `05-source-of-truth.md` or carries a REVIEW flag. No exceptions.
- **Out-of-scope drift.** The work needed exceeds the page's word budget by more than 10%, or covers material owned by another page in `02-page-briefs.md`. Flag with the suggested split or relocation.

---

## Hard rules (non-negotiable)

- UK English. `-ise`, `-our`, `-re`. No US spellings.
- No em dashes. Use comma, semicolon, colon, or rewrite.
- No questions in headings. Make them declarative.
- Second person for instructions. Third person for system descriptions. No first person plural — About is not the Community tab.
- No MDX, no frontmatter, no `import` statements. Plain markdown only.
- No preamble. No "Here is the rewrite." No closing summary. The output is the page.
- Domain terms are locked. Use **LPT** not "tokens"; **orchestrator** not "miner" or "node"; **gateway** not "API gateway"; **active set** not "top orchestrators"; **reward cut / fee cut** not "commission"; **probabilistic micropayments** for the payment mechanism; **on-chain / off-chain** is a payment mode, never a workload type; **dual** is a workload config, not a payment type.

---

## Pending integration

`v2/about/_workspace/canonical/checks.mdx` is being produced by a separate agent. Once available, it will be copied to `attachments/checks.mdx` and feed Pass B taxonomy assignment.

For now, `07-self-check.md` previews the 13 frontmatter checks (1.1–1.13) extracted from `v2/orchestrators/_workspace/canonical/checks.mdx`. Use those for any taxonomy work in this pass.

---

## Failure protocol

If a brief is missing, contradictory, or impossible to deliver inside the word budget: write the page as far as possible, append `## OPEN QUESTIONS` at the bottom, list the gaps. Never invent. Never pad.
