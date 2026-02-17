# Repository Structure Audit Report
## Livepeer Documentation Repository

**Date:** 2026  
**Status:** Historical Audit Report  
**Scope:** Full repository structure, Mintlify best practices, frontend architecture

## 📖 Source of Truth

**⚠️ IMPORTANT:** The **source of truth** for repository structure is **[README.md](../../../README.md)**. This audit report is a historical document that informed the migration. For current structure rules, always refer to README.md.

---

## Executive Summary

This audit examines the current repository structure of the Livepeer documentation project, identifies organizational issues, and provides three structured options for reorganization following Mintlify best practices and modern frontend architecture principles.

### Key Findings

1. **Scattered Structure**: Files are distributed across multiple root-level directories without clear organization
2. **Mixed Concerns**: Components, scripts, styles, and data are intermingled
3. **Root Clutter**: Root directory contains too many files (scripts, configs, docs)
4. **Inconsistent Patterns**: Some files follow Mintlify conventions, others don't
5. **Missing Separation**: No clear separation between content (data/strings) and presentation (components)

---

## Current State Analysis

### Root Directory Issues

**Current Root Contents:**
```
/
├── ai/                    # AI worker API specs
├── AI_GUIDELINES.md       # Should be in tools/ai-rules/
├── CONTRIBUTING.md        # Should be in contribute/
├── cspell.json            # Should be in tools/config/
├── diff-report-*.txt      # Temporary files - should be removed
├── DIFF-REPORT-SUMMARY.md # Should be in tasks/reports/
├── Dockerfile             # ✅ Correct location
├── docs/                  # Partial docs - unclear purpose - REMOVE
├── docs.json              # ✅ Correct (Mintlify config)
├── favicon.png            # Should move to snippets/assets/ (ensure updating path of any file that uses it)
├── LICENSE                # ✅ Correct location
├── llms.txt.information.md # Should be in tools/ai-rules/
├── logo/                  # Should move to snippets/assets/logo/ (ensure updating path of any file that uses it)
├── Makefile               # ✅ Correct location
├── openapi.yaml           # Should move to api/
├── package.json           # Dev tooling (prettier for MDX formatting) - keep at root OR move to tools/config/
├── package-lock.json      # Dev tooling - keep at root OR move to tools/config/
├── README.md              # ✅ Correct location
├── scripts/               # Testing/audit/verification scripts - should be in tools/scripts/ organized by purpose
├── snippets/              # ✅ Correct (Mintlify convention) 
├── style.css              # ✅ Correct (Mintlify convention)
├── tasks/                 # ✅ Correct (AI working directory) - consider renaming to ai-tasks/
├── tests/                 # ✅ Correct location
├── v1/                    # ✅ IMMUTABLE/FROZEN version of documentation (DO NOT CHANGE, REMOVE, OR ARCHIVE)
└── v2/                    # ✅ Active version of documentation
```

**Root Directory Problems:**
- Too many configuration files (cspell.json, diff reports)
- Scripts directory at root level
- AI guidelines and rules scattered
- Temporary/report files in root
- Unclear purpose of `docs/` vs `v2/pages/`

### Snippets Directory Analysis

**Current Structure:**
```
snippets/
├── assets/          # ✅ Correct (Mintlify convention)
├── automations/     # ⚠️ Mixed: contains components AND data
├── components/      # ✅ Correct (Mintlify convention)
│   ├── content/     # ✅ Good organization
│   ├── display/     # ✅ Good organization
│   ├── domain/      # ✅ Good organization
│   ├── integrations/# ✅ Good organization
│   ├── layout/      # ✅ Good organization
│   └── primitives/  # ✅ Good organization
├── data/            # ✅ Correct (Mintlify convention)
│   ├── API/         # ⚠️ Contains OpenAPI spec files (cli-http-api.yaml) - should be moved to root api/ folder
│   ├── gateways/    # ✅ Good organization
│   ├── references/  # ✅ Good organization
│   └── variables/   # ✅ Good organization
├── docs-status-data.json # ⚠️ Should be in data/status/ or generated/
├── external/        # ✅ Correct location
├── generated/       # ✅ Correct location
├── pages/           # ✅ REQUIRED: Sub-page MDX views imported into main pages (Mintlify limitation - can only import from /snippets)
├── README.md        # ✅ Good documentation
├── scripts/         # ⚠️ Should be in tools/scripts/ or root scripts/
├── snippetsWiki/    # ⚠️ Should be in docs/ or tools/wiki/
└── styles/           # ⚠️ Contains ONLY deprecated themeStyles.jsx - Remove entire directory
```

**Snippets Directory Issues:**
- ✅ `pages/` is REQUIRED - Mintlify limitation: can only import MDX/JSX from `/snippets` folder. Sub-page MDX views must live here to be imported into main pages in `v2/pages/`
- `scripts/` should not be in snippets (Mintlify convention violation) → Move to `tools/scripts/` organized by purpose:
  - `fetch-*.sh` → `tools/scripts/fetch/` (data fetching scripts)
  - `generate-*.sh/js` → `tools/scripts/generate/` (generation scripts)
  - `generate-data/` → `tools/scripts/generate/` (data generation)
  - `test-scripts.sh` → `tools/scripts/test/` (test scripts)
  - `update-component-library.sh` → `tools/scripts/generate/` (generation/update)
- `snippetsWiki/` is documentation, not snippets
- `styles/` contains ONLY deprecated code (themeStyles.jsx) - Remove entire directory (not used, deprecated in favor of CSS Custom Properties in root style.css)
- `automations/` mixes components and data fetching logic

### Version Organization

**Current Structure:**
```
v1/                    # Active version of documentation DO NOT CHANGE THIS IN ANY WAY - IT IS V1 - FROZEN 
├── ai/
├── api-reference/
├── delegators/
├── developers/
├── gateways/
├── images/           
├── orchestrators/
├── references/
├── sdks/
└── self-hosting/

v2/                    # Active version of documentation
├── ai-tools/         # ⚠️ AI tool setup guides (Cursor, Claude, Windsurf) - should be moved to root /ai-tools/ folder (not in v2/)
├── assets/           # ⚠️ Duplicate of snippets/assets/
├── deprecated/       # ⚠️ Deprecated content (not version-specific)
├── NOTES_V2.md       # ⚠️ Should be in docs/ -> put in a notes or to-archive folder in v2. I take notes as i work. need a place for this
├── package.json      # ⚠️ Why separate package.json?
├── pages/            # ✅ Correct location
├── README.mdx        # ✅ Good documentation
├── scripts/          # ⚠️ Should be in tools/scripts/
├── style.css         # ⚠️ Duplicate of root style.css?
└── tests/            # ⚠️ Should be in root tests/
```

**Note:** v1 is immutable, unchangeable, frozen in time version of docs (DO NOT REMOVE OR ARCHIVE). v2 is the active version of the documentation. The issues below are organizational, not version confusion.

**Version Organization Issues:**
- Duplicate assets between `v2/assets/` and `snippets/assets/`
- Duplicate style.css files (root and v2/)
- Separate package.json in v2/ (unclear purpose)
- Tests scattered (root tests/ and v2/tests/)
- Scripts scattered (root scripts/, snippets/scripts/, v2/scripts/)

### Scripts Organization Issues

**Current Script Locations:**
```
/scripts/                    # Root level - 15 files
├── audit-*.js
├── test-*.js
├── verify-*.js
└── download-*.sh

/snippets/scripts/           # In snippets - 17 files
├── fetch-*.sh
├── generate-*.sh
└── generate-data/

/v2/scripts/                 # In v2 - 15 files
├── *.js
├── *.mdx
└── *.md

/.github/scripts/            # GitHub Actions helpers - 3 files
└── fetch-*.js
```

**Scripts Problems:**
- Scripts scattered across 4 different locations
- No clear categorization (testing, generation, automation)
- Some scripts are utilities, others are CI/CD helpers
- No clear documentation of what each script does

### Testing Structure Issues

**Current Structure:**
```
/tests/                 # Root level
├── config/
├── fixtures/
├── integration/
├── unit/
└── utils/

/v2/tests/              # Duplicate in v2
├── *.md
└── *.mdx
```

**Testing Problems:**
- Duplicate test directories
- Unclear what v2/tests/ contains (appears to be documentation, not tests)
- No clear test organization by type (unit, integration, e2e)

### Git Hooks & Workflows

**Current Structure:**
```
/.githooks/             # ✅ Correct location
├── install.sh
├── pre-commit
├── README.md
├── verify.sh
└── verify-browser.js

/.github/
├── workflows/          # ✅ Correct location
│   ├── *.yml          # 11 workflow files
│   └── README-test-v2-pages.md
├── scripts/            # ✅ Correct location
└── [other config files]
```

**Git Hooks Status:** ✅ Well organized

### AI Tasks & Working Directory

**Current Structure:**
```
/tasks/                 # ✅ Correct location per workspace rules
├── ABOUT/
├── CONTRIBUTING/
├── DEVELOPERS/
├── ORCHESTRATORS/
└── PLAN/
    ├── reports/        # ✅ Correct
    ├── scripts/        # ✅ Correct
    └── errors/         # ✅ Correct
```

**AI Tasks Status:** ✅ Follows workspace rules correctly

### Data & Content Separation

**Current Issues:**
- No clear separation between UI copy (strings) and component logic
- Data files mixed with components in some locations
- No translation-ready structure
- Hardcoded strings in components

**Current Data Locations:**
```
/snippets/data/         # ✅ Good start
├── API/                # OpenAPI spec files (cli-http-api.yaml) - should be moved to root api/ folder (not data)
├── gateways/
├── references/
└── variables/

/snippets/automations/  # ⚠️ Contains data fetching logic
└── scripts/           # Contains JSON data files
```

---

## Mintlify Best Practices Research

### Official Mintlify Conventions

Based on Mintlify documentation and best practices:

1. **Snippets Folder Structure:**
   ```
   snippets/
   ├── components/    # Custom React/JSX components
   ├── data/          # Data files (JSON, JSX, MDX)
   └── assets/        # Static assets (images, videos)
   ```

2. **Pages Location:**
   - All documentation pages should be in a `pages/` directory
   - Mintlify reads from `docs.json` which references page paths
   - Pages can be organized in subdirectories

3. **Configuration:**
   - `docs.json` or `mint.json` at root (navigation config)
   - `style.css` at root (global styles)
   - `package.json` at root (dependencies)

4. **Import Patterns:**
   - Absolute paths from root: `/snippets/components/...`
   - Cannot import into component files
   - JSX files cannot import other JSX files
   - React hooks are global (no imports needed)

5. **Monorepo Support:**
   - Can use `/docs` subdirectory
   - Requires proper Git configuration

### Mintlify Limitations

1. **No External CSS Imports**: Styles must be inline or in global `style.css`
2. **Component Isolation**: Components cannot import other components
3. **Absolute Paths Only**: Relative imports don't work for snippets
4. **No TypeScript**: Only JSX/MDX supported (no TSX compilation)

### Frontend Best Practices (Applied to Mintlify)

1. **Separation of Concerns:**
   - Components (presentation)
   - Data (content/strings)
   - Logic (automations/scripts)
   - Styles (CSS variables)

2. **Feature Organization:**
   - Group related components together
   - Keep data close to where it's used
   - Separate reusable vs. feature-specific code

3. **Scalability:**
   - Clear boundaries between modules
   - Easy to find and modify code
   - Translation-ready structure

---

## Three Folder Structure Options

## Recommended Structure: Mintlify-First (RECOMMENDED)

**Philosophy:** Optimize for Mintlify conventions while maintaining clean organization

```
/
├── .github/
│   ├── workflows/          # GitHub Actions
│   ├── scripts/            # CI/CD helper scripts
│   └── [config files]      # CODEOWNERS, templates, etc.
│
├── .githooks/              # Git hooks (✅ already correct)
│
├── ai-tools/               # AI tool setup guides (Cursor, Claude, Windsurf) - moved from v2/ai-tools/
│   ├── claude-code.mdx
│   ├── cursor.mdx
│   └── windsurf.mdx
│
├── api/                    # API specifications (consolidate all OpenAPI specs here)
│   ├── studio.yaml         # Main Livepeer Studio API (moved from root openapi.yaml)
│   ├── ai-worker.yaml      # AI Worker API (moved from ai/worker/api/openapi.yaml)
│   └── cli-http.yaml       # CLI HTTP API (moved from snippets/data/API/cli-http-api.yaml)
│
├── contribute/             # Contribution documentation
│   ├── CONTRIBUTING.md
│   ├── CONTRIBUTING/
│   │   ├── GIT-HOOKS.md
│   │   └── README.md
│   └── PLAN/               # Planning docs
│
# NO public/ folder - favicon.png and logo/ are in snippets/assets/
# favicon.png and logo/ are in snippets/assets/ (docs.json references: "/snippets/assets/favicon.png", "/snippets/assets/logo/...")
│
├── snippets/               # Mintlify snippets (✅ keep as-is, clean up)
│   ├── assets/             # Static assets for docs
│   ├── components/         # React/JSX components
│   │   ├── content/
│   │   ├── display/
│   │   ├── domain/
│   │   ├── integrations/
│   │   ├── layout/
│   │   └── primitives/
│   ├── data/               # Data files (used in components/pages)
│   │   ├── gateways/
│   │   ├── references/
│   │   ├── status/         # Status data (moved from docs-status-data.json)
│   │   └── variables/
│   ├── automations/        # Dynamic content components
│   │   ├── blog/
│   │   ├── discord/
│   │   ├── forum/
│   │   ├── globals/
│   │   ├── luma/
│   │   ├── showcase/
│   │   └── youtube/
│   └── generated/       # Generated content
│
├── styles/                 # Global styles
│   └── theme.css          # Renamed from style.css (clearer)
│
├── tools/                  # Development tooling
│   ├── ai-rules/          # AI context rules
│   │   ├── AI_GUIDELINES.md
│   │   ├── llms.txt.information.md
│   │   └── .cursorrules
│   ├── config/            # Tool configurations
│   │   ├── cspell.json
│   │   └── [other configs]
│   ├── scripts/           # Development scripts
│   │   ├── audit/         # Audit scripts
│   │   ├── generate/      # Generation scripts
│   │   ├── test/          # Test scripts
│   │   └── verify/        # Verification scripts
│   └── wiki/              # Internal wiki/docs
│       └── snippetsWiki/  # Moved from snippets/
│
├── tests/                 # Test suite
│   ├── config/
│   ├── fixtures/
│   ├── integration/
│   ├── unit/
│   └── utils/
│
├── tasks/                 # AI working directory (✅ keep as-is)
│   ├── plan/              # Planning documents & specifications
│   ├── reports/           # Task outputs & audit reports
│   ├── scripts/           # Task scripts
│   ├── errors/            # Error documentation
│   └── context_data/      # Context data and research materials
│       ├── ABOUT/         # About section context data
│       ├── DEVELOPERS/     # Developers section context data
│       └── ORCHESTRATORS/  # Orchestrators section context data
│
├── versions/              # Versioned documentation
│   ├── v1/                # IMMUTABLE/FROZEN version (DO NOT CHANGE, REMOVE, OR ARCHIVE)
│   │   └── pages/
│   └── v2/                # Active version of documentation
│       └── pages/         # All v2 documentation pages
│
├── docs.json              # Mintlify navigation config
├── Dockerfile
├── LICENSE
├── Makefile
├── package.json           # Root package.json only
├── README.md
└── style.css              # Mintlify global styles (or symlink to styles/theme.css)
```

**Pros:**
- ✅ Follows Mintlify conventions strictly
- ✅ Clear separation of concerns
- ✅ Easy to find files
- ✅ Scalable structure
- ✅ Translation-ready (data separated)

**Cons:**
- ⚠️ Requires moving many files
- ⚠️ Need to update import paths
- ⚠️ May break during migration -> THEN DO IT CAREFULLY pfft

**Migration Path:**
1. Create new directory structure
2. Move files incrementally
3. Update import paths
4. Update docs.json references
5. Test each section

---

## Recommendations

### Recommended Structure: **Mintlify-First Structure**

**Rationale:**
1. **Mintlify Compliance**: Strictly follows Mintlify conventions
2. **Simplicity**: Easy to understand and navigate
3. **Maintainability**: Clear file locations
4. **Scalability**: Can grow without restructuring
5. **Translation Ready**: Data separated from components

### Key Changes Required

#### 1. Root Directory Cleanup
- Move `AI_GUIDELINES.md` → `tools/ai-rules/`
- Move `cspell.json` → `tools/config/`
- Move `diff-report-*.txt` → Delete (temporary files)
- Move `DIFF-REPORT-SUMMARY.md` → `tasks/reports/`
- Move `llms.txt.information.md` → `tools/ai-rules/`
- **DO NOT MOVE** `favicon.png` - MUST stay in `snippets/assets/` (docs.json: `"favicon": "/snippets/assets/favicon.png"`)
- **DO NOT MOVE** `logo/` - MUST stay in `snippets/assets/logo/` (docs.json: `"logo": { "light": "/snippets/assets/logo/light.svg" }`)
- If files are in `public/`, move them BACK to root
- Move `v2/ai-tools/` → `ai-tools/` (root level folder)
- Move `openapi.yaml` → `api/studio.yaml` (or keep as `api/openapi.yaml`)
- Move `ai/worker/api/openapi.yaml` → `api/ai-worker.yaml`
- Move `snippets/data/API/cli-http-api.yaml` → `api/cli-http.yaml`
- Move `scripts/` → `tools/scripts/` (testing/audit/verification scripts - organize by purpose)
- Move `CONTRIBUTING.md` → `contribute/CONTRIBUTING.md`
- Create `contribute/` directory for contribution documentation
- Consider renaming `tasks/` → `ai-tasks/` for clarity
- `package.json`/`package-lock.json`: Dev tooling (prettier for MDX formatting) - keep at root OR move to `tools/config/`

#### 2. Snippets Directory Cleanup
- **KEEP `snippets/pages/`** - Required for MDX-in-MDX pattern (Mintlify limitation: can only import from /snippets)
- Move `snippets/scripts/` → `tools/scripts/`
- Move `snippets/snippetsWiki/` → `tools/wiki/`
- Remove `snippets/styles/` directory entirely (contains only deprecated themeStyles.jsx, not used anywhere)
- Move `snippets/docs-status-data.json` → `snippets/data/status/`
- Move `snippets/data/API/cli-http-api.yaml` → `api/cli-http.yaml` (OpenAPI specs belong in root `api/` folder, not in `snippets/data/`)

#### 3. Version Organization
- Move `v2/ai-tools/` → `ai-tools/` (root level, not in v2/)
- Consolidate `v2/assets/` into `snippets/assets/`
- Remove `v2/style.css` (use root `style.css`)
- Remove `v2/package.json` (use root `package.json`)
- Move `v2/scripts/` → `tools/scripts/`
- Move `v2/tests/` → `tests/` (if they're actual tests) or delete
- Rename `v1/` and `v2/` → `versions/v1/` and `versions/v2/` (v1 is IMMUTABLE/FROZEN - DO NOT MODIFY; v2 is active; this is just organizational)

#### 4. Scripts Consolidation
- Consolidate all scripts into `tools/scripts/`
- Organize by purpose:
  - `tools/scripts/audit/` - Audit scripts
  - `tools/scripts/generate/` - Generation scripts
  - `tools/scripts/test/` - Test scripts
  - `tools/scripts/verify/` - Verification scripts
  - `tools/scripts/fetch/` - Data fetching scripts

#### 5. Data & Content Separation
- Create `snippets/data/content/` for UI strings
- Structure for translation:
  ```
  snippets/data/content/
  ├── en/
  │   ├── common.json
  │   ├── gateways.json
  │   └── [feature].json
  └── [other languages]
  ```
- Extract hardcoded strings from components
- Create data access utilities

#### 6. Testing Consolidation
- Keep only root `tests/` directory
- Remove `v2/tests/` (appears to be documentation, not tests)
- Organize tests by type (unit, integration, e2e)

### Migration Strategy

**Phase 1: Preparation (Week 1)**
1. Create new directory structure
2. Document all import paths that need updating
3. Create migration script to update paths
4. Set up branch for migration

**Phase 2: Root Cleanup (Week 1)**
1. Move root-level files to appropriate locations
2. Update references in docs.json, README, etc.
3. Test that Mintlify still works

**Phase 3: Snippets Cleanup (Week 2)**
1. Remove deprecated files
2. Reorganize snippets/ directory
3. Update component import paths
4. Test all pages render correctly

**Phase 4: Scripts Consolidation (Week 2)**
1. Move all scripts to tools/scripts/
2. Organize by purpose
3. Update any scripts that reference paths
4. Update documentation

**Phase 5: Version Organization (Week 3)**
1. Move v1/ and v2/ to versions/ (v1 is IMMUTABLE/FROZEN - DO NOT MODIFY; v2 is active; this is organizational)
2. Consolidate duplicate assets/styles (v1/ remains untouched)
3. Update docs.json paths
4. Test version switching

**Phase 6: Data Separation (Week 3-4)**
1. Create content/strings structure
2. Extract hardcoded strings from components
3. Create data access utilities
4. Update components to use data files

**Phase 7: Testing & Validation (Week 4)**
1. Run full test suite
2. Verify all pages render
3. Check all links work
4. Validate import paths
5. Update documentation

---

## Repository Ruleset

### Directory Structure Rules

1. **Root Directory**: Only essential files
   - ✅ `docs.json` (Mintlify config)
   - ✅ `package.json` (dependencies)
   - ✅ `README.md` (project documentation)
   - ✅ `LICENSE`
   - ✅ `Dockerfile`, `Makefile` (build/deploy)
   - ✅ `style.css` (Mintlify global styles)
   - ❌ No scripts, configs, or temporary files

2. **Snippets Directory**: Mintlify convention
   - ✅ `snippets/components/` - React/JSX components only
   - ✅ `snippets/data/` - Data files only
   - ✅ `snippets/assets/` - Static assets only
   - ✅ `snippets/automations/` - Dynamic content components
   - ✅ `snippets/generated/` - Generated content
   - ❌ No scripts, wiki, or pages

3. **Tools Directory**: All development tooling
   - ✅ `tools/ai-rules/` - AI context rules
   - ✅ `tools/config/` - Tool configurations
   - ✅ `tools/scripts/` - Development scripts
   - ✅ `tools/wiki/` - Internal documentation

4. **Versions Directory**: Versioned documentation
   - ✅ `versions/v1/` - IMMUTABLE/FROZEN version (DO NOT CHANGE, REMOVE, OR ARCHIVE)
   - ✅ `versions/v2/pages/` - Active version of documentation
   - ❌ No scripts, assets, or styles in version dirs
   - ⚠️ **CRITICAL**: v1/ is frozen - never modify, remove, or archive it

5. **Tests Directory**: All testing
   - ✅ `tests/` - Single test directory at root
   - ✅ Organized by type (unit, integration, e2e)
   - ❌ No duplicate test directories

### File Naming Conventions

1. **Components**: PascalCase (e.g., `UserCard.jsx`)
2. **Data Files**: kebab-case (e.g., `gateway-data.json`)
3. **Scripts**: kebab-case (e.g., `generate-api-docs.sh`)
4. **Pages**: kebab-case (e.g., `quickstart-guide.mdx`)
5. **Config Files**: kebab-case or standard names (e.g., `cspell.json`)

### Import Path Rules

1. **Absolute Paths Only**: All snippets imports must use absolute paths
   - ✅ `/snippets/components/...`
   - ❌ `../components/...` or `./components/...`

2. **No Component Imports**: Components cannot import other components
   - ✅ Import from `/snippets/data/...`
   - ❌ Import from `/snippets/components/...`

3. **No React Imports**: React hooks are global
   - ✅ Use hooks directly: `useState()`
   - ❌ `import { useState } from 'react'`

### Style Rules

1. **CSS Custom Properties Only**: Use CSS variables for theming
   - ✅ `var(--accent)`, `var(--text)`, etc.
   - ❌ Hardcoded colors, ThemeData objects

2. **Global Styles**: Only in `style.css` at root
   - ✅ Theme variables, framework overrides
   - ❌ Component-specific styles

3. **Component Styles**: Inline or in component file
   - ✅ `<style>` tags in JSX
   - ✅ Inline style objects
   - ❌ External CSS files

### Data & Content Rules

1. **Separation**: Content separate from components
   - ✅ Strings in `snippets/data/content/`
   - ✅ Components reference data files
   - ❌ Hardcoded strings in components

2. **Translation Ready**: Structure for i18n
   - ✅ Language folders: `en/`, `es/`, etc.
   - ✅ JSON files for strings
   - ✅ Data access utilities

### Script Organization Rules

1. **Single Location**: All scripts in `tools/scripts/`
2. **Categorization**: Organize by purpose
   - `audit/` - Audit scripts
   - `generate/` - Generation scripts
   - `test/` - Test scripts
   - `verify/` - Verification scripts
   - `fetch/` - Data fetching scripts

3. **Documentation**: Each script category has README

### Git Workflow Rules

1. **Hooks Required**: Pre-commit hook must be installed
2. **Style Checks**: Hook enforces style guide
3. **No --no-verify**: Never skip hooks
4. **Branch Naming**: `docs/feature-name` or `fix/issue-name`

### AI Tasks Rules

1. **Location**: All AI tasks in `tasks/` directory
2. **Structure**: Organized by purpose
   - `tasks/plan/` - Planning documents & task specifications
   - `tasks/reports/` - Task outputs & audit reports (not planning!)
   - `tasks/scripts/` - Task execution scripts
   - `tasks/errors/` - Error documentation & troubleshooting

---

## Implementation Checklist

### Immediate Actions (High Priority)

- [ ] Create `tools/` directory structure
- [ ] Move root-level config files to `tools/config/`
- [ ] Move root-level scripts to `tools/scripts/`
- [ ] Move AI guidelines to `tools/ai-rules/`
- [ ] Remove temporary files (diff-report-*.txt)
- [ ] Consolidate duplicate style.css files
- [ ] Remove `snippets/styles/` directory entirely (only contains deprecated themeStyles.jsx)

### Short-term Actions (Medium Priority)

- [ ] Reorganize snippets/ directory
- [ ] KEEP snippets/pages/ - Required for MDX-in-MDX pattern (Mintlify limitation)
- [ ] Move snippets/scripts/ to tools/scripts/
- [ ] Consolidate scripts from all locations
- [ ] Organize scripts by purpose
- [ ] Update import paths in components
- [ ] Update docs.json if paths change

### Long-term Actions (Lower Priority)

- [ ] Move v1/ and v2/ to versions/ (v1/ is IMMUTABLE/FROZEN - DO NOT MODIFY)
- [ ] Consolidate duplicate assets
- [ ] Create data/content/ structure for strings
- [ ] Extract hardcoded strings from components
- [ ] Create translation utilities
- [ ] Update all documentation

### Documentation Updates

- [ ] Update README.md with new structure
- [ ] Update style guide with new paths
- [ ] Update component library with new paths
- [ ] Create migration guide
- [ ] Update contribution guide
- [ ] Update AI guidelines

---

## Conclusion

The repository structure needs significant reorganization to follow Mintlify best practices and modern frontend architecture principles. The **Mintlify-First Structure** provides the best balance of Mintlify compliance, simplicity, and maintainability.

The migration should be done incrementally, testing at each phase to ensure nothing breaks. The new structure will make the repository easier to navigate, maintain, and scale.

**Next Steps:**
1. Review this audit with the team
2. Create detailed migration plan
3. Begin Phase 1 implementation
4. Update documentation as you go

---

**Report Generated:** 2026  
**Author:** AI Assistant  
**Status:** Ready for Review
