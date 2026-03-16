#!/usr/bin/env node
/**
 * @script            audit-script-inventory
 * @category          validator
 * @purpose           governance:repo-health
 * @scope             full-repo
 * @domain            docs
 * @needs             R-R14, R-R18, R-C6
 * @purpose-statement Deep inventory audit of every script in the repo. Traces triggers, outputs, downstream chains, and governance compliance. Produces reports grouped by trigger category.
 * @pipeline          P1 (commit), indirect
 * @usage             node tools/scripts/validators/governance/audit-script-inventory.js [--fix] [--dry-run] [--staged-only|--staged] [--files <path[,path...]>] [--quiet] [--json] [--md] [--output <dir>] [--verbose]
 */

const fs = require('fs');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');
const yaml = require('js-yaml');
const {
  AGGREGATE_INDEX_PATH,
  CATEGORY_ENUM,
  CLASSIFICATION_DATA_PATH,
  DISCOVERY_ROOTS,
  FRAMEWORK_FIELDS,
  GOVERNED_ROOTS,
  GROUP_INDEX_PATHS,
  GROUP_LABELS,
  GROUP_ORDER,
  LEGACY_AGGREGATE_INDEX_PATH,
  PIPELINE_ORDER,
  PURPOSE_ENUM,
  REQUIRED_FRAMEWORK_KEYS,
  SCRIPT_EXTENSIONS,
  isDiscoveredScriptPath,
  isValidGovernanceScope,
  isWithinRoots,
  normalizeRepoPath,
  parseDeclaredPipelines
} = require('../../../lib/script-governance-config');
const {
  extractLeadingScriptHeader,
  getSectionLines,
  getTagValue,
  hasFrameworkHeaderTags
} = require('../../../lib/script-header-utils');

const REPO_ROOT = path.resolve(__dirname, '../../../..');
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_MD_PATH = 'SCRIPT_INVENTORY_FULL.md';
const DEFAULT_JSON_PATH = 'SCRIPT_INVENTORY_FULL.json';
const REPO_ROOT_POSIX = normalizeRepoPath(REPO_ROOT);
const REPO_ROOT_LOOSE = REPO_ROOT_POSIX.replace(/^\/+/, '');
const SPECIAL_CALLERS = new Set(['.githooks/pre-commit', '.githooks/pre-push', 'tests/run-all.js', 'tests/run-pr-checks.js']);
const PACKAGE_JSON_PATHS = ['tools/package.json', 'tests/package.json'];
const INDEX_TARGETS = [...GROUP_INDEX_PATHS, AGGREGATE_INDEX_PATH, LEGACY_AGGREGATE_INDEX_PATH];
const WRITE_CALL_RE = /\b(?:fs\.)?(writeFileSync|writeFile|appendFileSync|appendFile|mkdirSync|mkdir|createWriteStream|writeJson)\s*\(([\s\S]{0,220}?)\)/g;
const STRING_RE = /(['"`])((?:\\.|(?!\1).)*)\1/g;
const CONST_RE = /^\s*const\s+([A-Za-z0-9_]+)\s*=\s*(.+?);\s*$/gm;
const HEADER_TABLE_COLUMNS = [
  'Path',
  'Category',
  'Purpose',
  'Pipeline claimed',
  'Pipeline actual',
  'Pipeline verdict',
  'Outputs',
  'Triggers downstream?',
  'Scope',
  'Needs',
  'Header completeness',
  'Grade',
  'Flags'
];
const AUTOMATED_PIPELINES = new Set(['P1', 'P2', 'P3', 'P5', 'P6']);

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/governance/audit-script-inventory.js [--fix] [--dry-run] [--staged-only|--staged] [--files <path[,path...]>] [--quiet] [--json] [--md] [--output <dir>] [--verbose]'
  );
}

function parseArgs(argv) {
  const args = {
    fix: false,
    dryRun: false,
    stagedOnly: false,
    files: [],
    quiet: false,
    json: false,
    md: false,
    verbose: false,
    outputDir: DEFAULT_OUTPUT_DIR
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--md') {
      args.md = true;
      continue;
    }
    if (token === '--fix') {
      args.fix = true;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      args.fix = true;
      continue;
    }
    if (token === '--staged-only' || token === '--staged') {
      args.stagedOnly = true;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) {
        throw new Error('--files requires a comma-separated value.');
      }
      args.files.push(
        ...raw
          .split(',')
          .map((part) => normalizeRepoPath(part.trim()))
          .filter(Boolean)
      );
      index += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      const raw = String(token.slice('--files='.length) || '').trim();
      if (!raw) {
        throw new Error('--files requires a comma-separated value.');
      }
      args.files.push(
        ...raw
          .split(',')
          .map((part) => normalizeRepoPath(part.trim()))
          .filter(Boolean)
      );
      continue;
    }
    if (token === '--quiet') {
      args.quiet = true;
      continue;
    }
    if (token === '--verbose') {
      args.verbose = true;
      continue;
    }
    if (token === '--output') {
      args.outputDir = String(argv[index + 1] || '').trim() || DEFAULT_OUTPUT_DIR;
      index += 1;
      continue;
    }
    if (token.startsWith('--output=')) {
      args.outputDir = token.slice('--output='.length).trim() || DEFAULT_OUTPUT_DIR;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!args.json && !args.md) {
    args.json = true;
    args.md = true;
    args.printSummary = true;
  }

  args.files = [...new Set(args.files)];
  if (args.stagedOnly && args.files.length > 0) {
    throw new Error('Choose only one scope: --staged-only/--staged or --files.');
  }

  return args;
}

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readRepoFile(repoPath, warnings) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (error) {
    warnings.push(`Could not read ${repoPath}: ${error.message}`);
    return '';
  }
}

function readRepoFileOptional(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function listTrackedFiles() {
  const output = execFileSync('git', ['ls-files'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  return output
    .split('\n')
    .map((line) => normalizeRepoPath(line.trim()))
    .filter(Boolean);
}

function listStagedFiles(diffFilter = 'ACM') {
  const output = execFileSync('git', ['diff', '--cached', '--name-only', `--diff-filter=${diffFilter}`], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  return output
    .split('\n')
    .map((line) => normalizeRepoPath(line.trim()))
    .filter(Boolean);
}

function getWorkflowFiles(trackedFiles) {
  return trackedFiles.filter((repoPath) => repoPath.startsWith('.github/workflows/') && /\.(ya?ml)$/i.test(repoPath));
}

function getDiscoveredScripts(trackedFiles) {
  return trackedFiles.filter(isDiscoveredScriptPath).sort();
}

function readUsageValue(header) {
  const inline = getTagValue(header, '@usage');
  return [
    inline,
    ...getSectionLines(header, '@usage').filter(Boolean)
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s*\\\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractHeaderMetadata(scriptPath, content) {
  const header = extractLeadingScriptHeader(content);
  const values = {
    path: scriptPath,
    script: getTagValue(header, '@script'),
    category: getTagValue(header, '@category'),
    purpose: getTagValue(header, '@purpose'),
    scope: getTagValue(header, '@scope'),
    domain: getTagValue(header, '@domain'),
    needs: getTagValue(header, '@needs'),
    purpose_statement: getTagValue(header, '@purpose-statement'),
    pipeline_declared: getTagValue(header, '@pipeline'),
    usage: readUsageValue(header)
  };

  const headerFieldCount = FRAMEWORK_FIELDS.filter((field) => String(values[field.key] || '').trim()).length;
  const hasAnyHeader = header.includes('@script') || header.includes('@summary');
  const hasFrameworkHeader = hasFrameworkHeaderTags(header);

  return {
    ...values,
    header,
    header_field_count: headerFieldCount,
    has_any_header: hasAnyHeader,
    has_framework_header: hasFrameworkHeader,
    category_valid: values.category ? CATEGORY_ENUM.includes(values.category) : false,
    purpose_valid: values.purpose ? PURPOSE_ENUM.includes(values.purpose) : false,
    scope_valid: values.scope ? isValidGovernanceScope(values.scope) : false
  };
}

function loadClassificationRows(trackedFiles, warnings) {
  if (!trackedFiles.includes(CLASSIFICATION_DATA_PATH)) {
    warnings.push(`Missing classification data file: ${CLASSIFICATION_DATA_PATH}`);
    return [];
  }

  try {
    const raw = fs.readFileSync(path.join(REPO_ROOT, CLASSIFICATION_DATA_PATH), 'utf8');
    const rows = JSON.parse(raw);
    if (!Array.isArray(rows)) {
      warnings.push(`${CLASSIFICATION_DATA_PATH} is not a JSON array`);
      return [];
    }
    return rows
      .filter((row) => row && typeof row === 'object' && !Array.isArray(row))
      .map((row) => ({
        ...row,
        path: normalizeRepoPath(String(row.path || '').trim())
      }));
  } catch (error) {
    warnings.push(`Could not parse ${CLASSIFICATION_DATA_PATH}: ${error.message}`);
    return [];
  }
}

function loadWorkflowDocuments(workflowPaths, warnings) {
  return workflowPaths.map((workflowPath) => {
    const raw = readRepoFile(workflowPath, warnings);
    let parsed = {};
    try {
      parsed = raw ? yaml.load(raw) || {} : {};
    } catch (error) {
      warnings.push(`Could not parse workflow ${workflowPath}: ${error.message}`);
      parsed = {};
    }
    return {
      path: workflowPath,
      raw,
      parsed,
      command_text: extractWorkflowCommandText(parsed)
    };
  });
}

function extractWorkflowCommandText(parsedWorkflow) {
  const lines = [];
  const jobs = parsedWorkflow?.jobs || {};
  Object.values(jobs).forEach((job) => {
    const steps = Array.isArray(job?.steps) ? job.steps : [];
    steps.forEach((step) => {
      if (typeof step?.run === 'string' && step.run.trim()) {
        lines.push(step.run);
      }
    });
  });
  return lines.join('\n');
}

function extractWorkflowTriggers(workflowDoc) {
  const parsed = workflowDoc.parsed || {};
  const workflowName = String(parsed.name || path.basename(workflowDoc.path)).trim() || workflowDoc.path;
  const onValue = Object.prototype.hasOwnProperty.call(parsed, 'on') ? parsed.on : parsed.true;
  const out = [];

  function pushTrigger(eventName, extra = {}) {
    if (eventName === 'pull_request') {
      out.push({ type: 'workflow-pr', caller: workflowDoc.path, workflow: workflowName, pipeline: 'P3', ...extra });
    } else if (eventName === 'schedule') {
      const cron = extra.cron || '';
      out.push({ type: 'workflow-schedule', caller: workflowDoc.path, workflow: workflowName, pipeline: 'P5', cron });
    } else if (eventName === 'workflow_dispatch') {
      out.push({ type: 'workflow-dispatch', caller: workflowDoc.path, workflow: workflowName, pipeline: 'P6', ...extra });
    } else if (eventName === 'push') {
      out.push({ type: 'workflow-push', caller: workflowDoc.path, workflow: workflowName, pipeline: 'P2', ...extra });
    }
  }

  if (typeof onValue === 'string') {
    pushTrigger(onValue);
    return out;
  }

  if (Array.isArray(onValue)) {
    onValue.forEach((eventName) => pushTrigger(String(eventName || '').trim()));
    return out;
  }

  if (!onValue || typeof onValue !== 'object') return out;

  Object.entries(onValue).forEach(([eventName, config]) => {
    if (eventName === 'schedule' && Array.isArray(config)) {
      config.forEach((entry) => pushTrigger('schedule', { cron: String(entry?.cron || '').trim() }));
      return;
    }
    pushTrigger(eventName);
  });

  return out;
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function removeExtension(value) {
  return String(value || '').replace(/\.(js|sh|py)$/i, '');
}

function buildReferenceCandidates(callerPath, targetPath) {
  const callerDir = path.dirname(callerPath);
  const relative = normalizeRepoPath(path.relative(callerDir, targetPath));
  const candidates = new Set([targetPath]);
  if (relative) {
    candidates.add(relative);
    candidates.add(relative.startsWith('.') ? relative : `./${relative}`);
  }

  if (targetPath.endsWith('.js')) {
    candidates.add(removeExtension(targetPath));
    if (relative) {
      const relativeWithoutExt = removeExtension(relative);
      candidates.add(relativeWithoutExt);
      candidates.add(relativeWithoutExt.startsWith('.') ? relativeWithoutExt : `./${relativeWithoutExt}`);
    }
  }

  return [...candidates].filter(Boolean);
}

function buildExecutionPatterns(candidates, mode) {
  const quotedCandidates = candidates.filter(Boolean).map((candidate) => `['"\`]${escapeRegExp(candidate)}['"\`]`);
  const patterns = [];

  if (mode === 'module') {
    quotedCandidates.forEach((candidate) => {
      patterns.push(new RegExp(`\\brequire\\([^\\n)]*${candidate}`));
      patterns.push(new RegExp(`\\bimport\\s+[^\\n]+from\\s+${candidate}`));
    });
  } else {
    quotedCandidates.forEach((candidate) => {
      patterns.push(new RegExp(candidate));
    });
  }

  candidates
    .filter(Boolean)
    .forEach((candidate) => {
      patterns.push(new RegExp(`\\b(?:spawn|spawnSync|exec|execSync|fork)\\([^\\n]*${escapeRegExp(candidate)}`));
      patterns.push(new RegExp(`\\b(?:node|bash|sh|python|python3)\\s+[^\\n]*${escapeRegExp(candidate)}(?:\\s|$)`));
      if (mode === 'command' && (candidate.includes('/') || candidate.startsWith('.'))) {
        patterns.push(new RegExp(`(^|\\s)${escapeRegExp(candidate)}(?=\\s|$)`));
      }
    });

  return patterns;
}

function stripCommentOnlyLines(text, callerPath, mode) {
  if (mode !== 'command') return text;
  if (!(callerPath.startsWith('.githooks/') || /\.(sh|ya?ml)$/i.test(callerPath))) return text;
  return String(text || '')
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      if (!trimmed) return false;
      if (trimmed.startsWith('#')) return false;
      if (/^(echo|printf)\b/.test(trimmed)) return false;
      return true;
    })
    .join('\n');
}

function textReferencesPath(text, callerPath, targetPath, mode = 'module') {
  if (!text) return false;
  const processedText = stripCommentOnlyLines(text, callerPath, mode);
  const candidates = buildReferenceCandidates(callerPath, targetPath);
  return buildExecutionPatterns(candidates, mode).some((pattern) => pattern.test(processedText));
}

function dedupeTriggers(triggers) {
  const seen = new Set();
  const ordered = [];
  for (const trigger of triggers) {
    const key = [
      trigger.type,
      trigger.caller,
      trigger.pipeline,
      trigger.script_name || '',
      trigger.workflow || '',
      trigger.cron || ''
    ].join('|');
    if (seen.has(key)) continue;
    seen.add(key);
    ordered.push(trigger);
  }
  return ordered.sort((left, right) => {
    const pipelineDiff = PIPELINE_ORDER.indexOf(left.pipeline) - PIPELINE_ORDER.indexOf(right.pipeline);
    if (pipelineDiff !== 0) return pipelineDiff;
    return `${left.caller}|${left.type}`.localeCompare(`${right.caller}|${right.type}`);
  });
}

function isDirectHookTarget(targetPath) {
  return (
    targetPath.startsWith('.githooks/') ||
    targetPath.startsWith('tests/unit/') ||
    targetPath.startsWith('tests/integration/') ||
    targetPath === 'tests/run-all.js' ||
    targetPath === 'tests/run-pr-checks.js' ||
    targetPath.startsWith('tools/scripts/') ||
    targetPath.startsWith('tasks/scripts/')
  );
}

function isDirectRunnerTarget(targetPath) {
  return (
    targetPath.startsWith('tests/unit/') ||
    targetPath.startsWith('tests/integration/') ||
    targetPath.startsWith('tools/scripts/')
  );
}

function findPackageScriptWorkflowTriggers(packagePath, scriptName, workflowDocs) {
  const packageDir = path.dirname(packagePath);
  const matchers = [
    new RegExp(`\\bnpm\\s+--prefix\\s+${escapeRegExp(packageDir)}\\s+run\\s+${escapeRegExp(scriptName)}\\b`),
    new RegExp(`\\bcd\\s+${escapeRegExp(packageDir)}\\s*&&\\s*npm\\s+run\\s+${escapeRegExp(scriptName)}\\b`)
  ];
  const triggers = [];

  workflowDocs.forEach((workflowDoc) => {
    const workflowText = stripCommentOnlyLines(workflowDoc.command_text, workflowDoc.path, 'command');
    if (!matchers.some((matcher) => matcher.test(workflowText))) return;
    extractWorkflowTriggers(workflowDoc).forEach((trigger) => {
      triggers.push({ ...trigger, via_script: scriptName });
    });
  });

  return dedupeTriggers(triggers);
}

function findTriggers(targetPath, docs, workflowDocs) {
  const triggers = [];
  if (targetPath === '.githooks/pre-commit') {
    triggers.push({ type: 'pre-commit', caller: '.githooks/pre-commit', pipeline: 'P1' });
  }
  if (targetPath === '.githooks/pre-push') {
    triggers.push({ type: 'pre-push', caller: '.githooks/pre-push', pipeline: 'P2' });
  }
  const preCommit = docs.get('.githooks/pre-commit');
  if (preCommit && isDirectHookTarget(targetPath) && textReferencesPath(preCommit, '.githooks/pre-commit', targetPath, 'command')) {
    triggers.push({ type: 'pre-commit', caller: '.githooks/pre-commit', pipeline: 'P1' });
  }

  const prePush = docs.get('.githooks/pre-push');
  if (prePush && isDirectHookTarget(targetPath) && textReferencesPath(prePush, '.githooks/pre-push', targetPath, 'command')) {
    triggers.push({ type: 'pre-push', caller: '.githooks/pre-push', pipeline: 'P2' });
  }

  const runAll = docs.get('tests/run-all.js');
  if (runAll && isDirectRunnerTarget(targetPath) && textReferencesPath(runAll, 'tests/run-all.js', targetPath, 'module')) {
    triggers.push({ type: 'runner', caller: 'tests/run-all.js', pipeline: 'P1' });
  }

  const runPrChecks = docs.get('tests/run-pr-checks.js');
  if (runPrChecks && isDirectRunnerTarget(targetPath) && textReferencesPath(runPrChecks, 'tests/run-pr-checks.js', targetPath, 'module')) {
    triggers.push({ type: 'runner', caller: 'tests/run-pr-checks.js', pipeline: 'P3' });
  }

  workflowDocs.forEach((workflowDoc) => {
    if (!textReferencesPath(workflowDoc.command_text, workflowDoc.path, targetPath, 'command')) return;
    extractWorkflowTriggers(workflowDoc).forEach((trigger) => triggers.push(trigger));
  });

  PACKAGE_JSON_PATHS.forEach((packagePath) => {
    const raw = docs.get(packagePath);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      const scripts = parsed?.scripts || {};
      Object.entries(scripts).forEach(([scriptName, command]) => {
        if (textReferencesPath(String(command || ''), packagePath, targetPath, 'command')) {
          triggers.push({
            type: 'npm-script',
            caller: packagePath,
            pipeline: 'manual',
            script_name: scriptName
          });
          findPackageScriptWorkflowTriggers(packagePath, scriptName, workflowDocs).forEach((trigger) => triggers.push(trigger));
        }
      });
    } catch (_error) {
      // Ignore invalid package.json here. The repo already validates it elsewhere.
    }
  });

  docs.forEach((content, callerPath) => {
    if (callerPath === targetPath) return;
    if (!isDiscoveredScriptPath(callerPath)) return;
    if (!textReferencesPath(content, callerPath, targetPath, 'module')) return;
    triggers.push({ type: 'script', caller: callerPath, pipeline: 'indirect' });
  });

  return dedupeTriggers(triggers);
}

function getVerificationPipelineSet(triggers) {
  const automated = new Set(
    triggers
      .map((trigger) => trigger.pipeline)
      .filter((pipeline) => AUTOMATED_PIPELINES.has(pipeline))
  );
  if (automated.size > 0) return automated;
  const pipelines = new Set();
  if (triggers.some((trigger) => trigger.pipeline === 'indirect')) pipelines.add('indirect');
  if (triggers.some((trigger) => trigger.pipeline === 'manual')) pipelines.add('manual');
  return pipelines;
}

function getAutomatedPipelineSet(triggers) {
  return new Set(
    triggers
      .map((trigger) => trigger.pipeline)
      .filter((pipeline) => AUTOMATED_PIPELINES.has(pipeline))
  );
}

function describePipelineMismatch(declared, actual) {
  const missingActual = [...declared].filter((value) => !actual.has(value));
  const extraActual = [...actual].filter((value) => !declared.has(value));
  const reasons = [];
  if (missingActual.length > 0) {
    reasons.push(`phantom claim ${missingActual.join(', ')}`);
  }
  if (extraActual.length > 0) {
    reasons.push(`undeclared automation ${extraActual.join(', ')}`);
  }
  return reasons.join('; ');
}

function verifyPipelineClaim(declaredRaw, triggers) {
  const declared = parseDeclaredPipelines(declaredRaw);
  if (!String(declaredRaw || '').trim()) {
    return { pipeline_verified: 'MISSING', declared, actual: getVerificationPipelineSet(triggers) };
  }

  const actual = getVerificationPipelineSet(triggers);
  const declaredAutomated = new Set([...declared].filter((pipeline) => AUTOMATED_PIPELINES.has(pipeline)));
  const actualAutomated = getAutomatedPipelineSet(triggers);

  if (declaredAutomated.size === 0 && actualAutomated.size === 0) {
    return { pipeline_verified: 'MATCH', declared, actual };
  }

  if (declaredAutomated.size === actualAutomated.size && [...declaredAutomated].every((value) => actualAutomated.has(value))) {
    return { pipeline_verified: 'MATCH', declared, actual };
  }

  return {
    pipeline_verified: `MISMATCH:${describePipelineMismatch(declaredAutomated, actualAutomated)}`,
    declared,
    actual
  };
}

function splitArguments(argumentText) {
  const args = [];
  let current = '';
  let depth = 0;
  let quote = '';
  for (let index = 0; index < argumentText.length; index += 1) {
    const char = argumentText[index];
    const previous = argumentText[index - 1];
    if (quote) {
      current += char;
      if (char === quote && previous !== '\\') quote = '';
      continue;
    }
    if (char === '"' || char === '\'' || char === '`') {
      quote = char;
      current += char;
      continue;
    }
    if (char === '(' || char === '[' || char === '{') {
      depth += 1;
      current += char;
      continue;
    }
    if (char === ')' || char === ']' || char === '}') {
      depth -= 1;
      current += char;
      continue;
    }
    if (char === ',' && depth === 0) {
      args.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  if (current.trim()) args.push(current.trim());
  return args;
}

function unquote(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(['"`])([\s\S]*)\1$/);
  return match ? match[2] : '';
}

function resolvePathExpression(expression, scriptPath, constantMap, stack = new Set()) {
  const trimmed = String(expression || '').trim();
  if (!trimmed) return '';

  const literal = unquote(trimmed);
  if (literal) {
    if (literal.startsWith('/') || literal.startsWith('http://') || literal.startsWith('https://')) {
      return normalizeRepoPath(literal);
    }
    return normalizeRepoPath(path.resolve(path.dirname(path.join(REPO_ROOT, scriptPath)), literal));
  }

  if (trimmed === '__dirname') return normalizeRepoPath(path.dirname(path.join(REPO_ROOT, scriptPath)));
  if (trimmed === 'REPO_ROOT' || trimmed === 'repoRoot' || trimmed === 'process.cwd()') return normalizeRepoPath(REPO_ROOT);

  if (/^[A-Za-z0-9_]+$/.test(trimmed) && constantMap.has(trimmed) && !stack.has(trimmed)) {
    stack.add(trimmed);
    const resolved = resolvePathExpression(constantMap.get(trimmed), scriptPath, constantMap, stack);
    stack.delete(trimmed);
    return resolved;
  }

  const methodMatch = trimmed.match(/^path\.(join|resolve)\(([\s\S]+)\)$/);
  if (methodMatch) {
    const args = splitArguments(methodMatch[2]);
    const resolvedArgs = args
      .map((arg) => resolvePathExpression(arg, scriptPath, constantMap, stack))
      .filter(Boolean);
    if (resolvedArgs.length === 0) return '';
    const absolute = methodMatch[1] === 'resolve'
      ? path.resolve(...resolvedArgs)
      : path.join(...resolvedArgs);
    return normalizeRepoPath(absolute);
  }

  return '';
}

function buildConstantMap(scriptPath, content) {
  const map = new Map();
  let match = CONST_RE.exec(content);
  while (match) {
    map.set(match[1], match[2].trim());
    match = CONST_RE.exec(content);
  }
  return map;
}

function classifyOutputType(outputPath) {
  const baseName = path.basename(String(outputPath || '')).toLowerCase();
  if (!outputPath || outputPath === 'stdout') return 'stdout';
  if (outputPath.startsWith('tasks/reports/')) return 'report';
  if (
    baseName === 'script-index.md' ||
    baseName === 'scripts-catalog.mdx' ||
    (baseName.endsWith('.mdx') && baseName.includes('scripts') && baseName.includes('index'))
  ) {
    return 'generated-index';
  }
  if (outputPath.startsWith('snippets/automations/')) return 'data-feed';
  if (!path.extname(outputPath)) return 'directory';
  return 'generated-output';
}

function normalizeOutputPath(outputPath) {
  let normalized = normalizeRepoPath(String(outputPath || ''));
  if (!normalized) return '';

  let rootIndex = normalized.lastIndexOf(REPO_ROOT_POSIX);
  let rootToken = REPO_ROOT_POSIX;
  if (rootIndex === -1) {
    rootIndex = normalized.lastIndexOf(REPO_ROOT_LOOSE);
    rootToken = REPO_ROOT_LOOSE;
  }

  if (rootIndex !== -1) {
    normalized = normalized.slice(rootIndex);
    if (rootToken === REPO_ROOT_LOOSE && !normalized.startsWith('/')) {
      normalized = `/${normalized}`;
    }
  }

  if (normalized.startsWith(REPO_ROOT_POSIX)) {
    normalized = normalizeRepoPath(path.relative(REPO_ROOT, normalized));
  }

  return normalized.replace(/^\.\//, '');
}

function extractOutputPaths(scriptPath, content) {
  const constantMap = buildConstantMap(scriptPath, content);
  const outputs = [];
  const seen = new Set();

  let match = WRITE_CALL_RE.exec(content);
  while (match) {
    const firstArg = splitArguments(match[2])[0] || '';
    const resolved = resolvePathExpression(firstArg, scriptPath, constantMap);
    if (!resolved) {
      match = WRITE_CALL_RE.exec(content);
      continue;
    }
    const outputPath = normalizeOutputPath(resolved);
    const key = `${match[1]}|${outputPath}`;
    if (!seen.has(key)) {
      seen.add(key);
      outputs.push({ output_path: outputPath, type: classifyOutputType(outputPath), call: match[1] });
    }
    match = WRITE_CALL_RE.exec(content);
  }

  if (outputs.length === 0 && /\b(?:console\.log|console\.error|process\.stdout\.write)\b/.test(content)) {
    outputs.push({ output_path: 'stdout', type: 'stdout', call: 'console' });
  }

  return outputs;
}

function findOutputConsumers(outputPath, producerPath, docs) {
  if (!outputPath || outputPath === 'stdout') return [];
  const consumers = [];
  docs.forEach((content, callerPath) => {
    if (callerPath === producerPath) return;
    if (!isDiscoveredScriptPath(callerPath)) return;
    if (textReferencesPath(content, callerPath, outputPath)) {
      consumers.push(callerPath);
    }
  });
  return [...new Set(consumers)].sort();
}

function formatOutputs(outputs) {
  if (!outputs || outputs.length === 0) return 'none detected';
  if (outputs.length === 1 && outputs[0].output_path === 'stdout') return 'stdout only';
  return outputs.map((output) => output.output_path).join(', ');
}

function formatPipelineActual(triggers) {
  if (!triggers.length) return 'manual (no callers detected)';
  return triggers.map((trigger) => {
    if (trigger.type === 'npm-script') {
      return `manual (npm script: ${trigger.script_name})`;
    }
    if (trigger.type === 'workflow-schedule') {
      return `${trigger.pipeline} (${trigger.workflow}${trigger.cron ? ` cron ${trigger.cron}` : ''})`;
    }
    if (trigger.type.startsWith('workflow-')) {
      return `${trigger.pipeline} (${trigger.workflow})`;
    }
    if (trigger.type === 'runner') {
      return `${trigger.pipeline} via ${path.basename(trigger.caller, '.js')}`;
    }
    if (trigger.type === 'script') {
      return `indirect via ${trigger.caller}`;
    }
    if (trigger.type === 'pre-commit' || trigger.type === 'pre-push') {
      return `${trigger.pipeline} (${trigger.type})`;
    }
    return `${trigger.pipeline} (${trigger.caller})`;
  }).join('; ');
}

function determineGrade(scriptInfo) {
  const requiredProblems = [];
  for (const key of REQUIRED_FRAMEWORK_KEYS) {
    if (!String(scriptInfo[key] || '').trim()) {
      requiredProblems.push(`missing-${key}`);
    }
  }
  if (scriptInfo.category && !scriptInfo.category_valid) requiredProblems.push('invalid-category');
  if (scriptInfo.purpose && !scriptInfo.purpose_valid) requiredProblems.push('invalid-purpose');
  if (scriptInfo.scope && !scriptInfo.scope_valid) requiredProblems.push('invalid-scope');

  if (!scriptInfo.has_framework_header || requiredProblems.length >= 3) return 'F';
  if (
    scriptInfo.header_field_count === FRAMEWORK_FIELDS.length &&
    scriptInfo.category_valid &&
    scriptInfo.purpose_valid &&
    scriptInfo.scope_valid &&
    scriptInfo.in_json &&
    scriptInfo.pipeline_verified === 'MATCH'
  ) {
    return 'A';
  }
  if (requiredProblems.length === 0 && scriptInfo.in_json) return 'B';
  return 'C';
}

function determineGroup(scriptInfo) {
  if (!scriptInfo.has_framework_header && !scriptInfo.in_json) return 'Unmanaged';
  const declaredAutomated = [...scriptInfo.declared_pipeline_set].some((pipeline) => /^P\d$/.test(pipeline));
  const actualAutomated = [...scriptInfo.actual_pipeline_set].some((pipeline) => /^P\d$/.test(pipeline));
  if (declaredAutomated && !actualAutomated) return 'Orphaned';
  for (const pipeline of ['P1', 'P2', 'P3', 'P5', 'P6']) {
    if (scriptInfo.actual_pipeline_set.has(pipeline)) return pipeline;
  }
  if (scriptInfo.actual_pipeline_set.has('indirect')) return 'Indirect';
  return 'Manual';
}

function buildFlags(scriptInfo) {
  const flags = [];
  if (!scriptInfo.has_framework_header) flags.push('missing-framework-header');
  if (!scriptInfo.category) flags.push('missing-category');
  else if (!scriptInfo.category_valid) flags.push('invalid-category');
  if (!scriptInfo.purpose) flags.push('missing-purpose');
  else if (!scriptInfo.purpose_valid) flags.push('invalid-purpose');
  if (!scriptInfo.scope) flags.push('missing-scope');
  else if (!scriptInfo.scope_valid) flags.push('invalid-scope');
  if (!scriptInfo.domain) flags.push('missing-domain');
  if (!scriptInfo.needs) flags.push('missing-needs');
  if (!scriptInfo.purpose_statement) flags.push('missing-purpose-statement');
  if (!scriptInfo.pipeline_declared) flags.push('missing-pipeline');
  if (!scriptInfo.usage) flags.push('missing-usage');
  if (!scriptInfo.in_json) flags.push('not-in-json');
  if (scriptInfo.category_match === false) flags.push('header-json-category-mismatch');
  if (scriptInfo.purpose_match === false) flags.push('header-json-purpose-mismatch');
  if (scriptInfo.pipeline_verified.startsWith('MISMATCH:')) {
    if (scriptInfo.pipeline_verified.includes('phantom claim')) flags.push('phantom-pipeline');
    if (scriptInfo.pipeline_verified.includes('undeclared automation')) flags.push('undeclared-automation');
  }
  return flags;
}

function escapeMarkdownCell(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, '<br />');
}

function countTruthyFrameworkFields(values) {
  return FRAMEWORK_FIELDS.filter((field) => String(values[field.key] || '').trim()).length;
}

function detectShebang(content) {
  const match = String(content || '').match(/^#![^\r\n]*/);
  if (!match) return 'none';

  const line = match[0].toLowerCase();
  if (line.includes('node')) return 'node';
  if (line.includes('python')) return 'python';
  if (line.includes('bash') || /\bsh\b/.test(line)) return 'bash';
  return 'unknown';
}

function inferFileKind(repoPath, content) {
  const ext = path.extname(repoPath).toLowerCase();
  const shebang = detectShebang(content);
  const extensionless = ext === '';
  const inHooks = repoPath === '.githooks' || repoPath.startsWith('.githooks/');

  if (['.js', '.cjs', '.mjs', '.ts', '.tsx'].includes(ext)) {
    return { commentStyle: 'jsdoc', command: 'node' };
  }
  if (['.sh', '.bash'].includes(ext)) {
    return { commentStyle: 'hash', command: 'bash' };
  }
  if (ext === '.py') {
    return { commentStyle: 'hash', command: 'python3' };
  }

  if (extensionless || inHooks) {
    if (shebang === 'node') return { commentStyle: 'jsdoc', command: 'node' };
    if (shebang === 'python') return { commentStyle: 'hash', command: 'python3' };
    return { commentStyle: 'hash', command: 'bash' };
  }

  if (shebang === 'node') return { commentStyle: 'jsdoc', command: 'node' };
  if (shebang === 'python') return { commentStyle: 'hash', command: 'python3' };
  return { commentStyle: 'hash', command: 'bash' };
}

function findInsertionPoint(content) {
  const text = String(content || '');
  let index = 0;

  const shebangMatch = text.match(/^(#![^\r\n]*(?:\r?\n|$))/);
  if (shebangMatch) {
    index = shebangMatch[0].length;
  }

  let cursor = index;
  const blankMatch = text.slice(cursor).match(/^(?:[ \t]*\r?\n)*/);
  if (blankMatch) {
    cursor += blankMatch[0].length;
  }

  const strictMatch = text
    .slice(cursor)
    .match(/^[ \t]*(?:'use strict'|"use strict")[ \t]*;?[ \t]*(?:\r?\n|$)/);
  if (strictMatch) {
    cursor += strictMatch[0].length;
  }

  return cursor;
}

function extractTopHeader(content) {
  const text = String(content || '');
  let start = 0;

  const shebangMatch = text.match(/^(#![^\r\n]*(?:\r?\n|$))/);
  if (shebangMatch) {
    start = shebangMatch[0].length;
  }

  const leadingBlankMatch = text.slice(start).match(/^(?:[ \t]*\r?\n)*/);
  if (leadingBlankMatch) {
    start += leadingBlankMatch[0].length;
  }

  const afterStart = text.slice(start);
  if (afterStart.startsWith('/**')) {
    const closeIdx = afterStart.indexOf('*/');
    if (closeIdx !== -1) {
      let end = start + closeIdx + 2;
      const trailingNewline = text.slice(end).match(/^\r?\n/);
      if (trailingNewline) end += trailingNewline[0].length;
      return {
        style: 'jsdoc',
        start,
        end,
        text: text.slice(start, end)
      };
    }
  }

  let cursor = start;
  let sawTagLine = false;
  let sawAnyHeaderLine = false;

  while (cursor < text.length) {
    const lineEnd = text.indexOf('\n', cursor);
    const nextCursor = lineEnd === -1 ? text.length : lineEnd + 1;
    const line = text.slice(cursor, lineEnd === -1 ? text.length : lineEnd);
    const trimmed = line.trim();

    if (!trimmed) {
      if (!sawAnyHeaderLine) break;
      cursor = nextCursor;
      continue;
    }

    if (!trimmed.startsWith('#')) {
      break;
    }

    const isTag = /^#\s*@[\w-]+/.test(trimmed);
    const isContinuation = /^#(?:\s{2,}\S.*|\s*)$/.test(trimmed);

    if (!sawTagLine) {
      if (!isTag) break;
      sawTagLine = true;
      sawAnyHeaderLine = true;
      cursor = nextCursor;
      continue;
    }

    if (isTag || isContinuation) {
      sawAnyHeaderLine = true;
      cursor = nextCursor;
      continue;
    }

    break;
  }

  if (sawTagLine) {
    return {
      style: 'hash',
      start,
      end: cursor,
      text: text.slice(start, cursor)
    };
  }

  return null;
}

function parseTagMap(headerText) {
  const tags = {};
  String(headerText || '')
    .split(/\r?\n/)
    .forEach((line) => {
      const cleaned = String(line || '')
        .trim()
        .replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(/^\*\s?/, '')
        .replace(/^#\s?/, '')
        .trim();

      const match = cleaned.match(/^@([a-z0-9-]+)\s+(.+)$/i);
      if (!match) return;
      const tagName = match[1].toLowerCase();
      const value = String(match[2] || '').trim();
      if (!(tagName in tags)) {
        tags[tagName] = value;
      }
    });
  return tags;
}

function defaultScriptName(repoPath) {
  const ext = path.extname(repoPath);
  return ext ? path.basename(repoPath, ext) : path.basename(repoPath);
}

function defaultUsage(repoPath, command) {
  return `${command || 'node'} ${repoPath} [flags]`;
}

function formatTagLines(entries, prefix) {
  const maxTagLen = entries.reduce((max, [tag]) => Math.max(max, tag.length), 0);
  return entries.map(([tag, value]) => `${prefix}${tag}${' '.repeat(maxTagLen - tag.length + 1)}${value}`);
}

function buildFrameworkHeaderText(kind, values) {
  const entries = [
    ['@script', values.script],
    ['@category', values.category],
    ['@purpose', values.purpose],
    ['@scope', values.scope],
    ['@domain', values.domain],
    ['@needs', values.needs],
    ['@purpose-statement', values.purpose_statement],
    ['@pipeline', values.pipeline_declared]
  ];

  if (values.dualmode) {
    entries.push(['@dualmode', values.dualmode]);
  }
  entries.push(['@usage', values.usage]);

  if (kind.commentStyle === 'hash') {
    return [...formatTagLines(entries, '# '), ''].join('\n');
  }

  return ['/**', ...formatTagLines(entries, ' * '), ' */', ''].join('\n');
}

function makeReplacementContent(content, headerInfo, headerText, replaceExistingHeader) {
  const text = String(content || '');
  if (headerInfo && replaceExistingHeader) {
    return text.slice(0, headerInfo.start) + headerText + text.slice(headerInfo.end);
  }

  const insertAt = findInsertionPoint(text);
  return text.slice(0, insertAt) + headerText + text.slice(insertAt);
}

function runNodeCommand(args) {
  return spawnSync('node', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

function writeRepoFile(repoPath, content) {
  const absPath = path.join(REPO_ROOT, repoPath);
  ensureDirectory(path.dirname(absPath));
  fs.writeFileSync(absPath, content, 'utf8');
}

function snapshotFiles(repoPaths) {
  const snapshot = new Map();
  repoPaths.forEach((repoPath) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    if (!fs.existsSync(absPath)) {
      snapshot.set(repoPath, null);
      return;
    }
    snapshot.set(repoPath, fs.readFileSync(absPath, 'utf8'));
  });
  return snapshot;
}

function detectChangedFiles(snapshot) {
  const changed = [];
  snapshot.forEach((before, repoPath) => {
    const absPath = path.join(REPO_ROOT, repoPath);
    const exists = fs.existsSync(absPath);
    const after = exists ? fs.readFileSync(absPath, 'utf8') : null;
    if (before !== after) {
      changed.push(repoPath);
    }
  });
  return changed.sort();
}

function sumFixCounts(fixes) {
  return Object.entries(fixes).reduce((total, [key, value]) => {
    if (key === 'files_modified' || key === 'planned_files' || key === 'needs_human' || key === 'indexes_regenerated') {
      return total;
    }
    return total + (Number.isFinite(Number(value)) ? Number(value) : 0);
  }, 0);
}

function incrementCount(fixes, key, amount = 1) {
  fixes[key] = (fixes[key] || 0) + amount;
}

function sortClassificationRows(rows) {
  return rows
    .filter((row) => row && typeof row === 'object' && !Array.isArray(row))
    .map((row) => ({
      path: normalizeRepoPath(String(row.path || '').trim()),
      ...(row.script ? { script: String(row.script).trim() } : {}),
      ...(row.category ? { category: String(row.category).trim() } : {}),
      ...(row.purpose ? { purpose: String(row.purpose).trim() } : {}),
      ...(row.scope ? { scope: String(row.scope).trim() } : {}),
      ...(row.needs ? { needs: String(row.needs).trim() } : {}),
      ...(row.purpose_statement ? { purpose_statement: String(row.purpose_statement).trim() } : {}),
      ...(row.pipeline ? { pipeline: String(row.pipeline).trim() } : {}),
      ...(row.dualmode ? { dualmode: String(row.dualmode).trim() } : {})
    }))
    .filter((row) => row.path)
    .sort((left, right) => left.path.localeCompare(right.path));
}

function normalizeComparableValue(value) {
  return String(value || '').trim();
}

function toOrderedPipelineList(input) {
  const pipelines = input instanceof Set ? [...input] : [...parseDeclaredPipelines(input)];
  return pipelines
    .filter(Boolean)
    .sort((left, right) => PIPELINE_ORDER.indexOf(left) - PIPELINE_ORDER.indexOf(right));
}

function pipelineSetIsSuperset(candidate, detected) {
  const candidateSet = new Set(candidate);
  return detected.every((value) => candidateSet.has(value));
}

function selectSafePipelineProposal(scriptInfo, classificationRow, existingTags = {}) {
  const row = classificationRow || {};
  const currentPipeline = scriptInfo.pipeline_declared || existingTags.pipeline || '';
  const candidatePipeline = row.pipeline || '';
  const detectedPipelines = toOrderedPipelineList(scriptInfo.actual_pipeline_set);
  const candidatePipelines = toOrderedPipelineList(candidatePipeline);
  const safeToApply = (
    normalizeComparableValue(candidatePipeline) &&
    normalizeComparableValue(candidatePipeline) !== normalizeComparableValue(currentPipeline) &&
    candidatePipelines.length > 0 &&
    pipelineSetIsSuperset(candidatePipelines, detectedPipelines)
  );

  return {
    current: currentPipeline,
    candidate: candidatePipeline,
    detected: detectedPipelines,
    safe_to_apply: safeToApply,
    needs_human: scriptInfo.pipeline_verified !== 'MATCH' && !safeToApply,
    value: safeToApply ? candidatePipeline : currentPipeline
  };
}

function buildManagedScriptInfoMap(report) {
  return new Map(
    report.scripts
      .filter((script) => isWithinRoots(script.path, GOVERNED_ROOTS))
      .map((script) => [script.path, script])
  );
}

function makeClassificationCandidate(scriptInfo) {
  if (!scriptInfo.category_valid || !scriptInfo.purpose_valid || !scriptInfo.scope_valid) {
    return null;
  }

  const candidate = {
    path: scriptInfo.path,
    script: scriptInfo.script || defaultScriptName(scriptInfo.path),
    category: scriptInfo.category,
    purpose: scriptInfo.purpose,
    scope: scriptInfo.scope
  };

  if (scriptInfo.needs) candidate.needs = scriptInfo.needs;
  if (scriptInfo.purpose_statement) candidate.purpose_statement = scriptInfo.purpose_statement;
  if (scriptInfo.pipeline_declared) candidate.pipeline = scriptInfo.pipeline_declared;
  if (scriptInfo.dualmode) candidate.dualmode = scriptInfo.dualmode;
  return candidate;
}

function buildProjectedHeaderState(scriptInfo, classificationRow, content) {
  const kind = inferFileKind(scriptInfo.path, content);
  const headerInfo = extractTopHeader(content);
  const existingTags = headerInfo ? parseTagMap(headerInfo.text) : {};
  const hasFrameworkHeader = Boolean(existingTags.category || existingTags.purpose || existingTags['purpose-statement']);
  const pipelineDecision = selectSafePipelineProposal(scriptInfo, classificationRow, existingTags);

  const projected = {
    script: scriptInfo.script || existingTags.script || defaultScriptName(scriptInfo.path),
    category: scriptInfo.category || existingTags.category || '',
    purpose: scriptInfo.purpose || existingTags.purpose || '',
    scope: scriptInfo.scope || existingTags.scope || '',
    domain: scriptInfo.domain || existingTags.domain || existingTags.owner || 'docs',
    needs: scriptInfo.needs || existingTags.needs || '',
    purpose_statement: scriptInfo.purpose_statement || existingTags['purpose-statement'] || '',
    pipeline_declared: pipelineDecision.value,
    dualmode: scriptInfo.dualmode || existingTags.dualmode || '',
    usage: scriptInfo.usage || existingTags.usage || defaultUsage(scriptInfo.path, kind.command),
    has_framework_header: true,
    kind,
    headerInfo,
    existingTags,
    replaceExistingHeader: Boolean(headerInfo && hasFrameworkHeader)
  };

  const headerText = buildFrameworkHeaderText(kind, projected);
  const nextContent = makeReplacementContent(content, headerInfo, headerText, projected.replaceExistingHeader);

  return {
    projected,
    headerText,
    nextContent,
    existingTags,
    headerInfo,
    hasFrameworkHeader,
    pipeline_decision: pipelineDecision
  };
}

function buildNeedsHumanEntry(pathName, projectedValues, hasClassificationRow, options = {}) {
  const missing = [];

  if (!projectedValues.category || !CATEGORY_ENUM.includes(projectedValues.category)) missing.push('@category');
  if (!projectedValues.purpose || !PURPOSE_ENUM.includes(projectedValues.purpose)) missing.push('@purpose');
  if (!projectedValues.scope || !isValidGovernanceScope(projectedValues.scope)) missing.push('@scope');
  if (!projectedValues.needs) missing.push('@needs');
  if (!projectedValues.purpose_statement) missing.push('@purpose-statement');
  if (!projectedValues.pipeline_declared || options.pipelineNeedsHuman) missing.push('@pipeline');
  if (!hasClassificationRow) missing.push('classification-row');

  if (missing.length === 0) return null;
  return {
    path: pathName,
    missing
  };
}

function buildProjectedScriptInfo(scriptInfo, projectedValues, classificationRow, hasClassificationRow) {
  const pipelineCheck = verifyPipelineClaim(projectedValues.pipeline_declared, scriptInfo.triggers);
  const projected = {
    ...scriptInfo,
    script: projectedValues.script,
    category: projectedValues.category,
    purpose: projectedValues.purpose,
    scope: projectedValues.scope,
    domain: projectedValues.domain,
    needs: projectedValues.needs,
    purpose_statement: projectedValues.purpose_statement,
    pipeline_declared: projectedValues.pipeline_declared,
    dualmode: projectedValues.dualmode,
    usage: projectedValues.usage,
    has_framework_header: projectedValues.has_framework_header,
    header_field_count: countTruthyFrameworkFields(projectedValues),
    category_valid: projectedValues.category ? CATEGORY_ENUM.includes(projectedValues.category) : false,
    purpose_valid: projectedValues.purpose ? PURPOSE_ENUM.includes(projectedValues.purpose) : false,
    scope_valid: projectedValues.scope ? isValidGovernanceScope(projectedValues.scope) : false,
    in_json: hasClassificationRow,
    category_match: hasClassificationRow ? classificationRow.category === projectedValues.category : 'N/A',
    purpose_match: hasClassificationRow ? classificationRow.purpose === projectedValues.purpose : 'N/A',
    pipeline_verified: pipelineCheck.pipeline_verified,
    declared_pipeline_set: pipelineCheck.declared,
    actual_pipeline_set: pipelineCheck.actual
  };

  projected.grade = determineGrade(projected);
  projected.flags = buildFlags(projected);
  projected.trigger_group = determineGroup(projected);
  return projected;
}

function buildProjectedSummary(report, projectedScripts, nextRows, phantomCount) {
  return {
    total_scripts: projectedScripts.length,
    grade_distribution: {
      A: projectedScripts.filter((script) => script.grade === 'A').length,
      B: projectedScripts.filter((script) => script.grade === 'B').length,
      C: projectedScripts.filter((script) => script.grade === 'C').length,
      F: projectedScripts.filter((script) => script.grade === 'F').length
    },
    pipeline_verification: {
      MATCH: projectedScripts.filter((script) => script.pipeline_verified === 'MATCH').length,
      MISMATCH: projectedScripts.filter((script) => script.pipeline_verified.startsWith('MISMATCH:')).length,
      MISSING: projectedScripts.filter((script) => script.pipeline_verified === 'MISSING').length
    },
    classification_sync: {
      in_json: projectedScripts.filter((script) => nextRows.some((row) => row.path === script.path)).length,
      not_in_json: projectedScripts.filter((script) => !nextRows.some((row) => row.path === script.path)).length,
      phantom: phantomCount
    }
  };
}

function buildRepairPlan(report, options = {}) {
  const dryRun = options.dryRun === true;
  const scopedPaths = new Set(
    Array.isArray(options.scopedPaths) ? options.scopedPaths.map((entry) => normalizeRepoPath(entry)) : []
  );
  const scopedMode = options.scopedMode === true || scopedPaths.size > 0;
  const rowMap = new Map(report.classification_rows.map((row) => [row.path, { ...row }]));
  const fixes = {
    json_phantoms_removed: 0,
    json_entries_added: 0,
    json_entries_updated: 0,
    headers_category_added: 0,
    headers_purpose_added: 0,
    headers_domain_added: 0,
    headers_script_added: 0,
    headers_usage_added: 0,
    headers_scope_added: 0,
    headers_needs_added: 0,
    headers_purpose_statement_added: 0,
    headers_pipeline_corrected: 0,
    indexes_regenerated: false
  };

  const headerUpdates = [];
  const needsHuman = [];
  const managedScriptMap = buildManagedScriptInfoMap(report);
  const liveManagedPaths = [...managedScriptMap.keys()]
    .filter((scriptPath) => !scopedMode || scopedPaths.has(scriptPath))
    .sort();

  if (!scopedMode) {
    for (const [rowPath] of [...rowMap.entries()]) {
      if (!isWithinRoots(rowPath, GOVERNED_ROOTS)) continue;
      if (managedScriptMap.has(rowPath)) continue;
      rowMap.delete(rowPath);
      incrementCount(fixes, 'json_phantoms_removed');
    }
  }

  liveManagedPaths.forEach((scriptPath) => {
    const scriptInfo = managedScriptMap.get(scriptPath);
    const content = readRepoFileOptional(scriptPath);
    const existingRow = rowMap.get(scriptPath) || null;
    let nextRow = existingRow ? { ...existingRow } : null;

    if (!nextRow) {
      const candidate = makeClassificationCandidate(scriptInfo);
      if (candidate) {
        nextRow = candidate;
        rowMap.set(scriptPath, nextRow);
        incrementCount(fixes, 'json_entries_added');
      }
    } else {
      let rowChanged = false;
      const inferredScript = nextRow.script || scriptInfo.script || defaultScriptName(scriptPath);
      if (!nextRow.script && inferredScript) {
        nextRow.script = inferredScript;
        rowChanged = true;
      }
      if (!nextRow.scope && scriptInfo.scope_valid) {
        nextRow.scope = scriptInfo.scope;
        rowChanged = true;
      }
      if (!nextRow.needs && scriptInfo.needs) {
        nextRow.needs = scriptInfo.needs;
        rowChanged = true;
      }
      if (!nextRow.purpose_statement && scriptInfo.purpose_statement) {
        nextRow.purpose_statement = scriptInfo.purpose_statement;
        rowChanged = true;
      }
      if (!nextRow.pipeline && scriptInfo.pipeline_declared) {
        nextRow.pipeline = scriptInfo.pipeline_declared;
        rowChanged = true;
      }
      if (
        scriptInfo.pipeline_declared &&
        scriptInfo.pipeline_verified === 'MATCH' &&
        normalizeComparableValue(nextRow.pipeline) !== normalizeComparableValue(scriptInfo.pipeline_declared)
      ) {
        nextRow.pipeline = scriptInfo.pipeline_declared;
        rowChanged = true;
      }
      if (!nextRow.dualmode && scriptInfo.dualmode) {
        nextRow.dualmode = scriptInfo.dualmode;
        rowChanged = true;
      }
      if (rowChanged) {
        rowMap.set(scriptPath, nextRow);
        incrementCount(fixes, 'json_entries_updated');
      }
    }

    const headerState = buildProjectedHeaderState(scriptInfo, nextRow, content);
    const projectedValues = headerState.projected;

    if (!scriptInfo.category && projectedValues.category) incrementCount(fixes, 'headers_category_added');
    if (!scriptInfo.purpose && projectedValues.purpose) incrementCount(fixes, 'headers_purpose_added');
    if (!scriptInfo.domain && projectedValues.domain) incrementCount(fixes, 'headers_domain_added');
    if (!scriptInfo.script && projectedValues.script) incrementCount(fixes, 'headers_script_added');
    if (!scriptInfo.usage && projectedValues.usage) incrementCount(fixes, 'headers_usage_added');
    if (!scriptInfo.scope && projectedValues.scope) incrementCount(fixes, 'headers_scope_added');
    if (!scriptInfo.needs && projectedValues.needs) incrementCount(fixes, 'headers_needs_added');
    if (!scriptInfo.purpose_statement && projectedValues.purpose_statement) incrementCount(fixes, 'headers_purpose_statement_added');
    if (headerState.pipeline_decision.safe_to_apply) {
      incrementCount(fixes, 'headers_pipeline_corrected');
    }

    if (headerState.nextContent !== content) {
      headerUpdates.push({
        path: scriptPath,
        content: headerState.nextContent
      });
    }

    const needsHumanEntry = buildNeedsHumanEntry(scriptPath, projectedValues, Boolean(nextRow), {
      pipelineNeedsHuman: headerState.pipeline_decision.needs_human
    });
    if (needsHumanEntry) {
      needsHuman.push(needsHumanEntry);
    }
  });

  const nextRows = sortClassificationRows([...rowMap.values()]);
  const currentRowsJson = `${JSON.stringify(sortClassificationRows(report.classification_rows), null, 2)}\n`;
  const nextRowsJson = `${JSON.stringify(nextRows, null, 2)}\n`;
  const classificationChanged = currentRowsJson !== nextRowsJson;

  const projectedScripts = report.scripts.map((scriptInfo) => {
    if (!isWithinRoots(scriptInfo.path, GOVERNED_ROOTS)) return scriptInfo;
    const classificationRow = rowMap.get(scriptInfo.path) || null;
    const content = readRepoFileOptional(scriptInfo.path);
    const { projected } = buildProjectedHeaderState(scriptInfo, classificationRow, content);
    return buildProjectedScriptInfo(scriptInfo, projected, classificationRow, Boolean(classificationRow));
  });

  const projectedSummary = buildProjectedSummary(report, projectedScripts, nextRows, 0);
  const plannedFiles = new Set(headerUpdates.map((entry) => entry.path));
  if (classificationChanged) plannedFiles.add(CLASSIFICATION_DATA_PATH);
  if (headerUpdates.length > 0 || classificationChanged) {
    INDEX_TARGETS.forEach((entry) => plannedFiles.add(entry));
    fixes.indexes_regenerated = true;
  }

  fixes.total_fixes = sumFixCounts(fixes);

  return {
    mode: dryRun ? 'dry-run' : 'fix',
    fixes,
    header_updates: headerUpdates,
    classification_changed: classificationChanged,
    classification_content: nextRowsJson,
    classification_rows: nextRows,
    needs_human: needsHuman.sort((left, right) => left.path.localeCompare(right.path)),
    planned_files: [...plannedFiles].sort(),
    projected_summary: projectedSummary
  };
}

function applyRepairPlan(plan) {
  const modifiedFiles = new Set();

  plan.header_updates.forEach((update) => {
    writeRepoFile(update.path, update.content);
    modifiedFiles.add(update.path);
  });

  if (plan.classification_changed) {
    writeRepoFile(CLASSIFICATION_DATA_PATH, plan.classification_content);
    modifiedFiles.add(CLASSIFICATION_DATA_PATH);
  }

  const indexSnapshot = snapshotFiles(INDEX_TARGETS);
  if (plan.header_updates.length > 0 || plan.classification_changed) {
    const result = runNodeCommand(['tests/unit/script-docs.test.js', '--write', '--rebuild-indexes']);
    if (result.status !== 0) {
      throw new Error(result.stderr || result.stdout || 'Failed to rebuild script indexes.');
    }
  }
  const changedIndexes = detectChangedFiles(indexSnapshot);
  changedIndexes.forEach((repoPath) => modifiedFiles.add(repoPath));

  plan.fixes.indexes_regenerated = changedIndexes.length > 0;
  plan.fixes.total_fixes = sumFixCounts(plan.fixes);

  return {
    changed_indexes: changedIndexes,
    files_modified: [...modifiedFiles].sort()
  };
}

function buildRepairPayload(plan, applied) {
  return {
    mode: plan.mode,
    dry_run: plan.mode === 'dry-run',
    fixes: {
      ...plan.fixes,
      files_modified: applied.files_modified,
      planned_files: plan.planned_files
    },
    needs_human: plan.needs_human,
    projected_summary: plan.projected_summary
  };
}

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# Full Script Inventory Audit');
  lines.push('');
  lines.push(`Generated: ${report.generated_at}`);
  lines.push(`Mode: ${report.mode || 'audit'}`);
  lines.push(`Scan roots: ${DISCOVERY_ROOTS.join(', ')}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`Total scripts discovered: ${report.summary.total_scripts}`);
  lines.push('By trigger category:');
  GROUP_ORDER.forEach((group) => {
    lines.push(`- ${GROUP_LABELS[group]}: ${report.summary.by_trigger[group] || 0}`);
  });
  lines.push('');
  lines.push(`Grade distribution: A ${report.summary.grade_distribution.A} | B ${report.summary.grade_distribution.B} | C ${report.summary.grade_distribution.C} | F ${report.summary.grade_distribution.F}`);
  lines.push(`Pipeline verification: MATCH ${report.summary.pipeline_verification.MATCH} | MISMATCH ${report.summary.pipeline_verification.MISMATCH} | MISSING ${report.summary.pipeline_verification.MISSING}`);
  lines.push(`Classification JSON sync: In JSON ${report.summary.classification_sync.in_json} | Not in JSON ${report.summary.classification_sync.not_in_json} | Phantom ${report.summary.classification_sync.phantom}`);
  lines.push(`Output chain summary: ${report.summary.output_chain_count} chains detected`);
  lines.push('');

  if (report.repair) {
    lines.push('## Repair');
    lines.push('');
    lines.push(`- Mode: ${report.repair.mode}`);
    lines.push(`- Total fixes: ${report.repair.fixes?.total_fixes || 0}`);
    lines.push(`- Files modified: ${(report.repair.fixes?.files_modified || []).length}`);
    lines.push(`- Needs human: ${(report.repair.needs_human || []).length}`);
    lines.push('');
  }

  GROUP_ORDER.forEach((group) => {
    const entries = report.groups[group]?.scripts || [];
    if (entries.length === 0) return;
    lines.push(`## ${GROUP_LABELS[group]}`);
    lines.push('');
    lines.push(`| ${HEADER_TABLE_COLUMNS.join(' | ')} |`);
    lines.push(`| ${HEADER_TABLE_COLUMNS.map(() => '---').join(' | ')} |`);
    entries.forEach((entry) => {
      lines.push(`| ${[
        escapeMarkdownCell(entry.path),
        escapeMarkdownCell(entry.category || 'MISSING'),
        escapeMarkdownCell(entry.purpose || 'MISSING'),
        escapeMarkdownCell(entry.pipeline_declared || 'MISSING'),
        escapeMarkdownCell(entry.pipeline_actual),
        escapeMarkdownCell(entry.pipeline_verified),
        escapeMarkdownCell(entry.outputs_display),
        escapeMarkdownCell(entry.downstream_display),
        escapeMarkdownCell(entry.scope || 'MISSING'),
        escapeMarkdownCell(entry.needs || 'MISSING'),
        escapeMarkdownCell(`${entry.header_field_count}/9`),
        escapeMarkdownCell(entry.grade),
        escapeMarkdownCell(entry.flags.join(', ') || 'none')
      ].join(' | ')} |`);
    });
    lines.push('');
  });

  lines.push('## Discrepancies');
  lines.push('');
  const discrepancySections = [
    ['Phantom pipeline claims', report.discrepancies.phantom_pipeline_claims],
    ['Undeclared automation', report.discrepancies.undeclared_automation],
    ['Not in classification JSON', report.discrepancies.not_in_json],
    ['Phantom JSON entries', report.discrepancies.phantom_json_entries],
    ['Header/JSON mismatches', report.discrepancies.header_json_mismatches]
  ];
  discrepancySections.forEach(([title, entries]) => {
    lines.push(`### ${title}`);
    lines.push('');
    if (!entries.length) {
      lines.push('- None');
      lines.push('');
      return;
    }
    entries.forEach((entry) => {
      lines.push(`- ${typeof entry === 'string' ? entry : entry.path}`);
    });
    lines.push('');
  });

  lines.push('### Output chains');
  lines.push('');
  if (!report.outputChains.length) {
    lines.push('- None');
  } else {
    report.outputChains.forEach((chain) => {
      lines.push(`- ${chain.producer} -> ${chain.output} -> ${chain.consumer}`);
    });
  }
  lines.push('');

  if (report.repair?.needs_human?.length) {
    lines.push('## Needs Human');
    lines.push('');
    report.repair.needs_human.forEach((entry) => {
      lines.push(`- ${entry.path}: ${entry.missing.join(', ')}`);
    });
    lines.push('');
  }

  if (report.warnings.length > 0) {
    lines.push('## Warnings');
    lines.push('');
    report.warnings.forEach((warning) => lines.push(`- ${warning}`));
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function buildSummaryLines(report) {
  const lines = [
    `Total scripts discovered: ${report.summary.total_scripts}`,
    ...GROUP_ORDER.map((group) => `${GROUP_LABELS[group]}: ${report.summary.by_trigger[group] || 0}`),
    `Grade distribution: A ${report.summary.grade_distribution.A} | B ${report.summary.grade_distribution.B} | C ${report.summary.grade_distribution.C} | F ${report.summary.grade_distribution.F}`,
    `Pipeline verification: MATCH ${report.summary.pipeline_verification.MATCH} | MISMATCH ${report.summary.pipeline_verification.MISMATCH} | MISSING ${report.summary.pipeline_verification.MISSING}`,
    `Classification JSON sync: In JSON ${report.summary.classification_sync.in_json} | Not in JSON ${report.summary.classification_sync.not_in_json} | Phantom ${report.summary.classification_sync.phantom}`,
    `Output chain summary: ${report.summary.output_chain_count} chains detected`
  ];

  if (report.repair) {
    lines.push(`Repair total fixes: ${report.repair.fixes?.total_fixes || 0}`);
    lines.push(`Needs human items: ${(report.repair.needs_human || []).length}`);
  }

  return lines;
}

function runAudit(options) {
  const warnings = [];
  const trackedFiles = listTrackedFiles();
  const discoveredScripts = getDiscoveredScripts(trackedFiles);
  const stagedScriptSet = options.stagedOnly ? new Set(listStagedFiles('ACM').filter(isDiscoveredScriptPath)) : null;
  const explicitScriptSet = Array.isArray(options.files) && options.files.length > 0
    ? new Set(options.files.map(normalizeRepoPath).filter(isDiscoveredScriptPath))
    : null;
  const scopedScripts = stagedScriptSet
    ? discoveredScripts.filter((scriptPath) => stagedScriptSet.has(scriptPath))
    : explicitScriptSet
      ? discoveredScripts.filter((scriptPath) => explicitScriptSet.has(scriptPath))
      : discoveredScripts;
  const docs = new Map();
  const callerFiles = new Set([...discoveredScripts, ...SPECIAL_CALLERS, ...PACKAGE_JSON_PATHS, ...getWorkflowFiles(trackedFiles)]);

  callerFiles.forEach((repoPath) => {
    if (!trackedFiles.includes(repoPath)) return;
    docs.set(repoPath, readRepoFile(repoPath, warnings));
  });

  const workflowDocs = loadWorkflowDocuments(getWorkflowFiles(trackedFiles), warnings);
  const classificationRows = loadClassificationRows(trackedFiles, warnings);
  const classificationByPath = new Map();
  classificationRows.forEach((row) => {
    if (row.path) classificationByPath.set(row.path, row);
  });

  const phantomJsonEntries = classificationRows
    .filter((row) => isWithinRoots(row.path, GOVERNED_ROOTS))
    .filter((row) => row.path && !trackedFiles.includes(row.path) && !fs.existsSync(path.join(REPO_ROOT, row.path)))
    .map((row) => ({ ...row, phantom: true }))
    .sort((left, right) => left.path.localeCompare(right.path));

  const scripts = scopedScripts.map((scriptPath) => {
    const content = docs.get(scriptPath) || readRepoFile(scriptPath, warnings);
    const metadata = extractHeaderMetadata(scriptPath, content);
    const triggers = findTriggers(scriptPath, docs, workflowDocs);
    const outputs = extractOutputPaths(scriptPath, content);
    const classification = classificationByPath.get(scriptPath);
    const actualPipeline = triggers.length > 0 ? triggers : [{ type: 'manual', caller: 'none', pipeline: 'manual' }];
    const pipelineCheck = verifyPipelineClaim(metadata.pipeline_declared, actualPipeline);
    const downstreamConsumers = outputs
      .flatMap((output) => findOutputConsumers(output.output_path, scriptPath, docs))
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort();
    const scriptInfo = {
      ...metadata,
      triggers: actualPipeline,
      outputs,
      outputs_display: formatOutputs(outputs),
      downstream_consumers: downstreamConsumers,
      downstream_display: downstreamConsumers.length > 0 ? `Yes: ${downstreamConsumers.join(', ')}` : 'No',
      in_json: Boolean(classification),
      category_match: classification ? classification.category === metadata.category : 'N/A',
      purpose_match: classification ? classification.purpose === metadata.purpose : 'N/A',
      pipeline_verified: pipelineCheck.pipeline_verified,
      declared_pipeline_set: pipelineCheck.declared,
      actual_pipeline_set: pipelineCheck.actual,
      pipeline_actual: formatPipelineActual(actualPipeline)
    };
    scriptInfo.grade = determineGrade(scriptInfo);
    scriptInfo.flags = buildFlags(scriptInfo);
    scriptInfo.trigger_group = determineGroup(scriptInfo);

    if (options.verbose) {
      console.log(
        `[audit-script-inventory] ${scriptPath} | group=${scriptInfo.trigger_group} | grade=${scriptInfo.grade} | pipeline=${scriptInfo.pipeline_verified}`
      );
    }

    return scriptInfo;
  });

  const groups = Object.fromEntries(
    GROUP_ORDER.map((group) => [
      group,
      {
        label: GROUP_LABELS[group],
        scripts: scripts
          .filter((script) => script.trigger_group === group)
          .sort((left, right) => `${left.purpose || ''}|${left.path}`.localeCompare(`${right.purpose || ''}|${right.path}`))
      }
    ])
  );

  Object.values(groups).forEach((group) => {
    group.count = group.scripts.length;
  });

  const outputChains = [];
  scripts.forEach((script) => {
    script.outputs.forEach((output) => {
      if (!output.output_path || output.output_path === 'stdout') return;
      const consumers = findOutputConsumers(output.output_path, script.path, docs);
      consumers.forEach((consumer) => {
        outputChains.push({
          producer: script.path,
          output: output.output_path,
          consumer
        });
      });
    });
  });

  const summary = {
    total_scripts: scripts.length,
    by_trigger: Object.fromEntries(GROUP_ORDER.map((group) => [group, groups[group].scripts.length])),
    grade_distribution: {
      A: scripts.filter((script) => script.grade === 'A').length,
      B: scripts.filter((script) => script.grade === 'B').length,
      C: scripts.filter((script) => script.grade === 'C').length,
      F: scripts.filter((script) => script.grade === 'F').length
    },
    pipeline_verification: {
      MATCH: scripts.filter((script) => script.pipeline_verified === 'MATCH').length,
      MISMATCH: scripts.filter((script) => script.pipeline_verified.startsWith('MISMATCH:')).length,
      MISSING: scripts.filter((script) => script.pipeline_verified === 'MISSING').length
    },
    classification_sync: {
      in_json: scripts.filter((script) => script.in_json).length,
      not_in_json: scripts.filter((script) => !script.in_json).length,
      phantom: phantomJsonEntries.length
    },
    output_chain_count: outputChains.length
  };

  const discrepancies = {
    phantom_pipeline_claims: scripts.filter((script) => script.flags.includes('phantom-pipeline')).map((script) => ({ path: script.path })),
    undeclared_automation: scripts.filter((script) => script.flags.includes('undeclared-automation')).map((script) => ({ path: script.path })),
    not_in_json: scripts.filter((script) => !script.in_json).map((script) => ({ path: script.path })),
    phantom_json_entries: phantomJsonEntries.map((row) => ({ path: row.path, script: row.script || '' })),
    header_json_mismatches: scripts
      .filter((script) => script.category_match === false || script.purpose_match === false)
      .map((script) => ({ path: script.path, category_match: script.category_match, purpose_match: script.purpose_match }))
  };

  return {
    generated_at: new Date().toISOString(),
    mode: options.fix ? (options.dryRun ? 'dry-run' : 'fix') : 'audit',
    scope: options.stagedOnly ? 'staged' : explicitScriptSet ? 'files' : 'full-repo',
    scoped_script_paths: scopedScripts,
    output_dir: normalizeRepoPath(path.relative(REPO_ROOT, path.resolve(REPO_ROOT, options.outputDir))),
    summary,
    groups,
    scripts,
    discrepancies,
    outputChains: outputChains.sort((left, right) => `${left.producer}|${left.output}|${left.consumer}`.localeCompare(`${right.producer}|${right.output}|${right.consumer}`)),
    warnings,
    tracked_files: trackedFiles,
    classification_rows: classificationRows
  };
}

function runAuditWithOptionalRepair(options) {
  const baseReport = runAudit({ ...options, fix: false, dryRun: false });
  if (!options.fix) {
    return baseReport;
  }

  const plan = buildRepairPlan(baseReport, {
    dryRun: options.dryRun,
    scopedMode: options.stagedOnly || (Array.isArray(options.files) && options.files.length > 0),
    scopedPaths: options.stagedOnly || (Array.isArray(options.files) && options.files.length > 0)
      ? baseReport.scoped_script_paths
      : []
  });
  if (options.dryRun) {
    return {
      ...baseReport,
      mode: 'dry-run',
      repair: buildRepairPayload(plan, {
        files_modified: [],
        changed_indexes: []
      }),
      projected_summary: plan.projected_summary
    };
  }

  const applied = applyRepairPlan(plan);
  const postReport = runAudit({ ...options, fix: false, dryRun: false });
  return {
    ...postReport,
    mode: 'fix',
    repair: buildRepairPayload(plan, applied),
    pre_repair_summary: baseReport.summary
  };
}

function writeReportFiles(report, options) {
  const outputDir = path.resolve(REPO_ROOT, options.outputDir);
  ensureDirectory(outputDir);

  if (options.json) {
    fs.writeFileSync(path.join(outputDir, DEFAULT_JSON_PATH), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  }
  if (options.md) {
    fs.writeFileSync(path.join(outputDir, DEFAULT_MD_PATH), buildMarkdownReport(report), 'utf8');
  }
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage();
    process.exit(1);
  }

  if (options.help) {
    usage();
    process.exit(0);
  }

  try {
    const report = runAuditWithOptionalRepair(options);
    writeReportFiles(report, options);

    if (!options.quiet && (options.printSummary || options.verbose)) {
      buildSummaryLines(report).forEach((line) => console.log(line));
    }
  } catch (error) {
    console.error(`audit-script-inventory failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  buildMarkdownReport,
  buildNeedsHumanEntry,
  buildProjectedHeaderState,
  buildRepairPlan,
  buildSummaryLines,
  parseArgs,
  selectSafePipelineProposal,
  runAudit,
  runAuditWithOptionalRepair
};
