/**
 * @script            rolling-issue
 * @type              utility
 * @concern           governance
 * @niche             issue-lifecycle
 * @purpose           Shared helper for rolling issue create/update/close pattern
 * @description       Provides ensureLabels(), upsert(), and close() for the rolling issue
 *                    pattern used by scanner and validator workflows. Reads label metadata
 *                    from .github/config/labels.json.
 * @mode              interface
 * @scope             .github/workflows/ (scanner and validator workflows)
 * @usage             const ri = require('./lib/rolling-issue.js'); await ri.upsert({ github, context, label, title, body });
 * @policy            D-GOV-03 (every detection must self-repair or escalate)
 */

'use strict';

const path = require('path');
const fs = require('fs');

function loadLabelMeta() {
  const labelsPath = path.resolve(process.cwd(), '.github', 'config', 'labels.json');
  if (fs.existsSync(labelsPath)) {
    return JSON.parse(fs.readFileSync(labelsPath, 'utf8')).labels;
  }
  return {};
}

/**
 * Ensure a set of labels exist on the repo. Creates any that are missing.
 * Reads colour/description from labels.json.
 *
 * @param {Object} params
 * @param {Object} params.github - Authenticated Octokit client
 * @param {Object} params.context - GitHub Actions context
 * @param {string[]} params.labels - Label names to ensure exist
 * @param {Object} [params.core] - GitHub Actions core (for logging)
 */
async function ensureLabels({ github, context, labels, core }) {
  const { owner, repo } = context.repo;
  const allMeta = loadLabelMeta();

  for (const name of labels) {
    const meta = allMeta[name] || { color: 'ededed', description: `Managed label: ${name}` };
    try {
      await github.rest.issues.getLabel({ owner, repo, name });
      if (core) core.info(`Label exists: ${name}`);
    } catch (e) {
      if (e.status !== 404) throw e;
      try {
        await github.rest.issues.createLabel({ owner, repo, name, color: meta.color, description: meta.description });
        if (core) core.info(`Created label: ${name}`);
      } catch (ce) {
        if (ce.status === 422) {
          if (core) core.info(`Label already exists (race-safe): ${name}`);
        } else {
          throw ce;
        }
      }
    }
  }
}

/**
 * Create or update a rolling issue. Finds existing open issue by label.
 * If found, updates the body. If not found, creates a new issue.
 *
 * @param {Object} params
 * @param {Object} params.github - Authenticated Octokit client
 * @param {Object} params.context - GitHub Actions context
 * @param {string} params.label - Primary label to find/tag the rolling issue
 * @param {string[]} [params.extraLabels] - Additional labels (default: ['automated'])
 * @param {string} params.title - Issue title
 * @param {string} params.body - Issue body (markdown)
 * @param {Object} [params.core] - GitHub Actions core (for logging)
 * @returns {{ action: 'created'|'updated', issue_number: number }}
 */
async function upsert({ github, context, label, extraLabels, title, body, core }) {
  const { owner, repo } = context.repo;
  const allLabels = [label, ...(extraLabels || ['automated'])];

  // Ensure all labels exist
  await ensureLabels({ github, context, labels: allLabels, core });

  // Append workflow run link
  const runLink = `\n\n---\nWorkflow run: ${context.serverUrl}/${owner}/${repo}/actions/runs/${context.runId}`;
  const fullBody = body + runLink;

  const existing = await github.rest.issues.listForRepo({
    owner, repo, state: 'open', labels: label, per_page: 1
  });

  if (existing.data.length > 0) {
    const issue_number = existing.data[0].number;
    await github.rest.issues.update({ owner, repo, issue_number, body: fullBody });
    if (core) core.info(`Updated rolling issue #${issue_number}`);
    return { action: 'updated', issue_number };
  }

  const created = await github.rest.issues.create({
    owner, repo, title, body: fullBody, labels: allLabels
  });
  if (core) core.info(`Created rolling issue #${created.data.number}`);
  return { action: 'created', issue_number: created.data.number };
}

/**
 * Close a rolling issue if one is open. Appends a resolution note.
 *
 * @param {Object} params
 * @param {Object} params.github - Authenticated Octokit client
 * @param {Object} params.context - GitHub Actions context
 * @param {string} params.label - Label to find the rolling issue
 * @param {string} [params.reason] - Resolution reason (default: 'All checks passed')
 * @param {Object} [params.core] - GitHub Actions core (for logging)
 * @returns {{ action: 'closed'|'none', issue_number?: number }}
 */
async function close({ github, context, label, reason, core }) {
  const { owner, repo } = context.repo;
  const resolvedMsg = reason || 'All checks passed';

  const existing = await github.rest.issues.listForRepo({
    owner, repo, state: 'open', labels: label, per_page: 1
  });

  if (existing.data.length === 0) {
    if (core) core.info('No open rolling issue to close');
    return { action: 'none' };
  }

  const issue_number = existing.data[0].number;
  const currentBody = existing.data[0].body || '';
  await github.rest.issues.update({
    owner, repo, issue_number,
    state: 'closed',
    state_reason: 'completed',
    body: currentBody + `\n\n---\n**Resolved:** ${resolvedMsg} as of ${new Date().toISOString()}`
  });
  if (core) core.info(`Closed rolling issue #${issue_number} (${resolvedMsg})`);
  return { action: 'closed', issue_number };
}

module.exports = { ensureLabels, upsert, close };
