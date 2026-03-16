'use strict';
/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Aggregates rule scores into a final usefulness score per page.
 * @pipeline          indirect — library module
 * @usage             const { score } = require('../lib/docs-usefulness/scoring');
 */
/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Aggregates rule scores into a final usefulness score per page.
 * @pipeline          indirect — library module
 * @usage             const { score } = require('../lib/docs-usefulness/scoring');
 */
/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Aggregates rule scores into a final usefulness score per page.
 * @pipeline          indirect — library module
 * @usage             const { score } = require('../lib/docs-usefulness/scoring');
 */
/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Aggregates rule scores into a final usefulness score per page.
 * @pipeline          indirect — library module
 * @usage             const { score } = require('../lib/docs-usefulness/scoring');
 */
/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Aggregates rule scores into a final usefulness score per page.
 * @pipeline          indirect — library module
 * @usage             const { score } = require('../lib/docs-usefulness/scoring');
 */

const fs = require('fs');
const path = require('path');
const {
  extractFrontmatter,
  extractImports,
  validateMdx
} = require('../../../tests/utils/mdx-parser');
const {
  loadRubric,
  getRulesForPage
} = require('./rubric-loader');
const { EVALUATORS } = require('./rule-evaluators');
const { runQualityGate } = require('./quality-gate');

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function firstOf(...values) {
  for (const value of values) {
    if (value !== undefined && value !== null) return value;
  }
  return null;
}

function getFrontmatterValues(page) {
  if (!page) return {};
  if (page.frontmatter && page.frontmatter.data && typeof page.frontmatter.data === 'object') {
    return page.frontmatter.data;
  }
  if (page.frontmatter && typeof page.frontmatter === 'object') {
    return page.frontmatter;
  }
  if (page.frontmatterData && typeof page.frontmatterData === 'object') {
    return page.frontmatterData;
  }
  return {};
}

function stripFrontmatter(content) {
  return String(content || '').replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '');
}

function stripMdxToText(content) {
  return String(content || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/^import\s.+$/gm, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]+\]\(([^)]+)\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseHeadings(content) {
  const headings = [];
  String(content || '')
    .split('\n')
    .forEach((line) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        headings.push({ level: match[1].length, text: match[2].trim() });
      }
    });
  return headings;
}

function parseCodeBlocks(content) {
  const blocks = [];
  const regex = /```([A-Za-z0-9_-]+)?\n([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(String(content || ''))) !== null) {
    blocks.push({
      language: String(match[1] || '').toLowerCase(),
      content: String(match[2] || '')
    });
  }
  return blocks;
}

function parseTables(content) {
  const tables = [];
  const lines = String(content || '').split('\n');
  for (let i = 0; i < lines.length - 1; i += 1) {
    const line = lines[i].trim();
    const next = lines[i + 1].trim();
    if (!line.includes('|') || !next.includes('|')) continue;
    if (!/^\|?\s*:?-{3,}/.test(next)) continue;
    tables.push({
      startLine: i + 1,
      header: line,
      separator: next
    });
  }
  return tables;
}

function parseMarkdownLinks(content) {
  const links = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(String(content || ''))) !== null) {
    links.push(match[1].trim());
  }
  return links;
}

function parseHrefLinks(content) {
  const links = [];
  const regex = /\bhref\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = regex.exec(String(content || ''))) !== null) {
    links.push(match[1].trim());
  }
  return links;
}

function parseImages(content) {
  const images = [];

  const markdown = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  while ((match = markdown.exec(String(content || ''))) !== null) {
    images.push({ alt: String(match[1] || '').trim(), src: String(match[2] || '').trim() });
  }

  const jsxImg = /<(?:img|Image)\b[^>]*>/g;
  while ((match = jsxImg.exec(String(content || ''))) !== null) {
    const tag = match[0];
    const src = (tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const alt = (tag.match(/\balt\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    if (src) {
      images.push({ alt: String(alt || '').trim(), src: String(src || '').trim() });
    }
  }

  return images;
}

function parseComponents(content) {
  const components = new Set();
  const regex = /<([A-Z][A-Za-z0-9]*)\b/g;
  let match;
  while ((match = regex.exec(String(content || ''))) !== null) {
    components.add(match[1]);
  }
  return [...components];
}

function parseSectionFromPath(filePath) {
  const rel = toPosix(filePath).replace(/^\/+/, '');
  const parts = rel.split('/');
  if (parts[0] === 'v2' && parts[1]) return parts[1];
  return parts[0] || 'unknown';
}

function resolveImportPath(repoRoot, currentFile, importPath) {
  const relImport = String(importPath || '');
  if (!relImport) return null;

  const candidates = [];
  if (relImport.startsWith('/')) {
    candidates.push(path.join(repoRoot, relImport));
  } else {
    const dir = path.dirname(path.join(repoRoot, currentFile));
    candidates.push(path.join(dir, relImport));
  }

  return candidates.some((candidate) => {
    const withExt = [candidate, `${candidate}.js`, `${candidate}.jsx`, `${candidate}.ts`, `${candidate}.tsx`, `${candidate}.mdx`, `${candidate}.md`, path.join(candidate, 'index.js'), path.join(candidate, 'index.mdx')];
    return withExt.some((target) => fs.existsSync(target));
  });
}

function analyzeMdxPage({ content, filePath, routePath, repoRoot = process.cwd() }) {
  const rawContent = String(content || '');
  const frontmatterMeta = extractFrontmatter(rawContent);
  const frontmatterValues = frontmatterMeta?.data && typeof frontmatterMeta.data === 'object' ? frontmatterMeta.data : {};
  const body = stripFrontmatter(rawContent);
  const textContent = stripMdxToText(body);
  const headings = parseHeadings(body);
  const codeBlocks = parseCodeBlocks(rawContent);
  const tables = parseTables(rawContent);
  const images = parseImages(rawContent);
  const links = [...parseMarkdownLinks(rawContent), ...parseHrefLinks(rawContent)];
  const internalLinks = [...new Set(links.filter((link) => !/^https?:\/\//i.test(link) && !/^mailto:/i.test(link)))];
  const externalLinks = [...new Set(links.filter((link) => /^https?:\/\//i.test(link)))];
  const components = parseComponents(rawContent);
  const imports = extractImports(rawContent);
  const parseValidation = validateMdx(rawContent, filePath);

  const flags = [];
  if (!rawContent.trim()) flags.push('empty');
  if (!frontmatterMeta.exists) flags.push('missing_frontmatter');
  if (frontmatterMeta.exists && frontmatterMeta.data === null) flags.push('invalid_frontmatter');
  if (frontmatterMeta.exists && frontmatterValues && !frontmatterValues.title) flags.push('missing_title');
  if (frontmatterMeta.exists && frontmatterValues && !frontmatterValues.description) flags.push('missing_description');
  if (/\bTODO\b|\bTBD\b/i.test(rawContent)) flags.push('todo_marker');
  if (/Coming Soon/i.test(rawContent)) flags.push('coming_soon');
  if (/\/v2\/pages\//i.test(rawContent)) flags.push('legacy_v2_pages_link');

  const unresolvedImports = imports.filter((imp) => {
    const impPath = String(imp.path || '');
    if (impPath.startsWith('http')) return false;
    if (/^(react|next|fs|path|os|crypto|assert|child_process|node:)/.test(impPath)) return false;
    return !resolveImportPath(repoRoot, filePath, impPath);
  });
  if (unresolvedImports.length > 0) flags.push('broken_import');

  if (Array.isArray(parseValidation.errors) && parseValidation.errors.length > 0) {
    flags.push('mdx_parse_error');
  }

  if (textContent.split(/\s+/).filter(Boolean).length < 120 && textContent.length > 0) {
    flags.push('thin_content');
  }

  const uniqueFlags = [...new Set(flags)];

  const page = {
    path: toPosix(filePath),
    routePath: routePath || '',
    frontmatter: {
      ...frontmatterValues
    },
    frontmatterData: {
      ...frontmatterValues
    },
    frontmatterMeta,
    content: rawContent,
    textContent,
    headings,
    codeBlocks,
    tables,
    images,
    internalLinks,
    externalLinks,
    components,
    imports,
    wordCount: textContent ? textContent.split(/\s+/).filter(Boolean).length : 0,
    section: parseSectionFromPath(filePath),
    flags: uniqueFlags,
    unresolvedImports: unresolvedImports.map((imp) => imp.path),
    parseErrors: parseValidation.errors || [],
    parseWarnings: parseValidation.warnings || []
  };

  // Back-compat aliases for legacy callers.
  page.file_path = page.path;
  page.route_path = page.routePath;
  page.substantive_word_count = page.wordCount;
  page.code_block_count = page.codeBlocks.length;
  page.internal_link_count = page.internalLinks.length;
  page.external_link_count = page.externalLinks.length;
  page.headings_count = page.headings.length;
  page.frontmatter = {
    exists: frontmatterMeta.exists,
    data: { ...frontmatterValues },
    raw: frontmatterMeta.raw,
    error: frontmatterMeta.error
  };
  page.frontmatterData = { ...frontmatterValues };

  return page;
}

function computeTier1Score(page, tier1Rules) {
  const details = {};
  let weightSum = 0;
  let earnedWeight = 0;

  Object.entries(tier1Rules || {}).forEach(([ruleName, ruleConfig]) => {
    const evaluator = EVALUATORS[ruleConfig.type];
    if (!evaluator) {
      details[ruleName] = { passed: true, weight: ruleConfig.weight, error: 'unknown_type' };
      weightSum += Number(ruleConfig.weight || 0);
      return;
    }

    let passed = false;
    try {
      passed = Boolean(evaluator(page, ruleConfig));
    } catch (_error) {
      passed = false;
    }

    const weight = Number(ruleConfig.weight || 0);
    details[ruleName] = { passed, weight };
    weightSum += weight;
    if (passed) earnedWeight += weight;
  });

  const score = weightSum > 0 ? Math.round((earnedWeight / weightSum) * 100) : 0;
  return { score, details };
}

const AGENT_RULES = {
  structured_data_density: {
    weight: 0.2,
    evaluate(page) {
      const structured = (page.tables || []).length + (page.codeBlocks || []).length + (String(page.content || '').match(/\|\s*\w+\s*\|/g) || []).length;
      const ratio = structured / Math.max(1, (page.wordCount || 1) / 100);
      return Math.min(100, Math.round(ratio * 25));
    }
  },
  frontmatter_completeness: {
    weight: 0.15,
    evaluate(page) {
      const fm = getFrontmatterValues(page);
      const fields = ['title', 'description', 'purpose', 'audience'];
      const present = fields.filter((field) => Boolean(fm[field])).length;
      return Math.round((present / fields.length) * 100);
    }
  },
  heading_accuracy: {
    weight: 0.2,
    evaluate(page) {
      const headings = (page.headings || []).map((heading) => String(heading.text || '').trim()).filter(Boolean);
      if (headings.length === 0) return 0;
      const unique = new Set(headings).size / headings.length;
      const avgLen = headings.reduce((sum, heading) => sum + heading.split(/\s+/).filter(Boolean).length, 0) / headings.length;
      const descriptive = avgLen >= 2 ? 1 : 0.5;
      return Math.round(unique * descriptive * 100);
    }
  },
  cross_reference_density: {
    weight: 0.15,
    evaluate(page) {
      return Math.min(100, (page.internalLinks || []).length * 15);
    }
  },
  answer_extractability: {
    weight: 0.2,
    evaluate(page) {
      const text = String(page.textContent || '');
      const hasDefinitions = /\b(is a|refers to|means|defined as)\b/i.test(text);
      const hasLists = /(^|\n)\s*[-*]\s+/.test(String(page.content || '')) || /(^|\n)\s*\d+\.\s+/.test(String(page.content || ''));
      const hasCodeExamples = (page.codeBlocks || []).length > 0;
      let score = 30;
      if (hasDefinitions) score += 25;
      if (hasLists) score += 20;
      if (hasCodeExamples) score += 25;
      return Math.min(100, score);
    }
  },
  structured_output_potential: {
    weight: 0.1,
    evaluate(page) {
      const hasJson = (page.codeBlocks || []).some((block) => ['json', 'yaml', 'yml'].includes(String(block.language || '').toLowerCase()));
      const hasParamTable = /\|\s*(parameter|field|flag|name)\s*\|/i.test(String(page.content || ''));
      const hasSchema = /type:\s*(string|integer|boolean|array|object)/i.test(String(page.textContent || ''));
      let score = 20;
      if (hasJson) score += 30;
      if (hasParamTable) score += 30;
      if (hasSchema) score += 20;
      return Math.min(100, score);
    }
  }
};

function computeAgentScore(page) {
  const details = {};
  let weighted = 0;
  let weightSum = 0;

  Object.entries(AGENT_RULES).forEach(([name, rule]) => {
    const score = Math.max(0, Math.min(100, Number(rule.evaluate(page) || 0)));
    details[name] = { score, weight: rule.weight };
    weighted += score * Number(rule.weight || 0);
    weightSum += Number(rule.weight || 0);
  });

  return {
    score: weightSum > 0 ? Math.round(weighted / weightSum) : 0,
    details
  };
}

function computeBand(score, flags = []) {
  const value = Number(score || 0);
  const flagSet = new Set(flags || []);
  if (flagSet.has('empty') || value <= 0) return 'empty';
  if (flagSet.has('coming_soon') || flagSet.has('todo_marker') || value <= 24) return 'placeholder_or_broken';
  if (value <= 49) return 'incomplete_risky';
  if (value <= 69) return 'usable_needs_work';
  return 'good';
}

function fallbackLegacyTier1(page) {
  const checks = {
    has_words: { passed: (page.wordCount || 0) >= 120, weight: 0.4 },
    has_headings: { passed: (page.headings || []).length >= 2, weight: 0.2 },
    has_links: { passed: (page.internalLinks || []).length >= 1, weight: 0.2 },
    has_title: { passed: Boolean(getFrontmatterValues(page).title), weight: 0.2 }
  };

  const weightSum = Object.values(checks).reduce((sum, check) => sum + check.weight, 0);
  const earned = Object.values(checks).reduce((sum, check) => sum + (check.passed ? check.weight : 0), 0);
  return {
    score: Math.round((earned / weightSum) * 100),
    details: checks
  };
}

function scorePage(page, options = {}) {
  const rubric = options.rubric || loadRubric();
  const rules = getRulesForPage(rubric, page);
  const qualityGate = runQualityGate({
    ...page,
    frontmatter: getFrontmatterValues(page)
  });

  const output = {
    path: page.path,
    internalLinks: page.internalLinks || [],
    purpose: null,
    purpose_source: 'none',
    audience: rules.audience,
    audience_source: rules.audienceSource,
    audience_raw: firstOf(rules.audienceRaw, getFrontmatterValues(page).audience),
    tier1_score: 0,
    tier1_details: {},
    tier2_score: null,
    tier2_details: null,
    combined_score: 0,
    quality_gate_status: qualityGate.status,
    quality_gate_errors: qualityGate.errors,
    quality_gate_details: qualityGate.details,
    agent_score: 0,
    agent_details: {},
    band: 'empty',
    flags: [...new Set(page.flags || [])]
  };

  let tier1;
  if (!rules.purpose || !rules.tier1) {
    tier1 = fallbackLegacyTier1(page);
    if (rules.purposeInvalid) {
      output.flags.push('invalid_purpose');
    } else {
      output.flags.push('purpose_unresolved');
    }
  } else {
    tier1 = computeTier1Score(page, rules.tier1);
  }

  const agent = computeAgentScore(page);

  output.purpose = rules.purpose;
  output.purpose_source = rules.purposeSource;
  output.tier1_score = tier1.score;
  output.tier1_details = tier1.details;
  output.combined_score = tier1.score;
  output.agent_score = agent.score;
  output.agent_details = agent.details;
  output.band = computeBand(output.combined_score, output.flags);

  output.flags = [...new Set(output.flags)];
  return output;
}

function buildUsefulnessMatrixFields(input = {}) {
  const page = input.analysis || analyzeMdxPage(input);
  const score = input.score || scorePage(page, input);

  return {
    purpose: score.purpose,
    purpose_source: score.purpose_source,
    audience: score.audience,
    audience_source: score.audience_source,
    tier1_score: score.tier1_score,
    tier2_score: score.tier2_score,
    combined_score: score.combined_score,
    human_usefulness_score: score.combined_score,
    agent_usefulness_score: score.agent_score,
    human_band: score.band,
    agent_band: computeBand(score.agent_score, score.flags),
    quality_gate_status: score.quality_gate_status,
    quality_gate_errors: score.quality_gate_errors,
    verification_priority: score.combined_score < 50 ? 'high' : score.combined_score < 70 ? 'medium' : 'low',
    notes_short: score.purpose
      ? `Purpose=${score.purpose}; tier1=${score.tier1_score}; quality=${score.quality_gate_status}`
      : `Purpose unresolved; tier1=${score.tier1_score}; quality=${score.quality_gate_status}`
  };
}

module.exports = {
  AGENT_RULES,
  analyzeMdxPage,
  buildUsefulnessMatrixFields,
  computeTier1Score,
  computeAgentScore,
  computeBand,
  scorePage
};
