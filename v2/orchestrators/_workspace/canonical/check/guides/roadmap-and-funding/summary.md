# Section Summary — `roadmap-and-funding`

**Subfolder:** `v2/orchestrators/guides/roadmap-and-funding/`
**Pages checked:** `funding-and-support.mdx`, `orchestrator-profiles.mdx`
**Check batch:** Batch 6 (P1–P54 applied)
**Critical reviews applied:** Yes — all corrected findings below supersede original check findings
**Summary date:** 2026-03-24

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|---|---|---|---|
| `funding-and-support.mdx` | NEEDS WORK | 23 | Missing 6 required frontmatter fields; stub with visible placeholder Note in publishable lane; banned constructions in `<Note>` callout and description |
| `orchestrator-profiles.mdx` | NEEDS WORK | 24 | Same frontmatter gaps as above; sidebarTitle uses `Operator Profiles` (wrong domain term); stub in publishable lane; identical banned construction pattern |

**Note on corrected counts:** The critical review for `funding-and-support` confirmed the original 23-count is correct (check 2.3 FAIL stands on the `once [condition]` ground alone; detail text clarification only, not a count change). The critical review for `orchestrator-profiles` corrected check 3.2 from FAIL to PASS (detail text concluded PASS; result column was wrong); the 24-count in the verdict list is correct and internally consistent once the check table is corrected.

---

## 2. Shared Root Causes

Both pages share the same structural state and failure pattern. Log once; applies to both.

**RC-A: Six required frontmatter fields absent**
`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all missing on both pages. Accounts for checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6 failing on both pages. All proposed values require human confirmation before applying.

**RC-B: Stub pages in publishable lane with visible placeholder Note callouts**
Both pages are registered in docs.json navigation and carry a rendered `<Note>This draft will [verb]…</Note>`. Per checks.mdx §8.6 and §7.7, placeholder content belongs in `_workspace/`, not the publishable lane. Affects checks 5.1, 5.2, 7.5, 7.7, 8.6 on both pages.

**RC-C: Banned constructions in Note callout and description field**
Both pages share identical banned construction patterns: (1) ` - ` used as clause separator in the `description` field (em-dash equivalent, CLAUDE.md); (2) `This draft will [verb]…` self-referential opener in the `<Note>` (banned construction, check 2.4, not check 2.3); (3) `once [condition]` in the `<Note>` (banned phrase, Frameworks.mdx §3.2, check 2.3). All three appear in text visible to users.

**RC-D: Open-ended research dependencies with no named owner**
Both pages carry embedded MDX comments with `STATUS: STUB - write when [X] available` and no named owner, timeline, or concrete next step. Affects check 6.9 on both pages.

**RC-E: Keywords all generic**
`livepeer` and `orchestrator` appear in both keyword lists without specificity. Check 1.13 fails on both. Keywords cannot be finalised until content is written; treat as deferred, not blocking.

**RC-F: No onward navigation or cross-tab links**
Both stubs have no cards, links, or Related Pages. Dead ends for any reader who arrives. Affects checks 4.4, 4.10, 7.5, 7.6 on both pages. Resolves when content is written.

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|---|---|---|---|
| BD-RFG-01 | Stub in publishable lane: [A] keep in docs.json nav, remove Note, leave minimal shell until content is ready; or [B] remove from docs.json nav, move to `_workspace/drafts/`, re-add when content is ready | Both | All content checks; check 7.7, 8.6, 5.1, 5.2 remediation |
| BD-RFG-02 | `funding-and-support`: SPE grant programme details — content cannot be written until SPE programme details are confirmed for publication. Needs a named owner and timeline logged in `blocking-items.md` | `funding-and-support` | Content writing; all content-level checks |
| BD-RFG-03 | `orchestrator-profiles`: operator profiles source material — content cannot be written until operator profile source material is available. Needs a named owner and timeline logged in `blocking-items.md` | `orchestrator-profiles` | Content writing; all content-level checks |
| BD-RFG-04 | `orchestrator-profiles` pageType: current value is `guide`; planned content (operator profiles, case studies, community highlights) may fit `resource` (curated discovery) better. [A] keep `guide` — schema-valid, no migration needed; [B] change to `resource` with `pageVariant: knowledge-hub` — different template requirements apply | `orchestrator-profiles` | Frontmatter taxonomy; template checks 5.1, 5.2 |
| BD-RFG-05 | All proposed frontmatter values (`purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`) are inferred, not confirmed. Require human sign-off before applying. Proposed values: `purpose: evaluate`, `complexity: beginner`, `lifecycleStage: evaluate`, `veracityStatus: unverified`, `industry: [business, livepeer]` (funding) / `[livepeer, technical]` (profiles), `niche: [protocol, infrastructure]` (both) | Both | RC-A remediation |

---

## 4. Prioritised Recommendations

**CRITICAL — none.** Both pages are stubs. No body prose exists to contain CRITICAL-severity content errors. All failures are structural, taxonomic, or process-level.

**HIGH**

1. **Both pages — Fix `description` field separator.**
   - `funding-and-support`: replace ` - ` with `: ` in description. Proposed: `Funding programmes, grants, and community resources for Livepeer orchestrator operators: SPE grants and the AI Video Startup Programme.`
   - `orchestrator-profiles`: replace ` - ` with `: ` in description. Proposed: `Active orchestrator operators on the Livepeer network: who is operating, what they have built, and community highlights.`
   - Executable without human confirmation. Addresses RC-C (F-01 on both pages).

2. **`orchestrator-profiles` — Fix sidebarTitle terminology inconsistency.**
   - Change `sidebarTitle: 'Operator Profiles'` to `sidebarTitle: 'Orchestrator Profiles'`.
   - `orchestrator` is the locked domain term per CLAUDE.md. `operator` is not an approved standalone label for this audience.
   - Executable without human confirmation. Addresses check 2.11 FAIL.

3. **Both pages — Resolve BD-RFG-01 (publishable lane decision).**
   - Requires Alison sign-off. Whichever option is chosen (keep in nav / move to `_workspace/`), removes Note callout and its banned constructions, resolves checks 5.1, 5.2, 7.5, 7.7, 8.6 in one move.

**MEDIUM**

4. **Both pages — Add missing frontmatter fields (RC-A).**
   - Requires human confirmation on values (BD-RFG-05). Once confirmed, add: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` to both pages.
   - Resolves checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6 on both pages.

5. **Both pages — Log stub dependencies in `blocking-items.md`.**
   - `funding-and-support`: log `STATUS: STUB - write when SPE details available` with named owner (BD-RFG-02). Remove the MDX comment from the page.
   - `orchestrator-profiles`: log `STATUS: STUB - write when operator profiles available` with named owner (BD-RFG-03). Remove the MDX comment from the page.
   - Resolves check 6.9 on both pages and removes un-owned open dependencies from page files.

**INFO — deferred until content is written**

6. **Both pages — Update keywords to searcher-intent-specific values.**
   - Cannot be finalised until content is written. Current proposals are starters only.
   - Resolves check 1.13. Deferred.

7. **Both pages — Add onward navigation and cross-tab links.**
   - Cannot be added until content and cross-tab targets are confirmed.
   - Resolves checks 4.4, 4.10, 7.5, 7.6. Deferred.

---

## 5. Cross-Page Structural Notes

**Identical stub pattern.** Both pages share the same Note callout structure, the same ` - ` separator in description, the same open-ended `STATUS: STUB` MDX comment, and the same missing frontmatter fields. They were built from the same template. All structural fixes should be batched together.

**Terminal section with no routing entry.** The Roadmap and Funding section has no orientation page (section portal or navigator). Both pages are content-level guides within a group that has no entry-point page routing readers to them. This is a section-level gap separate from the per-page issues. Not owned by either page; flag to the tab-level IA review.

**Cross-tab references planned but not implemented.** Both pages' MDX comments note planned cross-tab links:
- `funding-and-support` → `Gateway Tab > Roadmap & Funding > Operator Support` and `LPT Tab > Treasury > Proposals`
- `orchestrator-profiles` → `Resources > Community Pools` and `Resources > Community Guides`
None are implemented. When content is written, these cross-tab links must be actioned. The planned cross-refs to LPT Tab and Gateway Tab are confirmed cross-tab journey intersections — they are in scope for check 4.10 remediation.

**pageType ambiguity on `orchestrator-profiles`.** The planned content (operator profiles, case studies, community highlights) is curated discovery content — closer to `resource` than `guide`. This is an editorial question, not a schema failure. Requires human decision (BD-RFG-04) before template and required sections can be finalised.

---

## 6. Learnings for Future Batches

The following patterns appeared in this batch's checks or critical reviews that are not already captured in learnings.md P1–P57.

**L-NEW-01: Stub pages produce near-identical check report structures — batch them.**
When two pages in the same subfolder are stubs with the same structural pattern, the check reports are structurally redundant. A single stub-pattern check protocol applied to both simultaneously would be more efficient than two full 9-category reports. Recommendation: add a stub fast-path to the check prompt that skips N/A category analysis and focuses on frontmatter, lane placement, and dependency logging.

**L-NEW-02: `once [condition]` in check 2.3 vs `This [noun] will [verb]` in check 2.4 — clarify split.**
Both reports mis-assigned the `This [noun] will [verb]` self-referential opener to check 2.3 (banned phrases) before the critical review corrected it to check 2.4 (banned constructions). P56 was added to learnings.md in Batch 7 to cover this exact pattern. However, both check reports in this batch were already assigned the violation to 2.3 — meaning P56 was not yet in the prompt when these reports were written. Confirm P56 is in the Batch 7 prompt before the next run.

**L-NEW-03: Critical review rating NEEDS REWORK vs MOSTLY RELIABLE — use consistently.**
The funding-and-support critical review rated the check report MOSTLY RELIABLE (3 issues, none CRITICAL-severity). The orchestrator-profiles critical review rated its check report NEEDS REWORK (6 issues including 2 HIGH-severity). The NEEDS REWORK trigger is: any P28 violation (result/detail mismatch) that changes the check table. Calibration: if any check table cell must have its result changed (not just its detail clarified), the rating is NEEDS REWORK. If only detail text needs clarification but no result changes, MOSTLY RELIABLE is correct. This distinction is implicit but should be made explicit in the critical review prompt.

**Note:** P55, P56, P57 were added to learnings.md as part of Batch 7 findings. These cover the three main systematic patterns from this section (Related tier, 2.3/2.4 double-counting, `status: published` veracityStatus). No further P-entries are required from this batch.
