# Glossary Data Generation Scripts

Scripts for discovering and generating glossary terminology from Livepeer documentation.

## Setup

1. Install dependencies:

```bash
cd scripts
npm install
```

2. Create a `.env` file in the `scripts/` directory:

```bash
# OpenRouter (free, recommended)
OPENROUTER_API_KEY=your-key-here

# Or OpenAI (paid, fallback)
# OPENAI_API_KEY=your-key-here
```

Get a free OpenRouter API key at: https://openrouter.ai/keys

## Scripts

### 1. terminology-search.js

Discovers terminology candidates from documentation using pattern matching and optional LLM evaluation.

**Usage:**

```bash
# From the scripts directory
cd scripts

# Dry run - preview candidate terms without saving
node terminology-search.js --dry-run

# Full run - save discovered terms (no LLM)
node terminology-search.js

# With LLM evaluation - use AI to filter and define terms
node terminology-search.js --with-llm

# Customize minimum occurrence threshold (default: 3)
node terminology-search.js --with-llm --min-occurrences=5

# Use a different OpenRouter model (if default is rate-limited)
node terminology-search.js --with-llm --model=google/gemma-3-27b-it:free
```

**Options:**

| Flag | Description |
|------|-------------|
| `--dry-run` | Preview top 50 candidates without saving |
| `--with-llm` | Use LLM to evaluate terms and generate definitions |
| `--min-occurrences=N` | Only include terms appearing N+ times (default: 3) |
| `--model=MODEL` | Override OpenRouter model (default: `nousresearch/hermes-3-llama-3.1-405b:free`) |

**Output:** `data/discovered-terms.json`

```json
{
  "generatedAt": "2025-01-26T...",
  "minOccurrences": 3,
  "llmEvaluated": true,
  "totalTerms": 150,
  "terms": [
    {
      "term": "Orchestrator",
      "totalOccurrences": 245,
      "pageCount": 42,
      "pages": [{"file": "...", "occurrences": 15}, ...],
      "category": "Livepeer Protocol",
      "definition": "A node operator who provides transcoding services...",
      "tags": ["staking", "network", "node"],
      "llmEvaluated": true
    }
  ]
}
```

### 2. generate-glossary.js

Generates glossary terms using predefined terminology patterns (no LLM required).

**Usage:**

```bash
cd scripts

# Dry run - preview top 20 terms
node generate-glossary.js --dry-run

# Full run - generate glossary
node generate-glossary.js
```

**Output:** `data/glossary-terms.json`

```json
{
  "generatedAt": "2025-01-26T...",
  "totalTerms": 85,
  "terms": [
    {
      "termName": "Orchestrator",
      "category": "Livepeer Protocol",
      "definition": "",
      "tags": [],
      "totalOccurrences": 245,
      "pages": [{"file": "...", "occurrences": 15}, ...]
    }
  ]
}
```

## Output Files

| File | Description |
|------|-------------|
| `data/discovered-terms.json` | LLM-evaluated terms with definitions |
| `data/glossary-terms.json` | Pattern-matched terms (no definitions) |

## LLM Providers

The `terminology-search.js` script supports two LLM providers:

1. **OpenRouter** (recommended, free tier available)
   - Default model: `nousresearch/hermes-3-llama-3.1-405b:free`
   - Rate limit: Free tier has strict limits; script includes retry with exponential backoff
   - Set: `OPENROUTER_API_KEY`
   - Override model with `--model=` flag if default is congested

2. **OpenAI** (fallback, paid)
   - Model: `gpt-4o-mini`
   - Set: `OPENAI_API_KEY`

The script automatically uses OpenRouter if available, falling back to OpenAI.

### Choosing a Model for Glossary Generation

This task requires a model that can:
- **Follow structured JSON output format** reliably
- **Understand domain-specific terminology** (blockchain, video engineering, AI)
- **Provide accurate, concise definitions** suitable for a glossary
- **Categorize terms correctly** across multiple domains

Larger models (70B+) generally perform better at understanding nuanced technical terminology and producing well-structured JSON. Smaller models may hallucinate definitions or fail to follow the output format consistently.

### Free Model Comparison

| Provider | Model | Score | Rate Limits | Notes |
|----------|-------|-------|-------------|-------|
| **OpenRouter** | `nousresearch/hermes-3-llama-3.1-405b:free` | ⭐⭐⭐⭐⭐ | 20 req/min, 50/day | **Recommended.** Excellent instruction following, accurate definitions. Often congested. |
| **OpenRouter** | `meta-llama/llama-3.3-70b-instruct:free` | ⭐⭐⭐⭐⭐ | 20 req/min, 50/day | Excellent quality, good JSON adherence. Less congested than Hermes. |
| **OpenRouter** | `google/gemma-3-27b-it:free` | ⭐⭐⭐⭐ | 20 req/min, 50/day | Good quality, reliable availability. Slightly less accurate on niche terms. |
| **OpenRouter** | `deepseek/deepseek-r1-0528:free` | ⭐⭐⭐⭐ | 20 req/min, 50/day | Strong reasoning, good for technical terms. May be verbose. |
| **OpenRouter** | `mistralai/mistral-small-3.1-24b-instruct:free` | ⭐⭐⭐⭐ | 20 req/min, 50/day | Fast, good JSON output. Slightly weaker on blockchain terminology. |
| **OpenRouter** | `qwen/qwen3-4b:free` | ⭐⭐⭐ | 20 req/min, 50/day | Fast but may struggle with complex definitions. Good for testing. |
| **OpenRouter** | `meta-llama/llama-3.2-3b-instruct:free` | ⭐⭐ | 20 req/min, 50/day | Too small for reliable glossary generation. May hallucinate. |
| **Google AI Studio** | Gemini 2.5 Flash | ⭐⭐⭐⭐⭐ | 20 req/day, 5 req/min | Excellent quality but very low daily limit. Requires separate integration. |
| **Groq** | `llama-3.3-70b` | ⭐⭐⭐⭐⭐ | 1000 req/day, 12k tok/min | Very fast, high quality. Requires separate API key. |
| **Cerebras** | `llama-3.3-70b` | ⭐⭐⭐⭐⭐ | 14,400 req/day | Extremely fast inference. Requires separate integration. |
| **Cohere** | Command R+ | ⭐⭐⭐⭐ | 20 req/min, 1000/month | Good quality but monthly limit is restrictive. |

**Legend:** ⭐ = Poor, ⭐⭐⭐ = Adequate, ⭐⭐⭐⭐⭐ = Excellent

### Recommended Models by Use Case

| Use Case | Recommended Model | Why |
|----------|-------------------|-----|
| **Best quality** | `nousresearch/hermes-3-llama-3.1-405b:free` | Largest free model, best instruction following |
| **Reliable availability** | `google/gemma-3-27b-it:free` | Less congested, consistent performance |
| **Fast iteration** | `mistralai/mistral-small-3.1-24b-instruct:free` | Quick responses, good enough quality |
| **Testing/development** | `qwen/qwen3-4b:free` | Fast, low resource usage |

### Other Free Providers (Not Currently Integrated)

These providers offer free tiers but require separate API integration:

| Provider | Free Tier | Best For |
|----------|-----------|----------|
| **Google AI Studio** | 20 req/day (Gemini 2.5) | Highest quality, low volume |
| **Groq** | 1000 req/day | High-speed inference |
| **Cerebras** | 14,400 req/day | Bulk processing |
| **Cohere** | 1000 req/month | Enterprise-grade quality |
| **Cloudflare Workers AI** | 10,000 neurons/day | Edge deployment |
| **Chutes.ai** | Varies | DeepSeek models |

## Workflow

1. Run `terminology-search.js --dry-run` to preview candidates
2. Run `terminology-search.js --with-llm` to generate LLM-evaluated terms
3. If rate limited, try `--model=google/gemma-3-27b-it:free` or wait and retry
4. Review `data/discovered-terms.json` for accuracy
5. Use output in glossary components or documentation
