# `translate-docs.yml` Workflow

Manual GitHub Actions workflow for translation generation and PR-based review.

Default provider behavior is OpenRouter with an explicit `:free` model fallback chain configured in `/operations/scripts/integrators/content/language-translation/config.json`.
The workflow also fails non-dry runs if the checked-in provider is accidentally set to `mock`.

## What It Does

1. Installs `tools` dependencies
2. Runs i18n unit tests (`npm --prefix tools run test:i18n`)
3. Runs `operations/scripts/i18n/translate-docs.js`
4. Updates `docs.json` (`generate-localized-docs-json.js`) when not dry-run
5. Validates generated localized MDX (`validate-generated.js`) when not dry-run
6. Validates docs navigation (`tests/unit/docs-navigation.test.js`) when not dry-run
7. Uploads JSON artifacts and optionally opens a PR for `docs.json` + localized `v2/<lang>` pages
8. Writes workflow summary details including coverage/fallback counts and mixed-language warnings for partial runs

## Required Secrets / Vars

- `OPENROUTER_API_KEY` (secret) — required for OpenRouter translation runs
- `OPENROUTER_HTTP_REFERER` (var, optional)
- `OPENROUTER_APP_NAME` (var, optional)

## OpenRouter Free Endpoint Prereqs

For `:free` models to work via API, the OpenRouter account used for `OPENROUTER_API_KEY` must allow free endpoints in **Privacy & Guardrails**:

- `Enable free endpoints that may train on inputs` = ON
- `Enable free endpoints that may publish prompts` = ON
- `ZDR Endpoints Only` = OFF

If these are not enabled, OpenRouter can return policy/eligibility errors for free models even when the key is valid.

## Recommended Rollout

1. Run with `dry_run=true` and `scope_mode=prefixes` on a small folder
2. Run non-dry-run with `max_pages=1-3`
3. Review generated PR output and artifacts
4. Expand scope gradually (`prefixes` -> `changed_since_ref`)

### Example workflow inputs (v1 rollout)

- Smoke: `languages=es`, `scope_mode=prefixes`, `prefixes=v2/about/livepeer-network`, `max_pages=1`
- Pilot: `languages=es,fr,zh-CN` (CLI alias supported; emitted code is `cn`), `scope_mode=prefixes`, `prefixes=v2/about/livepeer-network`
- Full: `languages=es,fr,zh-CN` (or `es,fr,cn`), `scope_mode=full_v2_nav`

## Notes

- `mock` provider is for dry-run smoke tests only unless an explicit local override flag is used
- Partial-scope runs will often show translated section headers but English page titles for fallback routes
- Local Mintlify preview may need a restart after `docs.json` changes to reflect updated nav labels
- Mintlify-compatible localized route shape for `v2` is `v2/<lang>/...` (not `v2/i18n/<lang>/...`)
- `v1` remains English-only in this rollout; `generate-localized-docs-json` intentionally mutates only `v2.languages[]`
