# Per-page review template

Use this exact format for every per-page review. Save to `v2/developers/_workspace/reviews/{subgroup}/{page-slug}.md`. Follow `v2/about/_workspace/reviews2/network/architecture.md` as the canonical exemplar.

---

```markdown
# Review: {filename}.mdx

**Page**: `v2/developers/{path}/{file}.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent {A1-A13}
**pageType (from frontmatter)**: {value}
**Audience (from frontmatter)**: {value}
**Purpose (from frontmatter)**: {value}
**Bytes**: {size}
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | All present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: orient` valid; OR `purpose: concept` deprecated → `explain` |
| ... | ... | ... | ... | ... |

(every check 1.1 through 10.7 — every numbered check from the rubric appears, even if N/A with reason)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Build AI and agents" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "..." | PASS | Subject-first, 142 chars |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | orient | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | fallback.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Missing — should be `unverified` at minimum |
| lastVerified | Optional | — | N/A | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (n×) | Required | — | Placement OK / wrong (specify) |
| `<Tabs>` / `<Tab icon>` | No | Recommended for language variants | Yes | Missing — flag |
| `<StyledSteps>` / `<StyledStep>` | No | Required for procedural | — | Page is procedural — flag if Steps absent |
| `<Card>` / `<Columns cols={2}>` | No | Required (Related Pages at footer) | — | No Related Pages section at end — flag |
| `<CustomCardTitle icon ... />` | No | Required inside nav `<Card>` | — | |
| `<CodeBlock>` / fenced ``` with icon + title | varies | Required where code present | — | List blocks missing icon/title |
| `<Note>` / `<Tip>` / `<Warning>` | varies | — | varies | Note that 5.D7 forbids `<Note>` for primary content |
| `<Accordion>` / `<Accordion icon>` | varies | Recommended for collapsible detail | — | Every Accordion must have icon prop |
| `<StyledTable>` | varies | Required where tables present | — | Raw markdown tables fail 5.23 |
| Custom `/snippets/components/...` | list | — | — | List each import |

## Cross-page duplication and link gaps

- **OVERLAP**: list every section that duplicates content from another v2/developers/ page or v2/about/ page. Cite both paths.
- **LINK GAPS**: list links that don't resolve, or expected links that are missing (prerequisite page, next page, related concept, upstream repo, cross-tab graduation).
- **STRANDED**: does the page leave the reader with no clear next step? If yes, name the missing handoff.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | n | line 42: "the gateway — when configured..." |
| US spellings | n | line 17: `optimize` (should be `optimise`) |
| Banned words | n | line 23: "effectively" |
| Banned phrases | n | line 9: "This page covers..." |
| Banned constructions | n | line 31: "can return" in value claim |
| Conditional gatekeeping | n | line 12: "If you want to..." |
| Hand-holding | n | line 88: "Now that you've..." |
| Question headings | n | line 56: "## How does it work?" |
| Studio refs | n | line 18: "Studio API" — CRITICAL |
| Hedging openers | n | line 1 of body: starts with "If..." |
| Self-reference | n | description / line 3: "This page describes..." |
| Deprecated terms | n | line 67: "Broadcaster" (should be Gateway) |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| AI Pipeline Endpoints | 5 | 4 | 5 | 5 | 5 | 24 |
| Background | 1 | 1 | 2 | 2 | 4 | 10 (banned/weak) |
| ... | ... | ... | ... | ... | ... | ... |

Headings scoring <20/25 are FAIL under check 3.1. `Related Pages` exempt.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 24 | bash | ✓ terminal | ✓ "start.sh" | NOT-TESTED | Should be TESTED before ship |
| 48 | (none) | ✗ | ✗ | — | FAIL 5.20 + 4.17 |

## Depth analysis (5 layers)

**Apply the 5-whys prompt** (`_packet/5-whys-prompt.md`). Each layer answers a different dimension of "what else makes this better". No surface fixes. Each answer cites a source/exemplar.

### Layer 1 — Reader outcome
- **Gap:** {specific gap — what does the reader still not know after reading?}
- **Fix step:** {one concrete action}
- **Source/exemplar:** {file path}

### Layer 2 — Composition
- **Gap:** {component/layout pattern missing per page-composition framework}
- **Fix step:** {add CardGroup / Accordion / Tabs / Steps / Frame, at line N}
- **Source/exemplar:** `.claude/references/layout/{specific}.md` or `snippets/templates/pages/...`

### Layer 3 — Cross-page integration
- **Gap:** {missing prereq / next-step / related / upstream / cross-tab link}
- **Fix step:** {add link to specific path}
- **Source/exemplar:** {file path}

### Layer 4 — Veracity and source authority
- **Gap:** {claim X needs a source / example Y needs to be runnable}
- **Fix step:** {add citation to specific source / replace with verified example}
- **Source/exemplar:** {go-livepeer repo + path / ai-runner README / PR #}

### Layer 5 — Product-forward depth
- **Gap:** {meta-question the page should answer but doesn't}
- **Fix step:** {add section / reframe intro}
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — what gold-standard exemplar this page should emulate

## Summary

**Verdict**: PASS | MINOR | MODERATE | MAJOR | NEEDS WORK | EMPTY-STUB
**Severity counts**: CRITICAL n / HIGH n / MEDIUM n / INFO n
**Critical findings (1–5 max)**:
1. ...
2. ...

## Prioritised remediation

Concrete, executable. Specify exact value, line, action. No "improve X".

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace em-dash on line 42 with semicolon | 42 | HIGH | S | check 2.12 |
| 2 | Add `<Columns cols={2}>` Related Pages section before EOF | EOF | HIGH | M | check 5.16 + .claude/references/layout/best-practice.md |
| 3 | Add `icon="terminal"` + `title="auth.ts"` to code block at line 48 | 48 | HIGH | S | check 5.20 |
| 4 | Add `veracityStatus: unverified` to frontmatter | 11 | MEDIUM | S | check 1.8 |
| 5 | ... | ... | ... | ... | ... |
```

---

## Notes for reviewers

1. **Every numbered check from the rubric appears in §"Per-Check Results"** — even N/A. State N/A with reason ("no code blocks on this page" / "navigation page, no body sections").
2. **Quote actual content from the page** in evidence column. "line 42: <actual text>". Never paraphrase.
3. **Severity strict:** CRITICAL = scope/audience mismatch, Studio leak, broken render, broken link to critical page. HIGH = missing required component, missing prerequisites, untested code, deprecated term. MEDIUM = naming/voice issues that don't block ship. INFO = polish.
4. **5 layers depth is mandatory** — page reviews without depth analysis are incomplete.
5. **Prioritised remediation** is the deliverable for fixers. Make every row executable.

## Section-summary file format

Save to `v2/developers/_workspace/reviews/_summary/{subgroup}.md`. Format:

```markdown
# Section summary: {subgroup}/

**Pages reviewed**: n
**Review date**: 2026-05-17
**Reviewer**: agent {A_}

## Verdict distribution
- PASS: n
- MINOR: n
- MODERATE: n
- MAJOR: n
- NEEDS WORK: n
- EMPTY-STUB: n

## Severity totals across pages
| Severity | Count |
|---|---|
| CRITICAL | n |
| HIGH | n |
| MEDIUM | n |
| INFO | n |

## Top issues by frequency in this section
1. {pattern, e.g. "11/12 pages missing Related Pages CardGroup at footer"} — pages: [list]
2. {pattern} — pages: [list]
3. ...

## Cross-page duplication and link gaps in this section
- ...

## Section-level depth analysis (5 layers)

### Layer 1 — Reader outcome (section level)
What's the strongest cross-page gap in helping the user achieve this section's purpose? (Not per-page — section-wide.)

### Layer 2 — Composition (section level)
What component/layout patterns are missing across this section? (e.g. "0/9 video pages use Tabs for codec variants")

### Layer 3 — Cross-page integration (section level)
What inter-section navigation is missing? Prereq-to-next-page chain breaks?

### Layer 4 — Veracity (section level)
Which claims appear repeatedly across this section without a verified source?

### Layer 5 — Product-forward depth (section level)
What would this section need to feel like a product, not a wiki?

## Prioritised section remediation
| # | Step | Pages affected | Effort |
|---|---|---|---|
| 1 | ... | n pages: [list] | M |
```
