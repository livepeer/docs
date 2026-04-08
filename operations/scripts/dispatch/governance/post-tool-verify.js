/**
 * @script      post-tool-verify
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description Tracks consecutive failures for circuit breaker. Fires after tool use failures.
 * @mode        dispatch
 * @pipeline    PostToolUseFailure hook → reads stdin → tracks failures → triggers circuit breaker at 3
 * @scope       .claude/settings.json PostToolUseFailure hook
 * @usage       Called automatically by Claude Code PostToolUseFailure hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || 'unknown';
    const toolInput = data.tool_input || {};
    const sessionId = process.env.CLAUDE_SESSION_ID || 'default';
    const trackerPath = path.join('/tmp', `claude-circuit-breaker-${sessionId}`);

    // Skip circuit breaker for expected validator/generator exits
    // Validators exit 1 when they find violations (by design)
    // Generators exit 1 when they find staleness (by design)
    if (toolName === 'Bash') {
      const cmd = toolInput.command || '';
      if (/\bcheck-|validate-|verify-|lint-|generate-governance-map|check-jsdoc|check-workflow|check-governance|check-script/.test(cmd)) {
        // Expected exit 1 from governance validators — not a real failure
        process.exit(0);
      }
    }

    // Append this failure
    fs.appendFileSync(trackerPath, toolName + '\n');

    // Read last 3 entries
    const content = fs.readFileSync(trackerPath, 'utf8').trim().split('\n');
    if (content.length >= 3) {
      const last3 = content.slice(-3);
      const unique = new Set(last3);
      // Fire on 3 consecutive failures of ANY tool (not just same tool)
      // Same-tool gets a more specific message
      if (unique.size === 1) {
        console.log(JSON.stringify({
          hookSpecificOutput: {
            hookEventName: 'PostToolUseFailure',
            additionalContext: 'CIRCUIT BREAKER: 3 consecutive failures of the same tool. STOP retrying the same approach. Root-cause analyse: (1) state what you tried and why it failed each time, (2) list the actual error messages, (3) propose a DIFFERENT approach based on the evidence. Do not retry without approval.'
          }
        }));
      } else {
        console.log(JSON.stringify({
          hookSpecificOutput: {
            hookEventName: 'PostToolUseFailure',
            additionalContext: `CIRCUIT BREAKER: 3 consecutive tool failures (${last3.join(', ')}). STOP. Something is systematically wrong. Root-cause analyse: (1) state what you tried and why it failed each time, (2) list the actual error messages, (3) propose a DIFFERENT approach based on the evidence. Do not retry without approval.`
          }
        }));
      }
    }

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
