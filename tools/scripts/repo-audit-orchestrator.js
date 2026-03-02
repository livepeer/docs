#!/usr/bin/env node
/**
 * @script repo-audit-orchestrator
 * @summary Run the docs infrastructure audit pipeline and emit a unified prioritized scorecard.
 * @owner docs
 * @scope tools/scripts, ai-tools/ai-skills/catalog, tasks/reports/repo-ops
 *
 * @usage
 *   node tools/scripts/repo-audit-orchestrator.js --mode static --scope full
 *
 * @inputs
 *   --mode <static|runtime|full> (default: static)
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *   --quarantine Apply cleanup quarantine moves (default: classify only)
 *   --agent-pack <codex|cursor|claude|windsurf|all|none> (default: none)
 *   --catalog <path> (default: ai-tools/ai-skills/catalog/skill-catalog.json)
 *   --manifest <path> (default: ai-tools/ai-skills/catalog/execution-manifest.json)
 *
 * @outputs
 *   - tasks/reports/repo-ops/repo-audit-summary.md
 *   - tasks/reports/repo-ops/repo-audit-summary.json
 *
 * @exit-codes
 *   0 = pipeline completed
 *   1 = one or more stages failed
 *
 * @examples
 *   node tools/scripts/repo-audit-orchestrator.js --mode static --scope changed
 *   node tools/scripts/repo-audit-orchestrator.js --mode full --scope full --quarantine --agent-pack all
 *
 * @notes
 *   Static + report-synthesis is the default strategy. Cleanup defaults to non-mutating classification.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const STAGE_ID = 'repo-audit-orchestrator';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_CATALOG_PATH = 'ai-tools/ai-skills/catalog/skill-catalog.json';
const DEFAULT_MANIFEST_PATH = 'ai-tools/ai-skills/catalog/execution-manifest.json';

const VALID_MODES = new Set(['static', 'runtime', 'full']);
const VALID_SCOPES = new Set(['changed', 'full']);
const VALID_AGENT_PACKS = new Set(['codex', 'cursor', 'claude', 'windsurf', 'all', 'none']);

const SCORE_BUCKET_WEIGHTS = {
  critical: 12,
  high: 6,
  medium: 3,
  low: 1,
  info: 0
};

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
  const out = {
    mode: 'static',
    scope: 'full',
    outputDir: DEFAULT_OUTPUT_DIR,
    quarantine: false,
    agentPack: 'none',
    catalogPath: DEFAULT_CATALOG_PATH,
    manifestPath: DEFAULT_MANIFEST_PATH
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--mode') {
      out.mode = String(argv[i + 1] || out.mode).trim() || out.mode;
      i += 1;
      continue;
    }
    if (token.startsWith('--mode=')) {
      out.mode = token.slice('--mode='.length).trim() || out.mode;
      continue;
    }
    if (token === '--scope') {
      out.scope = String(argv[i + 1] || out.scope).trim() || out.scope;
      i += 1;
      continue;
    }
    if (token.startsWith('--scope=')) {
      out.scope = token.slice('--scope='.length).trim() || out.scope;
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
    if (token === '--quarantine') {
      out.quarantine = true;
      continue;
    }
    if (token === '--agent-pack') {
      out.agentPack = String(argv[i + 1] || out.agentPack).trim() || out.agentPack;
      i += 1;
      continue;
    }
    if (token.startsWith('--agent-pack=')) {
      out.agentPack = token.slice('--agent-pack='.length).trim() || out.agentPack;
      continue;
    }
    if (token === '--catalog') {
      out.catalogPath = String(argv[i + 1] || out.catalogPath).trim() || out.catalogPath;
      i += 1;
      continue;
    }
    if (token.startsWith('--catalog=')) {
      out.catalogPath = token.slice('--catalog='.length).trim() || out.catalogPath;
      continue;
    }
    if (token === '--manifest') {
      out.manifestPath = String(argv[i + 1] || out.manifestPath).trim() || out.manifestPath;
      i += 1;
      continue;
    }
    if (token.startsWith('--manifest=')) {
      out.manifestPath = token.slice('--manifest='.length).trim() || out.manifestPath;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!VALID_MODES.has(out.mode)) {
    throw new Error(`Invalid --mode: ${out.mode}`);
  }
  if (!VALID_SCOPES.has(out.scope)) {
    throw new Error(`Invalid --scope: ${out.scope}`);
  }
  if (!VALID_AGENT_PACKS.has(out.agentPack)) {
    throw new Error(`Invalid --agent-pack: ${out.agentPack}`);
  }

  return out;
}

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function severitySortValue(severity) {
  switch (severity) {
    case 'critical':
      return 0;
    case 'high':
      return 1;
    case 'medium':
      return 2;
    case 'low':
      return 3;
    default:
      return 4;
  }
}

function computeSummary(issues) {
  const summary = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    info: 0,
    total: issues.length
  };

  issues.forEach((issue) => {
    if (Object.prototype.hasOwnProperty.call(summary, issue.severity)) {
      summary[issue.severity] += 1;
    }
  });

  return summary;
}

function runCommand(label, command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8'
  });

  return {
    label,
    command: [command, ...args].join(' '),
    status: Number(result.status || 0),
    stdout: result.stdout || '',
    stderr: result.stderr || '',
    ok: Number(result.status || 0) === 0
  };
}

function stageReportPath(stageId, outputDirAbs) {
  if (stageId === 'cleanup-quarantine-manager') {
    return path.join(outputDirAbs, 'cleanup-quarantine-manifest.json');
  }

  if (stageId === 'cross-agent-packager') {
    return '';
  }

  return path.join(outputDirAbs, `${stageId}.json`);
}

function buildStageCommands(stageId, options) {
  const outputDirRel = toPosix(path.relative(REPO_ROOT, options.outputDirAbs));

  if (stageId === 'cleanup-quarantine-manager') {
    const commands = [
      {
        label: `${stageId}:classify`,
        command: 'node',
        args: ['tools/scripts/cleanup-quarantine-manager.js', '--output-dir', outputDirRel]
      }
    ];

    if (options.quarantine) {
      commands.push({
        label: `${stageId}:apply`,
        command: 'node',
        args: ['tools/scripts/cleanup-quarantine-manager.js', '--output-dir', outputDirRel, '--apply']
      });
    }

    return commands;
  }

  if (stageId === 'cross-agent-packager') {
    if (options.agentPack === 'none') return [];
    return [
      {
        label: `${stageId}:package`,
        command: 'node',
        args: ['tools/scripts/cross-agent-packager.js', '--agent-pack', options.agentPack, '--output-dir', 'ai-tools/agent-packs']
      }
    ];
  }

  return [
    {
      label: `${stageId}:run`,
      command: 'node',
      args: [`tools/scripts/${stageId}.js`, '--scope', options.scope, '--output-dir', outputDirRel]
    }
  ];
}

function buildScore(issues, stageFailures) {
  const summary = computeSummary(issues);
  const buckets = {
    critical: summary.critical > 0 ? Math.min(6, Math.ceil(Math.log2(summary.critical + 1))) : 0,
    high: summary.high > 0 ? Math.min(6, Math.ceil(Math.log2(summary.high + 1))) : 0,
    medium: summary.medium > 0 ? Math.min(6, Math.ceil(Math.log2(summary.medium + 1))) : 0,
    low: summary.low > 0 ? Math.min(6, Math.ceil(Math.log2(summary.low + 1))) : 0,
    info: summary.info > 0 ? Math.min(6, Math.ceil(Math.log2(summary.info + 1))) : 0
  };

  const penaltyFromIssues =
    buckets.critical * SCORE_BUCKET_WEIGHTS.critical +
    buckets.high * SCORE_BUCKET_WEIGHTS.high +
    buckets.medium * SCORE_BUCKET_WEIGHTS.medium +
    buckets.low * SCORE_BUCKET_WEIGHTS.low +
    buckets.info * SCORE_BUCKET_WEIGHTS.info;

  const failurePenalty = stageFailures.length * 8;
  const score = Math.max(0, Math.round(100 - penaltyFromIssues - failurePenalty));

  return {
    score,
    penalty_from_issues: penaltyFromIssues,
    penalty_from_stage_failures: failurePenalty,
    severity_buckets: buckets
  };
}

function buildPrioritizedActions(issues, maxActions = 40) {
  const sorted = issues
    .slice()
    .sort((a, b) => {
      const severityDiff = severitySortValue(a.severity) - severitySortValue(b.severity);
      if (severityDiff !== 0) return severityDiff;
      return String(a.path || '').localeCompare(String(b.path || ''));
    });

  const seen = new Set();
  const actions = [];

  for (const issue of sorted) {
    const key = `${issue.stage_id || ''}::${issue.title || ''}::${issue.path || ''}`;
    if (seen.has(key)) continue;
    seen.add(key);

    actions.push({
      severity: issue.severity,
      stage_id: issue.stage_id,
      title: issue.title,
      path: issue.path,
      recommendation: issue.recommendation
    });

    if (actions.length >= maxActions) break;
  }

  return actions;
}

function buildMarkdown(summary) {
  const lines = [];
  lines.push('# Repo Audit Summary');
  lines.push('');
  lines.push(`- Generated: ${summary.generated_at}`);
  lines.push(`- Mode: ${summary.mode}`);
  lines.push(`- Scope: ${summary.scope}`);
  lines.push(`- Stage ID: ${summary.stage_id}`);
  lines.push(`- Score: ${summary.score.score}/100`);
  lines.push('');

  lines.push('## Stage Results');
  lines.push('');
  lines.push('| Stage | Status | Commands | Issues |');
  lines.push('|---|---|---:|---:|');
  summary.stages.forEach((stage) => {
    lines.push(`| ${stage.id} | ${stage.status} | ${stage.command_count} | ${stage.issue_count} |`);
  });
  lines.push('');

  lines.push('## Severity Summary');
  lines.push('');
  lines.push(`- Critical: ${summary.issue_summary.critical}`);
  lines.push(`- High: ${summary.issue_summary.high}`);
  lines.push(`- Medium: ${summary.issue_summary.medium}`);
  lines.push(`- Low: ${summary.issue_summary.low}`);
  lines.push(`- Info: ${summary.issue_summary.info}`);
  lines.push(`- Total: ${summary.issue_summary.total}`);
  lines.push('');

  lines.push('## Prioritized Actions');
  lines.push('');
  lines.push('| Severity | Stage | Action | Path |');
  lines.push('|---|---|---|---|');
  summary.prioritized_actions.forEach((action) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    const actionText = `${safe(action.title)}. ${safe(action.recommendation)}`;
    lines.push(`| ${safe(action.severity)} | ${safe(action.stage_id)} | ${actionText} | ${safe(action.path)} |`);
  });
  lines.push('');

  return `${lines.join('\n')}\n`;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const outputDirAbs = path.resolve(REPO_ROOT, options.outputDir);
  ensureDir(outputDirAbs);

  const catalog = readJson(options.catalogPath);
  const manifest = readJson(options.manifestPath);

  const skillMap = new Map((catalog.skills || []).map((skill) => [skill.id, skill]));
  const pipeline = Array.isArray(manifest.pipeline) ? manifest.pipeline : [];

  const orderedStages = pipeline
    .slice()
    .filter((entry) => entry.default_enabled !== false)
    .filter((entry) => Array.isArray(entry.modes) && entry.modes.includes(options.mode))
    .sort((a, b) => Number(a.run_order || 0) - Number(b.run_order || 0));

  const stageResults = [];
  const allIssues = [];

  orderedStages.forEach((stageEntry) => {
    const stageId = stageEntry.id;
    const stageSkill = skillMap.get(stageId) || null;

    if (!stageSkill) {
      stageResults.push({
        id: stageId,
        status: 'skipped',
        reason: 'missing-skill-catalog-entry',
        command_count: 0,
        issue_count: 0,
        commands: []
      });
      return;
    }

    if (stageId === 'cross-agent-packager' && stageEntry.apply_only_when_agent_pack_requested && options.agentPack === 'none') {
      stageResults.push({
        id: stageId,
        status: 'skipped',
        reason: 'agent-pack-not-requested',
        command_count: 0,
        issue_count: 0,
        commands: []
      });
      return;
    }

    const stageCommands = buildStageCommands(stageId, {
      outputDirAbs,
      scope: options.scope,
      quarantine: options.quarantine,
      agentPack: options.agentPack
    });

    if (stageCommands.length === 0) {
      stageResults.push({
        id: stageId,
        status: 'skipped',
        reason: 'no-commands',
        command_count: 0,
        issue_count: 0,
        commands: []
      });
      return;
    }

    const commandRuns = stageCommands.map((stageCommand) =>
      runCommand(stageCommand.label, stageCommand.command, stageCommand.args, REPO_ROOT)
    );

    const failed = commandRuns.some((run) => !run.ok);

    const reportPath = stageReportPath(stageId, outputDirAbs);
    let stageIssues = [];

    if (reportPath && fs.existsSync(reportPath)) {
      try {
        const payload = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

        if (Array.isArray(payload.issues)) {
          stageIssues = payload.issues.map((issue) => ({ ...issue, stage_id: stageId }));
        } else if (Array.isArray(payload.entries)) {
          stageIssues = payload.entries
            .filter((entry) => entry.action !== 'keep')
            .map((entry) => ({
              severity: entry.action === 'quarantine' ? 'high' : 'medium',
              title: 'Cleanup candidate',
              path: entry.path,
              recommendation: entry.reason,
              stage_id: stageId
            }));
        }
      } catch (_error) {
        stageIssues = [
          {
            severity: 'low',
            title: 'Unable to parse stage report output',
            path: toPosix(path.relative(REPO_ROOT, reportPath)),
            recommendation: 'Regenerate report output and verify JSON format.',
            stage_id: stageId
          }
        ];
      }
    }

    allIssues.push(...stageIssues);

    stageResults.push({
      id: stageId,
      status: failed ? 'failed' : 'passed',
      command_count: commandRuns.length,
      issue_count: stageIssues.length,
      report_path: reportPath ? toPosix(path.relative(REPO_ROOT, reportPath)) : '',
      commands: commandRuns
    });
  });

  const stageFailures = stageResults.filter((stage) => stage.status === 'failed');
  const issueSummary = computeSummary(allIssues);
  const score = buildScore(allIssues, stageFailures);

  const summary = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    mode: options.mode,
    scope: options.scope,
    output_dir: toPosix(path.relative(REPO_ROOT, outputDirAbs)),
    options: {
      quarantine: options.quarantine,
      agent_pack: options.agentPack
    },
    score,
    stage_failures: stageFailures.map((stage) => stage.id),
    stages: stageResults,
    issue_summary: issueSummary,
    prioritized_actions: buildPrioritizedActions(allIssues),
    issues: allIssues
  };

  const summaryJsonPath = path.join(outputDirAbs, 'repo-audit-summary.json');
  const summaryMdPath = path.join(outputDirAbs, 'repo-audit-summary.md');

  fs.writeFileSync(summaryJsonPath, `${JSON.stringify(summary, null, 2)}\n`);
  fs.writeFileSync(summaryMdPath, buildMarkdown(summary));

  console.log(`✅ ${STAGE_ID} wrote:`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, summaryJsonPath))}`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, summaryMdPath))}`);

  if (stageFailures.length > 0) {
    console.error(`❌ ${stageFailures.length} stage(s) failed.`);
    stageFailures.forEach((stage) => {
      console.error(`- ${stage.id}`);
    });
    process.exit(1);
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
