# Section Summary — `resources/technical`

**Generated:** 2026-03-24
**Summary agent:** Claude Code (summary index agent)
**Learnings applied:** P1–P105
**Pages covered:** 5
**Source files:** 5 check reports + 5 critical reviews (10 total)
**Navigation sequence (docs.json):** `cli-flags` (line 2976) → `x-contract-addresses` (line 2977) → [end of Technical Reference group]. `x-changelog`, `x-support-status`, `x-troubleshooting` are not in docs.json nav.

---

## 1. Overview Table

| Page | Corrected Fail Count | Critical Review Rating | Stub/Active | Primary Issues |
|---|---|---|---|---|
| `cli-flags.mdx` | 16 | MOSTLY RELIABLE | Active | TODO block, missing fields, dead NEXT adjacency, 6.x veracity gaps |
| `x-changelog.mdx` | 21 | NEEDS CORRECTION | Orphan stub | Fully scaffolded placeholder — every field fails; OG block was misread by check agent (all 5 fields actually present) |
| `x-contract-addresses.mdx` | 26 | MOSTLY RELIABLE | CRITICAL: x-prefixed stub in active nav | Empty stub in active docs.json nav — dead end for readers; deprecated `pageType: landing`; SVG OG image |
| `x-support-status.mdx` | 17 | RELIABLE | Orphan stub | Has partial content; `purpose: operations` invalid; scaffolding-language headings and opener; UK English violation |
| `x-troubleshooting.mdx` | 20 | MOSTLY RELIABLE | Orphan stub | Fully empty body; `purpose: landing` invalid; SVG OG image; potential overlap with existing active troubleshooting guide |

**Section verdict:** One active page with substantive issues (cli-flags). One critical structural defect: `x-contract-addresses` is an empty stub registered in active navigation, creating a dead end immediately after the section's only active content page. Three orphan stubs (x-changelog, x-support-status, x-troubleshooting) are not in nav and require activate-or-archive decisions before any remediation work is meaningful.

---

## 2. Shared Root Causes

**RC-1: Missing required frontmatter fields across all 5 pages**
All five pages are missing `complexity`, `lifecycleStage`, and `veracityStatus`. Four pages are additionally missing `industry` and `niche` (P41 — confirmed required). Only `cli-flags` and `x-support-status` have partial taxonomy present. This is a template-level authoring gap (P99): every page in this section was scaffolded without required fields. A single frontmatter template update prevents recurrence.

**RC-2: `pageType: landing` (deprecated) on 3 of 5 pages**
`x-changelog`, `x-contract-addresses`, and `x-troubleshooting` all carry `pageType: landing`. This is a deprecated 12-type value with defined migration paths. On all three pages, the correct migration differs (`reference` + `changelog`; `reference` + `specification`; `instruction` + `troubleshooting`). The `purpose: landing` co-occurrence on x-contract-addresses and x-troubleshooting adds a second failure per page — `landing` is not valid as a purpose value in any schema version (check 1.4 only, not check 5.7 per P105).

**RC-3: SVG OG image on 2 of 5 pages**
`x-contract-addresses` and `x-troubleshooting` both use `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` as their OG image. Social preview images require PNG format. Both were scaffolded from the same template using the SVG logo as default. One template fix resolves both. Cross-reference noted in x-troubleshooting check 8.4 but not as a joint-fix action per P88.

**RC-4: Placeholder description strings across 4 of 5 pages**
`x-changelog` (`Describe x-changelog`), `x-contract-addresses` (`Description of x-contract-addresses`), `x-support-status` (opens with `Planned status page clarifying...` — process commentary, not subject-first), and `x-troubleshooting` (`Description of troubleshooting`) all fail check 1.11 and check 2.4 (self-referential or banned construction). `cli-flags` passes.

**RC-5: Check 6.3 systematic misidentification across 3 of 5 pages**
`cli-flags`, `x-contract-addresses`, and `x-troubleshooting` check reports evaluated check 6.3 against protocol-state figures or P77 staleness tiers rather than the actual check definition (deprecated API/CLI/SDK usage). This is the pattern that generated P103. For `cli-flags`, check 6.3 should have been evaluated against go-livepeer CLI flag deprecation status — it was marked NOT-TESTED on the incorrect grounds of "no percentages or gas costs." Per P103: check 6.3 applies to CLI flags pages; the NOT-TESTED result must be reassessed.

**RC-6: P84 non-issue correctly handled on 3 of 5 pages**
`x-support-status` and `x-troubleshooting` carry `status: draft` — P39/P84 atomic fix does not apply. Both check reports correctly identify this distinction. `cli-flags` carries `status: review` (non-canonical) and requires the atomic P84/P39 fix (change to `status: draft` AND add `veracityStatus: unverified`). Correctly identified in cli-flags check F-02.

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|---|---|---|---|
| BD-SEC-01 | **CRITICAL: Remove `x-contract-addresses` from docs.json nav OR activate it.** Option A: rename file (remove `x-` prefix), write contract addresses content, keep in nav. Option B: remove from docs.json nav — resolves dead-end adjacency for cli-flags immediately. | `x-contract-addresses.mdx`, `cli-flags.mdx` | cli-flags checks 4.3 and 4.4 cannot pass until resolved. All x-contract-addresses content work is gated on this decision. |
| BD-SEC-02 | **Activate or confirm permanently archived: `x-changelog`.** Option A: build changelog page (migrate taxonomy, write content, add to docs.json). Option B: confirm permanently archived — no further action. | `x-changelog.mdx` | All 21 FAIL checks are conditional on this decision. If Option B, no remediation needed. |
| BD-SEC-03 | **Activate or confirm permanently archived: `x-support-status`.** Option A: build status reference page (fix taxonomy, write content, decide nav placement, add to docs.json). Option B: confirm permanently archived. | `x-support-status.mdx` | All content-check FAILs conditional. Frontmatter field fixes (F-02 through F-12) can proceed independently of nav placement. |
| BD-SEC-04 | **Activate or confirm permanently archived: `x-troubleshooting`.** If activating: check content overlap with existing active page `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx` (P95 — overlap requires merge/deprecate/distinguish decision before both pages can be active). Option A: activate with IA placement decision (BD-SEC-05). Option B: confirm permanently archived. | `x-troubleshooting.mdx` | All content-check FAILs conditional. Content overlap must be resolved before activation. |
| BD-SEC-05 | **IA placement for `x-troubleshooting` if activated.** Option A: retain in Technical Reference subgroup under Resources. Option B: move to a dedicated section in Guides (more appropriate for `instruction` + `troubleshooting` pageType content). | `x-troubleshooting.mdx` | `lifecycleStage` value and docs.json nav entry depend on this decision. Gated on BD-SEC-04. |
| BD-SEC-06 | **Resolve cli-flags TODO block (lines 25–46).** The TODO block contains open instructions with no named owner, no source, no `{/* REVIEW: */}` format. Option A: execute the TODO instructions and remove the block. Option B: convert open items to `{/* REVIEW: [claim] — [source] */}` format and mark `veracityStatus: unverified`. | `cli-flags.mdx` | cli-flags checks 6.5 and 6.9 cannot pass until resolved. Blocks `veracityStatus: verified`. |

---

## 4. Prioritised Recommendations

### CRITICAL

**C-01 — Remove or activate `x-contract-addresses` in docs.json nav** (BD-SEC-01)
`x-contract-addresses.mdx` is an empty stub registered in active navigation. Every reader who follows the Technical Reference nav sequence after `cli-flags` reaches an empty page. This is the highest-priority structural defect in the section. Resolution: remove from docs.json nav (Option B, immediate) or build the page (Option A, with content work). Affects: `x-contract-addresses.mdx` checks 7.7, 7.8, 9.4, 4.1, 4.2, 4.3, 4.4 (26 FAILs); `cli-flags.mdx` checks 4.3, 4.4.
*P-rules: P104 (x-prefixed stub in active nav = dead nav entry, distinct from orphan); P84 (page-level fixes gated on BD resolution).*

**C-02 — Resolve cli-flags TODO block** (BD-SEC-06)
The TODO block at lines 25–46 of `cli-flags.mdx` is an MDX comment (not rendered, per P78 — correctly reclassified by critical review from check 5.4 FAIL to N/A). However, it contains open research/validation instructions with no named owner and no `{/* REVIEW: */}` format, failing checks 6.5 and 6.9. This blocks `veracityStatus: verified` for the section's only active content page. Atomic fix: either execute the TODO items and remove the block, or convert each item to `{/* REVIEW: [specific claim] — [named source] */}` format.
*P-rules: P78, P61, P70, P84.*

### HIGH

**H-01 — Apply atomic P39/P84 fix to `cli-flags.mdx`**
`cli-flags` carries `status: review` (non-canonical). Atomic fix: change `status: review` → `status: draft` AND add `veracityStatus: unverified` in one operation. Never apply only one half of this fix (P84). Resolves checks 1.8 and 9.1.

**H-02 — Add missing required frontmatter fields to `cli-flags.mdx`**
`cli-flags` is missing `complexity`, `lifecycleStage`, `industry`, and `niche`. Proposed values (confirm before applying): `complexity: advanced`, `lifecycleStage: operate`, `industry: [technical, livepeer]`, `niche: [infrastructure, protocol]`. Resolves checks 1.1, 1.6, 1.7, 1.9, 1.10.

**H-03 — Replace non-searcher-intent keywords in `cli-flags.mdx`**
Keywords contain `straight` and `chatgpt` (noise terms) and `livepeer`, `reference` (too generic). Replace with: `go-livepeer cli flags`, `gRPC orchestrator interface`, `livepeer orchestrator configuration flags`, `pricePerUnit pixelsPerUnit`, `blockRewardCut feeShare`. Resolves check 1.13.

**H-04 — Source go-livepeer version reference for cli-flags spec content**
The OpenAPI spec block and CLI flag mapping table carry no specific go-livepeer release version. The `lastVerified: 2026-03-17` date provides a date but no source. Add a specific release version reference and a `{/* REVIEW: CLI flag mappings — verify against go-livepeer source at cmd/livepeer/main.go before marking verified */}` flag. Resolves checks 6.2 and 6.7.

**H-05 — Fix `not [X]` banned construction at cli-flags line 202**
Line 202: `Key point: **not everything configurable is gRPC** - some is **purely on-chain economics**.` — `not [X]` as primary statement. Replace with: `gRPC covers service routing, pricing, and capabilities. On-chain parameters (blockRewardCut, feeShare) are set independently.` Resolves check 2.4.

**H-06 — Rename failing heading in `cli-flags.mdx`**
`Mintlify-compatible OpenAPI (reference-only, derived from gRPC)` scores 14/25. The section contains a gRPC schema representation, not a deployable OpenAPI spec. Proposed rename: `gRPC Interface Schema` or `Orchestrator gRPC Schema` — confirm before applying. Resolves check 3.1.

**H-07 — Deprecate-or-activate decisions for all three orphan stubs** (BD-SEC-02, BD-SEC-03, BD-SEC-04)
`x-changelog`, `x-support-status`, and `x-troubleshooting` are all draft orphan stubs not in docs.json. All content-check FAILs on these pages are gated on activate/archive decisions. Until the BD is resolved, the only unconditional fixes are frontmatter field additions (industry, niche, veracityStatus) and taxonomy corrections (applicable regardless of activation status). All other fixes are conditional.

**H-08 — Fix SVG OG image on `x-contract-addresses.mdx` and `x-troubleshooting.mdx`** (joint fix, RC-3)
Both pages use `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` as the OG image. Replace with `/snippets/assets/site/og-image/en/orchestrators.png` and complete the OG block (add `og:image:alt: Livepeer Docs social preview image for Orchestrators`, `og:image:type: image/png`, `og:image:width: 1200`, `og:image:height: 630`). Resolves checks 1.12 and 8.4 on both pages. Confirm both fixes in one operation.
*P-rules: P88 (joint verification for shared issues).*

**H-09 — Fix `purpose: operations` on `x-support-status.mdx`**
`purpose: operations` is not in the 15-value canonical set — it is an invalid value (error type: P37c, not a deprecated alias per P105). Corrected result: check 1.4 FAIL only; check 5.7 PASS (per x-support-status-review Correction 1). Change to `purpose: operate` — confirm before applying. Resolves checks 1.4 (only — not 5.7).

**H-10 — Fix `x-support-status.mdx` scaffolding-language opener, headings, and description**
Line 23: `This placeholder will become the operator-facing status page…` — delete. Headings `Planned scope` (10/25) and `Recommended now` (13/25) both fail check 3.1 and are interpretable only as scaffolding labels. Proposed renames: `## Coverage` (for `Planned scope`) and `## Canonical Paths` (stronger than the check report's `## Current Canonical Pages` at ~18/25) — confirm before applying. Description: replace with `Reference for which orchestrator documentation paths are supported, experimental, or deprecated.` Resolves checks 1.11, 2.4, 2.5, 2.10, 3.1, 3.4, 3.5, 3.7.

**H-11 — Fix UK English violation on `x-support-status.mdx`**
Line 28: `stabilizing` → `stabilising`. Resolves check 2.1.

### MEDIUM

**M-01 — Re-evaluate cli-flags check 6.3 against go-livepeer CLI flag deprecation status**
The check report marked check 6.3 NOT-TESTED on the grounds of "no percentages or gas costs" — this is the P103-identified misread. Check 6.3 scope is deprecated API/CLI/SDK usage, which is directly applicable to a CLI flags reference page. The check must be re-run: are any of the listed CLI flags or gRPC fields deprecated in the current go-livepeer release? Result is NOT-TESTED until this is verified against the go-livepeer source. This is a NOT-TESTED gap, not a confirmed FAIL — do not count it as a FAIL until evaluated.
*P-rules: P103, P59.*

**M-02 — Migrate deprecated `pageType: landing` on x-changelog, x-contract-addresses, x-troubleshooting** (conditional on BD-SEC-02, BD-SEC-03, BD-SEC-04)
If any of these three pages is activated:
- `x-changelog`: → `pageType: reference` + `pageVariant: changelog`, `purpose: update` (editorial inference, confirm before applying)
- `x-contract-addresses`: → `pageType: reference` + `pageVariant: specification`, `purpose: reference` (editorial inference, confirm before applying)
- `x-troubleshooting`: → `pageType: instruction` + `pageVariant: troubleshooting`, `purpose: troubleshoot` (editorial inference, confirm before applying)

In all three cases, `pageVariant` is a co-fix dependency of the `pageType` migration (P42 — do not log as an independent finding).

**M-03 — Add required frontmatter fields to all 5 pages (unconditional)**
Regardless of activate/archive decisions, the following field additions can proceed on all 5 pages:
- `veracityStatus: unverified` (all 5 pages missing it)
- `industry` and `niche` (all 5 pages missing both — P41 required)
For `cli-flags` specifically: the `veracityStatus` addition must be done as part of the atomic P84 fix (H-01), not independently.

**M-04 — Fix title typo on `x-contract-addresses.mdx`**
`Livepeer Arbitrum Contract Adresses` — "Adresses" is missing a 'd'. Fix: `Livepeer Arbitrum Contract Addresses`. Also align `sidebarTitle` to match — currently `Livepeer Contract Addresses` (no "Arbitrum"). Decide whether title or sidebarTitle is authoritative and make both consistent. Resolves checks 3.6 and 7.4.

**M-05 — Fix placeholder descriptions on x-changelog and x-contract-addresses** (conditional on BD-SEC-02, BD-SEC-01)
If either page is activated: replace placeholder descriptions (`Describe x-changelog`, `Description of x-contract-addresses`) with subject-first descriptions. Proposed for x-contract-addresses: `Contract addresses for the Livepeer protocol on Arbitrum One, including BondingManager, LivepeerToken, and Minter.` Proposed for x-changelog: `[Product component] changelog covering [scope] from [date range].` — draft after content is defined. Both resolve checks 1.11 and 2.4.

### LOW (INFO)

**L-01 — x-support-status `audience: developer` editorial question**
`developer` is schema-valid but editorially questionable in the Orchestrators tab. Confirm whether `audience: developer` or `audience: orchestrator` is correct. Not a check FAIL — BORDERLINE classification per P60.

**L-02 — x-changelog/x-contract-addresses/x-troubleshooting `audience: developer` editorial question**
Same pattern as L-01. All three stubs carry `audience: developer`. In the Orchestrators tab, `orchestrator` is the expected audience token. Schema-valid but editorial question for each page. BORDERLINE, not FAIL.

**L-03 — cli-flags check 2.11 BORDERLINE: large TODO block affects terminology consistency status**
The TODO block (lines 25–46) contains open terminology validation instructions. Until the block is resolved, check 2.11 (terminology consistency) cannot be confirmed PASS. This is a downstream dependency of BD-SEC-06 (C-02 above). No independent action required.

---

## 5. Cross-Page Structural Notes

### Navigation structure

The Technical Reference subgroup in docs.json contains only two entries:
- `cli-flags` (line 2976) — active, content-bearing
- `x-contract-addresses` (line 2977) — empty stub with `x-` prefix, CRITICAL dead nav entry (P104)

Three pages (`x-changelog`, `x-support-status`, `x-troubleshooting`) are not in docs.json. Their `x-` prefix correctly signals orphan/archived status for those three files. `x-contract-addresses` is the anomaly: `x-` prefix convention (not in nav) contradicts its actual active nav registration.

### x-contract-addresses is CRITICAL (not an orphan)

Per P104, this is a dead nav entry, not a navigation orphan. The P94 "CRITICAL NAVIGATION ORPHAN" label does not apply. The correct header label (identified by x-contract-addresses-review NF-1) is: "CRITICAL: `x-`-PREFIXED STUB IN ACTIVE NAV." This distinction matters for remediation: removing from nav (BD-SEC-01 Option B) resolves the structural defect immediately without requiring content work.

### cli-flags TODO block: open-ended item status

The TODO block at lines 25–46 of `cli-flags.mdx` blocks `veracityStatus: verified`. Per check reports and critical review (Correction 2 in cli-flags-review): the block is an MDX comment (not rendered — P78 correctly reclassifies check 5.4 to PASS). However, it is a check 6.9 FAIL (open-ended research task without named source or owner) and a check 6.5 FAIL (non-standard comment format). The block must either be executed and removed or converted to `{/* REVIEW: */}` format before check 6.5 and 6.9 can pass.

### x-troubleshooting content overlap risk

`x-troubleshooting.mdx` has potential scope overlap with the existing active page `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx`. Per P95, content overlap between sibling pages requires a human merge/deprecate/distinguish decision before both pages can be active. BD-SEC-04 must reference this overlap explicitly. If `x-troubleshooting` is activated without resolving the overlap, two separate troubleshooting pages would exist in the same tab.

### OG image joint fix

`x-contract-addresses.mdx` and `x-troubleshooting.mdx` share the same incorrectly-scaffolded OG image (`LivepeerDocsLogo.svg`). One template correction or joint fix resolves both simultaneously. See H-08.

### Check 6.3 systematic misidentification (batch-level pattern)

Across all five pages, check 6.3 was evaluated as a protocol-state figures or staleness-tier check rather than a deprecated API/CLI/SDK check. This is the pattern that produced P103 in Batch 25. For this section:
- `cli-flags.mdx`: check 6.3 must be re-evaluated against the current go-livepeer release for deprecated CLI flags. Current result is NOT-TESTED; it may become FAIL or PASS once evaluated (M-01).
- All other pages: empty or link-only content — N/A for check 6.3 is correct, but the reasoning must state "no CLI flags, API endpoints, or SDK methods present."

### Check 5.7 double-counting clarification

`x-support-status.mdx` check report marked check 5.7 FAIL for `purpose: operations`. Critical review (Correction 1) reclassifies: `operations` was never a valid value in any schema version — it is a check 1.4-only violation. Check 5.7 = PASS for x-support-status. Corrected fail count: 17 (not 18). This is a confirmed P105 application.

For `x-troubleshooting.mdx`, the critical review (Correction 1) notes that `pageType: landing` IS old-schema (check 5.7 FAIL is correct), but `purpose: landing` is not old-schema — check 1.4 only. Check 5.7 FAIL stands for x-troubleshooting because of `pageType: landing`; the rationale is corrected to exclude `purpose: landing` from the 5.7 scope.

---

## 6. Proposed Learnings

The following patterns appeared in this section's check and critical review reports and are not fully captured in P1–P105:

**NEW-P106: When a check report states that an OG image block is partial (only `og:image` present), the critical reviewer must independently verify by reading the source file's frontmatter. OG block misreads are high-impact because they generate a check 1.12 FAIL and contribute to the check 1.1 FAIL rationale — both cascade into fix list entries. This pattern appeared in x-changelog (all 5 OG fields present, checker reported only 1).**
*(Source: x-changelog-review Proposed Learnings)*

**NEW-P107: For `x-`-prefixed files that ARE present in docs.json, the P94 header must flag "CRITICAL: `x-`-PREFIXED STUB IN ACTIVE NAV" rather than "CRITICAL NAVIGATION ORPHAN." The critical condition is the mismatch between the file's deprecated convention (`x-` prefix = not in nav) and its actual nav registration — not orphan status. This is distinct from the absence case P94 was designed for, but is equally CRITICAL.**
*(Source: x-contract-addresses-review Proposed Learnings)*

**NEW-P108: When an empty stub (`x-`-prefixed, draft) is being assessed for potential activation, check whether an active page with overlapping scope already exists in the tab before writing the blocking decision. If a scope-equivalent active page exists, the BD must include content overlap assessment per P95 and cite the existing page by path. A BD that ignores an existing sibling page may create a duplicate-content decision after activation.**
*(Source: x-troubleshooting-review Proposed Learnings)*

**NEW-P109: Check 5.7 governs old-schema values only (deprecated aliases from the prior 12-type schema, old audience tokens). An invalid value that was never in any schema version (e.g., `purpose: operations`, `purpose: guide` as a purpose value) is caught by check 1.4 only. Do not also FAIL check 5.7 for values that are invalid rather than deprecated. The distinction: deprecated = was valid, now retired; invalid = was never valid in any version. Confirmed pattern in x-support-status (purpose: operations) and x-troubleshooting (purpose: landing).**
*(Source: x-support-status-review Proposed Learnings)*

*(Note: P106–P109 use the numbering sequence continuing from P105 — the last confirmed pattern in learnings.md Batch 25. These should be appended to learnings.md as Batch 26.)*
