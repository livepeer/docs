# **Brand & Copy Guide — Implementation, Enforcement & Style Guide Additions**

Two jobs in one document:

1. How to enforce the Brand & Copy Guide (06) through repo tooling
1. What needs to be added to the existing Style Guide (`style-guide.mdx`) to cover the formatting gaps that 06 explicitly doesn't cover

**The split:** 06 (Brand & Copy Guide) covers voice, tone, terminology, messaging. The Style Guide covers formatting mechanics, CSS, components, Mintlify rules, metadata structure. Enforcement scripts serve both.

**Source:** Existing repo script infrastructure + Brand Guide requirements + Component Classification + Master Report script governance framework.

## **Current Enforcement Landscape**

The repo already has a script governance framework with three layers: local pre-commit hooks, PR-level CI checks, and full-scope audit reports. The brand/copy guide plugs into all three.

### **What Already Exists**

| **Script** | **What It Checks** | **Config** | **Output** |
| --- | --- | --- | --- |
| style-and-language-homogenizer-en-gb.js | UK English spelling, forbidden US terms, forbidden patterns (`/v2/pages/`, `style={{`, ThemeData) | style-language-profile-en-gb.json | Report: tasks/reports/repo-ops/ |
| component-layout-governance.js | Page type → required sections + allowed components. Validates landing pages have Overview section, how_to pages have Prerequisites + Steps, etc. | component-layout-profile.json | Report: tasks/reports/repo-ops/ |
| audit-v2-usefulness.js | Page-level usefulness matrix with source-weighted accuracy verification. Rules-only or hybrid scoring. | accuracy-source-registry.json, accuracy-source-weights.json | JSONL + CSV + JSON + MD in tasks/reports/quality-accessibility/ |
| docs-quality-and-freshness-audit.js | TODO/TBD/Coming Soon markers, placeholders, thin content detection | — | Report: tasks/reports/repo-ops/ |
| repo-audit-orchestrator.js | Unified pipeline: runs multiple audit stages, emits prioritised scorecard | Skill catalog + execution manifest | Summary: tasks/reports/repo-ops/ |
| cspell.json | Spell checking with en-GB dictionary + Livepeer custom terms | operations/tests/config/spell-dict.json | Inline errors |
| .githooks/pre-commit | Pre-commit enforcement: style + structure + staged checks | — | Blocks commit on violation |

### **What's Missing (Gap Analysis)**

| **Brand Guide Requirement** | **Current Enforcement** | **Gap** | **Priority** |
| --- | --- | --- | --- |
| UK English spelling | ✅ style-and-language-homogenizer-en-gb.js + cspell.json | Covered. Profile could be expanded with more US/UK pairs. | Low — already works |
| Banned words (simply, just, easily, leverage, etc.) | ❌ Not in style-language-profile-en-gb.json | Add to forbidden_terms in profile | High — easy win |
| Terminology enforcement (orchestrator not miner, gateway not broadcaster) | ❌ Not enforced | Add canonical/forbidden term pairs to profile | High — easy win |
| Page type → voice/structure validation | 🔶 Partial via component-layout-governance.js | Checks sections + components but not copy voice patterns (opening/closing structure, word count targets) | Medium |
| Frontmatter completeness | 🔶 Partial — semantic rollout adds pageType, audience, status | Not all pages have frontmatter yet. Enforcement ramps with semantic batches. | Medium — in progress |
| Page opening patterns (tutorial starts with goal, landing starts with value prop) | ❌ Not enforced | Would need new rule in usefulness or governance script | Medium |
| Page ending patterns (next steps, escalation) | ❌ Not enforced | Same — new rule needed | Medium |
| No "we/our" in technical docs | ❌ Not enforced | Add to forbidden_patterns with path-aware exceptions (Community tab allowed) | High — easy win |
| Description metadata quality | ❌ Not enforced | Check description length, presence, and "not just the title repeated" | Medium |
| Dead-end detection (pages without next-step links) | ❌ Not enforced | Would need link analysis per page type | Low |
| Badge colour consistency | ❌ Not enforced | Would need component-level prop checking | Low |
| Callout voice compliance | ❌ Not enforced | Very hard to automate — better as review checklist | Low |

## **Implementation Plan**

### **Phase 1: Profile Expansion (Immediate — no new scripts needed)**

These are config-file-only changes. Update existing JSON profiles, re-run existing scripts, instant enforcement.

#### **1a. Add banned words to **`style-language-profile-en-gb.json`

**How to apply:**

#### **1b. Add terminology pairs (new field in profile)**

The current profile only has `forbidden_terms`. Add a `terminology_pairs` field that maps forbidden → canonical:

**Script change needed:** Update `style-and-language-homogenizer-en-gb.js` to read `terminology_pairs` and flag violations with suggested replacements. Estimated effort: ~2 hours. The current script already iterates files and checks forbidden_terms — extend the same loop.

#### **1c. Expand **`component-layout-profile.json`

The current profile has 4 page types. The brand guide defines 10. Add the missing types:

**Script change needed:** Update `component-layout-governance.js` to prefer `frontmatter_pageType` over path-matching heuristics. Currently it guesses page type from the URL path — the frontmatter `pageType` field (being added via semantic rollout) should be the primary signal. Estimated effort: ~1 hour.

### **Phase 2: New Enforcement Rules (Short-term — extend existing scripts)**

These require code changes to existing scripts but follow established patterns.

#### **2a. "We/our" detector**

Add to `style-and-language-homogenizer-en-gb.js`:

#### **2b. Frontmatter completeness checker**

Add to the `repo-audit-orchestrator.js` pipeline or as a standalone stage:

#### **2c. Word count per page type**

Add to `component-layout-governance.js` or `audit-v2-usefulness.js`:

### **Phase 3: New Scripts (Medium-term — new capabilities)**

#### **3a. Page structure pattern checker**

A new script that checks whether a page follows the opening/closing pattern for its type:

- `tutorial` starts with "By the end" or similar goal statement
- `landing` has ≤3 paragraphs of prose (the rest is cards/routing)
- `how_to` starts with "This shows you how to" or similar
- Every non-reference page ends with a link to another page (no dead ends)

This is harder to automate reliably — use heuristics, not strict parsing. Output as warnings, not hard failures.

**Estimated effort:** 4-6 hours. New script, new config, new report output.

#### **3b. Cross-tab link auditor**

Validate that cross-tab content dependencies (from 04 blueprint) are actually linked:

- Every Gateway page that mentions staking links to LP Token
- Every GPU Nodes page that mentions payment links to Gateways payments
- Marketplace references link to About → Marketplace

**Estimated effort:** 6-8 hours. Needs the cross-tab dependency table as machine-readable config.

## **Enforcement Integration Points**

### **Where Each Check Runs**

| **Check** | **Pre-commit** | **PR CI** | **Full Audit** | **Semantic Batch** |
| --- | --- | --- | --- | --- |
| UK spelling (cspell) | ✅ | ✅ | ✅ | ✅ |
| Banned words (style profile) | — | ✅ | ✅ | ✅ |
| Terminology pairs | — | ✅ | ✅ | ✅ |
| Component/section governance | — | ✅ | ✅ | ✅ |
| Frontmatter completeness | — | ✅ | ✅ | ✅ |
| Word count targets | — | — | ✅ | ✅ |
| "We/our" detection | — | ✅ | ✅ | ✅ |
| Page structure patterns | — | — | ✅ | — |
| Dead-end detection | — | — | ✅ | — |
| Cross-tab link validation | — | — | ✅ | — |

### **Severity Levels**

| **Severity** | **Behaviour** | **Examples** |
| --- | --- | --- |
| Error (blocks) | Pre-commit or PR cannot proceed | Forbidden US spelling, missing required frontmatter, broken imports |
| Warning (flags) | PR can proceed but reviewer sees flag | Banned filler word, "we/our" usage, word count outside range |
| Info (reports) | Only in full audit reports | Page structure pattern deviations, missing cross-tab links |

### **The Enforcement Ramp (from Semantic Rollout)**

The semantic rollout (content-ui-separation.md) defines an enforcement ramp:

1. **Stage 1 (B01-B08):** Touched-file hard gates only. New enforcement applies only to files modified in the batch.
1. **Stage 2 (B09-B18):** Touched-file + section freeze gates. All files in a completed section must pass.
1. **Stage 3 (B19-B26):** Full-scope gates. No new regressions anywhere.
1. **Final:** Full audit pass + runtime smoke.

Brand/copy enforcement follows the same ramp. New rules start as warnings, become errors once the semantic rollout reaches that section.

## **Running the Enforcement Suite**

### **Quick check (local, pre-commit)**

### **PR-level check**

### **Full audit (periodic or pre-release)**

### **Per semantic batch**

## **Config File Reference**

| **Config File** | **What It Controls** | **Edit When...** |
| --- | --- | --- |
| tools/config/quality/style-language-profile-en-gb.json | Forbidden terms, forbidden patterns, locale, file scope | Adding banned words, terminology pairs, US/UK spelling pairs |
| tools/config/quality/component-layout-profile.json | Page type → required sections + allowed components | Adding page types, changing component rules |
| tools/config/quality/cspell.json | Spell check: locale, dictionaries, ignore paths | Adding new technical terms, adjusting ignore rules |
| operations/tests/config/spell-dict.json | Custom Livepeer dictionary (en-GB spellings) | Adding Livepeer-specific terms |
| tools/config/quality/accuracy-source-registry.json | Usefulness audit: which sources are trusted for verification | Adding/changing trusted sources |
| tools/config/quality/accuracy-source-weights.json | Usefulness audit: weight per source type | Adjusting verification scoring |
| tests/config/codex-issue-policy.json | Issue management policy for automated checks | — |
| operations/config/workspace/retention/report-retention-policy.json | How long audit reports are kept | — |

## **Priority Implementation Order**

1. **Add banned words + filler phrases to **`style-language-profile-en-gb.json` — 30 minutes, config-only, immediate value
1. **Add terminology pairs to profile + extend script** — 2 hours, high-value terminology enforcement
1. **Add "we/our" detection** — 1 hour, extend existing script
1. **Expand component-layout-profile to 10 page types** — 1 hour, config + minor script update
1. **Add frontmatter completeness check** — 2 hours, new rule in existing pipeline
1. **Add word count targets per page type** — 1 hour, extend governance script
1. **Page structure pattern checker** — 4-6 hours, new script
1. **Cross-tab link auditor** — 6-8 hours, new script + config

## **Style Guide Additions Required**

The existing `style-guide.mdx` (4,500 words) covers CSS/theming, Mintlify gotchas, component usage, git workflow, imports, and testing. It does NOT cover the formatting standards that documentation authors need. The following should be added to `style-guide.mdx`:

### **Headings (add to style guide)**

- **H1 (#):** Page title only. One per page. Set in frontmatter `title`, not in body.
- **H2 (##):** Major sections. Use for structural sections defined by page type (from 05a).
- **H3 (###):** Subsections within H2.
- **H4+ (####):** Rarely. If you need H4, consider splitting the page.

### **Code References in Prose (add to style guide)**

- **CLI flags:** backtick with double dash: `--gateway`, `--maxPricePerUnit`
- **Commands:** backtick: `livepeer -gateway`, `docker-compose up`
- **File names:** backtick: `docker-compose.yml`, `docs.json`
- **Values:** backtick: `mainnet`, `true`, `8935`
- **Concepts in running text:** no backtick. "The gateway mode" not "the `gateway` mode"

### **Links (add to style guide)**

- **Internal links:** Relative paths. `[Delegation Economics](../delegation/economics)`
- **External links:** Description first. "The[ go-livepeer repository](https://github.com/livepeer/go-livepeer) on GitHub" not "[Click here](https://claude.ai/chat/url) for the repo."
- **Cross-tab links:** Use canonical page name. `[Core Mechanisms](/about/core-mechanisms)`

### **Numbers and Units (add to style guide)**

- **ETH amounts:** Decimal: "0.1 ETH"
- **LPT amounts:** Plain: "100 LPT"
- **VRAM:** "32 GB VRAM"
- **Prices:** Match go-livepeer flag terminology: "per pixel", "per unit"
- **Time estimates:** "~30 minutes" for estimates, "5 minutes" for tested procedures

### **Frontmatter Requirements (add to style guide)**

### **Colour System Reference (add to style guide)**

The existing style guide covers CSS variables comprehensively. Add the badge colour assignment table:

| **Category** | **Badge Colour** | **Icon** |
| --- | --- | --- |
| Linux | yellow | linux |
| Windows | blue | windows |
| macOS | green | apple |
| Docker | blue | docker |
| AI pipeline | purple | — |
| Video pipeline | blue | — |
| Dual | green | — |
| On-chain | default | link |
| Off-chain | default | floppy-disk |

## **How Brand Guide & Style Guide Work Together**

| **Question Author Asks** | **Which Doc** | **Why** |
| --- | --- | --- |
| "How should I phrase this?" | Brand & Copy Guide (06) | Voice, tone, terminology |
| "What words should I avoid?" | Brand & Copy Guide (06) | Banned words, terminology |
| "How do I format this code block?" | Style Guide (style-guide.mdx) | Formatting mechanics |
| "What CSS variable for accent colour?" | Style Guide | Theming |
| "What frontmatter fields do I need?" | Style Guide | Metadata structure |
| "What should the frontmatter description SAY?" | Brand & Copy Guide (06) | Copy quality |
| "Can I use 'we' here?" | Brand & Copy Guide (06) | Voice rules |
| "Should I use H2 or H3?" | Style Guide | Structure |
| "What page opening pattern for a tutorial?" | Brand & Copy Guide (06) | Copy patterns |
| "Which Mintlify component for this?" | Content Taxonomy (05b) + Style Guide | Component decisions |
| "American or British spelling?" | Brand & Copy Guide (06) → enforced by Style Guide scripts | Both — rule in 06, enforcement in style guide tooling |

## **Author Workflow: Putting It All Together**

When writing a new page:

1. **Check 04 (IA Blueprint)** — does this page exist in the ideal IA? What journey does it serve?
1. **Check 05a (Page Taxonomy)** — what's the section order for this page type?
1. **Check 05b (Content Taxonomy)** — what content data types does this page need? Which components?
1. **Open 06 (Brand & Copy Guide)** — what voice for this page type? Opening/closing pattern? Terminology?
1. **Open **`style-guide.mdx` — formatting rules, CSS variables, Mintlify gotchas, frontmatter template
1. **Write the page**
1. **Run enforcement:** `node operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js --scope changed`
1. **Run governance:** `node operations/scripts/validators/components/library/component-layout-governance.js --scope changed`
