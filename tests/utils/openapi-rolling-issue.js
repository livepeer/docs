#!/usr/bin/env node
/**
 * @script openapi-rolling-issue
 * @summary Shared helpers for OpenAPI rolling issue formatting, dedupe, and action selection.
 * @owner docs
 * @scope tests/utils, tests/unit, .github/workflows/openapi-reference-validation.yml
 *
 * @usage
 *   const helpers = require('./tests/utils/openapi-rolling-issue');
 *
 * @inputs
 *   - findings[] objects from openapi-reference-audit JSON report.
 *   - issue search result items from GitHub API.
 *
 * @outputs
 *   - Deterministic top-findings text.
 *   - Issue body text with required headings.
 *   - Action decision: create|update|close|noop.
 *
 * @exit-codes
 *   0 = helper module loaded and used by callers.
 *
 * @examples
 *   const top = helpers.buildTopFindings(report.findings, 30);
 *
 * @notes
 *   This module is intentionally pure and free of GitHub API side effects.
 */

const ROLLING_ISSUE_MARKER = '<!-- openapi-reference-audit -->';
const ROLLING_ISSUE_TITLE = '[tooling]: OpenAPI reference validation failures';
const ROLLING_ISSUE_LABELS = ['docs-v2', 'help wanted', 'status: needs-triage', 'type: bug', 'area: ci-cd'];

function compareFindings(a, b) {
  const fileA = String(a?.file || '');
  const fileB = String(b?.file || '');
  if (fileA !== fileB) return fileA.localeCompare(fileB);

  const lineA = Number(a?.line || 0);
  const lineB = Number(b?.line || 0);
  if (lineA !== lineB) return lineA - lineB;

  const typeA = String(a?.type || '');
  const typeB = String(b?.type || '');
  if (typeA !== typeB) return typeA.localeCompare(typeB);

  const refA = String(a?.reference || '');
  const refB = String(b?.reference || '');
  if (refA !== refB) return refA.localeCompare(refB);

  const specA = String(a?.resolvedSpec || '');
  const specB = String(b?.resolvedSpec || '');
  return specA.localeCompare(specB);
}

function formatFindingLine(finding) {
  const ref = finding?.reference ? ` (${finding.reference})` : '';
  const spec = finding?.resolvedSpec ? ` [${finding.resolvedSpec}]` : '';
  return `- ${finding.type}: ${finding.file}:${finding.line}${ref}${spec}`;
}

function buildTopFindings(findings, limit = 30) {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : 30;
  const sorted = Array.isArray(findings)
    ? findings.slice().sort(compareFindings)
    : [];
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
  totalFailures,
  totalFiles,
  totalReferences,
  marker = ROLLING_ISSUE_MARKER
}) {
  return [
    marker,
    '',
    '### Area',
    'area: ci-cd',
    '',
    '### Failing command or workflow',
    '.github/workflows/openapi-reference-validation.yml',
    '',
    '### Script or workflow path',
    'tests/integration/openapi-reference-audit.js and .github/workflows/openapi-reference-validation.yml',
    '',
    '### Full error output',
    '```text',
    topFindings || '- none',
    '```',
    '',
    '### Reproduction conditions',
    [
      '- Triggered by CI OpenAPI Reference Validation workflow.',
      '- Scope: v2 + locales (`v2/es`, `v2/fr`, `v2/cn`).',
      `- Workflow run: ${runUrl}`
    ].join('\n'),
    '',
    '### Expected behavior',
    'All OpenAPI endpoint references should resolve to the canonical mapped spec and pass strict validation.',
    '',
    '### Action requested from maintainers',
    'Review reported references, apply required content corrections, and re-run the OpenAPI reference audit workflow.',
    '',
    '### Classification',
    'classification: high',
    '',
    '### Priority',
    'priority: high',
    '',
    '### Additional context',
    [
      `- Total failures: ${totalFailures}`,
      `- Files analyzed: ${totalFiles}`,
      `- References analyzed: ${totalReferences}`
    ].join('\n')
  ].join('\n');
}

function buildResolutionComment(runUrl) {
  return [
    'OpenAPI reference validation is passing again.',
    '',
    `Resolved in run: ${runUrl}`
  ].join('\n');
}

function getIssueAction({ existingIssue, totalFailures }) {
  const failures = Number(totalFailures || 0);
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
