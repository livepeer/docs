/**
 * @script            script-header-utils
 * @category          utility
 * @purpose           governance:repo-health
 * @scope             full-repo
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Shared helpers for extracting and reading top-of-file script governance headers without scanning into executable source.
 * @pipeline          indirect -- library module
 * @usage             const { extractLeadingScriptHeader } = require('../lib/script-header-utils');
 */

const HEADER_SCAN_LINES = 200;

function trimBom(value) {
  return String(value || '').replace(/^\uFEFF/, '');
}

function splitScannedLines(content) {
  return trimBom(content)
    .split('\n')
    .slice(0, HEADER_SCAN_LINES);
}

function skipShebang(lines) {
  if (lines.length === 0) return lines;
  return lines[0].startsWith('#!') ? lines.slice(1) : lines;
}

function skipLeadingBlankLines(lines) {
  let index = 0;
  while (index < lines.length && !String(lines[index] || '').trim()) {
    index += 1;
  }
  return lines.slice(index);
}

function skipHeaderPreamble(lines) {
  let remaining = skipLeadingBlankLines(skipShebang(lines));

  while (remaining.length > 0) {
    const first = String(remaining[0] || '').trim();
    if (!/^['"]use strict['"];?$/.test(first)) {
      break;
    }
    remaining = skipLeadingBlankLines(remaining.slice(1));
  }

  return remaining;
}

function extractBlockComment(lines) {
  if (!String(lines[0] || '').trim().startsWith('/**')) {
    return '';
  }

  const collected = [];
  for (const line of lines) {
    collected.push(line);
    if (String(line || '').includes('*/')) {
      break;
    }
  }

  return collected.join('\n');
}

function extractHashHeader(lines) {
  const first = String(lines[0] || '').trim();
  if (!first.startsWith('#')) {
    return '';
  }

  const collected = [];
  for (const line of lines) {
    const trimmed = String(line || '').trim();
    if (!trimmed) {
      collected.push(line);
      continue;
    }
    if (!trimmed.startsWith('#')) {
      break;
    }
    collected.push(line);
  }

  return collected.join('\n').trimEnd();
}

function extractLeadingScriptHeader(content) {
  const scanned = skipHeaderPreamble(splitScannedLines(content));
  if (scanned.length === 0) return '';
  return extractBlockComment(scanned) || extractHashHeader(scanned) || '';
}

function getTagValue(header, tagName) {
  const pattern = new RegExp(`(?:^|\\n)\\s*(?:\\*|#)\\s*\\${tagName}\\s+([^\\n\\r]+)`);
  const match = String(header || '').match(pattern);
  return match ? String(match[1] || '').trim() : '';
}

function getSectionLines(header, tagName) {
  const lines = String(header || '').split('\n');
  const tagToken = tagName.replace('@', '');
  const start = lines.findIndex((line) =>
    new RegExp(`^\\s*(?:\\*|#)\\s*@${tagToken}(?:\\s|$)`).test(String(line || ''))
  );
  if (start === -1) return [];

  const values = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    const raw = String(lines[index] || '');
    const trimmed = raw.trim();
    if (!trimmed) continue;

    const stripped = raw
      .replace(/^\s*(?:\*|#)/, '')
      .trim();

    if (!stripped) continue;
    if (stripped.startsWith('@')) break;
    if (stripped === '/**' || stripped === '*/') continue;
    if (!/^\s*(?:\*|#)\s{2,}\S/.test(raw)) break;
    values.push(stripped);
  }
  return values;
}

function hasFrameworkHeaderTags(header) {
  return (
    String(header || '').includes('@category') ||
    String(header || '').includes('@purpose') ||
    String(header || '').includes('@purpose-statement')
  );
}

module.exports = {
  extractLeadingScriptHeader,
  getSectionLines,
  getTagValue,
  hasFrameworkHeaderTags
};
