#!/usr/bin/env bash
# @script ensure-mint-watcher-patch
# @summary Ensure Mint local-preview watcher disables glob expansion in repo paths.
# @owner docs
# @scope tools/scripts
#
# @usage
#   bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check
#   bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply
#
# @inputs
#   --check Verify patch presence and exit non-zero if missing.
#   --apply Apply patch if missing (default mode).
#
# @outputs
#   - Console status for current Mint listener patch state.
#
# @exit-codes
#   0 = patched/present
#   1 = patch missing in --check mode
#   2 = invalid usage / mint install not found / unsupported listener shape
#   3 = patch write failed
#
# @examples
#   bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check
#   bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply
#
# @notes
#   Keep script behavior deterministic and update script indexes after changes.

set -euo pipefail

MODE="apply"
if [ "${1:-}" = "--check" ]; then
    MODE="check"
elif [ "${1:-}" = "--apply" ] || [ "${1:-}" = "" ]; then
    MODE="apply"
elif [ "${1:-}" = "--help" ] || [ "${1:-}" = "-h" ]; then
    cat <<'EOF'
Usage:
  bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check
  bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply
EOF
    exit 0
else
    echo "Error: Unknown option: $1" >&2
    exit 2
fi

if ! command -v mint >/dev/null 2>&1; then
    echo "Error: mint CLI not found in PATH." >&2
    exit 2
fi

MINT_BIN="$(command -v mint)"
MINT_ENTRY_REALPATH="$(node -e 'const fs=require("fs"); console.log(fs.realpathSync(process.argv[1]));' "$MINT_BIN")"
MINT_ROOT="$(cd "$(dirname "$MINT_ENTRY_REALPATH")" && pwd)"
LISTENER_PATH="$MINT_ROOT/node_modules/@mintlify/previewing/dist/local-preview/listener/index.js"

if [ ! -f "$LISTENER_PATH" ]; then
    echo "Error: Mint listener file not found at: $LISTENER_PATH" >&2
    exit 2
fi

if rg -q "disableGlobbing:\\s*true" "$LISTENER_PATH"; then
    echo "Mint watcher patch present: $LISTENER_PATH"
    exit 0
fi

if [ "$MODE" = "check" ]; then
    echo "Mint watcher patch missing: $LISTENER_PATH" >&2
    exit 1
fi

if ! rg -q "^\\s*ignoreInitial:\\s*true," "$LISTENER_PATH"; then
    echo "Error: Could not find expected watcher option in listener file." >&2
    exit 2
fi

if ! node -e '
const fs = require("fs");
const path = process.argv[1];
const src = fs.readFileSync(path, "utf8");
if (src.includes("disableGlobbing: true")) {
  process.exit(0);
}
const needle = "        ignoreInitial: true,\n";
const injected = "        ignoreInitial: true,\n        disableGlobbing: true,\n";
if (!src.includes(needle)) {
  console.error("Unsupported listener format: ignoreInitial block not found.");
  process.exit(2);
}
const next = src.replace(needle, injected);
if (next === src) {
  console.error("Patch was not applied.");
  process.exit(2);
}
try {
  fs.writeFileSync(path, next, "utf8");
} catch (err) {
  console.error(err && err.message ? err.message : String(err));
  process.exit(3);
}
' "$LISTENER_PATH"; then
    echo "Error: Failed to apply Mint watcher patch at: $LISTENER_PATH" >&2
    exit 3
fi

echo "Mint watcher patch applied: $LISTENER_PATH"
exit 0
