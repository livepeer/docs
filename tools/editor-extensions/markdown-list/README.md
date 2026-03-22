# Livepeer Markdown List Tools

Small VS Code extension for formatting selected text as Markdown bullet or numbered lists.

## Commands

- `Livepeer: Format Selection as Markdown List`
- `Livepeer: Format Selection as Bullet List`
- `Livepeer: Format Selection as Numbered List`
- `Livepeer: Format Selection as CSV`

These commands also appear in the editor context menu when text is selected.

`Format Selection as CSV` emits a comma-plus-space inline list such as `developer, gateway-operator, orchestrator`.

## Settings

- `livepeer.markdownListTools.autoFormatCommaSeparated.enabled`
- `livepeer.markdownListTools.autoFormatCommaSeparated.minItems`

When enabled, `Livepeer: Format Selection as Markdown List` skips the picker and converts the selection directly to bullets if the selection is a single-line comma-separated list with at least the configured number of items. The default threshold is `4`, which matches "more than 3".

## Input behavior

The formatter accepts:

- comma-separated text
- semicolon-separated text
- one item per line
- existing Markdown bullets or numbered items

Examples:

```text
alpha, beta, gamma
```

becomes:

```md
- alpha
- beta
- gamma
```

and:

```text
1. alpha
2. beta
3. gamma
```

can be reformatted as:

```md
1. alpha
1. beta
1. gamma
```

## Install locally

From `Docs-v2-dev/tools`:

```bash
npm install
npm run vscode:markdown-list:package
```

Then install `vscode/markdown-list/livepeer-markdown-list-tools.vsix` in VS Code with `Extensions: Install from VSIX...`.
