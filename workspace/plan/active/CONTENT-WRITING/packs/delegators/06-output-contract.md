# 06 — Output contract (WRITE / REWRITE mode)

This is the exact shape of the output you produce when the user's mode is WRITE or REWRITE.

REVIEW mode does not produce content; it produces findings against this contract.

---

## Shape

```
[Title — single line, sentence case where the term allows; no trailing period]

[Description — one or two sentences, ≤160 characters total, outcome-focused, subject-first; no "this page", "this guide", "this section"]

---

[Body in plain markdown]
```

**Rules of the body:**

- Plain markdown only.
- `##` for top-level body sections. `###` for sub-sections. No `#` (the title above is the H1).
- No frontmatter. No imports. No JSX. No MDX components. No `<Frame>`, `<Card>`, `<Note>`, `<Warning>`. Pass B adds those.
- Tables, lists, blockquotes, inline code, fenced code blocks (only for contract addresses or copyable on-chain values on bridging/contract-reference pages) are allowed.
- Inline links use `[label](url)` format. Do not invent URLs — use only those listed in `05-source-of-truth.md` or the page brief.
- Heading text is declarative. No questions in headings.

---

## Hard rules

1. **No preamble.** Do not write "Here's the content for the page" or "I'll walk you through". The output starts with the title.
2. **No recap.** Do not summarise what you did at the end. The output ends with the last useful sentence of the body.
3. **No CLI / shell.** Code blocks for terminal commands are forbidden. Exception: contract addresses and copyable on-chain values on bridging or contract-reference pages.
4. **Define jargon on first use.** Every protocol term (LPT, orchestrator, bonding, reward cut, fee share, active set, round, thawing period, vote detachment, BondingManager) gets one inline definition the first time it appears. Then use the term naked.
5. **Every earnings claim states the dependency.** Same sentence or same paragraph — not on a different page, not in a footnote.
6. **Second person for instructions.** "You bond LPT", "you claim earnings". Third person for system descriptions ("the BondingManager mints new LPT").
7. **No "this page" / "this guide" / "this section".** Open with the subject.
8. **Word budget cut, not summarise.** If you exceed the page brief's word budget, cut the lowest-value sentences. Do not flatten specific claims into vague summaries.
9. **UK English throughout.** No US spellings. No em-dashes.
10. **Banned words and phrases absent.** See `03-voice-and-anti-lazy.md` Sections B and C.

---

## What the output is NOT

- Not a TODO list.
- Not "I'd suggest…" or "Consider writing…".
- Not a wireframe with `[insert content here]`.
- Not the same content as the existing live page if the brief has changed — the brief is the spec.
- Not commentary on what you decided to cut or change. If you cut something, just cut it.

---

## OPEN QUESTIONS section (only when needed)

If the brief asks for a fact that is not in `05-source-of-truth.md` and not flagged as `verify-live`, append at the end of the body:

```
## OPEN QUESTIONS

- [Exact claim or value the page needs] — verify with: [named source].
```

Never invent the value. Never write around it with vague language. Flag it and stop.

---

## Title format

Use the title from `02-page-briefs.md` if present. Otherwise:

- Match the existing live page title where one exists (do not rename without instruction).
- Sentence case for descriptive titles ("Choose an orchestrator").
- Title case for proper nouns and product-style titles ("LP Token Glossary", "Livepeer Governance Overview").
- No trailing punctuation.

---

## Description format

- One or two sentences.
- ≤160 characters including spaces.
- Subject-first. The first noun phrase is the subject of the page.
- No self-reference ("this page", "this guide", "this document").
- No marketing register. No "explore", "discover", "unlock".
- UK English.

Example (good): `LPT inflation, treasury allocation, reward cut, fee share, and reward reliability combined into actual delegator outcomes.`

Example (bad): `In this guide, we'll explore the basics of how delegators can earn rewards in the Livepeer ecosystem.`

---

## Body example shape

```
Delegating LPT bonds your tokens to one orchestrator on Arbitrum One. You earn a share of any new LPT and ETH fees that orchestrator earns, weighted by your stake. Custody stays with you.

## Where rewards come from

Two streams flow to delegators each round...

## What controls your share

Three values determine the outcome...

### Reward cut

The orchestrator's share of inflationary LPT...

### Fee share

The orchestrator's share of ETH fees...

## Verifying your position

Open the Livepeer Explorer at https://explorer.livepeer.org and connect the wallet that holds the bond...
```

This shape: subject-led opener, declarative `##` headings, claims with named drivers, named interface for verification.
