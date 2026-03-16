# Pattern Observer Report
**Scope:** orchestrators/guides/ai-and-job-workloads
**Date:** 2026-03-16
**Files scanned:** 9

---

## Pattern Frequency

| Pattern | Count | Files affected | Threshold | Escalation |
|---|---|---|---|---|
| NOT_CONSTRUCTION | 49 | 8 | 5 | ⚠️ PRODUCT_CLARITY |
| WEAKENED_VALUE | 47 | 9 | 5 | ⚠️ PRODUCT_CLARITY |
| CONDITIONAL_IF | 34 | 9 | 5 | ⚠️ ARCHITECTURE |
| RATHER_THAN | 5 | 4 | 4 | ⚠️ COPY |
| THIS_PAGE_VERB | 4 | 4 | 3 | ⚠️ ARCHITECTURE |
| CONSISTENTLY_NO_NUMBER | 3 | 3 | 4 | None |
| SELF_UNDERMINING_VALUE | 3 | 2 | 2 | ⚠️ PRODUCT_CLARITY |
| NOT_JUST | 2 | 1 | 3 | None |
| DANGLING_CLAIM | 1 | 1 | 3 | None |
| DEPENDS_ON | 1 | 1 | 3 | None |
| AMONG_OTHER | 1 | 1 | 4 | None |

---

## L7 Diagnostic Output

### PRODUCT CLARITY — Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.

**Triggering patterns:**
- **WEAKENED_VALUE** (47 occurrences): Hedged value claims suggest writer does not believe the VP being asserted.
- **NOT_CONSTRUCTION** (49 occurrences): Writer reaching for contrast because no clear positive value claim exists.
- **SELF_UNDERMINING_VALUE** (3 occurrences): Self-undermining constructions indicate L0 Q1 was not cleanly answered.

### ARCHITECTURE — Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.

**Triggering patterns:**
- **THIS_PAGE_VERB** (4 occurrences): Page announcements indicate pages without a defined single purpose.
- **CONDITIONAL_IF** (34 occurrences): Conditionals cluster around sections serving multiple undefined personas simultaneously.

### COPY — Route to L4/L5. Rule reinforcement pass. Flag for copy editor review.

**Triggering patterns:**
- **RATHER_THAN** (5 occurrences): Writer has not internalised the no-contrast rule.

---

## Affected Files by Pattern

### NOT_CONSTRUCTION (49)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

### WEAKENED_VALUE (47)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

### CONDITIONAL_IF (34)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

### RATHER_THAN (5)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

### THIS_PAGE_VERB (4)
- `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`

### CONSISTENTLY_NO_NUMBER (3)
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

### SELF_UNDERMINING_VALUE (3)
- `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`
- `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx`

### NOT_JUST (2)
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`

### DANGLING_CLAIM (1)
- `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`

### DEPENDS_ON (1)
- `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`

### AMONG_OTHER (1)
- `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`
