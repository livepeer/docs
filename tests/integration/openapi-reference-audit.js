#!/usr/bin/env node
/**
 * @script            openapi-reference-audit
 * @category          validator
 * @purpose           tooling:api-spec
 * @scope             tests/integration, v2, api, .github/workflows
 * @owner             docs
 * @needs             F-R17
 * @purpose-statement Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes.
 * @pipeline          P2, P3, P5, P6
 * @dualmode          --strict (enforcer) | --fix (remediator)
 * @usage             node tests/integration/openapi-reference-audit.js [flags]
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { execSync } = require('child_process');

const FINDING_TYPES = {
  INVALID_REFERENCE_FORMAT: 'invalid-reference-format',
  MISSING_SPEC_MAPPING: 'missing-spec-mapping',
  SPEC_LOAD_ERROR: 'spec-load-error',
  ENDPOINT_NOT_FOUND: 'endpoint-not-found-in-spec',
  INTRA_FILE_MISMATCH: 'intra-file-openapi-mismatch'
};

const HTTP_METHODS = new Set(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE']);

const DEFAULT_REPORT = 'tasks/reports/openapi-reference/openapi-reference-audit.md';
const DEFAULT_REPORT_JSON = 'tasks/reports/openapi-reference/openapi-reference-audit.json';

const SPEC_BY_KEY = {
  studio: 'api/studio.yaml',
  ai: 'api/openapi.yaml',
  cliHttp: 'api/cli-http.yaml'
};

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function relFromRoot(absPath) {
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function isExcludedV2ExperimentalPath(relPath) {
  const rel = toPosix(relPath).replace(/^\/+/, '');
  if (!rel.startsWith('v2/')) return false;
  return rel.split('/').some((segment) => segment.toLowerCase().startsWith('x-'));
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dirPath, entry.name);
    const rel = relFromRoot(abs);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      if (rel.startsWith('v2/') && isExcludedV2ExperimentalPath(rel)) continue;
      walkFiles(abs, out);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      if (rel.startsWith('v2/') && !isExcludedV2ExperimentalPath(rel)) {
        out.push(abs);
      }
    }
  }
  return out;
}

function normalizePath(rawPath) {
  const trimmed = String(rawPath || '').trim();
  if (!trimmed) return '';
  return `/${trimmed.replace(/^\/+/, '')}`;
}

function normalizeMethod(rawMethod) {
  return String(rawMethod || '').trim().toUpperCase();
}

function normalizeEndpoint(method, endpointPath) {
  const normalizedMethod = normalizeMethod(method);
  const normalizedPath = normalizePath(endpointPath);
  if (!HTTP_METHODS.has(normalizedMethod) || !normalizedPath) {
    return null;
  }
  return {
    method: normalizedMethod,
    path: normalizedPath,
    key: `${normalizedMethod} ${normalizedPath}`
  };
}

function parseMethodPathValue(rawValue) {
  const text = String(rawValue || '').trim();
  const match = text.match(/^([A-Za-z]+)\s+(.+)$/);
  if (!match) return null;
  return normalizeEndpoint(match[1], match[2]);
}

function isVersionLiteral(value) {
  return /^\d+\.\d+(?:\.\d+)?$/.test(String(value || '').trim());
}

function isSpecPointer(value) {
  const text = String(value || '').trim().toLowerCase();
  return /\.ya?ml$/.test(text) || /\.json$/.test(text);
}

function isIgnoredFrontmatterOpenapiValue(value) {
  return isVersionLiteral(value) || isSpecPointer(value);
}

function parseArgs(argv) {
  const args = {
    mode: 'full',
    files: [],
    strict: false,
    fix: false,
    write: false,
    report: path.join(REPO_ROOT, DEFAULT_REPORT),
    reportJson: path.join(REPO_ROOT, DEFAULT_REPORT_JSON)
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--full') {
      args.mode = 'full';
    } else if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => args.files.push(part));
      }
      i += 1;
    } else if (token === '--strict') {
      args.strict = true;
    } else if (token === '--fix') {
      args.fix = true;
    } else if (token === '--write') {
      args.write = true;
    } else if (token === '--report') {
      args.report = path.resolve(REPO_ROOT, String(argv[i + 1] || ''));
      i += 1;
    } else if (token === '--report-json') {
      args.reportJson = path.resolve(REPO_ROOT, String(argv[i + 1] || ''));
      i += 1;
    } else {
      throw new Error(`Unknown option: ${token}`);
    }
  }

  args.files = [...new Set(args.files)];
  if (args.files.length > 0) {
    args.mode = 'files';
  }

  if (args.write && !args.fix) {
    throw new Error('--write requires --fix');
  }

  return args;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return {
      exists: false,
      raw: '',
      data: null,
      startIndex: -1,
      endIndex: -1,
      lineOffset: 0,
      parseError: null
    };
  }

  let data = null;
  let parseError = null;
  try {
    data = yaml.load(match[1]);
  } catch (error) {
    parseError = error.message;
  }

  const lineOffset = content.slice(0, match.index).split('\n').length - 1;

  return {
    exists: true,
    raw: match[1],
    data,
    startIndex: match.index,
    endIndex: match.index + match[0].length,
    lineOffset,
    parseError
  };
}

function getFrontmatterOpenapiLine(frontmatter) {
  if (!frontmatter.exists) return 1;
  const lines = frontmatter.raw.split('\n');
  const openapiIndex = lines.findIndex((line) => /^\s*openapi\s*:/.test(line));
  if (openapiIndex === -1) return frontmatter.lineOffset + 1;
  return frontmatter.lineOffset + openapiIndex + 2;
}

function extractOpenApiTags(content) {
  const tags = [];
  const regex = /<OpenAPI\b[^>]*>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    tags.push({
      tag: match[0],
      startIndex: match.index,
      line: content.slice(0, match.index).split('\n').length
    });
  }
  return tags;
}

function extractQuotedAttr(tag, attrName) {
  const regex = new RegExp(`\\b${attrName}\\s*=\\s*(["'])(.*?)\\1`, 'i');
  const match = tag.match(regex);
  if (!match) return null;
  return {
    value: match[2],
    quote: match[1]
  };
}

function replaceQuotedAttr(tag, attrName, nextValue) {
  const regex = new RegExp(`(\\b${attrName}\\s*=\\s*)(["'])(.*?)(\\2)`, 'i');
  return tag.replace(regex, (_full, prefix, quote) => `${prefix}${quote}${nextValue}${quote}`);
}

function parseOpenApiTagReference(tag) {
  const pathAttr = extractQuotedAttr(tag, 'path');
  const methodAttr = extractQuotedAttr(tag, 'method');

  if (!pathAttr) {
    return {
      valid: false,
      reason: 'OpenAPI component is missing required path attribute.'
    };
  }

  if (methodAttr) {
    const endpoint = normalizeEndpoint(methodAttr.value, pathAttr.value);
    if (!endpoint) {
      return {
        valid: false,
        reason: `Could not parse method/path from <OpenAPI path=... method=...>: method="${methodAttr.value}" path="${pathAttr.value}".`
      };
    }
    return {
      valid: true,
      endpoint,
      rawReference: `${methodAttr.value} ${pathAttr.value}`,
      mode: 'path-and-method',
      pathAttr,
      methodAttr
    };
  }

  const endpoint = parseMethodPathValue(pathAttr.value);
  if (!endpoint) {
    return {
      valid: false,
      reason: `Could not parse endpoint from <OpenAPI path="${pathAttr.value}">. Expected "METHOD /path" or provide method attribute.`
    };
  }

  return {
    valid: true,
    endpoint,
    rawReference: pathAttr.value,
    mode: 'path-only',
    pathAttr,
    methodAttr: null
  };
}

function resolveSpecForFile(relPath) {
  const file = toPosix(relPath);

  if (/^v2(?:\/(?:es|fr|cn))?\/solutions\/livepeer-studio\/api-reference\//.test(file)) {
    return SPEC_BY_KEY.studio;
  }

  if (/^v2(?:\/(?:es|fr|cn))?\/gateways\/references\/api-reference\/AI-API\//.test(file)) {
    return SPEC_BY_KEY.ai;
  }

  if (/^v2(?:\/(?:es|fr|cn))?\/gateways\/references\/api-reference\/AI-Worker\//.test(file)) {
    return SPEC_BY_KEY.ai;
  }

  if (/^v2(?:\/(?:es|fr|cn))?\/gateways\/references\/api-reference\/CLI-HTTP\//.test(file)) {
    return SPEC_BY_KEY.cliHttp;
  }

  if (/^v2(?:\/(?:es|fr|cn))?\/gateways\/references\/api-reference\/(?:ai-worker-api|health|hardware-info|hardware-stats)\.mdx$/.test(file)) {
    return SPEC_BY_KEY.ai;
  }

  return null;
}

function buildEndpointSetFromSpec(specPath) {
  const absPath = path.join(REPO_ROOT, specPath);
  const raw = fs.readFileSync(absPath, 'utf8');
  const parsed = yaml.load(raw);
  const endpointSet = new Set();

  const pathsObject = parsed && typeof parsed === 'object' ? parsed.paths : null;
  if (!pathsObject || typeof pathsObject !== 'object') {
    return endpointSet;
  }

  Object.entries(pathsObject).forEach(([pathKey, methods]) => {
    if (!methods || typeof methods !== 'object') return;
    Object.keys(methods).forEach((methodKey) => {
      const endpoint = normalizeEndpoint(methodKey, pathKey);
      if (endpoint) {
        endpointSet.add(endpoint.key);
      }
    });
  });

  return endpointSet;
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function renderMarkdownReport(result) {
  const lines = [];
  lines.push('# OpenAPI Reference Audit');
  lines.push('');
  lines.push(`Generated: ${result.generatedAt}`);
  lines.push(`Mode: ${result.mode}`);
  lines.push(`Strict: ${result.strict ? 'true' : 'false'}`);
  lines.push(`Fix enabled: ${result.fix ? 'true' : 'false'}`);
  lines.push(`Write enabled: ${result.write ? 'true' : 'false'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files analyzed: ${result.summary.totalFiles}`);
  lines.push(`- OpenAPI references: ${result.summary.totalReferences}`);
  lines.push(`- Findings: ${result.summary.totalFailures}`);
  lines.push(`- Files changed by autofix: ${result.fixes.filesChanged}`);
  lines.push(`- Autofix edits applied: ${result.fixes.editsApplied}`);
  lines.push('');

  if (Object.keys(result.summary.failuresByType).length > 0) {
    lines.push('### Findings by Type');
    lines.push('');
    lines.push('| Type | Count |');
    lines.push('|---|---:|');
    Object.entries(result.summary.failuresByType)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([type, count]) => lines.push(`| ${type} | ${count} |`));
    lines.push('');
  }

  if (result.findings.length === 0) {
    lines.push('_No findings._');
    lines.push('');
    return lines.join('\n');
  }

  lines.push('## Findings');
  lines.push('');
  lines.push('| Type | File | Line | Reference | Spec | Message |');
  lines.push('|---|---|---:|---|---|---|');
  result.findings.forEach((finding) => {
    const reference = finding.reference ? `\`${finding.reference}\`` : '-';
    const spec = finding.resolvedSpec || '-';
    const safeMessage = String(finding.message || '').replace(/\|/g, '\\|');
    lines.push(`| ${finding.type} | ${finding.file} | ${finding.line} | ${reference} | ${spec} | ${safeMessage} |`);
  });
  lines.push('');

  return lines.join('\n');
}

function createFinding({ type, file, line, reference, resolvedSpec, message }) {
  return {
    type,
    file,
    line,
    reference: reference || '',
    resolvedSpec: resolvedSpec || '',
    message
  };
}

function getTargetFiles(args) {
  if (args.mode === 'files') {
    const explicitFiles = args.files
      .map((inputPath) => path.resolve(REPO_ROOT, inputPath))
      .filter((absPath) => fs.existsSync(absPath))
      .filter((absPath) => /\.(md|mdx)$/i.test(absPath))
      .filter((absPath) => {
        const rel = relFromRoot(absPath);
        return rel.startsWith('v2/') && !isExcludedV2ExperimentalPath(rel);
      });

    return [...new Set(explicitFiles)].sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
  }

  const v2Dir = path.join(REPO_ROOT, 'v2');
  return walkFiles(v2Dir).sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
}

function maybeFixFrontmatterOpenapi(content, frontmatter, endpoint) {
  if (!frontmatter.exists) {
    return { changed: false, content, editsApplied: 0 };
  }

  const lines = content.split('\n');
  const openapiLineIndex = lines.findIndex((line, index) => {
    if (index > 300) return false;
    return /^\s*openapi\s*:/.test(line);
  });

  if (openapiLineIndex === -1) {
    return { changed: false, content, editsApplied: 0 };
  }

  const line = lines[openapiLineIndex];
  const match = line.match(/^(\s*openapi\s*:\s*)(['"]?)(.*?)(\2)\s*$/);
  if (!match) {
    return { changed: false, content, editsApplied: 0 };
  }

  const prefix = match[1];
  const quote = match[2] || '';
  const currentValue = match[3];
  const canonical = endpoint.key;

  if (currentValue === canonical) {
    return { changed: false, content, editsApplied: 0 };
  }

  lines[openapiLineIndex] = `${prefix}${quote}${canonical}${quote}`;
  return {
    changed: true,
    content: lines.join('\n'),
    editsApplied: 1
  };
}

function maybeFixOpenApiTag(tagRef) {
  const parsed = parseOpenApiTagReference(tagRef.tag);
  if (!parsed.valid) {
    return {
      changed: false,
      tag: tagRef.tag,
      editsApplied: 0
    };
  }

  let nextTag = tagRef.tag;
  let editsApplied = 0;

  if (parsed.mode === 'path-only') {
    const canonicalPathValue = parsed.endpoint.key;
    if (parsed.pathAttr && parsed.pathAttr.value !== canonicalPathValue) {
      nextTag = replaceQuotedAttr(nextTag, 'path', canonicalPathValue);
      editsApplied += 1;
    }
  } else {
    const canonicalPath = parsed.endpoint.path;
    const canonicalMethod = parsed.endpoint.method;

    if (parsed.pathAttr && parsed.pathAttr.value !== canonicalPath) {
      nextTag = replaceQuotedAttr(nextTag, 'path', canonicalPath);
      editsApplied += 1;
    }

    if (parsed.methodAttr && String(parsed.methodAttr.value || '').trim() !== canonicalMethod) {
      nextTag = replaceQuotedAttr(nextTag, 'method', canonicalMethod);
      editsApplied += 1;
    }
  }

  return {
    changed: nextTag !== tagRef.tag,
    tag: nextTag,
    editsApplied
  };
}

function applyTagReplacements(content, replacements) {
  if (replacements.length === 0) return content;

  let updated = '';
  let cursor = 0;
  replacements
    .sort((a, b) => a.startIndex - b.startIndex)
    .forEach((replacement) => {
      updated += content.slice(cursor, replacement.startIndex);
      updated += replacement.nextTag;
      cursor = replacement.startIndex + replacement.originalTag.length;
    });
  updated += content.slice(cursor);
  return updated;
}

function analyzeFile(absPath, args) {
  const relPath = relFromRoot(absPath);
  const originalContent = fs.readFileSync(absPath, 'utf8');
  let workingContent = originalContent;

  const findings = [];
  const validRefs = [];

  const frontmatter = parseFrontmatter(workingContent);
  const frontmatterLine = getFrontmatterOpenapiLine(frontmatter);

  let frontmatterEndpoint = null;
  let frontmatterRawValue = null;
  if (frontmatter.exists && frontmatter.data && Object.prototype.hasOwnProperty.call(frontmatter.data, 'openapi')) {
    frontmatterRawValue = String(frontmatter.data.openapi ?? '').trim();
    if (!isIgnoredFrontmatterOpenapiValue(frontmatterRawValue)) {
      const parsedFrontmatterEndpoint = parseMethodPathValue(frontmatterRawValue);
      if (!parsedFrontmatterEndpoint) {
        findings.push(createFinding({
          type: FINDING_TYPES.INVALID_REFERENCE_FORMAT,
          file: relPath,
          line: frontmatterLine,
          reference: frontmatterRawValue,
          resolvedSpec: resolveSpecForFile(relPath),
          message: 'Frontmatter openapi must be endpoint format "METHOD /path" for endpoint pages.'
        }));
      } else {
        frontmatterEndpoint = parsedFrontmatterEndpoint;
        validRefs.push({
          source: 'frontmatter',
          line: frontmatterLine,
          rawReference: frontmatterRawValue,
          endpoint: parsedFrontmatterEndpoint
        });
      }
    }
  }

  const tags = extractOpenApiTags(workingContent);
  const replacements = [];
  let editsApplied = 0;

  tags.forEach((tagRef) => {
    const parsedTag = parseOpenApiTagReference(tagRef.tag);
    if (!parsedTag.valid) {
      findings.push(createFinding({
        type: FINDING_TYPES.INVALID_REFERENCE_FORMAT,
        file: relPath,
        line: tagRef.line,
        reference: tagRef.tag,
        resolvedSpec: resolveSpecForFile(relPath),
        message: parsedTag.reason
      }));
      return;
    }

    validRefs.push({
      source: 'component',
      line: tagRef.line,
      rawReference: parsedTag.rawReference,
      endpoint: parsedTag.endpoint
    });

    if (args.fix) {
      const fix = maybeFixOpenApiTag(tagRef);
      if (fix.changed) {
        replacements.push({
          startIndex: tagRef.startIndex,
          originalTag: tagRef.tag,
          nextTag: fix.tag
        });
        editsApplied += fix.editsApplied;
      }
    }
  });

  if (args.fix && replacements.length > 0) {
    workingContent = applyTagReplacements(workingContent, replacements);
  }

  if (args.fix && frontmatterEndpoint) {
    const frontmatterFix = maybeFixFrontmatterOpenapi(workingContent, frontmatter, frontmatterEndpoint);
    if (frontmatterFix.changed) {
      workingContent = frontmatterFix.content;
      editsApplied += frontmatterFix.editsApplied;
    }
  }

  const frontmatterValidRefs = validRefs.filter((ref) => ref.source === 'frontmatter');
  const componentValidRefs = validRefs.filter((ref) => ref.source === 'component');
  if (frontmatterValidRefs.length > 0 && componentValidRefs.length > 0) {
    const frontmatterKeys = new Set(frontmatterValidRefs.map((ref) => ref.endpoint.key));
    componentValidRefs.forEach((componentRef) => {
      if (!frontmatterKeys.has(componentRef.endpoint.key)) {
        findings.push(createFinding({
          type: FINDING_TYPES.INTRA_FILE_MISMATCH,
          file: relPath,
          line: componentRef.line,
          reference: componentRef.endpoint.key,
          resolvedSpec: resolveSpecForFile(relPath),
          message: `Component OpenAPI reference (${componentRef.endpoint.key}) does not match frontmatter openapi (${frontmatterValidRefs[0].endpoint.key}).`
        }));
      }
    });
  }

  return {
    relPath,
    originalContent,
    workingContent,
    changed: workingContent !== originalContent,
    editsApplied,
    findings,
    validRefs
  };
}

function aggregateFailureCounts(findings) {
  return findings.reduce((acc, finding) => {
    acc[finding.type] = (acc[finding.type] || 0) + 1;
    return acc;
  }, {});
}

function runValidationForRefs(fileAnalyses, specCache) {
  const findings = [];

  fileAnalyses.forEach((analysis) => {
    const resolvedSpec = resolveSpecForFile(analysis.relPath);
    analysis.validRefs.forEach((ref) => {
      if (!resolvedSpec) {
        findings.push(createFinding({
          type: FINDING_TYPES.MISSING_SPEC_MAPPING,
          file: analysis.relPath,
          line: ref.line,
          reference: ref.endpoint.key,
          resolvedSpec,
          message: 'No canonical spec mapping exists for this file path.'
        }));
        return;
      }

      const specState = specCache[resolvedSpec];
      if (!specState || specState.error) {
        findings.push(createFinding({
          type: FINDING_TYPES.SPEC_LOAD_ERROR,
          file: analysis.relPath,
          line: ref.line,
          reference: ref.endpoint.key,
          resolvedSpec,
          message: specState && specState.error
            ? `Failed to load spec ${resolvedSpec}: ${specState.error}`
            : `Failed to load spec ${resolvedSpec}: unknown error`
        }));
        return;
      }

      if (!specState.endpoints.has(ref.endpoint.key)) {
        findings.push(createFinding({
          type: FINDING_TYPES.ENDPOINT_NOT_FOUND,
          file: analysis.relPath,
          line: ref.line,
          reference: ref.endpoint.key,
          resolvedSpec,
          message: `Endpoint ${ref.endpoint.key} was not found in ${resolvedSpec}.`
        }));
      }
    });
  });

  return findings;
}

async function runAudit(options = {}) {
  const argv = Array.isArray(options.argv) ? options.argv : process.argv.slice(2);
  const args = parseArgs(argv);

  const files = getTargetFiles(args);

  const analyses = files.map((absPath) => analyzeFile(absPath, args));

  let filesChanged = 0;
  let editsApplied = 0;
  if (args.fix && args.write) {
    analyses.forEach((analysis) => {
      if (!analysis.changed) return;
      fs.writeFileSync(path.join(REPO_ROOT, analysis.relPath), analysis.workingContent, 'utf8');
      filesChanged += 1;
      editsApplied += analysis.editsApplied;
    });
  }

  const specPaths = new Set();
  analyses.forEach((analysis) => {
    const resolvedSpec = resolveSpecForFile(analysis.relPath);
    if (resolvedSpec) specPaths.add(resolvedSpec);
  });

  const specCache = {};
  specPaths.forEach((specPath) => {
    try {
      specCache[specPath] = { endpoints: buildEndpointSetFromSpec(specPath), error: null };
    } catch (error) {
      specCache[specPath] = { endpoints: new Set(), error: error.message };
    }
  });

  const syntaxFindings = analyses.flatMap((analysis) => analysis.findings);
  const endpointFindings = runValidationForRefs(analyses, specCache);
  const findings = [...syntaxFindings, ...endpointFindings]
    .sort((a, b) => {
      if (a.file !== b.file) return a.file.localeCompare(b.file);
      if (a.line !== b.line) return a.line - b.line;
      if (a.type !== b.type) return a.type.localeCompare(b.type);
      return a.reference.localeCompare(b.reference);
    });

  const totalReferences = analyses.reduce((sum, analysis) => sum + analysis.validRefs.length, 0);
  const summary = {
    totalFiles: analyses.length,
    totalReferences,
    totalFailures: findings.length,
    failuresByType: aggregateFailureCounts(findings)
  };

  const result = {
    generatedAt: new Date().toISOString(),
    mode: args.mode,
    strict: args.strict,
    fix: args.fix,
    write: args.write,
    summary,
    findings,
    fixes: {
      filesChanged,
      editsApplied
    },
    filesAnalyzed: analyses.map((analysis) => analysis.relPath)
  };

  ensureParentDir(args.report);
  ensureParentDir(args.reportJson);
  fs.writeFileSync(args.report, renderMarkdownReport(result), 'utf8');
  fs.writeFileSync(args.reportJson, JSON.stringify(result, null, 2), 'utf8');

  const exitCode = args.strict && findings.length > 0 ? 1 : 0;
  return {
    ...result,
    args,
    exitCode,
    fileCount: analyses.length
  };
}

if (require.main === module) {
  runAudit()
    .then((result) => {
      console.log('OpenAPI reference audit summary');
      console.log(`- Files analyzed: ${result.summary.totalFiles}`);
      console.log(`- References: ${result.summary.totalReferences}`);
      console.log(`- Findings: ${result.summary.totalFailures}`);
      console.log(`- Report: ${result.args.report}`);
      console.log(`- JSON: ${result.args.reportJson}`);
      if (result.fix && result.write) {
        console.log(`- Files changed: ${result.fixes.filesChanged}`);
        console.log(`- Fix edits applied: ${result.fixes.editsApplied}`);
      }
      process.exit(result.exitCode);
    })
    .catch((error) => {
      console.error(`OpenAPI reference audit failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = {
  FINDING_TYPES,
  parseArgs,
  normalizePath,
  normalizeMethod,
  normalizeEndpoint,
  parseMethodPathValue,
  isIgnoredFrontmatterOpenapiValue,
  parseOpenApiTagReference,
  resolveSpecForFile,
  extractOpenApiTags,
  runAudit
};
