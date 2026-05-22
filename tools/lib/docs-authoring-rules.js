'use strict';
/**
 * @script            docs-authoring-rules
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair.
 * @pipeline          indirect
 * @usage             const { analyzeGuideLayoutWarnings, repairCodeBlockMetadata } = require('../lib/docs-authoring-rules');
 */
/**
 * @script            docs-authoring-rules
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair.
 * @pipeline          indirect
 * @usage             const { analyzeGuideLayoutWarnings, repairCodeBlockMetadata } = require('../lib/docs-authoring-rules');
 */
/**
 * @script            docs-authoring-rules
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair.
 * @pipeline          indirect
 * @usage             const { analyzeGuideLayoutWarnings, repairCodeBlockMetadata } = require('../lib/docs-authoring-rules');
 */

const path = require('path');

const CODE_BLOCK_COMPONENTS = ['CodeComponent', 'CustomCodeBlock', 'ComplexCodeBlock'];
const BOOLEAN_FENCE_FLAGS = new Set(['wrap', 'lines', 'copy', 'lineNumbers', 'line-numbers', 'expandable']);

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function stripFrontmatter(content) {
  return String(content || '').replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n)?/, '');
}

function getBodyLineOffset(content) {
  const raw = String(content || '');
  const match = raw.match(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n)?/);
  if (!match) {
    return 0;
  }
  return match[0].split('\n').length - 1;
}

function isGuidePage(filePath, content = '') {
  const normalizedPath = toPosix(filePath).replace(/^\/+/, '');
  if (normalizedPath.includes('/guides/')) {
    return true;
  }
  return /^---[\s\S]*?\npageType:\s*['"]?guide['"]?\s*$/m.test(String(content || ''));
}

function getLineNumberAtIndex(content, index) {
  return String(content || '').slice(0, Math.max(0, index)).split('\n').length;
}

function maskLine(line) {
  return String(line || '').replace(/[^\n]/g, ' ');
}

function hasClosingToken(line, token) {
  return new RegExp(`^\\s*${escapeRegExp(token)}\\s*$`).test(String(line || '').trim());
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildMaskedContent(content) {
  const lines = String(content || '').split('\n');
  const maskedLines = [];
  let inJsxComment = false;
  let inFence = false;
  let fenceToken = '';

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (inFence) {
      maskedLines.push(maskLine(line));
      if (hasClosingToken(trimmed, fenceToken)) {
        inFence = false;
        fenceToken = '';
      }
      return;
    }

    if (inJsxComment) {
      maskedLines.push(maskLine(line));
      if (trimmed.includes('*/}')) {
        inJsxComment = false;
      }
      return;
    }

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      inFence = true;
      fenceToken = fenceMatch[1];
      maskedLines.push(maskLine(line));
      return;
    }

    if (trimmed.startsWith('{/*')) {
      maskedLines.push(maskLine(line));
      if (!trimmed.includes('*/}')) {
        inJsxComment = true;
      }
      return;
    }

    maskedLines.push(line);
  });

  return maskedLines.join('\n');
}

function hasFenceIcon(meta) {
  return /\bicon\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]+\})/.test(meta);
}

function hasFenceLabel(meta) {
  let rest = String(meta || '').trim();
  if (!rest) return false;

  const languageMatch = rest.match(/^[A-Za-z0-9_+#.-]+/);
  if (languageMatch) {
    rest = rest.slice(languageMatch[0].length).trim();
  }

  if (/\b(?:title|filename)\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]+\})/.test(rest)) {
    return true;
  }

  rest = rest.replace(/\b[A-Za-z][\w-]*\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]+\}|[^\s]+)/g, ' ');
  rest = rest
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !BOOLEAN_FENCE_FLAGS.has(token))
    .join(' ');

  return /[A-Za-z0-9]/.test(rest);
}

function insertTerminalIconIntoFence(line) {
  const match = String(line || '').match(/^(\s*)(`{3,}|~{3,})([^\s`]*)((?:[\s\S])*)$/);
  if (!match) return line;

  const [, leading, fence, language = '', rest = ''] = match;
  const iconChunk = ' icon="terminal"';
  if (language) {
    return `${leading}${fence}${language}${iconChunk}${rest}`;
  }
  return `${leading}${fence}${iconChunk}${rest}`;
}

function hasComponentProp(tag, propName) {
  return new RegExp(`\\b${escapeRegExp(propName)}\\s*=\\s*(?:"[^"]*"|'[^']*'|\\{[^}]+\\})`).test(tag);
}

function processCodeBlockMetadata(content, filePath = '', options = {}) {
  const repairIcons = options.repairIcons === true;
  const original = String(content || '');
  const lines = original.split('\n');
  const nextLines = [...lines];
  const findings = [];
  let inJsxComment = false;
  let inFence = false;
  let fenceToken = '';

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const lineNumber = index + 1;

    if (inFence) {
      if (hasClosingToken(trimmed, fenceToken)) {
        inFence = false;
        fenceToken = '';
      }
      return;
    }

    if (inJsxComment) {
      if (trimmed.includes('*/}')) {
        inJsxComment = false;
      }
      return;
    }

    if (trimmed.startsWith('{/*')) {
      if (!trimmed.includes('*/}')) {
        inJsxComment = true;
      }
      return;
    }

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})(.*)$/);
    if (!fenceMatch) {
      return;
    }

    inFence = true;
    fenceToken = fenceMatch[1];
    const meta = String(fenceMatch[2] || '').trim();
    const normalizedMeta = meta.toLowerCase();

    if (!normalizedMeta.startsWith('mermaid')) {
      if (!hasFenceIcon(meta)) {
        findings.push({
          file: filePath,
          line: lineNumber,
          rule: 'code-block-icon',
          message: 'Code blocks should declare an icon. Use `icon="terminal"` by default.'
        });
        if (repairIcons) {
          nextLines[index] = insertTerminalIconIntoFence(line);
        }
      }

      if (!hasFenceLabel(meta)) {
        findings.push({
          file: filePath,
          line: lineNumber,
          rule: 'code-block-filename',
          message: 'Code blocks should preferably include a filename or title when it helps the reader.'
        });
      }
    }
  });

  let nextContent = nextLines.join('\n');
  const masked = buildMaskedContent(nextContent);
  const componentRegex = new RegExp(`<(${CODE_BLOCK_COMPONENTS.join('|')})\\b[\\s\\S]*?/>`, 'g');
  const replacements = [];
  let match;

  while ((match = componentRegex.exec(masked)) !== null) {
    const tag = nextContent.slice(match.index, match.index + match[0].length);
    const lineNumber = getLineNumberAtIndex(nextContent, match.index);

    if (/\{\s*\.\.\./.test(tag)) {
      continue;
    }

    const missingIcon = !hasComponentProp(tag, 'icon');
    const missingFilename = !hasComponentProp(tag, 'filename');

    if (missingIcon) {
      findings.push({
        file: filePath,
        line: lineNumber,
        rule: 'code-block-icon',
        message: 'Code block components should declare an icon. Use `icon="terminal"` by default.'
      });

      if (repairIcons) {
        replacements.push({
          start: match.index,
          end: match.index + match[0].length,
          value: tag.replace(/\s*\/>\s*$/, ' icon="terminal" />')
        });
      }
    }

    if (missingFilename) {
      findings.push({
        file: filePath,
        line: lineNumber,
        rule: 'code-block-filename',
        message: 'Code block components should preferably include a filename when it helps the reader.'
      });
    }
  }

  if (repairIcons && replacements.length > 0) {
    replacements
      .sort((left, right) => right.start - left.start)
      .forEach((replacement) => {
        nextContent = `${nextContent.slice(0, replacement.start)}${replacement.value}${nextContent.slice(replacement.end)}`;
      });
  }

  return {
    content: nextContent,
    changed: nextContent !== original,
    findings
  };
}

function analyzeCodeBlockMetadata(content, filePath = '') {
  return processCodeBlockMetadata(content, filePath, { repairIcons: false }).findings;
}

function repairCodeBlockMetadata(content, filePath = '') {
  return processCodeBlockMetadata(content, filePath, { repairIcons: true });
}

function analyzeGuideLayoutWarnings(content, filePath = '') {
  if (!isGuidePage(filePath, content)) {
    return [];
  }

  const raw = String(content || '');
  const body = stripFrontmatter(raw);
  const lines = body.split('\n');
  const findings = [];
  const bodyLineOffset = getBodyLineOffset(raw);
  let inJsxComment = false;
  let inFence = false;
  let fenceToken = '';
  let seenH2 = false;
  let rawStepsWarned = false;
  let pendingBorderedBox = '';
  let accentBoxDepth = 0;
  let rawStepsDepth = 0;
  let styledStepsDepth = 0;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const lineNumber = bodyLineOffset + index + 1;

    if (inFence) {
      if (hasClosingToken(trimmed, fenceToken)) {
        inFence = false;
        fenceToken = '';
      }
      return;
    }

    if (inJsxComment) {
      if (trimmed.includes('*/}')) {
        inJsxComment = false;
      }
      return;
    }

    if (trimmed.startsWith('{/*')) {
      if (!trimmed.includes('*/}')) {
        inJsxComment = true;
      }
      return;
    }

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      inFence = true;
      fenceToken = fenceMatch[1];
      return;
    }

    if (/^##\s+/.test(trimmed)) {
      seenH2 = true;
    }

    if (!rawStepsWarned && /<Step(s)?\b/.test(trimmed) && !/<StyledStep(s)?\b/.test(trimmed)) {
      findings.push({
        file: filePath,
        line: lineNumber,
        rule: 'guide-steps-component',
        message: 'Guide pages should prefer `StyledSteps` / `StyledStep` over raw `Steps` / `Step`.'
      });
      rawStepsWarned = true;
    }

    if (trimmed.includes('<BorderedBox') && !trimmed.includes('/>')) {
      pendingBorderedBox = trimmed;
      if (trimmed.includes('>')) {
        if (/variant\s*=\s*["']accent["']/.test(pendingBorderedBox)) {
          accentBoxDepth += 1;
        }
        pendingBorderedBox = '';
      }
    } else if (pendingBorderedBox) {
      pendingBorderedBox = `${pendingBorderedBox} ${trimmed}`;
      if (trimmed.includes('>')) {
        if (/variant\s*=\s*["']accent["']/.test(pendingBorderedBox)) {
          accentBoxDepth += 1;
        }
        pendingBorderedBox = '';
      }
    }

    if (trimmed.includes('</BorderedBox>') && accentBoxDepth > 0) {
      accentBoxDepth -= 1;
    }

    if (/<StyledSteps\b/.test(trimmed) && !trimmed.includes('/>')) {
      styledStepsDepth += 1;
    }
    if (trimmed.includes('</StyledSteps>') && styledStepsDepth > 0) {
      styledStepsDepth -= 1;
    }

    if (/<Steps\b/.test(trimmed) && !/<StyledSteps\b/.test(trimmed) && !trimmed.includes('/>')) {
      rawStepsDepth += 1;
    }
    if (trimmed.includes('</Steps>') && rawStepsDepth > 0) {
      rawStepsDepth -= 1;
    }

    if (/<Tabs\b/.test(trimmed)) {
      const insideSteps = rawStepsDepth > 0 || styledStepsDepth > 0;
      if (!insideSteps && accentBoxDepth === 0 && seenH2) {
        findings.push({
          file: filePath,
          line: lineNumber,
          rule: 'guide-tabs-accent-box',
          message: 'Guide-page Tabs outside steps should usually sit inside `BorderedBox variant="accent"` unless the page uses a full-page tabs layout.'
        });
      }
    }
  });

  return findings;
}

module.exports = {
  isGuidePage,
  analyzeGuideLayoutWarnings,
  analyzeCodeBlockMetadata,
  repairCodeBlockMetadata
};
