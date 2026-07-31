#!/bin/bash
# recover-dropped-sessions.sh — Find sessions on disk missing from sidebar, inject them
# CLOSE VS CODE BEFORE RUNNING.
set -euo pipefail

WSID="037ec7ad625e14c50d909078ee7849d3"
STATEDB="$HOME/Library/Application Support/Code/User/workspaceStorage/$WSID/state.vscdb"
SESSIONS_DIR="$HOME/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev"
DRY_RUN="${1:-}"

if [ ! -f "$STATEDB" ]; then
    echo "[ERROR] state.vscdb not found"
    exit 1
fi

echo "=== Recover dropped sessions ==="

sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.model.cache';" | python3 -c "
import sys, json, os, glob
from datetime import datetime

data = json.loads(sys.stdin.read())

# Get all cached Claude Code session IDs
cached_ids = set()
for e in data:
    res = e.get('resource', '')
    if 'claude-code:/' in res:
        cached_ids.add(res.replace('claude-code:/', ''))

# Get all session files on disk
sessions_dir = '$SESSIONS_DIR'
disk_files = glob.glob(os.path.join(sessions_dir, '*.jsonl'))
disk_ids = {os.path.basename(f).replace('.jsonl', '') for f in disk_files}

# Find missing
missing = disk_ids - cached_ids
found = disk_ids & cached_ids

print(f'On disk:          {len(disk_ids)}')
print(f'In model.cache:   {len(cached_ids)}')
print(f'Already present:  {len(found)}')
print(f'MISSING from sidebar: {len(missing)}')
print()

if not missing:
    print('[OK] No missing sessions. All disk files are in the sidebar cache.')
    sys.exit(0)

# For each missing session, extract title and create a cache entry
new_entries = []
for sid in sorted(missing):
    fpath = os.path.join(sessions_dir, sid + '.jsonl')
    title = sid  # fallback
    created = None

    # Read file to extract title and timestamp
    try:
        with open(fpath, 'r') as f:
            for line in f:
                try:
                    entry = json.loads(line.strip())
                    if entry.get('type') == 'custom-title' and entry.get('customTitle'):
                        title = entry['customTitle']
                    elif entry.get('type') == 'ai-title' and entry.get('aiTitle') and title == sid:
                        title = entry['aiTitle']
                    if not created and entry.get('timestamp'):
                        created = entry['timestamp']
                except json.JSONDecodeError:
                    continue
    except Exception as ex:
        print(f'  [WARN] Cannot read {sid}: {ex}')
        continue

    # Parse timestamp
    created_ms = 0
    if created:
        try:
            from datetime import datetime
            dt = datetime.fromisoformat(created.replace('Z', '+00:00'))
            created_ms = int(dt.timestamp() * 1000)
        except:
            pass

    now_ms = int(datetime.now().timestamp() * 1000)

    entry = {
        'providerType': 'claude-code',
        'providerLabel': 'Claude',
        'resource': f'claude-code:/{sid}',
        'icon': 'claude',
        'label': title,
        'badge': {
            'value': '$(folder) Docs-v2-dev',
            'supportThemeIcons': True,
            'supportHtml': False,
            'supportAlertSyntax': False,
            'uris': {}
        },
        'tooltip': f'Claude Code session: {title}',
        'status': 1,
        'timing': {
            'created': created_ms or now_ms,
            'lastRequestEnded': now_ms
        },
        'metadata': {
            'cwd': {
                '\$mid': 1,
                'path': '/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev',
                'scheme': 'file'
            }
        }
    }
    new_entries.append(entry)
    dt_str = datetime.fromtimestamp(created_ms/1000).strftime('%m-%d %H:%M') if created_ms else 'UNKNOWN'
    print(f'  RECOVER: {sid[:12]}... | {dt_str} | {title[:60]}')

print()
print(f'Total to inject: {len(new_entries)}')

# Write combined data
combined = data + new_entries
with open('/tmp/recovered-model-cache.json', 'w') as f:
    json.dump(combined, f)
print(f'Combined cache written to /tmp/recovered-model-cache.json ({len(combined)} entries)')
"

if [ "$DRY_RUN" = "--dry-run" ]; then
    echo ""
    echo "[DRY RUN] Would inject missing sessions into model.cache"
    echo "Run without --dry-run to apply."
else
    if [ -f /tmp/recovered-model-cache.json ]; then
        sqlite3 "$STATEDB" "UPDATE ItemTable SET value=readfile('/tmp/recovered-model-cache.json') WHERE key='agentSessions.model.cache';"
        echo ""
        echo "[OK] Missing sessions injected into model.cache"
    fi
fi
