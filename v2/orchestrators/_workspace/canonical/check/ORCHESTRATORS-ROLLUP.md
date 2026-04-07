# Orchestrators Documentation — Full Quality Check Rollup

**Generated:** 2026-03-24
**Final rollup agent:** Claude Code
**Learnings applied:** P1–P108
**Sections covered:** guides (10 subfolders, 50 pages) + resources (3 subsections, 16 pages)
**Total pages:** 66
**Scope:** This rollup covers `v2/orchestrators/guides/` and `v2/orchestrators/resources/` only. Excludes: concepts, setup, quickstart, root-level pages (portal.mdx, navigator.mdx, index.mdx).

---

## 1. Overall Status

**Summary table:**

| Section | Pages | Active (in docs.json) | Orphan / stub | Median fails | Critical BDs | Status |
|---|---|---|---|---|---|---|
| guides | 50 | 44 | 6 | ~21–22 | 8 | No page publishable |
| resources | 16 | 8 active + 1 dead nav entry | 6 orphans + 1 incomplete stub | ~22 | 12 | No page publishable |
| **TOTAL** | **66** | **53 registered** | **13 unresolved disposition** | | **20** | **No page publishable** |

Active registrations include one confirmed dead nav entry (resources/technical/x-contract-addresses) and one functionally incomplete page (resources/root/community-pools — href="#" dead link).

**Single-sentence section verdict:** Zero of 66 pages are in a publishable state; the full guides and resources sections require a batch frontmatter pass (66 pages), disposition decisions on 13 orphan or incomplete pages, veracity decisions on approximately 50+ open FACT CHECK flags, resolution of 20 blocking decisions, and critical factual error corrections before any page can advance toward publication.

---

## 2. Top-Level Blocking Decisions

Decisions that affect 2+ sections or block the entire Orchestrators tab. Per-section BDs remain in section rollups.

| BD-ID | Decision | Scope | Priority | Blocks |
|---|---|---|---|---|
| BD-TAB-01 | **VRAM canonical source across all sections.** Inconsistent VRAM figures span guides (ai-and-job-workloads, config-and-optimisation, deployment-details, operator-considerations) and resources (gpu-support). Models affected: SAM2 (6 GB vs 12 GB vs 4–6 GB warm), SDXL Lightning (12–14 GB vs 12–18 GB), Whisper (3 GB vs 2–3 GB warm), RTX 2060 base (confirmed 6 GB vs stated 8–12 GB on one guides page). Options: (A) SME confirms canonical figures; declare model-demand-reference (guides) and gpu-support (resources) as the two canonical VRAM sources; all other pages align or link. (B) Declare model-demand-reference as single canonical source; gpu-support defers to it. | guides + resources | CRITICAL | `veracityStatus: verified` on every page containing VRAM figures — currently blocks 5 guides subfolders and the resources root subsection simultaneously |
| BD-TAB-02 | **Livepeer Forum URL offline (confirmed March 2026).** References appear in guides/monitoring-and-tooling (metrics-and-alerting, operator-toolbox) and in FACT CHECK comments potentially in resources. Options: (A) remove all references section-wide; (B) replace with a confirmed alternative community URL. Requires a section-wide search for `forum.livepeer.org` across all 66 pages before the scope of impact is known. | guides + resources | CRITICAL | Checks 6.1, 6.8, 8.2 on all affected pages in both sections |
| BD-TAB-03 | **`status: current` + absent or wrong `veracityStatus` — batch demotion decision.** At least 12 guides pages carry `status: current` without `veracityStatus`. The P39 constraint prohibits this combination. Options: (A) demote all affected pages to `status: draft` + `veracityStatus: unverified` as an immediate batch across both sections; (B) preserve `status: current` per-page as the veracity pass proceeds. Option A is safer, prevents the prohibited combination, and is correct for pre-gate content. This decision, once made, applies equally to all pages across both sections that carry the prohibited combination. | guides + resources | CRITICAL | P39 compliance across all affected pages in both sections; accurate status representation |
| BD-TAB-04 | **`purpose: guide` replacement matrix.** At least 14 guides pages carry `purpose: guide` (a pageType value placed in the purpose field — P37 type-b error). Resources section has equivalent purpose field errors (`purpose: faq`, `purpose: landing`, `purpose: operations`). Replacement values differ per page and require human confirmation. Options: produce a single decision table (page, proposed purpose value, alternative), get one batch sign-off across both sections. | guides + resources | HIGH | All check 1.4, 4.7, 5.7 fixes on affected pages in both sections; approximately 18+ pages total |
| BD-TAB-05 | **Cross-tab broken link to `/v2/gateways/resources/technical/orchestrator-offerings`.** Path confirmed absent from docs.json. Appears on two guides pages (ai-inference-operations, diffusion-pipeline-setup). A section-wide search of all 66 pages should confirm whether it also appears in resources. Options: (A) create the target page and register in gateways docs.json; (B) redirect to an existing equivalent gateways resource; (C) remove the link. Requires gateways tab IA input. | guides (confirmed) + resources (unverified) | HIGH | Publication of all pages referencing this path; cross-tab link integrity |
| BD-TAB-06 | **H3 heading scope for check 3.1 scoring threshold.** Whether H3 headings are in-scope for the 20/25 scoring threshold has produced inconsistent BD entries across guides (staking-and-rewards, deployment-details). This must be decided once, registered in decision-registry.md, and applied uniformly to both sections. Currently blocking heading remediation scope decisions on multiple pages. | guides + resources | HIGH | Consistent check 3.1 application across all 66 pages; heading remediation scope |
| BD-TAB-07 | **Two orchestrators-tab glossary files with no defined scope relationship.** `v2/orchestrators/resources/glossary.mdx` (root subsection, 26 FAILs) and `v2/orchestrators/resources/compendium/glossary.mdx` (AI-generated, explicitly untrusted per checks.mdx §6.7) both exist as orchestrators-specific glossaries. Neither subsection summary resolved whether these have overlapping scope, distinct scope, or one supersedes the other. A third glossary, `v2/resources/livepeer-glossary`, is the authoritative cross-tab source. Until the scope relationship between the two orchestrators-specific files is defined, neither can advance to `veracityStatus: verified` without risk of creating duplicate or contradictory glossary content. (P108 — cross-subsection scope boundary gap, visible only at rollup level.) | resources (cross-subsection) | HIGH | `veracityStatus: verified` for both glossary files; IA integrity of the resources section |
| BD-TAB-08 | **`join-a-pool.mdx` deprecation decision not in decision-registry.md.** The 2026-03-24 session log identifies `new-join-a-pool.mdx` as canonical and `join-a-pool.mdx` as the page to deprecate. Per CLAUDE.md: "Decisions made in chat that are not written to the decision registry do not exist." Both pages remain in docs.json as duplicate sidebar entries. This is a guides-only decision but it blocks all downstream deployment-details work and must be resolved before the section can advance. | guides | HIGH | All `join-a-pool`/`new-join-a-pool` remediation; docs.json duplicate resolution |

---

## 3. Cross-Section Patterns

Patterns appearing in BOTH guides and resources sections.

---

### XP-1 — Universal frontmatter taxonomy gap (66/66 pages)

Every page across both sections is missing at least one required taxonomy field. The five most consistently absent fields are `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, and `niche`. In the guides section this is a template-level authoring gap; in the resources section the same omissions are present across all three subsections (root 10/10, technical 5/5, compendium 1/1). This is the highest-frequency finding in the entire check sweep.

Fix pattern: a single batch frontmatter pass across all 66 pages adds the five missing fields. `veracityStatus: unverified` is the only value requiring no editorial judgement — it is the honest value for every page given the volume of open veracity flags across both sections. All other fields require per-page confirmation; values can be proposed and confirmed in one batch sign-off session. The P39 constraint applies to all pages: `veracityStatus: unverified` and `status: draft` must be set as one atomic operation — never split across two separate fix items (P84).

---

### XP-2 — Invalid or wrong-enum `status` values (guides: ~20+ pages; resources: 8+ pages)

Guides: approximately 20+ pages carry `status: published` (not a valid enum — valid values are `current` and `draft`) or `status: current` without `veracityStatus` (P39 incoherent combination). Resources: 7 root pages and cli-flags (technical) carry `status: review` (also not a valid enum value).

Both `published` and `review` are wrong-enum errors. The correct fix in both cases is the P84 atomic operation: change wrong-enum value → `status: draft` AND add `veracityStatus: unverified` in one edit. Multiple check reports across both sections incorrectly cited checks.mdx §1.8 as the basis for the `status: published` violation — §1.8 governs `status: current` + `veracityStatus` coherence only; the `published` and `review` violations are wrong-enum errors under check 1.2, not coherence failures (P90).

---

### XP-3 — Non-canonical FACT CHECK / REVIEW flag format (guides: 8/10 subfolders; resources: multiple pages in root and technical)

The canonical veracity flag format per checks.mdx §6.5 is `{/* REVIEW: [specific claim] — verify against [named source] before publishing */}`. The `{/* FACT CHECK: */}` format is non-canonical and fails check 6.5 regardless of content. Many instances also lack a named source or SME contact, independently failing check 6.9 (P70: both failures are independent and must both be logged). A `{/* FACT CHECK: */}` comment without a named source is simultaneously a check 6.5 FAIL (wrong format) and a check 6.9 FAIL (no concrete next step).

The guides section has approximately 50+ instances across 8 subfolders. The resources section has multiple instances across root and technical subsections. Total count across both sections is unknown until a section-wide search for `FACT CHECK` is run.

---

### XP-4 — Em-dashes in visible text (guides: 8/10 subfolders; resources: root + compendium confirmed)

Em-dash prohibition violations appear across both sections in three distinct locations: (1) frontmatter `description` fields — systematic across at least 6 guides subfolders and root resources; (2) H2/H3 headings — confirmed in at least 5 guides subfolders; (3) body prose and component props (Accordion titles, Card titles, Step titles) — ai-and-job-workloads is the most severe case (all 10 Accordion titles in ai-inference-operations).

P30 is an absolute prohibition covering all visible text. Em-dashes do not fail check 2.4 (banned constructions) — they fail check 1.11 (description field), check 3.7 (heading text), or as a standalone P30 finding in prose and component props (P62). BORDERLINE is not a valid result for P30 violations — P30 is binary: PASS or FAIL (P97). Proposed fix text must itself be verified em-dash-free before applying (P44, P75) — multiple check reports across both sections proposed replacements that introduced new em-dashes.

---

### XP-5 — Navigation orphans and unresolved page disposition (guides: 6 pages; resources: 6 orphans + 1 dead nav entry + 1 incomplete stub)

Both sections contain pages with unresolved navigation status blocking all content-check work:

**Guides orphans (6):** byoc-cpu-tutorial (registered under gateways tab only — CRITICAL navigation orphan); dep-guide (dep-prefix, absent from docs.json, 11 broken internal links); tutorial-byoc-cpu-pipeline stub, tutorial-go-production stub, tutorial-offchain-transcoding-test stub (all absent from docs.json; gateway equivalents exist); join-a-pool.mdx (duplicate docs.json entry alongside new-join-a-pool.mdx — BD-TAB-08).

**Resources orphans/dead entries (8):** x-guides, x-help, x-payments (root — not in docs.json; x-guides contains active curated content); x-changelog, x-support-status, x-troubleshooting (technical — not in docs.json); x-contract-addresses (technical — in docs.json but empty stub, creates dead nav entry — P104 "CRITICAL: x-PREFIXED STUB IN ACTIVE NAV"); community-pools (root — in docs.json but href="#" dead link, functionally incomplete).

Per P94: navigation orphan status must be established before category analysis. Per P95: content overlap between sibling pages (x-troubleshooting vs. guides/monitoring-and-tooling/troubleshooting) is a blocking decision, not a medium finding.

---

### XP-6 — Heading quality failures — `## See Also` / `## See also` (resources: 8/10 root pages; guides: not identified as section-level pattern but present)

Eight of ten root resources pages carry `## See Also`, which is Banned-tier per checks.mdx §4.1 and P53. The guides section has equivalent heading quality failures across 9/10 subfolders (question-form headings, reader-perspective retrospective headings, generic structural labels). The fix for `## See Also` is mechanical: rename to `## Related` (OK-tier per P55) or a domain-specific heading. `## Related`, `## Related Pages`, and `## Related pages` all pass check 3.2 (P55) — they may independently fail check 3.1 if the rubric score falls below 20/25.

---

## 4. Remediation Roadmap

Sequenced work packages across the full 66-page scope. Packages within the same tier can run in parallel once their preconditions are met.

---

**Package 0 — No-dependency fixes (run immediately)**

No human decisions required before these execute.

- Remove corrupt prefix bytes from `operator-rationale.mdx` lines 1–2 (guides/operator-considerations — confirmed CRITICAL render risk)
- Fix RTX 2060 base VRAM factual error in `dual-mode-configuration.mdx` (guides/deployment-details — NVIDIA datasheet confirms 6 GB; stated 8–12 GB)
- Fix RTMP port error in `gateway-orchestrator-interface.mdx` (guides/advanced-operations — `:7935` → `:1935`)
- Register `join-a-pool.mdx` deprecation in decision-registry.md (BD-TAB-08 — this is a registration step, not content execution; action: write the existing session log decision to the registry)
- Fix `purpose: evaluation` → `purpose: evaluate` on three operator-considerations pages (one-line fix, value already decided)
- Rename `## Related pages` → `## Related Pages` across all instances in both sections (mechanical capitalisation; `Related Pages` passes check 3.2 per P55)
- Fix `## See Also` → `## Related` (or domain-specific heading) on 8 root resources pages (XP-6)
- Fix description separator ` - ` → `: ` on roadmap-and-funding pages (guides)
- Remove `Recommendation:` line from BD-1 in compendium/glossary check report (P68 violation — report fix, not content fix)

*Estimated pages affected: ~15 pages (content edits); registration steps: 0 pages*

---

**Package 1 — Blocking decisions (precondition for Packages 2–6)**

These are decisions, not content changes. No content work should begin on affected pages until these are resolved.

- BD-TAB-03: Batch status demotion decision (demote all `status: current/published/review` + add `veracityStatus: unverified` now, or per-page)
- BD-TAB-06: H3 heading scope decision for check 3.1 — register in decision-registry.md
- BD-TAB-07: Scope relationship between `resources/glossary.mdx` and `resources/compendium/glossary.mdx` — define before either advances to verified
- BD-GUIDES-07: Tutorials orphan dispositions (4 files: likely 3 deletions + 1 rewrite decision)
- BD-RES-01 through BD-RES-06: All six x-prefix and incomplete-stub disposition decisions in resources (x-contract-addresses, community-pools, x-help, x-payments, x-guides, and the x-changelog/x-support-status/x-troubleshooting trio in technical)

*Estimated pages affected: 0 (decisions only) — unlocks all subsequent packages*

---

**Package 2 — Status field batch pass (requires BD-TAB-03; parallel with Package 1 decisions)**

Single search-and-replace across all 66 pages. No per-page editorial judgement needed for status and veracityStatus fields.

- Replace all `status: published` → `status: draft` (guides: ~15–20 pages; resources: 0 known)
- Replace all `status: review` → `status: draft` (resources: 8 pages)
- Replace all `status: current` without `veracityStatus` → `status: draft` + `veracityStatus: unverified` (guides: ~12 pages)
- Apply `veracityStatus: unverified` atomically with all status changes (P84: never split this into two operations)

*Estimated pages affected: ~35 pages across both sections*

---

**Package 3 — Purpose field decision matrix (parallel with Package 2; requires human sign-off)**

Produce a single decision table: one row per affected page showing current wrong value and proposed canonical replacement. Request batch sign-off in one session across both sections.

- `purpose: guide` replacement values for 14+ guides pages across 7 subfolders (BD-TAB-04)
- `purpose: faq` for faq.mdx (resources root) — proposed: `troubleshoot` or `reference`
- `purpose: landing` for x-help.mdx, x-payments.mdx (resources root — conditional on disposition BDs from Package 1)
- `purpose: operations` for x-support-status.mdx (resources technical) — proposed: `operate`; apply check 1.4 only, not check 5.7 (P105)

After sign-off: apply all purpose field replacements across both sections in one pass.

*Estimated pages affected: ~18+ pages across both sections*

---

**Package 4 — Frontmatter completion batch (depends on Packages 2 and 3)**

Add all missing required taxonomy fields to all 66 pages. Proposed values for most pages already exist in subfolder summaries.

- Fields to add: `complexity`, `lifecycleStage`, `industry`, `niche` per page (values require per-page human confirmation — produce single confirmation table for batch sign-off)
- Priority order: active pages first; orphan/stub pages conditional on Package 1 disposition decisions

*Estimated pages affected: 66 pages (all pages in both sections)*

---

**Package 5 — Critical navigation fixes (parallel with Packages 2–4; some require Package 1)**

- Execute join-a-pool deprecation per registered decision (Package 0 registration + BD-GUIDES-08 precondition)
- Execute tutorials orphan dispositions per BD-GUIDES-07 (Package 1 precondition): 4 files
- Resolve x-contract-addresses dead nav entry: remove from docs.json (lowest-friction option) or build content (BD-RES-01)
- Fix community-pools href="#" dead link per BD-RES-02 decision
- Fix 4 broken internal links in orchestrator-transcoder-setup (typo fix is immediate; 3 require BD-DD-09 from guides/deployment-details summary)
- Resolve BD-TAB-05: broken cross-tab link to `/v2/gateways/resources/technical/orchestrator-offerings` (run section-wide search first; fix after gateways tab input)
- Fix broken cross-tab link to `/v2/lpt/delegation` (staking-and-rewards/delegate-operations)
- Fix broken cross-tab link to `/v2/lpt/` at LPT acquisition step in tutorials/zero-to-first-reward
- Fix v1 image paths in network-participation (staking-and-rewards): `/v1/images/` paths create silent 404s
- Resolve Livepeer Forum offline status section-wide after section-wide search (BD-TAB-02)

*Estimated pages affected: ~15 pages (content and nav changes)*

---

**Package 6 — FACT CHECK conversion and REVIEW flag pass (depends on Package 4)**

Section-wide inventory of all `{/* FACT CHECK: */}` comments across all 66 pages (estimate: 50+ in guides, additional instances in resources). Convert each to canonical format: `{/* REVIEW: [specific claim] — verify against [source]. [Name] to confirm. */}`. Add inline REVIEW flags to unverified claims currently lacking any flag.

Named SME contacts from section summaries: Rick (go-livepeer source, Prometheus metrics, NVENC caps, active set size, Loki endpoint), Mehrdad (protocol parameters, reward gas costs), protocol data sources (Arbiscan, Livepeer Explorer). For resources: LPT contract address verification (Arbiscan — financial-risk, BD-RES-03).

*Precondition:* Package 4 complete (`veracityStatus: unverified` set on all pages — frontmatter is honest before REVIEW flags are set)
*Estimated pages affected: ~40+ pages across both sections*

---

**Package 7 — SME verification pass (depends on Package 6)**

Execute coordinated SME reviews. Package 6 produces executable REVIEW flags with named sources — this package acts on them.

Joint verification items spanning both sections:
- VRAM canonical values (BD-TAB-01): SME review of model-demand-reference (guides) and gpu-support (resources) as joint session
- VRAM / NVENC / CUDA figures in resources/gpu-support (BD-RES-10): coordinate with guides VRAM pass
- LPT contract address `0x289ba1701C2F088cf0faf8B3705246331cB8A839` in arbitrum-exchanges.mdx — verify against Arbiscan (financial-risk, BD-RES-03)
- Prometheus metric names verified against `go-livepeer/monitor/census.go` (monitoring-and-tooling)
- go-livepeer CLI flags verified against current release (deployment-details and tutorials)
- Active set size "top 100" confirmed (monitoring-and-tooling)
- Compendium/glossary term-by-term cross-check against `v2/resources/livepeer-glossary` (BD-RES-11)

*Precondition:* Package 6 complete (all veracity flags in canonical format with named sources)
*Estimated pages affected (unblocked by SME confirmation): ~25 pages across both sections*

---

**Package 8 — Em-dash, heading, and voice remediation (parallel with Package 7; independent)**

Three-pass em-dash fix across both sections: (1) frontmatter description fields, (2) H2/H3 heading text, (3) component props (Accordion titles, Card titles, Step titles, Tab labels). Each instance requires a specific structural fix — bulk replacement is not safe. All proposed replacements must themselves be verified em-dash-free before applying (P75).

Heading remediation: prioritise Avoid-tier first (`## Summary`, `## Next Steps`, `## Introduction`, `## Overview`), then sub-20/25 headings per subfolder summaries. `## Related`, `## Related Pages`, `## Related pages` pass check 3.2 — do not rename.

Voice remediation: banned words and banned constructions per subfolder summaries. Note: em-dashes alone do not fail check 2.4 (P62) — route em-dash findings to check 1.11 (description), check 3.7 (headings), or P30 findings, not check 2.4.

*Precondition:* Package 4 complete (frontmatter settled — pageType/purpose correct for heading template rules)
*Estimated pages affected: ~45 pages across both sections*

---

**Package 9 — Layout and component hygiene (depends on Package 8)**

- Dead import removal section-wide across both sections: `LinkArrow`, `BorderedBox`, `StyledTable`/`TableRow`/`TableCell`, `ScrollableDiagram`, `CenteredContainer`, `Quote` (confirmed in 6+ guides subfolders)
- Overlong description fields trimmed to ≤160 chars across both sections (guides: 7+ subfolders affected; resources: present in root and compendium)
- `keywords` field updates — defer until content pass complete; flag as layout pass item
- Compendium glossary H2 heading renames (AI Terms, Video Terms, Web3 Terms, Technical Terms)
- Fix OG image SVG → PNG on x-contract-addresses and x-troubleshooting (resources technical — joint fix, P88)
- Fix audience token on compendium/glossary.mdx: `orchestrator-operator` → `orchestrator`

*Precondition:* Package 8 (em-dash clean on descriptions reduces rework in description trimming)
*Estimated pages affected: ~30 pages across both sections*

---

**Package 10 — veracityStatus promotion (sequential — depends on all prior packages)**

Per-page promotion from `veracityStatus: unverified` → `veracityStatus: verified` once all REVIEW flags are resolved, SME sign-off is obtained, and all content checks pass. Per-page `status: draft` → `status: current` follows verification confirmation.

*Precondition:* Package 7 complete for each individual page*
*Estimated pages affected: all active pages in both sections (conditional on prior packages)*

---

## 5. Outstanding Human Decisions Required

Ordered by urgency: BLOCKING PUBLICATION → BLOCKING VERACITY → STRUCTURAL → COSMETIC

| ID | Decision | Affects | Urgency |
|---|---|---|---|
| BD-TAB-01 | VRAM canonical source: SME confirms figures; one canonical VRAM page per section | guides (4 subfolders, ~20 pages) + resources/gpu-support | BLOCKING PUBLICATION |
| BD-TAB-02 | Livepeer Forum offline: remove all references or replace with confirmed alternative | guides/monitoring-and-tooling + resources (scope unknown until search runs) | BLOCKING PUBLICATION |
| BD-TAB-03 | Batch status demotion: demote all wrong-enum/incoherent status fields now vs. per-page as veracity pass proceeds | guides (~35 pages) + resources (~8 pages) | BLOCKING PUBLICATION |
| BD-RES-01 | x-contract-addresses: remove from docs.json nav OR build the content page | resources/technical (dead nav entry) | BLOCKING PUBLICATION |
| BD-RES-02 | community-pools: implementation method (Google Sheets / static list / consolidate into community-guides) | resources/root | BLOCKING PUBLICATION |
| BD-RES-03 | LPT contract address verification — verify `0x289ba1701C2F088cf0faf8B3705246331cB8A839` against Arbiscan before any further work on arbitrum-exchanges.mdx | resources/root (financial-risk) | BLOCKING PUBLICATION |
| BD-RES-04 | x-help disposition: activate or archive | resources/root | BLOCKING PUBLICATION |
| BD-RES-05 | x-payments disposition: activate or archive; TYPE-CONFUSION on `pageType: overview` requires human decision (P107) if activating | resources/root | BLOCKING PUBLICATION |
| BD-RES-06 | x-guides disposition: activate or archive; if activate, resolve content overlap with community-guides.mdx | resources/root | BLOCKING PUBLICATION |
| BD-TAB-05 | Broken cross-tab link `/v2/gateways/resources/technical/orchestrator-offerings`: create target / redirect / remove | guides/ai-and-job-workloads + potentially resources | BLOCKING PUBLICATION |
| BD-GUIDES-07 | Tutorials orphans: byoc-cpu-tutorial + 3 stubs — likely 3 deletions + 1 rewrite decision | guides/tutorials (4 files) | BLOCKING PUBLICATION |
| BD-TAB-08 | Register join-a-pool deprecation in decision-registry.md (decision already made in session log — write to registry) | guides/deployment-details | BLOCKING PUBLICATION |
| BD-RES-07 | x-changelog disposition: activate or archive | resources/technical | BLOCKING VERACITY |
| BD-RES-08 | x-support-status disposition: activate or archive | resources/technical | BLOCKING VERACITY |
| BD-RES-09 | x-troubleshooting disposition: activate or archive; if activate, resolve overlap with guides/monitoring-and-tooling/troubleshooting.mdx | resources/technical | BLOCKING VERACITY |
| BD-TAB-07 | Scope relationship between `resources/glossary.mdx` and `resources/compendium/glossary.mdx` — define before either advances to verified | resources/root + resources/compendium | BLOCKING VERACITY |
| BD-TAB-04 | `purpose: guide` replacement matrix: produce decision table, get one batch sign-off across both sections (~18+ pages) | guides (7 subfolders) + resources/root | BLOCKING VERACITY |
| BD-TAB-06 | H3 heading scope for check 3.1 threshold: decide once, register in decision-registry.md | guides + resources (all pages) | BLOCKING VERACITY |
| BD-RES-10 | VRAM / NVENC / CUDA joint verification for gpu-support.mdx and cross-referenced setup/requirements pages | resources/root | BLOCKING VERACITY |
| BD-RES-11 | Compendium/glossary cross-check against `v2/resources/livepeer-glossary` — assign ownership | resources/compendium | BLOCKING VERACITY |
| BD-RES-12 | cli-flags TODO block (lines 25–46): execute TODO items or convert to `{/* REVIEW: */}` format | resources/technical | BLOCKING VERACITY |
| BD-GUIDES-03 | roadmap-and-funding stubs: move to `_workspace/` or hold as minimal shell | guides/roadmap-and-funding | STRUCTURAL |
| BD-GUIDES-02 | payments-and-pricing nav group mismatch: both files registered under "Staking and Earning" nav group, not payments-and-pricing | guides/payments-and-pricing | STRUCTURAL |

---

## 6. Out-of-Scope Sections (not covered by this check sweep)

The following Orchestrators sections were not part of this check sweep. Each will require the same check pipeline process before the full Orchestrators tab can be assessed:

- `v2/orchestrators/concepts/` — not checked
- `v2/orchestrators/setup/` — not checked
- `v2/orchestrators/quickstart/` — not checked
- Root-level pages (`v2/orchestrators/portal.mdx`, `v2/orchestrators/navigator.mdx`, `v2/orchestrators/index.mdx`) — not checked

The REVIEW-REGISTRY.md session notes (2026-03-24) flag tab-level gaps in the checked sections: no cross-tab links to `/v2/about/` or `/v2/delegators/` exist in the guides or resources sections; Concepts and Resources sections have no routing card from portal/navigator. These gaps will remain unresolvable until the unchecked sections are also assessed.

---

## 7. Learnings Summary

The check sweep across guides and resources generated P1–P108 across 27 batches. Key categories:

**Frontmatter schema errors (P1, P15, P37, P39, P41, P42, P50, P51, P57, P64, P66, P67, P79, P84, P87, P90, P107):**
Every batch surfaced frontmatter failures. The most persistent errors: required fields absent (P1, P41); purpose field carrying a pageType value (P37, P92); wrong-enum status values misidentified as §1.8 coherence violations (P57, P90); the P39 fix being split into two separate items creating a transient incoherent state (P84); type-confusion (`pageType: overview`) conflated with deprecated-alias migration (P87, P107). These patterns did not resolve across 27 batches — they are authoring-template defects, not individual page errors.

**Voice and copy errors (P2, P6, P16, P18, P20, P23, P30, P44, P46, P53, P55, P56, P62, P63, P74, P75, P76, P86, P96, P97, P106):**
Em-dash prohibition (P30) was the most frequently regressed rule in the sweep — violations were consistently missed in description fields and Accordion component props until P74 and P91 added explicit scan targets. Check 3.2 false positives on `## Related` (P55) and question-form headings (P63) inflated failure counts across at least 5 batches. Proposed fix text introducing new violations (P44, P75) was a recurring failure mode in staking-and-rewards and deployment-details batches. Check 2.4 scope confusion — em-dashes routed to check 2.4 rather than P30 — persisted until P62.

**Veracity and content scanning gaps (P12, P19, P29, P33, P47, P61, P70, P77, P88, P93, P98, P99, P101, P102, P103, P105):**
Check 6.5 was the most systematically misapplied check in the sweep. Non-canonical comment formats (`FACT CHECK`, `TODO`) were treated as satisfying the REVIEW flag requirement until P61 defined the only acceptable format precisely. Check 6.3 scope (deprecated API/CLI/SDK only) was repeatedly applied to protocol-state figures until P103. The dual-failure pattern on FACT CHECK comments — check 6.5 (format) and check 6.9 (no named source) are independent failures — was not consistently applied until P70. VRAM inconsistencies across pages were not grouped for joint verification until P88.

**Navigation and structure errors (P7, P25, P33, P47, P71, P72, P73, P94, P95, P98, P99, P100, P104, P108):**
Navigation orphan detection was consistently late in the check process — discovered during category analysis rather than as a pre-check step until P94. The distinction between navigation orphans (file not in docs.json) and dead nav entries (file in docs.json but empty) was not reliably made until P104. Content overlap between sibling pages was logged as medium findings rather than blocking decisions until P95. Cross-subsection scope boundary gaps (two glossary files with no defined relationship) were invisible to per-page and per-subsection agents until P108.

**Process and governance errors (P4, P5, P13, P17, P26, P28, P34, P43, P49, P59, P60, P65, P66, P68, P71, P80, P81, P82, P83, P89):**
Verdict count accuracy (P26, P49) failed to stabilise across the full sweep — counting individual FAIL check IDs rather than categories is the documented rule since Batch 3 but regressed in 9+ batches. Self-correction propagation (P17, P28) — when a narrative self-correction changes a result, all report sections must be updated — was the second most persistent process failure. Finding IDs without concrete actionable fixes (P65, P83) and orphaned findings raised in one section but abandoned in others (P34) recurred in multiple batches. The requirement to read decision-registry.md rather than session logs to determine decision status (P89) was established in Batch 18 after BD-GUIDES-08 was not registered.

---

## 8. Proposed Learnings

The following patterns were identified at this final rollup level and are not captured in P1–P108.

**NEW-P111 — When remediation roadmap packages span two or more sections, packages that operate on the same field or check (e.g., status, veracityStatus, purpose) must be defined once at the tab level, not independently per section.**
The guides section rollup defined a Package 2 (status field batch pass) and the resources section rollup defined CP-2 (status: review atomic fix) independently. An executing agent following both rollups would apply these as separate operations on different pages in the same repo, with no guarantee of consistency or atomicity. When two section rollups share the same fix pattern, the tab-level rollup must consolidate them into a single package with a unified scope: one operation, both sections, all affected pages. This is the correct level of abstraction for cross-section batch operations.

**NEW-P112 — At rollup level, the absence of cross-tab link verification across ALL pages in both sections is a structural gap that per-section rollups cannot close.**
The guides rollup ran a cross-tab link inventory (broken links to gateways and LPT tabs identified). The resources rollup flagged one financial-risk address requiring Arbiscan verification but did not run a systematic cross-tab link inventory of all 16 pages. At tab rollup level, a full cross-tab link audit across all 66 pages — not just the pages where check agents happened to find broken links — is required before any page can advance toward `veracityStatus: verified`. The current rollup cannot confirm the scope of cross-tab link breakage in the resources section. This gap should be flagged as a pre-Package 5 precondition.

---

*End of Orchestrators Documentation — Full Quality Check Rollup*
*Scope: `v2/orchestrators/guides/` + `v2/orchestrators/resources/` — 66 pages across 13 subsections/subfolders*
*Generated: 2026-03-24 | Final rollup agent: Claude Code | Learnings applied: P1–P108*
