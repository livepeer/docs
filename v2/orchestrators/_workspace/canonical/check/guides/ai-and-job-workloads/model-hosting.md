# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2894–2905

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Model Hosting` | PASS | |
| `sidebarTitle` | Yes | `Model Hosting` | PASS | |
| `description` | Yes | `Source, download, and store AI models for Livepeer orchestrator pipelines. Covers HuggingFace model IDs, automatic vs manual download, storage layout, gated model access via tokens, and the Livepeer verified model list.` | FAIL | Subject-first, UK English: PASS. But 220 chars exceeds ≤160 char limit |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Migrate to `pageType: instruction` |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Required field absent |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 9 entries | PASS | Specific and searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |
| `veracityStatus` | No | — | FAIL | Required. Open REVIEW JSX flags present; minimum `veracityStatus: unverified` |
| `status` | Yes | `draft` | PASS | Consistent with unreviewed content |

**Required field count:** 4/10. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Additional issues: deprecated `pageType`, absent `industry`, absent `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is deprecated 12-type alias. Migrate to `pageType: instruction` (P37: wrong-field type — deprecated alias) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; co-fix of 1.2 only if variant is required — not needed for plain instruction page (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying (P51) |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` — confirm before applying (P51) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Four open REVIEW JSX flags; set `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: [AI, technical]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: [AI, hardware]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 220 characters exceeds ≤160 char limit. UK English and subject-first: PASS |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct fallback path |
| 1.13 | `keywords` field quality | PASS | `aiModels.json`, `HuggingFace token`, `gated models` — strong searcher-intent terms |

**Category 1 verdict: FAIL** — Failing checks: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

### Banned Construction Scan

Scope: all visible text — body prose, headings, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, AccordionGroup `title` props, component props.

Every `can`, `may`, `could`, `might`, `should` sentence; every `if [condition]`; every `not [X]` statement:

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 78 | "External containers must expose a `/health` endpoint returning HTTP 200." | `must` | Requirement — not a value claim | No |
| 78 | "A failed health check at startup causes the entry to be skipped." | — | Factual | No |
| 88–89 | "The download triggers when: The container starts with a cold model configured…" | implicit `if` (triggering conditions listed as bullets) | Procedural enumeration of trigger conditions, not body prose condition | No |
| 91 | "Large diffusion models often take a few minutes to download on the first run." | `often` | Not a banned word/construction — borderline hedging | BORDERLINE |
| 107 | "Pre-downloading is recommended for:" | `recommended` | Guidance framing | No |
| 166 | "loading weights from spinning disk into VRAM is **significantly** slower" | `significantly` | BANNED WORD (intensifier) | Yes — check 2.2 |
| 214 | "Configuring a model outside the verified list in `aiModels.json` is permitted, but gateways route no traffic to it." | — | Factual positive statement | No |
| 226 | "All AI runner containers should show `Up` status." | `should` | Procedural expected state — not a value claim | No |
| 242 | "Pipelines still missing after 10 minutes should be checked against:" | `should` | Procedural guidance | No |

**CustomDivider middleText props:** "Model Sources", "Download Mechanics", "Gated Models", "Verified Models", "Verifying Load" — no banned constructions.

**Banned word found:** `significantly` at line 166.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `organisation` (line 48), no -ize endings, no -or/-ou errors detected. No US spelling violations |
| 2.2 | Zero banned words | FAIL | `significantly` at line 166: "is significantly slower" |
| 2.3 | Zero banned phrases | PASS | No "This page", "This section", "rather than", "etc.", "and so on" |
| 2.4 | Zero banned constructions | PASS | No `not [X]` in value statements; no `This page [verb]`; no `can/may` in value claims; no unresolved `if [condition]` in body prose |
| 2.5 | Opening order correct | PASS | "Model hosting covers how AI models reach your GPU" — subject-first, no caveat opener |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; endings are factual |
| 2.7 | Audience register correct | PASS | Hardware-specific, operational, precision-first — correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you", "automatically" (unverified) |
| 2.9 | No passive value statements | PASS | Storage sizes are concrete ranges; no vague value claims |
| 2.10 | No hedging openers | PASS | Opens with factual statement |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `BYOC`, `HuggingFace` used consistently |

**Category 2 verdict: FAIL** — Failing check: 2.2

---

## Category 3 — SECTION NAMING & HEADINGS

`Related pages` heading exempted per P16/check 3.1 — not included in table.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-------|-----------|-------|-----------|---------|-------------|-------|
| Model sources | H2 | 4 | 4 | 5 | 5 | 5 | 23/25 |
| HuggingFace (primary) | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| External containers (BYOC) | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Download mechanics | H2 | 4 | 4 | 5 | 5 | 5 | 23/25 |
| Automatic download on first start | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Manual pre-download | H3 | 4 | 4 | 5 | 5 | 5 | 23/25 |
| Storage location | H3 | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Gated model access | H2 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Getting access | H3 | 2 | 2 | 3 | 3 | 4 | **14/25 FAIL** |
| Using the token in aiModels.json | H3 | 5 | 4 | 5 | 5 | 3 | 22/25 |
| Livepeer verified model list | H2 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Verifying model load | H2 | 4 | 4 | 5 | 5 | 5 | 23/25 |
| Container status | H3 | 3 | 3 | 4 | 5 | 5 | 20/25 |
| Network registration | H3 | 4 | 4 | 5 | 5 | 5 | 23/25 |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "Getting access" scores 14/25 — generic, non-domain-anchored, could appear on any auth page |
| 3.2 | No banned or weak standalone heading terms | PASS | No `Basics`, `Notes`, `Overview`, `How It Works`, `See Also`, `Conclusion`, `What's Next` |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | Most headings include domain nouns (HuggingFace, aiModels.json, BYOC, Livepeer) |
| 3.5 | Heading names the concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | "Model Hosting" — 2 words, concept-derived |
| 3.7 | Sounds like an expert editorial choice | FAIL | "Getting access" is a generic verb-noun fragment — not an expert editorial choice. All other headings pass. (Covered under 3.1) |

**Category 3 verdict: FAIL** — Failing checks: 3.1, 3.7 (same heading)

---

## Category 4 — PAGE STRUCTURE

Nav sequence confirmed from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → `ai-inference-operations` → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → **`model-hosting`** (last in group)

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page is focused on model sourcing, download, and verification for orchestrators |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator source, store, and verify AI models for their node." — passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Predecessor `model-demand-reference` establishes which models to run; `model-hosting` explains how to acquire them. Logical. `model-hosting` is last in section; Related pages cards provide exit paths |
| 4.4 | No dead ends | PASS | Related pages cards link to AI Model Management, AI Inference Operations, Diffusion Pipeline Setup, LLM Pipeline Setup |
| 4.5 | Prerequisites stated or linked | INFO | No explicit prerequisites section. Page assumes familiarity with `aiModels.json` structure without a link to AI Inference Operations |
| 4.6 | Out-of-scope is clear | PASS | Opening paragraph explicitly defers warm/cold strategy to AI Model Management |
| 4.7 | Information type per section is correct | PASS | `purpose: configure` (proposed) permits `procedural, technical, factual` — section content types match |
| 4.8 | No content duplication from adjacent sections | INFO | Storage sizing table may overlap with `model-demand-reference`. Not confirmed without reading that page |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS** — No failing checks. Two INFO items.

---

## Category 5 — LAYOUT & COMPONENTS

**Matrix applied:** `component-layout-decisions.mdx` for `how_to` (current declared pageType):
- Required: `Prerequisites`, `Steps`
- Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`
- Avoid: `Coming Soon`, `PreviewCallout`

**Components used:** `CustomDivider`, `LinkArrow`, `StyledTable`, `TableRow`, `TableCell`, `Tip`, `Note`, `Warning`, `Card`, `CardGroup`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `how_to` requires `Prerequisites` and `Steps` sections; neither is formally present. Page uses reference/guide structure (H2 sections, not numbered steps) |
| 5.2 | Required sections present | FAIL | `Prerequisites` absent. `Steps` absent — procedures appear as H3 subsections, not a formal steps block |
| 5.3 | Only approved components used | PASS | `CustomDivider`, `LinkArrow`, `StyledTable`, `TableRow`, `TableCell`, `Tip`, `Note`, `Warning`, `Card`, `CardGroup` are all within `how_to` preferred or standard Mintlify set |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no TODO/TBD visible text |
| 5.5 | Information type → component mapping correct | PASS | Reference data uses `StyledTable`; procedures use code blocks; callouts use `Note`/`Tip`/`Warning` |
| 5.6 | MDX renders clean | PASS | All imports used; no unclosed tags or JSX errors visible |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is deprecated 12-type value (same root as 1.2) |
| 5.8 | CSS uses custom properties only | N/A | No inline styles present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports; correct subdirectories |

**Category 5 verdict: FAIL** — Failing checks: 5.1, 5.2, 5.7

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|-------|------|--------|
| `model_id` is case-sensitive including org prefix | technical | REVIEW flag in JSX — unverified |
| Typo causes silent container failure (startup error only) | technical | REVIEW flag in JSX — unverified |
| External container `/health` endpoint requirement | technical | REVIEW flag in JSX — unverified |
| Download triggers on cold + job arrival OR warm=true at startup | procedural | REVIEW flag in JSX — unverified |
| SDXL-Lightning ~6–7 GB disk | evaluative | REVIEW flag — unverified |
| SVD ~10 GB disk | evaluative | REVIEW flag — unverified |
| Whisper large-v3 ~3 GB disk | evaluative | REVIEW flag — unverified |
| BLIP large ~1.5 GB disk | evaluative | REVIEW flag — unverified |
| SAM2 large ~2.5 GB disk | evaluative | REVIEW flag — unverified |
| Llama 3.1 8B Q4 ~4.7 GB disk | evaluative | REVIEW flag — unverified |
| NVMe vs spinning disk performance difference | evaluative | Unquantified; banned word `significantly` also flags here |
| `token` field provides bearer auth for HuggingFace download | technical | REVIEW flag in JSX — unverified |
| Pipelines visible in tools.livepeer.cloud within 2–5 min | evaluative | Empirical claim; REVIEW flag in JSX |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | Multiple technical and procedural claims have open REVIEW JSX flags indicating they are not yet verified against primary sources |
| 6.2 | Code/commands tested | FAIL | Pre-download `docker run` command has REVIEW flag: "Confirm the current ai-runner pre-download command syntax." No named source provided |
| 6.3 | No deprecated API usage | PASS | No deprecated flags or endpoints cited |
| 6.4 | Numbers are real | FAIL | Model disk sizes are approximate ranges with REVIEW flags confirming they are unverified estimates |
| 6.5 | REVIEW flags for unverified claims | PASS | Four REVIEW flags present in JSX comments, correctly scoped |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; with open REVIEW flags minimum honest status is `unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | `tools.livepeer.cloud/ai/network-capabilities` is a live volatile tool. REVIEW flag present but no staleness mitigation |
| 6.9 | No open-ended research tasks | FAIL | REVIEW: "Confirm the current ai-runner pre-download command syntax" — no named source, no concrete next step |

**Category 6 verdict: FAIL** — Failing checks: 6.1, 6.2, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/ai-and-job-workloads/model-hosting` confirmed at docs.json line 2904 |
| 7.2 | Navigation matches file system | PASS | File path matches nav entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | Linked in docs.json; incoming links via Related pages cards from sibling pages |
| 7.5 | Audience journey complete | PASS | Logical final step in the AI workloads section after model-demand-reference |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | `model-hosting.mdx` — no incorrect prefix, no `-index` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — No failing checks.

---

## Category 8 — LINKS & RENDERING

**Internal links verified against docs.json:**
- `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` → docs.json line 2923: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` → docs.json line 2898: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` → docs.json line 2899: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` → docs.json line 2900: CONFIRMED

**External links:** `huggingface.co/models`, `huggingface.co/settings/tokens`, `tools.livepeer.cloud/ai/network-capabilities` — not automatically tested.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 4 internal links confirmed in docs.json |
| 8.2 | All external links live | INFO | External links not auto-tested; REVIEW flags acknowledge the volatile tool URL |
| 8.3 | All snippet imports resolve | PASS | All 3 imports (`CustomDivider`, `LinkArrow`, `StyledTable/TableRow/TableCell`) are standard confirmed paths |
| 8.4 | All images load | N/A | No inline images beyond OG block |
| 8.5 | Page renders without error | PASS | No unclosed tags, missing imports, or JSX errors visible |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | REVIEW flags are JSX comments (invisible in render); no visible placeholder text |

**Category 8 verdict: PASS** — No failing checks. One INFO on external links.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: draft` — no human sign-off |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions requiring registry entry identified |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators IA not approved, terminology not locked, content pass not open. Page in publishable lane with `status: draft` |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | N/A | Review only — no fixes applied |
| 9.6 | Feedback routed | N/A | Review only |

**Category 9 verdict: FAIL** — Failing checks: 9.1, 9.3

---

## Cross-Category Connections

- **C1:** `pageType: how_to` (1.2) → 5.7 (old-schema frontmatter FAIL) → 5.1/5.2 (template mismatch). Single root cause, three symptoms. Fix 1.2 to fix all three.
- **C2:** Missing `veracityStatus` (1.8) + open REVIEW JSX flags (6.1, 6.2, 6.4, 6.8, 6.9) = same root: page has not been through veracity pass. Set `veracityStatus: unverified` as immediate fix; veracity pass resolves 6.x checks.
- **C3:** Missing `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche` (1.4, 1.6, 1.7, 1.9, 1.10) are co-located in frontmatter. Resolve as one batch edit.
- **C4:** `significantly` (2.2) and the NVMe performance claim (6.4) are the same line — the banned word modifies an unverified evaluative claim. Fix both together: quantify or remove.

---

## Blocking Decisions

**BD-1:** `pageType` migration — `instruction` (plain) or `instruction + pageVariant: quickstart`? Content reads as a configure/reference page more than a quickstart. Recommend `pageType: instruction` without `pageVariant`. Requires Alison sign-off.

**BD-2:** Missing `purpose` value — `configure` is proposed but requires human confirmation before applying.

---

## Verdict Summary

**Overall: NEEDS WORK**

**22 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.7, 5.1, 5.2, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Deprecated `pageType: how_to`
Replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` unless BD-1 resolves otherwise. This co-fixes 5.7. Resolves BD-1.
Proposed: `pageType: instruction` — confirm before applying.

**F-02** — CRITICAL — Missing required frontmatter fields
Add to frontmatter block:
- Proposed: `purpose: configure` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: setup` — confirm before applying
- `veracityStatus: unverified` (no confirmation needed — consistent with open REVIEW flags)

**F-03** — CRITICAL — Missing required `industry` and `niche` fields
Proposed:
- `industry: [AI, technical]` — confirm before applying
- `niche: [AI, hardware]` — confirm before applying

**F-04** — HIGH — `description` exceeds 160 character limit (220 chars)
Proposed: `Source, download, and store AI models for Livepeer orchestrator pipelines — HuggingFace IDs, gated model tokens, storage layout, and load verification.` (156 chars) — confirm before applying.

**F-05** — HIGH — Banned word `significantly` at line 166
Replace: "loading weights from spinning disk into VRAM is significantly slower and affects warm model startup time and cold model first-request latency."
With: "loading weights from spinning disk adds measurable latency to warm model startup and cold model first-request response time."

**F-06** — HIGH — Heading "Getting access" scores 14/25 (below 20/25 threshold)
Rename H3 to: `HuggingFace Account Setup`

**F-07** — HIGH — Veracity pass required; `veracityStatus: unverified` minimum
Resolve all four REVIEW JSX comment blocks against primary sources. Each needs a named source before closing: pre-download command syntax (go-livepeer CLI docs), model disk sizes (HuggingFace model cards), token auth behaviour (go-livepeer source), registration timing (empirical — state as approximate with range).

**F-08** — MEDIUM — No `Prerequisites` section for `instruction` pageType
Add a prerequisites note or callout linking to AI Inference Operations and noting that `aiModels.json` schema familiarity is assumed.

**F-09** — MEDIUM — Storage sizing table rows are unverified estimates
For each model row, add a source link or inline REVIEW flag pointing to the specific HuggingFace model card. Do not present ~GB estimates as authoritative without source.
