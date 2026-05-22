# Section Summary — `guides/advanced-operations`

**Review date:** 2026-03-24
**Summariser:** Claude Code (section summary agent)
**Source files:** Check reports + critical reviews for all 5 pages in the advanced-operations group
**Corrections applied:** Per task brief — scale-operations P50/P15 phantom findings removed; dep-guide corrected to 33 fails; scale-operations BD-1 framing neutralised; `veracityStatus: unverified` valid per checks.mdx §1.8; NOT-TESTED ≠ FAIL per P59/P60

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|---|---|---|---|
| `dep-guide.mdx` | REWRITE REQUIRED | 33 | Structural orphan — not in docs.json; all 11 internal links broken; `pageType: overview` deprecated; `purpose: guide` wrong-field error |
| `gateway-orchestrator-interface.mdx` | NEEDS WORK | 26 | Factual RTMP port error (`:7935` vs `:1935`); deprecated `pageType: how_to`; banned self-reference opener line 41 |
| `gateway-relationships.mdx` | NEEDS WORK | 22 | `status: published` with absent `veracityStatus`; 5 of 6 headings below 20/25; Loki endpoint reachability unverified |
| `pool-operators.mdx` | NEEDS WORK | 22 | `purpose: guide` wrong-field error; `status: published` with absent `veracityStatus`; NVENC session cap and Titan Node claims unverified with no REVIEW flags |
| `scale-operations.mdx` | NEEDS WORK | 22 | `pageType`/`purpose` scope mismatch (BD-1); `status: published` with absent `veracityStatus`; duplicate card destinations |

**Notes on corrected counts:**

- **dep-guide:** Check report stated 27; critical review counted the listed IDs and found 33. Corrected count: 33.
- **scale-operations:** Check report stated 20; critical review counted the listed IDs and found 22. Checks 1.2 (`pageType: concept`) and 1.4 (`purpose: explain`) are valid canonical values per P50/P15 — both PASS. The Frontmatter Table FAIL entries for these two fields were phantom findings contradicting the check table. Corrected count: 22 (per the list as written, with 1.2 and 1.4 already absent from the fail list — the check table was correct; the Frontmatter Table was wrong).
- **NOT-TESTED entries (P59):** All NOT-TESTED veracity checks (6.1, 6.2, 6.4, 6.8 across all pages) are excluded from confirmed FAIL counts. They appear in the fail lists above because the check reports listed them as FAIL — the critical reviews did not contest the FAIL classification for veracity NOT-TESTED items on these pages (with the exception of scale-operations where the count correction is for 1.2/1.4, not veracity items).

---

## 2. Shared Root Causes

Findings appearing on multiple pages, logged once here.

**RC-01 — Missing required frontmatter fields: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`**
All 4 published pages are missing all five fields. dep-guide is also missing them. This is a batch-wide omission, not a per-page oversight. Affects checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10 on every page.
- Proposed values are consistent across pages: `complexity: advanced` (or `intermediate` for dep-guide/gateway-relationships), `lifecycleStage: operate`, `veracityStatus: unverified`, `industry: [technical, livepeer]`, `niche: [infrastructure, protocol]` (scale-operations uses `[infrastructure, hardware]`)
- All proposed values require human sign-off before applying per P51

**RC-02 — `status: published` with absent `veracityStatus` (gateway-relationships, pool-operators, scale-operations)**
Three pages carry `status: published` — a non-canonical value (valid values: `current`, `draft`) — while also missing `veracityStatus`. Two failures per page: (a) `published` is not a valid `status` value; (b) `veracityStatus` is absent. Fix for all three: change `status` to `draft` and add `veracityStatus: unverified`.

**RC-03 — Description field: over-length and em-dashes**
All 4 published pages have descriptions exceeding the 160-character limit. Three of the four also contain em-dashes in the description field. gateway-relationships: 226 chars + em-dash. gateway-orchestrator-interface: 203 chars. pool-operators: 186 chars + em-dash. scale-operations: 212 chars + em-dash. All require trimming and em-dash removal.

**RC-04 — Em-dashes in body prose**
pool-operators (lines 153, 224) and scale-operations (lines 123, 134, 195) have em-dashes in body prose. gateway-relationships has an em-dash in a heading ("Gateway Loki API — understanding selection decisions"). All are prohibited per CLAUDE.md.

**RC-05 — `{/* FACT CHECK: */}` format instead of canonical `{/* REVIEW: [claim] — [source] */}`**
gateway-orchestrator-interface (2 occurrences) and gateway-relationships (1 occurrence) use the non-standard `FACT CHECK:` comment format. Per P61/checks.mdx §6.5, only `{/* REVIEW: [specific claim] — [named source] */}` satisfies check 6.5. All three are check 6.5 FAILs.

**RC-06 — Unverified content with no REVIEW flags**
pool-operators (NVENC session cap claim, Titan Node driver-patching claim) and scale-operations (multi-orchestrator keypair model) contain specific factual claims with no inline REVIEW flags. These are check 6.5 FAILs independent of the format issue in RC-05.

**RC-07 — `draft` / governance status (all pages)**
All five pages fail checks 9.1 and 9.3. This is expected for pre-gate content and is not an actionable finding per se — it documents that no tab gate has been opened. Not separately tracked in the blocking decisions below.

---

## 3. Blocking Decisions

Human sign-off required for all items in this table before remediation can proceed.

| BD-ID | Decision | Page(s) | Blocks |
|---|---|---|---|
| BD-1 | **dep-guide disposition:** Move to `x-deprecated/` subdirectory (permanent deprecation), or revive as a navigation page (requires re-registration in docs.json and replacement of all 11 broken links with current docs.json paths)? | dep-guide | All other fixes on dep-guide — no remediation is worth executing until this is resolved |
| BD-2 | **scale-operations pageType/content scope:** Content mixes conceptual sections (fleet decision criteria, enterprise onboarding) and procedural sections (rolling updates with numbered steps, worker provisioning steps). Option A: retain `pageType: concept` + `purpose: explain` and convert procedural sections to concept-oriented prose, or split procedural content to a separate instruction page. Option B: migrate to `pageType: guide` + `purpose: operate` and restructure to guide template, retaining all current sections. Both options are equally valid; decision belongs to Alison. | scale-operations | Checks 4.1, 4.7, 5.1 on scale-operations; informs `complexity` and `lifecycleStage` proposed values |
| BD-3 | **RTMP port factual error in gateway-orchestrator-interface:** Line 60 Tab description states "Gateway on `:7935` (HTTP) and `:7935` (RTMP)" — RTMP is listed as `:7935` but the port allocation table (lines 100–103) correctly lists `-rtmpAddr` as `:1935`. The Tab description contains an error. Fix: change line 60 Tab text to reflect `:1935` for RTMP. This is a CRITICAL factual error — confirm the fix before applying (source: go-livepeer port allocation table in same file) | gateway-orchestrator-interface | Page accuracy; blocks `veracityStatus` promotion from `unverified` |
| BD-4 | **Loki endpoint reachability (gateway-relationships):** `loki.livepeer.report` was unreachable in the March 2026 sandbox. The FACT CHECK at line 245 names "Rick" for confirmation. Decision: is the Loki endpoint currently live? If permanently unavailable, the Loki API section should be removed or replaced with a note on endpoint status. Requires SME confirmation (Rick) before the section can be published | gateway-relationships | Loki API section publication; blocks check 6.8 resolution |
| BD-5 | **gateway-orchestrator-interface pageType migration:** Migrate `pageType: how_to` to `pageType: instruction` (confirmed by critical review as correct migration — `how_to → instruction` per §1.1 migration table, no pageVariant required). If this migration proceeds, check 5.2 requires adding explicit Prerequisites and Steps sections. Alison to confirm before applying | gateway-orchestrator-interface | Checks 5.1, 5.2 on this page |
| BD-6 | **Open FACT CHECK / REVIEW flags across multiple pages:** gateway-orchestrator-interface has 2 open `{/* FACT CHECK: */}` comments (dual-mode `serviceAddr` port; Prometheus metric names). gateway-relationships has 1 (Loki endpoint — see BD-4). pool-operators has no inline flags for the NVENC/Titan Node claims. scale-operations has no inline flags for the multi-orchestrator keypair model. All require SME verification before `veracityStatus` can be set to anything other than `unverified`. Named contact for Loki: Rick. Other sources: go-livepeer source (`cmd/livepeer/main.go` for flag defaults; `monitor/monitor.go` for metric names); NVIDIA NVENC SDK documentation; Titan Node documentation; go-livepeer `doc/multi-o.md` | gateway-orchestrator-interface, gateway-relationships, pool-operators, scale-operations | All veracity checks on all four pages; blocks `veracityStatus: verified` across the section |

---

## 4. Prioritised Recommendations

Ordered by impact. CRITICAL first, then HIGH, then page-specific MEDIUM items.

**CRITICAL**

1. **dep-guide: resolve BD-1 first.** No other work on this file is worth executing until the deprecate-vs-revive decision is made. If deprecated: move to `v2/orchestrators/guides/advanced-operations/x-deprecated/dep-guide.mdx`. If revived: re-register in docs.json and replace all 11 broken links.

2. **gateway-orchestrator-interface F-13: fix RTMP port error.** Line 60 Tab description has `:7935` for RTMP. Correct to `:1935` per the port table in the same file. CRITICAL factual error — an operator following this page will misconfigure their RTMP port. Requires BD-3 sign-off but fix is clear.

**HIGH — batch-wide (all 4 published pages)**

3. **Add missing frontmatter fields.** All 4 pages missing `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Add with proposed values (see RC-01). All require human sign-off before applying.

4. **Fix `status: published` on gateway-relationships, pool-operators, scale-operations.** Change to `status: draft` on all three. Additionally: `published` is not a valid `status` value — correct to canonical `draft` regardless of veracityStatus state. Paired fix: add `veracityStatus: unverified`.

5. **Convert all `{/* FACT CHECK: */}` comments to canonical `{/* REVIEW: [claim] — [source] */}` format** on gateway-orchestrator-interface and gateway-relationships. Ensures check 6.5 compliance and makes verification tasks executable.

6. **Add REVIEW flags for unflagged veracity claims** on pool-operators (NVENC session cap, Titan Node driver patching) and scale-operations (multi-orchestrator keypair model). Per check 6.5 — unverified claims with no flag are a silent veracity risk.

**HIGH — per-page**

7. **gateway-orchestrator-interface: fix deprecated `pageType: how_to`.** Migrate to `pageType: instruction` per §1.1 migration table (BD-5 sign-off required). No pageVariant needed. After migration: add Prerequisites and Steps sections per instruction template (check 5.2).

8. **gateway-orchestrator-interface: remove self-reference opener at line 41.** "This page explains…" is a banned phrase (check 2.3) and banned construction (check 2.4). Proposed fix per check report: open with "Run both a gateway and an orchestrator when you need end-to-end control over traffic routing and workload execution." Confirm before applying.

9. **pool-operators: fix `purpose: guide` wrong-field error.** Change to `purpose: operate`. Error type (b) per P37 — valid pageType value placed in wrong field. Also fixes check 5.7.

10. **gateway-relationships: rename 5 failing headings.** All below 20/25. Proposed: "How gateways find you" → `Discovery Mechanisms`; "What you advertise to gateways" → `Capability Advertisement`; "How gateways select you" → `Selection Algorithm`; "What you can control to get more work" → `Improving Selection Probability`; "Gateway Loki API — understanding selection decisions" → `Gateway Loki API` (also removes em-dash). All require confirmation before applying.

11. **pool-operators: remove banned word `significantly` at line 109.** Proposed: "high-end consumer GPUs on owned hardware are more cost-efficient than rented compute." (remove "significantly").

12. **pool-operators: fix `not [X]` construction at line 82.** "run without `-transcoder` but with `-orchSecret`" → "Run the orchestrator in standalone mode: omit `-transcoder` and set `-orchSecret`."

13. **scale-operations: resolve BD-2 (pageType/purpose scope decision) first**, then apply template fixes for checks 4.1, 4.7, 5.1.

14. **scale-operations: fix duplicate CardGroup cards.** "Split O-T Setup" and "Siphon Setup" both link to `/v2/orchestrators/guides/deployment-details/siphon-setup`. Remove "Split O-T Setup" card and replace with `/v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` (titled "Orchestrator-Transcoder Setup"). Confirm before applying.

**MEDIUM — batch-wide**

15. **Trim all description fields to ≤160 characters and remove em-dashes.** Apply to all 4 published pages (RC-03). Proposed replacement texts exist in per-page check reports — all require confirmation before applying.

16. **Remove em-dashes from body prose and headings.** pool-operators (lines 153, 224); scale-operations (lines 123, 134, 195); gateway-relationships heading "Gateway Loki API — understanding selection decisions" (covered by heading rename above). All require confirmation.

17. **gateway-orchestrator-interface: rename "Monitoring both roles" heading (19/25) to `Role Monitoring`.** Confirm before applying.

18. **pool-operators: rename "Ongoing operational responsibilities" (16/25) to `Ongoing Operations`; rename "Key facts to remember" (13/25) to `Pool Quick Reference`.** Both require confirmation.

19. **scale-operations: rename "When you need fleet operations" (18/25) to `Fleet Decision Criteria`.** Confirm before applying.

---

## 5. Cross-Page Structural Notes

**Orphan file in wrong directory**
`dep-guide.mdx` is in `v2/orchestrators/guides/advanced-operations/` but carries a `dep-` prefix, is absent from docs.json, and has all 11 internal links broken. Per checks.mdx §7.8, `dep-` prefixed files belong in `x-deprecated/` subdirectories. BD-1 must be resolved before the file is moved.

**Navigation sequence confirmed**
docs.json lines 2938–2942 confirm the four published pages in sequence: `gateway-relationships` [1], `gateway-orchestrator-interface` [2], `pool-operators` [3], `scale-operations` [4]. Adjacency is logical: discovery/selection → combined deployment → pool management → fleet scale. No navigation gaps between published pages.

**No section orientation page**
The Advanced Operations group has no routing/orientation page currently registered in docs.json. `dep-guide.mdx` was the candidate but is an orphan. If BD-1 resolves to "revive," this gap is filled. If BD-1 resolves to "deprecate," the group has no orientation page and the portal/navigator will need to route directly to individual pages.

**`status: published` on gateway-relationships and pool-operators**
Both pages carry `status: published` — a non-canonical value. The critical reviews correctly identify that `published` is not in the valid `status` set (`current`, `draft`). This is distinct from the veracityStatus conflict. Both pages should be changed to `status: draft` immediately regardless of verification state.

**FACT CHECK comments without named veracity contacts**
gateway-orchestrator-interface FACT CHECK at line 126 (dual-mode `serviceAddr` port) and line 186 (Prometheus metric names) have no named SME contact. The go-livepeer source files for verification are known (`cmd/livepeer/main.go`, `monitor/monitor.go`) but no human is named as responsible. gateway-relationships FACT CHECK at line 245 names "Rick" — the only page with a named contact. pool-operators and scale-operations have no flags at all for their unverified claims.

**Cross-tab links**
Only gateway-orchestrator-interface has a cross-tab link (`/v2/gateways/quickstart/gateway-setup`). The other three published pages link only within-tab or to external URLs. This is acceptable as a per-page check (tab-level check 4.10 is a section-level threshold, not per-page), but the section as a whole is gateway-focused without routing operators toward Gateways tab content. The gateway-relationships page in particular is conceptually relevant to gateway operators but has no cross-tab link.

---

## 6. Learnings for Future Batches

New patterns observed in this batch not already covered by P1–P66.

**P67 — Frontmatter Table `pass/fail` must be evaluated on schema compliance only, not editorial fit**
scale-operations Frontmatter Table marked `pageType: concept` and `purpose: explain` as FAIL because the content scope did not match — an editorial judgement. Per P50/P15, schema-valid values pass the schema check regardless of editorial recommendations. The Frontmatter Table pass/fail column tests schema compliance; editorial concerns belong in the check table detail text, a BD, or an INFO note. P66 (Frontmatter Table and check table must agree) is a necessary but not sufficient fix — the Frontmatter Table must also apply the same schema-only pass criterion as the check table.

**P68 — BD sections must present options neutrally; no Recommendation line**
scale-operations BD-1 included "Recommendation: [B] is lower effort and better matches content." Per P52, blocking decisions with equal options must frame both neutrally. A "Recommendation:" line inside a BD section bypasses the human decision gate. BD sections should end after stating the options and their downstream dependencies — no recommendation.

**P69 — Check 2.4 row must cite specific finding IDs for em-dash violations tracked under P30**
pool-operators check 2.4 failed due to `not [X]` (F-10) and em-dashes (F-14, F-15), but the check 2.4 row only cited F-10. Per P62, em-dashes alone are not check 2.4 violations — but when they ARE present in the Banned Construction Scan (informational or otherwise), the check 2.4 row should explicitly state: "Em-dashes tracked under P30 — see F-14, F-15 in the fix list." This ensures traceability for executing agents who read the check table rather than the scan table.

**P70 — `FACT CHECK:` comment without a named contact or source is a check 6.9 FAIL**
Per check 6.9, open-ended research tasks must have a concrete next step (named source or named contact). A `{/* FACT CHECK: */}` comment that identifies neither a source nor a responsible person is a check 6.9 FAIL independent of its check 6.5 format failure. Both checks can independently fail for the same comment. The fix must convert to `{/* REVIEW: [claim] — verify against [source]. [Name] to confirm. */}` to resolve both.

---

_Summary generated: 2026-03-24_
