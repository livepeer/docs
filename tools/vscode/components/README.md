# Livepeer Component Picker

VSCode extension for browsing, inserting, and wrapping with Livepeer docs components.

## Commands

| Command | Shortcut | What it does |
|---|---|---|
| `Livepeer: Insert Component` | `Cmd+Shift+P` → type "insert" | Pick category → pick component → inserts import + usage at cursor |
| `Livepeer: Wrap with Component` | `Cmd+Shift+P` → type "wrap" | Select text → pick wrapper component → wraps selection with tags + adds import |

## How it works

1. **Insert Component**: Shows a two-step picker — first pick a category (elements, wrappers, displays, scaffolding, integrators), then pick a specific component. Automatically adds the import line after existing imports and inserts the component tag at your cursor.

2. **Wrap with Component**: Select text first, then run the command. Shows only components that accept children. Wraps your selection in the component tags and adds the import.

Both commands skip deprecated/broken components and avoid duplicate imports.

## Component Registry

The extension reads from `component-registry.json` which contains all 120 components with their:
- Category and sub-niche
- Import path
- Whether they accept children
- Status (stable/experimental/deprecated/broken)
- Description

To regenerate the registry after adding new components, run:
```bash
node tools/scripts/generate-component-registry.js
```

## Install

```bash
cd tools/vscode/components
npx @vscode/vsce package
code --install-extension livepeer-component-picker-0.0.1.vsix
```
