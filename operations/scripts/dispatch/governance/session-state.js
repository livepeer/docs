#!/usr/bin/env node
/**
 * @script      session-state
 * @type        
 * @concern     
 * @niche       
 * @purpose     governance:session-start
 * @description Reads ALL active plans and live project state. Run at session start.
 * @mode        read-only
 * @pipeline    manual
 * @scope       workspace/plan/active/
 * @usage       node operations/scripts/dispatch/governance/session-state.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const ACTIVE_DIR = path.join(ROOT, 'workspace/plan/active');

function readFile(relPath) {
  const full = path.join(ROOT, relPath);
  try {
    return fs.readFileSync(full, 'utf8');
  } catch {
    return null;
  }
}

function countFiles(dir, ext) {
  let count = 0;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name === 'node_modules' || e.name === '_workspace') continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        count += countFiles(full, ext);
      } else if (e.name.endsWith(ext)) {
        count++;
      }
    }
  } catch { /* dir doesn't exist */ }
  return count;
}

function extractTable(content, headerPattern) {
  const lines = content.split('\n');
  let inTable = false;
  const rows = [];
  for (const line of lines) {
    if (line.includes(headerPattern)) {
      inTable = true;
      rows.push(line);
      continue;
    }
    if (inTable) {
      if (line.startsWith('|')) {
        rows.push(line);
      } else if (rows.length > 0) {
        break;
      }
    }
  }
  return rows.join('\n');
}

function getLastModified(dirPath) {
  let latest = 0;
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const e of entries) {
      if (e.name === 'node_modules') continue;
      const full = path.join(dirPath, e.name);
      if (e.isDirectory()) {
        const sub = getLastModified(full);
        if (sub > latest) latest = sub;
      } else {
        const stat = fs.statSync(full);
        if (stat.mtimeMs > latest) latest = stat.mtimeMs;
      }
    }
  } catch { /* */ }
  return latest;
}

function scanPlan(dirPath, name) {
  const plan = { name, files: 0, hasTracker: false, hasCompletionReport: false, hasPlan: false, hasDecisionLog: false, lastModified: null };

  plan.files = countFiles(dirPath, '.md') + countFiles(dirPath, '.mdx');
  plan.lastModified = getLastModified(dirPath);

  const trackerNames = ['00-TRACKER.md', 'status.md', 'tracker.md'];
  for (const t of trackerNames) {
    if (fs.existsSync(path.join(dirPath, t))) { plan.hasTracker = true; break; }
  }
  plan.hasCompletionReport = fs.existsSync(path.join(dirPath, 'completion-report.md'));
  plan.hasPlan = fs.existsSync(path.join(dirPath, 'plan.md'));
  plan.hasDecisionLog = fs.existsSync(path.join(dirPath, 'decision-log.md'));

  return plan;
}

// --- Scan ALL active plans ---

let plans = [];
try {
  const dirs = fs.readdirSync(ACTIVE_DIR, { withFileTypes: true });
  for (const d of dirs) {
    if (d.isDirectory()) {
      plans.push(scanPlan(path.join(ACTIVE_DIR, d.name), d.name));
    }
  }
} catch { /* */ }

plans.sort((a, b) => b.lastModified - a.lastModified);

// --- Read content-writing specific sources ---

const tabStatus = readFile('workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md');
const projectState = readFile('workspace/plan/active/_Project-Management_/project-state.md');
const blockingItems = readFile('workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md');
const decisionRegistry = readFile('workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md');

// --- Count real files ---

const v2Mdx = countFiles(path.join(ROOT, 'v2'), '.mdx');
const opScripts = countFiles(path.join(ROOT, 'operations/scripts'), '.js');

let skillCount = 0;
try {
  const skillDirs = fs.readdirSync(path.join(ROOT, 'ai-tools/ai-skills'), { withFileTypes: true });
  for (const d of skillDirs) {
    if (d.isDirectory() && fs.existsSync(path.join(ROOT, 'ai-tools/ai-skills', d.name, 'SKILL.md'))) {
      skillCount++;
    }
  }
} catch { /* */ }

// --- Output ---

console.log('SESSION STATE — ' + new Date().toISOString().split('T')[0]);
console.log('='.repeat(60));
console.log('');

// ALL active plans
console.log('ALL ACTIVE PLANS (' + plans.length + ' in workspace/plan/active/):');
console.log('');
console.log('| Plan | Files | Last touched | Tracker | Plan doc | Completion | Decisions |');
console.log('|---|---|---|---|---|---|---|');
for (const p of plans) {
  const date = p.lastModified ? new Date(p.lastModified).toISOString().split('T')[0] : '?';
  console.log('| ' + p.name +
    ' | ' + p.files +
    ' | ' + date +
    ' | ' + (p.hasTracker ? 'Y' : '-') +
    ' | ' + (p.hasPlan ? 'Y' : '-') +
    ' | ' + (p.hasCompletionReport ? 'Y' : '-') +
    ' | ' + (p.hasDecisionLog ? 'Y' : '-') +
    ' |');
}
console.log('');

// Tab status
if (tabStatus) {
  console.log('CONTENT PIPELINE — TAB GATES (from tab-status.md):');
  console.log(extractTable(tabStatus, '| Tab'));
  console.log('');
}

// Running agents
if (projectState) {
  console.log('RUNNING AGENTS (from project-state.md):');
  const running = extractTable(projectState, '| Agent');
  console.log(running || '  None');
  console.log('');

  const blockedSection = projectState.split('## Blocked')[1];
  if (blockedSection) {
    console.log('BLOCKED ON HUMAN DECISION (from project-state.md):');
    console.log(extractTable(blockedSection, '| Decision'));
    console.log('');
  }
}

// Blocking items
if (blockingItems) {
  const itemTable = extractTable(blockingItems, '| ID');
  const hasItems = itemTable.split('\n').some(line =>
    line.startsWith('|') && !line.includes('| ID') && !line.includes('|---')
  );
  if (hasItems) {
    console.log('BLOCKING ITEMS (from blocking-items.md):');
    console.log(itemTable);
    console.log('');
  } else {
    console.log('BLOCKING ITEMS: None logged');
    console.log('');
  }
}

// Locked decisions
if (decisionRegistry) {
  console.log('LOCKED DECISIONS (from decision-registry.md):');
  console.log(extractTable(decisionRegistry, '| ID'));
  console.log('');
}

// Live counts
console.log('REPO COUNTS (live):');
console.log('  v2 MDX files:          ' + v2Mdx);
console.log('  operations scripts:    ' + opScripts);
console.log('  AI skills (SKILL.md):  ' + skillCount);
console.log('  active plans:          ' + plans.length);
console.log('');
console.log('All data from source files. Run again for current state.');
