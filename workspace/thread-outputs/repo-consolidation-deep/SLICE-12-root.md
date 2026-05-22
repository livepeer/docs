# SLICE-12 — Repo Root Audit (read-only inventory)

- Audit date: 2026-05-19
- Branch: `docs-v2-dev`
- Scope: repo-root files only (no recursion into subdirectories beyond unavoidable cross-checks)
- Mode: READ-ONLY; the only file written is this inventory
- Files captured: 18 tracked files + 2 generated index files + 1 untracked `.env` (existence only) + 1 `.DS_Store` (noise) = 22 root file objects
- Note on `.env`: existence verified, `git check-ignore` confirms `.gitignore:24:.env` covers it (not tracked). Contents NOT read per scope rules.

---

## 1. Documentation files

### README.md
- mtime: 2026-05-19 16:14:16
- git last commit: 2026-05-22 13:32:16
- size: 14,676 bytes
- Frontmatter date: none (no YAML frontmatter)
- Content-claimed date: "Counts below are live as of 2026-05-19."
- Status: ACTIVE — recently rewritten/freshened. Comprehensive system overview.
- Notable claims:
  - 10 audience tabs (Home, About, Developers, Gateways, Orchestrators, Delegators, Community, Solutions, Resources, Internal)
  - 49 validators, 29 remediators, 30 generators, 21 audits
  - 13+ locked architectural decisions (`D-DG-01..13`)
  - 6 native agent adapters (Claude, Cursor, Windsurf, Augment, Codex, GitHub Copilot)
  - 35 portable AI skills
  - **59 governed GitHub workflows** (CONFLICTS with live count — see Cross-Slice Findings)
  - 341 typed scripts (live count: 343 — close)
  - 132-component governed library (35 active JSX + 24 archived)
  - 4 VS Code extensions
  - 1,128 published MDX pages in v2 (live `.mdx` count under `v2/`: 2,999 — this likely conflates published vs total; the "published" count is gated by `docs.json` mintignore exclusions and the 688 v2 pages registered in `docs.json`)
  - 279 frozen legacy pages in v1 (matches: 279 `.mdx` files)
  - `lpd` CLI: 13 subcommands + 5 group shorthands
- Top external links: `docs.livepeer.org/docs-guide`, `docs.livepeer.org/mcp`
- 1,128 vs 688 discrepancy is a published-vs-source claim — README says "published" while `docs.json` v2 page-count is 688. Either README is stale or `docs.json` is missing pages (see Cross-Slice).

### AGENTS.md
- mtime: 2026-05-04 17:17:03
- git last commit: 2026-05-04 17:18:22
- size: 8,414 bytes
- Content-claimed date: none
- Status: ACTIVE — cross-agent baseline. Last touched two weeks before README.
- Asserts canonical governance entry points:
  - `docs-guide/policies/governance-index.mdx` — "single entry point for all 10 governed surfaces"
  - 13 published frameworks, voice/authoring/naming/frontmatter standards, unified decision registry
- Native adapters listed: Copilot, Claude, Cursor (`.cursor/rules/repo-governance.mdc` + `no-deletions.mdc`), Windsurf, Augment
- Safety rules: no `git reset --hard`, no `git stash`, no `git push --force`, no `--no-verify` by default
- References `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`, `.codex/task-contract.yaml`, `operations/scripts/dispatch/ai/codex/`
- Validation matrix table (5 rows): `lpd test --staged`, `lint-structure.js --check`, generator `--check` pair, `check-agent-docs-freshness.js`, `generate-docs-guide-indexes.js --check`

### LICENSE
- mtime: 2026-03-18 20:56:01
- git last commit: 2026-03-03 19:21:03
- size: 1,069 bytes
- Content-claimed date: "Copyright (c) 2023 Livepeer Inc"
- Status: STATIC — standard MIT licence
- DRIFT FLAG: copyright year is 2023 — README dated 2026-05-19 — copyright year not refreshed since fork

### SECURITY.md
- mtime: 2026-03-18 20:56:01
- git last commit: 2026-03-03 19:21:03
- size: 866 bytes
- Content-claimed date: none
- Status: ACTIVE — private vulnerability reporting flow link to `github.com/livepeer/docs/security/advisories/new`; one-page policy with three sections (Reporting, What to Include, Disclosure Expectations)
- No dated entries; oldest active root doc apart from LICENSE/Makefile

### Makefile
- mtime: 2026-03-18 20:56:01
- git last commit: 2026-03-03 19:21:03
- size: 87 bytes (single target)
- Content: `docker buildx build --platform linux/amd64 --load -t livepeer/docs .`
- Status: ACTIVE BUT ORPHAN — `make all` only target; no Dockerfile at root (verified — repo has no root `Dockerfile`)
- DRIFT FLAG: Makefile invokes `docker buildx build` against a Dockerfile that does not exist at repo root. Either dead or expects a `Dockerfile` to be created elsewhere.

### CHANGELOG.md / CONTRIBUTING.md / GOVERNANCE.md / humans.txt
- ABSENT at repo root
- README points to `docs-guide/contributing/contributing.mdx` for the canonical maintainer flow (intentional placement under `docs-guide/`)
- GOVERNANCE.md markers DO exist throughout subsystems (17 found at depth ≤2): `.augment`, `.claude`, `.codex`, `.cursor`, `.githooks`, `.github`, `.mintlify`, `.vscode`, `.windsurf`, `ai-tools`, `api`, `docs-guide`, `operations`, `snippets`, `tools`, `v2`, `workspace`. No root `GOVERNANCE.md` — by design (the root inventory is owned by `.allowlist` + `operations/governance/config/root-governance.json`).

---

## 2. AI artefacts (public root)

### llms.txt
- mtime: 2026-04-15 13:57:58
- git last commit: 2026-04-16 10:08:01
- size: 35,897 bytes
- Lines: 371
- Page entries (`^- [`): 188
- Section headings (`^### `): 52
- Tab headings (`^## `): 9
- URL counts by tab: 181 `v2/` + 7 `docs-guide/` references
- Status: STALE — last regenerated 2026-04-15. docs.json (last edit 2026-05-22) is ~37 days ahead.
- README claims a 1,128-page v2 nav; `llms.txt` only emits 188 entries (16.7 % coverage). Either `llms.txt` is a curated subset (purposeful) or it is severely incomplete. Mintignore lists `llms.txt` as ignored-from-Mintlify-build (`docs-index.json`, `llms.txt`, `sitemap-ai.xml` are explicitly in `.mintignore` as "Generated artifacts").

### sitemap-ai.xml
- mtime: 2026-04-15 13:57:58
- git last commit: 2026-04-16 10:08:01
- size: 70,598 bytes
- Lines: 1,440
- URL entries: 181 (exactly matches llms.txt v2 url count)
- Section distribution: solutions 111 · resources 41 · community 17 · home 10 · gateways 1 · about 1
- `<lastmod>` distribution: 2026-04-05 (170) · 2026-03-31 (10) · 2026-03-30 (1)
- `<ai:lastVerified>` distribution: 2026-04-05 (154) · 2026-03-02 (11) · 2026-03-31 (9) · 2026-03-17 (2) · 2026-03-30 (1) · 2026-03-13 (1)
- Schema: custom `xmlns:ai="https://docs.livepeer.org/schemas/ai-sitemap/1.0"` with `<ai:section>`, `<ai:wordCount>`, `<ai:lastVerified>`, `<ai:tags>`
- Status: STALE — regenerated 2026-04-15 (~5 weeks behind docs.json edits)
- COVERAGE GAP — `developers`, `orchestrators`, `delegators`, `internal`, `ai-tools` sections completely absent from sitemap-ai.xml. Sitemap is biased almost 80 % toward `solutions` content. README claims "AI distribution surface" covering whole site — sitemap-ai.xml does not back this claim.

### docs-index.json
- mtime: 2026-05-18 19:32:57
- git last commit: 2026-04-16 10:08:01
- size: 730,505 bytes
- Lines: 29,419
- generated: `2026-04-07T13:27:03.745Z`
- pages: 532
- Section distribution: home 12 · about 37 · solutions 111 · developers 48 · gateways 90 · orchestrators 72 · delegators 24 · community 17 · resources 43 · docs-guide 47 · internal 28 · ai-tools 3
- `lastVerified` top 10: 2026-04-05 (242) · 2026-04-07 (98) · 2026-04-06 (55) · 2026-03-15 (32) · 2026-03-16 (22) · 2026-03 (15) · 2026-03-17 (12) · 2026-03-31 (12) · 2026-03-02 (11) · 2026-03-13 (8)
- Status: PARTIALLY STALE — mtime is 2026-05-18 (recent) but the internal `generated` field is still `2026-04-07`. Suggests file was touched (perhaps a chmod / format / merge) without regeneration. Note discrepancy with `llms.txt` and `sitemap-ai.xml` page counts: docs-index.json = 532 vs llms.txt = 188 vs sitemap-ai.xml = 181. Three artefacts, three coverage numbers.
- Listed in `.mintignore` as "Generated artifacts" — correct.
- Listed as `public_root_artifact` in `operations/governance/config/root-governance.json`.

### robots.txt
- mtime: 2026-04-03 06:08:03
- git last commit: 2026-03-30 04:31:37
- size: 910 bytes
- Status: ACTIVE — explicit AI crawler allowlist
- AI crawlers allowed: Googlebot, Bingbot, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, cohere-ai
- Sitemap reference: `https://docs.livepeer.org/sitemap.xml` (Mintlify auto-sitemap, NOT `sitemap-ai.xml`). The AI-enriched sitemap is not advertised in robots.txt — discoverability gap.
- Forbidden in `forbidden_root_artifacts` (allowlist): no — present in allowlist as approved root file.

---

## 3. Config files

### docs.json
- mtime: 2026-05-22 16:00:24
- git last commit: 2026-05-22 16:05:06
- size: 251,600 bytes (~245 KB)
- Lines: 5,672
- Top-level keys: `$schema`, `theme`, `name`, `metadata`, `colors`, `favicon`, `navigation`, `logo`, `api`, `appearance`, `search`, `footer`, `integrations`, `navbar`, `errors`, `redirects`, `styling`
- Theme: `palm`
- Colour: primary `#3CB540` · light `#2b9a66` · dark `#3CB540`
- appearance.default: `dark`
- Navigation versions: `v1` (default = true), `v2` (default = false)
- v1: 4 dropdowns (Developers, Delegators, Orchestrators, Gateways), 777 pages registered
- v2: 0 dropdowns, single English `tabs` array with 10 tabs (Home, About, Solutions, Developers, Gateways, Orchestrators, Delegators, Community, Resource HUB, Internal Hub), 688 pages registered
- Total groups across all versions: 344
- Solutions tab and Resource HUB tab have 0 top-level groups (likely portal-driven landing pages)
- DRIFT FLAG: README states `docs.livepeer.org` deploys from `docs-v2`; the version `default: true` in this `docs.json` is set to **v1** (the legacy version). v1 is the default site landing version per this config. If production reflects this, new docs (v2) are not landing first.
- redirects block: 475 entries
- redirect bucket top 5: `sdks/react` (68) · `v2/developers` (38) · `v1/guides` (35) · `v1/reference` (29) · `developers/guides` (25)
- Other configured blocks: `search.prompt`, `integrations.ga4`, `navbar.links`, `errors.404`, `footer.socials`, `styling.codeblocks.theme` (light=`github-light`, dark=`dark-plus`)
- API block: `{ openapi, mdx }`
- Logo: `/snippets/assets/logos/light.svg` · `/snippets/assets/logos/dark.svg`
- Favicon: `/snippets/assets/logos/favicon/favicon.png`

### style.css
- mtime: 2026-04-09 02:19:32
- git last commit: 2026-04-09 00:57:54
- size: 18,889 bytes
- Lines: 664
- `--lp-*` namespace: confirmed (40+ tokens at `:root`, full dark variant in `.dark` selector)
  - Colours: accent / accent-strong / accent-soft / accent-bright / accent-brightest / arbitrum / text-primary / text-secondary / text-muted / bg-page / bg-card / bg-elevated / bg-subtle / bg-overlay / border-default / border-strong / border-inverse / on-accent / link / link-hover / brand-discord / brand-forum / brand-github / brand-x / brand-globe / brand-twitch / brand-youtube / brand-instagram / brand-linkedin / brand-preview / brand-coming-soon / brand-linux / brand-windows / brand-macos / status-good / status-warn / status-bad
  - Spacing: `--lp-spacing-1..8`, `--lp-spacing-px-3..12`
  - Typography: `--lp-font-sans`, `--lp-font-mono`
  - Radius: `--lp-radius-sm/md/lg`
  - Shadows: `--lp-shadow-card`
  - z-index: `--lp-z-base`, `--lp-z-overlay`, `--lp-z-modal`
- Legacy aliases maintained (15 `--accent`, `--text`, etc. mapped through to `--lp-*`)
- Dark theme overrides all token values; light and dark palettes are paired correctly
- Override sections (commented headers): GLOBAL THEME VARIABLES · ACCESSIBILITY (focus indicators) · ACCESSIBILITY (responsive breakpoints) · UTILITY CLASSES
- Heavy use of `!important` on Mintlify selectors (50+ instances) — necessary platform override
- Mermaid theming: not present in CSS (lives in components/data per other slices)
- Status: ACTIVE — stable since 2026-04-09. Token namespace is consolidated and well-shaped.

### jsconfig.json
- mtime: 2026-05-18 19:32:57
- git last commit: 2026-05-07 13:29:55
- size: 229 bytes
- Contents: `baseUrl: "."`, `jsx: "react-jsx"`, `paths: { "/snippets/*": ["snippets/*"] }`, `include: ["snippets/**/*.jsx", "v2/**/*.mdx"]`, `exclude: ["node_modules", "tools", "v1"]`
- Status: ACTIVE — supports IntelliSense / VS Code; absolute snippet imports

### package.json / package-lock.json
- ABSENT at repo root (verified)
- README confirms: "There is no root `package.json`. The `lpd` CLI handles all dependency installation."
- DRIFT FLAG: Not a drift — by design. Package configs live in `tools/`, `operations/tests/`, and subsystems.

---

## 4. Editor / lint config

### .editorconfig
- mtime: 2026-03-18 20:56:01 · git: 2026-03-12 23:40:03 · 230 bytes
- Root flag set. utf-8, lf, insert final newline, 2-space indent, trim trailing whitespace (off for `.md` / `.mdx`)
- Status: ACTIVE, minimal, sane

### .prettierrc
- mtime: 2026-03-18 20:56:01 · git: 2026-03-03 19:21:03 · 222 bytes
- semi=false, singleQuote=true, tabWidth=2, trailingComma=es5, proseWrap=preserve
- Override: `*.mdx` → `parser: mdx`
- Status: ACTIVE; oldest tracked root file

### .markdownlint* / .eslintrc* / .nvmrc / .tool-versions
- ABSENT at root
- DRIFT FLAG (low): no Node engine pin at root. `lpd setup` is responsible for environment; not a blocker but contributors cloning may want explicit Node version.

---

## 5. Git / Mintlify ignores

### .gitignore
- mtime: 2026-05-22 13:41:17 · git: 2026-05-22 16:05:06 · 2,771 bytes · 128 lines
- Pattern groups: node modules · IDE workspace · env (`.env`, `.env.*local`) · Google OAuth secrets (`**/client_secret*.json`) · chat reconstruction recovery folder · logs · OS files · Mintlify build outputs (with explicit `!` for `Assistant.md`) · TS buildinfo · external docs · Notion exports · AI task planning (legacy `tasks/plan/` carve-outs) · LLM usefulness cache · Codex local locks · generated data files · pipeline fixtures
- `.env` confirmed gitignored at line 24
- Notable carve-outs: `!tools/package-lock.json`, `!tests/package-lock.json`, `!.mintlify/Assistant.md`
- DRIFT FLAG: still references legacy `tasks/plan/` paths (lines 94-101). The active workspace is `workspace/plan/` per README. Either preserved for historical commits or stale.

### .gitattributes
- mtime: 2026-03-18 20:56:01 · git: 2026-03-03 19:21:03 · 365 bytes
- LFS filters: `*.gif`, `*.mp4`, plus two specific large audit JSON paths under `tasks/plan/reports/` and `tasks/reports/`
- DRIFT FLAG: both LFS-tracked paths reference the legacy `tasks/` directory layout (not the current `workspace/reports/`). If those legacy report files no longer exist, the LFS rule is harmless but stale.

### .mintignore
- mtime: 2026-05-04 14:25:43 · git: 2026-04-13 18:08:13 · 3,393 bytes · 133 lines
- Groups: all plain `.md` files (Mintlify parses as MDX) · node_modules · `/.github`, `/workspace`, `/_dep-docs`, `/tools/notion`, `/docs-guide/_workspace` · nested node_modules · cache/coverage/dist/Mintlify outputs · operational dirs (`.github`, `workspace`, `ai-tools`, `.githooks`, `.vscode`, `/tools/notion`, ops/tools JS files, `.github` JS files, automation JS files) · tmp/backup/`*.disabled` · all `_workspace/` dirs · v2 draft/scratch/`x-*` dirs · unrouted internal source · un-ignores for routed report pages / `content-brief-template.md` / `ai-tools` setup guides / `tools/scripts/snippets/README.mdx`
- Generated artefacts ignored: `docs-index.json`, `llms.txt`, `sitemap-ai.xml`
- `.allowlist` also un-built (under `# AI files`)
- Status: ACTIVE — well-curated, the un-ignore (`!`) pattern is correctly used for routed exceptions.

---

## 6. Governance / Root contract

### .allowlist
- mtime: 2026-04-09 01:29:30 · git: 2026-04-09 01:29:47 · 563 bytes · 42 lines
- Header: "Generated from operations/governance/config/root-governance.json — Do not edit manually. Regenerate with: node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js --write"
- 36 entries listed:
  - Dotfiles (15): `.allowlist`, `.augment`, `.claude`, `.codex`, `.cursor`, `.editorconfig`, `.gitattributes`, `.githooks`, `.github`, `.gitignore`, `.mintignore`, `.mintlify`, `.prettierrc`, `.vscode`, `.windsurf`
  - Top-level files (5): `AGENTS.md`, `LICENSE`, `Makefile`, `README.md`, `SECURITY.md`
  - Top-level configs/artefacts (7): `docs-index.json`, `docs.json`, `jsconfig.json`, `llms.txt`, `robots.txt`, `sitemap-ai.xml`, `style.css`
  - Subsystems (9): `ai-tools`, `api`, `docs-guide`, `operations`, `snippets`, `tools`, `v1`, `v2`, `workspace`
- NOT in allowlist but PRESENT at root: `.env`, `.cache`, `.DS_Store`
  - `.env`: tolerated as `local_compatibility` in root-governance.json with `tracking_policy: untracked_only`
  - `.cache`: listed in `forbidden_root_artifacts` of root-governance.json — present locally, must be gitignored / cleaned
  - `.DS_Store`: listed in `forbidden_root_artifacts` of root-governance.json — `.gitignore` line 2 covers it
- AGENTS.md rule: "`.allowlist` may contain only root entries and `#` comments. Never place nested paths, HTML comments, or report prose." — current `.allowlist` complies.

### Root governance source-of-truth
- `operations/governance/config/root-governance.json` (read first 100 lines)
- version: `root-governance.v1`
- generated_outputs: `allowlist`, `map_doc` (`docs-guide/repo-ops/config/root-governance-map.mdx`), sync reports under `workspace/reports/repo-ops/`
- 5 placement surfaces: scripts · tooling_docs · public_root_artifacts · workspace_reports · local_browser_outputs
- local_compatibility list: `.env` only
- forbidden_root_artifacts: `.DS_Store`, `.cache`, `.cursorrules`, `.playwright-cli`, `repo-catalog.mdx`, `ASSISTANT.md`, `Assistant.md`

### GOVERNANCE.md at root
- ABSENT (by design — root inventory is driven by `.allowlist` + JSON config, not a root marker)

---

## 7. Hidden / dot-directories (existence only)

| Path | Status | Notes |
|---|---|---|
| `.claude/` | Active adapter — Claude Code | Has GOVERNANCE.md |
| `.cursor/` | Active adapter — Cursor | Has GOVERNANCE.md |
| `.windsurf/` | Active adapter — Windsurf | Has GOVERNANCE.md |
| `.augment/` | Active adapter — Augment | Has GOVERNANCE.md |
| `.codex/` | Active adapter — Codex (task contract + locks) | Has GOVERNANCE.md |
| `.github/` | CI + Copilot instructions + actions-library catalog | Has GOVERNANCE.md |
| `.githooks/` | 15 entries including BYPASS.md, pre-commit, pre-push, server-manager.js | Has GOVERNANCE.md |
| `.vscode/` | 11 entries — settings, tasks, mcp, 5 .code-snippets files + 1 .bak | Has GOVERNANCE.md |
| `.mintlify/` | Assistant.md + GOVERNANCE.md (only 2 files) | Has GOVERNANCE.md |
| `.cache/` | Forbidden per root-governance.json — exists locally | Should be cleaned or stay gitignored |
| `.env` | Untracked, gitignored — contents NOT read per scope | Compliant |
| `.DS_Store` | Forbidden per root-governance.json — exists locally | Properly gitignored |
| `.git` | Worktree marker file (113 bytes) — points to actual git dir | Normal |

### .mintlify/Assistant.md
- size: 4,445 bytes
- git: 2026-04-05 15:54
- Contents: Mintlify chat assistant contract — mission, primary context, source-of-truth priority, domain disambiguation rules
- Mounts canonical Mintlify reference: `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
- Cross-references match AGENTS.md and CLAUDE.md priority order
- Status: ACTIVE

### .vscode/ files (root-level only, not contents)
- `GOVERNANCE.md` (owner: @livepeer/docs-team, framework: repo-structure)
- `components.code-snippets`, `lp-components.code-snippets`, `mdx.code-snippets`, `mintlify.code-snippets`, `templates.code-snippets` (5 active)
- `livepeer-legacy.code-snippets.bak` (1 backup — could be removed; covered by `*.bak*` in `.mintignore`)
- `extensions.json`, `mcp.json`, `settings.json`, `tasks.json`
- `snippets/` directory (further code snippets — out of scope here)

---

## 8. Cross-slice findings (drift / consolidation)

1. **AI artefact freshness vs docs.json**
   - `docs.json` last edited: 2026-05-22
   - `llms.txt` regenerated: 2026-04-15 (37 days behind)
   - `sitemap-ai.xml` regenerated: 2026-04-15 (37 days behind)
   - `docs-index.json` `generated` field: 2026-04-07 (45 days behind), mtime 2026-05-18 (file touched but not regenerated)
   - README "community-help wanted" lists "Wire `llms.txt` + `sitemap-ai.xml` regen to CI — P0, single highest-impact AI freshness fix." — this audit confirms the P0 is real and pending.

2. **docs.json default version is `v1`, not `v2`**
   - `versions[].default`: v1 = `true`, v2 = `false`
   - README claims `docs.livepeer.org` is the v2 product surface. Either Mintlify dashboard overrides this, or the deploy is landing visitors on v1 by default. Audit cannot resolve without dashboard access; flag for verification.

3. **README claims vs live counts**
   - "59 governed GitHub workflows" — live count of `.yml`/`.yaml` under `.github/`: **28** (16 under `workflows/`, 12 elsewhere). 59 is not in evidence at root level. README inflated by ~2×, OR the count includes archived/deprecated/`.disabled` files (see `.github/workflows/deprecated` and `x-archive` directories).
   - "341 typed scripts" — live count under `operations/scripts/`: 343. Match (±2).
   - "35 portable AI skills" — live `SKILL.md` files under `ai-tools/ai-skills`: 34. Match (±1).
   - "1,128 published MDX pages in v2" — live `.mdx` files in v2: 2,999; pages registered in `docs.json` v2 nav: **688**. 1,128 is between the two — likely refers to "published in nav including child pages" but does not match either bound exactly. Stale figure.
   - "132-component governed library" — count not verified in this slice.

4. **sitemap-ai.xml section coverage gap**
   - 181 URLs across 6 sections; 80 % concentrated in `solutions` (111) and `resources` (41).
   - Missing entirely: `developers`, `orchestrators`, `delegators`, `internal`, `ai-tools`
   - `gateways`: 1 URL only · `about`: 1 URL only
   - robots.txt advertises `sitemap.xml` (Mintlify auto), not `sitemap-ai.xml` — AI crawlers using the official sitemap will not see the AI-enriched metadata.

5. **llms.txt vs docs-index.json vs sitemap-ai.xml — three artefacts, three coverage numbers**
   - `llms.txt`: 188 entries
   - `sitemap-ai.xml`: 181 URLs
   - `docs-index.json`: 532 pages
   - Generated from related but divergent pipelines. Either by design (different audiences) or out of sync. Should be reconciled or documented.

6. **Redirect bloat** — 475 entries in `docs.json`
   - Biggest bucket: `sdks/react` (68 entries — single SDK redirect set)
   - Second: `v2/developers` (38) — active IA migration
   - Third + fourth: `v1/guides` (35) + `v1/reference` (29) — legacy carve-outs
   - Eight buckets > 10 entries each — suggests two ongoing IA migrations (developers + SDKs/react) layered on legacy v1 redirects
   - Consolidation candidate: deprecate legacy `v1/*` redirects if v1 is fully frozen and no longer linked from external sites; or move to a separate redirect file if Mintlify supports it.

7. **Robots AI-crawler allowlist freshness**
   - 13 explicit AI crawlers listed (Google, Bing, OpenAI x3, Anthropic x3, Perplexity, Google-Extended, Applebot-Extended, Amazonbot, cohere-ai)
   - Missing crawlers worth considering: `Bytespider` (ByteDance), `DuckAssistBot`, `Diffbot`, `meta-externalagent`, `omgilibot`, `YouBot`
   - File last edited 2026-04-03 — AI crawler list churn is high; review at least quarterly.

8. **Makefile orphan**
   - Single target invokes `docker buildx build` for a Dockerfile that is not at repo root
   - Either dead (delete) or expects a Dockerfile (add one or remove Makefile target)

9. **LICENSE copyright year**
   - "Copyright (c) 2023" — should be `2023-2026` or `2023-present` per common practice
   - Low priority but visible

10. **Legacy path references in .gitattributes and .gitignore**
    - `.gitattributes` references `tasks/plan/reports/...` and `tasks/reports/...` LFS paths — `workspace/` has replaced `tasks/`
    - `.gitignore` lines 94-101 still carve out `tasks/plan/active/`, `tasks/plan/complete/`, etc. — workspace migration not fully reflected.

---

## 9. Consolidation matrix

| Item | Action | Priority | Effort | Owner |
|---|---|---|---|---|
| Wire `llms.txt`, `sitemap-ai.xml`, `docs-index.json` regen into CI on docs.json change | Add scheduled + change-triggered workflow | P0 | M | docs/automation |
| Verify `docs.json` `versions[].default` is correct (v1 vs v2) | Read Mintlify dashboard; align config | P0 | S | docs |
| Reconcile README claims with live counts (workflows 59→28, pages 1,128→688) | Regenerate README counts via generator or fix figures | P1 | S | docs |
| Extend sitemap-ai.xml to all 10 v2 tabs (currently 6) | Audit generator scope; widen route filter | P1 | M | docs/automation |
| Advertise `sitemap-ai.xml` in `robots.txt` | One-line addition | P1 | XS | docs |
| Audit `docs.json.redirects` for legacy/expired entries (475 → reduce) | Validator for redirect freshness; archive v1 redirects | P2 | M | docs |
| Resolve Makefile orphan target | Delete Makefile OR add Dockerfile | P2 | XS | docs |
| Update `.gitattributes` and `.gitignore` to remove `tasks/` legacy paths | Replace with `workspace/` equivalents | P2 | XS | docs |
| Refresh LICENSE copyright year | `(c) 2023-present Livepeer Inc` | P3 | XS | docs |
| Review robots.txt AI crawler allowlist quarterly | Add Bytespider, meta-externalagent, omgilibot, etc. | P3 | XS | docs |
| Pin Node version at root (`.nvmrc` or `.tool-versions`) | Aid contributors not using `lpd setup` | P3 | XS | tools |
| Clean `.cache/` and `.DS_Store` from working tree (already gitignored) | One-off cleanup | P3 | XS | docs |
| Remove `.vscode/livepeer-legacy.code-snippets.bak` | Already mintignored; gitignored backup files | P3 | XS | docs |

---

## 10. Status summary

- 12 documented config / artefact files at repo root
- All 36 allowlist entries present and accounted for
- No forbidden root artefacts tracked (3 forbidden present locally are properly gitignored or untracked: `.DS_Store`, `.cache`, `.env`)
- Mintlify run-time contract (`docs.json`, `style.css`) and AI-distribution contract (`llms.txt`, `sitemap-ai.xml`, `docs-index.json`, `robots.txt`) all present
- Cross-agent baseline (`AGENTS.md`) present; LICENSE, SECURITY, README, Makefile in place
- Largest live drift surface: AI-distribution artefacts are 37-45 days behind `docs.json` — needs CI wiring
- Second largest drift: README live-counts have diverged from the underlying counts (workflows, v2 pages)
- Root governance contract is mature: `.allowlist` is generated, root JSON config is authoritative, sync reports go to `workspace/reports/repo-ops/`

End of slice.
