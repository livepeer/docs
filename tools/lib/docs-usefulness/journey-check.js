'use strict';
/**
 * @script            journey-check
 * @category          utility
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R14, R-C6
 * @purpose-statement Evaluates docs pages against user journey completeness criteria.
 * @pipeline          indirect -- library module
 * @usage             const { checkJourney } = require('../lib/docs-usefulness/journey-check');
 */

const { minimatch } = require('minimatch');
const { loadJourneys } = require('./rubric-loader');

function chooseBestPage(pages) {
  if (!Array.isArray(pages) || pages.length === 0) return null;
  return [...pages].sort((a, b) => {
    const scoreA = Number(a.combined_score || 0);
    const scoreB = Number(b.combined_score || 0);
    if (scoreA !== scoreB) return scoreB - scoreA;
    return String(a.path || '').localeCompare(String(b.path || ''));
  })[0];
}

function hasNavLinkToNext(currentPage, nextPagePath) {
  if (!currentPage || !Array.isArray(currentPage.internalLinks) || !nextPagePath) return false;
  const normalizedNext = String(nextPagePath).replace(/\.mdx$/i, '').replace(/\/index$/i, '');
  return currentPage.internalLinks.some((link) => {
    const normalizedLink = String(link || '').replace(/^\/+/, '').replace(/\.mdx$/i, '').replace(/\/index$/i, '');
    return normalizedNext.includes(normalizedLink) || normalizedLink.includes(normalizedNext);
  });
}

function checkJourneys(pageScores, journeysConfig = loadJourneys()) {
  const reports = [];

  Object.entries(journeysConfig).forEach(([persona, journey]) => {
    const stepResults = (journey.steps || []).map((step) => {
      const patterns = Array.isArray(step.path_patterns) ? step.path_patterns : [];
      const matching = pageScores.filter((page) =>
        patterns.some((pattern) => minimatch(String(page.path || ''), pattern, { nocase: true }))
      );

      if (matching.length === 0) {
        return {
          ...step,
          status: 'missing',
          reason: 'no_page',
          page: null,
          score: null,
          has_link_to_next: false
        };
      }

      const allowedPurposes = Array.isArray(step.purpose) ? step.purpose : [step.purpose];
      const purposeMatched = matching.filter((page) => allowedPurposes.includes(page.purpose));

      if (purposeMatched.length === 0) {
        const best = chooseBestPage(matching);
        return {
          ...step,
          status: 'weak',
          reason: 'wrong_purpose',
          page: best?.path || null,
          score: best?.combined_score || 0,
          has_link_to_next: false
        };
      }

      const best = chooseBestPage(purposeMatched);
      const score = Number(best?.combined_score || 0);
      return {
        ...step,
        status: score >= 50 ? 'complete' : 'weak',
        reason: score >= 50 ? null : 'low_score',
        page: best?.path || null,
        score,
        has_link_to_next: false
      };
    });

    for (let i = 0; i < stepResults.length - 1; i += 1) {
      const current = stepResults[i];
      const next = stepResults[i + 1];
      if (!current.page || !next.page) continue;
      const currentPage = pageScores.find((page) => page.path === current.page);
      current.has_link_to_next = hasNavLinkToNext(currentPage, next.page);
    }

    const complete = stepResults.filter((step) => step.status === 'complete').length;
    const weak = stepResults.filter((step) => step.status === 'weak').length;
    const missing = stepResults.filter((step) => step.status === 'missing').length;

    const blockers = stepResults
      .filter((step) => step.status === 'missing')
      .map((step) => {
        const purpose = Array.isArray(step.purpose) ? step.purpose.join('/') : step.purpose;
        return `Step ${step.position} (${purpose}): NO PAGE FOUND`;
      });

    const verdict = missing === 0 && weak === 0 ? 'COMPLETE' : missing === 0 ? 'MOSTLY_COMPLETE' : 'BLOCKED';

    reports.push({
      persona,
      label: journey.label,
      maps_to: journey.maps_to || null,
      success_criteria: journey.success_criteria,
      priority: Number(journey.priority || 999),
      steps_total: stepResults.length,
      steps_complete: complete,
      steps_weak: weak,
      steps_missing: missing,
      verdict,
      blockers,
      steps: stepResults
    });
  });

  return reports.sort((a, b) => a.priority - b.priority || String(a.persona).localeCompare(String(b.persona)));
}

module.exports = {
  checkJourneys
};
