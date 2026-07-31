# Livepeer MDX Preview

VS Code extension that previews MDX files with Livepeer custom components, governed Mintlify built-ins, and Mermaid diagrams.

## Usage

1. Open any `.mdx` or `.md` file
2. Press **Cmd+Shift+V** (Mac) / **Ctrl+Shift+V** (Windows/Linux)
3. Preview opens in a side panel

The preview updates automatically as you type (300ms debounce).

## Features

- Standard Markdown rendering (via markdown-it)
- Mermaid diagram rendering with Livepeer theme colors
- Mintlify built-in components rendered as styled HTML, including `Tree`, `Tree.Folder`, `Tree.File`, response/param field docs, and common callouts/cards/tables
- Descriptive placeholder rendering for runtime-heavy built-ins such as `OpenAPI`
- 40+ Livepeer custom components rendered as styled HTML
- Remaining components shown as labeled placeholders with children rendered
- Frontmatter metadata displayed as a header bar
- Light/dark theme detection (matches VS Code theme)
- Checked-in `.vsix` package is validated against source before install

## Installation

Preferred install path from repo root:

```bash
bash tools/editor-extensions/install.sh
```

The installer verifies that the checked-in `.vsix` matches source and fails if the package is stale.

Manual rebuild from this directory:

```bash
npx @vscode/vsce package --no-dependencies -o lpd-mdx-preview-0.0.2.vsix
```

Then in VS Code: Extensions → `...` menu → "Install from VSIX" → select `lpd-mdx-preview-0.0.2.vsix`.

## Component Support

| Tier | Count | Rendering |
|------|-------|-----------|
| Mintlify built-ins | 20+ | Styled HTML for common built-ins plus canonical tree rendering; `OpenAPI` stays descriptive/approximate |
| Livepeer custom | ~40 | Styled HTML matching actual component output |
| All other | ~90 | Labeled placeholder with rendered children |

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `livepeer.mdxPreview.theme` | `auto` | Preview theme: `auto`, `light`, or `dark` |

## License

MIT
