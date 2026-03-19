#!/usr/bin/env node
/**
 * @script            cleanup-quarantine-manager
 * @category          remediator
 * @purpose           qa:repo-health
 * @scope             tools/scripts, tasks/reports/repo-ops, tasks/quarantine
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply)
 * @pipeline          manual
 * @usage             node tools/scripts/cleanup-quarantine-manager.js [flags]
 */

const fs = require('fs');
const path = require('path');

const STAGE_ID = 'cleanup-quarantine-manager';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_QUARANTINE_ROOT = 'tasks/quarantine/repo-audit';

const STAGE_REPORT_FILES = [
  'script-footprint-and-usage-audit.json',
  'docs-quality-and-freshness-audit.json',
  'style-and-language-homogenizer-en-gb.json',
  'component-layout-governance.json'
];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
  const out = {
    apply: false,
    outputDir: DEFAULT_OUTPUT_DIR,
    manifestPath: '',
    quarantineRoot: DEFAULT_QUARANTINE_ROOT
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--apply') {
      out.apply = true;
      continue;
    }
    if (token === '--output-dir') {
      out.outputDir = String(argv[i + 1] || out.outputDir).trim() || out.outputDir;
      i += 1;
      continue;
    }
    if (token.startsWith('--output-dir=')) {
      out.outputDir = token.slice('--output-dir='.length).trim() || out.outputDir;
      continue;
    }
    if (token === '--manifest') {
      out.manifestPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--manifest=')) {
      out.manifestPath = token.slice('--manifest='.length).trim();
      continue;
    }
    if (token === '--quarantine-root') {
      out.quarantineRoot = String(argv[i + 1] || out.quarantineRoot).trim() || out.quarantineRoot;
      i += 1;
      continue;
    }
    if (token.startsWith('--quarantine-root=')) {
      out.quarantineRoot = token.slice('--quarantine-root='.length).trim() || out.quarantineRoot;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return out;
}

function readJsonFile(absPath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
  } catch (_error) {
    return fallback;
  }
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkFiles(fullPath, out);
      continue;
    }

    out.push({ absPath: fullPath, relPath });
  }

  return out;
}

function loadRetentionPolicy() {
  const policyPath = path.join(REPO_ROOT, 'tools/config/report-retention-policy.json');
  return readJsonFile(policyPath, {
    rules: [],
    default_action: 'keep_latest',
    size_thresholds: { warn_bytes: 524288, high_bytes: 2097152, critical_bytes: 10485760 }
  });
}

function makeEntry(pathValue, reason, confidence, action, sourceStage) {
  return {
    path: toPosix(pathValue),
    reason,
    confidence,
    action,
    restore_hint: '',
    review_owner: 'docs',
    source_stage: sourceStage
  };
}

function addEntry(entries, entry) {
  if (!entry.path || entry.path.includes('<->')) return;

  const key = `${entry.path}::${entry.action}`;
  const existing = entries._index.get(key);

  if (existing) {
    if (!existing.reason.includes(entry.reason)) {
      existing.reason = `${existing.reason} | ${entry.reason}`;
    }
    existing.confidence = Math.max(Number(existing.confidence || 0), Number(entry.confidence || 0));
    return;
  }

  entries._index.set(key, entry);
  entries.list.push(entry);
}

function classifyFromScriptIssues(issues, entryBag) {
  issues.forEach((issue) => {
    const issueId = String(issue.id || '');
    const issuePath = toPosix(issue.path || '');

    if (issueId === 'backup-artifact') {
      addEntry(entryBag, makeEntry(issuePath, 'Backup artifact should be quarantined from active tree.', 0.98, 'quarantine', STAGE_ID));
      return;
    }

    if (issueId === 'placeholder-script') {
      addEntry(entryBag, makeEntry(issuePath, 'Placeholder script is discoverable and should not stay in active script tree.', 0.96, 'quarantine', STAGE_ID));
      return;
    }

    if (issueId === 'duplicate-script-pair') {
      const parts = issuePath
        .split('<->')
        .map((part) => toPosix(part.trim()))
        .filter(Boolean);
      parts.forEach((candidatePath) => {
        addEntry(
          entryBag,
          makeEntry(candidatePath, 'Duplicate script pair candidate; keep one canonical source and quarantine/retire duplicate after validation.', 0.67, 'delete-later', STAGE_ID)
        );
      });
      return;
    }

    if (issueId === 'report-size-hotspot') {
      addEntry(
        entryBag,
        makeEntry(issuePath, 'Large report artifact should move to retention/archive policy path after summary extraction.', 0.63, 'delete-later', STAGE_ID)
      );
    }
  });
}

function classifyFromRetentionPolicy(entryBag, policy) {
  const rules = Array.isArray(policy.rules) ? policy.rules : [];
  const quarantineRule = rules.find((rule) =>
    String(rule.pattern || '').includes('tasks/quarantine/repo-audit')
  );
  if (!quarantineRule) return;

  const quarantineRoot = path.join(REPO_ROOT, 'tasks', 'quarantine', 'repo-audit');
  if (!fs.existsSync(quarantineRoot)) return;

  walkFiles(quarantineRoot).forEach((file) => {
    addEntry(
      entryBag,
      makeEntry(file.relPath, 'Matched report-retention policy quarantine pattern.', 0.95, 'quarantine', STAGE_ID)
    );
  });
}

function classifyBackupFiles(entryBag) {
  const roots = [
    path.join(REPO_ROOT, 'tools/scripts'),
    path.join(REPO_ROOT, 'tests'),
    path.join(REPO_ROOT, 'tasks')
  ];

  roots.forEach((root) => {
    walkFiles(root)
      .filter((file) => /\.bak2?$/i.test(file.relPath))
      .forEach((file) => {
        addEntry(
          entryBag,
          makeEntry(file.relPath, 'Backup extension artifact found and recommended for quarantine.', 0.93, 'quarantine', STAGE_ID)
        );
      });
  });
}

function buildManifestEntries(outputDirAbs, policy) {
  const entryBag = { list: [], _index: new Map() };

  STAGE_REPORT_FILES.forEach((filename) => {
    const payload = readJsonFile(path.join(outputDirAbs, filename), null);
    if (!payload || !Array.isArray(payload.issues)) return;

    if (filename === 'script-footprint-and-usage-audit.json') {
      classifyFromScriptIssues(payload.issues, entryBag);
      return;
    }

  });

  classifyBackupFiles(entryBag);
  classifyFromRetentionPolicy(entryBag, policy);

  return entryBag.list.sort((a, b) => a.path.localeCompare(b.path));
}

function applyQuarantine(entries, quarantineRootAbs) {
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const sessionRootAbs = path.join(quarantineRootAbs, stamp);
  ensureDir(sessionRootAbs);

  let moved = 0;
  const appliedEntries = entries.map((entry) => ({ ...entry, applied: false, applied_path: '' }));

  appliedEntries.forEach((entry) => {
    if (entry.action !== 'quarantine') return;

    const sourceAbs = path.join(REPO_ROOT, entry.path);
    if (!fs.existsSync(sourceAbs)) {
      entry.restore_hint = 'No move performed because source path does not exist.';
      return;
    }

    const targetAbs = path.join(sessionRootAbs, entry.path);
    ensureDir(path.dirname(targetAbs));
    fs.renameSync(sourceAbs, targetAbs);

    const targetRel = toPosix(path.relative(REPO_ROOT, targetAbs));
    entry.applied = true;
    entry.applied_path = targetRel;
    entry.restore_hint = `mv \"${targetRel}\" \"${entry.path}\"`;
    moved += 1;
  });

  return {
    moved,
    quarantine_session_root: toPosix(path.relative(REPO_ROOT, sessionRootAbs)),
    entries: appliedEntries
  };
}

function summarize(entries) {
  const summary = {
    keep: 0,
    quarantine: 0,
    'delete-later': 0,
    total: entries.length
  };

  entries.forEach((entry) => {
    if (Object.prototype.hasOwnProperty.call(summary, entry.action)) {
      summary[entry.action] += 1;
    }
  });

  return summary;
}

function buildMarkdown(manifest) {
  const lines = [];
  lines.push('# Cleanup Quarantine Manifest');
  lines.push('');
  lines.push(`- Generated: ${manifest.generated_at}`);
  lines.push(`- Mode: ${manifest.mode}`);
  lines.push(`- Stage ID: ${manifest.stage_id}`);
  lines.push(`- Output directory: ${manifest.output_dir}`);
  if (manifest.quarantine_session_root) {
    lines.push(`- Quarantine session: ${manifest.quarantine_session_root}`);
  }
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Keep: ${manifest.summary.keep}`);
  lines.push(`- Quarantine: ${manifest.summary.quarantine}`);
  lines.push(`- Delete later: ${manifest.summary['delete-later']}`);
  lines.push(`- Total: ${manifest.summary.total}`);
  lines.push('');
  lines.push('## Entries');
  lines.push('');
  lines.push('| Action | Confidence | Path | Reason | Restore Hint |');
  lines.push('|---|---:|---|---|---|');

  manifest.entries.forEach((entry) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    lines.push(
      `| ${safe(entry.action)} | ${safe(entry.confidence)} | ${safe(entry.path)} | ${safe(entry.reason)} | ${safe(entry.restore_hint)} |`
    );
  });

  lines.push('');
  return `${lines.join('\n')}\n`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const policy = loadRetentionPolicy();
  const baseEntries = buildManifestEntries(outputDirAbs, policy);

  const runResult = args.apply
    ? applyQuarantine(baseEntries, path.resolve(REPO_ROOT, args.quarantineRoot))
    : { moved: 0, quarantine_session_root: '', entries: baseEntries };

  const manifest = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    mode: args.apply ? 'apply' : 'classify',
    output_dir: toPosix(path.relative(REPO_ROOT, outputDirAbs)),
    quarantine_session_root: runResult.quarantine_session_root,
    moved_count: runResult.moved,
    entries: runResult.entries,
    summary: summarize(runResult.entries)
  };

  const manifestJsonPath = args.manifestPath
    ? path.resolve(REPO_ROOT, args.manifestPath)
    : path.join(outputDirAbs, 'cleanup-quarantine-manifest.json');
  const manifestMdPath = path.join(path.dirname(manifestJsonPath), 'cleanup-quarantine-manifest.md');

  ensureDir(path.dirname(manifestJsonPath));
  fs.writeFileSync(manifestJsonPath, `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(manifestMdPath, buildMarkdown(manifest));

  console.log(`✅ ${STAGE_ID} wrote:`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, manifestJsonPath))}`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, manifestMdPath))}`);
  if (args.apply) {
    console.log(`- moved files: ${runResult.moved}`);
  }
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${STAGE_ID} failed: ${error.message}`);
    process.exit(1);
  }
}
