# Contracts Phase 2 Follow-up Flags

Date: 2026-04-01
Scope: contract registry verification model follow-up tasks intentionally deferred from the phase 2 schema pass

## Flag 1: Surface structured verification in the canonical MDX page and widget

Later task after the schema stabilises:

- Update [livepeer-contract-addresses.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx) to describe the structured verification system more fully in the accordion.
- Update [ContractVerifier.jsx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/components/integrators/feeds/ContractVerifier.jsx) to expose the new verification fields where useful.
- Preserve the current page and widget styling. This is a data and explanation update, not a presentation redesign.
- Candidate fields to surface:
  - `controllerRegistered`
  - `verification.controller`
  - `verification.proxy`
  - `addressSource`
  - `codeSource`
  - named explorer host and verification status
- The accordion and widget explanation should explicitly describe the proxy verification chain:
  - `proxy.controller()`
  - `proxy.targetContractId()`
  - `Controller.getContract(targetContractId)`
- Do not describe proxy implementation verification as explorer-derived. The current implementation address is now runtime-confirmed on-chain through the Livepeer proxy/controller pattern.

## Flag 2: Create a governed contracts script-library entry

Later task after the contracts pipeline wording is approved:

- Create a contracts pipeline script-library entry under [operations/scripts-library](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/operations/scripts-library).
- Use [.github/workspace/actions-library/action-template.mdx](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/workspace/actions-library/action-template.mdx) as the structure reference, adapted for script documentation rather than GitHub Action documentation.
- Cover:
  - canonical inputs and authority rules
  - latest-resolution policy
  - verification stages
  - proxy runtime verification through `ManagerProxy` and `Controller`
  - generated outputs
  - blocking validations
  - local dry-run workflow
  - widget dependency contract
- This should become the pattern for a broader governed scripts library over time, not a one-off contracts note.
