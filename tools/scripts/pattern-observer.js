#!/usr/bin/env node
/**
 * @script            pattern-observer
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             single-domain, v2-content, generated-output
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.
 * @pipeline          indirect, manual
 * @usage             node tools/scripts/pattern-observer.js --tab <name> | --all [--output <file>]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const DEFAULT_OUTPUT_DIR = path.join('tasks', 'reports', 'copy-governance');

const ESCALATION_MAP = {
  NOT_CONSTRUCTION: {
    threshold: 5,
    escalation: 'PRODUCT_CLARITY',
    reason: 'Writer reaching for contrast because no clear positive value claim exists.'
  },
  NOT_JUST: {
    threshold: 3,
    escalation: 'PRODUCT_CLARITY',
    reason: 'Contrast-by-diminishment signals undefined value proposition.'
  },
  WEAKENED_VALUE: {
    threshold: 5,
    escalation: 'PRODUCT_CLARITY',
    reason: 'Hedged value claims suggest writer does not believe the VP being asserted.'
  },
  SELF_UNDERMINING_VALUE: {
    threshold: 2,
    escalation: 'PRODUCT_CLARITY',
    reason: 'Self-undermining constructions indicate L0 Q1 was not cleanly answered.'
  },
  CONDITIONAL_IF: {
    threshold: 5,
    escalation: 'ARCHITECTURE',
    reason: 'Conditionals cluster around sections serving multiple undefined personas simultaneously.'
  },
  DEPENDS_ON: {
    threshold: 3,
    escalation: 'ARCHITECTURE',
    reason: 'Hedge language indicates section is covering multiple operator profiles without routing.'
  },
  THIS_PAGE_VERB: {
    threshold: 3,
    escalation: 'ARCHITECTURE',
    reason: 'Page announcements indicate pages without a defined single purpose.'
  },
  DANGLING_CLAIM: {
    threshold: 3,
    escalation: 'ARCHITECTURE',
    reason: 'Unsupported claims indicate missing linked content or incomplete briefs.'
  },
  RATHER_THAN: {
    threshold: 4,
    escalation: 'COPY',
    reason: 'Writer has not internalised the no-contrast rule.'
  },
  AMONG_OTHER: {
    threshold: 4,
    escalation: 'COPY',
    reason: 'Incomplete claims indicate copy-level discipline gap.'
  },
  CONSISTENTLY_NO_NUMBER: {
    threshold: 4,
    escalation: 'COPY',
    reason: 'Vague standards indicate copy-level precision gap.'
  }
};

const ESCALATION_ACTIONS = {
  PRODUCT_CLARITY:
    'Route to L0. VP questions must be re-answered with product owner before further drafting on affected pages.',
  ARCHITECTURE:
    'Route to L1/L2. Page scope or IA needs restructuring. Review persona path mapping for affected section.',
  COPY: 'Route to L4/L5. Rule reinforcement pass. Flag for copy editor review.'
};

function getTabFiles(tab) {
  const tabPath = path.join('v2', tab);
  if (!fs.existsSync(tabPath)) {
    console.error(`Tab path not found: ${tabPath}`);
    process.exit(1);
  }
  return getAllMdx(tabPath);
}

function getAllFiles() {
  return getAllMdx('v2');
}

function getAllMdx(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllMdx(fullPath));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  });

  return results;
}

function collectPatternCounts(files) {
  const counts = {};
  const perFile = {};

  files.forEach((filePath) => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line) => {
        if (/^\s*```/.test(line)) return;
        if (/^\{\/\*/.test(line.trim())) return;

        const checks = [
          { id: 'CONDITIONAL_IF', test: /\bif\b/i },
          { id: 'NOT_CONSTRUCTION', test: /\bnot\s+[a-z]/i },
          { id: 'NOT_JUST', test: /\bnot just\b/i },
          { id: 'RATHER_THAN', test: /\brather than\b/i },
          { id: 'WEAKENED_VALUE', test: /\b(can|may)\s+[a-z]+/i },
          { id: 'SELF_UNDERMINING_VALUE', test: /—\s*if\b/i },
          { id: 'DEPENDS_ON', test: /\bdepends on\b/i },
          { id: 'CONSISTENTLY_NO_NUMBER', test: /\bconsistently\b(?!.{0,60}\d)/i },
          { id: 'AMONG_OTHER', test: /\bamong other\b/i },
          { id: 'THIS_PAGE_VERB', test: /^(this page|this section|this guide)\s+\w+/i },
          { id: 'DANGLING_CLAIM', test: /is (different|the same)\.?\s*$/i }
        ];

        checks.forEach(({ id, test }) => {
          if (test.test(line)) {
            counts[id] = (counts[id] || 0) + 1;
            if (!perFile[id]) perFile[id] = new Set();
            perFile[id].add(filePath);
          }
        });
      });
    } catch (_error) {}
  });

  return { counts, perFile };
}

function generateReport({ tab, files, counts, perFile, date }) {
  const tabLabel = tab || 'all tabs';
  const lines = [];

  lines.push('# Pattern Observer Report');
  lines.push(`**Scope:** ${tabLabel}`);
  lines.push(`**Date:** ${date}`);
  lines.push(`**Files scanned:** ${files.length}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Pattern Frequency');
  lines.push('');
  lines.push('| Pattern | Count | Files affected | Threshold | Escalation |');
  lines.push('|---|---|---|---|---|');

  const sorted = Object.entries(counts).sort((left, right) => right[1] - left[1]);
  sorted.forEach(([id, count]) => {
    const definition = ESCALATION_MAP[id];
    const threshold = definition ? definition.threshold : '—';
    const escalation = definition && count >= definition.threshold ? `⚠️ ${definition.escalation}` : 'None';
    const fileCount = perFile[id] ? perFile[id].size : 0;
    lines.push(`| ${id} | ${count} | ${fileCount} | ${threshold} | ${escalation} |`);
  });

  lines.push('');
  lines.push('---');
  lines.push('');

  const escalations = { PRODUCT_CLARITY: [], ARCHITECTURE: [], COPY: [] };
  let hasEscalation = false;

  Object.entries(counts).forEach(([id, count]) => {
    const definition = ESCALATION_MAP[id];
    if (definition && count >= definition.threshold) {
      escalations[definition.escalation].push({ id, count, reason: definition.reason });
      hasEscalation = true;
    }
  });

  lines.push('## L7 Diagnostic Output');
  lines.push('');

  if (!hasEscalation) {
    lines.push('No patterns exceed escalation thresholds. Framework operating within expected parameters.');
  } else {
    ['PRODUCT_CLARITY', 'ARCHITECTURE', 'COPY'].forEach((type) => {
      if (escalations[type].length === 0) return;
      lines.push(`### ${type.replace('_', ' ')} — ${ESCALATION_ACTIONS[type]}`);
      lines.push('');
      lines.push('**Triggering patterns:**');
      escalations[type].forEach(({ id, count, reason }) => {
        lines.push(`- **${id}** (${count} occurrences): ${reason}`);
      });
      lines.push('');
    });
  }

  lines.push('---');
  lines.push('');
  lines.push('## Affected Files by Pattern');
  lines.push('');

  sorted.forEach(([id, count]) => {
    if (!perFile[id] || perFile[id].size === 0) return;
    lines.push(`### ${id} (${count})`);
    [...perFile[id]].sort().forEach((filePath) => lines.push(`- \`${filePath}\``));
    lines.push('');
  });

  return lines.join('\n');
}

function buildDefaultOutputPath(tab) {
  const scopeLabel = tab || 'all';
  return path.join(DEFAULT_OUTPUT_DIR, `pattern-report-${scopeLabel}.md`);
}

function run() {
  const args = process.argv.slice(2);
  const tabArg = args.find((arg, index) => args[index - 1] === '--tab');
  const outputArg = args.find((arg, index) => args[index - 1] === '--output');
  const all = args.includes('--all');

  if (!tabArg && !all) {
    console.error('Usage: pattern-observer.js --tab <name> | --all [--output <file>]');
    process.exit(1);
  }

  const files = tabArg ? getTabFiles(tabArg) : getAllFiles();
  const { counts, perFile } = collectPatternCounts(files);
  const report = generateReport({
    tab: tabArg || null,
    files,
    counts,
    perFile,
    date: new Date().toISOString().split('T')[0]
  });

  const outputPath = outputArg || buildDefaultOutputPath(tabArg || null);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, report);
  console.log(`Report written to ${outputPath}`);
}

if (require.main === module) {
  run();
}

module.exports = {
  DEFAULT_OUTPUT_DIR,
  ESCALATION_ACTIONS,
  ESCALATION_MAP,
  buildDefaultOutputPath,
  collectPatternCounts,
  generateReport,
  getAllFiles,
  getAllMdx,
  getTabFiles,
  run
};
