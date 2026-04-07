# Pattern Observer Report
**Scope:** gateways/concepts
**Date:** 2026-03-16
**Files scanned:** 4

<CustomDivider />

## Pattern Frequency

| Pattern | Count | Files affected | Threshold | Escalation |
|---|---|---|---|---|
| NOT_CONSTRUCTION | 16 | 4 | 5 | ⚠️ PRODUCT_CLARITY |
| WEAKENED_VALUE | 9 | 2 | 5 | ⚠️ PRODUCT_CLARITY |
| CONDITIONAL_IF | 7 | 3 | 5 | ⚠️ ARCHITECTURE |
| DEPENDS_ON | 2 | 1 | 3 | None |
| THIS_PAGE_VERB | 1 | 1 | 3 | None |
| RATHER_THAN | 1 | 1 | 4 | None |

<CustomDivider />

## L7 Diagnostic Output

### PRODUCT CLARITY — Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.

**Triggering patterns:**
- **NOT_CONSTRUCTION** (16 occurrences): Writer reaching for contrast because no clear positive value claim exists.
- **WEAKENED_VALUE** (9 occurrences): Hedged value claims suggest writer does not believe the VP being asserted.

### ARCHITECTURE — Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.

**Triggering patterns:**
- **CONDITIONAL_IF** (7 occurrences): Conditionals cluster around sections serving multiple undefined personas simultaneously.

<CustomDivider />

## Affected Files by Pattern

### NOT_CONSTRUCTION (16)
- `v2/gateways/concepts/architecture.mdx`
- `v2/gateways/concepts/business-model.mdx`
- `v2/gateways/concepts/capabilities.mdx`
- `v2/gateways/concepts/role.mdx`

### WEAKENED_VALUE (9)
- `v2/gateways/concepts/capabilities.mdx`
- `v2/gateways/concepts/role.mdx`

### CONDITIONAL_IF (7)
- `v2/gateways/concepts/architecture.mdx`
- `v2/gateways/concepts/business-model.mdx`
- `v2/gateways/concepts/capabilities.mdx`

### DEPENDS_ON (2)
- `v2/gateways/concepts/capabilities.mdx`

### THIS_PAGE_VERB (1)
- `v2/gateways/concepts/architecture.mdx`

### RATHER_THAN (1)
- `v2/gateways/concepts/capabilities.mdx`
