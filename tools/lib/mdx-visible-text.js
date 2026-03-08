#!/usr/bin/env node
/**
 * @script            mdx-visible-text
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests/unit, tools/scripts, v2
 * @owner             docs
 * @needs             R-R11, R-R17
 * @purpose-statement Shared MDX visible-text extraction for prose-focused checks across validators and auditors
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/lib/mdx-visible-text.js [flags]
 */

const path = require('path');

const DEFAULT_FRONTMATTER_FIELDS = ['title', 'description'];
const EXCLUDED_V2_PREFIXES = ['v2/es/', 'v2/fr/', 'v2/cn/', 'v2/internal/'];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function getRepoRelativePath(filePath, repoRoot = process.cwd()) {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(repoRoot, filePath);
  return toPosix(path.relative(repoRoot, absolutePath));
}

function isEnglishV2DocPath(filePath, repoRoot = process.cwd()) {
  const relPath = getRepoRelativePath(filePath, repoRoot);
  if (!relPath || relPath.startsWith('..')) return false;
  if (!relPath.startsWith('v2/')) return false;
  if (!/\.mdx$/i.test(relPath)) return false;
  if (EXCLUDED_V2_PREFIXES.some((prefix) => relPath.startsWith(prefix))) return false;
  if (/\/x-[^/]+(?:\/|$)/.test(relPath)) return false;
  return true;
}

function normalizeVisibleMdxLine(lineText) {
  return String(lineText || '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectVisibleMdxLines(content, options = {}) {
  const frontmatterFields = new Set(
    (options.frontmatterFields || DEFAULT_FRONTMATTER_FIELDS).map((field) => String(field || '').trim())
  );
  const lines = String(content || '').split('\n');
  const visibleLines = [];

  let inFrontmatter = lines[0] && lines[0].trim() === '---';
  let inCodeFence = false;

  lines.forEach((lineText, index) => {
    const trimmed = String(lineText || '').trim();
    const lineNumber = index + 1;

    if (inFrontmatter) {
      if (index > 0 && trimmed === '---') {
        inFrontmatter = false;
        return;
      }

      const fieldMatch = lineText.match(/^\s*([A-Za-z0-9_-]+)\s*:/);
      if (!fieldMatch || !frontmatterFields.has(fieldMatch[1])) {
        return;
      }

      const visibleText = normalizeVisibleMdxLine(lineText);
      if (!visibleText) return;

      visibleLines.push({
        line: lineNumber,
        rawText: lineText,
        visibleText,
        region: 'frontmatter'
      });
      return;
    }

    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (inCodeFence || !trimmed) return;
    if (/^(import|export)\b/.test(trimmed)) return;
    if (trimmed.startsWith('//')) return;
    if (/^<!--[\s\S]*-->$/.test(trimmed)) return;
    if (/^\{\/\*[\s\S]*\*\/\}$/.test(trimmed)) return;

    const visibleText = normalizeVisibleMdxLine(lineText);
    if (!visibleText) return;

    visibleLines.push({
      line: lineNumber,
      rawText: lineText,
      visibleText,
      region: 'body'
    });
  });

  return visibleLines;
}

module.exports = {
  collectVisibleMdxLines,
  getRepoRelativePath,
  isEnglishV2DocPath,
  normalizeVisibleMdxLine,
  toPosix
};
