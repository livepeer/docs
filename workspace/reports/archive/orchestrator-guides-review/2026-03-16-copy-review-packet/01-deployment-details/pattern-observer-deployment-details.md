# Pattern Observer Report
**Scope:** orchestrators/guides/deployment-details
**Date:** 2026-03-16
**Files scanned:** 18

---

## Pattern Frequency

| Pattern | Count | Files affected | Threshold | Escalation |
|---|---|---|---|---|
| NOT_CONSTRUCTION | 114 | 18 | 5 | ⚠️ PRODUCT_CLARITY |
| CONDITIONAL_IF | 107 | 18 | 5 | ⚠️ ARCHITECTURE |
| WEAKENED_VALUE | 80 | 18 | 5 | ⚠️ PRODUCT_CLARITY |
| RATHER_THAN | 18 | 11 | 4 | ⚠️ COPY |
| DEPENDS_ON | 8 | 4 | 3 | ⚠️ ARCHITECTURE |
| THIS_PAGE_VERB | 7 | 7 | 3 | ⚠️ ARCHITECTURE |
| CONSISTENTLY_NO_NUMBER | 3 | 3 | 4 | None |
| SELF_UNDERMINING_VALUE | 2 | 2 | 2 | ⚠️ PRODUCT_CLARITY |
| NOT_JUST | 1 | 1 | 3 | None |

---

## L7 Diagnostic Output

### PRODUCT CLARITY — Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.

**Triggering patterns:**
- **NOT_CONSTRUCTION** (114 occurrences): Writer reaching for contrast because no clear positive value claim exists.
- **WEAKENED_VALUE** (80 occurrences): Hedged value claims suggest writer does not believe the VP being asserted.
- **SELF_UNDERMINING_VALUE** (2 occurrences): Self-undermining constructions indicate L0 Q1 was not cleanly answered.

### ARCHITECTURE — Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.

**Triggering patterns:**
- **CONDITIONAL_IF** (107 occurrences): Conditionals cluster around sections serving multiple undefined personas simultaneously.
- **THIS_PAGE_VERB** (7 occurrences): Page announcements indicate pages without a defined single purpose.
- **DEPENDS_ON** (8 occurrences): Hedge language indicates section is covering multiple operator profiles without routing.

### COPY — Route to L4/L5. Rule reinforcement pass. Flag for copy editor review.

**Triggering patterns:**
- **RATHER_THAN** (18 occurrences): Writer has not internalised the no-contrast rule.

---

## Affected Files by Pattern

### NOT_CONSTRUCTION (114)
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### CONDITIONAL_IF (107)
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### WEAKENED_VALUE (80)
- `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx`
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### RATHER_THAN (18)
- `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx`
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-requirements.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### DEPENDS_ON (8)
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### THIS_PAGE_VERB (7)
- `v2/orchestrators/guides/deployment-details/setup-options.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-benchmarking.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### CONSISTENTLY_NO_NUMBER (3)
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx`

### SELF_UNDERMINING_VALUE (2)
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-orchestrator-transcoder-setup.mdx`
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx`

### NOT_JUST (1)
- `v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx`
