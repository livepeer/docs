'use strict';

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  changelog_clear: {
    system: `${SYSTEM_BASE} Evaluate changelog summary clarity.`,
    user: `Evaluate this changelog page.

Criteria:
- Entries clearly describe what changed.
- Time/version context is clear.

PAGE CONTENT:
{content}`
  },
  changelog_actionable: {
    system: `${SYSTEM_BASE} Evaluate changelog actionability for implementers.`,
    user: `Evaluate whether this changelog tells developers what action they should take.

PAGE CONTENT:
{content}`
  }
};
