# Orchestrator Product-Thinking Handoff Brief

Internal-only handoff artifact created from the in-flight review and current `docs-v2-dev` sources of truth.

- This file is the safe output for the product-thinking pass.
- It exists to avoid editing `v2/orchestrators/_workspace/plans/product-thinking-review.md` while that document is in flight.
- Do not add this file to `docs.json`.
- If the working review remains valuable later, merge or archive it intentionally; do not treat it as the canonical handoff by default.

## Source inputs

- `v2/orchestrators/_workspace/plans/product-thinking-review.md` from the active `Docs-v2-dev` worktree as input only
- `docs-guide/frameworks/content-system.mdx`
- `docs-guide/policies/source-of-truth-policy.mdx`
- `v2/orchestrators/_workspace/plans/dep-IA.mdx`
- `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx`
- `v2/orchestrators/_workspace/plans/guides/RESTRUCTURE-PLAN.md`
- `v2/orchestrators/_workspace/research/L0-hybrid-operator-product-exercise.md`
- `v2/orchestrators/_workspace/research/dual-mode-orchestrator-planning.md`
- `v2/orchestrators/navigator.mdx`
- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`
- `v2/orchestrators/resources/x-guides.mdx`

## Audience

Primary audience: `orchestrator`

Primary reader segments:

- solo GPU operators deciding whether Livepeer is worth their hardware, time, and stake
- existing video operators deciding whether to add AI to the same node
- AI-first operators with high-VRAM GPUs and limited LPT

Secondary reader segments:

- commercial or fleet operators who need gateway, pricing, and architecture context
- delegated-stake operators optimising for yield and reliability

## Trigger

The reader reaches the Orchestrators tab with one of these questions:

- Should I run an orchestrator at all, or should I join a pool?
- If I run one, should I stay video-only, AI-only, or run both workloads on the same node?
- If I already run video, what changes are required to add AI without starting over?
- If I am live but not earning, is the issue stake, pricing, capabilities, or gateway selection?

## Reader job

Choose the lowest-risk path from evaluation to first earnings and understand where to go next for setup, workload expansion, pricing, and gateway-selection questions without stitching together overlapping or conflicting guide branches.

## Supported decision/action

This handoff must support three concrete reader decisions:

1. Choose between pool worker, standard solo operator, dual-workload operator, or advanced split / fleet setups.
2. Choose between video-only, AI-first, or dual-workload operation based on hardware, stake, and operating goals.
3. Choose the next page to read for evaluation, deployment, workload execution, or gateway optimisation.

## Outcome statement

Enable orchestrator readers with GPU hardware to choose the right workload and deployment path, reach the correct next page in one hop, and understand where dual-workload, economics, and gateway-routing questions belong so they can move from evaluation to first earnings without stitching together overlapping guides.

## Chosen content layer and page type

This file is an internal synthesis artifact and should not be treated as a public Mintlify page.

The public outcome is distributed across existing pages:

- Layer 1: Product and Positioning
  - `v2/orchestrators/navigator.mdx`
  - `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`
- Layer 2: Operational How-to
  - `v2/orchestrators/guides/deployment-details/setup-options.mdx`
  - `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- Layer 3: Deep Reference
  - `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
  - pricing and payment references when those pages are implementation-ready

Decision: do not create a standalone public product-thinking page.

## Branch reality normalisation

Use the branch reality below as the canonical routing map for later implementation:

| Planned surface | `docs-v2-dev` equivalent | Decision |
|---|---|---|
| `v2/orchestrators/guides/guide.mdx` | `v2/orchestrators/resources/x-guides.mdx` | Use `resources/x-guides.mdx` as the high-level guides index on this branch. |
| `v2/orchestrators/guides/setup-paths/find-your-path.mdx` | `v2/orchestrators/navigator.mdx` plus `v2/orchestrators/guides/deployment-details/setup-options.mdx` | Split orientation and alternate-deployment concerns across the existing branch surfaces. |
| `v2/orchestrators/guides/feasibility-and-hardware/feasibility-economics.mdx` | `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | Keep the worth-it and ROI framing in `operator-rationale.mdx` on this branch. |
| `v2/orchestrators/guides/workloads-and-ai/*` | `v2/orchestrators/guides/ai-and-job-workloads/*` | Use the `ai-and-job-workloads` group paths that exist on this branch. |

## Assumption review

| Dimension | Current state on `docs-v2-dev` | Decision for handoff | Risk to control |
|---|---|---|---|
| Clarity | Hybrid, evaluation, and alternate-deployment logic are spread across `navigator`, `setup-options`, `operator-rationale`, and AI pages. | Consolidate the product framing here, then distribute it into existing public pages by job-to-page mapping. | Avoid creating a new public page that duplicates the same decision logic. |
| Trust / evidence | Active set thresholds, VRAM coexistence floors, and market pricing remain partially unverified or time-sensitive. | Keep these as explicit evidence gaps; do not turn them into new public claims until source verification is done. | Prevent inaccurate economic or hardware guidance from being promoted as canonical. |
| Actionability | The in-flight review identifies many gaps but leaves merge / split / add decisions open. | Lock routing decisions here: keep batch and real-time setup pages separate, use `dual-mode-configuration.mdx` as the dual-mode execution page, and keep `setup-options.mdx` focused on non-standard deployments. | Prevent a later implementer from redesigning the guide set while drafting. |
| Maintainability | The working review lives under `guides/`, which implies a public outcome and duplicates planning already present in `_workspace/` and the L0 exercise. | Treat the in-flight review as source material, not the canonical handoff output. | Keep public docs in `v2/**` and planning artifacts in `_workspace/`. |
| Scope boundaries | The repo also has pre-existing script-docs debt and broader IA churn. | Exclude repo hygiene, commit / PR work, and unrelated content cleanup from this handoff. | Keep the workstream focused on orchestrator content-shaping only. |

## This handoff is

- an internal synthesis artifact for routing operator jobs into the existing public docs
- a decision-complete handoff for a later authoring pass
- the canonical output of this product-thinking pass

## This handoff is not

- not a public guide to publish
- not a new navigation landing page
- not a request to create a standalone product-thinking page
- not a repo-hygiene or script-docs cleanup task
- not a commit, PR, or release checklist

## Success criteria

- Audience, trigger, reader job, and supported decision are explicit.
- The public outcome is distributed into existing branch-real pages, not a new public review page.
- Every major reader job maps to one public surface or an explicit split across existing surfaces.
- Evidence gaps are named so the later implementer knows what requires source verification before shipping.
- The handoff leaves no routing decisions open for the later authoring pass.

## Dependency pages and evidence gaps

### Dependency pages

| Page | Role in the later public implementation |
|---|---|
| `v2/orchestrators/navigator.mdx` | primary orientation and path-selection surface |
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | worth-it, hardware, stake, and ROI evaluation surface |
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | alternate-deployment guide for pool worker, O-T split, Siphon, and fleet paths |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | task page for serving video and AI from one node |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` | concept bridge for AI routing, low-LPT AI entry, and already-running-video framing |
| `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx` | explanation of discovery, pricing, capability advertisement, and selection |
| `v2/orchestrators/resources/x-guides.mdx` | high-level guides index because `guides/guide.mdx` does not exist on this branch |

### Evidence gaps

- current active-set threshold and whether top 100 remains the right public shorthand
- minimum practical VRAM for running video transcoding and AI inference on the same node
- whether dual-workload operators need branch-specific guidance on GPU contention and workload prioritisation
- current market pricing examples for operator-side AI and video work
- whether the public Loki endpoint and gateway-selection debugging flow remain current enough to emphasise

## Recommended outline for later public implementation

1. Orientation and path choice
   - `navigator.mdx`
   - clarify pool vs solo vs dual-workload vs fleet
   - keep the path matrix and should-I-run-one logic here
2. Worth-it and evaluation
   - `operator-rationale.mdx`
   - keep hardware, time, LPT, and revenue tradeoffs here
   - add the scannable evaluation summary here, not in deployment pages
3. Deployment execution
   - `setup-options.mdx` remains the guide to non-standard deployment patterns
   - `dual-mode-configuration.mdx` remains the hybrid execution page
4. AI and workload bridge
   - `ai-inference-operations.mdx` explains why AI matters, how routing works, and what changes for existing video operators
   - keep task execution details in `batch-ai-setup.mdx` and `realtime-ai-setup.mdx`
5. Gateway and earning mechanics
   - `gateway-relationships.mdx` explains selection and why-am-I-not-getting-jobs
   - pricing and payment depth stays in the pricing and payments surfaces when those pages are implementation-ready

## Page-mapping table

| Reader job / decision | Target public page | Action type |
|---|---|---|
| Decide whether Livepeer is worth the GPU, time, and LPT commitment | `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | update existing page |
| Decide whether to join a pool, run solo, operate dual-workload, or go fleet-scale | `v2/orchestrators/navigator.mdx` | update existing page |
| Decide what to do when the standard single-machine combined path is not the right fit | `v2/orchestrators/guides/deployment-details/setup-options.mdx` | update existing page |
| Set up one node for both video transcoding and AI inference | `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | update existing page |
| Add AI to an already-running video node without re-learning the whole docs set | `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` and `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | split across pages |
| Understand whether low-stake operators can still earn from AI work | `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` | update existing page |
| Understand how gateways discover, filter, and select the node | `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx` | update existing page |
| Find the right official guide index once already inside the tab | `v2/orchestrators/resources/x-guides.mdx` | update existing page |
| Create a new public product-thinking guide | none; keep this handoff internal | justify new page |

Decision on the last row: not justified on `docs-v2-dev`. Existing pages already cover the reader jobs once routing is cleaned up.

## Route recommendation

- Keep `v2/orchestrators/_workspace/plans/product-thinking-review.md` as the in-flight review and source input only.
- Use this file as the safe implementation handoff.
- Do not retain a public `product-thinking-review` route as the end state.
- Do not create a matching entry in `docs.json`.
- Because `v2/orchestrators/guides/guide.mdx` does not exist on `docs-v2-dev`, place any high-level guide-entry framing in `v2/orchestrators/resources/x-guides.mdx` rather than inventing a new section landing page in this workstream.

## Downstream handoff instructions

### `docs-ia-route-placement`

- Treat this file as the routing source of truth for the later PR.
- Keep public changes inside the existing page set listed above.
- Do not move or overwrite the in-flight `_workspace/plans/product-thinking-review.md` during drafting unless a human explicitly decides to consolidate it.
- Do not create a new public page unless a later reader job appears that cannot be served by `navigator`, `operator-rationale`, `setup-options`, `dual-mode-configuration`, `ai-inference-operations`, or `gateway-relationships`.

### `mintlify-authoring-style-compliance`

- Public edits should happen only in the existing MDX pages named in this handoff.
- Keep the later editing scope tight: content-shaping only, not repo-wide style cleanup.
- Preserve branch-real frontmatter and page purpose; do not normalise branch conventions in this workstream unless the page being touched requires it.
- Treat any unresolved active-set, VRAM, pricing, or market claims as evidence-sensitive and route them for verification before shipping.

### `component-library-guided-authoring`

- Prefer the patterns already present in the orchestrator docs:
  - `CardGroup` and `Card`
  - `StyledTable`
  - `AccordionGroup`
  - `Note`, `Tip`, and `Warning`
  - `Steps` or existing styled step components where already used
- Do not propose or add new shared components for this workstream unless an existing pattern demonstrably cannot express the content.
- Keep component usage aligned with the branch’s existing orchestrator pages instead of importing a new visual system.

## Explicitly out of scope

- public page drafting and implementation in this turn
- commit creation or PR preparation
- script-docs debt and unrelated metadata cleanup
- broader orchestrator IA restructuring beyond the page-routing decisions already locked here
