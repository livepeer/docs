/**
 * @script            generated-file-banners
 * @category          utility
 * @purpose           governance:index-management
 * @scope             full-repo
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Generated file banner template — provides standard banner text for auto-generated files
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/lib/generated-file-banners.js [flags]
 */
const GENERATED_HIDDEN_MARKER = 'generated-file-banner:v1';

function normalizeInline(value) {
  return String(value || '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeYamlSingle(value) {
  return String(value || '').replace(/'/g, "''");
}

function asQuotedYaml(value) {
  return `'${escapeYamlSingle(value)}'`;
}

function parseFrontmatter(content) {
  const raw = String(content || '');
  if (!raw.startsWith('---')) {
    return {
      hasFrontmatter: false,
      frontmatter: '',
      body: raw
    };
  }

  const lineBreak = raw.includes('\r\n') ? '\r\n' : '\n';
  const marker = `${lineBreak}---`;
  const markerIndex = raw.indexOf(marker, 3);
  if (markerIndex < 0) {
    return {
      hasFrontmatter: false,
      frontmatter: '',
      body: raw
    };
  }

  const frontmatter = raw.slice(0, markerIndex + marker.length);
  let body = raw.slice(markerIndex + marker.length);
  if (body.startsWith(lineBreak)) body = body.slice(lineBreak.length);

  return {
    hasFrontmatter: true,
    frontmatter,
    body
  };
}

function buildGeneratedFrontmatterLines(options = {}) {
  const title = normalizeInline(options.title);
  const sidebarTitle = normalizeInline(options.sidebarTitle);
  const description = normalizeInline(options.description);
  const pageType = normalizeInline(options.pageType);
  const keywords = Array.isArray(options.keywords) ? options.keywords.map((item) => normalizeInline(item)).filter(Boolean) : [];
  const keywordsStyle = options.keywordsStyle === 'multiline' ? 'multiline' : 'inline';
  const lines = ['---'];

  if (title) lines.push(`title: ${asQuotedYaml(title)}`);
  if (sidebarTitle) lines.push(`sidebarTitle: ${asQuotedYaml(sidebarTitle)}`);
  if (description) lines.push(`description: ${asQuotedYaml(description)}`);
  if (pageType) lines.push(`pageType: ${pageType}`);

  if (keywords.length > 0) {
    if (keywordsStyle === 'multiline') {
      lines.push('keywords:');
      lines.push('  [');
      keywords.forEach((keyword) => {
        lines.push(`    ${asQuotedYaml(keyword)},`);
      });
      lines.push('  ]');
    } else {
      lines.push(`keywords: [${keywords.map((keyword) => asQuotedYaml(keyword)).join(', ')}]`);
    }
  }

  lines.push('---');
  return lines;
}

function buildGeneratedHiddenBannerLines(details = {}) {
  const marker = normalizeInline(details.marker) || GENERATED_HIDDEN_MARKER;
  return [
    '{/*',
    `generated-file-banner: ${marker}`,
    `Generation Script: ${normalizeInline(details.script)}`,
    `Purpose: ${normalizeInline(details.purpose)}`,
    `Run when: ${normalizeInline(details.runWhen)}`,
    `Run command: ${normalizeInline(details.runCommand)}`,
    '*/}'
  ];
}

function buildGeneratedNoteLines(details = {}) {
  return [
    '<Note>',
    `**Generation Script**: This file is generated from script(s): \`${normalizeInline(details.script)}\`. <br/>`,
    `**Purpose**: ${normalizeInline(details.purpose)} <br/>`,
    `**Run when**: ${normalizeInline(details.runWhen)} <br/>`,
    `**Important**: Do not manually edit this file; run \`${normalizeInline(details.runCommand)}\`. <br/>`,
    '</Note>'
  ];
}

function parseGeneratedHiddenBanner(content) {
  const parsed = parseFrontmatter(content);
  const body = String(parsed.body || '');
  const commentRe = /\{\/\*([\s\S]*?)\*\/\}/g;
  let match;
  while ((match = commentRe.exec(body)) !== null) {
    const lines = match[1]
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    const map = new Map();
    lines.forEach((line) => {
      const idx = line.indexOf(':');
      if (idx < 0) return;
      const key = line.slice(0, idx).trim().toLowerCase();
      const value = line.slice(idx + 1).trim();
      map.set(key, value);
    });

    if (!map.has('generated-file-banner')) continue;

    return {
      found: true,
      marker: map.get('generated-file-banner') || '',
      script: map.get('generation script') || '',
      purpose: map.get('purpose') || '',
      runWhen: map.get('run when') || '',
      runCommand: map.get('run command') || '',
      raw: match[0]
    };
  }

  return {
    found: false,
    marker: '',
    script: '',
    purpose: '',
    runWhen: '',
    runCommand: '',
    raw: ''
  };
}

function hasGeneratedNote(content) {
  return /<Note>[\s\S]*?\*\*Generation Script\*\*:[\s\S]*?<\/Note>/m.test(String(content || ''));
}

function extractGeneratedNote(content) {
  const match = String(content || '').match(/<Note>[\s\S]*?\*\*Generation Script\*\*:[\s\S]*?<\/Note>/m);
  return match ? match[0] : '';
}

function removeGeneratedNotes(content) {
  return String(content || '').replace(/<Note>[\s\S]*?\*\*Generation Script\*\*:[\s\S]*?<\/Note>\s*/gm, '');
}

function hasFrontmatterKey(content, key) {
  const parsed = parseFrontmatter(content);
  if (!parsed.hasFrontmatter) return false;
  const re = new RegExp(`^\\s*${key}\\s*:`, 'm');
  return re.test(parsed.frontmatter);
}

module.exports = {
  GENERATED_HIDDEN_MARKER,
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines,
  parseFrontmatter,
  parseGeneratedHiddenBanner,
  hasGeneratedNote,
  extractGeneratedNote,
  removeGeneratedNotes,
  hasFrontmatterKey
};
