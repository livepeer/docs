# !important Removal Report

Generated: 2026-03-09

## Results

| # | File | Instance | Resolution | Visual impact |
|---|------|----------|-----------|---------------|
| 1 | `snippets/components/primitives/previewCallouts.jsx:44` | `ComingSoonCallout` link color | Removed - plain inline `color: var(--hero-text)` is sufficient | None observed |
| 2 | `snippets/components/primitives/previewCallouts.jsx:158` | `PreviewCallout` link color | Removed - plain inline `color: var(--hero-text)` is sufficient | None observed |
| 3 | `snippets/components/layout/steps.jsx:38` | `StyledSteps` icon background | Removed - wrapper-scoped CSS variables now flow through root `style.css` | None observed |
| 4 | `snippets/components/layout/steps.jsx:41` | `StyledSteps` title color | Removed - wrapper-scoped CSS variables now flow through root `style.css` | None observed |
| 5 | `snippets/components/layout/steps.jsx:44` | `StyledSteps` connector line background | Removed - wrapper-scoped CSS variables now flow through root `style.css` | None observed |
| 6 | `snippets/components/data/data.jsx:736` | `DiscordAnnouncements` view link color | Removed - plain inline `color: var(--text)` is sufficient | None observed |

## Remaining !important

None.

## Override Registry Updates

None required. All six deferred component-level `!important` overrides were removed.

## Validation Notes

- The task inventory was stale in two ways on the current `docs-v2` line: `ReviewCallout` did not contain a deferred `!important`, and the active files remained at `snippets/components/primitives/previewCallouts.jsx` and `snippets/components/data/data.jsx` rather than the post-migration paths listed in the original task.
- Live browser checks confirmed:
  - React-style `color: "... !important"` values are malformed for the callout links and trigger color parse errors on routed pages.
  - Removing `!important` from `DiscordAnnouncements` does not change the computed color.
  - Removing `!important` from the `StyledSteps` selectors does not change computed colors on the default-token live page.
- Local Mint preview via `bash lpd dev` is currently blocked by an unrelated existing MDX parse error in `docs-guide/indexes/scripts-index.mdx`, so local browser verification could not be completed in this worktree without fixing unrelated content.
