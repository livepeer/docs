/**
 * @script            notify-linked-issues
 * @type              interface
 * @concern           governance
 * @niche             issue-lifecycle
 * @purpose           Notifies linked issues when a PR is opened against docs-v2
 * @description       Parses PR body for closing keywords and Task: #N patterns,
 *                    then adds a notification comment to each referenced open issue
 *                    (idempotent via marker comment).
 * @mode              interface
 * @scope             .github/workflows/interface-governance-close-linked-issues.yml
 * @usage             Called by github-script in workflow — not invoked directly
 * @policy            D-ACT-08 (workflows are dispatchers, scripts carry the type)
 */

'use strict';

module.exports = async function ({ github, context }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const localRepo = `${owner}/${repo}`.toLowerCase();
  const pr = context.payload.pull_request;
  const prBody = String(pr.body || '');
  const prNumber = pr.number;

  const issueIds = new Set();

  const closingRe = /\b(?:fixes|closes|resolves)\s+(?:([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+))?#(\d+)\b/gi;
  let match;
  while ((match = closingRe.exec(prBody)) !== null) {
    const referencedRepo = String(match[1] || localRepo).toLowerCase();
    const issueNumber = Number(match[2]);
    if (!Number.isInteger(issueNumber) || issueNumber <= 0) continue;
    if (referencedRepo !== localRepo) continue;
    issueIds.add(issueNumber);
  }

  const taskLineRe = /\bTask:\s*#(\d+)\b/gi;
  let taskMatch;
  while ((taskMatch = taskLineRe.exec(prBody)) !== null) {
    const issueNumber = Number(taskMatch[1]);
    if (Number.isInteger(issueNumber) && issueNumber > 0) {
      issueIds.add(issueNumber);
    }
  }

  let notified = 0;

  for (const issueNumber of issueIds) {
    try {
      const issue = await github.rest.issues.get({ owner, repo, issue_number: issueNumber });
      if (issue.data.pull_request || String(issue.data.state).toLowerCase() === 'closed') continue;

      const marker = `<!-- pr-opened-for-issue: pr=${prNumber}; issue=${issueNumber} -->`;
      const comments = await github.paginate(github.rest.issues.listComments, {
        owner, repo, issue_number: issueNumber, per_page: 100
      });
      if (comments.some((c) => String(c.body || '').includes(marker))) continue;

      await github.rest.issues.createComment({
        owner, repo, issue_number: issueNumber,
        body: [
          marker,
          `PR #${prNumber} opened to address this: ${pr.html_url}`,
          `Author: @${pr.user.login} | Branch: \`${pr.head.ref}\``
        ].join('\n')
      });
      notified++;
    } catch (error) {
      console.log(`Failed to notify #${issueNumber}: ${error.message}`);
    }
  }

  console.log(`Notified ${notified} linked issue(s)`);
};
