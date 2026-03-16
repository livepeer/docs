# Handoff: Orchestrator Tab Restructuring

## Context

- **Branch**: `docs-v2-dev`
- **Repo**: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`
- **Plan reference**: `v2/orchestrators/_workspace/plans/plan.md`
- **Execution plan**: `v2/orchestrators/_workspace/plans/execution-plan.md`
- **Glossary**: `v2/orchestrators/resources/glossary.mdx`
- **Authoring skill**: `ai-tools/ai-skills/page-authoring/SKILL.md`

## Scope

Restructure the Orchestrators tab in `docs-gate-work.json`: remove Dep/New migration scaffolding, rename files, move files between sections, create stub pages for new content, and write clean nav JSON. **Guides sections only** - do NOT touch Quickstart or Setup sections.

## Critical Rules

1. **NO DELETIONS.** Use `git mv` to move deprecated files to `x-deprecated/` folders.
2. **Preserve git history.** All file moves via `git mv`, not delete+create.
3. **Do NOT change page content** except: (a) updating `sidebarTitle` in frontmatter of renamed files, (b) updating `title` if filename change makes it inaccurate.
4. **Do NOT touch**: Gateway tab, Delegators tab, LPT tab, Quickstart section, Setup section, Concepts section, Start Here section, Resources section.
5. **Validate after every step**: JSON valid, all nav paths resolve to .mdx files.

---

## Part 1: Directory Creation

```bash
mkdir -p v2/orchestrators/guides/config-and-optimisation
```

No other new directories needed - all other section directories already exist.

---

## Part 2: File Operations (git mv)

Execute in this order. All paths relative to repo root.

### 2a. Renames (same directory)

```bash
# Section 1: Operator Considerations
git mv v2/orchestrators/guides/operator-considerations/protocol-influence.mdx v2/orchestrators/guides/operator-considerations/operator-impact.mdx

# Section 2: Deployment Details
git mv v2/orchestrators/guides/deployment-details/dual-workload-setup.mdx v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx

# Section 3: Workloads & AI
git mv v2/orchestrators/guides/ai-and-job-workloads/job-types.mdx v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx
git mv v2/orchestrators/guides/ai-and-job-workloads/video-transcoding.mdx v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx
git mv v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx
git mv v2/orchestrators/guides/ai-and-job-workloads/batch-ai-setup.mdx v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx
git mv v2/orchestrators/guides/ai-and-job-workloads/model-vram-reference.mdx v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx

# Section 4: Staking & Earning
git mv v2/orchestrators/guides/staking-and-rewards/earnings.mdx v2/orchestrators/guides/staking-and-rewards/earning-model.mdx
git mv v2/orchestrators/guides/staking-and-rewards/rewards-and-fees.mdx v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx
git mv v2/orchestrators/guides/payments-and-pricing/payment-flow.mdx v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx
git mv v2/orchestrators/guides/staking-and-rewards/attracting-delegates.mdx v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx
git mv v2/orchestrators/guides/staking-and-rewards/governance.mdx v2/orchestrators/guides/staking-and-rewards/network-participation.mdx

# Section 6: Monitoring & Tools
git mv v2/orchestrators/guides/monitoring-and-tooling/tools.mdx v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx
git mv v2/orchestrators/guides/monitoring-and-tooling/explorer-guide.mdx v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx
git mv v2/orchestrators/guides/monitoring-and-tooling/metrics-monitoring.mdx v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx

# Section 7: Advanced Operations
git mv v2/orchestrators/guides/advanced-operations/gateways-orchestrators.mdx v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx
git mv v2/orchestrators/guides/advanced-operations/run-a-pool.mdx v2/orchestrators/guides/advanced-operations/pool-operators.mdx
git mv v2/orchestrators/guides/advanced-operations/large-scale-operations.mdx v2/orchestrators/guides/advanced-operations/scale-operations.mdx

# Section 8: Roadmap & Funding
git mv v2/orchestrators/guides/roadmap-and-funding/operator-support.mdx v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx
git mv v2/orchestrators/guides/roadmap-and-funding/orchestrator-showcase.mdx v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx
```

### 2b. Moves (between directories)

```bash
# Requirements: Deployment Details → Operator Considerations
git mv v2/orchestrators/guides/deployment-details/requirements.mdx v2/orchestrators/guides/operator-considerations/requirements.mdx

# Pricing Strategy: Payments & Pricing → Config & Optimisation
git mv v2/orchestrators/guides/payments-and-pricing/pricing-strategy.mdx v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx
```

### 2c. Deprecated moves (imported tutorials → x-deprecated)

```bash
mkdir -p v2/orchestrators/guides/tutorials/x-deprecated

git mv v2/orchestrators/guides/tutorials/imported-tutorial-1-byoc-cpu-pipeline.mdx v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-1-byoc-cpu-pipeline.mdx
git mv v2/orchestrators/guides/tutorials/imported-tutorial-2-offchain-transcoding-test.mdx v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-2-offchain-transcoding-test.mdx
git mv v2/orchestrators/guides/tutorials/imported-tutorial-3-go-production.mdx v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-3-go-production.mdx
```

---

## Part 3: Frontmatter Updates on Renamed Files

For each renamed file, update `sidebarTitle` (and `title` if needed) in the frontmatter. Do NOT change any other content.

| File (new path) | sidebarTitle | title (if change needed) |
|----------------|-------------|------------------------|
| `operator-impact.mdx` | Operator Impact | Operator Impact |
| `dual-mode-configuration.mdx` | Dual Mode | Dual Mode Configuration |
| `workload-options.mdx` | Workload Options | Workload Options |
| `video-transcoding-operations.mdx` | Video Transcoding | Video Transcoding Operations |
| `ai-inference-operations.mdx` | AI Inference | AI Inference Operations |
| `diffusion-pipeline-setup.mdx` | Diffusion Setup | Diffusion Pipeline Setup |
| `model-demand-reference.mdx` | Model Reference | Model and Demand Reference |
| `earning-model.mdx` | Earning Model | Earning Model |
| `reward-mechanics.mdx` | Reward Mechanics | Reward Mechanics |
| `payment-receipts.mdx` | Payment Receipts | Payment Receipts |
| `delegate-operations.mdx` | Delegate Operations | Delegate Operations |
| `network-participation.mdx` | Network Participation | Network Participation |
| `operator-toolbox.mdx` | Operator Toolbox | Operator Toolbox |
| `explorer-operations.mdx` | Explorer Guide | Explorer Operations |
| `metrics-and-alerting.mdx` | Metrics & Alerting | Metrics and Alerting |
| `gateway-relationships.mdx` | Gateway Relationships | Gateway Relationships |
| `pool-operators.mdx` | Pool Operators | Pool Operators |
| `scale-operations.mdx` | Scale Operations | Scale Operations |
| `funding-and-support.mdx` | Funding & Support | Funding and Support |
| `orchestrator-profiles.mdx` | Operator Profiles | Orchestrator Profiles |

---

## Part 4: New Stub Pages

Create each file with: (a) complete frontmatter, (b) TODO comment block, (c) page structure outline as JSX comment, (d) PURPOSE comment.

### Stub template

Every stub must follow this structure:

```mdx
---
title: '[Page Title]'
sidebarTitle: '[Sidebar Title]'
description: '[50-160 chars description]'
keywords:
  - livepeer
  - orchestrator
  - [topic keywords]
'og:image': /snippets/assets/site/og-image/en/orchestrators.png
'og:image:alt': Livepeer Docs social preview image for Orchestrators
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: guide
audience: orchestrator
status: draft
---
{/* TODO:
Terminology Validation:
- Ensure authoring skill is used ai-tools/ai-skills/page-authoring/SKILL.md
- Voice converted to entity-led
- Terminology consistent with v2/orchestrators/resources/glossary.mdx
Verify:
- Tables use StyledTable component
- Code blocks have icon="terminal" for bash, icon="code" for scripts
- Tabs surrounded by BorderedBox variant="accent"
- All accordions and tabs have icons
- No em-dashes (use hyphens)
- UK spelling
- Headers concise and technical
- CustomDivider used between sections
Human:
- REVIEW flags for SME verification
- Review page layout
*/}

{/* PAGE STRUCTURE:
## [H2 Section 1]
[description of content]

## [H2 Section 2]
[description of content]

## Related Pages
CardGroup with cross-references
*/}

<Note>This page is a stub. Content to be developed.</Note>

{/* PURPOSE:
[paste from execution-plan.md or existing PURPOSE comment]
*/}
```

### Stubs to create

**Section 3: Workloads & AI**

1. `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
   - title: LLM Pipeline Setup
   - sidebarTitle: LLM Setup
   - description: Set up LLM inference on a Livepeer orchestrator using the Ollama runner - model selection, configuration, and pricing for 8 GB VRAM GPUs.
   - PAGE STRUCTURE: Architecture (Ollama vs livepeer/ai-runner), Docker Compose, aiModels.json for LLM, Model ID Mapping (Ollama vs HuggingFace), Pricing (per-token), Testing, Related Pages
   - PURPOSE: LLM is architecturally distinct from diffusion. Different container (Ollama), different model ecosystem, different pricing unit, different VRAM profile. Entry point for operators with 8 GB GPUs. JOB STORIES: J6.

2. `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
   - title: Audio and Vision Pipelines
   - sidebarTitle: Audio & Vision
   - description: Set up audio-to-text (Whisper), text-to-speech, image-to-text, and segment-anything-2 pipelines on a Livepeer orchestrator.
   - PAGE STRUCTURE: Pipeline Overview (4 types), Per-Pipeline Setup (Whisper, SAM2, TTS, Vision-Language), Model Requirements, Pricing Per Pipeline, Testing, Related Pages
   - PURPOSE: Less common but growing pipelines. Lower competition means potential higher margins. JOB STORIES: J6.

3. `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
   - title: Model Hosting
   - sidebarTitle: Model Hosting
   - description: Where to find AI models, how to download and host them on a Livepeer orchestrator - HuggingFace, external containers, and the aiModels.json url field.
   - PAGE STRUCTURE: Model Sources (HuggingFace, custom), Download and Storage, aiModels.json url Field (BYOC/external), Gated Models (HF tokens), Model Verification, Related Pages
   - PURPOSE: Operators need to know where models come from and how to host them. Currently scattered. JOB STORIES: J6.

**Section 4: Staking & Earning** - no new stubs (payment-receipts already exists as renamed stub)

**Section 5: Config & Optimisation**

4. `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`
   - title: Capacity Planning
   - sidebarTitle: Capacity Planning
   - description: Plan orchestrator capacity - session limits, VRAM budgeting, NVENC hardware limits, and benchmarking with livepeer_bench.
   - PAGE STRUCTURE: Session Limits (-maxSessions), VRAM Budget Calculator, NVENC Hardware Limits (driver patch), Benchmarking (livepeer_bench, real-time duration ratio), CPU vs GPU Transcoding, When to Scale, Related Pages
   - PURPOSE: Consolidates deprecated benchmarking + session-limits content. Capacity planning is the bridge between "it works" and "it works well." JOB STORIES: J1, J3.

5. `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx`
   - title: AI Model Management
   - sidebarTitle: Model Management
   - description: Manage AI models for maximum earnings - warm and cold strategy, VRAM allocation, model rotation, optimisation flags, and demand-driven selection.
   - PAGE STRUCTURE: Warm vs Cold Strategy, VRAM Allocation, Model Rotation (demand-based), Optimisation Flags (SFAST, DEEPCACHE), Monitoring Model Loading, Demand-Driven Selection (tools.livepeer.cloud), Related Pages
   - PURPOSE: Highest-leverage tuning activity for AI operators. Loading the right model warm = earnings. Loading the wrong one = zero. JOB STORIES: J6.

6. `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx`
   - title: Reward Call Tuning
   - sidebarTitle: Reward Tuning
   - description: Optimise reward calling to maximise LPT per gas spent - profitability thresholds, timing strategies, and automated alerting.
   - PAGE STRUCTURE: When Calling Is Unprofitable, Profitability Threshold Calculation, Auto vs Manual (-reward flag), Timing Strategies, Missed Round Alerting, Related Pages
   - PURPOSE: Reward calling has real gas economics. Small operators may spend more than they earn. JOB STORIES: J3. FLAG: possible fold into delegate-operations in Phase 2.

**Section 7: Advanced Operations**

7. `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx`
   - title: Gateway-Orchestrator Interface
   - sidebarTitle: Gateway Interface
   - description: Running both a gateway and orchestrator - architecture options, port allocation, self-routing, and monitoring both roles from one operation.
   - PAGE STRUCTURE: Why Run Both, Architecture (same machine vs separate), Port Allocation, Self-Routing (can/should a gateway route to its own orchestrator?), Monitoring Both Roles, Pricing Alignment, Related Pages
   - PURPOSE: Many operators run both roles. No guide covers combined operation. JOB STORIES: J4. FLAG: gateway equivalent = "Orchestrator Interface".

**Section 9: Tutorials**

8. `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
   - title: BYOC CPU Smoke Test
   - sidebarTitle: BYOC Smoke Test
   - description: Verify the Livepeer orchestrator framework works on your machine - no GPU required, CPU-only BYOC container test.
   - PAGE STRUCTURE: What You Will Build, Prerequisites, Step 1-4, What Just Happened, Next Steps

9. `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`
   - title: Zero to First Reward
   - sidebarTitle: Zero to Reward
   - description: End-to-end tutorial - install, configure, stake, activate, and claim your first LPT reward on the Livepeer network.
   - PAGE STRUCTURE: What You Will Build, Prerequisites, Step 1-7, Verify on Explorer, Next Steps

10. `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
    - title: AI Earning Quickstart
    - sidebarTitle: AI Quickstart
    - description: Start earning from AI inference in under 2 hours - one model, one GPU, no active set membership required.
    - PAGE STRUCTURE: What You Will Build, Prerequisites, Step 1-5, Verify, Next Steps

11. `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
    - title: Add AI to a Video Node
    - sidebarTitle: Add AI to Video
    - description: Add AI inference to an existing video orchestrator - the exact configuration delta, VRAM check, and dual earnings verification.
    - PAGE STRUCTURE: What Changes (and What Does Not), VRAM Check, Step 1-4, Verify Both Workloads, Next Steps

12. `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
    - title: Full AI Pipeline Tutorial
    - sidebarTitle: Full AI Pipeline
    - description: End-to-end AI tutorial covering both gateway and orchestrator - from HuggingFace model download to verified inference through the full pipeline.
    - PAGE STRUCTURE: What You Will Build, Prerequisites, Gateway Setup, Orchestrator + AI Runner Setup, Send Request Through Gateway, Verify Full Pipeline, Next Steps

13. `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
    - title: Realtime AI Tutorial
    - sidebarTitle: Realtime AI
    - description: Set up live video-to-video AI processing - stream in, transformed stream out, using ComfyStream and the Cascade pipeline.
    - PAGE STRUCTURE: What You Will Build, Prerequisites, Orchestrator + Live Runner Setup, Gateway Setup, Send Live Stream, Verify Transformed Output, Next Steps

---

## Part 5: Nav JSON

Replace the ENTIRE Orchestrators tab `"groups"` array in `tools/config/scoped-navigation/docs-gate-work.json` with the following. Do NOT modify any other tab.

```json
{
  "tab": "Orchestrators",
  "icon": "microchip",
  "groups": [
    {
      "group": "Start Here",
      "icon": "microchip",
      "pages": [
        "v2/orchestrators/portal",
        "v2/orchestrators/navigator"
      ]
    },
    {
      "group": "Concepts",
      "icon": "book-open",
      "pages": [
        "v2/orchestrators/concepts/role",
        "v2/orchestrators/concepts/capabilities",
        "v2/orchestrators/concepts/architecture",
        "v2/orchestrators/concepts/incentive-model"
      ]
    },
    {
      "group": "Quickstart",
      "icon": "bolt",
      "pages": [
        "v2/orchestrators/quickstart/guide",
        "v2/orchestrators/quickstart/video-transcoding",
        "v2/orchestrators/quickstart/tutorial",
        "v2/orchestrators/quickstart/ai-prompt-start"
      ]
    },
    {
      "group": "Setup",
      "icon": "gear",
      "pages": [
        "v2/orchestrators/setup/guide",
        "v2/orchestrators/setup/rcs-requirements",
        "v2/orchestrators/setup/rs-install",
        "v2/orchestrators/setup/configure",
        "v2/orchestrators/setup/connect-and-activate",
        "v2/orchestrators/setup/test",
        "v2/orchestrators/setup/r-monitor"
      ]
    },
    {
      "group": "Guides",
      "icon": "chart-line",
      "pages": [
        {
          "group": "Operator Considerations",
          "pages": [
            "v2/orchestrators/guides/operator-considerations/operator-rationale",
            "v2/orchestrators/guides/operator-considerations/business-case",
            "v2/orchestrators/guides/operator-considerations/operator-impact",
            "v2/orchestrators/guides/operator-considerations/requirements"
          ]
        },
        {
          "group": "Deployment Details",
          "pages": [
            "v2/orchestrators/guides/deployment-details/setup-options",
            "v2/orchestrators/guides/deployment-details/siphon-setup",
            "v2/orchestrators/guides/deployment-details/dual-mode-configuration",
            "v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup",
            "v2/orchestrators/guides/deployment-details/join-a-pool",
            "v2/orchestrators/guides/deployment-details/new-join-a-pool"
          ]
        },
        {
          "group": "Workloads & AI",
          "pages": [
            "v2/orchestrators/guides/ai-and-job-workloads/workload-options",
            "v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations",
            "v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations",
            "v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup",
            "v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup",
            "v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup",
            "v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines",
            "v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference",
            "v2/orchestrators/guides/ai-and-job-workloads/model-hosting"
          ]
        },
        {
          "group": "Staking & Earning",
          "pages": [
            "v2/orchestrators/guides/staking-and-rewards/earning-model",
            "v2/orchestrators/guides/staking-and-rewards/reward-mechanics",
            "v2/orchestrators/guides/payments-and-pricing/payment-receipts",
            "v2/orchestrators/guides/payments-and-pricing/payments",
            "v2/orchestrators/guides/staking-and-rewards/delegate-operations",
            "v2/orchestrators/guides/staking-and-rewards/network-participation"
          ]
        },
        {
          "group": "Config & Optimisation",
          "pages": [
            "v2/orchestrators/guides/config-and-optimisation/pricing-strategy",
            "v2/orchestrators/guides/config-and-optimisation/capacity-planning",
            "v2/orchestrators/guides/config-and-optimisation/ai-model-management",
            "v2/orchestrators/guides/config-and-optimisation/reward-call-tuning"
          ]
        },
        {
          "group": "Monitoring & Tools",
          "pages": [
            "v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox",
            "v2/orchestrators/guides/monitoring-and-tooling/explorer-operations",
            "v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting",
            "v2/orchestrators/guides/monitoring-and-tooling/troubleshooting"
          ]
        },
        {
          "group": "Advanced Operations",
          "pages": [
            "v2/orchestrators/guides/advanced-operations/gateway-relationships",
            "v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface",
            "v2/orchestrators/guides/advanced-operations/pool-operators",
            "v2/orchestrators/guides/advanced-operations/scale-operations"
          ]
        },
        {
          "group": "Roadmap & Funding",
          "pages": [
            "v2/orchestrators/guides/roadmap-and-funding/funding-and-support",
            "v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles"
          ]
        },
        {
          "group": "Tutorials",
          "pages": [
            "v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test",
            "v2/orchestrators/guides/tutorials/zero-to-first-reward",
            "v2/orchestrators/guides/tutorials/ai-earning-quickstart",
            "v2/orchestrators/guides/tutorials/add-ai-to-video-node",
            "v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial",
            "v2/orchestrators/guides/tutorials/realtime-ai-tutorial"
          ]
        }
      ]
    },
    {
      "group": "Resources",
      "icon": "books",
      "pages": [
        "v2/orchestrators/resources/faq",
        "v2/orchestrators/resources/glossary",
        "v2/orchestrators/resources/community-guides",
        "v2/orchestrators/resources/community-pools",
        {
          "group": "Technical Reference",
          "pages": [
            "v2/orchestrators/resources/technical/cli-flags",
            "v2/orchestrators/resources/technical/x-contract-addresses",
            "v2/orchestrators/resources/gpu-support",
            "v2/orchestrators/resources/arbitrum-rpc",
            "v2/orchestrators/resources/arbitrum-exchanges"
          ]
        }
      ]
    }
  ]
}
```

---

## Part 6: Validation

After ALL operations complete, run these checks:

### 6a. JSON valid
```bash
python3 -c "import json; json.load(open('tools/config/scoped-navigation/docs-gate-work.json')); print('JSON valid')"
```

### 6b. All nav paths resolve
```python
# Extract all Orchestrator page paths from nav, check each exists as .mdx
import json, os
with open('tools/config/scoped-navigation/docs-gate-work.json') as f:
    nav = json.load(f)
# ... find Orchestrators tab, extract all page strings, verify each + '.mdx' exists
```

### 6c. No Dep/New subgroups
```bash
# Should return 0 matches in Orchestrators section
grep -c '"group": "Dep"\|"group": "New"' tools/config/scoped-navigation/docs-gate-work.json
```

### 6d. No x-deprecated in active nav
```bash
# Should return 0 matches
grep 'x-deprecated' tools/config/scoped-navigation/docs-gate-work.json | grep -v '#'
```

### 6e. All new stubs have required content
```bash
# Each stub must contain: PURPOSE:, TODO:, PAGE STRUCTURE:, and frontmatter ---
for f in $(find v2/orchestrators/guides -name "*.mdx" -newer <timestamp>); do
  grep -l "PURPOSE:" "$f" > /dev/null || echo "MISSING PURPOSE: $f"
  grep -l "TODO:" "$f" > /dev/null || echo "MISSING TODO: $f"
  grep -l "PAGE STRUCTURE:" "$f" > /dev/null || echo "MISSING STRUCTURE: $f"
done
```

### 6f. Frontmatter on renamed files updated
```bash
# Check each renamed file has correct sidebarTitle
grep "sidebarTitle:" v2/orchestrators/guides/operator-considerations/operator-impact.mdx
# Should show: sidebarTitle: Operator Impact
# ... repeat for all renamed files
```

---

## Execution Order Summary

1. Create directory (`config-and-optimisation/`, `tutorials/x-deprecated/`)
2. Execute all `git mv` renames (Part 2a)
3. Execute all `git mv` moves (Part 2b)
4. Execute all `git mv` deprecated moves (Part 2c)
5. Update frontmatter on renamed files (Part 3)
6. Create all 13 stub pages (Part 4)
7. Replace Orchestrators tab nav JSON (Part 5)
8. Run all validation checks (Part 6)
9. Commit

---

## What NOT to Do

- Do NOT delete any files
- Do NOT change page content (only frontmatter sidebarTitle/title on renames)
- Do NOT touch Quickstart or Setup sections (out of scope)
- Do NOT touch Gateway, Delegators, LPT, or Developer tabs
- Do NOT touch Resources section
- Do NOT rename directories (only files)
- Do NOT create content for stubs (only structure/metadata/PURPOSE)
