'use strict';

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  howto_action_result: {
    system: `${SYSTEM_BASE} Evaluate action/result pairing for how-to pages.`,
    user: `Evaluate this how-to page.

Criteria:
- Steps specify concrete actions.
- Steps include expected outputs/results.
- User can verify success after each stage.

PAGE CONTENT:
{content}`
  },
  audience_knowledge: {
    system: `${SYSTEM_BASE} Evaluate audience knowledge fit.`,
    user: `Evaluate whether this page matches declared audience knowledge.

Declared audience: {audience}
Declared purpose: {purpose}

PAGE CONTENT:
{content}`
  },
  howto_troubleshooting: {
    system: `${SYSTEM_BASE} Evaluate troubleshooting coverage for how-to pages.`,
    user: `Evaluate this how-to page.

Criteria:
- Mentions common failures.
- Provides recovery guidance or links.

PAGE CONTENT:
{content}`
  }
};
