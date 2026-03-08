'use strict';

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  landing_routing_clarity: {
    system: `${SYSTEM_BASE} Evaluate routing clarity for landing pages.`,
    user: `Evaluate if this landing page routes users clearly.

Criteria:
- Users can choose where to go next.
- Navigation options are explicit.
- No ambiguity about recommended next clicks.

PAGE CONTENT:
{content}`
  },
  audience_signal: {
    system: `${SYSTEM_BASE} Evaluate audience signaling strength.`,
    user: `Evaluate whether this page clearly states who it is for.

Declared audience: {audience}

Criteria:
- Audience cues are visible in title/opening copy.
- Terminology matches the audience.

PAGE CONTENT:
{content}`
  },
  landing_no_teaching: {
    system: `${SYSTEM_BASE} Evaluate that landing pages avoid deep instructional teaching.`,
    user: `Evaluate whether this landing page avoids deep tutorial content.

Criteria:
- Mostly orientation/routing.
- Limited procedural depth.
- No long step-by-step instruction blocks.

PAGE CONTENT:
{content}`
  }
};
