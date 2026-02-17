# Agent Prerequisites - MANDATORY READING

**All agents working on this repository MUST read these documents before making any changes:**

## 1. Style Guide (REQUIRED)

**File:** `v2/pages/07_resources/documentation-guide/style-guide.mdx`

**Why:** Contains production-grade styling guidelines, Mintlify gotchas, and critical rules.

**Key Rules:**
- Use CSS Custom Properties (`var(--accent)`) ONLY
- Never use `ThemeData` from `themeStyles.jsx` (deprecated)
- Never hardcode hex colors that should adapt to theme
- Follow Mintlify import patterns (absolute paths from root)
- Test in both light and dark modes

## 2. Component Library (REQUIRED)

**File:** `v2/pages/07_resources/documentation-guide/component-library.mdx`

**Why:** Lists all available components, their props, and usage examples.

**Key Rules:**
- Check component library before creating new components
- Use existing components when possible
- Follow component prop patterns

## 3. Mintlify Behavior Guide (RECOMMENDED)

**File:** `snippets/snippetsWiki/mintlify-behaviour.mdx`

**Why:** Comprehensive guide to Mintlify-specific patterns and limitations.

## 4. Snippets Inventory (REFERENCE)

**File:** `v2/pages/07_resources/documentation-guide/snippets-inventory.mdx`

**Why:** Complete inventory of all files in the snippets folder.

## Git Hooks (MANDATORY)

**Before making any changes, install git hooks:**

```bash
./.githooks/install.sh
```

The pre-commit hook will automatically:
- ✅ Check for style guide violations
- ✅ Run verification scripts
- ❌ Block commits with violations

**See:** [Git Hooks Documentation](../CONTRIBUTING/GIT-HOOKS.md) and [Agent Instructions](../CONTRIBUTING/AGENT-INSTRUCTIONS.md)

## Verification Checklist

Before submitting any PR, verify:

- [ ] Git hooks installed and working
- [ ] Read style guide
- [ ] Using CSS Custom Properties (not ThemeData)
- [ ] No hardcoded colors that should adapt to theme
- [ ] Following Mintlify import patterns
- [ ] Checked component library for existing components
- [ ] Tested in both light and dark modes
- [ ] No suggestions/recommendations in production docs
- [ ] Pre-commit hook passes (runs automatically on commit)

## Quick Reference

### Styling
```jsx
// ✅ CORRECT
<div style={{ color: "var(--accent)", background: "var(--card-background)" }}>

// ❌ WRONG
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>
```

### Imports
```jsx
// ✅ CORRECT - absolute path from root
import { Component } from "/snippets/components/Component.jsx";

// ❌ WRONG - relative path
import { Component } from "../components/Component.jsx";
```
