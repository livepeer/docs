# Review: ai-and-agents.mdx

**Page**: `v2/developers/learn/ai-and-agents.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A2 (re-dispatch)
**pageType (from frontmatter)**: concept
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: evaluate
**Bytes**: 12,551
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | `audience/purpose/complexity/lifecycleStage` present; `veracityStatus` field absent (page uses `status: current` + `lastVerified: 2026-05-14` instead) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | line 8: `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | line 10: `purpose: evaluate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | line 9: `audience: developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | line 11: `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | line 12: `lifecycleStage: evaluate` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field absent. Page uses non-canonical `status: current` (line 30). Rubric requires `veracityStatus: verified|unverified|stale` |
| 1. Frontmatter | 1.9 | industry array | N/A | not present, optional |
| 1. Frontmatter | 1.10 | niche array | N/A | not present, optional |
| 1. Frontmatter | 1.11 | description ≤160, subject-first | FAIL | description starts "Three AI pipeline categories" (subject-first PASS) but length is 183 chars — fails ≤160 limit |
| 1. Frontmatter | 1.12 | OG block complete (5 fields) | PASS | lines 25–29 — all 5 present |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | Mostly specific (`comfystream`, `pytrickle`, `VTuber`, `eliza`); `livepeer ai` is acceptably specific; `pipeline` alone is generic |
| 1. Frontmatter | 1.14 | developer/builder split honoured | PASS | Register is technical, code-first; matches `developer` token |
| 2. Voice & Copy | 2.1 | UK English | PASS | grep clean — no `optimize/behavior/color/center/labeled/analyse` US forms |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | grep clean |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | grep clean |
| 2. Voice & Copy | 2.4 | Zero banned constructions | MIXED | line 37: "Understanding which category fits your use case before building prevents rework." Borderline — rephrasing of banned "Understanding X is essential". Reads cleaner than the banned form but mechanism is the same |
| 2. Voice & Copy | 2.5 | Opening order | PASS | line 37 opens "The Livepeer network supports three distinct categories of AI pipeline." — subject-first, value-led |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each paragraph one job |
| 2. Voice & Copy | 2.7 | Audience register | PASS | Developer register held throughout |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | No "with just a few lines" / "the SDK makes it simple" hits |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Claims are quantified (VRAM numbers, FPS, latency) |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Opens with system fact |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, ComfyStream, PyTrickle, LIP-92 not misspelled; Eliza linked |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | rg `—` clean |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Paragraphs lead with system fact: "Batch AI pipelines follow...", "Real-time AI on Livepeer is built around...", "The LLM pipeline brings text inference..." |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No "can help" / "allows you to" / "enables you to" |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | Description does not start with "This page..." |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | PASS | No `broadcaster/pool worker/combined mode/hybrid` |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Orchestrator, Gateway, LPT used correctly |
| 2. Voice & Copy | 2.18 | Spell check passes | NOT-TESTED | Did not run cspell against tools/config |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | ComfyStream, PyTrickle, AI Gateway align with `resources/glossary.mdx` |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First-use definition | MIXED | "Agent SPE" line 165 — SPE expansion ("Special Purpose Entity") given parenthetically. "LLM SPE" and "Cloud SPE" line 206 reuse SPE without re-link. "trickle protocol" mentioned line 157 indirectly via PyTrickle but the protocol itself is not linked here |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening | N/A | This is a `concept` page, not instruction/tutorial |
| 2.D | 2.D2 | Every API in prose has code/link | MIXED | `live-video-to-video` pipeline type named line 142 — no code example or pipeline-spec link. `LivePaymentSender` interface line 147 mentioned without a GitHub link to the interface |
| 2.D | 2.D3 | Versions explicit | FAIL | "RTX 3090 or better; RTX 4090 recommended" (line 175) — hardware-specific OK. But no go-livepeer version pin anywhere; "currently in beta" (line 191) for LLM has no version |
| 2.D | 2.D4 | Errors in main content | N/A | No error semantics on this page; concept-level |
| 2.D | 2.D5 | No self-evident code commentary | PASS | The one curl block (line 193) is unannotated, correctly |
| 2.D | 2.D6 | No marketing adjacent to code | PASS | |
| 2.D | 2.D7 | `<Note>` not used for primary content | MIXED | line 181 `<Note>` carries a substantive operational warning about concurrency under load — this is primary content, not adjacent context. Should be `<Warning>` or in-body prose |
| 3. Headings | 3.1 | Score ≥20/25 each | MIXED | See heading score table — `Choose your path` borderline at 18 |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics/Notes/How It Works/See Also` |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Headings include domain noun ("Batch AI pipelines", "LLM pipeline", "Real-time AI") |
| 3. Headings | 3.5 | Names concept not examples | PASS | "Real-time AI" not "VTubers, avatars, generative" |
| 3. Headings | 3.6 | Title well-formed | PASS | `AI and agents on Livepeer` — concept-derived, 5 words |
| 3. Headings | 3.7 | Expert editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept-style headings |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule (repeat) | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: orient developer choosing between three AI pipeline categories |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer evaluate which of the three AI pipeline categories fits their workload." Holds |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | No explicit PREV (concepts/landscape would be prereq). NEXT exits are scattered ("Where to start..." links inside body sections) — no single footer Next Step or Related Pages block |
| 4. Structure | 4.4 | No dead ends | MIXED | Body sections route out via "Where to start:" lines, but the page itself ends abruptly at line 265 with no Related/Next |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Reader is expected to know what an orchestrator is, what BYOC means, what `live-video-to-video` is. None linked from a top-of-page prereq block |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Page imports VTuber, Agent SPE, LLM SPE, Cloud SPE detail. None of those route OUT to `where-to-find/` (which doesn't exist) or to a sibling concept page. Treasury funding amount ("30,000 LPT") is out-of-scope for a developer Learn page |
| 4. Structure | 4.7 | Information type per section | PASS | Concept-page sections are analytical/comparative — correct |
| 4. Structure | 4.8 | No duplication from adjacent pages | MIXED | Pipeline list duplicates `build/ai-and-agents/ai-pipelines.mdx` (high-overlap risk — not verified line-by-line). "Where to start" links duplicate `build/ai-and-agents/overview.mdx` |
| 4. Structure | 4.9 | Section orientation page present | N/A | Learn is itself the orientation surface |
| 4. Structure | 4.10 | ≥3 cross-tab graduation links | FAIL | Zero cross-tab links to Gateways, Solutions, About, or Orchestrators. All outbound links stay inside `v2/developers/build/`. AI graduations to managed gateway (Solutions) and self-host gateway (Gateways) absent |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what are the three AI categories" but not "can I run this in production today" / "what's the maintenance status of each" |
| 4. Structure | 4.12 | Page size appropriate | PASS | 12.5 KB, substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | grep clean |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs / limitations named | MIXED | Real-time orchestrator scarcity is noted line 181. Cost trade-offs not named anywhere. "When NOT to use" each category absent |
| 4. Structure | 4.16 | Content-pass context completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | Single fenced block line 193 has ``` bash icon="terminal" |
| 4. Structure | 4.18 | Code-first opening | N/A | concept page |
| 4. Structure | 4.19 | Error states in main content | N/A | no error states |
| 4. Structure | 4.20 | API/method in prose has code/link | MIXED | See 2.D2 |
| 5. Layout | 5.1 | Correct template for pageType | MIXED | `concept` template expects Header CTA + Related Pages footer — both absent |
| 5. Layout | 5.2 | Required sections | FAIL | Missing Related Pages footer at EOF (5.16). Page ends with prose paragraph line 263–265 |
| 5. Layout | 5.3 | Only approved components | PASS | StyledTable, CustomDivider, Note — all approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | No PreviewCallout, no TBD/Coming Soon |
| 5. Layout | 5.5 | Info-type → component mapping | MIXED | Comparative data correctly in StyledTable. But `Developer tools for real-time AI` (lines 152–159) is three sequential prose-bold paragraphs — should be `<Tabs>` or `<Card>` grid for scannability |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Did not run mdx-render-verify hook |
| 5. Layout | 5.7 | No old-schema frontmatter | MIXED | `status: current` is old schema; canonical is `veracityStatus` |
| 5. Layout | 5.8 | CSS custom props only | PASS | No inline styles or hex on this page |
| 5. Layout | 5.9 | Generated banners intact | N/A | Not generated |
| 5. Layout | 5.10 | Component PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | FAIL | Misses Header CTA + Related Pages — see 5.2 |
| 5. Layout | 5.12 | Section blocks from gold-standard | MIXED | StyledTable matches; no Related Pages CardGroup |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | Intro → categories overview → per-category detail → decision matrix |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | |
| 5. Layout | 5.15 | Data imports used | FAIL | VRAM numbers, pipeline lists, GPU minimums hardcoded in MDX. `ai-runner/aiModels.json` is the canonical source; not imported |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | FAIL | Neither present. Page ends at line 265 with bare prose paragraph |
| 5. Layout | 5.17 | Related Pages format | N/A | Section absent |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs on page |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordion |
| 5. Layout | 5.20 | Code block metadata | PASS | line 193 has `icon="terminal"` but no `title` attr — check fails strictly (icon + title both required). FAIL on title |
| 5. Layout | 5.21 | StyledSteps not raw Steps | N/A | No procedural body |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No nav cards |
| 5. Layout | 5.23 | Tables use StyledTable | PASS | All three tables are StyledTable |
| 5. Layout | 5.24 | Max 1–2 tables | FAIL | Three StyledTables on the page (lines 45, 82, 214). Rubric ceiling is 1–2 |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Same as 5.24 |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 41 — but it's AFTER the intro paragraphs (lines 37, 39), not before them. Pattern requires divider after imports, before intro prose. Body dividers between H2s OK |
| 5. Layout | 5.27 | Mermaid colours | N/A | No mermaid |
| 5. Layout | 5.28 | Import ordering | PASS | components → no data → no page → no composable |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags as JSX | N/A | None |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | No critical info hidden in Tabs/Accordions |
| 5. Layout | 5.32 | Reference tables at end | MIXED | First StyledTable (line 45) is a categories-at-a-glance — defensible as orientation. Second (pipeline list, line 82) is a reference table positioned mid-page where Reference rubric expects end-of-page. Concept-page rule is looser but still flags |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "LivePaymentSender interface" line 147 — claim is correct but no link to go-livepeer source. "first production VTuber and AI avatar pipeline" line 167 — strong claim, no PR or release link. "30,000 LPT" treasury figure line 165 — no governance link |
| 6. Veracity | 6.2 | Code tested + TESTED label | FAIL | Single curl block line 193–202 — no TESTED label |
| 6. Veracity | 6.3 | No deprecated API; version-pinned | FAIL | No go-livepeer version, no ai-runner version, no SDK version anywhere |
| 6. Veracity | 6.4 | Numbers real | MIXED | VRAM numbers correlate with `ai-runner` defaults but source-link absent |
| 6. Veracity | 6.5 | REVIEW flags for unverified | N/A | None present |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent (see 1.8) |
| 6. Veracity | 6.7 | Uses resources/glossary | MIXED | No glossary links from BYOC, NaaP, SPE first uses |
| 6. Veracity | 6.8 | Source staleness check | FAIL | `lastVerified: 2026-05-14` but no version pins to validate against |
| 6. Veracity | 6.9 | No open-ended research tasks | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | PASS | |
| 6. Veracity | 6.11 | Glossary defs match universal-terms | PASS | |
| 6. Veracity | 6.12 | Glossary defs verified | NOT-TESTED | |
| 7. Nav & IA | 7.1 | Page in docs.json, no orphans | PASS | docs.json line 2505 |
| 7. Nav & IA | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Nav & IA | 7.3 | Portal/index routes to section | PASS | `v2/developers/navigator.mdx` and `index.mdx` exist |
| 7. Nav & IA | 7.4 | No structural orphans | PASS | |
| 7. Nav & IA | 7.5 | Audience journey complete | MIXED | Developer journey adequate; agent-builder route (Eliza) is named only by tutorial link |
| 7. Nav & IA | 7.6 | ≥3 cross-tab graduations | FAIL | Zero. See 4.10 |
| 7. Nav & IA | 7.7 | File in correct lane | PASS | Live in `v2/`, draft material in `_workspace/` |
| 7. Nav & IA | 7.8 | Naming conventions | PASS | No `-index` suffix |
| 7. Nav & IA | 7.9 | `_workspace/` TTL | N/A | |
| 7. Nav & IA | 7.10 | No stubs in nav | PASS | Page is 12.5 KB substantive |
| 7. Nav & IA | 7.11 | Resources structure | N/A | |
| 7. Nav & IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | All 7 internal links resolve (verified ls) |
| 8. Links | 8.2 | External links live | NOT-TESTED | github.com/elizaos/eliza not HTTP-verified this pass |
| 8. Links | 8.3 | Snippet imports resolve | PASS | `Divider.jsx`, `Tables.jsx` exist |
| 8. Links | 8.4 | Images load | N/A | No body images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Did not run render hook |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Governance | 9.1 | Human sign-off | N/A | Not at sign-off gate |
| 9. Governance | 9.2 | Consuming decisions in registry | N/A | |
| 9. Governance | 9.3 | Gate prereqs | N/A | |
| 9. Governance | 9.4 | Phase ordering | N/A | |
| 9. Governance | 9.5 | Findings before fixes | PASS | Review pass — no fixes yet |
| 9. Governance | 9.6 | Feedback routed | N/A | |
| 10. Completeness | 10.1 | Every tab job-list question has page | MIXED | "How do I pick batch vs real-time vs LLM?" — yes. "How do I decide between three real-time tools?" — partial (named, not differentiated) |
| 10. Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Hands off to quickstarts but no integrated end-to-end map |
| 10. Completeness | 10.3 | Persona paths unblocked | MIXED | Developer path OK; agent-builder secondary |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | No explicit "not in scope" callout |
| 10. Completeness | 10.5 | Self-containment | PASS | Page stands alone for orientation |
| 10. Completeness | 10.6 | Language paths | MIXED | curl example only; no TS/Python on a concept page (acceptable for evaluation) |
| 10. Completeness | 10.7 | Persona-specific guides present | N/A | Section-level concern |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI and agents on Livepeer" | PASS | |
| sidebarTitle | Yes | "AI and agents" | PASS | |
| description | Yes | "Three AI pipeline categories... developer entry points for each." | FAIL | 183 chars — over 160 limit (1.11) |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | evaluate | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | evaluate | PASS | |
| keywords | Yes | 11-item array | MIXED | `pipeline` alone is generic |
| og:image | Yes | /snippets/assets/site/og-image/en/developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Missing — `status: current` is not canonical |
| lastVerified | Yes | 2026-05-14 | PASS | |
| status | Yes | current | FAIL | Old-schema field — replace with `veracityStatus: verified` |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | Placement wrong — opening divider line 41 sits AFTER intro prose (lines 37–39), not after imports/before intro |
| `<Tabs>` / `<Tab icon>` | No | — | Recommended for "Developer tools for real-time AI" (lines 152–159) | Three sibling tool descriptions read as one prose block — should be three Tabs or three Cards |
| `<StyledSteps>` | No | — | N/A | No procedural body |
| `<Card>` / `<Columns cols={2}>` | No | Required for Related Pages footer (5.16) | Yes | **Missing entirely** — page ends at line 265 with bare prose |
| `<CustomCardTitle icon ...>` | No | Required inside nav Card | — | N/A — no Cards |
| Fenced code with icon + title | Partial (1 block) | Required where code present | — | line 193 has `icon="terminal"` but no `title` attribute |
| `<Note>` / `<Tip>` / `<Warning>` | `<Note>` line 181 | — | varies | `<Note>` used for what is a primary operational warning — should be `<Warning>` or in-body prose (fails 2.D7) |
| `<Accordion>` / `<Accordion icon>` | No | — | Recommended for "When not to use" + "GPU minimums" detail panels | Section-level missing |
| `<StyledTable>` | Yes (3×) | OK | — | Three tables exceeds 1–2 ceiling (5.24); two are reference-shaped (mid-page) |
| Custom snippet imports | `Divider.jsx`, `Tables.jsx` | — | — | No data imports — VRAM/GPU numbers hardcoded (fails 5.15) |

## Cross-page duplication and link gaps

- **OVERLAP — pipeline list**: lines 82–132 (8-row StyledTable of batch pipelines) almost certainly overlaps `v2/developers/build/ai-and-agents/ai-pipelines.mdx` and `model-support.mdx`. Authority should be one place — Learn references, Build owns.
- **OVERLAP — real-time tool descriptions**: lines 152–159 (ComfyStream, PyTrickle, Stream Pack one-line each) overlap their respective overview pages at `build/ai-and-agents/realtime-ai/{comfystream,pytrickle}/overview.mdx`.
- **LINK GAPS**:
  - `LivePaymentSender` interface (line 147) — no link to `livepeer/go-livepeer` source.
  - `aiModels.json` (referenced indirectly via "model support" link) — should be linked directly with the per-pipeline VRAM claims.
  - `livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ComfyUI-Stream-Pack` (lines 155–159) — repo names in code-fence but no anchor.
  - Trickle protocol spec — named line 157 inside PyTrickle description but unlinked.
  - Eliza plugin source repo (livepeer/eliza-livepeer) — implied via tutorial link, not direct.
  - **Cross-tab graduations absent**: nothing routes to Gateways (self-host AI gateway), Solutions (managed AI access), or About (LIP-92).
- **STRANDED**: page ends with line 265 — bare prose paragraph about "The key question..." with no Related Pages, no Next Step, no Card grid. Reader has no obvious next move except the in-body "Where to start:" lines scattered through sections.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | grep clean |
| US spellings | 0 | grep clean |
| Banned words | 0 | grep clean |
| Banned phrases | 1 | line 37: "Understanding which category fits your use case before building prevents rework." — paraphrase of banned "Understanding X is essential" pattern |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | description and body do not say "this page" |
| Deprecated terms | 0 | — |
| `<Note>` for primary content | 1 | line 181: `<Note>` carries a production-launch operational warning — primary content, not adjacent context |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Pipeline categories at a glance | 5 | 4 | 5 | 5 | 4 | **23** PASS |
| Batch AI pipelines | 5 | 4 | 5 | 5 | 5 | **24** PASS |
| Real-time AI | 5 | 4 | 5 | 5 | 5 | **24** PASS |
| Developer tools for real-time AI | 5 | 4 | 5 | 5 | 4 | **23** PASS |
| VTuber and agent avatar infrastructure | 5 | 4 | 4 | 5 | 4 | **22** PASS |
| LLM pipeline | 5 | 4 | 5 | 5 | 5 | **24** PASS |
| Choose your path | 3 | 3 | 4 | 4 | 4 | **18** FAIL (3.1) — generic. "AI workload selection" or "Pipeline selection matrix" would score higher |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 193 | bash | ✓ terminal | ✗ | NOT-LABELLED | FAIL 5.20 — missing `title=` attribute. FAIL 6.2 — no TESTED/NOT-TESTED label |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The stated outcome is "evaluate which AI pipeline category fits the workload". The page lists the three categories and routes to quickstarts, but never gives the developer a **decision tool that fires in <60 seconds**: e.g. "answer 3 questions → land on the right quickstart". The Choose-your-path table at line 214 is a 6-row lookup but requires the reader to already know terms like `live-video-to-video`, `LLM pipeline`, `BYOC`. A first-time evaluator hits a "now what?" wall between the per-category sections and the matrix.
- **Fix step:** Add a `<Tip>` or `<AccordionGroup>` decision-tree above the "Choose your path" table at line 212 with 3 short questions: (1) Is your input a live stream or a single file? (2) Do you need sub-second response? (3) Is the output text or media? Each leaf links to one quickstart. Replace the unannotated curl block at line 193 with a one-line "test it now" Try-It block using the existing public `dream-gateway.livepeer.cloud`.
- **Source/exemplar:** `v2/about/_workspace/reviews2/network/architecture.md` decision-block pattern; `.claude/references/layout/best-practice.md` Mental-model AccordionGroup section.

### Layer 2 — Composition
- **Gap:** Three sibling tool descriptions ComfyStream / PyTrickle / Stream Pack (lines 152–159) are three bold-led prose paragraphs in sequence — unscannable. No `<Tabs>`, no `<CardGroup>`, no comparison matrix. No `<AccordionGroup>` anywhere on a page that documents three pipeline categories with very different operational profiles. No Related Pages footer at EOF (5.16). Three StyledTables in a 12 KB page exceeds the 1–2 ceiling (5.24).
- **Fix step:** (a) Convert lines 152–159 into a `<Tabs>` block with `<Tab title="ComfyStream" icon="circle-nodes">`, `<Tab title="PyTrickle" icon="python">`, `<Tab title="Stream Pack" icon="boxes-stacked">`. Each tab carries the one-paragraph description plus the canonical repo link. (b) Move "VTuber and agent avatar infrastructure" detail (lines 161–179) into an `<Accordion title="VTuber and avatar pipelines" icon="user">` inside Real-time AI section — it's a deep-detail aside, not orientation content. (c) Add `<Columns cols={2}>` Related Pages block before EOF linking: `build/ai-and-agents/overview`, `build/ai-and-agents/realtime-ai/comfystream/overview`, Gateways AI Gateway setup, About protocol LIP-92.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` Related Pages format; `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab graduation links (fails 4.10 + 7.6). The page is the **first** evaluation surface a developer hits for AI on Livepeer, yet it offers no path to the Gateways tab for "I want to self-host the AI gateway", no path to Solutions for "I want managed AI access without running infrastructure", no path to About for "I want to understand LIP-92 / Treasury / SPE governance". Every outbound link stays inside `v2/developers/build/`. Upstream repos (`livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ComfyUI-Stream-Pack`, `livepeer/ai-runner`, `livepeer/go-livepeer`) are named in prose but not hyperlinked.
- **Fix step:** Add prerequisite block at top linking `v2/developers/concepts/landscape` and `v2/developers/concepts/infra-stack` (orientation prereqs). In each per-category section, add one anchor link to the upstream repo for that category (`livepeer/ai-runner` for Batch, `livepeer/comfystream` for Real-time, `livepeer/ai-runner` LLM runner for LLM). At EOF Related Pages, include cross-tab `<Card>`s pointing to: Gateways AI Gateway setup; Solutions managed AI offering; About LIP-92 + Treasury SPE governance overview.
- **Source/exemplar:** `livepeer/comfystream` README; `livepeer/ai-runner/aiModels.json`; `v2/about/governance/lip-overview.mdx` for the LIP-92 anchor.

### Layer 4 — Veracity and source authority
- **Gap:** Five factual claims need named sources: (a) "Per second of compute time (confirmed in the go-livepeer `LivePaymentSender` interface)" line 147 — name the interface file path and commit/tag. (b) VRAM minimums for 8 batch pipelines lines 82–132 — should cite `ai-runner/aiModels.json` per-pipeline default. (c) "30,000 LPT" Agent SPE figure line 165 — needs Treasury governance link. (d) Eliza ai16z attribution line 168 — needs the framework GitHub release tag where Livepeer plugin shipped. (e) Curl example line 193 against `dream-gateway.livepeer.cloud/llm` — has no TESTED label and no date.
- **Fix step:** For each claim, attach a footnote-style link or inline anchor: e.g. `[LivePaymentSender](https://github.com/livepeer/go-livepeer/blob/master/pm/sender.go)`, `[per-pipeline defaults](https://github.com/livepeer/ai-runner/blob/main/runner/aiModels.json)`. Replace `status: current` with `veracityStatus: verified` and add a TESTED label to the curl block.
- **Source/exemplar:** `livepeer/go-livepeer` repo; `livepeer/ai-runner/runner/aiModels.json`; the LIP-92 source PR.

### Layer 5 — Product-forward depth
- **Gap:** No production-readiness signal anywhere. The page says "LLM pipeline is currently in beta" line 191 but assigns no maturity to Batch (stable since 2023?) or Real-time (when did it ship?). No cost expectations — a developer leaves not knowing whether a single 1024×1024 SDXL generation costs $0.001 or $0.05. No "when NOT to use Livepeer for AI" — Livepeer is not the right call for sub-50ms LLM inference, very small images, or models requiring sustained guaranteed throughput. The Agent SPE / LLM SPE / Cloud SPE references read as protocol-governance trivia for a developer evaluation page.
- **Fix step:** Add a `<Badge>` row near the top: `<Badge>Batch — production</Badge>`, `<Badge variant="warning">Real-time — beta, breaking changes possible</Badge>`, `<Badge variant="warning">LLM — beta</Badge>`. Add a short "Cost expectation" callout per category with order-of-magnitude pricing (per image, per second of stream, per 1M tokens) and link to canonical pricing reference. Add a "When not to use" `<Accordion>` per category. Move SPE governance commentary to About / Solutions tab or compress to one line linking out.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` gateway-quickstart maturity-badge pattern; `v2/about/treasury` SPE pages for the SPE governance link target.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 9 / INFO 3
**Critical findings (1–5 max)**:
1. Missing Related Pages footer / Next Step CTA (5.16, 5.17). Page ends at line 265 with no outbound block — strands the reader.
2. Zero cross-tab graduation links (4.10, 7.6). All outbound links stay in `v2/developers/build/` — Gateways / Solutions / About absent.
3. Three sibling tool descriptions (lines 152–159) read as prose; missing `<Tabs>` or `<CardGroup>` (5.5).
4. `veracityStatus` field absent (1.8); page uses non-canonical `status: current` instead.
5. Critical operational warning at line 181 wrapped in `<Note>` (should be `<Warning>` or body prose) — fails 2.D7.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<Columns cols={2}>` Related Pages block + `<CustomDivider />` before it. Six `<Card>` entries: AI quickstart, ComfyStream overview, Gateways AI Gateway setup, Solutions managed AI, About LIP-92, ai-runner repo | EOF after line 265 | HIGH | M | check 5.16 / 5.17; `.claude/references/layout/best-practice.md` |
| 2 | Replace `status: current` with `veracityStatus: verified` | line 30 | HIGH | S | check 1.8 |
| 3 | Trim description from 183 → ≤160 chars: "The Livepeer network supports three AI pipeline categories — batch, real-time, and LLM — with their GPU profiles and entry points." | lines 4–7 | MEDIUM | S | check 1.11 |
| 4 | Convert lines 152–159 (three tool paragraphs) into `<Tabs>` with `<Tab title="ComfyStream" icon="circle-nodes">`, `<Tab title="PyTrickle" icon="python">`, `<Tab title="Stream Pack" icon="boxes-stacked">`. Each tab carries one paragraph + canonical repo link | 152–159 | HIGH | M | check 5.5 + 5.18; component matrix concept-page row |
| 5 | Convert `<Note>` at line 181 into `<Warning>` (primary operational content) | 181 | HIGH | S | check 2.D7 |
| 6 | Add `title="llm-test.sh"` to curl code block | line 193 | HIGH | S | check 5.20 |
| 7 | Add TESTED label and date to curl block, OR re-label NOT-TESTED with reason | line 193 | HIGH | S | check 6.2 |
| 8 | Add three maturity `<Badge>`s near top (Batch production / Real-time beta / LLM beta) | after line 39 | HIGH | M | check 4.15; `.claude/references/layout/exemplars.md` |
| 9 | Hyperlink the three upstream repos (`livepeer/comfystream`, `livepeer/pytrickle`, `livepeer/ComfyUI-Stream-Pack`) at first mention | lines 155, 157, 159 | MEDIUM | S | check 4.10 |
| 10 | Add inline source link for `LivePaymentSender` claim: `[LivePaymentSender interface](https://github.com/livepeer/go-livepeer/blob/master/pm/sender.go)` | line 147 | MEDIUM | S | check 6.1 |
| 11 | Add per-pipeline citation: `8-row VRAM table sourced from [aiModels.json](https://github.com/livepeer/ai-runner/blob/main/runner/aiModels.json)` above table at line 82 | line 81 | MEDIUM | S | check 6.1 + 5.15 |
| 12 | Replace "Understanding which category fits your use case before building prevents rework." with "Picking the right category before building avoids rework." | line 37 | MEDIUM | S | check 2.3 |
| 13 | Move "VTuber and agent avatar infrastructure" body (lines 161–179) into `<Accordion title="VTuber and avatar pipelines" icon="user">` inside Real-time AI | 161–179 | MEDIUM | M | check 5.5 |
| 14 | Rename heading "Choose your path" → "Pipeline selection matrix" or "AI workload selection" | line 212 | MEDIUM | S | check 3.1 |
| 15 | Reduce StyledTable count from 3 → 2: merge "Pipeline categories at a glance" (line 45) into the intro paragraph as a `<CardGroup>` quick map, keep "Batch pipelines" detail table and "Pipeline selection matrix" | 45–74 | MEDIUM | L | check 5.24 |
| 16 | Move `<CustomDivider />` at line 41 to before intro prose at line 37, after imports | 36–41 | INFO | S | check 5.26 |
| 17 | Trim `pipeline` from keywords array | line 22 | INFO | S | check 1.13 |
