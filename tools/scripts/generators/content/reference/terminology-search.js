#!/usr/bin/env node
/**
 * @script            terminology-search
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Terminology search — searches glossary/terminology data for definitions
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/snippets/generate-data/scripts/terminology-search.js [flags]
 */

/**
 * Terminology Search Script
 *
 * Scans all MDX pages to DISCOVER terminology that:
 * - May not be commonly recognized by laypeople
 * - Is Livepeer-specific
 * - Is domain-specific (video, blockchain/crypto, AI)
 * - Is used frequently in the docs
 *
 * Uses pattern matching to find CANDIDATE terms, then optionally
 * uses an LLM to evaluate and define them.
 *
 * Usage:
 *   node terminology-search.js --dry-run          # Find candidates only
 *   node terminology-search.js --with-llm         # Use LLM to evaluate/define
 *   node terminology-search.js --min-occurrences=5  # Minimum occurrences threshold
 *
 * Environment:
 *   Create a .env file in this directory with:
 *   OPENROUTER_API_KEY=your-key-here  (free, recommended)
 *   or
 *   OPENAI_API_KEY=your-key-here      (paid)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load .env file from the scripts directory (optional in local dry-run use)
try {
  require('dotenv').config({ path: path.join(__dirname, '.env') });
} catch (_error) {
  // Optional dependency for local dry-run usage.
}

// Configuration
const REPO_ROOT = getRepoRoot();
const V1_PAGES_DIR = path.join(REPO_ROOT, 'v1');
const V2_PAGES_DIRS = [
  'v2/pages',
  'v2/home',
  'v2/solutions',
  'v2/about',
  'v2/community',
  'v2/developers',
  'v2/gateways',
  'v2/orchestrators',
  'v2/lpt',
  'v2/resources',
  'v2/internal',
  'v2/deprecated',
  'v2/experimental',
  'v2/notes'
]
  .map((dir) => path.join(REPO_ROOT, dir))
  .filter((dir) => fs.existsSync(dir));
const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'discovered-terms.json');

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const withLLM = args.includes('--with-llm');
const minOccurrencesArg = args.find(a => a.startsWith('--min-occurrences='));
const MIN_OCCURRENCES = minOccurrencesArg ? parseInt(minOccurrencesArg.split('=')[1]) : 3;

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

// OpenRouter model selection - can be overridden with --model flag
const modelArg = args.find(a => a.startsWith('--model='));
const OPENROUTER_MODEL = modelArg
  ? modelArg.split('=')[1]
  : 'nousresearch/hermes-3-llama-3.1-405b:free';

// Common words to exclude (not terminology)
const COMMON_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does',
  'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this',
  'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their', 'we', 'us', 'our',
  'you', 'your', 'he', 'she', 'him', 'her', 'his', 'i', 'me', 'my', 'if', 'then',
  'else', 'when', 'where', 'why', 'how', 'what', 'which', 'who', 'whom', 'whose',
  'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such',
  'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'just',
  'also', 'now', 'here', 'there', 'about', 'after', 'before', 'between', 'into',
  'through', 'during', 'above', 'below', 'from', 'up', 'down', 'out', 'off', 'over',
  'under', 'again', 'further', 'once', 'any', 'as', 'by', 'because', 'while',
  // Common programming/docs words
  'example', 'examples', 'note', 'notes', 'see', 'using', 'use', 'used', 'uses',
  'create', 'created', 'creating', 'add', 'added', 'adding', 'set', 'setting',
  'get', 'getting', 'run', 'running', 'start', 'started', 'starting', 'stop',
  'file', 'files', 'folder', 'folders', 'directory', 'path', 'name', 'names',
  'value', 'values', 'key', 'keys', 'type', 'types', 'data', 'string', 'number',
  'true', 'false', 'null', 'undefined', 'return', 'returns', 'function', 'method',
  'class', 'object', 'array', 'list', 'item', 'items', 'index', 'length', 'size',
  'new', 'old', 'first', 'last', 'next', 'previous', 'current', 'default',
  'error', 'errors', 'warning', 'warnings', 'success', 'failed', 'failure',
  'click', 'button', 'link', 'page', 'pages', 'section', 'sections', 'step', 'steps',
  'following', 'below', 'above', 'left', 'right', 'top', 'bottom', 'center',
  'image', 'images', 'video', 'videos', 'text', 'content', 'title', 'description',
  'import', 'export', 'from', 'const', 'let', 'var', 'async', 'await', 'try', 'catch',
  'make', 'made', 'making', 'need', 'needs', 'needed', 'want', 'wants', 'wanted',
  'like', 'look', 'looks', 'looking', 'find', 'found', 'finding', 'show', 'shows',
  'shown', 'showing', 'work', 'works', 'working', 'call', 'calls', 'called', 'calling',
  'read', 'reads', 'reading', 'write', 'writes', 'writing', 'send', 'sends', 'sending',
  'receive', 'receives', 'receiving', 'check', 'checks', 'checking', 'test', 'tests',
  'testing', 'build', 'builds', 'building', 'deploy', 'deploys', 'deploying',
  'install', 'installs', 'installing', 'update', 'updates', 'updating', 'delete',
  'deletes', 'deleting', 'remove', 'removes', 'removing', 'change', 'changes',
  'changing', 'move', 'moves', 'moving', 'copy', 'copies', 'copying', 'paste',
  'open', 'opens', 'opening', 'close', 'closes', 'closing', 'save', 'saves', 'saving',
  'load', 'loads', 'loading', 'download', 'downloads', 'downloading', 'upload',
  'uploads', 'uploading', 'enable', 'enables', 'enabling', 'disable', 'disables',
  'disabling', 'allow', 'allows', 'allowing', 'require', 'requires', 'requiring',
  'include', 'includes', 'including', 'exclude', 'excludes', 'excluding',
  'provide', 'provides', 'providing', 'support', 'supports', 'supporting',
  'available', 'required', 'optional', 'recommended', 'important', 'please',
  'however', 'therefore', 'although', 'unless', 'whether', 'either', 'neither',
  'within', 'without', 'against', 'along', 'among', 'around', 'behind', 'beside',
  'besides', 'beyond', 'despite', 'except', 'inside', 'outside', 'since', 'toward',
  'towards', 'upon', 'via', 'already', 'always', 'never', 'often', 'sometimes',
  'usually', 'actually', 'basically', 'currently', 'especially', 'finally',
  'generally', 'initially', 'mainly', 'mostly', 'normally', 'originally',
  'particularly', 'previously', 'primarily', 'probably', 'recently', 'simply',
  'specifically', 'typically', 'usually', 'directly', 'automatically', 'manually',
  'different', 'similar', 'specific', 'general', 'common', 'unique', 'various',
  'multiple', 'single', 'double', 'simple', 'complex', 'basic', 'advanced',
  'main', 'primary', 'secondary', 'additional', 'extra', 'full', 'complete',
  'partial', 'total', 'entire', 'whole', 'part', 'parts', 'piece', 'pieces',
  'way', 'ways', 'time', 'times', 'day', 'days', 'week', 'weeks', 'month', 'months',
  'year', 'years', 'second', 'seconds', 'minute', 'minutes', 'hour', 'hours',
  'case', 'cases', 'issue', 'issues', 'problem', 'problems', 'solution', 'solutions',
  'option', 'options', 'feature', 'features', 'version', 'versions', 'release',
  'releases', 'guide', 'guides', 'tutorial', 'tutorials', 'documentation', 'docs',
  'reference', 'references', 'resource', 'resources', 'tool', 'tools', 'service',
  'services', 'system', 'systems', 'application', 'applications', 'app', 'apps',
  'project', 'projects', 'code', 'codes', 'script', 'scripts', 'command', 'commands',
  'parameter', 'parameters', 'argument', 'arguments', 'variable', 'variables',
  'constant', 'constants', 'property', 'properties', 'attribute', 'attributes',
  'element', 'elements', 'component', 'components', 'module', 'modules', 'package',
  'packages', 'library', 'libraries', 'framework', 'frameworks', 'platform',
  'platforms', 'environment', 'environments', 'configuration', 'configurations',
  'config', 'configs', 'setup', 'setups', 'installation', 'installations',
]);

/**
 * Find all MDX files recursively
 */
function findMdxFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Extract text content from MDX (strip JSX/imports/code)
 */
function extractTextContent(content) {
  content = content.replace(/^---[\s\S]*?---/, '');
  content = content.replace(/^import\s+.*$/gm, '');
  content = content.replace(/<[^>]+>/g, ' ');
  content = content.replace(/```[\s\S]*?```/g, '');
  content = content.replace(/`[^`]+`/g, '');
  content = content.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  content = content.replace(/[*_#]+/g, ' ');
  content = content.replace(/https?:\/\/[^\s]+/g, '');
  return content;
}

/**
 * Extract candidate terms from text using patterns
 */
function extractCandidateTerms(text) {
  const candidates = new Map();

  // Pattern 1: Acronyms (2-6 uppercase letters)
  const acronymPattern = /\b[A-Z]{2,6}\b/g;
  let match;
  while ((match = acronymPattern.exec(text)) !== null) {
    const term = match[0];
    candidates.set(term, (candidates.get(term) || 0) + 1);
  }

  // Pattern 2: Capitalized words (potential proper nouns/terms)
  const capitalizedPattern = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g;
  while ((match = capitalizedPattern.exec(text)) !== null) {
    const term = match[0];
    if (term.length > 2) {
      candidates.set(term, (candidates.get(term) || 0) + 1);
    }
  }

  // Pattern 3: CamelCase words
  const camelCasePattern = /\b[a-z]+(?:[A-Z][a-z]+)+\b/g;
  while ((match = camelCasePattern.exec(text)) !== null) {
    const term = match[0];
    candidates.set(term, (candidates.get(term) || 0) + 1);
  }

  // Pattern 4: Hyphenated technical terms
  const hyphenatedPattern = /\b[a-zA-Z]+-[a-zA-Z]+(?:-[a-zA-Z]+)*\b/g;
  while ((match = hyphenatedPattern.exec(text)) !== null) {
    const term = match[0];
    if (term.length > 4) {
      candidates.set(term, (candidates.get(term) || 0) + 1);
    }
  }

  // Pattern 5: Terms with numbers (like H.264, VP9, etc)
  const alphanumericPattern = /\b[A-Z]+[.-]?\d+[a-zA-Z]*\b/g;
  while ((match = alphanumericPattern.exec(text)) !== null) {
    const term = match[0];
    candidates.set(term, (candidates.get(term) || 0) + 1);
  }

  return candidates;
}

/**
 * Filter out common words and noise
 */
function filterCandidates(candidates) {
  const filtered = new Map();

  for (const [term, count] of candidates) {
    const lowerTerm = term.toLowerCase();

    // Skip common words
    if (COMMON_WORDS.has(lowerTerm)) continue;

    // Skip very short terms (unless acronyms)
    if (term.length < 3 && !/^[A-Z]+$/.test(term)) continue;

    // Skip terms that are just numbers
    if (/^\d+$/.test(term)) continue;

    // Skip single common words that got capitalized
    const words = term.split(/\s+/);
    if (words.length === 1 && COMMON_WORDS.has(words[0].toLowerCase())) continue;

    filtered.set(term, count);
  }

  return filtered;
}

/**
 * Scan all files and aggregate term occurrences
 */
function scanAllFiles(files) {
  const globalTerms = new Map();
  const termPages = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const textContent = extractTextContent(content);
    const relativePath = path.relative(REPO_ROOT, file);

    const candidates = extractCandidateTerms(textContent);
    const filtered = filterCandidates(candidates);

    for (const [term, count] of filtered) {
      globalTerms.set(term, (globalTerms.get(term) || 0) + count);

      if (!termPages.has(term)) {
        termPages.set(term, []);
      }
      termPages.get(term).push({ path: relativePath, occurrences: count });
    }
  }

  return { globalTerms, termPages };
}

/**
 * Categorize term based on patterns (heuristic)
 */
function guessCategory(term) {
  const lower = term.toLowerCase();

  // Livepeer-specific
  if (/livepeer|lpt|orchestrat|delegat|gateway|transcode/i.test(lower)) {
    return 'Livepeer Protocol';
  }

  // Web3/Blockchain
  if (/ethereum|eth|arbitrum|blockchain|token|stake|dao|depin|wallet|contract|chain/i.test(lower)) {
    return 'Web3 / Blockchain';
  }

  // Video
  if (/rtmp|hls|webrtc|codec|h\.?264|h\.?265|hevc|vp9|av1|bitrate|stream|playback|transcode|rendition|segment|manifest/i.test(lower)) {
    return 'Video Engineering';
  }

  // AI/ML
  if (/diffusion|controlnet|lora|llm|inference|model|gpu|cuda|tensor|neural|embedding|prompt/i.test(lower)) {
    return 'AI / Machine Learning';
  }

  // Technical
  if (/api|sdk|cli|docker|kubernetes|webhook|endpoint|http|json|yaml|jwt|oauth/i.test(lower)) {
    return 'Technical';
  }

  return 'Uncategorized';
}

/**
 * Call LLM to evaluate and define terms
 * Uses OpenRouter with Hermes 3 405B (free) by default
 * Set OPENROUTER_API_KEY env var, or fall back to OPENAI_API_KEY
 */
async function evaluateWithLLM(terms) {
  // Check for API keys - prefer OpenRouter (free), fall back to OpenAI
  const openRouterKey = process.env.OPENROUTER_API_KEY;
  const openAIKey = process.env.OPENAI_API_KEY;

  let apiUrl, apiKey, model, headers;

  if (openRouterKey) {
    apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
    apiKey = openRouterKey;
    model = OPENROUTER_MODEL;
    headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://docs.livepeer.org',
      'X-Title': 'Livepeer Docs Glossary Generator'
    };
    const modelName = model.split('/').pop().replace(':free', '');
    console.log(`🤖 Using OpenRouter with ${modelName}\n`);
  } else if (openAIKey) {
    apiUrl = 'https://api.openai.com/v1/chat/completions';
    apiKey = openAIKey;
    model = 'gpt-4o-mini';
    headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
    console.log('🤖 Using OpenAI with GPT-4o-mini\n');
  } else {
    console.error('❌ No API key found. Set one of:');
    console.error('   export OPENROUTER_API_KEY=your-key-here  (free, recommended)');
    console.error('   export OPENAI_API_KEY=your-key-here      (paid)');
    console.error('\n   Get a free OpenRouter key at: https://openrouter.ai/keys');
    process.exit(1);
  }

  const results = [];
  const batchSize = 10; // Smaller batches for free tier rate limits
  const rateLimitDelay = openRouterKey ? 12000 : 500; // ~5 req/min for OpenRouter free tier

  for (let i = 0; i < terms.length; i += batchSize) {
    const batch = terms.slice(i, i + batchSize);
    const termList = batch.map(t => `"${t.term}"`).join(', ');
    const batchNum = Math.floor(i/batchSize) + 1;
    const totalBatches = Math.ceil(terms.length/batchSize);

    console.log(`  Processing batch ${batchNum}/${totalBatches}...`);

    const prompt = `You are analyzing terminology from Livepeer documentation. Livepeer is a decentralized video and AI infrastructure protocol built on Ethereum/Arbitrum.

For each term below, determine:
1. Is this a technical/domain-specific term that a general reader might not understand? (true/false)
2. If true, provide a clear 1-2 sentence definition suitable for a glossary
3. Assign a category: "Livepeer Protocol", "Web3 / Blockchain", "Video Engineering", "AI / Machine Learning", "Technical", or "General"
4. Suggest 2-3 relevant tags for searchability

Terms to evaluate: ${termList}

IMPORTANT: Only mark terms as domain-specific if they genuinely require explanation. Common words, proper nouns (company names, people), and generic terms should be marked false.

Respond ONLY with valid JSON in this exact format:
{
  "terms": [
    {"term": "example", "isDomainSpecific": true, "definition": "Clear definition here.", "category": "Category", "tags": ["tag1", "tag2"]},
    {"term": "common", "isDomainSpecific": false, "definition": "", "category": "General", "tags": []}
  ]
}`;

    // Retry logic with exponential backoff for rate limits
    let retries = 0;
    const maxRetries = 5;
    let success = false;

    while (!success && retries <= maxRetries) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.2,
            max_tokens: 4000
          })
        });

        if (response.status === 429) {
          retries++;
          if (retries <= maxRetries) {
            // Longer backoffs: 30s, 60s, 120s, 240s, 480s
            const backoff = Math.pow(2, retries) * 15000;
            console.log(`  ⏳ Rate limited, waiting ${Math.round(backoff/1000)}s (retry ${retries}/${maxRetries})...`);
            await new Promise(resolve => setTimeout(resolve, backoff));
            continue;
          } else {
            console.error(`  ❌ Rate limit exceeded after ${maxRetries} retries, skipping batch`);
            break;
          }
        }

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`  ❌ API error (${response.status}): ${errorText.slice(0, 200)}`);
          break;
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
          console.error(`  ❌ Unexpected response format:`, JSON.stringify(data).slice(0, 200));
          break;
        }

        const content = data.choices[0].message.content;

        // Extract JSON from response (handle markdown code blocks)
        let jsonStr = content;
        const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch) {
          jsonStr = jsonMatch[1];
        }

        const parsed = JSON.parse(jsonStr.trim());

        for (const evaluated of parsed.terms) {
          const original = batch.find(t => t.term.toLowerCase() === evaluated.term.toLowerCase());
          if (original && evaluated.isDomainSpecific) {
            results.push({
              ...original,
              definition: evaluated.definition || '',
              category: evaluated.category || original.category,
              tags: evaluated.tags || [],
              llmEvaluated: true
            });
          }
        }
        success = true;
        console.log(`  ✓ Batch ${batchNum} complete`);
      } catch (error) {
        console.error(`  ❌ Error processing batch: ${error.message}`);
        break;
      }
    }

    // Rate limiting - respect API limits
    if (i + batchSize < terms.length) {
      await new Promise(resolve => setTimeout(resolve, rateLimitDelay));
    }
  }

  return results;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Terminology Discovery Script\n');

  if (isDryRun) {
    console.log('🏃 Running in DRY RUN mode - showing candidates only\n');
  }
  if (withLLM) {
    console.log('🤖 LLM evaluation enabled\n');
  }
  console.log(`📊 Minimum occurrences threshold: ${MIN_OCCURRENCES}\n`);

  // Find all MDX files
  const v1Files = findMdxFiles(V1_PAGES_DIR);
  const v2FileSet = new Set();
  for (const pagesDir of V2_PAGES_DIRS) {
    for (const filePath of findMdxFiles(pagesDir)) {
      v2FileSet.add(filePath);
    }
  }
  const v2Files = Array.from(v2FileSet);
  const allFiles = [...v1Files, ...v2Files];

  console.log(`📚 Found ${v1Files.length} v1 files and ${v2Files.length} v2 files\n`);

  // Scan files for candidate terms
  console.log('🔎 Scanning files for terminology candidates...\n');
  const { globalTerms, termPages } = scanAllFiles(allFiles);

  // Filter by minimum occurrences
  const significantTerms = [];
  for (const [term, count] of globalTerms) {
    if (count >= MIN_OCCURRENCES) {
      const pages = termPages.get(term) || [];
      pages.sort((a, b) => b.occurrences - a.occurrences);

      significantTerms.push({
        term,
        totalOccurrences: count,
        pageCount: pages.length,
        pages: pages.slice(0, 10), // Top 10 pages
        category: guessCategory(term),
        definition: '',
        tags: [],
        externalVerification: '',
        contextNotes: ''
      });
    }
  }

  // Sort by occurrences
  significantTerms.sort((a, b) => b.totalOccurrences - a.totalOccurrences);

  console.log(`✅ Found ${significantTerms.length} candidate terms with ${MIN_OCCURRENCES}+ occurrences\n`);

  let finalTerms = significantTerms;

  // Optionally evaluate with LLM
  if (withLLM && !isDryRun) {
    console.log('🤖 Evaluating terms with LLM...\n');
    finalTerms = await evaluateWithLLM(significantTerms);
    console.log(`\n✅ LLM identified ${finalTerms.length} domain-specific terms\n`);
  }

  // Output results
  if (isDryRun) {
    console.log('📋 Top 50 candidate terms:\n');
    significantTerms.slice(0, 50).forEach((t, i) => {
      console.log(`  ${i + 1}. ${t.term} (${t.totalOccurrences} occurrences, ${t.pageCount} pages) [${t.category}]`);
    });
    console.log(`\n💡 Run without --dry-run to save results`);
    console.log(`💡 Add --with-llm to use LLM for evaluation and definitions`);
  } else {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const output = {
      generatedAt: new Date().toISOString(),
      minOccurrences: MIN_OCCURRENCES,
      llmEvaluated: withLLM,
      totalTerms: finalTerms.length,
      terms: finalTerms
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`💾 Saved ${finalTerms.length} terms to ${path.relative(REPO_ROOT, OUTPUT_FILE)}\n`);
  }

  console.log('✨ Done!\n');
}

main().catch(console.error);
