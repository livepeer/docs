docs. The docs are built and previewed using Mintlify CLI, and can be
containerized with Docker.

# Copilot Instructions for Livepeer Docs (2026)

## Big Picture & Architecture

**⚠️ MANDATORY: Read Structure Rules Before Creating/Moving Files**

**BEFORE creating, moving, or organizing files, you MUST read:**
- `contribute/STRUCTURE.md` - Complete repository structure rules (if exists)
- `tasks/plan/migration-plan.md` - Detailed structure documentation (Section 4)

### Critical Structure Rules

1. **Root Directory** - Only essential files allowed:
   - ✅ Allowed: `docs.json`, `package.json`, `README.md`, `LICENSE`, `Dockerfile`, `Makefile`, `style.css`, `.gitignore`, `.mintignore`, `.whitelist`
   - ❌ Forbidden: Scripts, config files, documentation files, temporary files, OpenAPI specs
   - **CRITICAL:** Mintlify only allows ONE CSS file (`style.css`) at root - NO `styles/` folder

2. **File Locations** - Files must be in correct directories:
   - Scripts → `tools/scripts/` (organized by purpose: audit/, generate/, test/, verify/, fetch/)
   - Config files → `tools/config/`
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
   - `.whitelist` file lists allowed root files/directories
   - Pre-commit hook blocks unauthorized root files/directories
   - Always check structure rules before creating new files

- **Multi-version Docs:**
  - `docs/v1/` = IMMUTABLE/FROZEN (never modify), `docs/v2/pages/` = current. Navigation in `docs.json`.
- **Component System:**
  - Custom React/TSX/JSX components in `snippets/components/` (see
    README-custom-view.md for advanced usage).
  - Use `.tsx` for new components; `.jsx` is legacy but supported.
  - All imports must be absolute paths from root: `/snippets/components/...`
- **Automations & Scripts:**
  - All dynamic, AI, and data-fetching logic in `snippets/automations/` and `ai-tools/`.
  - Scripts for API doc generation and external data in `tools/scripts/` (organized by purpose).
- **API Reference:**
  - OpenAPI specs consolidated in `api/` directory:
    - `api/studio.yaml` - Main API (moved from root `openapi.yaml`)
    - `api/ai-worker.yaml` - AI API (moved from `ai/worker/api/openapi.yaml`)
    - `api/cli-http.yaml` - CLI HTTP API
  - Use scripts to generate MDX/API docs.
- **Assets:**
  - Public assets in `snippets/assets/` (favicon.png, logo/ in snippets/assets/ - referenced in docs.json)
  - Docs content assets in `snippets/assets/`

## Developer Workflows

- **Preview Locally:**
  1. Install Mintlify CLI: `npm i -g mintlify`
  2. Run: `mint dev` (from repo root, where `mint.json` or `mint_v1.json`
     exists)
- **Build/Deploy:**
  - Docker:
    `docker buildx build --platform linux/amd64 --load -t livepeer/docs .`
  - Makefile: `make all`
- **API Docs Generation:**
  - Use `snippets/scripts/generate-api-docs.sh` to convert OpenAPI specs to
    MDX/API docs and navigation JSON. Example:
    ```bash
    ./snippets/scripts/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/AI-API "AI API"
    ```
  - Output: MDX files + navigation snippet for `docs.json`.
- **External Data Fetching:**
  - Use `fetch-openapi-specs.sh` and `fetch-external-docs.sh` for syncing
    specs/docs from other repos.
- **Component Usage:**
  - Import with relative paths from `snippets/components/` in `.mdx` files.
  - For custom dropdowns, see `CustomViewDropdown` in
    `snippets/components/custom-view-dropdown.jsx` and its README.

## Project Conventions & Patterns

- **MDX-First:** All docs are `.mdx` (Markdown + JSX/TSX components).
- **Versioning:** New docs in `v2/`, legacy in `v1/` or
  `deprecated-references/`.
- **AI/Dynamic Content:** All AI-generated or dynamic content in `automations/`
  or `ai-tools/`.
- **SEO & Metadata:** Add SEO tags/metadata in page frontmatter (see
  `README_V2.md`).
- **No Formal Test Suite:** Preview changes locally before merging.
- **Architecture:**
  - Docs mirror protocol architecture: Gateway, Orchestrator, Transcoder, AI
    Worker. See `README_V2.md` for detailed flows and node roles.
  - Gateways do not process video; they route jobs to orchestrators. Node roles
    are mutually exclusive (see `README_V2.md`).
- **Custom Views:**
  - Use `CustomViewDropdown` for Mintlify-style view switching. See
    `snippets/components/README-custom-view.md` for migration and usage.

## Integration Points

- **Mintlify:** All build/preview flows use Mintlify CLI and config files
  (`mint.json`, `docs.json`).
- **OpenAPI:** API docs generated from `openapi.yaml` (see also
  `ai/worker/api/openapi.yaml`).
- **Docker:** Containerized builds for CI/CD and local dev.
- **Automations:** Scripts in `snippets/scripts/` automate API doc generation
  and external data sync.

## Key Files & Directories

- `docs.json` — Navigation/config
- `docs/v1/` — IMMUTABLE/FROZEN documentation (never modify)
- `docs/v2/pages/` — Current documentation pages
- `snippets/components/` — Custom components (see README-custom-view.md)
- `snippets/pages/` — REQUIRED for MDX sub-views (MDX-in-MDX pattern)
- `snippets/automations/` — Dynamic/AI/data-fetching logic
- `tools/scripts/` — All scripts (organized by purpose: audit/, generate/, test/, verify/, fetch/)
- `tools/config/` — Tool configurations
- `tools/ai-rules/` — AI guidelines and rules
- `api/` — Consolidated OpenAPI specifications (studio.yaml, ai-worker.yaml, cli-http.yaml)
- `contribute/` — Contribution documentation
- `favicon.png` and `logo/` — Public assets in `snippets/assets/` (referenced in docs.json)
- `ai-tools/` — AI tool setup guides
- `tasks/` — AI working directory (plan/, reports/, scripts/, errors/, experiments/, notes/)
- `style.css` — Global CSS Custom Properties (ONLY CSS file at root)
- `Dockerfile`, `Makefile` — Build/deploy
- `README.md` — Developer notes, protocol/architecture

---

If any conventions or workflows are unclear, review the latest `README.md`,
`README_V2.md`, or automation READMEs, or ask for clarification.
