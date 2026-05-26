# Pipeline inventory

Generated 2026-05-25 by `operations/scripts/audits/governance/repo/audit-pipeline-inventory.js`.

Single source of truth for every dispatcher (pipeline + meta tier). One row per dispatcher with tier, concern, atomics called, output destinations, live consumers, schedule/caller, and test coverage. Use this to answer "is pipeline X healthy?" without grepping 4 sources.

## Summary

- **Total dispatchers:** 65
- **Smoke-test coverage:** 59/65 (6 infrastructure-dependent exclusions)
- **Functional-test coverage:** 8/65
- **Dispatchers with zero callers** (orphan / manual-only): 1

- **brand** — 10 dispatchers
- **copy** — 8 dispatchers
- **discoverability** — 8 dispatchers
- **governance** — 17 dispatchers
- **health** — 9 dispatchers
- **maintenance** — 13 dispatchers

## brand concern — 10 dispatchers

### `operations/scripts/dispatch/content/brand/dispatch-banned-words.js`

- **Tier:** pipeline
- **Niche:** banned-words
- **Pipeline tag:** P3 (PR), P5 (scheduled)
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for banned-word and banned-phrase detection

**Atomics called (1):**
  - `operations/scripts/validators/content/copy/lint-copy.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/validators/content/copy/lint-copy.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3 (PR)
- **Mode:** dispatch
- **Purpose:** PR-time meta dispatcher: bundles all brand pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-brand.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** manual
- **Mode:** dispatch
- **Purpose:** Manual meta dispatcher: brand pipelines in --mode manual (repair only)

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-brand.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P5/P6
- **Mode:** dispatch
- **Purpose:** Scheduled meta dispatcher: brand pipelines in --mode scheduled

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-brand.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/brand/dispatch-em-dashes.js`

- **Tier:** pipeline
- **Niche:** em-dashes
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for em-dash detection and removal in v2 docs

**Atomics called (1):**
  - `operations/scripts/remediators/content/style/remediate-em-dashes.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/remediators/content/style/remediate-em-dashes.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js`

- **Tier:** pipeline
- **Niche:** grammar-en-gb
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for UK English grammar enforcement on v2 docs (full lifecycle)

**Atomics called (2):**
  - `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`
  - `operations/scripts/validators/content/grammar/check-grammar-en-gb.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (5):** `operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js` _(+1 more)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js`

- **Tier:** pipeline
- **Niche:** proper-nouns
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for proper-noun capitalisation (Livepeer, AI, Gateway, Orchestrator, etc.)

**Atomics called (2):**
  - `operations/scripts/remediators/content/style/repair-term-capitalisation.js`
  - `operations/scripts/validators/content/grammar/check-proper-nouns.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (5):** `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/remediators/content/style/repair-term-capitalisation.js` _(+1 more)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/brand/dispatch-spelling.js`

- **Tier:** pipeline
- **Niche:** spelling
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for UK spelling enforcement on v2 docs

**Atomics called (2):**
  - `operations/scripts/remediators/content/repair/repair-spelling.js`
  - `operations/scripts/remediators/content/style/remediate-us-spelling.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/remediators/content/style/remediate-us-spelling.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js`

- **Tier:** pipeline
- **Niche:** style-tokens
- **Pipeline tag:** P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for component style-token consistency (no hardcoded colours/spacing)

**Atomics called (2):**
  - `operations/scripts/audits/components/library/audit-component-styles.js`
  - `operations/scripts/remediators/components/library/repair-component-styles.js`

**Outputs (1):**
  - `snippets/components/**`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/brand/dispatch-brand-repair.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/brand/dispatch-voice-register.js`

- **Tier:** pipeline
- **Niche:** voice-register
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for voice register: assertive voice, no hedging, per-audience phrasing

**Atomics called (3):**
  - `operations/scripts/remediators/content/style/remediate-voice-violations.js`
  - `operations/scripts/validators/content/copy/check-voice-register.js`
  - `operations/scripts/validators/content/copy/lint-patterns.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/dispatch/content/brand/dispatch-brand-check.js`, `operations/scripts/dispatch/content/brand/dispatch-brand-scan.js`, `operations/scripts/remediators/content/style/remediate-voice-violations.js`, `operations/scripts/validators/content/copy/lint-patterns.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

## copy concern — 8 dispatchers

### `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js`

- **Tier:** pipeline
- **Niche:** canonical-sync
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Mintlify canonical-sync pipeline (PR check + scheduled drift + manual repair)

**Atomics called (2):**
  - `operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js`
  - `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/config/mintlify-canonical-sync.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-changelogs.js`

- **Tier:** pipeline
- **Niche:** changelogs
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for changelogs (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/copy/changelogs/generate-changelog.js`

**Outputs (1):**
  - `snippets/data/changelogs`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/changelogs/generate-changelog.js`

**Live consumers of outputs (7):** `snippets/guide.mdx`, `snippets/snippets-registry.mdx`, `snippets/_workspace/reports/automations-data-audit-2026-04-05.md`, `docs-guide/contributing/community-help.mdx` _(+3 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3
- **Mode:** dispatch
- **Purpose:** check meta dispatcher: bundles copy pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-copy.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** manual
- **Mode:** dispatch
- **Purpose:** repair meta dispatcher: bundles copy pipelines in --mode manual

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-copy.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P5-auto
- **Mode:** dispatch
- **Purpose:** update meta dispatcher: bundles copy pipelines in --mode scheduled

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-copy.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js`

- **Tier:** pipeline
- **Niche:** ownerless-language
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline for ownerless-repo language enforcement (no "we", "our", owner-dependent phrasing)

**Atomics called (1):**
  - `operations/scripts/remediators/content/style/repair-ownerless-language.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/copy/dispatch-copy-check.js`, `operations/scripts/dispatch/content/copy/dispatch-copy-repair.js`, `operations/scripts/remediators/content/style/repair-ownerless-language.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/copy/dispatch-showcase.js`

- **Tier:** pipeline
- **Niche:** showcase
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for showcase (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`

**Outputs (1):**
  - `snippets/data/showcase`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/showcase/project-showcase-sync.js`

**Live consumers of outputs (8):** `v2/home/_workspace/archived/showcase-populated.mdx`, `v2/resources/documentation-guide/tooling/snippets-inventory.mdx`, `v2/internal/rfp/reports/livepeer-docs-v2-report.md`, `snippets/composables/pages/home/project-showcase.mdx` _(+4 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/copy/dispatch-social-feeds.js`

- **Tier:** pipeline
- **Niche:** social-feeds
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for social-feeds (full lifecycle: detect → repair → verify → escalate)

**Atomics called (7):**
  - `operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-github-discussions.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-luma-events.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-rss-blog-data.js`
  - `operations/scripts/integrators/copy/social-feeds/fetch-youtube-data.js`

**Outputs (1):**
  - `snippets/data/social-feeds`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (9):** `operations/scripts/dispatch/content/copy/dispatch-copy-update.js`, `operations/scripts/integrators/copy/social-feeds/fetch-discord-announcements.js`, `operations/scripts/integrators/copy/social-feeds/fetch-forum-data.js`, `operations/scripts/integrators/copy/social-feeds/fetch-ghost-blog-data.js` _(+5 more)_

**Live consumers of outputs (8):** `v2/home/solutions/trending.mdx`, `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`, `v2/resources/documentation-guide/tooling/snippets-inventory.mdx`, `v2/internal/rfp/reports/livepeer-docs-v2-report.md` _(+4 more)_

**Test coverage:** smoke ✅ · functional —

---

## discoverability concern — 8 dispatchers

### `operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js`

- **Tier:** pipeline
- **Niche:** ai-sitemap
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for ai-sitemap (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/content/seo/generate-ai-sitemap.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/generators/content/seo/generate-ai-sitemap.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-companions.js`

- **Tier:** pipeline
- **Niche:** companions
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for companions (full lifecycle: detect → repair → verify → escalate)

**Atomics called (2):**
  - `operations/scripts/generators/content/reference/generate-glossary-companions.js`
  - `operations/scripts/validators/governance/ai/check-companion-manifest.js`

**Outputs (1):**
  - `snippets/data/companions`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3
- **Mode:** dispatch
- **Purpose:** check meta dispatcher: bundles discoverability pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-discoverability.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P4
- **Mode:** dispatch
- **Purpose:** generate meta dispatcher: bundles discoverability pipelines in --mode post-merge

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-discoverability.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** manual
- **Mode:** dispatch
- **Purpose:** repair meta dispatcher: bundles discoverability pipelines in --mode manual

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-discoverability.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js`

- **Tier:** pipeline
- **Niche:** llms-files
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for llms-files (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/ai/llm/generate-llms-files.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js`, `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/generators/ai/llm/generate-llms-files.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-og-images.js`

- **Tier:** pipeline
- **Niche:** og-images
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for og-images (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/content/seo/generate-og-images.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js`, `operations/scripts/generators/content/seo/generate-og-images.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js`

- **Tier:** pipeline
- **Niche:** seo-metadata
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for seo-metadata (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/remediators/content/seo/generate-seo.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js`, `operations/scripts/remediators/content/seo/generate-seo.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

## governance concern — 17 dispatchers

### `operations/scripts/dispatch/governance/dispatch-action-docs.js`

- **Tier:** pipeline
- **Niche:** action-docs
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for action-docs (full lifecycle: detect → repair → verify → escalate)

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (1):**
  - `workspace/actions-library`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-generate.js`

**Live consumers of outputs (6):** `docs-guide/features/automations.mdx`, `docs-guide/policies/governance-index.mdx`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx` _(+2 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-codex-compliance.js`

- **Tier:** pipeline
- **Niche:** codex-compliance
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for codex-compliance (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js`

- **Tier:** pipeline
- **Niche:** folder-allowlist
- **Pipeline tag:** P2/P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual)
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for D-GOV-08 folder-allowlist enforcement (full lifecycle)

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (6):** `operations/scripts/audits/governance/repo/audit-folder-allowlist.js`, `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `operations/scripts/dispatch/governance/dispatch-governance-sync.js` _(+2 more)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-governance-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3
- **Mode:** dispatch
- **Purpose:** check meta dispatcher: bundles governance pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-governance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-governance-generate.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P4
- **Mode:** dispatch
- **Purpose:** generate meta dispatcher: bundles governance pipelines in --mode post-merge

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-governance-map.js`

- **Tier:** pipeline
- **Niche:** governance-map
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for governance-map (full lifecycle: detect → repair → verify → escalate)

**Atomics called (2):**
  - `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js`
  - `operations/scripts/validators/governance/compliance/check-governance-markers.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `operations/scripts/dispatch/governance/dispatch-governance-sync.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-governance-scan.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P5/P6
- **Mode:** dispatch
- **Purpose:** scan meta dispatcher: bundles governance pipelines in --mode scheduled

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-governance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-governance-sync.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** manual
- **Mode:** dispatch
- **Purpose:** sync meta dispatcher: bundles governance pipelines in --mode post-merge

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-governance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js`

- **Tier:** pipeline
- **Niche:** jsdoc-headers
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for jsdoc-headers (full lifecycle: detect → repair → verify → escalate)

**Atomics called (3):**
  - `operations/scripts/remediators/content/classification/add-framework-headers.js`
  - `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`
  - `operations/scripts/validators/governance/compliance/check-jsdoc-headers.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`

- **Tier:** pipeline
- **Niche:** new-file-governance
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for new-file-governance (full lifecycle: detect → repair → verify → escalate)

**Atomics called (4):**
  - `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js`
  - `operations/scripts/remediators/content/classification/assign-purpose-metadata.js`
  - `operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js`
  - `operations/scripts/validators/governance/compliance/check-new-file-governance.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-pipelines.js`

- **Tier:** pipeline
- **Niche:** pipelines
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for pipelines (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-root-governance.js`

- **Tier:** pipeline
- **Niche:** root-governance
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for root-governance (full lifecycle: detect → repair → verify → escalate)

**Atomics called (3):**
  - `operations/scripts/generators/governance/reports/generate-repo-governance-status.js`
  - `operations/scripts/generators/governance/root/generate-root-governance-artifacts.js`
  - `operations/scripts/validators/governance/compliance/check-root-governance-sync.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-sync.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-script-inventory.js`

- **Tier:** pipeline
- **Niche:** script-inventory
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for script-inventory (full lifecycle: detect → repair → verify → escalate)

**Atomics called (2):**
  - `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`
  - `operations/scripts/validators/governance/pr/audit-script-inventory.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/dispatch/governance/dispatch-governance-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-script-locations.js`

- **Tier:** pipeline
- **Niche:** script-locations
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for script-locations (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/validators/governance/compliance/check-script-locations.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-script-registry.js`

- **Tier:** pipeline
- **Niche:** script-registry
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for script-registry (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/governance/catalogs/generate-script-registry.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-generate.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-workflow-governance.js`

- **Tier:** pipeline
- **Niche:** workflow-governance
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for workflow-governance (full lifecycle: detect → repair → verify → escalate)

**Atomics called (2):**
  - `operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js`
  - `operations/scripts/validators/governance/pr/check-workflow-governance.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/governance/dispatch-workspace-retention.js`

- **Tier:** pipeline
- **Niche:** workspace-retention
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for workspace-retention (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/audits/governance/repo/audit-tasks-folders.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

## health concern — 9 dispatchers

### `operations/scripts/dispatch/content/health/dispatch-content-quality.js`

- **Tier:** pipeline
- **Niche:** content-quality
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for content quality (TODO/TBD markers, thin pages, stale content) — full lifecycle

**Atomics called (2):**
  - `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`
  - `operations/scripts/remediators/content/quality/repair-content-quality.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/remediators/content/quality/repair-content-quality.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-health-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3 (PR)
- **Mode:** dispatch
- **Purpose:** PR-time meta dispatcher: bundles all health pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-health.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-health-repair.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** manual
- **Mode:** dispatch
- **Purpose:** Manual meta dispatcher: bundles health pipelines in --mode manual (repair only)

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-health.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-health-scan.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P5/P6 (scheduled)
- **Mode:** dispatch
- **Purpose:** Scheduled meta dispatcher: bundles all health pipelines in --mode scheduled

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-health.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-openapi-reference.js`

- **Tier:** pipeline
- **Niche:** openapi-reference
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for OpenAPI reference drift (full lifecycle)

**Atomics called (1):**
  - `operations/scripts/remediators/content/health/repair-openapi-reference.js`

**Outputs (1):**
  - `v2/api-reference`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/remediators/content/health/repair-openapi-reference.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`

- **Tier:** pipeline
- **Niche:** page-integrity
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for page-integrity (links + imports + MDX safety) — full lifecycle

**Atomics called (6):**
  - `operations/scripts/audits/content/health/page-imports-audit.js`
  - `operations/scripts/audits/content/health/page-links-audit.js`
  - `operations/scripts/dispatch/content/health/page-integrity-dispatch.js`
  - `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`
  - `operations/scripts/remediators/content/repair/repair-page-imports.js`
  - `operations/scripts/remediators/content/repair/repair-page-links.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/config/docs-path-sync.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/health/dispatch-page-rendering.js`

- **Tier:** pipeline
- **Niche:** page-rendering
- **Pipeline tag:** P3 (PR), P5 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for page rendering (Puppeteer sweep + broken-link check) — full lifecycle

**Atomics called (3):**
  - `operations/scripts/remediators/content/health/repair-broken-links.js`
  - `operations/scripts/validators/content/health/check-broken-links.js`
  - `operations/scripts/validators/content/structure/test-v2-pages.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/remediators/content/health/repair-broken-links.js`, `operations/scripts/validators/content/health/check-broken-links.js`, `operations/scripts/validators/content/structure/test-v2-pages.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

### `operations/scripts/dispatch/content/health/dispatch-page-structure.js`

- **Tier:** pipeline
- **Niche:** page-structure
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for page structure (headers, anchors, descriptions, endings, MDX safety) — full lifecycle

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (5):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/remediators/content/structure/repair-anchor-usage.js`, `operations/scripts/remediators/content/structure/repair-description-quality.js` _(+1 more)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional ✅

---

### `operations/scripts/dispatch/content/health/dispatch-wcag.js`

- **Tier:** pipeline
- **Niche:** wcag
- **Pipeline tag:** P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual)
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for WCAG accessibility (full lifecycle)

**Atomics called (3):**
  - `operations/scripts/audits/content/health/audit-wcag.js`
  - `operations/scripts/remediators/content/health/repair-wcag.js`
  - `operations/scripts/validators/content/health/check-wcag.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (3):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

## maintenance concern — 13 dispatchers

### `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js`

- **Tier:** pipeline
- **Niche:** catalogs
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for catalogs (full lifecycle: detect → repair → verify → escalate)

**Atomics called (3):**
  - `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
  - `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`
  - `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js`

**Outputs (1):**
  - `docs-guide/catalog`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`

**Live consumers of outputs (8):** `v2/resources/documentation-guide/catalog/components-catalog.mdx`, `v2/resources/documentation-guide/catalog/pages-catalog.mdx`, `v2/resources/documentation-guide/catalog/workflows-catalog.mdx`, `v2/resources/documentation-guide/catalog/templates-catalog.mdx` _(+4 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`

- **Tier:** pipeline
- **Niche:** component-registry
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for component-registry (full lifecycle: detect → repair → verify → escalate)

**Atomics called (6):**
  - `operations/scripts/audits/components/library/audit-ai-discoverability.js`
  - `operations/scripts/generators/components/library/generate-component-registry.js`
  - `operations/scripts/validators/components/library/check-component-css.js`
  - `operations/scripts/validators/components/library/check-component-health.js`
  - `operations/scripts/validators/components/library/check-component-props.js`
  - `operations/scripts/validators/components/library/check-naming-conventions.js`

**Outputs (1):**
  - `snippets/components`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (4):** `operations/scripts/audits/components/library/audit-ai-discoverability.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`, `operations/scripts/validators/components/library/check-component-props.js`

**Live consumers of outputs (8):** `v2/home/primer.mdx`, `v2/home/resources/glossary.mdx`, `v2/home/solutions/landscape.mdx`, `v2/home/solutions/verticals.mdx` _(+4 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js`

- **Tier:** pipeline
- **Niche:** config-flags
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for config-flags (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`

**Outputs (1):**
  - `snippets/data/config-flags`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js`

- **Tier:** pipeline
- **Niche:** contract-addresses
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for contract-addresses (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`

**Outputs (1):**
  - `snippets/data/contract-addresses`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

**Live consumers of outputs (8):** `v2/delegators/resources/reference/contracts.mdx`, `v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx`, `v2/about/protocol2/blockchain-contracts.mdx`, `v2/about/protocol2/data/blockchain-contracts-links.js` _(+4 more)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js`

- **Tier:** pipeline
- **Niche:** contract-shadow
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for contract-shadow (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses-shadow.js`

**Outputs (1):**
  - `snippets/data/contract-addresses`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

**Live consumers of outputs (8):** `v2/delegators/resources/reference/contracts.mdx`, `v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx`, `v2/about/protocol2/blockchain-contracts.mdx`, `v2/about/protocol2/data/blockchain-contracts-links.js` _(+4 more)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js`

- **Tier:** pipeline
- **Niche:** docs-index
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for docs-index (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/content/catalogs/generate-docs-index.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js`

- **Tier:** pipeline
- **Niche:** exchanges-data
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for exchanges-data (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`

**Outputs (1):**
  - `snippets/data/exchanges`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`

**Live consumers of outputs (4):** `v2/delegators/resources/compendium/exchanges.mdx`, `v2/community/_workspace/context-data/community-index.md`, `docs-guide/features/data-integrations.mdx`, `docs-guide/frameworks/styles-engineering-guide.mdx`

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js`

- **Tier:** pipeline
- **Niche:** large-assets
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for large-assets (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/assets/sync-large-assets-to-branch.js`

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P3
- **Mode:** dispatch
- **Purpose:** check meta dispatcher: bundles maintenance pipelines in --mode pr

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-maintenance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P4
- **Mode:** dispatch
- **Purpose:** generate meta dispatcher: bundles maintenance pipelines in --mode post-merge

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-maintenance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

- **Tier:** meta
- **Niche:** meta
- **Pipeline tag:** P5-auto
- **Mode:** dispatch
- **Purpose:** update meta dispatcher: bundles maintenance pipelines in --mode scheduled

**Atomics called (0):**
  - _(none detected — meta dispatcher or no atomics)_

**Outputs (0):**
  - _(no static output paths detected)_

**Workflow callers (1):** `dispatch-maintenance.yml`

**Script callers (0):** _(none)_

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ⏭  EXCLUDED (infrastructure-dependent) · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-release-version.js`

- **Tier:** pipeline
- **Niche:** release-version
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for release-version (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/integrators/maintenance/release/update-livepeer-release.js`

**Outputs (1):**
  - `snippets/data/releases`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---

### `operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js`

- **Tier:** pipeline
- **Niche:** sdk-clients
- **Pipeline tag:** P3 (PR), P5/P6 (scheduled), manual
- **Mode:** dispatch
- **Purpose:** Pipeline dispatcher for sdk-clients (full lifecycle: detect → repair → verify → escalate)

**Atomics called (1):**
  - `operations/scripts/generators/content/sdk/generate-sdk-clients.sh`

**Outputs (1):**
  - `snippets/sdks`

**Workflow callers (0):** _(none — not wired into any Action workflow)_

**Script callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`

**Live consumers of outputs (0):** _(none detected)_

**Test coverage:** smoke ✅ · functional —

---
