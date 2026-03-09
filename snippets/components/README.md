# Components Library

`snippets/components/` is the governed JSX component library for the docs site.

## Active Categories

```text
components/
├── primitives/       # standalone visual atoms
├── layout/           # spacing, grouping, and arrangement wrappers
├── content/          # code, quotes, embeds, media, and structured content renderers
├── data/             # feed-driven and external-data components
├── page-structure/   # portal and frame-mode scaffolding
└── _archive/         # retired or historical component material
```

Every active category keeps an `examples/` subdirectory for runnable MDX examples.

## Naming Rules

- Files use kebab-case, for example `frame-mode.jsx` and `custom-cards.jsx`.
- Exports use PascalCase named exports.
- Example files use kebab-case with the `-examples.mdx` suffix.

## Governance Rules

- Every exported component must carry the full governance JSDoc block.
- Colours must resolve through `var(--lp-*)` tokens or approved legacy aliases.
- `_archive/` content is excluded from active governance tooling.
- Use full import paths with file extensions, for example `/snippets/components/primitives/divider.jsx`.

## Notes

- Legacy `display/`, `domain/`, and `integrations/` categories were retired in Phase 3.
- Gateway- or section-specific helpers that are not part of the governed library continue to live outside this folder.
