# Review: byoc-quickstart.mdx

**Page**: `v2/developers/build/compute/byoc/byoc-quickstart.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `tutorial` (line 15)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 14,359
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

> Brief notes "pageType: instruction/quickstart" expected. Frontmatter says `tutorial`. Brief says either pageType is acceptable but flags MIXED — both pageTypes require Prerequisites + Steps + Verification; only the Verification handling differs slightly.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG block all present (lines 1-28) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 15) canonical. Brief mentions `instruction/quickstart` as alternative; either passes 1.2 |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `pageVariant: quickstart` recommended |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 17) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 27) — see 6.6 below for honesty check |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Wrap a Python function in a container..." action-led, 159 chars |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | line 7 `livepeer` too generic; rest specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "initialised" (line 102), "advertised" — UK |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | FAIL | Line 40: "By the end of this quickstart you'll have..." — second-person outcome, not subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | FAIL | Line 40: "Bring Your Own Container (BYOC)" — but `overview.mdx` line 4, 38 uses "Bring Your Own Compute". Lock one expansion across all BYOC pages |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero outside code |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Line 40 "you'll have"; line 308 "The job routed through..." (entity-led — OK); line 339 "The full job lifecycle ran" (OK). Mixed but opening is reader-led |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "trickle protocol" (line 65, 345) named not linked; "FrameProcessor contract" (line 347) defined inline ✓; "Per-second compute" (line 349) linked ✓ |
| 2. Voice | 2.22 | Terminology lock | FAIL | Same BYOC expansion issue (see 2.11) |
| 2. Voice | 2.D1 | Code-first opening | FAIL | Body opens with ~150 words of prose (lines 40-58) before any code. Quickstart promise is "twenty-five minutes" — a copyable command should be visible above the fold |
| 2. Voice | 2.D2 | API/method has code | PASS | Every API/method has accompanying code |
| 2. Voice | 2.D3 | Versions explicit | FAIL | Line 53: "Docker Engine 24 or later" ✓; line 54: "Python 3.10 or later" ✓; line 128: `FROM python:3.11-slim` pinned ✓; BUT `git+https://github.com/livepeer/pytrickle.git` (line 136) installs HEAD with no tag pin; no go-livepeer version specified; no PyTrickle release version |
| 2. Voice | 2.D4 | Errors in main content | PASS | `## Common Errors` AccordionGroup (lines 353-377) is in main flow before Next Steps |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | MIXED | Line 57: `<Note>` carries primary content ("This quickstart assumes you completed local development"). Should be a Prerequisites bullet, not a Note |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Next Steps" (line 381) FAILS — banned-weak |
| 3. Headings | 3.2 | Banned/weak terms | FAIL | "Next Steps" (line 381) — banned per 3.2 (avoid list) |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "Container Build", "Container Isolation Test", "Network Wiring", "First Job", "Job Lifecycle", "Common Errors" |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC Quickstart" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | Task-oriented for tutorial |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | One outcome: first BYOC job in 25 minutes |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer run their first BYOC job" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | Forward chain to architecture/production OK; reverse chain broken — parent `compute/overview.mdx` missing |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages footer + final ComfyStream pointer |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | "Required Tools" heading (line 46) used instead of "Prerequisites". Content covers tools, runtimes, terminals — but rubric (5.2 tutorial matrix) requires "Prerequisites" heading. GPU/CUDA prereq absent (page is CPU-only but doesn't say "to extend with GPU, add..." until line 145 inline) |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "no GPU, no Arbitrum wallet, no API keys" (line 55) |
| 4. Structure | 4.7 | Info type per section | PASS | Procedural |
| 4. Structure | 4.8 | No content duplication | MIXED | FrameProcessor class skeleton (lines 78-119) overlaps `pytrickle/frame-processor.mdx` per the section-1 review. Acceptable as a teaching artifact but should not be the canonical reference |
| 4. Structure | 4.9 | Section orientation | FAIL | No parent compute root |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links. All 4 Next Steps cards stay inside `developers/` |
| 4. Structure | 4.11 | Discord test | PASS | Page answers "how do I run my first BYOC job" |
| 4. Structure | 4.12 | Page size | PASS | 14.3 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Off-chain vs on-chain trade-off (line 339) named ✓; container size, cold start, debugging cost (brief specifies) NOT named anywhere |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | MIXED | All bash/python/dockerfile blocks tagged ✓; but expected-output blocks at lines 174-177 and 302-306 have NO language tag (bare ` ``` `) |
| 4. Structure | 4.18 | Code-first opening | FAIL | See 2.D1 |
| 4. Structure | 4.19 | Error states main | PASS | Common Errors in flow |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | Tutorial template; Verification section absent as H2 — embedded in Step "Inspect the result" (line 299) |
| 5. Layout | 5.2 | Required sections | FAIL | Tutorial matrix requires "Prerequisites + Steps + Verification + Related". This page has "Required Tools" (rename of Prereqs), Steps ✓, embedded verification only (no Verification H2), and "Next Steps" (rename of Related). The Verification H2 is materially absent |
| 5. Layout | 5.3 | Approved components | PASS | All approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Procedural → uses `<Steps>` (FAIL 5.21, see below); orchestrator flag table (lines 233-237) raw markdown (FAIL 5.23) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 25) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view | PASS | No language variants needed |
| 5. Layout | 5.15 | Data imports | FAIL | go-livepeer CLI flags (lines 222-231) hardcoded; should pull from `snippets/data/golivepeer/byoc-flags.json` or similar shared snippet |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | BOTH present: closing prose at line 398 ("For ComfyUI-based real-time pipelines, ComfyStream is already BYOC-compatible. See ComfyStream as BYOC.") AND a `## Next Steps` CardGroup at line 381 |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` (line 383) not `<Columns cols={2}>`. Plain `<Card>` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon | FAIL | All 5 `<Accordion>` (lines 356, 359, 362, 365, 368) missing `icon` prop |
| 5. Layout | 5.20 | Code block icon+title | FAIL | 14+ fenced code blocks all missing `icon` + `title` attributes (every bash/python/dockerfile block from line 69 through 373) |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Uses raw `<Steps>` (lines 67, 164, 207, 262) — 4 raw Steps blocks. Rubric requires `<StyledSteps>` with `iconColor` + `titleColor`. Section-1 exemplar `workflow-authoring.mdx` line 55 |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Next Steps Cards (lines 384-395) plain `<Card title icon href>`, not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | FAIL | Orchestrator flags table (lines 233-237) raw markdown — should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 markdown table |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 4 separate `<Steps>` containers + 1 `<AccordionGroup>` + 1 `<CardGroup>` — busy but defensible for a multi-phase quickstart |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider line 38; no divider between intro and first H2; dividers between H2 sections; before Related (line 379) ✓ |
| 5. Layout | 5.27 | Mermaid | FAIL | Job Lifecycle (lines 327-337) is an ASCII tree. Brief states "BYOC is Persona 3 territory" — a Mermaid sequenceDiagram of gateway→orch→container→back is essential. Section-1 same finding |
| 5. Layout | 5.28 | Import ordering | PASS | element → element → wrapper |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | Tutorial |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "trickle protocol" cited without spec link (line 65); "per-second compute under per-second-compute" link present ✓; orchestrator log output (lines 314-319) plausible but not verified against actual go-livepeer log format |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No `TESTED:` label on any of 14+ code blocks. veracityStatus `verified` overstates this |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | 921600 bytes = 640×480×3 ✓ |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `verified` (line 27) overstated — installs unpinned (line 136), code blocks not TESTED, log output not verified |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `git+https://github.com/livepeer/pytrickle.git` HEAD install (line 136); no PyTrickle release tag; no go-livepeer version |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | First "PyTrickle" mention (line 65, line 136 install) not linked to `livepeer/pytrickle` repo as prose anchor (only as install URL). go-livepeer CLI flags not cited |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent compute/overview missing (IA gap) |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | No section portal |
| 7. Nav/IA | 7.4 | Orphans | MIXED | Page itself fine; section root is empty |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona-3 activation moment ✓; missing graduation to Orchestrators / Gateways tabs |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | MIXED | Two LinkArrows at line 42 BOTH point to `transcoding-direct-quickstart` — duplicate href, second was probably intended for an SDK page. BUG |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippets | PASS | CustomDivider imported (line 31) ✓ |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | "Run my first BYOC job" answered |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Build → isolate-test → wire → first job → verify |
| 10. Completeness | 10.3 | Persona paths | PASS | Persona-3 |
| 10. Completeness | 10.4 | Scope | PASS | CPU only, off-chain, 25min — bounded |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | PASS | Python primary, bash for ops |
| 10. Completeness | 10.7 | Persona guides | MIXED | No troubleshooting beyond Common Errors |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC Quickstart" | PASS | 2 words |
| sidebarTitle | Yes | "BYOC Quickstart" | PASS | |
| description | Yes | "Wrap a Python function..." | PASS | 159 chars, action-led |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | MIXED | `livepeer` generic |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | FAIL | Overstated; should be `unverified` until installs pinned + code TESTED |
| status | Yes | current | FAIL | Legacy |
| lastVerified | Yes | 2026-05-12 | PASS | |
| pageVariant | No | — | INFO | `quickstart` recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | — | Imported ✓; placement OK |
| `<CenteredContainer>` | Yes (1×) | — | — | Header CTA ✓ |
| `<Tip>` | Yes (1×) | Recommended | — | OK |
| `<Note>` | Yes (1×, line 57) | Avoid for primary | — | Carries prereq content — should be a Prerequisites bullet (FAIL 2.D7) |
| `<Steps>` / `<Step>` | Yes (4× blocks) | Required (tutorial) | — | RAW Steps (FAIL 5.21) — needs StyledSteps + iconColor + titleColor |
| `<StyledSteps>` | No | Required | — | Missing |
| `<AccordionGroup>` / `<Accordion>` | Yes (1 + 5) | Recommended | — | All 5 Accordions missing `icon` (FAIL 5.19) |
| `<CardGroup>` | Yes (1×) | — | — | Should be `<Columns>` (FAIL 5.17) |
| `<Card>` | Yes (4×) | Required | — | All lack `<CustomCardTitle>` (FAIL 5.22) |
| Fenced code w/ icon+title | No | Required | — | 14+ blocks all missing both (FAIL 5.20) |
| `<StyledTable>` | No | Required for data tables | — | Markdown table at 233-237 (FAIL 5.23) |
| `<Tabs>` | No | — | — | Not needed |
| `<LinkArrow>` | Yes (4×) | — | — | line 42 duplicate href |
| Mermaid | No | Recommended (5.27) | — | ASCII tree at 327-337 should be Mermaid |

## Cross-page duplication and link gaps

- **OVERLAP**: FrameProcessor class skeleton (lines 78-119) overlaps `pytrickle/frame-processor.mdx` reference page. Per section-1 review, frame-processor.mdx is the canonical home. This quickstart should keep the inline code (teaching value high) but link out to the reference for full signature.
- **OVERLAP**: Job Lifecycle ASCII (lines 327-337) overlaps `byoc-architecture.mdx` "Three-layer architecture" ASCII (lines 40-53). Both pages duplicate the same conceptual flow at lower fidelity. Promote to a single Mermaid in `byoc-architecture.mdx` and link from here.
- **LINK GAPS**:
  - Line 42: two LinkArrows BOTH point to `/v2/developers/build/video/transcoding-direct-quickstart`. The second was clearly meant for an SDK page (`/v2/developers/build/compute/byoc/byoc-sdk` likely intended).
  - "trickle protocol" (line 65, 345) — no link; should point to PyTrickle overview or protocol spec.
  - `livepeer/pytrickle` repo named only inside `pip install git+https://github.com/livepeer/pytrickle.git` (line 136), never as a prose anchor.
  - "go-livepeer" CLI flags table (lines 233-237) — no link to go-livepeer flag reference.
  - "AI Service Registry on-chain" referenced on `overview.mdx` but not linked from this quickstart's "production deployment" line (40).
- **STRANDED**: After successful first job, reader's natural next question is "how do I publish this as a real capability on mainnet?" The Next Steps cards mention architecture/production but not the orchestrator-side registration flow on the Orchestrators tab.
- **IA-DRIFT**: section root missing.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 1 | line 40: "By the end of this quickstart you'll have..." — second-person outcome opener (FAIL 2.5, MIXED 2.13) |
| Self-reference | 1 | line 40: "this quickstart" — borderline self-reference in intro |
| Deprecated terms | 0 | — |
| Terminology collision | 1 | line 40: "Bring Your Own Container" vs `overview.mdx` "Bring Your Own Compute" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Required Tools | 4 | 4 | 5 | 5 | 4 | 22 |
| Container Build | 5 | 4 | 5 | 5 | 5 | 24 |
| Container Isolation Test | 5 | 4 | 5 | 5 | 4 | 23 |
| Network Wiring | 4 | 4 | 5 | 5 | 5 | 23 |
| First Job | 4 | 4 | 5 | 5 | 5 | 23 |
| Job Lifecycle | 5 | 4 | 5 | 5 | 5 | 24 |
| Common Errors | 4 | 4 | 4 | 5 | 4 | 21 |
| Next Steps | 1 | 1 | 3 | 4 | 5 | 14 — banned/weak (3.2) |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 69 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 77 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 127 | dockerfile | ✗ | ✗ | NOT-TESTED | FAIL 5.20; `python:3.11-slim` pinned ✓ but `pytrickle.git` HEAD |
| 149 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 168 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 174 | (none) | ✗ | ✗ | — | Output sample; missing language tag (FAIL 4.17) |
| 185 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 193 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 211 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 221 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 243 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 266 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 294 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 302 | (none) | ✗ | ✗ | — | Output sample; missing tag (FAIL 4.17) |
| 314 | (none) | ✗ | ✗ | — | Log output sample; missing tag (FAIL 4.17) |
| 327 | (none) | ✗ | ✗ | — | ASCII flow; should be Mermaid (5.27) |
| 369 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Quickstart promises "first BYOC job in 25 minutes" but opens with 150 words of context before any copyable command. A Persona-3 reader scanning for the activation moment doesn't see a command until line 69. Also missing: a "what does success look like" verification block as a dedicated H2 — the success signal is currently embedded inside Step 2 of "First Job" (line 299). Reader hits a wall at line 308 ("Green channel sum: 7372800") with no `## Verification` heading to confirm "yes, this is what should have happened".
- **Fix step:** Move the `mkdir byoc-quickstart && cd byoc-quickstart` command (line 69) plus the project layout snippet to immediately after line 36 `<Tip>`. Add `## Verification` H2 after "First Job" (after line 321) with three concrete confirmation bullets: "(1) Python client received HTTP 200 with 921600-byte response; (2) Orchestrator log shows `BYOC capability registered: green-tint-cpu`; (3) Green-channel byte sum > 0 confirms transformation applied". Move embedded Step 2 verification content into this new H2.
- **Source/exemplar:** Exemplar review `ai-jobs-direct-quickstart.md` Layer 1 same finding; `_packet/component-matrix.md` tutorial pageType row requires `Verification` H2.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` × 4 instead of `<StyledSteps>` (5.21). Every code block missing `icon` + `title` (5.20). Every `<Accordion>` missing `icon` (5.19). Job Lifecycle ASCII (lines 327-337) instead of Mermaid (5.27). Orchestrator flags table markdown (5.23). Related Pages format wrong (5.17 + 5.22). `<Note>` at line 57 carries primary prereq content (2.D7).
- **Fix step:** Replace all four `<Steps>` (lines 67, 164, 207, 262) with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` and `<Step>` with `<StyledStep title="..." icon="...">`. Add `icon="terminal"` + `title="<file>"` to every bash block; `icon="code"` + `title="processor.py"` etc. to python blocks; `icon="docker"` + `title="Dockerfile"` to dockerfile block. Add `icon="circle-question"` to every `<Accordion>`. Convert ASCII lifecycle (327-337) to a Mermaid `sequenceDiagram` with `MermaidColours.jsx`. Convert flags table (233-237) to `<StyledTable>`. Replace `<CardGroup>` at line 383 with `<Columns cols={2}>` and `<CustomCardTitle>`. Demote the `<Note>` at line 57 — its content ("This quickstart assumes...") should become a Prerequisites bullet.
- **Source/exemplar:** `realtime-ai/comfystream/workflow-authoring.mdx` line 55 (correct StyledSteps in repo); section-1 review same pattern.

### Layer 3 — Cross-page integration
- **Gap:** Line 42 has a duplicate-href bug — both LinkArrows point to `transcoding-direct-quickstart`. Reader who clicks the "SDK" anchor lands on the wrong page. No prose link to `livepeer/pytrickle` repo (only inside install URL). Common Errors describes orchestrator log output but doesn't link to go-livepeer logging documentation. Next Steps cards stay inside `developers/build/compute/byoc/`. No graduation to Orchestrators tab ("publish this capability on mainnet") or Gateways tab ("route from a real gateway").
- **Fix step:** Fix line 42 second LinkArrow href — likely target is `/v2/developers/build/compute/byoc/byoc-sdk`. Add prose link to `livepeer/pytrickle` at first mention (line 65 "PyTrickle wraps that class"). In the Next Steps remediation, swap one card for `/v2/orchestrators/setup/capabilities` (or equivalent — the page that explains operator-side BYOC registration). Add card to `/v2/gateways/setup/connect` (the gateway-side path for routing to BYOC). Cite go-livepeer log format / source in Common Errors first accordion.
- **Source/exemplar:** `_packet/voice-copy-checklist.md` first-use definition rule; brief upstream repo list (muxionlabs/byoc-sdk, muxionlabs/livepeer-app-pipelines, byoc-example-apps, livepeer/scope-runner — none currently linked).

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus: verified` (line 27) overstated. PyTrickle install (line 136) is git HEAD — `pip install git+https://github.com/livepeer/pytrickle.git` — no tag, no commit pin. Reader who runs this in three months may get a different API surface. Orchestrator log output (lines 314-319) is plausible but not verified against actual go-livepeer log format — log line prefixes `I0000` are glog-style which is correct, but the specific messages may not match the running binary. Expected output blocks (174-177, 302-306) have NO TESTED label and NO language tag. Per brief: BYOC PR #3641 (per-second compute) should be cited near line 349 — currently only references the `/per-second-compute` doc, not the upstream PR.
- **Fix step:** (a) Demote `veracityStatus: verified` → `veracityStatus: unverified` (line 27) OR pin everything first. (b) Pin PyTrickle install (line 136): `pip install git+https://github.com/livepeer/pytrickle.git@<tag>` with `{/* REVIEW: confirm latest PyTrickle tag */}` placeholder. (c) Label every code block: `{/* TESTED: 2026-05-XX against go-livepeer v0.7.X, PyTrickle <tag> */}` or `NOT-TESTED: reason`. (d) Add language tag `text` to output blocks at 174, 302, 314. (e) Cite BYOC PR #3641 at line 349: "Per-second compute model (BYOC [PR #3641](https://github.com/livepeer/go-livepeer/pull/3641))".
- **Source/exemplar:** `_workspace/audit-2026-05-12/task-3-rewrite-scope.md` PR #3641; section-1 review same pattern.

### Layer 5 — Product-forward depth
- **Gap:** Quickstart succeeds, then the reader is dropped at "Now go read architecture and production". No "what could go wrong scaling this up", no "rough cost of running this in production", no maturity signal for the BYOC mechanism itself. The brief specifies container size, cold start, debugging cost as the three trade-offs — this quickstart, which is the activation moment for the entire BYOC pipeline, mentions none of them. The reader builds confidence in 25 minutes, then walks straight into trade-offs they didn't know existed.
- **Fix step:** Add a `<Tip>` or `<Warning>` block after "Job Lifecycle" (before Common Errors, around line 350) titled "Before mainnet: three trade-offs": (1) "Container size: this image is ~200 MB. GPU pipelines run 4-8 GB; cold-start 30s-2min versus 0s for native ai-runner"; (2) "Debugging: orchestrator log forwarding is the only window into your container at runtime; structured logs help"; (3) "GPU competition: warm BYOC models share GPU with other warm models — expect 20-40% throughput reduction vs dedicated GPU". Add `<Badge>Mainnet — Phase 4 — per-second compute</Badge>` near the title.
- **Source/exemplar:** `_workspace/audit-2026-05-12/task-3-rewrite-scope.md`; brief explicit on these three trade-offs; `.claude/references/layout/exemplars.md` maturity badge pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 11 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` × 4 instead of `<StyledSteps>` (5.21); 14+ code blocks missing `icon` + `title` (5.20); 5 `<Accordion>` missing `icon` (5.19). Persona-3 densest path; layout debt is heaviest here.
2. No `## Verification` H2 — tutorial pageType matrix requires it (5.2); current verification embedded inside Step 2 of "First Job".
3. Related Pages double-up: closing prose at line 398 AND `<CardGroup>` (5.16); CardGroup not Columns + plain Cards (5.17, 5.22).
4. `veracityStatus: verified` overstated — PyTrickle install at HEAD (line 136), zero TESTED labels, log output unverified (6.6, 6.8).
5. Line 42 duplicate-href bug — two LinkArrows both pointing to `transcoding-direct-quickstart`. Likely the second should be `/v2/developers/build/compute/byoc/byoc-sdk`.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace all four `<Steps>` blocks with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` + `<StyledStep title="..." icon="...">` | 67, 164, 207, 262 | HIGH | M | check 5.21; `workflow-authoring.mdx` line 55 |
| 2 | Add `icon` + `title` to every fenced code block (14 blocks) | 69, 77, 127, 149, 168, 185, 193, 211, 221, 243, 266, 294, 369 | HIGH | M | check 5.20 |
| 3 | Add `icon="circle-question"` to every `<Accordion>` (5 places) | 356, 359, 362, 365, 368 | HIGH | S | check 5.19 |
| 4 | Add `## Verification` H2 after Step 2 of "First Job"; move embedded verification content into it; add three explicit confirmation bullets | after 321 | HIGH | M | check 5.2 |
| 5 | Replace `<CardGroup cols={2}>` (line 383) with `<Columns cols={2}>` and `<CustomCardTitle icon="..." title="..." horizontal />` per card; rename H2 "Next Steps" → "Related Pages" | 381-396 | HIGH | M | check 5.17, 5.22, 3.2 |
| 6 | Delete closing ComfyStream pointer at line 398 (5.16 forbids dual) — move that link into the Related Pages cards | 398 | HIGH | S | check 5.16 |
| 7 | Fix line 42 duplicate href — the second LinkArrow should likely point to `/v2/developers/build/compute/byoc/byoc-sdk` | 42 | HIGH | S | check 8.1 |
| 8 | Demote `<Note>` at line 57 — move prereq content into the Prerequisites/Required Tools bullets above | 57 | HIGH | S | check 2.D7 |
| 9 | Rename H2 "Required Tools" → "Prerequisites" (tutorial matrix requires this heading); keep bullets, add explicit GPU note | 46 | MEDIUM | S | check 5.2, 4.5 |
| 10 | Pin PyTrickle install: `pip install git+https://github.com/livepeer/pytrickle.git@<tag>` with `{/* REVIEW: confirm latest tag */}` | 136 | HIGH | S | check 2.D3, 6.8 |
| 11 | Demote `veracityStatus: verified` → `unverified` OR add `TESTED:` labels to every code block with date and go-livepeer version | 27 | HIGH | M | check 6.6 |
| 12 | Add `text` language tag to expected-output blocks at 174, 302, 314 | 174, 302, 314 | MEDIUM | S | check 4.17 |
| 13 | Replace Job Lifecycle ASCII (327-337) with Mermaid `sequenceDiagram` using `MermaidColours.jsx` | 327-337 | HIGH | M | check 5.27 |
| 14 | Convert orchestrator flags markdown table (233-237) to `<StyledTable>` | 233-237 | MEDIUM | S | check 5.23 |
| 15 | Lock BYOC expansion across all BYOC pages — pick "Bring Your Own Container" or "Bring Your Own Compute"; propagate | 40, sibling pages | HIGH | M | check 2.11, 2.22 |
| 16 | Add prose link to `livepeer/pytrickle` repo at first mention (line 65) | 65 | HIGH | S | check 6.10 |
| 17 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/orchestrators/setup/capabilities`, `/v2/gateways/setup/connect`, `/v2/developers/guides/payments/per-second-compute` | 383-396 | HIGH | M | check 4.10, 7.6 |
| 18 | Add §"Trade-offs" `<Tip>` or `<Warning>` block before Common Errors: container size / cold start, debugging cost, GPU resource competition | before 353 | HIGH | M | check 4.15; task-3-rewrite-scope.md |
| 19 | Cite BYOC PR #3641 near line 349 (per-second compute) | 349 | MEDIUM | S | check 6.8; brief |
| 20 | Move first copyable bash command above the fold (after line 36 `<Tip>`) | 36-69 | MEDIUM | M | check 2.D1, 4.18 |
| 21 | Rewrite line 40 opener subject-led: "BYOC packages custom Python or Go inference behind the Livepeer trickle protocol..." | 40 | MEDIUM | S | check 2.5, 2.13 |
| 22 | Remove `status: current` legacy field | 25 | MEDIUM | S | check 5.7 |
| 23 | Add `pageVariant: quickstart` to frontmatter | 15 | INFO | S | check 1.3 |
| 24 | Drop `livepeer` keyword | 7 | INFO | S | check 1.13 |
| 25 | Extract go-livepeer CLI flags (lines 222-231) to shared snippet `snippets/data/golivepeer/byoc-flags.json` | 222-231 | INFO | M | check 5.15 |
