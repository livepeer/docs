# Section Hardening Follow-up Recommendations (Plan Only)

Date: 2026-03-02  
Scope: Recommendations only (no implementation in this artifact)

## Goals

1. Increase first-visit comprehension and action rate for priority persona pages.
2. Reduce cognitive load in long-form sections with faster scan patterns.
3. Strengthen trust by tightening factual precision and source anchoring on volatile claims.

## Target 1: `v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx`

### Copy Clarity Upgrades

1. Open with a two-sentence value summary using explicit operator outcomes: revenue sources, setup burden, and expected ongoing tasks.
2. Convert passive opportunity language into decision framing:
   - "Run a gateway if..."
   - "Do not run a gateway yet if..."
3. Add one terminology guardrail box mapping UI terms and protocol terms where they can be confused.

### IA Simplification

1. Reorder to decision-first flow:
   - Why now
   - Readiness checklist
   - Earnings model
   - Risks and constraints
   - Next action paths
2. Collapse repetitive explanatory content into one "Common misconceptions" section.
3. Keep only one primary CTA block at page end with two explicit paths:
   - Start setup
   - Compare with delegation alternative

### Style and Scanability

1. Replace dense accordion narrative with bullet-led summaries (max 5 bullets per accordion item).
2. Add "at a glance" cards at top for:
   - Time to first value
   - Capital requirements
   - Operational complexity
3. Keep section paragraphs <= 4 lines where possible.

### Measurable Acceptance Criteria

1. Reader can identify "should I run a gateway" decision criteria in < 30 seconds.
2. No section exceeds 180 words without a subheading or list break.
3. Exactly one primary CTA and one secondary CTA in final section.

## Target 2: `v2/developers/developer-path.mdx`

### Copy Clarity Upgrades

1. Normalize each persona tab intro into one sentence: "Who this is for" + "What you ship first".
2. Add explicit output language per tab (e.g., "Deploy a text-to-image endpoint" not "build AI apps").
3. Remove duplicated conceptual statements that already exist in child pages.

### IA Simplification

1. Enforce tab endpoint structure:
   - Fit check
   - First build
   - Prereqs
   - Next steps
2. Keep one primary CTA + one secondary CTA at end of every tab.
3. Add cross-tab switch hints ("If you need X instead, switch to Y tab") to prevent dead-end reading.

### Style and Scanability

1. Standardize tab bodies to the same visual rhythm:
   - short intro
   - compact decision box
   - two action cards
2. Reduce long prose inside tab panels by moving detail to linked destination pages.
3. Ensure link labels are action verbs ("Start AI pipelines quickstart") instead of generic labels.

### Measurable Acceptance Criteria

1. All tabs have identical section skeleton and consistent heading pattern.
2. Each tab ends with exactly 2 CTAs (1 primary, 1 secondary).
3. Duplicate sentence-level overlap across tabs reduced to near-zero (manual editorial check).

## Target 3: `v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx`

### Copy Clarity Upgrades

1. Separate "what is verified" from "check current provider values" with explicit dated callouts.
2. Move endpoint/auth ambiguity into one "Current contract" block with portal link first.
3. Add one minimal success-path example that defines request, auth, and success signal in 4-6 lines.

### IA Simplification

1. Top-of-page quick path:
   - Prereqs
   - Time
   - First request
   - Where to debug failures
2. Keep provider-specific operational guidance ahead of generic Livepeer background.
3. Add a short escalation path section (where to confirm breaking endpoint changes).

### Style and Scanability

1. Replace long warning prose with compact note components:
   - verified now
   - may change
   - where to verify
2. Convert mixed text/link blocks into a compact table:
   - task
   - canonical location
   - volatility
3. Reduce heading depth to max H3 for this page.

### Measurable Acceptance Criteria

1. New user can find first request path in <= 20 seconds.
2. Every volatile factual claim has a date marker and verification source link.
3. Page includes exactly one canonical endpoint pattern in body text.

## Cross-Page Editorial Guardrails for Next Sprint

1. Keep terminology canonical:
   - protocol: `rewardCut`, `feeShare`
   - UI labels: Reward Cut, Fee Cut
2. Keep volatile claims dated with format: `As of DD-MonthString-YYYY`.
3. Prefer portal/docs links over hardcoded endpoint claims when certainty is < 100%.
4. Enforce "first action" block in operator/provider persona pages.

## Recommended Validation Plan (Next Sprint)

1. Run staged content checks after each page update:
   - `node tests/unit/style-guide.test.js --staged`
   - `node tests/unit/mdx.test.js --staged`
2. Run strict file-targeted link audit on touched pages.
3. Run `node tests/unit/docs-navigation.test.js --strict-missing` and confirm no new missing route deltas.
4. Run usefulness audit and require both human + agent score >= 60 for the three target pages.
