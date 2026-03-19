#!/usr/bin/env node
/**
 * @script            audit-scripts
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts, tasks/README.md, tasks/reports, tests/unit/script-docs.test.js, tests/README.md
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/audit-scripts.js [flags]
 */

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { execSync } = require('child_process')
const {
  extractLeadingScriptHeader,
  getSectionLines,
  getTagValue,
  hasFrameworkHeaderTags,
} = require('../lib/script-header-utils')

let yaml = null
try {
  // Optional dependency; parser falls back to text heuristics if unavailable.
  yaml = require('../lib/load-js-yaml')
} catch (_err) {
  yaml = null
}

const REPO_ROOT = process.cwd()
const DEFAULT_FORMAT = 'both'
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops'
const REPORTS_INDEX_PATH = path.join('tasks', 'reports', 'INDEX.md')

const RULES_SOURCE = ['tests/unit/script-docs.test.js', 'tests/README.md']

const LEGACY_REQUIRED_TAGS = [
  '@script',
  '@summary',
  '@owner',
  '@scope',
  '@usage',
  '@inputs',
  '@outputs',
  '@exit-codes',
  '@examples',
  '@notes',
]

const FRAMEWORK_REQUIRED_TAGS = [
  '@script',
  '@category',
  '@purpose',
  '@scope',
  '@owner',
  '@needs',
  '@purpose-statement',
  '@pipeline',
]

const LEGACY_INLINE_REQUIRED_TAGS = ['@script', '@summary', '@owner', '@scope']
const FRAMEWORK_INLINE_REQUIRED_TAGS = FRAMEWORK_REQUIRED_TAGS
const LEGACY_BLOCK_REQUIRED_TAGS = [
  '@usage',
  '@inputs',
  '@outputs',
  '@exit-codes',
  '@examples',
  '@notes',
]
const PLACEHOLDER_PATTERNS = [
  /^<.*>$/,
  /^todo\b/i,
  /^tbd\b/i,
  /^fill\b/i,
  /^replace$/i,
  /^replace me$/i,
  /^n\/a$/i,
  /^none$/i,
  /^placeholder$/i,
]

const SCRIPT_EXTENSIONS = new Set([
  '.js',
  '.cjs',
  '.mjs',
  '.ts',
  '.tsx',
  '.sh',
  '.bash',
  '.py',
])
const PACKAGE_JSON_PATHS = [
  'tests/package.json',
  'tools/package.json',

  'tools/scripts/snippets/generate-data/scripts/package.json',
]
const WORKFLOW_DIR = '.github/workflows'
const HOOK_FILES = ['.githooks/pre-commit', '.githooks/verify.sh']

const IGNORED_DIR_SEGMENTS = new Set([
  'node_modules',
  '.git',
  '.venv',
  'tmp',
  'notion',
])
const SCRIPT_COMMAND_NAMES = new Set([
  'node',
  'bash',
  'sh',
  'python',
  'python3',
  'npm',
  'npx',
  'pnpm',
  'yarn',
])

function usage() {
  console.log(
    'Usage: node tools/scripts/audit-scripts.js [--format both|md|json] [--output-dir <dir>] [--strict]'
  )
}

function parseArgs(argv) {
  const out = {
    format: DEFAULT_FORMAT,
    outputDir: DEFAULT_OUTPUT_DIR,
    strict: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (token === '--strict') {
      out.strict = true
      continue
    }

    if (token === '--format') {
      out.format = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }

    if (token.startsWith('--format=')) {
      out.format = token.slice('--format='.length).trim()
      continue
    }

    if (token === '--output-dir') {
      out.outputDir = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }

    if (token.startsWith('--output-dir=')) {
      out.outputDir = token.slice('--output-dir='.length).trim()
      continue
    }

    console.error(`Unknown argument: ${token}`)
    usage()
    process.exit(1)
  }

  if (!['both', 'md', 'json'].includes(out.format)) {
    console.error(`Invalid --format value: ${out.format}`)
    usage()
    process.exit(1)
  }

  if (!out.outputDir) {
    console.error('Missing --output-dir value')
    usage()
    process.exit(1)
  }

  return out
}

function normalizeRepoPath(value) {
  return String(value || '')
    .split(path.sep)
    .join('/')
}

function ensureWithinRepo(absPath) {
  const rel = normalizeRepoPath(path.relative(REPO_ROOT, absPath))
  if (!rel || rel === '.' || rel.startsWith('..')) return ''
  return rel
}

function fileExists(repoPath) {
  const full = path.join(REPO_ROOT, repoPath)
  return fs.existsSync(full) && fs.statSync(full).isFile()
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8')
  } catch (_err) {
    return ''
  }
}

function shouldExclude(repoPath) {
  const p = normalizeRepoPath(repoPath)
  if (p.startsWith('tools/scripts/archive/')) return true
  const parts = p.split('/')
  if (parts.some((part) => IGNORED_DIR_SEGMENTS.has(part))) return true
  if (p.endsWith('.disabled')) return true
  if (path.basename(p).includes('.bak')) return true
  return false
}

function hasShebang(repoPath) {
  try {
    const content = fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8')
    return content.startsWith('#!')
  } catch (_err) {
    return false
  }
}

function listTrackedFiles() {
  try {
    return execSync('git ls-files', { cwd: REPO_ROOT, encoding: 'utf8' })
      .split('\n')
      .map((line) => normalizeRepoPath(line.trim()))
      .filter(Boolean)
  } catch (_err) {
    return []
  }
}

function discoverScripts() {
  const files = listTrackedFiles()
  const out = new Set()

  for (const repoPath of files) {
    if (shouldExclude(repoPath)) continue
    const ext = path.extname(repoPath).toLowerCase()
    if (SCRIPT_EXTENSIONS.has(ext) || hasShebang(repoPath)) {
      out.add(repoPath)
    }
  }

  return [...out].sort()
}

function detectHeaderMode(header) {
  return hasFrameworkHeaderTags(header) ? 'framework' : 'legacy'
}

function isPlaceholderValue(value) {
  const v = String(value || '').trim()
  if (!v) return true
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(v))
}

function extractPrimaryUsage(header) {
  const inlineUsage = getTagValue(header, '@usage')
  const lines = getSectionLines(header, '@usage')
  return [
    inlineUsage && !isPlaceholderValue(inlineUsage) ? inlineUsage : '',
    ...lines.filter((line) => line && !line.startsWith('@'))
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s*\\\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function validateTemplate(repoPath) {
  const content = readFileSafe(repoPath)
  const header = extractLeadingScriptHeader(content)
  const mode = detectHeaderMode(header)
  const requiredTags =
    mode === 'framework' ? FRAMEWORK_REQUIRED_TAGS : LEGACY_REQUIRED_TAGS
  const inlineRequiredTags =
    mode === 'framework' ? FRAMEWORK_INLINE_REQUIRED_TAGS : LEGACY_INLINE_REQUIRED_TAGS
  const blockRequiredTags =
    mode === 'framework' ? [] : LEGACY_BLOCK_REQUIRED_TAGS
  const missingTags = requiredTags.filter((tag) => !header.includes(tag))
  const emptyTags = []

  for (const tag of inlineRequiredTags) {
    if (missingTags.includes(tag)) continue
    if (isPlaceholderValue(getTagValue(header, tag))) emptyTags.push(tag)
  }

  for (const tag of blockRequiredTags) {
    if (missingTags.includes(tag)) continue
    const lines = getSectionLines(header, tag)
    const meaningful = lines.filter((line) => !isPlaceholderValue(line))
    if (meaningful.length === 0) emptyTags.push(tag)
  }

  if (mode === 'framework' && !missingTags.includes('@usage')) {
    const usage = getTagValue(header, '@usage')
    if (usage && isPlaceholderValue(usage)) emptyTags.push('@usage')
  }

  return {
    valid: missingTags.length === 0 && emptyTags.length === 0,
    mode,
    missingTags,
    emptyTags,
    scriptTag: getTagValue(header, '@script') || path.basename(repoPath),
    summaryTag:
      (mode === 'framework'
        ? getTagValue(header, '@purpose-statement') ||
          getTagValue(header, '@purpose') ||
          getTagValue(header, '@summary')
        : getTagValue(header, '@summary') ||
          getTagValue(header, '@purpose-statement') ||
          getTagValue(header, '@purpose')) ||
      '',
    ownerTag: getTagValue(header, '@owner') || '',
    scopeTag: getTagValue(header, '@scope') || '',
    categoryTag: getTagValue(header, '@category') || '',
    purposeTag: getTagValue(header, '@purpose') || '',
    purposeStatementTag: getTagValue(header, '@purpose-statement') || '',
    usageTag: extractPrimaryUsage(header),
  }
}

function fallbackPurpose(repoPath) {
  const name = path
    .basename(repoPath, path.extname(repoPath))
    .replace(/[-_.]+/g, ' ')
    .trim()
  return `Utility script for ${name || repoPath}.`
}

function tokenize(commandSegment) {
  return (
    String(commandSegment || '').match(/"[^"]*"|'[^']*'|`[^`]*`|\S+/g) || []
  )
}

function cleanToken(token) {
  let out = String(token || '').trim()
  if (!out) return ''
  out = out.replace(/^['"`]/, '').replace(/['"`]$/, '')
  out = out.replace(/^[([{}]+/, '').replace(/[)\]};,]+$/, '')
  if (!out) return ''
  if (out.startsWith('$') || out.includes('${')) return ''
  if (out.includes('*')) return ''
  if (/[<>|]/.test(out)) return ''
  if (out.startsWith('http://') || out.startsWith('https://')) return ''
  return out
}

function resolveTokenPath(token, cwdRel) {
  const cleaned = cleanToken(token)
  if (!cleaned) return ''
  if (cleaned === '.' || cleaned === '..') return ''

  const abs = path.isAbsolute(cleaned)
    ? cleaned
    : path.resolve(REPO_ROOT, cwdRel || '', cleaned)
  return ensureWithinRepo(abs)
}

function splitCommandSegments(command) {
  const lines = String(command || '').split(/\r?\n/)
  const out = []
  for (const line of lines) {
    const segments = line.split(/&&|\|\||;/)
    for (const seg of segments) {
      const trimmed = String(seg || '').trim()
      if (trimmed) out.push(trimmed)
    }
  }
  return out
}

function extractDirectScriptRefs(segment, cwdRel, scriptSet) {
  const refs = new Set()
  for (const rawToken of tokenize(segment)) {
    const token = cleanToken(rawToken)
    if (!token) continue
    if (SCRIPT_COMMAND_NAMES.has(token)) continue

    if (scriptSet.has(token)) refs.add(token)
    const resolved = resolveTokenPath(token, cwdRel)
    if (resolved && scriptSet.has(resolved)) refs.add(resolved)
  }
  return [...refs]
}

function resolvePackageDir(prefixToken, cwdRel) {
  if (!prefixToken) return normalizeRepoPath(cwdRel || '')
  const resolved = resolveTokenPath(prefixToken, cwdRel)
  if (!resolved) return ''
  if (resolved.endsWith('/package.json'))
    return normalizeRepoPath(path.dirname(resolved))
  return resolved
}

function extractNpmRuns(segment, cwdRel, packageScriptsByDir) {
  const out = []
  const re = /\bnpm\b([^|;&\n]*)\brun\b\s+([A-Za-z0-9:_-]+)/g
  let match
  while ((match = re.exec(segment))) {
    const opts = String(match[1] || '')
    const scriptName = String(match[2] || '').trim()
    if (!scriptName) continue

    const prefixMatch = opts.match(/--prefix\s+([^\s]+)/)
    const packageDir = resolvePackageDir(
      prefixMatch ? prefixMatch[1] : '',
      cwdRel
    )
    if (!packageScriptsByDir.has(packageDir)) continue

    out.push({ packageDir, scriptName })
  }
  return out
}

function compactText(value, max = 180) {
  const oneLine = String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
  if (oneLine.length <= max) return oneLine
  return `${oneLine.slice(0, max - 3)}...`
}

function collectScriptRefsFromCommand(
  command,
  cwdRel,
  scriptSet,
  packageScriptsByDir
) {
  const collected = new Map()
  const seenNpm = new Set()

  function add(scriptPath, viaNpm, evidence) {
    const existing = collected.get(scriptPath) || {
      path: scriptPath,
      viaNpm: false,
      evidence: new Set(),
    }
    existing.viaNpm = existing.viaNpm || Boolean(viaNpm)
    if (evidence) existing.evidence.add(evidence)
    collected.set(scriptPath, existing)
  }

  function walk(currentCommand, currentDir, viaNpm, depth, chain) {
    if (depth > 5) return
    const segments = splitCommandSegments(currentCommand)

    for (const segment of segments) {
      const directRefs = extractDirectScriptRefs(segment, currentDir, scriptSet)
      for (const ref of directRefs) {
        add(
          ref,
          viaNpm,
          chain ? `${chain} -> ${compactText(segment)}` : compactText(segment)
        )
      }

      const npmRuns = extractNpmRuns(segment, currentDir, packageScriptsByDir)
      for (const run of npmRuns) {
        const key = `${run.packageDir}::${run.scriptName}`
        if (seenNpm.has(key)) continue
        seenNpm.add(key)

        const packageData = packageScriptsByDir.get(run.packageDir)
        const nestedCommand =
          packageData &&
          packageData.scripts &&
          packageData.scripts[run.scriptName]
        if (!nestedCommand) continue

        const nextChain = chain
          ? `${chain} -> npm run ${run.scriptName} (${packageData.packagePath})`
          : `npm run ${run.scriptName} (${packageData.packagePath})`

        walk(nestedCommand, run.packageDir, true, depth + 1, nextChain)
      }
    }
  }

  walk(command, cwdRel, false, 0, '')

  return [...collected.values()].map((entry) => ({
    path: entry.path,
    viaNpm: entry.viaNpm,
    evidence: [...entry.evidence].sort(),
  }))
}

function loadPackageScripts() {
  const map = new Map()
  for (const packagePath of PACKAGE_JSON_PATHS) {
    if (!fileExists(packagePath)) continue
    try {
      const parsed = JSON.parse(readFileSafe(packagePath))
      const scripts =
        parsed && parsed.scripts && typeof parsed.scripts === 'object'
          ? parsed.scripts
          : {}
      const dir = normalizeRepoPath(path.dirname(packagePath))
      map.set(dir, { packagePath, scripts })
    } catch (_err) {
      // Skip malformed package files; the report still proceeds.
    }
  }
  return map
}

function uniqueUsageEntries(entries) {
  const seen = new Set()
  const out = []
  for (const entry of entries) {
    const key = JSON.stringify({
      sourceType: entry.sourceType,
      sourcePath: entry.sourcePath,
      location: entry.location,
      whenTags: [...(entry.whenTags || [])].sort(),
      viaNpm: Boolean(entry.viaNpm),
    })
    if (seen.has(key)) continue
    seen.add(key)
    out.push({
      sourceType: entry.sourceType,
      sourcePath: entry.sourcePath,
      location: entry.location,
      whenTags: [...new Set(entry.whenTags || [])].sort(),
      viaNpm: Boolean(entry.viaNpm),
      evidence: [...new Set(entry.evidence || [])].sort(),
    })
  }
  return out.sort((a, b) => {
    const ka = `${a.sourceType}:${a.sourcePath}:${a.location || ''}`
    const kb = `${b.sourceType}:${b.sourcePath}:${b.location || ''}`
    return ka.localeCompare(kb)
  })
}

function addUsage(usageMap, scriptPath, entry) {
  if (!usageMap.has(scriptPath)) return
  const list = usageMap.get(scriptPath)
  list.push(entry)
}

function parseWorkflowFile(repoPath) {
  const raw = readFileSafe(repoPath)
  let parsed = null

  if (yaml) {
    try {
      parsed = yaml.load(raw)
    } catch (_err) {
      parsed = null
    }
  }

  return { raw, parsed }
}

function extractRawWorkflowOnBlock(rawText) {
  const lines = String(rawText || '').split(/\r?\n/)
  const captured = []
  let collecting = false
  let onIndent = -1

  for (const line of lines) {
    const trimmed = String(line || '').trim()
    const indent = lineIndent(line)

    if (!collecting) {
      if (/^on:\s*$/.test(trimmed)) {
        collecting = true
        onIndent = indent
        captured.push(line)
        continue
      }

      const inlineMatch = line.match(/^(\s*)on:\s+(.+)$/)
      if (inlineMatch) {
        return line
      }
      continue
    }

    if (trimmed && indent <= onIndent) break
    captured.push(line)
  }

  return captured.join('\n')
}

function extractWorkflowTriggers(parsed, rawText) {
  const tags = new Set()
  const triggerMap = {
    pull_request: 'pr',
    schedule: 'scheduled',
    workflow_dispatch: 'workflow-dispatch',
    push: 'push',
  }

  const onValue = (() => {
    if (parsed && Object.prototype.hasOwnProperty.call(parsed, 'on'))
      return parsed.on
    if (parsed && Object.prototype.hasOwnProperty.call(parsed, true))
      return parsed.true
    return null
  })()

  if (typeof onValue === 'string') {
    if (triggerMap[onValue]) tags.add(triggerMap[onValue])
  } else if (Array.isArray(onValue)) {
    for (const name of onValue) {
      if (triggerMap[name]) tags.add(triggerMap[name])
    }
  } else if (onValue && typeof onValue === 'object') {
    for (const key of Object.keys(onValue)) {
      if (triggerMap[key]) tags.add(triggerMap[key])
    }
  }

  if (tags.size === 0) {
    const raw = extractRawWorkflowOnBlock(rawText)
    if (/\bpull_request\b/.test(raw)) tags.add('pr')
    if (/\bschedule\b/.test(raw)) tags.add('scheduled')
    if (/\bworkflow_dispatch\b/.test(raw)) tags.add('workflow-dispatch')
    if (/\bpush\b/.test(raw)) tags.add('push')
  }

  return [...tags].sort()
}

function extractCommandLinesFromHook(content) {
  const lines = String(content || '').split('\n')
  const out = []
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const trimmed = String(line || '').trim()
    if (!trimmed) continue
    if (trimmed.startsWith('#')) continue
    if (trimmed.startsWith('echo ') || trimmed.startsWith('printf ')) continue
    if (!/\b(node|bash|python3?|npm|npx)\b/.test(trimmed)) continue
    out.push({ line: i + 1, command: trimmed })
  }
  return out
}

function parseYamlScalar(value) {
  return String(value || '')
    .trim()
    .replace(/^['"]/, '')
    .replace(/['"]$/, '')
}

function lineIndent(line) {
  const match = String(line || '').match(/^ */)
  return match ? match[0].length : 0
}

function extractWorkflowRunStepsFromRaw(rawText) {
  const lines = String(rawText || '').split(/\r?\n/)
  const steps = []
  let inJobs = false
  let currentJobId = ''
  let currentJobWorkingDir = ''
  let currentStep = null

  function flushStep() {
    if (!currentStep || !String(currentStep.run || '').trim()) return
    steps.push({
      jobId: currentStep.jobId || currentJobId || 'job',
      name: currentStep.name || 'run',
      workingDirectory:
        currentStep.workingDirectory || currentJobWorkingDir || '',
      run: currentStep.run,
    })
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const indent = lineIndent(line)
    const trimmed = String(line || '').trim()

    if (!trimmed) continue
    if (trimmed === 'jobs:') {
      inJobs = true
      continue
    }
    if (!inJobs) continue

    const jobMatch = line.match(/^  ([A-Za-z0-9_-]+):\s*$/)
    if (jobMatch) {
      flushStep()
      currentStep = null
      currentJobId = jobMatch[1]
      currentJobWorkingDir = ''
      continue
    }
    if (!currentJobId) continue

    const stepStartMatch = line.match(/^(\s*)-\s+(name|run|uses):\s*(.*)$/)
    if (stepStartMatch) {
      flushStep()
      currentStep = {
        jobId: currentJobId,
        name: 'run',
        workingDirectory: '',
        run: '',
        indent: stepStartMatch[1].length,
      }
      const field = stepStartMatch[2]
      const rawValue = stepStartMatch[3]
      if (field === 'name') currentStep.name = parseYamlScalar(rawValue)
      if (field === 'run') currentStep.run = parseYamlScalar(rawValue)

      if (field === 'run' && /^[>|]-?$/.test(rawValue.trim())) {
        const blockIndent = indent + 2
        const blockLines = []
        for (let j = i + 1; j < lines.length; j += 1) {
          const nextLine = lines[j]
          const nextTrimmed = String(nextLine || '').trim()
          const nextIndent = lineIndent(nextLine)
          if (nextTrimmed && nextIndent <= indent) break
          if (!nextTrimmed) {
            blockLines.push('')
            i = j
            continue
          }
          blockLines.push(nextLine.slice(Math.min(nextLine.length, blockIndent)))
          i = j
        }
        currentStep.run = blockLines.join('\n').trim()
      }
      continue
    }

    if (currentStep) {
      if (indent <= currentStep.indent) {
        flushStep()
        currentStep = null
      } else {
        const nameMatch = line.match(/^\s+name:\s*(.+)$/)
        if (nameMatch) {
          currentStep.name = parseYamlScalar(nameMatch[1])
          continue
        }

        const workingDirMatch = line.match(/^\s+working-directory:\s*(.+)$/)
        if (workingDirMatch) {
          currentStep.workingDirectory = parseYamlScalar(workingDirMatch[1])
          continue
        }

        const runMatch = line.match(/^\s+run:\s*(.*)$/)
        if (runMatch) {
          const rawValue = runMatch[1]
          if (/^[>|]-?$/.test(rawValue.trim())) {
            const blockIndent = indent + 2
            const blockLines = []
            for (let j = i + 1; j < lines.length; j += 1) {
              const nextLine = lines[j]
              const nextTrimmed = String(nextLine || '').trim()
              const nextIndent = lineIndent(nextLine)
              if (nextTrimmed && nextIndent <= indent) break
              if (!nextTrimmed) {
                blockLines.push('')
                i = j
                continue
              }
              blockLines.push(nextLine.slice(Math.min(nextLine.length, blockIndent)))
              i = j
            }
            currentStep.run = blockLines.join('\n').trim()
          } else {
            currentStep.run = parseYamlScalar(rawValue)
          }
          continue
        }
      }
    }

    const jobWorkingDirMatch = line.match(/^\s+working-directory:\s*(.+)$/)
    if (jobWorkingDirMatch) {
      currentJobWorkingDir = parseYamlScalar(jobWorkingDirMatch[1])
    }
  }

  flushStep()
  return steps
}

function buildUsageMap(scriptPaths, scriptSet, packageScriptsByDir) {
  const usageMap = new Map()
  for (const scriptPath of scriptPaths) usageMap.set(scriptPath, [])

  // 1) Direct package-script references (manual/local invocation context).
  for (const [packageDir, packageData] of packageScriptsByDir.entries()) {
    const scriptsObj = packageData.scripts || {}
    const scriptNames = Object.keys(scriptsObj).sort()
    for (const scriptName of scriptNames) {
      const command = String(scriptsObj[scriptName] || '')
      if (!command) continue
      const refs = collectScriptRefsFromCommand(
        command,
        packageDir,
        scriptSet,
        packageScriptsByDir
      )
      for (const ref of refs) {
        addUsage(usageMap, ref.path, {
          sourceType: 'package-script',
          sourcePath: packageData.packagePath,
          location: `scripts.${scriptName}`,
          whenTags: ['npm-script', 'manual'],
          viaNpm: ref.viaNpm,
          evidence: [`command: ${compactText(command, 240)}`].concat(
            ref.evidence
          ),
        })
      }
    }
  }

  // 2) Workflow run-step references.
  const workflowDirAbs = path.join(REPO_ROOT, WORKFLOW_DIR)
  if (
    fs.existsSync(workflowDirAbs) &&
    fs.statSync(workflowDirAbs).isDirectory()
  ) {
    const workflowFiles = fs
      .readdirSync(workflowDirAbs)
      .filter((name) => name.endsWith('.yml') || name.endsWith('.yaml'))
      .sort()

    for (const workflowName of workflowFiles) {
      const workflowPath = normalizeRepoPath(
        path.join(WORKFLOW_DIR, workflowName)
      )
      const { raw, parsed } = parseWorkflowFile(workflowPath)
      const triggerTags = extractWorkflowTriggers(parsed, raw)
      const doc = parsed && typeof parsed === 'object' ? parsed : {}
      const displayName = String(doc.name || workflowName)
      const jobs = doc.jobs && typeof doc.jobs === 'object' ? doc.jobs : {}

      for (const [jobId, jobDef] of Object.entries(jobs)) {
        const job = jobDef && typeof jobDef === 'object' ? jobDef : {}
        const jobWorkingDir = normalizeRepoPath(
          String(job['working-directory'] || '').trim()
        )
        const steps = Array.isArray(job.steps) ? job.steps : []

        for (const step of steps) {
          if (!step || typeof step !== 'object' || typeof step.run !== 'string')
            continue
          const stepName = String(step.name || 'run')
          const stepWorkingDir = normalizeRepoPath(
            String(step['working-directory'] || jobWorkingDir || '').trim()
          )
          const refs = collectScriptRefsFromCommand(
            step.run,
            stepWorkingDir,
            scriptSet,
            packageScriptsByDir
          )
          for (const ref of refs) {
            const whenTags = new Set(triggerTags)
            if (ref.viaNpm) whenTags.add('npm-script')

            addUsage(usageMap, ref.path, {
              sourceType: 'workflow',
              sourcePath: workflowPath,
              location: `${displayName} > ${jobId} > ${stepName}`,
              whenTags: [...whenTags].sort(),
              viaNpm: ref.viaNpm,
              evidence: [`run: ${compactText(step.run, 240)}`].concat(
                ref.evidence
              ),
            })
          }
        }
      }

      if (Object.keys(jobs).length === 0) {
        const rawSteps = extractWorkflowRunStepsFromRaw(raw)
        for (const step of rawSteps) {
          const refs = collectScriptRefsFromCommand(
            step.run,
            normalizeRepoPath(step.workingDirectory || ''),
            scriptSet,
            packageScriptsByDir
          )
          for (const ref of refs) {
            const whenTags = new Set(triggerTags)
            if (ref.viaNpm) whenTags.add('npm-script')

            addUsage(usageMap, ref.path, {
              sourceType: 'workflow',
              sourcePath: workflowPath,
              location: `${displayName} > ${step.jobId} > ${step.name}`,
              whenTags: [...whenTags].sort(),
              viaNpm: ref.viaNpm,
              evidence: [`run: ${compactText(step.run, 240)}`].concat(
                ref.evidence
              ),
            })
          }
        }
      }
    }
  }

  // 3) Hook command references.
  for (const hookPath of HOOK_FILES) {
    if (!fileExists(hookPath)) continue
    const content = readFileSafe(hookPath)
    const commands = extractCommandLinesFromHook(content)
    for (const cmd of commands) {
      const refs = collectScriptRefsFromCommand(
        cmd.command,
        '',
        scriptSet,
        packageScriptsByDir
      )
      for (const ref of refs) {
        const whenTags = new Set()
        if (hookPath === '.githooks/pre-commit') whenTags.add('pre-commit')
        if (ref.viaNpm) whenTags.add('npm-script')
        addUsage(usageMap, ref.path, {
          sourceType: 'hook',
          sourcePath: hookPath,
          location: `line ${cmd.line}`,
          whenTags: [...whenTags].sort(),
          viaNpm: ref.viaNpm,
          evidence: [`line: ${compactText(cmd.command, 240)}`].concat(
            ref.evidence
          ),
        })
      }
    }
  }

  // Dedupe usage entries.
  for (const [scriptPath, entries] of usageMap.entries()) {
    usageMap.set(scriptPath, uniqueUsageEntries(entries))
  }

  return usageMap
}

function hasAnyUsageWithTag(usages, tag) {
  return usages.some((entry) => (entry.whenTags || []).includes(tag))
}

function assignCategories(scriptPath, purpose, usages, template = {}) {
  const roleTags = new Set()
  const runContextTags = new Set()
  const evidence = []

  const basename = path.basename(scriptPath).toLowerCase()
  const lower = [
    scriptPath,
    purpose,
    template.categoryTag || '',
    template.purposeTag || '',
    template.purposeStatementTag || '',
  ]
    .join(' ')
    .toLowerCase()

  if (template.categoryTag === 'generator') {
    roleTags.add('generator')
    evidence.push('role:generator via @category generator')
  }

  if (template.categoryTag === 'enforcer') {
    roleTags.add('enforcement')
    evidence.push('role:enforcement via @category enforcer')
  }

  if (
    template.categoryTag === 'generator' &&
    template.purposeTag === 'feature:translation'
  ) {
    roleTags.add('sync')
    evidence.push('role:sync via feature:translation generator metadata')
  }

  if (scriptPath.startsWith('tests/') || basename.includes('.test.')) {
    roleTags.add('test')
    evidence.push('role:test via tests path or .test filename')
  }

  if (
    scriptPath.startsWith('.githooks/') ||
    usages.some((entry) => entry.sourceType === 'hook') ||
    hasAnyUsageWithTag(usages, 'pre-commit')
  ) {
    roleTags.add('hook')
    evidence.push('role:hook via .githooks path or hook invocation context')
  }

  if (usages.some((entry) => entry.sourceType === 'workflow')) {
    roleTags.add('ci')
    evidence.push('role:ci via workflow invocation')
  }

  if (/(generate|generator|build|index|create|scaffold)/.test(lower)) {
    roleTags.add('generator')
    evidence.push('role:generator via name/summary keyword')
  }

  if (
    /(enforce|verify|check|guard|lint|validate|validation|policy)/.test(
      lower
    ) ||
    hasAnyUsageWithTag(usages, 'pre-commit') ||
    hasAnyUsageWithTag(usages, 'pr')
  ) {
    roleTags.add('enforcement')
    evidence.push('role:enforcement via keyword or gating context')
  }

  if (/(audit|report|scan)/.test(lower)) {
    roleTags.add('audit')
    evidence.push('role:audit via name/summary keyword')
  }

  if (/(fetch|sync|update|pull)/.test(lower)) {
    roleTags.add('sync')
    evidence.push('role:sync via name/summary keyword')
  }

  if (
    /(run-all|run-pr|runner|entrypoint|test-suite)/.test(lower) ||
    basename.startsWith('run-') ||
    basename === 'lpd'
  ) {
    roleTags.add('runner')
    evidence.push('role:runner via orchestrator naming pattern')
  }

  if (
    scriptPath.startsWith('tools/scripts/test/') ||
    /(fixture|stub|mock|allowed-test|allowed-script|allowed\.js)/.test(lower)
  ) {
    roleTags.add('fixture')
    evidence.push('role:fixture via fixture/test-helper path or naming')
  }

  if (
    scriptPath.includes('.bak') ||
    scriptPath.endsWith('.disabled') ||
    /(deprecated|legacy)/.test(lower)
  ) {
    roleTags.add('deprecated')
    evidence.push('role:deprecated via backup/legacy marker')
  }

  for (const usage of usages) {
    for (const tag of usage.whenTags || []) {
      runContextTags.add(tag)
    }
  }

  if (scriptPath === '.githooks/pre-commit') {
    runContextTags.add('pre-commit')
    evidence.push(
      'run-context:pre-commit for the primary pre-commit hook script'
    )
  }

  if (usages.some((entry) => entry.sourceType === 'package-script')) {
    runContextTags.add('npm-script')
  }

  if (runContextTags.size === 0) {
    runContextTags.add('manual')
    evidence.push('run-context:manual due to no direct invocation mapping')
  }

  if (roleTags.size === 0) {
    roleTags.add('helper')
    evidence.push(
      'role:helper fallback because no stronger primary role was matched'
    )
  }

  return {
    roleTags: [...roleTags].sort(),
    runContextTags: [...runContextTags].sort(),
    evidence: [...new Set(evidence)].sort(),
  }
}

function stripLeadingTemplateHeader(content) {
  let text = String(content || '').replace(/\r/g, '\n')

  if (text.startsWith('#!')) {
    const idx = text.indexOf('\n')
    text = idx === -1 ? '' : text.slice(idx + 1)
  }

  text = text.replace(/^\s*\/\*\*[\s\S]*?\*\/\s*/, '')

  const lines = text.split('\n')
  let i = 0
  while (i < lines.length && !lines[i].trim()) i += 1

  if (i < lines.length && lines[i].trim().startsWith('#')) {
    let j = i
    let sawScriptTag = false
    while (j < lines.length) {
      const trimmed = lines[j].trim()
      if (!trimmed) {
        j += 1
        continue
      }
      if (trimmed.startsWith('#')) {
        if (trimmed.includes('@script')) sawScriptTag = true
        j += 1
        continue
      }
      break
    }
    if (sawScriptTag) {
      lines.splice(i, j - i)
      text = lines.join('\n')
    }
  }

  return text.trim()
}

function tokenizeBody(body) {
  return (
    String(body || '')
      .toLowerCase()
      .match(/[a-z_][a-z0-9_-]*/g) || []
  )
}

function buildBodySignature(content) {
  const stripped = stripLeadingTemplateHeader(content)
  const normalized = stripped
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n')

  const tokens = tokenizeBody(normalized)
  const tokenSet = new Set(tokens)
  const hash = crypto.createHash('sha1').update(normalized).digest('hex')

  return { normalized, hash, tokens, tokenSet }
}

function jaccardSimilarity(aSet, bSet) {
  if (!aSet.size || !bSet.size) return 0
  let intersection = 0
  for (const token of aSet) {
    if (bSet.has(token)) intersection += 1
  }
  const union = aSet.size + bSet.size - intersection
  if (union <= 0) return 0
  return intersection / union
}

function chooseCanonicalScript(paths) {
  function score(repoPath) {
    let value = 0
    if (repoPath.includes('.bak')) value += 100
    if (repoPath.includes('/test/')) value += 40
    if (repoPath.startsWith('tasks/scripts/')) value += 25
    if (repoPath.startsWith('tests/')) value += 20
    if (repoPath.startsWith('.github/scripts/')) value += 10
    if (repoPath.startsWith('tools/scripts/')) value -= 10
    return value
  }

  return [...paths].sort((a, b) => {
    const sa = score(a)
    const sb = score(b)
    if (sa !== sb) return sa - sb
    if (a.length !== b.length) return a.length - b.length
    return a.localeCompare(b)
  })[0]
}

function intersectRoleTags(scriptRecordsByPath, paths) {
  if (!paths.length) return []
  let current = new Set(scriptRecordsByPath.get(paths[0]).categories.roleTags)
  for (let i = 1; i < paths.length; i += 1) {
    const next = new Set(scriptRecordsByPath.get(paths[i]).categories.roleTags)
    current = new Set([...current].filter((tag) => next.has(tag)))
  }
  return [...current].sort()
}

function buildOverlap(scriptRecords) {
  const signatures = new Map()
  const scriptRecordsByPath = new Map()
  for (const record of scriptRecords) {
    signatures.set(record.path, buildBodySignature(readFileSafe(record.path)))
    scriptRecordsByPath.set(record.path, record)
  }

  const exactBuckets = new Map()
  for (const [scriptPath, sig] of signatures.entries()) {
    if (!sig.normalized) continue
    const list = exactBuckets.get(sig.hash) || []
    list.push(scriptPath)
    exactBuckets.set(sig.hash, list)
  }

  const exactClusters = []
  for (const [, list] of exactBuckets.entries()) {
    if (list.length < 2) continue
    const scripts = [...list].sort()
    const canonical = chooseCanonicalScript(scripts)
    const sharedRoleTags = intersectRoleTags(scriptRecordsByPath, scripts)
    exactClusters.push({
      type: 'exact',
      scripts,
      canonical,
      sharedRoleTags,
      recommendation: `Consolidate to \`${canonical}\`; replace duplicates with wrappers or remove after migrating references.`,
    })
  }

  exactClusters.sort((a, b) => {
    if (b.scripts.length !== a.scripts.length)
      return b.scripts.length - a.scripts.length
    return a.scripts[0].localeCompare(b.scripts[0])
  })

  const groupsByBasename = new Map()
  for (const record of scriptRecords) {
    const key = path.basename(record.path)
    const list = groupsByBasename.get(key) || []
    list.push(record.path)
    groupsByBasename.set(key, list)
  }

  const exactPairs = new Set()
  for (const cluster of exactClusters) {
    const sorted = [...cluster.scripts].sort()
    for (let i = 0; i < sorted.length; i += 1) {
      for (let j = i + 1; j < sorted.length; j += 1) {
        exactPairs.add(`${sorted[i]}@@${sorted[j]}`)
      }
    }
  }

  const nearClusters = []
  for (const [, paths] of groupsByBasename.entries()) {
    if (paths.length < 2) continue
    const sorted = [...paths].sort()
    for (let i = 0; i < sorted.length; i += 1) {
      for (let j = i + 1; j < sorted.length; j += 1) {
        const a = sorted[i]
        const b = sorted[j]
        const exactKey = `${a}@@${b}`
        if (exactPairs.has(exactKey)) continue

        const aSig = signatures.get(a)
        const bSig = signatures.get(b)
        if (!aSig || !bSig) continue
        if (aSig.tokenSet.size < 20 || bSig.tokenSet.size < 20) continue

        const similarity = jaccardSimilarity(aSig.tokenSet, bSig.tokenSet)
        if (similarity < 0.93) continue

        const scripts = [a, b].sort()
        const canonical = chooseCanonicalScript(scripts)
        const sharedRoleTags = intersectRoleTags(scriptRecordsByPath, scripts)

        nearClusters.push({
          type: 'near',
          scripts,
          canonical,
          similarity: Number(similarity.toFixed(4)),
          sharedRoleTags,
          recommendation: `Review \`${a}\` and \`${b}\` for shared implementation; likely consolidate around \`${canonical}\`.`,
        })
      }
    }
  }

  nearClusters.sort((a, b) => {
    if (b.similarity !== a.similarity) return b.similarity - a.similarity
    return a.scripts[0].localeCompare(b.scripts[0])
  })

  const clusters = exactClusters.concat(nearClusters)
  const recommendations = [
    ...new Set(clusters.map((cluster) => cluster.recommendation)),
  ]

  return {
    exactClusters,
    nearClusters,
    clusters,
    recommendations,
  }
}

function summarizeUsage(entries) {
  if (!entries || entries.length === 0)
    return 'Manual/on-demand (no direct hook/workflow/package reference found)'
  const parts = entries.map((entry) => {
    const when = (entry.whenTags || []).length
      ? entry.whenTags.join(',')
      : 'manual'
    const where = entry.location
      ? `${entry.sourcePath}#${entry.location}`
      : entry.sourcePath
    return `${entry.sourceType}:${where} [${when}]`
  })
  return parts.join(' | ')
}

function buildCategoryCounts(scriptRecords) {
  const roleTagCounts = {}
  const runContextTagCounts = {}
  const categoryCounts = {}

  function bump(map, key) {
    map[key] = (map[key] || 0) + 1
  }

  for (const record of scriptRecords) {
    for (const tag of record.categories.roleTags) {
      bump(roleTagCounts, tag)
      bump(categoryCounts, tag)
    }
    for (const tag of record.categories.runContextTags) {
      bump(runContextTagCounts, tag)
      bump(categoryCounts, tag)
    }
  }

  return { categoryCounts, roleTagCounts, runContextTagCounts }
}

function buildScriptRecords(scriptPaths, usageMap) {
  const records = []
  for (const scriptPath of scriptPaths) {
    const template = validateTemplate(scriptPath)
    const purpose = template.summaryTag || fallbackPurpose(scriptPath)
    const usedBy = usageMap.get(scriptPath) || []
    const categories = assignCategories(scriptPath, purpose, usedBy, template)

    records.push({
      path: scriptPath,
      purpose,
      templateCompliance: {
        valid: template.valid,
        missingTags: template.missingTags,
        emptyTags: template.emptyTags,
        rulesSource: RULES_SOURCE,
      },
      metadata: {
        scriptTag: template.scriptTag,
        ownerTag: template.ownerTag,
        scopeTag: template.scopeTag,
        usageTag: template.usageTag,
      },
      categories,
      usedBy,
    })
  }
  return records.sort((a, b) => a.path.localeCompare(b.path))
}

function mdEscape(value) {
  return String(value || '').replace(/\|/g, '\\|')
}

function formatTemplateStatus(templateCompliance) {
  if (templateCompliance.valid) return 'PASS'
  const parts = []
  if (templateCompliance.missingTags.length)
    parts.push(`missing ${templateCompliance.missingTags.join(', ')}`)
  if (templateCompliance.emptyTags.length)
    parts.push(`empty ${templateCompliance.emptyTags.join(', ')}`)
  return `FAIL (${parts.join('; ')})`
}

function buildMarkdownReport(report) {
  const lines = []
  const summary = report.summary

  lines.push('# SCRIPT_AUDIT')
  lines.push('')
  lines.push(`Generated: ${report.generatedAt}`)
  lines.push('')
  lines.push('## Rules Source')
  for (const source of report.rulesSource) {
    lines.push(`- \`${source}\``)
  }
  lines.push('')
  lines.push('## Summary')
  lines.push(`- Total scripts: ${summary.totalScripts}`)
  lines.push(`- Template compliant: ${summary.templateCompliant}`)
  lines.push(`- Template non-compliant: ${summary.templateNonCompliant}`)
  lines.push(`- Exact overlap clusters: ${summary.exactOverlapClusters}`)
  lines.push(`- Near overlap clusters: ${summary.nearOverlapClusters}`)
  lines.push('')

  lines.push('## Category Counts')
  lines.push('')
  lines.push('| Category | Count |')
  lines.push('|---|---:|')
  for (const [tag, count] of Object.entries(summary.categoryCounts).sort(
    (a, b) => a[0].localeCompare(b[0])
  )) {
    lines.push(`| \`${mdEscape(tag)}\` | ${count} |`)
  }
  lines.push('')

  lines.push('## Script Inventory')
  lines.push('')
  lines.push(
    '| Script | Purpose | Template | Role Tags | Run Context Tags | Used and When |'
  )
  lines.push('|---|---|---|---|---|---|')
  for (const script of report.scripts) {
    lines.push(
      `| \`${mdEscape(script.path)}\` | ${mdEscape(script.purpose)} | ${mdEscape(formatTemplateStatus(script.templateCompliance))} | ${mdEscape(script.categories.roleTags.join(', '))} | ${mdEscape(script.categories.runContextTags.join(', '))} | ${mdEscape(summarizeUsage(script.usedBy))} |`
    )
  }
  lines.push('')

  lines.push('## Template Compliance Failures')
  lines.push('')
  const failing = report.scripts.filter(
    (script) => !script.templateCompliance.valid
  )
  if (failing.length === 0) {
    lines.push(
      'All discovered scripts meet the required script template rules.'
    )
  } else {
    for (const script of failing) {
      lines.push(`### \`${script.path}\``)
      lines.push(
        `- Missing tags: ${script.templateCompliance.missingTags.length ? script.templateCompliance.missingTags.join(', ') : 'none'}`
      )
      lines.push(
        `- Empty/placeholder tags: ${script.templateCompliance.emptyTags.length ? script.templateCompliance.emptyTags.join(', ') : 'none'}`
      )
      lines.push('')
    }
  }
  lines.push('')

  lines.push('## Usage Detail')
  lines.push('')
  for (const script of report.scripts) {
    lines.push(`### \`${script.path}\``)
    lines.push(`- Purpose: ${script.purpose}`)
    lines.push(
      `- Template compliance: ${formatTemplateStatus(script.templateCompliance)}`
    )
    lines.push(`- Role tags: ${script.categories.roleTags.join(', ')}`)
    lines.push(
      `- Run-context tags: ${script.categories.runContextTags.join(', ')}`
    )
    if (!script.usedBy.length) {
      lines.push(
        '- Used by: Manual/on-demand (no direct hook/workflow/package reference found)'
      )
    } else {
      lines.push('- Used by:')
      for (const usage of script.usedBy) {
        const when = usage.whenTags.length
          ? usage.whenTags.join(', ')
          : 'manual'
        const where = usage.location
          ? `${usage.sourcePath}#${usage.location}`
          : usage.sourcePath
        lines.push(`  - ${usage.sourceType}: ${where} (when: ${when})`)
      }
    }
    lines.push('')
  }

  lines.push('## Overlap Clusters')
  lines.push('')
  if (!report.overlap.clusters.length) {
    lines.push('No exact or high-similarity overlap clusters detected.')
  } else {
    let idx = 1
    for (const cluster of report.overlap.clusters) {
      lines.push(`### Cluster ${idx} (${cluster.type})`)
      lines.push(
        `- Scripts: ${cluster.scripts.map((value) => `\`${value}\``).join(', ')}`
      )
      lines.push(`- Canonical candidate: \`${cluster.canonical}\``)
      if (cluster.similarity !== undefined) {
        lines.push(`- Similarity: ${cluster.similarity}`)
      }
      lines.push(
        `- Shared role tags: ${cluster.sharedRoleTags.length ? cluster.sharedRoleTags.join(', ') : 'none'}`
      )
      lines.push(`- Recommendation: ${cluster.recommendation}`)
      lines.push('')
      idx += 1
    }
  }
  lines.push('')

  lines.push('## Consolidation Recommendations')
  lines.push('')
  if (!report.overlap.recommendations.length) {
    lines.push('No consolidation recommendations generated.')
  } else {
    for (const recommendation of report.overlap.recommendations) {
      lines.push(`- ${recommendation}`)
    }
  }
  lines.push('')

  return `${lines.join('\n').trim()}\n`
}

function getCurrentBranch() {
  try {
    return execSync('git branch --show-current', {
      cwd: REPO_ROOT,
      encoding: 'utf8',
    }).trim()
  } catch (_err) {
    return 'unknown'
  }
}

function parseApprovedGeneratorRows() {
  const readmePath = path.join(REPO_ROOT, 'tasks', 'README.md')
  if (!fs.existsSync(readmePath)) return []

  const lines = fs.readFileSync(readmePath, 'utf8').split('\n')
  const sectionIndex = lines.findIndex(
    (line) => line.trim() === '## Approved generators'
  )
  if (sectionIndex === -1) return []

  const tableHeaderIndex = lines.findIndex(
    (line, idx) =>
      idx > sectionIndex &&
      line.trim() === '| Generator script | Output path(s) |'
  )
  if (tableHeaderIndex === -1) return []

  const rows = []
  for (let i = tableHeaderIndex + 2; i < lines.length; i += 1) {
    const line = lines[i].trim()
    if (!line.startsWith('|')) break
    const parts = line.split('|').map((part) => part.trim())
    if (parts.length < 4) continue
    rows.push({
      generator: parts[1],
      outputs: parts[2],
    })
  }
  return rows
}

function buildReportsIndex() {
  const rows = parseApprovedGeneratorRows()
  const lines = [
    '# tasks/reports Index',
    '',
    `Generated: ${new Date().toISOString()}`,
    'Generator: `tools/scripts/audit-scripts.js`',
    `Branch: ${getCurrentBranch()}`,
    '',
    '| Generator script | Output path(s) |',
    '|---|---|',
  ]

  if (rows.length === 0) {
    lines.push('| _No approved generators found_ | _Check `tasks/README.md`_ |')
  } else {
    for (const row of rows) {
      lines.push(`| ${row.generator} | ${row.outputs} |`)
    }
  }

  return `${lines.join('\n')}\n`
}

function writeReports(report, options) {
  const outputDir = path.isAbsolute(options.outputDir)
    ? options.outputDir
    : path.join(REPO_ROOT, options.outputDir)
  fs.mkdirSync(outputDir, { recursive: true })

  const mdPath = path.join(outputDir, 'SCRIPT_AUDIT.md')
  const jsonPath = path.join(outputDir, 'SCRIPT_AUDIT.json')
  const indexPath = path.join(REPO_ROOT, REPORTS_INDEX_PATH)

  if (options.format === 'both' || options.format === 'md') {
    fs.writeFileSync(mdPath, buildMarkdownReport(report), 'utf8')
  }

  if (options.format === 'both' || options.format === 'json') {
    fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8')
  }

  fs.mkdirSync(path.dirname(indexPath), { recursive: true })
  fs.writeFileSync(indexPath, buildReportsIndex(), 'utf8')

  return {
    outputDir,
    mdPath,
    jsonPath,
    indexPath,
  }
}

function buildReport(scriptRecords, overlap, options) {
  const { categoryCounts, roleTagCounts, runContextTagCounts } =
    buildCategoryCounts(scriptRecords)
  const templateCompliant = scriptRecords.filter(
    (script) => script.templateCompliance.valid
  ).length
  const templateNonCompliant = scriptRecords.length - templateCompliant

  return {
    generatedAt: new Date().toISOString(),
    repoRoot: REPO_ROOT,
    options: {
      format: options.format,
      outputDir: options.outputDir,
      strict: options.strict,
    },
    rulesSource: RULES_SOURCE,
    summary: {
      totalScripts: scriptRecords.length,
      templateCompliant,
      templateNonCompliant,
      categoryCounts,
      roleTagCounts,
      runContextTagCounts,
      exactOverlapClusters: overlap.exactClusters.length,
      nearOverlapClusters: overlap.nearClusters.length,
    },
    scripts: scriptRecords,
    overlap: {
      clusters: overlap.clusters,
      recommendations: overlap.recommendations,
    },
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const scriptPaths = discoverScripts()
  const scriptSet = new Set(scriptPaths)
  const packageScriptsByDir = loadPackageScripts()
  const usageMap = buildUsageMap(scriptPaths, scriptSet, packageScriptsByDir)
  const scriptRecords = buildScriptRecords(scriptPaths, usageMap)
  const overlap = buildOverlap(scriptRecords)
  const report = buildReport(scriptRecords, overlap, options)
  const outputs = writeReports(report, options)

  console.log(`Discovered scripts: ${report.summary.totalScripts}`)
  console.log(`Template compliant: ${report.summary.templateCompliant}`)
  console.log(`Exact overlap clusters: ${report.summary.exactOverlapClusters}`)
  console.log(`Near overlap clusters: ${report.summary.nearOverlapClusters}`)

  if (options.format === 'both' || options.format === 'md') {
    console.log(
      `Wrote: ${normalizeRepoPath(path.relative(REPO_ROOT, outputs.mdPath))}`
    )
  }
  if (options.format === 'both' || options.format === 'json') {
    console.log(
      `Wrote: ${normalizeRepoPath(path.relative(REPO_ROOT, outputs.jsonPath))}`
    )
  }

  if (options.strict && report.summary.templateNonCompliant > 0) {
    console.error(
      `Strict mode failure: ${report.summary.templateNonCompliant} scripts failed template compliance.`
    )
    process.exit(1)
  }
}

main()
