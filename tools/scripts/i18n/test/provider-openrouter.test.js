/**
 * @script            provider-openrouter.test
 * @category          validator
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Tests OpenRouter provider — validates API call logic and response parsing
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/i18n/test/provider-openrouter.test.js [flags]
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const {
  createOpenRouterTranslator,
  isModelFailoverError,
  parseJsonFromModelContent,
  validateSegmentResponse
} = require('../lib/provider-openrouter');
const { createTranslator } = require('../lib/providers');

test('parseJsonFromModelContent parses plain JSON and fenced JSON', () => {
  const plain = parseJsonFromModelContent('{"segments":[{"id":0,"text":"hola"}]}');
  assert.equal(plain.segments[0].text, 'hola');

  const fenced = parseJsonFromModelContent('```json\n{"segments":[{"id":"1","text":"bonjour"}]}\n```');
  assert.equal(fenced.segments[0].text, 'bonjour');
});

test('validateSegmentResponse preserves ordering by request ids and rejects count mismatch', () => {
  const request = [
    { id: 'b', text: 'beta' },
    { id: 'a', text: 'alpha' }
  ];
  const response = {
    segments: [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' }
    ]
  };
  const normalized = validateSegmentResponse(response, request);
  assert.deepEqual(normalized, [
    { id: 'b', text: 'B' },
    { id: 'a', text: 'A' }
  ]);

  assert.throws(
    () => validateSegmentResponse({ segments: [{ id: 'a', text: 'A' }] }, request),
    /Segment count mismatch/
  );
});

test('isModelFailoverError treats provider incompatibility and capacity errors as failover eligible', () => {
  assert.equal(
    isModelFailoverError({ status: 400, message: 'Developer instruction is not enabled for this model' }),
    true
  );
  assert.equal(
    isModelFailoverError({ status: 400, message: 'totally unrelated validation error' }),
    false
  );
  assert.equal(isModelFailoverError({ status: 429, message: 'rate limited' }), true);
  assert.equal(isModelFailoverError({ status: 503, message: 'provider down' }), true);
});

test('createTranslator defaults to openrouter and reports provider name', () => {
  const translator = createTranslator({
    config: {
      provider: { name: 'openrouter', modelCandidates: ['test/model:free'] },
      translationRules: {}
    }
  });
  assert.equal(translator.name, 'openrouter');
});

test('createOpenRouterTranslator fails over across models and returns final modelUsed', async () => {
  const originalFetch = global.fetch;
  const originalApiKey = process.env.OPENROUTER_API_KEY;
  let callCount = 0;
  global.fetch = async (_url, options) => {
    callCount += 1;
    const body = JSON.parse(String(options.body || '{}'));
    if (body.model === 'bad/model:free') {
      return {
        ok: false,
        status: 400,
        text: async () => '{"error":{"message":"Developer instruction is not enabled"}}'
      };
    }
    return {
      ok: true,
      json: async () => ({
        choices: [
          {
            message: {
              content: JSON.stringify({
                segments: [{ id: 0, text: 'hola' }]
              })
            }
          }
        ]
      })
    };
  };

  process.env.OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || 'test-key';

  try {
    const translator = createOpenRouterTranslator(
      {
        modelCandidates: ['bad/model:free', 'good/model:free'],
        baseUrl: 'https://example.invalid',
        maxRetriesPerRequest: 1,
        requestTimeoutMs: 1000,
        temperature: 0.1
      },
      {}
    );
    const result = await translator.translateStrings({ language: 'es', strings: ['hello'] });
    assert.deepEqual(result.strings, ['hola']);
    assert.equal(result.modelUsed, 'good/model:free');
    assert.equal(callCount, 2);
  } finally {
    global.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.OPENROUTER_API_KEY;
    else process.env.OPENROUTER_API_KEY = originalApiKey;
  }
});
