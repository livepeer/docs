# Veracity — Definitions

**Status**: LOCKED
**Version**: 2026-03-23
**Related**: [information-type.md](information-type.md) | [pagePurpose.md](pagePurpose.md)

---

## Field Definition

1. **Token**: `veracityStatus`
2. **Domain**: Content Quality / Information Integrity
3. **Definition**: The trustworthiness standard for a content type, and whether that standard has been met
4. **Description**: Veracity is defined per information type — different categories of information have different accuracy demands and different sources that make them trustworthy. The pipeline uses this to know what to check, what to check it against, and how hard a failure is if it's wrong.
5. **Scope**: Status is a page-level frontmatter field. Standard is derived from information type — not independently assigned.

---

## Status Enum

| Status | Meaning |
|---|---|
| `verified` | Checked against the authoritative sources for its information type |
| `unverified` | Not yet checked — default state for all new or AI-generated content |
| `stale` | Was verified; source has since changed — requires re-verification |

**Pipeline rule**: `unverified` or `stale` content at `very high` or `high` standard blocks publication. `medium` or `lower` requires human sign-off but does not hard-block.

---

## Quickview

| Information type | Veracity standard | What "verified" means |
|---|---|---|
| `factual` | Very high | Every claim citable against a primary source |
| `technical` | Very high | Verified against live system, current codebase, or active API |
| `procedural` | Very high | Every step executed and output confirmed |
| `change` | Very high | Every entry confirmed against official release notes or changelog |
| `evaluative` | High | Evidence is real, sourced, and labelled if approximate |
| `structural` | High | Accurately reflects current site structure from `docs.json` |
| `analytical` | Medium | Reasoning is internally sound and consistent with system behaviour |
| `conceptual` | Medium | Model is consistent with documented behaviour — not required to be citable |
| `narrative` | Lower | No citation required; embedded factual claims inherit `factual` standard |

---

## Per Information Type

---

### `factual`

1. **Standard**: Very high
2. **What verified means**: Every stated fact is citable against a named primary source. No estimations presented as fact. No values from memory or inference.
3. **Authoritative sources**: Protocol contracts (GitHub), official API spec, on-chain data, Livepeer developer docs, SDK changelogs
4. **Acceptable sources**: Official Livepeer blog posts, foundation announcements, verified community reports with primary source cited
5. **Not permitted**: Third-party blogs, unverified community posts, AI-generated summaries without primary source citation
6. **Pipeline failure condition**: Any claim that cannot be cited — remove or label as approximate

---

### `technical`

1. **Standard**: Very high
2. **What verified means**: Code has been tested against the live system or current codebase. API calls use current endpoints and correct auth. Commands produce the stated output. No deprecated syntax.
3. **Authoritative sources**: Livepeer GitHub repos (`go-livepeer`, `livepeer-js`, `livepeer-kit`), SDK documentation, protocol spec, live API endpoints
4. **Acceptable sources**: Official SDK README, verified integration examples in the docs repo
5. **Not permitted**: Outdated forks, unverified community integrations, AI-generated code not tested against live system
6. **Pipeline failure condition**: Untested code, deprecated API usage, commands that do not execute correctly

---

### `procedural`

1. **Standard**: Very high
2. **What verified means**: Every step has been executed in the correct environment and produces the stated output. Branching conditions are real. Prerequisites are accurate.
3. **Authoritative sources**: Live system testing (steps must be run and confirmed), official CLI docs, SDK quickstart guides
4. **Acceptable sources**: Verified community walkthroughs tested against current versions with version stated
5. **Not permitted**: Untested steps, steps from deprecated versions without version labelling
6. **Pipeline failure condition**: Any step that does not execute or does not produce the stated output

---

### `change`

1. **Standard**: Very high
2. **What verified means**: Every changelog entry is confirmed against an official release note, commit, or migration guide. Breaking changes are complete — nothing omitted. Migration steps have been tested.
3. **Authoritative sources**: GitHub release notes, official changelogs, migration guides in the docs repo, protocol upgrade announcements
4. **Acceptable sources**: Foundation blog posts announcing changes
5. **Not permitted**: Community-reported changes without official confirmation, inferred changes from code inspection alone
6. **Pipeline failure condition**: Missing breaking changes, wrong version numbers, untested migration steps

---

### `evaluative`

1. **Standard**: High
2. **What verified means**: All data, benchmarks, and cost figures are real and sourced. Approximate or estimated figures are explicitly labelled. Evidence reflects current system performance, not deprecated versions.
3. **Authoritative sources**: Real benchmark results from live system tests, on-chain analytics (Livepeer Explorer, Shtuka research `livepeer-data-geography` v1), actual cost data from active operators
4. **Acceptable sources**: Community-reported benchmarks with methodology stated, foundation economics reports
5. **Not permitted**: Fabricated benchmarks, benchmarks from deprecated versions presented as current, estimates presented as data
6. **Pipeline failure condition**: Fabricated or unlabelled estimated data — flag and remove

---

### `structural`

1. **Standard**: High
2. **What verified means**: All sections, pages, and paths referenced exist in the current site. Navigation CTAs point to real destinations. No references to removed or renamed sections.
3. **Authoritative sources**: `docs.json` (actual navigation structure), live site tabs and section structure
4. **Acceptable sources**: Current repo file structure for confirming section existence
5. **Not permitted**: Assumed or remembered structure — must reflect actual current state
6. **Pipeline failure condition**: Broken navigation links, references to removed sections

---

### `analytical`

1. **Standard**: Medium
2. **What verified means**: Reasoning is internally consistent. Conclusions follow from stated evidence. No conclusions contradict known system behaviour. Underlying facts used in the reasoning are themselves verified.
3. **Authoritative sources**: Derived from `factual` and `technical` primary sources — analytical content has no independent primary source; it reasons from them
4. **Acceptable sources**: Reasoning consistent with documented system behaviour
5. **Not permitted**: Conclusions that contradict known system behaviour, reasoning that outpaces its evidence
6. **Pipeline failure condition**: Conclusions that directly contradict documented behaviour — flag for human review

---

### `conceptual`

1. **Standard**: Medium
2. **What verified means**: The mental model described is consistent with how the system actually behaves. Simplifications are acceptable; contradictions are not. No need for per-sentence citation.
3. **Authoritative sources**: Protocol documentation, official whitepapers, Shtuka research (`livepeer-data-geography` v1), foundation architecture docs
4. **Acceptable sources**: Official Livepeer blog posts explaining protocol design, developer docs explanations
5. **Not permitted**: Mental models that contradict documented system behaviour; informal community explanations without cross-check
6. **Pipeline failure condition**: Model that contradicts documented behaviour — flag for correction

---

### `narrative`

1. **Standard**: Lower
2. **What verified means**: Value framing and ecosystem claims are consistent with foundation communications. No speculative claims about future direction not backed by official communication. Embedded factual claims (statistics, benchmarks, protocol facts) are verified to `factual` standard.
3. **Authoritative sources**: Foundation communications, official product positioning, ecosystem strategy documents
4. **Acceptable sources**: Foundation blog posts, official partnership announcements
5. **Not permitted**: Speculative future claims without foundation backing; embedded factual claims without primary source
6. **Pipeline failure condition**: Embedded factual claims that fail the `factual` standard — extract and verify separately

---

## Notes

1. `veracityStatus` is the only frontmatter field from the information layer: `verified` / `unverified` / `stale`
2. Information type is **section-level** — the agent identifies the type of each section at runtime and applies the appropriate veracity standard per section
3. `veracityStatus` is page-level — a page is `verified` only when all its sections pass their respective type's standard; it reflects the worst-case section
4. Block-level claim verification is handled as inline flags by the review skill (Step 18) — not frontmatter
5. Re-verification required when primary sources change: protocol upgrades, API version changes, site restructures
6. A page with mixed information types is reviewed section by section — each section is held to the standard of its own type
