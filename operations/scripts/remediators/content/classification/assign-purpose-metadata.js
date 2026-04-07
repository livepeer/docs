#!/usr/bin/env node
/**
 * @script      assign-purpose-metadata
 * @type        remediator
 * @concern     content
 * @niche       classification
 * @purpose     qa:content-quality
 * @description Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages
 * @mode        edit
 * @pipeline    manual — interactive developer tool, not suited for automated pipelines
 * @scope       operations/scripts, tools/lib/docs-usefulness, tools/config, v2
 * @usage       node operations/scripts/remediators/content/classification/assign-purpose-metadata.js [flags]
 * @policy      E-R1, R-R11
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { execSync } = require('child_process');
const {
  getDocsJsonRouteKeys,
  toDocsRouteKeyFromFileV2Aware,
  getV2DocsFiles
} = require('../../../../../operations/tests/utils/file-walker');
const {
  audienceTokensFromRaw,
  loadAudienceNormalization,
  loadLlmTiers,
  AUDIENCE_ENUM
} = require('../../../../../tools/lib/docs-usefulness/rubric-loader');
// CANONICAL_PURPOSES is the authoritative 15-value purpose set (Decision 2, 2026-03-20).
// Previously this script used PURPOSE_ENUM from rubric-loader, which contains rubric-internal
// labels (landing, overview, how_to, faq, etc.) — not valid frontmatter values. Fixed to use
// CANONICAL_PURPOSES so written frontmatter always contains canonical values only.
const { CANONICAL_PURPOSES } = require('../../../../../tools/lib/docs/frontmatter-taxonomy');
const { analyzeMdxPage } = require('../../../../../tools/lib/docs-usefulness/scoring');
const prompts = require('../../../../../tools/lib/docs-usefulness/prompts');
const { loadAndValidateUsefulnessConfig } = require('../../../../../tools/lib/docs-usefulness/config-validator');

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

function stripFrontmatter(content) {
  return String(content || '').replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '');
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function parseArgs(argv) {
  const args = {
    dryRun: false,
    scope: 'pilot',
    files: [],
    classifyWithLlm: false,
    llmTier: 'free'
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--scope') {
      args.scope = String(argv[i + 1] || args.scope).trim();
      i += 1;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw.split(',').map((part) => part.trim()).filter(Boolean).forEach((file) => args.files.push(file));
      }
      i += 1;
      continue;
    }
    if (token === '--classify-with-llm') {
      args.classifyWithLlm = true;
      continue;
    }
    if (token === '--llm-tier') {
      args.llmTier = String(argv[i + 1] || args.llmTier).trim();
      i += 1;
      continue;
    }
  }

  args.files = [...new Set(args.files)];
  return args;
}

function getAllRoutablePages(repoRoot) {
  const docsRoutes = getDocsJsonRouteKeys(repoRoot);
  const files = getV2DocsFiles({ rootDir: repoRoot, respectMintIgnore: true }).filter((file) => /\.mdx$/i.test(file));
  return files
    .filter((abs) => {
      const key = toDocsRouteKeyFromFileV2Aware(abs, repoRoot);
      return key && docsRoutes.has(key);
    })
    .map((abs) => toPosix(path.relative(repoRoot, abs)))
    .sort((a, b) => a.localeCompare(b));
}

function isPilotFile(relPath) {
  const base = path.basename(relPath, '.mdx').toLowerCase();
  return (
    /portal/.test(base) ||
    /overview/.test(base) ||
    /get-started/.test(base) ||
    /^faq/.test(base) ||
    /troubleshoot/.test(base) ||
    /glossary/.test(base)
  );
}

// PURPOSE_RULES maps filename/directory patterns to canonical purpose values.
// All purpose values here must be members of CANONICAL_PURPOSES (tools/lib/docs/frontmatter-taxonomy.js).
const PURPOSE_RULES = [
  { test: (p) => /portal/i.test(path.basename(p)), purpose: 'orient', source: 'filename' },
  { test: (p) => /mission-control/i.test(path.basename(p)), purpose: 'orient', source: 'filename' },
  { test: (p) => path.basename(p) === 'index.mdx', purpose: 'orient', source: 'filename' },
  { test: (p) => /quickstart/i.test(path.basename(p)), purpose: 'start', source: 'filename' },
  { test: (p) => /get-started/i.test(path.basename(p)), purpose: 'start', source: 'filename' },
  { test: (p) => /primer/i.test(path.basename(p)), purpose: 'learn', source: 'filename' },
  { test: (p) => /^first-/i.test(path.basename(p)), purpose: 'learn', source: 'filename' },
  { test: (p) => /^faq/i.test(path.basename(p)), purpose: 'reference', source: 'filename' },
  { test: (p) => /troubleshoot/i.test(path.basename(p)), purpose: 'troubleshoot', source: 'filename' },
  { test: (p) => /glossary/i.test(path.basename(p)), purpose: 'reference', source: 'filename' },
  { test: (p) => /changelog|release-notes/i.test(path.basename(p)), purpose: 'update', source: 'filename' },
  { test: (p) => /api-reference|config-flags/i.test(path.basename(p)), purpose: 'reference', source: 'filename' },
  { test: (p) => /overview/i.test(path.basename(p)), purpose: 'orient', source: 'filename' },
  { test: (p) => /\/references?\//i.test(p), purpose: 'reference', source: 'directory' }
];

function inferPurposeByRules(relPath, content) {
  for (const rule of PURPOSE_RULES) {
    if (rule.test(relPath)) {
      return { purpose: rule.purpose, source: rule.source };
    }
  }

  const page = analyzeMdxPage({ content, filePath: relPath, routePath: `/${relPath.replace(/\.mdx$/i, '').replace(/\/index$/i, '')}` });
  const accordionCount = (String(page.content || '').match(/<Accordion(?:Group)?[\s>]/g) || []).length;

  if ((page.components || []).includes('Steps')) {
    return { purpose: 'build', source: 'content' };
  }
  if (accordionCount >= 5) {
    return { purpose: 'reference', source: 'content' };
  }
  if ((page.wordCount || 0) < 150 && (page.components || []).some((component) => ['Card', 'CardGroup', 'GotoCard', 'DisplayCard'].includes(component))) {
    return { purpose: 'orient', source: 'content' };
  }
  if ((page.wordCount || 0) > 300 && (page.headings || []).length >= 3 && !(page.components || []).includes('Steps')) {
    return { purpose: 'explain', source: 'content' };
  }

  return { purpose: 'unclassified', source: 'none' };
}

function sectionFromPath(relPath) {
  const parts = String(relPath || '').split('/');
  if (parts[0] === 'v2') return parts[1] || 'unknown';
  return parts[0] || 'unknown';
}

function inferAudience(frontmatterValue, section, normalization) {
  const candidates = audienceTokensFromRaw(frontmatterValue, normalization);
  if (candidates.length > 0) {
    if (candidates.length === 1) {
      return { audience: candidates[0], source: 'frontmatter', candidates };
    }
    const sectionDefault = normalization.section_defaults?.[section];
    if (sectionDefault && candidates.includes(sectionDefault)) {
      return { audience: sectionDefault, source: 'frontmatter', candidates };
    }
    const precedence = normalization.deterministic_precedence || AUDIENCE_ENUM;
    for (const audience of precedence) {
      if (candidates.includes(audience)) {
        return { audience, source: 'frontmatter', candidates };
      }
    }
    return { audience: candidates[0], source: 'frontmatter', candidates };
  }

  return {
    audience: normalization.section_defaults?.[section] || 'everyone',
    source: 'section',
    candidates
  };
}

async function classifyPurposeWithLlm({ apiKey, tier, relPath, title, content }) {
  const llmConfig = loadLlmTiers();
  const tierConfig = llmConfig.tiers?.[tier] || llmConfig.tiers?.free;
  const models = tierConfig.models || [];
  if (!models.length) return null;

  // Prompt uses canonical purpose values (CANONICAL_PURPOSES from frontmatter-taxonomy.js).
  const prompt = `Given this documentation page, what is its primary purpose?\nRespond with exactly one of: orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update\n\nDefinitions:\n- orient: Routes or orients users (portals, indexes, navigation pages, "what is this")\n- explain: Explains one idea or mechanism in depth\n- learn: Zero-to-result walkthrough (assumes nothing)\n- choose: Helps users decide between options\n- evaluate: Helps users assess fit or readiness\n- start: Gets users running quickly (quickstart)\n- build: Task completion guide — step-by-step (assumes context)\n- configure: Setting up or adjusting configuration\n- operate: Day-to-day operational procedures\n- troubleshoot: Fix problems (symptom->cause->fix)\n- verify: Confirm something is working correctly\n- integrate: Connect with external systems or APIs\n- optimise: Improve performance or efficiency\n- reference: Lookup-oriented technical details, FAQs, glossaries\n- update: Version history or changelogs\n\nPage title: ${title || ''}\nPage path: ${relPath}\nFirst 1500 words: ${String(content || '').split(/\s+/).slice(0, 1500).join(' ')}\n\nRespond with ONLY the purpose type, nothing else.`;

  for (const model of models) {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://docs.livepeer.org',
        'User-Agent': 'livepeer-docs-purpose-assigner/1.0'
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: 'Classify documentation page purpose with one enum token only.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 16,
        temperature: 0
      })
    });

    if (response.status === 429) {
      continue;
    }
    if (!response.ok) {
      continue;
    }

    const payload = await response.json();
    const raw = String(payload?.choices?.[0]?.message?.content || '').trim().toLowerCase();
    const candidate = raw.replace(/[`"'\s]/g, '').replace(/[^a-z_]/g, '');
    if (CANONICAL_PURPOSES.includes(candidate)) {
      return { purpose: candidate, source: `llm:${model}` };
    }
  }

  return null;
}

function upsertFrontmatterOrder(originalData, key, value) {
  const data = { ...originalData };
  if (Object.prototype.hasOwnProperty.call(data, key)) {
    return data;
  }

  const entries = Object.entries(data);
  const insertAfterKey = Object.prototype.hasOwnProperty.call(data, 'description') ? 'description' : 'title';
  const insertIndex = entries.findIndex(([entryKey]) => entryKey === insertAfterKey);
  if (insertIndex === -1) {
    entries.push([key, value]);
  } else {
    entries.splice(insertIndex + 1, 0, [key, value]);
  }
  return Object.fromEntries(entries);
}

function printRow(row) {
  console.log(`${row.path}\t${row.purpose}\t${row.audience}\t${row.source}\t${row.changed ? 'yes' : 'no'}`);
}

async function main() {
  const repoRoot = getRepoRoot();
  const args = parseArgs(process.argv.slice(2));
  loadAndValidateUsefulnessConfig(prompts);
  const normalization = loadAudienceNormalization();

  let files;
  if (args.files.length > 0) {
    files = args.files.map((file) => toPosix(file)).sort((a, b) => a.localeCompare(b));
  } else {
    const all = getAllRoutablePages(repoRoot);
    if (args.scope === 'all') {
      files = all;
    } else if (args.scope === 'unclassified') {
      files = all;
    } else {
      files = all.filter(isPilotFile);
    }
  }

  const classifyWithLlm = args.classifyWithLlm;
  const apiKey = process.env.OPENROUTER_API_KEY || '';
  if (classifyWithLlm && !apiKey) {
    throw new Error('OPENROUTER_API_KEY is required for --classify-with-llm');
  }

  const rows = [];
  let assigned = 0;
  let wouldAssign = 0;
  let skipped = 0;
  let unclassified = 0;

  for (const relPath of files) {
    const absPath = path.join(repoRoot, relPath);
    if (!fs.existsSync(absPath) || !/\.mdx$/i.test(relPath)) continue;

    const raw = fs.readFileSync(absPath, 'utf8');
    const parsed = matter(raw);
    const section = sectionFromPath(relPath);
    const existingPurpose = parsed.data?.purpose;
    const existingAudience = parsed.data?.audience;

    let purposeInfo = { purpose: existingPurpose || 'unclassified', source: 'frontmatter' };
    if (!existingPurpose) {
      purposeInfo = inferPurposeByRules(relPath, raw);
      if (purposeInfo.purpose === 'unclassified' && classifyWithLlm) {
        const llmResult = await classifyPurposeWithLlm({
          apiKey,
          tier: args.llmTier,
          relPath,
          title: parsed.data?.title,
          content: stripFrontmatter(raw)
        });
        if (llmResult?.purpose) {
          purposeInfo = llmResult;
        }
      }
    }

    const audienceInfo = inferAudience(existingAudience, section, normalization);

    if (args.scope === 'unclassified' && purposeInfo.purpose !== 'unclassified' && !existingPurpose) {
      continue;
    }

    let nextData = { ...parsed.data };
    let changed = false;

    if (!existingPurpose && CANONICAL_PURPOSES.includes(purposeInfo.purpose)) {
      nextData = upsertFrontmatterOrder(nextData, 'purpose', purposeInfo.purpose);
      changed = true;
    }
    if (!existingAudience && AUDIENCE_ENUM.includes(audienceInfo.audience)) {
      nextData = upsertFrontmatterOrder(nextData, 'audience', audienceInfo.audience);
      changed = true;
    }

    if (changed && !args.dryRun) {
      const updated = matter.stringify(parsed.content, nextData, {
        lineWidth: 120,
        language: 'yaml'
      });
      fs.writeFileSync(absPath, updated);
      assigned += 1;
    } else if (changed && args.dryRun) {
      wouldAssign += 1;
    } else if (!changed) {
      skipped += 1;
    }

    if ((existingPurpose ? String(existingPurpose) : purposeInfo.purpose) === 'unclassified') {
      unclassified += 1;
    }

    rows.push({
      path: relPath,
      purpose: existingPurpose || purposeInfo.purpose || 'unclassified',
      audience: existingAudience || audienceInfo.audience,
      source: existingPurpose ? 'frontmatter' : purposeInfo.source,
      changed
    });
  }

  console.log('PATH\tPURPOSE\tAUDIENCE\tSOURCE\tCHANGED');
  rows.forEach(printRow);
  console.log('---');
  console.log(`Assigned: ${args.dryRun ? wouldAssign : assigned} pages | Skipped (already set): ${skipped} | Unclassified: ${unclassified}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });
}

module.exports = {
  parseArgs,
  inferPurposeByRules,
  inferAudience,
  classifyPurposeWithLlm
};
