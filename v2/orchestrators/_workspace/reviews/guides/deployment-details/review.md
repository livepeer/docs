# Deployment Details Review Notes

Status:

- non-canonical review artifact
- sanitized on `2026-03-16` after pre-commit MDX parsing failures
- captures structural conclusions for the `deployment-details` section

## Setup Options Framing

`setup-options` should document the non-standard orchestrator deployment configurations. The top-level routing decision belongs in the navigator, not on this page.

| Alternative | When | vs standard |
| --- | --- | --- |
| Pool worker | No LPT; want passive earnings | Run `-transcoder` against a pool instead of operating a full Orchestrator. |
| O-T split | Multi-GPU; want to separate control plane from data plane | Run Orchestrator and Transcoder as separate processes. |
| Siphon | Want key isolation; GPU machine can go down without missing rewards | Use OrchestratorSiphon for on-chain operations and `go-livepeer` transcoder mode for work. |
| Enterprise or fleet | Multi-node commercial scale | Use a custom deployment path and coordinate directly with the Foundation. |

Implications:

- the navigator owns the routing decision
- `setup-options` stays as the guide to non-standard alternatives
- `join-a-pool` stays standalone because pool workers need a full setup walkthrough
- siphon content can be summarized here, with detailed steps living in advanced operations

## Placement Recommendations

- `benchmarking.mdx` is better absorbed into `requirements.mdx` as a hardware-capacity subsection
- if `benchmarking.mdx` must stay standalone, `monitoring-and-tools` is the cleaner home because it covers node measurement workflows
- `session-limits.mdx` is better absorbed into setup configuration content such as `r-configure.mdx` because `-maxSessions` is a configuration task, not a deployment-path decision
- a cleaner `Deployment Details` grouping is `setup-options`, `requirements`, and `join-a-pool`

## Noted Gaps

- Siphon setup still needs a dedicated advanced-operations destination or an equivalent publishable home.
- The enterprise contact path should be re-verified before it is treated as a canonical outbound recommendation.
- No AI-specific benchmarking tool was identified; `livepeer_bench` covers video transcoding capacity only.

## Page-Fix Summary

The underlying review also documented recurring cleanup themes across the related pages:

- normalize table markup and card-group structure
- replace weak labels such as `Continue` with explicit labels such as `Related Pages`
- update stale route references into the current `deployment-details`, `operator-considerations`, and `monitoring-and-tools` structure
- remove second-person and self-referential openings from authored content
- align status fields and icon usage with the current authoring conventions
