# Frontmatter Script Audit

Date: 2026-04-06
Scope: existing frontmatter-related script surface only
Mode: audit and report only

## Purpose

Audit the current frontmatter script surface against repo framework and script-governance expectations before any implementation changes.

## Sources reviewed

- `.github/workspace/framework-canonical.md`
- `.github/workspace/design/health/design-overview.md`
- `docs-guide/policies/script-governance.mdx`
- `tools/lib/docs/frontmatter-taxonomy.js`
- `operations/tests/unit/frontmatter-taxonomy.test.js`
- `operations/scripts/validators/content/structure/lint-structure.js`
- `operations/scripts/generators/content/catalogs/generate-docs-index.js`
- `operations/scripts/automations/content/language-translation/lib/frontmatter.js`

## Scripts and libraries audited

### Canonical frontmatter taxonomy library

- `tools/lib/docs/frontmatter-taxonomy.js`

### Frontmatter taxonomy enforcement test

- `operations/tests/unit/frontmatter-taxonomy.test.js`

### Structural validator consuming frontmatter taxonomy

- `operations/scripts/validators/content/structure/lint-structure.js`

### Generator consuming v2 frontmatter

- `operations/scripts/generators/content/catalogs/generate-docs-index.js`

### Translation helper that reads and writes frontmatter

- `operations/scripts/automations/content/language-translation/lib/frontmatter.js`

## Commands run

```bash
node operations/tests/unit/frontmatter-taxonomy.test.js
node operations/tests/unit/quality.test.js --files v2/gateways/setup/run-a-gateway.mdx,v2/gateways/quickstart/gateway-setup.mdx
node operations/scripts/validators/content/structure/lint-structure.js v2/gateways/setup/run-a-gateway.mdx
node operations/scripts/validators/content/structure/lint-structure.js v2/gateways/quickstart/gateway-setup.mdx
node operations/scripts/validators/governance/pr/audit-script-inventory.js --dry-run --files tools/lib/docs/frontmatter-taxonomy.js,operations/tests/unit/frontmatter-taxonomy.test.js,operations/scripts/validators/content/structure/lint-structure.js,operations/scripts/generators/content/catalogs/generate-docs-index.js,operations/scripts/automations/content/language-translation/lib/frontmatter.js --json
```

## Command results

### Passed

- `node operations/tests/unit/frontmatter-taxonomy.test.js`
- `node operations/tests/unit/quality.test.js --files ...`
- `node operations/scripts/validators/content/structure/lint-structure.js v2/gateways/setup/run-a-gateway.mdx`
- `node operations/scripts/validators/content/structure/lint-structure.js v2/gateways/quickstart/gateway-setup.mdx`

### Failed to run

- `node operations/scripts/validators/governance/pr/audit-script-inventory.js --dry-run --files ... --json`

Failure:

```text
Error: Cannot find module 'js-yaml'
```

Interpretation:
- The governed script-inventory auditor is not currently runnable in this environment without restoring its dependencies.
- This is itself a governance gap because the canonical audit path for script-header compliance is unavailable locally.

## Findings

### P1: The canonical frontmatter taxonomy library and its direct unit test still use obsolete script-header fields

Evidence:
- `tools/lib/docs/frontmatter-taxonomy.js`
- `operations/tests/unit/frontmatter-taxonomy.test.js`

Observed:
- Both files still use the retired header schema:
  - `@category`
  - `@owner`
  - `@needs`
  - `@purpose-statement`
- `docs-guide/policies/script-governance.mdx` explicitly says these tags must not appear in new scripts and the current schema uses `@type`, `@concern`, `@niche`, `@description`, and `@policy`.

Impact:
- The core frontmatter taxonomy surface is operating outside the current script-governance contract.
- Any “holistic” frontmatter alignment pass must include governance-header remediation for these files.

### P1: The local governance audit path for script compliance is broken in the current environment

Evidence:
- `operations/scripts/validators/governance/pr/audit-script-inventory.js`
- local execution failed with `Cannot find module 'js-yaml'`

Impact:
- The expected governed audit tool cannot currently validate script-header compliance for this surface.
- This blocks clean evidence collection for script-governance alignment until dependency resolution is handled.

### P1: Gateway frontmatter is still using deprecated taxonomy aliases that the current validator only warns on

Evidence:
- `v2/gateways/setup/run-a-gateway.mdx`
- `v2/gateways/quickstart/gateway-setup.mdx`
- `operations/scripts/validators/content/structure/lint-structure.js`
- `operations/tests/unit/quality.test.js`

Observed warnings:
- `run-a-gateway.mdx`
  - `purpose: operations` should be canonical `operate`
  - `audience: gateway-operator` should be canonical `gateway`
- `gateway-setup.mdx`
  - `pageType: quickstart` should be canonical `instruction`
  - `purpose: how_to` should be canonical `build`
  - `audience: gateway-operator` should be canonical `gateway`
- Both files are also missing `status`, which current quality checks treat as recommended rather than required.

Impact:
- The frontmatter taxonomy contract exists, but the content baseline is not yet normalised to it.
- Any gateway remediation pass should update deprecated aliases, not just pass the checker.

### P2: `lint-structure.js` is partially aligned but still contains legacy taxonomy assumptions internally

Evidence:
- `operations/scripts/validators/content/structure/lint-structure.js`

Observed:
- Header format is current and compliant.
- It imports canonical taxonomy helpers from `tools/lib/docs/frontmatter-taxonomy.js`.
- Internal comments and helper logic still reference legacy labels such as `evaluation`, `how-to`, and `landing` in enforcement-depth mapping.

Impact:
- The file is mostly on the current framework, but not fully cleaned of prior taxonomy assumptions.
- This increases drift risk between validator messaging and the canonical taxonomy module.

### P2: The frontmatter surface is split across multiple responsibilities without one clearly governed “frontmatter contract” owner

Evidence:
- `tools/lib/docs/frontmatter-taxonomy.js`
- `operations/scripts/validators/content/structure/lint-structure.js`
- `operations/scripts/generators/content/catalogs/generate-docs-index.js`
- `operations/scripts/automations/content/language-translation/lib/frontmatter.js`

Observed:
- Taxonomy validation lives in a shared library plus structural validator.
- Docs index generation consumes frontmatter for derivation.
- Translation owns a separate parser/writer helper.
- There is no single canonical audit script just for frontmatter contract integrity that is clearly documented as the frontmatter system owner.

Impact:
- The surface works as a chain, but governance ownership is diffuse.
- Changes to frontmatter semantics can drift across taxonomy, validation, generation, and translation.

### P3: The translation frontmatter helper also carries obsolete script-header fields

Evidence:
- `operations/scripts/automations/content/language-translation/lib/frontmatter.js`

Observed:
- Uses old tags including `@category`, `@owner`, `@needs`, and `@purpose-statement`.
- This file is not a top-level governed operations script, but it is still part of the frontmatter implementation surface.

Impact:
- If the repo intends helper libraries under script surfaces to follow current script-governance conventions, this file also needs alignment.
- If helper libraries are intentionally exempt, that exemption should be explicit in the framework or inventory tooling.

## Current behaviour summary

### What is working

- Canonical page type, purpose, status, and audience normalisation exists in `tools/lib/docs/frontmatter-taxonomy.js`.
- The taxonomy unit test currently passes.
- `lint-structure.js` consumes that taxonomy and flags deprecated or invalid frontmatter values.
- Quality checks already surface deprecated frontmatter aliases on gateways pages.

### What is not fully aligned

- The frontmatter taxonomy core is not fully compliant with current script-governance header standards.
- The script-governance audit path for this surface is not runnable locally due to a missing dependency.
- The gateways content baseline still contains deprecated frontmatter aliases.
- The overall frontmatter implementation is governed by several scripts and helpers, but the contract is not consolidated into one clearly named frontmatter governance surface.

## Recommended next actions after audit approval

1. Restore the local script-governance audit path so `audit-script-inventory.js` runs successfully and can produce canonical evidence.
2. Update frontmatter-related governed files to the current script-governance header schema where applicable.
3. Decide explicitly whether helper libraries like translation frontmatter parsers are in or out of header governance scope.
4. Normalise gateway frontmatter from deprecated aliases to canonical values as part of the wider gateways remediation pass.
5. Tighten `lint-structure.js` internals so its legacy taxonomy remnants do not diverge from `tools/lib/docs/frontmatter-taxonomy.js`.

## No-change boundary

This audit made no implementation changes outside this report file.
