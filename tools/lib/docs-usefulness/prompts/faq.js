'use strict';

const SYSTEM_BASE = 'You are a documentation quality evaluator for Livepeer docs. Return ONLY JSON: {"score":0-100,"pass":true/false,"reasoning":"one sentence"}.';

module.exports = {
  faq_real_questions: {
    system: `${SYSTEM_BASE} Evaluate realism of FAQ questions.`,
    user: `Evaluate this FAQ page.

Criteria:
- Questions reflect real user concerns.
- Questions are not placeholder or invented fluff.

PAGE CONTENT:
{content}`
  },
  faq_direct_answers: {
    system: `${SYSTEM_BASE} Evaluate directness of FAQ answers.`,
    user: `Evaluate this FAQ page.

Criteria:
- Answers address the question directly first.
- Avoids vague or circular responses.

PAGE CONTENT:
{content}`
  },
  faq_organised: {
    system: `${SYSTEM_BASE} Evaluate thematic organization in FAQ pages.`,
    user: `Evaluate this FAQ page for thematic grouping and scanability.

PAGE CONTENT:
{content}`
  }
};
