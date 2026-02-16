# Augment Instructions for Livepeer Docs

## ⛔ CRITICAL RULES - VIOLATION = CATASTROPHIC FAILURE ⛔

### NEVER PERFORM GIT OPERATIONS WITHOUT EXPLICIT PERMISSION

- **NEVER** run `git commit` without explicit user permission
- **NEVER** run `git push` without explicit user permission
- **NEVER** run `git reset` (soft/hard/mixed) without explicit user permission
- **NEVER** use `--no-verify` flag to bypass hooks
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

1. **Style Guide** - `v2/pages/07_resources/documentation-guide/style-guide.mdx`
   - Production-grade styling guidelines
   - CSS Custom Properties usage (ONLY approach - no ThemeData)
   - Mintlify gotchas and limitations
   - Component usage patterns

2. **Component Library** - `v2/pages/07_resources/documentation-guide/component-library.mdx`
   - Available components and their usage
   - Props and examples

**Critical Rules:**
- ✅ Use CSS Custom Properties: `var(--accent)`, `var(--text)`, etc.
- ❌ NEVER use `ThemeData` from `themeStyles.jsx` (deprecated)
- ❌ NEVER hardcode hex colors that should adapt to theme
- ✅ Follow Mintlify import patterns (absolute paths from root)
- ✅ Test in both light and dark modes
- ❌ No suggestions/recommendations in production docs (factual only)

## Repository Structure

### Multi-Version Docs

- `v1/` - Legacy documentation
- `v2/` - Current documentation
- Navigation configs: `docs.json` (v1), `docs_v2.json` (v2)

### Key Directories

- `snippets/components/` - Custom React/JSX/TSX components
- `snippets/data/` - Data files (gateways.jsx, etc.)
- `automations/` - Dynamic/AI/data-fetching logic
- `ai-tools/` - AI-related tooling
- `v2/scripts/` - API doc generation, data fetching scripts
- `style.css` - Global CSS Custom Properties for theming (production-grade styling)
- `images/`, `logo/`, `assets/` - Static assets

### Important Files

- `mint.json`, `docs.json` - Mintlify config/navigation
- `openapi.yaml` - API reference spec
- `ai/worker/api/openapi.yaml` - AI API spec
- `Dockerfile`, `Makefile` - Build/deploy
- `README.md`, `README_V2.md` - Developer documentation

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
