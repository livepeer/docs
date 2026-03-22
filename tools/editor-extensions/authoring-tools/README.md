# Livepeer Authoring Tools

Repo-owned authoring support for Livepeer Docs:

- conservative MDX formatting that preserves JSX comments
- repo-backed `docs.json` route completions
- repo-backed MDX import completions
- absolute `/snippets/...` import suggestions for snippet components

## Install locally

From `Docs-v2-dev/tools`:

```bash
npm install
npm run vscode:authoring-tools:install
```

This installs the unpacked extension into local VS Code and Cursor extension directories so the workspace formatter ID `livepeer.livepeer-authoring-tools` resolves without a manual VSIX step.

Repo-owned authoring extension for Livepeer Docs.

Features:

- MDX document formatting that preserves JSX comments and fixes unsafe block-component closing-tag indentation.
- `docs.json` completions from real repo routes only.
- MDX import completions from real repo files only.
- `/snippets/...` absolute imports for snippet targets.

This extension is intended to be the authoritative MDX formatter for this repository.
