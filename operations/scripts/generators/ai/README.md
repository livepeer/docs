# generators/ai/

Future home for AI companion file generation scripts.

## Planned scripts

### `generate-ai-companions.js` (CDA-5 — not yet implemented)

Generates static companion files for components with `@aiDiscoverability: snapshot | props-extracted`.

**Responsibilities:**
1. Read `docs-guide/config/component-registry.json` for components with `@aiDiscoverability`
2. `snapshot` components: call external API → write to `snippets/data/snapshots/[source-id].json`
3. `props-extracted` components: parse MDX files that import the component → extract data prop → write `v2/[section]/[page-slug]-data.json`
4. Write/update manifest at `docs-guide/config/ai-companion-manifest.json`
5. `--check` mode: verify all companions exist and are not stale

**Why this folder (not `generators/components/`):**
- Scope is `v2/` pages, not the component library itself
- Future AI-layer scripts (context packs, agent resource generators) will live alongside it

**Handoff note:** Snapshot generation (step 2) requires outbound network — CI/cron only.
Props extraction (step 3) is safe to run locally.

**Tracking:** `tasks/plan/active/AI-DISCOVERABILITY/plan.md` — task CDA-5
