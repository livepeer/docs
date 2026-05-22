# Review: governance-pipeline.mdx

| Field | Value |
|---|---|
| **File** | `v2/internal/overview/governance-pipeline.mdx` |
| **Reviewer** | Claude (automated audit) |
| **Date** | 2026-04-08 |
| **Verdict** | PASS |

## Summary

Comprehensive guide documenting the script governance pipeline: trigger chain, auto-fix vs human items, commands, adding scripts, and the 9-field schema. Well-structured, factual, complete.

## Frontmatter Table

| Field | Present | Value | Conformant |
|---|---|---|---|
| title | Yes | Governance Pipeline | OK |
| description | Yes | Detailed description | OK |
| Purpose | Yes | operations | WARN -- capitalised "Purpose" (should be lowercase) |
| audience | Yes | internal | OK |
| lastVerified | Yes | 2026-03-17 | OK |
| pageType | Yes | guide | OK |
| keywords | Yes | 10 items | OK |
| og:image | Yes | fallback.png | OK |
| og:image:alt | Yes | Present | OK |
| sidebarTitle | No | -- | MISSING |

## Heading Score Table

| Criterion | Score | Notes |
|---|---|---|
| H1 present | No | No H1 (starts with paragraph) |
| Banned heading words | None | -- |
| Heading hierarchy | OK | H2 > H3 throughout |
| Heading count | 8 | Adequate |

## Category Findings

| Cat | Status | Notes |
|---|---|---|
| 1 FRONTMATTER | PARTIAL | "Purpose" capitalised (should be lowercase); sidebarTitle missing |
| 2 VOICE | PASS | Clear, factual, UK-compatible |
| 3 HEADINGS | WARN | No H1 |
| 4 STRUCTURE | PASS | Single job; well-structured guide |
| 5 LAYOUT | PASS | Tables, code blocks, numbered steps |
| 6 VERACITY | PASS | References real scripts and paths |
| 7 NAV | PASS | In docs.json |
| 8 LINKS | PASS | No external links to break |
| 9 PROCESS | PASS | lastVerified set |
| 10 COMPLETENESS | PASS | Covers full pipeline lifecycle |

## Verdict

**PASS.** Fix capitalised "Purpose" to "purpose" in frontmatter. Add sidebarTitle.
