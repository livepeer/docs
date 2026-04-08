/**
 * @script            assign-reviewers
 * @type              interface
 * @concern           governance
 * @niche             pr-lifecycle
 * @purpose           Auto-assigns Copilot reviewer to Codex PRs targeting docs-v2
 * @description       Three-phase reviewer assignment: (1) gate checks if PR is eligible
 *                    (same-repo, Codex branch/marker, not draft), (2) requests reviewer from
 *                    candidate list, (3) adds fallback marker comment if request failed.
 * @mode              interface
 * @scope             .github/workflows/interface-governance-assign-reviewers.yml
 * @usage             Called by github-script in workflow — not invoked directly
 * @policy            D-ACT-08 (workflows are dispatchers, scripts carry the type)
 */

'use strict';

/**
 * Step 1: Gate Codex PR eligibility.
 * Sets outputs: should_run, same_repo, is_codex_pr, is_ready.
 */
module.exports.gate = async function ({ context, core }) {
  const pr = context.payload.pull_request;
  const labels = (pr.labels || []).map((label) => label.name);
  const body = pr.body || '';
  const headRef = pr.head?.ref || '';
  const sourceRepo = pr.head?.repo?.full_name || '';
  const targetRepo = `${context.repo.owner}/${context.repo.repo}`;
  const sameRepo = sourceRepo === targetRepo;
  const isCodexPr =
    headRef.startsWith('codex/') ||
    /codex-pr-body-generated:/i.test(body) ||
    labels.includes('ai-opened:codex');
  const isReady = !pr.draft || context.payload.action === 'ready_for_review';
  const shouldRun = sameRepo && isCodexPr && isReady;

  core.setOutput('should_run', shouldRun ? 'true' : 'false');
  core.setOutput('same_repo', sameRepo ? 'true' : 'false');
  core.setOutput('is_codex_pr', isCodexPr ? 'true' : 'false');
  core.setOutput('is_ready', isReady ? 'true' : 'false');

  core.info(`same_repo=${sameRepo} is_codex_pr=${isCodexPr} is_ready=${isReady}`);
};

/**
 * Step 2: Request Copilot reviewer (best effort).
 * Reads process.env.REVIEWER_CANDIDATES.
 * Sets outputs: requested, requested_reviewer, fallback_needed, fallback_reason, attempted, errors.
 */
module.exports.requestReviewers = async function ({ github, context, core }) {
  const pr = context.payload.pull_request;
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const pull_number = pr.number;

  const unique = (items) => [...new Set(items.filter(Boolean))];
  const parsed = (process.env.REVIEWER_CANDIDATES || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  const candidates = unique(parsed.length > 0 ? parsed : ['copilot']);

  const prFresh = await github.rest.pulls.get({ owner, repo, pull_number });
  const existingRequested = (prFresh.data.requested_reviewers || []).map((u) => u.login);
  const existingAssignees = (prFresh.data.assignees || []).map((u) => u.login);

  if (candidates.some((login) => existingRequested.includes(login))) {
    core.setOutput('requested', 'true');
    core.setOutput(
      'requested_reviewer',
      candidates.find((login) => existingRequested.includes(login)) || ''
    );
    core.setOutput('fallback_needed', 'false');
    core.setOutput('fallback_reason', 'reviewer-already-requested');
    core.setOutput('attempted', JSON.stringify(candidates));
    core.setOutput('errors', JSON.stringify([]));
    return;
  }

  const errors = [];
  let requestedReviewer = '';
  for (const reviewer of candidates) {
    try {
      await github.rest.pulls.requestReviewers({
        owner,
        repo,
        pull_number,
        reviewers: [reviewer],
      });
      requestedReviewer = reviewer;
      break;
    } catch (error) {
      const msg = `${reviewer}: ${error.status || 'error'} ${error.message || 'request failed'}`;
      errors.push(msg);
      core.warning(msg);
    }
  }

  if (requestedReviewer) {
    core.setOutput('requested', 'true');
    core.setOutput('requested_reviewer', requestedReviewer);
    core.setOutput('fallback_needed', 'false');
    core.setOutput('fallback_reason', 'reviewer-requested');
  } else {
    const alreadyAssignedCopilot = existingAssignees.includes('copilot');
    core.setOutput('requested', 'false');
    core.setOutput('requested_reviewer', '');
    core.setOutput('fallback_needed', alreadyAssignedCopilot ? 'false' : 'true');
    core.setOutput(
      'fallback_reason',
      alreadyAssignedCopilot ? 'copilot-already-assigned' : 'reviewer-request-failed'
    );
  }

  core.setOutput('attempted', JSON.stringify(candidates));
  core.setOutput('errors', JSON.stringify(errors));
};

/**
 * Step 4: Add fallback marker comment.
 * Reads process.env.FALLBACK_ASSIGNED, ATTEMPTED_JSON, REQUEST_ERRORS_JSON.
 */
module.exports.addFallbackComment = async function ({ github, context }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const issue_number = context.payload.pull_request.number;
  const marker = '<!-- codex-copilot-auto -->';

  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number,
    per_page: 100,
  });

  const alreadyCommented = comments.some(
    (comment) => comment.user?.type === 'Bot' && typeof comment.body === 'string' && comment.body.includes(marker)
  );
  if (alreadyCommented) return;

  let attempted = [];
  let errors = [];
  try {
    attempted = JSON.parse(process.env.ATTEMPTED_JSON || '[]');
  } catch (_error) {}
  try {
    errors = JSON.parse(process.env.REQUEST_ERRORS_JSON || '[]');
  } catch (_error) {}

  const lines = [
    marker,
    'Copilot reviewer request was attempted for this Codex PR but did not succeed.',
    '',
    `Fallback assignment to \`@copilot\`: ${process.env.FALLBACK_ASSIGNED === 'true' ? 'applied' : 'not applied'}.`,
    attempted.length ? `Reviewer candidates tried: ${attempted.join(', ')}` : 'Reviewer candidates tried: copilot',
  ];

  if (errors.length > 0) {
    lines.push('', 'Request errors:');
    for (const entry of errors) {
      lines.push(`- ${entry}`);
    }
  }

  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number,
    body: lines.join('\n'),
  });
};
