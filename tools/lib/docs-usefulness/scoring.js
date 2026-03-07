/**
 * @script            scoring
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             full-repo
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Usefulness scoring engine — computes human and agent usefulness scores from page metadata
 * @pipeline          indirect — library module
 * @usage             node tools/lib/docs-usefulness/scoring.js [flags]
 */
const yaml = require('js-yaml');

const HUMAN_WEIGHTS = {
  clarity: 18,
  accuracy_2026: 15,
  verifiability: 10,
  docs_framework_fit: 10,
  rfp_page_compliance: 8,
  completeness: 14,
  actionability: 12,
  audience_fit: 7,
  machine_readability: 3,
  maintenance_quality: 3
};

const AGENT_WEIGHTS = {
  clarity: 12,
  accuracy_2026: 18,
  verifiability: 16,
  docs_framework_fit: 10,
  rfp_page_compliance: 8,
  completeness: 8,
  actionability: 6,
  audience_fit: 5,
  machine_readability: 12,
  maintenance_quality: 5
};

function clamp(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function round1(value) {
  return Number(clamp(value, 0, 5).toFixed(1));
}

function roundInt(value) {
  return Math.round(Number.isFinite(Number(value)) ? Number(value) : 0);
}

function extractFrontmatter(content) {
  const match = String(content || '').match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) return { exists: false, data: null, raw: null, body: String(content || '') };
  try {
    return {
      exists: true,
      data: yaml.load(match[1]) || {},
      raw: match[1],
      body: String(content || '').slice(match[0].length)
    };
  } catch (error) {
    return {
      exists: true,
      data: null,
      raw: match[1],
      error: error.message,
      body: String(content || '').slice(match[0].length)
    };
  }
}

function extractHeadings(body) {
  return String(body || '')
    .split('\n')
    .map((line) => line.match(/^(#{1,6})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => ({ level: match[1].length, text: match[2].trim() }));
}

function countCodeBlocks(content) {
  return (String(content || '').match(/```/g) || []).length / 2;
}

function extractLinks(content) {
  const links = [];
  let match;
  const markdown = /\[[^\]]+\]\(([^)]+)\)/g;
  while ((match = markdown.exec(String(content || ''))) !== null) {
    links.push(match[1]);
  }
  return links;
}

function stripForWordCount(body) {
  return String(body || '')
    .replace(/^import\s.+$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]+\]\(([^)]+)\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(text) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  return words.length;
}

function inferPersonaFromPath(filePath) {
  const p = String(filePath || '').toLowerCase();
  if (p.includes('/developers/')) return 'developers';
  if (p.includes('/gateways/')) return 'gateway_operators';
  if (p.includes('/orchestrators/')) return 'orchestrator_operators';
  if (p.includes('/lpt/')) return 'delegators_token_holders';
  if (p.includes('/community/')) return 'community';
  if (p.includes('/internal/')) return 'internal_maintainers';
  if (p.includes('/solutions/')) return 'platform_builders';
  if (p.includes('/about/')) return 'general_technical_audience';
  if (p.includes('/home/')) return 'general_audience';
  return 'unknown';
}

function inferDocTypeAndKind(filePath, body, frontmatter, headings) {
  const p = String(filePath || '').toLowerCase();
  const content = String(body || '');
  const generatedIndex = /Do not manually edit this file; run its generator/i.test(content);
  const hasOpenApi = /\bopenapi\s*:\s*['"]/i.test(String(frontmatter.raw || '')) || /<OpenAPI\b/.test(content);
  const hasComingSoon = /Coming Soon/i.test(content);
  const hasPreview = /<PreviewCallout\b/.test(content);

  let docType = 'explanation';
  let pageKind = 'content_explanation';

  if (generatedIndex) {
    docType = 'landing';
    pageKind = 'generated_index';
  } else if (hasOpenApi || p.includes('/api-reference/')) {
    docType = 'reference';
    pageKind = hasOpenApi && countWords(stripForWordCount(content)) < 80 ? 'api_reference_stub' : 'reference';
  } else if (/quickstart|tutorial/.test(p) || headings.some((h) => /\bquickstart|tutorial\b/i.test(h.text))) {
    docType = 'tutorial';
    pageKind = 'tutorial';
  } else if (/guide|how-to/.test(p) || headings.some((h) => /\bhow to|guide\b/i.test(h.text))) {
    docType = 'how_to';
    pageKind = 'how_to';
  } else if (/index\.mdx$/i.test(p)) {
    docType = 'landing';
    pageKind = 'landing';
  } else if (p.includes('/internal/')) {
    docType = 'explanation';
    pageKind = 'internal_process';
  }

  if (hasComingSoon && countWords(stripForWordCount(content)) < 80) {
    pageKind = 'placeholder';
  }
  if (hasPreview && countWords(stripForWordCount(content)) < 120 && pageKind !== 'generated_index') {
    pageKind = 'placeholder';
  }

  return { docType, pageKind };
}

function analyzeMdxPage({ content, filePath, routePath, accuracy = null }) {
  const rawContent = String(content || '');
  const frontmatter = extractFrontmatter(rawContent);
  const body = frontmatter.body || rawContent;
  const headings = extractHeadings(body);
  const links = extractLinks(rawContent);
  const textForWords = stripForWordCount(body);
  const substantiveWordCount = countWords(textForWords);
  const codeBlockCount = countCodeBlocks(rawContent);
  const numberedStepCount = (body.match(/^\s*\d+\.\s+/gm) || []).length;
  const externalLinks = links.filter((link) => /^https?:\/\//i.test(link));
  const internalLinks = links.filter((link) => !/^https?:\/\//i.test(link) && !/^mailto:/i.test(link));
  const legacyV2PagesLinks = links.filter((link) => /\/v2\/pages\//.test(link));
  const flags = [];

  if (rawContent.trim().length === 0) flags.push('empty');
  if (/Do not manually edit this file; run its generator/i.test(rawContent)) flags.push('generated_index');
  if (/<PreviewCallout\b/.test(rawContent)) flags.push('placeholder_preview');
  if (/Coming Soon/i.test(rawContent)) flags.push('coming_soon');
  if (/\bTODO\b|\bTBD\b/i.test(rawContent)) flags.push('todo_marker');
  if (legacyV2PagesLinks.length > 0) flags.push('legacy_v2_pages_link');
  if (!frontmatter.exists) flags.push('missing_frontmatter');
  if (frontmatter.exists && !frontmatter.data) flags.push('invalid_frontmatter');
  if (frontmatter.exists && frontmatter.data && !frontmatter.data.title) flags.push('missing_title');
  if (frontmatter.exists && frontmatter.data && !frontmatter.data.description) flags.push('missing_description');
  if (substantiveWordCount > 0 && substantiveWordCount < 120) flags.push('thin_content');

  if (
    flags.includes('coming_soon') ||
    (flags.includes('placeholder_preview') && substantiveWordCount < 140) ||
    flags.includes('todo_marker')
  ) {
    flags.push('incomplete');
  }

  const { docType, pageKind } = inferDocTypeAndKind(filePath, body, frontmatter, headings);
  if (pageKind === 'api_reference_stub') flags.push('api_reference_stub');
  if (pageKind === 'placeholder') flags.push('incomplete');

  const cohort = String(filePath || '').includes('/internal/') ? 'internal' : 'public';
  const personaPrimary = inferPersonaFromPath(filePath);
  const personaSecondary = cohort === 'internal' ? 'docs_maintainers' : null;

  return {
    file_path: filePath,
    route_path: routePath,
    cohort,
    frontmatter,
    headings,
    links,
    code_block_count: codeBlockCount,
    numbered_step_count: numberedStepCount,
    substantive_word_count: substantiveWordCount,
    line_count: rawContent.split('\n').length,
    file_bytes: Buffer.byteLength(rawContent, 'utf8'),
    external_link_count: externalLinks.length,
    internal_link_count: internalLinks.length,
    legacy_v2_pages_link_count: legacyV2PagesLinks.length,
    openapi_marker: /\bopenapi\s*:\s*['"]/i.test(String(frontmatter.raw || '')) || /<OpenAPI\b/.test(body),
    preview_callout_marker: /<PreviewCallout\b/.test(rawContent),
    generated_index_marker: flags.includes('generated_index'),
    persona_primary: personaPrimary,
    persona_secondary: personaSecondary,
    doc_type_primary: docType,
    page_kind: pageKind,
    flags: [...new Set(flags)],
    claims_extracted_count: Array.isArray(accuracy?.claims) ? accuracy.claims.length : 0,
    claim_results: Array.isArray(accuracy?.claim_results) ? accuracy.claim_results : [],
    accuracy
  };
}

function accuracyDimensionScore(accuracy) {
  const status = String(accuracy?.accuracy_2026_status || 'provisional');
  const conf = clamp(Number(accuracy?.accuracy_2026_confidence) || 0, 0, 1);
  if (status === 'verified_2026') return round1(4 + conf);
  if (status === 'provisional') return round1(1.5 + conf * 2.5);
  if (status === 'stale_risk') return round1(0.8 + conf * 1.2);
  if (status === 'contradicted') return 0;
  return round1(conf * 2);
}

function scoreDimensions(analysis) {
  const flags = new Set(analysis.flags || []);
  const words = Number(analysis.substantive_word_count) || 0;
  const headings = Array.isArray(analysis.headings) ? analysis.headings.length : 0;
  const extLinks = Number(analysis.external_link_count) || 0;
  const internalLinks = Number(analysis.internal_link_count) || 0;
  const codeBlocks = Number(analysis.code_block_count) || 0;
  const steps = Number(analysis.numbered_step_count) || 0;
  const claims = Number(analysis.claims_extracted_count) || 0;
  const verifiedSources = Array.isArray(analysis.accuracy?.verification_sources) ? analysis.accuracy.verification_sources.length : 0;
  const sourceConflicts = Array.isArray(analysis.accuracy?.source_conflicts) ? analysis.accuracy.source_conflicts.length : 0;
  const hasFrontmatter = analysis.frontmatter?.exists && analysis.frontmatter?.data;
  const hasTitle = Boolean(analysis.frontmatter?.data?.title);
  const hasDescription = Boolean(analysis.frontmatter?.data?.description);
  const isEmpty = flags.has('empty');

  if (isEmpty) {
    return {
      clarity: 0,
      accuracy_2026: 0,
      verifiability: 0,
      docs_framework_fit: 0,
      rfp_page_compliance: 0,
      completeness: 0,
      actionability: 0,
      audience_fit: 0,
      machine_readability: 0,
      maintenance_quality: 0
    };
  }

  let clarity = 1;
  clarity += words >= 120 ? 1.5 : words >= 50 ? 0.8 : 0;
  clarity += headings >= 2 ? 1.2 : headings === 1 ? 0.5 : 0;
  clarity += hasTitle ? 0.5 : 0;
  if (flags.has('incomplete')) clarity -= 1;
  if (flags.has('generated_index')) clarity += 0.6;
  clarity = round1(clarity);

  let verifiability = 0.8;
  verifiability += verifiedSources > 0 ? Math.min(2.5, verifiedSources * 0.4) : 0;
  verifiability += extLinks > 0 ? Math.min(1.2, extLinks * 0.2) : 0;
  verifiability += analysis.openapi_marker ? 0.8 : 0;
  if (claims > 0 && verifiedSources === 0) verifiability -= 0.6;
  if (sourceConflicts > 0) verifiability -= 0.5;
  verifiability = round1(verifiability);

  let docsFrameworkFit = 1.5;
  if (analysis.page_kind === 'generated_index') docsFrameworkFit = 4.2;
  else if (analysis.page_kind === 'api_reference_stub') docsFrameworkFit = analysis.openapi_marker ? 4.1 : 2.2;
  else if (analysis.doc_type_primary === 'tutorial' || analysis.doc_type_primary === 'how_to') {
    docsFrameworkFit += steps > 0 ? 1.4 : 0;
    docsFrameworkFit += codeBlocks > 0 ? 1.0 : 0;
    docsFrameworkFit += headings >= 2 ? 0.8 : 0;
  } else if (analysis.doc_type_primary === 'reference') {
    docsFrameworkFit += analysis.openapi_marker ? 1.6 : 0.8;
    docsFrameworkFit += headings >= 1 ? 0.8 : 0;
    docsFrameworkFit += extLinks > 0 ? 0.4 : 0;
  } else {
    docsFrameworkFit += headings >= 2 ? 1.0 : 0.5;
    docsFrameworkFit += words >= 150 ? 1.0 : 0.4;
  }
  if (flags.has('incomplete')) docsFrameworkFit -= 1.0;
  docsFrameworkFit = round1(docsFrameworkFit);

  let completeness = 0.8;
  if (analysis.page_kind === 'api_reference_stub') {
    completeness += analysis.openapi_marker ? 2.2 : 0;
    completeness += hasDescription ? 0.5 : 0;
    completeness += hasTitle ? 0.5 : 0;
  } else if (analysis.page_kind === 'generated_index') {
    completeness += internalLinks + extLinks >= 5 ? 3 : internalLinks + extLinks >= 2 ? 2 : 1;
  } else {
    completeness += words >= 400 ? 4 : words >= 220 ? 3 : words >= 120 ? 2 : words >= 60 ? 1 : 0;
    completeness += headings >= 3 ? 0.6 : headings >= 1 ? 0.2 : 0;
  }
  if (flags.has('incomplete')) completeness -= 1.5;
  if (flags.has('thin_content')) completeness -= 0.8;
  completeness = round1(completeness);

  let actionability = 0.5;
  actionability += codeBlocks > 0 ? Math.min(1.8, codeBlocks * 0.8) : 0;
  actionability += steps > 0 ? Math.min(1.6, steps * 0.5) : 0;
  actionability += analysis.openapi_marker ? 2.0 : 0;
  actionability += internalLinks + extLinks >= 3 ? 0.7 : internalLinks + extLinks > 0 ? 0.3 : 0;
  if (flags.has('coming_soon')) actionability -= 1.2;
  actionability = round1(actionability);

  let audienceFit = 1.5;
  if (analysis.persona_primary !== 'unknown') audienceFit += 1.2;
  if (analysis.cohort === 'internal' && analysis.page_kind === 'internal_process') audienceFit += 1.0;
  if (analysis.cohort === 'public' && analysis.doc_type_primary) audienceFit += 0.8;
  if (flags.has('incomplete')) audienceFit -= 0.8;
  audienceFit = round1(audienceFit);

  let machineReadability = 1.2;
  machineReadability += hasFrontmatter ? 1.2 : 0;
  machineReadability += hasTitle ? 0.6 : 0;
  machineReadability += hasDescription ? 0.6 : 0;
  machineReadability += headings >= 2 ? 0.8 : headings === 1 ? 0.4 : 0;
  machineReadability += analysis.openapi_marker ? 0.8 : 0;
  if (flags.has('invalid_frontmatter')) machineReadability -= 1.5;
  machineReadability = round1(machineReadability);

  let maintenanceQuality = 2.0;
  if (flags.has('missing_frontmatter')) maintenanceQuality -= 1.0;
  if (flags.has('invalid_frontmatter')) maintenanceQuality -= 2.0;
  if (flags.has('missing_title')) maintenanceQuality -= 0.8;
  if (flags.has('missing_description')) maintenanceQuality -= 0.6;
  if (flags.has('legacy_v2_pages_link')) maintenanceQuality -= 0.8;
  if (flags.has('source_conflict')) maintenanceQuality -= 0.5;
  maintenanceQuality += analysis.generated_index_marker ? 0.5 : 0;
  maintenanceQuality = round1(maintenanceQuality);

  const accuracy_2026 = accuracyDimensionScore(analysis.accuracy);
  const rfp_page_compliance = round1(
    (clarity + completeness + actionability + audienceFit + machineReadability) / 5 - (flags.has('incomplete') ? 0.4 : 0)
  );

  return {
    clarity,
    accuracy_2026,
    verifiability,
    docs_framework_fit: docsFrameworkFit,
    rfp_page_compliance,
    completeness,
    actionability,
    audience_fit: audienceFit,
    machine_readability: machineReadability,
    maintenance_quality: maintenanceQuality
  };
}

function computeWeightedScore(dimensions, weights) {
  let total = 0;
  for (const [dimension, weight] of Object.entries(weights)) {
    const dimScore = clamp(dimensions[dimension], 0, 5);
    total += (dimScore / 5) * weight;
  }
  return roundInt(total);
}

function scoreBand(score) {
  if (score <= 0) return 'empty';
  if (score <= 24) return 'placeholder_or_broken';
  if (score <= 49) return 'incomplete_risky';
  if (score <= 69) return 'usable_needs_work';
  if (score <= 84) return 'good';
  return 'strong';
}

function buildNotesShort(analysis, dimensions, accuracy) {
  const notes = [];
  if (analysis.flags.includes('empty')) notes.push('Empty page.');
  if (analysis.flags.includes('incomplete')) notes.push('Contains placeholder/incomplete signals.');
  if (analysis.flags.includes('legacy_v2_pages_link')) notes.push('Contains legacy /v2/pages links.');
  if ((accuracy?.source_conflicts || []).length > 0) notes.push('Source conflict detected (GitHub/DeepWiki weighting applied).');
  if ((accuracy?.verification_sources || []).length === 0 && analysis.claims_extracted_count > 0) notes.push('Claims extracted but no external verification evidence.');
  if (notes.length === 0) {
    notes.push(`Structured ${analysis.doc_type_primary} page with ${analysis.substantive_word_count} substantive words.`);
  }
  return notes.slice(0, 2).join(' ');
}

function buildUsefulnessMatrixFields(input = {}) {
  const analysis = input.analysis || analyzeMdxPage(input);
  const accuracy = analysis.accuracy || input.accuracy || null;
  const dimensions = scoreDimensions(analysis);
  const humanScore = analysis.flags.includes('empty') ? 0 : computeWeightedScore(dimensions, HUMAN_WEIGHTS);
  const agentScore = analysis.flags.includes('empty') ? 0 : computeWeightedScore(dimensions, AGENT_WEIGHTS);
  const verificationRequired = (analysis.claims_extracted_count || 0) > 0 && accuracy?.accuracy_2026_status !== 'verified_2026';
  const manualReviewRequired = (
    analysis.flags.includes('invalid_frontmatter') ||
    analysis.flags.includes('source_conflict') ||
    accuracy?.accuracy_2026_status === 'contradicted'
  );
  let verificationPriority = null;
  if (verificationRequired) {
    if (accuracy?.accuracy_2026_status === 'contradicted' || accuracy?.accuracy_2026_status === 'stale_risk') verificationPriority = 'high';
    else if ((accuracy?.accuracy_2026_confidence || 0) < 0.5) verificationPriority = 'medium';
    else verificationPriority = 'low';
  }

  const applicableCount = analysis.cohort === 'internal' ? 3 : 5;
  const metCount = roundInt((dimensions.rfp_page_compliance / 5) * applicableCount);

  return {
    cohort: analysis.cohort,
    page_kind: analysis.page_kind,
    persona_primary: analysis.persona_primary,
    persona_secondary: analysis.persona_secondary,
    doc_type_primary: analysis.doc_type_primary,
    substantive_word_count: analysis.substantive_word_count,
    heading_count: analysis.headings.length,
    code_block_count: analysis.code_block_count,
    external_link_count: analysis.external_link_count,
    internal_link_count: analysis.internal_link_count,
    clarity_score: dimensions.clarity,
    accuracy_2026_score: dimensions.accuracy_2026,
    verifiability_score: dimensions.verifiability,
    docs_framework_fit_score: dimensions.docs_framework_fit,
    rfp_page_compliance_score: dimensions.rfp_page_compliance,
    completeness_score: dimensions.completeness,
    actionability_score: dimensions.actionability,
    audience_fit_score: dimensions.audience_fit,
    machine_readability_score: dimensions.machine_readability,
    maintenance_quality_score: dimensions.maintenance_quality,
    human_usefulness_score: humanScore,
    agent_usefulness_score: agentScore,
    human_band: scoreBand(humanScore),
    agent_band: scoreBand(agentScore),
    verification_required: verificationRequired,
    verification_priority: verificationPriority,
    manual_review_required: manualReviewRequired,
    rfp_page_applicable_count: applicableCount,
    rfp_page_met_count: metCount,
    rfp_page_gap_tags: dimensions.rfp_page_compliance < 3 ? ['rfp_page_quality_gap'] : [],
    notes_short: buildNotesShort(analysis, dimensions, accuracy)
  };
}

module.exports = {
  HUMAN_WEIGHTS,
  AGENT_WEIGHTS,
  analyzeMdxPage,
  scoreDimensions,
  buildUsefulnessMatrixFields,
  scoreBand
};
