#!/usr/bin/env node
/**
 * @script            assign-purpose-metadata
 * @category          generator
 * @purpose           qa:content-quality
 * @scope             tools/scripts, tools/lib/docs-usefulness, tools/config, v2
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @usage             node tools/scripts/assign-purpose-metadata.js [flags]
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
} = require('../../tests/utils/file-walker');
const {
  audienceTokensFromRaw,
  loadAudienceNormalization,
  loadLlmTiers,
  AUDIENCE_ENUM,
  PURPOSE_ENUM
} = require('../lib/docs-usefulness/rubric-loader');
const { analyzeMdxPage } = require('../lib/docs-usefulness/scoring');
const prompts = require('../lib/docs-usefulness/prompts');
const { loadAndValidateUsefulnessConfig } = require('../lib/docs-usefulness/config-validator');

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

const PURPOSE_RULES = [
  { test: (p) => /portal/i.test(path.basename(p)), purpose: 'landing', source: 'filename' },
  { test: (p) => /mission-control/i.test(path.basename(p)), purpose: 'landing', source: 'filename' },
  { test: (p) => path.basename(p) === 'index.mdx', purpose: 'landing', source: 'filename' },
  { test: (p) => /quickstart/i.test(path.basename(p)), purpose: 'tutorial', source: 'filename' },
  { test: (p) => /get-started/i.test(path.basename(p)), purpose: 'tutorial', source: 'filename' },
  { test: (p) => /primer/i.test(path.basename(p)), purpose: 'tutorial', source: 'filename' },
  { test: (p) => /^first-/i.test(path.basename(p)), purpose: 'tutorial', source: 'filename' },
  { test: (p) => /^faq/i.test(path.basename(p)), purpose: 'faq', source: 'filename' },
  { test: (p) => /troubleshoot/i.test(path.basename(p)), purpose: 'troubleshooting', source: 'filename' },
  { test: (p) => /glossary/i.test(path.basename(p)), purpose: 'glossary', source: 'filename' },
  { test: (p) => /changelog|release-notes/i.test(path.basename(p)), purpose: 'changelog', source: 'filename' },
  { test: (p) => /api-reference|config-flags/i.test(path.basename(p)), purpose: 'reference', source: 'filename' },
  { test: (p) => /overview/i.test(path.basename(p)), purpose: 'overview', source: 'filename' },
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
    return { purpose: 'how_to', source: 'content' };
  }
  if (accordionCount >= 5) {
    return { purpose: 'faq', source: 'content' };
  }
  if ((page.wordCount || 0) < 150 && (page.components || []).some((component) => ['Card', 'CardGroup', 'GotoCard', 'DisplayCard'].includes(component))) {
    return { purpose: 'landing', source: 'content' };
  }
  if ((page.wordCount || 0) > 300 && (page.headings || []).length >= 3 && !(page.components || []).includes('Steps')) {
    return { purpose: 'concept', source: 'content' };
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

  const prompt = `Given this documentation page, what is its primary purpose?\nRespond with exactly one of: landing, overview, concept, how_to, tutorial, reference, faq, glossary, changelog, troubleshooting\n\nDefinitions:\n- landing: Routes users (portal, index, navigation pages)\n- overview: Orients ("what is this and why care")\n- concept: Explains one idea/mechanism in depth\n- how_to: Task completion guide (assumes context)\n- tutorial: Zero-to-result walkthrough (assumes nothing)\n- reference: Lookup-oriented technical details\n- faq: Common questions answered\n- glossary: Term definitions\n- changelog: Version history\n- troubleshooting: Fix problems (symptom->cause->fix)\n\nPage title: ${title || ''}\nPage path: ${relPath}\nFirst 1500 words: ${String(content || '').split(/\s+/).slice(0, 1500).join(' ')}\n\nRespond with ONLY the purpose type, nothing else.`;

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
    if (PURPOSE_ENUM.includes(candidate)) {
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

    if (!existingPurpose && PURPOSE_ENUM.includes(purposeInfo.purpose)) {
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
