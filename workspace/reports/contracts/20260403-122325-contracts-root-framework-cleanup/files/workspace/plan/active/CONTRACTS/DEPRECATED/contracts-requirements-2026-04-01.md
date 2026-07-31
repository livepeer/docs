# Contracts Pipeline Requirements

Checked: 2026-04-01
Mode: report-only
Purpose: explicit acceptance bar for the replacement contracts pipeline and its page/widget consumers

## Requirement Sources

This requirement list is derived from:

- user instructions and corrections in this thread
- `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`
- `snippets/components/integrators/feeds/ContractVerifier.jsx`
- `.github/workflows/update-contract-addresses.yml`
- `docs.json`
- `workspace/plan/active/CONTRACTS/DEPRECATED/contracts-pipeline-audit-2026-03-31.md`
- `workspace/plan/active/CONTRACTS/DEPRECATED/contracts-source-of-truth-and-evidence-2026-03-31.md`
- `workspace/plan/active/CONTRACTS/DEPRECATED/contracts-explorer-link-audit-2026-03-31.md`
- official upstream protocol, bridge, runtime, and governor sources recorded in `contracts-canonical-architecture-research-2026-04-01.md`

## Truth And Discovery Requirements

R1. No docs-local file may define canonical contract existence, current address truth, current implementation truth, or source-code truth.

R2. Every published current address must be derivable from an authoritative source outside the docs repo.

R3. Controller-managed current contracts must be discovered from live controller state, not from repo strings copied into docs.

R4. Controller-managed current contracts must use `getContractInfo(bytes32)` when available so the pipeline captures both current address and `gitCommitHash`.

R5. Current proxy implementation addresses must be derived from live proxy runtime `controller()` + `targetContractId()` + controller `getContract(targetId)`.

R6. New current contracts must be discoverable without a docs-local manual add step.

R7. Unknown current controller slots or unknown controller event ids must fail the pipeline and produce an anomaly report.

R8. The pipeline must not depend on naming-pattern guesses such as `nameV2` or `TargetV3` to determine currentness.

R9. Human-maintained repo files such as `governor-scripts/updates/addresses.js` cannot be accepted as sole current truth.

R10. `governor-scripts` may be used as a trigger source, comparison source, and drift detector, but not as the only publish gate.

R11. Multiple official repos and branches must be handled deterministically, without dynamic branch guessing.

R12. Exact code provenance must come from chain commit data and official deployment artefacts where possible, not from docs-local repo-path maps.

## Current, Historical, And Lifecycle Requirements

R13. The main searchable contracts table must contain active contracts only.

R14. Paused, migration-residual, legacy-operational, and historical contracts must not appear in the main searchable active table.

R15. Current proxy implementations must be published separately from active entrypoint addresses.

R16. A contract family must not have duplicate current entrypoints on the same chain unless the protocol genuinely has parallel current contracts and the UI is designed for that case.

R17. Historical contracts, if retained, must be clearly secondary and not visually prioritised over current active contracts.

R18. Historical Arbitrum controller-managed contracts should come from chain events, not from docs-local manual lists.

R19. Historical Ethereum contracts should not ship on the main page unless an authoritative historical source is confirmed.

R20. Cross-chain duplicate names must be handled intentionally. The consumer must not silently collapse them into one result.

## Verification Requirements

R21. Every active published contract must carry explicit verification evidence describing how it was verified.

R22. `hasBytecode` and `sourceVerified` must be separate facts.

R23. `controllerRegistered` must be derived from live controller state, not from a static boolean table.

R24. Explorer label and contract creator evidence are supporting signals only, not primary truth.

R25. Proxy verification must prove both the current proxy address and the current downstream implementation address.

R26. Bridge verification must prove the linked address graph, not just isolated addresses.

R27. Verification must support exact current address checks for controller-managed contracts, proxy current implementations, bridge cluster links, and detached but officially deployed non-controller contracts.

R28. Verification failures must block publication.

R29. Contradictory evidence between controller state, proxy runtime, bridge getters, deployment artefacts, or explorer data must block publication.

R30. Verification results must record when they were last checked.

## Source Code And Repo Resolution Requirements

R31. Source-code links must resolve to official upstream repos only.

R32. When a controller exposes `gitCommitHash`, code links should use commit-specific GitHub URLs, not branch URLs.

R33. Source file paths should be derived from official deployment artefact metadata such as `settings.compilationTarget` where available.

R34. If a commit hash cannot be resolved to an official repo, the pipeline must fail for that row rather than fall back to a guessed branch.

R35. Repo scanning is allowed only for provenance resolution and anomaly detection, not for address truth.

R36. The pipeline must preserve awareness that `livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`, `livepeer/go-livepeer`, and `livepeer/governor-scripts` all hold relevant authoritative evidence for different contract families.

## Consumer And Page Requirements

R37. The canonical public route remains `/v2/about/resources/livepeer-contract-addresses`.

R38. All contract links on the canonical page must point to the correct explorer host and correct address path for the chain.

R39. The blockchain contracts page and any other consumer must resolve addresses by canonical contract family and lifecycle, not by first string match.

R40. The widget lookup dropdown must be built from active contracts only.

R41. The widget pasted-address mode may inspect broader inventory, but it must clearly state whether the address is active, current implementation, legacy, migration, paused, or historical.

R42. If a contract name is active on more than one chain, lookup must return all active chain matches.

R43. The widget must not assume Ethereum Mainnet has no controller. It must model actual controller semantics per contract family.

R44. The page must not claim a simpler source model than the pipeline actually uses.

R45. The page must explain the verification chain accurately, including controller checks, proxy runtime checks, and non-controller verification paths.

R46. Existing MDX layout and styling on the contracts page must be preserved.

R47. Page copy changes for this surface must use UK English and no em dashes, except where a prop or code identifier requires exact spelling.

## Link, Explorer, And User-Trust Requirements

R48. Explorer links must open the correct address page for each contract.

R49. Explorer evidence such as `Livepeer` labels, `Contract Creator`, and `Livepeer: Deployer` should be captured where available, but absence of those labels must not override stronger on-chain proof.

R50. All published address-related links must be validated mechanically before publication.

R51. The system must preserve a clear distinction between what is chain-proven, what is upstream-repo-proven, and what is explorer-enriched.

R52. The public page must help a human verify a contract independently on-chain without trusting docs copy.

## Workflow And Publication Requirements

R53. The updater must support cron, manual dispatch, and repository-dispatch style triggers, or a functionally equivalent replacement.

R54. The updater must be tightly scoped to contract data outputs and must not rewrite unrelated docs content as a side effect.

R55. The updater must not stage unrelated paths such as broad `v2/` content.

R56. The updater must not silently downgrade critical failures to warnings.

R57. Broken source links, malformed explorer links, unresolved commit hashes, unknown slots, unresolved current implementations, and contradictory cross-links must all fail the run.

R58. The pipeline must be reproducible locally with documented credentials and public fallbacks where possible.

R59. The docs repo must not be the only place where contract truth is shaped. It should consume authoritative evidence, not author it.

## Governance And Process Requirements

R60. Reports, research, and planning outputs for this work go under `workspace/plan/active/CONTRACTS`.

R61. Root causes must be solved. Hiding, suppressing, or manually patching around bad truth sources is not acceptable.

R62. Any replacement script must be architecture-from-canonical-data-down.

R63. If a new contract family cannot be resolved from authoritative sources, the correct behaviour is a hard failure with a precise anomaly report, not a silent omission and not a docs-local manual insert.

R64. Historical data is lower priority than current active truth. If historical truth cannot be proven to the same bar, it must be clearly demoted or omitted.

R65. The final system must be trustworthy enough that a human reviewer can trace every active published address back to a source outside this docs repo.

## Immediate Acceptance Test

The replacement contracts pipeline is acceptable only if all of these are true:

1. No docs-local truth file is required to discover or publish current contracts.
2. Every active published address can be traced to live controller state, live contract getters, or official upstream deployment artefacts.
3. Every current proxy implementation can be recovered from live proxy runtime.
4. Every source-code link can be traced to an official repo and exact commit or exact deployment artefact provenance.
5. The main table is active-only.
6. The widget and page copy accurately describe the actual verification path.
7. Any unresolved or contradictory current contract state blocks publication.
