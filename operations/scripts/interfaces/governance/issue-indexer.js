/**
 * @script            issue-indexer
 * @type              interface
 * @concern           governance
 * @niche             issue-lifecycle
 * @purpose           Builds and maintains a rolling docs-v2 issue governance index
 * @description       Searches all docs-v2 labelled issues, sorts by classification/priority,
 *                    renders breakdown tables, tracks Copilot queue, maps closing PRs via
 *                    timeline events, and creates/updates a rolling index issue.
 * @mode              interface
 * @scope             .github/workflows/interface-governance-index-issues.yml
 * @usage             Called by github-script in workflow — not invoked directly
 * @policy            D-ACT-08 (workflows are dispatchers, scripts carry the type)
 */

'use strict';

module.exports = async function ({ github, context }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  // Maintainer knobs: keep marker stable unless you update issue-auto-label skip logic too.
  const TARGET_LABEL = 'docs-v2';
  const INDEX_TITLE = '[docs-v2-index] Issue Governance Index';
  const INDEX_MARKER = '<!-- docs-v2-issue-indexer -->';
  const RECENTLY_CLOSED_DAYS = 30;

  if (context.eventName === 'issues' && (context.payload.issue?.body || '').includes(INDEX_MARKER)) {
    console.log('Skipping self-triggered run for docs-v2 issue indexer issue');
    return;
  }

  const normalizeLabelNames = (issue) =>
    (issue.labels || []).map((label) => (typeof label === 'string' ? label : label.name)).filter(Boolean);

  const decorateIssue = (issue) => {
    const labels = normalizeLabelNames(issue);
    const firstByPrefix = (prefix) => labels.find((name) => name.startsWith(prefix)) || '';
    const allByPrefix = (prefix) => labels.filter((name) => name.startsWith(prefix)).sort();
    const assigneeLogins = (issue.assignees || []).map((a) => a.login).filter(Boolean);
    return {
      ...issue,
      _labels: labels,
      _classification: firstByPrefix('classification:'),
      _priority: firstByPrefix('priority:'),
      _type: firstByPrefix('type:'),
      _area: firstByPrefix('area:'),
      _statuses: allByPrefix('status:'),
      _assignees: assigneeLogins,
    };
  };

  const searchIssues = async (q) => {
    const results = [];
    let page = 1;
    while (true) {
      const resp = await github.rest.search.issuesAndPullRequests({
        q,
        per_page: 100,
        page,
      });
      const pageItems = (resp.data.items || []).filter((item) => !item.pull_request);
      results.push(...pageItems);
      if ((resp.data.items || []).length < 100) break;
      page += 1;
      if (page > 10) {
        console.warn(`Search pagination hit 1000-result cap for query: ${q}`);
        break;
      }
    }
    return results;
  };

  // Marker lookup is the source of truth for the rolling index issue.
  const markerQuery = `repo:${owner}/${repo} is:issue in:body "docs-v2-issue-indexer"`;
  const markerCandidates = await searchIssues(markerQuery);
  const sortedMarkerCandidates = markerCandidates
    .filter((item) => Number.isInteger(item.number))
    .sort((a, b) => a.number - b.number);

  let indexIssue = sortedMarkerCandidates.find((item) => (item.body || '').includes(INDEX_MARKER));

  if (!indexIssue && sortedMarkerCandidates.length > 0) {
    for (const candidate of sortedMarkerCandidates) {
      const candidateResp = await github.rest.issues.get({
        owner,
        repo,
        issue_number: candidate.number,
      });
      if ((candidateResp.data.body || '').includes(INDEX_MARKER)) {
        indexIssue = candidateResp.data;
        break;
      }
    }
  }

  if (!indexIssue) {
    const placeholderBody = [
      INDEX_MARKER,
      '',
      '# docs-v2 Issue Index',
      '',
      '_Initializing index..._',
    ].join('\n');

    const created = await github.rest.issues.create({
      owner,
      repo,
      title: INDEX_TITLE,
      body: placeholderBody,
      labels: [TARGET_LABEL],
    });
    indexIssue = created.data;
    console.log(`Created docs-v2 issue index #${indexIssue.number}`);
  }

  const indexIssueNumber = indexIssue.number;
  const indexIssueResp = await github.rest.issues.get({
    owner,
    repo,
    issue_number: indexIssueNumber,
  });
  indexIssue = indexIssueResp.data;

  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - RECENTLY_CLOSED_DAYS);
  const cutoffDate = cutoff.toISOString().slice(0, 10);
  const nowIso = new Date().toISOString();

  // Query by label so the index follows triage scope instead of title or issue source.
  const openQuery = `repo:${owner}/${repo} is:issue is:open label:"${TARGET_LABEL}"`;
  const recentClosedQuery = `repo:${owner}/${repo} is:issue is:closed label:"${TARGET_LABEL}" closed:>=${cutoffDate}`;

  const openIssues = (await searchIssues(openQuery))
    .filter((issue) => issue.number !== indexIssueNumber)
    .map(decorateIssue);

  const recentClosedIssues = (await searchIssues(recentClosedQuery))
    .filter((issue) => issue.number !== indexIssueNumber)
    .filter((issue) => issue.closed_at && new Date(issue.closed_at) >= cutoff)
    .map(decorateIssue);

  const classificationRank = {
    'classification: urgent': 0,
    'classification: high': 1,
    'classification: moderate': 2,
    'classification: minor': 3,
  };
  const priorityRank = {
    'priority: critical': 0,
    'priority: high': 1,
    'priority: medium': 2,
    'priority: low': 3,
  };

  openIssues.sort((a, b) => {
    const aClass = classificationRank[a._classification] ?? 99;
    const bClass = classificationRank[b._classification] ?? 99;
    if (aClass !== bClass) return aClass - bClass;

    const aPriority = priorityRank[a._priority] ?? 99;
    const bPriority = priorityRank[b._priority] ?? 99;
    if (aPriority !== bPriority) return aPriority - bPriority;

    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  recentClosedIssues.sort((a, b) => new Date(b.closed_at || 0) - new Date(a.closed_at || 0));

  // Look up closing PRs via timeline events (capped to avoid rate limits)
  const closingPrMap = new Map();
  if (recentClosedIssues.length <= 50) {
    for (const issue of recentClosedIssues) {
      try {
        const events = await github.paginate(github.rest.issues.listEventsForTimeline, {
          owner, repo, issue_number: issue.number, per_page: 100,
        });

        // Strategy 1: find cross-referenced PR that was merged
        const crossRef = events.find(
          (e) => e.event === 'cross-referenced' &&
            e.source?.issue?.pull_request &&
            String(e.source.issue.state).toLowerCase() === 'closed'
        );
        if (crossRef?.source?.issue) {
          const pr = crossRef.source.issue;
          closingPrMap.set(issue.number, {
            number: pr.number,
            title: pr.title || '',
            url: pr.html_url || '',
            author: pr.user?.login || '',
          });
          continue;
        }

        // Strategy 2: check auto-close comment marker left by our workflow
        const comments = await github.paginate(github.rest.issues.listComments, {
          owner, repo, issue_number: issue.number, per_page: 100,
        });
        const autoCloseComment = comments.find(
          (c) => c.body && c.body.includes('docs-v2-merge-auto-close')
        );
        if (autoCloseComment) {
          const prMatch = autoCloseComment.body.match(/pr=(\d+)/);
          if (prMatch) {
            const prNum = Number(prMatch[1]);
            const resolvedMatch = autoCloseComment.body.match(/\*\*Resolved\*\* by PR #\d+: "(.+?)"/);
            closingPrMap.set(issue.number, {
              number: prNum,
              title: resolvedMatch ? resolvedMatch[1] : '',
              url: `https://github.com/${owner}/${repo}/pull/${prNum}`,
              author: '',
            });
          }
        }
      } catch (error) {
        console.log(`Timeline lookup failed for #${issue.number}: ${error.message}`);
      }
    }
  }

  // Copilot queue: open issues assigned to copilot
  const copilotQueue = openIssues.filter(
    (issue) => issue._assignees.some((login) => login.toLowerCase() === 'copilot')
  );

  const escapeCell = (value) => {
    const text = value === null || value === undefined ? '' : String(value);
    const normalized = text.replace(/\r?\n+/g, ' ').replace(/\|/g, '\\|').trim();
    return normalized || '-';
  };

  const markdownTable = (headers, rows) => {
    if (!rows.length) return '_None_';
    return [
      `| ${headers.join(' | ')} |`,
      `| ${headers.map(() => '---').join(' | ')} |`,
      ...rows.map((row) => `| ${row.map(escapeCell).join(' | ')} |`),
    ].join('\n');
  };

  const formatTimestamp = (value) => {
    if (!value) return '-';
    return new Date(value).toISOString().replace('.000Z', 'Z');
  };

  const issueLink = (issue) => `[#${issue.number}](${issue.html_url})`;
  const statusCell = (issue) => (issue._statuses.length ? issue._statuses.join(', ') : '-');
  const assigneeCell = (issue) => {
    if (!issue._assignees || issue._assignees.length === 0) return '-';
    return issue._assignees.map((login) => `@${login}`).join(', ');
  };

  const renderOpenIssueRows = (issues) =>
    issues.map((issue) => [
      issueLink(issue),
      issue.title || '(no title)',
      assigneeCell(issue),
      issue._classification || '-',
      issue._priority || '-',
      issue._type || '-',
      issue._area || '-',
      statusCell(issue),
      formatTimestamp(issue.updated_at),
    ]);

  const renderClosedIssueRows = (issues) =>
    issues.map((issue) => {
      const prInfo = closingPrMap.get(issue.number);
      const closedByCell = prInfo ? `[#${prInfo.number}](${prInfo.url})` : 'Manual';
      const resolutionCell = prInfo ? prInfo.title : '-';
      return [
        issueLink(issue),
        issue.title || '(no title)',
        closedByCell,
        resolutionCell,
        issue._classification || '-',
        formatTimestamp(issue.closed_at),
      ];
    });

  const renderCopilotQueueRows = (issues) =>
    issues.map((issue) => {
      const createdDate = new Date(issue.created_at);
      const ageDays = Math.floor((Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24));
      return [
        issueLink(issue),
        issue.title || '(no title)',
        String(ageDays),
        issue._type || '-',
        issue._area || '-',
        statusCell(issue),
      ];
    });

  const increment = (map, key, amount = 1) => {
    map.set(key, (map.get(key) || 0) + amount);
  };

  const countByPrefix = (issues, prefix, { includeUnlabeled = false, unlabeledKey = '(none)' } = {}) => {
    const counts = new Map();
    for (const issue of issues) {
      const matching = issue._labels.filter((label) => label.startsWith(prefix));
      if (matching.length === 0) {
        if (includeUnlabeled) increment(counts, unlabeledKey);
        continue;
      }
      for (const label of matching) increment(counts, label);
    }
    return counts;
  };

  const sortedCountEntries = (countMap, preferredOrder = []) => {
    const preferredIndex = new Map(preferredOrder.map((key, idx) => [key, idx]));
    return [...countMap.entries()].sort((a, b) => {
      const aPref = preferredIndex.has(a[0]) ? preferredIndex.get(a[0]) : 999;
      const bPref = preferredIndex.has(b[0]) ? preferredIndex.get(b[0]) : 999;
      if (aPref !== bPref) return aPref - bPref;
      if (b[1] !== a[1]) return b[1] - a[1];
      return a[0].localeCompare(b[0]);
    });
  };

  const renderCountTable = (countMap, preferredOrder = []) =>
    markdownTable(
      ['Label', 'Count'],
      sortedCountEntries(countMap, preferredOrder).map(([label, count]) => [label, String(count)])
    );

  const openClassificationCounts = countByPrefix(openIssues, 'classification:', {
    includeUnlabeled: true,
    unlabeledKey: 'classification: (unclassified)',
  });
  const openPriorityCounts = countByPrefix(openIssues, 'priority:', {
    includeUnlabeled: true,
    unlabeledKey: 'priority: (unlabeled)',
  });
  const openTypeCounts = countByPrefix(openIssues, 'type:', {
    includeUnlabeled: true,
    unlabeledKey: 'type: (unlabeled)',
  });
  const openAreaCounts = countByPrefix(openIssues, 'area:', {
    includeUnlabeled: true,
    unlabeledKey: 'area: (unlabeled)',
  });

  const openUnclassifiedIssues = openIssues.filter((issue) => !issue._classification);
  const openUnprioritizedIssues = openIssues.filter((issue) => !issue._priority);
  const needsTriageOpenCount = openIssues.filter((issue) => issue._statuses.includes('status: needs-routing')).length;

  const summaryLines = [
    `- Open docs-v2 issues: **${openIssues.length}**`,
    `- Copilot queue: **${copilotQueue.length}**`,
    `- Recently closed docs-v2 issues (${RECENTLY_CLOSED_DAYS}d): **${recentClosedIssues.length}**`,
    `- Open docs-v2 issues missing classification: **${openUnclassifiedIssues.length}**`,
    `- Open docs-v2 issues with \`status: needs-routing\`: **${needsTriageOpenCount}**`,
  ];

  const openIssuesTable = markdownTable(
    ['Issue', 'Title', 'Assignee', 'Classification', 'Priority', 'Type', 'Area', 'Status', 'Updated (UTC)'],
    renderOpenIssueRows(openIssues)
  );

  const recentClosedTable = markdownTable(
    ['Issue', 'Title', 'Closed By', 'Resolution', 'Classification', 'Closed (UTC)'],
    renderClosedIssueRows(recentClosedIssues)
  );

  const copilotQueueTable = markdownTable(
    ['Issue', 'Title', 'Age (days)', 'Type', 'Area', 'Status'],
    renderCopilotQueueRows(copilotQueue)
  );

  const missingClassificationTable = markdownTable(
    ['Issue', 'Title', 'Priority', 'Type', 'Area', 'Updated (UTC)'],
    openUnclassifiedIssues.map((issue) => [
      issueLink(issue),
      issue.title || '(no title)',
      issue._priority || '-',
      issue._type || '-',
      issue._area || '-',
      formatTimestamp(issue.updated_at),
    ])
  );

  const missingPriorityTable = markdownTable(
    ['Issue', 'Title', 'Classification', 'Type', 'Area', 'Updated (UTC)'],
    openUnprioritizedIssues.map((issue) => [
      issueLink(issue),
      issue.title || '(no title)',
      issue._classification || '-',
      issue._type || '-',
      issue._area || '-',
      formatTimestamp(issue.updated_at),
    ])
  );

  const body = [
    INDEX_MARKER,
    '',
    '# docs-v2 Issue Governance Index',
    '',
    '_Auto-generated by `.github/workflows/docs-v2-issue-indexer.yml`. Do not edit manually._',
    '_This is the governing document for all docs-v2 issue lifecycle._',
    '',
    `Last updated (UTC): ${nowIso}`,
    `Recently closed window: last ${RECENTLY_CLOSED_DAYS} days (since ${cutoffDate})`,
    '',
    '## Summary',
    '',
    ...summaryLines,
    '',
    '## Copilot Queue',
    '',
    '_Issues assigned to Copilot awaiting PR creation._',
    '',
    copilotQueueTable,
    '',
    '## Open Issue Breakdown by Classification',
    '',
    renderCountTable(openClassificationCounts, [
      'classification: urgent',
      'classification: high',
      'classification: moderate',
      'classification: minor',
      'classification: (unclassified)',
    ]),
    '',
    '## Open Issue Breakdown by Priority',
    '',
    renderCountTable(openPriorityCounts, [
      'priority: critical',
      'priority: high',
      'priority: medium',
      'priority: low',
      'priority: (unlabeled)',
    ]),
    '',
    '## Open Issue Breakdown by Type',
    '',
    renderCountTable(openTypeCounts, [
      'type: bug',
      'type: enhancement',
      'type: documentation',
      'type: question',
      'type: (unlabeled)',
    ]),
    '',
    '## Open Issue Breakdown by Area',
    '',
    renderCountTable(openAreaCounts, [
      'area: home-about',
      'area: community',
      'area: developers',
      'area: gateways',
      'area: orchestrators',
      'area: lpt-governance',
      'area: resources',
      'area: ci-cd',
      'area: structure',
      'area: multiple',
      'area: (unlabeled)',
    ]),
    '',
    '## Open Issues',
    '',
    openIssuesTable,
    '',
    `## Recently Closed (${RECENTLY_CLOSED_DAYS}d)`,
    '',
    recentClosedTable,
    '',
    '## Open Issues Missing Classification',
    '',
    missingClassificationTable,
    '',
    '## Open Issues Missing Priority',
    '',
    missingPriorityTable,
    '',
  ].join('\n');

  if ((indexIssue.body || '') === body && indexIssue.title === INDEX_TITLE) {
    console.log(`No docs-v2 issue index changes for #${indexIssueNumber}`);
    return;
  }

  await github.rest.issues.update({
    owner,
    repo,
    issue_number: indexIssueNumber,
    title: INDEX_TITLE,
    body,
  });

  console.log(`Updated docs-v2 issue index #${indexIssueNumber}`);
};
