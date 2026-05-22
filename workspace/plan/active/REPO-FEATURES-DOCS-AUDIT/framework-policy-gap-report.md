# Framework And Policy Gap Report

Date: 2026-05-18

This report compares docs-guide governance claims with actual implementation or enforcement surfaces. It does not treat a written framework as functional unless the repo has a matching source, validator, repair path, and gate or an explicit reason why the item is advisory only.

## High Priority Gaps

| Gap | Claimed contract | Current implementation evidence | Required fix |
| --- | --- | --- | --- |
| Locked docs-guide IA not yet implemented | D-DG-02 and D-DG-03 collapse docs-guide into 8 top-level folders and `reference/`. | Current tree still includes `features/`, `tooling/`, `repo-ops/`, `docs-library/`, `canonical/`, and `config/`. | Execute approved migration with redirects and generated index updates. |
| Mandatory docs-guide frontmatter not enforced | D-DG-07 requires `authority`, `consumer`, `maintenance`, `status`, `lastVerified`, `owner`. | No `check-docs-guide-contract.js` was found in validator discovery. | Build contract validator or extend existing structure validator before enforcing migration. |
| Per-surface freshness thresholds not implemented | D-DG-10 moves freshness thresholds into ownerless surface config. | Current freshness checks found only agent docs and translation checks; no docs-guide threshold validator found. | Add docs-guide contract/freshness validator and config thresholds. |
| Static feature counts drift | Feature map records workflows/scripts/skills counts. | Live inspection found 55 workflows, 264 scripts after new validator, and 35 skills. | Replace static counts with generated catalog references or add count verification. |
| Governance map drift remains open | Feature/gap docs say governance map generated output is stale. | `check-repo-governance-sync.js` exists; stale status still documented. | Regenerate governance map in focused change and rerun sync check. |
| Navigation contract drift | Docs navigation validation requires Resource HUB redirect contract. | `docs-navigation.test.js --staged` fails because `/v2/resources/redirect` is missing as first Resource HUB route and redirect. | Fix `docs.json` in a user-approved navigation change, then rerun nav validation. |
| Root governance drift | Root governance requires `.allowlist` and generated reports to match root-governance config. | Root allowlist tests fail because `jsconfig.json` is not declared in root governance and generated outputs are stale. | Human-owned root governance/allowlist update with required approval policy. |
| Component usage-map drift | Component utility tests require MDX usage map coverage. | `component-governance-utils.test.js` reports `CodeComponent` missing from MDX usage map. | Regenerate or repair component usage map after confirming component source. |
| Editor package drift | VSIX parity requires checked-in package to match source. | `vsix-parity.test.js` reports lpd-mdx-preview VSIX mismatch. | Rebuild/package VSIX through governed editor tooling workflow. |
| Duplicate authority docs remain | D-DG-08 retires `script-governance.mdx` and `component-governance.mdx`. | Both files still exist. | Propagate references, add redirects, then queue governed deletion. |
| Canonical folder retirement not executed | D-DG-04 retires `docs-guide/canonical/`. | `docs-guide/canonical/**` still exists. | Move active Mintlify files to `reference/external/mintlify/`; queue stub deletion and dep-file archive. |
| Config registry move not executed | D-DG-05 moves `docs-guide/config/*.json` to `operations/governance/config/`. | Five JSON files still exist under `docs-guide/config/`. | Audit consumers, move registries, add pointer reference page. |

## Framework Coverage

| Framework | Evidence found | Gap status |
| --- | --- | --- |
| `ai-tools-governance.mdx` | AI-tools registry exists; skills exist; agent freshness validator exists. | Naming/path rename pending; count drift needs generated inventory. |
| `component-framework-canonical.mdx` | Component registry and components catalog exist. | Archive classification and count drift unresolved. |
| `component-governance.mdx` | Duplicate subject with canonical component framework. | Retire per D-DG-08 after reference propagation. |
| `content-system.mdx` | Content policy and v2 folder governance exist. | Workspace review packets and non-publishable lanes remain unconsolidated. |
| `content-writing.mdx` | Active workspace plans and standards exist. | Current implementation state spread across workspace; needs consolidated status. |
| `doc-item-model.mdx` | Locked/frozen model exists. | No expansion until human approval. |
| `file-placement.mdx` | Root governance and structure validators exist. | Validate every moved docs-guide path against placement rules during migration. |
| `github-actions.mdx` | 55 workflow files found; workflow governance validator exists. | Phase 6 workflow renames/extraction/consolidation still pending. |
| `page-composition-framework.mdx` | Draft framework exists. | Not production governance until completed or archived. |
| `page-taxonomy-framework.mdx` | Taxonomy doc exists. | Metadata/status incomplete; validate against frontmatter standard. |
| `repo-structure.mdx` | Root allowlist/governance policies exist. | No root changes in this pass. |
| `script-framework.mdx` | Script-docs tests and script headers exist. | Script metadata compliance debt remains documented. |
| `styles-engineering-guide.mdx` | Style remediators and standards exist. | Language-rule exceptions and component prop table cases remain flagged. |

## Policy Coverage

| Policy | Evidence found | Gap status |
| --- | --- | --- |
| `source-of-truth-policy.mdx` | Canonical boundaries are documented. | Needs update after reference migration. |
| `quality-gates.mdx` | Hook, test, and workflow entries are documented. | Verify each named entry with executable checks. |
| `docs-guide-structure-policy.mdx` | D-DG decisions point to it. | Must match locked decisions before migration. |
| `ownerless-governance.mdx` | Ownerless surfaces manifest exists. | Surface manifest has 8 entries only; verify coverage against all governed surfaces. |
| `generated-artifact-and-hook-governance.mdx` | Generated artifacts manifest exists. | Confirm all generated docs-guide catalogs/maps are declared. |
| `agent-governance-framework.mdx` | Agent adapters and freshness validator exist. | Rename to policy suffix pending D-DG-09; adapter length/parity model not yet enforced by named new validator. |
| `script-governance.mdx` | Script framework exists. | Duplicate authority target for retirement. |
| `workspace-lifecycle-policy.mdx` | Workspace policy exists. | Large workspace/report retention debt remains. |
| `cleanup-quarantine-policy.mdx` | Cleanup policy exists. | Deletion/archive approval queue still needs review before execution. |

## Enforcement Gaps To Add

1. `check-docs-guide-reference-freshness.js` - created in this pass for feature/reference freshness.
2. `check-docs-guide-contract.js` - still needed for D-DG-07 authority/frontmatter contract.
3. Docs-guide route migration check - should verify old paths have redirects before file moves.
4. Static count drift check - should compare hand-written counts against generated catalog inventories or forbid hand-written counts in reference pages.
5. Deletion approval validator - should detect docs-guide retirement targets and require appropriate deletion trailers before commit.
