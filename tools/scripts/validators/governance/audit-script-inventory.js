#!/usr/bin/env node
/**
 * @script           audit-script-inventory
 * @category         validator
 * @purpose          governance:repo-health
 * @scope            full-repo
 * @owner            docs
 * @needs            R-R14, R-R18, R-C6
 * @purpose-statement Deep inventory audit of every script in the repo. Traces triggers, outputs, downstream chains, and governance compliance. Produces reports grouped by trigger category.
 * @pipeline         manual
 * @usage            node tools/scripts/validators/governance/audit-script-inventory.js [--json] [--md] [--output <dir>] [--verbose]
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const yaml = require('js-yaml');
const {
  CATEGORY_ENUM,
  CLASSIFICATION_DATA_PATH,
  DISCOVERY_ROOTS,
  FRAMEWORK_FIELDS,
  GROUP_LABELS,
  GROUP_ORDER,
  PIPELINE_ORDER,
  PURPOSE_ENUM,
  REQUIRED_FRAMEWORK_KEYS,
  SCOPE_ENUM,
  SCRIPT_EXTENSIONS,
  isDiscoveredScriptPath,
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
    'Usage: node tools/scripts/validators/governance/audit-script-inventory.js [--json] [--md] [--output <dir>] [--verbose]'
  );
}

function parseArgs(argv) {
  const args = {
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
    owner: getTagValue(header, '@owner'),
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
    scope_valid: values.scope ? SCOPE_ENUM.includes(values.scope) : false
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
  if (!outputPath || outputPath === 'stdout') return 'stdout';
  if (outputPath.startsWith('tasks/reports/')) return 'report';
  if (outputPath.endsWith('script-index.md') || outputPath.endsWith('scripts-index.mdx')) return 'generated-index';
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
  if (!scriptInfo.owner) flags.push('missing-owner');
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

function buildMarkdownReport(report) {
  const lines = [];
  lines.push('# Full Script Inventory Audit');
  lines.push('');
  lines.push(`Generated: ${report.generated_at}`);
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

  if (report.warnings.length > 0) {
    lines.push('## Warnings');
    lines.push('');
    report.warnings.forEach((warning) => lines.push(`- ${warning}`));
    lines.push('');
  }

  return `${lines.join('\n')}\n`;
}

function buildSummaryLines(report) {
  return [
    `Total scripts discovered: ${report.summary.total_scripts}`,
    ...GROUP_ORDER.map((group) => `${GROUP_LABELS[group]}: ${report.summary.by_trigger[group] || 0}`),
    `Grade distribution: A ${report.summary.grade_distribution.A} | B ${report.summary.grade_distribution.B} | C ${report.summary.grade_distribution.C} | F ${report.summary.grade_distribution.F}`,
    `Pipeline verification: MATCH ${report.summary.pipeline_verification.MATCH} | MISMATCH ${report.summary.pipeline_verification.MISMATCH} | MISSING ${report.summary.pipeline_verification.MISSING}`,
    `Classification JSON sync: In JSON ${report.summary.classification_sync.in_json} | Not in JSON ${report.summary.classification_sync.not_in_json} | Phantom ${report.summary.classification_sync.phantom}`,
    `Output chain summary: ${report.summary.output_chain_count} chains detected`
  ];
}

function runAudit(options) {
  const warnings = [];
  const trackedFiles = listTrackedFiles();
  const discoveredScripts = getDiscoveredScripts(trackedFiles);
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
    .filter((row) => row.path && !trackedFiles.includes(row.path) && !fs.existsSync(path.join(REPO_ROOT, row.path)))
    .map((row) => ({ ...row, phantom: true }))
    .sort((left, right) => left.path.localeCompare(right.path));

  const scripts = discoveredScripts.map((scriptPath) => {
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
    output_dir: normalizeRepoPath(path.relative(REPO_ROOT, path.resolve(REPO_ROOT, options.outputDir))),
    summary,
    groups,
    scripts,
    discrepancies,
    outputChains: outputChains.sort((left, right) => `${left.producer}|${left.output}|${left.consumer}`.localeCompare(`${right.producer}|${right.output}|${right.consumer}`)),
    warnings
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

  const report = runAudit(options);
  writeReportFiles(report, options);

  if (options.printSummary || options.verbose) {
    buildSummaryLines(report).forEach((line) => console.log(line));
  }
}

main();
