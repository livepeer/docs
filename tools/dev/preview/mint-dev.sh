#!/usr/bin/env bash
# @script      mint-dev
# @type        utility
# @concern     governance
# @niche       dev-tools
# @purpose     tooling:dev-tools
# @description Mintlify dev server launcher — starts mint dev with correct configuration
# @mode        integrate
# @pipeline    manual — developer tool
# @scope       full-repo
# @usage       bash tools/dev/preview/mint-dev.sh [flags]
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
MINT_WORKDIR="$REPO_ROOT"
SCOPE_GENERATOR="$REPO_ROOT/tools/dev/preview/generate-mint-dev-scope.js"
SCOPED_MODE="${LPD_SCOPED_MINT_DEV:-0}"
DEV_ENTRYPOINT="${LPD_DEV_ENTRYPOINT:-mint-dev}"
DOCS_CONFIG="${LPD_MINT_DOCS_CONFIG:-}"
SCOPE_INTERACTIVE="${LPD_MINT_SCOPE_INTERACTIVE:-0}"
SCOPE_FILE="${LPD_MINT_SCOPE_FILE:-}"
SCOPE_VERSIONS="${LPD_MINT_SCOPE_VERSIONS:-}"
SCOPE_LANGUAGES="${LPD_MINT_SCOPE_LANGUAGES:-}"
SCOPE_TABS="${LPD_MINT_SCOPE_TABS:-}"
SCOPE_ANCHORS="${LPD_MINT_SCOPE_ANCHORS:-}"
SCOPE_PREFIXES="${LPD_MINT_SCOPE_PREFIXES:-}"
DISABLE_OPENAPI="${LPD_MINT_DISABLE_OPENAPI:-0}"
MINT_LOCK_FILE=""
MINT_LOCK_ROOT=""
MINT_SESSION_PORT=""
MINT_SESSION_LABEL=""
DEFAULT_MINT_PORT="${LPD_MINT_DEFAULT_PORT:-3333}"
AGENT_RESERVED_MINT_PORTS="${LPD_AGENT_RESERVED_MINT_PORTS:-3000}"
AGENT_RESERVED_LPD_PORTS="${LPD_AGENT_RESERVED_LPD_PORTS:-3333}"

has_explicit_port=0
explicit_port_value=""

parse_port_args() {
    local expect_value=0
    local arg

    has_explicit_port=0
    explicit_port_value=""

    for arg in "$@"; do
        if [ "$expect_value" = "1" ]; then
            has_explicit_port=1
            explicit_port_value="$arg"
            expect_value=0
            continue
        fi

        case "$arg" in
            --port)
                expect_value=1
                ;;
            --port=*)
                has_explicit_port=1
                explicit_port_value="${arg#--port=}"
                ;;
            -p)
                expect_value=1
                ;;
            -p*)
                if [ "$arg" != "-p" ]; then
                    has_explicit_port=1
                    explicit_port_value="${arg#-p}"
                fi
                ;;
        esac
    done
}

trim_ascii_whitespace() {
    local value="$1"
    value="${value#"${value%%[![:space:]]*}"}"
    value="${value%"${value##*[![:space:]]}"}"
    printf '%s' "$value"
}

csv_contains_value() {
    local csv="$1"
    local needle="$2"
    local item trimmed
    local IFS=','

    read -r -a items <<< "$csv"
    for item in "${items[@]}"; do
        trimmed="$(trim_ascii_whitespace "$item")"
        if [ -n "$trimmed" ] && [ "$trimmed" = "$needle" ]; then
            return 0
        fi
    done

    return 1
}

current_git_branch() {
    git rev-parse --abbrev-ref HEAD 2>/dev/null || true
}

is_agent_session() {
    if [ "${CODEX_CI:-0}" = "1" ] || [ -n "${CODEX_THREAD_ID:-}" ] || [ -n "${CODEX_INTERNAL_ORIGINATOR_OVERRIDE:-}" ]; then
        return 0
    fi

    if [ -n "${CLAUDE_SESSION_ID:-}" ]; then
        return 0
    fi

    case "$(current_git_branch)" in
        codex/*)
            return 0
            ;;
    esac

    return 1
}

reserved_agent_ports_for_entrypoint() {
    case "$DEV_ENTRYPOINT" in
        lpd)
            printf '%s' "$AGENT_RESERVED_LPD_PORTS"
            ;;
        *)
            printf '%s' "$AGENT_RESERVED_MINT_PORTS"
            ;;
    esac
}

enforce_safe_port() {
    local chosen_port="$1"
    local reserved_ports

    if ! is_agent_session; then
        return 0
    fi

    reserved_ports="$(reserved_agent_ports_for_entrypoint)"
    if [ -n "$reserved_ports" ] && csv_contains_value "$reserved_ports" "$chosen_port"; then
        echo "Error: port $chosen_port is reserved for human-owned dev servers and must not be used by agent sessions via $DEV_ENTRYPOINT." >&2
        if [ "$DEV_ENTRYPOINT" = "lpd" ]; then
            echo "Use an explicit non-reserved port such as: lpd dev -- --port 3334" >&2
        else
            echo "Use an explicit non-reserved port such as: bash tools/dev/preview/mint-dev.sh --port 3334" >&2
        fi
        exit 1
    fi
}

# chokidar treats glob metacharacters in watch paths as patterns. If the repo
# path includes brackets (common in worktree names), change events can be lost.
path_has_glob_meta() {
    local path="$1"
    case "$path" in
        *'['*|*']'*|*'{'*|*'}'*|*'*'*|*'?'*|*'!'*)
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

if [ "$SCOPED_MODE" != "1" ] && path_has_glob_meta "$REPO_ROOT"; then
    REPO_HASH="$(printf '%s' "$REPO_ROOT" | cksum | awk '{print $1}')"
    WATCH_SAFE_LINK="/tmp/mint-dev-${REPO_HASH}"
    ln -sfn "$REPO_ROOT" "$WATCH_SAFE_LINK"
    MINT_WORKDIR="$WATCH_SAFE_LINK"
    echo "Using watcher-safe path for mint dev: $MINT_WORKDIR"
fi

legacy_mint_lock_file_path() {
    local repo_hash
    repo_hash="$(printf '%s' "$REPO_ROOT" | cksum | awk '{print $1}')"
    echo "/tmp/lpd-mint-dev-lock-${repo_hash}.pid"
}

mint_lock_root_path() {
    local repo_hash
    repo_hash="$(printf '%s' "$REPO_ROOT" | cksum | awk '{print $1}')"
    echo "/tmp/lpd-mint-dev-locks-${repo_hash}"
}

sanitize_lock_segment() {
    printf '%s' "$1" | sed 's/[^A-Za-z0-9._-]/-/g'
}

mint_session_lock_dir() {
    local port="$1"
    local safe_port
    safe_port="$(sanitize_lock_segment "$port")"
    echo "$(mint_lock_root_path)/port-${safe_port}"
}

mint_session_lock_metadata_file() {
    local lock_dir="$1"
    echo "$lock_dir/session.info"
}

mint_session_pid_is_live() {
    local pid="$1"
    [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null
}

cleanup_stale_mint_dev_locks() {
    local lock_root="$1"
    local session_dir metadata_file existing_pid

    if [ ! -d "$lock_root" ]; then
        return 0
    fi

    for session_dir in "$lock_root"/port-*; do
        if [ ! -d "$session_dir" ]; then
            continue
        fi
        metadata_file="$(mint_session_lock_metadata_file "$session_dir")"
        existing_pid="$(sed -n '1p' "$metadata_file" 2>/dev/null || true)"
        if ! mint_session_pid_is_live "$existing_pid"; then
            rm -rf "$session_dir"
        fi
    done

    rmdir "$lock_root" 2>/dev/null || true
}

report_conflicting_mint_dev() {
    local lock_dir="$1"
    local port="$2"
    local metadata_file existing_pid existing_workdir

    metadata_file="$(mint_session_lock_metadata_file "$lock_dir")"
    existing_pid="$(sed -n '1p' "$metadata_file" 2>/dev/null || true)"
    existing_workdir="$(sed -n '2p' "$metadata_file" 2>/dev/null || true)"

    echo "Error: mint dev is already running for this repository on port $port." >&2
    echo "  pid: $existing_pid" >&2
    if [ -n "$existing_workdir" ]; then
        echo "  workspace: $existing_workdir" >&2
    fi
    echo "Stop the existing process or use a different port." >&2
    exit 1
}

ensure_no_legacy_active_mint_dev() {
    local lock_file="$1"
    if [ ! -f "$lock_file" ]; then
        return 0
    fi

    local existing_pid existing_workdir
    existing_pid="$(sed -n '1p' "$lock_file" 2>/dev/null || true)"
    existing_workdir="$(sed -n '2p' "$lock_file" 2>/dev/null || true)"

    if mint_session_pid_is_live "$existing_pid"; then
        echo "Error: a legacy mint dev session is already running for this repository." >&2
        echo "  pid: $existing_pid" >&2
        if [ -n "$existing_workdir" ]; then
            echo "  workspace: $existing_workdir" >&2
        fi
        echo "Stop the existing process before launching another dev session." >&2
        exit 1
    fi

    rm -f "$lock_file"
}

acquire_mint_session_lock() {
    local port="$1"
    local legacy_lock_file session_lock_dir metadata_file

    MINT_LOCK_ROOT="$(mint_lock_root_path)"
    MINT_LOCK_FILE="$(mint_session_lock_dir "$port")"
    mkdir -p "$MINT_LOCK_ROOT"

    cleanup_stale_mint_dev_locks "$MINT_LOCK_ROOT"

    legacy_lock_file="$(legacy_mint_lock_file_path)"
    ensure_no_legacy_active_mint_dev "$legacy_lock_file"
    mkdir -p "$MINT_LOCK_ROOT"

    session_lock_dir="$MINT_LOCK_FILE"
    if [ -d "$session_lock_dir" ]; then
        report_conflicting_mint_dev "$session_lock_dir" "$port"
    fi

    if ! mkdir "$session_lock_dir" 2>/dev/null; then
        cleanup_stale_mint_dev_locks "$MINT_LOCK_ROOT"
        if [ -d "$session_lock_dir" ] || ! mkdir "$session_lock_dir" 2>/dev/null; then
            report_conflicting_mint_dev "$session_lock_dir" "$port"
        fi
    fi

    metadata_file="$(mint_session_lock_metadata_file "$session_lock_dir")"
    {
        echo "$$"
        echo "$MINT_SESSION_LABEL"
        echo "$port"
    } > "$metadata_file"
}

cleanup_lock_file() {
    if [ -n "$MINT_LOCK_FILE" ]; then
        rm -rf "$MINT_LOCK_FILE"
    fi
    if [ -n "$MINT_LOCK_ROOT" ]; then
        rmdir "$MINT_LOCK_ROOT" 2>/dev/null || true
    fi
}

run_scoped_workspace_session() {
    if ! command -v node >/dev/null 2>&1; then
        echo "Error: node is required for --scoped dev profile generation." >&2
        exit 1
    fi

    if [ ! -f "$SCOPE_GENERATOR" ]; then
        echo "Error: scoped profile generator not found: $SCOPE_GENERATOR" >&2
        exit 1
    fi

    local -a scope_cmd
    scope_cmd=(node "$SCOPE_GENERATOR" --repo-root "$REPO_ROOT" --run-scoped-session)

    if [ -n "$DOCS_CONFIG" ]; then
        scope_cmd+=(--docs-config "$DOCS_CONFIG")
    fi
    if [ "$SCOPE_INTERACTIVE" = "1" ]; then
        scope_cmd+=(--interactive)
    fi
    if [ -n "$SCOPE_FILE" ]; then
        scope_cmd+=(--scope-file "$SCOPE_FILE")
    fi
    if [ -n "$SCOPE_VERSIONS" ]; then
        scope_cmd+=(--versions "$SCOPE_VERSIONS")
    fi
    if [ -n "$SCOPE_LANGUAGES" ]; then
        scope_cmd+=(--languages "$SCOPE_LANGUAGES")
    fi
    if [ -n "$SCOPE_TABS" ]; then
        scope_cmd+=(--tabs "$SCOPE_TABS")
    fi
    if [ -n "$SCOPE_ANCHORS" ]; then
        scope_cmd+=(--anchors "$SCOPE_ANCHORS")
    fi
    if [ -n "$SCOPE_PREFIXES" ]; then
        scope_cmd+=(--prefixes "$SCOPE_PREFIXES")
    fi
    if [ "$DISABLE_OPENAPI" = "1" ]; then
        scope_cmd+=(--disable-openapi)
    fi

    if [ "$#" -gt 0 ]; then
        scope_cmd+=(-- "$@")
    fi

    "${scope_cmd[@]}"
}

cd "$REPO_ROOT"

# Fail fast: validate scoped profile inputs before any setup work.
# This prevents hook installs, patch checks, and fetches from running
# only to fail at scope resolution at the very end.
if [ "$SCOPED_MODE" = "1" ]; then
    if ! command -v node >/dev/null 2>&1; then
        echo "Error: node is required for --scoped dev profile generation." >&2
        exit 1
    fi
    if [ ! -f "$SCOPE_GENERATOR" ]; then
        echo "Error: scoped profile generator not found: $SCOPE_GENERATOR" >&2
        exit 1
    fi

    local -a validate_cmd 2>/dev/null || declare -a validate_cmd
    validate_cmd=(node "$SCOPE_GENERATOR" --repo-root "$REPO_ROOT" --print-only)
    [ -n "$DOCS_CONFIG" ] && validate_cmd+=(--docs-config "$DOCS_CONFIG")
    [ -n "$SCOPE_FILE" ] && validate_cmd+=(--scope-file "$SCOPE_FILE")
    [ -n "$SCOPE_VERSIONS" ] && validate_cmd+=(--versions "$SCOPE_VERSIONS")
    [ -n "$SCOPE_LANGUAGES" ] && validate_cmd+=(--languages "$SCOPE_LANGUAGES")
    [ -n "$SCOPE_TABS" ] && validate_cmd+=(--tabs "$SCOPE_TABS")
    [ -n "$SCOPE_ANCHORS" ] && validate_cmd+=(--anchors "$SCOPE_ANCHORS")
    [ -n "$SCOPE_PREFIXES" ] && validate_cmd+=(--prefixes "$SCOPE_PREFIXES")
    [ "$DISABLE_OPENAPI" = "1" ] && validate_cmd+=(--disable-openapi)

    if ! "${validate_cmd[@]}" >/dev/null 2>&1; then
        echo "Scope validation failed:" >&2
        "${validate_cmd[@]}" >/dev/null
        exit 1
    fi
fi

# Support both regular repos and worktrees
GIT_COMMON_DIR=$(git rev-parse --git-common-dir 2>/dev/null)
if [ -z "$GIT_COMMON_DIR" ] || [ "$GIT_COMMON_DIR" = "--git-common-dir" ]; then
    GIT_COMMON_DIR=".git"
fi

HOOK_SOURCE=".githooks/pre-commit"
HOOK_TARGET="$GIT_COMMON_DIR/hooks/pre-commit"

if [ -f "$HOOK_SOURCE" ]; then
    if [ ! -x "$HOOK_TARGET" ] || ! cmp -s "$HOOK_SOURCE" "$HOOK_TARGET"; then
        echo "Installing git hooks..."
        ./.githooks/install.sh
        echo ""
    fi
else
    echo "Warning: $HOOK_SOURCE not found. Skipping hook installation."
fi

if ! command -v mint >/dev/null 2>&1; then
    echo "Error: mint CLI not found."
    echo "Install it with: npm i -g mintlify"
    exit 1
fi

echo "Checking Mint watcher patch..."
if bash "$REPO_ROOT/tools/dev/preview/ensure-mint-watcher-patch.sh" --apply; then
    echo "Mint watcher patch preflight complete."
else
    echo "Warning: Mint watcher patch preflight failed."
    echo "Run manually: bash tools/dev/preview/ensure-mint-watcher-patch.sh --apply"
    echo "Continuing with repo-local watcher-safe launcher path fallback."
fi

echo "Fetching external snippets..."
bash "$REPO_ROOT/operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh"

parse_port_args "$@"
if [ "$has_explicit_port" != "1" ]; then
    echo "No explicit Mint port provided. Defaulting to port $DEFAULT_MINT_PORT."
    set -- "$@" --port "$DEFAULT_MINT_PORT"
    MINT_SESSION_PORT="$DEFAULT_MINT_PORT"
else
    MINT_SESSION_PORT="$explicit_port_value"
fi
enforce_safe_port "$MINT_SESSION_PORT"

if [ "$SCOPED_MODE" != "1" ] && [ "$DISABLE_OPENAPI" = "1" ]; then
    echo "Warning: --disable-openapi has no effect without --scoped."
fi

if [ "$SCOPED_MODE" = "1" ]; then
    MINT_SESSION_LABEL="scoped-session"
else
    MINT_SESSION_LABEL="$MINT_WORKDIR"
fi
acquire_mint_session_lock "$MINT_SESSION_PORT"
trap cleanup_lock_file EXIT INT TERM

if [ "$SCOPED_MODE" = "1" ]; then
    run_scoped_workspace_session "$@"
else
    cd "$MINT_WORKDIR"
    mint dev "$@"
fi
