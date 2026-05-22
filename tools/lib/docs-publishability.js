/**
 * @script            docs-publishability
 * @category          utility
 * @purpose           governance:repo-health
 * @scope             tools/lib, tests, tools/scripts
 * @domain            docs
 * @needs             E-C6, F-C1
 * @purpose-statement Shared path publishability rules for v2 docs content and tooling.
 * @pipeline          indirect
 * @usage             const { isExcludedV2ExperimentalPath } = require('../lib/docs-publishability');
 */

const path = require('path');

const NON_PUBLISHED_V2_SEGMENTS = new Set([
  '_archive',
  '_contextdata',
  '_contextdata_',
  '_context_data_',
  '_move_me',
  '_plans-and-research',
  '_tests-to-delete',
  '_workspace',
  'to-add',
  'x-archived',
  'x-deprecated',
  'x-experimental',
  'x-notes',
  'x-pages',
  'x-resources',
  'x-unstaged'
]);
const NON_PUBLISHED_V2_BASENAMES = new Set(['notes_v2.md', 'review.md', 'todo.mdx', 'todo.txt']);

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function getPathSegments(filePath) {
  return toPosix(filePath)
    .replace(/^\/+/, '')
    .split('/')
    .map((segment) => segment.trim().toLowerCase())
    .filter(Boolean);
}

function hasNonPublishedV2Segment(filePath) {
  return getPathSegments(filePath).some((segment) => NON_PUBLISHED_V2_SEGMENTS.has(segment));
}

function hasNonPublishedV2Basename(filePath) {
  const normalized = toPosix(filePath).replace(/^\/+/, '');
  const base = path.posix.basename(normalized).toLowerCase();
  return NON_PUBLISHED_V2_BASENAMES.has(base);
}

function isExcludedV2ExperimentalPath(filePath) {
  const normalized = toPosix(filePath).replace(/^\/+/, '');
  if (!normalized.startsWith('v2/')) return false;
  return hasNonPublishedV2Segment(normalized) || hasNonPublishedV2Basename(normalized);
}

function isPublishedDocsPath(filePath) {
  return !isExcludedV2ExperimentalPath(filePath);
}

module.exports = {
  NON_PUBLISHED_V2_BASENAMES,
  NON_PUBLISHED_V2_SEGMENTS,
  getPathSegments,
  hasNonPublishedV2Basename,
  hasNonPublishedV2Segment,
  isExcludedV2ExperimentalPath,
  isPublishedDocsPath
};
