# Script audit — discoverability concern

Generated 2026-05-24

**13 scripts** in this concern.

## dispatch (8)

### `operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js`

**Niche:** ai-sitemap

**Purpose:** Pipeline dispatcher for ai-sitemap (full lifecycle: detect → repair → verify → escalate)

**Description:** AI sitemap pipeline (PR drift check + post-merge regen + verify).

**Scope:** sitemap-ai.xml

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `operations/scripts/generators/content/seo/generate-ai-sitemap.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-companions.js`

**Niche:** companions

**Purpose:** Pipeline dispatcher for companions (full lifecycle: detect → repair → verify → escalate)

**Description:** AI companion manifest pipeline (PR drift check + post-merge regen + verify).

**Scope:** snippets/data/companions/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`

**Niche:** meta

**Purpose:** check meta dispatcher: bundles discoverability pipelines in --mode pr

**Description:** PR meta for discoverability concern.

**Scope:** all discoverability pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-discoverability.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`

**Niche:** meta

**Purpose:** generate meta dispatcher: bundles discoverability pipelines in --mode post-merge

**Description:** Post-merge meta for discoverability generators.

**Scope:** all discoverability pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-discoverability.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js`

**Niche:** meta

**Purpose:** repair meta dispatcher: bundles discoverability pipelines in --mode manual

**Description:** Manual repair meta for discoverability concern.

**Scope:** all discoverability pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-discoverability.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js`

**Niche:** llms-files

**Purpose:** Pipeline dispatcher for llms-files (full lifecycle: detect → repair → verify → escalate)

**Description:** llms.txt + llms-full.txt pipeline.

**Scope:** llms.txt, llms-full.txt

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `operations/scripts/generators/ai/llm/generate-llms-files.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-og-images.js`

**Niche:** og-images

**Purpose:** Pipeline dispatcher for og-images (full lifecycle: detect → repair → verify → escalate)

**Description:** OG image pipeline (Puppeteer generate + verify per page).

**Scope:** public/og-images/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/generators/content/seo/generate-og-images.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js`

**Niche:** seo-metadata

**Purpose:** Pipeline dispatcher for seo-metadata (full lifecycle: detect → repair → verify → escalate)

**Description:** SEO metadata repair pipeline (frontmatter completeness, descriptions).

**Scope:** v2 MDX pages

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js`, `operations/scripts/remediators/content/seo/generate-seo.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## generator (3)

### `operations/scripts/generators/content/seo/generate-ai-sitemap.js`

**Niche:** ai-sitemap

**Purpose:** Generate the sitemap-ai.xml file at repo root — an AI-crawler-optimised sitemap that lists every v2/ route with priority hints, last-modified, and content-type so AI search engines (Perplexity, ChatGPT browse, Claude search, Phind) can index docs efficiently

**Description:** Reads docs.json navigation tree + per-page frontmatter, emits sitemap-ai.xml at repo root. --check mode validates the committed sitemap-ai.xml matches the regenerated output (exits non-zero on drift). --write mode regenerates. Pairs with dispatch-ai-sitemap.js.

**Scope:** docs.json, v2/ frontmatter → sitemap-ai.xml (repo root)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (12):** `operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/root-governance.json`, `operations/governance/config/generated-artifacts.json`, `docs-guide/tooling/lpd-cli.mdx` _(+7 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/ai/llm/generate-llms-files.js`

**Niche:** llms-files

**Purpose:** Generate the llms.txt + llms-full.txt files at repo root per the llms.txt convention — gives AI assistants a single curated entrypoint listing every v2/ page with title, URL, and one-line summary so they can answer "what's documented?" without crawling

**Description:** Reads docs.json navigation + per-page frontmatter (title, description, sidebarTitle). llms.txt = short index (one line per page). llms-full.txt = same index + first-paragraph excerpt per page. --check validates committed files match the regen output; --write regenerates. Pairs with dispatch-llms-files.js.

**Scope:** docs.json, v2/ frontmatter → llms.txt, llms-full.txt (repo root)

**Reads (1):** `tools`

**Writes (0):** _(none detected)_

**Callers (12):** `operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js`, `operations/scripts/script-index.md`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/root-governance.json`, `operations/governance/config/generated-artifacts.json` _(+7 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/content/seo/generate-og-images.js`

**Niche:** og-images

**Purpose:** Generate Open Graph preview images for v2 pages — per-section branded images (Gateways, Orchestrators, Developers, About, Delegators, Community) plus a fallback Livepeer-branded image — written to snippets/assets/media/og-images/ and referenced via the og-image-policy resolver

**Description:** Uses Puppeteer to render section-templated images at the OG canonical 1200x630 size with title/section overlay. Reads section labels and brand tokens from config, writes PNGs to snippets/assets/media/og-images/ plus a manifest JSON mapping route → image. Pairs with og-image-policy.js (the resolver consumers use) and dispatch-og-images.js.

**Scope:** Puppeteer + brand config → snippets/assets/media/og-images/*.png + manifest.json

**Reads (1):** `snippets/assets/logos/light.svg`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/discoverability/dispatch-og-images.js`, `docs-guide/contributing/community-help.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/automations.mdx`, `docs-guide/docs-library/pipelines/discoverability.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (1)

### `operations/scripts/config/og-image-policy.js`

**Niche:** og-images

**Purpose:** Resolve a v2 MDX route to the correct OG preview image (section-branded if the route falls under a known section, fallback otherwise) — shared library used by generate-og-images, the SEO frontmatter remediator, and any validator that checks OG completeness

**Description:** Library module (not a CLI). Exports resolveOgImage(route) → { src, alt, section, isFallback } given a v2/ route. Reads section → image mapping from snippets/assets/media/og-images/manifest.json. Treated as @type integrator because it's the resolver bridge between the OG generation pipeline output and the consumer surfaces.

**Scope:** snippets/assets/media/og-images/manifest.json + docs.json

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/generators/content/seo/generate-og-images.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (1)

### `operations/scripts/remediators/content/seo/generate-seo.js`

**Niche:** seo-metadata

**Purpose:** Repair v2 MDX frontmatter SEO completeness — derives title (from H1 if missing), description (from first paragraph if missing or boilerplate), and keywords (from headings + key terms) when those fields are blank, stale, or below quality threshold

**Description:** Content-analysis-based SEO frontmatter generator. Reads each v2 .mdx file, parses frontmatter, and for missing/low-quality title/description/keywords writes a derived value into a frontmatter patch. --dry-run shows proposed patches; --write applies them and runs --verify to re-check. Pairs with dispatch-seo-metadata.js.

**Scope:** v2/ MDX (frontmatter only — body content untouched)

**Reads (1):** `${V2_ROOT}/pages`

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/contributing/community-help.mdx` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
