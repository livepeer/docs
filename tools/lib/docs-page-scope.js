'use strict';
/**
 * @script            docs-page-scope
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports.
 * @pipeline          indirect
 * @usage             const { filterAuthoredDocsPageFiles } = require('../lib/docs-page-scope');
 */
/**
 * @script            docs-page-scope
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports.
 * @pipeline          indirect
 * @usage             const { filterAuthoredDocsPageFiles } = require('../lib/docs-page-scope');
 */
/**
 * @script            docs-page-scope
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, tests, tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports.
 * @pipeline          indirect
 * @usage             const { filterAuthoredDocsPageFiles } = require('../lib/docs-page-scope');
 */

const fs = require('fs');
const path = require('path');
const { parseGeneratedHiddenBanner } = require('./generated-file-banners');

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_error) {
    return '';
  }
}

function isGeneratedDocsPageContent(content) {
  return parseGeneratedHiddenBanner(String(content || '')).found;
}

function isGeneratedDocsPageFile(filePath, content = null) {
  const source = content === null ? readFileSafe(filePath) : String(content || '');
  if (!source) {
    return false;
  }
  return isGeneratedDocsPageContent(source);
}

function isAuthoredDocsPageFile(filePath, content = null) {
  return !isGeneratedDocsPageFile(filePath, content);
}

function filterAuthoredDocsPageFiles(filePaths, options = {}) {
  const readContent = typeof options.readContent === 'function' ? options.readContent : readFileSafe;
  const seen = new Set();

  return (Array.isArray(filePaths) ? filePaths : [])
    .filter(Boolean)
    .map((filePath) => path.resolve(String(filePath)))
    .filter((filePath) => {
      const key = toPosix(filePath);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    })
    .filter((filePath) => isAuthoredDocsPageFile(filePath, readContent(filePath)));
}

module.exports = {
  isGeneratedDocsPageContent,
  isGeneratedDocsPageFile,
  isAuthoredDocsPageFile,
  filterAuthoredDocsPageFiles
};
