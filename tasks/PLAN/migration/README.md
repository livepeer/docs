# Migration Task Files

This folder contains detailed task files for each phase of the repository structure migration.

## Overview

Each task file provides:
- Detailed step-by-step instructions
- Testing requirements
- Success criteria
- References to the main migration plan

## Task Files

- **`01-root-structure-migration-phase-1-2.md`** - Phases 1 & 2 (Foundation Setup & Root Cleanup)
- **`03-snippets-cleanup.md`** - Phase 3 (Snippets Cleanup)
- **`04-scripts-consolidation.md`** - Phase 4 (Scripts Consolidation)
- **`05-v2-cleanup.md`** - Phase 5 (V2 Cleanup)
- **`06-verify-styles-root.md`** - Phase 6 (Verify Styles at Root)
- **`07-tasks-reorganization.md`** - Phase 7 (Tasks Reorganization)
- **`08-data-content-separation.md`** - Phase 8 (Data & Content Separation - Future)
- **`09-final-validation.md`** - Phase 9 (Final Validation)

## Before Starting Any Task

**MANDATORY:** Read the main migration plan first:
- `tasks/plan/migration-plan.md` - Complete migration plan with structure rules

**MANDATORY:** Read Mintlify rules:
- `v2/pages/07_resources/documentation-guide/style-guide.mdx` - Style guide and Mintlify gotchas

## Usage

1. **Read the main migration plan** - Understand the overall structure
2. **Read the specific phase task file** - Get detailed instructions
3. **Follow the task file step-by-step** - Don't skip steps
4. **Test after every sub-task** - Critical requirement
5. **Commit incrementally** - Small commits after each successful change

## Critical Rules

- **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once
- **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
- **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
- **READ MIGRATION PLAN FIRST** - Understand the structure before making changes
- **CHECK MINTLIFY RULES** - Don't break Mintlify functionality
- **VERIFY AND FULLY TEST** - Changes on every task, not at the end

## Phase Dependencies

- **Phase 1:** No dependencies (foundation)
- **Phase 2:** Depends on Phase 1
- **Phase 3:** Depends on Phase 1
- **Phase 4:** Depends on Phase 1
- **Phase 5:** Depends on Phase 1
- **Phase 6:** No dependencies
- **Phase 7:** Depends on Phase 1
- **Phase 8:** No dependencies (future work)
- **Phase 9:** Depends on all previous phases

## Notes

- Phase 10 (Move v1/v2 to docs/) is NOT in this migration - v1/v2 stay at root
- Phase 8 (Data & Content Separation) is FUTURE work - not required for initial migration
- Always test after each change before proceeding
