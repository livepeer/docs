/**
 * @script      phase-gate-hook
 * @type        
 * @concern     
 * @niche       
 * @purpose     Enforces phase checkpoint verification before allowing work to proceed
 * @description PostToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified
 * @mode        read-only
 * @pipeline    PostToolUse hook → reads phase-gate.jsonl → emits unverified checkpoints
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
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
    const toolName = data.tool_name || '';

    if (toolName !== 'Edit' && toolName !== 'Write') {
      process.exit(0);
    }

    // Don't fire when editing the gate file itself (marking checkpoints done)
    const fp = (data.tool_input || {}).file_path || '';
    if (fp.includes('phase-gate.jsonl')) {
      process.exit(0);
    }

    const gatePath = path.join(
      process.cwd(),
      'workspace/thread-outputs/sessions/phase-gate.jsonl'
    );

    let lines;
    try {
      const content = fs.readFileSync(gatePath, 'utf8').trim();
      if (!content) { process.exit(0); }
      lines = content.split('\n').filter(Boolean);
    } catch (_) {
      // No gate file — nothing to enforce
      process.exit(0);
    }

    // Parse all checkpoints
    const checkpoints = [];
    for (const line of lines) {
      try {
        checkpoints.push(JSON.parse(line));
      } catch (_) { /* skip malformed lines */ }
    }

    if (checkpoints.length === 0) { process.exit(0); }

    // Group by thread, find lowest unfinished phase per thread
    const threads = {};
    for (const cp of checkpoints) {
      const key = cp.thread || 'unknown';
      if (!threads[key]) threads[key] = [];
      threads[key].push(cp);
    }

    const warnings = [];

    for (const [thread, cps] of Object.entries(threads)) {
      // Find the lowest phase number that has unverified checkpoints
      const phases = [...new Set(cps.map(c => c.phase))].sort((a, b) => a - b);

      for (const phase of phases) {
        const phaseCps = cps.filter(c => c.phase === phase);
        const unverified = phaseCps.filter(c => !c.verified);

        if (unverified.length > 0) {
          warnings.push({
            thread,
            phase,
            total: phaseCps.length,
            unverified: unverified.map(c => c.check)
          });
          // Only show the earliest incomplete phase per thread
          break;
        }
      }
    }

    if (warnings.length === 0) { process.exit(0); }

    const parts = ['PHASE GATE: Unverified checkpoints exist. Verify before moving to the next phase.', ''];

    for (const w of warnings) {
      parts.push(`[${w.thread}] Phase ${w.phase} — ${w.unverified.length}/${w.total} unverified:`);
      for (const check of w.unverified) {
        parts.push(`  ✗ ${check}`);
      }
      parts.push('');
    }

    parts.push('Mark checkpoints done by editing phase-gate.jsonl (set "verified":true). Warnings stop when all current-phase checkpoints pass.');

    console.log(JSON.stringify({ systemMessage: parts.join('\n') }));

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
