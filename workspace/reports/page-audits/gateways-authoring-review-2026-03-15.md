# Gateways Authoring Review

Generated: 2026-03-14T16:23:28.155Z

## Scope

- Audited active gateway MDX pages under `v2/gateways/` root, `v2/gateways/concepts/`, and `v2/gateways/guides/`.
- Excluded support and working-note files such as `review.md`, `sources.md`, `to-include.md`, `evaluation.md`, `verify-notes.md`, archived `x-*` pages, and the research page `v2/gateways/personas.md`.
- Validation sources: authoring-skill heuristics plus `style-guide.test`, `quality.test`, `mdx.test`, and `links-imports.test` findings scoped to these pages.

## Summary

- Pages audited: 42
- Pages with findings: 42
- Clean pages: 0
- The highest-volume root causes are raw markdown dividers, advisory `CustomDivider` margin overrides, missing Accordion/Tab icons, raw Markdown tables, and frontmatter enum drift (`status`, `audience`, `pageType`).
- Highest-value cleanup order: 1) normalize frontmatter enums, 2) fix import order and opening-page structure, 3) replace raw `---` dividers, 4) add icons and StyledTable usage, 5) tighten headings/openings/definition style and fill Related Pages gaps.
- Root navigation pages need separate triage because they also carry large clusters of stale legacy links.

## Recurring Issues

| Issue | Count |
| --- | ---: |
| Uses raw markdown divider; use CustomDivider. | 306 |
| `CustomDivider` inline styles are advisory only - prefer plain `<CustomDivider />` unless spacing context requires a margin override | 113 |
| `<Accordion>` is missing an icon prop. | 109 |
| Uses a raw Markdown table instead of StyledTable. | 57 |
| Invalid status: "current". Valid: draft, published, review, deprecated | 35 |
| `<Tab>` is missing an icon prop. | 31 |
| Missing a Related Pages section. | 25 |
| First rendered body element after imports is not the opening CustomDivider. | 22 |
| Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all | 21 |
| Rendered content appears before imports. | 18 |
| Inline styles in MDX files - use component primitives instead | 14 |
| Possible negation-first definition - define positively first, then add a boundary sentence only if needed | 9 |
| Opening paragraph sounds templated - prefer a human explanatory opening over "This page/guide..." boilerplate | 7 |
| Review filler/marketing wording: unlock | 7 |
| Review filler/marketing wording: easy | 6 |

## Root Pages

### `v2/gateways/index.mdx`
- Status: needs correction (2 error groups); 5 issue groups / 209 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 200. Lines: 1. Source: links-imports. Examples: `"guides/advanced-operations/all-resources/ctx-gwnew--content-brief-gwd-addendum-composable.md"`; `"guides/advanced-operations/all-resources/ctx-gwnew--content-brief-gwe-clearinghouse-middleware.md"`; `"guides/advanced-operations/all-resources/ctx-gwnew--content-brief-gwoq5-publish-gateway.md"`; `"guides/advanced-operations/all-resources/ctx-new--connect-with-offerings-publish.mdx"`; `"guides/advanced-operations/all-resources/ctx-new--connect-with-offerings.mdx"`; +195 more. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 17. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Filler or marketing wording. Occurrences: 3. Lines: 417, 605, 742. Source: style-guide. Terms: `easy`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Missing audience field (recommended for audit framework); Missing lastVerified field (recommended for audit framework); Missing status field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 7. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.

### `v2/gateways/navigator.mdx`
- Status: needs correction (2 error groups); 8 issue groups / 12 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/guides/job-pipelines/ai-inference"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 41. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: Raw markdown dividers. Occurrences: 3. Lines: 1, 26, 45. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Overlong headings. Occurrences: 2. Lines: 169, 297. Source: authoring-skill. Examples: `Your journey through the docs`; `Find your entry point by persona`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 36. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Question headings. Occurrences: 1. Lines: 47. Source: authoring-skill. Examples: `What's your goal?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 299. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.

### `v2/gateways/portal.mdx`
- Status: warning-only review; 3 issue groups / 7 total findings
- Recommended fixes:
  - Warn: Frontmatter metadata drift. Occurrences: 4. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "landing". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Missing lastVerified field (recommended for audit framework); Missing status field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 35. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 45. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

## Concept Pages

### `v2/gateways/concepts/architecture.mdx`
- Status: warning-only review; 6 issue groups / 9 total findings
- Recommended fixes:
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "concept". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 31. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: CustomDivider margin overrides. Occurrences: 1. Lines: 63. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 54. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Overlong headings. Occurrences: 1. Lines: 250. Source: authoring-skill. Examples: `Video vs AI Pipelines`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 28. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/concepts/business-model.mdx`
- Status: needs correction (1 error group); 6 issue groups / 15 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 57. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 7. Lines: 61, 87, 125, 186, 223, 274, 284. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "concept". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 29. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 52. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Overlong headings. Occurrences: 1. Lines: 229. Source: authoring-skill. Examples: `Protocol-level costs (what you pay)`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.

### `v2/gateways/concepts/capabilities.mdx`
- Status: needs correction (1 error group); 6 issue groups / 14 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 56. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 6. Lines: 60, 76, 136, 211, 228, 243. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "concept". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 29. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 51. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Overlong headings. Occurrences: 1. Lines: 128. Source: authoring-skill. Examples: `BYOC (Bring Your Own Container)`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.

### `v2/gateways/concepts/role.mdx`
- Status: needs correction (1 error group); 6 issue groups / 15 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 4. Lines: 56, 196, 205, 206. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 5. Lines: 200, 228, 242, 267, 284. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 28. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Filler or marketing wording. Occurrences: 1. Lines: 102. Source: style-guide. Terms: `just`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 51. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

## Guide Pages

### `v2/gateways/guides/advanced-operations/gateway-middleware.mdx`
- Status: needs correction (1 error group); 10 issue groups / 32 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 10. Lines: 1, 12, 36, 71, 204, 253, 281, 304, +2 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 5. Lines: 38, 306, 438, 444, 449. Source: authoring-skill. Examples: `What middleware is responsible for`; `Usage metering and billing`; `5. Billing & Usage Tracking`; `6. Custom Routing Logic`; `7. Middleware vs Clearinghouse`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw Markdown tables. Occurrences: 4. Lines: 60, 261, 338, 450. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Accordion icons missing. Occurrences: 3. Lines: 209, 219, 239. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Tab icons missing. Occurrences: 3. Lines: 78, 118, 163. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 217, 285. Source: style-guide. Terms: `easy`; `powerful`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Question headings. Occurrences: 2. Lines: 408, 417. Source: authoring-skill. Examples: `1. What Is Gateway Middleware?`; `2. Why Build Middleware?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/advanced-operations/orchestrator-selection.mdx`
- Status: needs correction (1 error group); 9 issue groups / 32 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 12. Lines: 1, 12, 63, 79, 96, 112, 129, 145, +4 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 8. Lines: 30, 65, 81, 205, 305, 312, 322, 347. Source: authoring-skill. Examples: `How the gateway selects orchestrators`; `Selection criteria by workload`; `Pinning orchestrators (AI gateways)`; `AI-specific: capability and model matching`; `1. Default Selection Behaviour`; +3 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw Markdown tables. Occurrences: 4. Lines: 54, 69, 234, 314. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Accordion icons missing. Occurrences: 3. Lines: 174, 181, 192. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Negation-first definition. Occurrences: 1. Lines: 142. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 16. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/advanced-operations/production-hardening.mdx`
- Status: needs correction (1 error group); 9 issue groups / 29 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 12. Lines: 1, 12, 63, 79, 96, 112, 129, 145, +4 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 6. Lines: 30, 65, 81, 205, 306, 315. Source: authoring-skill. Examples: `How the gateway selects orchestrators`; `Selection criteria by workload`; `Pinning orchestrators (AI gateways)`; `AI-specific: capability and model matching`; `1. Production Readiness Checklist`; +1 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Accordion icons missing. Occurrences: 3. Lines: 174, 181, 192. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 54, 69, 234. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Negation-first definition. Occurrences: 1. Lines: 142. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 16. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/advanced-operations/publishing.mdx`
- Status: needs correction (2 error groups); 10 issue groups / 29 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/guides/operator-considerations/commercial-gateways"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 12, 34, 68, 107, 145, 161, 171, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 6. Lines: 147, 163, 250, 261, 287, 294. Source: authoring-skill. Examples: `Connecting to the Livepeer marketplace`; `For video gateways: the `-serviceAddr` in context`; `1. Gateway Discoverability — Current State`; `2. Service URI Configuration`; `6. Future: Formal Gateway Registry`; +1 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Accordion icons missing. Occurrences: 4. Lines: 77, 91, 99, 102. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Tab icons missing. Occurrences: 4. Lines: 114, 126, 131, 136. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Filler or marketing wording. Occurrences: 1. Lines: 137. Source: style-guide. Terms: `easy`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 16. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/advanced-operations/scaling.mdx`
- Status: needs correction (1 error group); 11 issue groups / 32 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 12, 34, 71, 119, 142, 183, 217, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 7. Lines: 41, 52, 63, 66, 224, 231, 238. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 3. Lines: 36, 311, 326. Source: authoring-skill. Examples: `Signs you need to scale`; `1. When to Scale`; `3. GPU Resource Management`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 150, 239, 336. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Negation-first definition. Occurrences: 2. Lines: 64, 135. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Question headings. Occurrences: 2. Lines: 144, 333. Source: authoring-skill. Examples: `Dual gateway: split or share?`; `4. Dual Gateway: Split or Share?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Tab icons missing. Occurrences: 2. Lines: 149, 160. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 16. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/deployment-details/setup-options.mdx`
- Status: warning-only review; 5 issue groups / 9 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 3. Lines: 49, 87, 232. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 26. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 44. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/deployment-details/setup-requirements.mdx`
- Status: needs correction (2 error groups); 9 issue groups / 22 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 3. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/setup/requirements/on-chain%20setup/bridge-lpt-to-arbitrum"`; `"/v2/gateways/setup/requirements/on-chain%20setup/fund-gateway"`; `"/v2/gateways/setup/requirements/on-chain%20setup/on-chain"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 46. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 7. Lines: 50, 104, 159, 246, 281, 320, 331. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Accordion icons missing. Occurrences: 3. Lines: 338, 348, 359. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 25. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Tab icons missing. Occurrences: 2. Lines: 166, 205. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Negation-first definition. Occurrences: 1. Lines: 59. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 42. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

### `v2/gateways/guides/monitoring-and-tooling/gateway-health-checks.mdx`
- Status: needs correction (1 error group); 7 issue groups / 28 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/guides/payments-and-pricing/fund-your-gateway"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Warn: Overlong headings. Occurrences: 13. Lines: 51, 73, 108, 127, 137, 169, 209, 317, +5 more. Source: authoring-skill. Examples: `Universal Checks — All Gateway Types`; `Node Status via livepeer_cli`; `Check ETH Deposit and Reserve`; `Test Arbitrum RPC Connectivity`; `Test RTMP Ingest (Optional)`; +8 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 8. Lines: 1, 25, 49, 97, 148, 191, 221, 254. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "how-to". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 43. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Reader-owned second-person framing. Occurrences: 1. Lines: 43. Source: authoring-skill. Fix: Use entity-led phrasing such as “the gateway” or “Gateway” instead of reader-owned framing like “your gateway”.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx`
- Status: needs correction (1 error group); 6 issue groups / 32 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 41. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Overlong headings. Occurrences: 11. Lines: 51, 92, 126, 176, 205, 259, 290, 421, +3 more. Source: authoring-skill. Examples: `Step 1 — Enable Prometheus Metrics`; `Step 2 — Prometheus Configuration`; `Key Metrics — Video Gateway`; `Key Metrics — AI Gateway`; `Key Metrics — Dual Gateway`; +6 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 10. Lines: 1, 25, 49, 90, 124, 174, 203, 227, +2 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Raw Markdown tables. Occurrences: 6. Lines: 76, 132, 143, 180, 422, 434. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "how-to". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/monitoring-and-tooling/on-chain-debugging.mdx`
- Status: needs correction (1 error group); 7 issue groups / 27 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 44. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Overlong headings. Occurrences: 10. Lines: 52, 63, 72, 114, 128, 140, 172, 194, +2 more. Source: authoring-skill. Examples: `How Livepeer Payments Work On-Chain`; `Arbiscan — Your On-Chain Window`; `Find Your Gateway on Arbiscan`; `Set Up Arbiscan Watchlist Notifications`; `Verify Deposit State On-Chain`; +5 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 28, 50, 61, 126, 166, 202, 223, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 99, 100. Source: style-guide. Terms: `unlock`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw Markdown tables. Occurrences: 2. Lines: 82, 94. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`
- Status: warning-only review; 8 issue groups / 32 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 25, 57, 92, 118, 144, 224, 240, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 8. Lines: 246, 250, 254, 258, 262, 266, 270, 274. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 7. Lines: 67, 100, 120, 162, 368, 385, 397. Source: authoring-skill. Examples: `What Gateway Operators Use Explorer For`; `What Gateway Operators Use Livepeer Tools For`; `Arbiscan — On-Chain Event Monitoring`; `Key Commands for Gateway Operators`; `3. Livepeer Tools Dashboard`; +2 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Question headings. Occurrences: 2. Lines: 242, 403. Source: authoring-skill. Examples: `Which Tool When?`; `7. Which Tool When?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 2. Lines: 47, 352. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 43. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx`
- Status: needs correction (2 error groups); 9 issue groups / 42 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 2. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/guides/payments-and-pricing/fund-your-gateway"`; `"/v2/gateways/guides/setup-options/setup-paths"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 44. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Accordion icons missing. Occurrences: 19. Lines: 56, 91, 123, 138, 154, 175, 191, 218, +11 more. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Raw markdown dividers. Occurrences: 8. Lines: 1, 28, 50, 185, 271, 324, 462, 492. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 4. Lines: 566, 587, 602, 611. Source: authoring-skill. Examples: `1. Video Gateway Issues`; `2. AI Gateway Issues`; `3. Dual Gateway Issues`; `4. Common Errors (all gateway types)`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "troubleshooting". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 104, 301, 480. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Filler or marketing wording. Occurrences: 1. Lines: 386. Source: style-guide. Terms: `unlock`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/node-pipelines/ai-pipelines.mdx`
- Status: warning-only review; 7 issue groups / 26 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 12. Lines: 46, 59, 93, 146, 287, 334, 354, 386, +4 more. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 8. Lines: 98, 408, 629, 641, 660, 666, 672, 677. Source: authoring-skill. Examples: `AI vs Video Comparison`; `Off-chain vs On-chain AI`; `1. AI Pipeline Architecture`; `2. Available Pipeline Types`; `4. Model & Pipeline Matching`; +3 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 24. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Mermaid palette missing. Occurrences: 1. Lines: 70. Source: authoring-skill. Fix: Add the hardcoded Mermaid theme init block using `/snippets/components/page-structure/mermaid-colours.jsx` as the source of truth.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 43. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 642. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.

### `v2/gateways/guides/node-pipelines/byoc-pipelines.mdx`
- Status: warning-only review; 8 issue groups / 20 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 7. Lines: 41, 51, 79, 96, 106, 160, 190. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 6. Lines: 272, 283, 296, 306, 312, 317. Source: authoring-skill. Examples: `2. Capabilities as API Contracts`; `3. Gateway Operator Responsibilities`; `4. Model & Workload Fit`; `5. BYOC Implementation Patterns`; `6. Discovering BYOC Capabilities`; +1 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 20. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Negation-first definition. Occurrences: 1. Lines: 45. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 39. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Question headings. Occurrences: 1. Lines: 263. Source: authoring-skill. Examples: `1. What Is BYOC?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 299. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.

### `v2/gateways/guides/node-pipelines/dep-ai-inference.mdx`
- Status: warning-only review; 7 issue groups / 31 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 12. Lines: 42, 55, 89, 109, 182, 212, 232, 264, +4 more. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 8. Lines: 94, 286, 452, 464, 483, 489, 495, 500. Source: authoring-skill. Examples: `AI vs Video Comparison`; `Off-chain vs On-chain AI`; `1. AI Pipeline Architecture`; `2. Available Pipeline Types`; `4. Model & Pipeline Matching`; +3 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw Markdown tables. Occurrences: 5. Lines: 96, 118, 337, 372, 465. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 24. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Tab icons missing. Occurrences: 2. Lines: 289, 305. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Mermaid palette missing. Occurrences: 1. Lines: 66. Source: authoring-skill. Fix: Add the hardcoded Mermaid theme init block using `/snippets/components/page-structure/mermaid-colours.jsx` as the source of truth.

### `v2/gateways/guides/node-pipelines/guide.mdx`
- Status: warning-only review; 8 issue groups / 15 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 5. Lines: 43, 72, 156, 214, 251. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 3. Lines: 334, 342, 347. Source: authoring-skill. Examples: `2. Three Pipeline Types`; `3. Gateway Role per Pipeline`; `4. Pipeline Selection by Gateway Type`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 21. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 40. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Question headings. Occurrences: 1. Lines: 327. Source: authoring-skill. Examples: `1. What Is a Job Pipeline?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 336. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/node-pipelines/pipeline-configuration.mdx`
- Status: needs correction (1 error group); 6 issue groups / 12 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 50. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 5. Lines: 48, 93, 407, 443, 517. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid pageType: "how-to". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 22. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 44. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 30. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/node-pipelines/video-pipelines.mdx`
- Status: needs correction (1 error group); 10 issue groups / 15 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `"../payments-and-pricing/payment-paths"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Warn: Overlong headings. Occurrences: 5. Lines: 475, 488, 506, 511, 516. Source: authoring-skill. Examples: `1. Video Pipeline Architecture`; `3. Orchestrator Selection for Video`; `5. Output & Quality`; `6. On-Chain Payment Flow`; `7. Tuning Your Video Pipeline`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 22. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: CustomDivider margin overrides. Occurrences: 1. Lines: 46. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Filler or marketing wording. Occurrences: 1. Lines: 189. Source: style-guide. Terms: `seamless`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Negation-first definition. Occurrences: 1. Lines: 44. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 41. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Relative internal links. Occurrences: 1. Lines: 1. Source: quality. Examples: `../payments-and-pricing/payment-paths (consider using absolute path)`. Fix: Convert repo-relative links to stable absolute docs routes where possible.

### `v2/gateways/guides/operator-considerations/business-case.mdx`
- Status: needs correction (2 error groups); 9 issue groups / 38 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 4. Lines: 46, 60, 63, 85. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `""../../../../../developers/""`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Warn: Accordion icons missing. Occurrences: 12. Lines: 313, 320, 330, 335, 338, 346, 351, 356, +4 more. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: CustomDivider margin overrides. Occurrences: 10. Lines: 53, 105, 123, 159, 216, 261, 306, 363, +2 more. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Tab icons missing. Occurrences: 4. Lines: 164, 176, 188, 199. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 26. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Relative internal links. Occurrences: 2. Lines: 1. Source: quality. Examples: `"../../../../../developers/" (consider using absolute path)`; `"../../../solutions/daydream/ (consider using absolute path)`. Fix: Convert repo-relative links to stable absolute docs routes where possible.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 43. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

### `v2/gateways/guides/operator-considerations/production-gateways.mdx`
- Status: needs correction (1 error group); 6 issue groups / 22 total findings
- Recommended fixes:
  - Error: Inline styles in MDX. Occurrences: 1. Lines: 47. Source: style-guide. Fix: Replace inline styles with approved primitives or component props, except for the allowed Mermaid theme block case.
  - Warn: CustomDivider margin overrides. Occurrences: 13. Lines: 55, 96, 109, 122, 137, 153, 167, 182, +5 more. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 3. Lines: 155, 198, 212. Source: authoring-skill. Examples: `Livepeer Cloud (Cloud SPE)`; `Community Remote Signer (Elite Encoder)`; `NaaP - Network as a Platform`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 26. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 45. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

### `v2/gateways/guides/opportunities/community-ecosystem.mdx`
- Status: warning-only review; 6 issue groups / 28 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 16. Lines: 1, 25, 77, 89, 100, 114, 124, 141, +8 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 8. Lines: 79, 102, 126, 128, 154, 194, 196, 206. Source: authoring-skill. Examples: `Commercial products and platforms`; `Livepeer Cloud (Cloud SPE)`; `Infrastructure and tooling projects`; `NaaP  - Network as a Platform`; `Community remote signer (Elite Encoder)`; +3 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 73. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 225. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/opportunities/naap-multi-tenancy.mdx`
- Status: warning-only review; 7 issue groups / 25 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 11. Lines: 1, 25, 76, 108, 141, 158, 207, 259, +3 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 7. Lines: 110, 143, 209, 211, 227, 288, 303. Source: authoring-skill. Examples: `Two independent payment layers`; `Reference implementation: the NaaP dashboard`; `Building the product layer`; `Option 1: Use the NaaP reference implementation`; `Option 2: Build your own product layer`; +2 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 189, 265, 275. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Mermaid palette missing. Occurrences: 1. Lines: 164. Source: authoring-skill. Fix: Add the hardcoded Mermaid theme init block using `/snippets/components/page-structure/mermaid-colours.jsx` as the source of truth.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 70. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/opportunities/overview.mdx`
- Status: warning-only review; 8 issue groups / 30 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 24, 109, 126, 184, 229, 270, 291, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Tab icons missing. Occurrences: 7. Lines: 131, 143, 155, 166, 234, 243, 261. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 6. Lines: 77, 111, 186, 231, 272, 293. Source: authoring-skill. Examples: `AI Video Startup Programme`; `The core business model`; `Why now: the off-chain payment mode changes the economics`; `Opportunity paths by gateway type`; `What you can build with a gateway`; +1 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Accordion icons missing. Occurrences: 4. Lines: 277, 280, 283, 286. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Mermaid palette missing. Occurrences: 1. Lines: 115. Source: authoring-skill. Fix: Add the hardcoded Mermaid theme init block using `/snippets/components/page-structure/mermaid-colours.jsx` as the source of truth.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 103. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/opportunities/spe-grant-model.mdx`
- Status: warning-only review; 8 issue groups / 24 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 10. Lines: 1, 24, 76, 88, 119, 131, 156, 190, +2 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 5. Lines: 90, 121, 133, 158, 192. Source: authoring-skill. Examples: `SPEs operating gateways today`; `What the SPE model enables for gateway operators`; `What makes a fundable SPE proposal`; `How to propose an SPE`; `SPE vs AI Video Startup Programme`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Accordion icons missing. Occurrences: 4. Lines: 138, 143, 148, 151. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 70. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.
  - Warn: Question headings. Occurrences: 1. Lines: 78. Source: authoring-skill. Examples: `What is an SPE?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 196. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx`
- Status: needs correction (1 error group); 9 issue groups / 30 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 29. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 11. Lines: 1, 13, 37, 55, 78, 97, 115, 156, +3 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 7. Lines: 99, 117, 158, 290, 320, 334, 349. Source: authoring-skill. Examples: `Clearinghouse vs remote signer`; `Using a clearinghouse as a developer`; `Building your own clearinghouse`; `2. Why Clearinghouses Exist`; `5. How to Connect (operator perspective)`; +2 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Accordion icons missing. Occurrences: 3. Lines: 197, 201, 205. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 84, 162, 327. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Duplicate top heading. Occurrences: 1. Lines: 29. Source: authoring-skill. Fix: Remove the repeated top heading. Frontmatter already renders the page title.
  - Warn: Question headings. Occurrences: 1. Lines: 281. Source: authoring-skill. Examples: `1. What is a Clearinghouse?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx`
- Status: needs correction (2 error groups); 10 issue groups / 28 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 3. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/guides/payments-and-pricing/fund-your-gateway"`; `"/v2/gateways/guides/payments-and-pricing/related/how-payments-work"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 28. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Accordion icons missing. Occurrences: 6. Lines: 127, 131, 135, 139, 143, 147. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: CustomDivider margin overrides. Occurrences: 6. Lines: 35, 47, 68, 122, 154, 162. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Overlong headings. Occurrences: 3. Lines: 230, 238, 244. Source: authoring-skill. Examples: `1. Payment Model by Gateway Type`; `2. How Livepeer Payments Work (summary)`; `3. Three Payment Architectures`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Tab icons missing. Occurrences: 3. Lines: 73, 89, 105. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 12. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Question headings. Occurrences: 1. Lines: 250. Source: authoring-skill. Examples: `4. Which Path Should I Choose?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 53. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.

### `v2/gateways/guides/payments-and-pricing/funding-guide.mdx`
- Status: warning-only review; 6 issue groups / 20 total findings
- Recommended fixes:
  - Warn: CustomDivider margin overrides. Occurrences: 8. Lines: 37, 45, 72, 108, 116, 198, 221, 235. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Filler or marketing wording. Occurrences: 3. Lines: 225, 229, 232. Source: style-guide. Terms: `unlock`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid pageType: "how-to". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Overlong headings. Occurrences: 3. Lines: 74, 110, 118. Source: authoring-skill. Examples: `Step 1 - Get ETH`; `Step 2 - Transfer`; `Step 3 - Deposit`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 12. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Opening divider missing or misplaced. Occurrences: 1. Lines: 34. Source: authoring-skill. Fix: Place the opening CustomDivider immediately after the import block and before any Note, Tip, media block, or prose.

### `v2/gateways/guides/payments-and-pricing/payment-guide.mdx`
- Status: needs correction (1 error group); 5 issue groups / 15 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 34. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Accordion icons missing. Occurrences: 6. Lines: 50, 56, 62, 68, 74, 80. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: CustomDivider margin overrides. Occurrences: 4. Lines: 43, 87, 142, 170. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw markdown dividers. Occurrences: 2. Lines: 1, 12. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.

### `v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx`
- Status: warning-only review; 7 issue groups / 28 total findings
- Recommended fixes:
  - Warn: Raw markdown dividers. Occurrences: 9. Lines: 1, 12, 48, 58, 104, 192, 205, 229, +1 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 8. Lines: 110, 122, 182, 194, 221, 362, 369, 378. Source: authoring-skill. Examples: `Payment types for AI`; `Configuring AI price caps`; `Live AI interval pricing`; `All pricing flags at a glance`; `Setting a sensible starting cap`; +3 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Tab icons missing. Occurrences: 4. Lines: 236, 250, 265, 281. Source: authoring-skill. Fix: Add FontAwesome icons to each Tab using the icon map and authoring guidance.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 67, 114, 196. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: CustomDivider margin overrides. Occurrences: 1. Lines: 36. Source: style-guide. Fix: Review each margin override and keep only the cases needed for table/card/header spacing. Use plain `<CustomDivider />` elsewhere.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/payments-and-pricing/remote-signers.mdx`
- Status: needs correction (1 error group); 11 issue groups / 30 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 29. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 10. Lines: 1, 13, 39, 66, 121, 132, 195, 226, +2 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 4. Lines: 202, 208, 215, 221. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 4. Lines: 72, 82, 343, 385. Source: authoring-skill. Examples: `Operation 1: GetOrchestratorInfo signature`; `Operation 2: Payment ticket signing`; `3. Scope: Live AI Only (current)`; `7. Community Remote Signer`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Question headings. Occurrences: 3. Lines: 41, 322, 326. Source: authoring-skill. Examples: `Why use a remote signer?`; `1. What is a Remote Signer?`; `2. Why Use a Remote Signer?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 115, 203. Source: style-guide. Terms: `seamless`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Frontmatter metadata drift. Occurrences: 2. Lines: 1. Source: quality. Problems: Invalid audience: "gateway-operator". Valid: developer, orchestrator, gateway, delegator, community, all; Invalid status: "current". Valid: draft, published, review, deprecated. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Duplicate top heading. Occurrences: 1. Lines: 29. Source: authoring-skill. Fix: Remove the repeated top heading. Frontmatter already renders the page title.
  - Warn: Mermaid palette missing. Occurrences: 1. Lines: 86. Source: authoring-skill. Fix: Add the hardcoded Mermaid theme init block using `/snippets/components/page-structure/mermaid-colours.jsx` as the source of truth.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 49. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx`
- Status: needs correction (2 error groups); 10 issue groups / 33 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 1. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/setup/requirements/on-chain%20setup/on-chain"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 23. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 12. Lines: 1, 7, 40, 67, 92, 216, 285, 341, +4 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 5. Lines: 432, 440, 449, 458, 466. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 5. Lines: 94, 218, 287, 343, 477. Source: authoring-skill. Examples: `Part 1: Build the CPU BYOC container`; `Part 2: Run the orchestrator`; `Part 3: Run the gateway (off-chain mode)`; `Part 4: Send a test job`; `Part 6: Graduate to on-chain production`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 4. Lines: 1. Source: quality. Problems: Missing audience field (recommended for audit framework); Missing lastVerified field (recommended for audit framework); Missing pageType field (recommended for audit framework); Missing status field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 347, 534. Source: style-guide. Terms: `easy`; `unlock`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Overlong SEO title. Occurrences: 1. Lines: 1. Source: quality. Fix: Shorten the frontmatter title so it stays within the recommended search length.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
  - Warn: Templated opening prose. Occurrences: 1. Lines: 16. Source: style-guide. Fix: Rewrite the opening into direct explanatory prose instead of a template like “This page/guide...”.

### `v2/gateways/guides/tutorials/gateway-orchestrator-full-tutorial/tutorial-byoc-cpu-pipeline.mdx`
- Status: needs correction (2 error groups); 10 issue groups / 51 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 2. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/tutorials/tutorial-go-production"`; `"/v2/gateways/tutorials/tutorial-offchain-transcoding-test"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 18. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Overlong headings. Occurrences: 20. Lines: 33, 106, 113, 123, 187, 208, 210, 242, +12 more. Source: authoring-skill. Examples: `What you will build`; `Step 1 — Build the PyTrickle frame processor`; `1a — Install PyTrickle locally (for development)`; `1b — Write the processor`; `1c — Grayscale variant (alternative to green tint)`; +15 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 13. Lines: 1, 9, 31, 65, 91, 104, 206, 254, +5 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 5. Lines: 606, 610, 619, 627, 637. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Missing audience field (recommended for audit framework); Missing lastVerified field (recommended for audit framework); Missing pageType field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 283, 578. Source: style-guide. Terms: `just`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Negation-first definition. Occurrences: 2. Lines: 313, 638. Source: style-guide. Fix: Define the concept positively first, then add a boundary sentence only if the contrast is still needed.
  - Warn: Raw Markdown tables. Occurrences: 2. Lines: 363, 397. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/tutorials/gateway-orchestrator-full-tutorial/tutorial-go-production.mdx`
- Status: needs correction (2 error groups); 9 issue groups / 50 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 6. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/references/contract-addresses"`; `"/v2/gateways/references/hardware-requirements"`; `"/v2/gateways/run-a-gateway/monitor/monitor-and-optimise"`; `"/v2/gateways/run-a-gateway/requirements/on-chain"`; `"/v2/gateways/tutorials/tutorial-byoc-cpu-pipeline"`; +1 more. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 18. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Overlong headings. Occurrences: 20. Lines: 51, 53, 61, 86, 109, 139, 170, 172, +12 more. Source: authoring-skill. Examples: `Upgrade 1 — On-chain registration`; `What this gives you`; `1.1 — Acquire ETH on Arbitrum One`; `1.2 — Create a dedicated wallet for your gateway`; `1.3 — Deposit PM funds on-chain`; +13 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Raw markdown dividers. Occurrences: 10. Lines: 1, 9, 31, 49, 168, 259, 392, 443, +2 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 5. Lines: 474, 480, 487, 496, 500. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Missing audience field (recommended for audit framework); Missing lastVerified field (recommended for audit framework); Missing pageType field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Raw Markdown tables. Occurrences: 3. Lines: 37, 65, 185. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Question headings. Occurrences: 1. Lines: 33. Source: authoring-skill. Examples: `Which upgrades do you need?`. Fix: Rename the heading into a concise technical label rather than a question.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/tutorials/gateway-orchestrator-full-tutorial/tutorial-offchain-transcoding-test.mdx`
- Status: needs correction (2 error groups); 9 issue groups / 32 total findings
- Recommended fixes:
  - Error: Broken internal links. Occurrences: 2. Lines: 1. Source: links-imports. Examples: `"/v2/gateways/tutorials/tutorial-byoc-cpu-pipeline"`; `"/v2/gateways/tutorials/tutorial-go-production"`. Fix: Replace stale targets with current routes, or remove links to archived/all-resources/support files. Use this page only as a hub for live docs pages.
  - Error: Import order violation. Occurrences: 1. Lines: 18. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 11. Lines: 1, 9, 31, 58, 96, 136, 177, 218, +3 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Accordion icons missing. Occurrences: 5. Lines: 289, 293, 297, 301, 305. Source: authoring-skill. Fix: Add FontAwesome icons to each Accordion using the icon map and authoring guidance.
  - Warn: Overlong headings. Occurrences: 5. Lines: 33, 98, 138, 179, 220. Source: authoring-skill. Examples: `What you will build`; `Step 1 — Start the orchestrator`; `Step 2 — Start the gateway`; `Step 3 — Send a test stream`; `Step 4 — Verify the output`. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 3. Lines: 1. Source: quality. Problems: Missing audience field (recommended for audit framework); Missing lastVerified field (recommended for audit framework); Missing pageType field (recommended for audit framework). Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Filler or marketing wording. Occurrences: 2. Lines: 261, 263. Source: style-guide. Terms: `just`. Fix: Replace sales or filler wording with direct technical phrasing.
  - Warn: Raw Markdown tables. Occurrences: 2. Lines: 114, 155. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.

### `v2/gateways/guides/tutorials/tutorials-resources.mdx`
- Status: needs correction (1 error group); 7 issue groups / 93 total findings
- Recommended fixes:
  - Error: Import order violation. Occurrences: 1. Lines: 40. Source: authoring-skill. Fix: Keep imports directly below frontmatter/comments. Move rendered Notes, Tips, media blocks, and prose below the import block.
  - Warn: Raw markdown dividers. Occurrences: 47. Lines: 1, 18, 44, 53, 64, 73, 82, 92, +39 more. Source: authoring-skill. Fix: Replace each raw `---` divider with `<CustomDivider />`, and only add margin overrides where the spacing context genuinely requires them.
  - Warn: Overlong headings. Occurrences: 41. Lines: 46, 55, 66, 75, 84, 94, 104, 114, +33 more. Source: authoring-skill. Examples: `1.1 Official Gateway Quickstart (Video Gateway, On-chain)`; `1.2 AI Gateway Configuration Guide`; `1.3 Docker Install for Gateways`; `1.4 Livepeer.cloud: How to Run a Gateway Node`; `1.5 j0sh's livepeer-python-gateway: README + Examples`; +36 more. Fix: Shorten headings toward the 3-word guide target and keep them technical rather than narrative.
  - Warn: Frontmatter metadata drift. Occurrences: 1. Lines: 1. Source: quality. Problems: Invalid pageType: "landing". Valid: quickstart, tutorial, reference, conceptual, portal, api, guide, overview, index. Fix: Normalize frontmatter to the current enum set and add any missing audit fields before further content cleanup.
  - Warn: Missing guide review block. Occurrences: 1. Lines: 19. Source: authoring-skill. Fix: Insert the canonical guide TODO/review block directly below frontmatter and before imports.
  - Warn: Raw Markdown tables. Occurrences: 1. Lines: 452. Source: authoring-skill. Fix: Convert Markdown tables to `StyledTable`, `TableRow`, and `TableCell` primitives.
  - Warn: Related Pages missing. Occurrences: 1. Lines: 1. Source: authoring-skill. Fix: End the page with `## Related Pages` plus a focused CardGroup of next-step links.
