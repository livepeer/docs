# 07 — Self-Check (Developers)

> Run this checklist line by line **before** submitting the output. The checklist is the gate, not your judgement. Every box is a hard pass / fail.

---

## 1. Banned-phrase scan

Open the draft. Search for each token. Each hit is a fail — fix before continuing.

- [ ] `effectively`, `essentially`, `basically`, `obviously`, `clearly`, `simply`, `easy`, `easily`, `straightforward`
- [ ] `meaningful`, `significant` (as intensifier), `real` (as intensifier), `various`, `several`, `just` (filler)
- [ ] "This page covers" / "This page explains" / "This page walks you through" / "This guide"
- [ ] "Understanding X is essential" / "It is important to note" / "It should be noted" / "As mentioned above"
- [ ] "rather than" / "what it takes" / "and so on" / "etc." / "among other factors"
- [ ] "can generate" / "may produce" / "could potentially" (in value claims)
- [ ] "With just a few lines of code" / "The SDK makes it simple" / "Easily integrated" / "As you may know" / "Don't worry"
- [ ] "Powered by blockchain" / "Built on blockchain" / "Thriving ecosystem" / "Vibrant community" / "Together, we can" / "The future of decentralised"

Result: **0 hits required.**

---

## 2. Opening test (lead with code or fact)

- [ ] First sentence after the description (and after `---`) does **not** start with "This", "In this", "Welcome", "Let's", "We will", "You will learn", "Today".
- [ ] First sentence is one of:
  - A code reference (function, endpoint, command).
  - A specific fact (version, count, value).
  - A direct prerequisite or first step.
- [ ] First section heading after the intro is concept-derived or task-oriented — not "Overview", "Introduction", "Getting Started" (for instruction pages, use `1. <task>`).

Result: pass on all three.

---

## 3. Specificity scan

For every paragraph in the body, mark which is true:

- [ ] Names a function or method (`livepeer.generate.textToImage`).
- [ ] Names an endpoint (`POST /text-to-image`).
- [ ] States a version (`livepeer@3.5.0`, `ai-runner v0.14.1`).
- [ ] References a file or repo (`livepeer/pytrickle`, `byoc/byoc.go`).
- [ ] Names a config flag, env var, port, or model ID.
- [ ] States an error code or numeric limit.
- [ ] Names a concrete next action with a link.

A paragraph that hits **none** of these is filler. Rewrite or cut.

---

## 4. UK English

- [ ] No US spellings in prose. Search for: `optimize`, `organize`, `customize`, `recognize`, `analyze`, `behavior`, `color`, `center`, `labeled`, `canceled`, `traveling`. Code identifiers and library names stay as published.
- [ ] No em-dashes (`—`). Replace with comma, semicolon, colon, or rewrite. Hook will block on commit.
- [ ] No questions in headings.
- [ ] No first-person plural in prose ("we", "our").

---

## 5. Word budget

- [ ] Wordcount within the budget stated in the page brief (`02-page-briefs.md`).
- [ ] If over by ≤10%, cut filler. If over by >10%, the page is doing two jobs — flag.
- [ ] Aim for the lower half of the range. Density beats length.

---

## 6. Veracity flag check

For every concrete claim (version, endpoint, model ID, contract, programme amount, performance number, function name):

- [ ] Traces to `05-source-of-truth.md` → use it, no flag needed.
- [ ] Traces to a named attachment → cite or paraphrase tightly.
- [ ] Cannot be sourced → flagged with `{/* REVIEW: [claim] — verify with: [source] */}`.
- [ ] Zero unsourced claims survive into the body without a flag.

**No fabrication. None. Ever.** If you cannot source a function name, version, model ID, or endpoint, flag it or cut the sentence.

---

## 7. Code verification

For every code fence:

- [ ] Has a language tag (` ```ts`, ` ```python`, ` ```go`, ` ```bash`, ` ```json`, ` ```dockerfile`). No bare ` ``` `.
- [ ] Every function or method named is in `05` §SDK matrix or §AI API surface. If not, has a `[REVIEW]` flag pointing at the source repo.
- [ ] Every package version stated is in `05` §SDK / npm / PyPI. If not, has a `[REVIEW]` flag.
- [ ] curl examples use the canonical base URL (`https://livepeer.studio/api/beta/generate` for AI; `https://livepeer.studio` for video).
- [ ] Bearer token shown as `<STUDIO_API_KEY>` placeholder. Never an invented value. Never a real value either.
- [ ] Comments inside blocks state the type, the result, or the failure mode — not "// here we call the API".
- [ ] Code-block language order matches `06` §B.4 (curl → JS/TS → Python → Go for builder pages; Python first for PyTrickle / ai-runner pages).

---

## 8. Error-state check

For every page that involves a network call (instruction, tutorial, guide):

- [ ] Has an explicit "Errors" or "Common failures" section in the **main flow**, not in a `<Note>`.
- [ ] Names at least three error classes for SDK pages: `HTTPError` (401, 500), `HTTPValidationError` (422), `SDKError`. Or HTTP status codes for curl pages.
- [ ] Names the cold-model timeout for AI pages (30 s to several minutes).
- [ ] Each error has: what triggered it, what the reader does next.

---

## 9. Cross-link check

- [ ] "Next steps" or "Related" section exists at the end (except for navigation pages).
- [ ] Links use absolute paths (`/v2/developers/...`).
- [ ] PREV / NEXT match the brief's adjacency.
- [ ] Cross-tab handoffs (Gateways, Orchestrators, Solutions, About) are explicit when relevant.

---

## 10. Pass B taxonomy preview

For each page, confirm the frontmatter fields you would assign — even if you are not writing frontmatter directly:

- [ ] `pageType` ∈ `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource` — matches `02` brief.
- [ ] `audience` ∈ `developer`, `builder` — matches `02` brief, single token (not an array).
- [ ] `purpose` ∈ the 15-enum (`orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`) — matches `02` brief.
- [ ] `lifecycleStage` ∈ `discover`, `evaluate`, `setup`, `build`, `operate`, `troubleshoot`, `optimise`.
- [ ] `complexity` ∈ `beginner`, `intermediate`, `advanced`.
- [ ] If the brief specifies `pageVariant` (e.g. `quickstart`, `compendium`, `troubleshooting`), it is recorded.

---

## 11. Final structural check

- [ ] Title line + ≤160-char description + `---` + body. No fourth block.
- [ ] H1 not written manually (comes from title).
- [ ] No `<Note>` / `<Info>` / `<Tip>` for main content.
- [ ] No first-person plural anywhere.
- [ ] No banned domain substitutions (`tokens` for LPT, `miner` for orchestrator, `commission` for reward cut, etc.).
- [ ] Every Livepeer-specific term (BYOC, PyTrickle, ComfyStream, trickle, dual, on-chain / off-chain) used correctly per `01` §domain term lock.

---

## 12. The Discord test

- [ ] Could you link this single page on Discord and trust the reader gets a complete answer to the arriving question without needing another page?

If no, the page is incomplete. Either expand the missing piece (within budget) or split (flag — humans approve splits).

---

## Outcome

If every box is checked, submit.

If any box fails, the output is rejected. Fix before submitting. **Do not submit and add a "known issue" note.** That is a fail.
