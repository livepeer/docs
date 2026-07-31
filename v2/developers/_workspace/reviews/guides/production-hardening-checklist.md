# Review: production-hardening-checklist.mdx

**Page**: `v2/developers/guides/production-hardening-checklist.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: `verify`
**Bytes**: 6,062
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Missing `veracityStatus`. Legacy `status: current` (line 24). |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: reference` (line 7). Canonical. |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. Could be `compendium`. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: verify` (line 9). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 8). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 10). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: operate` (line 11). |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. Should be `unverified` until claims sourced. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "Pre-launch checklist for Livepeer applications: gateway selection, authentication, error handling, model selection, cost estimation, and monitoring." 155 chars. Subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | Lines 19-23. Uses developer-tab OG image — consistent with sibling guides. |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific (production checklist, hardening, reliability, monitoring, cost estimation, error handling). |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | CenteredContainer protected zone. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 32 `<Tip>`: "The community gateway at dream-gateway.livepeer.cloud is for development only." Subject-first. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each H2 a focused checklist or table. |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | TicketBroker, BYOC, gateway, orchestrator canonical. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Zero `—` characters. |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | "AI inference pricing is orchestrator-set…" / "Custom `model_id` values cold-start…" / "Video transcoding is priced…" — all entity-led. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | MIXED | Line 45 "go-livepeer in broadcaster mode" — legitimate CLI mode reference. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `TicketBroker` (lines 32, 57, 131) named without inline definition or glossary link. `model_id` named multiple times without taxonomy link. `Livepeer-Signature` webhook header (line 92) named without spec link. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction | N/A | Reference page. |
| 2.D | 2.D2 | Every function/API named has code/link | MIXED | HTTP status codes (`401`, `422`, `503`, `429`, `500`) named in error-handling checklist (lines 63-67) without link to canonical API error doc. Model IDs (lines 79-83) named without link to the model registry. `aiModels.json` mentioned (line 102) without schema link. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | No version pin anywhere. "go-livepeer in broadcaster mode" (line 45) — no version. SDK retry mention (line 69) — no SDK named or pinned. |
| 2.D | 2.D4 | Error states in main content | PASS | Error states ARE the main content (Authentication / Error handling sections). PASS. |
| 2.D | 2.D5 | No prose explanations of self-evident code | PASS | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | Single `<Tip>` (line 32) is header CTA. |
| 3. Headings | 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | "Gateway selection", "Error handling", "Model selection (AI applications)", "Video applications", "BYOC applications", "Cost estimation", "Monitoring", "Launch readiness" — all domain-anchored. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Production hardening checklist" — 3 words. |
| 3. Headings | 3.7 | Editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | reference = literal/findability; headings deliver that. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: verify production-readiness before launch. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer verify their application is production-ready before launch." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | MIXED | No top-of-page prereq link. Closing pointer (line 146) routes to job-debugging — acceptable next step. |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing pointer (line 146) is the only handoff. No Related Pages footer. Pointer is underweight for a 6KB reference. |
| 4. Structure | 4.5 | Prerequisites stated or linked | MIXED | No `## Prerequisites` section. Checklist assumes reader has: an application running against the community gateway, an API key, an SDK in use, models selected. None stated explicitly. |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | Header `<Tip>` (line 32) bounds community gateway as dev-only. Doesn't bound out: orchestrator-side production (covered in Orchestrators tab), protocol-side (About tab). |
| 4. Structure | 4.7 | Information type correct | PASS | Reference checklist. |
| 4. Structure | 4.8 | No content duplication | MIXED | "BYOC applications" section (lines 99-105) overlaps with `build/compute/byoc/byoc-production.mdx` (section 5 review found these on 2 places). Could link. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Zero cross-tab links. Page implicitly covers gateway-operator production concerns + orchestrator-operator concerns but does not link Orchestrators tab or Gateways tab. |
| 4. Structure | 4.11 | Discord test | PASS | Answers "am I production-ready?" with a concrete checklist. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 6KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | MIXED | Page lists failure modes implicitly through error-state checks. No explicit "what could go wrong" section. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No fenced code blocks. |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | PASS | See 2.D4. |
| 4. Structure | 4.20 | Every function/API named has code/link | MIXED | See 2.D2. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | PASS | reference matches checklist structure. |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | reference matrix: intro ✓, body with structured data ✓ (checklists + tables), Related Pages MISSING. |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | MIXED | Reference data uses raw markdown tables — should be `<StyledTable>` per 5.5. Checklist items use Markdown `- [ ]` syntax (rendered as bare checkboxes); could be `<Checkbox>` or `<StyledTable>` rows for filterability. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter values | MIXED | `status: current` (line 24) legacy field. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Two consecutive `<CustomDivider />` on lines 35 and 37 — duplicate divider before first H2. FAIL 5.26. No Related Pages section. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Warm model table (lines 77-83) hardcoded. Should pull from a shared data source (model registry / aiModels.json or a derived snippet) per CLAUDE.md "No hardcoded data" rule. Gateway selection table (lines 41-45) hardcoded — same. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | Closing pointer (line 146) is the only handoff. Acceptable per "one or the other" but underweight. |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | 2 raw markdown tables: lines 41-45 (Gateway selection) + lines 77-83 (Warm models per pipeline). Both should be `<StyledTable>`. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables — at the maximum. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | Tables + checklist sections — flat. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | **Lines 35 and 37 — two consecutive `<CustomDivider />` instances** (verified). Violates "ONE opening divider after imports". Strictly: one divider should appear after the closing `</CenteredContainer>` (line 33) and the next H2 follows; instead the page has divider-divider-H2. Also: no `<CustomDivider />` before final paragraph (line 146) — but no Related Pages section to need it. |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | PASS | Lines 28-29: `CustomDivider`, `CenteredContainer`. Element → wrapper. Acceptable. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | All checklist items flat, no Accordions hiding decision info. |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Tables are mid-page within their respective sections — acceptable for an in-section reference (Gateway selection / Model selection sections). |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | FAIL | Numerous claims need sources: (a) Line 56: "Key rotation schedule set (90-day recommended)" — no source for the 90-day figure. (b) Line 68: "300 seconds for cold model scenarios" — no source. (c) Line 75: "Cold models take 30 seconds to 5 minutes to load" — needs source. (d) Line 111: "approximately $0.019 per megapixel of output" — needs source/date. (e) Line 116: "approximately $20/day" — derived from $0.019 figure. (f) Lines 79-83 warm model names — need link to model registry. (g) Line 128: "p50, p95, p99 latency" — standard but needs context for this product. (h) Line 129: "above 5% (warm model unavailability)" — threshold without source. |
| 6. Veracity | 6.2 | Code tested | N/A | No code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | FAIL | Pricing claim "$0.019 per megapixel" (line 111) is a load-bearing economic figure with no source. Worked example "approximately $0.020 per image" (line 116) derives from it. Reader making a launch decision needs to know where this comes from and how stale it is. |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No version pin, no source date on pricing, no SDK version. `lastVerified: 2026-05-14` (line 25) is recent but pricing has no source citation to verify against. |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | MIXED | Implicit T1 (canonical) framing but no source links. |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2650. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | See 4.10. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | `/v2/developers/guides/observability-and-debugging/job-debugging` (line 146) — verified. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | No external links. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | PASS | |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Checklist covers the major pillars (gateway / auth / errors / model / video / BYOC / cost / monitoring / launch). Missing: rate-limit specifics (numbers), webhook signature verification (procedure not just `- [ ]`), logging schema. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | MIXED | |
| 10. Content Completeness | 10.5 | Self-containment holds | MIXED | Many items reference concepts (TicketBroker, model_id, Livepeer-Signature) without inline definition. |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | |
| 10. Content Completeness | 10.7 | Persona-specific guides present | PASS | AI / Video / BYOC personas each have their own §. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Production hardening checklist" | PASS | |
| sidebarTitle | Yes | "Production checklist" | PASS | |
| description | Yes | 155 chars | PASS | |
| pageType | Yes | reference | PASS | Canonical. |
| audience | Yes | developer | PASS | |
| purpose | Yes | verify | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | operate | PASS | |
| keywords | Yes | 6 keywords | PASS | All specific. |
| og:image fields | Yes (5) | developers.png | PASS | |
| veracityStatus | No | — | FAIL | Missing. |
| lastVerified | Yes | 2026-05-14 | PASS | |
| status | Yes | current | FAIL | Legacy field; remove. |
| pageVariant | No | — | INFO | Could be `compendium`. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (10×) | Required | — | **DUPLICATE divider at lines 35 + 37** (FAIL 5.26). |
| `<Tabs>` | No | — | Recommended | AI / Video / BYOC sections could be Tabs to compact the checklist. |
| `<StyledSteps>` | No | — | — | |
| `<Card>` / `<Columns>` Related Pages | NO | Required for non-navigation | — | No Related Pages section. FAIL 5.16 (closing prose pointer is borderline acceptable). |
| `<CustomCardTitle>` | No | — | — | |
| Fenced code | No | — | — | |
| `<Note>` / `<Info>` / `<Tip>` | `<Tip>` line 32 | — | OK | Header CTA. |
| `<Accordion>` | No | — | Recommended | Each section's checklist could be a collapsible Accordion to reduce vertical length. |
| `<StyledTable>` | No | — | — | 2 raw markdown tables — FAIL. |
| `<LinkArrow>` | No | — | — | |
| `<CenteredContainer>` | Yes | — | Approved | Wraps header Tip. |

## Cross-page duplication and link gaps

- **OVERLAP**: "BYOC applications" section (lines 99-105) overlaps with `build/compute/byoc/byoc-production.mdx`. Should link rather than duplicate.
- **OVERLAP**: "Authentication" section (lines 51-57) overlaps with `guides/auth-and-security/ai-authentication.mdx`. Should link.
- **OVERLAP**: "Error handling" section (lines 61-69) overlaps with `guides/observability-and-debugging/job-debugging.mdx` (the closing pointer's target). Could be consolidated as a "see job-debugging for the full error matrix" callout.
- **LINK GAPS**: HTTP status codes 401/422/503/429/500 (lines 63-67) named without link to the canonical API error documentation page (likely `resources/reference/apis.mdx`).
- **LINK GAPS**: Warm model IDs (lines 79-83) named without link to the model registry.
- **LINK GAPS**: `Livepeer-Signature` webhook header (line 92) named without link to webhook docs.
- **LINK GAPS**: `dream-gateway.livepeer.cloud` (line 43, 137) named without anchor/link.
- **LINK GAPS**: `aiModels.json` (line 102) named without schema link to `livepeer/go-livepeer`.
- **LINK GAPS**: `Livepeer Discord #builders` (line 144) named without link.
- **LINK GAPS**: Zero cross-tab links. Missing graduation to `/v2/orchestrators/setup/` (operator-side production concerns), `/v2/gateways/setup/` (gateway-operator concerns), `/v2/about/economics/per-second-compute` (pricing reality).
- **STRANDED**: Closing pointer (line 146) is a single LinkArrow. No Related Pages footer. For a "production launch" reference, multiple next-step paths are warranted.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (CenteredContainer protected) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms (Broadcaster) | 1 | line 45: "go-livepeer in broadcaster mode" — go-livepeer CLI mode reference. INFO. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Gateway selection | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Authentication | 5 | 4 | 5 | 5 | 5 | 24 PASS (OK heading term) |
| Error handling | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Model selection (AI applications) | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| Video applications | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| BYOC applications | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Cost estimation | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Monitoring | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Launch readiness | 5 | 4 | 5 | 5 | 5 | 24 PASS |

Title "Production hardening checklist": 5/4/5/5/4 = 23 PASS.

Best heading rhythm in the local-and-top slate — every H2 hits 23+.

## Code Block Audit

No fenced code blocks. N/A.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "I'm confident my application will survive launch traffic". The checklist gets them through 9 sections, ending with "Launch readiness" (line 135). But there's no verification step — how does the reader prove they've passed? No "run this command" / "check this dashboard" / "review this log pattern" actionable proofs. The checklist is a memory aid, not a test. Compare to standard production-readiness frameworks (Google SRE checklist, AWS Well-Architected review) which pair every item with a verification.
- **Fix step:** For every checklist item, add an actionable verification or example. Convert items from "[ ] API key stored in environment variables or secrets manager" to "[ ] API key stored in environment variables (verify: `printenv | grep -i livepeer` returns expected variable; secret never appears in `git log -p`)". Apply to all 30+ items.
- **Source/exemplar:** Google SRE Workbook production-readiness review; AWS Well-Architected Tool; `_packet/component-matrix.md` reference matrix.

### Layer 2 — Composition
- **Gap:** DUPLICATE `<CustomDivider />` on lines 35 + 37 (FAIL 5.26 — load-bearing render bug). 2 raw markdown tables (FAIL 5.23). 9 H2 sections with no structural grouping — could be 3 `<Tabs>` (AI / Video / BYOC) or 3 `<Accordion>` (Pre-launch / Launch / Post-launch). No Related Pages footer. Checklist `- [ ]` items use Markdown checkbox syntax — renders as bare unchecked boxes; no interactive state, no filter. No `<CenteredContainer>` wrapper around the closing pointer line 146 (other reference pages don't either, so this is fine).
- **Fix step:** (a) Delete one `<CustomDivider />` at line 35 OR line 37. (b) Convert 2 raw markdown tables (lines 41-45, 77-83) to `<StyledTable>`. (c) Consider `<Tabs>` to group AI / Video / BYOC application sections. (d) Add Related Pages footer with `<Columns cols={2}>` + 4 `<Card>` + `<CustomCardTitle horizontal>`. (e) Investigate converting checklist items to `<StyledTable>` rows with columns: Item / Why / Verify command / Doc link.
- **Source/exemplar:** `_packet/component-matrix.md` reference matrix; `repo-map.mdx` review for the StyledTable refactor pattern.

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. The "Production" lens spans developer-tab AND orchestrator-tab AND gateway-tab AND about-tab (pricing reality). All four should be linked. On-tab: many sections overlap sibling pages without linking. HTTP status codes named without link. Model IDs named without link to registry. `aiModels.json`, `Livepeer-Signature`, `dream-gateway.livepeer.cloud` all named without anchors.
- **Fix step:** (a) Add cross-tab Related Pages cards: `/v2/gateways/setup/monitor` (gateway production ops), `/v2/orchestrators/setup/...` (orchestrator production concerns), `/v2/about/economics/...` (pricing source). (b) On every section, add an inline `<LinkArrow>` to the canonical sibling: "See [AI Authentication](.../auth-and-security/ai-authentication) for full key management" / "See [Job Debugging](.../observability-and-debugging/job-debugging) for the full error matrix". (c) Link HTTP status codes to the API errors page. (d) Link `dream-gateway.livepeer.cloud`, `aiModels.json`, `Livepeer-Signature`. (e) Link the Discord `#builders` channel (line 144).
- **Source/exemplar:** `_packet/review-rubric.md` check 4.10; `v2/orchestrators/setup/monitor.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** The most important load-bearing claim — pricing ("$0.019 per megapixel of output", line 111) — has zero citation. The reader makes a launch / no-launch / budget decision off this number. If wrong, the decision is wrong. Other unsourced load-bearing numbers: 90-day key rotation (line 56); 300-second cold-model timeout (line 68); 30s-5min cold model load time (line 75); 5% 503 alert threshold (line 129); 1% 5xx alert threshold (line 130). Warm model recommendations (lines 79-83) — no link to model registry to confirm these are still the warm set.
- **Fix step:** (a) Replace "$0.019 per megapixel" with sourced figure: either link to a tools.livepeer.cloud pricing page, or remove the absolute number and link to a "Pricing" page that pulls live data. Add `lastVerified` date next to the figure. (b) Source the 90-day key rotation recommendation (security best practice — link to OWASP or a security guide). (c) Source the SLO thresholds (5% / 1%) — either link to a Livepeer-specific operations doc or remove the absolute thresholds and recommend "adjust to your application's tolerance". (d) Link the warm-model table to the canonical model registry. (e) Add `veracityStatus: unverified` until sourced. (f) Add `{/* REVIEW: re-verify pricing quarterly */}` placeholder near line 111.
- **Source/exemplar:** `tools.livepeer.cloud`; `livepeer/aiModels` registry; OWASP key-management cheatsheet for rotation guidance.

### Layer 5 — Product-forward depth
- **Gap:** This is a launch-readiness reference — one of the highest-stakes pages a developer reads. It currently reads as a memory aid (a 30-item checklist with no scoring, no priority, no examples of what failure looks like in production, no signal of how many other apps have shipped using this checklist). Missing: severity per item (P0/P1/P2), a "you can skip these if you're not doing X" filter, real-world failure stories ("apps that skipped key rotation got compromised within N weeks"), maturity badge of the checklist itself (when was it last reviewed by SREs?), "What's NEW since last review" callout.
- **Fix step:** (a) Add a `<Badge>Last reviewed 2026-05-14 — N applications using this checklist</Badge>` near the title. (b) Add a severity column to each checklist (P0 must-have / P1 strongly-recommended / P2 nice-to-have) — `<StyledTable>` format. (c) Add a §"What this checklist won't catch" callout naming the items outside scope (orchestrator-side / protocol-side / network-side). (d) Add a §"Most common production failures" callout with 3 real-world failure modes (key compromise, cold model thundering herd, BYOC GPU OOM under load) and what they cost. (e) Add Discord `#builders` link in the launch-readiness footer.
- **Source/exemplar:** AWS Well-Architected Tool format; `.claude/references/layout/exemplars.md` product-checklist pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 4

**Critical findings (top 5)**:
1. **Duplicate `<CustomDivider />` on lines 35 + 37 (5.26)** — load-bearing render error. HIGH.
2. **Pricing claim "$0.019 per megapixel" sourceless (6.1 / 6.4)** — line 111, drives reader's budget decision. HIGH.
3. **2 raw markdown tables not `<StyledTable>` (5.23)** — lines 41-45, 77-83. HIGH.
4. **No Related Pages footer (5.16 / 4.10 / 7.6)** — single LinkArrow at line 146 only. HIGH.
5. **Legacy `status: current` (5.7) + missing `veracityStatus` (1.8)** + **30+ checklist items sourceless (6.1)**. HIGH. |

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Delete one of the duplicate `<CustomDivider />` instances at line 35 or 37 (keep one). | 35 or 37 | HIGH | S | check 5.26 |
| 2 | Source or remove the "$0.019 per megapixel" pricing claim (line 111). If retained, add LinkArrow to source + `lastVerified` date. Add `{/* REVIEW: re-verify pricing quarterly */}`. | 111-116 | HIGH | M | check 6.1, 6.4 |
| 3 | Convert 2 raw markdown tables to `<StyledTable>`: lines 41-45 (Gateway selection — 3 rows), 77-83 (Warm models per pipeline — 5 rows). Add `<TableRow header>`. | 41-45, 77-83 | HIGH | M | check 5.23, 5.24 |
| 4 | Add Related Pages footer before the closing pointer: `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` with 4 `<Card>` + `<CustomCardTitle horizontal>`. Cards: AI Authentication (sibling), Job Debugging (next step), Orchestrators production (cross-tab), Gateways monitor (cross-tab). Delete the lone LinkArrow at line 146 OR keep it as the explicit Next Step and skip Related Pages. | After 144 | HIGH | M | check 5.16, 5.17, 4.10 |
| 5 | Add `veracityStatus: unverified` to frontmatter. Remove legacy `status: current` (line 24). | 24 | HIGH | S | check 1.8, 5.7 |
| 6 | Source or remove the SLO threshold claims (5% on line 129, 1% on line 130). Either link to operations doc or rephrase as "tune to your tolerance". | 129, 130 | HIGH | S | check 6.1 |
| 7 | Add inline LinkArrow on every cross-page concept: HTTP status codes (63-67) → APIs reference; warm model IDs (79-83) → model registry; `Livepeer-Signature` (92) → webhook docs; `aiModels.json` (102) → schema in `livepeer/go-livepeer`; `dream-gateway.livepeer.cloud` (43, 137) → operating-org page; Discord `#builders` (144) → invite link. | 63-67, 79-83, 92, 102, 43, 137, 144 | HIGH | L | check 6.10, Layer 3 |
| 8 | For every checklist item, add a one-line "verify:" instruction or example command in parentheses. Convert to `<StyledTable>` with columns Item / Why / Verify. | 53-57, 63-69, 91-95, 101-105, 127-131, 137-144 | MEDIUM | XL | Layer 1 |
| 9 | Source the 90-day key rotation (line 56) — link to OWASP key-management or remove the specific number. | 56 | MEDIUM | S | check 6.1 |
| 10 | Source the 30s-5min cold model load + 300s timeout claims (lines 68, 75) — link to model loading documentation or production telemetry. | 68, 75 | MEDIUM | S | check 6.1 |
| 11 | Add a §"What this checklist won't catch" callout listing orchestrator-side / protocol-side / network-side concerns out of scope. | Before line 39 | MEDIUM | M | Layer 5 |
| 12 | Wrap closing pointer (line 146) in `<CenteredContainer preset="readable90">` OR convert to a more structured Next Step card. | 144-146 | INFO | S | check 5.11 |
| 13 | Add `pageVariant: compendium` to frontmatter. | After 7 | INFO | S | check 1.3 |
| 14 | Add `<Badge>Last reviewed 2026-05-14</Badge>` near the title. | After title | MEDIUM | S | Layer 5 |
| 15 | Add severity column to each checklist (P0/P1/P2) — driven by `<StyledTable>` refactor. | All checklist items | MEDIUM | L | Layer 5 |
| 16 | Consolidate "BYOC applications" section (99-105) into a 2-line summary + LinkArrow to `byoc-production.mdx`. | 99-105 | MEDIUM | S | 4.8, Layer 3 |
