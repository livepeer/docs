# tools/dev

Governed developer-operated tooling for local docs work. This folder is for live developer helpers only, not for archived notes, one-off experiments, or workflow-owned automation that belongs under `operations/scripts/`.

## Allowed structure

- `preview/`
  Local Mintlify preview launchers, scoped-docs helpers, and preview diagnostics.
- `authoring/`
  Developer-run content authoring helpers for local formatting or bounded repo transforms.
- `editor/`
  Editor-specific utilities that are not extension source code.
- `integrations/notion/`
  Developer-operated Notion sync tooling, its local package manifest, env template, and runtime data.

## Not allowed here

- Loose scripts at `tools/dev/*` outside this taxonomy.
- Archived notes, instructions, or ad hoc test files.
- Vendor installs such as `node_modules/`.
- Workflow-owned scripts that should live under `operations/scripts/`.

## Governance

- `tools/dev` is a governed script root. Script indexes and the aggregate catalog are generated, not hand-maintained.
- Preview tooling may depend on `tools/config/scoped-navigation/` because that config surface is the canonical scoped-nav store.
- Notion runtime docs live in `integrations/notion/README.md`. Ad hoc analysis notes belong in `tools/_workspace/archive/`.
