# Augment Instructions for Livepeer Docs

## ⛔ CRITICAL RULES - VIOLATION = CATASTROPHIC FAILURE ⛔

### NEVER PERFORM GIT OPERATIONS WITHOUT EXPLICIT PERMISSION

- **NEVER** run `git commit` without explicit user permission
- **NEVER** run `git push` without explicit user permission
- **NEVER** run `git reset` (soft/hard/mixed) without explicit user permission
- **DEFAULT:** do not use `--no-verify` to bypass hooks
- **EXCEPTION:** only when explicitly instructed by a human in-thread, `git commit --no-verify` is allowed with audit metadata per `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`
- **NEVER** modify git history or remote state
- **ALWAYS** ask before ANY git operation that could lose work

### INCIDENT LOG - LEARN FROM THESE FAILURES

**2026-01-06 00:52 UTC**: AI assistant performed unauthorized
`git reset --hard HEAD~1`

- Destroyed hours of user work across 11 files
- Violated explicit "NEVER commit/push without permission" rule
- Required emergency recovery from VSCode Augment checkpoints
- User lost focus, workflow, and trust
- **THIS MUST NEVER HAPPEN AGAIN**

## User Rules (CRITICAL - FOLLOW ALWAYS)

1. **Never make code edits without permission that cannot be reverted**
2. **Don't ask for read/grep/view command permissions** - just do it
3. **Before implementing fixes** - explain the issue and proposed solution first
4. **Don't repeat past errors** - if something failed, try a different approach
5. **Keep context minimal** - only load files needed for the task
6. **Always have a backup before risky changes** - THIS IS CRITICAL. If testinga
   change, ensure you can revert first
7. **Easily reversible code changes** - OK to make without asking
8. **Never make irreversible changes** - always ensure changes can be undone

## MANDATORY: Style Guide and Documentation Standards

**BEFORE making any styling, component, or documentation changes, you MUST read:**

1. **Structure Rules** - `contribute/STRUCTURE.md` (if exists) or `tasks/plan/migration-plan.md` Section 4
   - Repository structure and file organization rules
   - Directory purposes and file placement guidelines
   - Enforcement mechanisms

2. **Style Guide** - `v2/pages/07_resources/documentation-guide/style-guide.mdx`
   - Production-grade styling guidelines
   - CSS Custom Properties usage (ONLY approach - no ThemeData)
   - Mintlify gotchas and limitations
   - Component usage patterns

3. **Component Library** - `v2/pages/07_resources/documentation-guide/component-library.mdx`
   - Available components and their usage
   - Props and examples

**Critical Rules:**
- ✅ Use CSS Custom Properties: `var(--accent)`, `var(--text)`, etc.
- ❌ NEVER use `ThemeData` from `themeStyles.jsx` (deprecated)
- ❌ NEVER hardcode hex colors that should adapt to theme
- ✅ Follow Mintlify import patterns (absolute paths from root)
- ✅ Test in both light and dark modes
- ❌ No suggestions/recommendations in production docs (factual only)
- ✅ Verify file location matches structure rules before creating files

## Repository Structure

**⚠️ MANDATORY: Read Structure Rules Before Creating/Moving Files**

**BEFORE creating, moving, or organizing files, you MUST read:**
- `contribute/STRUCTURE.md` - Complete repository structure rules (if exists)
- `tasks/plan/migration-plan.md` - Detailed structure documentation (Section 4)

### Critical Structure Rules

1. **Root Directory** - Only essential files allowed:
   - ✅ Allowed: `docs.json`, `package.json`, `README.md`, `LICENSE`, `Dockerfile`, `Makefile`, `style.css`, `.gitignore`, `.mintignore`, `.allowlist`
   - ❌ Forbidden: Scripts, config files, documentation files, temporary files, OpenAPI specs
   - **CRITICAL:** Mintlify only allows ONE CSS file (`style.css`) at root - NO `styles/` folder

2. **File Locations** - Files must be in correct directories:
   - Scripts → `tools/scripts/` (organized by purpose: audit/, generate/, test/, verify/, fetch/)
   - Config files → `tools/config/` **EXCEPT**:
     - `.prettierrc.yaml` → **ROOT** (Prettier convention)
   - `.speakeasy/` → `tools/config/.speakeasy/` (Speakeasy API docs tool config)
   - AI guidelines → `tools/ai-rules/`
   - Public assets → `snippets/assets/` (favicon.png, logo/ in snippets/assets/ - referenced in docs.json)
   - OpenAPI specs → `api/` (consolidated)
   - Contribution docs → `contribute/`
   - Documentation → `docs/v1/` (FROZEN) or `docs/v2/pages/` (active)

3. **Snippets Directory** - MUST follow Mintlify conventions:
   - ✅ Required: `snippets/pages/` (for MDX-in-MDX pattern)
   - ✅ Allowed: `components/`, `data/`, `assets/`, `automations/`, `generated/`
   - ❌ Forbidden: Scripts (→ `tools/scripts/`), wiki/docs (→ `tools/wiki/`), styles (→ root `style.css` only)
   - ✅ All imports must be absolute paths from root: `/snippets/components/...`
   - ❌ Components cannot import other components

4. **Enforcement** - Structure is enforced:
   - `.allowlist` file lists allowed root files/directories
   - Pre-commit hook blocks unauthorized root files/directories
   - Always check structure rules before creating new files

### Multi-Version Docs

- `docs/v1/` - IMMUTABLE/FROZEN (never modify, remove, or archive)
- `docs/v2/pages/` - Current documentation (will be flattened to `docs/pages/` in stretch goal)
- Navigation configs: `docs.json`

### Key Directories

- `snippets/components/` - Custom React/JSX/TSX components
- `snippets/data/` - Data files (gateways.jsx, etc.)
- `snippets/pages/` - REQUIRED for MDX sub-views (MDX-in-MDX pattern)
- `snippets/assets/` - Static assets for docs content
- `snippets/automations/` - Dynamic/AI/data-fetching logic
- `tools/scripts/` - All scripts (organized by purpose)
- `tools/config/` - Tool configurations
- `tools/ai-rules/` - AI guidelines and rules
- `api/` - Consolidated OpenAPI specifications
- `contribute/` - Contribution documentation
- `favicon.png` and `logo/` - Public assets in `snippets/assets/` (referenced in docs.json)
- `ai-tools/` - AI tool setup guides
- `tasks/` - AI working directory (plan/, reports/, scripts/, errors/, experiments/, notes/)
- `style.css` - Global CSS Custom Properties (ONLY CSS file at root)

### Important Files

- `docs.json` - Mintlify config/navigation
- `api/studio.yaml` - Main API reference spec (moved from root `openapi.yaml`)
- `api/ai-worker.yaml` - AI API spec (moved from `ai/worker/api/openapi.yaml`)
- `api/cli-http.yaml` - CLI HTTP API spec
- `Dockerfile`, `Makefile` - Build/deploy
- `README.md` - Developer documentation

## Development Workflows

### Local Preview

```bash
npm i -g mintlify
mint dev
```

### Docker Build

```bash
docker buildx build --platform linux/amd64 --load -t livepeer/docs .
```

### API Docs Generation

```bash
./v2/scripts/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/AI-API "AI API"
```

## Component System

- All docs are `.mdx` (Markdown + JSX)
- Custom components in `snippets/components/`
- Use `.tsx` for new components (`.jsx` is legacy)
- Import with relative paths from `snippets/components/`

### Key Components

- `CustomCodeBlock` - Code blocks with variable interpolation
- `CustomViewDropdown` - Mintlify-style view switching
- Various callout/warning components in `snippets/components/gateways/`

## Architecture Context

Livepeer protocol node roles:

- **Gateway** - Routes jobs, doesn't process video
- **Orchestrator** - Coordinates work
- **Transcoder** - Processes video
- **AI Worker** - Handles AI inference

Node roles are mutually exclusive.

## Data Files

### snippets/data/gateways.jsx

Contains Docker Compose configurations:

- `DOCKER_YML.offChain.{videoMin, video, aiMin, ai, dualMin, dual}`
- `DOCKER_YML.onChain.{video, ai, dual}`

Use with `CustomCodeBlock`:

```jsx
<CustomCodeBlock language="yaml" codeString={DOCKER_YML.offChain.videoMin} />
```

## Conventions

- MDX-first documentation
- New docs go in `v2/`
- Legacy/deprecated content in `v1/` or `deprecated-references/`
- No formal test suite - preview locally before merging
- SEO tags/metadata in page frontmatter
