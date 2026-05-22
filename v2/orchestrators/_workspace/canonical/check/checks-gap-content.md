# Checks Gap Analysis — Content Quality, Voice, Structure

**Task**: Find content quality, voice, and structural checks that exist in policy docs, plans, or frameworks but are missing from `checks.mdx`.

**Searched**: `checks.mdx` (categories 1–9) · `01-CORE-NEEDS-AND-STANDARDS.md` · `Frameworks.mdx` (all sections) · `voice-rules.md` · `plan-canonical.md` · `content-pipeline-canonical.md` · `content-pass.md` · `docs-review-prompt-tiers.md` · `copy-governance.md` · `page-structure-rules.md` · `structure-audit pack-guide.md` · `PROJECT-MANAGEMENT-CANONICAL.md`

**Approach**: For each gap candidate, verified it is genuinely absent from `checks.mdx` categories 1–9 before adding. Merged overlapping candidates into single entries.

---

## Summary counts

| Veracity | Count |
|---|---|
| HIGH | 11 |
| MEDIUM | 9 |
| LOW | 2 |
| **Total gaps** | **22** |

---

## HIGH veracity gaps

---

### G-01 — Entity-led voice: subject is the system, not the documentation

**Check:** Every sentence subject is the system, node, user, or action — never the documentation or the page. "The orchestrator submits a reward call each round" passes. "In this section, we explain how orchestrators submit reward calls" fails.

**Source:** `Frameworks.mdx §3.3 Voice Principles` · `copy-governance.md §Voice Principles` · `content-pass.md Phase 5.1`

**Veracity:** HIGH — appears in three separate enforcing documents, including the content-pass prompt's Phase 5 blocking gate.

**Not in checks.mdx because:** The 9 existing categories cover banned words, banned phrases, and banned constructions but do not express this as a named principle. It is subsumed within the banned-constructions check (2.4) but entity-led voice is a positive structural rule, not just a ban. The current check 2.4 only catches `This page [verb]` — it does not catch the broader pattern of documentation-as-subject.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.12.

---

### G-02 — Exit-state headings: section openers name what the reader can do, not what the section is about

**Check:** Section opening sentences (not headings — covered by Cat 3) name what the reader can do after reading, not what the section discusses. "Choose an orchestrator based on reward cut, uptime, and ETH fee history" passes. "Orchestrator Selection Criteria" as a prose opener fails.

**Source:** `Frameworks.mdx §3.3 Voice Principles` · `copy-governance.md §Voice Principles`

**Veracity:** HIGH — explicitly named as a locked voice principle in both framework and copy-governance. Distinct from heading naming (Cat 3) because it governs prose openers, not heading labels.

**Not in checks.mdx because:** Category 3 covers heading label quality. Category 2 covers banned constructions at sentence level. Neither explicitly requires that prose openers name exit state rather than topic.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.13.

---

### G-03 — No forward-looking uncertainty about shipped features

**Check:** If a feature is live, it is stated as fact. "Governance proposals require a 33% quorum to pass" passes. "Governance proposals may require quorum depending on settings" fails. `can/may` in value claims is already caught by 2.4 — this check targets the broader pattern: shipped functionality presented with conditional uncertainty ("depending on", "in most cases", "typically", "generally") when the actual behaviour is deterministic and documented.

**Source:** `Frameworks.mdx §3.3 Voice Principles` · `copy-governance.md §Voice Principles` · `voice-rules.md §orchestrator`

**Veracity:** HIGH — explicitly named as a locked voice principle. The `can/may` construction is in checks.mdx 2.4 but only as a banned construction tag. The principle behind it — no false uncertainty about shipped facts — is not stated as a standalone rule.

**Not in checks.mdx because:** Check 2.4 covers `can/may [verb]` in value claims. This is the governing principle that explains why that ban exists, and it extends further: words like "typically", "generally", "in most cases", "depending on settings" also violate this principle but are not in the banned-words or banned-phrases lists.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.14. Note: may warrant adding "typically", "generally", "in most cases", "depending on" to the banned-phrases scan.

---

### G-04 — Second/third person discipline: second person for instructions, third for system descriptions

**Check:** Instructions use second person ("you"). System descriptions use third person. Never first person plural ("we believe", "our network") — exception is Community tab only. Flag: "our orchestrators" on a non-Community page. Flag: "Livepeer believes" anywhere. Flag: passive instructions ("steps should be followed") instead of "follow these steps".

**Source:** `content-pass.md Phase 5.4, §2.3 Register` (explicit: "Second person ('you') for instructions. Third person for system descriptions. Never first person plural ('we believe', 'our network') — exception: Community tab only.")

**Veracity:** HIGH — stated as a hard rule in the content-pass prompt's blocking Phase 5. Not present in voice-rules.md (which governs register, not person) — this is a universal structural rule stated only in content-pass.md.

**Not in checks.mdx because:** Category 2 covers banned words and phrases but not grammatical person. This is a distinct structural rule that requires a different type of scan.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.15.

---

### G-05 — No prose restating a table row

**Check:** No paragraph of body prose immediately follows a table and restates what the table already shows. The table is the content. If a sentence below a table says what the table said, delete the sentence.

**Source:** `content-pass.md Phase 5.3 Paragraph discipline` (explicit: "Tables stand alone — no prose restating a table row.") · `CLAUDE.md §Review standards` ("Prose restating a table — delete it.")

**Veracity:** HIGH — appears verbatim in the content-pass prompt Phase 5.3 blocking checklist and in the CLAUDE.md project instructions under Review Standards. Two independent policy points.

**Not in checks.mdx because:** Category 2.6 covers paragraph discipline at the general level. Table-specific redundancy is not called out. Check 5.3 covers components (tables used appropriately) but not prose redundancy adjacent to tables.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.16. Alternatively Category 4 (Page Structure) if framed as information duplication.

---

### G-06 — High-value commands and URLs visible in body copy, not buried in accordions or notes

**Check:** Critical CLI commands, URLs, config values, and required parameters appear in body copy where the reader will see them during normal reading flow. They are not hidden inside collapsed accordions, secondary Notes, or Tips that readers may not expand.

**Source:** `content-pass.md Phase 5.3 Paragraph discipline` (explicit: "High-value commands and URLs visible in body copy, not buried in accordions or notes.")

**Veracity:** HIGH — explicit verbatim rule in the content-pass prompt's blocking Phase 5 checklist.

**Not in checks.mdx because:** Category 5 covers component selection (correct components for pageType) but does not address where within the page hierarchy critical content must appear. This is a UX placement rule, not a component selection rule.

**Suggested category:** Category 5 (Layout, Components & Template) — new check 5.11.

---

### G-07 — Opening paragraph written last (WRITE mode) — body drives the opener, not the other way around

**Check:** In WRITE mode, the opening paragraph is the last thing written. The body sections are written first; the opener reflects what the page actually delivers. An opener written before the body will describe anticipated content, not actual content, producing the classic "this page covers" problem even when the banned phrase itself is avoided.

**Source:** `content-pass.md Phase 7.1` (explicit: "The opening paragraph is written last (WRITE mode) — draft the body first, then write the opening to reflect what the page actually delivers.")

**Veracity:** HIGH — explicit rule in the content-pass prompt. Distinct from the ban on "This page [verb]" (check 2.4) because it is a process rule, not a phrase ban. A page can have a non-self-referential opener that still misrepresents the content because it was written before the body.

**Not in checks.mdx because:** This is a WRITE mode process rule. Checks.mdx does not currently distinguish process rules (what to do during writing) from quality checks (what to verify in the output). This check applies at REVIEW time by asking: does the opener reflect what the page actually delivers?

**Suggested category:** Category 4 (Page Structure) — new check 4.11. Or a new section: WRITE Mode Process Rules.

---

### G-08 — Section sequence matches reader journey, not editor convenience or system chronology

**Check:** Sections run in the order that matches the reader's path toward PURPOSE — not the order that mirrors the underlying system's internal architecture, and not the order in which the author thought of things. An `operate` page that opens with system architecture before operational tasks fails this check.

**Source:** `content-pass.md Phase 7.2` (explicit: "Section sequence follows the reader's journey toward PURPOSE (not editor convenience or system chronology).") · `docs-review-prompt-tiers.md Tier 3 Step 3 Sections` ("Sequence matches reader journey (not editor convenience)")

**Veracity:** HIGH — appears in both the content-pass prompt and the docs-review-prompt-tiers. Distinct from check 4.3 (PREV_PAGE/NEXT_PAGE adjacency) which covers cross-page ordering, not within-page section ordering.

**Not in checks.mdx because:** Category 4 covers page-level structure (one purpose, adjacency, no dead ends, prerequisites) but does not explicitly address intra-page section sequencing as a distinct check. Check 4.3 is cross-page; this is within-page.

**Suggested category:** Category 4 (Page Structure) — new check 4.12.

---

### G-09 — No orphan sections: every section is load-bearing in the path to PURPOSE

**Check:** Every section exists because the reader needs it to reach the page's stated PURPOSE. A section that could be removed without affecting whether the reader achieves the purpose is an orphan — it exists for editor reasons, not reader reasons. Orphan sections often contain: background history, adjacent-topic asides, "for more information" aggregations, or content that belongs on a different page.

**Source:** `content-pass.md Phase 7.2` (explicit: "No orphan sections (can be removed without breaking the path to PURPOSE)") · `docs-review-prompt-tiers.md Tier 3 Step 3` ("No orphan sections") · `01-CORE-NEEDS-AND-STANDARDS.md §1` ("If a paragraph does not advance the reader toward earning, configuring, diagnosing, or deciding — it is dead weight.")

**Veracity:** HIGH — three independent sources using the same framing. The 10% Rule in 01-CORE-NEEDS-AND-STANDARDS.md expresses the same principle as "Cut — Remove every word that does not serve the reader's next action."

**Not in checks.mdx because:** Check 4.8 covers content duplication. Check 4.1 covers one-purpose scoping. Neither explicitly names the orphan-section test: can this section be removed without preventing the reader from achieving PURPOSE?

**Suggested category:** Category 4 (Page Structure) — new check 4.13.

---

### G-10 — No section pre-empts content from NEXT_PAGE

**Check:** No section contains content that properly belongs on the next page in the journey. A section that covers NEXT_PAGE's topic eliminates the reader's reason to go there. This is the mirror of check 4.8 (no duplication from adjacent sections) but specifically targeted at pre-emption of forward content.

**Source:** `content-pass.md Phase 7.2` (explicit: "No section pre-empts content from NEXT_PAGE") · `docs-review-prompt-tiers.md Tier 2 Step 3 Sections` (explicit: "No section pre-empts content from the next page")

**Veracity:** HIGH — explicit rule in two prompts. Check 4.8 in checks.mdx says "No content duplication from adjacent sections" but frames it as duplication-looking-backward. Pre-emption is a forward-looking problem with a distinct check.

**Not in checks.mdx because:** Check 4.8 addresses duplication in general terms. Pre-emption is a specific directionality problem — the page reaches forward into territory owned by the next page, which is different from repeating what the previous page said.

**Suggested category:** Category 4 (Page Structure) — new check 4.14. Cross-reference 4.8.

---

### G-11 — Staleness register: volatile content points to live sources, not hardcoded current state

**Check:** Any content that changes faster than quarterly (governance parameters, protocol inflation rate, active set size, programme names, personnel, AI model IDs, CLI flag defaults, SDK versions) must point to a live authoritative source rather than stating the current value inline. Inline values in fast-changing areas are staleness risks the moment the page is published.

**Source:** `docs-review-prompt-tiers.md Tier 2 Step 3 Staleness Register` (explicit: "Any content that changes faster than quarterly must point to a live source, not document current state.") · `Frameworks.mdx §3.4 High-staleness terms` (lists 7 categories of high-staleness content) · `content-pass.md Phase 6` ("Source staleness check") · `01-CORE-NEEDS-AND-STANDARDS.md §10 The 10% Rule item 4` ("Verify — Confirm every factual claim against source (Explorer, go-livepeer repo, protocol docs)")

**Veracity:** HIGH — four independent sources. The specific list of high-staleness terms in Frameworks.mdx §3.4 provides concrete enumeration: active set size (100), unbonding period, target bonding rate (50%), inflation adjustment rate, treasury reward cut rate, AI pipeline types and model IDs, CLI flag names and defaults.

**Not in checks.mdx because:** Check 6.8 covers "source staleness check" as a veracity flag — it says to flag staleness risk. This is a structural check on whether volatile content uses the correct pattern (link to live source vs inline value). It belongs in Category 4 or 6 as a named pattern, not just as a veracity footnote.

**Suggested category:** New sub-check under Category 6 (Veracity) — 6.10. Or a new check 4.15 if framed structurally.

---

## MEDIUM veracity gaps

---

### G-12 — Precision over breadth: say exactly what is true, not a range of things that might be true

**Check:** Every claim is as specific as it can be, given the available information. "The unbonding period is 7 rounds (~7 days)" passes. "Unbonding typically takes several rounds, which may vary" fails (two banned words + imprecision). This is the underlying principle behind several existing banned-words checks but is not stated as a stand-alone standard that can be applied to sentences without banned words that are still imprecise.

**Source:** `Frameworks.mdx §3.3 Voice Principles` · `copy-governance.md §Voice Principles` · `01-CORE-NEEDS-AND-STANDARDS.md §4 Voice Register` ("Quantify — Always: '8 GB VRAM minimum for SDXL', '0.05 ETH for gas', '~24 h per round'")

**Veracity:** MEDIUM — well-documented as a principle, but its application as a check requires judgment (what counts as "specific enough"?). Cannot be mechanically applied the way banned-word scans can.

**Not in checks.mdx because:** Category 2 covers banned words and banned constructions. This check requires positive judgment about specificity, not pattern-matching on banned strings.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.17, framed as an evaluative check not a pattern check.

---

### G-13 — Complexity calibration: page language matches the stated `complexity` value

**Check:** `complexity: beginner` pages define domain terms at first use, avoid abbreviations unless expanded, and do not assume prior system knowledge. `complexity: intermediate` pages can use domain terms freely but explain architecture decisions. `complexity: advanced` pages can use specialised terminology, reference edge cases, and assume operational experience. Mismatches (e.g., an advanced page with tutorial-level hand-holding, or a beginner page using unexpanded abbreviations) fail this check.

**Source:** `content-pass.md Phase 2.1 Knowledge Level` (explicit: three complexity levels with specific criteria) · `Frameworks.mdx §1.5 Complexity` (same three definitions)

**Veracity:** MEDIUM — the rule exists clearly in two documents. Application requires judgment at the page level. "Assumes too much" or "over-explains" are real failure modes but require reader-perspective assessment.

**Not in checks.mdx because:** Check 1.6 requires the `complexity` field to have a valid value. No check verifies that the page content actually matches that value. The taxonomy field is checked; the content match is not.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.18. Or Category 4 (Page Structure) — 4.15, as complexity calibration affects section scope as much as voice.

---

### G-14 — Persona fit: every major section serves the stated persona's arriving question and motivation

**Check:** Using the Phase 1 audience design output for the tab, verify that each major section serves the named persona's entry state (what they arrive knowing) and exit state (the concrete action or decision Phase 1 defines). Sections serving a different persona, or ignoring the stated persona's primary concern, fail this check.

**Source:** `content-pass.md Phase 2.2 Persona Fit` (explicit: "Does every major section serve this persona's arriving question and motivation? … Flag: sections that serve a different persona, sections that ignore the stated persona's primary concern.")

**Veracity:** MEDIUM — this check requires loading the Phase 1 audience design for the tab (which may not be finalized) and applying it per-section. The rule is clearly documented; the execution dependency is the qualification.

**Not in checks.mdx because:** Category 2 check 2.7 covers audience register correctness. Persona fit is narrower and more specific — it verifies section-level alignment with a named Phase 1 persona profile, not just the broad audience token.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.19. Prerequisite: Phase 1 output approved.

---

### G-15 — Deprecated role terms absent: no "broadcaster", "combined mode", "hybrid", "pool worker" (as generic)

**Check:** None of the deprecated role terms appear in published content: `broadcaster` (use `gateway`), `combined mode` (use `dual mode` or `dual-workload configuration`), `hybrid` (use `dual mode`), `transcoder` as synonym for `orchestrator` (use `transcoder` only for the go-livepeer worker process in O-T split). `pool worker` is a valid term but must be defined at first use.

**Source:** `Frameworks.mdx §3.4 Deprecated & Conflicted Terms` · `01-CORE-NEEDS-AND-STANDARDS.md §9 Terminology Lock`

**Veracity:** MEDIUM — the deprecated terms list is locked. The check is mechanical (search for the strings). Rated MEDIUM rather than HIGH because check 2.11 in checks.mdx already covers "terminology locked and consistent" in general terms. The specific deprecated terms list is an expansion of that check, not an entirely new check.

**Not in checks.mdx because:** Check 2.11 references `decisions/terminology-tracking.md` as the source but does not enumerate the deprecated terms inline. The deprecated terms are in Frameworks.mdx §3.4 — a page reviewer needs a concrete list, not a pointer.

**Suggested category:** Category 2 (Voice & Copy) — expand check 2.11 to enumerate the deprecated terms, or add check 2.20 as a specific deprecated-terms scan with the full list from Frameworks.mdx §3.4.

---

### G-16 — `informationType` field usage: section-level type is runtime-assessed, not frontmatter

**Check:** `informationType` is NOT a frontmatter field — it is determined per-section at runtime by the reviewing agent. Pages must not have `informationType` in frontmatter. Each section's information type should be confirmed against the purpose→information-type mapping in Frameworks.mdx §1.6 before checking veracity standards.

**Source:** `Frameworks.mdx §1.6 Information Type` (explicit: "Not a frontmatter field — determined per-section at runtime by the agent based on purpose.") · `content-pass.md Phase 4`

**Veracity:** MEDIUM — the rule is unambiguous. The risk is that agents may add it to frontmatter (the locked enum list in Frameworks.mdx §4.5 includes `informationType` in the quick reference, which could be misread as a frontmatter field).

**Not in checks.mdx because:** Check 1.1 lists the 10 required frontmatter fields and none include `informationType`. But there is no explicit check that flags `informationType` if found in frontmatter. A reviewer finding it there would need to know to flag it.

**Suggested category:** Category 1 (Frontmatter & Taxonomy) — new check 1.13: "`informationType` absent from frontmatter (it is a section-level runtime assessment, not a frontmatter field)."

---

### G-17 — Section-level veracity standard matches information type

**Check:** For each section, the information type is identified, and the applicable veracity standard is confirmed. A `procedural` section at `Very high` standard cannot be `veracityStatus: verified` at the page level if any step in that section has not been executed and confirmed to produce the stated output. An `analytical` section at `Medium` standard does not block publication but requires internal consistency.

**Source:** `content-pass.md Phase 4` and Phase 6 · `Frameworks.mdx §1.6 and §1.7`

**Veracity:** MEDIUM — the framework exists and is clear. However, applying this check requires knowing the information type of each section (which itself requires a pass), making it a two-step check that is harder to execute mechanically.

**Not in checks.mdx because:** Check 6.6 covers `veracityStatus` at page level. Checks 6.1–6.4 cover claim citation and testing. The per-section information type → veracity standard mapping (e.g., `conceptual` = Medium, `procedural` = Very high) is documented in Frameworks.mdx but not expressed as a check in checks.mdx.

**Suggested category:** Category 6 (Veracity) — expand check 6.6 or add check 6.10: "Per-section information type identified; veracity standard applied correctly for that type."

---

### G-18 — Content not better documented in another tab (no cross-tab duplication)

**Check:** Nothing on the page is better documented in another tab. If the page contains content that is owned by a different tab (see Tab scope table in CLAUDE.md), it either links to the authoritative page or flags the duplication. It does not duplicate it.

**Source:** `docs-review-prompt-tiers.md Tier 3 Step 4 Scope` (explicit: "Nothing on this page is better documented in another tab") · `content-pass.md Pre-flight` · `structure-audit pack-guide.md §Dos` ("check both directions in the cross-tab audit")

**Veracity:** MEDIUM — the check is logically sound and repeatedly cited. Application requires knowledge of all tab scopes, which makes it an evaluative check rather than a mechanical scan.

**Not in checks.mdx because:** Check 4.8 covers duplication from adjacent sections (within a tab). Check 4.10 covers cross-tab links at journey intersections. Neither explicitly covers the inverse: content on this page that is owned by a different tab and should not be duplicated here.

**Suggested category:** Category 4 (Page Structure) — new check 4.16.

---

### G-19 — The 10% Rule applied: cut, quantify, sequence, verify, connect

**Check (evaluative, not mechanical):** Every iteration applies five tests to every element of copy: (1) Can any word or sentence be cut without losing reader value? (2) Can any vague claim be replaced with a number, threshold, or range? (3) Does every paragraph lead with the outcome before the mechanism? (4) Is every factual claim grounded in a named source? (5) Does every page link forward to the next logical step?

**Source:** `01-CORE-NEEDS-AND-STANDARDS.md §10 The 10% Rule` (explicit, numbered list)

**Veracity:** MEDIUM — this is a named, numbered framework from the Orchestrators standards document. Individual components are covered elsewhere (veracity in Cat 6, opening order in 2.5, next steps in 4.4) but the 10% Rule as an integrated pass — applied to every element on every iteration — is not in checks.mdx.

**Not in checks.mdx because:** The individual rules are scattered across categories 2, 4, and 6. The 10% Rule frames them as an iterative improvement pass applied together, which is a distinct evaluative posture.

**Suggested category:** NEW category — "Iterative Quality Pass" or added as a named evaluation framework in the REVIEW EXECUTION GUIDE.

---

### G-20 — Code in prose: correct backtick usage (CLI flags, commands, filenames — not concepts)

**Check:** In body prose: CLI flags use backticks with dash (`--gateway`). Commands use backticks (`livepeer -gateway`). File names use backticks (`docker-compose.yml`). Config values use backticks (`mainnet`, `true`). Concepts do NOT use backticks. Misuse: backtick-wrapping conceptual terms ("the `orchestrator` connects to the `gateway`") is a formatting error.

**Source:** `01-CORE-NEEDS-AND-STANDARDS.md §5 Page Structure Rules` (explicit: "Code in prose — CLI flags: backticks with dash `--gateway`; commands: `livepeer -gateway`; file names: `docker-compose.yml`; values: `mainnet`, `true`; concepts: NO backticks")

**Veracity:** MEDIUM — the rule is unambiguous and specific. Rated MEDIUM because it is specific to Orchestrators tab standards and may not be universally locked across all tabs (no cross-reference to a site-wide policy file).

**Not in checks.mdx because:** Category 5 covers component usage and MDX conventions. Category 8 covers rendering. Prose-level code formatting (backtick usage rules) is not addressed.

**Suggested category:** Category 5 (Layout, Components & Template) — new check 5.12.

---

## LOW veracity gaps

---

### G-21 — Number formatting conventions: ETH, LPT, VRAM, time estimates

**Check:** Numbers use consistent formatting: ETH as decimal ("0.1 ETH"), LPT as plain integer ("100 LPT"), VRAM as quantity-unit ("32 GB VRAM"), time estimates with tilde ("~30 minutes"). Do not write "100 tokens", "32GB", "0.1 ether", or "30 minutes" for an estimate.

**Source:** `01-CORE-NEEDS-AND-STANDARDS.md §5 Page Structure Rules` (explicit: "Numbers — ETH decimal '0.1 ETH'; LPT plain '100 LPT'; VRAM '32 GB VRAM'; time '~30 minutes' for estimates")

**Veracity:** LOW — this is from the Orchestrators-specific standards document, not a site-wide locked policy. Other tabs may have different conventions. Flagged as a gap because it is an explicit standard not reflected in checks.mdx, but its scope may be intentionally limited to Orchestrators.

**Not in checks.mdx because:** Likely considered Orchestrators-specific and therefore outside the scope of a universal checks document.

**Suggested category:** Category 2 (Voice & Copy) — new check 2.21, scoped to `audience: orchestrator` pages. Or a new Orchestrators-specific category.

---

### G-22 — Component conventions: specific components required for navigation, quotes, external links

**Check:** Navigation uses `<GotoLink>`, `<GotoCard>` (not plain markdown links). Quotes use `<Quote>`, `<FrameQuote>` (not blockquote `>`). External links use `<DoubleIconLink>`. Tips use `<TipWithArrow>` (not `<Tip>`). Tables use `<StyledTable variant="bordered">` (not plain markdown tables). Steps use `<StyledSteps>` (not numbered lists for procedures).

**Source:** `01-CORE-NEEDS-AND-STANDARDS.md §6 Component Conventions` (explicit table)

**Veracity:** LOW — these component names do not appear in the component matrix in checks.mdx §5 (which uses Mintlify native components: `Steps`, `Step`, `Card`, `CardGroup`, `Note`, etc.). Either the Orchestrators standards document uses a different component layer, or these are custom components that may not be universally enforced. Cannot verify which component layer is canonical without reading component-framework-canonical.mdx.

**Not in checks.mdx because:** The component matrix in checks.mdx §5 uses different component names than those in 01-CORE-NEEDS-AND-STANDARDS.md §6. This may represent a genuine gap or a version mismatch between the two documents. Flag for human resolution.

**Suggested category:** Category 5 (Layout, Components & Template) — but requires human verification of which component set is canonical before adding.

---

## Notes for human review

**G-22 requires resolution before acting:** The component names in `01-CORE-NEEDS-AND-STANDARDS.md §6` (`GotoLink`, `GotoCard`, `DoubleIconLink`, `TipWithArrow`, `StyledTable`, `StyledSteps`) do not match the component names in `checks.mdx §5` (`Card`, `CardGroup`, `Steps`, `Note`, `Tip`). These may be: (a) different abstraction layers (custom wrappers over Mintlify natives), (b) components from a deprecated layer, or (c) a documentation inconsistency. Decision needed before G-22 is added to checks.mdx.

**G-07 is a process rule, not just a quality check:** It describes what to do during WRITE mode. In REVIEW mode it becomes: "Does the opener reflect what the page actually delivers?" Both framings are valid but serve different phases.

**G-04 has an exception that must be preserved:** First person plural ("we", "our") is permitted on Community tab pages. Any check implementation must include this exception.

**G-11 and G-03 overlap partially:** G-11 (staleness register) and G-03 (no forward-looking uncertainty about shipped features) both address uncertainty about live state. G-03 is about voice (how claims are phrased); G-11 is about structure (whether volatile content links to live sources). They are distinct but should cross-reference in checks.mdx.

---

_Produced: 2026-03-24_
_Sources searched: 12 documents across `workspace/plan/active/CONTENT-WRITING/`, `v2/orchestrators/_workspace/canonical/`, `workspace/plan/active/ORCHS/`_
