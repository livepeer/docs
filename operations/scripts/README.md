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
  automations/     Legacy name (being renamed to integrators per D-ACT-07)
  integrators/     Pulls external data into the repo (D-ACT-07)
  interfaces/      Reacts to issue/PR/external events (D-ACT-01)
  config/          Shared configuration and policy files
  x-archive/       Superseded scripts (git mv, never deleted)
```

Each type folder contains concern folders. The concern set expanded from 4 to 7 per D-ACT-05:

- `copy/` — written text, data standards, spelling, grammar
- `health/` — site integrity, links, rendering, freshness
- `maintenance/` — indexes, catalogs, registries, changelogs
- `discoverability/` — SEO, AEO, AI indexing, translation
- `governance/` — system rules, compliance, issue/PR management
- `brand/` — style, formatting, page structure, voice
- `integrations/` — external data feeds, APIs
- `content/` — legacy (splitting into above per D-ACT-05)
- `components/` — legacy (absorbed into maintenance)
- `ai/` — legacy (absorbed into discoverability + governance)

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
node operations/scripts/generators/governance/scaffold/new-script.js --path operations/scripts/<type>/<concern>/<niche>/my-script.js
```

## Full catalog

See `docs-guide/catalog/scripts-catalog.mdx` (auto-generated, always current).
