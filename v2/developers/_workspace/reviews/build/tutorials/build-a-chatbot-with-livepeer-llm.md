# Review: build-a-chatbot-with-livepeer-llm.mdx

**Page**: `v2/developers/build/tutorials/build-a-chatbot-with-livepeer-llm.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 14,321
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | all present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build a streaming chatbot on the Livepeer LLM pipeline. Next.js Route Handler, SSE, OpenAI-compatible." subject-led, 102 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 41 "By the end of this tutorial..." (reader-led) and line 43 "This is the Persona 1..." (self-ref) |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8–2.16 | banned phrases / hedging / deprecated | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | line 41 reader-led; line 88 entity-led ("Server actions can't stream...") — improves later |
| 2. Voice | 2.17–2.22 | terminology | PASS | |
| 2. Voice | 2.D1 | Code-first opening | FAIL | First code at line 61. Lines 41-54 are 80 words of framing before the create-next-app command |
| 2. Voice | 2.D2 | API methods linked | MIXED | "/llm" endpoint named (line 108) but not linked to a reference page |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Node 20+, Next 15; `create-next-app@latest` unpinned. `meta-llama/Meta-Llama-3.1-8B-Instruct` pinned (good). Cold-start window vague |
| 2. Voice | 2.D4 | Errors in main | PASS | Common Errors AccordionGroup at line 360 in main flow |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Project Bootstrap" (22), "Streaming Route Handler" (24), "SSE Wire Format" (24), "Chat UI Component" (24), "Page Composition" (22), "Model Selection" (24), "Production Considerations" (23), "Common Errors" (21), "Next Steps" (banned). 9 pass / 1 fail |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 382: "## Next Steps" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Chatbot with Livepeer LLM" — 3 words after stop-word |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | MIXED | Next Steps cards present but plain |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 47 §Required Tools — should rename §Prerequisites |
| 4. Structure | 4.6 | Out-of-scope | PASS | |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | FAIL | §Project Bootstrap (lines 57-82) duplicates `ai-image-generation-app.mdx` §Project Bootstrap (lines 56-89) — same `create-next-app` + env pattern. §Common Errors entries overlap with image-gen Common Errors (gateway 502, cold-start). §Model Selection table (lines 331-336) overlaps with `ai-agent-on-livepeer.mdx` model table (lines 186-191). Should factor to shared snippets |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | zero cross-tab links — all 4 Next Steps cards point to `/v2/developers/` |
| 4. Structure | 4.11 | Discord test | PASS | code complete |
| 4. Structure | 4.12 | Page size | PASS | 14.3 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Production Considerations names 4; no "when not to use" |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 6 blocks have `bash`, `ts`, or `tsx` |
| 4. Structure | 4.18 | Code-first opening | FAIL | see 2.D1 |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold partial; no Verification H2 (line 323 "Open `http://localhost:3000`..." is implicit); `Next Steps` mis-named |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites (mis-named "Required Tools"), Steps (raw not Styled), Verification (implicit only), Related (mis-named "Next Steps") |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | code-first procedural but raw `<Steps>` (5.21 FAIL); table at line 331-336 markdown not `<StyledTable>` (5.23 FAIL) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 26 `status: current` — legacy |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | |
| 5. Layout | 5.15 | Data imports | MIXED | Model table (lines 331-336) hardcoded; should import from shared model-support data |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" with `<CardGroup>` — must be `<Columns>` named "Related Pages" |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; no CustomCardTitle |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | 5 `<Accordion>` at lines 361, 364, 367, 370, 373 — all missing `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | All 6 fenced blocks (lines 61, 75, 92, 165, 299, 319) missing icon + title |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Raw `<Steps>` at line 59 — should be `<StyledSteps iconColor titleColor>` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Next Steps cards plain |
| 5. Layout | 5.23 | StyledTable | FAIL | Markdown table at line 331-336 — should be `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "OpenAI-compatible at the wire level" (line 41) not cited; "8 GB GPUs" (line 41) — same as sibling tutorials, no source |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block labelled TESTED |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `verified` |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | `create-next-app@latest` unpinned; no SDK version |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | no link to Ollama upstream for OpenAI-compatibility claim; no link to `/llm` endpoint reference |
| 6. Veracity | 6.11-6.12 | glossary | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2630 |
| 7. Nav | 7.2–7.5 | mirrors / orphans | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | FAIL | (cross-ref 4.10) |
| 7. Nav | 7.7–7.12 | lane / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | resolve |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | section coverage | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Chatbot with Livepeer LLM" | PASS | |
| sidebarTitle | Yes | "LLM Chatbot" | PASS | |
| description | Yes | "Build a streaming chatbot..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | unpinned Next/SDK weakens |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | could be `quickstart` |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (9×) | Required | placement OK |
| `<Tip>` (header CTA) | Yes (36) | Recommended | OK |
| `<Steps>` / `<Step>` (raw) | Yes (line 59) | — | FAIL 5.21 — should be StyledSteps |
| `<StyledSteps>` | No | Required | not imported |
| `<Tabs>` / `<Tab icon>` | No | Recommended | not strictly needed |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 5) | — | FAIL 5.19 — Accordions missing icons |
| `<StyledTable>` | No | Required for tables | FAIL 5.23 — markdown table at line 331 |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 6 blocks missing |
| `<CardGroup cols={2}>` / `<Card>` | Yes (384) | — | FAIL 5.16+5.17 — should be `<Columns>` |
| `<CustomCardTitle>` | No | Required | FAIL 5.17+5.22 |
| `<CenteredContainer>` | Yes (35) | — | OK |
| `<LinkArrow>` | Yes (238, 338, 354) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: §"Project Bootstrap" (lines 57-82) duplicates `ai-image-generation-app.mdx` §"Project Bootstrap" (lines 56-89) — same `create-next-app` + `.env.local` pattern.
- **OVERLAP**: §"Model Selection" (lines 327-338) overlaps with `ai-agent-on-livepeer.mdx` §"Supported LLM models" (lines 184-191) and `eliza-livepeer-plugin.mdx` knowledge entry (line 238). Same 4 models, same VRAM figures. Factor to shared data import.
- **OVERLAP**: Common Errors entries (Gateway 502, cold-start, edge runtime) overlap with image-gen tutorial.
- **LINK GAPS**: No link to `livepeer/ai-runner` for OpenAI-compatibility claim. No link to `/llm` endpoint reference. No link to `dream-gateway.livepeer.cloud` provenance. No graduation link to self-host orchestrator with pinned model.
- **STRANDED**: Reader who finishes has 4 Next Steps cards but no graduation path to Gateways or Solutions tabs.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Self-reference | 1 | line 41: "By the end of this tutorial you'll have..." |
| Banned heading | 1 | line 382: "## Next Steps" |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Project Bootstrap | 22 |
| Streaming Route Handler | 24 |
| SSE Wire Format | 24 |
| Chat UI Component | 24 |
| Page Composition | 22 |
| Model Selection | 24 |
| Production Considerations | 23 |
| Common Errors | 21 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 61 | bash | ✗ | ✗ | NOT-TESTED | create-next-app — unpinned |
| 75 | bash | ✗ | ✗ | NOT-TESTED | .env.local |
| 92 | ts | ✗ | ✗ | NOT-TESTED | route.ts (server) |
| 143 | (sse) | ✗ | ✗ | — | SSE example payload — missing language tag (4.17 borderline; rubric "language tag required" — this is data illustration, language could be `text`) |
| 165 | tsx | ✗ | ✗ | NOT-TESTED | Chat.tsx — uses `const { useState } = React;` workaround |
| 299 | tsx | ✗ | ✗ | NOT-TESTED | page.tsx |
| 319 | bash | ✗ | ✗ | NOT-TESTED | npm run dev |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's stated outcome is a "streaming chatbot" with "conversation history". The implementation holds messages in `useState` only — refresh loses everything. Production Considerations (line 342) names "Conversation persistence" but no actual persistence code is shown. Reader leaves with a working demo, not a working chatbot.
- **Fix step:** Add a minimal persistence example (localStorage or IndexedDB) as an optional Step 4. Or, more honestly, narrow the outcome statement at line 41 from "maintains conversation history" to "displays conversation history during the session" and flag persistence explicitly as out-of-scope in a `<Note>` above the Production Considerations.
- **Source/exemplar:** `vod-upload-and-playback.mdx` (sibling) shows the "demo to ship-ready" honest split.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` (5.21). All 6 code blocks missing icon+title (5.20). 5 Accordions missing icon (5.19). Markdown table at 331 (5.23). Next Steps mis-named, CardGroup not Columns, plain Cards (5.16/5.17/5.22). SSE block at line 143 has no language tag.
- **Fix step:**
  1. Replace `<Steps>` (line 59) with `<StyledSteps iconColor="var(--lp-color-accent)" titleColor="var(--accent)">` and `<StyledStep title icon>`.
  2. Add `icon` + `title` to every fenced code block. The SSE block at line 143 needs `text` or `sse` as language tag.
  3. Add `icon` to each `<Accordion>` (lines 361, 364, 367, 370, 373).
  4. Replace markdown table (lines 331-336) with `<StyledTable variant="bordered">`.
  5. Convert Next Steps `<CardGroup>` → `<Columns cols={2}>`, rename H2 to "Related Pages", add `<CustomCardTitle icon title horizontal>` to each Card.
  6. Add `## Verification` H2 between "Page Composition" (295) and "Model Selection" (327) listing observable success signals.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` icon/title on every block; `ai-agent-on-livepeer.mdx` StyledSteps usage.

### Layer 3 — Cross-page integration
- **Gap:** All 4 Next Steps cards developer-tab only. No graduation to Gateways. No link to the LLM endpoint reference. No link to upstream Ollama for the OpenAI-compatibility claim. No link to MDN SSE spec or Edge runtime caveats.
- **Fix step:** In Related Pages, add cross-tab cards: `/v2/gateways/setup/connect` ("Self-host with model pinned"), `/v2/about/network/architecture` ("How LLM routing works"). Add inline link at line 41 to Ollama docs or `ai-runner/runner/src/runner/pipelines/llm.py` for OpenAI compatibility claim. Add inline link at line 108 (`${GATEWAY_URL}/llm`) to AI Pipelines reference page.
- **Source/exemplar:** `livepeer/ai-runner` repo `pipelines/llm.py`; `v2/developers/build/ai-and-agents/ai-pipelines.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** "OpenAI-compatible at the wire level" (line 41) — no source. "8 GB GPUs" (line 41) — number repeated across tutorials, no canonical source. SDK and Next versions unpinned. Cold-start window vague (line 80 "30 seconds to a few minutes"). No TESTED labels.
- **Fix step:**
  1. Pin Next: `create-next-app@15.x`.
  2. Pin Llama model already done (good).
  3. Source the OpenAI-compatibility claim: link to `livepeer/ai-runner/runner/src/runner/pipelines/llm.py` or the API reference page.
  4. Source the cold-start window from `model-support.mdx` or a `livepeer/ai-runner` README pointer.
  5. Label every code block TESTED with date and environment (e.g. "TESTED 2026-05-10 against dream-gateway.livepeer.cloud, Node 20.11").
- **Source/exemplar:** `livepeer/ai-runner/runner/src/runner/pipelines/llm.py`; `huggingface-to-livepeer.mdx` §Sources pattern (lines 571-593).

### Layer 5 — Product-forward depth
- **Gap:** No latency claim ("first token within Nms on warm Llama 3.1 8B"). No cost expectation. No "when not to use this" (e.g. "if you need 128k-context with strict latency, batch-only via a dedicated gateway; community gateway has no SLA"). No maturity badge. The "Persona 1 activation moment for text inference" framing (line 43) reads as internal-marketing copy.
- **Fix step:**
  1. Add latency claim near top: "Time-to-first-token on warm Llama 3.1 8B: typically 100-500ms over the community gateway. Subsequent tokens stream at ~30-80 tok/s." with a `{/* REVIEW: verify token-rate window */}` if not yet measured.
  2. Add `<Info>` "Best for / When not to use" callout after Required Tools.
  3. Add cost paragraph: community gateway free for dev; production per-token cost varies by orchestrator. Link to Solutions for pricing.
  4. Replace Persona-1 framing at line 43 with reader-signal copy: "Pairs with the image-gen tutorial — same Next.js shell, different pipeline."
- **Source/exemplar:** `.claude/references/layout/exemplars.md` flagship pattern; Ollama README for latency claims if Livepeer-side numbers absent.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` not StyledSteps (5.21).
2. All 6 code blocks missing icon + title (5.20). SSE block at line 143 also missing language tag (4.17 partial).
3. 5 Accordions missing icon (5.19); markdown table at line 331 not StyledTable (5.23).
4. Next Steps banned heading + CardGroup not Columns + plain Cards (3.2, 5.16, 5.17, 5.22).
5. Zero cross-tab graduation links (4.10, 7.6); no Verification H2.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` (line 59) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; import from `/snippets/components/displays/steps/Steps.jsx` | 33, 59-82 | HIGH | M | check 5.21; `ai-agent-on-livepeer.mdx` line 32, 61 |
| 2 | Add `icon="terminal"` + `title="<filename>"` to every fenced code block | 61, 75, 92, 165, 299, 319 | HIGH | M | check 5.20 |
| 3 | Add language tag (`text` or `sse`) to fenced SSE example | 143 | MEDIUM | S | check 4.17 |
| 4 | Add `icon="circle-question"` to each Accordion | 361, 364, 367, 370, 373 | HIGH | S | check 5.19 |
| 5 | Convert markdown table at lines 331-336 to `<StyledTable variant="bordered">` | 331-336 | HIGH | S | check 5.23 |
| 6 | Convert `<CardGroup>` (line 384) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card | 382-397 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Add `## Verification` H2 between "Page Composition" (295) and "Model Selection" (327) | new H2 | MEDIUM | M | tutorial matrix |
| 8 | Rename §"Required Tools" → §"Prerequisites" | 47 | MEDIUM | S | check 4.5+5.2 |
| 9 | Add ≥1 Gateways/Solutions/About card to Related Pages for cross-tab coverage | Related Pages | HIGH | S | check 4.10+7.6 |
| 10 | Remove legacy `status: current` | 26 | MEDIUM | S | check 5.7 |
| 11 | Pin `create-next-app` to a specific Next 15 release | 61 | HIGH | S | check 2.D3+6.8 |
| 12 | Source the "OpenAI-compatible at the wire level" claim — link to `livepeer/ai-runner/runner/src/runner/pipelines/llm.py` | 41 | MEDIUM | S | check 6.1+6.10 |
| 13 | Label every code block TESTED (date + env) or NOT-TESTED (reason) | 6 blocks | MEDIUM | M | check 6.2 |
| 14 | Hoist Project Bootstrap to a shared snippet with image-gen tutorial; hoist Model table to shared data import | 57-82, 331-336 | INFO | M | check 4.8+5.15 |
| 15 | Add `<Info>` "Best for / When not to use" callout to set production-readiness signal | after line 54 | INFO | M | layer 5 |
| 16 | Add `pageVariant: quickstart` | frontmatter | INFO | S | check 1.3 |
