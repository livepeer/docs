# **Lifecycle & Governance Model**

**Deliverable:** D6 — Component Governance Framework, Lifecycle & Governance **Repository:** `livepeer/docs`, `docs-v2` branch **Scope:** Component lifecycle states, transitions, ownership, modification rules, deprecation process **Platform:** Mintlify (MDX-based) **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** COMPLETE **Depends on:** D1 (Classification), D2 (Repo Structure), D3 (Styling), D4 (Development Standards), D5 (Documentation)

## **1. Purpose**

This document defines the lifecycle model for components — what states they can be in, how they move between states, who is responsible for them, what modification rules apply, and how deprecation and removal work.

It spans all three framework parts (classification, repo structure, technical design) and provides the governance layer that keeps the component library healthy over time.

## **2. Context**

### **2.1 Current State**

The component library has no lifecycle management. Components are either present or absent. There is no concept of health status beyond informal knowledge ("that one's broken"). A blanket immutability rule exists but is disproportionate for an open-source community-owned repository.

### **2.2 Precedent**

The OSS governance proposal and TECH_AUDIT established lifecycle patterns for other repo concerns:

| **Precedent** | **Pattern** | **Adapted for components** |
| --- | --- | --- |
| CNCF lifecycle labels | active, stale, frozen, rotten for issues | Informed the five component states |
| Script lifecycle (TECH_AUDIT) | active, legacy, deprecated, test-only | Informed status values and registry tracking |
| CODEOWNERS | Directory-based review ownership | Maps directly to category-level component ownership |
| Existing test infrastructure | 58-script test suite, 17 CI workflows, pre-commit hooks | Replaces the need for immutability rules |

## **3. Lifecycle States**

Five states. Every component carries exactly one via the `@status` JSDoc tag.

### **3.1 State Definitions**

| **State** | **Meaning** | **Visual indicator (published docs)** |
| --- | --- | --- |
| stable | Production-ready. Tested, documented, defensive rendering in place. Safe for content authors to use. | Green badge |
| experimental | Usable but the API may change without notice. Not fully tested or documented. Use with awareness. | Yellow badge |
| deprecated | Scheduled for removal. A replacement has been identified. Existing usage should be migrated. | Red badge + deprecation banner |
| broken | Known defect. Renders incorrectly, crashes, or has a root-cause bug (e.g. ThemeData dependency). Do not use until fixed. | Red badge + broken banner |
| placeholder | Empty or stub implementation. Exports exist but render nothing functional (<></>, empty div). Not usable. | Grey badge |

### **3.2 Entry and Exit Criteria**

| **State** | **Entry criteria** | **Exit criteria** |
| --- | --- | --- |
| stable | All D4 checklist items pass. Visual verification in both themes. Unit tests pass. At least one example exists. @param tags complete. Defensive rendering in place. | Defect found → broken. Decision to replace → deprecated. |
| experimental | Component renders. Basic props work. Not yet fully tested or documented. | D4 checklist passes → promote to stable. Defect found → broken. Decision to abandon → placeholder or remove. |
| deprecated | Decision made to replace. @deprecated tag added with reason. @see points to replacement (D5). Removal gated on usage (Decision 5). | All consumers migrated (@usedIn empty) → removed from codebase. |
| broken | Defect identified and documented. The component was previously functional (distinguishes from placeholder). | Fix applied and verified → return to previous state (stable or experimental). Decision to replace instead → deprecated. |
| placeholder | Component was scaffolded but never implemented. Renders empty or non-functional output. | Implementation added → experimental. Decision that it's not needed → removed. |

### **3.3 State Distribution (Current Estimate)**

From the first-principles classification data:

| **State** | **Estimated count** | **Examples** |
| --- | --- | --- |
| stable | ~50 | CustomDivider, GotoCard, Video, StyledTable |
| experimental | ~5 | Newer components not yet fully documented |
| deprecated | ~2 | Components with identified replacements |
| broken | ~8 | ThemeData-dependent components, CardInCardLayout |
| placeholder | ~5 | BasicBtn, BasicList, IconList, UpdateList, UpdateLinkList |

Actual assignments made during D8 (Audit).

## **4. State Transitions**

### **4.1 Model**

**Free transitions.** Any state can transition to any other state. The only requirements are:

1. Update `@status` in JSDoc.
1. Document the reason in the commit message.

No rigid state machine. At this library's scale and team size, the overhead of enforcing directed transitions is disproportionate.

### **4.2 Common Transition Paths**

While all transitions are allowed, these are the expected common paths:

### **4.3 Transition Tracking**

Every `@status` change is automatically captured:

| **Mechanism** | **What it tracks** |
| --- | --- |
| JSDoc @status tag | Current state (SOT) |
| Git diff | State change visible in PR |
| Registry regeneration | docs-guide/component-registry.json reflects new state |
| Published docs | Status badge updates on next generation |
| @lastMeaningfulChange | Updated when status changes |

## **5. Ownership Model**

### **5.1 Category-Level Ownership**

One owner per category folder. All components in a category share the same owner. Maps directly to `.github/CODEOWNERS` directory patterns.

| **Category** | **Owner** | **CODEOWNERS entry** |
| --- | --- | --- |
| snippets/components/primitives/ | @livepeer/docs-team | snippets/components/primitives/ @livepeer/docs-team |
| snippets/components/layout/ | @livepeer/docs-team | snippets/components/layout/ @livepeer/docs-team |
| snippets/components/content/ | @livepeer/docs-team | snippets/components/content/ @livepeer/docs-team |
| snippets/components/data/ | @livepeer/docs-team | snippets/components/data/ @livepeer/docs-team |
| snippets/components/page-structure/ | @livepeer/docs-team | snippets/components/page-structure/ @livepeer/docs-team |

### **5.2 Ownership Responsibilities**

| **Responsibility** | **Description** |
| --- | --- |
| Review PRs | CODEOWNERS triggers automatic review request for changes in the category |
| Triage issues | Component-related issues routed to the category owner |
| Status decisions | Owner decides when a component is promoted, deprecated, or removed |
| Audit participation | Owner reviews D8 audit results for their category |

### **5.3 Ownership Transfer**

If the team grows and categories are split across different owners:

1. Update `.github/CODEOWNERS` with new directory → owner mapping.
1. Update `@owner` JSDoc field on all components in the affected category.
1. Pre-commit validation confirms `@owner` matches CODEOWNERS for the file's directory.

### **5.4 Community Ownership Context**

This is an open-source, community-owned repository. "Owner" means "default reviewer and decision-maker," not "gatekeeper." Community contributors can modify any component via the standard PR process. CODEOWNERS ensures the category owner is tagged for review, but does not block contribution.

## **6. Modification Rules**

### **6.1 Policy**

**No immutability rule. Code review and the existing test infrastructure are the gates.**

The repository has extensive automated quality enforcement:

| **Gate** | **What it catches** |
| --- | --- |
| Pre-commit hooks | Styling violations (ThemeData, hardcoded hex, !important), JSDoc validation, registry sync |
| Unit tests | Component rendering, defensive error handling, props edge cases |
| Browser tests | Page-level render crashes |
| CI workflows | Link integrity, MDX validity, import correctness |
| CODEOWNERS review | Human review of all component changes by category owner |
| Copilot code review | AI first-pass review flagging style violations, import issues, accessibility concerns |

This infrastructure is more robust than a blanket immutability rule. Any change that breaks something is caught by tests, not by a "don't touch this" policy.

### **6.2 Copilot Instructions Update**

The `components.instructions.md` file (from the OSS governance proposal) should be updated:

**Previous rule:**

Component immutability: flag any modification to existing component files.

**Updated rule:**

Component changes: flag modifications to components with `@status stable` for careful review. Verify that defensive rendering is preserved. Check that unit tests cover the change. New components and changes to `experimental`/`placeholder`/`broken` components are normal workflow.

### **6.3 What Triggers Review Attention**

While all changes are allowed, these patterns should receive extra scrutiny during review:

| **Pattern** | **Why it needs attention** |
| --- | --- |
| Changing a stable component's props signature | May break existing MDX pages |
| Removing an export | Breaks all pages that import it |
| Changing @status from stable to anything else | A regression signal |
| Modifying a Data component's expected data shape | May break pipeline contract |
| Changing import paths (file rename/move) | Breaks all consuming MDX pages |

## **7. Deprecation Process**

### **7.1 Trigger**

A component is deprecated when a decision is made to replace it. This decision is documented in the `@decision` JSDoc field (`MERGE`, `SPLIT`, or `REMOVE` imply deprecation of the original).

### **7.2 Steps**

| **Step** | **Action** | **Who** |
| --- | --- | --- |
| 1. Decide | Category owner or community PR proposes deprecation with rationale | Owner or contributor |
| 2. Document | Add @deprecated tag with reason + @see pointer to replacement. Set @status deprecated. Update @decision. | Contributor |
| 3. Generate | Pre-commit regenerates registry. Published docs show deprecation banner. | Automated |
| 4. Migrate | Consumers update their MDX pages to use the replacement component. @usedIn list shrinks. | Contributors / agents |
| 5. Monitor | Registry tracks remaining consumers. Published docs surface "X pages still use this deprecated component." | Automated |
| 6. Remove | When @usedIn is empty (no pages reference the component), the component is removed from the codebase. | Owner or contributor |

### **7.3 Usage-Gated Removal**

A deprecated component is **never removed while pages still reference it.** The `@usedIn` field (populated by the registry generation script, which can scan imports across MDX pages) is the gate.

The generation script can surface this in the published docs:

This creates natural pressure to migrate without risking broken pages.

### **7.4 Removal Execution**

When `@usedIn` is empty:

1. Remove the component's export from its source file.
1. If the file has no remaining exports, delete the file.
1. Remove the example file (if any).
1. Pre-commit regenerates the registry (component count decreases).
1. Published docs regenerate (component section disappears).
1. Commit message: "Remove deprecated {component} — all consumers migrated."

## **8. Lifecycle and Generation Integration**

### **8.1 Registry Fields**

The `@status` field feeds directly into the registry and published docs:

| **Registry field** | **Source** | **Used by** |
| --- | --- | --- |
| status | @status JSDoc tag | Published docs (badge), audit scripts, migration planning |
| deprecated object | @deprecated + @see tags | Published docs (deprecation banner), removal check |
| usedIn | @usedIn JSDoc tag (can be auto-populated by import scanner) | Deprecation removal gate, impact analysis |

### **8.2 Published Docs Rendering by Status**

| **Status** | **Published docs behaviour** |
| --- | --- |
| stable | Full section: editorial + props table + example + green badge |
| experimental | Full section with yellow "experimental" badge and API-may-change note |
| deprecated | Deprecation banner at top, props table retained for migration reference, example removed, section moved to bottom of category page |
| broken | Red banner: "This component has a known defect: {reason}. Do not use." Props table retained. |
| placeholder | Grey banner: "This component is not yet implemented." No props table, no example. |

### **8.3 Audit Integration**

The D8 audit assigns `@status` to every component. The registry generation script can produce lifecycle summary reports:

## **9. Decision Register**

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | Lifecycle states | Five: stable, experimental, deprecated, broken, placeholder | Five states; six (+ draft); four (merge broken + placeholder) | Maps to current reality. Broken and placeholder have different migration actions — collapsing loses that signal. |
| 2 | State transitions | Free — any to any, documented in commit | Free; directed state machine; directed + escape hatch | At this scale, a rigid state machine adds process without value. Diff visibility + registry tracking is sufficient. |
| 3 | Ownership model | Category-level — one owner per folder | Category-level; per-file; hybrid | Five owners total. Maps to CODEOWNERS. Minimal overhead. Community-owned repo — owner is default reviewer, not gatekeeper. |
| 4 | Immutability | No immutability rule — code review + tests are the gate | Blanket immutability; status-dependent; no rule | OSS community-owned repo. 58-script test suite, 17 CI workflows, pre-commit hooks, and browser tests already catch regressions. Immutability is redundant process. |
| 5 | Deprecation process | Usage-gated removal — only when @usedIn is empty | Fixed timeline; usage-gated; timeline + usage check | Never breaks pages. Registry tracks consumers. Deprecated components linger until all consumers migrate. Data-driven, not calendar-driven. |

## **10. Success Criteria**

Per the Component Governance Framework plan:

- [x] Lifecycle states defined — five states, each with meaning, entry criteria, exit criteria
- [x] Transitions defined — free transitions, documented in commit, tracked by registry
- [x] Ownership model defined — category-level, maps to CODEOWNERS, community-owned context
- [x] Immutability rules defined — no immutability rule; code review + existing test infrastructure is the gate
- [x] Deprecation process defined — usage-gated removal, `@usedIn` must be empty before removal
- [x] Every governance rule is enforceable or verifiable (pre-commit for status validation, registry for tracking, CODEOWNERS for review, CI for tests)

## **11. Open Items for Downstream Deliverables**

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| Status assignment for all 83 components | D8 (Audit) | Every component gets @status based on current health |
| @usedIn population | D8 (Audit) / D9 (Migration) | Import scanner script populates @usedIn from MDX page imports |
| CODEOWNERS update | D9 (Migration) | Add five category-level entries to .github/CODEOWNERS |
| components.instructions.md update | D9 (Migration) | Relax blanket immutability to status-aware review guidance |
| Deprecation banner rendering | D9 (Migration) | generate-component-docs.js renders status-dependent banners |
| Lifecycle summary in registry | D9 (Migration) | Registry generation script includes status distribution counts |
| Import scanner for @usedIn | D9 (Migration) | Script that greps MDX pages for component imports and updates @usedIn |