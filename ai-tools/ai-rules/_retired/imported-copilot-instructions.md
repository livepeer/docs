---
type: "agent_requested"
description: "Example description"
---

docs. The docs are built and previewed using Mintlify CLI, and can be
containerized with Docker.

# Copilot Instructions for Livepeer Docs (2026)

## Big Picture & Architecture

- **Multi-version Docs:**
  - `v1/` = legacy, `v2/` = current. Navigation in `docs.json`/`docs_v2.json`.
- **Component System:**
  - Custom React/TSX/JSX components in `snippets/components/` (see
    README-custom-view.md for advanced usage).
  - Use `.tsx` for new components; `.jsx` is legacy but supported.
- **Automations & Scripts:**
  - All dynamic, AI, and data-fetching logic in `automations/` and `ai-tools/`.
  - Scripts for API doc generation and external data in `tools/scripts/snippets/` (see
    generate-api-docs.sh, fetch-openapi-specs.sh).
- **API Reference:**
  - OpenAPI spec in `openapi.yaml` (AI API: see ai/worker/api/openapi.yaml). Use
    scripts to generate MDX/API docs.
- **Assets:**
  - Images/logos in `images/`, `logo/`, and static assets in `assets/`.

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
  - Use `tools/scripts/snippets/generate-api-docs.sh` to convert OpenAPI specs to
    MDX/API docs and navigation JSON. Example:
    ```bash
    ./tools/scripts/snippets/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/AI-API "AI API"
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
- **Automations:** Scripts in `tools/scripts/snippets/` automate API doc generation
  and external data sync.

## Key Files & Directories

- `docs.json`, `docs_v2.json` — Navigation/config
- `snippets/components/` — Custom components (see README-custom-view.md)
- `automations/`, `ai-tools/` — Scripts, AI, dynamic content
- `openapi.yaml`, `ai/worker/api/openapi.yaml` — API reference
- `Dockerfile`, `Makefile` — Build/deploy
- `README.md`, `README_V2.md` — Developer notes, protocol/architecture
- `tools/scripts/snippets/` — Automation scripts (API docs, data fetching)

---

If any conventions or workflows are unclear, review the latest `README.md`,
`README_V2.md`, or automation READMEs, or ask for clarification.
