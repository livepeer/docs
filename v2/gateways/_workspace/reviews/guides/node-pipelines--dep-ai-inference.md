# Review: dep-ai-inference.mdx

**Path:** `v2/gateways/guides/node-pipelines/dep-ai-inference.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | PASS - "AI Inference Pipeline" |
| 1.3 PageType | WARN - `PageType` (capital T) |
| 1.5 status | FAIL - status: current but this is a dep- (deprecated) file |
| 2.1 UK English | WARN - "rather than" used instead of UK alternatives |
| 2.12 entity-led voice | WARN - line 56: "how AI jobs flow through your gateway" - lowercase sentence fragment |
| 2.13 no em-dashes | FAIL - line 154: em-dash ranges "4--8", line 159: "15--30 FPS" |
| 3.1 heading score | 22/25 |
| 4.1 one job | FAIL - DUPLICATE of ai-pipelines.mdx |
| 4.11 no TODO in body | WARN - TODO block present |
| 4.12 no REVIEW flags | FAIL - 4+ REVIEW flags (lines 137, 202, 234, 322) |
| 4.13 min 2KB | PASS - 24.4KB |
| 5.1 correct template | FAIL - raw markdown tables instead of StyledTable |
| 5.15 Related Pages | PASS - CardGroup present |
| 7.1 in docs.json | FAIL - not in docs.json nav |
| 8.6 links resolve | WARN - port 8937 throughout (should be 8935) |

## Frontmatter

| Field | Value | Valid |
|-------|-------|-------|
| title | AI Inference Pipeline | PASS |
| description | How AI inference jobs flow... | PASS |
| PageType | guide | WARN - casing |
| status | current | FAIL - should be deprecated |

## Verdict

**FAIL - CRITICAL DUPLICATE.** Pre-edit version of ai-pipelines.mdx. Uses wrong port (8937 vs 8935), raw markdown tables, has unresolved REVIEW flags, and is not in docs.json. Should be moved to x-deprecated/ or deleted.
