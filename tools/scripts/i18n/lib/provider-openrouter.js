/**
 * @script            provider-openrouter
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement OpenRouter translation provider — calls OpenRouter API for actual translations
 * @pipeline          indirect — library module
 * @usage             node tools/scripts/i18n/lib/provider-openrouter.js [flags]
 */
const { chunkArray } = require('./common');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function assertOpenRouterConfig(config) {
  if (!config || typeof config !== 'object') throw new Error('Missing OpenRouter config');
  const models = config.modelCandidates || [];
  if (!Array.isArray(models) || models.length === 0) {
    throw new Error('OpenRouter modelCandidates must be a non-empty array');
  }
}

function getOpenRouterAuthHeaders(config = {}) {
  const apiKey = process.env.OPENROUTER_API_KEY || '';
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is required');
  }
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  };
  const referer = process.env.OPENROUTER_HTTP_REFERER || process.env.GITHUB_SERVER_URL || '';
  if (referer) headers['HTTP-Referer'] = referer;
  const title = process.env.OPENROUTER_APP_NAME || 'livepeer-docs-i18n';
  if (title) headers['X-Title'] = title;
  return headers;
}

function buildPromptMessages({ language, kind, segments, rules }) {
  const preserveTerms = (rules?.preserveBrandTerms || []).join(', ');
  const system = [
    'You translate documentation text while preserving Markdown/MDX syntax and placeholders.',
    'Return strict JSON only.',
    'Do not translate URLs, routes, code syntax, placeholders, or brand/product names that must be preserved.',
    preserveTerms ? `Preserve these exact terms: ${preserveTerms}` : ''
  ]
    .filter(Boolean)
    .join(' ');

  const userPayload = {
    task: 'translate_segments',
    language,
    kind,
    instructions: [
      'Return a JSON object with key "segments".',
      'segments must be an array of objects with keys: id, text.',
      'Preserve ids exactly and keep segment count unchanged.',
      'Preserve placeholders like __I18N_PH_#__ exactly.'
    ],
    segments: segments.map((segment) => ({ id: segment.id, text: segment.text }))
  };

  return [
    { role: 'system', content: system },
    { role: 'user', content: JSON.stringify(userPayload) }
  ];
}

function parseJsonFromModelContent(content) {
  const raw = String(content || '').trim();
  if (!raw) throw new Error('OpenRouter response content was empty');
  try {
    return JSON.parse(raw);
  } catch (_err) {
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced) {
      return JSON.parse(fenced[1]);
    }
    const objectStart = raw.indexOf('{');
    const objectEnd = raw.lastIndexOf('}');
    if (objectStart >= 0 && objectEnd > objectStart) {
      return JSON.parse(raw.slice(objectStart, objectEnd + 1));
    }
    throw new Error('OpenRouter response was not valid JSON');
  }
}

function validateSegmentResponse(payload, requestSegments) {
  const responseSegments = payload?.segments;
  if (!Array.isArray(responseSegments)) {
    throw new Error('OpenRouter JSON response missing segments array');
  }
  if (responseSegments.length !== requestSegments.length) {
    throw new Error(`Segment count mismatch: expected ${requestSegments.length}, received ${responseSegments.length}`);
  }

  const byId = new Map();
  responseSegments.forEach((segment) => {
    byId.set(String(segment?.id), String(segment?.text ?? ''));
  });

  return requestSegments.map((segment) => {
    const key = String(segment.id);
    if (!byId.has(key)) {
      throw new Error(`Missing translated segment id "${key}"`);
    }
    return { id: segment.id, text: byId.get(key) };
  });
}

async function requestCompletion({ config, model, messages }) {
  const controller = new AbortController();
  const timeoutMs = Number(config.requestTimeoutMs) || 60000;
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(`${config.baseUrl || 'https://openrouter.ai/api/v1'}/chat/completions`, {
      method: 'POST',
      headers: getOpenRouterAuthHeaders(config),
      signal: controller.signal,
      body: JSON.stringify({
        model,
        temperature: Number.isFinite(config.temperature) ? config.temperature : 0.1,
        messages,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const body = await response.text();
      const error = new Error(`OpenRouter request failed (${response.status}): ${body.slice(0, 500)}`);
      error.status = response.status;
      error.headers =
        response.headers && typeof response.headers.entries === 'function'
          ? Object.fromEntries(response.headers.entries())
          : {};
      throw error;
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    return { data, content };
  } finally {
    clearTimeout(timer);
  }
}

function parseResetEpochMsFromError(error) {
  if (!error) return 0;
  const headers = error.headers || {};
  const headerReset = Number(headers['x-ratelimit-reset'] || headers['X-RateLimit-Reset'] || 0);
  if (Number.isFinite(headerReset) && headerReset > 0) {
    return headerReset > 1e12 ? headerReset : headerReset * 1000;
  }

  const message = String(error.message || '');
  const headerMatch = message.match(/X-RateLimit-Reset\\?":\\?"?(\d{10,13})"?/i);
  if (headerMatch) {
    const parsed = Number(headerMatch[1]);
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed > 1e12 ? parsed : parsed * 1000;
    }
  }
  return 0;
}

function getRetryDelayMs(error, attempt) {
  const status = Number(error?.status);
  const baseDelay = Math.min(30000, 2000 * 2 ** Math.max(0, attempt - 1));
  if (status !== 429) return baseDelay;

  const resetEpochMs = parseResetEpochMsFromError(error);
  if (resetEpochMs > 0) {
    const now = Date.now();
    const untilReset = resetEpochMs - now;
    if (untilReset > 0) {
      return Math.min(70000, untilReset + 750);
    }
  }
  return Math.min(60000, Math.max(baseDelay, 10000));
}

function isRetryableError(error) {
  if (!error) return false;
  if (error.name === 'AbortError') return true;
  const status = Number(error.status);
  const message = String(error.message || '');
  if (/OpenRouter response (content was empty|was not valid JSON)/i.test(message)) {
    return true;
  }
  if (/Segment count mismatch|Missing translated segment id/i.test(message)) {
    return true;
  }
  return status === 429 || (status >= 500 && status < 600);
}

function isModelFailoverError(error) {
  if (!error) return false;
  const status = Number(error.status);
  const message = String(error.message || '');
  if (/OpenRouter response (content was empty|was not valid JSON)/i.test(message)) {
    return true;
  }
  if (/Segment count mismatch|Missing translated segment id/i.test(message)) {
    return true;
  }
  if (
    status === 400 &&
    /(Developer instruction is not enabled|INVALID_ARGUMENT|response_format)/i.test(message)
  ) {
    return true;
  }
  // OpenRouter/provider-specific capacity or billing responses can be model/provider dependent.
  return status === 402 || status === 403 || status === 429 || (status >= 500 && status < 600);
}

function createOpenRouterTranslator(providerConfig, translationRules = {}) {
  assertOpenRouterConfig(providerConfig);

  return {
    name: 'openrouter',
    async translateStrings({ language, strings, kind = 'generic' }) {
      if (!Array.isArray(strings) || strings.length === 0) return { strings: [], modelUsed: '', attempts: 0 };

      const segments = strings.map((text, index) => ({ id: index, text: String(text ?? '') }));
      const maxSegmentsPerRequest = Math.max(1, Number(providerConfig.maxSegmentsPerRequest) || 50);
      const maxCharsPerRequest = Math.max(500, Number(providerConfig.maxCharsPerRequest) || 12000);
      const chunked = chunkArray(
        segments,
        maxSegmentsPerRequest,
        maxCharsPerRequest,
        (segment) => segment.text.length + 16
      );
      const translated = [];
      let modelUsed = '';
      let attempts = 0;

      for (const chunk of chunked) {
        const messages = buildPromptMessages({ language, kind, segments: chunk, rules: translationRules });
        let chunkTranslated = null;
        const models = providerConfig.modelCandidates || [];

        for (const model of models) {
          const maxRetries = Math.max(1, Number(providerConfig.maxRetriesPerRequest) || 3);
          let modelExhaustedError = null;
          for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
            attempts += 1;
            try {
              const { content } = await requestCompletion({ config: providerConfig, model, messages });
              const payload = parseJsonFromModelContent(content);
              chunkTranslated = validateSegmentResponse(payload, chunk);
              modelUsed = modelUsed || model;
              break;
            } catch (error) {
              modelExhaustedError = error;
              const status = Number(error?.status);
              const rateLimited = status === 429;
              const retryable = isRetryableError(error);
              const failoverEligible = isModelFailoverError(error);
              if (rateLimited) {
                await sleep(Math.min(5000, getRetryDelayMs(error, attempt)));
                break;
              }
              if (retryable && attempt < maxRetries) {
                await sleep(getRetryDelayMs(error, attempt));
                continue;
              }
              if (!failoverEligible) {
                throw error;
              }
              break;
            }
          }
          if (!chunkTranslated && modelExhaustedError && model === models[models.length - 1]) {
            throw modelExhaustedError;
          }
          if (chunkTranslated) break;
        }

        if (!chunkTranslated) {
          throw new Error('OpenRouter translation failed for a segment chunk');
        }
        translated.push(...chunkTranslated.map((segment) => segment.text));
      }

      if (translated.length !== strings.length) {
        throw new Error(`Translated string count mismatch: expected ${strings.length}, received ${translated.length}`);
      }

      return { strings: translated, modelUsed, attempts };
    }
  };
}

module.exports = {
  buildPromptMessages,
  createOpenRouterTranslator,
  isModelFailoverError,
  parseJsonFromModelContent,
  validateSegmentResponse
};
