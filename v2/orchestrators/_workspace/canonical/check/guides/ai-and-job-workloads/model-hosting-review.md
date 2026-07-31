# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/model-hosting.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count is off by one
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "22 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.7, 5.1, 5.2, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3"
**What is wrong:** Counting the listed IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.7, 5.1, 5.2, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 = 23 IDs listed, not 22. The stated count does not match the enumeration. Per P49, the verdict must count individual check IDs. Per P26, count must match.
**Correction:** Change "22 checks fail" to "23 checks fail."

---

### Issue 2: `status: published` incoherence not flagged — `status: draft` is present and correctly handled
**Severity:** INFO
**Check affected:** 1.8
**Finding in original:** Check 1.8 Detail: "Field absent. Four open REVIEW JSX flags; set `veracityStatus: unverified`"
**What is wrong:** This is correctly handled. The source page has `status: draft`, which is consistent with `veracityStatus: unverified`. The check report correctly does not raise the P39 `status: published` + missing `veracityStatus` incoherence. No error here. Confirmed: source frontmatter shows `status: draft`. This issue is a non-issue — the report is correct.
**Correction:** No correction needed. Confirmed correct per source file read.

---

### Issue 3: P37 error type not stated for `pageType: how_to`
**Severity:** MEDIUM
**Check affected:** 1.2 (P37)
**Finding in original:** "Deprecated 12-type alias. Migrate to `pageType: instruction` (P37: wrong-field type — deprecated alias)"
**What is wrong:** The parenthetical notation "(P37: wrong-field type — deprecated alias)" conflates two error types. P37 defines: (a) deprecated alias — value was valid in old schema, no longer valid; (b) wrong field — value is valid but placed in the wrong field. `how_to` is a deprecated alias (type a), not a wrong-field error (type b). The parenthetical is internally confused. However, the main text correctly calls it a "Deprecated 12-type alias", which is the accurate characterisation. The P37 notation mislabels it as both simultaneously.
**Correction:** The check 1.2 detail should read: "Deprecated 12-type alias (P37 type a: value was valid in old 12-type schema, no longer valid in 7-type canonical). Migrate to `pageType: instruction`." Remove the "wrong-field type" label — that applies to the `purpose` field issue in other reports, not here.

---

### Issue 4: P53 — "Getting access" heading scored but heading is not "See Also" — no exemption issue
**Severity:** INFO
**Check affected:** 3.1, 3.2
**Finding in original:** Check 3.2: "No banned or weak standalone heading terms — PASS — No `Basics`, `Notes`, `Overview`, `How It Works`, `See Also`, `Conclusion`, `What's Next`"
**What is wrong:** This is correctly handled. The heading "Getting access" is correctly scored at 14/25 and flagged as failing. It does not fall under any exemption category. P53 specifies that only the exact text `Related Pages` is exempt. The check report correctly does not exempt "Getting access." No error here.
**Correction:** No correction needed.

---

### Issue 5: P18 — rename suggestion "HuggingFace Account Setup" contains no prohibited terms — correctly clean
**Severity:** INFO
**Check affected:** F-06 (heading rename for "Getting access")
**Finding in original:** "Rename H3 to: `HuggingFace Account Setup`"
**What is wrong:** Per P18, rename suggestions must not introduce terms from the 3.2 prohibited list: `Types`, `Profiles`, `Modes`, `Overview`, `Basics`, `Details`, `Information`, `Getting Started`. "HuggingFace Account Setup" contains none of these. `Setup` is in the OK list per Frameworks.mdx §4.1. This rename is clean. Additionally, there is no near-identical heading already on the page named "HuggingFace Account Setup" (per P38). Confirmed correct.
**Correction:** No correction needed.

---

### Issue 6: Check 5.1 and 5.2 evaluate against `how_to` template requirements — should note this is the deprecated pageType's template
**Severity:** LOW (INFO)
**Check affected:** 5.1, 5.2
**Finding in original:** "Category 5 Matrix applied: `component-layout-decisions.mdx` for `how_to` (current declared pageType): Required: `Prerequisites`, `Steps`"
**What is wrong:** Per P35, findings must evaluate the current state of the page. The current `pageType` is `how_to`. Using the `how_to` template requirements to evaluate the current state is technically correct — it is evaluating the page against its current declared type. However, the check notes that the recommended fix is to migrate to `instruction`. The report is correct to flag the template mismatch against current type, but should also note (as it does in the cross-category section) that fixing 1.2 resolves the root cause of 5.1/5.2. This is handled correctly in C1 of the Cross-Category Connections section.
**Correction:** No correction needed. Cross-category connection is correctly flagged.

---

## Confirmed Correct Findings

- **1.1 through 1.11**: All field-level checks correctly read from source frontmatter. Purpose absent (confirmed), complexity absent, lifecycleStage absent, veracityStatus absent — all confirmed in source file.
- **P51 compliance**: All proposed values formatted as "Proposed: `field: value` — confirm before applying." Confirmed clean.
- **P41 compliance**: `industry` and `niche` flagged as FAIL with concrete proposed values (`industry: [AI, technical]`, `niche: [AI, hardware]`). Correct.
- **P50 compliance**: `pageType: how_to` is a deprecated 12-type value, correctly failed on check 1.2. (Not a valid 7-type canonical value — unlike `guide` or `concept`. P50 applies only to valid 7-type values.)
- **P42 compliance**: Check 1.3 logged as N/A with "co-fix of 1.2 only if variant is required — not needed for plain instruction page." Correct.
- **P29/P30**: `significantly` at line 166 cited and verified — the source file at line 166 reads "loading weights from spinning disk into VRAM is **significantly** slower." Cited line confirmed.
- **P30**: Em-dash scan covers CustomDivider middleText props and AccordionGroup title props (explicitly noted in scope statement). No em-dashes found in those props — confirmed clean.
- **P28**: Result column matches detail text conclusion throughout. No result/detail contradictions detected.
- **P33**: All 4 internal links verified against docs.json with line citations. Full path verification performed.
- **P46**: No `not [X]` constructions appear in check 2.2 (banned words). Check 2.4 is used for construction violations. P46 correctly applied.
- **P49 intent satisfied** (with count correction above): IDs are listed explicitly.
- **Blocking decisions**: BD-1 and BD-2 correctly escalated with equal options for BD-1. No pre-emption of unresolved decisions in INFO rows (P52 compliant).
- **Finding IDs**: F-01 through F-09 are unique and sequential (P43).
- **No fix introduces banned constructions** (P44 verified): Proposed fixes checked — none contain em-dashes or banned words.
- **One canonical fix per finding** (P45): No conflicting fixes across sections.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — One count error, one error-type label inconsistency in the P37 notation. All substantive findings are correct. The single actionable correction is the verdict count.

**Corrected fail count:** 23 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.7, 5.1, 5.2, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3
