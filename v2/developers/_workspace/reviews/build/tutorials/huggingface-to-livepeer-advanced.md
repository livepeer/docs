# Review: huggingface-to-livepeer-advanced.mdx

**Page**: `v2/developers/build/tutorials/huggingface-to-livepeer-advanced.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `explain` (mismatched — see 1.4)
**Bytes**: 45,368
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Most present; legacy `status: draft` (line 25); `veracityStatus` absent |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` (line 23) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: explain` (line 9) — but pageType is `tutorial`. Canonical: `build` or `integrate` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 24) |
| 1. Frontmatter | 1.6 | complexity | PASS | `advanced` (line 8) |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` (line 7) |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | absent. Page has dedicated §Sources accordion (line 1148) — should declare `verified` |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | line 4-6: "Three structurally different ways..." subject-led; 198 chars (over 160) |
| 1. Frontmatter | 1.12 | OG block complete | PASS | 5 fields (lines 18-22) |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (huggingface, byoc, custom pipeline) |
| 1. Frontmatter | 1.14 | audience match | PASS | developer register |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" used; "Initialise" (line 533); only US hit is `CenteredContainer` import (false-positive zone) |
| 2. Voice | 2.2 | Banned words | PASS | 0 hits |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 hits |
| 2. Voice | 2.4 | Banned constructions | MIXED | line 35: "This page tells you which one fits your model, then walks each path end-to-end" — self-reference inside Tip; acceptable inside narrow opener |
| 2. Voice | 2.5 | Opening order | PASS | line 40 "Livepeer's AI inference layer is implemented..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer-register strong (orchestrator, runner, PR-against-upstream language) |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | no "with just a few lines" / "easily integrated" |
| 2. Voice | 2.9 | Passive value | MIXED | line 41: "implemented as a set of pipeline runners..." passive but factual |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | `aiModels.json`, BYOC, orchestrator, runner, FastAPI, `ai-runner[realtime]` all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 (verified) |
| 2. Voice | 2.13 | Entity-led voice | PASS | sections lead with system fact ("The orchestrator's BYOC integration requires...", "The runner exposes a FastAPI app...") |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | PASS | tutorial moves from decision flow at line 86 to first code at line 322 — acceptable for a multi-path tutorial whose first job is path selection |
| 2. Voice | 2.D2 | API methods linked | PASS | `livePipelineToImage` (lines 195, 347, 794), `dl_checkpoints.sh` (358, 1160), `Pipeline` interface (190, 591), `ai/worker/docker.go` (1154) all linked to GitHub |
| 2. Voice | 2.D3 | Versions explicit | MIXED | `livepeer/ai-runner:latest` (line 373); `ai-runner v0.14.0` pinned (line 560 — good); `live-base-57efd92` pinned (line 689 — good); `nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04` pinned (956 — good); `go-livepeer ... master` (line 253) |
| 2. Voice | 2.D4 | Errors in main | PASS | troubleshooting Accordions inline at Step 5 (line 424) and Step 4 (line 1048); Common Errors not used — Operational notes Accordion serves this role |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | MIXED | line 504 `<Note>` carries LLM variant info (acceptable adjacent context); line 658 `<Note>` carries `__init__.py` warning (acceptable adjacent); line 525 `<Warning>` carries primary "Path 2 doesn't reach network in a single sitting" (correctly Warning, good) |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Path summary" (22), "Decision flow" (22), "Built-in pipeline shapes (Question 1)" (24), "Custom pipeline scope (Question 2)" (24), "BYOC container (Question 3)" (22), "Shared prerequisites" (22), "Path differences at a glance" (22), "Path 1: Configure an existing pipeline" (24), "Path 2: Build a custom pipeline" (24), "Path 3: Bring Your Own Container" (24), "Operational notes" (22), "Scope exclusions" (22), "Sources" (22), `Related pages` (exempt). H3 Step headings all 24. **FAIL on H3** "Path 1 done", "Path 2 done", "Path 3 done" (lines 493, 828, 1094) — score ~16 (low precision, conversational) |
| 3. Headings | 3.2 | Banned/weak | MIXED | no "Next Steps" / "How It Works" / "See Also" — but "Path N done" is weak terminology (3.2 lists this style as -3 informal) |
| 3. Headings | 3.3 | Contrast labels | PASS | "Path differences at a glance" is comparative not contrastive |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "HuggingFace to Livepeer (advanced paths)" — 4 words + parenthetical; sidebarTitle "HuggingFace Advanced" is 2 words — preferred |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | task-oriented Path/Step headings appropriate for multi-path tutorial |
| 4. Structure | 4.1 | One purpose | MIXED | 3-paths-in-one-page is structurally borderline; rubric is "One purpose, one audience, one job" but the page explicitly frames itself as a decision-tree-then-walkthrough; defensible at the explicit-scope level |
| 4. Structure | 4.2 | Purpose test | PASS | "This page lets the developer pick a path and follow it end-to-end" — deliverable |
| 4. Structure | 4.3 | PREV/NEXT | PASS | Related Pages routes to sibling basic tutorial + BYOC CPU orchestrator tutorial |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | PASS | §Shared prerequisites (line 227) StyledTable lists active orchestrator, NVIDIA GPU, Docker, go-livepeer build, verification surface |
| 4. Structure | 4.6 | Out-of-scope | PASS | §Scope exclusions (line 1134) explicitly excludes Studio, Daydream-as-runtime, VRAM thresholds without source, pricing recommendations |
| 4. Structure | 4.7 | Info type | PASS | procedural + technical + analytical (decision tree) |
| 4. Structure | 4.8 | No duplication | MIXED | Path 1 Steps 1-6 reprise the structure of sibling `huggingface-to-livepeer.mdx` Steps 1-7. Code blocks are subtly different (e.g. `realvis` variant) but the procedure is the same. Strong overlap |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | MIXED | Related Pages has 4 cards: 1 broken `developers2/` (line 1186), 3 orchestrator tutorials (lines 1189, 1192, 1195). Counting orchestrator paths as cross-tab → 3 PASS, but the broken developers2 link is critical |
| 4. Structure | 4.11 | Discord test | PASS | three full paths, each end-to-end; decision tree at start; sources accordion |
| 4. Structure | 4.12 | Page size | MIXED | 45.4 KB — by far the largest tutorial in the section. Justified for 3-paths-in-one but borderline for one-page experience |
| 4. Structure | 4.13 | Zero TODO | PASS | 0 hits |
| 4. Structure | 4.14 | Flat layout | MIXED | 3 paths as sequential H2 sections (Path 1 line 311, Path 2 line 514, Path 3 line 842). The page could use `<Tabs>` for path selection rather than 3 sequential walkthroughs — but the decision-flow + sequential layout is the page's central pedagogical move. Defensible |
| 4. Structure | 4.15 | Trade-offs named | PASS | §Operational notes (line 1105) AccordionGroup with 5 items (Discovery/Selection, Reach, Iterating protocol, Pricing, Warm/cold); §Path differences at a glance table makes trade-offs explicit upfront |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | all 30+ fenced blocks have `bash`, `json`, `python`, `dockerfile`, `toml`, `text`, `mermaid`, `yaml`, `go` |
| 4. Structure | 4.18 | Code-first opening | N/A | decision-tree opening defensible |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold strong overall; uses H3 Steps not `<StyledSteps>` |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites PASS; Steps as H3 PASS (3 path scaffolds); Verification implicit via "Path N done" subsections (493, 828, 1094) — should be H2 §Verification or §"How to confirm"; Related Pages PASS |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | PASS | StyledTable for path summary + prereqs + path differences (4 tables); Mermaid for decision flow; AccordionGroup for troubleshooting + operational notes + sources |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 25 `status: draft` legacy field |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | Best-in-batch on icon+title and Accordion icon; lacks StyledSteps and `<Columns>` |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | MIXED | 3 paths as sequential H2 — `<Tabs>` would be the canonical 1D multi-variant layout (5.14: "1D = Tabs"). Current pattern is intentional pedagogy (Decision → Path 1 → Path 2 → Path 3) but rubric prefers Tabs |
| 5. Layout | 5.15 | Data imports | MIXED | 4 hardcoded StyledTables; pricing/wei figures appropriately marked illustrative inline |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Related pages" H2 (1183) with `<CardGroup>` — should be `<Columns cols={2}>` per rubric |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (line 1185) not `<Columns cols={2}>`; cards use direct `title=` attribute + `icon` + `href` + `arrow horizontal` — lack `<CustomCardTitle>` wrapper |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | PASS | All 15 Accordions (lines 425, 428, 432, 1049, 1052, 1056, 1108, 1112, 1117, 1121, 1125, 1151, 1158, 1165, 1171) have `icon` props |
| 5. Layout | 5.20 | Code icon+title | PASS | All 31 fenced blocks (excluding mermaid + the unhighlighted YAML at line 1001 — wait, 1001 IS `yaml icon="docker"`) carry `icon` + `title`. Even the `text` project-layout block (line 574) has both. **Best-in-batch** |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Page uses H3 Steps inside each Path's H2. For 7+7+5 = 19 procedural steps total, `<StyledSteps>` would be canonical. Same design call as sibling `huggingface-to-livepeer.mdx` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Related Pages cards (1186-1196) use direct `title=` not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | PASS | All 4 tables use `<StyledTable variant="bordered">` (lines 57, 104, 231, 266, 871) — actually 5 tables |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 5 `<StyledTable>` blocks; rubric max 1-2. Defensible at 3-paths scale but rubric strict |
| 5. Layout | 5.25 | Max 1 major element | MIXED | 5 StyledTables + 1 Mermaid + 4 AccordionGroups — heaviest page in section. Justified by 3-paths scale |
| 5. Layout | 5.26 | CustomDivider | PASS | 14 dividers; opening after imports; one before Related Pages; intermediate between major H2s |
| 5. Layout | 5.27 | Mermaid | PASS | Decision flow (lines 88-97) uses Mermaid `flowchart TD`. Does NOT use `MermaidColours.jsx` — colours default. Adds prose before diagram |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | `status: draft` (line 25) contradicts published location |
| 6. Veracity | 6.1 | Claims citable | PASS | Every flag, every shell command, every API path linked to its source file. Strong source discipline matching sibling |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block carries TESTED/NOT-TESTED label |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "24 GB VRAM minimum" justified (245); "12 GB SDXL" justified (1126); wei figure marked illustrative (336, line 352) |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | absent — should be `verified` |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | MIXED | `livepeer/ai-runner:latest` (line 373) unpinned for Path 1 download; Path 2 pins `v0.14.0` (line 560) and `live-base-57efd92` (689); Path 3 pins `cuda:12.1.0-cudnn8` (956). Inconsistent pinning across paths |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | PASS | §Sources (line 1148) groups by Path with T1 sources |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | MIXED | 3 of 4 Related Pages cards point to orchestrator tutorials; 1 points to broken `developers2/` |
| 7. Nav | 7.7 | Correct lane | MIXED | `status: draft` contradicts published location |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | FAIL | line 1186: `href="/v2/developers2/build/tutorials/huggingface-to-livepeer"` — `developers2/` is legacy, 404 in live site. Canonical path: `/v2/developers/build/tutorials/huggingface-to-livepeer` |
| 8. Links | 8.2 | External | NOT-TESTED | many external links — sources accordion is dense |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | comprehensive 3-path coverage |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "HuggingFace to Livepeer (advanced paths)" | MIXED | 4 words + parenthetical |
| sidebarTitle | Yes | "HuggingFace Advanced" | PASS | 2 words |
| description | Yes | "Three structurally different ways..." | MIXED | 198 chars (>160) |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | explain | FAIL | should be `build` |
| complexity | Yes | advanced | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | path uses `/snippets/assets/media/og-images/...` |
| veracityStatus | No | — | FAIL | missing |
| lastVerified | Yes | "2026-04-28" | PASS | |
| status | Yes | draft | FAIL | legacy field + contradicts published location |
| pageVariant | No | — | INFO | optional |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (14×) | Required | PASS placement |
| `<Tip>` (header CTA) | Yes (32) | Recommended | PASS |
| `<Warning>` | Yes (525) | Recommended | PASS — correct usage for path-2 reach caveat |
| `<Note>` | Yes (504, 658) | — | Adjacent context, defensible |
| `<Steps>` / `<Step>` | No | — | Uses H3-per-step |
| `<StyledSteps>` | No | Required for procedural | FAIL 5.21 |
| `<Tabs>` / `<Tab icon>` | No | — | Page would benefit from path-selection Tabs but uses sequential H2 |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (4 groups; 15 accordions) | — | PASS 5.19 — every Accordion has `icon` |
| `<StyledTable>` | Yes (5) | Required | PASS 5.23; FAIL 5.24 (>2 limit) |
| Fenced code with icon+title | Yes (31) | Required | PASS 5.20 — best-in-batch |
| `<CardGroup cols={2}>` / `<Card>` | Yes (1185) | — | FAIL 5.16+5.17 — should be `<Columns>` |
| `<CustomCardTitle>` | No | Required | FAIL — uses direct `title` attribute |
| Mermaid | Yes (88) | Recommended | PASS — decision flow `flowchart TD`; doesn't import `MermaidColours.jsx` so defaults apply |

## Cross-page duplication and link gaps

- **OVERLAP**: Path 1 Steps 1-6 (lines 320-491) reprise sibling `huggingface-to-livepeer.mdx` Steps 1-7 with subtle differences (different model `SG161222/RealVisXL_V4.0_Lightning` here vs same on sibling — actually identical model). Path 1's "Step 5: Verify on capabilities tool" Accordion troubleshooting (line 424) overlaps sibling's troubleshooting Accordion. Acceptable as "Path 1 standalone for advanced reader" but high duplication risk if sibling diverges.
- **LINK GAPS**: One Related Pages card points to `/v2/developers2/build/tutorials/huggingface-to-livepeer` (line 1186) — broken in live nav. Canonical path: `/v2/developers/build/tutorials/huggingface-to-livepeer`. Other 3 cards point to orchestrator tutorials and are correct.
- **STRANDED**: Reader who completes any Path has a working model + verification chain. Related Pages routes to sibling (broken link), full AI pipeline tutorial, realtime AI tutorial, BYOC CPU tutorial — all orchestrator-side. No card pointing to `model-support.mdx` or `ai-pipelines.mdx` reference, or `byoc/overview.mdx`. Reader graduating to "now I want to develop my own pipeline pattern" has implicit but not signposted path.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | clean |
| US spellings | 0 | only false-positive zone (CenteredContainer not imported here — fine) |
| Banned words | 0 | |
| Banned phrases | 0 | |
| Banned constructions | 1 | line 35: "This page tells you which one fits your model, then walks each path end-to-end" — self-reference inside Tip |
| Question headings | 0 | "Built-in pipeline shapes (Question 1)" frames a question in prose but heading itself is statement |
| Studio refs | 0 | clean — §Scope exclusions explicitly disclaims Studio |
| Self-reference | 1 | line 35 (above) |
| Banned heading | "Path N done" (493, 828, 1094) | Informal, low precision — flag as MEDIUM |
| Deprecated terms | 0 | |
| Hedging openers | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Path summary | 22 |
| Decision flow | 22 |
| Built-in pipeline shapes (Question 1) | 24 |
| Custom pipeline scope (Question 2) | 24 |
| BYOC container (Question 3) | 22 |
| Shared prerequisites | 22 |
| Path differences at a glance | 22 |
| Path 1: Configure an existing pipeline | 24 |
| Step 1: Pick the model directory | 24 |
| Step 2: Write aiModels.json | 24 |
| Step 3: Pre-download weights | 24 |
| Step 4: Start go-livepeer with the AI flags | 24 |
| Step 5: Verify on the capabilities tool | 24 |
| Step 6: Test through your own gateway | 24 |
| Direct runner test | 22 |
| Self-hosted gateway test | 22 |
| Path 1 done | **16 (informal)** |
| Path 2: Build a custom pipeline | 24 |
| (steps similar 24 each) | 24 |
| Path 2 done | **16 (informal)** |
| Path 3: Bring Your Own Container | 24 |
| BYOC Fit Criteria | 22 |
| The BYOC contract | 22 |
| Path 3 done | **16 (informal)** |
| Operational notes | 22 |
| Scope exclusions | 22 |
| Sources | 22 |
| Related pages | exempt |

H3 "Path N done" headings fall below 20/25 — FAIL 3.1.

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 88 | mermaid | N/A | N/A | N/A | diagram |
| 322 | bash | ✓ terminal | ✓ "export-model-dir.sh" | NOT-TESTED | |
| 331 | json | ✓ code | ✓ "aiModels.json" | NOT-TESTED | |
| 363 | bash | ✓ terminal | ✓ "download-weights.sh" | NOT-TESTED | `ai-runner:latest` unpinned |
| 379 | bash | ✓ terminal | ✓ "verify-weights.sh" | NOT-TESTED | |
| 389 | bash | ✓ terminal | ✓ "start-orchestrator.sh" | NOT-TESTED | |
| 445 | bash | ✓ terminal | ✓ "runner-direct.sh" | NOT-TESTED | |
| 466 | bash | ✓ terminal | ✓ "start-gateway.sh" | NOT-TESTED | |
| 476 | bash | ✓ terminal | ✓ "gateway-request.sh" | NOT-TESTED | |
| 539 | bash | ✓ terminal | ✓ "init-project.sh" | NOT-TESTED | |
| 547 | toml | ✓ code | ✓ "pyproject.toml" | NOT-TESTED | pins `ai-runner v0.14.0` — good |
| 574 | text | ✓ folder | ✓ "project-layout" | N/A | tree |
| 595 | python | ✓ code | ✓ "src/my_pipeline/pipeline/params.py" | NOT-TESTED | |
| 605 | python | ✓ code | ✓ "src/my_pipeline/pipeline/pipeline.py" | NOT-TESTED | |
| 666 | python | ✓ code | ✓ "src/my_pipeline/main.py" | NOT-TESTED | |
| 688 | dockerfile | ✓ docker | ✓ "Dockerfile" | NOT-TESTED | pins `live-base-57efd92` |
| 720 | bash | ✓ terminal | ✓ "build-image.sh" | NOT-TESTED | |
| 726 | bash | ✓ terminal | ✓ "prepare-models.sh" | NOT-TESTED | |
| 737 | bash | ✓ terminal | ✓ "run-pipeline.sh" | NOT-TESTED | |
| 747 | bash | ✓ terminal | ✓ "check-health.sh" | NOT-TESTED | |
| 765 | bash | ✓ code | ✓ "dl_checkpoints.sh (additions)" | NOT-TESTED | |
| 771 | bash | ✓ code | ✓ "dl_checkpoints.sh (case branch)" | NOT-TESTED | |
| 797 | go | ✓ code | ✓ "ai/worker/docker.go" | NOT-TESTED | |
| 811 | json | ✓ code | ✓ "aiModels.json" | NOT-TESTED | |
| 905 | python | ✓ code | ✓ "server.py" | NOT-TESTED | |
| 955 | dockerfile | ✓ docker | ✓ "Dockerfile" | NOT-TESTED | pins `cuda:12.1.0-cudnn8-runtime-ubuntu22.04` |
| 972 | bash | ✓ terminal | ✓ "build-byoc.sh" | NOT-TESTED | |
| 978 | bash | ✓ terminal | ✓ "test-byoc-local.sh" | NOT-TESTED | |
| 1001 | yaml | ✓ docker | ✓ "docker-compose.yml" | NOT-TESTED | |
| 1068 | bash | ✓ terminal | ✓ "start-gateway.sh" | NOT-TESTED | |

All 30 code blocks PASS 5.20 + 4.17. Only gap is TESTED labelling.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "decide your path, then follow the matching steps". Decision flow + path summary deliver the decision well. But the 3 paths consume 700 lines of sequential walkthrough on one page — a reader who picked Path 3 still scrolls past 500 lines of Paths 1 and 2 to reach their content. The page lacks a path-specific jump nav. The "Path summary" StyledTable at line 57 is the right structure for selection but cards/links to anchor IDs would make path-by-path navigation single-click.
- **Fix step:** After §"Path differences at a glance" (line 264), add a 3-card `<Columns cols={3}>` block with `<Card title="Path 1" icon="leaf" href="#path-1-configure-an-existing-pipeline">`, etc. Reader picks once, jumps once. Alternative: convert the 3 Path H2s into `<Tabs>` per 5.14 ("1D = Tabs") — bigger refactor.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern; sibling tutorial uses sequential H2-per-Step which is appropriate at 7-step scale but this page is 19-steps.

### Layer 2 — Composition
- **Gap:** Best-in-batch on icon+title (30/30 blocks) and Accordion icons (15/15). Remaining structural gaps:
  1. `<CardGroup>` not `<Columns>` (5.16/5.17); cards lack `<CustomCardTitle>` (5.22).
  2. H3 Steps not `<StyledSteps>` (5.21) — design call shared with sibling `huggingface-to-livepeer.mdx`.
  3. 5 StyledTables exceeds 1-2 max (5.24).
  4. Mermaid decision flow doesn't import `MermaidColours.jsx`.
  5. 3 H3 "Path N done" sub-headings are weak (3.1 FAIL).
  6. Sequential Path H2s instead of `<Tabs>` (5.14 prefers Tabs for 1D variants).
- **Fix step:**
  1. Convert `<CardGroup cols={2}>` (1185) to `<Columns cols={2}>`; add `<CustomCardTitle icon title horizontal>` to each Card.
  2. Decision call needed: H3-per-Step + multi-path tutorial — accept as exception or refactor to `<StyledSteps>` per path.
  3. Compress: Path summary (57) + Path differences (266) overlap conceptually; one could be removed.
  4. Add `import { MermaidColours } from '/snippets/components/config/MermaidColours.jsx'` and apply theme tokens to decision flow.
  5. Replace "Path N done" H3s with "Path N verification" or "Path N complete" with named criteria as bullet list above.
  6. Optional: `<Tabs>` for path selection — large refactor, defer to design pass.
- **Source/exemplar:** Sibling `huggingface-to-livepeer.mdx` Sources accordion + this page's Accordion-icon discipline. The icon+title pattern here IS the in-repo exemplar for code blocks.

### Layer 3 — Cross-page integration
- **Gap:** Same broken-link family as sibling: one Related Pages card points to `/v2/developers2/build/tutorials/huggingface-to-livepeer` (line 1186) which doesn't render. Path 2's reference to `daydreamlive/scope-runner` (522, 1162) is correctly framed as code example not runtime; no internal link to `comfystream/comfystream-as-byoc.mdx` even though it's the natural companion for Path 2 reader.
- **Fix step:**
  1. Fix line 1186: `href="/v2/developers/build/tutorials/huggingface-to-livepeer"` (drop the `2`).
  2. Add a 5th Related Pages card pointing to `/v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-as-byoc` ("Build a ComfyStream BYOC variant") or `/v2/developers/build/compute/byoc/overview` ("BYOC mechanism overview") for the Path 3 graduation.
  3. Add inline prose link at line 188-192 to `comfystream/workflow-authoring.mdx` for readers whose Path 2 model is a real-time pipeline: "Real-time pipelines have their own authoring guide at [Workflow Authoring](/v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring)."
- **Source/exemplar:** docs.json paths for canonical hrefs.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. `livepeer/ai-runner:latest` (line 373) unpinned in Path 1 download while Path 2 pins `v0.14.0` and `live-base-57efd92` — inconsistent versioning.
  2. `go-livepeer ... master` (line 253) is a moving target.
  3. No TESTED labels.
  4. `veracityStatus` missing despite §Sources discipline.
  5. Path 3 §"Register the capability with go-livepeer" (line 1025) reads as honest but vague: "The exact flag and config-file shape is documented inline in livepeer/go-livepeer. Search the repository for `ExternalCapability`..." — should cite a specific file path or PR.
- **Fix step:**
  1. Pin runner image at line 373 to a specific tag matching Path 2's pin (`v0.14.0` or current stable). Add `{/* REVIEW: align ai-runner pin across paths */}`.
  2. Pin go-livepeer release at line 253 wording: cite the smallest release containing the AI flags.
  3. Add TESTED labels with date/env per block, or NOT-TESTED with the source-file reference grounding the block.
  4. Add `veracityStatus: verified` to frontmatter.
  5. At line 1025, cite the specific file (e.g. `livepeer/go-livepeer/server/handlers.go` or wherever ExternalCapability is defined) — or add `{/* REVIEW: find specific file path for ExternalCapability */}`.
- **Source/exemplar:** §Sources (line 1148) already names T1 sources; extend the same discipline to TESTED labelling and version pins.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No "Time per path" estimate near header (Path 1 hours, Path 2 weeks, Path 3 days — flagged in line 289 table, but should also be in Tip).
  2. `status: draft` field tells tooling the page is unfinished while it ships to production.
  3. No "What can go wrong specific to Path 2 PR cycle" — Path 2's "Path 2 done" criteria are local-only; the on-network part depends on upstream PR review which can be silent for weeks. Not flagged as a maintenance signal.
  4. Page has 4-card §Sources organised by Path — exemplary for veracity but no equivalent §"Maintenance status" or §"When upstream changes" warning. The 3 paths depend on actively-developed upstream (`ai-runner`, `go-livepeer`, BYOC contract); a "this guide tracks ai-runner ≤ v0.14.0 + go-livepeer ≤ vX.Y.Z" badge would surface the maintenance contract.
- **Fix step:**
  1. Add to header Tip (32-36): "Time per path: Path 1 hours; Path 2 weeks (PR review); Path 3 days (gateway adoption)." `{/* REVIEW: verify estimates */}`.
  2. Remove `status: draft` and add `veracityStatus: verified`.
  3. Path 2 §"Path 2 done" (line 828): Add explicit "What can stall" Accordion noting PR review cadence is upstream-controlled and can take weeks/months; suggest filing the PR early in the build process to overlap review with local development.
  4. Add `<Badge>` near header: `<Badge>Tracks ai-runner v0.14.0; go-livepeer master at {date}; BYOC contract per livepeer/go-livepeer#3866</Badge>` with `{/* REVIEW: confirm versions */}`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` flagship-tutorial pattern; sibling's "Sources" Accordion is the in-repo exemplar for grounded veracity.

## Summary

**Verdict**: MODERATE
**Severity counts**: CRITICAL 1 / HIGH 5 / MEDIUM 6 / INFO 4
**Critical findings (1–5)**:
1. Related Pages card at line 1186 points to broken `/v2/developers2/` path (8.1) — **CRITICAL** dead-end from a flagship 45 KB tutorial.
2. `purpose: explain` mismatch — should be `build` for a procedural tutorial (1.4).
3. Missing `veracityStatus` + legacy `status: draft` field (1.8, 5.7, 7.7).
4. Related Pages uses `<CardGroup>` not `<Columns>`; cards lack `<CustomCardTitle>` (5.17, 5.22).
5. Page uses H3-per-Step pattern instead of `<StyledSteps>` (5.21) — design call shared with sibling.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Fix broken Related Pages href: line 1186 → `/v2/developers/build/tutorials/huggingface-to-livepeer` (drop the `2`) | 1186 | CRITICAL | S | check 8.1 |
| 2 | Change `purpose: explain` → `purpose: build` | 9 | HIGH | S | check 1.4 |
| 3 | Add `veracityStatus: verified` to frontmatter; remove legacy `status: draft` | 25 (replace) | HIGH | S | check 1.8+5.7+6.6 |
| 4 | Convert `<CardGroup cols={2}>` (1185) to `<Columns cols={2}>`; replace direct `title=` attribute on each Card with `<CustomCardTitle icon title horizontal />` | 1183-1198 | HIGH | M | check 5.16+5.17+5.22 |
| 5 | Either convert H3 Steps to `<StyledSteps>` per Path, OR confirm batch-wide design decision that multi-path infrastructure tutorials are H3-Step exception | 320-491, 533-826, 901-1093 | HIGH | L | check 5.21 |
| 6 | Pin `livepeer/ai-runner:latest` (line 373) to match Path 2's `v0.14.0` pin; pin `go-livepeer master` reference (line 253) to a release containing AI flags | 253, 373 | HIGH | S | check 2.D3+6.8 |
| 7 | Rename H3 "Path 1 done" / "Path 2 done" / "Path 3 done" → "Path 1 verification" / "Path 2 verification" / "Path 3 verification" with criteria preserved | 493, 828, 1094 | MEDIUM | S | check 3.1 |
| 8 | Add jump-nav `<Columns cols={3}>` after §"Path differences at a glance" with cards anchoring to each Path H2 | after 309 | MEDIUM | M | layer 1 |
| 9 | Add Time-per-path to header Tip + remove `status: draft` simultaneously | 32-36 + 25 | MEDIUM | S | layer 5 |
| 10 | Reduce description (line 4-6) from 198 to ≤160 chars | 4-6 | MEDIUM | S | check 1.11 |
| 11 | Add TESTED date+env or NOT-TESTED reason on every code block (30) | every code block | MEDIUM | M | check 6.2 |
| 12 | Import `MermaidColours.jsx` and apply theme tokens to decision flow diagram | 29-30, 88-97 | MEDIUM | S | check 5.27 |
| 13 | At line 1025 (Step 3, Path 3), cite specific go-livepeer file/PR for ExternalCapability config; add `{/* REVIEW: find specific file path */}` if uncertain | 1025-1038 | MEDIUM | S | layer 4 |
| 14 | Compress tables: Path summary (57) + Path differences (266) overlap — consider keeping only one OR add an explicit "summary vs detailed comparison" framing | 57-82, 266-307 | INFO | M | check 5.24 |
| 15 | Add 5th Related Pages card to BYOC overview or ComfyStream-as-BYOC for Path 3 graduation | Related Pages | INFO | S | layer 3 |
| 16 | Add `<Badge>` near header surfacing upstream-version tracking (ai-runner, go-livepeer, BYOC contract PR) | after 36 | INFO | S | layer 5 |
| 17 | Verify OG image path `/snippets/assets/media/og-images/en/developers.png` exists | 18 | INFO | S | check 1.12 |
