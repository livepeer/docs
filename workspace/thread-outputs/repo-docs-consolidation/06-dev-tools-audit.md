# Dev Tools / Contributor Tools — Product Audit (2026-05-18)

## What this repo's contributor toolchain actually delivers

A new contributor — human or agent — does not have to learn this repo's private maintainer knowledge to ship a high-quality docs change. The toolchain collapses the entire workflow into one command surface: `bash lpd setup --yes` installs hooks, dependencies, optionally CLI on PATH, and the Codex planner skill in a single non-interactive step; `lpd doctor` confirms the environment is ready; `lpd dev --scoped` boots a filtered Mintlify preview against a 770-page navigation tree in seconds rather than ten minutes; `lpd test --staged` and `lpd ci --skip-browser` run the same checks CI runs, locally; and `lpd move-page` does governed file moves with reference rewrites so renames don't leave broken links. The "correct workflow" is, by design, the easiest workflow.

The authoring layer reinforces this. VS Code (and Cursor/Windsurf via the same `.vsix` packages) gets a bespoke MDX preview extension (`lpd-mdx-preview`, Cmd+Shift+V) that renders the full Livepeer component library — ~50 custom components in styled HTML, 20+ Mintlify built-ins, Mermaid diagrams with theme colours, and live re-render on `.jsx` save — without spinning up Mintlify itself. Three companion extensions (component picker, authoring tools, markdown list) plus 312 governed snippets across five `.code-snippets` files give contributors structured frontmatter pickers, page scaffolds, and copy-ready component blocks. The recommended-extensions list in `.vscode/extensions.json` makes this opt-in zero-friction.

The governance scaffolding is the third leg. `.githooks/` enforces pre-commit (staged checks, generator sync, fail-fast on cheap blocking violations, with a hard runtime budget) and pre-push (Codex branch contract + lock/stash policy). Eight active agent adapters (`AGENTS.md`, `CLAUDE.md`, `copilot-instructions.md`, Cursor `.mdc`, Windsurf `.md`, Augment `.md`, Mintlify Assistant, `.github/AGENTS.md` for Codex) all point back to the same root `AGENTS.md`, so agents working in any IDE inherit the same rules without policy drift. The `ai-tools/` registry catalogues 42 portable skills and their lane/lifecycle state, with a validator CLI and one-command audit orchestrator.

## Features

### Feature: `lpd` CLI — unified entry point
**What it is:** A single Bash CLI at `tools/lpd` that wraps setup, environment checks, local Mintlify preview (including scoped mode), staged/full test suites, hook management, governed page moves, AI-sitemap generation, repair flows, and discovery/execution of repo-managed scripts across five groups.
**Current state:** Production
**Last touched:** 2026-04-15 (source); 2026-04-09 (canonical reference doc)
**Lives at:** `tools/lpd` (executable, 71KB Bash)
**Validated against source:** Yes — verified subcommand list against the case dispatcher in `tools/lpd`. Confirmed 13 top-level subcommands plus 5 group-shorthand aliases.
**What's complete:**
- 13 documented subcommands all present in source: `help`, `info`, `version`, `setup`, `doctor`, `dev`, `mint` (alias), `test`, `move-page`, `ai-sitemap`, `ci`, `repair`, `hooks`, `scripts`
- Group shorthand: `tools`, `tasks` (legacy alias for `workspace`), `tests`, `v2`, `workspace`
- JSON envelope output, dry-run support on most commands, repo-root auto-detection, PATH-install option
- Risk model (low/medium/high) gates high-risk script execution behind `--yes` in non-interactive contexts
- Self-installs into `$PATH` via setup; falls back to `bash lpd ...` until then
**What's incomplete / community-help opportunity:**
- `tools/script-index.md` and `tools/tools-catalog.mdx` (1.4MB) are described as containing legacy/pre-restructure paths in the lpd-cli doc itself — script catalog drifts from current `operations/scripts/<type>/<concern>/<niche>/` layout
- `lpd repair` is undocumented in `docs-guide/tooling/lpd-cli.mdx` (the canonical reference) — it appears in `lpd help` output but has no Accordion entry in the docs
- `lpd ci` lacks JSON envelope documentation for its specific payload
- Scripts list table in `lpd-cli.mdx` carries a "pre-2026-03-21 layout" note — fixing means regenerating the table from `lpd scripts list --json`
**Recommended canonical home:** `docs-guide/tooling/lpd-cli.mdx` remains canonical; `docs-guide/features/contributor-tools.mdx` summary section stays as overview.

### Feature: Git hooks (`.githooks/`)
**What it is:** Local-first quality gate that runs cheap staged checks before commit and Codex-contract enforcement before push. Reuses the staged-validation result when inputs are unchanged so re-commits are not penalised.
**Current state:** Production
**Last touched:** 2026-04-09 (`verify-browser.js`, `server-manager.js`); 2026-04-08 (`pre-commit`)
**Lives at:** `.githooks/`
**Validated against source:** Yes — directory listing matches doc claims.
**What's complete:**
- `pre-commit` (22.8KB): staged structure/style/static checks + generator sync, 60s default runtime budget
- `pre-push` (4.4KB): Codex `codex/*` branch governance, contract + issue readiness + lock/stash policy, non-fast-forward guard
- `verify.sh` (15.7KB): one-shot verification runner; called by `lpd hooks verify`
- `verify-browser.js` (12.7KB) + `verify-browser-README.md`: browser-side validation helper
- `server-manager.js` (14.1KB): library for scoped Mintlify server lifecycle (start/stop/restart/health)
- `pre-commit-no-deletions`: deletion-guard hook
- `install.sh`: wires `.git/hooks/pre-commit` to `.githooks/pre-commit`
- `BYPASS.md` + `GOVERNANCE.md`: bypass-trailer policy and ownership
**What's incomplete / community-help opportunity:**
- `post-commit.disabled` exists with no doc explanation of why it is disabled or what would re-enable it
- No `pre-push` hook is documented in `docs-guide/contributing/git-hooks.mdx` for non-Codex branches — the doc implies only Codex branches get pre-push enforcement, but `pre-push` is unconditional in the source
- `render-verify`, `no-deletion`, `scope-checkpoint`, `browser-verify` hooks referenced in CLAUDE.md are actually all variants/callees of the same `pre-commit` + `verify-browser.js` plumbing — naming is inconsistent across docs and source
- No way to see hook timing without enabling debug; budget violations have no community-facing diagnostic page
**Recommended canonical home:** `docs-guide/contributing/git-hooks.mdx` (canonical) — needs expansion to include the full hook inventory, not just pre-commit/pre-push policy boundaries.

### Feature: Scoped local preview (`tools/dev/preview/`)
**What it is:** Generates a reduced dev-only `docs.json` profile so Mintlify cold-starts in seconds on a 770-page nav. Filters by version, language, tab (fuzzy-matched), or route prefix; supports alternate docs configs (`docs-orch-work.json`, `docs-gate-work.json`).
**Current state:** Production
**Last touched:** 2026-04-21 (`generate-mint-dev-scope.js`, 80KB); 2026-04-09 (`mint-dev.sh`)
**Lives at:** `tools/dev/preview/`
**Validated against source:** Yes — `generate-mint-dev-scope.js`, `mint-dev.sh`, `mint-custom-loader.sh`, `ensure-mint-watcher-patch.sh`, `debug-mint-dev.js`, `lib/` all present.
**What's complete:**
- Scope inputs validated before any heavy setup so bad tab names fail immediately
- Fuzzy/prefix/stem tab matching (`Orch` → `Orchestrators`, `Resources` → `Resource HUB`)
- Multiple tabs via repeated flag or CSV
- Interactive picker (`--scope-interactive`), discovery (`--scope-list`)
- Mint watcher patch ensures glob expansion in repo paths is disabled (the `ensure-mint-watcher-patch.sh` hardening)
- Alternate config loader as a thin alias: `mint-custom-loader.sh`
- Dry-run prints resolved launcher command
**What's incomplete / community-help opportunity:**
- `tools/dev/preview/debug-mint-dev.js` is undocumented in any user-facing reference
- No guidance on what `docs-orch-work.json` vs `docs-gate-work.json` actually contain — they're referenced as examples without explaining the workflow that created them
- Port-collision behaviour is documented (`-- --port 3334`) but the agent-vs-human port policy (no 3333 for agents, no 3000 for direct Mint) lives in three different pages
**Recommended canonical home:** `docs-guide/contributing/local-preview.mdx` (canonical, quickstart-shaped) + `docs-guide/tooling/lpd-cli.mdx` (full flag reference).

### Feature: MDX authoring helpers (`tools/dev/authoring/`)
**What it is:** Local CLI helpers for MDX maintenance — auto-adding callouts based on heuristics and reformatting MDX to repo style.
**Current state:** Partial — two scripts ship, neither has its own doc page.
**Last touched:** 2026-04-09 (both)
**Lives at:** `tools/dev/authoring/`
**Validated against source:** Yes — `add-callouts.js` (11.8KB) and `format-mdx.js` (3.7KB) confirmed.
**What's complete:** Both scripts callable via `lpd tools dev authoring add-callouts -- --help` and exposed in `lpd scripts list`.
**What's incomplete / community-help opportunity:**
- No usage docs beyond the `--help` text
- `format-mdx.js` is not surfaced as a snippet expansion or pre-commit auto-fix despite being a natural pair with `pre-commit` style checks
- No equivalent for fixing component import paths, frontmatter, or em-dash/UK-spelling sweeps (those live elsewhere in `operations/scripts/remediators/`)
**Recommended canonical home:** Sub-section under `docs-guide/features/contributor-tools.mdx` referencing the script catalog; no standalone page needed.

### Feature: VS Code MDX preview extension (`lpd-mdx-preview`)
**What it is:** Side-panel renderer for `.mdx`/`.md` that draws Livepeer's full component library as styled HTML, plus Mermaid, debounced live update on edit, theme detection, and hot-reload on any `.jsx` save in the workspace.
**Current state:** Production (v0.0.2)
**Last touched:** 2026-04-08 (`extension.js`)
**Lives at:** `tools/editor-extensions/lpd-mdx-preview/`
**Validated against source:** Yes — `.vsix` present, `lib/` matches doc structure (mdx-parser, component-map, mintlify-components, webview-template).
**What's complete:**
- Three rendering tiers: Mintlify built-ins (~20), Livepeer custom (~50), placeholder fallback
- Lazy-loaded Mermaid (2.45MB only when needed)
- Collapsible JSX comment blocks (v0.0.2)
- Works in VS Code, Cursor, Windsurf via the same `.vsix`
- `install.sh` detects which editors are present and installs into all
- Build verification: installer checks `.vsix` matches source before installing
- Static-mock badge for interactive components (`SearchTable`, `SocialLinks`, `OpenAPI`) so authors know to verify in Mintlify too
**What's incomplete / community-help opportunity:**
- Code blocks render without syntax highlighting (documented "future feature")
- No live scroll sync between editor and preview (documented "future feature")
- Tier 3 component promotion is one-by-one — `Snippet`, data-feed integrators, low-use repo components fall through to placeholders
- `OpenAPI` renders a static placeholder, not the interactive Mintlify experience
**Recommended canonical home:** `docs-guide/tooling/lpd-mdx-preview.mdx` (canonical source-of-truth, well-structured).

### Feature: Other VS Code extensions (authoring-tools, components, markdown-list)
**What it is:** Three companion extensions that ship alongside `lpd-mdx-preview`:
- `authoring-tools`: editor-side authoring commands (9.4KB `.vsix`)
- `components`: component picker with autocompletion driven by `component-registry.json` (8.3KB `.vsix`)
- `markdown-list`: markdown list helpers (5.4KB `.vsix`)
**Current state:** Beta — all three at v0.0.1, all packaged, all referenced in `.vscode/extensions.json`.
**Last touched:** 2026-04-08 (all three `extension.js` files)
**Lives at:** `tools/editor-extensions/{authoring-tools,components,markdown-list}/`
**Validated against source:** Yes — `package.json` and `.vsix` present for each.
**What's complete:** All three install via `bash tools/editor-extensions/install.sh`; recommended in `.vscode/extensions.json`.
**What's incomplete / community-help opportunity:**
- No user-facing reference docs for any of the three (unlike `lpd-mdx-preview.mdx`)
- Components extension's `component-registry.json` (38KB) is the same source used to generate VS Code snippets — but the dual-purpose role is undocumented
- `recommended_extensions.md` in `tools/editor-extensions/` is 3KB of plain markdown not surfaced via Mintlify
- Two stray "components 2" and "markdown-list 2" directories exist (mac duplicate artefacts), likely needing cleanup
**Recommended canonical home:** One sub-page per extension under `docs-guide/tooling/` mirroring the `lpd-mdx-preview.mdx` shape — at minimum a section in `docs-guide/features/contributor-tools.mdx`.

### Feature: VS Code workspace configuration (`.vscode/`)
**What it is:** Per-repo VS Code workspace setup — extensions.json (recommendations), settings.json (workspace settings, 4.9KB), tasks.json (two Codex chat rename tasks), mcp.json (GitHub MCP server), and five `.code-snippets` files.
**Current state:** Production
**Last touched:** 2026-05-14 (components.code-snippets, templates.code-snippets); 2026-04-08 (settings.json)
**Lives at:** `.vscode/`
**Validated against source:** Yes — verified all files plus the snippet counts.
**What's complete:**
- Extensions recommendation list: prettier, livepeer authoring tools, lpd-mdx-preview, unified MDX, ESLint, browserslist, spellchecker
- MCP config currently exposes only one server: GitHub MCP (`ghcr.io/github/github-mcp-server:0.33.0`) via Docker, with prompted token
- Tasks: two `tools/dev/rename-vscode-codex-chat.js` invocations (rename latest, list recent) — undocumented elsewhere
**What's incomplete / community-help opportunity:**
- `.vscode/livepeer-legacy.code-snippets.bak` is a 35KB backup file flagged in `contributor-tools.mdx` Tooling Gaps but not cleaned up
- `.vscode/lp-components.code-snippets` (1240 lines, 125 prefixes) exists alongside `components.code-snippets` (1245 lines, 113 prefixes) with overlapping content — duplication risk
- `.vscode/snippets/` subdirectory is present (one folder) but undocumented
- MCP config only exposes GitHub — no Blockscout, DeepWiki, or other repo-relevant MCP servers from CLAUDE.md context are wired in
- Two `tasks.json` entries point at `tools/dev/rename-vscode-codex-chat.js` which is itself undocumented
**Recommended canonical home:** Section in `docs-guide/features/contributor-tools.mdx` (today only a table of file paths) — expand to explain what each file does and why a contributor would touch it.

### Feature: VS Code snippets (`.code-snippets`)
**What it is:** 312 governed snippets across five files: frontmatter+page scaffolds (23 in mdx), Mintlify built-ins (25), Livepeer custom components (113 in components + 125 in lp-components), templates (26).
**Current state:** Production but with a duplication concern.
**Last touched:** 2026-05-14 (components, templates); 2026-04-09 (mdx, lp-components)
**Lives at:** `.vscode/*.code-snippets`
**Validated against source:** Yes — counted `"prefix"` occurrences in each file. Note: docs in `dev-tools.mdx` (status: draft) claim 17/25/115 — actual is 23/25/113 for the trio referenced there.
**What's complete:**
- Frontmatter snippet with dropdowns for `audience` (9 values), `pageType` (12), `status` (9), `purpose` (10); auto-fills today's date for `lastVerified`
- Page scaffolds: `lp-overview`, `lp-howto`, `lp-tutorial`, `lp-reference`, `lp-landing-frame`, `faqPage`, `troubleshootingPage`, `openapiPage`
- Block snippets: `relatedPages`, `comparisonMatrix`
- JSX tag snippets accept bare and angle-bracket-prefixed forms (`Card` and `<Card`)
- Generated from `docs-guide/config/component-registry.json` via `operations/scripts/generators/components/library/generate-ui-templates.js`
**What's incomplete / community-help opportunity:**
- `lp-components.code-snippets` (125 prefixes) and `components.code-snippets` (113 prefixes) overlap — needs deduplication or clear scope-split documentation
- Snippet counts in `dev-tools.mdx` (17/25/115) drift from reality (23/25/113) — the page is `status: draft, lastVerified: 2026-03-11`
- `contributor-tools.mdx` lists `mdx.code-snippets`, `components.code-snippets`, `templates.code-snippets` but omits `lp-components.code-snippets` and `mintlify.code-snippets`
**Recommended canonical home:** Currently split across `docs-guide/tooling/dev-tools.mdx` (draft) and `docs-guide/features/contributor-tools.mdx` and `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` (overlapping content). Consolidate into one snippets reference section.

### Feature: MCP integration (`.vscode/mcp.json`)
**What it is:** VS Code's Model Context Protocol server configuration — exposes external tools to AI agents running in VS Code.
**Current state:** Stub — only one MCP server wired in.
**Last touched:** 2026-04-03
**Lives at:** `.vscode/mcp.json`
**Validated against source:** Yes — file contents confirmed.
**What's complete:** GitHub MCP server (`ghcr.io/github/github-mcp-server:0.33.0`) via Docker stdio with prompted personal-access-token input.
**What's incomplete / community-help opportunity:**
- Only one server configured — CLAUDE.md context shows the agent ecosystem expects access to Blockscout, DeepWiki, Hugging Face, Livepeer Docs MCP, Notion, etc.
- No documentation of why GitHub MCP is the only included server, nor how a contributor would add others
- `Mintlify Assistant` is listed in `ai-tools.mdx` adapter inventory but not exposed via MCP config
**Recommended canonical home:** Sub-section under `docs-guide/tooling/ai-tools.mdx` covering MCP server setup; reference from `docs-guide/features/contributor-tools.mdx`.

### Feature: Repo libraries (`tools/lib/`)
**What it is:** Shared JS modules consumed by validators, generators, hooks, and governance scripts. Organised into 6 sub-areas: `ai`, `bootstrap`, `copy-governance`, `docs`, `docs-usefulness`, `governance`.
**Current state:** Production (referenced by many callers)
**Last touched:** 2026-04-27 (most subdirs)
**Lives at:** `tools/lib/`
**Validated against source:** Yes — directory inventory confirmed.
**What's complete:** Library is reachable; `script-index.md` (9.1KB) catalogues entries.
**What's incomplete / community-help opportunity:**
- `tools/lib/script-index.md` is plain markdown, not surfaced through Mintlify
- No public-facing doc page describes what each sub-library handles or when a contributor would import from it
- `tools/lib/copy-governance/` and `tools/lib/docs-usefulness/` are non-obvious names — concept docs would help
**Recommended canonical home:** Internal reference page (audience: maintainer) under `docs-guide/tooling/` — auto-generated from headers in each library file would be ideal.

### Feature: Contribution workflow (canonical contribute-to-docs flow)
**What it is:** The end-to-end contributor onboarding: setup → branch → preview → test → PR → review → merge, plus issue-template choices, quality gates, override trailers, and pre-PR checklist.
**Current state:** Production for canonical version; stale for public version.
**Last touched:** 2026-04-09 (canonical `docs-guide/contributing/contributing.mdx`); 2026-04-27 (`v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx`)
**Lives at:** `docs-guide/contributing/contributing.mdx` (canonical, 305 lines) + `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` (public, 770 lines)
**Validated against source:** Yes — both pages read in full.
**What's complete (canonical):** `lpd setup --yes`, `lpd dev`, `lpd test --staged`, Codex branch contract example, 5 issue templates documented, quality gates table with source paths and blocking/advisory status, override-trailer policy, pre-PR checklist.
**What's incomplete / community-help opportunity:**
- **Public version is stale**: Tells contributors to `npm i -g mintlify` and `mint dev` directly — explicitly bypasses `lpd dev`. References `docs-v2-preview` as the default branch (current working branch is `docs-v2-dev`). Pre-commit hook description doesn't mention `lpd hooks status`. "Non-technical contribution proposal" section labels four workflows "📋 Proposal" / "✅ Partially implementable" — proposal content has been sitting in the public page for at least a month.
- Public page hardcodes the file structure tree with v1-flavoured paths and `docs-v2-preview` branch references
- No cross-reference from the public page back to the canonical contributor docs
**Recommended canonical home:** Keep `docs-guide/contributing/contributing.mdx` as canonical. **Replace** `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` with a public-shaped excerpt of the canonical page (current path advice, current branch, `lpd` workflow) — or delete it and redirect.

### Feature: Agent instructions (cross-agent adapter set)
**What it is:** Eight active agent-adapter surfaces all pointing back to root `AGENTS.md`, so any AI coding agent (Claude Code, Cursor, Windsurf, Copilot, Augment, Codex, Mintlify Assistant) inherits the same repo rules.
**Current state:** Production
**Last touched:** 2026-04-06 (`docs-guide/contributing/agent-instructions.mdx`)
**Lives at:** Adapter files at canonical paths (`AGENTS.md`, `.claude/CLAUDE.md`, `.cursor/rules/`, `.windsurf/rules/`, `.augment/rules/`, `.github/copilot-instructions.md`, `.github/AGENTS.md`, `.mintlify/Assistant.md`); index in `docs-guide/contributing/agent-instructions.mdx` and full governance in `docs-guide/tooling/ai-tools.mdx`.
**Validated against source:** Yes — every file in the adapter inventory confirmed present.
**What's complete:**
- 8 adapter surfaces verified on disk
- Cross-agent packager generates supplemental reference packs in `ai-tools/agent-packs/` (Codex skills-manifest, Cursor rules.md, Claude CLAUDE.md, Windsurf rules.md, portable skills, pack README)
- Shared rules enforced across adapters (port 3000 prohibition for agents)
- Adapter consumption model is explicit: canonical-once, adapter-many, generated-zero-by-hand
**What's incomplete / community-help opportunity:**
- `docs-guide/contributing/agent-instructions.mdx` is 30 lines — just a pointer to root `AGENTS.md` and Codex extension. The actual adapter inventory is in `docs-guide/tooling/ai-tools.mdx` — discoverability split
- `ai-tools/ai-rules/_retired/` holds 7 retired files but is not surfaced as an archive view
- The "skills/" generated agent-pack directory contains 42 skill exports — no public page lists them
**Recommended canonical home:** `docs-guide/tooling/ai-tools.mdx` (canonical governance); `docs-guide/contributing/agent-instructions.mdx` (contributor-quickstart pointer).

### Feature: Mintlify-specific authoring guidance
**What it is:** Repo-safe Mintlify rules that prevent contributors from importing React/hooks or Mintlify globals; styling defaults pointing to CSS custom properties; preview commands routed through `lpd dev`; validation entrypoints.
**Current state:** Production
**Last touched:** 2026-04-04 (`docs-guide/contributing/mintlify.mdx`)
**Lives at:** `docs-guide/contributing/mintlify.mdx` (routed companion) + `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` (canonical source for agents/governance tooling)
**Validated against source:** Yes — page read in full, references confirmed.
**What's complete:** Source-order rules, official-docs link list, repo rules (docs.json + .mintignore + style.css), authoring rules (no React, no Mintlify globals, root-absolute imports, file extensions), styling rules, preview commands, validation entrypoints, port policy.
**What's incomplete / community-help opportunity:**
- Two parallel sources of truth (`mintlify.mdx` for routing, `mintlify-repo-best-practices.md` for agents) — a section explicitly mapping which one to use when would help
- No example "before/after" for the common Mintlify gotchas (e.g. importing `React` or `Card`)
**Recommended canonical home:** `docs-guide/contributing/mintlify.mdx` (canonical, in current form is already good).

### Feature: `docs-guide/` vs `v2/resources/documentation-guide/` split
**What it is:** Two parallel contributor documentation surfaces. `docs-guide/` is internal canonical (audience: internal, maintainer, developer). `v2/resources/documentation-guide/` is the public-facing surface in the routed nav.
**Current state:** Partial — split is intentional but the public surface is sparse and stale.
**Validated against source:** Yes.
**What's complete:**
- `docs-guide/contributing/`: contributing.mdx, local-preview.mdx, git-hooks.mdx, agent-instructions.mdx, mintlify.mdx (all `status: current`)
- `docs-guide/tooling/`: lpd-cli.mdx (canonical reference), lpd-mdx-preview.mdx (excellent), ai-tools.mdx (canonical), dev-tools.mdx (status: draft, lastVerified: 2026-03-11 — stale)
- `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx`: 770 lines, public-facing
- `v2/resources/documentation-guide/tooling/snippets-inventory.mdx`: governance overview of `/snippets`, status: current 2026-04-05
**What's incomplete / community-help opportunity:**
- `v2/resources/documentation-guide/tooling/lpd-cli.mdx` is a **5-line empty stub** with just frontmatter (`lifecycleStage: discover, complexity: intermediate`) — the public CLI reference doesn't exist
- Public `contribute-to-the-docs.mdx` is stale (covered above)
- No public-facing equivalent for `lpd-mdx-preview` (the VS Code extension), `ai-tools`, or `git-hooks` — all contributor-relevant surfaces sit canonical-only
- `docs-guide/tooling/dev-tools.mdx` is `status: draft` and explicitly contains a 50-line embedded JSX comment block of "best-practice options" that should be reduced to a decision and shipped
**Recommended canonical home:**
- Internal canonical: `docs-guide/contributing/` + `docs-guide/tooling/` (today)
- Public: shrink `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` to a slim public excerpt, and fill in `v2/resources/documentation-guide/tooling/lpd-cli.mdx` with a public-shaped CLI reference (or redirect to canonical)

## Cross-feature observations

- **`lpd` is the unified entry point** — no competing tools. The public contribution page still tells contributors to run `mint dev` directly, but that's a doc lag, not a tool fragmentation. Source confirms 13 subcommands + 5 group shorthands, all dispatched from one `cmd_*` Bash dispatcher.
- **Documented vs undocumented lpd subcommands**: `lpd repair` is fully implemented (`cmd_repair()` in source, full flags in `lpd help`) but **not** in the canonical CLI reference accordion. Otherwise alignment is good.
- **Hooks split**: pre-commit is local-only; the same checks run inside CI via `lpd ci` and `.github/workflows/test-suite.yml`. Pre-push only enforces on `codex/*` branches (per docs); source confirms.
- **VS Code extensions**: bundled as `.vsix` in-repo, **opt-in via `.vscode/extensions.json` recommendations**, installed via `bash tools/editor-extensions/install.sh`. Works in VS Code, Cursor, Windsurf with the same packages. Not separately published to the marketplace.
- **`docs-guide/tooling/dev-tools.mdx` is stale and overlapping**: status: draft, lastVerified: 2026-03-11, contains a 50-line embedded "GitHub Gists best practices" comment, references snippet counts (17/25/115) that no longer match reality (23/25/113), and overlaps with `docs-guide/features/contributor-tools.mdx` (status: current, lastVerified: 2026-05-14). **It should be retired** — `features/contributor-tools.mdx` is the better canonical overview.
- **Stale duplication public-side**: `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` recommends `mint dev`, `docs-v2-preview` branch, and "Non-Technical Contribution Proposal" workflows still labelled "📋 Proposal" — none of which match canonical 2026-04 reality.
- **Two `*.code-snippets` overlaps**: `lp-components.code-snippets` (125 prefixes) and `components.code-snippets` (113 prefixes) — both regenerate from `component-registry.json` but maintain duplicate prefix surfaces.
- **Filesystem cleanup**: stray `components 2/` and `markdown-list 2/` directories in `tools/editor-extensions/`, `.vscode/livepeer-legacy.code-snippets.bak`, and pre-restructure paths in `tools/script-index.md` — all flagged in the contributor-tools doc's own Tooling Gaps table but not yet cleaned.
- **MCP config gap**: only GitHub MCP is wired in `.vscode/mcp.json`. The rest of the agent ecosystem (Blockscout, DeepWiki, Livepeer Docs MCP, etc.) lives in user-global Claude/Codex configs, not repo-versioned.

## Community-help opportunities

1. **Replace the stale public contribution page**
   - File: `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx`
   - Accept: Updated `lpd` workflow (`bash lpd setup --yes`, `lpd dev`, `lpd test --staged`), correct working branch (`docs-v2-dev`), removal of "Non-Technical Contribution Proposal" speculative section, single source of truth via redirect or excerpt from canonical `docs-guide/contributing/contributing.mdx`.

2. **Fill in the public LPD CLI reference**
   - File: `v2/resources/documentation-guide/tooling/lpd-cli.mdx` (currently 5 lines, empty)
   - Accept: Public-shaped quickstart + most-common workflows + link to the canonical full reference. Mirror tone of `local-preview.mdx`.

3. **Retire `docs-guide/tooling/dev-tools.mdx`**
   - File: `docs-guide/tooling/dev-tools.mdx` (status: draft, stale 2026-03-11)
   - Accept: Migrate any unique content into `docs-guide/features/contributor-tools.mdx` or `docs-guide/contributing/`, remove the 50-line embedded JSX comment block, delete the page or convert to a redirect.

4. **Document `lpd repair`**
   - File: `docs-guide/tooling/lpd-cli.mdx`
   - Accept: New Accordion entry under "Page Operations" or new "Repair" section, listing `--surface <id>`, `--staged|--files|--full`, `--write`, `--stage` flags with examples per governed surface.

5. **Regenerate the script catalog table**
   - File: `docs-guide/tooling/lpd-cli.mdx` (Script Catalog section)
   - Accept: Replace the pre-2026-03-21-layout table with current paths from `lpd scripts list --json --group tools` (and similar for `tests`, `workspace`, `v2`, `hooks`). Add the regeneration command to the catalog generator pipeline.

6. **Document the other three VS Code extensions**
   - Files: new pages or sections for `authoring-tools`, `components`, `markdown-list`
   - Accept: One sub-page per extension at the `lpd-mdx-preview.mdx` level of detail, OR a single combined extensions reference under `docs-guide/tooling/editor-extensions.mdx`.

7. **Deduplicate snippet files**
   - Files: `.vscode/components.code-snippets` vs `.vscode/lp-components.code-snippets`
   - Accept: Audit overlap; either delete one or document a scope-split (e.g. `lp-*` = legacy aliases retained for compatibility); regenerate from `component-registry.json` as a single output.

8. **Clean up the `.vscode/` and `tools/editor-extensions/` backup/duplicate artefacts**
   - Files: `.vscode/livepeer-legacy.code-snippets.bak`, `tools/editor-extensions/components 2/`, `tools/editor-extensions/markdown-list 2/`
   - Accept: Either classify as compatibility aliases (rename + comment why) or remove via the governed deletion path.

9. **Expand the MCP config or document the limit**
   - File: `.vscode/mcp.json` (+ docs section in `docs-guide/tooling/ai-tools.mdx`)
   - Accept: Either add additional MCP servers (Blockscout, DeepWiki, Livepeer Docs MCP) with installation guidance, or add a section in `ai-tools.mdx` explaining that MCP servers live in user-global config and listing the recommended set with install instructions.

10. **Unify the agent-instructions discoverability split**
    - Files: `docs-guide/contributing/agent-instructions.mdx` (30 lines, pointer-only) + `docs-guide/tooling/ai-tools.mdx` (full governance)
    - Accept: Expand `agent-instructions.mdx` to a contributor-onboarding entry that links to `ai-tools.mdx` for full governance and the cross-agent packager command for generating reference packs.

## Recommended single-page rewrite outline

Consolidate into `docs-guide/features/contributor-tools.mdx` as the **product-forward overview**, with sub-pages owning depth. Outline:

1. **What this is** — one-paragraph product statement: the toolchain makes the correct workflow the easiest workflow.
2. **Quickstart for new contributors** — `bash lpd setup --yes` → `lpd doctor` → `lpd dev --scoped --scope-tab <Tab>` → `lpd test --staged` → PR. (link out to `docs-guide/contributing/local-preview.mdx` for depth)
3. **Primary tools at a glance** — current "Primary Tools" table with one-line product descriptions per row, each linking to its canonical page.
4. **Tooling for AI agents** — Adapter set, MCP, ai-tools registry. Link to `docs-guide/tooling/ai-tools.mdx`.
5. **Editor tooling** — `.vscode/` workspace setup, four VS Code extensions, snippet system. Link to `docs-guide/tooling/lpd-mdx-preview.mdx`.
6. **Quality gates** — Pre-commit, pre-push (Codex), CI. Link to `docs-guide/contributing/git-hooks.mdx` and `docs-guide/policies/quality-gates.mdx`.
7. **Page operations** — `lpd move-page`, `lpd repair`, `lpd ai-sitemap`. Link to `docs-guide/tooling/lpd-cli.mdx`.
8. **Safety rules** — Bypass policy, override trailers, port policy, branch protection.
9. **Tooling gaps and community-help opportunities** — Top items from the audit above with file paths and acceptance criteria. This is the "good first issue" funnel.
10. **Related canonical references** — Link list.

**Sub-pages stay separate** (depth lives here): `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/tooling/lpd-mdx-preview.mdx`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/contributing/contributing.mdx`, `docs-guide/contributing/local-preview.mdx`, `docs-guide/contributing/git-hooks.mdx`, `docs-guide/contributing/mintlify.mdx`, `docs-guide/contributing/agent-instructions.mdx`.

**Inline-or-eliminate**: `docs-guide/tooling/dev-tools.mdx` (retire), the four other VS Code extensions (one combined sub-page or inline in `contributor-tools.mdx`).

**Public-side**: Replace `v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx` with a public excerpt. Fill in `v2/resources/documentation-guide/tooling/lpd-cli.mdx` with a public-shaped CLI quickstart.
