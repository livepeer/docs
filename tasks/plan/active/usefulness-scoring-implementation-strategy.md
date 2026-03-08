# Usefulness Scoring Implementation Strategy

## Scope
- Repository: `livepeer/docs`
- Branch target: `docs-v2`
- Runtime: Node.js (no external build tools)
- Primary entrypoint: `tools/scripts/audit-v2-usefulness.js`
- Scope basis: docs.json EN-routable pages only

## Locked Decisions
- Frontmatter purpose key: `purpose`
- Frontmatter audience key: `audience`
- Purpose enum: `landing`, `overview`, `concept`, `how_to`, `tutorial`, `reference`, `faq`, `glossary`, `changelog`, `troubleshooting`
- Audience enum: `developer`, `gateway-operator`, `orchestrator`, `delegator`, `platform-builder`, `community`, `internal`, `general`, `everyone`
- LLM provider: OpenRouter
- Default LLM tier: `free`
- Quality gate separation: absolute (quality signals never alter usefulness score)
- Combined score formula: `combined = tier2_available ? (tier1 * 0.5 + tier2 * 0.5) : tier1`

## Required Config SOT Files
- `tools/config/usefulness-rubric.json`
- `tools/config/usefulness-journeys.json`
- `tools/config/usefulness-audience-normalization.json`
- `tools/config/usefulness-llm-tiers.json`

## Architecture
1. Metadata assignment script writes `purpose` and `audience` using deterministic precedence.
2. Scoring pipeline builds page signals from MDX, resolves purpose/audience, applies purpose-specific Tier 1 rules.
3. Quality gate runs independently and is reported in parallel columns.
4. Tier 2 LLM layer evaluates reading-comprehension criteria via OpenRouter with cache + resume.
5. Journey checker evaluates persona step completeness and nav adjacency.
6. Agent score uses independent criteria and intentionally diverges from human usefulness.

## Critical Compatibility Constraints
- Route-to-file precedence: `route.mdx` -> `route/index.mdx` -> `route.md`.
- If both `route.mdx` and `route/index.mdx` exist, `route.mdx` wins.
- Journey config must use `v2/solutions/**` patterns (never `v2/platforms/**`).
- Missing known routes are non-fatal and reported:
  - `v2/resources/redirect`
  - `v2/gateways/guides-and-tools/gateway-job-pipelines/overview`

## CLI Contract
Supported flags:
- `--mode`
- `--files`, `--file`
- `--out-dir`
- `--format`
- `--max-pages`
- `--llm`
- `--llm-tier`
- `--llm-budget`
- `--llm-sample`
- `--llm-resume`
- `--journey`, `--no-journey`
- `--purpose-aware`
- `--legacy-rubric`

Deprecated/removed flags must hard-fail with migration guidance.

## Outputs
- Console sections: section summary, journey report, baseline comparison
- Machine outputs in `tasks/reports/quality-accessibility/docs-usefulness/latest/`
  - `page-matrix.jsonl`
  - `page-matrix.csv`
  - `run-metadata.json`
  - `summary.md`

## DoD Signals
- Full run works without accuracy-verification pipeline.
- Purpose-aware scoring is default.
- Quality columns are present and independent.
- Journey report includes 8 personas.
- Tier 2 free tier supports model rotation and multi-day resume.
- Compatibility metadata keys preserved: `files_processed`, `processed_pages`, `counts.processed_pages`.
