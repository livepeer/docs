# Repository Structure Migration Plan

**Date:** 2026  
**Status:** Planning Phase  
**Target Structure:** Mintlify-First Architecture

---

## Table of Contents

1. [New Structure Overview](#1-new-structure-overview)
2. [Enforcement Mechanisms](#2-enforcement-mechanisms)
3. [Migration Strategy](#3-migration-strategy)
4. [Detailed Section Guidance](#4-detailed-section-guidance)
5. [Detailed Task List](#5-detailed-task-list)

---

## 1. New Structure Overview

### Complete Directory Structure

```
/
├── .github/                 # GitHub configuration
│   ├── workflows/          # GitHub Actions workflows
│   ├── scripts/            # CI/CD helper scripts
│   └── [config files]     # GitHub-specific configs
│
├── .githooks/              # Git hooks
│   ├── install.sh          # Hook installation script
│   ├── pre-commit          # Pre-commit hook
│   ├── verify.sh           # Verification script
│   └── verify-browser.js   # Browser verification
│
├── ai-tools/               # AI tool setup guides (root level)
│   ├── claude-code.mdx
│   ├── cursor.mdx
│   └── windsurf.mdx
│
├── api/                    # API specifications (consolidated)
│   ├── studio.yaml         # Main Livepeer Studio API
│   ├── ai-worker.yaml      # AI Worker API
│   └── cli-http.yaml       # CLI HTTP API
│
├── contribute/             # Contribution documentation
│   ├── CONTRIBUTING.md
│   ├── CONTRIBUTING/
│   │   ├── GIT-HOOKS.md
│   │   └── README.md
│   └── PLAN/               # Planning docs (if needed)
│
├── snippets/               # Mintlify snippets (MUST follow Mintlify conventions)
│   ├── assets/             # Static assets for docs (includes favicon.png and logo/)
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
│   │   ├── status/
│   │   └── variables/
│   ├── automations/        # Dynamic content components
│   │   ├── blog/
│   │   ├── discord/
│   │   ├── forum/
│   │   ├── globals/
│   │   ├── luma/
│   │   ├── showcase/
│   │   └── youtube/
│   ├── generated/          # Generated content
│   └── pages/              # REQUIRED: MDX sub-views (Mintlify limitation)
│
├── styles/                 # Global styles
│   └── theme.css           # Renamed from style.css (clearer)
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
│   │   ├── verify/        # Verification scripts
│   │   └── fetch/         # Data fetching scripts
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
├── tasks/                 # AI working directory
│   ├── plan/              # Planning documents & task specifications
│   ├── reports/           # Task outputs & audit reports
│   ├── scripts/           # Task execution scripts
│   └── errors/            # Error documentation & troubleshooting
│
├── docs/                  # Versioned documentation
│   ├── v1/                # IMMUTABLE/FROZEN (DO NOT CHANGE, REMOVE, OR ARCHIVE)
│   │   └── pages/
│   └── v2/                # Active version (initial structure - temporary)
│       └── pages/         # Will be flattened to docs/pages/ in stretch goal (Phase 10)
│
├── docs.json              # Mintlify navigation config
├── Dockerfile
├── LICENSE
├── Makefile
├── tools/package.json     # Development tooling dependencies and scripts
├── README.md
└── style.css              # Mintlify global styles (or symlink to styles/theme.css)
```

### Key Principles

1. **Root Directory**: Only essential files (configs, build files, README)
2. **Snippets**: Strictly Mintlify-compliant (components, data, assets, automations, pages)
3. **Tools**: All development tooling consolidated
4. **Docs**: Clear separation of v1 (frozen) and current active documentation (initially `docs/v2/pages/`, stretch goal: `docs/pages/`)
5. **Tasks**: Organized by purpose (plan, reports, scripts, errors)

---

## 2. Enforcement Mechanisms

### 2.1 Git Pre-Commit Hook

**Location:** `.githooks/pre-commit`

**Enforcement Rules:**

1. **Root Directory Protection**
   - ❌ Block new files in root (except: `docs.json`, `package.json`, `README.md`, `LICENSE`, `Dockerfile`, `Makefile`, `style.css`)
   - ✅ Allow updates to existing root files
   - ❌ Block: `*.md`, `*.json`, `*.yaml`, `*.js`, `*.sh` in root (unless whitelisted)

2. **Snippets Directory Protection**
   - ❌ Block scripts in `snippets/` (must be in `tools/scripts/`)
   - ❌ Block wiki/docs in `snippets/` (must be in `tools/wiki/`)
   - ✅ Allow: `components/`, `data/`, `assets/`, `automations/`, `generated/`, `pages/`
   - ❌ Block `snippets/styles/` (deprecated, use root `style.css`)

3. **Documentation Directory Protection**
   - ❌ Block any changes to `docs/v1/` (frozen)
   - ❌ Block scripts, assets, styles in `docs/v2/` or `docs/pages/` (must be in root-level folders)
   - ✅ Allow only `docs/v2/pages/` or `docs/pages/` content (depending on structure - initial vs stretch goal)

4. **Style Guide Enforcement**
   - ❌ Block `ThemeData` imports
   - ❌ Block hardcoded colors (must use CSS Custom Properties)
   - ✅ Enforce CSS Custom Properties: `var(--accent)`, `var(--text)`, etc.

5. **Import Path Enforcement**
   - ❌ Block relative imports in snippets (`../components/`, `./components/`)
   - ✅ Require absolute paths: `/snippets/components/...`
   - ❌ Block component-to-component imports

**Implementation:**

```bash
#!/bin/bash
# .githooks/pre-commit

# Check for new root files
NEW_ROOT_FILES=$(git diff --cached --name-only --diff-filter=A | grep -E '^[^/]+$' | grep -vE '^(docs\.json|package\.json|README\.md|LICENSE|Dockerfile|Makefile|style\.css)$')

if [ ! -z "$NEW_ROOT_FILES" ]; then
    echo "❌ ERROR: New files in root directory are not allowed:"
    echo "$NEW_ROOT_FILES"
    echo "Move these files to appropriate directories."
    exit 1
fi

# Check for scripts in snippets/
SNIPPETS_SCRIPTS=$(git diff --cached --name-only | grep '^snippets/scripts/')
if [ ! -z "$SNIPPETS_SCRIPTS" ]; then
    echo "❌ ERROR: Scripts cannot be in snippets/. Move to tools/scripts/"
    exit 1
fi

# Check for changes to v1/
V1_CHANGES=$(git diff --cached --name-only | grep '^docs/v1/')
if [ ! -z "$V1_CHANGES" ]; then
    echo "❌ ERROR: docs/v1/ is FROZEN. No changes allowed."
    exit 1
fi

# Check for ThemeData usage
THEMEDATA_USAGE=$(git diff --cached | grep -i 'ThemeData\|themeStyles')
if [ ! -z "$THEMEDATA_USAGE" ]; then
    echo "❌ ERROR: ThemeData is deprecated. Use CSS Custom Properties instead."
    exit 1
fi

exit 0
```

### 2.2 CI/CD Validation

**GitHub Actions Workflow:** `.github/workflows/structure-validation.yml`

**Checks:**

1. **Directory Structure Validation**
   - Verify no unauthorized root files
   - Verify snippets/ follows Mintlify conventions
   - Verify v1/ is unchanged

2. **Style Guide Validation**
   - Scan for `ThemeData` usage
   - Scan for hardcoded colors
   - Verify CSS Custom Properties usage

3. **Import Path Validation**
   - Verify absolute paths in snippets
   - Verify no component-to-component imports

### 2.3 Documentation Rules

**Location:** `contribute/STRUCTURE.md`

- Document all directory purposes
- Document file placement rules
- Document enforcement mechanisms
- Include examples of correct/incorrect usage

### 2.4 Linter Rules

**ESLint/Prettier Configuration:**

- Custom rules for import paths
- Custom rules for file locations
- Integration with pre-commit hook

---

## 3. Migration Strategy

### 3.1 Migration Principles

1. **Incremental**: Move files in small batches
2. **Tested**: Verify after each batch
3. **Reversible**: Keep migration branch for easy rollback
4. **Documented**: Update paths as we go

### 3.2 Migration Order (Priority)

**Phase 1: Foundation (Week 1)**
- Create new directory structure
- Set up enforcement mechanisms
- Move non-critical files first

**Phase 2: Root Cleanup (Week 1)**
- Move root-level files
- Update references
- Test Mintlify still works

**Phase 3: Snippets Cleanup (Week 2)**
- Remove deprecated files
- Reorganize snippets/
- Update component imports

**Phase 4: Scripts Consolidation (Week 2)**
- Move all scripts to tools/scripts/
- Organize by purpose
- Update script references

**Phase 5: Version Organization (Week 3)**
- Move v1/ and v2/ to docs/
- Consolidate duplicate assets
- Update docs.json paths

**Phase 6: Data Separation (Week 3-4)**
- Create content/strings structure
- Extract hardcoded strings
- Update components

**Phase 7: Validation (Week 4)**
- Full test suite
- Verify all pages render
- Update documentation

### 3.3 Starting Point

**Begin with:** Root directory cleanup

**Why:**
- Lowest risk (doesn't affect Mintlify rendering)
- Clear boundaries
- Easy to test
- Sets foundation for other moves

**First Actions:**
1. Create `tools/` directory structure
2. Move `AI_GUIDELINES.md` → `tools/ai-rules/`
3. Move `cspell.json` → `tools/config/`
4. Test that nothing breaks
5. Commit and verify

### 3.4 Testing Strategy

**After Each Phase:**
1. Run `npm run build` (if applicable)
2. Test Mintlify locally
3. Verify all pages render
4. Check import paths
5. Run test suite

**Rollback Plan:**
- Keep migration branch separate
- Tag each phase completion
- Document any issues encountered

---

## 4. Detailed Section Guidance

### 4.1 Root Directory (`/`)

**Purpose:** Only essential project files

**Allowed Files:**
- `docs.json` - Mintlify navigation configuration
- `tools/package.json` - Development tooling dependencies and scripts
- `package-lock.json` - Lock file
- `README.md` - Project documentation
- `LICENSE` - License file
- `Dockerfile` - Docker build configuration
- `Makefile` - Build automation
- `style.css` - Mintlify global styles (or symlink to `styles/theme.css`)
- `.gitignore` - Git ignore rules
- `.mintignore` - Mintlify ignore rules

**Forbidden:**
- ❌ Scripts (→ `tools/scripts/`)
- ❌ Most config files (→ `tools/config/`), **EXCEPT**:
  - ✅ `.prettierrc.yaml` → **ROOT** (Prettier convention)
- ❌ Documentation files (→ `contribute/` or `docs/`)
- ❌ Temporary files
- ❌ OpenAPI specs (→ `api/`)

**Examples:**
```
✅ docs.json
✅ package.json
❌ my-script.js
❌ config.json
❌ CONTRIBUTING.md (→ contribute/)
```

---

### 4.2 AI Tools (`/ai-tools/`)

**Purpose:** AI tool setup guides for contributors

**Contents:**
- `claude-code.mdx` - Claude Code setup guide
- `cursor.mdx` - Cursor setup guide
- `windsurf.mdx` - Windsurf setup guide

**Rules:**
- Root level (not in `docs/`)
- MDX format
- Public-facing documentation

**Migration:**
- Move from `v2/ai-tools/` → `ai-tools/`
- Update any references in docs.json

---

### 4.3 API Specifications (`/api/`)

**Purpose:** Consolidated OpenAPI specification files

**Contents:**
- `studio.yaml` - Main Livepeer Studio API (from root `openapi.yaml`)
- `ai-worker.yaml` - AI Worker API (from `ai/worker/api/openapi.yaml`)
- `cli-http.yaml` - CLI HTTP API (from `snippets/data/API/cli-http-api.yaml`)

**Rules:**
- All OpenAPI specs in one place
- Not in `snippets/data/` (not runtime data)
- Clear naming convention

**Migration:**
1. Create `api/` directory
2. Move and rename files
3. Update any scripts that reference these files
4. Update documentation

---

### 4.4 Contribution Documentation (`/contribute/`)

**Purpose:** Project contribution guidelines and documentation

**Contents:**
- `CONTRIBUTING.md` - Main contribution guide
- `CONTRIBUTING/` - Contribution sub-docs
  - `GIT-HOOKS.md` - Git hooks documentation
  - `README.md` - Contribution README
- `PLAN/` - Planning documents (if needed)

**Rules:**
- All contribution-related docs here
- Not in root directory
- Clear, obvious name

**Migration:**
- Move `CONTRIBUTING.md` → `contribute/CONTRIBUTING.md`
- Move `tasks/CONTRIBUTING/` → `contribute/CONTRIBUTING/` (if applicable)

---

### 4.5 Public Assets (`/snippets/assets/`)

**Purpose:** Static public assets served by Mintlify (favicon and logo)

**Contents:**
- `favicon.png` - Site favicon (in `snippets/assets/`)
- `logo/` - Logo assets (in `snippets/assets/logo/`)

**Rules:**
- Public-facing assets are in `snippets/assets/`
- Referenced in `docs.json` as `/snippets/assets/favicon.png` and `/snippets/assets/logo/`
- **NOT at root** - they belong in `snippets/assets/`

**Migration:**
- Keep `favicon.png` in `snippets/assets/`
- Keep `logo/` in `snippets/assets/logo/`
- Update `docs.json` references if needed

---

### 4.6 Snippets (`/snippets/`)

**Purpose:** Mintlify snippets (MUST follow Mintlify conventions)

**Structure:**
```
snippets/
├── assets/          # Static assets for docs content
├── components/      # React/JSX components
├── data/           # Data files (JSON, etc.)
├── automations/    # Dynamic content components
├── generated/      # Generated content
└── pages/          # REQUIRED: MDX sub-views
```

**Rules:**
- ✅ **MUST HAVE** `pages/` - Required for MDX-in-MDX pattern
- ❌ **NO** scripts (→ `tools/scripts/`)
- ❌ **NO** wiki/docs (→ `tools/wiki/`)
- ❌ **NO** styles (→ root `style.css`)
- ✅ Components can only import from `/snippets/data/`
- ✅ All imports must be absolute paths

**Components (`snippets/components/`):**
- Organized by type: `content/`, `display/`, `domain/`, `integrations/`, `layout/`, `primitives/`
- PascalCase naming: `UserCard.jsx`
- Cannot import other components
- Can import from `/snippets/data/`

**Data (`snippets/data/`):**
- JSON files, YAML files (not OpenAPI specs)
- Organized by domain: `gateways/`, `references/`, `status/`, `variables/`
- kebab-case naming: `gateway-data.json`

**Pages (`snippets/pages/`):**
- **REQUIRED** for MDX-in-MDX pattern
- Mintlify limitation: can only import from `/snippets`
- Sub-views imported into main pages in `docs/v2/pages/` (or `docs/pages/` after stretch goal)

**Migration:**
1. **KEEP** `snippets/pages/` - Do not remove!
2. Move `snippets/scripts/` → `tools/scripts/`
3. Move `snippets/snippetsWiki/` → `tools/wiki/`
4. Remove `snippets/styles/` (deprecated)
5. Move `snippets/docs-status-data.json` → `snippets/data/status/`
6. Move `snippets/data/API/` → `api/` (OpenAPI specs)

---

### 4.7 Styles (`/styles/`)

**Purpose:** Global styles and theme

**Contents:**
- `theme.css` - Global theme CSS (renamed from `style.css`)

**Rules:**
- CSS Custom Properties only
- No hardcoded colors
- No ThemeData objects
- Root `style.css` can be symlink to `styles/theme.css`

**Migration:**
- Rename `style.css` → `styles/theme.css`
- Create symlink: `style.css` → `styles/theme.css` (or keep at root)
- Remove `snippets/styles/` (deprecated)

---

### 4.8 Tools (`/tools/`)

**Purpose:** All development tooling

**Structure:**
```
tools/
├── ai-rules/       # AI context rules
├── config/         # Tool configurations
├── scripts/        # Development scripts
└── wiki/           # Internal wiki/docs
```

**AI Rules (`tools/ai-rules/`):**
- `AI_GUIDELINES.md` - AI guidelines
- `llms.txt.information.md` - LLM information
- `.cursorrules` - Cursor rules

**Config (`tools/config/`):**
- `cspell.json` - Spell checker config
- `.speakeasy/` - Speakeasy API docs tool config
- Other tool configs
- **EXCEPT** (must be in ROOT per tool conventions):
  - `.prettierrc.yaml` → **ROOT** (Prettier convention)

**Scripts (`tools/scripts/`):**
- Organized by purpose:
  - `audit/` - Audit scripts
  - `generate/` - Generation scripts
  - `test/` - Test scripts
  - `verify/` - Verification scripts
  - `fetch/` - Data fetching scripts

**Wiki (`tools/wiki/`):**
- Internal documentation
- `snippetsWiki/` - Moved from `snippets/`

**Migration:**
1. Create `tools/` structure
2. Move root configs → `tools/config/` **EXCEPT**:
   - Keep `.prettierrc.yaml` in ROOT (Prettier convention)
   - Move `.speakeasy/` → `tools/config/.speakeasy/` (config file, can be moved)
3. Move all scripts → `tools/scripts/` (from root, snippets, v2)
4. Move AI guidelines → `tools/ai-rules/`
5. Move wiki → `tools/wiki/`

---

### 4.9 Tests (`/tests/`)

**Purpose:** Test suite

**Structure:**
```
tests/
├── config/        # Test configuration
├── fixtures/      # Test fixtures
├── integration/   # Integration tests
├── unit/          # Unit tests
└── utils/         # Test utilities
```

**Rules:**
- Single test directory at root
- Organized by type
- No duplicate test directories

**Migration:**
- Keep root `tests/` (already correct)
- Remove `v2/tests/` (if it's documentation, not tests)
- Consolidate any scattered test files

---

### 4.10 Tasks (`/tasks/`)

**Purpose:** AI working directory

**Structure:**
```
tasks/
├── plan/          # Planning documents & task specifications
├── reports/       # Task outputs & audit reports
├── scripts/      # Task execution scripts
├── errors/       # Error documentation & troubleshooting
└── context_data/ # Context data and research materials
    ├── ABOUT/     # About section context data
    ├── DEVELOPERS/ # Developers section context data
    └── ORCHESTRATORS/ # Orchestrators section context data
```

**Rules:**
- `plan/` - Planning (not outputs!)
- `reports/` - Outputs (not planning!)
- `context_data/` - Research materials and context data for section planning
- Clear separation of concerns

**Migration:**
- Reorganize `tasks/PLAN/` structure:
  - Planning docs → `tasks/plan/`
  - Reports → `tasks/reports/`
  - Scripts → `tasks/scripts/`
  - Errors → `tasks/errors/`
- Context data folders (ABOUT, DEVELOPERS, ORCHESTRATORS) → `tasks/context_data/`

---

### 4.11 Documentation (`/docs/`)

**Purpose:** Versioned documentation

**Structure (Initial - Required):**
```
docs/
├── v1/            # IMMUTABLE/FROZEN
│   └── pages/
└── v2/             # Active version (temporary structure)
    └── pages/
```

**Structure (Stretch Goal - Final, OPTIONAL):**
```
docs/
├── v1/            # IMMUTABLE/FROZEN
│   └── pages/
└── pages/         # Current active version (flattened from v2/)
```

**Rules:**
- **v1/ is FROZEN** - Never modify, remove, or archive
- Initially: `docs/v2/pages/` (temporary structure - works fine)
- Stretch goal: `docs/pages/` (flattened to avoid `/v2/` in URLs)
- Only `pages/` in version directories
- No scripts, assets, or styles in version dirs
- **Note:** Using `docs/pages/` instead of `docs/v2/pages/` avoids Mintlify creating `/v2/` in URLs, but this is OPTIONAL and can be done later

**Migration (Initial):**
1. Create `docs/` directory
2. Move `v1/` → `docs/v1/` (DO NOT MODIFY CONTENTS)
3. Move `v2/pages/` → `docs/v2/pages/` (temporary - see stretch goal below)
4. Move `v2/assets/` → `snippets/assets/` (consolidate)
5. Remove `v2/style.css` (use root)
6. Remove `v2/package.json` (use tools/package.json)
7. Move `v2/scripts/` → `tools/scripts/`
8. Update `docs.json` paths

**Migration (Stretch Goal - NOT REQUIRED IMMEDIATELY):**
- **This is optional and can be done later**
- Move `docs/v2/pages/` → `docs/pages/` (flatten structure)
- Update `docs.json` paths to remove `/v2/` from URLs
- Test that all URLs work correctly
- **Reason:** Mintlify uses directory name in URL, so `docs/v2/pages/` creates `/v2/` in URLs, but we want current docs at root level

---

## 5. Detailed Task List

### Phase 1: Foundation Setup

#### Task 1.1: Create Directory Structure
- [ ] Create `tools/` directory
  - [ ] Create `tools/ai-rules/`
  - [ ] Create `tools/config/`
  - [ ] Create `tools/scripts/` with subdirectories:
    - [ ] `tools/scripts/audit/`
    - [ ] `tools/scripts/generate/`
    - [ ] `tools/scripts/test/`
    - [ ] `tools/scripts/verify/`
    - [ ] `tools/scripts/fetch/`
  - [ ] Create `tools/wiki/`
- [ ] Create `api/` directory
- [ ] Create `contribute/` directory
- [ ] Create `public/` directory
- [ ] Create `styles/` directory
- [ ] Create `docs/` directory
- [ ] Create `tasks/plan/` directory
- [ ] Create `tasks/reports/` directory
- [ ] Create `tasks/scripts/` directory
- [ ] Create `tasks/errors/` directory
- [ ] Create `ai-tools/` directory

**Estimated Time:** 30 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

#### Task 1.2: Set Up Enforcement Mechanisms
- [ ] Update `.githooks/pre-commit` with structure validation
  - [ ] Add root directory protection
  - [ ] Add snippets directory protection
  - [ ] Add version directory protection (v1 frozen)
  - [ ] Add style guide enforcement
  - [ ] Add import path enforcement
- [ ] Create `.github/workflows/structure-validation.yml`
  - [ ] Add directory structure checks
  - [ ] Add style guide validation
  - [ ] Add import path validation
- [ ] Test pre-commit hook locally
- [ ] Document enforcement rules in `contribute/STRUCTURE.md`

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

### Phase 2: Root Directory Cleanup

#### Task 2.1: Move AI Guidelines
- [ ] Move `AI_GUIDELINES.md` → `tools/ai-rules/AI_GUIDELINES.md`
- [ ] Move `llms.txt.information.md` → `tools/ai-rules/llms.txt.information.md`
- [ ] Move `.cursorrules` → `tools/ai-rules/.cursorrules` (if not already there)
- [ ] Update any references to these files
- [ ] Test that nothing breaks
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 2.2: Move Config Files
- [ ] Move `cspell.json` → `tools/config/cspell.json`
- [ ] **Keep `.prettierrc.yaml` in ROOT** (Prettier convention)
- [ ] **Move `.speakeasy/` → `tools/config/.speakeasy/`** (config file, can be moved)
- [ ] Update any scripts that reference `cspell.json`
- [ ] Test spell checking still works
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 2.3: Move Contribution Docs
- [ ] Move `CONTRIBUTING.md` → `contribute/CONTRIBUTING.md`
- [ ] Update any references in README.md
- [ ] Update any links in documentation
- [ ] Test that links still work
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 2.4: Verify Public Assets Location
- [ ] **Keep** `favicon.png` in `snippets/assets/` (NOT at root)
- [ ] **Keep** `logo/` in `snippets/assets/logo/` (NOT at root)
- [ ] Verify `docs.json` references are correct (`/snippets/assets/favicon.png` and `/snippets/assets/logo/`)
- [ ] Test that assets still load
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 2.5: Move AI Tools
- [ ] Move `v2/ai-tools/` → `ai-tools/`
- [ ] Update `docs.json` if needed
- [ ] Update any references
- [ ] Test that pages still render
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 2.6: Consolidate OpenAPI Specs
- [ ] Move `openapi.yaml` → `api/studio.yaml`
- [ ] Move `ai/worker/api/openapi.yaml` → `api/ai-worker.yaml`
- [ ] Move `snippets/data/API/cli-http-api.yaml` → `api/cli-http.yaml`
- [ ] Update any scripts that reference these files
- [ ] Update documentation
- [ ] Test that API docs still generate
- [ ] Commit changes

**Estimated Time:** 30 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

#### Task 2.7: Remove Temporary Files
- [ ] Delete `diff-report-*.txt` files
- [ ] Move `DIFF-REPORT-SUMMARY.md` → `tasks/reports/DIFF-REPORT-SUMMARY.md`
- [ ] Clean up any other temporary files
- [ ] Commit changes

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

### Phase 3: Snippets Cleanup

#### Task 3.1: Remove Deprecated Styles
- [ ] Delete `snippets/styles/` directory entirely
- [ ] Verify no imports reference `themeStyles.jsx`
- [ ] Test that nothing breaks
- [ ] Commit changes

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

#### Task 3.2: Move Snippets Scripts
- [ ] Move `snippets/scripts/fetch-*.sh` → `tools/scripts/fetch/`
- [ ] Move `snippets/scripts/generate-*.sh` → `tools/scripts/generate/`
- [ ] Move `snippets/scripts/generate-data/` → `tools/scripts/generate/`
- [ ] Move `snippets/scripts/test-scripts.sh` → `tools/scripts/test/`
- [ ] Move `snippets/scripts/update-component-library.sh` → `tools/scripts/generate/`
- [ ] Move `snippets/scripts/README.mdx` → `tools/scripts/README.mdx`
- [ ] Update any references to these scripts
- [ ] Test that scripts still work
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

#### Task 3.3: Move Snippets Wiki
- [ ] Move `snippets/snippetsWiki/` → `tools/wiki/snippetsWiki/`
- [ ] Update any references
- [ ] Test that nothing breaks
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 3.4: Reorganize Snippets Data
- [ ] Move `snippets/docs-status-data.json` → `snippets/data/status/docs-status-data.json`
- [ ] Verify data imports still work
- [ ] Test that components still render
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

#### Task 3.5: Verify Snippets Pages
- [ ] **VERIFY** `snippets/pages/` exists and is NOT removed
- [ ] Document why it's required (MDX-in-MDX pattern)
- [ ] Test that MDX imports still work
- [ ] Commit documentation

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

### Phase 4: Scripts Consolidation

#### Task 4.1: Move Root Scripts
- [ ] Move `scripts/audit-*.js` → `tools/scripts/audit/`
- [ ] Move `scripts/test-*.js` → `tools/scripts/test/`
- [ ] Move `scripts/verify-*.js` → `tools/scripts/verify/`
- [ ] Move `scripts/download-*.sh` → `tools/scripts/fetch/`
- [ ] Update any references to these scripts
- [ ] Test that scripts still work
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

#### Task 4.2: Move V2 Scripts
- [ ] Move `v2/scripts/*.js` → `tools/scripts/` (organize by purpose)
- [ ] Move `v2/scripts/*.mdx` → appropriate location
- [ ] Move `v2/scripts/*.md` → appropriate location
- [ ] Update any references
- [ ] Test that scripts still work
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

#### Task 4.3: Organize Scripts by Purpose
- [ ] Review all scripts in `tools/scripts/`
- [ ] Categorize by purpose (audit, generate, test, verify, fetch)
- [ ] Move to appropriate subdirectories
- [ ] Create README.md in each category
- [ ] Update any references
- [ ] Test that all scripts work
- [ ] Commit changes

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** Task 4.1, Task 4.2

---

### Phase 5: Version Organization

#### Task 5.1: Create Docs Directory
- [ ] Create `docs/` directory
- [ ] **DO NOT MODIFY** `v1/` contents (frozen)
- [ ] Plan v2 migration

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

#### Task 5.2: Move V1 (Frozen)
- [ ] Move `v1/` → `docs/v1/`
- [ ] **VERIFY** no changes to contents
- [ ] Update `docs.json` paths if needed
- [ ] Test that v1 docs still work
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 5.1

---

#### Task 5.3: Move V2 Pages (Initial - Temporary Structure)
- [ ] Move `v2/pages/` → `docs/v2/pages/` (temporary - will be flattened in Phase 10 stretch goal)
- [ ] Update `docs.json` paths
- [ ] Test that v2 docs still render
- [ ] Commit changes

**Estimated Time:** 30 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 5.1

**Note:** This creates a temporary structure `docs/v2/pages/`. Phase 10 (stretch goal) will flatten this to `docs/pages/` to avoid `/v2/` in URLs, but that's NOT required immediately and can be done weeks/months later.

---

#### Task 5.4: Consolidate V2 Assets
- [ ] Move `v2/assets/` → `snippets/assets/` (merge with existing)
- [ ] Resolve any duplicate files
- [ ] Update any references
- [ ] Test that assets still load
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Medium  
**Dependencies:** Task 5.1

---

#### Task 5.5: Remove V2 Duplicates
- [ ] Remove `v2/style.css` (use root `style.css`)
- [ ] Remove `v2/package.json` (use tools/package.json)
- [ ] Move `v2/tests/` → `tests/` (if actual tests) or delete (if docs)
- [ ] Update any references
- [ ] Test that nothing breaks
- [ ] Commit changes

**Estimated Time:** 30 minutes  
**Risk Level:** Low  
**Dependencies:** Task 5.1

---

### Phase 6: Styles Reorganization

#### Task 6.1: Reorganize Styles
- [ ] Rename `style.css` → `styles/theme.css` (or keep at root)
- [ ] Create symlink if keeping at root: `style.css` → `styles/theme.css`
- [ ] Update any references
- [ ] Test that styles still apply
- [ ] Commit changes

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

### Phase 7: Tasks Reorganization

#### Task 7.1: Reorganize Tasks Directory
- [ ] Move planning docs from `tasks/PLAN/` → `tasks/plan/`
- [ ] Move reports from `tasks/PLAN/reports/` → `tasks/reports/`
- [ ] Move scripts from `tasks/PLAN/scripts/` → `tasks/scripts/`
- [ ] Move errors from `tasks/PLAN/errors/` → `tasks/errors/`
- [ ] Update any references
- [ ] Test that nothing breaks
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Low  
**Dependencies:** Task 1.1

---

### Phase 8: Data & Content Separation (Future)

#### Task 8.1: Create Content Structure
- [ ] Create `snippets/data/content/` directory
- [ ] Create `snippets/data/content/en/` directory
- [ ] Plan content extraction

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** None

---

#### Task 8.2: Extract Hardcoded Strings
- [ ] Identify components with hardcoded strings
- [ ] Extract strings to JSON files
- [ ] Update components to use data files
- [ ] Test that components still render
- [ ] Commit changes

**Estimated Time:** 4+ hours (ongoing)  
**Risk Level:** Medium  
**Dependencies:** Task 8.1

---

### Phase 9: Final Validation

#### Task 9.1: Full Test Suite
- [ ] Run all tests
- [ ] Fix any broken tests
- [ ] Commit fixes

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** All previous phases

---

#### Task 9.2: Verify All Pages Render
- [ ] Test Mintlify locally
- [ ] Verify all pages render correctly
- [ ] Check all links work
- [ ] Fix any broken links
- [ ] Commit fixes

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** All previous phases

---

#### Task 9.3: Validate Import Paths
- [ ] Scan for relative imports in snippets
- [ ] Fix any relative imports
- [ ] Verify all imports use absolute paths
- [ ] Commit fixes

**Estimated Time:** 1 hour  
**Risk Level:** Low  
**Dependencies:** All previous phases

---

#### Task 9.4: Update Documentation
- [ ] Update `README.md` with new structure
- [ ] Update style guide with new paths
- [ ] Update component library with new paths
- [ ] Create `contribute/STRUCTURE.md` with detailed guidance
- [ ] Update contribution guide
- [ ] Update AI guidelines
- [ ] Commit documentation

**Estimated Time:** 3 hours  
**Risk Level:** Low  
**Dependencies:** All previous phases

---

### Phase 10: Stretch Goal - Flatten Docs Structure (OPTIONAL - NOT REQUIRED IMMEDIATELY)

**⚠️ IMPORTANT: This phase is OPTIONAL and should only be done AFTER all other migration tasks are complete. It is NOT required for the initial migration.**

**Purpose:** Flatten the docs structure to avoid `/v2/` in Mintlify URLs by moving `docs/v2/pages/` → `docs/pages/`

**Why:** Mintlify uses directory names in URLs. Having `docs/v2/pages/` creates URLs like `/v2/...`, but we want the current active documentation at the root level (`/...`).

#### Task 10.1: Flatten Docs Structure (STRETCH GOAL)
- [ ] **OPTIONAL:** Move `docs/v2/pages/` → `docs/pages/` (flatten structure)
- [ ] Update `docs.json` paths to remove all `/v2/` references
- [ ] Update any internal links that reference `/v2/`
- [ ] Test that all URLs work correctly
- [ ] Verify Mintlify URLs are clean (no `/v2/` prefix)
- [ ] Test that all pages render correctly
- [ ] Update documentation to reflect new structure
- [ ] Commit changes

**Estimated Time:** 1 hour  
**Risk Level:** Medium  
**Dependencies:** Phase 9 (Final Validation)  
**Priority:** Low (Stretch Goal)

**Note:** This can be done weeks or months after the initial migration. The temporary structure `docs/v2/pages/` will work fine until this is done.

---

## Migration Timeline

**Total Estimated Time:** ~20-25 hours

**Week 1:**
- Phase 1: Foundation Setup (3 hours)
- Phase 2: Root Cleanup (2 hours)
- Phase 3: Snippets Cleanup (2 hours)

**Week 2:**
- Phase 4: Scripts Consolidation (4 hours)
- Phase 5: Version Organization (3 hours)
- Phase 6: Styles Reorganization (1 hour)

**Week 3:**
- Phase 7: Tasks Reorganization (1 hour)
- Phase 8: Data Separation (ongoing, 4+ hours)
- Phase 9: Final Validation (5 hours)

**Stretch Goal (Optional - After All Other Tasks):**
- Flatten docs structure: `docs/v2/pages/` → `docs/pages/` (1 hour)
  - **NOT REQUIRED IMMEDIATELY** - Can be done after all migration is complete
  - Reason: Avoids `/v2/` in Mintlify URLs by using `docs/pages/` instead of `docs/v2/pages/`

---

## Risk Mitigation

1. **Create Migration Branch:** `git checkout -b repo-structure-migration`
2. **Tag Each Phase:** Tag completion of each phase for easy rollback
3. **Test After Each Task:** Don't batch commits without testing
4. **Keep Backup:** Consider creating a backup branch before starting
5. **Document Issues:** Document any problems encountered during migration

---

## Success Criteria

- [ ] All files in correct locations
- [ ] No unauthorized root files
- [ ] Snippets follows Mintlify conventions
- [ ] v1/ is frozen and unchanged
- [ ] All pages render correctly
- [ ] All tests pass
- [ ] All import paths use absolute paths
- [ ] Enforcement mechanisms in place
- [ ] Documentation updated

---

**Plan Status:** Ready for Review  
**Next Step:** Review and approve plan before starting migration
