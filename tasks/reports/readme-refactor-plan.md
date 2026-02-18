# README Refactoring Plan: Reduce Repetition & Improve Readability

**Date:** 2026-02-18  
**Source:** Upstream README (737 lines)  
**Goal:** Make README more human-readable by eliminating repetition and improving flow

---

## Analysis: Repetitive Content Identified

### 1. **Git Hooks / Pre-Commit Hooks** (Mentioned 4+ times)
- **Quick Start** (lines 50-59): Brief mention with installation
- **Pre-Commit Hooks** (lines 254-329): Full detailed section
- **Development** (lines 706-728): Duplicate installation instructions
- **Contributing** (line 111): Reference to documentation

**Issue:** Installation steps repeated, same information in 3 places

### 2. **"Before Contributing" / Mandatory Reading** (Mentioned 2+ times)
- **Contributing** (lines 104-112): Full list with 6 items
- **Development** (lines 730-738): Duplicate list with 5 items

**Issue:** Same reading list repeated with slight variations

### 3. **Repository Structure Rules** (Mentioned 5+ times)
- **Contributing** (line 118): Brief mention
- **Repository Structure** (lines 487-612): Full detailed section
- **Enforcement** (lines 588-602): Repeated in multiple sections
- **AI Agent Rules** (line 468): Reference
- **Key Rules** (lines 575-585): Duplicate rules

**Issue:** Structure rules scattered and repeated

### 4. **Style Guide / CSS Custom Properties** (Mentioned 6+ times)
- **Contributing** (line 116): Rule listed
- **Pre-Commit Hooks** (line 274-275): Check mentioned
- **Testing** (line 342, 352): Test mentioned
- **AI Agent Rules** (line 469): Rule listed
- **Component Development** (line 138): Rule mentioned
- Multiple other places

**Issue:** Same rules repeated in every section

### 5. **v1/ is FROZEN** (Mentioned 5+ times)
- **Contributing** (line 121): Rule listed
- **Pre-Commit Hooks** (line 271): Check mentioned
- **Repository Structure** (line 579): Rule listed
- **Versioning** (line 620-624): Full explanation
- **AI Agent Rules** (line 472): Rule listed

**Issue:** Same warning repeated everywhere

### 6. **Mintlify CLI / `mint dev`** (Mentioned 4+ times)
- **Quick Start** (lines 45-48, 61-66): Installation and usage
- **Development Workflow** (line 77-80): Usage
- **Development** (lines 680-702): Full section with troubleshooting
- **CI/CD** (line 431): Mentioned

**Issue:** Installation and usage instructions duplicated

### 7. **Testing Information** (Mentioned 3+ times)
- **Pre-Commit Hooks** (lines 284-286): Brief mention
- **Testing** (lines 332-388): Full detailed section
- **Development** (line 704): Brief mention

**Issue:** Testing info scattered

### 8. **Component Development** (Mentioned 2+ times)
- **Contributing** (lines 131-153): Full detailed section
- **AI Agent Rules** (line 474): Brief reference

**Issue:** Component rules could be better organized

---

## Refactoring Strategy

### Principle: **One Source of Truth Per Topic**

Each major topic should have:
1. **One primary section** with complete information
2. **Brief references** in other sections that link to the primary section
3. **No duplication** of detailed instructions

### Proposed Structure

```
1. Introduction & Quick Start
   - Brief overview
   - Minimal setup (just enough to get started)
   - Link to detailed sections

2. Contributing (Consolidated)
   - Before You Start (ONE list, link to details)
   - Key Rules (ONE consolidated list)
   - Where to Make Changes
   - Component Development
   - Pull Request Process
   - Review Process
   - Links to detailed guides

3. Development Setup (Consolidated)
   - Prerequisites (ONE place)
   - Installation (ONE place)
   - Git Hooks (ONE detailed section, referenced elsewhere)
   - Local Development (`mint dev` - ONE place with troubleshooting)
   - Testing (ONE section, referenced elsewhere)

4. Repository Structure (ONE comprehensive section)
   - Directory structure
   - Key rules (consolidated)
   - Enforcement (how it works)
   - Related documentation links

5. Versioning (Keep as-is, remove duplicates)
   - v1 vs v2
   - Migration strategy

6. Automation & Workflows (Keep as-is)

7. CI/CD & Deployment (Keep as-is)

8. GitHub Issues (Keep as-is)

9. AI Agent Rules (Keep as-is, remove duplicate rules)
   - Reference other sections instead of repeating

10. Testing (ONE comprehensive section)
    - When tests run
    - Test coverage
    - Manual execution
```

---

## Specific Changes to Make

### Change 1: Consolidate Git Hooks
- **Keep:** Full section in "Development Setup" or "Pre-Commit Hooks"
- **Remove:** Duplicate installation from Quick Start and Development
- **Replace with:** Brief mention + link: "Install hooks: `./.githooks/install.sh` (see [Git Hooks](#-pre-commit-hooks) for details)"

### Change 2: Consolidate "Before Contributing"
- **Keep:** ONE list in Contributing section
- **Remove:** Duplicate from Development section
- **Replace with:** "See [Contributing](#-contributing) section for mandatory reading list"

### Change 3: Consolidate Repository Structure
- **Keep:** ONE comprehensive section
- **Remove:** Scattered mentions and duplicate rules
- **Replace with:** Brief references + links: "See [Repository Structure](#-repository-structure) for complete rules"

### Change 4: Consolidate Style Guide Rules
- **Keep:** ONE consolidated list in Contributing section
- **Remove:** Repeated mentions in every section
- **Replace with:** Brief mentions + link: "Follow [style guide rules](#key-contribution-rules)"

### Change 5: Consolidate v1/ Frozen Warning
- **Keep:** ONE clear explanation in Versioning section
- **Remove:** Repeated warnings everywhere
- **Replace with:** Brief mention + link: "⚠️ v1/ is frozen (see [Versioning](#-versioning))"

### Change 6: Consolidate Mintlify Setup
- **Keep:** ONE comprehensive section in Development
- **Remove:** Duplicate installation from Quick Start
- **Replace with:** Brief mention + link: "Install Mintlify CLI: `npm i -g mintlify` (see [Development](#-development) for details)"

### Change 7: Consolidate Testing
- **Keep:** ONE comprehensive section
- **Remove:** Brief mentions scattered elsewhere
- **Replace with:** Brief references + links

---

## Implementation Plan

### Phase 1: Quick Wins (Remove Obvious Duplicates)
1. Remove duplicate Git Hooks installation from Development section
2. Remove duplicate "Before Contributing" list from Development section
3. Remove duplicate Mintlify installation from Quick Start (keep brief, link to Development)
4. Remove duplicate v1/ warnings (keep in Versioning, brief mentions elsewhere)

### Phase 2: Consolidate Sections
1. Merge Pre-Commit Hooks into Development Setup section
2. Consolidate all style guide rules into Contributing section
3. Consolidate all repository structure rules into Repository Structure section
4. Consolidate all testing info into Testing section

### Phase 3: Improve Flow
1. Reorganize sections for logical flow (Quick Start → Contributing → Development → Structure → Advanced)
2. Add clear section links/cross-references
3. Use brief mentions with links instead of repeating details
4. Add a "Table of Contents" or "Jump to" section at top

### Phase 4: Polish
1. Review for remaining repetition
2. Ensure all links work
3. Verify all information is still accessible
4. Test readability with fresh eyes

---

## Expected Outcome

**Before:** 737 lines with significant repetition  
**After:** ~500-550 lines with:
- ✅ Each topic covered once in detail
- ✅ Brief references with links elsewhere
- ✅ Better flow and readability
- ✅ Easier to maintain (single source of truth)
- ✅ All information still accessible

---

## Notes

- **Don't remove information** - just consolidate it
- **Use links** to connect related sections
- **Keep Quick Start brief** - detailed info in dedicated sections
- **Maintain all functionality** - just improve organization
- **Test all links** after refactoring
