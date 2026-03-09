'use strict';
/**
 * @script            llm-evaluator
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Wraps LLM API calls for rubric-based page quality evaluation.
 * @pipeline          indirect -- library module
 * @usage             const { evaluate } = require('../lib/docs-usefulness/llm-evaluator');
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { loadLlmTiers } = require('./rubric-loader');

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const CACHE_DIR = path.join(__dirname, '../../../.cache/llm-usefulness');

function ensureCacheDir() {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function clampScore(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 0;
  if (numeric < 0) return 0;
  if (numeric > 100) return 100;
  return Math.round(numeric);
}

class LlmEvaluator {
  constructor(apiKey, options = {}) {
    if (!apiKey) throw new Error('OPENROUTER_API_KEY is required when --llm is enabled.');
    ensureCacheDir();

    const tierConfig = loadLlmTiers();
    const tierName = options.tier || tierConfig.default_tier || 'free';
    const tier = tierConfig.tiers?.[tierName];
    if (!tier) {
      throw new Error(`Unknown llm tier: ${tierName}`);
    }

    this.apiKey = apiKey;
    this.tierName = tierName;
    this.tier = tier;
    this.maxRetries = Number(options.maxRetries || 2);
    this.batchInterval = this.tierName === 'free' ? 3200 : 1000;
    this.lastCallMs = 0;
    this.callCount = 0;
    this.spentUsd = 0;

    const defaultBudget = Number(this.tier.default_budget_usd ?? 0);
    const budgetInput = Number(options.budget);
    this.budget = this.tierName === 'free' ? 0 : Number.isFinite(budgetInput) && budgetInput >= 0 ? budgetInput : defaultBudget;

    this.modelIndex = 0;
    this.modelDailyCounts = {};
    this.modelMinuteCounts = {};
    this.minuteWindowStart = Date.now();

    this._loadDailyCounts();
  }

  _dailyFile() {
    const date = new Date().toISOString().slice(0, 10);
    return path.join(CACHE_DIR, `daily-counts-${date}.json`);
  }

  _loadDailyCounts() {
    const file = this._dailyFile();
    if (!fs.existsSync(file)) return;
    try {
      this.modelDailyCounts = JSON.parse(fs.readFileSync(file, 'utf8')) || {};
    } catch (_error) {
      this.modelDailyCounts = {};
    }
  }

  _saveDailyCounts() {
    fs.writeFileSync(this._dailyFile(), JSON.stringify(this.modelDailyCounts, null, 2));
  }

  _cacheKey(page, promptKey) {
    const body = String(page.content || page.textContent || '');
    const hash = crypto.createHash('md5').update(body).digest('hex').slice(0, 12);
    const safePath = String(page.path || 'unknown').replace(/[\\/]/g, '_');
    return `${safePath}__${hash}__${promptKey}.json`;
  }

  _cacheFile(key) {
    return path.join(CACHE_DIR, key);
  }

  _readCache(key) {
    const file = this._cacheFile(key);
    if (!fs.existsSync(file)) return null;
    try {
      return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (_error) {
      return null;
    }
  }

  _writeCache(key, data) {
    fs.writeFileSync(this._cacheFile(key), JSON.stringify(data, null, 2));
  }

  _minuteLimit() {
    return Number(this.tier.rate_limit?.per_minute || 60);
  }

  _dailyLimit() {
    const limit = this.tier.rate_limit?.per_day;
    return limit === null || limit === undefined ? null : Number(limit);
  }

  _resetMinuteWindowIfNeeded() {
    if (Date.now() - this.minuteWindowStart > 60000) {
      this.minuteWindowStart = Date.now();
      this.modelMinuteCounts = {};
    }
  }

  _modelMinuteCount(model) {
    this._resetMinuteWindowIfNeeded();
    return Number(this.modelMinuteCounts[model] || 0);
  }

  _modelDailyCount(model) {
    return Number(this.modelDailyCounts[model] || 0);
  }

  _recordCall(model) {
    this.callCount += 1;
    this.modelDailyCounts[model] = this._modelDailyCount(model) + 1;
    this.modelMinuteCounts[model] = this._modelMinuteCount(model) + 1;
    this._saveDailyCounts();
  }

  _remainingCapacity() {
    const perDay = this._dailyLimit();
    if (perDay === null) return null;
    return (this.tier.models || []).reduce((sum, model) => sum + Math.max(0, perDay - this._modelDailyCount(model)), 0);
  }

  _selectModel() {
    const models = this.tier.models || [];
    if (models.length === 0) return null;

    const perDay = this._dailyLimit();
    for (let offset = 0; offset < models.length; offset += 1) {
      const idx = (this.modelIndex + offset) % models.length;
      const model = models[idx];

      if (perDay !== null && this._modelDailyCount(model) >= perDay) {
        continue;
      }

      const minuteLimit = this._minuteLimit();
      if (this._modelMinuteCount(model) >= minuteLimit) {
        continue;
      }

      this.modelIndex = idx;
      return model;
    }

    return null;
  }

  async _respectRateLimit() {
    const elapsed = Date.now() - this.lastCallMs;
    if (elapsed < this.batchInterval) {
      await this._sleep(this.batchInterval - elapsed);
    }
    this.lastCallMs = Date.now();
  }

  _interpolate(template, page, audience, purpose) {
    return String(template || '')
      .replace('{content}', String(page.textContent || '').slice(0, 4000))
      .replace('{frontmatter}', JSON.stringify(page.frontmatter || {}, null, 2))
      .replace('{audience}', String(audience || page.frontmatter?.audience || page.section || 'unknown'))
      .replace('{purpose}', String(purpose || page.frontmatter?.purpose || 'unknown'));
  }

  _extractJson(text) {
    const raw = String(text || '').trim();
    const cleaned = raw.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
    try {
      return JSON.parse(cleaned);
    } catch (_error) {
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          return JSON.parse(match[0]);
        } catch (_inner) {
          return null;
        }
      }
      return null;
    }
  }

  async evaluate(page, criterion, promptTemplate, context = {}) {
    const cacheKey = this._cacheKey(page, criterion);
    if (context.resume !== false) {
      const cached = this._readCache(cacheKey);
      if (cached) return { ...cached, cached: true };
    }

    if (this.tierName !== 'free' && this.spentUsd >= this.budget) {
      return { status: 'budget_exceeded' };
    }

    let model = this._selectModel();
    if (!model) {
      return { status: 'daily_limit_exhausted' };
    }

    const messages = [
      { role: 'system', content: String(promptTemplate.system || '') },
      {
        role: 'user',
        content: this._interpolate(promptTemplate.user, page, context.audience, context.purpose)
      }
    ];

    for (let attempt = 0; attempt <= this.maxRetries; attempt += 1) {
      try {
        await this._respectRateLimit();

        const response = await fetch(OPENROUTER_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://docs.livepeer.org',
            'User-Agent': 'livepeer-docs-usefulness-audit/2.0'
          },
          body: JSON.stringify({
            model,
            messages,
            max_tokens: 300,
            temperature: 0.1
          })
        });

        if (response.status === 429) {
          this.modelIndex = (this.modelIndex + 1) % this.tier.models.length;
          const nextModel = this._selectModel();
          if (!nextModel) {
            return { status: 'daily_limit_exhausted' };
          }
          model = nextModel;
          continue;
        }

        if (response.status >= 500) {
          if (attempt < this.maxRetries) {
            await this._sleep(1500 * (attempt + 1));
            continue;
          }
          return { status: 'service_error', error: `HTTP ${response.status}`, model };
        }

        if (!response.ok) {
          const body = await response.text();
          return {
            status: 'error',
            error: `HTTP ${response.status}: ${body.slice(0, 200)}`,
            model
          };
        }

        const payload = await response.json();
        const message = payload?.choices?.[0]?.message?.content || '';
        const parsed = this._extractJson(message);
        if (!parsed) {
          return { status: 'malformed_response', raw: message.slice(0, 240), model };
        }

        const result = {
          score: clampScore(parsed.score),
          pass: Boolean(parsed.pass),
          reasoning: String(parsed.reasoning || '').trim(),
          model
        };

        if (result.score >= 60) {
          result.pass = true;
        }

        if (this.tierName !== 'free') {
          const usage = Number(payload?.usage?.total_tokens || 0);
          const roughPerToken = Number(this.tier.cost_per_token || 0);
          if (roughPerToken > 0 && usage > 0) {
            this.spentUsd += usage * roughPerToken;
          }
        }

        this._recordCall(model);
        this._writeCache(cacheKey, result);
        return result;
      } catch (error) {
        if (attempt >= this.maxRetries) {
          return { status: 'error', error: error.message, model };
        }
        await this._sleep(1200 * (attempt + 1));
      }
    }

    return { status: 'error', error: 'exhausted_retries', model };
  }

  async evaluateAll(page, tier2Rules, prompts, context = {}) {
    const details = {};
    let weightedScore = 0;
    let weightSum = 0;

    for (const [name, config] of Object.entries(tier2Rules || {})) {
      const template = prompts[config.prompt_key];
      if (!template) {
        details[name] = { status: 'no_template', score: null };
        continue;
      }

      const outcome = await this.evaluate(page, config.prompt_key, template, context);
      if (outcome.status && outcome.score === undefined) {
        details[name] = outcome;
        continue;
      }

      const score = clampScore(outcome.score);
      const pass = score >= 60;
      details[name] = {
        score,
        pass,
        reasoning: outcome.reasoning || '',
        model: outcome.model
      };
      weightSum += Number(config.weight || 0);
      weightedScore += score * Number(config.weight || 0);
    }

    const score = weightSum > 0 ? Math.round(weightedScore / weightSum) : null;
    return {
      score,
      details
    };
  }

  printUsageSummary() {
    const lines = [];
    lines.push('LLM USAGE SUMMARY');
    lines.push(`  Tier: ${this.tierName}`);
    lines.push(`  Total calls: ${this.callCount}`);
    if (this.tierName !== 'free') {
      lines.push(`  Estimated cost: $${this.spentUsd.toFixed(3)}`);
    }

    const models = this.tier.models || [];
    models.forEach((model) => {
      const count = this._modelDailyCount(model);
      const limit = this._dailyLimit();
      const suffix = limit === null ? '' : `/${limit}`;
      lines.push(`  ${model.split('/').pop()}: ${count}${suffix}`);
    });

    const remaining = this._remainingCapacity();
    if (remaining !== null) {
      lines.push(`  Remaining daily capacity: ${remaining} calls`);
    }

    lines.forEach((line) => console.error(line));
  }

  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = {
  LlmEvaluator,
  CACHE_DIR
};
