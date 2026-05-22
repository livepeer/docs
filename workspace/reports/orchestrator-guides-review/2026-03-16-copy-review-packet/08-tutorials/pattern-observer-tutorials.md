# Pattern Observer Report
**Scope:** orchestrators/guides/tutorials
**Date:** 2026-03-16
**Files scanned:** 13

---

## Pattern Frequency

| Pattern | Count | Files affected | Threshold | Escalation |
|---|---|---|---|---|
| NOT_CONSTRUCTION | 38 | 8 | 5 | ⚠️ PRODUCT_CLARITY |
| CONDITIONAL_IF | 33 | 7 | 5 | ⚠️ ARCHITECTURE |
| WEAKENED_VALUE | 21 | 5 | 5 | ⚠️ PRODUCT_CLARITY |
| RATHER_THAN | 3 | 2 | 4 | None |
| CONSISTENTLY_NO_NUMBER | 1 | 1 | 4 | None |
| DEPENDS_ON | 1 | 1 | 3 | None |
| NOT_JUST | 1 | 1 | 3 | None |

---

## L7 Diagnostic Output

### PRODUCT CLARITY — Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.

**Triggering patterns:**
- **NOT_CONSTRUCTION** (38 occurrences): Writer reaching for contrast because no clear positive value claim exists.
- **WEAKENED_VALUE** (21 occurrences): Hedged value claims suggest writer does not believe the VP being asserted.

### ARCHITECTURE — Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.

**Triggering patterns:**
- **CONDITIONAL_IF** (33 occurrences): Conditionals cluster around sections serving multiple undefined personas simultaneously.

---

## Affected Files by Pattern

### NOT_CONSTRUCTION (38)
- `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
- `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
- `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx`
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`

### CONDITIONAL_IF (33)
- `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx`
- `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx`
- `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`

### WEAKENED_VALUE (21)
- `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx`
- `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`

### RATHER_THAN (3)
- `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`

### CONSISTENTLY_NO_NUMBER (1)
- `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`

### DEPENDS_ON (1)
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`

### NOT_JUST (1)
- `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx`
