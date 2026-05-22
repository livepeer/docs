# Resources Section Rollup — `v2/orchestrators/resources/`

**Generated:** 2026-03-24
**Rollup agent:** Claude Code (resources section rollup agent)
**Learnings applied:** P1–P107
**Subsections covered:** 3 (root, technical, compendium)
**Total pages covered:** 16
**Source:** 3 subsection summaries

---

## 1. Subsection Status Table

| Subsection | Page count | Fail range | Median fails | Active pages | Orphan/stub pages | Critical findings |
|---|---|---|---|---|---|---|
| root (`resources/`) | 10 | 16–39 | ~26 | 7 (in docs.json) | 3 (x-guides, x-help, x-payments — not in docs.json) | community-pools href="#" dead link; 3 x-prefix orphans pending disposition; financial-risk LPT contract address unverified |
| technical (`resources/technical/`) | 5 | 16–26 | ~20 | 1 active (cli-flags) + 1 dead nav entry (x-contract-addresses) | 3 (x-changelog, x-support-status, x-troubleshooting — not in docs.json) | x-contract-addresses is an x-prefixed empty stub in active nav — dead end immediately after only active page |
| compendium (`resources/compendium/`) | 1 | 22 | 22 | 1 (in docs.json) | 0 | AI-generated content flagged in checks.mdx §6.7 as untrusted; all 7 category-6 checks FAIL; audience token wrong |

**Resources section overall:** 16 pages. 8 pages confirmed active in docs.json navigation; 1 page is an x-prefixed dead nav entry (x-contract-addresses — technically registered but effectively dead); 6 pages are navigation orphans (not in docs.json); 1 page is an incomplete placeholder stub with a dead link (community-pools). The section has a high ratio of unresolved disposition items relative to publishable active content.

---

## 2. Cross-Subsection Patterns

Patterns appearing across 2 or more subsections.

**CP-1 — Universal frontmatter taxonomy gap (16/16 pages)**
Every page in the Resources section is missing at least one required taxonomy field. The fields most consistently absent are `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, and `niche`. This is a template-level authoring gap: all pages in all three subsections were scaffolded without required fields. Appears in: root (10/10), technical (5/5), compendium (1/1). Fix: add all required fields per Frameworks.mdx §3 in a single batch edit before any veracity pass begins.

**CP-2 — `status: review` wrong-enum (7+ pages across root and technical)**
The root subsection identified 7/10 pages with `status: review` (non-canonical). The technical subsection identified `cli-flags.mdx` with `status: review`. Both subsection summaries applied the P39/P84 atomic fix correctly: change `status: review` → `status: draft` AND add `veracityStatus: unverified` as one operation. Compendium glossary carries `status: draft` (no issue). Total confirmed in 2/3 subsections; atomic fix applies to all affected pages.

**CP-3 — x-prefix orphan and stub pages requiring disposition decisions (6 pages across root and technical)**
Root has 3 x-prefix orphans (x-guides, x-help, x-payments — not in docs.json). Technical has 3 x-prefix orphan stubs (x-changelog, x-support-status, x-troubleshooting — not in docs.json). All six require an explicit activate-or-archive decision before any content fixes can be validated as meaningful. The x-prefix convention signals deprecated/not-in-nav — but x-guides contains active curated content that was never formally deprecated or registered. Until disposition decisions are made, all content-check FAILs on these 6 pages are conditional.

**CP-4 — Invalid `purpose:` values (4 pages across root and compendium)**
Root: `purpose: faq` (faq.mdx, not in 15-value canonical set); `purpose: landing` (x-help.mdx, x-payments.mdx, not in any schema version). Technical: `purpose: operations` (x-support-status.mdx, not in any schema version — P37 error type c). Compendium: no purpose field error. The common thread across root and technical is that these values were never valid in any schema version (distinct from deprecated aliases), making them check 1.4-only FAILs per P105/P109. Check 5.7 must NOT be failed for these values.

**CP-5 — Check 6.5 misapplication: uncited factual claims without co-located REVIEW flags (multiple pages across root and technical)**
Root identified check 6.5 as systematically missed in 6/10 check reports; critical reviews corrected all six. Technical identified check 6.3 as systematically misidentified across all 5 pages (evaluated as protocol-state figures check rather than deprecated API/CLI/SDK check). The common failure mode: check agents either treated non-standard comment formats (TODO blocks, FACT CHECK) as satisfying the REVIEW flag requirement, or marked N/A when no REVIEW flags were found rather than recognising their absence on unverified claims as the failure. Per P61: only `{/* REVIEW: [specific claim] — [named source] */}` format satisfies check 6.5.

**CP-6 — Deprecated `pageType: landing` (3 pages in technical; also present in root via x-help and x-payments)**
Technical has 3 pages with `pageType: landing` (x-changelog, x-contract-addresses, x-troubleshooting). Root has x-help.mdx with `pageType: landing` and x-payments.mdx with `pageType: overview` (TYPE-CONFUSION per P107 — different error class). The `pageType: landing` pages require migration to correct pageType + pageVariant pairs (per P42 co-fix dependency), but those migrations are gated on activate-or-archive decisions. The `pageType: overview` TYPE-CONFUSION on x-payments.mdx has no migration path and requires a human BD (per P107).

**CP-7 — Em-dashes in frontmatter description fields and/or body prose (multiple pages across root and compendium)**
Root identified em-dashes in 7/10 pages (description fields and body prose). Compendium identified an em-dash in the glossary.mdx description field, initially classified BORDERLINE by the check report and correctly upgraded to FAIL by the critical review (P30 is absolute — no BORDERLINE pathway exists for P30 violations; confirmed in compendium proposed learning Candidate B). Technical did not surface this as a section-level pattern for its active pages. Fix: rewrite affected sentences; do not simple-replace with hyphens (RC-4 root summary).

**CP-8 — `## See Also` Banned-tier heading (8/10 root pages; not identified in technical or compendium)**
Eight of ten root pages carry `## See Also`, which is Banned-tier per checks.mdx §4.1 and P53. Technical and compendium subsections did not surface this as a pattern (different structural conventions). Rename to `## Related` (OK-tier per P55) or a domain-specific heading. This is a mechanical rename requiring no content decisions and can be batched.

**CP-9 — Check report structural format gaps: Pre-Check File Integrity section absent (root and technical)**
Root identified 8/10 check reports missing the `## Pre-Check: File Integrity` section (P81). Technical reports had equivalent structural format gaps (noted in summary Section 5 cross-page notes). The P94 CRITICAL NAVIGATION ORPHAN block was also absent from all 3 orphan-page reports in root; technical noted the correct distinction between orphan and dead nav entry (P104/P107 boundary). These are check-agent format issues — no page content fix required.

---

## 3. Critical Blocking Decisions (Resources-Level)

Decisions affecting 2 or more subsections, or single-page decisions so critical they must be resolved before any other work proceeds.

| BD-ID | Decision | Subsection(s) | Priority | Blocks |
|---|---|---|---|---|
| BD-RES-01 | **x-contract-addresses: remove from docs.json nav OR activate.** Option A: remove from docs.json nav (immediate). Option B: rename file, write contract addresses content, retain in nav. | technical | CRITICAL | cli-flags checks 4.3, 4.4 cannot pass until resolved; all x-contract-addresses content work gated on this decision. Dead nav entry affects every reader who follows the Technical Reference nav sequence. |
| BD-RES-02 | **community-pools: implementation method.** Option A: Google Sheets automation. Option B: static curated list. Option C: remove and consolidate into community-guides.mdx (requires trimming pool-operator section in community-guides to avoid P95 overlap). | root | CRITICAL | href="#" dead link cannot be published; page is functionally incomplete; pool-operator section overlap in community-guides must be resolved under any option. |
| BD-RES-03 | **LPT contract address verification** (`0x289ba1701C2F088cf0faf8B3705246331cB8A839` in arbitrum-exchanges.mdx). Financial-risk item — must be verified against Arbiscan (Arbitrum One mainnet) before any further work on this page. | root | CRITICAL | check 6.1 cannot be resolved; veracity pass for arbitrum-exchanges gated on this. Cross-tab check recommended (address may appear in other tabs). |
| BD-RES-04 | **x-help disposition: activate or archive.** If activate: define content scope and persona, remove x- prefix, register in nav. If archive: deprecate and remove. | root | CRITICAL | All content fixes on x-help.mdx are conditional. pageType cannot be corrected until content scope is decided (BD-XHELP-1 → BD-XHELP-2 → BD-XHELP-3 dependency chain). |
| BD-RES-05 | **x-payments disposition: activate or archive.** Also requires separate TYPE-CONFUSION BD: `pageType: overview` is a pageVariant value in the wrong field — no migration path exists (P107). If activate: correct pageType via human decision; resolve cross-tab Card link to gateway clearinghouse. If archive: deprecate and remove. | root | CRITICAL | All frontmatter fixes conditional. check 1.2 cannot be auto-resolved. Cross-tab link scope (BD-XPAY-2) must be resolved. |
| BD-RES-06 | **x-guides disposition: activate or archive.** Page contains active curated content (not a dead stub) but is not in docs.json. If activate: decide pageType (reference vs. resource), rename to guides.mdx or equivalent, register in nav, resolve content overlap with community-guides.mdx. If archive: deprecate. | root | CRITICAL | Nav registration and all structural fixes conditional. P95 content overlap with community-guides must be addressed under any activation option. |
| BD-RES-07 | **x-changelog disposition: activate or archive.** | technical | HIGH | All 21 FAILs conditional. If Option B (archive), no remediation needed. |
| BD-RES-08 | **x-support-status disposition: activate or archive.** | technical | HIGH | All content-check FAILs conditional. Frontmatter field additions (industry, niche, veracityStatus) can proceed independently of nav placement. |
| BD-RES-09 | **x-troubleshooting disposition: activate or archive.** If activating: resolve content overlap with existing active page `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx` (P95 — two troubleshooting pages cannot both be active without merge/deprecate/distinguish decision). | technical | HIGH | All content-check FAILs conditional. Overlap must be resolved before activation. Gated on BD-RES-08 for IA placement. |
| BD-RES-10 | **VRAM / NVENC / CUDA figures joint verification** (gpu-support.mdx + related setup/requirements pages). All hardware capability claims are uncited; figures appear across multiple pages. Single coordinated verification pass required. | root | HIGH | check 6.1 and 6.5 resolution for gpu-support and cross-referenced pages. |
| BD-RES-11 | **compendium/glossary.mdx cross-check against `v2/resources/glossary.mdx`.** AI-generated content flagged in checks.mdx §6.7 — `veracityStatus: verified` is not achievable until term-by-term cross-check is complete. Assign ownership. | compendium | HIGH | All veracity advancement for compendium glossary gated on this. |
| BD-RES-12 | **cli-flags TODO block** (lines 25–46). Option A: execute TODO items, remove block. Option B: convert each item to `{/* REVIEW: [claim] — [source] */}` format. | technical | HIGH | cli-flags checks 6.5 and 6.9 cannot pass until resolved; blocks `veracityStatus: verified`. |

---

## 4. Prioritised Recommendations (Resources-Level)

### CRITICAL — blocks navigation or publication

1. **Resolve BD-RES-01 (x-contract-addresses dead nav entry).** Remove from docs.json nav or build the page. Every reader who follows the Technical Reference nav sequence reaches an empty page. Immediate resolution option: remove from docs.json (one-line edit, no content work required).

2. **Resolve BD-RES-02 (community-pools dead link).** The href="#" dead link cannot be published. The page is functionally incomplete. Resolution must also address the pool-operator section overlap in community-guides.mdx.

3. **Verify LPT contract address (BD-RES-03) before any further work on arbitrum-exchanges.mdx.** Financial-risk item. An incorrect address published in docs could cause users to lose funds.

4. **Resolve all three x-prefix orphan disposition decisions in root (BD-RES-04, BD-RES-05, BD-RES-06).** x-guides, x-help, and x-payments are not in docs.json. No content fixes can be validated against actual publication requirements until live-vs-deprecated decisions are made.

5. **Resolve BD-RES-01 variant for technical (x-changelog, x-support-status, x-troubleshooting).** All 3 orphan stubs in technical require BD-RES-07, BD-RES-08, BD-RES-09 decisions before any content fix work is meaningful on those pages.

### HIGH — blocks veracityStatus: verified

6. **Add all missing required taxonomy fields (CP-1) to all 16 pages as a single batch edit.** Unblocks check 1.6 FAIL on every page. Pure mechanical operation requiring no content decisions. Priority order: active pages first (community-guides, faq, glossary, gpu-support, arbitrum-exchanges, arbitrum-rpc, cli-flags, compendium/glossary), then stubs conditional on disposition decisions.

7. **Apply atomic P39/P84 status fix to all pages with `status: review` (CP-2).** Change `status: review` → `status: draft` AND add `veracityStatus: unverified` in one edit per page. Confirmed needed for: 7 root pages + cli-flags (technical). Never apply only one half of this fix.

8. **Add `{/* REVIEW: [claim] — [source] */}` flags to all unverified factual claims across sections (CP-5).** Priority by staleness risk: gpu-support (hardware specs — HIGH), arbitrum-exchanges (financial data — HIGH), arbitrum-rpc (provider rate limits — HIGH), compendium/glossary (protocol-state figures — HIGH), glossary root (protocol numbers — HIGH), faq (Rinkeby reference — HIGH, stale testnet). Per P61: no other comment format satisfies check 6.5.

9. **Resolve cli-flags TODO block (BD-RES-12).** Blocks `veracityStatus: verified` for the technical subsection's only active content page.

10. **VRAM / NVENC / CUDA joint verification pass (BD-RES-10).** Run as a single coordinated fix across gpu-support and all cross-referenced pages — not page-by-page.

11. **compendium/glossary cross-check against `v2/resources/glossary.mdx` (BD-RES-11).** Assign ownership. `veracityStatus: verified` is not achievable until complete.

### MEDIUM

12. **Rename all `## See Also` headings across 8 root pages (CP-8).** Rename to `## Related` (OK-tier per P55) or a domain-specific heading. Mechanical batch rename. Do not rename to `## See also` (Banned-tier — same term, mixed case makes no difference).

13. **Fix em-dashes in description fields and body prose across root and compendium pages (CP-7).** Rewrite affected sentences. Do not simple-replace with hyphens. Apply P30 (all visible text) and self-check proposed replacements before applying (P75).

14. **Fix invalid `purpose:` values across root and technical (CP-4).** For faq.mdx: choose a valid 15-value canonical purpose (likely `troubleshoot` or `reference`). For x-help, x-payments: dependent on disposition BDs. For x-support-status: change `purpose: operations` → `purpose: operate` (check 1.4 only, not check 5.7 per P109).

15. **Fix compendium/glossary audience token.** Change `audience: orchestrator-operator` → `audience: orchestrator`. One atomic fix resolves checks 1.5 and 5.7.

16. **Rename four H2 headings in compendium/glossary.mdx** (AI Terms, Video Terms, Web3 Terms, Technical Terms — all fail check 3.4 domain-anchor rule). Proposed renames in compendium summary Section 2.4. Confirm before applying.

17. **Fix `pageType: landing` deprecated values on x-changelog, x-contract-addresses, x-troubleshooting (technical), and x-help (root)** — conditional on disposition BDs. Migration targets documented in technical summary Section 4 M-02. Apply per P42 (pageVariant is a co-fix dependency, not an independent finding).

18. **Fix OG image SVG on x-contract-addresses and x-troubleshooting (technical) — joint fix.** Both use `LivepeerDocsLogo.svg`; both require PNG. One template correction resolves both (P88).

19. **Replace stale Rinkeby reference in faq.mdx.** Rinkeby deprecated 2022. Replace with Arbitrum Sepolia or remove.

20. **Fix `purpose: operations` on x-support-status.mdx** → `purpose: operate`. Check 1.4 FAIL only; check 5.7 PASS per P109.

### LOW

21. **Fix title typo on x-contract-addresses.mdx** (`Adresses` → `Addresses`) and align sidebarTitle.

22. **Add `## Pre-Check: File Integrity` sections to all check reports (P81).** Check-agent format correction for the record — no page content fix required.

23. **Add CRITICAL NAVIGATION ORPHAN blocks before Category 1 in root check reports for x-guides, x-help, and x-payments (P94).** Distinguish orphans (not in nav) from dead nav entries (in nav but empty) per P104.

24. **BD format fix in compendium/glossary check report.** BD-1 includes a "Recommended action:" line — violates P68. Remove.

---

## 5. Navigation and Structure Notes

**Active page count vs. orphan/dead-entry count:**
16 pages total. 8 confirmed active in docs.json (community-guides, faq, glossary, gpu-support, arbitrum-exchanges, arbitrum-rpc, cli-flags, compendium/glossary). 1 dead nav entry (x-contract-addresses — in docs.json but empty stub, creates reader dead end). 6 navigation orphans (not in docs.json: x-guides, x-help, x-payments in root; x-changelog, x-support-status, x-troubleshooting in technical). 1 active but functionally incomplete page (community-pools — href="#" dead link, in docs.json).

**Dead nav entry distinction (P104):**
`x-contract-addresses.mdx` is in docs.json at line 2977 but contains no content. This is a dead nav entry (not a navigation orphan). The P94 "CRITICAL NAVIGATION ORPHAN" label does not apply — the correct flag (surfaced in technical summary Section 5) is "CRITICAL: x-prefixed STUB IN ACTIVE NAV." The technical summary correctly applied P104 for this distinction. Removing it from docs.json (BD-RES-01 Option B) is the lowest-friction resolution.

**Navigation dead ends:**
Two navigation dead ends exist in the section:
1. `x-contract-addresses.mdx` — immediately after `cli-flags.mdx` in the Technical Reference nav group; reader reaches an empty stub.
2. `community-pools.mdx` — href="#" dead link; page is in nav but functionally unusable.

Neither Concepts nor full Resources routing cards exist from the portal/navigator pages (flagged in the broader REVIEW-REGISTRY.md session notes as tab-level gaps).

**Relationship between `resources/root/glossary.mdx` and `resources/compendium/glossary.mdx`:**
This relationship is addressed in the compendium summary (Section 2.5 and Section 5). Three distinct glossary files exist with different trust levels:

1. `v2/resources/livepeer-glossary` — authoritative, human-reviewed (referenced in footer cards and checks.mdx §6.7 as the cross-check source)
2. `v2/orchestrators/resources/glossary.mdx` — root-level resources glossary (checked in the root subsection, 26 corrected FAILs)
3. `v2/orchestrators/resources/compendium/glossary.mdx` — AI-generated, explicitly named as untrusted in checks.mdx §6.7

The compendium summary is explicit that these are three distinct files with different trust levels, and that `veracityStatus: verified` is not achievable for the compendium glossary without a term-by-term cross-check against the authoritative source. The root summary does not address this relationship — the root glossary.mdx is treated as a standard page with the same check requirements as other root pages. **The relationship between `resources/root/glossary.mdx` and `resources/compendium/glossary.mdx` is not addressed in the root subsection summary.** The compendium summary addresses the relationship between compendium/glossary.mdx and the authoritative `v2/resources/livepeer-glossary` only. Whether root/glossary.mdx and compendium/glossary.mdx have overlapping scope, different scope, or one supersedes the other is not resolved in either subsection summary. This is an open structural question that should be added to the section-level blocking decisions if the two orchestrators-tab glossary files are both intended to remain active.

---

## 6. Proposed Learnings

The following patterns emerged across the Resources section subsection summaries and are not fully captured in P1–P107. Where proposed patterns overlap with those proposed within subsection summaries (root proposed P97–P100; technical proposed P106–P109), the numbering continues from P109 for net-new patterns.

**P97 (proposed, root subsection) — Superseded draft content must be deleted before a check report is finalised.**
A check report must contain exactly one Frontmatter Table, one verdict per category, and one overall Verdict Summary. Arithmetic working and self-correction commentary must be removed. If the agent caught its own error and corrected it, only the corrected version survives in the final report. Source: x-help critical review. Fills a gap in P17 (correction propagation) which does not explicitly require deletion of superseded content.

**P98 (proposed, root subsection) — Check 2.6 is N/A (not FAIL) for content-absent placeholder pages.**
Check 2.6 (paragraph discipline) can only fail when paragraphs exist and violate the required structure. A page with no substantive prose paragraphs has nothing to evaluate. The content-absence failure belongs in check 4.1 (page does not fulfil its stated purpose), not check 2.6. Source: community-pools critical review.

**P99 (proposed, root subsection) — Check 6.5 applies to rendered Note/Warning/Callout blocks containing unverified factual claims.**
When a rendered component block (`<Note>`, `<Warning>`, `<Callout>`, `<Tip>`) contains an unverified factual claim, the absence of a co-located `{/* REVIEW: [claim] — [source] */}` flag is a check 6.5 FAIL. A separate TODO block elsewhere in the file does not satisfy this requirement. Source: community-pools critical review; consistent with check 6.5 misapplication pattern in arbitrum-exchanges and arbitrum-rpc.

**P100 (proposed, root subsection) — Check 3.2 rationale must cite only the closed Avoid-tier list; OK-tier headings must not be characterised as Avoid-tier.**
The Avoid tier is a closed list: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. Heading terms not in this list are not Avoid-tier even if they seem generic. `Requirements` and `Configuration` are both explicitly OK-tier. If a heading lacks a domain anchor and cannot be interpreted in isolation, that is a check 3.4 finding (domain-anchor rule), not check 3.2. Source: arbitrum-rpc critical review.

**P106 (proposed, technical subsection) — OG block misread by check agent requires independent verification by critical reviewer.**
When a check report states that an OG image block is partial (only `og:image` present), the critical reviewer must independently verify by reading the source file's frontmatter. OG block misreads cascade into check 1.12 FAIL and check 1.1 FAIL rationale. Source: x-changelog-review (all 5 OG fields were present; checker reported only 1).

**P107 (proposed, technical subsection — now confirmed in P-rules) — x-prefixed files in docs.json require "CRITICAL: x-PREFIXED STUB IN ACTIVE NAV" label, not "CRITICAL NAVIGATION ORPHAN."**
The critical condition is the mismatch between the file's deprecated convention (x- prefix = not in nav) and its actual nav registration. This is distinct from the absence case P94 was designed for, but equally CRITICAL. Source: x-contract-addresses-review.

**P108 (proposed, technical subsection) — When assessing an empty stub for potential activation, check for scope-equivalent active pages first.**
If a scope-equivalent active page exists in the tab, the BD must include content overlap assessment per P95 and cite the existing page by path. A BD that ignores an existing sibling page may create a duplicate-content decision after activation. Source: x-troubleshooting-review.

**P109 (proposed, technical subsection) — Check 5.7 governs old-schema values only; invalid values (never valid in any schema version) are check 1.4-only FAILs.**
Distinction: deprecated = was valid, now retired (check 5.7 applies); invalid = was never valid in any version (check 1.4 only). Examples: `purpose: operations`, `purpose: landing` are invalid (not deprecated). Source: x-support-status-review and x-troubleshooting-review.

**NEW-P110 — The two orchestrators-tab glossary files (`resources/glossary.mdx` and `resources/compendium/glossary.mdx`) require an explicit scope relationship decision before either can advance to `veracityStatus: verified`.**
Three glossary files exist in the orchestrators tab context with different trust levels. The subsection summaries addressed each file independently but did not resolve whether the two orchestrators-specific glossary files have overlapping scope, distinct scope, or a supersession relationship. When two files in the same tab could plausibly serve the same reader need, a human scope-boundary decision is required before both can coexist in active nav without creating a duplicate-content condition (P95). This gap is not captured by any existing pattern. It is a section-level structural question that does not arise from the individual check runs and is only visible at rollup level.

---

*End of Resources section rollup — `v2/orchestrators/resources/` — 16 pages across 3 subsections — 2026-03-24*
