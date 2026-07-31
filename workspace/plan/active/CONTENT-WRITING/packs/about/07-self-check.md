# 07 — Self-Check

Run this checklist before returning the output. Each item is yes / no. Any "no" is fixed before returning. Do not return output that has not passed every check.

---

## Check 1 — Banned word and phrase scan

Run the full banned-word and banned-phrase list from `03-voice-and-anti-lazy.md` Sections B.1, B.2, B.3 against your output.

- [ ] Zero banned words: `effectively`, `essentially`, `basically`, `meaningful`, `significant` (as intensifier), `real` (as intensifier), `various`, `several`, `obviously`, `clearly`, `simply`, `just` (as filler), `easy`, `straightforward`.
- [ ] Zero banned phrases: "this page covers / explains / walks you through", "this section covers", "Understanding X is essential", "It is important to note", "As mentioned above", "among other factors", "and so on", "etc.", "rather than", "what it takes", "can generate / may produce / could potentially" in value claims, "Don't worry, this is easy", "with just a few lines of code", "powered by blockchain technology", "thriving ecosystem", "vibrant community", "passionate contributors", "Together, we can…", "Join our thriving community!", "the future of decentralised…".
- [ ] Zero banned constructions: no `not [X]` value statements, no unresolved `if [condition]` in body prose, no `This page [verb]`, no `can/may [verb]` in value claims, no question-as-section-heading.

If any are present, fix and re-scan before returning.

---

## Check 2 — Opening test

Read the first sentence of the body (after title and description). It must:

- [ ] Lead with a fact about the subject. Not a hedge ("Livepeer might be useful for…"). Not a question ("What is Livepeer?"). Not a self-reference ("This page describes…").
- [ ] Contain at least one specific noun, mechanism, or named entity. Not "There are several roles in the Livepeer network".
- [ ] Pass the colleague test (D.4 in `03-voice-and-anti-lazy.md`): would you say this sentence to a senior engineer over coffee? If it sounds like brochure copy, rewrite.

---

## Check 3 — Specificity scan

Read each paragraph. Per Section D.5 of `03-voice-and-anti-lazy.md`, every paragraph must contain at least one of:

- [ ] A specific number, percentage, or count
- [ ] A specific file path, function, contract, or product name
- [ ] A specific action the reader can take
- [ ] A specific mechanism (described at the level a peer engineer would want)

A paragraph with **none** of these is filler. Cut or rewrite. Re-scan before returning.

---

## Check 4 — UK English scan

- [ ] `-ise` not `-ize` (organise, optimise, recognise, customise, analyse).
- [ ] `-our` not `-or` (colour, behaviour, neighbour).
- [ ] `-re` not `-er` (centre, metre, theatre).
- [ ] `-lled` / `-lling` (cancelled, labelled, travelling).
- [ ] No US-only spellings anywhere in title, description, headings, body, or REVIEW comments.

If unsure, run the full UK / US table in `03-voice-and-anti-lazy.md` Section B.4.

---

## Check 5 — Word budget

- [ ] Total word count of body (excluding title and description) is within the page's `02-page-briefs.md` budget, plus or minus 10%.
- [ ] If above the upper bound: cut, do not summarise. Aim for the lower half of the range.
- [ ] If far below the lower bound: the page is thin. Either expand using `05-source-of-truth.md` material that fits the brief, or surface as `## OPEN QUESTIONS` if the brief cannot be served.

---

## Check 6 — Veracity flag check

- [ ] Every factual claim in the body either matches a fact in `05-source-of-truth.md` or carries a `{/* REVIEW: [claim] — verify with: [named source] */}` JSX comment.
- [ ] No invented numbers, percentages, dates, contract addresses, or feature claims.
- [ ] Time-sensitive values (active set size, current inflation, bonded ratio, supply, voting period, unbonding period, governance parameters) carry a REVIEW flag even when present in `05-source-of-truth.md` if cited as current.
- [ ] Deprecated terms absent: no "Broadcaster" (use "gateway"), no "miner" (use "orchestrator"), no "API gateway" (use "gateway"), no "commission" (use "reward cut" or "fee cut"), no "tokens" or "crypto" (use "LPT").

---

## Check 7 — Self-reference check

- [ ] No "this page", "this section", "this document".
- [ ] No first person plural ("we", "our", "us") outside Community-tab content. About is not Community.
- [ ] Second person used only for instructions to the reader, not for system descriptions.
- [ ] No "you will learn that…", "in this section we explore…", "as mentioned above".

---

## Check 8 — Pass B taxonomy preview

The page eventually receives 13 frontmatter taxonomy fields enforced per `v2/orchestrators/_workspace/canonical/checks.mdx` (checks 1.1–1.13). Identify each field for downstream Pass B. The content of the page should already be consistent with these values — if `audience: developer` is the recommendation but the prose is community register, the page fails the audience check.

For the page being produced, identify:

- [ ] **1.1** All 10 required frontmatter fields can be filled: `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG image block.
- [ ] **1.2** `pageType` value (one of `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`).
- [ ] **1.3** `pageVariant` (if present): one of `overview`, `specification`, `compendium`, `changelog`, `knowledge-hub`, `quickstart`, `troubleshooting`.
- [ ] **1.4** `purpose` value (one of `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`).
- [ ] **1.5** `audience` value (one of `founder`, `builder`, `developer`, `gateway`, `orchestrator`, `delegator`, `community`). Never `general` or `everyone`.
- [ ] **1.6** `complexity` value (`beginner`, `intermediate`, or `advanced`).
- [ ] **1.7** `lifecycleStage` value. About pages are typically `discover`; some reference pages are `evaluate`.
- [ ] **1.8** `veracityStatus` value (`verified`, `unverified`, `stale`). Default for newly drafted content is `unverified`. `verified` only when zero `{/* REVIEW: */}` flags remain.
- [ ] **1.9** `industry` array (max 2; first dominates) if present.
- [ ] **1.10** `niche` array if present.
- [ ] **1.11** `description` is subject-first, ≤160 chars, no self-reference, UK English.
- [ ] **1.12** OG image block (5 fields) can be filled.
- [ ] **1.13** `keywords` are specific search-intent terms, not generic synonyms of the title.

For REVIEW-mode output, this check populates the "Assessed frontmatter" table in `06-output-contract.md`. For WRITE / REWRITE mode, the values are recorded but the frontmatter block itself is **not** in the output (Pass B applies it).

---

## If any check fails

Fix the failure. Re-run the check. Do not return output until every check passes.

If a check cannot be passed without breaching another rule (e.g. word budget cannot be met without violating veracity), surface the conflict at the bottom of the output as `## OPEN QUESTIONS`. Do not invent.
