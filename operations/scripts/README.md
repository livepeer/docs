# Scripts

Operational scripts for the Livepeer docs repo. Organised by the
`<type>/<concern>/<niche>` taxonomy.

## Structure

```
scripts/
  audits/          Read-only scan, measure, report
  generators/      Produce files from source-of-truth data
  validators/      Enforce rules, pass/fail gate
  remediators/     Bulk fix/repair
  dispatch/        Dispatch work to agents, pipeline chaining
  automations/     Automated pipelines (translation, data fetching, transforms)
  config/          Shared configuration and policy files
  x-archive/       Superseded scripts (git mv, never deleted)
```

Each type folder contains four homogeneous concern folders:

- `content/` — docs pages, copy, SEO, quality, veracity
- `components/` — component library, registry, CSS, naming
- `governance/` — scripts about scripts, repo structure, catalogs
- `ai/` — LLM files, agent packaging, codex lifecycle

Concern folders have niche sub-folders where volume warrants it.

## JSDoc header standard

Every script must include a JSDoc header with these tags:

| Tag | What it does |
|---|---|
| `@script` | Filename without extension |
| `@type` | `audit`, `generator`, `validator`, `remediator`, `dispatch`, `automation` |
| `@concern` | `content`, `components`, `governance`, `ai` |
| `@niche` | Sub-concern (e.g. `quality`, `copy`, `structure`, `codex`) |
| `@purpose` | Functional category |
| `@description` | One-line human-readable description |
| `@mode` | `read-only`, `write`, `edit`, `generate`, `execute` |
| `@pipeline` | `trigger → inputs → outputs [→ dependants]` |
| `@scope` | Files/directories it operates on |
| `@usage` | CLI invocation |
| `@policy` | Governance/requirement IDs (if applicable) |

Full spec: `docs-guide/policies/script-governance.mdx` (also on the docs-guide nav)

## Creating a new script

```bash
node tools/scripts/generators/governance/scaffold/new-script.js --path tools/scripts/<type>/<concern>/<niche>/my-script.js
```

## Full catalog

See `docs-guide/catalog/scripts-catalog.mdx` (auto-generated, always current).
