# Script audit — brand concern

Generated 2026-05-24

**26 scripts** in this concern.

## audit (1)

### `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`

**Niche:** style

**Purpose:** Detect and optionally fix US English spellings, style guide violations, and formatting inconsistencies across v2 content per the tools/config/quality/style-language-profile-en-gb.json profile

**Description:** EN-GB style homogeniser. Reads the style-language profile for word/phrase rules, scans v2 MDX for US spellings and style guide violations, supports --check (report) and --fix (apply known-safe replacements). Skips frontmatter, code blocks, inline code, and JSX attribute values.

**Scope:** v2/ MDX (excluding _workspace, x-archived, x-deprecated, locale subtrees)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js`, `operations/scripts/remediators/content/repair/quarantine-manager.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ui-system.mdx`, `docs-guide/policies/skill-pipeline-map.mdx` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## dispatch (10)

### `operations/scripts/dispatch/content/brand/dispatch-banned-words.js`

**Niche:** banned-words

**Purpose:** Pipeline dispatcher for banned-word and banned-phrase detection

**Description:** Reads canonical lists from tools/lib/copy-governance/banned-{words,phrases}.txt via lint-copy.js. PR: detect + advisory. Scheduled: rolling-issue. Banned terms require manual rewrite (no auto-repair) — the rolling-issue model is the response.

**Scope:** v2 MDX pages

**Reads (2):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/copy/lint-copy.js`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/validators/content/copy/lint-copy.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`

**Niche:** meta

**Purpose:** PR-time meta dispatcher: bundles all brand pipelines in --mode pr

**Description:** Runs every brand pipeline with --mode pr. Aggregates exit codes.

**Scope:** all brand pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-brand.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`

**Niche:** meta

**Purpose:** Manual meta dispatcher: brand pipelines in --mode manual (repair only)

**Description:** Repair-only mode with --verify, opens PR with fixes.

**Scope:** brand pipelines with remediators

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `.github/workflows/dispatch-brand.yml`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`

**Niche:** meta

**Purpose:** Scheduled meta dispatcher: brand pipelines in --mode scheduled

**Description:** Full audit + repair (--write) + verify + rolling-issue.

**Scope:** brand pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `.github/workflows/dispatch-brand.yml`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-em-dashes.js`

**Niche:** em-dashes

**Purpose:** Pipeline dispatcher for em-dash detection and removal in v2 docs

**Description:** Detects em-dashes in v2 MDX and replaces with sentence-appropriate punctuation. PR: detect + advisory. Scheduled: scan + repair + verify + rolling-issue. Manual: repair-only with --verify.

**Scope:** v2 MDX pages

**Reads (2):** `tools/lib/governance/pipeline-mode`, `operations/scripts/remediators/content/style/remediate-em-dashes.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/remediators/content/style/remediate-em-dashes.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js`

**Niche:** grammar-en-gb

**Purpose:** Pipeline dispatcher for UK English grammar enforcement on v2 docs (full lifecycle)

**Description:** Detects UK English grammar issues (subject-verb agreement, article use, comma placement) and applies safe deterministic fixes via the EN-GB homogeniser. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only.

**Scope:** v2 MDX pages

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`, `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js`

**Niche:** proper-nouns

**Purpose:** Pipeline dispatcher for proper-noun capitalisation (Livepeer, AI, Gateway, Orchestrator, etc.)

**Description:** Detects lowercase/wrong-case proper nouns and corrects. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only.

**Scope:** v2 MDX pages

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/grammar/check-proper-nouns.js`, `operations/scripts/remediators/content/style/repair-term-capitalisation.js`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/remediators/content/style/repair-term-capitalisation.js`, `operations/scripts/validators/content/grammar/check-proper-nouns.js` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-spelling.js`

**Niche:** spelling

**Purpose:** Pipeline dispatcher for UK spelling enforcement on v2 docs

**Description:** Detects US spellings and corrects to UK forms. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only with --verify.

**Scope:** v2 MDX pages

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/remediators/content/style/remediate-us-spelling.js`, `operations/scripts/remediators/content/repair/repair-spelling.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/remediators/content/style/remediate-us-spelling.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js`

**Niche:** style-tokens

**Purpose:** Pipeline dispatcher for component style-token consistency (no hardcoded colours/spacing)

**Description:** Detects style tokens not from the brand system. Scheduled: audit + repair (Phase 3.X wire). Manual: repair-only.

**Scope:** snippets/components/**

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/audits/components/library/audit-component-styles.js`, `operations/scripts/remediators/components/library/repair-component-styles.js`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `tools/scripts/remediators/styles/remediate-styles.js`, `tools/scripts/validators/styles/audit-styles.js`, `tools/scripts/generators/styles/generate-styles-docs.js` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/brand/dispatch-voice-register.js`

**Niche:** voice-register

**Purpose:** Pipeline dispatcher for voice register: assertive voice, no hedging, per-audience phrasing

**Description:** Detects voice violations (hedging, conditionals, weakened value, per-audience prohibited phrases) and applies safe deterministic fixes. PR: detect + advisory. Scheduled: scan + repair + verify. Manual: repair-only with --verify.

**Scope:** v2 MDX pages

**Reads (4):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/copy/check-voice-register.js`, `operations/scripts/validators/content/copy/lint-patterns.js`, `operations/scripts/remediators/content/style/remediate-voice-violations.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/remediators/content/style/remediate-voice-violations.js`, `operations/scripts/validators/content/copy/lint-patterns.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## generator (3)

### `operations/scripts/generators/media/generate-hero-background.js`

**Niche:** hero-assets

**Purpose:** Generate the hero background image asset used by the v2 home page hero component — produces the branded gradient/pattern PNG backing the headline graphic, run when brand colours or hero layout change

**Description:** Generates the hero background PNG used at v2/index. Reads brand colour tokens from style.css, renders the gradient/pattern via Canvas or Puppeteer, writes to snippets/assets/media/hero/. Manual-use script — not in any dispatcher; run by hand when the brand updates.

**Scope:** brand tokens (style.css) → snippets/assets/media/hero/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/generators/media/generate-hero-image.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/media/generate-hero-image.js`

**Niche:** hero-assets

**Purpose:** Generate the hero foreground image (headline graphic, illustrations, product mockups) layered on top of the hero background — manual-use script run when brand assets or hero copy change

**Description:** Generates the hero foreground PNG/SVG used at v2/index. Reads brand assets + hero copy from config, renders via Puppeteer or Canvas, writes to snippets/assets/media/hero/. Pairs with generate-hero-background.js. Manual-use only — not wired to any dispatcher.

**Scope:** brand assets + hero copy → snippets/assets/media/hero/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `tools/scripts/generators/styles/generate-styles-docs.js`

**Niche:** style-tokens

**Purpose:** Generate style-governance documentation tables from validator categories, remediator patterns, and style.css tokens — keeps the styles-engineering-guide framework doc in sync with the audit-styles and remediate-styles source of truth

**Description:** Parses tools/scripts/validators/styles/audit-styles.js (audit category list), tools/scripts/remediators/styles/remediate-styles.js (token migration map + repair patterns), and style.css (--lp-* design tokens) to produce documentation tables. --check fails if docs are stale; --write regenerates them. Writes a manifest at workspace/reports/styles/styles-docs-manifest.json. Not yet in the canonical dispatch-style-tokens.js pipeline — see workspace/reports/script-audit/brand/ for migration plan.

**Scope:** tools/scripts/validators/styles/, tools/scripts/remediators/styles/, style.css, docs-guide/frameworks/styles-engineering-guide.mdx

**Reads (3):** `workspace/reports/styles/styles-docs-manifest.json`, `tools/scripts/validators/styles/audit-styles.js`, `tools/scripts/remediators/styles/remediate-styles.js`

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/frameworks/styles-engineering-guide.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (6)

### `operations/scripts/remediators/content/style/remediate-em-dashes.js`

**Niche:** em-dashes

**Purpose:** Replace em-dashes (U+2014) with en-dashes (U+2013) in v2 MDX content and user-facing frontmatter fields per the CLAUDE.md voice rule "no em dashes" — paired remediator for the em-dashes brand pipeline

**Description:** Scans content text and user-facing frontmatter keys (title, sidebarTitle, description) for U+2014. Skips other frontmatter keys, code blocks, inline code, JSX comments, import/export lines, and JSX attribute values. --verify re-runs detection after write and reverts any file that still contains an em-dash. Pairs with dispatch-em-dashes.js.

**Scope:** v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-em-dashes.js`, `.claude/CLAUDE.md`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js`

**Niche:** frontmatter-quotes

**Purpose:** Standardise MDX frontmatter scalar string values to double-quoted form per the CLAUDE.md MDX convention "always use double-quoted YAML frontmatter to safely handle apostrophes and em-dashes"

**Description:** Decodes YAML single-quoted strings (including ''-escaped apostrophes) and re-encodes them as double-quoted strings, escaping internal double quotes and backslashes. Skips multi-line block scalars (| or >), explicit YAML tags, sequences, and mappings. Wired into the PostToolUse:Edit|Write hook so every MDX edit is normalised automatically.

**Scope:** v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/dispatch/governance/mdx-frontmatter-sanitise.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `tools/scripts/remediators/styles/remediate-styles.js`

**Niche:** style-tokens

**Purpose:** Auto-remediate deterministic style violations across v2 MDX and snippets/components JSX — legacy token migration to --lp-* design tokens, outline removal repairs, mermaid init standardisation, conservative known-safe replacements only

**Description:** Pairs with tools/scripts/validators/styles/audit-styles.js. Applies token migration (e.g. var(--accent) → var(--lp-color-accent)), removes anti-pattern outline overrides, standardises mermaid init blocks. Skips frontmatter, code blocks, and JSX comments. Not yet in the canonical dispatch-style-tokens.js pipeline — see workspace/reports/script-audit/brand/ for migration plan.

**Scope:** v2/ MDX, snippets/components/*.jsx

**Reads (3):** `snippets/components`, `v2`, `tools/scripts/validators/styles/audit-styles.js`

**Writes (0):** _(none detected)_

**Callers (3):** `tools/scripts/validators/styles/audit-styles.js`, `tools/scripts/generators/styles/generate-styles-docs.js`, `docs-guide/frameworks/styles-engineering-guide.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/style/remediate-us-spelling.js`

**Niche:** spelling

**Purpose:** Convert US English spellings to UK English (en-GB) in v2 MDX content per the CLAUDE.md voice rule "UK English (-ise, -our, -re)" — reads rules from tools/config/quality/language-rules.json

**Description:** Default direction: US → UK. Use --language en-us to reverse. Skips frontmatter, code blocks, inline code, JSX comments, import/export lines, URLs, and JSX attribute values. --verify re-runs the spelling check after write and reverts any file that still has US forms. Pairs with dispatch-spelling.js.

**Scope:** v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)

**Reads (2):** `v2`, `tools/config/quality/language-rules.json`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-spelling.js`, `operations/scripts/remediators/content/style/repair-term-capitalisation.js`, `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/style/remediate-voice-violations.js`

**Niche:** voice-register

**Purpose:** Apply deterministic voice-register fixes to v2 MDX pages

**Description:** Pairs with check-voice-register.js. Applies safe deterministic rewrites only — universal phrase replacements plus audience-keyed deletions (orchestrator, gateway, developer). Skips code blocks, frontmatter, and JSX comments. Ambiguous cases stay flagged for human review via rolling-issue. Supports --dry-run preview and --verify (re-runs check after fix, reverts regressions per file).

**Scope:** v2 MDX pages with audience frontmatter

**Reads (2):** `v2`, `operations/scripts/validators/content/copy/check-voice-register.js`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-voice-register.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/style/repair-term-capitalisation.js`

**Niche:** proper-nouns

**Purpose:** Fix incorrect proper-noun capitalisation in v2 MDX prose (Livepeer, Orchestrator, Gateway, AI, Ethereum, LPT, etc.) per the canonical rule set at tools/config/quality/term-capitalisation.json — paired remediator for check-proper-nouns

**Description:** Reads rules from tools/config/quality/term-capitalisation.json. Scans content text for lowercase or wrong-case occurrences and rewrites them. Skips code blocks, frontmatter, URLs, import/export lines, JSX attribute values. --verify re-runs check-proper-nouns.js per file and reverts any regression. Pairs with dispatch-proper-nouns.js.

**Scope:** v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)

**Reads (2):** `v2`, `tools/config/quality/term-capitalisation.json`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js`, `operations/scripts/validators/content/grammar/check-proper-nouns.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## validator (6)

### `tools/scripts/validators/styles/audit-styles.js`

**Niche:** style-tokens

**Purpose:** Scan v2 MDX and snippets/components JSX for style-governance violations (inline styles, hardcoded hex/spacing, legacy tokens, mermaid hardcoded inits, focus removal) — broader coverage than the canonical components-only audit

**Description:** Single audit covering both content (v2 MDX) and components (snippets/components/*.jsx). Reports six violation categories with file/line evidence and JSON output. Pairs with tools/scripts/remediators/styles/remediate-styles.js. Not yet in the dispatch-style-tokens.js canonical pipeline — see workspace/reports/script-audit/brand/review-packet.md for migration plan.

**Scope:** v2/ MDX, snippets/components/*.jsx

**Reads (3):** `workspace/reports/styles`, `v2`, `snippets/components`

**Writes (0):** _(none detected)_

**Callers (3):** `tools/scripts/remediators/styles/remediate-styles.js`, `tools/scripts/generators/styles/generate-styles-docs.js`, `docs-guide/frameworks/styles-engineering-guide.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`

**Niche:** grammar

**Purpose:** Detect UK English grammar issues in v2 MDX prose — subject-verb agreement, article use, comma placement — with optional conservative autofix for the small set of unambiguous rules

**Description:** Deterministic UK English grammar checker for prose content. Reads rules from a closed enum (no LLM); applies only the rules with documented, unambiguous corrections. --fix performs the autofix for the safe subset. Skips code blocks, frontmatter, JSX comments, JSX attribute values, import/export lines. Exit non-zero if any violation detected.

**Scope:** v2/ MDX (excluding _workspace, x-archived, x-deprecated, locale subtrees)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/copy-brand.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/grammar/check-proper-nouns.js`

**Niche:** grammar

**Purpose:** Detect incorrect proper-noun capitalisation in v2 MDX prose (Livepeer, Orchestrator, Gateway, AI, Ethereum, etc.) while skipping code, frontmatter, URLs, and path-like tokens

**Description:** Reads canonical proper-noun rules from operations/tests/config/spell-dict.json. Scans prose for lowercase or wrong-case occurrences of governed proper nouns. Exit non-zero if any violation. Paired with repair-term-capitalisation.js for auto-fix.

**Scope:** v2/ MDX (excluding code blocks, frontmatter, URLs, path-like identifiers)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/style/repair-term-capitalisation.js`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/copy/check-voice-register.js`

**Niche:** copy

**Purpose:** content:voice-compliance

**Description:** Checks MDX pages with audience frontmatter for prohibited phrases from the wrong voice register

**Scope:** v2/

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-voice-register.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/style/remediate-voice-violations.js`, `operations/scripts/validators/content/copy/lint-patterns.js` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/copy/lint-copy.js`

**Niche:** banned-words

**Purpose:** Detect banned words and banned phrases in v2 MDX content per the canonical lists at tools/lib/copy-governance/banned-{words,phrases}.txt

**Description:** Reads the two canonical lists (10 banned words + 17 banned phrases from the CLAUDE.md voice rules) and scans v2 MDX for occurrences. Exit non-zero on any hit. No auto-fix — banned terms require manual rewrite via the rolling-issue model. Pairs with dispatch-banned-words.js.

**Scope:** v2/ MDX (staged, changed, --full, or single-file via --files)

**Reads (1):** `tools/lib/copy-governance`

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-banned-words.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/script-governance.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/copy/lint-patterns.js`

**Niche:** voice-register

**Purpose:** Detect Tier-2 copy pattern violations in v2 MDX content — hedging language, weakened value claims, conditional softeners, audience-mismatched phrasing per the voice rules

**Description:** Pairs with check-voice-register.js. Where check-voice-register detects prohibited phrases, lint-patterns detects structural pattern violations (e.g. unnecessary qualifiers, hedging openers, indirect constructions). Exit non-zero on any hit. Used by dispatch-voice-register.js as the secondary detector.

**Scope:** v2/ MDX (staged, changed, --full, or single-file via --files)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/brand/dispatch-voice-register.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/copy-brand.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
