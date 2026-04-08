# Section Summary: v2/gateways/concepts/
**Reviewed:** 2026-04-08
**Pages audited:** 4 (role.mdx, architecture.mdx, business-model.mdx, capabilities.mdx)

## Results Overview

| Page | Verdict | Critical Issues |
|---|---|---|
| role.mdx | NEEDS WORK | `PageType` casing. Missing 2 frontmatter fields. Description starts with imperative |
| architecture.mdx | NEEDS WORK | `PageType` casing. Missing 2 frontmatter fields. Otherwise near-exemplary |
| business-model.mdx | NEEDS WORK | `PageType` casing. Missing 2 frontmatter fields |
| capabilities.mdx | NEEDS WORK | `PageType` casing. Missing 2 frontmatter fields |

## Systematic Issues

### 1. `PageType` casing (ALL 4 pages)
Every page in concepts/ uses `PageType` (capital P) instead of `pageType`. This is a systematic bug that will cause the field to be ignored by any tooling expecting the lowercase key.

### 2. Missing frontmatter fields (ALL 4 pages)
- `complexity` missing from all 4 pages
- `lifecycleStage` missing from all 4 pages
- These are the only two missing required fields across the section

### 3. Description quality (role.mdx only)
- role.mdx: Starts with "Learn how" (imperative). Should be subject-first
- Other 3 pages have well-written, subject-first descriptions

## Content Quality Assessment

All four concepts pages are **high quality**. The content is substantial, well-structured, technically accurate, and follows voice/style rules consistently.

- **role.mdx**: Three-background accordion (Cloud, Ethereum, Neither) with Mermaid diagrams is excellent for accessibility. Timeline chart for role evolution. Comprehensive operational mode comparison.
- **architecture.mdx**: Strongest page in the audit. Three Mermaid diagrams (layered architecture, dual pipeline, request flow). Source code reference with commit hash. Clear separation of layer context, interactions, internals, and lifecycle.
- **business-model.mdx**: Clear payment flow, earnings breakdown, cost types, 4 operator models with AccordionGroup, CLI examples, case studies with named production gateways.
- **capabilities.mdx**: Comprehensive workload matrix, selection algorithm flowchart with failover, 5 selection factors, tabbed discovery methods, session management details.

## Cross-Page Consistency
- All 4 pages follow the same concept template pattern
- All use consistent component imports (LinkArrow, StyledTable, CustomDivider)
- All have Related Pages CTA sections at the bottom
- Cross-references between concept pages are consistent and bidirectional
- Mermaid theming is consistent across all diagrams

## Recommended Actions (priority order)
1. **Batch fix `PageType` -> `pageType`** across all 4 pages (single find-replace operation)
2. **Add `complexity` to all 4 pages**: role=beginner, architecture=intermediate, business-model=beginner, capabilities=intermediate
3. **Add `lifecycleStage` to all 4 pages**: all should be `discover` or `evaluate`
4. **Rewrite role.mdx description** to be subject-first: "Gateways connect applications to Livepeer, route video and AI workloads, and define the demand side of the network."

## Overall Section Grade: STRONG
The concepts section is well-designed, technically accurate, and follows voice rules. All issues are frontmatter-only. Content quality is exemplary. The `PageType` casing bug is the only issue requiring immediate attention as it affects tooling.
