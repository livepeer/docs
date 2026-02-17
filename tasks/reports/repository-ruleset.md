# Repository Ruleset
## Livepeer Documentation Repository

**Version:** 1.0  
**Status:** Historical Reference  
**Purpose:** Historical ruleset that informed current structure

## 📖 Source of Truth

**⚠️ IMPORTANT:** The **source of truth** for repository structure is **[README.md](../../../README.md)**. This ruleset is a historical document. For current structure rules, always refer to README.md.

---

## Directory Structure Rules

### Root Directory (`/`)

**Allowed Files:**
- ✅ `docs.json` - Mintlify navigation configuration
- ✅ `package.json` - Project dependencies
- ✅ `package-lock.json` - Dependency lock file
- ✅ `README.md` - Project documentation
- ✅ `LICENSE` - License file
- ✅ `Dockerfile` - Docker build configuration
- ✅ `Makefile` - Build automation
- ✅ `style.css` - Mintlify global styles (CSS Custom Properties)
- ✅ `.gitignore` - Git ignore rules
- ✅ `.cursorrules` - Cursor IDE rules (if used)

**Forbidden Files:**
- ❌ Configuration files (move to `tools/config/`)
- ❌ Scripts (move to `tools/scripts/`)
- ❌ Temporary files (delete or move to `tasks/PLAN/`)
- ❌ Documentation files (move to `docs/`)
- ❌ AI guidelines (move to `tools/ai-rules/`)

### Snippets Directory (`/snippets/`)

**Purpose:** Mintlify convention directory for reusable code and assets

**Allowed Subdirectories:**
- ✅ `components/` - React/JSX components only
  - ✅ `content/` - Content components
  - ✅ `display/` - Display components
  - ✅ `domain/` - Domain-specific components
  - ✅ `integrations/` - Integration components
  - ✅ `layout/` - Layout components
  - ✅ `primitives/` - Primitive/base components
- ✅ `data/` - Data files (JSON, JSX, MDX)
  - ✅ `api/` - API data
  - ✅ `gateways/` - Gateway data
  - ✅ `references/` - Reference data
  - ✅ `status/` - Status data
  - ✅ `variables/` - Variable data
  - ✅ `content/` - UI strings (translation-ready)
- ✅ `assets/` - Static assets (images, videos, etc.)
- ✅ `automations/` - Dynamic content components
  - ✅ `blog/` - Blog automation
  - ✅ `discord/` - Discord automation
  - ✅ `forum/` - Forum automation
  - ✅ `globals/` - Global automations
  - ✅ `luma/` - Luma automation
  - ✅ `showcase/` - Showcase automation
  - ✅ `youtube/` - YouTube automation
- ✅ `generated/` - Generated content files
- ✅ `external/` - External documentation snippets

**Forbidden Subdirectories:**
- ❌ `pages/` - Pages belong in `versions/v2/pages/`
- ❌ `scripts/` - Scripts belong in `tools/scripts/`
- ❌ `styles/` - Styles belong in root `style.css` or component files
- ❌ `wiki/` - Wiki belongs in `tools/wiki/`

### Tools Directory (`/tools/`)

**Purpose:** All development tooling and configuration

**Required Subdirectories:**
- ✅ `ai-rules/` - AI context rules and guidelines
  - ✅ `AI_GUIDELINES.md`
  - ✅ `.cursorrules`
  - ✅ `llms.txt.information.md`
- ✅ `config/` - Tool configurations
  - ✅ `cspell.json` - Spell checker config
  - ✅ Other tool configs
- ✅ `scripts/` - Development scripts
  - ✅ `audit/` - Audit scripts
  - ✅ `generate/` - Generation scripts
  - ✅ `test/` - Test scripts
  - ✅ `verify/` - Verification scripts
  - ✅ `fetch/` - Data fetching scripts
- ✅ `wiki/` - Internal wiki/documentation
  - ✅ `snippetsWiki/` - Snippets wiki

### Versions Directory (`/versions/`)

**Purpose:** Versioned documentation

**Structure:**
- ✅ `v1/` - Legacy documentation (archive)
  - ✅ `pages/` - Legacy pages
- ✅ `v2/` - Current documentation
  - ✅ `pages/` - Current pages only
  - ❌ No `assets/`, `scripts/`, `style.css`, or `package.json`

**Rules:**
- ✅ Pages organized by section (00_home, 01_about, etc.)
- ✅ No duplicate assets (use `snippets/assets/`)
- ✅ No duplicate styles (use root `style.css`)
- ✅ No separate package.json (use root)

### Tests Directory (`/tests/`)

**Purpose:** All testing code

**Required Subdirectories:**
- ✅ `unit/` - Unit tests
- ✅ `integration/` - Integration tests
- ✅ `e2e/` - End-to-end tests
- ✅ `fixtures/` - Test fixtures
- ✅ `utils/` - Test utilities
- ✅ `config/` - Test configuration

**Rules:**
- ✅ Single test directory at root only
- ❌ No duplicate test directories in version folders

### Tasks Directory (`/tasks/`)

**Purpose:** AI working directory and task management

**Structure (per workspace rules):**
- ✅ `PLAN/` - Task specifications
  - ✅ `reports/` - Audit reports
  - ✅ `scripts/` - Task scripts
  - ✅ `errors/` - Error documentation
- ✅ Feature-specific task folders (ABOUT/, DEVELOPERS/, etc.)

### Public Assets (`snippets/assets/`)

**Purpose:** Static public assets served by Mintlify (favicon and logo)

**CRITICAL:** Favicon and logo are in `snippets/assets/`, NOT at root

**Location:**
- ✅ `favicon.png` - In `snippets/assets/` (docs.json: `"favicon": "/snippets/assets/favicon.png"`)
- ✅ `logo/` - In `snippets/assets/logo/` (docs.json: `"logo": { "light": "/snippets/assets/logo/light.svg" }`)

**Rules:**
- **NOT at root** - They belong in `snippets/assets/`
- Referenced in `docs.json` from `snippets/assets/`
- These are public assets, different from content assets but still in `snippets/assets/`

### API Directory (`/api/`)

**Purpose:** API specifications

**Structure:**
- ✅ `openapi.yaml` - Main API specification
- ✅ `ai-worker/` - AI worker API specification

### Docs Directory (`/docs/`)

**Purpose:** Non-Mintlify documentation

**Structure:**
- ✅ `CONTRIBUTING.md` - Contribution guide
- ✅ `CONTRIBUTING/` - Contribution documentation
  - ✅ `GIT-HOOKS.md`
  - ✅ `README.md`
- ✅ `PLAN/` - Planning documentation

---

## File Naming Conventions

### Components
- **Format:** PascalCase
- **Extension:** `.jsx` or `.mdx`
- **Examples:**
  - ✅ `UserCard.jsx`
  - ✅ `GatewayOverview.jsx`
  - ❌ `user-card.jsx`
  - ❌ `gateway_overview.jsx`

### Data Files
- **Format:** kebab-case
- **Extension:** `.json`, `.jsx`, `.mdx`
- **Examples:**
  - ✅ `gateway-data.json`
  - ✅ `api-reference.jsx`
  - ❌ `gatewayData.json`
  - ❌ `api_reference.jsx`

### Scripts
- **Format:** kebab-case
- **Extension:** `.js`, `.sh`
- **Examples:**
  - ✅ `generate-api-docs.sh`
  - ✅ `audit-component-usage.js`
  - ❌ `generateApiDocs.sh`
  - ❌ `audit_component_usage.js`

### Pages
- **Format:** kebab-case
- **Extension:** `.mdx`
- **Examples:**
  - ✅ `quickstart-guide.mdx`
  - ✅ `api-authentication.mdx`
  - ❌ `quickstartGuide.mdx`
  - ❌ `api_authentication.mdx`

### Configuration Files
- **Format:** Standard names or kebab-case
- **Examples:**
  - ✅ `cspell.json`
  - ✅ `docs.json`
  - ✅ `package.json`
  - ✅ `.cursorrules`

---

## Import Path Rules

### Absolute Paths Only

**Rule:** All imports from `snippets/` must use absolute paths from root.

**Allowed:**
```jsx
import { Component } from '/snippets/components/display/Component.jsx';
import { data } from '/snippets/data/gateways/gateway-data.jsx';
```

**Forbidden:**
```jsx
// ❌ Relative paths
import { Component } from '../components/display/Component.jsx';
import { Component } from './components/display/Component.jsx';

// ❌ Relative to current file
import { data } from '../../data/gateways/gateway-data.jsx';
```

### Component Import Restrictions

**Rule:** Components cannot import other components (Mintlify limitation).

**Allowed:**
```jsx
// ✅ Import data
import { gatewayData } from '/snippets/data/gateways/gateway-data.jsx';

// ✅ Import from automations (if needed)
import { BlogPost } from '/snippets/automations/blog/BlogPost.jsx';
```

**Forbidden:**
```jsx
// ❌ Import other components
import { Card } from '/snippets/components/primitives/Card.jsx';
import { Layout } from '/snippets/components/layout/Layout.jsx';
```

### React Hooks

**Rule:** React hooks are global in Mintlify (no imports needed).

**Allowed:**
```jsx
// ✅ Use hooks directly
export const MyComponent = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);
  return <div>Content</div>;
};
```

**Forbidden:**
```jsx
// ❌ Import React or hooks
import React, { useState, useEffect } from 'react';
import { useState } from 'react';
```

### Mintlify Components

**Rule:** Mintlify components are global (no imports needed).

**Allowed:**
```jsx
// ✅ Use Mintlify components directly
<Card>
  <Accordion>
    <Steps>
      <Step>Content</Step>
    </Steps>
  </Accordion>
</Card>
```

**Forbidden:**
```jsx
// ❌ Import Mintlify components
import { Card, Accordion, Steps } from '@mintlify/components';
```

---

## Style Rules

### CSS Custom Properties Only

**Rule:** Use CSS Custom Properties (CSS Variables) for all theme-aware styling.

**Allowed:**
```jsx
// ✅ Inline styles with CSS variables
<div style={{ 
  color: "var(--accent)", 
  backgroundColor: "var(--card-background)",
  border: "1px solid var(--border)"
}}>
  Content
</div>

// ✅ Style tag with CSS variables
<style>{`
  .my-component {
    color: var(--text);
    background: var(--card-background);
  }
`}</style>
```

**Forbidden:**
```jsx
// ❌ Hardcoded colors
<div style={{ color: "#3CB540" }}>Content</div>

// ❌ ThemeData (deprecated)
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>Content</div>

// ❌ JavaScript theme objects
const theme = { accent: "#3CB540" };
<div style={{ color: theme.accent }}>Content</div>
```

### Global Styles Location

**Rule:** Global styles only in root `style.css`.

**Allowed:**
- ✅ CSS Custom Properties (theme variables)
- ✅ Mintlify component overrides
- ✅ Utility classes (used 5+ times)

**Forbidden:**
- ❌ Component-specific styles
- ❌ Page-specific styles
- ❌ One-off styling needs

### Component Styles

**Rule:** Component styles must be within the component file.

**Allowed:**
```jsx
// ✅ Inline style objects
export const Component = () => (
  <div style={{ color: "var(--text)" }}>Content</div>
);

// ✅ Style tag
export const Component = () => (
  <>
    <div className="component">Content</div>
    <style>{`
      .component { color: var(--text); }
    `}</style>
  </>
);
```

**Forbidden:**
```jsx
// ❌ External CSS files
import './Component.css';

// ❌ Global CSS classes without style tag
<div className="my-component">Content</div>
// (unless class is defined in root style.css)
```

### MDX Files

**Rule:** MDX files (pages) must have ZERO inline styles.

**Allowed:**
```mdx
import { FlexContainer } from '/snippets/components/primitives/layout.jsx';

<FlexContainer gap="1rem">
  <Card>Content 1</Card>
  <Card>Content 2</Card>
</FlexContainer>
```

**Forbidden:**
```mdx
<!-- ❌ Inline styles -->
<div style={{ display: "flex", gap: "1rem" }}>
  <Card>Content</Card>
</div>

<!-- ❌ Hardcoded colors -->
<div style={{ color: "#3CB540" }}>Content</div>

<!-- ❌ Custom className without component -->
<div className="my-custom-class">Content</div>
```

---

## Data & Content Rules

### Separation of Concerns

**Rule:** Content/strings must be separated from components.

**Structure:**
```
snippets/data/content/
├── en/
│   ├── common.json          # Common UI strings
│   ├── gateways.json        # Gateway-specific strings
│   ├── orchestrators.json   # Orchestrator-specific strings
│   └── [feature].json       # Feature-specific strings
└── [other-languages]/
```

**Allowed:**
```jsx
// ✅ Import data
import { strings } from '/snippets/data/content/en/gateways.json';

export const Component = () => (
  <div>{strings.welcomeMessage}</div>
);
```

**Forbidden:**
```jsx
// ❌ Hardcoded strings in components
export const Component = () => (
  <div>Welcome to Gateways</div>
);

// ❌ Mixed data and logic
const data = {
  title: "Gateways",
  description: "Gateway documentation"
};
```

### Translation Readiness

**Rule:** Structure data for easy translation.

**Requirements:**
- ✅ Language folders (`en/`, `es/`, etc.)
- ✅ JSON files for strings
- ✅ Consistent key naming
- ✅ Data access utilities

**Example:**
```json
// snippets/data/content/en/gateways.json
{
  "title": "Gateways",
  "description": "Gateway documentation",
  "buttons": {
    "getStarted": "Get Started",
    "learnMore": "Learn More"
  }
}
```

---

## Script Organization Rules

### Single Location

**Rule:** All scripts must be in `tools/scripts/`.

**Forbidden Locations:**
- ❌ Root `/scripts/`
- ❌ `snippets/scripts/`
- ❌ `v2/scripts/`
- ❌ `.github/scripts/` (CI/CD helpers only)

### Categorization

**Rule:** Organize scripts by purpose.

**Structure:**
```
tools/scripts/
├── audit/          # Audit scripts
├── generate/       # Generation scripts
├── test/           # Test scripts
├── verify/         # Verification scripts
└── fetch/          # Data fetching scripts
```

### Documentation

**Rule:** Each script category must have a README.

**Required:**
- ✅ `tools/scripts/README.md` - Overview
- ✅ `tools/scripts/audit/README.md` - Audit scripts
- ✅ `tools/scripts/generate/README.md` - Generation scripts
- ✅ etc.

---

## Git Workflow Rules

### Git Hooks

**Rule:** Pre-commit hook must be installed and active.

**Installation:**
```bash
./.githooks/install.sh
```

**What It Checks:**
- ✅ Style guide violations (ThemeData, hardcoded colors)
- ✅ Import path violations
- ✅ MDX/JSON syntax errors
- ✅ Mintlify config validation

**Rules:**
- ✅ Hook must pass before commit
- ❌ Never use `--no-verify` to skip hooks
- ✅ Fix violations before committing

### Branch Naming

**Format:** `{type}/{description}`

**Types:**
- ✅ `docs/` - Documentation changes
- ✅ `fix/` - Bug fixes
- ✅ `feat/` - New features
- ✅ `chore/` - Maintenance tasks
- ✅ `refactor/` - Code refactoring

**Examples:**
- ✅ `docs/add-gateway-guide`
- ✅ `fix/component-styling`
- ✅ `chore/update-dependencies`

### Commit Messages

**Format:** `{type}: {description}`

**Types:**
- ✅ `docs:` - Documentation
- ✅ `fix:` - Bug fix
- ✅ `feat:` - New feature
- ✅ `chore:` - Maintenance
- ✅ `refactor:` - Refactoring
- ✅ `style:` - Styling (formatting, no code change)

**Examples:**
- ✅ `docs: add gateway quickstart guide`
- ✅ `fix: correct component import path`
- ✅ `chore: update dependencies`

---

## AI Tasks Rules

### Location

**Rule:** All AI tasks must be in `tasks/` directory.

**Structure (per workspace rules):**
```
tasks/
├── PLAN/              # Task specifications
│   ├── reports/       # Audit reports
│   ├── scripts/       # Task scripts
│   └── errors/        # Error documentation
└── [feature]/         # Feature-specific tasks
```

### File Organization

**Rule:** Follow workspace directory structure rules.

**Allowed:**
- ✅ Task specifications in `tasks/PLAN/`
- ✅ Reports in `tasks/PLAN/reports/`
- ✅ Scripts in `tasks/PLAN/scripts/`
- ✅ Errors in `tasks/PLAN/errors/`

**Forbidden:**
- ❌ Test scripts in `tasks/` (use `tests/`)
- ❌ Production scripts in `tasks/` (use `tools/scripts/`)

---

## Version Management Rules

### Version Directories

**Rule:** All versioned documentation in `versions/` directory.

**Structure:**
```
versions/
├── v1/           # Legacy (archive)
│   └── pages/
└── v2/           # Current
    └── pages/
```

### No Duplication

**Rule:** No duplicate assets, styles, or configs in version directories.

**Forbidden:**
- ❌ `versions/v2/assets/` (use `snippets/assets/`)
- ❌ `versions/v2/style.css` (use root `style.css`)
- ❌ `versions/v2/package.json` (use root `package.json`)

### Page Organization

**Rule:** Pages organized by section with numeric prefixes.

**Structure:**
```
versions/v2/pages/
├── 00_home/
├── 01_about/
├── 02_community/
├── 03_developers/
├── 04_gateways/
├── 05_orchestrators/
├── 06_delegators/
└── 07_resources/
```

---

## Testing Rules

### Single Test Directory

**Rule:** Only one test directory at root (`tests/`).

**Forbidden:**
- ❌ `versions/v2/tests/`
- ❌ `snippets/tests/`
- ❌ Multiple test directories

### Test Organization

**Rule:** Organize tests by type.

**Structure:**
```
tests/
├── unit/          # Unit tests
├── integration/   # Integration tests
├── e2e/           # End-to-end tests
├── fixtures/      # Test fixtures
├── utils/         # Test utilities
└── config/        # Test configuration
```

---

## Documentation Rules

### Style Guide

**Rule:** All contributors must read style guide before making changes.

**Required Reading:**
1. `versions/v2/pages/07_resources/documentation-guide/style-guide.mdx`
2. `versions/v2/pages/07_resources/documentation-guide/component-library.mdx`

### Component Library

**Rule:** Check component library before creating new components.

**Process:**
1. Check if component exists
2. Check if similar component can be extended
3. Only create new if necessary
4. Document new component in library

---

## Enforcement

### Pre-commit Hook

The pre-commit hook automatically enforces:
- ✅ Style guide violations
- ✅ Import path violations
- ✅ Syntax errors
- ✅ Mintlify config validation

### Manual Review

Code reviewers should check:
- ✅ Directory structure compliance
- ✅ File naming conventions
- ✅ Import path correctness
- ✅ Style guide compliance
- ✅ Data/content separation

### Documentation

All rules must be documented in:
- ✅ This ruleset document
- ✅ Style guide
- ✅ Component library
- ✅ Contribution guide

---

## Exceptions

### Legacy Code

**Rule:** Legacy code (v1/) is exempt from new rules but should not be modified.

**Guidelines:**
- ✅ Leave v1/ as-is
- ✅ Don't apply new rules to v1/
- ✅ Focus on v2/ compliance

### Migration Period

**Rule:** During migration, some violations may be acceptable temporarily.

**Process:**
1. Document exceptions
2. Create migration tickets
3. Fix exceptions in migration phases
4. Remove exceptions after migration

---

**Version:** 1.0  
**Last Updated:** 2026  
**Status:** Proposed - Awaiting Approval
