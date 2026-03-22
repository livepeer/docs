#!/usr/bin/env bash
# install.sh — deploy all editor extensions to detected VS Code-compatible editors
# Usage: bash tools/editor-extensions/install.sh [--dry-run]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
DRY_RUN=false

for arg in "$@"; do
  [[ "$arg" == "--dry-run" ]] && DRY_RUN=true
done

# ── Editor detection ──────────────────────────────────────────────────────────

detect_editors() {
  local editors=()
  [[ -d "$HOME/.vscode/extensions" ]]  && editors+=("vscode")
  [[ -d "$HOME/.cursor/extensions" ]]  && editors+=("cursor")
  [[ -d "$HOME/.windsurf/extensions" ]] && editors+=("windsurf")
  echo "${editors[@]:-}"
}

cli_for_editor() {
  case "$1" in
    vscode)   command -v code 2>/dev/null || echo "" ;;
    cursor)   command -v cursor 2>/dev/null || echo "" ;;
    windsurf) command -v windsurf 2>/dev/null || echo "" ;;
  esac
}

extensions_dir_for_editor() {
  case "$1" in
    vscode)   echo "$HOME/.vscode/extensions" ;;
    cursor)   echo "$HOME/.cursor/extensions" ;;
    windsurf) echo "$HOME/.windsurf/extensions" ;;
  esac
}

# ── Build helpers ─────────────────────────────────────────────────────────────

build_vsix() {
  local ext_dir="$1"
  local name
  name="$(basename "$ext_dir")"
  echo "  [build] $name"
  if [[ "$DRY_RUN" == "false" ]]; then
    (cd "$ext_dir" && npx --yes @vscode/vsce package --no-dependencies --out "$(ls *.vsix 2>/dev/null | head -1 || echo "${name}-0.0.1.vsix")" 2>/dev/null)
  fi
}

find_vsix() {
  local ext_dir="$1"
  ls "$ext_dir"/*.vsix 2>/dev/null | sort -V | tail -1 || true
}

# ── Install helpers ───────────────────────────────────────────────────────────

install_via_cli() {
  local cli="$1" vsix="$2" editor="$3"
  echo "  [install] $(basename "$vsix") → $editor (via CLI)"
  [[ "$DRY_RUN" == "false" ]] && "$cli" --install-extension "$vsix" --force 2>/dev/null
}

install_via_copy() {
  local vsix="$1" ext_name="$2" ext_dir="$3"
  local target="$ext_dir/$ext_name"
  echo "  [install] $(basename "$vsix") → $ext_dir (direct copy)"
  if [[ "$DRY_RUN" == "false" ]]; then
    rm -rf "$target"
    mkdir -p "$target"
    cd "$target"
    unzip -q "$vsix" "extension/*"
    mv extension/* .
    rm -rf extension __MACOSX 2>/dev/null || true
    cd - >/dev/null
  fi
}

# ── Main ──────────────────────────────────────────────────────────────────────

main() {
  echo ""
  echo "Livepeer Editor Extensions — Install"
  echo "======================================"
  [[ "$DRY_RUN" == "true" ]] && echo "(dry-run mode — no changes will be made)"
  echo ""

  # Detect editors
  read -ra EDITORS <<< "$(detect_editors)"
  if [[ ${#EDITORS[@]} -eq 0 ]]; then
    echo "No supported editors detected (~/.vscode, ~/.cursor, ~/.windsurf)"
    exit 0
  fi
  echo "Detected editors: ${EDITORS[*]}"
  echo ""

  # Find extension directories (each subdir with a package.json)
  local ext_dirs=()
  for d in "$SCRIPT_DIR"/*/; do
    [[ -f "$d/package.json" ]] && ext_dirs+=("$d")
  done

  if [[ ${#ext_dirs[@]} -eq 0 ]]; then
    echo "No extensions found in $SCRIPT_DIR"
    exit 1
  fi

  # Build all extensions
  echo "Building extensions..."
  for ext_dir in "${ext_dirs[@]}"; do
    vsix="$(find_vsix "$ext_dir")"
    if [[ -z "$vsix" ]]; then
      build_vsix "$ext_dir"
    else
      echo "  [skip build] $(basename "$ext_dir") — $(basename "$vsix") already built"
    fi
  done
  echo ""

  # Install to each detected editor
  for editor in "${EDITORS[@]}"; do
    echo "Installing to $editor..."
    cli="$(cli_for_editor "$editor")"
    ext_dir_target="$(extensions_dir_for_editor "$editor")"

    for ext_dir in "${ext_dirs[@]}"; do
      vsix="$(find_vsix "$ext_dir")"
      [[ -z "$vsix" ]] && echo "  [skip] $(basename "$ext_dir") — no .vsix found" && continue

      # Get publisher.name from package.json for copy-based install
      ext_name="$(node -e "const p=require('$ext_dir/package.json'); process.stdout.write(p.publisher+'.'+p.name+'-'+p.version)" 2>/dev/null || basename "$ext_dir")"

      if [[ -n "$cli" ]]; then
        install_via_cli "$cli" "$vsix" "$editor"
      else
        install_via_copy "$vsix" "$ext_name" "$ext_dir_target"
      fi
    done
    echo ""
  done

  echo "Done."
  [[ "$DRY_RUN" == "true" ]] && echo "(dry-run — no changes were made)"
}

main "$@"
