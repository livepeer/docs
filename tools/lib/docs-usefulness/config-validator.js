'use strict';

const {
  PURPOSE_ENUM,
  AUDIENCE_ENUM,
  loadRubric,
  loadJourneys,
  loadAudienceNormalization,
  loadLlmTiers
} = require('./rubric-loader');

function validateRubricPromptKeys(rubric, prompts) {
  const referenced = new Set();
  Object.entries(rubric).forEach(([purpose, rules]) => {
    if (!PURPOSE_ENUM.includes(purpose)) {
      throw new Error(`Invalid rubric purpose key: ${purpose}`);
    }

    const tier1 = rules?.tier1_rules || {};
    Object.entries(tier1).forEach(([ruleName, rule]) => {
      if (typeof rule.weight !== 'number') {
        throw new Error(`Rubric rule missing numeric weight: ${purpose}.${ruleName}`);
      }
      if (!rule.type) {
        throw new Error(`Rubric rule missing type: ${purpose}.${ruleName}`);
      }
    });

    const tier2 = rules?.tier2_llm || {};
    Object.entries(tier2).forEach(([criterion, config]) => {
      if (typeof config.weight !== 'number') {
        throw new Error(`Tier2 criterion missing numeric weight: ${purpose}.${criterion}`);
      }
      if (!config.prompt_key) {
        throw new Error(`Tier2 criterion missing prompt_key: ${purpose}.${criterion}`);
      }
      referenced.add(config.prompt_key);
    });
  });

  referenced.forEach((promptKey) => {
    if (!prompts[promptKey]) {
      throw new Error(`Rubric references unknown prompt key: ${promptKey}`);
    }
  });
}

function validateJourneyConfig(journeys) {
  Object.entries(journeys).forEach(([personaKey, journey]) => {
    if (!Array.isArray(journey.steps) || journey.steps.length === 0) {
      throw new Error(`Journey ${personaKey} has no steps`);
    }

    journey.steps.forEach((step) => {
      if (!Array.isArray(step.path_patterns) || step.path_patterns.length === 0) {
        throw new Error(`Journey ${personaKey} step ${step.position} missing path_patterns`);
      }
      step.path_patterns.forEach((pattern) => {
        if (String(pattern).includes('v2/platforms/')) {
          throw new Error(`Journey ${personaKey} step ${step.position} uses forbidden pattern: ${pattern}`);
        }
      });
    });
  });
}

function validateAudienceConfig(config) {
  const canonical = config.canonical_audiences || [];
  AUDIENCE_ENUM.forEach((audience) => {
    if (!canonical.includes(audience)) {
      throw new Error(`Audience normalization missing canonical value: ${audience}`);
    }
  });

  if (!config.section_defaults || !config.section_defaults.solutions) {
    throw new Error('Audience normalization missing section default for solutions');
  }

  if (config.section_defaults.platforms) {
    throw new Error('Audience normalization must not define deprecated platforms section');
  }
}

function validateLlmTiers(config) {
  if (!config.default_tier) {
    throw new Error('LLM tiers config missing default_tier');
  }
  if (!config.tiers || !config.tiers[config.default_tier]) {
    throw new Error(`LLM tiers missing default tier definition: ${config.default_tier}`);
  }

  ['free', 'good', 'optimal'].forEach((tier) => {
    if (!config.tiers[tier]) {
      throw new Error(`LLM tiers missing required tier: ${tier}`);
    }
    if (!Array.isArray(config.tiers[tier].models) || config.tiers[tier].models.length === 0) {
      throw new Error(`LLM tier has no models: ${tier}`);
    }
  });
}

function validateUsefulnessConfig({ rubric, journeys, audience, llmTiers, prompts }) {
  validateRubricPromptKeys(rubric, prompts);
  validateJourneyConfig(journeys);
  validateAudienceConfig(audience);
  validateLlmTiers(llmTiers);
}

function loadAndValidateUsefulnessConfig(prompts) {
  const rubric = loadRubric();
  const journeys = loadJourneys();
  const audience = loadAudienceNormalization();
  const llmTiers = loadLlmTiers();
  validateUsefulnessConfig({ rubric, journeys, audience, llmTiers, prompts });
  return { rubric, journeys, audience, llmTiers };
}

module.exports = {
  validateUsefulnessConfig,
  loadAndValidateUsefulnessConfig
};
