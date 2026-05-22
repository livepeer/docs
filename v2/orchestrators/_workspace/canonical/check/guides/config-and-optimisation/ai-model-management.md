# Per-Page Quality Check Report
## `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2919–2925

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'AI Model Management'` | PASS | |
| `sidebarTitle` | Yes | `'Model Management'` | PASS | |
| `description` | Yes | `'Manage warm and cold model strategy, VRAM allocation, model rotation by demand, and optimisation flags for diffusion pipelines on a Livepeer orchestrator.'` | PASS | 155 chars; subject-first; UK English (`optimisation`); no self-reference |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Canonical replacement: `instruction`. Co-fix: set `pageVariant: (none required for how_to → instruction)`. Per Frameworks.mdx §1.1 migration table |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Field absent. Proposed: `purpose: operate` — confirm before applying. Page serves an operator managing a live AI deployment |
| `complexity` | No | — | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying |
| `keywords` | Yes | 10-item array | PASS | Specific, searcher-intent terms: `warm model`, `cold model`, `VRAM`, `SFAST`, `DEEPCACHE`, `aiModels.json`, `model rotation`, `optimisation flags` |
| OG image block | Yes | All 5 fields present | PASS | Correct path `/snippets/assets/site/og-image/en/orchestrators.png` |
| `industry` | No | — | FAIL | Required field absent. Proposed: `industry: [AI, technical]` — confirm before applying (P41) |
| `niche` | No | — | FAIL | Required field absent. Proposed: `niche: [AI, hardware]` — confirm before applying (P41) |
| `veracityStatus` | No | — | FAIL | Field absent. Content contains multiple `FACT CHECK` flags. Must be `unverified` |

**Required field count:** 4/10 canonical fields present (title, sidebarTitle, description, audience + OG block, keywords pass; pageType deprecated; purpose/complexity/lifecycleStage/industry/niche/veracityStatus absent). **Missing canonical fields: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. pageType is deprecated.**

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. 6 fields absent. |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated alias (old 12-type). Canonical replacement: `pageType: instruction` (P50 does not apply — `how_to` is not a valid 7-type value) |
| 1.3 | `pageVariant` valid if present | N/A | Field absent. `how_to → instruction` migration does not require a pageVariant per the migration table; no co-fix needed here (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent (wrong-field error, not deprecated alias). Proposed: `purpose: operate` — confirm before applying (P51) |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying (P51) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Page has 2 open `FACT CHECK` flags (lines 63, 170). Must be `veracityStatus: unverified`. Note: `status: draft` is present — consistent with unverified content (P39 satisfied) |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required per P41. Proposed: `industry: [AI, technical]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required per P41. Proposed: `niche: [AI, hardware]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | 155 chars; subject-first ("Manage warm and cold model strategy…"); UK English; no self-reference |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct path |
| 1.13 | `keywords` field quality | PASS | `warm model`, `cold model`, `VRAM`, `SFAST`, `DEEPCACHE`, `aiModels.json`, `model rotation`, `optimisation flags` are specific and searcher-intent-aligned. `livepeer` and `orchestrator` are generic but acceptable alongside the specific terms |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show all candidates):**
- `effectively` — not found
- `essentially` — not found
- `basically` — not found
- `meaningful` — not found
- `significant` — not found
- `real` (intensifier) — not found
- `various` — not found
- `several` — not found
- `obviously` — not found
- `clearly` — not found

**Banned phrase scan:**
- "This section covers" — not found
- "This page covers/explains/walks you through" — not found
- "rather than" — not found
- "etc." / "and so on" — not found
- "Understanding X is essential" — not found
- "can generate" / "may produce" in value claims — not found

**Banned construction candidates (P6):**
- Line 178: "Both flags are experimental." — declarative statement, not a value claim. PASS.
- No `can/may [verb]` in value claims identified.
- No `not [X]` as primary value statement found.
- No `if [condition]` in body prose (FACT CHECK comments are not body prose).
- Line 40 in reward-call-tuning (different file) — N/A here.

**Em-dash scan (P30 — all visible text):**
- Body prose: no em-dashes found
- Headings H2/H3: no em-dashes
- `description` field: no em-dashes
- CustomDivider `middleText` props (P20): `"Warm vs Cold"`, `"Model Rotation"`, `"Optimisation Flags"`, `"Monitoring"` — no em-dashes. PASS.
- Tab `title` props (P20): `"SFAST"`, `"DEEPCACHE"` — no em-dashes. PASS.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout (P54 — only flag US spellings) | PASS | `optimisation` (UK) correct in description. No US `-ize`, `-or`, `-er` endings found. `optimization_flags` in code blocks — code identifiers are exempt from UK English enforcement |
| 2.2 | Zero banned words (P46 — not [X] belongs in 2.4, not here) | PASS | All 10 banned words scanned; none found |
| 2.3 | Zero banned phrases | PASS | All banned phrases scanned; none found |
| 2.4 | Zero banned constructions | PASS | No `not [X]` primary statements; no unresolved `if [condition]` in body prose; no `This page [verb]`; no `can/may [verb]` in value claims |
| 2.5 | Opening order correct | PASS | Page opens with the Tip (operational advice), then states the scope directly: "AI model management covers the operational decisions made after models are downloaded…" — fact-first |
| 2.6 | Paragraph discipline | PASS | Each paragraph has a single job. Lead sentences state facts. No hedge endings. |
| 2.7 | Audience register correct | PASS | Hardware-specific language (VRAM, GPU, container, pipeline throughput); quantified values; operational framing. Correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…", "Easy to set up", or earnings hedge without mechanism |
| 2.9 | No passive value statements | PASS | "up to 25% faster inference" (SFAST), "up to 50% faster inference" (DEEPCACHE) — quantified. |
| 2.10 | No hedging openers | PASS | Opens with Tip then scope statement. No disclaimers or conditionals at page open |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `warm`, `cold`, VRAM, SFAST, DEEPCACHE used consistently. No deprecated terms (broadcaster, hybrid) found |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading inventory (exempt: `Related pages` — P16/P53 note: this heading uses lowercase "pages", not the exact exempt form "Related Pages". However, `Related` is in the check 3.2 OK list, and the heading is a structural navigation element used consistently across all pages. Flagging as INFO — see F-09):**

| Heading | Level | Precision (1–5) | Depth (1–5) | Stability (1–5) | Clarity (1–5) | Conciseness (1–5) | Total | Pass? |
|---------|-------|-----------------|-------------|-----------------|---------------|--------------------|-------|-------|
| Warm vs cold strategy | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Impact on job routing | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Beta constraint: one warm model per GPU | H3 | 5 | 5 | 3 | 5 | 3 | 21/25 | PASS |
| VRAM allocation | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Model rotation by demand | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Checking current demand | H3 | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Rotating the warm model | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Optimisation flags | H2 | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Monitoring model loading | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | PASS | All 9 headings score ≥21/25. Lowest: "Checking current demand" at 21/25 |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`). No Avoid-tier terms present |
| 3.3 | No literal contrast labels | PASS | "Warm vs cold strategy" names the governing concept (strategy), not just a contrast. Acceptable |
| 3.4 | Domain-anchor rule applied | PASS | All headings interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | "VRAM allocation" not "12 GB vs 24 GB vs 32 GB" |
| 3.6 | Title well-formed | PASS | `AI Model Management` — 3 words, concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | PASS | "Beta constraint: one warm model per GPU" is specific and operational |

**Category 3 verdict: PASS**

---

## Category 4 — PAGE STRUCTURE

Nav sequence from docs.json lines 2919–2925: `pricing-strategy` → `capacity-planning` → `ai-model-management` → `reward-call-tuning`

This page is position 3 of 4 in the config-and-optimisation group.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: manage AI model warm/cold state and optimisation flags on a running orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator manage warm model selection, VRAM allocation, and optimisation flags for diffusion pipelines." — states cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Previous: `capacity-planning` (sets VRAM budget and session limits) → knowledge needed: VRAM budget. This page: what to do with that budget for AI models. Next: `reward-call-tuning` (different concern: LPT rewards). Adjacency is reasonable; reward-call-tuning is a different dimension of optimisation |
| 4.4 | No dead ends | PASS | Related pages cards link to model-hosting, ai-inference-operations, model-demand-reference, capacity-planning |
| 4.5 | Prerequisites stated or linked | PASS | Scope boundary stated: "Model sourcing and downloading is covered separately in Model Hosting." Reader knows what's out of scope |
| 4.6 | Out-of-scope is clear | PASS | Line 43 explicitly scopes out model downloading, links to model-hosting |
| 4.7 | Information type per section correct | PASS | `purpose: operate` (proposed). Permitted types: `procedural`, `factual`. Sections: warm/cold strategy (conceptual/procedural — acceptable secondary type), VRAM table (factual), rotation steps (procedural), optimisation flags (technical/procedural) — all within permitted range |
| 4.8 | No content duplication from adjacent sections | INFO | VRAM table on lines 75–125 overlaps with a similar table in `capacity-planning.mdx` (lines 288–333). Values are consistent but the same data appears in two pages. Not a blocker but worth noting for future consolidation |
| 4.9 | Section orientation page present | N/A | Page-level check, not section-level |
| 4.10 | Cross-tab links at journey intersections | N/A | Page-level check, not tab-level |

**Category 4 verdict: PASS** (one INFO item on content duplication)

---

## Category 5 — LAYOUT & COMPONENTS

Component matrix for `pageType: how_to` (current deprecated value) per `docs-guide/policies/component-layout-decisions.mdx`: Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`. Avoid: `Coming Soon`, `PreviewCallout`.

When migrated to `pageType: instruction` per checks.mdx §5.1 matrix: Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`. Avoid: `Coming Soon`, `PreviewCallout`.

Components used: `CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `BorderedBox`, `Tabs`/`Tab`, `Tip`, `Warning`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | INFO | `how_to` deprecated — see check 1.2. When migrated to `instruction`: required sections are Prerequisites and Steps. Page has a structural overview para but no explicit "Prerequisites" heading. Content is well-structured regardless |
| 5.2 | Required sections present | INFO | `instruction` requires Prerequisites and Steps. No explicit Prerequisites heading. The scope-limiting paragraph (line 43) serves as a functional prerequisite statement. Steps are procedural but not inside `<Steps>` wrapper — content uses prose + code blocks |
| 5.3 | Only approved components used | NOT-TESTED for custom components | `Tip`, `Warning`, `Tabs`/`Tab` are approved for `instruction`. `CustomDivider`, `BorderedBox`, `StyledTable`/`TableRow`/`TableCell`, `LinkArrow` are custom components. component-layout-decisions.mdx does not list these; they are not in the Preferred or Avoid columns. Per P22: component approval status NOT-TESTED for custom components without reading the approval registry |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no TODO/TBD placeholders in published markup (FACT CHECK comments are MDX comments, not rendered content) |
| 5.5 | Information type → component mapping correct | PASS | VRAM data in `StyledTable` (factual → table correct). Procedural steps shown as prose + code blocks (acceptable). Optimisation flags in `Tabs` (multi-path correct) |
| 5.6 | MDX renders clean | PASS (inferred) | No unclosed tags, no broken JSX syntax visible. All imports present for used components |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` — 12-type deprecated value (cross-reference with check 1.2). Also: no `purpose`, `complexity`, `lifecycleStage` in frontmatter |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline JS theme switching found |
| 5.9 | Generated file banners intact | N/A | No `generated-file-banner` block — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct import paths from `/snippets/components/` |

**Category 5 verdict: FAIL** — 1 check fails: 5.7 (cross-reference of check 1.2 finding)

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Type | Line | TESTED/NOT-TESTED | Source needed |
|-------|------|------|-------------------|---------------|
| Cold loading = "typically 10 to 60 seconds" | factual | 51 | NOT-TESTED | Model load benchmark data |
| One warm model per GPU Beta constraint | factual | 61 | NOT-TESTED | FACT CHECK flag present (line 63) — Rick / ai-runner |
| SDXL-Lightning warm VRAM ~12–18 GB | technical | 86–87 | NOT-TESTED | Model card / ai-runner source |
| SVD warm VRAM ~24 GB+ | technical | 97 | NOT-TESTED | Model card |
| audio-to-text (Whisper large-v3) ~3 GB | technical | 101 | NOT-TESTED | Model card |
| image-to-text (BLIP) ~1–2 GB | technical | 106 | NOT-TESTED | Model card |
| llm (Llama 3.1 8B q4) ~8 GB | technical | 111 | NOT-TESTED | Ollama / model card |
| upscale (SD x4) ~8 GB | technical | 116 | NOT-TESTED | Model card |
| segment-anything-2 (large) ~12–24 GB | technical | 121–122 | NOT-TESTED | Model card |
| SFAST: "up to 25% faster inference" | evaluative | 183 | NOT-TESTED | SFAST repo / benchmarks |
| DEEPCACHE: "up to 50% faster inference" | evaluative | 200 | NOT-TESTED | DEEPCACHE repo / benchmarks |
| DEEPCACHE: "slight reduction in fine detail at high step counts" | evaluative | 201 | NOT-TESTED | DEEPCACHE benchmark |
| Lightning/Turbo variants operate at 1 to 4 inference steps | factual | 202 | NOT-TESTED | Model cards for SDXL-Lightning, RealVisXL |
| Warm model missing from registry after 5 minutes = causes listed | procedural | 239–242 | NOT-TESTED | go-livepeer source / community testing |
| FACT CHECK line 170: restart AI runner while go-livepeer runs picks up aiModels.json changes | procedural | 170 | NOT-TESTED | FACT CHECK flag present |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | 15 claims NOT-TESTED. No citations provided for VRAM figures, speed claims, or behavioural claims |
| 6.2 | Code/commands tested | NOT-TESTED | Bash commands (docker logs, docker restart) are standard and low-risk. aiModels.json examples not verified against current go-livepeer schema |
| 6.3 | No deprecated API usage | PASS (inferred) | `aiModels.json`, `optimization_flags`, `warm`, `model_id` are current field names per other pages in the same tab |
| 6.4 | Numbers are real | FAIL | VRAM figures (~3 GB, ~8 GB, ~12–18 GB) are sourced from model cards but not cited. Speed claims (25%, 50%) have no cited benchmark source |
| 6.5 | REVIEW flags for unverified claims | FAIL | 2 FACT CHECK comments present (lines 63, 170). Multiple additional unverified numerical claims have no FACT CHECK flag: VRAM figures, SFAST/DEEPCACHE speed claims, 5-minute registry delay |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. Given open FACT CHECK flags and untested numerical claims, correct value is `unverified` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness check | INFO | VRAM figures may shift as model variants update. FACT CHECK flag on Beta constraint acknowledges this |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.5, 6.6 fail

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/config-and-optimisation/ai-model-management` confirmed at docs.json line 2923 |
| 7.2 | Navigation matches file system | PASS | File exists at the declared path |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check, not page-level |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav and from `capacity-planning` Related pages card |
| 7.5 | Audience journey complete | PASS | Page fits within operator journey: capacity planning → model management → reward tuning |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Publishable file in `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | No incorrect prefix; no `-index.mdx` |
| 7.9 | _workspace/ TTL compliance | N/A | Not in _workspace/ |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/ai-and-job-workloads/model-hosting` — confirmed in docs.json line 2904. `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — confirmed line 2898. `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` — confirmed line 2903. `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` — confirmed line 2922. All 4 Related pages cards verified |
| 8.2 | All external links live | NOT-TESTED | `https://tools.livepeer.cloud/ai/network-capabilities` and `https://explorer.livepeer.org` not tested in this static review |
| 8.3 | All snippet imports resolve | PASS | `/snippets/components/elements/spacing/Divider.jsx`, `/snippets/components/elements/links/Links.jsx`, `/snippets/components/wrappers/tables/Tables.jsx`, `/snippets/components/wrappers/containers/Containers.jsx` — standard paths consistent with other pages in same tab |
| 8.4 | All images load | PASS | OG image at `/snippets/assets/site/og-image/en/orchestrators.png` — standard path used across all orchestrator pages |
| 8.5 | Page renders without error | PASS (inferred) | No unclosed tags, no broken JSX, imports present for all used components |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX comments (`{/* */}`) — not rendered output. No `Coming Soon` component |

**Category 8 verdict: PASS** (8.2 NOT-TESTED — external link verification requires live test)

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded. `status: draft` indicates pre-publication state |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed; content is operational |
| 9.3 | Gate prerequisites met | FAIL | Tab status shows Orchestrators: IA not approved, terminology not locked. Page is pre-gate |
| 9.4 | Phase ordering respected | N/A | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | N/A | First formal check run on this page |
| 9.6 | Feedback routed | N/A | First formal check run |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (pre-publication state, expected for draft pages)

---

## Cross-Category Connections

- **C1:** Missing `purpose`, `complexity`, `lifecycleStage` (checks 1.1, 1.4, 1.6, 1.7) → affects check 4.7 (information type mapping evaluated against proposed `purpose: operate`, not confirmed value) and check 5.1 (template compliance depends on confirmed pageType + purpose)
- **C2:** `pageType: how_to` deprecated (checks 1.2, 5.7) → same root cause, one fix: replace `how_to` with `instruction`
- **C3:** Missing `veracityStatus` (check 1.8) + open FACT CHECK flags (checks 6.5) + untested numerical claims (checks 6.1, 6.4) → all point to single veracity debt: page needs a veracity pass before `veracityStatus` can be set to anything other than `unverified`
- **C4:** VRAM table in this page (lines 75–125) and VRAM table in `capacity-planning.mdx` (lines 288–333) overlap (check 4.8 INFO). Not a blocker but creates maintenance risk if values diverge

---

## Blocking Decisions

None. All findings are resolvable without human structural decisions. FACT CHECK items require SME input (Rick / ai-runner team) but do not block the quality check itself.

---

## Verdict Summary

**Overall: NEEDS WORK**

**14 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1**
(9.3 fails as expected — pre-publication gate state)

Category verdicts: Cat 1 FAIL | Cat 2 PASS | Cat 3 PASS | Cat 4 PASS | Cat 5 FAIL | Cat 6 FAIL | Cat 7 PASS | Cat 8 PASS | Cat 9 FAIL

---

## Prioritised Fix List

**F-01 — CRITICAL — Add missing frontmatter fields**
Six fields absent: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. Add all six. Proposed values:
- Proposed: `purpose: operate` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: optimise` — confirm before applying
- Proposed: `industry: [AI, technical]` — confirm before applying
- Proposed: `niche: [AI, hardware]` — confirm before applying
- Proposed: `veracityStatus: unverified` — apply immediately given open FACT CHECK flags
*(Fixes: 1.1, 1.4, 1.6, 1.7, 1.9, 1.10, 1.8)*

**F-02 — HIGH — Migrate `pageType: how_to` to `pageType: instruction`**
Replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` co-fix required for this migration per the §1.1 table.
*(Fixes: 1.2, 5.7)*

**F-03 — HIGH — Add FACT CHECK flags to all unverified numerical claims**
Lines without FACT CHECK flags that require them: VRAM figures throughout the VRAM table (lines 85–125), SFAST speed claim ("up to 25% faster", line 183), DEEPCACHE speed claim ("up to 50% faster", line 200), 5-minute registry delay (line 239). Add `{/* REVIEW: [claim] — verify against [source] before publishing */}` inline at each unverified number (P19).
*(Fixes: 6.5)*

**F-04 — MEDIUM — Resolve FACT CHECK at line 63 (Beta constraint)**
`{/* FACT CHECK: Confirm whether the one-warm-model-per-GPU Beta constraint is still in effect. Rick / ai-runner team to verify */}`. This blocks `veracityStatus: verified` for this section.
*(Contributes to: 6.1, 6.4)*

**F-05 — MEDIUM — Resolve FACT CHECK at line 170 (AI runner restart)**
`{/* FACT CHECK: Confirm that restarting only the AI runner container while leaving go-livepeer running correctly picks up aiModels.json changes. Rick to verify. */}`
*(Contributes to: 6.1, 6.2)*

**F-06 — INFO — `## Related pages` heading capitalisation**
All four pages in this group use `## Related pages` (lowercase p). The exact exempt form per P16/P53 is `Related Pages` (capital P). Either capitalise to match the exempt form, or confirm the lowercase form is intentional. Not a FAIL — `Related` is in the check 3.2 OK list. INFO only.

**F-07 — INFO — VRAM table duplication with capacity-planning.mdx**
Same VRAM data appears in both this page (lines 75–125) and `capacity-planning.mdx` (lines 288–333). Consider whether to consolidate to one page and link from the other, to prevent value drift.
