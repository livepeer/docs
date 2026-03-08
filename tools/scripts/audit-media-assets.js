#!/usr/bin/env node
/**
 * @script audit-media-assets
 * @summary Audit repo media assets, references, ignore leakage, and externalized asset branch inventory.
 * @owner docs
 * @scope tools/scripts, tasks/reports/media-audit
 *
 * @usage
 *   node tools/scripts/audit-media-assets.js [--manifest <path>] [--summary <path>] [--assets-branch-ref <ref>] [--check-staged]
 *
 * @inputs
 *   --manifest <path> (default: tasks/reports/media-audit/media-audit-manifest.json)
 *   --summary <path> (default: tasks/reports/media-audit/media-audit-summary.md)
 *   --assets-branch-ref <ref> (default: origin/docs-v2-assets)
 *   --check-staged (default: false)
 *
 * @outputs
 *   - Writes a JSON manifest and Markdown summary under tasks/reports/media-audit unless ALREADY_RESOLVED short-circuits to summary-only
 *
 * @exit-codes
 *   0 = audit completed successfully
 *   1 = invalid args or git/audit failure
 *
 * @examples
 *   node tools/scripts/audit-media-assets.js
 *   node tools/scripts/audit-media-assets.js --assets-branch-ref origin/docs-v2-assets --check-staged
 *
 * @notes
 *   Uses fs.statSync byte sizes, auto-fetches missing origin/<branch> refs without checkout, and scans only MDX/JSX sources for reference status
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawnSync } = require('child_process')

const REPO_ROOT = process.cwd()
const DEFAULT_MANIFEST_PATH = 'tasks/reports/media-audit/media-audit-manifest.json'
const DEFAULT_SUMMARY_PATH = 'tasks/reports/media-audit/media-audit-summary.md'
const DEFAULT_ASSETS_BRANCH_REF = 'origin/docs-v2-assets'
const ONE_MB = 1024 * 1024
const FIVE_MB = 5 * ONE_MB
const TARGET_EXTENSIONS = new Set([
  '.mp4',
  '.mov',
  '.webm',
  '.gif',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.pdf',
])
const SOURCE_EXTENSIONS = new Set(['.mdx', '.jsx'])
const RAW_ASSET_BRANCH_NAMES = ['assets', 'docs-v2-assets']

function usage() {
  console.log(
    'Usage: node tools/scripts/audit-media-assets.js [--manifest <path>] [--summary <path>] [--assets-branch-ref <ref>] [--check-staged]'
  )
}

function parseArgs(argv) {
  const options = {
    manifestPath: DEFAULT_MANIFEST_PATH,
    summaryPath: DEFAULT_SUMMARY_PATH,
    assetsBranchRef: DEFAULT_ASSETS_BRANCH_REF,
    checkStaged: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]

    if (token === '--help' || token === '-h') {
      usage()
      process.exit(0)
    }

    if (token === '--check-staged') {
      options.checkStaged = true
      continue
    }

    if (token === '--manifest') {
      options.manifestPath = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }

    if (token.startsWith('--manifest=')) {
      options.manifestPath = token.slice('--manifest='.length).trim()
      continue
    }

    if (token === '--summary') {
      options.summaryPath = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }

    if (token.startsWith('--summary=')) {
      options.summaryPath = token.slice('--summary='.length).trim()
      continue
    }

    if (token === '--assets-branch-ref') {
      options.assetsBranchRef = String(argv[i + 1] || '').trim()
      i += 1
      continue
    }

    if (token.startsWith('--assets-branch-ref=')) {
      options.assetsBranchRef = token.slice('--assets-branch-ref='.length).trim()
      continue
    }

    console.error(`Unknown argument: ${token}`)
    usage()
    process.exit(1)
  }

  if (!options.manifestPath) {
    console.error('Missing --manifest value')
    usage()
    process.exit(1)
  }

  if (!options.summaryPath) {
    console.error('Missing --summary value')
    usage()
    process.exit(1)
  }

  if (!options.assetsBranchRef) {
    console.error('Missing --assets-branch-ref value')
    usage()
    process.exit(1)
  }

  return options
}

function normalizeRepoPath(value) {
  return String(value || '')
    .replace(/^\.\//, '')
    .split(path.sep)
    .join('/')
}

function absoluteFromRepoPath(repoPath) {
  return path.join(REPO_ROOT, normalizeRepoPath(repoPath))
}

function ensureDirForFile(repoPath) {
  fs.mkdirSync(path.dirname(absoluteFromRepoPath(repoPath)), { recursive: true })
}

function fileExists(repoPath) {
  try {
    return fs.statSync(absoluteFromRepoPath(repoPath)).isFile()
  } catch (_err) {
    return false
  }
}

function readFileUtf8(repoPath) {
  return fs.readFileSync(absoluteFromRepoPath(repoPath), 'utf8')
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function uniqueSorted(values) {
  return [...new Set(values.map((value) => normalizeRepoPath(value)).filter(Boolean))].sort()
}

function runShell(command, options = {}) {
  const allowFailure = Boolean(options.allowFailure)
  try {
    return execSync(command, {
      cwd: REPO_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch (error) {
    if (allowFailure) return ''
    const stderr = String(error.stderr || '').trim()
    const stdout = String(error.stdout || '').trim()
    const detail = stderr || stdout || error.message
    throw new Error(`Command failed: ${command}\n${detail}`)
  }
}

function runCommand(command, args, options = {}) {
  const allowFailure = Boolean(options.allowFailure)
  const result = spawnSync(command, args, {
    cwd: REPO_ROOT,
    encoding: options.encoding === 'buffer' ? null : 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  if (result.status === 0) {
    return options.encoding === 'buffer' ? result.stdout : String(result.stdout || '')
  }

  if (allowFailure) {
    return options.encoding === 'buffer' ? Buffer.alloc(0) : ''
  }

  const stderr = options.encoding === 'buffer'
    ? String(result.stderr || '')
    : String(result.stderr || '').trim()
  const stdout = options.encoding === 'buffer'
    ? String(result.stdout || '')
    : String(result.stdout || '').trim()
  const detail = stderr || stdout || `exit ${result.status}`
  throw new Error(`Command failed: ${command} ${args.join(' ')}\n${detail}`)
}

function splitNullDelimited(value) {
  return String(value || '')
    .split('\0')
    .map((entry) => normalizeRepoPath(entry.trim()))
    .filter(Boolean)
}

function getTrackedFiles() {
  return splitNullDelimited(runCommand('git', ['ls-files', '-z']))
}

function getStagedFiles() {
  return splitNullDelimited(
    runCommand('git', ['diff', '--cached', '--name-only', '-z', '--diff-filter=ACMR'])
  )
}

function collectUniverseFiles(checkStaged) {
  return checkStaged ? getStagedFiles() : getTrackedFiles()
}

function isLikelyBinary(repoPath) {
  try {
    const fd = fs.openSync(absoluteFromRepoPath(repoPath), 'r')
    const buffer = Buffer.alloc(8192)
    const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0)
    fs.closeSync(fd)

    if (bytesRead === 0) return false

    let suspicious = 0
    for (let i = 0; i < bytesRead; i += 1) {
      const byte = buffer[i]
      if (byte === 0) return true
      if (byte === 9 || byte === 10 || byte === 13) continue
      if (byte < 32 || byte === 127) suspicious += 1
    }

    return suspicious / bytesRead > 0.3
  } catch (_err) {
    return false
  }
}

function categoryFromExtension(extension) {
  if (['.mp4', '.mov', '.webm'].includes(extension)) return 'video'
  if (extension === '.gif') return 'gif'
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(extension)) return 'image'
  if (extension === '.pdf') return 'pdf'
  return 'other'
}

function migrationTargetForAsset(repoPath, sizeBytes, extension) {
  if (sizeBytes < ONE_MB) return 'keep'
  if (repoPath.startsWith('v1/') && sizeBytes > FIVE_MB) return 'review'
  if (['.mp4', '.mov', '.webm'].includes(extension) && sizeBytes > FIVE_MB) return 'migrate_r2'
  if (extension === '.gif' && sizeBytes > ONE_MB) return 'migrate_cloudinary'
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(extension) && sizeBytes > FIVE_MB) {
    return 'migrate_cloudinary'
  }
  if (extension === '.pdf' && sizeBytes > ONE_MB) return 'migrate_github_releases'
  return 'keep'
}

function collectAssetPaths(checkStaged) {
  const universeFiles = collectUniverseFiles(checkStaged)
  const assets = new Set()

  for (const repoPath of universeFiles) {
    if (!fileExists(repoPath)) continue
    const extension = path.extname(repoPath).toLowerCase()
    if (TARGET_EXTENSIONS.has(extension)) {
      assets.add(normalizeRepoPath(repoPath))
      continue
    }

    if (repoPath.startsWith('snippets/automations/') && isLikelyBinary(repoPath)) {
      assets.add(normalizeRepoPath(repoPath))
    }
  }

  return [...assets].sort()
}

function collectSourceFiles(checkStaged) {
  return collectUniverseFiles(checkStaged)
    .filter((repoPath) => SOURCE_EXTENSIONS.has(path.extname(repoPath).toLowerCase()))
    .filter((repoPath) => fileExists(repoPath))
    .sort()
}

function readSourceIndex(sourceFiles) {
  return sourceFiles.map((repoPath) => ({
    path: repoPath,
    content: readFileUtf8(repoPath),
  }))
}

function buildTokenSet(repoPath) {
  const normalized = normalizeRepoPath(repoPath)
  const encoded = encodeURI(normalized)
  return uniqueSorted([
    normalized,
    `/${normalized}`,
    encoded,
    `/${encoded}`,
  ])
}

function buildBasenameTokenSet(repoPath) {
  const basename = path.basename(repoPath)
  return uniqueSorted([basename, encodeURI(basename)])
}

function buildRawGitHubRegex(repoPath, refPattern) {
  const normalized = normalizeRepoPath(repoPath)
  const encoded = encodeURI(normalized)
  return new RegExp(
    `https://raw\\.githubusercontent\\.com/livepeer/docs/${refPattern}/(?:${escapeRegExp(encoded)}|${escapeRegExp(normalized)})(?=$|[?#"'\\s)])`
  )
}

function buildLocalAssetMatcher(repoPath) {
  return {
    directTokens: buildTokenSet(repoPath),
    basenameTokens: buildBasenameTokenSet(repoPath),
    rawGitHubRegex: buildRawGitHubRegex(repoPath, '[^/"\'\\s)]+'),
    assetBranchRegex: buildRawGitHubRegex(repoPath, '(?:assets|docs-v2-assets)'),
  }
}

function buildBranchFileMatcher(repoPath) {
  return {
    directTokens: buildTokenSet(repoPath),
    basenameTokens: buildBasenameTokenSet(repoPath),
    rawGitHubRegexes: RAW_ASSET_BRANCH_NAMES.map((branchName) =>
      buildRawGitHubRegex(repoPath, escapeRegExp(branchName))
    ),
  }
}

function matchReferences(sources, matcher) {
  const directMatches = []
  const basenameOnlyMatches = []
  const assetBranchMatches = []

  for (const source of sources) {
    let matched = false

    if (matcher.directTokens.some((token) => source.content.includes(token))) {
      matched = true
    }

    if (!matched && matcher.rawGitHubRegex && matcher.rawGitHubRegex.test(source.content)) {
      matched = true
    }

    if (
      matcher.assetBranchRegex &&
      matcher.assetBranchRegex.test(source.content)
    ) {
      assetBranchMatches.push(source.path)
      matched = true
    }

    if (
      !matched &&
      Array.isArray(matcher.rawGitHubRegexes) &&
      matcher.rawGitHubRegexes.some((regex) => regex.test(source.content))
    ) {
      matched = true
    }

    if (matched) {
      directMatches.push(source.path)
      continue
    }

    if (matcher.basenameTokens.some((token) => source.content.includes(token))) {
      basenameOnlyMatches.push(source.path)
    }
  }

  return {
    directMatches: uniqueSorted(directMatches),
    basenameOnlyMatches: uniqueSorted(basenameOnlyMatches),
    assetBranchMatches: uniqueSorted(assetBranchMatches),
  }
}

function getGitignoreLeakageFiles() {
  return splitNullDelimited(runCommand('git', ['ls-files', '-ci', '--exclude-standard', '-z'], { allowFailure: true }))
}

function ensureGitRef(ref) {
  const verified = runCommand('git', ['rev-parse', '--verify', '--quiet', `${ref}^{commit}`], { allowFailure: true })
  if (String(verified || '').trim()) return ref

  const remoteMatch = ref.match(/^origin\/(.+)$/)
  if (!remoteMatch) {
    throw new Error(`Missing git ref: ${ref}`)
  }

  const branchName = remoteMatch[1]
  runCommand('git', [
    'fetch',
    'origin',
    `refs/heads/${branchName}:refs/remotes/origin/${branchName}`,
  ])

  const fetched = runCommand('git', ['rev-parse', '--verify', '--quiet', `${ref}^{commit}`], { allowFailure: true })
  if (!String(fetched || '').trim()) {
    throw new Error(`Unable to fetch git ref: ${ref}`)
  }

  return ref
}

function parseLsTree(ref) {
  const output = runCommand('git', ['ls-tree', '-r', '-l', '-z', ref], { encoding: 'buffer' })
  return output
    .toString('utf8')
    .split('\0')
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^\d+\s+blob\s+[0-9a-f]+\s+(\d+)\t([\s\S]+)$/)
      if (!match) return null
      return {
        path: normalizeRepoPath(match[2]),
        size_bytes: Number(match[1]),
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.path.localeCompare(b.path))
}

function captureBaseline() {
  const commands = [
    'du -sh snippets/assets/',
    "find snippets/assets -type f \\( -name '*.mp4' -o -name '*.mov' -o -name '*.gif' -o -name '*.webm' \\) | wc -l",
    "find snippets/assets -type f \\( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \\) -size +5M | wc -l",
    'git ls-files tools/notion/backups/ | wc -l',
  ]
  const outputs = commands.map((command) => ({
    command,
    stdout: runShell(command),
  }))

  const snippetsAssetsTotal = String(outputs[0].stdout || '').trim().split(/\s+/)[0] || '0'
  const videoGifCount = Number.parseInt(String(outputs[1].stdout || '').trim(), 10) || 0
  const largeImageCount = Number.parseInt(String(outputs[2].stdout || '').trim(), 10) || 0
  const notionBackupsTrackedCount = Number.parseInt(String(outputs[3].stdout || '').trim(), 10) || 0
  const alreadyResolved =
    parseHumanSizeToMiB(snippetsAssetsTotal) < 20 &&
    videoGifCount === 0 &&
    largeImageCount === 0 &&
    notionBackupsTrackedCount === 0

  return {
    snippets_assets_total: snippetsAssetsTotal,
    video_gif_count: videoGifCount,
    large_image_count: largeImageCount,
    notion_backups_tracked_count: notionBackupsTrackedCount,
    already_resolved: alreadyResolved,
    commands: outputs,
  }
}

function parseHumanSizeToMiB(value) {
  const trimmed = String(value || '').trim()
  const match = trimmed.match(/^([\d.]+)([KMGTP]?)/i)
  if (!match) return Number.POSITIVE_INFINITY
  const numeric = Number.parseFloat(match[1])
  const suffix = match[2].toUpperCase()
  const multiplierByUnit = {
    '': 1 / (1024 * 1024),
    K: 1 / 1024,
    M: 1,
    G: 1024,
    T: 1024 * 1024,
    P: 1024 * 1024 * 1024,
  }
  return numeric * (multiplierByUnit[suffix] || Number.POSITIVE_INFINITY)
}

function formatBytes(bytes) {
  const numeric = Number(bytes) || 0
  if (numeric < 1024) return `${numeric} B`
  const units = ['KiB', 'MiB', 'GiB', 'TiB']
  let value = numeric
  let unitIndex = -1
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex += 1
  }
  return `${value.toFixed(value >= 10 ? 1 : 2)} ${units[unitIndex]}`
}

function escapeMarkdownCell(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, '<br/>')
}

function buildMarkdownTable(headers, rows) {
  const headerLine = `| ${headers.join(' | ')} |`
  const dividerLine = `| ${headers.map(() => '---').join(' | ')} |`
  const bodyLines = rows.map((row) => `| ${row.map((cell) => escapeMarkdownCell(cell)).join(' | ')} |`)
  return [headerLine, dividerLine, ...bodyLines].join('\n')
}

function sumBytes(items) {
  return items.reduce((total, item) => total + (Number(item.size_bytes) || 0), 0)
}

function buildAssetRows(assetPaths, sources, leakageSet, basenameCounts) {
  const rows = []
  const ambiguousBasenameMatches = []

  for (const repoPath of assetPaths) {
    const stat = fs.statSync(absoluteFromRepoPath(repoPath))
    const extension = path.extname(repoPath).toLowerCase()
    const matcher = buildLocalAssetMatcher(repoPath)
    const matches = matchReferences(sources, matcher)
    const basename = path.basename(repoPath).toLowerCase()
    const hasUniqueBasename = (basenameCounts.get(basename) || 0) === 1

    let mdxReferences = matches.directMatches
    if (mdxReferences.length === 0 && hasUniqueBasename && matches.basenameOnlyMatches.length > 0) {
      mdxReferences = matches.basenameOnlyMatches
    }

    if (mdxReferences.length === 0 && !hasUniqueBasename && matches.basenameOnlyMatches.length > 0) {
      ambiguousBasenameMatches.push({
        basename: path.basename(repoPath),
        asset_paths: basenameCounts
          .get(`${basename}::paths`) || [repoPath],
        source_paths: matches.basenameOnlyMatches,
      })
    }

    rows.push({
      path: repoPath,
      size_bytes: stat.size,
      extension: extension.replace(/^\./, ''),
      category: categoryFromExtension(extension),
      reference_status: mdxReferences.length > 0 ? 'referenced' : 'unreferenced',
      migration_target: migrationTargetForAsset(repoPath, stat.size, extension),
      mdx_references: mdxReferences,
      gitignore_leakage: leakageSet.has(repoPath),
      assets_branch_reference: matches.assetBranchMatches.length > 0,
    })
  }

  return {
    rows: rows.sort((a, b) => a.path.localeCompare(b.path)),
    ambiguousBasenameMatches: dedupeAmbiguousMatches(ambiguousBasenameMatches),
  }
}

function dedupeAmbiguousMatches(matches) {
  const map = new Map()
  for (const entry of matches) {
    const key = `${entry.basename}::${entry.source_paths.join('|')}`
    if (!map.has(key)) {
      map.set(key, {
        basename: entry.basename,
        asset_paths: uniqueSorted(entry.asset_paths),
        source_paths: uniqueSorted(entry.source_paths),
      })
      continue
    }

    const existing = map.get(key)
    existing.asset_paths = uniqueSorted([...existing.asset_paths, ...entry.asset_paths])
  }
  return [...map.values()].sort((a, b) => a.basename.localeCompare(b.basename))
}

function buildBasenameCounts(paths) {
  const counts = new Map()
  for (const repoPath of paths) {
    const basename = path.basename(repoPath).toLowerCase()
    counts.set(basename, (counts.get(basename) || 0) + 1)
    const pathKey = `${basename}::paths`
    const existingPaths = counts.get(pathKey) || []
    counts.set(pathKey, uniqueSorted([...existingPaths, repoPath]))
  }
  return counts
}

function buildAssetsBranchInventory(ref, sources) {
  const recentCommits = runCommand('git', ['log', ref, '--oneline', '-20'])
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  const branchFiles = parseLsTree(ref)
  const basenameCounts = buildBasenameCounts(branchFiles.map((entry) => entry.path))
  const files = []
  const referenceSources = new Set()
  const ambiguousBasenameMatches = []

  for (const entry of branchFiles) {
    const matcher = buildBranchFileMatcher(entry.path)
    const matches = matchReferences(sources, matcher)
    const basename = path.basename(entry.path).toLowerCase()
    const hasUniqueBasename = (basenameCounts.get(basename) || 0) === 1

    let mdxReferences = matches.directMatches
    if (mdxReferences.length === 0 && hasUniqueBasename && matches.basenameOnlyMatches.length > 0) {
      mdxReferences = matches.basenameOnlyMatches
    }

    if (mdxReferences.length === 0 && !hasUniqueBasename && matches.basenameOnlyMatches.length > 0) {
      ambiguousBasenameMatches.push({
        basename: path.basename(entry.path),
        asset_paths: basenameCounts.get(`${basename}::paths`) || [entry.path],
        source_paths: matches.basenameOnlyMatches,
      })
    }

    mdxReferences.forEach((sourcePath) => referenceSources.add(sourcePath))

    files.push({
      path: entry.path,
      size_bytes: entry.size_bytes,
      referenced_in_docs_v2: mdxReferences.length > 0,
      mdx_references: mdxReferences,
    })
  }

  return {
    ref,
    recent_commits: recentCommits,
    files,
    reference_sources: [...referenceSources].sort(),
    ambiguous_basename_matches: dedupeAmbiguousMatches(ambiguousBasenameMatches),
  }
}

function getBreakdownByMigrationTarget(assets) {
  const order = [
    'keep',
    'migrate_r2',
    'migrate_cloudinary',
    'migrate_github_releases',
    'review',
  ]
  const map = new Map()

  for (const asset of assets) {
    if (!map.has(asset.migration_target)) {
      map.set(asset.migration_target, {
        migration_target: asset.migration_target,
        count: 0,
        size_bytes: 0,
      })
    }
    const entry = map.get(asset.migration_target)
    entry.count += 1
    entry.size_bytes += asset.size_bytes
  }

  return [...map.values()].sort((a, b) => {
    const indexA = order.indexOf(a.migration_target)
    const indexB = order.indexOf(b.migration_target)
    if (indexA === -1 && indexB === -1) return a.migration_target.localeCompare(b.migration_target)
    if (indexA === -1) return 1
    if (indexB === -1) return -1
    return indexA - indexB
  })
}

function buildReferenceUpdateFiles(assets, assetsBranch) {
  const files = new Set()

  for (const asset of assets) {
    if (asset.migration_target.startsWith('migrate_')) {
      asset.mdx_references.forEach((sourcePath) => files.add(sourcePath))
    }
    if (asset.assets_branch_reference) {
      asset.mdx_references.forEach((sourcePath) => files.add(sourcePath))
    }
  }

  assetsBranch.reference_sources.forEach((sourcePath) => files.add(sourcePath))
  return [...files].sort()
}

function validateManifest(manifest) {
  if (!manifest || typeof manifest !== 'object') {
    throw new Error('Manifest is not an object')
  }

  const assets = Array.isArray(manifest.assets) ? manifest.assets : []
  for (const asset of assets) {
    if (typeof asset.size_bytes !== 'number') {
      throw new Error(`Missing size_bytes for ${asset.path}`)
    }
    if (!asset.reference_status) {
      throw new Error(`Missing reference_status for ${asset.path}`)
    }
    if (asset.reference_status === 'referenced' && (!Array.isArray(asset.mdx_references) || asset.mdx_references.length === 0)) {
      throw new Error(`Referenced asset missing mdx_references: ${asset.path}`)
    }
    if (asset.size_bytes > ONE_MB && !asset.migration_target) {
      throw new Error(`Missing migration_target for ${asset.path}`)
    }
  }
}

function writeJson(repoPath, value) {
  ensureDirForFile(repoPath)
  fs.writeFileSync(absoluteFromRepoPath(repoPath), `${JSON.stringify(value, null, 2)}\n`)
}

function writeText(repoPath, value) {
  ensureDirForFile(repoPath)
  fs.writeFileSync(absoluteFromRepoPath(repoPath), value)
}

function buildSummaryMarkdown(context) {
  const {
    generatedAt,
    baseline,
    assets,
    assetsBranch,
    gitignoreLeakageFiles,
    referenceUpdateFiles,
    breakdown,
    ambiguousAssetBasenameMatches,
  } = context

  const totalAssetSize = sumBytes(assets)
  const migrateCandidates = assets.filter((asset) => asset.migration_target.startsWith('migrate_'))
  const estimatedReductionBytes = sumBytes(migrateCandidates)
  const v1ReviewItems = assets.filter((asset) => asset.migration_target === 'review')
  const branchReferencedCount = assetsBranch.files.filter((entry) => entry.referenced_in_docs_v2).length
  const branchTotalBytes = sumBytes(assetsBranch.files)

  const sections = [
    '# Media Asset Audit Summary',
    '',
    `Generated at: ${generatedAt}`,
    '',
    '## 1. Baseline Counts',
    '',
    `- \`snippets/assets/\` total: ${baseline.snippets_assets_total}`,
    `- Video/GIF count: ${baseline.video_gif_count}`,
    `- Large image count (>5 MB): ${baseline.large_image_count}`,
    `- Tracked Notion backups: ${baseline.notion_backups_tracked_count}`,
    `- ALREADY_RESOLVED: ${baseline.already_resolved ? 'yes' : 'no'}`,
    '',
    '### Exact Command Output',
    '',
    '```text',
    ...baseline.commands.flatMap((entry) => [`$ ${entry.command}`, String(entry.stdout || '').replace(/\n$/, '')]),
    '```',
    '',
  ]

  if (baseline.already_resolved) {
    sections.push(
      '## Result',
      '',
      'Task marked `ALREADY_RESOLVED` because all four baseline thresholds passed. No manifest was generated.',
      ''
    )
    return `${sections.join('\n')}\n`
  }

  sections.push(
    '## 2. Local Asset Totals',
    '',
    `- Total binary asset count: ${assets.length}`,
    `- Total size_bytes: ${totalAssetSize} (${formatBytes(totalAssetSize)})`,
    '',
    '## 3. Breakdown By Migration Target',
    '',
    buildMarkdownTable(
      ['Migration Target', 'Count', 'Size Bytes', 'Human Size'],
      breakdown.map((entry) => [
        entry.migration_target,
        String(entry.count),
        String(entry.size_bytes),
        formatBytes(entry.size_bytes),
      ])
    ),
    '',
    '## 4. Estimated Working Tree Size Reduction',
    '',
    `- Potential reduction if all \`migrate_*\` targets are actioned: ${estimatedReductionBytes} bytes (${formatBytes(estimatedReductionBytes)})`,
    '',
    '## 5. Gitignore Leakage Files',
    ''
  )

  if (gitignoreLeakageFiles.length === 0) {
    sections.push('- None detected', '')
  } else {
    gitignoreLeakageFiles.forEach((repoPath) => sections.push(`- ${repoPath}`))
    sections.push('')
  }

  sections.push(
    '## 6. Assets Branch Inventory',
    '',
    `- Ref: ${assetsBranch.ref}`,
    `- File count: ${assetsBranch.files.length}`,
    `- Total size_bytes: ${branchTotalBytes} (${formatBytes(branchTotalBytes)})`,
    `- Referenced in docs-v2 MDX/JSX: ${branchReferencedCount}`,
    '',
    '### Recent Commits',
    ''
  )

  if (assetsBranch.recent_commits.length === 0) {
    sections.push('- None', '')
  } else {
    assetsBranch.recent_commits.forEach((line) => sections.push(`- ${line}`))
    sections.push('')
  }

  sections.push(
    '### Files',
    '',
    buildMarkdownTable(
      ['Path', 'Size Bytes', 'Human Size', 'Referenced', 'MDX/JSX References'],
      assetsBranch.files.map((entry) => [
        entry.path,
        String(entry.size_bytes),
        formatBytes(entry.size_bytes),
        entry.referenced_in_docs_v2 ? 'yes' : 'no',
        entry.mdx_references.length > 0 ? entry.mdx_references.join('<br/>') : '',
      ])
    ),
    '',
    '## 7. MDX/JSX Files Containing Large Asset References',
    ''
  )

  if (referenceUpdateFiles.length === 0) {
    sections.push('- None', '')
  } else {
    referenceUpdateFiles.forEach((repoPath) => sections.push(`- ${repoPath}`))
    sections.push('')
  }

  sections.push('### Ambiguous Basename-Only Matches', '')

  const combinedAmbiguousMatches = [
    ...ambiguousAssetBasenameMatches,
    ...assetsBranch.ambiguous_basename_matches,
  ]

  if (combinedAmbiguousMatches.length === 0) {
    sections.push('- None', '')
  } else {
    sections.push(
      buildMarkdownTable(
        ['Basename', 'Candidate Paths', 'Source Files'],
        combinedAmbiguousMatches.map((entry) => [
          entry.basename,
          entry.asset_paths.join('<br/>'),
          entry.source_paths.join('<br/>'),
        ])
      ),
      ''
    )
  }

  sections.push('## 8. v1/ Review Items', '')

  if (v1ReviewItems.length === 0) {
    sections.push('- None', '')
  } else {
    sections.push(
      buildMarkdownTable(
        ['Path', 'Size Bytes', 'Human Size', 'Reference Status', 'MDX/JSX References'],
        v1ReviewItems.map((entry) => [
          entry.path,
          String(entry.size_bytes),
          formatBytes(entry.size_bytes),
          entry.reference_status,
          entry.mdx_references.length > 0 ? entry.mdx_references.join('<br/>') : '',
        ])
      ),
      ''
    )
  }

  return `${sections.join('\n')}\n`
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  const baseline = captureBaseline()
  const generatedAt = new Date().toISOString()

  if (baseline.already_resolved) {
    const summary = buildSummaryMarkdown({
      generatedAt,
      baseline,
      assets: [],
      assetsBranch: {
        ref: options.assetsBranchRef,
        recent_commits: [],
        files: [],
        reference_sources: [],
        ambiguous_basename_matches: [],
      },
      gitignoreLeakageFiles: [],
      referenceUpdateFiles: [],
      breakdown: [],
      ambiguousAssetBasenameMatches: [],
    })
    writeText(options.summaryPath, summary)
    console.log(`ALREADY_RESOLVED: wrote ${options.summaryPath}`)
    return
  }

  ensureGitRef(options.assetsBranchRef)

  const assetPaths = collectAssetPaths(options.checkStaged)
  const sourceFiles = collectSourceFiles(options.checkStaged)
  const sources = readSourceIndex(sourceFiles)
  const leakageSet = new Set(getGitignoreLeakageFiles())
  const basenameCounts = buildBasenameCounts(assetPaths)
  const assetsResult = buildAssetRows(assetPaths, sources, leakageSet, basenameCounts)
  const assetsBranch = buildAssetsBranchInventory(options.assetsBranchRef, sources)
  const breakdown = getBreakdownByMigrationTarget(assetsResult.rows)
  const referenceUpdateFiles = buildReferenceUpdateFiles(assetsResult.rows, assetsBranch)

  const manifest = {
    generated_at: generatedAt,
    baseline,
    assets: assetsResult.rows,
    assets_branch: {
      ref: assetsBranch.ref,
      recent_commits: assetsBranch.recent_commits,
      files: assetsBranch.files,
      reference_sources: assetsBranch.reference_sources,
    },
    gitignore_leakage_files: [...leakageSet].sort(),
    reference_update_files: referenceUpdateFiles,
  }

  validateManifest(manifest)

  const summary = buildSummaryMarkdown({
    generatedAt,
    baseline,
    assets: assetsResult.rows,
    assetsBranch,
    gitignoreLeakageFiles: [...leakageSet].sort(),
    referenceUpdateFiles,
    breakdown,
    ambiguousAssetBasenameMatches: assetsResult.ambiguousBasenameMatches,
  })

  writeJson(options.manifestPath, manifest)
  writeText(options.summaryPath, summary)

  console.log(`Wrote ${options.manifestPath}`)
  console.log(`Wrote ${options.summaryPath}`)
  console.log(`Scanned ${assetsResult.rows.length} assets and ${sourceFiles.length} source files`)
}

try {
  main()
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
