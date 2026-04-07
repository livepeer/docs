# Per-Page Quality Check Report
## `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2919–2925

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Pricing Strategy'` | PASS | |
| `sidebarTitle` | Yes | `'Pricing Strategy'` | PASS | |
| `description` | Yes | `'Set competitive pricing for video and AI workloads on a Livepeer orchestrator. Covers pricePerUnit, per-pipeline AI pricing in aiModels.json, pricePerGateway, autoAdjustPrice, and market positioning methodology.'` | FAIL | ~210 chars — exceeds 160-char limit. Second sentence also enumerative, not subject-first |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying |
| `complexity` | No | — | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying |
| `keywords` | Yes | 8-item array | PASS | `pricePerUnit`, `pricePerGateway`, `autoAdjustPrice`, `aiModels.json`, `wei`, `USD` — specific and searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `industry` | No | — | FAIL | Required per P41. Proposed: `industry: [technical, economics]` — confirm before applying |
| `niche` | No | — | FAIL | Required per P41. Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| `veracityStatus` | No | — | FAIL | Field absent. 4 open FACT CHECK flags present. Must be `unverified` |

**Required field count:** 4/10 canonical fields present (title, sidebarTitle, audience, keywords, OG block pass; description overlength; pageType deprecated; purpose/complexity/lifecycleStage/industry/niche/veracityStatus absent).**

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. 6 fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| 1.3 | `pageVariant` valid if present | N/A | Field absent. `how_to → instruction` migration does not require `pageVariant` (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying (P51). Page maps pricing options to effects for specific requirements |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying (P51) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 4 open FACT CHECK flags (lines 52, 78, 104, 173). Must be `veracityStatus: unverified`. `status: draft` is consistent with unverified (P39 satisfied) |
| 1.9 | `industry` array valid if present | FAIL | Required per P41. Proposed: `industry: [technical, economics]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Required per P41. Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | ~210 chars — exceeds 160-char limit. Proposed: `Set competitive pricing for video and AI workloads on a Livepeer orchestrator, covering pricePerUnit, aiModels.json, pricePerGateway, and autoAdjustPrice.` (156 chars) — confirm before applying |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | `pricePerUnit`, `pricePerGateway`, `autoAdjustPrice`, `aiModels.json`, `wei`, `USD` are specific and searcher-intent-aligned |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

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
- "can generate" / "may produce" in value claims — not found

**Banned construction candidates (P6):**
- Line 102: "Disabling autoAdjustPrice is appropriate when you want a predictable advertised rate for commercial relationships, or when you are setting per-gateway prices manually." — `when you want` is conditional. This is use-case scoping in a configuration context. BORDERLINE — flagging INFO per P23; does not constitute a clear `if [condition]` in a value claim.
- No `can/may [verb]` in value claims found.
- No `not [X]` as primary value statement found.
- No `This page [verb]` self-reference found.

**Em-dash scan (P30 — all visible text):**
- Body prose: no em-dashes found
- Headings H2/H3: no em-dashes
- `description` field: no em-dashes
- CustomDivider `middleText` props (P20): `"Video Pricing"`, `"AI Pricing"`, `"Per-Gateway Pricing"`, `"Pricing Flag Reference"` — no em-dashes. PASS.
- Table cells: no em-dashes. PASS.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout (P54) | PASS | No US `-ize`, `-or`, `-er` endings in prose. `autoAdjustPrice` is a CLI flag identifier — exempt |
| 2.2 | Zero banned words (P46) | PASS | All 10 banned words scanned; none found |
| 2.3 | Zero banned phrases | PASS | All banned phrases scanned; none found |
| 2.4 | Zero banned constructions | PASS | No `not [X]` primary statements; no `This page [verb]`; no `can/may [verb]` in value claims. Line 102 BORDERLINE noted as INFO |
| 2.5 | Opening order correct | PASS | Tip leads with consequence (gateways filter by price, zero net income from both extremes). Body opens with structural fact: "Livepeer pricing operates in two domains…" |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; fact-first lead sentences; no hedge endings |
| 2.7 | Audience register correct | PASS | Economics-aware, CLI-specific, hardware-adjacent. Correct `orchestrator` register |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…", "Easy to set up", or unquantified earnings hedges |
| 2.9 | No passive value statements | PASS | autoAdjustPrice table gives exact wei multipliers; pricing domains named with specific mechanisms |
| 2.10 | No hedging openers | PASS | Tip leads with a clear outcome statement; body opens with fact |
| 2.11 | Terminology locked and consistent | PASS | `wei`, `ETH`, `pricePerUnit`, `pixelsPerUnit`, `autoAdjustPrice`, `pricePerGateway`, `aiModels.json` used consistently |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading inventory (exempt: `## Related pages` per P16/P53 note — the exact exempt form is `Related Pages` capital P; lowercase `pages` is used throughout the group. INFO only — see F-10):**

| Heading | Level | Precision (1–5) | Depth (1–5) | Stability (1–5) | Clarity (1–5) | Conciseness (1–5) | Total | Pass? |
|---------|-------|-----------------|-------------|-----------------|---------------|--------------------|-------|-------|
| Video pricing | H2 | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Setting the price | H3 | 3 | 2 | 4 | 4 | 4 | 17/25 | FAIL |
| Surveying the market | H3 | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| autoAdjustPrice | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| AI pricing | H2 | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Pricing units by pipeline | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| aiModels.json pricing fields | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| USD notation for AI pricing | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Checking competitive AI rates | H3 | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Per-gateway pricing | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Pricing flag reference | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |

Failing headings analysis:
- **"Setting the price"** (17/25): Generic process-verb label applicable to any pricing context. Low Precision (3): does not name the governing concept (the `-pricePerUnit` flag and its arguments). Low Depth (2): signals no intellectual content beyond "a price gets set." Proposed rename: `pricePerUnit Configuration` — confirm before applying. (P18 check: `Configuration` is in check 3.2 OK list.)
- **"Checking competitive AI rates"** (18/25): Verbose and action-framed. Low Conciseness (3). Proposed rename: `AI Rate Survey` — confirm before applying.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 2 headings below threshold: "Setting the price" (17/25), "Checking competitive AI rates" (18/25) |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`). No Avoid-tier terms (`Overview`, `Details`, `Summary` etc.) |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | All headings interpretable in isolation. "AI pricing" and "Video pricing" carry the domain noun |
| 3.5 | Heading names the concept, not examples | PASS | "Pricing units by pipeline" not "pixels/ms/tokens" |
| 3.6 | Title well-formed | PASS | `Pricing Strategy` — 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | FAIL | "Setting the price" and "Checking competitive AI rates" are generic instructional labels, not concept-anchored expert choices. A senior technical editor would name the governing concept |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence from docs.json lines 2919–2925: `pricing-strategy` (pos 1) → `capacity-planning` (pos 2) → `ai-model-management` (pos 3) → `reward-call-tuning` (pos 4).

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure pricing for video and AI workloads on a running orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator configure pricePerUnit, aiModels.json pricing, and per-gateway pricing for their node." — states cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | INFO | Position 1 in group — no preceding page within this group. Arriving from the guides section overview or from setup pages. Next page: `capacity-planning`. Pricing before capacity is a logical sequence: set revenue parameters before capacity limits. Adjacency reasonable. No prev-page knowledge gap identified |
| 4.4 | No dead ends | PASS | Related pages provide 4 outbound links: gateway pricing (cross-tab), gateway relationships, earning model, AI inference operations |
| 4.5 | Prerequisites stated or linked | INFO | No explicit Prerequisites section. Implicitly requires: node running, familiar with go-livepeer startup flags. A Prerequisites note would improve discoverability. Not a blocker |
| 4.6 | Out-of-scope is clear | PASS | Scope stated in intro: "two domains: video transcoding and AI inference." Per-gateway pricing introduced as "a third layer." Boundaries clear |
| 4.7 | Information type per section correct | PASS | `purpose: configure` (proposed). Permitted types: `procedural`, `technical`, `factual` (primary); `conceptual` (secondary). Video pricing section (factual + procedural), autoAdjustPrice (technical + factual), AI pricing table (factual), flag reference (factual) — all within permitted range |
| 4.8 | No content duplication from adjacent sections | PASS | aiModels.json fields discussed at different levels of detail in ai-inference-operations; no direct duplication |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. Note: gateway pricing cross-tab link correctly present in Related pages |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

Component matrix for `pageType: how_to` per `docs-guide/policies/component-layout-decisions.mdx`: Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`. Avoid: `Coming Soon`, `PreviewCallout`.
When migrated to `pageType: instruction`: same matrix.

Components used: `CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `BorderedBox`, `Tip`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | INFO | `how_to` deprecated — see 1.2. When migrated to `instruction`: requires Prerequisites and Steps. Page lacks explicit Prerequisites heading but has strong structured content |
| 5.2 | Required sections present | INFO | `instruction` requires Prerequisites and Steps. No `<Steps>` wrapper — CLI flags presented as code blocks with explanatory prose. Functional but not template-compliant. Not blocking for a configuration reference |
| 5.3 | Only approved components used | NOT-TESTED | `Tip` approved. `CustomDivider`, `StyledTable`/`TableRow`/`TableCell`, `BorderedBox`, `LinkArrow` are custom components not listed in component-layout-decisions.mdx. Per P22: NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no rendered TODO/TBD |
| 5.5 | Information type → component mapping correct | PASS | Pricing tables in `StyledTable` (factual → table correct). CLI flags in code blocks (procedural/technical → code correct) |
| 5.6 | MDX renders clean | PASS (inferred) | No unclosed tags, no broken JSX; all imports present |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` deprecated (same root cause as check 1.2) |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths |

**Category 5 verdict: FAIL** — 1 check fails: 5.7

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Type | Line | TESTED/NOT-TESTED | Source needed |
|-------|------|------|-------------------|---------------|
| Current video price range (500–2,000 wei referenced in FACT CHECK) | factual | 52 | NOT-TESTED | FACT CHECK flag: tools.livepeer.cloud |
| ETH = 1e18 wei | factual | 48 | TESTED | Mathematical identity — verified |
| pixel count = width × height × output_renditions | technical | 48–49 | NOT-TESTED | go-livepeer source |
| USD suffix uses Chainlink ETH/USD feed on Arbitrum | technical | 69–70 | NOT-TESTED | FACT CHECK flag (line 78): Rick to verify |
| `-pricePerUnit` USD on Arbitrum: `-priceFeedAddr` not required | technical | 78 | NOT-TESTED | FACT CHECK flag |
| autoAdjustPrice production-stable, not feature-gated | technical | 88, 104 | NOT-TESTED | FACT CHECK flag (line 104) |
| autoAdjustPrice overhead table (1%, 20%, 50%) | technical/analytical | 90–94 | NOT-TESTED | No source; mechanism not cited |
| Typical wei figures per pipeline (all 9 rows) | factual | 127–170 | NOT-TESTED | FACT CHECK flag (line 173): tools.livepeer.cloud |
| `-pixelsPerUnit` supports `1e12` notation; `-pricePerUnit` does not | technical | 76 | NOT-TESTED | go-livepeer source |
| `0.5e-3USD` = $0.0005 per megapixel | factual | 221 | TESTED | Mathematical identity: 0.5 × 10^-3 = 0.0005. Correct |
| USD AI pricing uses same Chainlink feed as video USD mode | technical | 221–222 | NOT-TESTED | go-livepeer source |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | 9 of 11 claims NOT-TESTED; 4 have FACT CHECK flags; 2 mathematical identities verified |
| 6.2 | Code/commands tested | NOT-TESTED | CLI flag syntax and aiModels.json field syntax not verified against current go-livepeer release |
| 6.3 | No deprecated API usage | PASS (inferred) | Flag names consistent with other pages in the tab |
| 6.4 | Numbers are real | FAIL | Wei figures per pipeline noted as "illustrative baselines" in FACT CHECK (line 173). autoAdjustPrice example percentages uncited |
| 6.5 | REVIEW flags for unverified claims | FAIL | 4 FACT CHECK flags present but several claims lack any flag: autoAdjustPrice overhead table (lines 90–94), pixel count formula (line 48–49), exponential notation note (line 76), USD AI Chainlink feed claim (line 221–222) |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. Given 4 open FACT CHECK flags and untested CLI claims, correct value is `unverified` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness check | INFO | Wei pricing figures acknowledged as potentially stale (FACT CHECK line 173). Chainlink feed address may change with go-livepeer updates |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.5, 6.6 fail

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` confirmed at docs.json line 2921 |
| 7.2 | Navigation matches file system | PASS | File at declared path |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav |
| 7.5 | Audience journey complete | PASS | Position 1 of 4 in config-and-optimisation group. Logical entry for operators configuring a new node |
| 7.6 | Cross-tab graduation paths exist | INFO | Related pages card links to `/v2/gateways/guides/payments-and-pricing/pricing-strategy` — confirmed docs.json line 2691. Cross-tab link present and correct |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | No incorrect prefix |
| 7.9 | _workspace/ TTL compliance | N/A | Not in _workspace/ |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/gateways/guides/payments-and-pricing/pricing-strategy` — confirmed docs.json line 2691. `/v2/orchestrators/guides/advanced-operations/gateway-relationships` — confirmed docs.json line 2939. `/v2/orchestrators/guides/staking-and-rewards/earning-model` — confirmed docs.json line 2910. `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — confirmed docs.json line 2898. All 4 verified |
| 8.2 | All external links live | NOT-TESTED | `https://explorer.livepeer.org/orchestrators` and `https://tools.livepeer.cloud/ai/network-capabilities` not tested in static review |
| 8.3 | All snippet imports resolve | PASS | Standard import paths consistent with other pages in the tab |
| 8.4 | All images load | PASS | OG image standard path |
| 8.5 | Page renders without error | PASS (inferred) | No unclosed tags; all imports present |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX `{/* */}` comments — not rendered output |

**Category 8 verdict: PASS**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: draft`; no sign-off recorded |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab IA not approved, terminology not locked |
| 9.4 | Phase ordering respected | N/A | Cannot confirm |
| 9.5 | Findings gathered before fixes | N/A | First formal check |
| 9.6 | Feedback routed | N/A | First formal check |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (expected pre-publication state)

---

## Cross-Category Connections

- **C1:** Missing `purpose`, `complexity`, `lifecycleStage` (checks 1.1, 1.4, 1.6, 1.7) → affects check 4.7 (information type mapping evaluated against proposed `purpose: configure`) and check 5.1 (template compliance)
- **C2:** `pageType: how_to` deprecated (checks 1.2, 5.7) → single root cause, one fix
- **C3:** Missing `veracityStatus` (check 1.8) + 4 FACT CHECK flags (check 6.5) + untested CLI syntax (checks 6.1, 6.4) → single veracity debt requiring SME review before `veracityStatus: verified`
- **C4:** `description` overlength (check 1.11) — standalone fix
- **C5:** Two headings below threshold (check 3.1) + editorial quality (check 3.7) — same two headings: "Setting the price" and "Checking competitive AI rates"

---

## Blocking Decisions

None. FACT CHECK items require SME input but do not block the quality check.

---

## Verdict Summary

**Overall: NEEDS WORK**

**16 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1, 9.3**

Category verdicts: Cat 1 FAIL | Cat 2 PASS | Cat 3 FAIL | Cat 4 PASS | Cat 5 FAIL | Cat 6 FAIL | Cat 7 PASS | Cat 8 PASS | Cat 9 FAIL

---

## Prioritised Fix List

**F-01 — CRITICAL — Add missing frontmatter fields**
Six fields absent. Proposed values:
- Proposed: `purpose: configure` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: optimise` — confirm before applying
- Proposed: `industry: [technical, economics]` — confirm before applying
- Proposed: `niche: [protocol, infrastructure]` — confirm before applying
- Proposed: `veracityStatus: unverified` — apply immediately given 4 open FACT CHECK flags
*(Fixes: 1.1, 1.4, 1.6, 1.7, 1.9, 1.10, 1.8)*

**F-02 — HIGH — Migrate `pageType: how_to` to `pageType: instruction`**
Replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` co-fix required.
*(Fixes: 1.2, 5.7)*

**F-03 — HIGH — Shorten `description` to ≤160 chars**
Current: ~210 chars. Proposed: `Set competitive pricing for video and AI workloads on a Livepeer orchestrator, covering pricePerUnit, aiModels.json, pricePerGateway, and autoAdjustPrice.` (156 chars) — confirm before applying.
*(Fixes: 1.11)*

**F-04 — HIGH — Rename failing headings**
- "Setting the price" (17/25) → Proposed: `pricePerUnit Configuration` — confirm before applying
- "Checking competitive AI rates" (18/25) → Proposed: `AI Rate Survey` — confirm before applying
*(Fixes: 3.1, 3.7)*

**F-05 — HIGH — Add REVIEW flags to unverified numerical claims lacking them**
The following claims have no FACT CHECK flag: autoAdjustPrice overhead table (lines 90–94), pixel count formula (line 48–49), `-pixelsPerUnit` exponential notation note (line 76), USD AI Chainlink feed claim (line 221–222). Add `{/* REVIEW: [claim] — verify against [source] before publishing */}` inline at each (P19).
*(Fixes: 6.5)*

**F-06 — MEDIUM — Resolve FACT CHECK at line 52 (video price range)**
Verify current active network price range with Rick / tools.livepeer.cloud. Update or clearly label as historical context.
*(Contributes to: 6.1, 6.4)*

**F-07 — MEDIUM — Resolve FACT CHECK at line 78 (-priceFeedAddr on Arbitrum)**
Confirm whether `-priceFeedAddr` is required when using USD notation on Arbitrum mainnet.
*(Contributes to: 6.1, 6.2)*

**F-08 — MEDIUM — Resolve FACT CHECK at line 104 (autoAdjustPrice stability)**
Confirm `-autoAdjustPrice` is production-stable in current go-livepeer.
*(Contributes to: 6.1, 6.2)*

**F-09 — MEDIUM — Resolve FACT CHECK at line 173 (AI pricing wei figures)**
Confirm typical price ranges per pipeline from tools.livepeer.cloud/ai/network-capabilities. Update or retain as illustrative with explicit labelling.
*(Contributes to: 6.1, 6.4)*

**F-10 — INFO — `## Related pages` heading capitalisation**
All four pages in this group use `## Related pages` (lowercase p). The exact exempt form per P16/P53 is `Related Pages` (capital P). Either capitalise to match the approved structural element form, or confirm lowercase is intentional. Not a FAIL — `Related` is in the check 3.2 OK list.
