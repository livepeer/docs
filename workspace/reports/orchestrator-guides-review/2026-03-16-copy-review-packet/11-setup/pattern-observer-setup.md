# Pattern Observer Report
**Scope:** orchestrators/setup
**Date:** 2026-03-16
**Files scanned:** 7

---

## Pattern Frequency

| Pattern | Count | Files affected | Threshold | Escalation |
|---|---|---|---|---|
| NOT_CONSTRUCTION | 17 | 5 | 5 | ⚠️ PRODUCT_CLARITY |
| CONDITIONAL_IF | 7 | 4 | 5 | ⚠️ ARCHITECTURE |
| WEAKENED_VALUE | 5 | 4 | 5 | ⚠️ PRODUCT_CLARITY |
| THIS_PAGE_VERB | 2 | 2 | 3 | None |

---

## L7 Diagnostic Output

### PRODUCT CLARITY — Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.

**Triggering patterns:**
- **NOT_CONSTRUCTION** (17 occurrences): Writer reaching for contrast because no clear positive value claim exists.
- **WEAKENED_VALUE** (5 occurrences): Hedged value claims suggest writer does not believe the VP being asserted.

### ARCHITECTURE — Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.

**Triggering patterns:**
- **CONDITIONAL_IF** (7 occurrences): Conditionals cluster around sections serving multiple undefined personas simultaneously.

---

## Affected Files by Pattern

### NOT_CONSTRUCTION (17)
- `v2/orchestrators/setup/configure.mdx`
- `v2/orchestrators/setup/connect-and-activate.mdx`
- `v2/orchestrators/setup/guide.mdx`
- `v2/orchestrators/setup/rs-install.mdx`
- `v2/orchestrators/setup/test.mdx`

### CONDITIONAL_IF (7)
- `v2/orchestrators/setup/configure.mdx`
- `v2/orchestrators/setup/guide.mdx`
- `v2/orchestrators/setup/r-monitor.mdx`
- `v2/orchestrators/setup/rs-install.mdx`

### WEAKENED_VALUE (5)
- `v2/orchestrators/setup/configure.mdx`
- `v2/orchestrators/setup/connect-and-activate.mdx`
- `v2/orchestrators/setup/r-monitor.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`

### THIS_PAGE_VERB (2)
- `v2/orchestrators/setup/guide.mdx`
- `v2/orchestrators/setup/r-monitor.mdx`

