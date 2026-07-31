#!/bin/bash
# fix-titles.sh — Fix UUID-only labels in model.cache from JSONL custom-title entries
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

echo "=== Fix session titles ==="

sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.model.cache';" | python3 -c "
import sys, json, os, re

data = json.loads(sys.stdin.read())
sessions_dir = '$SESSIONS_DIR'

# UUID pattern
uuid_pat = re.compile(r'^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$', re.I)
short_uuid_pat = re.compile(r'^[0-9a-f]{8}$', re.I)

fixed = 0
broken = []
garbage_titles = []

for e in data:
    if 'claude-code' not in e.get('resource', ''):
        continue

    label = e.get('label', '')
    sid = e.get('resource', '').replace('claude-code:/', '')

    # Detect bad titles
    is_uuid = uuid_pat.match(label) or short_uuid_pat.match(label)
    is_garbage = label.startswith('<ide_') or label.startswith('The user opened') or label.startswith('The user selected')
    is_empty = not label.strip()

    if not (is_uuid or is_garbage or is_empty):
        continue

    # Try to extract title from JSONL
    fpath = os.path.join(sessions_dir, sid + '.jsonl')
    if not os.path.exists(fpath):
        broken.append((sid, label, 'FILE NOT FOUND'))
        continue

    custom_title = None
    ai_title = None

    try:
        with open(fpath, 'r') as f:
            for line in f:
                try:
                    entry = json.loads(line.strip())
                    if entry.get('type') == 'custom-title' and entry.get('customTitle'):
                        custom_title = entry['customTitle']
                    elif entry.get('type') == 'ai-title' and entry.get('aiTitle'):
                        ai_title = entry['aiTitle']
                except json.JSONDecodeError:
                    continue
    except Exception:
        broken.append((sid, label, 'READ ERROR'))
        continue

    new_title = custom_title or ai_title
    if new_title and not new_title.startswith('<ide_'):
        old = label[:40]
        e['label'] = new_title
        e['tooltip'] = f'Claude Code session: {new_title}'
        print(f'  FIX: {old:40s} -> {new_title[:60]}')
        fixed += 1
    else:
        reason = 'no custom-title or ai-title in file' if not new_title else 'ai-title is garbage'
        broken.append((sid[:12], label[:30], reason))

print()
print(f'Fixed: {fixed}')
if broken:
    print(f'Could not fix: {len(broken)}')
    for sid, label, reason in broken:
        print(f'  {sid}: \"{label}\" — {reason}')

# Write fixed data
with open('/tmp/fixed-titles-cache.json', 'w') as f:
    json.dump(data, f)
print()
print('Fixed cache written to /tmp/fixed-titles-cache.json')
"

if [ "$DRY_RUN" = "--dry-run" ]; then
    echo ""
    echo "[DRY RUN] Would write fixed titles to state.vscdb"
    echo "Run without --dry-run to apply."
else
    if [ -f /tmp/fixed-titles-cache.json ]; then
        sqlite3 "$STATEDB" "UPDATE ItemTable SET value=readfile('/tmp/fixed-titles-cache.json') WHERE key='agentSessions.model.cache';"
        echo ""
        echo "[OK] Fixed titles written to model.cache"
    fi
fi
