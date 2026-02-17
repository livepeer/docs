# Repository Structure Audit - Executive Summary

**Date:** 2026  
**Status:** Historical Summary  
**Reports Generated:** 3

## 📖 Source of Truth

**⚠️ IMPORTANT:** The **source of truth** for repository structure is **[README.md](../../../README.md)**. This summary is a historical document. For current structure rules, always refer to README.md.

---

## Quick Links

1. **[Full Audit Report](./repository-structure-audit.md)** - Comprehensive analysis
2. **[Repository Ruleset](./repository-ruleset.md)** - Detailed rules and conventions
3. **[README.md](../../../README.md)** - **SOURCE OF TRUTH** - Current repository structure
4. **This Summary** - High-level overview

---

## Key Findings

### Critical Issues

1. **Root Directory Clutter** - 20+ files that should be organized
2. **Scattered Scripts** - Scripts in 4 different locations
3. **Duplicate Assets** - Assets in both `v2/assets/` and `snippets/assets/`
4. **Duplicate Styles** - `style.css` in both root and `v2/`
5. **Mixed Concerns** - Components, data, and scripts intermingled
6. **No Content Separation** - Strings hardcoded in components

### Current State Score: 4/10

- ✅ Git hooks well organized
- ✅ AI tasks follow workspace rules
- ✅ Components have good sub-organization
- ❌ Root directory messy
- ❌ Scripts scattered
- ❌ Version management unclear
- ❌ No translation-ready structure

---

## Recommended Solution

### **Option 1: Mintlify-First Structure** ⭐ RECOMMENDED

**Why:**
- Strictly follows Mintlify conventions
- Simple and maintainable
- Easy to navigate
- Translation-ready
- Scalable

**Key Changes:**
```
Root: Only essentials (docs.json, package.json, README, etc.)
├── tools/          # All tooling (scripts, configs, AI rules)
├── snippets/       # Mintlify snippets (components, data, assets)
├── versions/       # Versioned docs (v1/, v2/)
├── tests/          # Single test directory
├── tasks/          # AI working directory (keep as-is)
└── public/         # Public assets
```

**Migration Time:** 3-4 weeks (incremental)

---

## Three Structure Options Compared

| Feature | Option 1: Mintlify-First | Option 2: FSD Hybrid | Option 3: Layered |
|---------|-------------------------|----------------------|-------------------|
| **Mintlify Compliance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Simplicity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Maintainability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Scalability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Migration Complexity** | Medium | High | Very High |
| **Translation Ready** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Recommendation:** Option 1 for immediate implementation

---

## Immediate Actions (Week 1)

### High Priority

1. **Create `tools/` directory**
   ```bash
   mkdir -p tools/{ai-rules,config,scripts,wiki}
   ```

2. **Move root files**
   - `AI_GUIDELINES.md` → `tools/ai-rules/`
   - `cspell.json` → `tools/config/`
   - `scripts/` → `tools/scripts/`
   - `favicon.png` → `public/`
   - `logo/` → `public/logo/`

3. **Clean up temporary files**
   - Delete `diff-report-*.txt`
   - Move `DIFF-REPORT-SUMMARY.md` → `tasks/PLAN/reports/`

4. **Consolidate styles**
   - Remove `v2/style.css`
   - Use root `style.css` only

### Medium Priority

5. **Reorganize snippets/**
   - Remove `snippets/pages/` (if not needed)
   - Move `snippets/scripts/` → `tools/scripts/`
   - Move `snippets/snippetsWiki/` → `tools/wiki/`
   - Remove deprecated `snippets/styles/themeStyles.jsx`

6. **Consolidate scripts**
   - Move all scripts to `tools/scripts/`
   - Organize by purpose (audit/, generate/, test/, verify/, fetch/)

---

## Migration Phases

### Phase 1: Root Cleanup (Week 1)
- Move root-level files
- Create tools/ structure
- Update references

### Phase 2: Snippets Cleanup (Week 2)
- Reorganize snippets/
- Remove deprecated files
- Update import paths

### Phase 3: Scripts Consolidation (Week 2)
- Consolidate all scripts
- Organize by purpose
- Update documentation

### Phase 4: Version Management (Week 3)
- Move v1/ and v2/ to versions/
- Consolidate duplicate assets
- Update docs.json

### Phase 5: Data Separation (Week 3-4)
- Create content/strings structure
- Extract hardcoded strings
- Create translation utilities

### Phase 6: Testing & Validation (Week 4)
- Run full test suite
- Verify all pages render
- Update documentation

---

## Directory Structure Quick Reference

### Recommended Structure (Option 1)

```
/
├── .github/              # GitHub configs
├── .githooks/            # Git hooks ✅
├── api/                  # API specs
├── docs/                 # Non-Mintlify docs
├── public/               # Public assets
├── snippets/             # Mintlify snippets
│   ├── assets/
│   ├── automations/
│   ├── components/
│   ├── data/
│   └── generated/
├── styles/               # Global styles
├── tools/                # All tooling
│   ├── ai-rules/
│   ├── config/
│   ├── scripts/
│   └── wiki/
├── tests/                # Single test dir
├── tasks/                # AI working dir ✅
├── versions/             # Versioned docs
│   ├── v1/
│   └── v2/
│       └── pages/
├── docs.json             # Mintlify config
├── package.json
├── README.md
└── style.css
```

---

## Rules Summary

### Directory Rules
- ✅ Root: Only essentials
- ✅ Snippets: Components, data, assets only
- ✅ Tools: All tooling in one place
- ✅ Versions: Versioned docs only
- ✅ Tests: Single test directory

### File Naming
- Components: `PascalCase.jsx`
- Data: `kebab-case.json`
- Scripts: `kebab-case.js`
- Pages: `kebab-case.mdx`

### Import Rules
- ✅ Absolute paths only: `/snippets/...`
- ❌ No component-to-component imports
- ❌ No React imports (hooks are global)
- ❌ No Mintlify imports (components are global)

### Style Rules
- ✅ CSS Custom Properties only: `var(--accent)`
- ❌ No hardcoded colors
- ❌ No ThemeData (deprecated)
- ✅ Global styles in root `style.css`
- ✅ Component styles in component files

### Data Rules
- ✅ Content separated from components
- ✅ Translation-ready structure
- ✅ JSON files for strings
- ❌ No hardcoded strings in components

---

## Success Metrics

### Before Migration
- Root files: 20+
- Script locations: 4
- Test directories: 2
- Duplicate assets: Yes
- Translation ready: No

### After Migration
- Root files: <10
- Script locations: 1
- Test directories: 1
- Duplicate assets: No
- Translation ready: Yes

---

## Next Steps

1. **Review Reports**
   - Read full audit report
   - Review repository ruleset
   - Discuss with team

2. **Approve Structure**
   - Choose structure option (recommend Option 1)
   - Approve ruleset
   - Set migration timeline

3. **Begin Migration**
   - Start Phase 1 (root cleanup)
   - Test incrementally
   - Update documentation

4. **Monitor Progress**
   - Track migration phases
   - Fix issues as they arise
   - Update ruleset as needed

---

## Questions?

Refer to:
- **[Full Audit Report](./repository-structure-audit.md)** for detailed analysis
- **[Repository Ruleset](./repository-ruleset.md)** for specific rules
- Style Guide: `versions/v2/pages/07_resources/documentation-guide/style-guide.mdx`
- Component Library: `versions/v2/pages/07_resources/documentation-guide/component-library.mdx`

---

**Report Status:** ✅ Complete  
**Ready for Review:** Yes  
**Recommended Action:** Approve Option 1 and begin Phase 1 migration
