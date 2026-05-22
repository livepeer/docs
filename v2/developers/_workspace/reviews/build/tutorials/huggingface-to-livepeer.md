# Review: huggingface-to-livepeer.mdx

**Page**: `v2/developers/build/tutorials/huggingface-to-livepeer.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `explain` (mismatched — see 1.4)
**Bytes**: 26,741
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | audience present but pageType placement irregular (line 22, after keywords + OG block); legacy `status: draft` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: explain` — but pageType is `tutorial` and the page is procedural ("Step 1 / Step 2 / Step 3..."). For a tutorial the canonical purpose is `build` or `integrate`. `explain` is for concept pages |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | not present in frontmatter — page has detailed sources but no top-level `veracityStatus` field |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Configure an existing Livepeer pipeline to serve a Hugging Face model. Declare the model, pre-download weights, restart the orchestrator, and verify end-to-end through your own self-hosted gateway." subject-led, 197 chars (over 160 — borderline) |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields present (line 17-21) |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (huggingface, ai pipeline, aimodels) |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "harbour" used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | line 39 "By the end of this tutorial, a Hugging Face model is running..." — subject-led description of outcome (passive but factual) |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer-coded, operator-tone (orchestrator references) |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | MIXED | line 39 passive opener acceptable; flag for review |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | `aiModels.json`, orchestrator, gateway, runner preserved |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | PASS | mostly system-led |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | PASS | First commit-level code is at line 195 (Step 1) — but the page opens with strong scope-setting via `<Tip>` (31-35) and intro outcome list (43-48). For a multi-step infrastructure tutorial this is the right shape (decision moment first) |
| 2. Voice | 2.D2 | API methods linked | PASS | `livePipelineToImage`, `dl_checkpoints.sh`, `main.py`, `docker.go` all linked to GitHub with line-level paths (lines 72, 234, 264, 320, 359) |
| 2. Voice | 2.D3 | Versions explicit | MIXED | `livepeer/ai-runner:latest` (line 278) — `latest` tag; `go-livepeer ... master` (line 322 source reference) — `master` is a moving target. `nvidia/cuda:12.0-base` pinned (good). The "go-livepeer built from `master` or a release containing -aiWorker..." (line 180) reads as honest but accepts a moving target |
| 2. Voice | 2.D4 | Errors in main | PASS | Troubleshooting AccordionGroup at line 549 in main flow with `icon` on every Accordion (good!) |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | MIXED | line 469-474 uses `<Note>` for the Cloud Community Gateway secondary verification — borderline primary content; acceptable since Step 6b is the canonical path and this is genuinely adjacent context |
| 3. Headings | 3.1 | Score ≥20/25 | PASS | All H2 headings score well: "Scope and intent" (22), "Built-in pipelines" (23), "Prerequisites" (24), "Step 1: Choose the model directory" (24), "Step 2: Declare the model in aiModels.json" (24), "Step 3: Pre-download the model weights" (24), "Step 4: Start the orchestrator with the new model" (24), "Step 5: Verify on the network capabilities tool" (24), "Step 6: Send a test inference request" (24), "Step 7: Confirm the loop is closed" (24), "Operational notes" (22), "LLM variant via Ollama" (24), "Troubleshooting" (22), "Sources" (22), "Related pages" (exempt). 14 pass |
| 3. Headings | 3.2 | Banned/weak | PASS | no "Next Steps" / "How It Works" / "See Also" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Add a Hugging Face Model to Livepeer" — 6 words after stop-word; rubric wants 1-3. sidebarTitle "HuggingFace to Livepeer" is 3 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | task-oriented Step headings appropriate for tutorial |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | clear hand-off to huggingface-to-livepeer-advanced at line 597 |
| 4. Structure | 4.4 | No dead ends | PASS | Step 7 "Confirm the loop is closed" + Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 154 §Prerequisites — named correctly, table format, hard prerequisites explicit |
| 4. Structure | 4.6 | Out-of-scope | PASS | §"Scope and intent" at line 51 explicitly names what's not covered (custom pipeline, BYOC, LLM-via-Ollama) and links the right paths |
| 4. Structure | 4.7 | Info type | PASS | procedural + technical |
| 4. Structure | 4.8 | No duplication | PASS | content distinct |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | MIXED | 2 cross-tab cards: `/v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` + `/v2/orchestrators/guides/tutorials/realtime-ai-tutorial` (lines 605, 608). Needs ≥3 |
| 4. Structure | 4.11 | Discord test | PASS | step-by-step explicit; sources accordion provides receipts |
| 4. Structure | 4.12 | Page size | PASS | 26.7 KB — at upper end but justified by 7-step infrastructure procedure |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | sequential H2 Steps; appropriate for procedural |
| 4. Structure | 4.15 | Trade-offs named | PASS | line 492-513 §Operational notes uses AccordionGroup with `icon` for pricing, warm/cold, "same flow different model" — strong trade-off treatment |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 10 fenced blocks have `bash` or `json` (and all also have icon+title — strong pattern) |
| 4. Structure | 4.18 | Code-first opening | PASS | |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold strong overall but uses H2 Steps (not `<StyledSteps>` component) for procedural body. The H2-per-step approach is valid for a 7-step infrastructure procedure but loses the StyledSteps accent styling |
| 5. Layout | 5.2 | Required sections | PASS | Prerequisites + Steps (as H2s) + Verification (Step 5, Step 6, Step 7) + Related Pages + Sources. Most complete tutorial scaffold of the 7 pages reviewed in this batch |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | code-first procedural — uses fenced code with icon+title (excellent) and `<StyledTable>` for pipelines + prerequisites + flag tables (excellent); but the Steps are H2-driven not `<StyledSteps>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 24 `status: draft` — legacy field. Also conflicts with the page being shipped (in docs.json) |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | strongest of the 7 reviewed; missing only `<StyledSteps>` component and the broken `/v2/developers2/` link target |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | PASS | no multi-variant content |
| 5. Layout | 5.15 | Data imports | MIXED | Pipeline table (76), Prerequisites table (158), aiModels.json field schema table (225), Flag table (322) — all hardcoded but the data is canonical-source-referenced inline. Could pull from data snippets but current form is honest |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Related pages" H2 with `<CardGroup>` at line 601 — should be `<Columns cols={2}>` per rubric |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` not `<Columns cols={2}>`; cards use `arrow horizontal` (good — horizontal layout) but lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | PASS | All 13 Accordions (lines 378, 382, 386, 495, 500, 507, 550, 555, 559, 563, 576, 585) have `icon` props — best example in this review batch |
| 5. Layout | 5.20 | Code icon+title | PASS | All 10 fenced blocks (lines 195, 210, 268, 292, 306, 407, 427, 438, 451, 525) have `icon` + `title` — best example in this review batch |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Page uses H2-per-step instead of `<StyledSteps>` component. For a 7-step infrastructure procedure, both are valid presentations, but the rubric (5.21) requires `<StyledSteps>` for procedural sequences. Either the rubric should make an exception for multi-section infrastructure procedures or this page should refactor — needs design call |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Related Pages cards lack `<CustomCardTitle>` (use direct `title=` attribute on Card) |
| 5. Layout | 5.23 | StyledTable | PASS | All 4 tables use `<StyledTable variant="bordered">` (lines 76, 158, 225, 322) |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 4 `<StyledTable>` blocks; rubric max is 1-2 |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 4 tables + 3 AccordionGroups — busy. Justified by infrastructure-procedure scope but bumps the limit |
| 5. Layout | 5.26 | CustomDivider | PASS | placement correct |
| 5. Layout | 5.27 | Mermaid | N/A | no diagrams (could benefit from one showing the orchestrator + runner + gateway relationship) |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | `status: draft` (line 24) suggests this page is a draft but it's in docs.json (line 2634) — contradiction |
| 6. Veracity | 6.1 | Claims citable | PASS | Every flag, every script, every endpoint is linked to its source file (`livepeer/go-livepeer/cmd/livepeer/livepeer.go`, `livepeer/ai-worker/runner/dl_checkpoints.sh`, etc.). Strongest source discipline of any tutorial in this batch |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block carries TESTED/NOT-TESTED label, but each block references a canonical source |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "24 GB VRAM minimum" justified inline (line 172: "SDXL inference at fp16 needs roughly 12 GB"); "4768371 wei" (line 217) explicitly marked illustrative |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | absent (1.8). Page is well-sourced but the field is missing |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | MIXED | Runner image `livepeer/ai-runner:latest` (line 278); go-livepeer `master` referenced (line 180, 320). Honest acknowledgement at line 180 but a fixed tag would tighten |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | PASS | Every claim has a T1 source (GitHub repo, model card, Hub.docker.com, tools.livepeer.cloud, explorer.livepeer.org). §Sources accordion (line 571) bundles all sources — exemplar for other tutorials |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2634 |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | MIXED | 2 cross-tab cards (both `/v2/orchestrators/guides/tutorials/`); needs ≥3 |
| 7. Nav | 7.7 | Correct lane | MIXED | `status: draft` says workspace; physical location is published. Contradiction — `status: draft` must be removed |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | FAIL | Two Related Pages cards point to `/v2/developers2/build/tutorials/...` (lines 602, 611) — `v2/developers2/` is a legacy parallel directory not in docs.json. These links 404 in the rendered site. Canonical paths: `/v2/developers/build/tutorials/huggingface-to-livepeer-advanced` (sibling, line 2635 in docs.json) and `/v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart` |
| 8. Links | 8.2 | External | NOT-TESTED | many external links — sources accordion is dense |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Add a Hugging Face Model to Livepeer" | MIXED | 6 words after stop-word — long |
| sidebarTitle | Yes | "HuggingFace to Livepeer" | PASS | |
| description | Yes | "Configure an existing Livepeer pipeline..." | MIXED | 197 chars (over 160) |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | explain | FAIL | should be `build` or `integrate` for tutorial |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | path uses `/snippets/assets/media/og-images/...` — verify this path exists |
| veracityStatus | No | — | FAIL | missing — should be `verified` given the source discipline |
| lastVerified | Yes | "2026-04-28" | PASS | quoted form is OK |
| status | Yes | draft | FAIL | legacy field + contradicts published location |
| pageVariant | No | — | INFO | n/a |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (15×) | Required | placement OK |
| `<Tip>` (header CTA) | Yes (31) | Recommended | OK |
| `<Steps>` / `<Step>` | No | — | uses H2-per-step instead |
| `<StyledSteps>` | No | Required for procedural | FAIL 5.21 — H2-per-step is alternative pattern; design call needed |
| `<Tabs>` / `<Tab icon>` | No | — | not needed |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (3 + 13) | — | PASS 5.19 — every Accordion has `icon` |
| `<StyledTable>` | Yes (4) | Required | PASS 5.23; 5.24 borderline (4 > 2) |
| Fenced code with icon+title | Yes (10) | Required | PASS 5.20 — every block |
| `<CardGroup cols={2}>` / `<Card>` | Yes (601) | — | FAIL 5.16+5.17 — should be `<Columns>` |
| `<CustomCardTitle>` | No | Required | FAIL — uses direct `title` attribute |
| `<Note>` | Yes (469) | — | acceptable adjacent-context use |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant — content is unique. Sibling `huggingface-to-livepeer-advanced.mdx` covers the deeper paths (custom pipeline, BYOC).
- **LINK GAPS**: Two Related Pages cards point to `/v2/developers2/` legacy paths — those don't render. Cross-tab graduation count = 2 (both orchestrator tutorials); needs ≥3 (e.g. add `/v2/about/network/architecture` or `/v2/gateways/setup/connect`).
- **STRANDED**: Reader who completes Step 7 has a working model on the network; Related Pages routes them to advanced HF paths (broken link), full AI pipeline tutorial (orchestrator), realtime AI tutorial (orchestrator), and ComfyStream Quickstart (broken link). The "what's next on the developer side" path is implicit — no link to `model-support.mdx` or `ai-pipelines.mdx` reference pages.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | "decentralised", "harbour" used |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | clean — sibling `developers2/huggingface-to-livepeer.mdx` was a Studio source but this published page is clean |
| Self-reference | 3 | line 39 "By the end of this tutorial..."; line 149 "If your model fits the input and output shape of one of these, take this tutorial."; line 573 "Every claim in this tutorial is grounded..." |
| Banned heading | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Scope and intent | 22 |
| Built-in pipelines | 23 |
| Prerequisites | 24 |
| Step 1: Choose the model directory | 24 |
| Step 2: Declare the model in aiModels.json | 24 |
| Step 3: Pre-download the model weights | 24 |
| Step 4: Start the orchestrator with the new model | 24 |
| Step 5: Verify on the network capabilities tool | 24 |
| Step 6: Send a test inference request | 24 |
| Step 7: Confirm the loop is closed | 24 |
| Operational notes | 22 |
| LLM variant via Ollama | 24 |
| Troubleshooting | 22 |
| Sources | 22 |
| Related pages | exempt | |

All headings PASS 3.1.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 195 | bash | ✓ terminal | ✓ "export-model-dir.sh" | NOT-TESTED | env var export |
| 210 | json | ✓ code | ✓ "aiModels.json" | NOT-TESTED | model declaration |
| 268 | bash | ✓ terminal | ✓ "download-weights.sh" | NOT-TESTED | docker dl_checkpoints.sh — `livepeer/ai-runner:latest` unpinned |
| 292 | bash | ✓ terminal | ✓ "verify-weights.sh" | NOT-TESTED | ls verification |
| 306 | bash | ✓ terminal | ✓ "start-orchestrator.sh" | NOT-TESTED | go-livepeer flags |
| 407 | bash | ✓ terminal | ✓ "runner-direct.sh" | NOT-TESTED | localhost curl |
| 427 | bash | ✓ terminal | ✓ "inspect-output.sh" | NOT-TESTED | jq inspect |
| 438 | bash | ✓ terminal | ✓ "start-gateway.sh" | NOT-TESTED | gateway start |
| 451 | bash | ✓ terminal | ✓ "gateway-request.sh" | NOT-TESTED | gateway curl |
| 525 | json | ✓ code | ✓ "aiModels-llm.json" | NOT-TESTED | LLM variant manifest |

All 10 blocks PASS 5.20 + 4.17. Only gap is TESTED labelling.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is a model running on Livepeer through their own gateway. Page delivers it. Where it could go further: no signal of "what comes next operationally" — once the model is advertised, the orchestrator's reward economics, monitoring (e.g. what to watch in `tools.livepeer.cloud/ai/network-capabilities`), and rate limits are not addressed. The page ends with "ready for paid traffic" but no view of what paid traffic looks like.
- **Fix step:** Add a final paragraph or `<Tip>` after Step 7 (line 488) pointing to: §"What to monitor" — link to `/v2/orchestrators/guides/monitoring/` (verify path), `/v2/orchestrators/concepts/economics/`. Add `{/* REVIEW: confirm monitoring path */}` if uncertain.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` (sibling) for the "next paths" pattern.

### Layer 2 — Composition
- **Gap:** Page is the strongest tutorial in the batch on layout fundamentals (icon+title on every code block, icon on every Accordion, StyledTable on every table, Sources accordion with T1 sources). Remaining gaps:
  1. H2-per-Step instead of `<StyledSteps>` (5.21) — design call, but explicit ruling needed.
  2. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  3. 4 `<StyledTable>` exceeds the 1-2 max (5.24).
  4. No Mermaid diagram (5.27 — N/A, but adding one showing orchestrator + runner + gateway + on-chain relationship would help the reader at line 350-360).
- **Fix step:**
  1. Surface a design-call comment in workspace: "huggingface-to-livepeer uses H2-per-step. Acceptable for multi-section infrastructure tutorials? Or convert to `<StyledSteps>`?"
  2. Convert `<CardGroup cols={2}>` (line 601) to `<Columns cols={2}>`; add `<CustomCardTitle icon title horizontal>` to each Card.
  3. Compress tables: Pipeline table (76) and aiModels.json field-schema table (225) are the most reference-shaped; consider moving them to a sub-reference page and linking. Alternatively accept the 4-table count as justified.
  4. Add a Mermaid `graph LR` between Step 4 and Step 5 (around line 360) showing: orchestrator → runner container → `/health` → capability advertisement → tools.livepeer.cloud dashboard. Use `MermaidColours.jsx`.
- **Source/exemplar:** Current page is the exemplar for icon+title patterns — annotate it as canonical for other A8/A9 tutorials to reference.

### Layer 3 — Cross-page integration
- **Gap:** Two Related Pages cards link to `/v2/developers2/` — broken in the live nav (developers2 not in docs.json). Reader hitting those cards reaches a 404. Cross-tab graduation count = 2; needs ≥3.
- **Fix step:**
  1. Fix line 602: `href="/v2/developers/build/tutorials/huggingface-to-livepeer-advanced"` (drop the `2`).
  2. Fix line 611: `href="/v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart"` (or `/v2/developers/build/tutorials/` if the alias should exist there).
  3. Add a 5th card pointing to `/v2/about/network/architecture` ("How the network discovers your model") or `/v2/gateways/setup/connect` ("Run a gateway too") for ≥3 cross-tab links.
- **Source/exemplar:** `docs.json` lines 2628-2636 for canonical paths.

### Layer 4 — Veracity and source authority
- **Gap:** Best veracity discipline in the batch. Remaining:
  1. `livepeer/ai-runner:latest` (line 278) — pin a release tag.
  2. `go-livepeer` referenced via `master` (line 180, 320) — pin a release that contains `-aiWorker` flags.
  3. No code TESTED labels.
  4. `veracityStatus` missing from frontmatter.
- **Fix step:**
  1. Pin runner image at line 278: `livepeer/ai-runner:v<X>` with `{/* REVIEW: pin runner image tag */}` if version unknown. Verify against `https://hub.docker.com/r/livepeer/ai-runner/tags`.
  2. Pin go-livepeer release: cite the smallest release containing the AI flags (e.g. v0.7.x). Update line 180 wording: "Built from v0.7.x or later containing..." with a release link.
  3. Add TESTED labels with date/env per block, or NOT-TESTED with the source-file reference that grounds the block.
  4. Add `veracityStatus: verified` to frontmatter — the source discipline justifies it.
- **Source/exemplar:** Page's own §Sources accordion (lines 571-593) — extend the same discipline to TESTED labelling.

### Layer 5 — Product-forward depth
- **Gap:** Page covers technical procedure with deep source discipline. What's missing for the reader scanning to decide:
  1. No "Time to complete" estimate near the header (sibling pages have it; this is a bigger procedure — 1-3 hours? Half a day?).
  2. No reward / economics signal: a model on the network at competitive price earns. How much, typically? Where to see other orchestrators' rates? (line 243 mentions network-capabilities dashboard but no example range.)
  3. No "what if I'm not yet in the active set" pre-flight check at the top — buried in Prerequisites row 1 (line 167).
  4. The `status: draft` field is a product-signal bug — it tells the reader (or any tooling) the page is unfinished while it ships to production.
- **Fix step:**
  1. Add to header CTA `<Tip>` (line 31-35): "Time to complete: ~2 hours for first model; ~30 minutes for subsequent." `{/* REVIEW: verify time estimate */}` if uncertain.
  2. Add a sub-block in §"Step 5" or §"Operational notes" pricing accordion: "Typical SDXL-class price-per-pixel sits in <X-Y> wei range on tools.livepeer.cloud as of <date>." `{/* REVIEW: range */}` if uncertain.
  3. Add an `<Alert>` or `<Warning>` near the top (before §Prerequisites or as first row of Prerequisites table): "First check: confirm your orchestrator address shows as active on explorer.livepeer.org. If not, this tutorial won't work — fix activation first."
  4. Remove `status: draft` and add `veracityStatus: verified`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` flagship-tutorial pattern; the Time-to-complete signal is in sibling `ai-agent-on-livepeer.mdx` Tip (line 35) — adopt the same pattern.

## Summary

**Verdict**: MODERATE
**Severity counts**: CRITICAL 1 / HIGH 5 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. Two Related Pages cards link to broken `/v2/developers2/` paths (lines 602, 611) — these render 404 (8.1 + 7.7). **CRITICAL** — reader hitting these from a flagship tutorial reaches a dead end.
2. `purpose: explain` mismatch — should be `build` for a procedural tutorial (1.4).
3. Missing `veracityStatus` field + legacy `status: draft` field (1.8, 5.7, 7.7) — contradicts published location.
4. Related Pages uses `<CardGroup>` not `<Columns>`; cards lack `<CustomCardTitle>` (5.17, 5.22).
5. Page uses H2-per-Step pattern instead of `<StyledSteps>` (5.21) — design call needed; either accept as exception for multi-section infrastructure tutorials or refactor.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Fix broken Related Pages href: line 602 → `/v2/developers/build/tutorials/huggingface-to-livepeer-advanced`; line 611 → `/v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart` | 602, 611 | CRITICAL | S | check 8.1; docs.json line 2628-2636 |
| 2 | Change `purpose: explain` → `purpose: build` (or `integrate`) | 9 | HIGH | S | check 1.4 |
| 3 | Add `veracityStatus: verified` to frontmatter; remove legacy `status: draft` field | 24 (replace) | HIGH | S | check 1.8+5.7+6.6 |
| 4 | Convert `<CardGroup cols={2}>` (601) to `<Columns cols={2}>`; replace direct `title=` attribute on each Card with `<CustomCardTitle icon title horizontal />` | 599-614 | HIGH | M | check 5.16+5.17+5.22 |
| 5 | Add ≥1 cross-tab card to Related Pages (`/v2/about/network/architecture` or `/v2/gateways/setup/connect`) for ≥3 cross-tab coverage | Related Pages | HIGH | S | check 4.10+7.6 |
| 6 | Either (a) convert H2-per-Step content (lines 191-490) to `<StyledSteps>` + `<StyledStep title icon>`, or (b) raise a design-call comment in workspace asking whether infrastructure tutorials are exempt | 191-490 | HIGH | L | check 5.21; cross-batch consistency |
| 7 | Pin `livepeer/ai-runner:latest` to a specific tag (line 278); pin go-livepeer release at line 180 wording (cite minimum release containing AI flags) | 180, 278, 320 | HIGH | S | check 2.D3+6.8 |
| 8 | Reduce description from 197 to ≤160 chars | 4-6 | MEDIUM | S | check 1.11 |
| 9 | Shorten title from "Add a Hugging Face Model to Livepeer" (6 words) to 1-3 words concept-derived; sidebarTitle "HuggingFace to Livepeer" already correct | 2 | MEDIUM | S | check 3.6 |
| 10 | Add `## Verification` H2 label to Step 5/6/7 (or annotate that "Confirm the loop is closed" IS the Verification block) | 478 | MEDIUM | S | tutorial matrix |
| 11 | Add Time-to-complete to header Tip ("~2 hours for first model") | 31-35 | MEDIUM | S | layer 5 |
| 12 | Add TESTED date+env or NOT-TESTED reason on every code block (10) | 195, 210, 268, 292, 306, 407, 427, 438, 451, 525 | MEDIUM | M | check 6.2 |
| 13 | Compress to 1-2 tables OR add explicit comment that 4-table count is justified by infrastructure-procedure scope | 76, 158, 225, 322 | INFO | M | check 5.24 |
| 14 | Add Mermaid `graph LR` between Step 4 and Step 5 showing orchestrator → runner → /health → capability advertisement → dashboard | new diagram near line 360 | INFO | M | check 5.27; `MermaidColours.jsx` |
| 15 | Add "First check: orchestrator must be active" `<Warning>` near top to surface the prerequisite that's currently buried in the table | before §Prerequisites | INFO | S | layer 5 |
| 16 | Verify OG image path `/snippets/assets/media/og-images/en/developers.png` exists (other tutorials use `/snippets/assets/site/og-image/...`) | 17 | INFO | S | check 1.12 |
