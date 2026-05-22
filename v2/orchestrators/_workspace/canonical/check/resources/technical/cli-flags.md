# Per-Page Quality Check Report
## `v2/orchestrators/resources/technical/cli-flags.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (lines 2974–2981)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `CLI Flags Reference` | PASS | Schema-valid |
| `sidebarTitle` | Yes | `CLI Flags` | PASS | Schema-valid |
| `description` | Yes | `CLI flags and gRPC field mapping for go-livepeer orchestrators.` | PASS | Subject-first, 60 chars, UK English, no self-reference |
| `pageType` | Yes | `reference` | PASS | Canonical 7-type value |
| `audience` | Yes | `orchestrator` | PASS | Canonical 7-token value |
| `purpose` | Yes | `reference` | PASS | Canonical 15-value |
| `complexity` | **No** | — | **FAIL** | Required field absent |
| `lifecycleStage` | **No** | — | **FAIL** | Required field absent |
| `keywords` | Yes | `livepeer`, `orchestrators`, `references`, `cli flags`, `flags`, `reference`, `straight`, `chatgpt` | **FAIL** | Contains non-intent terms: `straight`, `chatgpt` are not searcher-intent-aligned; `livepeer` and `reference` are too generic (check 1.13) |
| OG image block | Yes (partial) | `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` | PASS | All 5 OG fields present |
| `veracityStatus` | **No** | — | **FAIL** | Required field absent |
| `industry` | **No** | — | **FAIL** | Required field absent (P41) |
| `niche` | **No** | — | **FAIL** | Required field absent (P41) |

**Additional fields present:** `lastVerified: 2026-03-17`, `status: review`
**Note on `status: review`:** Not a canonical value. Valid values are `current` and `draft`. Flag under check 1.8.

**Required field count:** 7/10 (missing: `complexity`, `lifecycleStage`, `veracityStatus`)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | No `pageVariant` set; no deprecated pageType to migrate from |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is canonical |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` canonical value | **FAIL** | Field absent. Proposed: `complexity: advanced` — confirm before applying |
| 1.7 | `lifecycleStage` canonical value | **FAIL** | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | **FAIL** | `veracityStatus` absent; `status: review` is non-canonical (valid: `current`, `draft`). Fix: add `veracityStatus: unverified`, change `status: review` to `status: draft` |
| 1.9 | `industry` valid if present | **FAIL** | Field absent (P41 — required). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` valid if present | **FAIL** | Field absent (P41 — required). Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | `CLI flags and gRPC field mapping for go-livepeer orchestrators.` Subject-first, 60 chars, no self-reference, UK English |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` quality | **FAIL** | `straight` and `chatgpt` are noise terms, not searcher-intent terms. `livepeer` and `reference` are too generic. Strong candidates: `go-livepeer cli flags`, `gRPC orchestrator interface`, `livepeer orchestrator configuration flags` |

**Category 1 verdict: FAIL**
Confirmed fail checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)

Scanning description field, heading text, body prose:
- `pricePerUnit`, `pixelsPerUnit`, `capabilities_prices` — technical identifiers, not prose; exempt
- No US spelling patterns detected: no -ize/-or/-er endings in prose

Check 2.1: PASS

### Banned words scan (check 2.2)

Candidates scanned: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`

Line 202: "Key point: **not everything configurable is gRPC**" — none of the banned words present here.

No instances found.

Check 2.2: PASS

### Banned phrases scan (check 2.3)

Scanning for: "This section covers", "This page covers/explains/walks you through", "Understanding X is essential", "It is important to note", "As mentioned above", "and so on"/"etc.", "rather than", "what it takes", "it should be noted", "not just X", "can generate"/"may produce", "The reason is straightforward", "among other factors", "low but not zero", "once X is stable", "depends on various"

No banned phrases found in prose.

Check 2.3: PASS

### Banned Construction Scan

Targets: (1) description field, (2) H2/H3 headings, (3) body prose

| Line | Sentence/Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| description | `CLI flags and gRPC field mapping for go-livepeer orchestrators.` | No pattern | Clean | No |
| H2: line 55 | `Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` | No banned construction | Clean | No |
| H2: line 157 | `CLI flags ↔ proto field mapping` | No banned construction | Clean | No |
| H2: line 206 | `Capability matrix: Transcoding vs AI jobs` | `X vs Y` heading — check 3.3 issue, not a banned construction | Clean for 2.4 | No |
| Line 202 | `Key point: **not everything configurable is gRPC**` | `not [X]` as primary statement | FAIL | Yes |
| Line 202 | `some is **purely on-chain economics**` | No banned construction | Clean | No |

Em-dash scan (P74 — three targets):
- Description field: no em-dashes
- H2/H3 headings: no em-dashes
- Body prose: no em-dashes found

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings in prose |
| 2.2 | Zero banned words | PASS | None found (see scan above) |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | **FAIL** | Line 202: `not everything configurable is gRPC` — `not [X]` as primary statement. Fix: state positive: `gRPC covers service routing, pricing, and capabilities. On-chain parameters (blockRewardCut, feeShare) are set separately.` |
| 2.5 | Opening order correct | N/A | Page opens with a blockquote warning, then an OpenAPI spec code block. No narrative opening to score |
| 2.6 | Paragraph discipline | PASS | Content is primarily tables and code; limited prose is direct |
| 2.7 | Audience register correct | PASS | Technical operator level; appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | N/A | Reference page — no value claims |
| 2.10 | No hedging openers | PASS | No hedging opener |
| 2.11 | Terminology locked and consistent | BORDERLINE | Page uses `gRPC` as a primary term throughout — consistent. `broadcaster` not present. However, the page contains a large active TODO block (lines 25–46) with open instructions — this is not resolved terminology |

**Category 2 verdict: FAIL**
Confirmed fail checks: 2.4
Borderline: 2.11

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---|---|---|---|---|---|---|---|
| `Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` | 3 | 3 | 4 | 2 | 2 | 14/25 | FAIL. Imprecise: "Mintlify-compatible" describes the format container, not the content. "reference-only, derived from gRPC" is parenthetical noise. Name the actual schema content |
| `CLI flags ↔ proto field mapping` | 5 | 4 | 5 | 4 | 4 | 22/25 | PASS. Technical and precise |
| `Capability matrix: Transcoding vs AI jobs` | 4 | 4 | 4 | 4 | 4 | 20/25 | PASS. Borderline on check 3.3 (vs label) — but names the governing concept |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | **FAIL** | `Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` scores 14/25 |
| 3.2 | No banned/weak standalone heading terms | PASS | No Basics, Notes, How It Works, See Also, Conclusion, What's Next present |
| 3.3 | No literal contrast labels | BORDERLINE | `Transcoding vs AI jobs` uses `vs` label. The full heading `Capability matrix: Transcoding vs AI jobs` names the concept (`Capability matrix`). Borderline — the `vs` subclause could be renamed without losing precision |
| 3.4 | Domain-anchor rule applied | PASS | All headings are interpretable in isolation |
| 3.5 | Heading names concept, not examples | PASS | Headings name structural concepts |
| 3.6 | Title well-formed | PASS | `CLI Flags Reference` — 3 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | BORDERLINE | `Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` does not read as an editorial heading; it reads like a file-format label. Would benefit from rename |

**Category 3 verdict: FAIL**
Confirmed fail checks: 3.1
Borderline: 3.3, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Reference page for CLI flags and gRPC field mapping; single purpose |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator look up CLI flag → proto field mappings and capability matrix" — passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | **FAIL** | docs.json (line 2976): `cli-flags` is PREV to `x-contract-addresses`. `x-contract-addresses` has `pageType: landing` (deprecated) and empty body — it is a dead stub. Navigation from cli-flags leads to a broken page |
| 4.4 | No dead ends | **FAIL** | Next page in nav sequence (`x-contract-addresses`) is a blank stub — reader arriving from cli-flags hits a dead end |
| 4.5 | Prerequisites stated or linked | N/A | Reference page; no prerequisites needed |
| 4.6 | Out-of-scope clear | PASS | Blockquote warning at line 57 explicitly states: "Documentation reference only. Not a supported public API." |
| 4.7 | Information type per section correct | PASS | Reference page: tables and specification format are correct for `purpose: reference` |
| 4.8 | No content duplication from adjacent sections | NOT-TESTED | Would require reading all adjacent pages |
| 4.9 | Section orientation page present | NOT-TESTED | Not applicable at per-page level — section-level check |
| 4.10 | Cross-tab links at journey intersections | NOT-TESTED | Tab-level check |

**Category 4 verdict: FAIL**
Confirmed fail checks: 4.3, 4.4
NOT-TESTED: 4.8, 4.9, 4.10

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `reference` pageType — tables and structured lookup format present |
| 5.2 | Required sections present | PASS | Reference content (flag tables, schema tables) present |
| 5.3 | Only approved components used | NOT-TESTED | `StyledTable`, `TableRow`, `TableCell` — component approval file not read. Cannot confirm PASS without `component-layout-decisions.mdx`. `CustomDivider` similarly NOT-TESTED |
| 5.4 | Avoided components absent | **FAIL** | Active `TODO` block (lines 25–46) present in shipped content — `TODO/TBD placeholders` are on the avoid list for `reference` pageType |
| 5.5 | Information type → component mapping correct | PASS | Reference → table mapping is correct per checks.mdx matrix |
| 5.6 | MDX renders clean | NOT-TESTED | Render not executed; no obvious JSX errors visible |
| 5.7 | No old-schema frontmatter | PASS | `pageType: reference`, `purpose: reference` are canonical. `status: review` is non-canonical but not old-schema taxonomy |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS detected |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports from semantic paths: `Tables.jsx`, `Divider.jsx` |

**Category 5 verdict: FAIL**
Confirmed fail checks: 5.4
NOT-TESTED: 5.3, 5.6

---

## Category 6 — VERACITY

Veracity claims inventory:
- Line 57–60: Warning block claims: (1) "Generated from `go-livepeer` gRPC messages." (2) "Not a supported public API." (3) "Fields may change with protocol upgrades."
- Lines 62–153: OpenAPI spec — schema field names and types
- Lines 157–200: CLI flag ↔ proto field mapping table (field names, descriptions)
- Lines 206–259: Capability matrix (transcoding vs AI jobs — feature availability)
- Line 183: `-blockRewardCut: Not part of gRPC`
- Line 185: `-feeShare: Delegator economics`

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | All factual claims categorised | PASS | Protocol spec claims categorised (see inventory above) |
| 6.2 | High-staleness claims sourced | **FAIL** | Schema field names and flag mappings are MEDIUM-staleness (change with go-livepeer releases). No source link to go-livepeer source. `lastVerified: 2026-03-17` provides a date but no source |
| 6.3 | Protocol-state figures have staleness tier | NOT-TESTED | Page does not contain percentages or gas costs. Schema definitions are MEDIUM-staleness |
| 6.4 | External links have retrieval dates | N/A | No external links |
| 6.5 | All unresolved claims use `{/* REVIEW: [claim] — [source] */}` | **FAIL** | `TODO` block (lines 25–46) is present. Contains open instructions but no `{/* REVIEW: */}` formatted claims. The TODO block itself constitutes unresolved content (P61) |
| 6.6 | No fabricated spec details | NOT-TESTED | gRPC schema content matches general protocol patterns but cannot be verified without reading go-livepeer source |
| 6.7 | Version-sensitive content flagged | **FAIL** | OpenAPI spec is labelled `version: v0-derived` — version-sensitive but no specific go-livepeer release version referenced |
| 6.8 | Numbers and thresholds verified | N/A | No numerical thresholds in this page |
| 6.9 | No open-ended research tasks | **FAIL** | Lines 25–46: TODO block contains open research/validation instructions with no named owner, no source, no `{/* REVIEW: */}` format. Per P70: `TODO` without named source = check 6.9 FAIL |

**Category 6 verdict: FAIL**
Confirmed fail checks: 6.2, 6.5, 6.7, 6.9
NOT-TESTED: 6.3, 6.6

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page in docs.json | PASS | docs.json line 2976: `v2/orchestrators/resources/technical/cli-flags` |
| 7.2 | Page slug matches file name | PASS | `cli-flags.mdx` → `cli-flags` in docs.json |
| 7.3 | Page in correct section | PASS | `Resources > Technical Reference` — correct for a reference page |
| 7.4 | Page title matches sidebarTitle intent | PASS | `CLI Flags Reference` / `CLI Flags` — consistent |
| 7.5 | Page is reachable from section entry | PASS | Within `Technical Reference` subgroup in nav |
| 7.6 | No duplicate slug in docs.json | PASS | Only one entry for this slug |
| 7.7 | File in correct lane | PASS | Not `x-` prefixed; active page in nav |
| 7.8 | Naming convention | PASS | Lowercase, hyphenated, descriptive |
| 7.9 | Section sequence logical | BORDERLINE | `cli-flags` (active) → `x-contract-addresses` (blank stub, `x-` prefixed but in nav). Sequence has an active page followed immediately by a stub |

**Category 7 verdict: PASS** (borderline on 7.9)
Borderline: 7.9

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | N/A | No internal links in page body |
| 8.2 | All external links resolve | N/A | No external links |
| 8.3 | No broken anchor links | N/A | No anchor links |
| 8.4 | Images load correctly | PASS | OG image path `en/orchestrators.png` — standard path |
| 8.5 | Code blocks have language identifiers | PASS | Line 61: `` ```yaml icon="terminal" `` — identified |
| 8.6 | No orphaned imports | **FAIL** | Line 52–53: imports `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`. All are used in the page. PASS. Wait — re-checking: `CustomDivider` is used at line 155 and 204. `StyledTable`, `TableRow`, `TableCell` are used in all three tables. No orphaned imports. **Correction: PASS** |

**Category 8 verdict: PASS**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | `veracityStatus` reflects actual review state | **FAIL** | `veracityStatus` absent. Content contains unresolved TODO (lines 25–46). Cannot be `verified` |
| 9.2 | All `{/* REVIEW: */}` flags have owners | N/A | No `{/* REVIEW: */}` formatted flags present |
| 9.3 | No `TODO` or `TBD` in decision-critical positions | **FAIL** | Lines 25–46: large active TODO block in frontmatter/page body covering terminology validation, style verification, and rendering checks. This is decision-critical content |
| 9.4 | Page matches its tab's IA | PASS | `Resources > Technical Reference` is an appropriate slot for a CLI flags reference page |
| 9.5 | All blocking decisions escalated | NOT-TESTED | No blocking decisions identified beyond flagged issues |
| 9.6 | Session log updated | N/A | Handled at session level |

**Category 9 verdict: FAIL**
Confirmed fail checks: 9.1, 9.3

---

## Cross-Category Connections

- **C1: Missing veracityStatus + active TODO block + status:review** — checks 1.1, 1.8, 6.5, 6.9, 9.1, 9.3 are all symptoms of the same root cause: page was staged for review but the review was never completed. Root fix: resolve TODO, complete veracity, set `status: draft` and `veracityStatus: unverified`.

- **C2: Dead next-page (x-contract-addresses)** — checks 4.3 and 4.4 share the same root cause: `x-contract-addresses` is an empty stub in the nav sequence. The cli-flags page cannot have a clean NEXT adjacency until x-contract-addresses is either completed or removed from the nav.

- **C3: Heading failure (3.1) and first heading's purpose** — the `Mintlify-compatible OpenAPI` heading is weak because the section's actual content is an illustrative gRPC schema representation, not a deployable OpenAPI spec. The heading name reflects the format rather than the content concept.

---

## Blocking Decisions

**BD-1: x-contract-addresses in nav**
- Option A: Complete `x-contract-addresses.mdx` as a live contract addresses reference and keep it as NEXT after cli-flags
- Option B: Remove `x-contract-addresses` from docs.json nav until completed; cli-flags becomes the terminal page in the Technical Reference subgroup
- Downstream dependency: checks 4.3, 4.4 cannot pass until resolved

---

## Verdict Summary

**Overall: NEEDS WORK**
**Confirmed fail checks (12):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.4, 3.1, 4.3, 4.4, 5.4, 6.2, 6.5, 6.7, 6.9, 9.1, 9.3

Wait — counting confirmed: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13 (7) + 2.4 (1) + 3.1 (1) + 4.3, 4.4 (2) + 5.4 (1) + 6.2, 6.5, 6.7, 6.9 (4) + 9.1, 9.3 (2) = **18 confirmed fail checks**

**Confirmed fail checks (18):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.4, 3.1, 4.3, 4.4, 5.4, 6.2, 6.5, 6.7, 6.9, 9.1, 9.3
**NOT-TESTED checks:** 4.8, 4.9, 4.10, 5.3, 5.6, 6.3, 6.6, 9.5
**BORDERLINE checks:** 2.11, 3.3, 3.7, 7.9

---

## Prioritised Fix List

| ID | Severity | Check(s) | Fix |
|---|---|---|---|
| F-01 | HIGH | 1.1, 9.3 | Remove TODO block (lines 25–46) from the page. It must not ship in a published page. |
| F-02 | HIGH | 1.8, 9.1 | Add `veracityStatus: unverified` to frontmatter. Change `status: review` to `status: draft`. |
| F-03 | HIGH | 1.9 | Add `industry: [technical, livepeer]` to frontmatter — confirm before applying. |
| F-04 | HIGH | 1.10 | Add `niche: [infrastructure, protocol]` to frontmatter — confirm before applying. |
| F-05 | MEDIUM | 1.6 | Add `complexity: advanced` to frontmatter — confirm before applying. |
| F-06 | MEDIUM | 1.7 | Add `lifecycleStage: operate` to frontmatter — confirm before applying. |
| F-07 | MEDIUM | 1.13 | Replace keywords with: `go-livepeer cli flags`, `gRPC orchestrator interface`, `livepeer orchestrator configuration flags`, `pricePerUnit pixelsPerUnit`, `blockRewardCut feeShare`. Remove `straight`, `chatgpt`, `livepeer` (generic), `reference` (generic). — confirm before applying. |
| F-08 | MEDIUM | 2.4, 6.5, 6.9 | Line 202: Replace `Key point: **not everything configurable is gRPC** - some is **purely on-chain economics**.` with: `gRPC covers service routing, pricing, and capabilities. On-chain parameters (blockRewardCut, feeShare) are set independently.` |
| F-09 | MEDIUM | 3.1 | Rename heading `Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` to `gRPC Interface Schema` or `Orchestrator gRPC Schema` — confirm before applying. |
| F-10 | MEDIUM | 6.2 | Add source link to go-livepeer source for the flag-to-proto mapping table. Proposed: `{/* REVIEW: CLI flag mappings — verify against go-livepeer source at cmd/livepeer/main.go before marking verified */}` |
| F-11 | MEDIUM | 6.7 | Add specific go-livepeer version reference to the OpenAPI spec block comment or a Note. Proposed: `{/* REVIEW: Specify go-livepeer release version this schema was derived from — confirm before applying */}` |
| F-12 | INFO | 4.3, 4.4 | Raise BD-1 (see Blocking Decisions). cli-flags next page in docs.json is blank stub `x-contract-addresses`. |
