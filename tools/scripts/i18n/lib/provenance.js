/**
 * @script            provenance
 * @category          utility
 * @purpose           feature:translation
 * @scope             tools/scripts
 * @owner             docs
 * @needs             F-R6, F-R7
 * @purpose-statement Translation provenance tracker — records source, timestamp, and provider for each translated segment
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/scripts/i18n/lib/provenance.js [flags]
 */
const crypto = require('crypto');

const PROVENANCE_PREFIX = 'codex-i18n';

function sha256(value) {
  return crypto.createHash('sha256').update(String(value || ''), 'utf8').digest('hex');
}

function buildProvenanceComment(metadata) {
  const payload = {
    kind: PROVENANCE_PREFIX,
    version: 1,
    ...metadata
  };
  const encoded = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64');
  return `{/* ${PROVENANCE_PREFIX}: ${encoded} */}`;
}

function parseProvenanceComment(content) {
  const source = String(content || '');
  const jsxMatch = source.match(new RegExp(`\\{\\/\\*\\s*${PROVENANCE_PREFIX}:\\s*([A-Za-z0-9+/=]+)\\s*\\*\\/\\}`));
  if (jsxMatch) {
    try {
      const decoded = Buffer.from(jsxMatch[1], 'base64').toString('utf8');
      const parsed = JSON.parse(decoded);
      if (parsed && parsed.kind === PROVENANCE_PREFIX) return parsed;
    } catch (_err) {
      return null;
    }
  }

  const legacyHtmlMatch = source.match(new RegExp(`<!--\\s*${PROVENANCE_PREFIX}:\\s*(\\{[\\s\\S]*?\\})\\s*-->`));
  if (legacyHtmlMatch) {
    try {
      const parsed = JSON.parse(legacyHtmlMatch[1]);
      if (parsed && parsed.kind === PROVENANCE_PREFIX) return parsed;
    } catch (_err) {
      return null;
    }
  }

  return null;
}

function classifyLocalizedArtifactProvenance(provenance) {
  if (!provenance || typeof provenance !== 'object') {
    return {
      provenancePresent: false,
      provenanceKind: '',
      provider: '',
      modelUsed: '',
      sourceHash: '',
      artifactClass: 'existing_unknown'
    };
  }

  const provider = String(provenance.provider || '').trim().toLowerCase();
  let artifactClass = 'translated_real';
  if (provider === 'mock') artifactClass = 'translated_mock';
  if (!provider) artifactClass = 'existing_unknown';

  return {
    provenancePresent: true,
    provenanceKind: String(provenance.kind || ''),
    provider,
    modelUsed: String(provenance.model || ''),
    sourceHash: String(provenance.sourceHash || ''),
    artifactClass
  };
}

function injectOrReplaceProvenanceComment(content, comment) {
  const source = String(content || '');
  const hasFrontmatter = source.startsWith('---\n') || source.startsWith('---\r\n');
  const provenancePattern = new RegExp(
    `(?:<!--\\s*${PROVENANCE_PREFIX}:[\\s\\S]*?-->|\\{\\/\\*\\s*${PROVENANCE_PREFIX}:\\s*[A-Za-z0-9+/=]+\\s*\\*\\/\\})`
  );
  if (!hasFrontmatter) {
    if (provenancePattern.test(source)) {
      return source.replace(provenancePattern, comment);
    }
    return `${comment}\n${source}`;
  }

  const end = findFrontmatterEndOffset(source);
  if (end < 0) {
    return `${comment}\n${source}`;
  }

  const before = source.slice(0, end);
  const after = source.slice(end);
  const replacedAfter = after.replace(
    new RegExp(
      `^\\s*(?:<!--\\s*${PROVENANCE_PREFIX}:[\\s\\S]*?-->|\\{\\/\\*\\s*${PROVENANCE_PREFIX}:\\s*[A-Za-z0-9+/=]+\\s*\\*\\/\\})\\s*\\n?`
    ),
    ''
  );
  const prefix = before.endsWith('\n') ? before : `${before}\n`;
  return `${prefix}${comment}\n${replacedAfter.replace(/^\n*/, '')}`;
}

function findFrontmatterEndOffset(content) {
  const text = String(content || '');
  if (!text.startsWith('---')) return -1;
  const lineBreak = text.includes('\r\n') ? '\r\n' : '\n';
  const marker = `${lineBreak}---`;
  const markerIndex = text.indexOf(marker, 3);
  if (markerIndex < 0) return -1;
  const afterMarker = markerIndex + marker.length;
  if (text.startsWith(lineBreak, afterMarker)) return afterMarker + lineBreak.length;
  return afterMarker;
}

module.exports = {
  classifyLocalizedArtifactProvenance,
  buildProvenanceComment,
  injectOrReplaceProvenanceComment,
  parseProvenanceComment,
  sha256
};
