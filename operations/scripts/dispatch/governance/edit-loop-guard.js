/**
 * @script edit-loop-guard
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Detects repeated edits to the same file and requires hypothesis before continuing
 * @description PostToolUse hook for Edit/Write. Tracks per-file edit counts within a session.
 *   At 3 edits to the same file without verification passing, injects a hypothesis requirement.
 *   At 5 edits, writes a block flag that pre-tool-guard.js reads to hard-block further edits.
 *   Resets when mdx-render-verify writes a "passed" state for the file. Exempt paths
 *   (workspace/, .claude/, /tmp/, session-log) are not tracked.
 * @mode read-only
 * @pipeline PostToolUse hook → parse stdin → track per-file edits → warn at 3 → flag block at 5
 * @scope .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const EXEMPT_PATTERNS = [
  /\/workspace\//,
  /\/_workspace\//,
  /\/\.claude\//,
  /session-log\.txt/,
  /phase-gate\.jsonl/,
  /flags\.jsonl/,
  /message-backup\.jsonl/,
  /completion-reports\.md/,
  /\/tmp\//
];

const HYPOTHESIS_THRESHOLD = 3;
const BLOCK_THRESHOLD = 5;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function getStatePath() {
  return path.join('/tmp', `claude-edit-loop-${getSessionId()}.json`);
}

function getBlockPath() {
  return path.join('/tmp', `claude-edit-loop-block-${getSessionId()}.json`);
}

function getVerifyStatePath() {
  return path.join('/tmp', `claude-mdx-verification-${getSessionId()}.json`);
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(getStatePath(), 'utf8'));
  } catch (_) {
    return {};
  }
}

function writeState(state) {
  fs.writeFileSync(getStatePath(), JSON.stringify(state, null, 2) + '\n');
}

function isExempt(filePath) {
  return EXEMPT_PATTERNS.some((pattern) => pattern.test(filePath));
}

function checkVerifyPassed(filePath) {
  try {
    const verifyState = JSON.parse(fs.readFileSync(getVerifyStatePath(), 'utf8'));
    return verifyState.status === 'passed' && verifyState.file === filePath;
  } catch (_) {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Main hook logic
// ---------------------------------------------------------------------------

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || '';

    if (toolName !== 'Edit' && toolName !== 'Write') {
      process.exit(0);
    }

    const toolInput = data.tool_input || {};
    const fp = toolInput.file_path || '';

    if (!fp || isExempt(fp)) {
      process.exit(0);
    }

    const state = readState();
    const basename = path.basename(fp);
    const now = new Date().toISOString();

    // Check if verification passed since last edit — reset if so
    if (state[fp] && checkVerifyPassed(fp)) {
      delete state[fp];
      // Clear block flag if it exists for this file
      try {
        const blockState = JSON.parse(fs.readFileSync(getBlockPath(), 'utf8'));
        if (blockState.file === fp) {
          fs.unlinkSync(getBlockPath());
        }
      } catch (_) { /* no block file */ }
      writeState(state);
      process.exit(0);
    }

    // Increment edit count for this file
    if (!state[fp]) {
      state[fp] = { count: 0, firstEdit: now, lastEdit: now, hypothesisRequired: false };
    }

    state[fp].count += 1;
    state[fp].lastEdit = now;

    const count = state[fp].count;

    // Threshold: 3 edits — require hypothesis
    if (count === HYPOTHESIS_THRESHOLD) {
      state[fp].hypothesisRequired = true;
      writeState(state);

      console.log(JSON.stringify({
        systemMessage: `EDIT LOOP WARNING: You have edited ${basename} ${count} times without verification passing. Before your next edit, state: (1) your hypothesis for why previous edits did not work, (2) what is different about your next approach, (3) what you will conclude if this attempt also fails. If you cannot answer #2, use /diagnose.`
      }));
      process.exit(0);
    }

    // Threshold: 5+ edits — write block flag
    if (count >= BLOCK_THRESHOLD) {
      // Write block flag for pre-tool-guard.js to enforce
      fs.writeFileSync(getBlockPath(), JSON.stringify({
        file: fp,
        count,
        timestamp: now
      }, null, 2) + '\n');

      writeState(state);

      console.log(JSON.stringify({
        systemMessage: `EDIT LOOP BLOCK: You have edited ${basename} ${count} times without verification passing. Further edits to this file are BLOCKED until you: (a) run /diagnose, OR (b) verify the file renders/runs successfully. The PreToolUse gate will enforce this on your next edit attempt.`
      }));
      process.exit(0);
    }

    // Between thresholds or below — just track
    writeState(state);
    process.exit(0);
  } catch (e) {
    // Don't crash the hook
    process.exit(0);
  }
});
