# Quality Check Report — rcs-requirements.mdx

**File:** `v2/orchestrators/setup/rcs-requirements.mdx`
**Checked against:** `checks.mdx` + `Frameworks.mdx`
**Date:** 2026-03-24
**Overall verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Operational and Hardware Requirements for Orchestrators` | FAIL | 7 words — exceeds the 3-word target for titles per check 3.6. Should be concept-derived and shorter. |
| `sidebarTitle` | Yes | `Setup Checklist` | FAIL | Mismatches the page content. The page is a hardware requirements reference, not a setup checklist. "Checklist" term in sidebarTitle appears only as a single H2 section heading at line 81. |
| `description` | Yes | `Minimum, recommended, and production hardware for running a Livepeer orchestrator.` | PASS | Subject-first, 74 chars, UK English, no self-reference. |
| `pageType` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `audience` | Yes | `orchestrator` | PASS | Valid canonical token |
| `purpose` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `complexity` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `lifecycleStage` | Missing | — | FAIL | Required field (check 1.1). Not present. |
| `keywords` | Yes | `livepeer, orchestrators, hardware, GPU, requirements` | FAIL | `livepeer` and `orchestrators` are generic (check 1.13). Too few keywords. Better: `GPU requirements livepeer orchestrator`, `VRAM requirements AI inference`, `NVENC transcoding hardware`, `minimum GPU livepeer node`, `CUDA requirements orchestrator`. |
| OG image block | Yes | Full 5-field block present | PASS | All 5 OG fields present. Note: uses fallback path `/snippets/assets/site/og-image/fallback.png` not the tab-specific path. INFO only. |
| `status` | Missing | — | INFO | Not a required field |
| `veracityStatus` | Missing | — | FAIL | Required field (check 1.1, 1.8). Not present. Correct value: `unverified` — hardware specs and VRAM figures are unverified against primary sources. |
| `industry` | Missing | — | INFO | Optional. Not required. |
| `niche` | Missing | — | INFO | Optional. Not required. |
| `pageVariant` | Missing | — | INFO | No deprecated pageType to migrate, so not required. Once `pageType` is set, verify if variant is appropriate. |

**Frontmatter summary:** 5 required fields completely missing (`pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`). `sidebarTitle` mismatches page content. `title` too long. `keywords` low-quality.

---

## Category 1 — Frontmatter & Taxonomy

| Check | Result | Detail |
|-------|--------|--------|
| 1.1 All 10 required fields present | FAIL | `pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` missing. Only 5 of 10 required fields present. |
| 1.2 pageType canonical | FAIL | Field missing. Most appropriate value for this page: `reference` with `pageVariant: specification` — it is a structured lookup of hardware specifications with no procedures. Alternatively `guide` if the page is meant to guide hardware selection decisions. Decision required — see Blocking Decision below. |
| 1.3 pageVariant valid | INFO | Not present. Once `pageType` is set: if `reference`, `pageVariant: specification` is appropriate. Cited: checks.mdx §1.3. |
| 1.4 purpose canonical | FAIL | Field missing. Correct value depends on Blocking Decision: if `reference` → `reference`; if `guide` → `evaluate`. Cited: checks.mdx §1.4 and Frameworks.mdx §1.2. |
| 1.5 audience canonical | PASS | `orchestrator` — valid canonical token |
| 1.6 complexity canonical | FAIL | Field missing. Correct value: `intermediate` (assumes Linux/GPU familiarity; CUDA, Docker, hardware terminology used without definition). |
| 1.7 lifecycleStage canonical | FAIL | Field missing. Correct value: `setup` (first-time hardware assessment before installation). |
| 1.8 veracityStatus honest | FAIL | Field missing. No REVIEW flags present, but hardware specs (VRAM numbers, CUDA versions, network latency targets) are not verified against primary sources. Correct value: `unverified`. |
| 1.9 industry valid | N/A | Optional field not present |
| 1.10 niche valid | N/A | Optional field not present |
| 1.11 description well-formed | PASS | "Minimum, recommended, and production hardware for running a Livepeer orchestrator." — 74 chars, subject-first, UK English, no self-reference. |
| 1.12 OG image block complete | PASS | All 5 fields present. Fallback path used (not tab-specific) — INFO only, not a failure. |
| 1.13 keywords quality | FAIL | `livepeer` and `orchestrators` are explicitly cited as bad examples in check 1.13. Better: `GPU requirements livepeer orchestrator`, `VRAM requirements AI inference livepeer`, `NVENC transcoding hardware`, `minimum GPU specs livepeer node 2026`, `CUDA 12 orchestrator setup`. |

---

## Category 2 — Voice & Copy

| Check | Result | Detail |
|-------|--------|--------|
| 2.1 UK English | PASS | No US spelling violations. "Optimised" not used (US "optimized" not present). No -ize endings. |
| 2.2 Zero banned words | FAIL | Line 61: "Stake does **not** determine AI job routing; capability and price do." — `not` is the primary statement rather than a positive assertion. This is also caught by check 2.4. No `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` found. |
| 2.3 Zero banned phrases | PASS | No banned phrases found. No "This section covers", "This page explains", "Understanding X is essential", etc. |
| 2.4 Zero banned constructions | FAIL | **Line 61:** "Stake does **not** determine AI job routing; capability and price do." — `not [X]` as primary statement. Rule: state the positive. Fix: "AI job routing is determined by capability and price, not stake." Wait — this still contains "not stake." Better fix: "AI job routing responds to capability and price. Stake level is irrelevant for AI workloads." |
| 2.5 Opening order correct | PASS | Line 23 opens with a factual statement about what orchestrators run and the business consequence: "Hardware directly affects job selection, reputation, and revenue." Value before mechanism — correct. |
| 2.6 Paragraph discipline | PASS | Prose sections are brief and single-job. "Suitable for testnet, low-volume workloads, and learning." — one sentence, one job. "Optimised for real-time streaming and multi-resolution transcoding." — same. |
| 2.7 Audience register correct | PASS | `orchestrator` register: hardware-specific, VRAM figures, CUDA version, GPU model numbers. Correct. |
| 2.8 Per-audience prohibited phrases | PASS | No "easy to set up", "simple", "the network rewards you for" found. |
| 2.9 No passive value statements | PASS | All specs are concrete: "8GB VRAM", "4 cores", "100 Mbps symmetric", "CUDA 12+". |
| 2.10 No hedging openers | PASS | Opens with a fact: "Orchestrators run **video transcoding** (NVENC/FFmpeg) and/or **AI inference** on GPUs." |
| 2.11 Terminology locked | FAIL | **Line 91:** "See also" — this is a banned heading term per Frameworks.mdx §4.1 (Banned tier). Also caught by check 3.2. No deprecated role terms found. `NVENC/FFmpeg`, `CUDA`, `NVIDIA Container Toolkit`, `DCGM exporter` — all current. |

---

## Category 3 — Section Naming & Headings

H2 headings: "Minimum (development / testing)", "Recommended (video / production)", "AI inference", "Network and ops", "Checklist before going live", "See also"

| Check | Result | Detail |
|-------|--------|--------|
| 3.1 Every heading ≥20/25 | FAIL | See Heading Score Table below. Multiple headings fail. |
| 3.2 No banned standalone terms | FAIL | **Line 90: "See also"** — `See Also` is in the **Banned** tier per Frameworks.mdx §4.1. Fix: replace with "Related Setup Pages" or convert to a CardGroup with no H2. |
| 3.3 No literal contrast labels | PASS | No X vs Y headings |
| 3.4 Domain-anchor rule | FAIL | "AI inference" (line 59) and "Network and ops" (line 75) lack domain anchors that would make them interpretable in isolation. "AI inference" — interpretable but vague. "Network and ops" — extremely generic, no domain anchor. |
| 3.5 Heading names concept, not examples | FAIL | "Minimum (development / testing)" names the tier label and gives examples in parentheses. The parenthetical "(development / testing)" is an example list embedded in the heading. |
| 3.6 Title well-formed | FAIL | "Operational and Hardware Requirements for Orchestrators" — 7 words. Target: 1–3 words, concept-derived. Fix: "Hardware Requirements" or "Node Requirements". Note: `sidebarTitle: Setup Checklist` does not match the page content. |
| 3.7 Sounds like expert editorial | FAIL | "Network and ops" is not an expert editorial choice. "See also" is banned and structurally weak. |

---

## Category 4 — Page Structure & Content Architecture

**Nav sequence from docs.json (lines 2860–2866):**
- PREV: `v2/orchestrators/setup/guide` (line 2860)
- CURRENT: `v2/orchestrators/setup/rcs-requirements` (line 2861)
- NEXT: `v2/orchestrators/setup/rs-install` (line 2862)

| Check | Result | Detail |
|-------|--------|--------|
| 4.1 One purpose, one audience, one job | FAIL | The page conflates two jobs: (a) hardware specification reference for decision-making, and (b) a pre-launch checklist (lines 81–88). These are different reader states. See Blocking Decision. |
| 4.2 Purpose statement test | FAIL | Cannot write a single-sentence purpose: the page is partly a reference (hardware specs) and partly an instruction (checklist). This confirms the scope conflict flagged in 4.1. |
| 4.3 PREV/NEXT adjacency | PASS | PREV: `guide` — reader arrives from the setup overview. NEXT: `rs-install` — reader leaves to install. Arriving reader needs to know hardware requirements before installing. Leaving reader has assessed requirements and is ready to proceed. Sequence is coherent. Cited: docs.json lines 2860–2862. |
| 4.4 No dead ends | FAIL | "See also" Cards at lines 92–96 link to: `./install-go-livepeer`, `./orchestrator-stats`, `./data-centre-setup`. None of these paths exist in docs.json. `rs-install` is the install page (confirmed docs.json line 2862). `orchestrator-stats` and `data-centre-setup` have no matches in docs.json. These are dead links. |
| 4.5 Prerequisites stated | N/A | This is the first substantive page in the setup sequence — it is itself a prerequisite reference. |
| 4.6 Out-of-scope clear | PASS | Scope is clear: hardware and network requirements. No scope creep. |
| 4.7 Information type per section | FAIL | Purpose is unclear (see Blocking Decision). If `reference` → information types `factual`, `technical` are correct. The "Checklist before going live" section (lines 81–88) is `procedural`, which is not a permitted type for `reference` purpose. If `guide` → `evaluative`, `analytical` expected; again checklist is misaligned. |
| 4.8 No content duplication | INFO | The checklist items (lines 83–88) partially duplicate setup steps from `rs-install` and `configure`. Not verified against those pages. |
| 4.9 Section orientation present | N/A | Page-level check |
| 4.10 Cross-tab links | N/A | Tab-level check. Not applicable at this position. |

---

## Category 5 — Layout, Components & Template

| Check | Result | Detail |
|-------|--------|--------|
| 5.1 Correct template for pageType | FAIL | `pageType` missing — cannot evaluate template compliance. If `reference`: requires Reference section + structured lookup content. If `guide`: requires Overview + Steps or H2 sections. |
| 5.2 Required sections present | FAIL | `pageType` missing — cannot evaluate required sections. The checklist (lines 81–88) uses a bulleted list, not a Steps component, which would be required if `instruction`. |
| 5.3 Only approved components | NOT-TESTED | `DynamicTable` used (line 22 import). `docs-guide/catalog/components-catalog.mdx` not read. Approval status NOT-TESTED. |
| 5.4 Avoided components absent | PASS | No TODO/TBD placeholders. No Coming Soon. |
| 5.5 Info type → component mapping | FAIL | Reference data (hardware specs) → `DynamicTable` (acceptable if approved). Checklist (lines 81–88) → bare markdown bullets (not Steps component, which is the preferred mapping for procedural content). |
| 5.6 MDX renders clean | NOT-TESTED | Not rendered locally. `Columns` component used at line 92 for the "See also" Cards — this is a non-standard Mintlify component. NOT-TESTED for render. |
| 5.7 No old-schema frontmatter | PASS | No deprecated pageType aliases present (pageType is simply missing). |
| 5.8 CSS custom properties | N/A | No inline CSS visible |
| 5.9 Generated file banners | N/A | No generated-file-banner present |
| 5.10 Component naming/import | PASS | `DynamicTable` — PascalCase, named import at line 22. Path: `/snippets/components/layout/table.jsx`. |

---

## Category 6 — Veracity & Factual Accuracy

| Check | Result | Detail |
|-------|--------|--------|
| 6.1 Every factual claim citable | FAIL | Hardware specs are presented without sourcing. VRAM figures, CUDA version, network latency target, uptime target are all unverified. |
| 6.2 Code/commands tested | NOT-TESTED | No code blocks on this page. Checklist items mention `nvidia-smi` and Docker GPU flags but do not show commands — not testable at this level. |
| 6.3 No deprecated API usage | N/A | No API calls on this page. |
| 6.4 Numbers are real | FAIL | **Line 31:** "NVIDIA RTX 3060 / T4 (8GB VRAM)" — RTX 3060 has 12GB VRAM in most configurations (8GB exists but is less common); T4 has 16GB. The "8GB VRAM" parenthetical applied to both models appears to be incorrect for the T4 specifically. `{/* REVIEW: T4 has 16GB VRAM — verify RTX 3060 VRAM config and correct the bracket */}`. **Line 53:** "99%+ target" — is this a Livepeer protocol requirement or a recommendation? **Line 61:** "capability and price" — undefined terms in this context. Does "capability" refer to `aiModels.json` capability registration? **Line 73:** "CUDA 12+" — verify this is the current minimum for go-livepeer AI worker. **Line 77:** "&lt;50 ms to major regions" — where does this threshold come from? No source cited. |
| 6.5 REVIEW flags for unverified | FAIL | No REVIEW flags present despite several claims requiring verification (T4 VRAM, CUDA version, latency threshold). Fix: add REVIEW flags to each unverified claim. |
| 6.6 veracityStatus honest | FAIL | Field missing. Given unverified hardware specs and the T4 VRAM discrepancy, correct value: `unverified`. |
| 6.7 Authoritative vs AI glossary | N/A | No glossary references |
| 6.8 Source staleness | FAIL | GPU model recommendations (line 68–70: A100, H100, RTX 4090) and CUDA version requirements change with go-livepeer releases. No version or release cited. High staleness risk. Fix: add REVIEW flags with staleness guidance. |
| 6.9 No open-ended research tasks | FAIL | The T4 VRAM discrepancy and CUDA minimum are open verification tasks with no named source. Fix: add REVIEW format per check 6.9: `{/* REVIEW: T4 VRAM — NVIDIA datasheet states 16GB. Verify if 8GB applies to a different model or correct. */}` |

---

## Category 7 — Navigation & Information Architecture

| Check | Result | Detail |
|-------|--------|--------|
| 7.1 Page in docs.json | PASS | `v2/orchestrators/setup/rcs-requirements` confirmed at docs.json line 2861. |
| 7.2 Navigation matches filesystem | PASS | File at `v2/orchestrators/setup/rcs-requirements.mdx`, path in docs.json matches. |
| 7.3 Tab entry portal routes to section | N/A | Section-level check |
| 7.4 No structural orphans | PASS | Reachable via Setup group in docs.json |
| 7.5 Audience journey complete | PASS | Sits correctly in the setup sequence: guide → **rcs-requirements** → rs-install → configure → connect-and-activate → test → monitor. Reader arriving from guide and leaving to install. |
| 7.6 Cross-tab graduation paths | N/A | Not applicable at this step |
| 7.7 File in correct lane | PASS | In `v2/orchestrators/setup/` — publishable content lane, not `_workspace/`. |
| 7.8 File naming conventions | PASS | `rcs-requirements.mdx` uses `rcs-` prefix (ref+config+setup). Matches prefix conventions per check 7.8. |
| 7.9 _workspace/ TTL | N/A | Not in _workspace/ |

---

## Category 8 — Links & Rendering

| Check | Result | Detail |
|-------|--------|--------|
| 8.1 Internal links resolve | FAIL | **Line 93:** `href="./install-go-livepeer"` — resolves to `v2/orchestrators/setup/install-go-livepeer`. No match in docs.json. The install page is `v2/orchestrators/setup/rs-install` (docs.json line 2862). BROKEN. Fix: change href to `/v2/orchestrators/setup/rs-install`. **Line 94:** `href="./orchestrator-stats"` — resolves to `v2/orchestrators/setup/orchestrator-stats`. No match in docs.json. BROKEN. **Line 95:** `href="./data-centre-setup"` — resolves to `v2/orchestrators/setup/data-centre-setup`. No match in docs.json. BROKEN. |
| 8.2 External links live | N/A | No external links on this page. |
| 8.3 Snippet imports resolve | NOT-TESTED | Import at line 22: `/snippets/components/layout/table.jsx`. Path not verified against filesystem. |
| 8.4 Images load | N/A | No images beyond OG block |
| 8.5 Page renders | NOT-TESTED | Not rendered locally. `Columns` component at line 92 — non-standard; render status NOT-TESTED. `DynamicTable` with JSX prop arrays — MDX render NOT-TESTED. |
| 8.6 No TODO/TBD | PASS | No TODO or TBD markers present. |

---

## Category 9 — Process & Governance

| Check | Result | Detail |
|-------|--------|--------|
| 9.1 Human sign-off | FAIL | No sign-off evidence. Page is in the publishable lane. |
| 9.2 Decisions in registry | INFO | No structural decisions specific to this page requiring registry entries. |
| 9.3 Gate prerequisites met | FAIL | 5 required frontmatter fields missing. Page has not completed Phase 1 (frontmatter taxonomy) or Phase 7 (veracity). |
| 9.4 Phase ordering | INFO | Cannot verify without provenance record. |
| 9.5 Findings before fixes | INFO | This report constitutes the findings phase. |
| 9.6 Feedback routed | N/A | Feedback routing occurs post-report. |

---

## Banned Construction Scan

**Scope:** all body prose, headings, DynamicTable itemsList values (rendered table cells), Card titles, Columns content.

| Line | Sentence / Content | Word/Pattern | Classification | Flag? |
|------|-------------------|--------------|----------------|-------|
| 23 | "Orchestrators run **video transcoding** (NVENC/FFmpeg) and/or **AI inference** on GPUs." | — | factual | No |
| 23 | "Hardware directly affects job selection, reputation, and revenue." | — | factual | No |
| 40 | "Suitable for testnet, low-volume workloads, and learning." | — | factual | No |
| 57 | "Optimised for real-time streaming and multi-resolution transcoding." | — | factual | No |
| 61 | "AI workloads are VRAM-bound." | — | factual | No |
| 61 | "Stake does **not** determine AI job routing; capability and price do." | `not [X]` as primary statement | value-claim (operational fact, stated negatively) | FLAG — rule: state positive. Fix: "AI job routing responds to capability and price, not stake." Note: "not stake" remains in the fix; the more complete fix removes it entirely: "AI job routing is determined by registered capabilities and price. Stake level does not affect AI workload routing." |
| 73 | "Also ensure: CUDA 12+, NVIDIA Container Toolkit, good cooling, high IOPS storage for model weights." | — | procedural/factual | No |
| 75–79 | All bullet items: "Latency: <50 ms...", "Production: Static IP...", "Monitoring: Prometheus..." | — | factual/procedural | No |
| 81–88 | All checklist items: "GPU visible via nvidia-smi", "Docker sees GPU", "CUDA functional", "Ports open (e.g. 8935)", "Stable Arbitrum RPC", "Monitoring configured" | — | procedural | No |
| DynamicTable cells | "Suitable for testnet, low-volume workloads..." (if rendered in table context) | — | factual | No |

**Table header/cell content (DynamicTable itemsList props):**
- "Minimum", "Recommended" column headers — informational labels, no banned constructions.
- GPU model cells: no banned constructions.
- "Use case" column: "Stable Diffusion, high batch", "Enterprise inference", "Advanced model serving" — no banned constructions.

**Card titles (lines 93–95):**
- "Install go-livepeer" — procedural, no banned construction.
- "Orchestrator stats & monitoring" — no banned construction.
- "Data centre setup" — no banned construction.

**Flagged:** 1 construction (line 61).

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| **H2: Minimum (development / testing)** | 3 | 2 | 2 | 3 | 2 | 12/25 | FAIL |
| **H2: Recommended (video / production)** | 3 | 2 | 2 | 3 | 2 | 12/25 | FAIL |
| **H2: AI inference** | 3 | 2 | 3 | 3 | 5 | 16/25 | FAIL |
| **H2: Network and ops** | 2 | 1 | 2 | 2 | 4 | 11/25 | FAIL |
| **H2: Checklist before going live** | 3 | 2 | 3 | 3 | 3 | 14/25 | FAIL |
| **H2: See also** | 1 | 1 | 1 | 1 | 4 | 8/25 | FAIL — also Banned term |

**All H2 headings fail.** Detailed notes:

- **"Minimum (development / testing)"** — Precision 3: "Minimum" is a tier label, not the concept. Depth 2: example-level (dev/testing parenthetical). Stability 2: parenthetical breaks if use-case scope changes. Clarity 3: reader understands tier but not governing concept. Conciseness 2: parenthetical bloat. Fix: "Development Tier" or "Minimum Specifications".
- **"Recommended (video / production)"** — same structural problems as above. Fix: "Production Tier" or "Video Production Specifications".
- **"AI inference"** — Precision 3: names the domain but not the governing concept within the page. Depth 2: no signal of specification level or hardware framing. Stability 3: stable as long as AI remains the topic. Clarity 3: reader understands domain, unclear what the section delivers. Conciseness 5: very short. Fix: "AI Inference Hardware" (21/25) or "GPU Specifications for AI" (20/25).
- **"Network and ops"** — Precision 2: "ops" is undefined shorthand. Depth 1: no governing concept. Stability 2: "ops" is a catch-all. Clarity 2: ambiguous scope. Conciseness 4: short. Fix: "Network and Operational Requirements" (18) or "Infrastructure Requirements" (21/25).
- **"Checklist before going live"** — Precision 3: names the action (going live) but not the concept. Depth 2: surface-level. Stability 3: "going live" is meaningful but could shift. Clarity 3: reader understands intent. Conciseness 3: 4 words but padded. Fix: "Pre-Launch Checklist" (21/25). Note: "Checklist" is in the OK tier per Frameworks.mdx §4.1.
- **"See also"** — Precision 1, Depth 1, Stability 1, Clarity 1, Conciseness 4. Total 8/25. Banned term. Fix: remove H2 and use CardGroup with no heading, or replace with "Related Pages" (but `Related Pages` is an approved structural element and should not be used as a general heading substitute — use content-specific label). Fix: "Related Setup Pages" or remove and let Cards stand alone.

---

## Spelling / Typo Check

Scanning all visible text including headings, table headers, table cells, bullet content, Card titles.

- Line 23: "NVENC/FFmpeg" — correct capitalisation.
- Line 31: "NVIDIA RTX 3060 / T4 (8GB VRAM)" — T4 has 16GB VRAM per NVIDIA specs. This is a factual error, not a typo. Flagged in Category 6.
- Line 46: "RTX 4080 / A4000 / L4" — correct GPU model names.
- Line 63: "DynamicTable" prop `"Use case"` in headerList — "Use case" (two words, lowercase "c"). This is acceptable. Not a typo.
- Line 68: "RTX 4090 (24GB)" — correct.
- Line 69: "A100 (40GB/80GB)" — correct.
- Line 77: "&lt;50 ms" — HTML entity for "<". Will render correctly. Not a typo.
- Line 79: "DCGM" — correct abbreviation for Data Centre GPU Manager. Note: "Data centre" in Card title (line 95) uses UK spelling "centre" — correct.

**One factual error found (not a typo):** T4 VRAM stated as 8GB, T4 has 16GB VRAM. Flagged in Category 6.
**No true typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for target pageType? | Notes |
|-----------|-------|-------------------------------|-------|
| `DynamicTable` | Yes | NOT-TESTED | `docs-guide/catalog/components-catalog.mdx` not read. For `reference` pageType, tables are Preferred. For `guide`, also acceptable. Approval status NOT-TESTED. |
| `Columns` | Yes | NOT-TESTED | Non-standard Mintlify component. `docs-guide/catalog/components-catalog.mdx` not read. Used at line 92 for "See also" Cards. NOT-TESTED. |
| `Card` | Yes | PASS | Standard Mintlify component. Appropriate for resource links. |

**Action required:** Verify `DynamicTable` and `Columns` against `docs-guide/catalog/components-catalog.mdx`.

---

## Cross-Category Connections

```
Root Cause 1: Missing required frontmatter fields (pageType, purpose, complexity, lifecycleStage, veracityStatus)
Affects: Cat 1.1 + Cat 1.2 + Cat 1.3 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 5.1 + Cat 5.2 + Cat 6.6 + Cat 9.3
Fix: Set pageType (decision required — see Blocking Decision), purpose, complexity: intermediate, lifecycleStage: setup, veracityStatus: unverified
```

```
Root Cause 2: All six H2 headings fail the naming rubric
Affects: Cat 3.1 + Cat 3.2 + Cat 3.7 + Cat 2.11 (See also as banned term)
Fix (per heading):
  - "Minimum (development / testing)" → "Development Tier" or "Minimum Specifications"
  - "Recommended (video / production)" → "Production Tier" or "Video Production Specifications"
  - "AI inference" → "AI Inference Hardware"
  - "Network and ops" → "Infrastructure Requirements" or "Network Requirements"
  - "Checklist before going live" → "Pre-Launch Checklist"
  - "See also" → Remove H2 heading; use CardGroup standalone, or rename "Related Setup Pages"
```

```
Root Cause 3: Three broken Card links in "See also" section
Affects: Cat 4.4 + Cat 8.1
Fix:
  - ./install-go-livepeer → /v2/orchestrators/setup/rs-install
  - ./orchestrator-stats → resolve correct path or remove Card until page exists
  - ./data-centre-setup → resolve correct path or remove Card until page exists
```

```
Root Cause 4: Page scope conflict — reference specs + procedural checklist
Affects: Cat 4.1 + Cat 4.2 + Cat 4.7 + Cat 5.2 + Cat 1.2 (pageType decision)
Fix: See Blocking Decision below
```

```
Root Cause 5: T4 VRAM factual error + unverified hardware specs
Affects: Cat 6.1 + Cat 6.4 + Cat 6.5 + Cat 6.8 + Cat 6.9
Fix: Correct T4 VRAM to 16GB. Add REVIEW flags for CUDA version (line 73), latency threshold (line 77), uptime target (line 53), AI GPU VRAM figures (lines 68–70).
```

---

## Blocking Decision

```
Blocking Decision: pageType — is this page a reference lookup or a guide to hardware selection?

Option A: pageType: reference + pageVariant: specification
  - The page is a structured lookup of hardware requirements
  - Reader arrives knowing they need GPU; looks up the specs
  - "Checklist before going live" section does NOT belong here — move to rs-install or test page
  - purpose: reference
  - Component choice: tables are correct; checklist bullets should be removed

Option B: pageType: guide
  - The page guides an operator through hardware selection decisions
  - Reader arrives assessing whether their hardware is sufficient
  - Both specs AND checklist are in scope
  - purpose: evaluate
  - "Checklist" section requires Steps component (procedural content), not bare bullets

Alison must decide which reading is correct before pageType and purpose can be set.
All other frontmatter taxonomy findings depend on this decision.
```

**Non-blocking items that can be fixed regardless of decision:**
- Broken Card links (Root Cause 3)
- All six heading renames (Root Cause 2)
- T4 VRAM factual error (Root Cause 5)
- `not [X]` construction at line 61 (Cat 2.4)
- Add `veracityStatus: unverified` (can be set regardless of pageType)
- Improve keywords quality (Cat 1.13)
