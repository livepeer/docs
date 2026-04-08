#!/usr/bin/env node
/**
 * @script      page-integrity-rolling-issue
 * @type        
 * @concern     
 * @niche       
 * @purpose     qa:repo-health
 * @description Provide a stable rolling-issue contract for page-integrity dispatch runs so unresolved link and import failures stay visible in GitHub automation.
 * @mode        read-only
 * @pipeline    manual -- library module
 * @scope       operations/scripts, .github/workflows, operations/tests/unit
 * @usage       node operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js [flags]
 * @policy      E-R12, E-R14
 */

const ROLLING_ISSUE_MARKER = '<!-- page-integrity-dispatch -->';
const ROLLING_ISSUE_TITLE = '[tooling]: Page integrity audit failures';
const ROLLING_ISSUE_LABELS = ['docs-v2', 'help wanted', 'status: needs-routing', 'type: bug', 'area: ci-cd'];

function compareFindings(a, b) {
  const severityA = String(a?.severity || '');
  const severityB = String(b?.severity || '');
  if (severityA !== severityB) return severityA.localeCompare(severityB);

  const fileA = String(a?.file || '');
  const fileB = String(b?.file || '');
  if (fileA !== fileB) return fileA.localeCompare(fileB);

  const lineA = Number(a?.line || 0);
  const lineB = Number(b?.line || 0);
  if (lineA !== lineB) return lineA - lineB;

  const typeA = String(a?.findingType || a?.type || '');
  const typeB = String(b?.findingType || b?.type || '');
  if (typeA !== typeB) return typeA.localeCompare(typeB);

  const rawA = String(a?.rawValue || a?.reference || '');
  const rawB = String(b?.rawValue || b?.reference || '');
  return rawA.localeCompare(rawB);
}

function formatFindingLine(finding) {
  const severity = finding?.severity ? ` [${finding.severity}]` : '';
  const type = finding?.findingType || finding?.type || 'finding';
  const rawValue = finding?.rawValue ? ` (${finding.rawValue})` : '';
  const fix = finding?.suggestedFix ? ` -> ${finding.suggestedFix}` : '';
  return `- ${type}: ${finding.file}:${finding.line}${severity}${rawValue}${fix}`;
}

function buildTopFindings(findings, limit = 30) {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 30;
  const sorted = Array.isArray(findings) ? findings.slice().sort(compareFindings) : [];
  const lines = sorted.slice(0, safeLimit).map(formatFindingLine);
  return lines.length > 0 ? lines.join('\n') : '- none';
}

function findMarkerIssue(items, marker = ROLLING_ISSUE_MARKER) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const matches = items.filter((item) => String(item?.body || '').includes(marker));
  if (matches.length === 0) return null;

  matches.sort((a, b) => {
    const aOpen = a?.state === 'open' ? 1 : 0;
    const bOpen = b?.state === 'open' ? 1 : 0;
    if (aOpen !== bOpen) return bOpen - aOpen;
    return Number(b?.number || 0) - Number(a?.number || 0);
  });

  return matches[0] || null;
}

function buildIssueBody({
  runUrl,
  topFindings,
  unresolvedCount,
  scannedFiles,
  linksSummary,
  importsSummary,
  marker = ROLLING_ISSUE_MARKER
}) {
  const linkText = linksSummary
    ? `- Link findings: ${linksSummary.unresolvedCount || 0}\n- Link files analyzed: ${linksSummary.fileCount || 0}`
    : '- Link findings: 0';
  const importText = importsSummary
    ? `- Import findings: ${importsSummary.errorCount || 0}\n- Import files analyzed: ${importsSummary.fileCount || 0}`
    : '- Import findings: 0';

  return [
    marker,
    '',
    '### Area',
    'area: ci-cd',
    '',
    '### Failing command or workflow',
    '.github/workflows/page-integrity-health.yml',
    '',
    '### Script or workflow path',
    'operations/scripts/dispatch/content/health/page-integrity-dispatch.js and .github/workflows/page-integrity-health.yml',
    '',
    '### Full error output',
    '```text',
    topFindings || '- none',
    '```',
    '',
    '### Reproduction conditions',
    [
      '- Triggered by the page-integrity dispatch workflow.',
      `- Workflow run: ${runUrl}`
    ].join('\n'),
    '',
    '### Expected behavior',
    'Page-integrity dispatch should finish with no unresolved link or import findings after safe repairs and rerun.',
    '',
    '### Requested repository outcome',
    'Review unresolved findings, apply required content or tooling fixes, and rerun the page-integrity workflow until the audit is clean.',
    '',
    '### Classification',
    'classification: high',
    '',
    '### Priority',
    'priority: high',
    '',
    '### Additional context',
    [
      `- Unresolved findings: ${unresolvedCount}`,
      `- Files analyzed: ${scannedFiles}`,
      linkText,
      importText
    ].join('\n')
  ].join('\n');
}

function buildResolutionComment(runUrl) {
  return [
    'Page-integrity dispatch is passing again.',
    '',
    `Resolved in run: ${runUrl}`
  ].join('\n');
}

function getIssueAction({ existingIssue, unresolvedCount }) {
  const failures = Number(unresolvedCount || 0);
  const hasExisting = Boolean(existingIssue);
  const existingOpen = hasExisting && existingIssue.state === 'open';

  if (failures === 0) {
    return existingOpen ? 'close' : 'noop';
  }

  return hasExisting ? 'update' : 'create';
}

module.exports = {
  ROLLING_ISSUE_MARKER,
  ROLLING_ISSUE_TITLE,
  ROLLING_ISSUE_LABELS,
  buildTopFindings,
  findMarkerIssue,
  buildIssueBody,
  buildResolutionComment,
  getIssueAction
};
