/**
 * @script      completion-gate
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description PreToolUse hook for Write/Edit. Detects writes to session-log.txt,
 * @mode        dispatch
 * @pipeline    PreToolUse hook → parse stdin → check completion artifact → read verify/loop state → allow or block
 * @scope       .claude/settings.json PreToolUse hook (Write|Edit matcher)
 * @usage       Called automatically by Claude Code PreToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// File patterns that constitute completion artifacts
const COMPLETION_PATTERNS = [
  /session-log\.txt$/,
  /completion-reports\.md$/
];

// Directories where completion artifacts may live
const COMPLETION_DIRS = [
  /workspace\/thread-outputs\/sessions\//
];

// Files that are always allowed (operational, not completion claims)
const ALWAYS_ALLOW = [
  /phase-gate\.jsonl$/,
  /flags\.jsonl$/,
  /message-backup\.jsonl$/,
  /friction-log\.jsonl$/
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSessionId() {
  return process.env.CLAUDE_SESSION_ID || 'default';
}

function getVerifyStatePath() {
  return path.join('/tmp', `claude-mdx-verification-${getSessionId()}.json`);
}

function getEditLoopStatePath() {
  return path.join('/tmp', `claude-edit-loop-${getSessionId()}.json`);
}

function isCompletionArtifact(filePath) {
  // Always-allow overrides completion check
  if (ALWAYS_ALLOW.some((p) => p.test(filePath))) return false;
  // Check explicit completion file patterns
  if (COMPLETION_PATTERNS.some((p) => p.test(filePath))) return true;
  // Check if it's in a completion directory (but not an operational file)
  if (COMPLETION_DIRS.some((p) => p.test(filePath))) return true;
  return false;
}

function readVerifyState() {
  try {
    return JSON.parse(fs.readFileSync(getVerifyStatePath(), 'utf8'));
  } catch (_) {
    return null;
  }
}

function readEditLoopState() {
  try {
    return JSON.parse(fs.readFileSync(getEditLoopStatePath(), 'utf8'));
  } catch (_) {
    return {};
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
    const toolInput = data.tool_input || {};
    const fp = toolInput.file_path || '';

    // Only gate Write and Edit
    if (toolName !== 'Write' && toolName !== 'Edit') {
      process.exit(0);
    }

    // Only care about completion artifacts
    if (!fp || !isCompletionArtifact(fp)) {
      process.exit(0);
    }

    const warnings = [];

    // Check render verification state
    const verifyState = readVerifyState();
    if (verifyState) {
      if (verifyState.status === 'failed') {
        const failedFile = path.basename(verifyState.file || 'unknown');
        const errors = (verifyState.newErrors || []).slice(0, 3).map((e) => `  - ${e}`).join('\n');
        console.log(JSON.stringify({
          decision: 'block',
          reason: `BLOCKED: Cannot write completion artifact while render verification is failing.\n  Failed file: ${failedFile}\n  Errors:\n${errors}\n\nFix the render failure first, then write your completion report.`
        }));
        process.exit(2);
      }

      if (verifyState.status === 'server-failed' || verifyState.status === 'pending') {
        warnings.push(`Render verification did not complete (status: ${verifyState.status}). Run manual verification before declaring done.`);
      }
    }

    // Check edit loop state
    const loopState = readEditLoopState();
    const activeLoops = Object.entries(loopState)
      .filter(([, v]) => v.count >= 3 && v.hypothesisRequired)
      .map(([file, v]) => `${path.basename(file)} (${v.count} edits)`);

    if (activeLoops.length > 0) {
      warnings.push(`Edit loop active on: ${activeLoops.join(', ')}. Verify these files before closing the session.`);
    }

    // Emit warnings if any
    if (warnings.length > 0) {
      console.log(JSON.stringify({
        systemMessage: `COMPLETION GATE WARNING:\n${warnings.map((w) => `  - ${w}`).join('\n')}\n\nProceeding with write, but address these before declaring the session complete.`
      }));
    }

    // No blocking conditions — allow through
    process.exit(0);
  } catch (e) {
    // Don't crash the hook — allow through
    process.exit(0);
  }
});
