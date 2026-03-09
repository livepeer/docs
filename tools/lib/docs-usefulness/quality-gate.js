'use strict';
/**
 * @script            quality-gate
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14, R-C6
 * @purpose-statement Applies pass/fail thresholds to usefulness scores.
 * @pipeline          indirect -- library module
 * @usage             const { applyGate } = require('../lib/docs-usefulness/quality-gate');
 */

function runQualityGate(page) {
  const details = {};
  let fails = 0;
  let warns = 0;

  details.mdx_parses = !(page.flags || []).includes('mdx_parse_error');
  if (!details.mdx_parses) fails += 1;

  details.frontmatter_exists = !(page.flags || []).includes('missing_frontmatter');
  if (!details.frontmatter_exists) fails += 1;

  details.frontmatter_valid = !(page.flags || []).includes('invalid_frontmatter');
  if (!details.frontmatter_valid) fails += 1;

  details.has_title = Boolean(page.frontmatter?.title);
  if (!details.has_title) fails += 1;

  details.has_description = Boolean(page.frontmatter?.description);
  if (!details.has_description) fails += 1;

  details.imports_resolve = !(page.flags || []).includes('broken_import');
  if (!details.imports_resolve) fails += 1;

  details.no_broken_links = !(page.flags || []).includes('broken_links');
  if (!details.no_broken_links) fails += 1;

  details.no_todo_markers = !(page.flags || []).includes('todo_marker');
  if (!details.no_todo_markers) warns += 1;

  details.no_coming_soon = !(page.flags || []).includes('coming_soon');
  if (!details.no_coming_soon) warns += 1;

  details.no_legacy_links = !(page.flags || []).includes('legacy_v2_pages_link');
  if (!details.no_legacy_links) warns += 1;

  details.images_have_alt =
    !Array.isArray(page.images) ||
    page.images.length === 0 ||
    page.images.every((image) => Boolean(String(image.alt || '').trim()));
  if (!details.images_have_alt) warns += 1;

  const status = fails > 0 ? 'fail' : warns > 0 ? 'warn' : 'pass';
  return {
    status,
    errors: fails + warns,
    fails,
    warns,
    details
  };
}

module.exports = {
  runQualityGate
};
