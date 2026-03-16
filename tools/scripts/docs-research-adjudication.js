#!/usr/bin/env node
/**
 * @script            docs-research-adjudication
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tasks/research, tests/unit/docs-research-adjudication.test.js, tasks/reports/repo-ops, docs-guide/frameworks/research-skill-workflow.mdx
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs research adjudication ledger — validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.
 * @pipeline          manual — experimental research system
 * @usage             node tools/scripts/docs-research-adjudication.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_LEDGER = 'tasks/research/adjudication/page-content-research-outcomes.json';
const VALID_OUTCOME_CLASSES = new Set([
  'true_positive',
  'false_positive',
  'false_negative',
  'needs_split',
  'needs_narrowing',
  'needs_more_sources'
]);
const VALID_CAUSE_TAGS = new Set([
  'weak_evidence_ranking',
  'bad_family_grouping',
  'path_inference_overreach',
  'stale_canonical_owner',
  'missing_coverage',
  'wording_only_conflict'
]);
const VALID_HUMAN_VERDICTS = new Set([
  'verified',
  'conflicted',
  'time-sensitive',
  'unverified',
  'historical-only',
  'deprecated',
  'not-detected',
  'not-a-real-claim'
]);
const VALID_FAMILY_STATUSES = new Set([
  'stable',
  'advisory-only',
  'needs-split',
  'needs-narrowing',
  'needs-more-sources'
]);
const VALID_TRUST_TIERS = new Set([
  'experimental',
  'advisory',
  'advisory-high-confidence',
  'not-eligible'
]);
const GATEWAY_STATUS_FAMILIES = new Set([
  'clearinghouse-public-readiness',
  'remote-signer-current-scope',
  'programme-availability',
  'community-signer-testing-surface',
  'gateway-support-contact-channel'
]);

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function repoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/docs-research-adjudication.js [options]',
      '',
      'Modes:',
      '  --validate                       Validate the adjudication ledger',
      '  --record                         Upsert one adjudication entry from a report artifact',
      '  --summary                        Write or print measurement summaries by family and trust slice',
      '',
      'Options:',
      `  --ledger <path>                  Ledger json path (default: ${DEFAULT_LEDGER})`,
      '  --report-json <path>             Research report artifact used as the source record',
      '  --reviewer <name>                Reviewer identity for --record',
      '  --claim-id <id>                  Claim id to adjudicate from the report',
      '  --claim-family <name>            Claim family for missing-coverage or claim-family-only adjudications',
      '  --human-verdict <value>          Human verdict enum for --record',
      '  --outcome-class <value>          Outcome class enum for --record',
      '  --cause-tag <value>              Cause tag enum for --record',
      '  --action <text>                  Action taken or recommended for --record',
      '  --family-status <value>          Optional latest family status metadata for --record',
      '  --trust-tier <value>             Optional latest trust-tier metadata for --record',
      '  --notes <text>                   Optional notes for --record',
      '  --page-scope <a,b,c>             Required for false negatives not present in the source report',
      '  --report-md <path>               Write markdown summary for --summary',
      '  --report-out-json <path>         Write json summary for --summary',
      '  --quiet                          Suppress success logs',
      '  --help                           Show help'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const out = {
    ledger: DEFAULT_LEDGER,
    validate: false,
    record: false,
    summary: false,
    reportJson: '',
    reviewer: '',
    claimId: '',
    claimFamily: '',
    humanVerdict: '',
    outcomeClass: '',
    causeTag: '',
    action: '',
    familyStatus: '',
    trustTier: '',
    notes: '',
    pageScope: [],
    reportMd: '',
    reportOutJson: '',
    quiet: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    if (token === '--validate') {
      out.validate = true;
      continue;
    }
    if (token === '--record') {
      out.record = true;
      continue;
    }
    if (token === '--summary') {
      out.summary = true;
      continue;
    }
    if (token === '--ledger') {
      out.ledger = String(argv[i + 1] || '').trim() || out.ledger;
      i += 1;
      continue;
    }
    if (token.startsWith('--ledger=')) {
      out.ledger = token.slice('--ledger='.length).trim() || out.ledger;
      continue;
    }
    if (token === '--report-json') {
      out.reportJson = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-json=')) {
      out.reportJson = token.slice('--report-json='.length).trim();
      continue;
    }
    if (token === '--reviewer') {
      out.reviewer = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--reviewer=')) {
      out.reviewer = token.slice('--reviewer='.length).trim();
      continue;
    }
    if (token === '--claim-id') {
      out.claimId = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--claim-id=')) {
      out.claimId = token.slice('--claim-id='.length).trim();
      continue;
    }
    if (token === '--claim-family') {
      out.claimFamily = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--claim-family=')) {
      out.claimFamily = token.slice('--claim-family='.length).trim();
      continue;
    }
    if (token === '--human-verdict') {
      out.humanVerdict = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--human-verdict=')) {
      out.humanVerdict = token.slice('--human-verdict='.length).trim();
      continue;
    }
    if (token === '--outcome-class') {
      out.outcomeClass = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--outcome-class=')) {
      out.outcomeClass = token.slice('--outcome-class='.length).trim();
      continue;
    }
    if (token === '--cause-tag') {
      out.causeTag = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--cause-tag=')) {
      out.causeTag = token.slice('--cause-tag='.length).trim();
      continue;
    }
    if (token === '--action') {
      out.action = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--action=')) {
      out.action = token.slice('--action='.length).trim();
      continue;
    }
    if (token === '--family-status') {
      out.familyStatus = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--family-status=')) {
      out.familyStatus = token.slice('--family-status='.length).trim();
      continue;
    }
    if (token === '--trust-tier') {
      out.trustTier = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--trust-tier=')) {
      out.trustTier = token.slice('--trust-tier='.length).trim();
      continue;
    }
    if (token === '--notes') {
      out.notes = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--notes=')) {
      out.notes = token.slice('--notes='.length).trim();
      continue;
    }
    if (token === '--page-scope') {
      out.pageScope = String(argv[i + 1] || '')
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (token.startsWith('--page-scope=')) {
      out.pageScope = token
        .slice('--page-scope='.length)
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      continue;
    }
    if (token === '--report-md') {
      out.reportMd = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-md=')) {
      out.reportMd = token.slice('--report-md='.length).trim();
      continue;
    }
    if (token === '--report-out-json') {
      out.reportOutJson = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-out-json=')) {
      out.reportOutJson = token.slice('--report-out-json='.length).trim();
      continue;
    }
    if (token === '--quiet') {
      out.quiet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  const modes = [out.validate, out.record, out.summary].filter(Boolean).length;
  if (modes !== 1 && !out.help) {
    throw new Error('Use exactly one of --validate, --record, or --summary');
  }

  return out;
}

function assertString(value, field) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${field} must be a non-empty string`);
  }
  return value.trim();
}

function assertDateTime(value, field) {
  const normalized = assertString(value, field);
  if (Number.isNaN(Date.parse(normalized))) {
    throw new Error(`${field} must be a valid ISO datetime`);
  }
  return normalized;
}

function normalizeStringArray(value, field) {
  if (!Array.isArray(value)) {
    throw new Error(`${field} must be an array`);
  }
  return [...new Set(value.map((entry) => assertString(entry, `${field}[]`)))].sort();
}

function readJson(absPath, fallback = null) {
  if (!fs.existsSync(absPath)) {
    if (fallback != null) return fallback;
    throw new Error(`JSON file not found: ${toPosix(path.relative(repoRoot(), absPath))}`);
  }
  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
  } catch (error) {
    throw new Error(`Invalid JSON at ${toPosix(path.relative(repoRoot(), absPath))}: ${error.message}`);
  }
}

function writeJson(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function normalizeEntry(entry, index) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    throw new Error(`entries[${index}] must be an object`);
  }
  const outcomeClass = assertString(entry.outcome_class, `entries[${index}].outcome_class`);
  if (!VALID_OUTCOME_CLASSES.has(outcomeClass)) {
    throw new Error(`entries[${index}].outcome_class must be one of: ${Array.from(VALID_OUTCOME_CLASSES).join(', ')}`);
  }
  const causeTag = assertString(entry.cause_tag, `entries[${index}].cause_tag`);
  if (!VALID_CAUSE_TAGS.has(causeTag)) {
    throw new Error(`entries[${index}].cause_tag must be one of: ${Array.from(VALID_CAUSE_TAGS).join(', ')}`);
  }
  const humanVerdict = assertString(entry.human_verdict, `entries[${index}].human_verdict`);
  if (!VALID_HUMAN_VERDICTS.has(humanVerdict)) {
    throw new Error(`entries[${index}].human_verdict must be one of: ${Array.from(VALID_HUMAN_VERDICTS).join(', ')}`);
  }

  const normalized = {
    entry_id: assertString(entry.entry_id, `entries[${index}].entry_id`),
    report_id: assertString(entry.report_id, `entries[${index}].report_id`),
    report_kind: assertString(entry.report_kind, `entries[${index}].report_kind`),
    reviewed_at: assertDateTime(entry.reviewed_at, `entries[${index}].reviewed_at`),
    reviewer: assertString(entry.reviewer, `entries[${index}].reviewer`),
    claim_family: assertString(entry.claim_family, `entries[${index}].claim_family`),
    claim_id: typeof entry.claim_id === 'string' ? entry.claim_id.trim() : '',
    page_scope: normalizeStringArray(entry.page_scope || [], `entries[${index}].page_scope`).map(toPosix),
    system_verdict: assertString(entry.system_verdict, `entries[${index}].system_verdict`),
    human_verdict: humanVerdict,
    outcome_class: outcomeClass,
    cause_tag: causeTag,
    action: assertString(entry.action, `entries[${index}].action`)
  };

  if (entry.family_status_after_review != null) {
    const familyStatus = assertString(
      entry.family_status_after_review,
      `entries[${index}].family_status_after_review`
    );
    if (!VALID_FAMILY_STATUSES.has(familyStatus)) {
      throw new Error(
        `entries[${index}].family_status_after_review must be one of: ${Array.from(VALID_FAMILY_STATUSES).join(', ')}`
      );
    }
    normalized.family_status_after_review = familyStatus;
  }

  if (entry.trust_tier_after_review != null) {
    const trustTier = assertString(entry.trust_tier_after_review, `entries[${index}].trust_tier_after_review`);
    if (!VALID_TRUST_TIERS.has(trustTier)) {
      throw new Error(
        `entries[${index}].trust_tier_after_review must be one of: ${Array.from(VALID_TRUST_TIERS).join(', ')}`
      );
    }
    normalized.trust_tier_after_review = trustTier;
  }

  if (entry.notes != null) {
    normalized.notes = assertString(entry.notes, `entries[${index}].notes`);
  }
  if (entry.canonical_owner != null) {
    normalized.canonical_owner = toPosix(assertString(entry.canonical_owner, `entries[${index}].canonical_owner`));
  }
  if (entry.primary_evidence_type != null) {
    normalized.primary_evidence_type = assertString(
      entry.primary_evidence_type,
      `entries[${index}].primary_evidence_type`
    );
  }
  if (entry.report_trust_summary != null) {
    if (!entry.report_trust_summary || typeof entry.report_trust_summary !== 'object' || Array.isArray(entry.report_trust_summary)) {
      throw new Error(`entries[${index}].report_trust_summary must be an object`);
    }
    normalized.report_trust_summary = {
      unresolved_claims: Number(entry.report_trust_summary.unresolved_claims || 0),
      contradiction_groups: Number(entry.report_trust_summary.contradiction_groups || 0),
      evidence_sources: Number(entry.report_trust_summary.evidence_sources || 0),
      explicit_page_targets: Number(entry.report_trust_summary.explicit_page_targets || 0),
      inferred_page_targets: Number(entry.report_trust_summary.inferred_page_targets || 0)
    };
  }

  return normalized;
}

function loadLedger(ledgerPath) {
  const absPath = path.resolve(repoRoot(), ledgerPath);
  const raw = readJson(absPath, {
    version: 1,
    updated_at: '',
    entries: []
  });
  if (raw.version !== 1) {
    throw new Error('ledger.version must equal 1');
  }
  if (!Array.isArray(raw.entries)) {
    throw new Error('ledger.entries must be an array');
  }
  const seen = new Set();
  const entries = raw.entries.map((entry, index) => {
    const normalized = normalizeEntry(entry, index);
    if (seen.has(normalized.entry_id)) {
      throw new Error(`Duplicate entry_id in ledger: ${normalized.entry_id}`);
    }
    seen.add(normalized.entry_id);
    return normalized;
  });
  return {
    absPath,
    data: {
      version: 1,
      updated_at: raw.updated_at ? assertDateTime(raw.updated_at, 'ledger.updated_at') : '',
      entries
    }
  };
}

function normalizeReportArtifact(raw) {
  if (raw && Array.isArray(raw.matched_claim_families) && raw.summary) {
    return {
      report_id: raw.report_id || '',
      report_kind: raw.report_kind || 'pr-advisory',
      generated_at: assertDateTime(raw.generated_at, 'report.generated_at'),
      page_scope: normalizeStringArray(raw.target_files || [], 'report.target_files').map(toPosix),
      changed_files: normalizeStringArray(raw.changed_files || [], 'report.changed_files').map(toPosix),
      trust_summary: raw.trust_summary || {
        unresolved_claims: 0,
        contradiction_groups: 0,
        evidence_sources: 0,
        explicit_page_targets: 0,
        inferred_page_targets: 0
      },
      claims: raw.matched_claim_families.map((entry) => ({
        claim_id: entry.claim_id,
        claim_family: entry.claim_family,
        system_verdict: entry.status,
        canonical_owner: entry.canonical_owner || '',
        primary_evidence_type: ''
      }))
    };
  }

  if (raw && Array.isArray(raw.verified_claims) && raw.scope) {
    const claims = [
      ...(raw.verified_claims || []),
      ...(raw.conflicted_claims || []),
      ...(raw.time_sensitive_claims || []),
      ...(raw.unverified_or_historical_claims || [])
    ];
    return {
      report_id: raw.report_id || '',
      report_kind: raw.report_kind || 'page-research',
      generated_at: assertDateTime(raw.generated_at, 'report.generated_at'),
      page_scope: normalizeStringArray(raw.scope.target_files || [], 'report.scope.target_files').map(toPosix),
      changed_files: [],
      trust_summary: raw.trust_summary || {
        unresolved_claims: 0,
        contradiction_groups: 0,
        evidence_sources: 0,
        explicit_page_targets: 0,
        inferred_page_targets: 0
      },
      claims: claims.map((entry) => ({
        claim_id: entry.claim_id,
        claim_family: entry.claim_family,
        system_verdict: entry.status,
        canonical_owner: entry.canonical_owner || '',
        primary_evidence_type: entry.primary_evidence?.type || ''
      }))
    };
  }

  throw new Error('Unsupported report artifact shape');
}

function maybeClaim(report, claimId) {
  return report.claims.find((entry) => entry.claim_id === claimId) || null;
}

function ratio(numerator, denominator) {
  if (!denominator) return 0;
  return Number((numerator / denominator).toFixed(4));
}

function latestBy(entries, key) {
  return entries
    .filter((entry) => entry[key])
    .sort((a, b) => new Date(b.reviewed_at).getTime() - new Date(a.reviewed_at).getTime())[0] || null;
}

function computeFamilyStatus(summary) {
  const latest = summary.latest_explicit_status;
  if (latest) return latest;
  if (summary.outcomes.needs_split > 0) return 'needs-split';
  if (summary.outcomes.needs_narrowing > 0 || summary.causes.path_inference_overreach > 0 || summary.causes.bad_family_grouping > 0) {
    return 'needs-narrowing';
  }
  if (summary.outcomes.false_negative > 0 || summary.outcomes.needs_more_sources > 0 || summary.causes.missing_coverage > 0 || summary.causes.weak_evidence_ranking > 0) {
    return 'needs-more-sources';
  }
  if (summary.total_reviews >= 2 && summary.outcomes.false_positive === 0 && summary.outcomes.false_negative === 0) {
    return 'stable';
  }
  return 'advisory-only';
}

function computeTrustTier(summary) {
  const latest = summary.latest_explicit_tier;
  if (latest) return latest;
  if (!GATEWAY_STATUS_FAMILIES.has(summary.claim_family)) return 'not-eligible';
  if (summary.total_reviews < 2) return 'experimental';
  if (
    summary.outcomes.false_positive > 0 ||
    summary.outcomes.false_negative > 0 ||
    summary.outcomes.needs_split > 0 ||
    summary.outcomes.needs_narrowing > 0 ||
    summary.outcomes.needs_more_sources > 0 ||
    summary.causes.weak_evidence_ranking > 0 ||
    summary.causes.bad_family_grouping > 0 ||
    summary.causes.path_inference_overreach > 0 ||
    summary.causes.stale_canonical_owner > 0 ||
    summary.causes.missing_coverage > 0 ||
    summary.inference_dependency_ratio > 0.5 ||
    summary.primary_evidence_types.includes('repo-discord-signal')
  ) {
    return 'advisory';
  }
  return 'advisory-high-confidence';
}

function buildFamilySummaries(entries) {
  const grouped = new Map();
  entries.forEach((entry) => {
    const bucket = grouped.get(entry.claim_family) || [];
    bucket.push(entry);
    grouped.set(entry.claim_family, bucket);
  });

  return [...grouped.entries()]
    .map(([claimFamily, familyEntries]) => {
      const outcomes = Object.fromEntries([...VALID_OUTCOME_CLASSES].map((value) => [value, 0]));
      const causes = Object.fromEntries([...VALID_CAUSE_TAGS].map((value) => [value, 0]));
      const primaryTypes = new Set();
      let inferredTargets = 0;
      let explicitTargets = 0;

      familyEntries.forEach((entry) => {
        outcomes[entry.outcome_class] += 1;
        causes[entry.cause_tag] += 1;
        if (entry.primary_evidence_type) primaryTypes.add(entry.primary_evidence_type);
        inferredTargets += Number(entry.report_trust_summary?.inferred_page_targets || 0);
        explicitTargets += Number(entry.report_trust_summary?.explicit_page_targets || 0);
      });

      const latestStatus = latestBy(familyEntries, 'family_status_after_review');
      const latestTier = latestBy(familyEntries, 'trust_tier_after_review');
      const summary = {
        claim_family: claimFamily,
        total_reviews: familyEntries.length,
        outcomes,
        causes,
        false_positive_rate: ratio(outcomes.false_positive, familyEntries.length),
        false_negative_rate: ratio(outcomes.false_negative, familyEntries.length),
        primary_evidence_types: [...primaryTypes].sort(),
        inference_dependency_ratio: ratio(inferredTargets, inferredTargets + explicitTargets),
        latest_reviewed_at: familyEntries
          .map((entry) => entry.reviewed_at)
          .sort()
          .slice(-1)[0],
        latest_explicit_status: latestStatus?.family_status_after_review || '',
        latest_explicit_tier: latestTier?.trust_tier_after_review || ''
      };
      return {
        ...summary,
        family_status: computeFamilyStatus(summary),
        trust_tier: computeTrustTier(summary)
      };
    })
    .sort((a, b) => a.claim_family.localeCompare(b.claim_family));
}

function buildSliceSummary(familySummaries) {
  const families = familySummaries.filter((entry) => GATEWAY_STATUS_FAMILIES.has(entry.claim_family));
  const totalReviews = families.reduce((sum, entry) => sum + entry.total_reviews, 0);
  const falsePositives = families.reduce((sum, entry) => sum + entry.outcomes.false_positive, 0);
  const falseNegatives = families.reduce((sum, entry) => sum + entry.outcomes.false_negative, 0);
  const advisoryHighConfidence = families.filter((entry) => entry.trust_tier === 'advisory-high-confidence').length;
  const experimental = families.filter((entry) => entry.trust_tier === 'experimental').length;

  let recommendation = 'advisory-only';
  if (
    families.length > 0 &&
    advisoryHighConfidence === families.length &&
    totalReviews >= 4 &&
    falsePositives === 0 &&
    falseNegatives === 0
  ) {
    recommendation = 'candidate-for-stronger-pr-signal';
  } else if (
    families.length > 0 &&
    advisoryHighConfidence === families.length &&
    falsePositives === 0 &&
    falseNegatives === 0 &&
    experimental === 0
  ) {
    recommendation = 'advisory-high-confidence';
  }

  return {
    slice: 'gateway-status',
    families: families.map((entry) => ({
      claim_family: entry.claim_family,
      family_status: entry.family_status,
      trust_tier: entry.trust_tier,
      total_reviews: entry.total_reviews
    })),
    total_reviews: totalReviews,
    false_positive_rate: ratio(falsePositives, totalReviews),
    false_negative_rate: ratio(falseNegatives, totalReviews),
    recommendation
  };
}

function buildSummary(ledger) {
  const familySummaries = buildFamilySummaries(ledger.data.entries);
  return {
    generated_at: new Date().toISOString(),
    ledger_path: toPosix(path.relative(repoRoot(), ledger.absPath)),
    total_entries: ledger.data.entries.length,
    family_summaries: familySummaries,
    slice_summary: buildSliceSummary(familySummaries)
  };
}

function buildMarkdown(summary) {
  const lines = [];
  lines.push('# Docs Research Adjudication Summary');
  lines.push('');
  lines.push(`- Generated: ${summary.generated_at}`);
  lines.push(`- Ledger: \`${summary.ledger_path}\``);
  lines.push(`- Total adjudications: ${summary.total_entries}`);
  lines.push('');
  lines.push('## Gateway Status Slice');
  lines.push('');
  lines.push(`- Recommendation: ${summary.slice_summary.recommendation}`);
  lines.push(`- Total reviews: ${summary.slice_summary.total_reviews}`);
  lines.push(`- False-positive rate: ${summary.slice_summary.false_positive_rate}`);
  lines.push(`- False-negative rate: ${summary.slice_summary.false_negative_rate}`);
  if (summary.slice_summary.families.length === 0) {
    lines.push('- Families: none');
  } else {
    summary.slice_summary.families.forEach((entry) => {
      lines.push(
        `- \`${entry.claim_family}\` — ${entry.family_status}, ${entry.trust_tier}, ${entry.total_reviews} review(s)`
      );
    });
  }
  lines.push('');
  lines.push('## Family Summaries');
  lines.push('');
  if (summary.family_summaries.length === 0) {
    lines.push('- None');
  } else {
    summary.family_summaries.forEach((entry) => {
      lines.push(
        `- \`${entry.claim_family}\` — status: ${entry.family_status}; trust: ${entry.trust_tier}; reviews: ${entry.total_reviews}; fp rate: ${entry.false_positive_rate}; fn rate: ${entry.false_negative_rate}`
      );
    });
  }
  lines.push('');
  return `${lines.join('\n').trimEnd()}\n`;
}

function recordEntry(args) {
  const ledger = loadLedger(args.ledger);
  const report = normalizeReportArtifact(readJson(path.resolve(repoRoot(), assertString(args.reportJson, 'report_json'))));
  if (!report.report_id) {
    throw new Error('report artifact must include report_id');
  }
  const claim = args.claimId ? maybeClaim(report, args.claimId) : null;
  if (args.claimId && !claim && !args.claimFamily) {
    throw new Error(`claim_id ${args.claimId} was not found in the report; provide --claim-family for a missing-coverage adjudication`);
  }

  const claimFamily = claim?.claim_family || assertString(args.claimFamily, 'claim_family');
  const pageScope = report.page_scope.length
    ? report.page_scope
    : normalizeStringArray(args.pageScope || [], 'page_scope').map(toPosix);
  if (pageScope.length === 0) {
    throw new Error('page scope is required');
  }

  const key = `${report.report_id}:${args.claimId || claimFamily}`;
  const entry = {
    entry_id: key,
    report_id: report.report_id,
    report_kind: report.report_kind,
    reviewed_at: new Date().toISOString(),
    reviewer: assertString(args.reviewer, 'reviewer'),
    claim_family: claimFamily,
    claim_id: claim?.claim_id || args.claimId || '',
    page_scope: pageScope,
    system_verdict: claim?.system_verdict || 'not-detected',
    human_verdict: assertString(args.humanVerdict, 'human_verdict'),
    outcome_class: assertString(args.outcomeClass, 'outcome_class'),
    cause_tag: assertString(args.causeTag, 'cause_tag'),
    action: assertString(args.action, 'action'),
    report_trust_summary: report.trust_summary
  };

  if (claim?.canonical_owner) entry.canonical_owner = claim.canonical_owner;
  if (claim?.primary_evidence_type) entry.primary_evidence_type = claim.primary_evidence_type;
  if (args.familyStatus) entry.family_status_after_review = assertString(args.familyStatus, 'family_status');
  if (args.trustTier) entry.trust_tier_after_review = assertString(args.trustTier, 'trust_tier');
  if (args.notes) entry.notes = assertString(args.notes, 'notes');

  normalizeEntry(entry, 0);

  const existingIndex = ledger.data.entries.findIndex((candidate) => candidate.entry_id === key);
  if (existingIndex >= 0) {
    ledger.data.entries[existingIndex] = entry;
  } else {
    ledger.data.entries.push(entry);
  }
  ledger.data.updated_at = new Date().toISOString();
  writeJson(ledger.absPath, ledger.data);

  return { ledger, entry };
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    if (args.validate) {
      const ledger = loadLedger(args.ledger);
      if (!args.quiet) {
        console.log(`✅ docs-research-adjudication: valid with ${ledger.data.entries.length} adjudication(s)`);
      }
      process.exit(0);
    }

    if (args.record) {
      const result = recordEntry(args);
      if (!args.quiet) {
        console.log(
          `✅ docs-research-adjudication: recorded ${result.entry.claim_family} (${result.entry.outcome_class}) in ${toPosix(path.relative(repoRoot(), result.ledger.absPath))}`
        );
      }
      process.exit(0);
    }

    if (args.summary) {
      const ledger = loadLedger(args.ledger);
      const summary = buildSummary(ledger);
      if (args.reportOutJson) {
        writeJson(path.resolve(repoRoot(), args.reportOutJson), summary);
      }
      if (args.reportMd) {
        fs.mkdirSync(path.dirname(path.resolve(repoRoot(), args.reportMd)), { recursive: true });
        fs.writeFileSync(path.resolve(repoRoot(), args.reportMd), buildMarkdown(summary), 'utf8');
      }
      if (!args.quiet) {
        console.log(
          `✅ docs-research-adjudication: ${summary.total_entries} adjudication(s), gateway-status recommendation ${summary.slice_summary.recommendation}`
        );
      }
      process.exit(0);
    }
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  GATEWAY_STATUS_FAMILIES,
  buildFamilySummaries,
  buildSummary,
  buildSliceSummary,
  computeFamilyStatus,
  computeTrustTier,
  loadLedger,
  normalizeReportArtifact,
  parseArgs,
  recordEntry
};
