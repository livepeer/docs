# 06 — Output Contract

The shape of the output, by mode. Read before generating.

---

## Mode = WRITE (or REWRITE)

Output a complete page body. Plain markdown only.

### Shape

```
[Title — H1, sentence case, 1–6 words]

[description — one sentence, ≤160 chars, subject-first, UK English. No "this page".]

---

[Body — plain markdown. ## and ### headings only. Open with the most useful fact for the page audience and persona at the page's lifecycle stage.]

[REVIEW flags inline using JSX comment syntax: {/* REVIEW: [exact claim] — verify with: [named source] */} ]
```

### Hard rules

- **No preamble.** Do not write "Here is the rewrite", "Below is the page", or any meta-prose. The first line is the title.
- **No frontmatter block.** Do not output `---\n title: …\n---`. The driver pack handles taxonomy in Pass B (`07-self-check.md` previews the 13 frontmatter checks).
- **No MDX components.** No `<Card>`, `<Tabs>`, `<Steps>`, `<Note>`. Plain markdown only. Components are added by the layout pass downstream.
- **No imports.** Never write `import` lines. The pack does not deal with components.
- **No closing summary.** No "In summary", "To recap", "Key takeaways". The body ends on a fact or a next-step pointer.
- **Description**: subject-first, ≤160 chars, no self-reference, UK English.
- **Title**: 1–6 words, sentence case ("Livepeer mental model", not "The Livepeer Mental Model"). Match the canonical title in `02-page-briefs.md`.
- **Word budget**: enforce per `02-page-briefs.md`. If draft exceeds the upper bound by more than 10%, **cut** — do not summarise. Aim for the lower half of the range.
- **Veracity flags**: every factual claim either traces to `05-source-of-truth.md` or carries a `{/* REVIEW: ... */}` JSX comment. No unflagged invented claims.
- **UK English**: throughout. `-ise`, `-our`, `-re`. No US spellings.
- **No em dashes.** Use comma, semicolon, colon, parentheses, or rewrite the sentence.
- **No questions in headings.** Make them declarative.
- **Person**: second person for instructions, third person for system descriptions, no first person plural.

### Example

```
Livepeer mental model

Livepeer is a cryptoeconomic coordination protocol that secures a global GPU network for low-latency video and AI compute, exposed through developer-friendly APIs and applications.

---

## The substrate

Livepeer is a decentralised serverless GPU fabric with a cryptoeconomic control plane. The protocol replaces the role a hyperscaler control plane plays in centralised cloud: it coordinates supply, secures execution, and routes payments. The network is the fabric of GPU operators that runs jobs.

## The 10-layer stack

[…]

## Where each actor sits

[…]
```

---

## Mode = REVIEW

Output a structured assessment, not a rewrite. Source: `Prompts-By-Phase/3-content-pass/content-pass.md` review structure.

### Shape

```
## Verdict

[ONE_LINER — pass / needs-work / blocker — with one sentence why]

## Assessed frontmatter

| Field | Current | Recommended | Reason |
|---|---|---|---|
| pageType | … | … | … |
| audience | … | … | … |
| purpose | … | … | … |
| pageVariant | … | … | … |
| veracityStatus | … | … | … |
| lifecycleStage | … | … | … |
| complexity | … | … | … |

## Prioritised issues

1. [P0 — blocker]. [exact line or section]. [what's wrong]. [what to change to].
2. [P1 — quality]. [exact line or section]. [what's wrong]. [what to change to].
3. [P2 — polish]. [exact line or section]. [what's wrong]. [what to change to].

## Veracity flags

- [claim] — [source needed] — [where it appears]
- [claim] — [needs live verification] — [where it appears]

## Approved sections

[Section heading] — PASS — [one-line reason]
[Section heading] — PASS — [one-line reason]

## Sections requiring fixes

[Section heading] — FIX — [exact issue, single sentence]
[Section heading] — FIX — [exact issue, single sentence]
```

### Hard rules for REVIEW

- **No rewrites.** REVIEW reports issues; it does not produce body content. If a rewrite is needed, recommend WRITE or REWRITE mode in the verdict — do not silently switch modes.
- **Specificity required.** Every issue cites exact line or section. "Tone could be improved" is not acceptable. "Section 'Mechanism Objectives' opens with 'Understanding X is essential' (banned phrase per 03 Section B.2); replace with declarative fact" is acceptable.
- **No padding.** No "Overall the page is good but…". Verdict is one line. Rationale is in the issues table.
- **Frontmatter table is mandatory.** All seven fields assessed even if "current = recommended".
- **Veracity flags are prioritised.** Any unsourced numerical claim is at least P1.

---

## Universal rules (both modes)

- **Output IS the work.** No to-do lists, no "next steps for the human", no "I will now…".
- **No questions back to the user.** If the brief is incomplete, follow the failure protocol in `00-START-HERE.md` (write what is possible, append `## OPEN QUESTIONS` at the bottom).
- **Stop at the contract.** Do not gold-plate. Do not extend scope. Do not add a section the brief did not request.
- **Cite the brief if cutting content.** "Removed the Active Set table; flagged in `02-page-briefs.md` as out-of-scope for `core-mechanisms`" is acceptable. Cutting silently is not.
- **No emojis.** No decorative characters in headings or prose.
- **No bullet-list-as-avoidance.** A bullet list with three-word entries replacing a sentence is filler. Either expand each bullet to a single specific sentence, or replace the list with prose.

---

## Anti-pattern: do not do this

```
I'll write the rewrite now. Here's a rewrite of the Livepeer Mental Model page following the brief in 02-page-briefs.md and the voice rules in 03-voice-and-anti-lazy.md:

# Livepeer mental model

…body…

Let me know if you'd like me to adjust the tone or add additional sections.
```

The preamble and the closing offer both violate the contract. The output should be:

```
Livepeer mental model

Livepeer is a cryptoeconomic coordination protocol that secures a global GPU network…

…body…
```

Nothing before the title. Nothing after the body.
