# Critical Review of Check Report
## `v2/orchestrators/quickstart/guide.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/quickstart/guide.md`
**Original page verified against:** `v2/orchestrators/quickstart/guide.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Missed finding
**Location in report:** Frontmatter Table rows for `industry` (line 25) and `niche` (line 26); checks 1.9 and 1.10
**What's wrong:** Both fields are marked INFO with the note "Optional field; not a required field per checks.mdx §1.1." `learnings.md` Batch 1 item 1 states explicitly: "CORRECTION: User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them. 'Valid if present' means validate the value when present — it does NOT mean optional." This report repeats the same error that was documented as a known failure mode in learnings.md.
**What should have been said/done:** Both `industry` and `niche` should be FAIL in the Frontmatter Table with findings under 1.9 and 1.10. The fix block in 1.1 should include concrete values for both fields. Suggested values: `industry: [technical, broadcast]`, `niche: [web3, infrastructure]` — or flag for confirmation if uncertain.

---

### Issue 2
**Type:** Invented exemption / false negative
**Location in report:** Check 1.11 (line 100); Banned Construction Scan (line 592 onward)
**What's wrong:** The description field (page lines 4–6) contains two em-dashes: `Choose your quickstart path — video transcoding, AI inference, or join a pool — and get your first orchestrator node running.` The checker acknowledged the em-dashes but invented an exemption: "The construction is structural enumeration rather than a sentence break and does not violate the em-dash prohibition as applied to body prose and headings." This exemption category does not exist in checks.mdx or CLAUDE.md.

checks.mdx §503 states explicitly: "Em-dash prohibition applies to all visible text. CLAUDE.md prohibits em dashes in headings, frontmatter `description`, and body prose. Not restricted to body prose only." CLAUDE.md states: "No em dashes — rewrite or use hyphens." The `description` field is called out directly.

Additionally, page line 42 contains an em-dash in body prose: `No staking, no activation — just install and connect.` This was not flagged either.

The Banned Construction Scan table does not include any of these em-dash occurrences as candidate entries. They are absent from the scan entirely. learnings.md Batch 4 item 3 (P30) documents this exact failure pattern: "Em-dash prohibition applies to ALL visible text: H2/H3 headings, frontmatter `description` field, body prose, component props. Not restricted to body prose."
**What should have been said/done:** Check 1.11 should FAIL on the em-dash grounds. The Banned Construction Scan table must include the description em-dashes (page lines 4–6) and the line-42 body prose em-dash as separate entries. Root Cause 6 should be added to Cross-Category Connections: `Em-dashes in description (lines 4–6) and body prose (line 42). Affects: Cat 1.11 + Banned Construction Scan. Fix: Replace em-dashes with hyphens or rewrite. Description fix: "Choose your quickstart path - video transcoding, AI inference, or join a pool - and get your first orchestrator node running." Line 42 fix: "No staking, no activation: install and connect."`

---

### Issue 3
**Type:** Missed finding
**Location in report:** Check 2.2 banned word scan (lines 136–146); Banned Construction Scan table
**What's wrong:** CLAUDE.md banned words (minimisers) include `just` and `simply`. Page line 42 reads: `No staking, no activation — just install and connect.` The word `just` is present as a minimiser in body prose. The checker's 2.2 scan lists only the checks.mdx §2.2 word set, which does not include `just` or `simply`, and declares PASS. The Banned Construction Scan table does not include `just` as a candidate match.

CLAUDE.md is part of the operative framework. Its banned word list (line 204) reads: `effectively, essentially, basically, meaningful, significant, real (intensifier), various, several, simply, obviously, clearly, just (minimiser)`. A complete banned word scan must cover both CLAUDE.md and checks.mdx. learnings.md Batch 4 item 3 / P29 requires citing the actual line content before reporting; this is the inverse case — the content was not cited because the word was never scanned.
**What should have been said/done:** Check 2.2 should FAIL. The Banned Construction Scan table must include line 42 with `just` as a candidate, classified as a minimiser, flagged YES. Fix: `No staking, no activation — install and connect.` (remove `just`; the em-dash is also a separate issue per Issue 2).

---

### Issue 4
**Type:** Fabricated occurrence / post-fix-state evaluation
**Location in report:** Check 4.7 (line 338)
**What's wrong:** Check 4.7 evaluates: "PASS (structural + procedural + evaluative sections all appropriate for an `orient` purpose)." The `purpose` field is absent from the page's current frontmatter — this is confirmed by the page file and by the checker's own 1.4 finding. The checker is evaluating information type mapping against `orient` — the value it proposed as the fix in 1.1 — not the current state of the page.

learnings.md Batch 4 item 10 (P35): "All findings must evaluate the current state of the page as it exists, not a proposed post-fix state. If a check depends on a field value that you are also recommending be changed, note the dependency and evaluate the current value."
**What should have been said/done:** Check 4.7 result should be CONDITIONAL, not PASS. Correct wording: "Purpose field absent — information type mapping cannot be evaluated against current state. Conditional: if `purpose: orient` is adopted (see fix in 1.1), all four sections are appropriate for `orient`. Evaluate once purpose field is set." Result column: N/A or CONDITIONAL. The current PASS inflates the pass count.

---

### Issue 5
**Type:** Result/detail contradiction (minor)
**Location in report:** Check 3.2 (line 254) and rename candidates for "After the quickstart" (line 251)
**What's wrong:** Two sub-issues in this section:

(a) Check 3.2 verdict is `**INFO (partial fail)**`. This is not a valid verdict in the PASS/FAIL/N/A schema used throughout the report. The severity levels (CRITICAL/HIGH/MEDIUM/INFO) apply to finding severity, not to check verdicts. A check either passes or fails. If no banned or avoid-tier terms are confirmed present as headings, the result is PASS with notes.

(b) The proposed fix for "After the quickstart" at line 251 includes `Next Steps` as a candidate: "Proposed fix: `Next Steps` — however, `Next Steps` is listed under the **Avoid** tier (not Banned). Better: `Post-Setup Actions`..." checks.mdx §3.2 states that rename suggestions must not introduce banned terms; the reporting rules (learnings.md equivalent P18) extend this to avoid-tier terms. Listing `Next Steps` as a candidate at all — even before immediately correcting it — is a problem: an executing agent reading only the first line of the fix would implement an avoid-tier heading.
**What should have been said/done:** (a) 3.2 verdict should be PASS with a note: "No banned or avoid-tier terms confirmed in current headings. Weak constructions flagged under 3.1." (b) The fix for "After the quickstart" must not mention `Next Steps` as a candidate. Go directly to the strongest valid candidate: `After First Run`.

---

### Issue 6
**Type:** Factual error in docs.json read
**Location in report:** Check 4.3 (line 312)
**What's wrong:** The report states: "Per docs.json lines 2847–2854, the Quickstart group contains: 1. `v2/orchestrators/quickstart/guide` (position 1), 2. `v2/orchestrators/quickstart/video-transcoding` (NEXT)." The Quickstart group in docs.json actually contains four pages:
1. `v2/orchestrators/quickstart/guide`
2. `v2/orchestrators/quickstart/video-transcoding`
3. `v2/orchestrators/quickstart/tutorial`
4. `v2/orchestrators/quickstart/AI-prompt-start`

The report omits `tutorial` and `AI-prompt-start`. The PREV/NEXT assessment (video-transcoding is NEXT — adjacency passes) is still correct. However, the incomplete group listing means a navigation gap is missed: `guide.mdx` has cards linking to `video-transcoding` and `join-a-pool` but no link to `tutorial` or `AI-prompt-start`, which are siblings within the same Quickstart group. This is a dead-end concern for those two pages that was not caught.
**What should have been said/done:** Report the full four-page group from docs.json. Note the absence of links to `tutorial` and `AI-prompt-start` from this page as a potential navigation gap. The adjacency check result (PASS) can stand since NEXT is confirmed as video-transcoding, but the additional siblings should be flagged.

---

### Issue 7
**Type:** Inconsistency
**Location in report:** Check 8.1 fix for lines 47/133 (line 522) vs check 8.6 fix (line 558)
**What's wrong:** Two different replacement targets are given for what is effectively the same missing link type — the AI workloads destination:
- 8.1 (lines 47 and 133): provisional fix is `v2/orchestrators/guides/ai-and-job-workloads/workload-options` (docs.json line 2896)
- 8.6 (line 558): fix is `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` (docs.json line 2898)

Both pages exist in docs.json. The card at line 133 is titled "Add AI Workloads" — its target should be determined by what page best fulfils that intent. The report gives two competing answers without explaining the difference or resolving the conflict. An executing agent would need to choose one without guidance.
**What should have been said/done:** Reconcile the two fixes. The card "Add AI Workloads" (line 133) targets AI workloads in general, making `workload-options` a plausible landing page. The Note at line 47 routes to AI inference setup guidance, making `ai-inference-operations` more appropriate. These are different destinations for different contexts — the report should distinguish between them explicitly rather than treating them as interchangeable. Fix 8.1 for line 47: `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations`. Fix 8.1 for line 133: `v2/orchestrators/guides/ai-and-job-workloads/workload-options`. These should not both default to `workload-options`.

---

## Summary

**Issue count:** 7
**False positives:** 0
**Missed findings:** 3 (Issues 1, 3, 6)
**Invented exemptions / false negatives:** 1 (Issue 2)
**Post-fix-state evaluation:** 1 (Issue 4)
**Result/detail contradiction:** 1 (Issue 5)
**Factual error:** 1 (Issue 6 — docs.json incomplete read)
**Inconsistency:** 1 (Issue 7)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above. The core findings are accurate and well-evidenced: 6 broken links (confirmed against docs.json), missing frontmatter fields, deprecated pageType, open REVIEW flag, Coming Soon content, and failing heading scores are all real findings with correct fix guidance. Link verification was executed correctly. The blocking decision is well-structured and correctly deferred to Alison.

The report fails on three recurrent learnings.md patterns: `industry`/`niche` required-vs-optional (Batch 1 item 1), em-dash invented exemption (Batch 4 item 3/P30), and post-fix-state evaluation (Batch 4 item 10/P35). Additionally, `just` as a banned minimiser (CLAUDE.md) was not scanned (Batch 4 item 3/P29 partial). Before this report is actioned, the following corrections are required:
1. Mark `industry` and `niche` as FAIL with concrete proposed values
2. Mark check 1.11 as FAIL; add em-dash occurrences to Banned Construction Scan
3. Mark check 2.2 as FAIL for `just` at line 42
4. Change check 4.7 result to CONDITIONAL (not PASS)
5. Change check 3.2 verdict from `INFO (partial fail)` to PASS; remove `Next Steps` from rename candidates
6. Add `tutorial` and `AI-prompt-start` to the docs.json group listing in 4.3
7. Reconcile the two different AI workloads link fix targets in 8.1 and 8.6
