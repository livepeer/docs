# Livepeer MDX Preview

VS Code extension that previews MDX files with Livepeer custom components, Mintlify built-ins, and Mermaid diagrams.

## Usage

1. Open any `.mdx` or `.md` file
2. Press **Cmd+Shift+V** (Mac) / **Ctrl+Shift+V** (Windows/Linux)
3. Preview opens in a side panel

The preview updates automatically as you type (300ms debounce).

## Features

- Standard Markdown rendering (via markdown-it)
- Mermaid diagram rendering with Livepeer theme colors
- Mintlify built-in components: Card, Tabs, Accordion, Steps, Note, Tip, Warning, etc.
- 40+ Livepeer custom components rendered as styled HTML
- Remaining components shown as labeled placeholders with children rendered
- Frontmatter metadata displayed as a header bar
- Light/dark theme detection (matches VS Code theme)

## Installation

From this directory:

```bash
npx @vscode/vsce package
```

Then in VS Code: Extensions → `...` menu → "Install from VSIX" → select the generated `.vsix` file.

## Component Support

| Tier | Count | Rendering |
|------|-------|-----------|
| Mintlify built-ins | ~20 | Styled HTML (Card, Tabs, Accordion, Steps, callouts, etc.) |
| Livepeer custom | ~40 | Styled HTML matching actual component output |
| All other | ~90 | Labeled placeholder with rendered children |

## Configuration

| Setting | Default | Description |
|---------|---------|-------------|
| `livepeer.mdxPreview.theme` | `auto` | Preview theme: `auto`, `light`, or `dark` |

## License

MIT
