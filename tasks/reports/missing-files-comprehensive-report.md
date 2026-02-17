# Comprehensive Missing Files Report

**Date:** $(date)  
**Current Branch:** $(git branch --show-current)  
**Report Type:** File Comparison Across All Branches

---

## Executive Summary

This report compares files across all local and remote branches to identify:
1. Files that exist in other branches but not in the current branch
2. Files that were moved (exist with different paths)
3. Files that were truly deleted (content not found anywhere)

---

## Branch Information

**Current Branch:** $(git branch --show-current)  
**Current Branch File Count:** $(git ls-tree -r --name-only HEAD | wc -l | tr -d ' ')

**Branches Checked:**
- docs-v2-test (local)
- origin/docs-v2-tests (remote)
- origin/docs-v2-preview (remote)

---

## Detailed Comparison

*This report will be populated with the actual comparison results...*

---

## Files Missing from Current Branch

### From docs-v2-test (local)
*Checking...*

### From origin/docs-v2-tests (remote)
*Checking...*

### From origin/docs-v2-preview (remote)
*Checking...*

---

## Files That Were Moved (Not Deleted)

*Checking if files exist in different locations...*

---

## Files That Were Truly Deleted

*Checking if file content exists anywhere in current branch...*

---

## Recommendations

1. Review all files listed as "DELETED" to confirm they should be removed
2. Verify files listed as "MOVED" are in their correct locations per README.md
3. Restore any files that were accidentally deleted

---

**Report Generated:** $(date)
