# Per-Page Quality Check Report
## `v2/orchestrators/resources/technical/x-contract-addresses.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (lines 2974–2981)

---

## File status note

This file is `x-` prefixed. However — unlike `x-changelog` and `x-troubleshooting` — **this file IS present in docs.json** at line 2977: `"v2/orchestrators/resources/technical/x-contract-addresses"`. It appears directly after `cli-flags` in the Technical Reference nav group. This means it is an active nav entry pointing to an empty stub. Navigation checks apply in full.

There is also a title typo: `'Livepeer Arbitrum Contract Adresses'` — "Adresses" is missing an 'd' (should be "Addresses"). Per learnings.md Batch 1 item 10, typos must be caught.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Livepeer Arbitrum Contract Adresses` | **FAIL** | Typo: "Adresses" → "Addresses". Also note: `x-` prefix in filename but title does not reflect deprecated status |
| `sidebarTitle` | Yes | `Livepeer Contract Addresses` | PASS | Reasonable sidebar label (no typo here) |
| `description` | Yes | `Description of x-contract-addresses` | **FAIL** | Placeholder — echoes filename, not subject-first, contains self-reference construction |
| `pageType` | Yes | `landing` | **FAIL** | Deprecated pageType. For a contract addresses reference: `pageType: reference` + `pageVariant: specification` — confirm before applying |
| `audience` | Yes | `developer` | BORDERLINE | Schema-valid. In Orchestrators tab — `orchestrator` may be more appropriate. BORDERLINE |
| `purpose` | Yes | `landing` | **FAIL** | Not in 15-value canonical set. For contract addresses: `purpose: reference` — confirm before applying |
| `complexity` | **No** | — | **FAIL** | Required field absent |
| `lifecycleStage` | **No** | — | **FAIL** | Required field absent |
| `keywords` | Yes | `livepeer`, `keyword` | **FAIL** | Placeholder keywords. Not searcher-intent-aligned |
| OG image block | Yes (partial) | `og:image` only | **FAIL** | Only `og:image` present; missing `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. OG image path is an SVG logo, not a social preview PNG |
| `veracityStatus` | **No** | — | **FAIL** | Required field absent |
| `industry` | **No** | — | **FAIL** | Required field absent (P41) |
| `niche` | **No** | — | **FAIL** | Required field absent (P41) |

**Additional fields present:** `status: draft`, `lastVerified: 2026-03-11`

**Required field count (from 10-field schema):** Fields present: `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `keywords`, OG (partial) = 8 of 10 present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`. Of those present: `sidebarTitle` and `audience` pass; all others fail on quality grounds.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. OG block incomplete |
| 1.2 | `pageType` uses 7-type canonical schema | **FAIL** | `landing` is deprecated. Migration: `pageType: reference` + `pageVariant: specification` (co-fix per P42) — confirm before applying |
| 1.3 | `pageVariant` valid if present | N/A (co-fix) | Co-fix dependency with 1.2 (P42) |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | `landing` not in the 15-value set. Proposed: `purpose: reference` — confirm before applying |
| 1.5 | `audience` uses 7-token set | BORDERLINE | `developer` is canonical. In Orchestrators tab `orchestrator` may be correct. Editorial question, not schema fail |
| 1.6 | `complexity` canonical value | **FAIL** | Field absent. Proposed: `complexity: beginner` — confirm before applying |
| 1.7 | `lifecycleStage` canonical value | **FAIL** | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | **FAIL** | `veracityStatus` absent. `status: draft` is canonical. Fix: add `veracityStatus: unverified` |
| 1.9 | `industry` valid if present | **FAIL** | Field absent (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` valid if present | **FAIL** | Field absent (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | **FAIL** | `Description of x-contract-addresses` — placeholder, self-referential, echoes filename |
| 1.12 | OG image block complete | **FAIL** | Only `og:image` present; missing 4 fields. SVG used instead of PNG for OG — OG images should be PNG for social preview compatibility |
| 1.13 | `keywords` quality | **FAIL** | `livepeer`, `keyword` — placeholders. Contract addresses page should have: `livepeer contract addresses`, `arbitrum one livepeer`, `LPT bonding manager address`, `livepeer protocol contracts` — confirm before applying |

**Category 1 verdict: FAIL**
Confirmed fail checks: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

---

## Category 2 — VOICE & COPY

Body is empty (no prose content). Description is placeholder.

### Banned Construction Scan

Targets: (1) description field, (2) H2/H3 headings, (3) body prose

| Target | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| Description | `Description of x-contract-addresses` | `This page [verb]` equivalent | FAIL 2.4 | Yes |
| Title | `Livepeer Arbitrum Contract Adresses` | Typo only | Not a construction | No |
| Body | (empty) | — | — | — |

Em-dash scan (P74):
- Description: no em-dashes
- Headings: none (no H2/H3)
- Body: empty

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | N/A | No prose content |
| 2.2 | Zero banned words | N/A | No prose content |
| 2.3 | Zero banned phrases | N/A | No prose content |
| 2.4 | Zero banned constructions | **FAIL** | Description: `Description of x-contract-addresses` is a self-referential placeholder — `This page [verb]` equivalent |
| 2.5 | Opening order correct | N/A | No opening |
| 2.6 | Paragraph discipline | N/A | No prose |
| 2.7 | Audience register correct | N/A | No content |
| 2.8 | Per-audience prohibited phrases absent | N/A | No content |
| 2.9 | No passive value statements | N/A | No content |
| 2.10 | No hedging openers | N/A | No content |
| 2.11 | Terminology locked and consistent | N/A | No content |

**Category 2 verdict: FAIL**
Confirmed fail checks: 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table

No H2 or H3 headings present.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | N/A | No headings |
| 3.2 | No banned/weak heading terms | N/A | No headings |
| 3.3 | No literal contrast labels | N/A | No headings |
| 3.4 | Domain-anchor rule | N/A | No headings |
| 3.5 | Heading names concept | N/A | No headings |
| 3.6 | Title well-formed | **FAIL** | `Livepeer Arbitrum Contract Adresses` — typo ("Adresses"). Also the `x-` file prefix suggests it may be archived but the title does not signal deprecated status |
| 3.7 | Expert editorial choice | PASS | Ignoring typo: `Livepeer Arbitrum Contract Addresses` is an acceptable reference page title |

**Category 3 verdict: FAIL**
Confirmed fail checks: 3.6

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one job | **FAIL** | Empty page — cannot validate purpose |
| 4.2 | Purpose statement test | **FAIL** | Cannot complete the purpose sentence for empty content |
| 4.3 | PREV/NEXT adjacency | **FAIL** | In docs.json: PREV = `cli-flags` (active, content-bearing), NEXT = `gpu-support` (a different resource). cli-flags leads to this blank stub. A reader arriving from cli-flags hits an empty page |
| 4.4 | No dead ends | **FAIL** | Page is itself a dead end — empty body, no links, no next step |
| 4.5 | Prerequisites stated or linked | N/A | Empty page |
| 4.6 | Out-of-scope clear | N/A | Empty page |
| 4.7 | Information type per section | N/A | Empty page |
| 4.8 | No content duplication | N/A | Empty page |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links | N/A | Tab-level check; empty page |

**Category 4 verdict: FAIL**
Confirmed fail checks: 4.1, 4.2, 4.3, 4.4

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | **FAIL** | `pageType: landing` is deprecated; no correct template |
| 5.2 | Required sections present | **FAIL** | For a contract addresses reference (`reference` + `specification`): structured address table required. Body is empty |
| 5.3 | Only approved components used | N/A | No components |
| 5.4 | Avoided components absent | PASS | No TODO/TBD in body |
| 5.5 | Information type → component mapping | N/A | No content |
| 5.6 | MDX renders clean | NOT-TESTED | No content to render |
| 5.7 | No old-schema frontmatter | **FAIL** | `pageType: landing` and `purpose: landing` are deprecated schema values |
| 5.8 | CSS custom properties only | N/A | No CSS |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | N/A | No imports |

**Category 5 verdict: FAIL**
Confirmed fail checks: 5.1, 5.2, 5.7

---

## Category 6 — VERACITY

No content to verify. However, this page's intended content (contract addresses) is HIGH-staleness — contract addresses can change with protocol upgrades (per P77 and task brief note).

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | All factual claims categorised | N/A | No content |
| 6.2 | High-staleness claims sourced | **FAIL** | When this page is built, contract addresses are HIGH-staleness claims (P77). Must be sourced to Arbiscan or the official Livepeer protocol repository. Flagging now to ensure build process includes sources |
| 6.3 | Protocol-state figures have staleness tier | INFO | Contract addresses: LOW staleness tier per P77 (rarely changes) — despite being HIGH-importance for users |
| 6.4 | External links have retrieval dates | N/A | No content |
| 6.5 | Unresolved claims use `{/* REVIEW: */}` | N/A | No content |
| 6.6 | No fabricated spec details | N/A | No content |
| 6.7 | Version-sensitive content flagged | N/A | No content |
| 6.8 | Numbers and thresholds verified | N/A | No content |
| 6.9 | No open-ended research tasks | N/A | No content |

**Category 6 verdict: INFO** (pre-emptive note for when page is built)

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page in docs.json | PASS | docs.json line 2977: `v2/orchestrators/resources/technical/x-contract-addresses` |
| 7.2 | Page slug matches file name | PASS | `x-contract-addresses.mdx` → `x-contract-addresses` |
| 7.3 | Page in correct section | PASS | Technical Reference group is appropriate for contract addresses |
| 7.4 | Page title matches sidebarTitle intent | **FAIL** | Title has typo (`Adresses`). sidebarTitle (`Livepeer Contract Addresses`) does not match title (`Livepeer Arbitrum Contract Adresses`). Inconsistency |
| 7.5 | Page reachable from section entry | PASS | Listed in Technical Reference nav group |
| 7.6 | No duplicate slug | PASS | Only one entry in docs.json |
| 7.7 | File in correct lane | **FAIL** | `x-` prefix signals deprecated/archived, but file IS in docs.json nav. The `x-` convention should not be used for active nav entries. Either remove the `x-` prefix (if activating) or remove from nav (if archiving) |
| 7.8 | Naming convention | **FAIL** | `x-` prefix is incorrect for an active nav entry (see 7.7). Filename convention conflict |
| 7.9 | Section sequence logical | BORDERLINE | `cli-flags` (active content) → `x-contract-addresses` (empty stub) → `gpu-support`. An active content page followed by an empty stub is not a logical sequence |

**Category 7 verdict: FAIL**
Confirmed fail checks: 7.4, 7.7, 7.8
Borderline: 7.9

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | N/A | No links |
| 8.2 | All external links resolve | N/A | No links |
| 8.3 | No broken anchor links | N/A | No anchors |
| 8.4 | Images load | **FAIL** | OG image path `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` — SVG file, not a social preview PNG. Check 1.12 also flagged |
| 8.5 | Code blocks have language identifiers | N/A | No code blocks |
| 8.6 | No orphaned imports | PASS | No imports |

**Category 8 verdict: FAIL**
Confirmed fail checks: 8.4

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | `veracityStatus` reflects actual review state | **FAIL** | Absent. Empty page, draft status |
| 9.2 | All `{/* REVIEW: */}` flags have owners | N/A | No REVIEW flags |
| 9.3 | No TODO/TBD in decision-critical positions | PASS | No TODO blocks in body |
| 9.4 | Page matches tab IA | **FAIL** | File is `x-` prefixed (deprecated convention) but is in active nav. IA placement is incoherent |
| 9.5 | Blocking decisions escalated | NOT-TESTED | See BD-1 |
| 9.6 | Session log updated | N/A | Session level |

**Category 9 verdict: FAIL**
Confirmed fail checks: 9.1, 9.4

---

## Cross-Category Connections

- **C1: Empty stub in active nav** — checks 4.1, 4.2, 4.3, 4.4, 7.7, 7.8, 9.4 all trace to the same root: a blank page with a deprecated-convention filename is registered in active navigation. This creates the dead-end found in the cli-flags check (cli-flags F-12). Both pages share this root cause.

- **C2: Deprecated pageType + purpose** — checks 1.2, 1.4, 5.1, 5.7 are one root-cause fix.

- **C3: Title typo and title/sidebarTitle mismatch** — checks 3.6, 7.4 are one root-cause fix.

- **C4: SVG OG image** — checks 1.12, 8.4 are one root-cause fix.

---

## Blocking Decisions

**BD-1: Activate or archive**
- Option A: Activate — rename file (remove `x-` prefix), migrate taxonomy, write contract addresses content with sourced addresses, keep in docs.json
- Option B: Archive — remove from docs.json nav; leave file with `x-` prefix as archived stub
- Downstream dependency: All check failures conditional on this decision. Also resolves cli-flags check F-12 (dead NEXT adjacency).

---

## Verdict Summary

**Overall: REWRITE REQUIRED** (if activating); if archiving, remove from docs.json nav.

Confirmed fail count: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 (11) + 2.4 (1) + 3.6 (1) + 4.1, 4.2, 4.3, 4.4 (4) + 5.1, 5.2, 5.7 (3) + 7.4, 7.7, 7.8 (3) + 8.4 (1) + 9.1, 9.4 (2) = **26 confirmed fail checks**

**Confirmed fail checks (26):** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.6, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.7, 7.4, 7.7, 7.8, 8.4, 9.1, 9.4
**NOT-TESTED checks:** 5.6, 9.5
**BORDERLINE checks:** 1.5, 7.9

---

## Prioritised Fix List

All fixes conditional on BD-1. If BD-1 = Option B (archive), only F-01 applies.

| ID | Severity | Check(s) | Fix |
|---|---|---|---|
| F-01 | CRITICAL | 7.7, 7.8, 9.4, 4.3, 4.4 | Resolve BD-1: either (A) rename file, build content, keep in nav, or (B) remove from docs.json nav |
| F-02 | CRITICAL | 4.1, 4.2 | Write page content — contract addresses for Livepeer on Arbitrum One. Minimum: table of contract names, addresses, Arbiscan links |
| F-03 | HIGH | 3.6, 7.4 | Fix title typo: `Adresses` → `Addresses`. Align title and sidebarTitle |
| F-04 | HIGH | 1.2, 1.3, 5.7 | Migrate `pageType: landing` → `pageType: reference` + `pageVariant: specification` (co-fix P42) — confirm before applying |
| F-05 | HIGH | 1.4 | Change `purpose: landing` → `purpose: reference` — confirm before applying |
| F-06 | HIGH | 1.11, 2.4 | Replace description with subject-first description. Proposed structure: `Contract addresses for the Livepeer protocol on Arbitrum One, including BondingManager, LivepeerToken, and Minter.` — confirm before applying |
| F-07 | HIGH | 1.12, 8.4 | Complete OG block: add `og:image:alt`, `og:image:type: image/png`, `og:image:width: 1200`, `og:image:height: 630`. Change OG image from SVG logo to PNG social preview |
| F-08 | HIGH | 1.9 | Add `industry: [technical, livepeer]` — confirm before applying |
| F-09 | HIGH | 1.10 | Add `niche: [protocol, infrastructure]` — confirm before applying |
| F-10 | HIGH | 9.1, 1.8 | Add `veracityStatus: unverified` to frontmatter |
| F-11 | MEDIUM | 1.6 | Add `complexity: beginner` — confirm before applying |
| F-12 | MEDIUM | 1.7 | Add `lifecycleStage: operate` — confirm before applying |
| F-13 | MEDIUM | 1.13 | Replace placeholder keywords with: `livepeer contract addresses`, `arbitrum one livepeer`, `BondingManager address`, `livepeer protocol contracts` — confirm before applying |
| F-14 | MEDIUM | 6.2 | When building page content: source all contract addresses to Arbiscan or official Livepeer GitHub. Use `{/* REVIEW: [address] — verify against [source] before publishing */}` for each address entry |
