# Ownerless Repo Governance Rollout

## Intent

Convert the repository from human-owner governance to ownerless governance.

Every governed surface must have:

1. one canonical source
2. one deterministic validator
3. one exact repair path
4. one primary gate layer

No repo-tracked contract may require a named person, team, or org membership to validate, route, repair, or merge routine contributions.

This plan is written for an OSS + AI operated repo. It assumes there is no standing maintainer-owner layer available to interpret ambiguous process rules on demand.

## Ownerless Design Rules

- Canonical truth lives in files, generators, tests, and manifests, not in people.
- Generated artifacts must be repaired from source, never hand-maintained.
- Blocking checks must emit an exact repair path.
- Ambiguous or nondeterministic checks stay advisory until they can self-explain and self-repair.
- A taxonomy label such as `domain` classifies a surface; it does not assign authority.
- Local execution locks are allowed for task isolation, but they do not create repository authority.

## Current Surface Inventory

| Surface | Canonical source | Derived output | Validator | Repair path | Gate layer | Current status |
| --- | --- | --- | --- | --- | --- | --- |
| Portable skills | `ai-tools/ai-skills/templates/*.template.md` | `ai-tools/agent-packs/skills/**` | `tests/unit/export-portable-skills.test.js`, `tests/unit/codex-skill-sync.test.js` | `lpd repair --surface portable-skills --write` | `pr-changed` | Implemented |
| Docs-guide generated catalogs | `docs-guide/*.mdx`, generator scripts | `docs-guide/catalog/*.mdx` | `tests/unit/docs-guide-sot.test.js` | `lpd repair --surface docs-guide-generated --write` | `pr-changed` | Implemented |
| UI templates | `snippets/templates/**` | `v2/templates/**`, `.vscode/*.code-snippets`, `docs-guide/catalog/ui-templates.mdx` | `tests/unit/ui-template-generator.test.js` | `lpd repair --surface ui-templates --write` | `pr-changed` | Implemented |
| GitHub and contributor governance | ownerless policy + issue/workflow/docs surfaces | none | `tests/unit/ownerless-governance.test.js` | `node tools/scripts/repair-ownerless-language.js --write` | `pr-changed` | Implemented |
| Script governance | governed script headers + script governance libraries | script indexes, script classifications, inventory reports | `tests/unit/script-docs.test.js`, `tests/unit/ownerless-governance.test.js` | `lpd repair --surface script-governance --write` | `pre-commit` | Migrating |
| Component governance | component JSDoc + generators | component registry + published component docs | component validators + `tests/unit/component-governance-generators.test.js` | `lpd repair --surface component-governance --write` | `pr-changed` | Migrating |
| Frontmatter contract | `tools/lib/frontmatter-taxonomy.js` | none | `tests/unit/frontmatter-taxonomy.test.js`, `tests/unit/quality.test.js` | `lpd repair --surface frontmatter-contract --files <path>` | `pr-changed` | Advisory |

## Implemented Foundations

The ownerless foundation is already established in repo-native form:

- canonical policy doc: `docs-guide/policies/ownerless-governance.mdx`
- machine-readable manifest: `tools/config/ownerless-governance-surfaces.json`
- validator: `tests/unit/ownerless-governance.test.js`
- repair wrapper: `lpd repair --surface <id>`
- deterministic wording repair: `tools/scripts/repair-ownerless-language.js`

The repo has also already moved these surfaces toward ownerless operation:

- skill-doc governance
- portable skill export parity
- docs-guide generated catalog repair
- UI template generation repair
- component registry/docs regeneration
- partial script-governance migration from `@owner` to `@domain`

## Phase Plan

### Phase 0: Foundation and Baseline

Goal:
Make the ownerless contract explicit and machine-validated before expanding scope.

Required deliverables:

- `docs-guide/policies/ownerless-governance.mdx`
- `tools/config/ownerless-governance-surfaces.json`
- `tests/unit/ownerless-governance.test.js`
- contributor-facing repair entrypoint in `lpd`

Key rules:

- no new blocking ownerless check without a manifest entry
- no surface marked `ownerless_ready=true` without a validator and repair path
- no repo-tracked governance text that depends on a human-owner explanation path

Exit criteria:

- manifest validates cleanly
- governed policy/GitHub surfaces are free of owner-dependent wording
- at least one surface can be repaired through `lpd repair`

### Phase 1: Bounded Deterministic Drift Surfaces

Goal:
Close the highest-signal generated drift surfaces first.

Surfaces:

- portable skills
- docs-guide generated catalogs
- UI templates

Implementation notes:

- keep `ai-tools/ai-skills/templates/*.template.md` as the sole portable skill source
- regenerate docs-guide catalogs from script/template/workflow sources only
- repair UI preview routes and VS Code snippets from `snippets/templates/**`

Constraints:

- no hand editing of exported skill packs
- no hand editing of generated docs-guide catalogs
- no hand editing of `v2/templates/**` or generated snippet files

Risks:

- generator drift can mask source errors
- missing required source metadata blocks the generator and must be fixed at the source file

Exit criteria:

- zero portable skill export drift
- zero stale docs-guide catalog drift
- zero stale UI template artifacts

### Phase 2: Contributor and GitHub Governance

Goal:
Remove human-owner assumptions from repository intake and governance text.

Scope:

- `README.md`
- `.github/AGENTS.md`
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`
- `.github/ISSUE_TEMPLATE/**`
- issue/workflow summaries and generated template catalogs

Required changes:

- `status: needs-triage` -> `status: needs-routing`
- maintainer-request wording -> requested repository outcome
- maintainer clarification wording -> repository clarification
- lock ownership wording -> execution lock or lock holder

Constraints:

- GitHub workflow API fields named `owner` are provider API terms and do not imply repo authority
- repo-tracked wording must still be understandable to external contributors

Risks:

- partial label migration creates split automation behavior
- issue indexers and rolling-issue helpers must be updated with the new label name

Exit criteria:

- ownerless validator passes on governed GitHub/contributor surfaces
- repo-tracked intake no longer depends on maintainer interpretation language

### Phase 3: Script Governance Schema Migration

Goal:
Replace taxonomy-style `@owner` metadata with `@domain` while preserving repairability.

Canonical sources:

- `tools/lib/script-governance-config.js`
- `tools/lib/script-header-utils.js`
- `tests/unit/script-docs.test.js`
- `tools/scripts/validators/governance/audit-script-inventory.js`
- `tools/scripts/orchestrators/repair-governance.js`

Migration strategy:

- dual-read `@domain` and legacy `@owner`
- emit `@domain` from generators and scaffolders
- regenerate indexes and reports from the new schema

Implementation constraints:

- inventory generation must ignore deleted tracked files or stale entries will survive in generated reports
- missing category/purpose/scope metadata must be fixed in script headers, not worked around in the classification report
- `repair-governance.js` remains the full-surface repair backbone

Known implementation risks:

- broad script inventory repair can touch many files at once
- stale or incomplete framework headers create cascading classification failures
- staged-only repair may hide full-surface drift in reports and indexes

Exit criteria:

- all governed scripts validate with `@domain`
- generated script reports no longer depend on deleted or legacy owner artifacts
- `lpd repair --surface script-governance --write` is usable as the default repair path

### Phase 4: Component Governance Schema Migration

Goal:
Move component governance from reviewer-style owner metadata to ownerless domain metadata.

Canonical sources:

- component JSDoc in `snippets/components/**`
- `tools/lib/component-governance-utils.js`
- component registry/docs generators
- component governance framework docs

Migration strategy:

- replace `@owner` with `@domain`
- validate `@domain` as kebab-case taxonomy metadata
- emit `domain` in generated registry/schema/docs
- regenerate published component library pages

Constraints:

- component repair must only change safe derived metadata automatically
- generated library pages must remain generator-owned
- the framework docs must describe `domain` as taxonomy, not authority

Risks:

- large `@usedIn` recalculations can create wide but legitimate diffs
- duplicate legacy component paths may still exist and need to stay excluded by governance utilities
- published component docs can drift if registry regeneration is skipped

Exit criteria:

- no governed component source still requires `@owner`
- component registry schema exposes `domain`
- published component library pages render from regenerated domain-based metadata

### Phase 5: Frontmatter Contract Unification

Goal:
Make `tools/lib/frontmatter-taxonomy.js` the sole taxonomy source before broadening docs enforcement.

Required implementation:

- update `tests/unit/quality.test.js` to consume taxonomy helpers
- stop hard-coding stale page-type/status enums in validators
- keep the surface advisory until noise is low

Constraints:

- routable docs are broad in scope and can produce high churn
- not every docs-guide page needs blocking metadata immediately
- no new reviewer-assignment metadata should be introduced

Risks:

- advisory-only fields can create false urgency if presented like blockers
- relative-link advisories may remain noisy until a separate link policy decision is made

Exit criteria:

- taxonomy test passes
- quality checks use the shared taxonomy library
- blocking scope remains limited to deterministic metadata checks only

### Phase 6: Graduation to Ownerless-Ready Surfaces

Goal:
Promote only fully self-governing surfaces to `ownerless_ready=true`.

Promotion checklist:

1. full baseline run is clean
2. changed-file PR simulation is bounded and low-noise
3. repair output is exact and contributor-usable
4. no human-owner dependency remains in the surface contract

Do not promote if:

- repair still requires undocumented human judgment
- generated drift depends on manual editing
- check scope is too broad for changed-file PR enforcement

## OSS Contributor Self-Governance Loop

Every covered contribution path should follow this loop:

1. edit the canonical source
2. run the bounded validator or `lpd repair --surface <id>`
3. read the exact failure and repair command
4. run the deterministic repair
5. re-run the validator
6. submit once the declared gate layer is green

This loop must work without private context, team membership, or asking a maintainer what a failure means.

## Repair Command Matrix

| Surface | Check | Repair |
| --- | --- | --- |
| Portable skills | `lpd repair --surface portable-skills` | `lpd repair --surface portable-skills --write` |
| Docs-guide generated | `lpd repair --surface docs-guide-generated` | `lpd repair --surface docs-guide-generated --write` |
| UI templates | `lpd repair --surface ui-templates` | `lpd repair --surface ui-templates --write` |
| Script governance | `lpd repair --surface script-governance` | `lpd repair --surface script-governance --write` |
| Component governance | `lpd repair --surface component-governance` | `lpd repair --surface component-governance --write` |
| Frontmatter contract | `lpd repair --surface frontmatter-contract --files <path>` | check-only |

## Implementation Risks to Recheck Each Phase

### Drift and generation

- source file missing required metadata blocks generators
- deleted tracked files may survive in generated reports if generators trust `git ls-files` blindly
- partial repair flows can leave mixed old/new artifacts in the worktree

### Schema migration

- dual-read windows can hide stale old-schema usage if emitters are not write-only on the new key
- generated JSON schema updates must stay in lockstep with generator changes

### Runner behavior

- changed-file PR runners must skip untouched global surfaces
- a generator-triggered surface should not silently run in unrelated PRs
- blocking checks must fail with exact repair instructions

### OSS usability

- contributor-facing docs must stay aligned with actual labels, workflow names, and repair commands
- no repair flow should require a maintainer-only GitHub setting except where explicitly documented as out-of-repo admin work

## Success Metrics

### Contract coverage

- 100% of targeted surfaces appear in `tools/config/ownerless-governance-surfaces.json`
- every manifest entry includes canonical source, validator, repair command, gate layer, and rollout state

### Repairability

- 100% of blocking failures emit one exact repair path
- at least 80% of governed surfaces are invokable through `lpd repair`

### Drift

- portable skill export drift is zero
- docs-guide generated drift is zero
- UI template drift is zero
- component and script generated artifacts stay green after regeneration

### Language

- zero governed ownerless surfaces require maintainer, owner, docs-team, or code-owner review semantics
- repository authority language is replaced by canonical-source and repair-path language

### OSS operability

- an external contributor can resolve a covered failure using repo docs and command output alone
- no covered repair requires private Slack, Notion, or staff-only explanation

### Noise

- no surface graduates to blocking until changed-file PR scope stays bounded
- advisories stay informational and do not masquerade as blockers

## Required Periodic Review

Every time a new governance surface is proposed:

1. add it to the manifest
2. identify canonical source and derived outputs
3. define one primary gate layer
4. add or reuse an exact repair path
5. prove changed-scope behavior locally
6. only then consider promotion

## Immediate Next Checks

- keep `tests/unit/ownerless-governance.test.js` green
- keep `tests/unit/docs-guide-sot.test.js` green
- keep `tests/unit/ui-template-generator.test.js` green
- keep `tests/unit/export-portable-skills.test.js` and `tests/unit/codex-skill-sync.test.js` green
- continue migrating remaining script/component legacy `owner` references that are taxonomy metadata rather than API field names

## Non-Goals

- inventing a new human review hierarchy
- moving all docs pages to blocking governance immediately
- treating translated/archive copies as independent canonical sources
- creating derived artifacts that require manual upkeep
