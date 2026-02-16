# Component Bugs Report

Generated: 2026-02-16

This report documents verified component bugs that prevent pages from rendering correctly. These bugs are in immutable component files and require user approval to fix.

## ResponseFieldGroup

**File:** `snippets/components/content/responseField.jsx`  
**Error:** `ReferenceError: Expandable is not defined`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library`
- `/v2/pages/07_resources/documentation-guide/component-library/content`

**Verification Steps:**
1. Commented out ResponseFieldGroup usage in MDX files
2. Verified pages render correctly without component
3. Confirmed error disappears when component is commented out

**Verification Code:**
```mdx
{/* Temporarily commented out to verify component bug */}
{/*
<ResponseFieldGroup title="API Fields" component="accordion">
  {[...]}
</ResponseFieldGroup>
*/}
```

**Fix Required:** 
The `ResponseFieldGroup` component uses `Expandable` directly, but Mintlify global components cannot be stored in variables. The component needs to use conditional rendering with direct JSX (which was attempted but reverted due to immutability rule).

**Impact Assessment:** 
Used in component library documentation pages. Component is used elsewhere in the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## BlinkingIcon

**File:** `snippets/components/primitives/links.jsx`  
**Error:** `ReferenceError: Cannot access 'BlinkingIcon' before initialization`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/primitives`

**Verification Steps:**
1. Commented out BlinkingIcon usage in primitives.mdx
2. Verified page renders correctly without component
3. Confirmed error disappears when component is commented out

**Verification Code:**
```mdx
{/* Temporarily commented out to verify component bug */}
{/*
<BlinkingIcon icon="circle" color="#00cc88" size={12} />
*/}
```

**Fix Required:** 
Component has an initialization order issue - likely a circular dependency or hoisting problem in the component file.

**Impact Assessment:** 
Used in component library documentation. May be used elsewhere in the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## BlinkingTerminal

**File:** `snippets/components/primitives/links.jsx`  
**Error:** Same as BlinkingIcon (alias component)  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/primitives`

**Verification Steps:**
1. Commented out BlinkingTerminal usage in primitives.mdx
2. Verified page renders correctly without component
3. Confirmed error disappears when component is commented out

**Fix Required:** 
Same as BlinkingIcon - initialization order issue.

**Impact Assessment:** 
Deprecated alias for BlinkingIcon. Used in component library documentation.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## DoubleIconLink

**File:** `snippets/components/primitives/links.jsx`  
**Error:** `Error: Expected component 'DoubleIconLink' to be defined: you likely forgot to import, pass, or provide it.`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/domain`

**Verification Steps:**
1. Commented out DoubleIconLink usage in domain.mdx
2. Verified page renders correctly without component
3. Confirmed error disappears when component is commented out

**Verification Code:**
```mdx
{/* Temporarily commented out to verify component bug */}
{/*
<DoubleIconLink
  label="View on GitHub"
  href="https://github.com/livepeer/go-livepeer"
  iconLeft="github"
  iconRight="arrow-up-right"
/>
*/}
```

**Fix Required:** 
Component is not being exported correctly or has an export issue in the component file.

**Impact Assessment:** 
Used in component library documentation. May be used elsewhere in the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## ListSteps

**File:** `snippets/components/layout/ListSteps.jsx`  
**Error:** `TypeError: Cannot read properties of undefined (reading 'map')`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/layout`

**Verification Steps:**
1. Commented out ListSteps usage in layout.mdx
2. Verified page renders correctly without component
3. Confirmed error disappears when component is commented out

**Verification Code:**
```mdx
{/* Temporarily commented out to verify component bug */}
{/*
<ListSteps listItems={[...]} stepsConfig={{...}} />
*/}
```

**Fix Required:** 
Component function signature expects `(listItems, stepsConfig)` but receives a single props object. Needs to be changed to `({ listItems = [], stepsConfig = {} })` with proper destructuring.

**Impact Assessment:** 
Used in component library documentation. May be used elsewhere in the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## P Component (frameMode.jsx)

**File:** `snippets/components/display/frameMode.jsx`  
**Error:** `ReferenceError: resolvedIconColor is not defined`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/display`

**Verification Steps:**
1. Commented out P component usage with icon prop in display.mdx
2. Verified page renders correctly without icon prop
3. Confirmed error disappears when icon prop is removed

**Verification Code:**
```mdx
{/* Temporarily commented out to verify component bug */}
{/*
<P icon="info-circle">Paragraph with icon</P>
*/}
```

**Fix Required:** 
Component defines `defaultIconColor` but then tries to use `resolvedIconColor` without defining it. Should change `defaultIconColor` to `resolvedIconColor` or define `resolvedIconColor` properly.

**Impact Assessment:** 
Used in component library documentation. Used in frame mode pages throughout the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## ApiBaseUrlsTable

**File:** `snippets/components/layout/api-base-urls-table.mdx`  
**Error:** `ReferenceError: url is not defined`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/layout`

**Verification Steps:**
1. Commented out ApiBaseUrlsTable usage in layout.mdx
2. Verified page renders correctly without component
3. Confirmed error disappears when component is commented out

**Fix Required:** 
Component uses `urls.map()` but if `urls` prop is undefined, it throws error. Component needs proper null/undefined checking for `urls` prop.

**Impact Assessment:** 
Used in component library documentation. May be used elsewhere in the codebase.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## OrchAddrNote, TestVideoDownload

**File:** `snippets/components/domain/04_GATEWAYS/callouts.jsx`  
**Error:** `ReferenceError: OrchAddrNote is not defined` / `ReferenceError: TestVideoDownload is not defined`  
**Pages Affected:** 
- `/v2/pages/07_resources/documentation-guide/component-library/domain`

**Verification Steps:**
1. Commented out OrchAddrNote and TestVideoDownload usage in domain.mdx
2. Verified page renders correctly without components
3. Confirmed errors disappear when components are commented out

**Fix Required:** 
Components are exported correctly in the file, but there may be an import/export issue or the components may use DoubleIconLink internally which has a bug.

**Impact Assessment:** 
Used in component library documentation. Used in Gateway documentation pages.

**DO NOT IMPLEMENT** - Component files are immutable without user approval

---

## Summary

Total component bugs verified: 6

All bugs have been verified by:
1. Commenting out component usage in MDX files
2. Confirming pages render correctly without the components
3. Confirming errors disappear when components are commented out

All fixes require modifying immutable component files and need user approval before implementation.
