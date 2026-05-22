# Section Summary — `v2/orchestrators/resources/` (root level)

**Summary date:** 2026-03-24
**Summary agent:** Claude Code (summary index agent)
**Learnings version applied:** P1–P107
**Pages covered:** 10
**Check reports read:** 10
**Critical reviews read:** 10

---

## Section 1 — Overview Table

| Page | Corrected FAILs | Check report stated | Critical review rating | Nav status | Primary issues |
|---|---|---|---|---|---|
| faq.mdx | 28 | 29 | MOSTLY RELIABLE | ACTIVE | Open TODO block (MDX comment, but rendered fallback); purpose:faq invalid value; em-dashes; `significantly`; stale Rinkeby reference; `## See Also` Banned-tier |
| glossary.mdx | 26 | 26 | MOSTLY RELIABLE | ACTIVE | pageType:glossary deprecated; status:current + REVIEW flags = §1.8 incoherence; generic H2 headings; REVIEW flags missing named sources; full taxonomy absent |
| gpu-support.mdx | 23 | 24 | NEEDS CORRECTION | ACTIVE | NVENC session limits / CUDA / VRAM / driver version uncited (HIGH staleness); check 6.5 missed by report; `## See Also` Banned-tier; self-reference opener; Tabs not scanned (P91 gap) |
| community-guides.mdx | 16 | 16 | RELIABLE | ACTIVE | Em-dash in description + body; `## See Also` Banned-tier; TODO block (MDX comment); all 13 internal links verified; strongest page in section |
| community-pools.mdx | 31 | 32 | NEEDS CORRECTION | ACTIVE | Placeholder stub; href="#" dead link; unimplemented Google Sheets automation (rendered Note = unverified claim); Frontmatter Table PASS/FAIL inconsistency; content overlap with community-guides unaddressed (P95 BD) |
| arbitrum-exchanges.mdx | 22 | 22 | MOSTLY RELIABLE | ACTIVE | `significantly` banned word; LPT contract address unverified; bridge times / Uniswap liquidity / ETH gas / active-set threshold all uncited; check 6.5 missed by report (check 5.7 also misapplied per P105) |
| arbitrum-rpc.mdx | 22 | 22 (disk shows 19) | MOSTLY RELIABLE | ACTIVE | Provider rate-limit figures uncited (Alchemy 300 CU/s, Infura 100k req/day, Chainstack 25 req/s); check 6.5 missed by report; check 5.7 misapplied (per P105); check 3.2 rationale inflated |
| x-guides.mdx | 19 | 19 | MOSTLY RELIABLE | ORPHAN (not in docs.json) | Active content with x- prefix and no nav registration; BD pending for pageType:reference vs resource + rename/register-or-confirm-deprecated decision; CRITICAL NAVIGATION ORPHAN block missing from report (P94 format gap) |
| x-help.mdx | 29 | 29 (disk has two versions; earlier shows 44) | NEEDS CORRECTION | ORPHAN (not in docs.json) | Entirely empty stub; placeholder frontmatter (title: X-help, description: Describe x-help); pageType:landing deprecated; purpose:landing invalid; three BDs pending; report contains draft artefacts (two full versions) |
| x-payments.mdx | 39 | 39 (disk shows 30) | NEEDS CORRECTION | ORPHAN (not in docs.json) | Partial stub; pageType:overview = TYPE-CONFUSION (P107); purpose:landing invalid; "This section is being finalized" — US spelling + banned construction; gateway Card link unexplained; three BDs pending |

**Note on count discrepancies:** Three pages have stated counts on disk that differ from critical review working figures. In all cases the critical review corrected count is used as authoritative here. The disk files for x-payments (30 stated vs 39 working) and x-help (29 operative vs 44 earlier draft) may reflect mid-session self-corrections or truncated saves. The arbitrum-rpc disk shows 19; the critical review reconstruction produced 22. Downstream agents must always use the critical review corrected count, not the check report stated count.

---

## Section 2 — Shared Root Causes

**RC-1 — Universal frontmatter taxonomy gap (10/10 pages)**
Every page in the section is missing at least one required taxonomy field. The most common absent fields are `complexity`, `lifecycleStage`, `industry`, `niche`, `informationType`, and `veracityStatus`. Check 1.6 (missing required fields) and check 1.9/1.10 (invalid or absent taxonomy values) are among the highest-frequency FAILs in the section. Fix: add all required fields per Frameworks.mdx §3 before any veracity pass.

**RC-2 — `status: review` wrong-enum (7/10 pages)**
Seven pages carry `status: review`, which is not a canonical status value (canonical: `current`, `draft`). This is a check 1.8 wrong-enum FAIL per P57. It is NOT a check 5.7 old-schema failure. Two check reports (arbitrum-exchanges, arbitrum-rpc) incorrectly failed check 5.7 for this reason; both were corrected in critical reviews. Fix: `status: draft` + `veracityStatus: unverified` as one atomic edit (P39/P84).

**RC-3 — `## See Also` Banned-tier heading (8/10 pages)**
Eight of ten pages carry a `## See Also` heading, which is in the Banned tier per checks.mdx §4.1 (P53). This is one of the most consistent failures in the section. Rename to `## Related` (OK-tier, per P55) or `## Related Pages` (exempt per P53) or a domain-specific heading.

**RC-4 — Em-dash in description and/or body prose (7/10 pages)**
Seven pages carry em-dashes in the `description` frontmatter field and/or in body prose. Em-dashes are prohibited by voice rules. Fix: rewrite affected sentences. Frontmatter descriptions must be rechecked specifically — the em-dash often appears in a description that otherwise passes check 1.11.

**RC-5 — TODO blocks present (MDX comment) (6/10 pages)**
Six pages contain TODO blocks as MDX comments `{/* TODO: ... */}`. Per P78, these are non-rendered and cannot fail check 8.6 or check 5.4. Check reports that failed 8.6 for MDX comments were corrected in critical reviews (-1 each for faq, gpu-support, community-pools). The MDX TODO is not a publishing blocker, but it does indicate incomplete implementation intent that may block other checks (4.1, 4.4, 9.3).

**RC-6 — Check 6.5 systematically missed: uncited factual claims lack REVIEW flags (6/10 pages)**
Six pages carry unverified factual claims with no `{/* REVIEW: [claim] — [source] */}` inline flags. Check reports on arbitrum-exchanges, arbitrum-rpc, gpu-support, and community-pools all initially marked check 6.5 as PASS or N/A. All were corrected to FAIL in critical reviews. The recurring misapplication pattern: agents treated a TODO block as "the review tracking mechanism" (arbitrum-exchanges, arbitrum-rpc) or marked N/A when no claims were identified (community-pools). REVIEW flags must be co-located with the specific unverified claim in the rendered content — a separate TODO block does not satisfy check 6.5.

**RC-7 — Pre-Check File Integrity section absent (8/10 pages)**
Eight of ten check reports lack a `## Pre-Check: File Integrity` section (P81). The docs.json status is confirmed in header metadata instead. This is a structural format gap across the batch. For ORPHAN pages (x-guides, x-help, x-payments), the P94 CRITICAL NAVIGATION ORPHAN block before Category 1 was also absent from all three reports.

**RC-8 — `purpose:` invalid values (3/10 pages)**
Three pages carry invalid purpose values: `purpose: faq` (faq.mdx — not in 15-value set), `purpose: landing` (x-help.mdx, x-payments.mdx — not in 15-value set). These are not deprecated-alias errors (P37 error type c: value not in schema). The correct pageVariant or purpose must be chosen via BD for x-help and x-payments. For faq.mdx, the correct purpose from the 15-value canonical set must be determined (likely `troubleshoot` or `reference`).

---

## Section 3 — Blocking Decisions

### CRITICAL — blocks all downstream fixes

**BD-POOL-1 (community-pools.mdx) — Implementation method**
Current state: placeholder stub with href="#" dead link, rendered Note claiming Google Sheets automation not yet built.
Options: A) Implement automation (Google Sheets pull); B) Implement manual curation (static list, human-maintained); C) Remove page and consolidate pool content into community-guides.mdx.
Constraint: Option C requires removing or trimming the pool-operator section in community-guides.mdx (P95 content overlap). Any implementation decision must resolve the overlap.
Blocks: all substantive fixes to community-pools.mdx.

**BD-XHELP-1 (x-help.mdx) — Content: what should this page contain?**
Current state: entirely empty stub with placeholder description.
Decision needed: what support/help content belongs at this URL and which persona it serves.
Blocks: all fixes to x-help.mdx; ORPHAN status cannot be resolved until content scope is decided.

**BD-XHELP-2 (x-help.mdx) — pageType**
`pageType: landing` is deprecated. Correct pageType unknown without content decision (depends on BD-XHELP-1).
Blocks: all frontmatter fixes.

**BD-XHELP-3 (x-help.mdx) — Navigation registration / x- prefix**
Page is NOT in docs.json. Is this page intended to go live? If yes: remove x- prefix, register in nav, decide URL. If no: deprecate and remove.
Blocks: nav registration; all veracity and structural fixes are conditional on this decision.

**BD-XPAY-1 (x-payments.mdx) — pageType**
`pageType: overview` is TYPE-CONFUSION (P107) — a pageVariant value placed in the wrong field. No migration path exists. Correct pageType is unknown and requires a human decision.
Blocks: check 1.2 cannot be auto-resolved; all frontmatter fixes dependent.

**BD-XPAY-2 (x-payments.mdx) — Gateway clearinghouse Card scope**
Page contains a Card linking to `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide`. This is a cross-tab link from the Orchestrators resources section to Gateway-specific content. Is this intentional? If yes: an explanation belongs at the link site (violates check 4.3 unexplained cross-tab reference). If no: remove.
Blocks: check 4.3 cannot be resolved until scope decision made.

**BD-XPAY-3 (x-payments.mdx) — Navigation registration / x- prefix**
Page is NOT in docs.json. Same decision required as BD-XHELP-3: live vs deprecated.
Blocks: nav registration; all veracity and structural fixes conditional.

**BD-XGUIDES-1 (x-guides.mdx) — pageType: reference vs resource**
`pageType: reference` is schema-valid but editorially mismatched (page is a curated card index, not a technical spec). Options: A) `pageType: resource` + register as `guides.mdx`; B) Retain as reference with adjusted content structure; C) Confirm deprecated and remove.
Blocks: all structural fixes to x-guides.mdx.

**BD-XGUIDES-2 (x-guides.mdx) — Navigation registration / x- prefix**
Page is NOT in docs.json despite containing active content (not a dead stub). Same decision required as BD-XHELP-3.
Blocks: nav registration.

### HIGH — materially affects content accuracy

**BD-LPT-CONTRACT (arbitrum-exchanges.mdx) — LPT contract address verification**
Claimed address: `0x289ba1701C2F088cf0faf8B3705246331cB8A839`. Must be verified against Arbiscan (Arbitrum One) before publication. Publishing an incorrect contract address is a financial-risk finding (users could send to wrong address).
Blocks: check 6.1 cannot be resolved; veracity pass for this page.

**BD-VRAM-JOINT (gpu-support.mdx) — NVENC session limits, driver versions, CUDA, and VRAM figures**
All hardware capability claims are uncited. Some are cross-referenced across multiple Orchestrators pages (see Cross-Page Structural Notes). Joint verification required across gpu-support, setup, and requirements pages.
Blocks: check 6.1 and 6.5 resolution; veracity pass for gpu-support and related pages.

---

## Section 4 — Prioritised Recommendations

### CRITICAL — must resolve before publishing any page in this section

1. Resolve all three x-prefix ORPHAN page decisions (BD-XGUIDES-2, BD-XHELP-3, BD-XPAY-3). These pages are not in docs.json. Until the live-vs-deprecated decision is made, no fixes to these pages can be validated against actual publication requirements.

2. Resolve community-pools implementation decision (BD-POOL-1 above). The href="#" dead link cannot be published; the page is functionally incomplete.

3. Verify the LPT contract address (BD-LPT-CONTRACT above). This is a financial-risk item and must be confirmed against Arbiscan before the arbitrum-exchanges page is touched further.

### HIGH — should resolve before any veracity or content-pass work

4. Add all missing required taxonomy fields (RC-1) to all 10 pages as a single batch edit. This unblocks the check 1.6 FAIL on every page and is a pure mechanical operation requiring no content decisions.

5. Apply atomic P39/P84 status fix to all 7 pages with `status: review`: change to `status: draft` + `veracityStatus: unverified` in one edit per page (RC-2).

6. Add `{/* REVIEW: [claim] — [source] */}` flags to all unverified factual claims in the 6 pages where check 6.5 failed (RC-6). Priority order by staleness risk: gpu-support (hardware specs), arbitrum-exchanges (financial data), arbitrum-rpc (provider rate limits), glossary (protocol numbers), community-pools (automation claim), faq (Rinkeby reference).

7. Rename all `## See Also` headings to `## Related` or a domain-specific alternative (RC-3). This is a mechanical rename across 8 pages.

8. Resolve the TYPE-CONFUSION on x-payments.mdx `pageType: overview` (BD-XPAY-1). Until pageType is correct, all Category 1 checks remain blocked and the check 1.3/1.4 disposition is unknown.

### MEDIUM — address after HIGH items

9. Fix em-dashes in description fields and body prose across 7 pages (RC-4). Rewrite affected sentences — do not simple-replace with hyphens.

10. Correct purpose field on faq.mdx (`purpose: faq` → valid 15-value canonical choice), x-help.mdx, and x-payments.mdx (both carry `purpose: landing` — invalid) once pageType decisions are made for the latter two.

11. Replace the generic `## Protocol Terms`, `## Operational Terms`, `## Economic Terms` headings in glossary.mdx with domain-anchor headings (check 3.4 FAIL across all three).

12. Address the open TODO block in faq.mdx: the TODO is a non-rendered MDX comment (P78) but represents incomplete implementation intent. Ensure the faq content planned in the TODO has been written or is planned.

### LOW — polish and format compliance

13. Add `## Pre-Check: File Integrity` sections to all check reports (P81 structural gap). This is a check agent format issue — no page content fix required, but future batch agents must include this section.

14. Add CRITICAL NAVIGATION ORPHAN blocks before Category 1 in check reports for x-guides, x-help, and x-payments (P94 format gap). Same note as above — this is a check agent format correction for the record.

15. Correct NOT-TESTED count in x-guides check report (stated 11, list has 10 items — minor P49 issue).

---

## Section 5 — Cross-Page Structural Notes

**NAV-1 — Three x-prefix ORPHAN pages not in docs.json**
x-guides.mdx, x-help.mdx, and x-payments.mdx are all absent from docs.json. They share the x- prefix convention used for deprecated/deprecated-in-progress files, but x-guides.mdx contains active curated content (10 community cards + StyledTable) suggesting it has not been formally deprecated — it simply was never registered. x-help and x-payments are genuine stubs. All three require an explicit disposition decision (see BD section above). The docs.json omission means none of these pages are reachable via the published navigation tree.

**NAV-2 — community-guides / x-guides content overlap**
community-guides.mdx (ACTIVE, in nav) and x-guides.mdx (ORPHAN, not in nav) both cover curated community guide resources. community-guides.mdx has a `## Pool Operators & Workers` section with links to Titan Node, Video Miner, and LivePool. x-guides.mdx has two CardGroups (Official guides + Community resources) with some overlap. If x-guides is registered and made live, the overlap must be resolved or the pages will have redundant scope (P95 BD already raised in x-guides check report). The BD-XGUIDES-2 decision should explicitly address this overlap.

**NAV-3 — community-pools / community-guides pool-directory overlap**
community-guides.mdx already lists pool-operator links (Titan Node etc.) in its `## Pool Operators & Workers` section. community-pools.mdx is the dedicated pool directory but is a placeholder. When community-pools.mdx is implemented (BD-POOL-1), the pool-operator section in community-guides.mdx should be trimmed or removed to avoid duplication. The critical review for community-pools raised this as a P95 BD constraint that the check report did not include — it must be added to BD-POOL-1 scope before implementation work begins.

**VERACITY-1 — LPT contract address (arbitrum-exchanges.mdx) — financial risk**
The LPT contract address `0x289ba1701C2F088cf0faf8B3705246331cB8A839` appears at line 146 of arbitrum-exchanges.mdx. This has HIGH staleness flag and carries financial risk: an incorrect address published in docs could cause users to lose funds. Must be verified against Arbiscan (Arbitrum One mainnet) before any content pass or publishing. No other page in this section duplicates this claim, but it may appear in other tabs — cross-tab check recommended.

**VERACITY-2 — Stale Rinkeby reference (faq.mdx)**
faq.mdx contains a reference to the Rinkeby testnet (line flagged in check report). Rinkeby was deprecated in 2022. This is a stale factual claim. Replace with Arbitrum Sepolia or remove as relevant to current Livepeer network topology.

**VERACITY-3 — VRAM / NVENC / CUDA figures (gpu-support.mdx)**
All hardware capability figures on gpu-support.mdx are uncited. These figures (NVENC session limits, CUDA version minimums, VRAM requirements per model) also appear in setup/requirements pages (rcs-requirements.mdx, others). The critical review for gpu-support proposed a joint verification pass across all pages carrying these figures (proposed P88 extension: cross-page VRAM joint verification). This should be a single coordinated fix, not page-by-page.

**VERACITY-4 — Provider rate limits (arbitrum-rpc.mdx)**
Specific provider rate-limit figures — Alchemy 300 CU/s (line 78), Infura 100k req/day (line 84), Chainstack 25 req/s (line 102) — are uncited. Provider pricing and rate limits change frequently. Each must have a source link (provider docs) or a REVIEW flag. These are HIGH staleness items.

**CHECK-QUALITY-1 — Check 6.5 systematic misapplication in this batch**
Six of ten check reports initially missed check 6.5 failures. The recurring error pattern: treating a TODO MDX comment as equivalent to REVIEW flags, or marking N/A when no REVIEW flags were found instead of recognising that absent flags on unverified claims ARE the failure. This pattern was corrected in critical reviews for arbitrum-exchanges (+1), arbitrum-rpc (+1), gpu-support (+1 from previously missed hardware claim), community-pools (+1 for rendered Note). Future check agents must apply: "If a factual claim exists and no REVIEW flag is co-located with that claim in the rendered content, check 6.5 FAIL — regardless of whether a TODO block elsewhere mentions review."

**CHECK-QUALITY-2 — Check 5.7 misapplication (`status: review` wrong-enum)**
Two check reports (arbitrum-exchanges, arbitrum-rpc) failed check 5.7 for `status: review`. Check 5.7 covers deprecated 12-type pageType values only — not status field values. `status: review` is a check 1.8 wrong-enum per P57. Both were corrected in critical reviews (-1 each). This is the same learning as P105 but was reproduced in these reports, suggesting the check 5.7 prompt needs the P105 boundary stated more explicitly.

**CHECK-QUALITY-3 — x-help check report contains two full versions**
The x-help.mdx check report on disk contains a superseded draft (earlier version showing 44 FAILs, `audience: developer` as schema FAIL) alongside a corrected version (29 FAILs). This creates execution risk: any agent reading the full file would encounter contradictory instructions. The file should be cleaned to retain only the corrected version. The critical review proposed this as a candidate for P-97 (see Section 6).

---

## Section 6 — Proposed Learnings

The following patterns recurred across this batch and are not fully covered by P1–P107. Each is proposed for addition to learnings.md.

**Proposed P-97 — Superseded draft content must be deleted before a check report is finalised**
A check report that contains self-corrections must eliminate all superseded content before finalising. The report must contain exactly one Frontmatter Table, one verdict per category, and one overall Verdict Summary. Arithmetic working and self-correction commentary must be removed. If the agent caught its own error and corrected it, only the corrected version survives in the final report. Leaving both versions creates execution risk for downstream agents and humans. Source: x-help critical review (C-01/C-06). This fills a gap in P17, which covers correction propagation but does not explicitly require deletion of superseded content.

**Proposed P-98 — Check 2.6 is N/A (not FAIL) for content-absent placeholder pages**
Check 2.6 (paragraph discipline: lead-fact sentence, end on fact/number/next-step) can only fail when paragraphs exist and violate the required structure. A page with no substantive prose paragraphs — such as a placeholder stub — has nothing to evaluate. Mark check 2.6 N/A, not FAIL. The content-absence failure belongs in check 4.1 (page does not fulfil its stated purpose), not check 2.6. Source: community-pools critical review (Correction 3).

**Proposed P-99 — Check 6.5 applies to rendered Note/Warning/Callout blocks containing unverified factual claims**
When a rendered component block (`<Note>`, `<Warning>`, `<Callout>`, `<Tip>`) contains an unverified factual claim, the absence of a co-located `{/* REVIEW: [claim] — [source] */}` flag is a check 6.5 FAIL. Note/Warning/Callout blocks are rendered visible text — they are not exempt from the check 6.5 requirement. A separate TODO block elsewhere in the file does not satisfy this requirement. Source: community-pools critical review (Correction 6); consistent with the pattern also found in arbitrum-exchanges and arbitrum-rpc.

**Proposed P-100 — Check 3.2 rationale must cite only the closed Avoid-tier list; OK-tier headings must not be characterised as Avoid-tier**
The Avoid tier per checks.mdx §4.1 is a closed list: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. Heading terms not in this list are not Avoid-tier even if they seem generic. `Requirements` and `Configuration` are both explicitly OK-tier. Characterising them as Avoid-tier in check 3.2 inflates the finding and misrepresents what check 3.2 tests. If `Requirements` lacks a domain anchor and cannot be interpreted in isolation, that is a check 3.4 finding (domain-anchor rule), not check 3.2. Source: arbitrum-rpc critical review (C-05).

**Confirmed reinforcement — P105 (`status: review` belongs in check 1.8, not check 5.7)**
Two reports in this batch reproduced the same error P105 was written to prevent. The boundary statement in the check prompt should be: "Check 5.7 tests ONLY for deprecated 12-type pageType values (landing, overview in pageType, etc.) and deprecated purpose aliases. Non-canonical status values (review, published, etc.) are wrong-enum errors for check 1.8 ONLY. Do not fail check 5.7 for status field issues." The current P105 framing may not be prominent enough in the prompt — consider placing it as an explicit instruction before the check 5.7 row in the category prompt.

**Confirmed reinforcement — P107 (TYPE-CONFUSION for `pageType: overview`)**
x-payments.mdx check report framed `pageType: overview` as a deprecated-alias migration and listed possible migration targets inside the check 1.2 row. P107 prohibits this. The corrected framing for any `pageType: overview` finding: "TYPE-CONFUSION: `overview` is a pageVariant value placed in the pageType field. Correct pageType unknown — no migration path exists. Raise as a Blocking Decision. Do not list migration candidates in the check 1.2 row." Source: x-payments critical review (C-01).

---

*End of section summary — `v2/orchestrators/resources/` root level — 10 pages — 2026-03-24*
