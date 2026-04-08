/**
 * @script            issue-auto-label
 * @type              interface
 * @concern           governance
 * @niche             issue-lifecycle
 * @purpose           Parses issue form sections and applies structured labels based on template type
 * @description       Detects issue template type (docs_page_issue, bug_report, feature_request, etc.),
 *                    applies base + managed labels, validates required sections, adds needs-info comment
 *                    if sections are missing, and auto-assigns Copilot when conditions are met.
 * @mode              interface
 * @scope             .github/workflows/interface-governance-label-issues.yml
 * @usage             Called by github-script in workflow — not invoked directly
 * @policy            D-ACT-08 (workflows are dispatchers, scripts carry the type)
 */

'use strict';

const loadLabels = require('./lib/load-labels.js');

module.exports = async function ({ github, context }) {
  const issue = context.payload.issue;
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const issue_number = issue.number;
  const body = issue.body || '';
  // The docs-v2 index issue is bot-managed and intentionally excluded from triage labeling.
  const indexMarker = '<!-- docs-v2-issue-indexer -->';

  if (body.includes(indexMarker)) {
    console.log(`Skipping auto-label for docs-v2 issue indexer (#${issue_number})`);
    return;
  }

  const { managedPrefixes, getMeta } = loadLabels();

  const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const getSection = (heading) => {
    const regex = new RegExp(`###\\s+${escapeRegex(heading)}\\s*\\n([\\s\\S]*?)(?=\\n###\\s+|$)`, 'i');
    const match = body.match(regex);
    return match ? match[1].trim() : '';
  };

  const normalize = (value) =>
    (value || '')
      .replace(/\r/g, '')
      .replace(/^[-*]\s+/gm, '')
      .trim();

  const isPlaceholder = (value) => {
    const text = normalize(value).toLowerCase().replace(/[`*_]/g, '').trim();
    if (!text || text === '_no response_' || text === 'no response') return true;
    return ['n/a', 'na', 'tbd', 'none', 'unknown', '?'].includes(text);
  };

  const ensureLabel = async (name) => {
    const meta = getMeta(name);
    try {
      await github.rest.issues.getLabel({ owner, repo, name });
    } catch (error) {
      if (error.status === 404) {
        await github.rest.issues.createLabel({
          owner,
          repo,
          name,
          color: meta.color,
          description: meta.description,
        });
      } else {
        throw error;
      }
    }
  };

  const subtypeToKind = {
    'factual error': 'kind: factual-error',
    'unclear instructions': 'kind: unclear-instructions',
    'missing prerequisite or context': 'kind: missing-context',
    'broken link or media': 'kind: broken-media-link',
    'ux, readability, or accessibility issue': 'kind: accessibility-ux',
    'structural or navigation issue': 'kind: navigation-structure',
  };

  const existingLabels = issue.labels.map((label) => (typeof label === 'string' ? label : label.name));
  const labelsSeen = new Set(existingLabels);
  const desiredManagedLabels = new Set();

  const hasSection = (heading) => new RegExp(`###\\s+${escapeRegex(heading)}\\s*\\n`, 'i').test(body);

  // Legacy issues may not have a Classification section; we only enforce it when present.
  const hasClassificationSection = hasSection('Classification');

  let templateType = 'unknown';
  if (hasSection('Issue subtype')) {
    templateType = 'docs_page_issue';
  } else if (hasSection('Steps to reproduce')) {
    templateType = 'bug_report';
  } else if (hasSection('Problem statement')) {
    templateType = 'feature_request';
  } else if (hasSection('Requested topic title')) {
    templateType = 'content_request';
  } else if (hasSection('Failing command or workflow')) {
    templateType = 'tooling_ci_issue';
  } else if (hasSection('Question')) {
    templateType = 'question_clarification';
  } else if (hasSection('Description') && hasClassificationSection && hasSection('Priority')) {
    templateType = 'feature_internal';
  }

  const commonBase = ['docs-v2', 'help wanted', 'status: needs-routing'];
  const templateBaseLabels = {
    bug_report: [...commonBase, 'type: bug'],
    docs_page_issue: [...commonBase, 'type: documentation', 'scope: page'],
    feature_request: [...commonBase, 'type: enhancement'],
    feature_internal: [...commonBase, 'type: enhancement'],
    content_request: [...commonBase, 'type: documentation'],
    tooling_ci_issue: [...commonBase, 'type: bug', 'area: ci-cd'],
    question_clarification: [...commonBase, 'type: question'],
  };

  const baseLabels = templateBaseLabels[templateType] || commonBase;
  for (const label of baseLabels) {
    await ensureLabel(label);
  }
  const baseLabelsToAdd = baseLabels.filter((label) => !labelsSeen.has(label));
  if (baseLabelsToAdd.length > 0) {
    await github.rest.issues.addLabels({ owner, repo, issue_number, labels: baseLabelsToAdd });
    baseLabelsToAdd.forEach((label) => labelsSeen.add(label));
  }

  const area = normalize(getSection('Area'));
  const classification = normalize(getSection('Classification'));
  const priority = normalize(getSection('Priority'));
  const issueSubtype = normalize(getSection('Issue subtype'));

  if (area.startsWith('area:')) desiredManagedLabels.add(area);
  if (classification.startsWith('classification:')) desiredManagedLabels.add(classification);
  if (priority.startsWith('priority:')) desiredManagedLabels.add(priority);

  if (templateType === 'docs_page_issue') {
    desiredManagedLabels.add('scope: page');
  }

  const kindLabel = subtypeToKind[issueSubtype.toLowerCase()];
  if (kindLabel) {
    desiredManagedLabels.add(kindLabel);
  }

  const staleManaged = [...labelsSeen].filter(
    (name) => managedPrefixes.some((prefix) => name.startsWith(prefix)) && !desiredManagedLabels.has(name)
  );

  for (const label of staleManaged) {
    try {
      await github.rest.issues.removeLabel({ owner, repo, issue_number, name: label });
      labelsSeen.delete(label);
    } catch (error) {
      if (error.status !== 404) throw error;
    }
  }

  for (const label of desiredManagedLabels) {
    await ensureLabel(label);
  }

  const labelsToAdd = [...desiredManagedLabels].filter((label) => !labelsSeen.has(label));
  if (labelsToAdd.length > 0) {
    await github.rest.issues.addLabels({ owner, repo, issue_number, labels: labelsToAdd });
    labelsToAdd.forEach((label) => labelsSeen.add(label));
  }

  let requiredSections = [];
  if (templateType === 'docs_page_issue') {
    requiredSections = [
      'Area',
      'Issue subtype',
      'Page URL or file path',
      'Section or anchor',
      'Exact problem statement',
      'Evidence',
      'UX/readability/accessibility feedback',
      'Suggested improvement',
      'Requested repository outcome',
      'Done criteria / acceptance check',
      'Priority',
    ];
  } else if (templateType === 'bug_report') {
    requiredSections = [
      'Area',
      'Affected page URL or file path',
      'Steps to reproduce',
      'Actual result',
      'Expected result',
      'User impact',
      'Requested repository outcome',
      'Priority',
    ];
  } else if (templateType === 'feature_request') {
    requiredSections = [
      'Area',
      'Problem statement',
      'Proposed solution',
      'User benefit',
      'Alternatives considered',
      'Requested repository outcome',
      'Acceptance criteria / done criteria',
      'Priority',
    ];
  } else if (templateType === 'content_request') {
    requiredSections = [
      'Area',
      'Requested topic title',
      'Target audience',
      'Problem or use case',
      'Proposed outline',
      'Source references',
      'Requested repository outcome',
      'Done criteria / acceptance check',
      'Priority',
    ];
  } else if (templateType === 'tooling_ci_issue') {
    requiredSections = [
      'Area',
      'Failing command or workflow',
      'Script or workflow path',
      'Full error output',
      'Reproduction conditions',
      'Expected behavior',
      'Requested repository outcome',
      'Priority',
    ];
  } else if (templateType === 'question_clarification') {
    requiredSections = [
      'Area',
      'Relevant page URL or file path',
      'Question',
      'What you already checked',
      'Blocking impact',
      'Priority',
    ];
  } else if (templateType === 'feature_internal') {
    requiredSections = [
      'Description',
      'Priority',
    ];
  }

  if (hasClassificationSection && requiredSections.length > 0 && !requiredSections.includes('Classification')) {
    const priorityIndex = requiredSections.indexOf('Priority');
    if (priorityIndex >= 0) {
      requiredSections.splice(priorityIndex, 0, 'Classification');
    } else {
      requiredSections.push('Classification');
    }
  }

  const missingSections = requiredSections.filter((section) => isPlaceholder(getSection(section)));

  if (missingSections.length > 0) {
    await ensureLabel('status: needs-info');
    if (!labelsSeen.has('status: needs-info')) {
      await github.rest.issues.addLabels({ owner, repo, issue_number, labels: ['status: needs-info'] });
      labelsSeen.add('status: needs-info');
    }

    const marker = '<!-- issue-intake-needs-info -->';
    const comments = await github.paginate(github.rest.issues.listComments, {
      owner,
      repo,
      issue_number,
      per_page: 100,
    });

    const alreadyCommented = comments.some(
      (comment) => comment.user?.type === 'Bot' && comment.body && comment.body.includes(marker)
    );

    if (!alreadyCommented) {
      const missingList = missingSections.map((section) => `- ${section}`).join('\n');
      const commentBody = [
        marker,
        'Thanks for opening this issue. A few required sections are missing or too vague for maintainers to act:',
        '',
        missingList,
        '',
        'Please edit the issue with concrete details (exact pages/paths, expected outcomes, and actionable requests). Once updated, maintainers can triage it quickly.',
      ].join('\n');

      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number,
        body: commentBody,
      });
    }
  } else if (labelsSeen.has('status: needs-info')) {
    try {
      await github.rest.issues.removeLabel({ owner, repo, issue_number, name: 'status: needs-info' });
      labelsSeen.delete('status: needs-info');
    } catch (error) {
      if (error.status !== 404) throw error;
    }
  }

  // --- Copilot auto-assignment ---
  const assignees = (issue.assignees || []).map((a) => a.login);
  const triggerLabels = ['type: bug', 'good first issue', 'help wanted'];
  const hasTrigger = triggerLabels.some((label) => labelsSeen.has(label));

  if (assignees.length === 0 && labelsSeen.has('docs-v2') && hasTrigger) {
    const copilotLogin = 'copilot';
    const assignMarker = '<!-- copilot-auto-assign -->';

    const comments = await github.paginate(github.rest.issues.listComments, {
      owner, repo, issue_number, per_page: 100,
    });
    const alreadyAssigned = comments.some(
      (comment) => comment.body && comment.body.includes(assignMarker)
    );

    if (!alreadyAssigned) {
      try {
        await github.rest.issues.addAssignees({
          owner, repo, issue_number,
          assignees: [copilotLogin],
        });
        await github.rest.issues.createComment({
          owner, repo, issue_number,
          body: [
            assignMarker,
            `Assigned to @${copilotLogin} for auto-remediation. Copilot will open a PR if it can address this issue.`,
          ].join('\n'),
        });
        console.log(`Assigned @${copilotLogin} to #${issue_number}`);
      } catch (error) {
        console.log(`Failed to assign @${copilotLogin} to #${issue_number}: ${error.message}`);
      }
    }
  }
};
