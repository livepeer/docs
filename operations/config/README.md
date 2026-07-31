# operations/config

Canonical operational runtime config for the Livepeer Docs repo.

This folder is the steady-state home for runtime config that influences repo operations but is not itself a governance contract.

## Allowed Structure

- `operations/config/content/blueprints/`
  Blueprint mapping and blueprint page data used by content reconciliation and related audits.
- `operations/config/content/navigation/`
  Navigation-specific operational config such as exclusions used by docs/runtime support tooling.
- `operations/config/content/reports/`
  Runtime content-report config modules consumed by publishing or reporting pipelines.
- `operations/config/workspace/retention/`
  Workspace/report retention policies used by cleanup and audit tooling.
- `operations/config/workspace/schemas/`
  Workspace cleanup schemas and other operational validation contracts.

## Not Allowed

- Governance manifests. Those belong under `operations/governance/config/**`.
- Helper libraries. Those belong under `tools/lib/**`.
- Generated indexes or registries. Those belong under `tools/config/registry/**` or another manifest-declared generated path.
- Long-form planning, audits, or design history.

## Placement Rules

- If the file declares a governance control plane, place it in `operations/governance/config/**`.
- If the file is operational runtime config consumed by scripts, validators, or workflows, place it in `operations/config/**`.
- If the file is generated from repo metadata, declare it in the generated-artifacts manifest and regenerate it instead of hand-editing it.
- If the file belongs to a single pipeline only, colocate it with that pipeline under `operations/scripts/**`.

## Steady-State Rule

The former runtime-config subtree under `tools/` is retired. New canonical runtime state must not be introduced outside `operations/config/**`.
