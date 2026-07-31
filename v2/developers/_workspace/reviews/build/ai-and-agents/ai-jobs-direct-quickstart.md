# Review: ai-jobs-direct-quickstart.mdx

**Page**: `v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 9,340
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | All present (lines 1-28) |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 15) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | Not used (rubric says pageVariant `quickstart` would be appropriate here) |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` (line 17) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 27) |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Make your first AI inference call against the Livepeer network in under ten minutes..." 158 chars, action-led |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer", "ai gateway api", "quickstart", "inference", "sdk" — `livepeer` and `sdk` too generic per 1.13 |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | Line 40 opens "By the end of this quickstart you'll have..." — second-person outcome, not subject-led. Rubric (2.5) prefers subject ("The Livepeer AI gateway..."); existing voice rules permit outcome-first for tutorials |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | |
| 2. Voice | 2.12 | Em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | MIXED | Line 40 "you'll have"; line 250 "You now have a working..." — both reader-led not entity-led |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | "Cloud SPE Community Gateway" line 42 defines |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | FAIL | Body opens with 100 words of prose (lines 40-43) before any code; the first code block is at line 66 inside Step 1. For a 10-minute quickstart, a single curl line should sit visibly above the fold |
| 2. Voice | 2.D2 | API/method has code | PASS | All endpoints have curl + SDK examples |
| 2. Voice | 2.D3 | Versions explicit | FAIL | Line 52: "Node.js 20 or later"; line 53: "Python 3.11 or later" — OK. But SDK install commands (lines 149, 177) say `npm install @livepeer/ai` and `pip install livepeer-ai` with no version pin; the alpha-stage SDK noted on `ai-sdks-overview` requires explicit pinning |
| 2. Voice | 2.D4 | Errors in main content | PASS | Common Errors AccordionGroup (lines 229-242) is in main flow, before Next Steps |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Required Tools" (22), "First Call" (22), "SDK Path" (22), "Pipeline Models" (22), "Common Errors" (21), "Next Steps" (avoid — see 3.2) |
| 3. Headings | 3.2 | Banned/weak terms | FAIL | "Next Steps" (line 252) |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "AI Jobs Direct Quickstart" — 4 words (rubric 1-3) |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer run their first AI inference call" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | MIXED | "Required Tools" section (line 46) lists curl / node / python but no dedicated "Prerequisites" heading per pageType matrix (instruction = Prerequisites + Steps + Next Steps required). Rubric tolerates the rename if content present, but "Required Tools" is weaker than "Prerequisites" for clarity |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Production callout (lines 244-246) routes elsewhere |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | MIXED | curl + JS + Python examples (lines 65-108) duplicate the SDK examples (lines 149-198) — same request shape three times before SDKs, twice after. Tight quickstart would tabify both blocks once |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links. Only internal `developers/` references; no Solutions (managed gateway), no Gateways (self-host), no About (protocol) |
| 4. Structure | 4.11 | Discord test | PASS | |
| 4. Structure | 4.12 | Page size | PASS | 9.3 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Production warning (line 244) names production limit of community gateway but does not name cost, rate limit numbers, or response-time SLO |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | Every block has `bash`, `js`, `python`, `ts`, or `json` |
| 4. Structure | 4.18 | Code-first opening | FAIL | See 2.D1 |
| 4. Structure | 4.19 | Error states main | PASS | AccordionGroup in main flow |
| 4. Structure | 4.20 | API/method has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial pageType; rubric matrix requires "Prerequisites + Steps + Verification + Related" — Verification step absent (only an in-Step download instruction at line 130) |
| 5. Layout | 5.2 | Required sections | FAIL | No dedicated "Verification" section. Tutorial pageType matrix requires it explicitly |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Pipeline Models table (line 207) is markdown, should be `<StyledTable>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 25) legacy |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | MIXED | "Pipeline Models" reference data appears mid-flow at line 205, AFTER the Steps and SDK Path — placement is fine; but the SDK Path (line 141) comes AFTER First Call's three-tab curl/JS/Python examples (lines 64-109). Either Tabs-in-Step is enough OR SDK Path is the primary — having both is duplication |
| 5. Layout | 5.14 | Multi-view | PASS | Tabs for languages |
| 5. Layout | 5.15 | Data imports | FAIL | Model IDs (`ByteDance/SDXL-Lightning`, `SG161222/RealVisXL_V4.0_Lightning`, ...) hardcoded in prose and curl bodies; should pull from a shared `snippets/data/ai-runner/warm-models.json` or similar |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Uses raw `<Steps>` (line 60) — rubric 5.21 requires `<StyledSteps>` with `iconColor` + `titleColor` props (see `workflow-authoring.mdx` line 55 for in-repo correct usage) |
| 5. Layout | 5.18 | Tab icon prop | FAIL | All 5 `<Tab>` elements (lines 65, 77, 93, 146, 174) missing `icon` prop. Should be `icon="terminal"` for curl, `icon="js"` for Node, `icon="python"` for Python |
| 5. Layout | 5.19 | Accordion icon | FAIL | All 4 `<Accordion>` (lines 230, 233, 236, 239) missing `icon` prop |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 9 fenced code blocks (lines 66, 78, 94, 115, 131, 149, 155, 177, 183) missing icon+title |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Next Steps Cards (lines 255-266) use plain `<Card title="..." icon="..." href="...">` not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | FAIL | Lines 48-53 (Pick one of the three paths) is a bullet list, OK; line 207 ("Pipeline Models" table) is raw markdown — should be `<StyledTable>` |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Both present: closing prose at line 250 ("You now have a working inference call... The [AI pipelines]... documents all nine batch endpoints") AND a "Next Steps" CardGroup at line 252 |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `<Card>` not `<CustomCardTitle>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 markdown table on page |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 4 separate `<Steps>` containers + 1 standalone `<Tabs>` block + 1 `<AccordionGroup>` — busy but defensible for a tutorial |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Dividers OK |
| 5. Layout | 5.27 | Mermaid | N/A | No diagram |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | tutorial |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Two models are kept warm" — no link to `aiModels.json` or operator config |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No labels on 9 code blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | `verified` claimed but unpinned SDK installs |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | SDK installs `@livepeer/ai` and `livepeer-ai` unpinned; both in alpha (per `ai-sdks-overview.mdx` line 35-36) — pinning required |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | line 2517 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | None |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | All resolve (navigator, ai-pipelines, ai-sdks-overview, model-support, ai-image-generation-app all verified) |
| 8. Links | 8.2 | External | NOT-TESTED | `dream-gateway.livepeer.cloud` not curl-tested in review |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | PASS | bash + JS + Python all present |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI Jobs Direct Quickstart" | MIXED | 4 words; rubric prefers 1-3 |
| sidebarTitle | Yes | "AI Jobs Quickstart" | PASS | |
| description | Yes | "Make your first AI inference call..." | PASS | 158 chars |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | MIXED | `livepeer`, `sdk` too generic |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | Yes | verified | PASS | |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy field |
| pageVariant | No | — | INFO | `pageVariant: quickstart` recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | — | OK |
| `<Tabs>` / `<Tab icon>` | Yes (2 Tabs blocks, 5 Tab children) | Recommended | — | All 5 Tabs missing `icon` prop (check 5.18 FAIL) |
| `<Steps>` / `<Step>` | Yes (1 block) | Required (tutorial) | — | RAW Steps (FAIL 5.21) — needs StyledSteps + iconColor + titleColor |
| `<StyledSteps>` | No | Required | — | Missing |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup not Columns |
| `<CustomCardTitle>` | No | Required for nav Cards | — | All Next Steps cards plain |
| Fenced code w/ icon+title | No | Required | — | All 9 missing |
| `<AccordionGroup>`/`<Accordion>` | Yes (1+4) | Recommended | — | All 4 Accordions missing `icon` |
| `<StyledTable>` | No | Required for data tables | — | Pipeline Models table raw |
| `<Warning>` | Yes (line 244) | — | — | OK |
| `<Tip>` | Yes (line 35, header CTA) | — | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: First-call curl example in three languages (lines 65-108) + SDK examples (lines 149-198) cover the same single endpoint twice. Tightening either into the other would cut ~80 lines without losing instruction value.
- **OVERLAP**: Common Errors AccordionGroup (lines 229-242) overlaps with `ai-pipelines.mdx` operational notes (lines 301-307); should cross-link rather than re-state.
- **LINK GAPS**: No link to `livepeer/ai-runner` repo when "ai-runner" is named (line 207 only refers to it). No link to `livepeer-ai-js` or `livepeer-ai-python` repos when SDK packages are installed. No link to `dream-gateway.livepeer.cloud` operator (Cloud SPE) page or status page.
- **STRANDED**: Page assumes reader will move to `ai-pipelines` next, but the production path (paid gateway, rate-limit, auth) is buried in a Warning at line 244. Reader who hits a rate-limit has no clear "what to do next".

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Required Tools | 4 | 4 | 5 | 5 | 4 | 22 |
| First Call | 4 | 4 | 5 | 5 | 4 | 22 |
| SDK Path | 4 | 4 | 4 | 5 | 5 | 22 |
| Pipeline Models | 4 | 4 | 5 | 5 | 5 | 23 |
| Common Errors | 4 | 4 | 4 | 5 | 4 | 21 |
| Next Steps | 1 | 1 | 3 | 4 | 5 | 14 — banned/weak |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 66 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 78 | js | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 94 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 115 | json | ✗ | ✗ | — | response example, not executable |
| 131 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 149 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; SDK install unpinned |
| 155 | ts | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 177 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; SDK install unpinned |
| 183 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The "first AI inference in under ten minutes" promise is the killer outcome. Yet the page opens with 100 words of context (lines 40-43) before any code. A scanning developer arriving at a quickstart needs ONE curl line visible above the fold and a "what does success look like" image of the result.
- **Fix step:** Move the bash curl block (lines 66-75) to immediately after the opening Tip (line 35). Wrap it in `<CodeBlock title="First call" icon="terminal">` so it scans as "the thing to copy". Keep the context paragraph but push it to below the code as "What this does". Add a `<Frame>` showing the generated SDXL coffee-shop image (since the result of a t2i call is itself a verification image).
- **Source/exemplar:** Mintlify pattern: tutorial pages open with the literal command. See `comfystream/comfystream-quickstart.mdx` as an in-repo counter-example (also has the prose-first issue) — both should adopt code-first opening.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` instead of `<StyledSteps>` (5.21 FAIL). No `icon` on any `<Tab>` (5.18 FAIL). No `icon` on any `<Accordion>` (5.19 FAIL). All 9 code blocks lack icon+title (5.20 FAIL). Next Steps uses `<CardGroup>` not `<Columns>` (5.17 FAIL). Verification section absent (5.2 FAIL).
- **Fix step:** Replace `<Steps>` with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` and `<Step>` with `<StyledStep title="..." icon="...">`. Add `icon="terminal"` to curl Tab, `icon="js"` to Node Tab, `icon="python"` to Python Tab. Add `icon="circle-question"` to each `<Accordion>`. Add `icon` + `title` to every fenced code block. Add a dedicated `## Verification` H2 after `## First Call` describing: "the URL returns an SDXL image at the requested dimensions; `seed` and `nsfw` flag are present in the JSON".
- **Source/exemplar:** `realtime-ai/comfystream/workflow-authoring.mdx` lines 55-83 — correct StyledSteps usage already exists in-repo.

### Layer 3 — Cross-page integration
- **Gap:** No graduation to managed gateway / self-hosted gateway / Solutions tab. The "Warning" callout (line 244) names production-readiness but offers no path. No link to `livepeer/ai-runner` or the SDK source repos.
- **Fix step:** Add to Related Pages: `/v2/gateways/setup/connect` (self-host) and `/v2/solutions/managed-gateway` (managed) as 2 of 4 cards. In the Warning at line 244, add: "See [Production gateways](path) for paid options". Add inline link at line 207 to `https://github.com/livepeer/ai-runner` on first "ai-runner" mention. Add line 254 link to `https://github.com/livepeer/livepeer-ai-js` and `https://github.com/livepeer/livepeer-ai-python`.
- **Source/exemplar:** `ai-pipelines.mdx` line 305 "operate a self-hosted gateway with `-maxPricePerUnit`" — parallel content already implies the link.

### Layer 4 — Veracity and source authority
- **Gap:** SDK installs unpinned despite alpha-stage SDKs (per `ai-sdks-overview.mdx`). Two warm models named (lines 211-212) with no link to `aiModels.json`. Cold-start "30 seconds to a few minutes" — no source. Example URL in response (line 119) is a real-looking but unverified path. Common Errors descriptions paraphrased — should match actual error messages from the gateway.
- **Fix step:** Pin SDK installs: `npm install @livepeer/ai@<latest-alpha-tag>` and `pip install livepeer-ai==<latest-alpha-tag>`. Add inline citation to `aiModels.json`: "Two warm models per `[ai-runner aiModels.json](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)`". Replace cold-start prose with TESTED label and date. Reproduce one actual 422 error from the gateway in the "Validation error" Accordion.
- **Source/exemplar:** `ai-runner/aiModels.json`; `ai-sdks-overview.mdx` line 35 already says alpha+pin.

### Layer 5 — Product-forward depth
- **Gap:** Quickstart promises 10 minutes but doesn't show what the reader can/should do AFTER. No "next 5 minutes" — try a different model, try img2img, set a seed, etc. No cost signal — "free" is implied but never stated next to a future paid-gateway cost. No "what to expect" — first time on cold model = 1 minute? On warm = 200ms? No timing per request.
- **Fix step:** Add §"What success looks like" with: "Warm response time: ~2-4s for SDXL-Lightning at 1024×1024. Cold model: 30s-2min. Free tier rate-limit: REVIEW: N req/min." Add §"Take it further" with 3 short remix prompts (try `negative_prompt`, swap to RealVisXL, pass a `seed`). Add cost callout in the Warning at line 244: "Production: $0.0X per 1024² image at average orchestrator pricing."
- **Source/exemplar:** Real-world quickstart pattern — Replicate.com and Hugging Face quickstarts both ship "first response in X seconds" and "next 5 minutes" sections.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` instead of `<StyledSteps>` (5.21) — repo has correct usage at `workflow-authoring.mdx` line 55 to mirror.
2. All 5 `<Tab>` missing `icon`, all 4 `<Accordion>` missing `icon`, all 9 code blocks missing `icon`+`title` (5.18+5.19+5.20).
3. Related Pages: both in-prose Next-Step paragraph (line 250) AND `<CardGroup>` (line 252) present (5.16 forbids both); also uses `<CardGroup>` not `<Columns>` (5.17).
4. No dedicated "Verification" section — tutorial pageType matrix requires it (5.2).
5. SDK installs `@livepeer/ai` and `livepeer-ai` unpinned despite both being alpha-stage (2.D3 + 6.8); `veracityStatus: verified` is overstated until installs are pinned.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` (line 60) with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">`; replace `<Step>` with `<StyledStep title="..." icon="...">` | 60-137 | HIGH | M | check 5.21; `workflow-authoring.mdx` line 55 |
| 2 | Add `icon="terminal"` to curl Tab (line 65), `icon="js"` to Node Tab (line 77), `icon="python"` to Python Tab (line 93), `icon="js"` to TS SDK Tab (line 146), `icon="python"` to Python SDK Tab (line 174) | 65, 77, 93, 146, 174 | HIGH | S | check 5.18 |
| 3 | Add `icon="circle-question"` to each `<Accordion>` (4 places) | 230, 233, 236, 239 | HIGH | S | check 5.19 |
| 4 | Add `icon` + `title` to every fenced code block; example: `\`\`\`bash icon="terminal" title="curl-first-call.sh"` | 66, 78, 94, 115, 131, 149, 155, 177, 183 | HIGH | M | check 5.20 |
| 5 | Replace `<CardGroup cols={2}>` (line 254) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; rename H2 "Next Steps" to "Related Pages" | 252-267 | HIGH | M | check 5.17+5.22+3.2 |
| 6 | Delete in-prose closing paragraph at line 250 ("You now have a working inference call...") — check 5.16 forbids both Next-Step prose AND Related Pages | 250 | HIGH | S | check 5.16 |
| 7 | Add `## Verification` H2 after `## First Call` describing the success signal: download URL is fetchable, returns SDXL PNG, JSON contains `seed` and `nsfw` | after 137 | HIGH | M | check 5.2 (tutorial matrix) |
| 8 | Pin SDK installs: `npm install @livepeer/ai@<alpha-tag> zod` and `pip install livepeer-ai==<alpha-tag>`. Mark `{/* REVIEW: pin latest alpha */}` if version unknown | 149, 177 | HIGH | S | check 2.D3+6.8 |
| 9 | Reorder body so a single curl block sits above the fold (after line 35 Tip), with context prose below | 35-66 | HIGH | M | check 2.D1+4.18 |
| 10 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/gateways/setup/connect`, `/v2/solutions/managed-gateway` (or equivalent), `/v2/about/network/architecture` | new cards | HIGH | S | check 4.10+7.6 |
| 11 | Convert "Pipeline Models" markdown table (line 207) to `<StyledTable variant="bordered">` | 207-213 | MEDIUM | S | check 5.23 |
| 12 | Remove legacy `status: current` field | 25 | MEDIUM | S | check 5.7 |
| 13 | Add `pageVariant: quickstart` to frontmatter | 15 | MEDIUM | S | check 1.3 |
| 14 | Label code blocks TESTED with date or NOT-TESTED with reason | all code | MEDIUM | M | check 6.2 |
| 15 | Reduce keyword generality: drop `livepeer`, `sdk`; add `dream-gateway`, `sdxl-lightning`, `community-gateway` | 6-14 | INFO | S | check 1.13 |
| 16 | Extract warm model list and pipeline models table to `snippets/data/ai-runner/warm-models.json`; import on this page | 211-219 | INFO | M | check 5.15 |
