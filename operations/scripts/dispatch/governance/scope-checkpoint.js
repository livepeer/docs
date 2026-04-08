/**
 * @script      scope-checkpoint
 * @type        
 * @concern     
 * @niche       
 * @purpose     Injects periodic scope checks to prevent session drift from thread outcome
 * @description PostToolUse hook for Edit/Write. Tracks total edit count per session.
 * @mode        read-only
 * @pipeline    PostToolUse hook → parse stdin → track edit count → inject scope check every 8 edits
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CHECKPOINT_INTERVAL = 8;

const EXEMPT_PATTERNS = [
  /\/workspace\//,
  /\/_workspace\//,
  /\/\.claude\//,
  /\/tmp\//,
  /session-log\.txt/,
  /phase-gate\.jsonl/,
  /flags\.jsonl/,
  /message-backup\.jsonl/
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function getStatePath() {
  return path.join('/tmp', `claude-scope-checkpoint-${getSessionId()}.json`);
}

function getOutcomePath() {
  return path.join('/tmp', `claude-thread-outcome-${getSessionId()}.txt`);
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(getStatePath(), 'utf8'));
  } catch (_) {
    return { editCount: 0, lastCheckpoint: 0, filesSinceCheckpoint: [] };
  }
}

function writeState(state) {
  fs.writeFileSync(getStatePath(), JSON.stringify(state, null, 2) + '\n');
}

function readOutcome() {
  try {
    return fs.readFileSync(getOutcomePath(), 'utf8').trim();
  } catch (_) {
    return null;
  }
}

function isExempt(filePath) {
  return EXEMPT_PATTERNS.some((pattern) => pattern.test(filePath));
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

    state.editCount += 1;

    // Track file for checkpoint summary
    const basename = path.basename(fp);
    if (!state.filesSinceCheckpoint.includes(basename)) {
      state.filesSinceCheckpoint.push(basename);
    }

    // Check if checkpoint fires
    if (state.editCount % CHECKPOINT_INTERVAL === 0) {
      const checkpointNumber = Math.floor(state.editCount / CHECKPOINT_INTERVAL);
      const outcome = readOutcome();
      const fileList = state.filesSinceCheckpoint.join(', ');

      const outcomeText = outcome
        ? outcome
        : 'No /thread outcome registered. Run /thread to set your session outcome.';

      const msg = [
        `SCOPE CHECK #${checkpointNumber}:`,
        `  Thread outcome: ${outcomeText}`,
        `  Files edited since last checkpoint: ${fileList}`,
        '',
        'Before continuing: confirm in one sentence how your current work serves this outcome.',
        'If it does not, stop the current approach and refocus on the outcome.'
      ].join('\n');

      console.log(JSON.stringify({ systemMessage: msg }));

      // Reset file list for next interval
      state.filesSinceCheckpoint = [];
      state.lastCheckpoint = state.editCount;
    }

    writeState(state);
    process.exit(0);
  } catch (e) {
    // Don't crash the hook
    process.exit(0);
  }
});
