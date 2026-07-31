# SME Audit: `brand` concern

> 13 scripts | Generated 2026-05-18
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## audit (1)

### niche: `style` (1)

#### `style-and-language-homogenizer-en-gb.js`

- **Path:** `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`
- **Purpose:** * @description EN-GB style homogeniser — finds and fixes American English spellings, style guide violations, and formatting inconsistencies across v2 content
- **Description:** EN-GB style homogeniser — finds and fixes American English spellings, style guide violations, and formatting inconsistencies across v2 content
- **Workflow callers:** `validator-brand-check-copy-standards.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** on-demand, repair)
- **Usage:** `node operations/scripts/remediators/content/style/style-and-language-homogenizer-en-gb.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## validator (5)

### niche: `copy` (3)

#### `check-voice-register.js`

- **Path:** `operations/scripts/validators/content/copy/check-voice-register.js`
- **Purpose:** content:voice-compliance
- **Description:** Checks MDX pages with audience frontmatter for prohibited phrases from the wrong voice register
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-changed -> v2/*.mdx with audience frontmatter -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/content/copy/check-voice-register.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `lint-copy.js`

- **Path:** `operations/scripts/validators/content/copy/lint-copy.js`
- **Purpose:** * @description Enforce banned word and phrase rules on MDX content files.
- **Description:** Enforce banned word and phrase rules on MDX content files.
- **Workflow callers:** `validator-brand-check-copy-standards.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/content/copy/lint-copy.js [file or glob] [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `lint-patterns.js`

- **Path:** `operations/scripts/validators/content/copy/lint-patterns.js`
- **Purpose:** * @description Enforce Tier 2 copy pattern rules on MDX content files.
- **Description:** Enforce Tier 2 copy pattern rules on MDX content files.
- **Workflow callers:** `validator-brand-check-copy-standards.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/content/copy/lint-patterns.js [file or glob] [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `grammar` (2)

#### `check-grammar-en-gb.js`

- **Path:** `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`
- **Purpose:** * @description Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules.
- **Description:** Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules.
- **Workflow callers:** `validator-brand-check-copy-standards.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files/CI validator for English v2 docs and explicit content files
- **Usage:** `node operations/scripts/validators/content/grammar/check-grammar-en-gb.js [--scope full|changed] [--file <path[,path...]>] [--fix] [--strict]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-proper-nouns.js`

- **Path:** `operations/scripts/validators/content/grammar/check-proper-nouns.js`
- **Purpose:** * @description Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens.
- **Description:** Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens.
- **Workflow callers:** `validator-brand-check-copy-standards.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files
- **Usage:** `node operations/scripts/validators/content/grammar/check-proper-nouns.js [--file <path[,path...]>] [--fix]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## remediator (7)

### niche: `copy` (1)

#### `remediate-voice-violations.js`

- **Path:** `operations/scripts/remediators/content/copy/remediate-voice-violations.js`
- **Purpose:** content:voice-compliance
- **Description:** Self-remediates voice register violations by deleting self-referential phrases and audience-specific prohibited constructions
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual -> v2/*.mdx -> edited pages with violations removed
- **Usage:** `node operations/scripts/remediators/content/copy/remediate-voice-violations.js [--dry-run|--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `style` (6)

#### `remediate-em-dashes.js`

- **Path:** `operations/scripts/remediators/content/style/remediate-em-dashes.js`
- **Purpose:** qa:content-quality
- **Description:** Replaces em-dashes (U+2014) with en-dashes (U+2013) in routable v2 MDX content text and user-facing frontmatter fields (title, sidebarTitle, description). Skips other frontmatter keys, code blocks, inline code, JSX comments, import/export lines, and JSX attribute values.
- **Workflow callers:** `remediator-brand-repair-frontmatter-and-em-dashes.yml`
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-05-04
- **Mode:** repair
- **Pipeline:** manual — batch remediation utility, run with --dry-run first
- **Usage:** `node operations/scripts/remediators/content/style/remediate-em-dashes.js [--dry-run|--write] [--verify] [--staged] [--files path,path]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `remediate-frontmatter-quotes.js`

- **Path:** `operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js`
- **Purpose:** qa:content-quality
- **Description:** Standardises MDX frontmatter scalar string values to double quotes. Decodes YAML single-quoted strings (including ''-escaped apostrophes) and re-encodes them as double-quoted strings, escaping internal double quotes and backslashes. Skips multi-line block scalars (| or >), explicit YAML tags, sequences, and mappings.
- **Workflow callers:** `remediator-brand-repair-frontmatter-and-em-dashes.yml`
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-27
- **Mode:** repair
- **Pipeline:** PostToolUse:Edit|Write hook + remediator-brand-repair-frontmatter-quotes.yml workflow
- **Usage:** `node operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js [--dry-run|--write] [--verify] [--staged] [--files path,path]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `remediate-us-spelling.js`

- **Path:** `operations/scripts/remediators/content/style/remediate-us-spelling.js`
- **Purpose:** qa:content-quality
- **Description:** Converts between US and UK English spellings in routable v2 MDX content text only. Default direction: US to UK (en-GB). Use --language en-us to reverse. Skips frontmatter, code blocks, inline code, JSX comments, import/export lines, URLs, and JSX attribute values.
- **Workflow callers:** `remediator-brand-repair-en-gb-style.yml`
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-05-04
- **Mode:** repair
- **Pipeline:** manual — batch remediation utility, run with --dry-run first
- **Usage:** `node operations/scripts/remediators/content/style/remediate-us-spelling.js [--dry-run|--write] [--verify] [--language en-gb|en-us] [--staged] [--files path,path]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-ownerless-language.js`

- **Path:** `operations/scripts/remediators/content/style/repair-ownerless-language.js`
- **Purpose:** * @description Applies deterministic wording repairs that remove human-owner dependency from governed GitHub and contributor surfaces.
- **Description:** Applies deterministic wording repairs that remove human-owner dependency from governed GitHub and contributor surfaces.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/style/repair-ownerless-language.js [--check|--write] [--files a,b]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-term-capitalisation.js`

- **Path:** `operations/scripts/remediators/content/style/repair-term-capitalisation.js`
- **Purpose:** qa:content-quality
- **Description:** Enforces correct capitalisation of proper nouns (Livepeer, Orchestrator, Ethereum, etc.) in routable v2 MDX prose. Reads rules from tools/config/quality/term-capitalisation.json. Skips code, frontmatter, URLs, imports, JSX attributes.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-16
- **Mode:** repair
- **Pipeline:** manual — batch remediation utility, run with --dry-run first
- **Usage:** `node operations/scripts/remediators/content/style/repair-term-capitalisation.js [--dry-run|--write] [--verify] [--staged] [--files path,path]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `wcag-repair-common.js`

- **Path:** `operations/scripts/remediators/content/style/wcag-repair-common.js`
- **Purpose:** * @description WCAG repair shared logic — common repair functions used by WCAG audit fix mode
- **Description:** WCAG repair shared logic — common repair functions used by WCAG audit fix mode
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/remediators/content/style/wcag-repair-common.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (2)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/remediators/content/copy/remediate-voice-violations.js` — content:voice-compliance
- `operations/scripts/remediators/content/style/repair-term-capitalisation.js` — qa:content-quality
