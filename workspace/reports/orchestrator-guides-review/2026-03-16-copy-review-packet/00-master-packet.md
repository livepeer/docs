# Orchestrator Copy + Style Execution Tracker

- Worktree: `Docs-v2-dev`
- Branch: `docs-v2-dev`
- Baseline framework commit: `743484d7`
- Scope: selected `v2/orchestrators` sections covered by this packet.
- Research reports remain on disk for later use, but they are intentionally excluded from this execution tracker.
- `Staking & Earning` remains one execution section even though its pages span `staking-and-rewards` and `payments-and-pricing`.
- Carry-forward for the next tranche: build authoring/style tasks from the raw `authoring-style-findings.json` as well as `02-authoring-style.md`. The markdown summary can understate per-page style and quality findings.
- When rolling findings into a future tranche plan, deduplicate repeated raw warnings into page-level action families so the tracker captures real work without becoming a line-by-line lint dump.
- Use `~~strikethrough~~` only after the specific task is completed and the relevant targeted checks have been rerun.

## Execution Order

1. Concepts
2. Quickstart
3. Setup
4. Operator Considerations
5. Deployment Details
6. Workloads & AI
7. Staking & Earning
8. Config & Optimisation
9. Monitoring & Tools
10. Advanced Operations
11. Roadmap & Funding
12. Tutorials

## Completion Rules

- Strike through an individual task bullet only when that specific task is complete and the relevant targeted checks have been rerun.
- A page is complete when both its `[copy-framework]` and `[authoring-style]` bullets are struck through.
- A section is complete when every page task in that section is struck through.
- When a section is complete, strike through the section title and its status line. Leave report reference lines readable.
- Do not use checkboxes in this tracker.

## Carry-Forward Rules for Future Tranches

- Treat the raw JSON artefacts as the source of truth for authoring/style task extraction when a markdown summary looks incomplete.
- Collapse repeated style, quality, and supplemental warnings into one actionable page-level task per fix family.
- Refresh future tranche plans from the existing packet artefacts first; do not rebuild the queue from the markdown summaries alone.

## ~~Concepts~~

- ~~Status: complete~~
- Copy-framework pressure: 16 blocking / 67 warnings
- Authoring/style pressure: 4 blocking / 65 warnings
- Source reports: `09-concepts/01-copy-framework.md`, `09-concepts/02-authoring-style.md`
- Completion note: section checks rerun with 0 blocking copy findings, 0 blocking structure findings, and clean authoring, links/imports, MDX, and quality results. Residual copy warnings are accepted heuristic noise from mermaid, comments, or fenced content.

### `role.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] remove unnecessary inline `CustomDivider` spacing overrides.~~

### `capabilities.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] remove unnecessary inline `CustomDivider` spacing overrides.~~

### `architecture.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `incentive-model.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; remove unnecessary inline `CustomDivider` spacing overrides.~~


## ~~Quickstart~~

- ~~Status: complete~~
- Copy-framework pressure: 16 blocking / 31 warnings
- Authoring/style pressure: 0 blocking / 33 warnings
- Source reports: `10-quickstart/01-copy-framework.md`, `10-quickstart/02-authoring-style.md`
- Completion note: section checks rerun with 0 blocking copy findings, 0 blocking structure findings, and clean links/imports, MDX, and quality results. Residual copy warnings are accepted false positives from fenced content, and the remaining file-name style warning is intentionally accepted because this tranche preserves `AI-prompt-start.mdx` by plan.

### `guide.mdx`
- ~~[copy-framework] replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] trim filler or marketing phrasing flagged by the style checks.~~

### `video-transcoding.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~

### `tutorial.mdx`
- ~~[copy-framework] fix copy-framework structure blockers such as missing frontmatter requirements before the page can be marked complete.~~
- ~~[authoring-style] no action required from the selected authoring/style checks.~~

### `AI-prompt-start.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~


## ~~Setup~~

- ~~Status: complete~~
- Copy-framework pressure: 12 blocking / 95 warnings
- Authoring/style pressure: 0 blocking / 43 warnings
- Source reports: `11-setup/01-copy-framework.md`, `11-setup/02-authoring-style.md`
- Completion note: section checks rerun with 0 blocking copy findings, 0 blocking structure findings, 0 pattern warnings, and clean scoped authoring, links/imports, MDX, and quality results. Residual copy warnings are accepted false positives from tables, accordions, headings, and fenced content.

### `guide.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] no action required from the selected authoring/style checks.~~

### `rcs-requirements.mdx`
- ~~[copy-framework] remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] remove unnecessary inline `CustomDivider` spacing overrides.~~

### `rs-install.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons.~~

### `configure.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons.~~

### `connect-and-activate.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] trim filler or marketing phrasing flagged by the style checks.~~

### `test.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons.~~

### `r-monitor.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] add missing code block filenames/titles.~~


## ~~Operator Considerations~~

- ~~Status: complete~~
- Copy-framework pressure: 45 blocking / 155 warnings
- Authoring/style pressure: 0 blocking / 55 warnings
- Source reports: `12-operator-considerations/01-copy-framework.md`, `12-operator-considerations/02-authoring-style.md`
- Completion note: section checks rerun with 0 blocking copy findings, 0 blocking structure findings, 0 scoped style, links/imports, MDX, and quality issues. Residual copy and pattern warnings are accepted heuristic noise from tables, accordions, comments, and fenced content.

### `operator-rationale.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; replace vague standards and dangling claims with explicit thresholds or concrete statements; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] trim filler or marketing phrasing flagged by the style checks; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `business-case.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; replace vague standards and dangling claims with explicit thresholds or concrete statements; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] trim filler or marketing phrasing flagged by the style checks; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `operator-impact.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; replace vague standards and dangling claims with explicit thresholds or concrete statements; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] trim filler or marketing phrasing flagged by the style checks; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `requirements.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks; remove unnecessary inline `CustomDivider` spacing overrides.~~


## ~~Deployment Details~~

- ~~Status: complete~~
- Copy-framework pressure: 32 blocking / 183 warnings
- Authoring/style pressure: 0 blocking / 95 warnings
- Source reports: `01-deployment-details/01-copy-framework.md`, `01-deployment-details/02-authoring-style.md`
- Completion note: section checks rerun clean on structure, authoring, links/imports, MDX, quality, and supplemental authoring rules. Residual copy-lint warnings are accepted false positives on code fences or component markup.

### `setup-options.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] add missing code block filenames/titles; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `siphon-setup.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; remove unnecessary inline `CustomDivider` spacing overrides; rewrite negation-first definitions as positive statements.~~

### `dual-mode-configuration.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] remove unnecessary inline `CustomDivider` spacing overrides.~~

### `orchestrator-transcoder-setup.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] add missing code block filenames/titles; remove unnecessary inline `CustomDivider` spacing overrides.~~

### `join-a-pool.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~

### `new-join-a-pool.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; remove unnecessary inline `CustomDivider` spacing overrides.~~


## ~~Workloads & AI~~

- ~~Status: complete~~
- Copy-framework pressure: 148 blocking / 274 warnings
- Authoring/style pressure: 0 blocking / 145 warnings
- Source reports: `02-workloads-and-ai/01-copy-framework.md`, `02-workloads-and-ai/02-authoring-style.md`
- Completion note: section checks rerun clean on structure, authoring, links/imports, MDX, quality, and supplemental authoring rules. Residual copy-lint warnings are accepted false positives on table or code-block content.

### `workload-options.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] replace templated opening language with a direct explanatory lead; trim filler or marketing phrasing flagged by the style checks.~~

### `video-transcoding-operations.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles; replace templated opening language with a direct explanatory lead; rewrite negation-first definitions as positive statements.~~

### `ai-inference-operations.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] no action required from the selected authoring/style checks.~~

### `diffusion-pipeline-setup.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~

### `llm-pipeline-setup.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~

### `realtime-ai-setup.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~

### `audio-and-vision-pipelines.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; add missing `Image` alt text.~~

### `model-demand-reference.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~

### `model-hosting.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~


## ~~Staking & Earning~~

- ~~Status: complete~~
- Copy-framework pressure: 18 blocking / 118 warnings
- Authoring/style pressure: 0 blocking / 37 warnings
- Source reports: `03-staking-and-earning/01-copy-framework.md`, `03-staking-and-earning/02-authoring-style.md`
- Completion note: section checks rerun clean on structure, authoring, links/imports, MDX, quality, and supplemental authoring rules. Residual copy-lint warnings are accepted false positives on one illustrative example row and one explanatory bullet.

### `earning-model.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] no action required from the selected authoring/style checks.~~

### `reward-mechanics.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; replace templated opening language with a direct explanatory lead.~~

### `payment-receipts.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; rewrite negation-first definitions as positive statements.~~

### `payments.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] rewrite negation-first definitions as positive statements; trim filler or marketing phrasing flagged by the style checks.~~

### `delegate-operations.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] replace templated opening language with a direct explanatory lead; rewrite negation-first definitions as positive statements.~~

### `network-participation.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~


## ~~Config & Optimisation~~

- ~~Status: complete~~
- Copy-framework pressure: 51 blocking / 71 warnings
- Authoring/style pressure: 0 blocking / 38 warnings
- Source reports: `04-config-and-optimisation/01-copy-framework.md`, `04-config-and-optimisation/02-authoring-style.md`
- Completion note: section checks rerun clean on copy-framework, structure, authoring, links/imports, MDX, quality, and supplemental authoring rules.

### `pricing-strategy.mdx`
- ~~[copy-framework] remove banned word and banned phrase constructions; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~

### `capacity-planning.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles; rewrite negation-first definitions as positive statements.~~

### `ai-model-management.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles.~~

### `reward-call-tuning.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~


## ~~Monitoring & Tools~~

- ~~Status: complete~~
- Copy-framework pressure: 37 blocking / 220 warnings
- Authoring/style pressure: 0 blocking / 48 warnings
- Source reports: `05-monitoring-and-tools/01-copy-framework.md`, `05-monitoring-and-tools/02-authoring-style.md`
- Completion note: section checks rerun clean on copy blocking, structure, style, links/imports, MDX, quality, and supplemental authoring rules. Residual copy/pattern warnings are accepted on symptom-first troubleshooting prose, code-fence examples, and a few false positives on component markup.

### `operator-toolbox.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles.~~

### `explorer-operations.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] replace templated opening language with a direct explanatory lead.~~

### `metrics-and-alerting.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; replace templated opening language with a direct explanatory lead; trim filler or marketing phrasing flagged by the style checks.~~

### `troubleshooting.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; repair incomplete decision aids and pull primary actions out of gated UI copy; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; rewrite negation-first definitions as positive statements; trim filler or marketing phrasing flagged by the style checks.~~


## ~~Advanced Operations~~

- ~~Status: complete~~
- Copy-framework pressure: 11 blocking / 108 warnings
- Authoring/style pressure: 0 blocking / 28 warnings
- Source reports: `06-advanced-operations/01-copy-framework.md`, `06-advanced-operations/02-authoring-style.md`
- Completion note: section checks rerun clean on copy blocking, structure, style, links/imports, MDX, quality, and supplemental authoring rules. Residual copy/pattern warnings are accepted on mermaid/table content, comparative guidance, and other non-blocking framework heuristics.

### `gateway-relationships.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles.~~

### `gateway-orchestrator-interface.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles; trim filler or marketing phrasing flagged by the style checks.~~

### `pool-operators.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims.~~
- ~~[authoring-style] add missing code block filenames/titles; rewrite negation-first definitions as positive statements.~~

### `scale-operations.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles.~~


## ~~Roadmap & Funding~~

- ~~Status: complete~~
- Copy-framework pressure: 2 blocking / 0 warnings
- Authoring/style pressure: 0 blocking / 2 warnings
- Source reports: `07-roadmap-and-funding/01-copy-framework.md`, `07-roadmap-and-funding/02-authoring-style.md`
- Completion note: section checks rerun clean on copy, structure, pattern, style, links/imports, MDX, quality, and supplemental authoring rules.

### `funding-and-support.mdx`
- ~~[copy-framework] keep a manual value-prop and persona check in follow-up.~~
- ~~[authoring-style] add the missing `lastVerified` frontmatter field.~~

### `orchestrator-profiles.mdx`
- ~~[copy-framework] keep a manual value-prop and persona check in follow-up.~~
- ~~[authoring-style] add the missing `lastVerified` frontmatter field.~~


## ~~Tutorials~~

- ~~Status: complete~~
- Copy-framework pressure: 39 blocking / 115 warnings
- Authoring/style pressure: 0 blocking / 80 warnings
- Source reports: `08-tutorials/01-copy-framework.md`, `08-tutorials/02-authoring-style.md`
- Completion note: section checks rerun clean on patterns, structure, style, links/imports, MDX, quality, and supplemental authoring rules. Residual copy-lint warnings are accepted false positives from code-fence content and blank-line matching.

### `byoc-cpu-smoke-test.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~

### `zero-to-first-reward.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; replace templated opening language with a direct explanatory lead; trim filler or marketing phrasing flagged by the style checks.~~

### `ai-earning-quickstart.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~

### `add-ai-to-video-node.mdx`
- ~~[copy-framework] tighten persona routing and replace hedge logic with explicit decision criteria; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~

### `full-ai-pipeline-tutorial.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~

### `realtime-ai-tutorial.mdx`
- ~~[copy-framework] rewrite the opening and section leads around a direct value proposition; tighten persona routing and replace hedge logic with explicit decision criteria; remove banned word and banned phrase constructions; replace negative, weakened, and contrast-by-diminishment phrasing with direct claims; clear rendered REVIEW flags and other copy blockers before the page can be marked complete; replace vague standards and dangling claims with explicit thresholds or concrete statements.~~
- ~~[authoring-style] add missing code block filenames/titles and icons; trim filler or marketing phrasing flagged by the style checks.~~


## Nav-Order Execution Contract

1. Complete all `[copy-framework]` tasks for the current section.
2. Complete all `[authoring-style]` tasks for the same section.
3. Rerun the targeted copy-framework checks and targeted authoring/style checks for that section.
4. Strike through only the tasks that are actually complete.
5. Move to the next section only after the current section is fully complete.
6. Run the repo git-hook or pre-commit validation as the final section-close step before handoff or commit.
