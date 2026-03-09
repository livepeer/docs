#!/usr/bin/env node
/**
 * @script            project-showcase-sync
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             .github/scripts
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement Fetches project showcase data from external source, writes to snippets/automations/showcase/
 * @pipeline          P5, P6
 * @usage             node .github/scripts/project-showcase-sync.js [flags]
 */
/*
 * Project Showcase sync job for GitHub Actions.
 *
 * Modes:
 * - poll: process new submissions + pending review decisions from Sheets
 * - dispatch: process one decision from repository_dispatch payload
 */

const crypto = require('crypto');
const fs = require('fs');

const REQUIRED_ENVS = [
  'GOOGLE_SERVICE_ACCOUNT_JSON',
  'GOOGLE_SHEET_ID',
  'DISCORD_BOT_TOKEN',
  'DISCORD_REVIEWER_USER_ID'
];

const cfg = {
  mode: process.env.SHOWCASE_SYNC_MODE || 'poll',
  googleSheetId: process.env.GOOGLE_SHEET_ID,
  submissionsSheetName: process.env.SUBMISSIONS_SHEET_NAME || 'Form Responses 1',
  submissionsSheetUrl: process.env.SUBMISSIONS_SHEET_URL || '',
  reviewSheetName: process.env.REVIEW_SHEET_NAME || 'Review Responses',
  transformedSheetName: process.env.TRANSFORMED_SHEET_NAME || 'Transformed Responses',
  reviewProcessedColumn: process.env.REVIEW_PROCESSED_COLUMN || 'Processed',
  approvalFormBaseUrl: process.env.APPROVAL_FORM_BASE_URL || '',
  githubOwner: process.env.GITHUB_OWNER || process.env.GITHUB_REPOSITORY?.split('/')[0],
  githubRepo: process.env.GITHUB_REPO || process.env.GITHUB_REPOSITORY?.split('/')[1],
  githubDataBranch: process.env.GITHUB_DATA_BRANCH || 'docs-v2-preview',
  githubAssetsBranch: process.env.GITHUB_ASSETS_BRANCH || 'docs-v2-assets',
  showcaseDataPath:
    process.env.SHOWCASE_DATA_FILE_PATH || 'snippets/automations/showcase/showcaseData.jsx',
  showcaseAssetsBasePath:
    process.env.SHOWCASE_ASSETS_BASE_PATH || 'snippets/assets/domain/00_HOME/showcase',
  discordApiBaseUrl: process.env.DISCORD_API_BASE_URL || 'https://discord.com/api/v10',
  discordReviewerUserId: process.env.DISCORD_REVIEWER_USER_ID,
  githubToken: process.env.GITHUB_TOKEN,
  maxRowsPerRun: Number(process.env.MAX_ROWS_PER_RUN || 10)
};

const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}');

function log(msg, obj) {
  if (obj !== undefined) {
    console.log(msg, JSON.stringify(obj));
  } else {
    console.log(msg);
  }
}

function assertEnv() {
  const missing = REQUIRED_ENVS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }
  if (!cfg.githubOwner || !cfg.githubRepo || !cfg.githubToken) {
    throw new Error('Missing GitHub config: GITHUB_OWNER/GITHUB_REPO/GITHUB_TOKEN');
  }
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function sanitizePathSegment(input) {
  return String(input || '')
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || 'untitled-project';
}

function getDriveFileId(url) {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/uc\?export=download&id=([a-zA-Z0-9_-]+)/
  ];
  for (const p of patterns) {
    const m = String(url).match(p);
    if (m?.[1]) return m[1];
  }
  return null;
}

function isValidUrl(value) {
  try {
    new URL(String(value));
    return true;
  } catch {
    return false;
  }
}

function findHeader(headers, candidates) {
  const map = new Map(headers.map((h) => [String(h).toLowerCase().trim(), h]));
  for (const c of candidates) {
    const hit = map.get(String(c).toLowerCase().trim());
    if (hit) return hit;
  }
  return null;
}

function getCell(row, headers, candidates) {
  const header = findHeader(headers, candidates);
  if (!header) return '';
  return row[header] || '';
}

function toObjects(values) {
  if (!values.length) return { headers: [], rows: [] };
  const headers = values[0];
  const rows = values.slice(1).map((raw, i) => {
    const json = {};
    headers.forEach((h, idx) => {
      json[h] = raw[idx] || '';
    });
    json.__rowIndex = i + 2;
    return json;
  });
  return { headers, rows };
}

function colToA1(colIndexZeroBased) {
  let n = colIndexZeroBased + 1;
  let result = '';
  while (n > 0) {
    const rem = (n - 1) % 26;
    result = String.fromCharCode(65 + rem) + result;
    n = Math.floor((n - 1) / 26);
  }
  return result;
}

function parseDecision(raw) {
  const value = String(raw || '').trim().toLowerCase();
  if (['yes', 'approve', 'approved'].includes(value)) return 'yes';
  if (['no', 'deny', 'denied'].includes(value)) return 'no';
  return null;
}

async function getGoogleAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const unsignedToken = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(serviceAccount.private_key, 'base64url');
  const assertion = `${unsignedToken}.${signature}`;

  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion
  });

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });

  if (!res.ok) {
    throw new Error(`Failed to get Google access token: ${res.status} ${await res.text()}`);
  }

  return (await res.json()).access_token;
}

async function sheetsGetValues(accessToken, range) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${cfg.googleSheetId}/values/${encodeURIComponent(
    range
  )}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) {
    throw new Error(`Sheets read failed for ${range}: ${res.status} ${await res.text()}`);
  }
  return (await res.json()).values || [];
}

async function sheetsUpdateValue(accessToken, range, value) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${cfg.googleSheetId}/values/${encodeURIComponent(
    range
  )}?valueInputOption=RAW`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ values: [[value]] })
  });
  if (!res.ok) {
    throw new Error(`Sheets update failed for ${range}: ${res.status} ${await res.text()}`);
  }
}

async function sheetsBatchUpdate(accessToken, updates) {
  if (!updates.length) return;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${cfg.googleSheetId}/values:batchUpdate`;
  const body = {
    valueInputOption: 'RAW',
    data: updates.map((u) => ({ range: u.range, values: [[u.value]] }))
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`Sheets batch update failed: ${res.status} ${await res.text()}`);
  }
}

async function sheetsAppendRow(accessToken, sheetName, rowValues) {
  const range = `${sheetName}!A:ZZ`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${cfg.googleSheetId}/values/${encodeURIComponent(
    range
  )}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ values: [rowValues] })
  });
  if (!res.ok) {
    throw new Error(`Sheets append failed for ${sheetName}: ${res.status} ${await res.text()}`);
  }
}

async function discordCreateDm(userId) {
  const res = await fetch(`${cfg.discordApiBaseUrl}/users/@me/channels`, {
    method: 'POST',
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ recipient_id: userId })
  });
  if (!res.ok) {
    throw new Error(`Discord create DM failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()).id;
}

async function discordSendMessage(channelId, content) {
  const res = await fetch(`${cfg.discordApiBaseUrl}/channels/${channelId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content })
  });
  if (!res.ok) {
    throw new Error(`Discord send failed: ${res.status} ${await res.text()}`);
  }
}

async function notifyReviewer(message) {
  const dm = await discordCreateDm(cfg.discordReviewerUserId);
  await discordSendMessage(dm, message);
}

async function notifySubmitter(discordId, message) {
  if (!discordId) return;
  const dm = await discordCreateDm(discordId);
  await discordSendMessage(dm, message);
}

function encodeGitHubContentPath(path) {
  return String(path)
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

async function githubGetFile(path, branch) {
  const encodedPath = encodeGitHubContentPath(path);
  const url = `https://api.github.com/repos/${cfg.githubOwner}/${cfg.githubRepo}/contents/${encodedPath}?ref=${encodeURIComponent(
    branch
  )}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${cfg.githubToken}`,
      Accept: 'application/vnd.github+json'
    }
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`GitHub read failed (${path}@${branch}): ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function githubPutFile(path, branch, contentBase64, message, sha) {
  const encodedPath = encodeGitHubContentPath(path);
  const url = `https://api.github.com/repos/${cfg.githubOwner}/${cfg.githubRepo}/contents/${encodedPath}`;
  const body = { message, content: contentBase64, branch };
  if (sha) body.sha = sha;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${cfg.githubToken}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error(`GitHub write failed (${path}@${branch}): ${res.status} ${await res.text()}`);
  }

  return res.json();
}

async function githubUpsertText(path, branch, text, message) {
  const existing = await githubGetFile(path, branch);
  const out = await githubPutFile(
    path,
    branch,
    Buffer.from(text).toString('base64'),
    message,
    existing?.sha
  );
  return out?.content?.download_url || null;
}

async function githubUpsertBinary(path, branch, buffer, message) {
  const existing = await githubGetFile(path, branch);
  const out = await githubPutFile(path, branch, buffer.toString('base64'), message, existing?.sha);
  return out?.content?.download_url || null;
}

async function downloadAsset(accessToken, inputUrl) {
  const driveId = getDriveFileId(inputUrl);
  const url = driveId
    ? `https://www.googleapis.com/drive/v3/files/${driveId}?alt=media`
    : String(inputUrl);

  const headers = {};
  if (driveId) headers.Authorization = `Bearer ${accessToken}`;

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Asset download failed (${inputUrl}): ${res.status} ${await res.text()}`);
  }
  const arr = await res.arrayBuffer();
  return Buffer.from(arr);
}

function parseLinks(submission, headers) {
  const linkFields = {
    'Github URL': 'github',
    'X / Twitter URL': 'twitter',
    'Discord Invite URL': 'discord',
    'Youtube Channel URL': 'youtube',
    'Telegram URL': 'telegram',
    'Instagram URL': 'instagram',
    'Blog Site URL': 'blog',
    'LinkedIn URL': 'linkedin',
    'Whatsapp URL': 'whatsapp',
    'Reddit URL': 'reddit',
    'Bluesky URL': 'bluesky',
    'Twitch URL': 'twitch',
    'Other URL? ': 'other',
    'Project Website': 'website',
    'Email Contact (user facing)': 'email'
  };

  const links = [];
  for (const [source, key] of Object.entries(linkFields)) {
    const val = getCell(submission, headers, [source]);
    if (val && String(val).trim()) links.push({ [key]: String(val).trim() });
  }
  return links;
}

function validateSubmission(submission, headers) {
  const errors = [];
  const required = [
    ['Project Name'],
    ['Project Tagline'],
    ['Project Description'],
    ['Discord ID', 'Discord ID '],
    ['Project Website'],
    ['Project Logo']
  ];

  for (const aliases of required) {
    const value = getCell(submission, headers, aliases);
    if (!String(value || '').trim()) {
      errors.push(`Missing required field: ${aliases[0]}`);
    }
  }

  const projectUrl = getCell(submission, headers, ['Project Website']);
  const mediaUrl = getCell(submission, headers, ['Hero Media File']);
  const logoUrl = getCell(submission, headers, ['Project Logo']);

  if (projectUrl && !isValidUrl(projectUrl)) errors.push('Invalid project URL');
  if (mediaUrl && !isValidUrl(mediaUrl)) errors.push('Invalid media source URL');
  if (logoUrl && !isValidUrl(logoUrl)) errors.push('Invalid logo URL');

  const links = parseLinks(submission, headers);
  for (const obj of links) {
    const [k, v] = Object.entries(obj)[0];
    if (v && k !== 'email' && !isValidUrl(v)) errors.push(`Invalid ${k} link`);
  }

  return errors;
}

function buildSubmissionId(submission, headers) {
  const ts = String(getCell(submission, headers, ['Timestamp']));
  return ts.replace(/[^0-9]/g, '') || `${Date.now()}`;
}

function transformSubmission(submission, headers) {
  const categoryTags = String(getCell(submission, headers, ['Project Category']) || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const productTags = String(getCell(submission, headers, ['Livepeer Platforms Used']) || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const rawMediaType = String(getCell(submission, headers, ['Media File Type']) || '').toLowerCase();
  const mediaType = rawMediaType === 'video / gif' || rawMediaType === 'video' ? 'video' : 'image';

  const showcaseObject = {
    title: String(getCell(submission, headers, ['Project Name']) || ''),
    subtitle: String(getCell(submission, headers, ['Project Tagline']) || ''),
    href: String(getCell(submission, headers, ['Project Website']) || ''),
    mediaSrc: String(getCell(submission, headers, ['Hero Media File']) || ''),
    mediaType,
    logo: String(getCell(submission, headers, ['Project Logo']) || ''),
    categoryTags,
    productTags,
    description: `${String(getCell(submission, headers, ['Project Description']) || '')} ${String(
      getCell(submission, headers, ['How your project leverages Livepeer']) || ''
    )}`.trim(),
    cta: String(getCell(submission, headers, ['Call to Action (CTA)']) || ''),
    links: parseLinks(submission, headers)
  };

  const submissionId = buildSubmissionId(submission, headers);

  return {
    submissionId,
    timestamp: getCell(submission, headers, ['Timestamp']),
    email: getCell(submission, headers, ['Email address']),
    discordId: getCell(submission, headers, ['Discord ID', 'Discord ID ']),
    editLink: getCell(submission, headers, ['Edit URL']),
    livepeerUsage: getCell(submission, headers, ['How your project leverages Livepeer']),
    projectStatus: getCell(submission, headers, ['Current Project Status (Beta, pre-release)']),
    projectRoadmap: getCell(submission, headers, ['Project Roadmap (6-12 month vision)']),
    helpRequest: getCell(submission, headers, ['What help would you like from Livepeer?']),
    other: getCell(submission, headers, ["Something didn't work? Leave us a message"]),
    showcaseObject
  };
}

function mappedRowFromTransformed(headers, transformed) {
  const row = headers.map(() => '');
  const set = (aliases, value) => {
    const h = findHeader(headers, aliases);
    if (!h) return;
    row[headers.indexOf(h)] = value == null ? '' : String(value);
  };

  set(['approved'], 'no');
  set(['submissionId', 'submissionid'], transformed.submissionId);
  set(['timestamp'], transformed.timestamp);
  set(['email'], transformed.email);
  set(['discordId', 'discord id'], transformed.discordId);
  set(['title'], transformed.showcaseObject.title);
  set(['subtitle'], transformed.showcaseObject.subtitle);
  set(['href'], transformed.showcaseObject.href);
  set(['mediaSrc'], transformed.showcaseObject.mediaSrc);
  set(['mediaType'], transformed.showcaseObject.mediaType);
  set(['logo'], transformed.showcaseObject.logo);
  set(['categoryTags'], JSON.stringify(transformed.showcaseObject.categoryTags));
  set(['productTags'], JSON.stringify(transformed.showcaseObject.productTags));
  set(['description'], transformed.showcaseObject.description);
  set(['cta'], transformed.showcaseObject.cta);
  set(['links'], JSON.stringify(transformed.showcaseObject.links));
  set(['editLink', 'edit url'], transformed.editLink);
  set(['showcaseJSX', 'showcasejsx'], JSON.stringify(transformed.showcaseObject));
  set(['Livepeer Usage'], transformed.livepeerUsage);
  set(['Project Status'], transformed.projectStatus);
  set(['Project Roadmap'], transformed.projectRoadmap);
  set(['Help Request'], transformed.helpRequest);
  set(['Other'], transformed.other);

  return row;
}

function buildShowcaseDataFile(rows, approvedHeader) {
  const approvedRows = rows.filter((r) => String(r[approvedHeader]).trim().toLowerCase() === 'yes');
  const data = approvedRows
    .map((r) => {
      try {
        return JSON.parse(r.showcaseJSX || '{}');
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  return {
    count: data.length,
    content: `export const showcaseData = ${JSON.stringify(data, null, 2)};\n`
  };
}

function parseDispatchPayload() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath || !fs.existsSync(eventPath)) {
    throw new Error('GITHUB_EVENT_PATH missing for dispatch mode');
  }
  const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
  const payload = event.client_payload || {};
  return {
    submissionId: String(payload.submissionId || '').trim(),
    decision: parseDecision(payload.approved),
    reason: payload.reason || ''
  };
}

async function processNewSubmissions(accessToken, submissions, transformedSheet) {
  const transformedIdHeader = findHeader(transformedSheet.headers, ['submissionId', 'submissionid']);
  if (!transformedIdHeader) throw new Error('Transformed sheet missing submissionId column');
  const existingIds = new Set(
    transformedSheet.rows.map((r) => String(r[transformedIdHeader] || '').trim()).filter(Boolean)
  );

  const pending = submissions.rows.filter((r) => !existingIds.has(buildSubmissionId(r, submissions.headers)));
  const work = pending.slice(0, cfg.maxRowsPerRun);
  log(`Pending new submissions: ${work.length}`);

  for (const row of work) {
    const transformed = transformSubmission(row, submissions.headers);
    const errors = validateSubmission(row, submissions.headers);

    if (errors.length > 0) {
      await notifySubmitter(
        transformed.discordId,
        `Your project **${transformed.showcaseObject.title || transformed.submissionId}** has validation errors:\n- ${errors.join(
          '\n- '
        )}\n\nPlease update and resubmit.${
          transformed.editLink ? `\nEdit link: ${transformed.editLink}` : ''
        }`
      );
      continue;
    }

    const appendRow = mappedRowFromTransformed(transformedSheet.headers, transformed);
    await sheetsAppendRow(accessToken, cfg.transformedSheetName, appendRow);

    const approveLink = cfg.approvalFormBaseUrl
      ? `${cfg.approvalFormBaseUrl}?entry.1590946104=${encodeURIComponent(
          transformed.submissionId
        )}&entry.927100349=Approve`
      : '(configure APPROVAL_FORM_BASE_URL)';
    const denyLink = cfg.approvalFormBaseUrl
      ? `${cfg.approvalFormBaseUrl}?entry.1590946104=${encodeURIComponent(
          transformed.submissionId
        )}&entry.927100349=Deny`
      : '(configure APPROVAL_FORM_BASE_URL)';

    const reviewerMsg = [
      '🚀 New project submission pending approval',
      `Project: ${transformed.showcaseObject.title}`,
      `Tagline: ${transformed.showcaseObject.subtitle}`,
      `Submitter: ${transformed.email} (<@${transformed.discordId}>)`,
      `Submission ID: ${transformed.submissionId}`,
      `Approve: ${approveLink}`,
      `Deny: ${denyLink}`,
      `View responses: ${cfg.submissionsSheetUrl || '(configure SUBMISSIONS_SHEET_URL)'}`
    ].join('\n');

    await notifyReviewer(reviewerMsg);
  }
}

async function processDecision(accessToken, transformedSheet, reviewHeaders, decisionCtx) {
  const { submissionId, decision, reason, reviewRow } = decisionCtx;
  const headers = transformedSheet.headers;
  const rows = transformedSheet.rows;

  const submissionIdHeader = findHeader(headers, ['submissionId', 'submissionid']);
  const approvedHeader = findHeader(headers, ['approved']);
  const discordIdHeader = findHeader(headers, ['discordId', 'discord id']);
  const titleHeader = findHeader(headers, ['title']);
  const editLinkHeader = findHeader(headers, ['editLink', 'edit url']);
  const mediaHeader = findHeader(headers, ['mediaSrc']);
  const logoHeader = findHeader(headers, ['logo']);
  const showcaseHeader = findHeader(headers, ['showcaseJSX', 'showcasejsx']);

  if (!submissionIdHeader || !approvedHeader || !showcaseHeader) {
    throw new Error('Transformed sheet missing required columns (submissionId, approved, showcaseJSX)');
  }

  const target = rows.find((r) => String(r[submissionIdHeader]).trim() === submissionId);
  if (!target) throw new Error(`No transformed row found for submissionId=${submissionId}`);

  const title = target[titleHeader] || submissionId;
  const discordId = target[discordIdHeader] || '';
  const editLink = target[editLinkHeader] || '';

  const updates = [];
  const approvedRange = `${cfg.transformedSheetName}!${colToA1(headers.indexOf(approvedHeader))}${target.__rowIndex}`;
  updates.push({ range: approvedRange, value: decision === 'yes' ? 'yes' : 'no' });

  if (decision === 'yes') {
    const safeTitle = sanitizePathSegment(title);
    const mediaSrc = String(target[mediaHeader] || '');
    const logoSrc = String(target[logoHeader] || '');

    let uploadedMediaUrl = mediaSrc;
    let uploadedLogoUrl = logoSrc;

    if (mediaSrc && isValidUrl(mediaSrc)) {
      const mediaBuf = await downloadAsset(accessToken, mediaSrc);
      uploadedMediaUrl =
        (await githubUpsertBinary(
          `${cfg.showcaseAssetsBasePath}/${safeTitle}/mediaSrc`,
          cfg.githubAssetsBranch,
          mediaBuf,
          `chore(showcase-assets): update media for ${title}`
        )) || mediaSrc;
    }

    if (logoSrc && isValidUrl(logoSrc)) {
      const logoBuf = await downloadAsset(accessToken, logoSrc);
      uploadedLogoUrl =
        (await githubUpsertBinary(
          `${cfg.showcaseAssetsBasePath}/${safeTitle}/logo`,
          cfg.githubAssetsBranch,
          logoBuf,
          `chore(showcase-assets): update logo for ${title}`
        )) || logoSrc;
    }

    const showcaseObject = JSON.parse(String(target[showcaseHeader] || '{}'));
    showcaseObject.mediaSrc = uploadedMediaUrl;
    showcaseObject.logo = uploadedLogoUrl;

    if (mediaHeader) {
      updates.push({
        range: `${cfg.transformedSheetName}!${colToA1(headers.indexOf(mediaHeader))}${target.__rowIndex}`,
        value: uploadedMediaUrl
      });
    }
    if (logoHeader) {
      updates.push({
        range: `${cfg.transformedSheetName}!${colToA1(headers.indexOf(logoHeader))}${target.__rowIndex}`,
        value: uploadedLogoUrl
      });
    }
    updates.push({
      range: `${cfg.transformedSheetName}!${colToA1(headers.indexOf(showcaseHeader))}${target.__rowIndex}`,
      value: JSON.stringify(showcaseObject)
    });
  }

  await sheetsBatchUpdate(accessToken, updates);

  const refreshedValues = await sheetsGetValues(accessToken, `${cfg.transformedSheetName}!A:ZZ`);
  const refreshed = toObjects(refreshedValues);
  const refreshedApprovedHeader = findHeader(refreshed.headers, ['approved']);
  const built = buildShowcaseDataFile(refreshed.rows, refreshedApprovedHeader);
  await githubUpsertText(
    cfg.showcaseDataPath,
    cfg.githubDataBranch,
    built.content,
    `chore(showcase): sync approved projects (${built.count})`
  );

  if (decision === 'yes') {
    await notifyReviewer(`✅ Approved and published: **${title}** (${submissionId})`);
    await notifySubmitter(discordId, `✅ Your project **${title}** is approved and live in showcase.`);
  } else {
    await notifyReviewer(`❌ Denied: **${title}** (${submissionId})`);
    await notifySubmitter(
      discordId,
      `❌ Your project **${title}** was not approved.\nReason: ${reason || 'No reason provided.'}\n${
        editLink ? `Edit and resubmit: ${editLink}` : ''
      }`
    );
  }

  if (reviewRow) {
    const processedHeader = findHeader(reviewHeaders, [cfg.reviewProcessedColumn]);
    if (processedHeader) {
      await sheetsUpdateValue(
        accessToken,
        `${cfg.reviewSheetName}!${colToA1(reviewHeaders.indexOf(processedHeader))}${reviewRow.__rowIndex}`,
        'yes'
      );
    }
  }
}

async function processReviewDecisions(accessToken, reviewSheet, transformedSheet) {
  const reviewSubmissionIdHeader = findHeader(reviewSheet.headers, [
    'submissionId',
    'submissionid',
    'submissionId_2',
    'entry.1590946104'
  ]);
  const reviewDecisionHeader = findHeader(reviewSheet.headers, ['Approved?', 'approved', 'decision']);
  const reasonHeader = findHeader(reviewSheet.headers, [
    'Reason For Denial',
    'Information Required',
    'reason'
  ]);
  const processedHeader = findHeader(reviewSheet.headers, [cfg.reviewProcessedColumn]);

  if (!reviewSubmissionIdHeader || !reviewDecisionHeader) {
    throw new Error('Review sheet missing required columns: submissionId and Approved?');
  }

  const pending = reviewSheet.rows
    .filter((r) => {
      const processed = processedHeader ? String(r[processedHeader]).trim().toLowerCase() : '';
      return !processed || processed === 'no' || processed === 'false';
    })
    .filter((r) => !!parseDecision(r[reviewDecisionHeader]))
    .slice(0, cfg.maxRowsPerRun);

  log(`Pending review decisions: ${pending.length}`);

  for (const row of pending) {
    const submissionId = String(row[reviewSubmissionIdHeader] || '').trim();
    const decision = parseDecision(row[reviewDecisionHeader]);
    const reason = reasonHeader ? row[reasonHeader] : '';
    if (!submissionId || !decision) continue;

    await processDecision(accessToken, transformedSheet, reviewSheet.headers, {
      submissionId,
      decision,
      reason,
      reviewRow: row
    });
  }
}

async function runPollMode(accessToken) {
  const submissionsValues = await sheetsGetValues(accessToken, `${cfg.submissionsSheetName}!A:ZZ`);
  const reviewValues = await sheetsGetValues(accessToken, `${cfg.reviewSheetName}!A:ZZ`);
  const transformedValues = await sheetsGetValues(accessToken, `${cfg.transformedSheetName}!A:ZZ`);

  const submissions = toObjects(submissionsValues);
  const review = toObjects(reviewValues);
  const transformed = toObjects(transformedValues);

  await processNewSubmissions(accessToken, submissions, transformed);

  const transformedValuesAfter = await sheetsGetValues(accessToken, `${cfg.transformedSheetName}!A:ZZ`);
  const transformedAfter = toObjects(transformedValuesAfter);
  await processReviewDecisions(accessToken, review, transformedAfter);
}

async function runDispatchMode(accessToken) {
  const payload = parseDispatchPayload();
  if (!payload.submissionId || !payload.decision) {
    throw new Error('Dispatch payload must include submissionId and approved');
  }

  const reviewValues = await sheetsGetValues(accessToken, `${cfg.reviewSheetName}!A:ZZ`);
  const transformedValues = await sheetsGetValues(accessToken, `${cfg.transformedSheetName}!A:ZZ`);

  await processDecision(accessToken, toObjects(transformedValues), toObjects(reviewValues).headers, {
    submissionId: payload.submissionId,
    decision: payload.decision,
    reason: payload.reason,
    reviewRow: null
  });
}

async function main() {
  assertEnv();
  if (!serviceAccount.client_email || !serviceAccount.private_key) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON must include client_email and private_key');
  }

  const accessToken = await getGoogleAccessToken();

  if (cfg.mode === 'dispatch') {
    await runDispatchMode(accessToken);
  } else {
    await runPollMode(accessToken);
  }

  log('Project showcase sync completed');
}

main().catch(async (err) => {
  console.error(err);
  try {
    await notifyReviewer(`⚠️ Project showcase sync failed: ${err.message}`);
  } catch (notifyErr) {
    console.error('Failed to notify reviewer about error:', notifyErr.message);
  }
  process.exit(1);
});
