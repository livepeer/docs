/**
 * @script      discord-issue-intake
 * @type        interface
 * @concern     governance
 * @niche       
 * @purpose     Creates GitHub issues from Discord community reports via repository_dispatch
 * @description Validates repository_dispatch payload from Discord bot (n8n workflow),
 * @mode        interface
 * @pipeline    manual
 * @scope       .github/workflows/interface-governance-intake-discord-issues.yml
 * @usage       Called by github-script in workflow — not invoked directly
 * @policy      D-ACT-08 (workflows are dispatchers, scripts carry the type)
 */

'use strict';

const loadLabels = require('./lib/load-labels.js');

/**
 * @param {Object} params
 * @param {import('@octokit/rest').Octokit} params.github - Authenticated GitHub client
 * @param {Object} params.context - GitHub Actions context
 */
module.exports = async function ({ github, context }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const payload = context.payload.client_payload || {};

  const normalize = (value) => {
    if (Array.isArray(value)) return value.join(', ').trim();
    if (value === null || value === undefined) return '';
    return String(value).trim();
  };

  const isPlaceholder = (value) => {
    const text = normalize(value).toLowerCase().replace(/[`*_]/g, '').trim();
    if (!text || text === '_no response_' || text === 'no response') return true;
    return ['n/a', 'na', 'tbd', 'none', 'unknown', '?'].includes(text);
  };

  const requireObject = (name, value) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error(`Missing or invalid object: ${name}`);
    }
  };

  const parseBoolean = (value) => {
    if (typeof value === 'boolean') return value;
    const text = normalize(value).toLowerCase();
    if (['true', '1', 'yes', 'y', 'on'].includes(text)) return true;
    if (['false', '0', 'no', 'n', 'off', ''].includes(text)) return false;
    return false;
  };

  requireObject('client_payload', payload);

  const schemaVersion = normalize(payload.schema_version);
  const templateKey = normalize(payload.template_key);
  const correlationId = normalize(payload.correlation_id);
  const issueTitleRaw = normalize(payload.issue_title);
  const fields = payload.fields;
  const source = payload.source;
  const checks = payload.checks;

  requireObject('fields', fields);
  requireObject('source', source);
  requireObject('checks', checks);

  if (!schemaVersion) throw new Error('Missing schema_version');
  // Keep older schema versions accepted during sender rollouts (n8n/dispatch clients).
  const supportedSchemaVersions = new Set(['1.0.0', '1.1.0']);
  if (!supportedSchemaVersions.has(schemaVersion)) {
    throw new Error(`Unsupported schema_version: ${schemaVersion}`);
  }
  if (templateKey !== 'docs_page_issue') {
    throw new Error(`Unsupported template_key: ${templateKey || '(empty)'}`);
  }
  if (!correlationId) throw new Error('Missing correlation_id');
  if (!issueTitleRaw) throw new Error('Missing issue_title');

  const field = (id) => normalize(fields[id]);
  const classificationValue = field('classification');
  // Classification became required in schema 1.1.0 but remains optional for 1.0.0 compatibility.
  const requiresClassification = schemaVersion === '1.1.0';

  const requiredFieldIds = [
    'area',
    'issue_subtype',
    'page_or_path',
    'section_anchor',
    'content_problem',
    'evidence',
    'ui_ux_feedback',
    'suggested_improvement',
    'requested_action',
    'done_criteria',
    'priority',
  ];
  if (requiresClassification) {
    requiredFieldIds.push('classification');
  }

  const missingFields = requiredFieldIds.filter((id) => isPlaceholder(field(id)));
  if (missingFields.length > 0) {
    throw new Error(`Missing or placeholder required fields: ${missingFields.join(', ')}`);
  }

  const searchedExisting = parseBoolean(checks.searched_existing);
  const enoughDetail = parseBoolean(checks.enough_detail);
  if (!searchedExisting || !enoughDetail) {
    throw new Error('Both required checks must be true: searched_existing and enough_detail');
  }

  const securityPattern = /\b(vulnerability|exploit|rce|remote code execution|xss|csrf|sql injection|private key|secret leak|credential leak|auth bypass)\b/i;
  const joinedText = [
    issueTitleRaw,
    ...requiredFieldIds.map((id) => field(id)),
    field('additional_context'),
  ].join('\n');
  if (securityPattern.test(joinedText)) {
    throw new Error('Security-sensitive content detected; route through private vulnerability reporting flow.');
  }

  const marker = `<!-- discord-intake-id:${correlationId} -->`;
  const duplicateQuery = `repo:${owner}/${repo} is:issue in:body "discord-intake-id:${correlationId}"`;
  const duplicateResult = await github.rest.search.issuesAndPullRequests({
    q: duplicateQuery,
    per_page: 1,
  });

  if (duplicateResult.data.total_count > 0) {
    const existing = duplicateResult.data.items[0];
    console.log(`Issue already exists for correlation_id=${correlationId}: #${existing.number}`);
    return {
      status: 'duplicate',
      issue_number: existing.number,
      issue_url: existing.html_url,
      correlation_id: correlationId,
    };
  }

  const { getMeta } = loadLabels();

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

  const baseLabels = ['docs-v2', 'help wanted', 'status: needs-routing', 'type: documentation', 'scope: page'];
  for (const label of baseLabels) {
    await ensureLabel(label);
  }

  const sourceGuild = normalize(source.guild_id);
  const sourceChannel = normalize(source.channel_id);
  const sourceMessage = normalize(source.message_id);
  const sourceUserTag = normalize(source.user_tag);
  const sourceUserId = normalize(source.user_id);
  const sourceInteractionTs = normalize(source.interaction_timestamp);

  const messageUrl = sourceGuild && sourceChannel && sourceMessage
    ? `https://discord.com/channels/${sourceGuild}/${sourceChannel}/${sourceMessage}`
    : 'N/A';

  const additionalContext = field('additional_context');
  const combinedAdditionalContext = [
    additionalContext || 'N/A',
    '',
    '---',
    'Discord intake metadata:',
    `- Discord server ID: ${sourceGuild || 'N/A'}`,
    `- Discord channel ID: ${sourceChannel || 'N/A'}`,
    `- Discord message URL: ${messageUrl}`,
    `- Reporter: ${sourceUserTag || 'N/A'}`,
    `- Reporter ID: ${sourceUserId || 'N/A'}`,
    `- Interaction timestamp: ${sourceInteractionTs || 'N/A'}`,
    `- Correlation ID: ${correlationId}`,
  ].join('\n').trim();

  const issueBody = [
    '### Area',
    field('area'),
    '',
    '### Issue subtype',
    field('issue_subtype'),
    '',
    '### Page URL or file path',
    field('page_or_path'),
    '',
    '### Section or anchor',
    field('section_anchor'),
    '',
    '### Exact problem statement',
    field('content_problem'),
    '',
    '### Evidence',
    field('evidence'),
    '',
    '### UX/readability/accessibility feedback',
    field('ui_ux_feedback'),
    '',
    '### Suggested improvement',
    field('suggested_improvement'),
    '',
    '### Requested repository outcome',
    field('requested_action'),
    '',
    '### Done criteria / acceptance check',
    field('done_criteria'),
    '',
    ...(!isPlaceholder(classificationValue)
      ? ['### Classification', classificationValue, '']
      : []),
    '### Priority',
    field('priority'),
    '',
    '### Additional context',
    combinedAdditionalContext,
    '',
    '### Submission checks',
    '- [x] I searched existing issues and did not find an equivalent report.',
    '- [x] I provided enough detail for contributors and agents to reproduce and act.',
    '',
    marker,
  ].join('\n');

  const normalizedTitle = issueTitleRaw.replace(/^\[docs-page\]:\s*/i, '').trim();
  const finalTitle = `[docs-page]: ${normalizedTitle}`;

  const created = await github.rest.issues.create({
    owner,
    repo,
    title: finalTitle,
    body: issueBody,
    labels: baseLabels,
  });

  console.log(`Created issue #${created.data.number} for correlation_id=${correlationId}`);

  return {
    status: 'created',
    issue_number: created.data.number,
    issue_url: created.data.html_url,
    correlation_id: correlationId,
  };
};
