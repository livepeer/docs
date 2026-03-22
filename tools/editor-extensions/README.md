# Editor Extensions

VS Code-compatible extensions for the Livepeer docs repo. All extensions use the standard `.vsix` format and work in any VS Code fork.

## Compatibility

| Editor | Supported | Install method |
|---|---|---|
| VS Code | ✅ | `install.sh` or manual |
| Cursor | ✅ | `install.sh` or manual |
| Windsurf | ✅ | `install.sh` or manual |
| JetBrains (WebStorm etc.) | ✗ | Different plugin system |
| Zed | ✗ | Different extension model |
| Neovim | ✗ | Different plugin system |

## Extensions

| Extension | Folder | What it does |
|---|---|---|
| `lpd-mdx-preview` | `lpd-mdx-preview/` | `Cmd+Shift+V` side-panel preview rendering MDX with Livepeer components, Mintlify built-ins, and Mermaid |
| `authoring-tools` | `authoring-tools/` | MDX formatter, real-path import completions, docs.json route validation |
| `components` | `components/` | Component picker — insert and wrap with any of the 120 repo components |
| `markdown-list` | `markdown-list/` | Markdown list tools — toggle, indent, sort |

## Install

### Automatic (recommended)

Detects which editors are installed and deploys all extensions:

```bash
bash tools/editor-extensions/install.sh
```

### Manual

Extensions sidebar → `...` → **Install from VSIX** → select the `.vsix` file from the extension's folder.

### Build from source

```bash
cd tools/editor-extensions/<extension-name>
npx @vscode/vsce package
```

Then install the generated `.vsix`.

## Source layout

```
tools/editor-extensions/
  README.md                     ← this file
  install.sh                    ← multi-editor deploy script
  lpd-mdx-preview/              ← MDX preview extension
  authoring-tools/              ← MDX authoring tools
  components/                   ← component picker
  markdown-list/                ← markdown list tools
```
