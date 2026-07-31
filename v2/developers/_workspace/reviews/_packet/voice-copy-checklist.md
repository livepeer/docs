# Voice & copy checklist — fast per-page application

**Source:** `v2/developers1/_workspace/canonical/checks.mdx` §2 Voice & Copy + `docs-guide/standards/voice-and-copy.mdx` + `.claude/CLAUDE.md` Voice section

Apply this checklist by running grep patterns against the page, then quoting actual hits in the per-page review.

## UK English (check 2.1)

Grep patterns (US → UK):

```
\b(optimize|optimization|optimized|optimizing)\b   → optimise / optimisation
\b(behavior|behaviors|behavioral)\b                → behaviour
\b(color|colors|colored|coloring|colorize)\b       → colour (except CSS `color:` properties)
\b(center|centered|centering)\b                    → centre (except `center` CSS property)
\b(labeled|labeling)\b                              → labelled / labelling
\b(canceled|canceling)\b                            → cancelled / cancelling
\b(traveling|traveled)\b                            → travelling / travelled
\b(organize|organized|organizing|organization)\b   → organise / organisation
\b(recognize|recognized|recognizing)\b              → recognise
\b(customize|customized|customizing)\b             → customise
\b(finalize|finalized|finalizing)\b                → finalise
\b(realize|realized|realizing)\b                   → realise
\b(analyze|analyzed|analyzing)\b                   → analyse
\b(emphasize|emphasized|emphasizing)\b             → emphasise
\b(prioritize|prioritized|prioritizing)\b          → prioritise
\b(synchronize|synchronized|synchronizing)\b       → synchronise
\b(serialize|serialized|serializing)\b             → serialise
\b(initialize|initialized|initializing)\b          → initialise
\b(stabilize|stabilized|stabilizing)\b             → stabilise
```

**False-positive zones (do NOT flag):**
- Mermaid `classDef` strings using `color:#hex` — CSS property, not narrative
- React prop names referenced in docs (`color`, `center`)
- File paths or environment variables containing US-spelled words
- External library names (`color-thief`, `analyze.js`)
- Code blocks where the code itself uses US-spelled identifiers

## Banned words (check 2.2) — zero tolerance

Patterns:

```
\b(effectively|essentially|basically|meaningful|significant|various|several|obviously|clearly)\b
\b(real)\s+(time|fast|quick|powerful)   → `real-time` is OK; `real` as intensifier banned
```

Quote each match with line number.

## Banned phrases (check 2.3) — zero tolerance

Patterns (case-insensitive):

```
"This section (covers|explains|walks you through)"
"This page (covers|explains|walks you through|describes|outlines)"
"Understanding [^.]+ is essential"
"It is important to note"
"As mentioned (above|earlier|previously)"
"and so on"
" etc\."
"rather than"
"what it takes"
"it should be noted"
"not just [a-z]"
"can (generate|produce|create|provide|return|help|make|enable)"  in value claims
"may (generate|produce|create|provide|return|help|make|enable)"  in value claims
"The reason is straightforward"
"among other factors"
"low but not zero"
"once .+ is stable"
"depends on various"
```

## Banned constructions (check 2.4)

- `not [X]` in value statements ("not just a gateway", "not only fast")
- `if [condition]` unresolved in body prose (acceptable inside code blocks or exact config conditions)
- `This page [verb]` self-reference
- `can/may [verb]` hedging in value claims

## Opening order (check 2.5)

First sentence test:
- ✅ Starts with subject ("Livepeer transcoding..." / "BYOC packages..." / "The gateway routes...")
- ❌ Starts with "If" / "When" / "Before" / "To"
- ❌ Starts with "We" / "Our" / "You will"

## Description field (check 2.15)

Frontmatter `description` first word check:
- ❌ "This"
- ❌ "Learn"
- ❌ "Discover"
- ✅ Subject-first ("Livepeer", "The gateway", "BYOC", "AI pipelines")

## Em-dashes (check 2.12) — zero tolerance

Pattern: `—` or ` — ` anywhere in body content. Hook-enforced. Quote each line.

**Acceptable contexts (do NOT flag):**
- Inside Mermaid label text (within `` ``` mermaid `` blocks)
- Inside code blocks (within `` ``` `` fences)
- Inside JSX attribute values that pass through to rendered output

**Replace with:** comma, semicolon, colon, or rewrite the sentence.

## Entity-led voice (check 2.13)

Every paragraph's first word test:
- ✅ System fact: "The Gateway accepts...", "BYOC containers run..."
- ✅ Reader outcome: "First inference call takes...", "Successful deployment requires..."
- ✅ API behaviour: "POST /v1/inference returns..."
- ❌ "We", "Our", "You will learn", "In this section"

## Hedging verbs in value claims (check 2.14)

Banned in value statements:
- "can help you" / "can [verb]" in value
- "allows you to"
- "enables you to"
- "helps you"
- "may provide" / "may [verb]"

Replace with direct assertion: "the SDK returns a base64 image" not "the SDK can return a base64 image".

## Deprecated terms (check 2.16)

| Deprecated | Use instead |
|---|---|
| Broadcaster | Gateway |
| Pool worker | Pool node |
| Combined mode | Dual mode |
| Hybrid | Dual mode |
| Transcoder (as synonym for Orchestrator) | Orchestrator |

## Per-audience prohibited phrases (check 2.8)

**Developer audience pages — NOT allowed:**
- "with just a few lines"
- "the SDK makes it simple"
- "easily integrated with"
- "don't worry about the details"
- "as you may know"

**Builder audience pages — NOT allowed:**
- "as you know, Livepeer is"
- "built on blockchain technology"
- Any opening that explains the network before the integration value

## Heading checks (check 3.x)

Apply scoring rubric to every heading. Score 0–5 on each:
- **Precision**: Names the exact concept
- **Depth**: Signals intellectual level
- **Stability**: Survives content changes
- **Clarity**: Instantly understood by target audience
- **Conciseness**: Minimal words, maximum signal

Sum ≥20/25 = PASS.

**Banned heading terms (auto-FAIL):**
- `Basics`
- `Notes`
- `How It Works`
- `See Also`
- `Conclusion`
- `What's Next`

**Avoid heading terms (-3 to Precision):**
- `Overview`
- `Details`
- `Information`
- `Introduction`
- `Summary`
- `Options`
- `Background`
- `Next Steps`
- `Further Reading`

**OK heading terms:**
- `Types`, `Modes`, `Profiles`, `Prerequisites`, `Configuration`, `Setup`, `Resources`, `Related`

**Exception:** `Related Pages` heading is **exempt** — approved structural element. Do not score, do not flag in 3.2.

## Studio framing (project rule 3, cross-cuts checks 1.14 + 4.1)

**Zero Studio content in `v2/developers/`** — Studio refs are CRITICAL.

Grep:
```
livepeer\.studio
"Studio API"
"Studio dashboard"
"Studio account"
```

**Acceptable:** only in `learn/where-to-find/studio-paths.mdx` (the routing-out page).

## Self-reference (check 2.15 + 4.13)

Grep for self-reference in body prose:
- "this page"
- "this section"
- "this document"
- "in this guide"
- "this article"

## Conditional gatekeeping (check 2.4 — extended)

Grep:
```
"If you (want|'d like|would like|need|prefer) to"
"If you're (a |an |the )"
"For (advanced |experienced |new )"
```

These often indicate the page should split its audience.

## Hand-holding (check 2.4 — extended)

Grep:
```
"Now that you've"
"Great! Now"
"Let's "
"First we'll"
"In the next step we'll"
```

Replace with subject-led continuation.

## TODO / REVIEW flags (check 4.13 + 5.30)

Grep:
```
"TODO"
"TBD"
"Coming Soon"
"\{/\* REVIEW:"     → must be paired with a tracking note + a `veracityStatus: unverified`
"\{/\* TODO"        → not allowed in published content
```

## First-use definition (check 2.21)

For every Livepeer-specific term (BYOC, NaaP, LIP-92, ComfyStream, PyTrickle, FrameProcessor, etc.), check that:
- First use is defined inline, OR
- First use is linked to its glossary/reference entry

For developer-register pages, protocol terms (round, active set, ticket) may be referenced terser.

## Quick grep cheat sheet (one-liner per page)

```bash
f="v2/developers/PATH.mdx"

# Em-dashes
rg "—| — " "$f"

# Banned words
rg -wi "effectively|essentially|basically|meaningful|significant|obviously|clearly|various|several" "$f"

# Banned phrases
rg -i "this (page|section) (covers|explains|walks|describes|outlines)|it is important to note|as mentioned|and so on|the reason is straightforward" "$f"

# Studio refs (CRITICAL)
rg -i "livepeer\.studio|Studio API|Studio dashboard|Studio account" "$f"

# Question headings
rg "^#+ .*\?" "$f"

# Hedging value claims
rg -i "can (help|enable|allow|provide|return|generate|produce|create|make)" "$f"

# US spellings (excluding Mermaid color: zones)
rg -i "\b(optimize|behavior|color|center|labeled|canceled|traveling|organize|recognize|customize|finalize|realize|analyze|emphasize|prioritize|synchronize|serialize|initialize|stabilize)\w*\b" "$f"

# Deprecated terms
rg -wi "broadcaster|pool worker|combined mode|hybrid" "$f"

# Conditional gatekeeping
rg -i "if you (want|'d like|would like|need|prefer) to" "$f"

# Hand-holding
rg "Now that you've|Great! Now|Let's |First we'll" "$f"

# TODO/REVIEW
rg "TODO|TBD|Coming Soon|REVIEW:" "$f"
```

Run each, quote hits with line numbers, classify under the right check, log severity.
