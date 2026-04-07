/**
 * @script pre-compact-checkpoint
 * @type dispatch
 * @concern governance
 * @niche pipelines
 * @purpose Preserves critical session state before context compaction
 * @description Fires before Claude Code compacts context in long sessions. Reads the
 *   thread outcome, active corrections, and recent friction signals, then injects them
 *   directly into the systemMessage so they survive compaction. Also writes a checkpoint
 *   to session-log.txt. The systemMessage IS the re-orientation — Claude doesn't need
 *   to go read anything after compaction because the essential state is right here.
 * @mode write (session-log.txt only)
 * @pipeline PreCompact hook → reads critical files → builds state summary → injects via systemMessage
 * @scope .claude/settings.json PreCompact hook
 * @usage Called automatically by Claude Code PreCompact hook. Not invoked directly.
 * @policy Governance enforcement — do not bypass
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

const CWD = process.cwd();
const LOG_PATH = path.join(CWD, 'workspace/thread-outputs/sessions/session-log.txt');

const readSafe = (fp) => {
  try { return fs.readFileSync(path.join(CWD, fp), 'utf8').trim(); } catch (_) { return ''; }
};

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = input.trim() ? JSON.parse(input) : {};
    const sessionId = process.env.CLAUDE_SESSION_ID || 'unknown';
    const timestamp = new Date().toISOString();
    const summary = data.transcript_summary || data.summary || '';

    // --- Gather critical state ---

    // 1. Recent friction signals (last 5)
    let recentFriction = '';
    try {
      const frictionLog = readSafe('workspace/thread-outputs/sessions/friction-log.jsonl');
      if (frictionLog) {
        const lines = frictionLog.split('\n').filter(Boolean).slice(-5);
        const signals = lines.map(l => {
          try {
            const entry = JSON.parse(l);
            return entry.signals.map(s => s.subtype).join(', ') + ': ' + (entry.context || '').slice(0, 100);
          } catch (_) { return ''; }
        }).filter(Boolean);
        if (signals.length > 0) {
          recentFriction = 'RECENT CORRECTIONS FROM USER:\n' + signals.map(s => '  - ' + s).join('\n');
        }
      }
    } catch (_) {}

    // 2. Phase gate checkpoints (unverified)
    let phaseGate = '';
    try {
      const gateContent = readSafe('workspace/thread-outputs/sessions/phase-gate.jsonl');
      if (gateContent) {
        const unverified = gateContent.split('\n').filter(Boolean)
          .map(l => { try { return JSON.parse(l); } catch (_) { return null; } })
          .filter(c => c && !c.verified);
        if (unverified.length > 0) {
          phaseGate = 'UNVERIFIED CHECKPOINTS: ' + unverified.map(c => `[${c.thread}] Phase ${c.phase}: ${c.check}`).join('; ');
        }
      }
    } catch (_) {}

    // 3. Active flags for any thread
    let flags = '';
    try {
      const flagsContent = readSafe('workspace/thread-outputs/sessions/flags.jsonl');
      if (flagsContent) {
        const activeFlags = flagsContent.split('\n').filter(Boolean)
          .map(l => { try { return JSON.parse(l); } catch (_) { return null; } })
          .filter(f => f && f.priority !== 'done')
          .slice(0, 5);
        if (activeFlags.length > 0) {
          flags = 'ACTIVE FLAGS: ' + activeFlags.map(f => `[${f.thread}] ${f.flag}`).join('; ');
        }
      }
    } catch (_) {}

    // --- Write checkpoint to session log ---
    const checkpointLines = [
      `--- CHECKPOINT ${timestamp} [${sessionId}] ---`,
      summary || '(No transcript summary available)',
      '---',
      ''
    ];

    const dir = path.dirname(LOG_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.appendFileSync(LOG_PATH, checkpointLines.join('\n'));

    // --- Build the systemMessage that survives compaction ---
    const parts = [
      'CONTEXT COMPACTION OCCURRED. This is your re-orientation. Read this carefully.',
      '',
      'YOUR ROLE: Senior documentation engineer. Coworker, not tool. Bring judgement. Catch your own mistakes. No guessing, no fabricating, no hole-digging.',
      '',
      'CRITICAL RULES:',
      '- Do what was asked first. No adjacent work.',
      '- Never end with "Want me to X or Y?" — present the solution with your recommendation.',
      '- Design the complete pipeline. Never ship step 1 and ask about steps 2-3.',
      '- After 2 failures STOP. Root-cause analyse.',
      '- Gate on execution, not thinking. Research and planning are pre-approved.',
      '- Verify before claiming done.',
      '- Make targeted edits only. Never overwrite entire files.',
      '- UK English. No em-dashes.',
    ];

    if (recentFriction) {
      parts.push('', recentFriction);
    }

    if (phaseGate) {
      parts.push('', phaseGate);
    }

    if (flags) {
      parts.push('', flags);
    }

    parts.push(
      '',
      'Re-read CLAUDE.md for full rules. Check TodoWrite for current tasks. Run /status if unsure what you were working on.',
      'Do NOT start new work without confirming continuity with the user.'
    );

    console.log(JSON.stringify({ systemMessage: parts.join('\n') }));

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
