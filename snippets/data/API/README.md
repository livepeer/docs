# ELI5: Generate API Docs in Mintlify

Follow these super simple steps to turn an OpenAPI spec (YAML/JSON) into
Mintlify docs.

## 1) Install Mintlify (first time only)

```bash
npm i -g mintlify
```

## 2) Pick your OpenAPI spec and output folder

- Spec file: for example `ai/worker/api/openapi.yaml`
- Output folder: where the generated MDX pages go, e.g.
  `v2/pages/04_gateways/guides-references/api-reference/CLI-HTTP`
- Title: a friendly name shown in nav, e.g. `"CLI HTTP"`

## 3) Run the generator script

From the repo root:

```bash
./tools/scripts/snippets/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/CLI-HTTP "CLI HTTP"
```

Examples:

```bash
# AI API example
./tools/scripts/snippets/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/AI-API "AI API"

# CLI HTTP example
./tools/scripts/snippets/generate-api-docs.sh ai/worker/api/openapi.yaml v2/pages/04_gateways/guides-references/api-reference/CLI-HTTP "CLI HTTP"
```

## 4) What gets created

- MDX pages inside your chosen output folder
- A navigation snippet for `docs.json` (list of page paths as strings)

## 5) Add the pages to `docs.json`

Open [docs.json](docs.json) and include the generated pages under the right
group. Important: each item inside `pages` must be a string path.

Example:

```json
{
  "group": "CLI HTTP API",
  "pages": [
    "v2/pages/04_gateways/guides-references/api-reference/CLI-HTTP/overview",
    "v2/pages/04_gateways/guides-references/api-reference/CLI-HTTP/reference"
  ]
}
```

## 6) Preview locally

```bash
mint dev
```

Open the local preview and click into the new group to see the generated API
docs.

## 7) Troubleshooting (ELI5)

- Error: "Incorrect type. Expected string": make sure every entry in `pages` is
  a string path (no objects).
- Pages not showing: double-check the output folder path matches what you put in
  `docs.json`.
- Need to regenerate: rerun the script after updating your OpenAPI spec.

## 8) Optional: Build via Docker or Makefile

```bash
# Docker build (amd64)
docker buildx build --platform linux/amd64 --load -t livepeer/docs .

# Makefile build
make all
```

snippets/components/ ├── \_index.jsx # Main barrel export │ ├── primitives/ #
Atomic UI building blocks (no business logic) │ ├── buttons.jsx │ ├── cards.jsx
│ ├── divider.jsx │ ├── icons.jsx │ ├── image.jsx │ ├── links.jsx │ ├──
lists.jsx │ ├── table.jsx │ └── video.jsx │ ├── content/ # Content display
components │ ├── code.jsx # Code blocks, syntax highlighting │ ├── embed.jsx #
Embeds (iframe, external) │ ├── external-content.jsx # External content fetching
│ ├── responseField.jsx # API response display │ └── zoomableDiagram.jsx │ ├──
layout/ # Layout & structure components │ ├── steps.jsx │ ├── listSteps.jsx │
└── GroupedResponseField.jsx │ ├── integrations/ # Third-party API integrations
│ ├── coingecko.jsx │ └── release.jsx # GitHub releases │ ├── domain/ #
Domain-specific (by section) │ ├── gateways/ │ │ ├── callouts.jsx │ │ └──
quickstartTabs.jsx │ ├── orchestrators/ │ └── delegators/ │ └── utils/ #
Helpers, hooks, utilities └── (move stuff.js logic here or delete)

Key Principles Principle Rule Domain Isolation Page-specific components go in
domain/{section}/ Primitives are Pure No business logic in primitives/
