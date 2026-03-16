#!/bin/bash
# Archived by generate-component-docs.js
# Replaced by node tools/scripts/generate-component-docs.js --fix --template-only
# Legacy snippet-tree generation retained for historical reference.
# @script            update-component-library
# @category          automation
# @purpose           infrastructure:data-feeds
# @scope             tools/scripts
# @owner             docs
# @needs             F-R1
# @purpose-statement Component library updater — syncs component library documentation from source
# @pipeline          manual — interactive developer tool, not suited for automated pipelines
# @usage             bash tools/scripts/snippets/update-component-library.sh [flags]
# Auto-updates snippets/snippetsWiki/componentLibrary/index.mdx
# Run this script after changes to snippets/components/

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/paths.config.json"

# Try to detect repo root via git, fallback to config file
if git rev-parse --show-toplevel &>/dev/null; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
elif [ -f "$CONFIG_FILE" ]; then
  echo "Warning: Not in a git repo, using paths.config.json"
  REPO_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
else
  echo "Error: Cannot determine repo root. Run from git repo or ensure paths.config.json exists."
  exit 1
fi

# Read paths from config or use defaults
if [ -f "$CONFIG_FILE" ] && command -v node &>/dev/null; then
  COMPONENTS_DIR="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.snippetsComponents")"
  OUTPUT_FILE="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.snippetsWikiComponentLibrary")"
else
  COMPONENTS_DIR="$REPO_ROOT/snippets/components"
  OUTPUT_FILE="$REPO_ROOT/snippets/snippetsWiki/componentLibrary/index.mdx"
fi

# Generate tree structure from the live component directory instead of hardcoded folders.
get_top_level_dirs() {
    find "$COMPONENTS_DIR" -mindepth 1 -maxdepth 1 -type d \
        ! -name "_archive" \
        ! -name "examples" \
        -print | sort
}

get_child_dirs() {
    local dir="$1"
    find "$dir" -mindepth 1 -maxdepth 1 -type d \
        ! -name "_archive" \
        ! -name "examples" \
        -print | sort
}

get_component_files() {
    local dir="$1"
    find "$dir" -mindepth 1 -maxdepth 1 -type f \( \
        -name "*.jsx" -o -name "*.tsx" -o -name "*.js" \
    \) -print | sort
}

render_folder() {
    local dir="$1"
    local indent="$2"
    local name
    name="$(basename "$dir")"

    echo "${indent}<Tree.Folder name=\"$name\">"

    while IFS= read -r file; do
        [ -n "$file" ] || continue
        echo "${indent}    <Tree.File name=\"$(basename "$file")\" />"
    done < <(get_component_files "$dir")

    while IFS= read -r child_dir; do
        [ -n "$child_dir" ] || continue
        render_folder "$child_dir" "${indent}    "
    done < <(get_child_dirs "$dir")

    echo "${indent}</Tree.Folder>"
}

# Build the new content
build_content() {
    cat << 'HEADER'
---
title: Component Library
description: Library of custom components used in Livepeer documentation
sidebarTitle: Component Library
---

{/* AUTO-GENERATED: Do not edit below this line. Run tools/scripts/snippets/update-component-library.sh to update. */}

## Components Structure

Below is the current list of components found under `snippets/components/`.

<Tree>
    <Tree.Folder name="components" defaultOpen>
HEADER

    while IFS= read -r dir; do
        [ -n "$dir" ] || continue
        render_folder "$dir" "        "
    done < <(get_top_level_dirs)

    cat << 'FOOTER'
    </Tree.Folder>
</Tree>

{/* END AUTO-GENERATED */}

---

## Component Examples

{/* Add component examples below */}

FOOTER
}

# Run and save
build_content > "$OUTPUT_FILE"
echo "Updated $OUTPUT_FILE"
