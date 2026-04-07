# Documentation Engineering — Best Practices Research

**Date:** 2026-03-23
**Scope:** Current engineering and AI-native best practices for documentation pipelines, Mintlify platform features, and docs-as-code automation.

---

## 1. Mintlify Platform — Current Features

### Mintlify Workflows (Beta)

A first-party CI system for documentation automation, integrated directly with the Mintlify dashboard and git repo.

**How it works:**
- Workflow files are stored as `.mdx` files in the repo (e.g. `docs/workflows/update-changelog.mdx`)
- Two trigger types: **scheduled** (cron-style) and **push/PR** event-based
- When triggered, Mintlify spins up an **ephemeral AI agent sandbox** that reads the changed files, reasons about needed documentation updates, and opens a PR with proposed changes
- The agent has full read access to the repo; write access is via PR only (human-in-the-loop by default)
- Free for all Mintlify plans (as of 2026)

**What workflows can do:**
- Read a changed code file and draft corresponding documentation updates
- Detect when an API spec changes and propose updated reference content
- Run on a schedule to check for content drift and open remediation PRs
- Trigger on specific file paths (e.g., `src/api/**/*.ts` → update `docs/api/` content)

**Best practice use cases:**
- Wire a workflow to `snippets/components/**/*.jsx` changes → auto-draft component doc updates
- Schedule weekly freshness checks → open PRs for pages with `lastVerified` older than threshold
- Trigger on `tools/config/*.json` changes → auto-update any docs referencing those configs

---

### Mintlify Agent / Autopilot

Dashboard-based proactive documentation assistant.

- Scans diffs between code and docs; surfaces "drift suggestions" in the dashboard UI
- Can be configured to auto-open PRs or just create dashboard notifications
- Works without workflow files — operates from the Mintlify dashboard directly
- Best for: catching documentation drift that falls outside explicit workflow triggers

---

### Mintlify AI Assistant

Embeddable agentic Q&A interface for docs site visitors.

- **Agentic RAG**: tool-calling model, not pre-constructed context; can multi-hop across docs
- **Conversation analytics**: question logs are available in dashboard for content gap discovery
- Embeddable via API for custom UI surfaces
- Best practice: use conversation analytics to identify high-frequency unanswered questions → prioritise those for new content

---

### llms.txt — Auto-generated

Mintlify automatically generates `llms.txt` and `llms-full.txt` for **all hosted sites**.

- No configuration required — it's on by default
- `llms.txt`: structured index of all pages with titles and descriptions (clean Markdown)
- `llms-full.txt`: full page content for all docs pages
- Per-page `.md` endpoints available via content negotiation (`/page-slug.md`)
- Standard path: `https://[subdomain].mintlify.app/llms.txt`

**Implication:** Any existing `llms.txt` in the repo is likely redundant with the Mintlify-generated version unless it contains custom content the platform doesn't auto-generate.

---

### Mintlify MCP Server Generator

Turn any Mintlify docs site into an MCP tool server that AI coding tools (Claude, Cursor, Windsurf) can query in real time.

```bash
npx mcp add [subdomain]
```

- Auto-syncs when docs change — no manual update needed
- Makes docs queryable as a tool call from within AI coding sessions
- Best use: enable for this repo so agents working in the codebase can query the docs site directly
- No hosting or infrastructure needed beyond the existing Mintlify deployment

---

### Continuous Translations (if applicable)

- Mintlify supports automatic translation workflows
- Translates new/changed content to configured locales on push
- Relevant if the repo maintains `v2/es/`, `v2/fr/`, `v2/cn/` locale directories (which it does — 4 locales)

---

## 2. Documentation CI/CD — Best Practices

### The generate/check/dispatch triad

The industry-standard pattern for docs-as-code pipelines at scale:

```
push → main    : generate script (--write)  → auto-commit if changed
PR             : check script (--check)     → fails if output would change; no side effects
local / manual : dispatch script            → orchestrates full pipeline; developer can run any time
pre-commit     : lightweight check only     → fast, no file writes; never blocks workflow
```

**Key rules:**
1. **Never write files in a PR check.** PR checks are read-only validators. Side effects in checks create unpredictable state.
2. **Exit-if-no-diff on auto-commits.** Prevents empty commit spam on push→main.
3. **`workflow_dispatch:` on every generation workflow.** Any pipeline should be manually triggerable without knowing the script sequence.
4. **Separate check and generate concerns.** One workflow generates; one workflow checks. Never conflate.
5. **Path filters on all generation triggers.** A change to a JS util file should not regenerate a Markdown catalog unless the util is a direct dependency.

---

### Registry-driven documentation

Industry pattern used by Stripe, Vercel, Anthropic, and Mintlify itself.

```
Source (JSDoc / YAML / JSON)
  ↓  [extract]
Registry (single JSON source of truth)
  ↓  [compile]
Published docs (generated Markdown/MDX)
  ↓  [validate]
CI gate (PR check: --check mode)
```

**Rules:**
- Data always flows in one direction: source → registry → docs. Never edit generated docs directly.
- Registry is the contract between authors and doc generators. Any tool consuming doc metadata reads from the registry.
- Schemas on all registries. A registry without a schema is not a registry — it is a freeform file with no validation.
- Generated files carry a banner identifying their source and the regeneration command. No banner = no repair path.

---

### Freshness contracts

**What top-tier doc sites do:**
- `lastVerified: YYYY-MM-DD` on every substantive doc page (frontmatter)
- `ttlDays: 90` (or 30/180 for different tiers) configures the staleness threshold per page or per section
- A weekly CI job computes staleness for all pages and writes a report to a tracked output file
- PRs touching pages with expired `lastVerified` get a non-blocking warning (not a failure) — prompts without blocking
- Tier-1 pages (getting started, core concepts) get shorter TTL; reference pages (generated from code) get longer TTL or inherit from source freshness

**Pattern:**
```yaml
# In page frontmatter
lastVerified: 2026-01-15
ttlDays: 90
```
```
# In CI: weekly cron
for each page where (today - lastVerified) > ttlDays:
  emit warning: "Page X is stale (N days)"
  write to workspace/reports/freshness-report.md
```

---

### Advisory-first enforcement (changed-files-only gate)

Best practice for introducing taxonomy enforcement without a mass remediation burden:

1. **Gate on changed files only, not all files.** A PR that changes `pageA.mdx` checks `pageA.mdx` frontmatter — not all 703 pages.
2. **Warning before failure.** New rules start as warnings (PR status check passes but adds a comment). Graduate to failures after 30-day burn-in.
3. **Auto-fix option.** Where possible, provide a `--fix` mode that the CI bot can run to correct simple issues (e.g., normalise a `status` value).

---

### Pre-commit hooks — scoped, not comprehensive

Pre-commit hooks should be:
- **Fast** (sub-3 second): no network calls, no heavy computation
- **Non-blocking for unrelated changes**: if touching a Python file, don't run MDX linting
- **Validation only, never generation**: hooks that write files create uncommitted state surprises

Anti-pattern: pre-commit hook that runs a full catalog generation script. This makes every commit slow and creates race conditions between the hook's output and the staged files.

---

## 3. AI-Native Documentation Architecture

### Companion files

Pattern: per-page structured JSON files that give AI agents pre-parsed context without requiring MDX parsing.

```
v2/section/page.mdx          ← source content
v2/section/page-data.json    ← companion: extracted terms, definitions, metadata
```

**Best practice:**
- Companions are generated, not manually maintained
- Generation runs on push→main for the source page's path
- PR check validates companions are current and manifest is consistent
- Companions should include: page frontmatter, term definitions, related pages, code examples

---

### AGENTS.md baseline + adapter pattern

Industry pattern for multi-tool AI agent environments (used by repos that support Claude, Cursor, Windsurf, GitHub Copilot simultaneously).

```
AGENTS.md                    ← baseline: universal rules, repo structure, safety constraints
.claude/CLAUDE.md            ← Claude adapter: Claude-specific extensions only
.cursor/rules.mdc            ← Cursor adapter: Cursor-specific extensions only
...
```

**Rules:**
- Adapters extend, never replace, the baseline
- A parity validator checks that all core rule sections from `AGENTS.md` are present in each adapter
- If `AGENTS.md` changes, CI fails until all adapters are updated (or the change is flagged as adapter-optional)
- Never put shared policy in an adapter — it will drift

---

### AI tools registry

Pattern: a machine-readable index of all AI tools, skills, templates, and agent packs available in the repo.

```json
{
  "tools": [
    {
      "id": "content-pipeline-pass-a",
      "type": "skill",
      "lane": "content",
      "path": "ai-tools/ai-skills/content-pipeline-pass-a/",
      "status": "active"
    }
  ]
}
```

**Best practice:**
- Registry has a JSON schema
- A validator checks: all declared paths exist; all `ai-tools/` artifacts are registered; no `status: migrating` entries older than 30 days
- Registry validation runs on every PR that touches `ai-tools/`

---

### llms.txt / structured AI-readable output

**Industry standard (2024-2026):**
- `llms.txt` at root: a structured, concise index of the most important pages + their descriptions
- `llms-full.txt` at root: full content of all pages in clean Markdown
- Per-page `.md` endpoints via content negotiation
- Some repos also maintain a `context.json` for structured agent consumption

**For Mintlify-hosted sites:** Mintlify generates all of the above automatically. The repo does not need to maintain `llms.txt` manually — the platform handles it.

---

## 4. Structural Frameworks (How Top Sites Organise)

### Config-driven vs convention-driven

| Approach | Config-driven | Convention-driven |
|---|---|---|
| Source of truth | JSON/YAML config file | File path conventions |
| Validation | Schema validation on the config | Path linting tools |
| Onboarding | Read one config file | Learn naming patterns |
| Change surface | Config file only | Any file rename |

**Best practice for doc repos:** Convention-driven for page discovery (a file at `v2/section/page.mdx` is a page); config-driven for governance (what surfaces are managed, how, by whom). Do not mix: don't put governance state in file path conventions, and don't put page structure in config files.

---

### Single-concern generators

One generation script produces one type of output. Never:
- One generator → two different catalog types
- One generator → both VS Code snippets and MDX catalog

This creates:
- Unclear trigger logic (which file changes should trigger this generator?)
- Coupled update cycles (changing snippet format requires touching catalog code)
- Opaque dependency graphs

**Split rule:** if two outputs would be in different nav sections in `docs.json`, they need separate generators.

---

### Dispatch scripts as the unit of reusability

```
operations/scripts/dispatch/
  ├── governance-pipeline.js   # @type dispatch; orchestrates: validate → generate → commit
  ├── ui-templates-pipeline.js # @type dispatch; orchestrates: generate catalog + snippets
  └── components-pipeline.js  # @type dispatch; orchestrates: registry → catalog → docs
```

**Pattern:**
- Every governed pipeline has one `dispatch/` type script
- The dispatch script is the thing you run locally when you need to trigger a full pipeline pass
- `workflow_dispatch:` in the CI workflow calls this same script
- `repair_commands` in governance config reference this dispatcher

This makes the system self-documenting: to repair any surface, run its dispatcher.

---

## 5. Key Observations from Top-Tier Doc Repos

**Stripe docs:**
- Full API reference is generated from OpenAPI spec; never hand-edited
- Changelogs are generated from a structured internal change feed
- Contributor guide is a single page covering all authoring surfaces

**Vercel docs:**
- Freshness tracking via `lastUpdated` on all pages
- Content team uses conversation analytics to find gaps
- Generated docs (CLI reference, API reference) are completely separate from authored docs in nav

**Anthropic docs:**
- Registry-driven component catalog
- AI companion files for all model spec pages
- AGENTS.md pattern for multi-tool environments

**Common across all three:**
- Separation of generated and authored content (different nav sections, different CI paths)
- One canonical source per concern
- Metadata enforcement on new content only, not retroactive mass remediation

---

## 6. Summary of Best-Practice Principles

| Principle | Description |
|---|---|
| **Generate on push, check on PR** | No side effects in PR checks; generation only on merge |
| **Registry as single source of truth** | All metadata lives in one validated JSON file per concern |
| **Schema everything** | JSON registry without a schema is a liability |
| **Freshness contracts** | `lastVerified` + `ttlDays` on all pages; weekly staleness report |
| **Changed-files-only enforcement** | Never audit all N pages on every PR — audit what the PR touched |
| **Dispatch scripts** | One runnable script per governed pipeline; `workflow_dispatch:` in CI |
| **Single-concern generators** | One script, one output concern, one trigger set |
| **AGENTS.md + adapters** | Baseline + per-tool extensions; parity validator in CI |
| **Platform-generated llms.txt** | Don't hand-maintain what the platform generates for you |
| **Advisory before enforcement** | New rules as warnings; graduate to failures after burn-in |
| **Conversation analytics** | Use AI assistant logs to discover content gaps |
| **Mintlify Workflows** | Use platform workflows for high-value automated doc updates |
