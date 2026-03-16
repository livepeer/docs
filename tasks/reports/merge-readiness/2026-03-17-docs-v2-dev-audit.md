# docs-v2-dev Replacement-Readiness Audit

Date: 2026-03-17
Branch: `codex/20260317-merge-readiness-style-root-cause`
Base comparison: `origin/docs-v2...HEAD`
Scope: compare-scoped routed docs set derived from the PR-check route logic (`356` routed docs)

## Summary

This branch cleared the two remaining compare-scoped content blockers that were assigned in this phase:

- `Style Guide`: compare-scoped errors reduced to `0`
- `Copy Lint`: compare-scoped errors reduced to `0`

The final style-guide blocker was a policy mismatch, not residual content debt:

- `snippets/components/page-structure/mermaidColours.jsx` is the documented literal-palette source for Mermaid diagrams
- Mermaid init blocks cannot consume runtime CSS custom properties
- `tests/unit/style-guide.test.js` now treats files carrying that explicit Mermaid-literal-colour contract as a valid exception instead of reporting them as hardcoded-color violations

The route/static validations that had already been repaired in the earlier navigation phase still hold in this branch:

- `Links & Imports`: passed
- `V2 Link Audit (Strict)`: passed with `0` missing refs
- `Docs Navigation`: passed with warnings only

## Implemented Changes

### Routed-page style root-cause remediation

- Added reusable layout variants in `snippets/components/layout/containers.jsx`
- Added margin props in `snippets/components/layout/layout.jsx`
- Added spacing presets in `snippets/components/primitives/divider.jsx`
- Replaced large inline-style surfaces in compare-scoped gateway pages with component props and structured table primitives
- Rebuilt the gateway configuration flags page onto structured data in `snippets/data/gateways/configuration-flags.js`

### Frontmatter normalization and rendered-review cleanup

- Added missing canonical frontmatter fields across the compare-scoped routed docs:
  - `title`
  - `pageType`
  - `audience`
  - `purpose`
  - `lastVerified`
- Normalized deprecated or missing metadata to canonical values in the compare scope
- Removed rendered `{/* REVIEW: ... */}` author comments from shipped content and rewrote the affected lines so unverified reminders do not ship as rendered content

### Blocking copy-governance cleanup

- Cleared all remaining Tier 1 compare-scoped `Copy Lint` errors:
  - banned words
  - banned phrases
  - self-undermining value constructions
- Rewrote flagged lines directly instead of hiding or suppressing them

## Validation Results

### Compare-scoped blocker checks

- `node tests/unit/style-guide.test.js` via exported `runTests({ files, baseRef: 'docs-v2' })`
  - result: `0` errors, `723` warnings, `383` files checked (`356` routed docs + `27` changed components)
- `node tests/unit/copy-lint.test.js` via exported `runTests({ files })`
  - result: `0` errors, `2460` warnings, `356` routed docs checked
- `node tests/unit/mdx.test.js` via exported `runTests({ files })`
  - result: passed, `356` routed docs checked
- `node tests/unit/quality.test.js` via exported `runTests({ files })`
  - result: passed with warnings only, `356` routed docs checked, `345` warnings

### Route/static checks

- `node tests/unit/links-imports.test.js` via exported `runTests({ files })`
  - result: passed, `356` routed docs checked
- `node tests/integration/v2-link-audit.js --files "$(paste -sd, /tmp/merge-readiness-pr-docs-matrix.txt)" --strict --report /tmp/livepeer-link-audit-merge-readiness-post-commit.md`
  - result: passed
  - files analyzed: `370`
  - total refs: `3207`
  - missing refs: `0`
- `node tests/unit/spelling.test.js` via exported `runTests({ files })`
  - result: passed, `356` routed docs checked
- `node tests/unit/docs-navigation.test.js`
  - result: passed with warnings only, `187` warnings

### Full PR runner attempt

- Attempted: `node tests/run-pr-checks.js --lane branch-health --base-ref docs-v2`
- Result: runner still stalls after the startup inventory summary and does not emit per-lane results in a reasonable interval
- Startup summary captured:
  - changed files: `2832`
  - changed docs pages: `356`
  - changed repo markdown files: `2315`
  - changed components: `27`
- Captured log: terminal session output plus `/tmp/livepeer-link-audit-merge-readiness-post-commit.md` for the direct strict link-audit evidence
- Action taken: used the direct compare-scoped matrix above as the authoritative validation evidence for this branch

## Non-Blocking Follow-Up Issues Found

These did not fail the compare-scoped blocker gates, but they remain visible in the broader audit output:

- `Quality` warnings remain widespread for missing `status`, legacy multi-audience strings, pageType/purpose mismatches, and relative-link advisories
- `Docs Navigation` warnings remain concentrated in the orchestrators IA and in files that exist on disk but are not represented in `docs.json`
- `Style Guide` still emits warning-level debt outside the blocker set, including:
  - deprecated `ThemeData` in `v2/resources/documentation-guide/automations-workflows.mdx`
  - advisory `CustomDivider` inline-style usage in gateway/orchestrator concept pages
  - code-block metadata gaps
  - filename casing debt such as `v2/gateways/quickstart/AI-prompt.mdx`

## Readiness Call

Based on the direct compare-scoped validation matrix, this branch clears the two remaining assigned blockers for this phase:

- `Style Guide`
- `Copy Lint`

This branch is ready for the next merge-readiness review step on the `docs-v2...docs-v2-dev` replacement path.

Final unconditional replacement sign-off should still require one of the following:

- a successful completed `branch-health` runner execution, or
- explicit acceptance that the direct compare-scoped matrix above is the authoritative gate while the runner remains unreliable
