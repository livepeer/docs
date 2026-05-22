# Content Naming Research

**Source**: `v2/_workspace/research/content-naming.md`
**What it is**: 687-line research document. Deep rubric for naming documentation titles, section headings, and navigation labels. The source material that `section-naming.md` is condensed from.
**Use in**: Phase 3 and 4 — naming checks and title generation. The `section-naming.md` prompt file is the distilled version; this file has the full reasoning behind each rule.

---

## Key sections (with approximate line ranges)

- **Domain-anchor rule** (~lines 575–595): Title/section must use the native terminology of the domain. This rule is enforced by the `industry` + `niche` frontmatter fields.
- **Conditional-precision rule**: Be as specific as the content allows; no more, no less.
- **Label class taxonomy**: Governing-concept → literal → generic → functional → fragment. Same as section-naming.md but with full justification.
- **Scoring criteria**: 25-point rubric for evaluating section titles.
- **Anti-patterns with examples**: Real documentation anti-patterns and rewrites.
- **Per-pageType naming guidance**: How naming conventions differ for `reference` vs `concept` vs `instruction`.

---

## Note on use

Load `section-naming.md` as the prompt reference (compact). Load this file only when you need the full reasoning to evaluate an edge case, or when calibrating the scoring rubric.
