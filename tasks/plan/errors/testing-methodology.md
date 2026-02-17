# Component Testing Methodology

Generated: 2026-02-16

## Purpose

This document outlines the proper methodology for testing components to prevent false positives and accurately identify real bugs.

## Critical Rules

### 1. Test in Production Context First

**ALWAYS test components in their actual production usage context before marking them as broken.**

**Why:** Components may work correctly in production pages but show errors in component library documentation context due to:
- Different import patterns
- Missing dependencies
- Context-specific issues
- Mintlify build artifacts

**How:**
1. Find production pages that use the component
2. Test those pages with headless browser
3. Check for actual console errors (filter out known false positives)
4. Only mark as broken if component fails in production context

### 2. Filter Out False Positives

**Known False Positives (IGNORE these errors):**
- `require is not defined` - Mintlify build artifact
- `Unexpected token 'export'` - Mintlify build artifact
- `Identifier 'fs' has already been declared` - Test script artifact
- `Identifier 'puppeteer' has already been declared` - Test script artifact
- `Identifier 'getMdxFiles' has already been declared` - Test script artifact
- `Identifier 'path' has already been declared` - Test script artifact
- `Identifier 'execSync' has already been declared` - Test script artifact
- `Identifier 'validateMdx' has already been declared` - Test script artifact
- `await is only valid in async functions` - Test script artifact
- `403` / `500` errors - External service issues, not component bugs
- `favicon` errors - Not component-related

**Real Errors (INVESTIGATE these):**
- `ReferenceError: ComponentName is not defined` - Missing import or export
- `TypeError: Cannot read properties of undefined` - Component logic error
- `Error: Expected component 'ComponentName' to be defined` - Import/export issue
- Component-specific errors that mention the component name

### 3. Verification Process

**Step 1: Production Page Testing**
```bash
# Test component in production context
# Find pages that use the component
# Use headless browser to check console errors
# Filter out false positives
```

**Step 2: Component Library Testing**
```bash
# Only if component fails in production
# Test in component library documentation context
# Check if error is context-specific or real bug
```

**Step 3: Isolation Testing**
```bash
# Only if component fails in both contexts
# Comment out component in MDX file
# Verify page renders without component
# Verify error disappears when component is removed
```

**Step 4: Root Cause Analysis**
```bash
# Check component file for actual bugs
# Verify imports/exports are correct
# Check for Mintlify-specific issues
# Document actual bug (not false positive)
```

### 4. Documentation Requirements

**Before marking a component as broken, document:**
1. **Production Page Test Results:**
   - Which production pages were tested
   - Console errors observed (filtered)
   - Whether component renders correctly
   - Whether component functions correctly

2. **Component Library Test Results:**
   - Whether component works in component library context
   - Any context-specific errors
   - Whether errors are reproducible

3. **Isolation Test Results:**
   - Whether page renders without component
   - Whether error disappears when component is removed
   - Verification code used

4. **Root Cause:**
   - Actual bug identified (not false positive)
   - Component file location
   - Specific error message
   - Fix required

### 5. Testing Script Requirements

**A proper testing script must:**
1. Use correct URL paths (Mintlify serves at `/v2/pages/...`)
2. Filter out known false positives
3. Wait for page to fully render (3+ seconds)
4. Check for actual content (not just HTTP 200)
5. Check for component-specific errors only
6. Report actual bugs, not test artifacts

**Example:**
```javascript
// Filter out ONLY known Mintlify build artifacts
const componentErrors = realErrors.filter(err => {
  // These are known Mintlify build artifacts - ignore them
  if (err.includes('require is not defined') && !err.includes(componentName)) return false;
  if (err.includes('Unexpected token \'export\'') && !err.includes(componentName)) return false;
  if (err.includes('Identifier \'fs\' has already been declared')) return false;
  if (err.includes('Identifier \'puppeteer\' has already been declared')) return false;
  // ... more filters
  
  // These are actual component errors
  if (err.includes(componentName)) return true;
  if (err.includes(`ReferenceError: ${componentName}`)) return true;
  if (err.includes(`Error: Expected component '${componentName}'`)) return true;
  if (err.includes('TypeError') && err.includes(componentName)) return true;
  if (err.includes('ReferenceError') && !err.includes('require')) return true;
  
  return false;
});
```

### 6. Component Library Context Issues

**Components may work in production but fail in component library documentation due to:**
- Different import patterns required
- Missing dependencies in documentation context
- Mintlify-specific rendering issues
- Context-specific variable scoping

**Solution:** Document these as "context-specific issues" not "component bugs" unless component also fails in production.

### 7. Immutability Rule

**CRITICAL:** Component files in `snippets/components/` are immutable without user approval.

**Before marking a component as broken:**
1. Verify it's actually broken (not false positive)
2. Test in production context first
3. Document actual bug (not context issue)
4. Request user approval before fixing

**DO NOT:**
- Modify component files without approval
- Mark components as broken based on component library context only
- Assume components are broken without production testing

## Testing Checklist

Before marking a component as broken:

- [ ] Tested in production pages that use the component
- [ ] Filtered out all known false positives
- [ ] Verified component-specific errors only
- [ ] Tested in component library context (if applicable)
- [ ] Verified page renders without component (isolation test)
- [ ] Documented actual bug (not false positive)
- [ ] Identified root cause
- [ ] Documented fix required
- [ ] Requested user approval (if fix needed)

## Lessons Learned

**What went wrong:**
1. Initial testing was done only in component library context
2. False positives from test scripts were not properly filtered
3. Components were marked as broken without production testing
4. Context-specific issues were treated as component bugs

**What to do differently:**
1. Always test in production context first
2. Properly filter false positives
3. Verify components work in actual usage before marking as broken
4. Document context-specific issues separately from actual bugs
5. Use proper testing methodology with correct URL paths and error filtering

## References

- `component-verification-report.md` - Detailed verification results
- `component-bugs.md` - Verified component bugs (updated)
- `style-guide.mdx` - Mintlify behavior and patterns
