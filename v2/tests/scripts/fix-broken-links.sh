#!/bin/bash
# Fix Broken Links in v2/pages MDX files
#
# This script reads the moved-files-report.md to get OLD -> NEW path mappings,
# then searches ALL files in v2/pages for ANY reference to OLD paths and replaces
# them with NEW paths.
#
# Usage:
#   ./fix-broken-links.sh --dry-run    # Preview changes without modifying files
#   ./fix-broken-links.sh --fix        # Apply fixes to files

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
REPORT_DIR="$ROOT_DIR/v2/tests/reports"
MOVED_FILES="$REPORT_DIR/moved-files-report.md"
PAGES_DIR="$ROOT_DIR/v2/pages"

MODE="${1:---dry-run}"

echo "========================================"
echo "  Broken Link Fixer for v2/pages"
echo "========================================"
echo "Mode: $MODE"
echo ""

# Output report
FIXES_REPORT="$REPORT_DIR/applied-fixes.md"
echo "# Applied Fixes Report" > "$FIXES_REPORT"
echo "" >> "$FIXES_REPORT"
echo "| Source File | Old Reference | New Reference |" >> "$FIXES_REPORT"
echo "|-------------|---------------|---------------|" >> "$FIXES_REPORT"

fix_count=0

# Read each OLD -> NEW mapping from moved-files-report.md
echo "Reading path mappings from moved-files-report.md..."
grep "^| v2/pages" "$MOVED_FILES" 2>/dev/null | while IFS='|' read -r _ old_path new_path _; do
    old_path=$(echo "$old_path" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    new_path=$(echo "$new_path" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    [[ -z "$old_path" || -z "$new_path" ]] && continue

    # Extract various search patterns from the old path
    # e.g., "v2/pages/01_about/livepeer-protocol/livepeer-actors/delegators.mdx"
    # Could be referenced as:
    #   - livepeer-protocol/livepeer-actors/delegators.mdx
    #   - livepeer-actors/delegators.mdx
    #   - ./delegators.mdx
    #   - delegators.mdx
    #   - delegators (without extension)

    old_filename=$(basename "$old_path")
    new_filename=$(basename "$new_path")
    old_filename_noext="${old_filename%.mdx}"

    # Get relative paths (strip v2/pages/)
    old_rel="${old_path#v2/pages/}"
    new_rel="${new_path#v2/pages/}"

    # Also get parent directory patterns
    old_parent=$(dirname "$old_rel")
    new_parent=$(dirname "$new_rel")

    # Search for files containing the old path patterns
    # Try multiple patterns from most specific to least specific
    for pattern in "$old_rel" "$old_parent/$old_filename" "$old_filename" "$old_filename_noext"; do
        [[ -z "$pattern" || "$pattern" == "." ]] && continue

        # Find all files containing this pattern
        files_with_pattern=$(grep -rl "$pattern" "$PAGES_DIR" --include="*.mdx" 2>/dev/null)

        for src_file in $files_with_pattern; do
            [[ -z "$src_file" ]] && continue

            # Calculate relative path from source file to new location
            src_dir=$(dirname "$src_file")
            new_abs="$ROOT_DIR/$new_path"

            # Get relative path from source to new file
            new_relative=$(python3 -c "import os; print(os.path.relpath('$new_abs', '$src_dir'))" 2>/dev/null)

            if [[ -n "$new_relative" && -f "$new_abs" ]]; then
                # Escape special characters for sed
                escaped_old=$(printf '%s\n' "$pattern" | sed 's/[[\.*^$()+?{|/]/\\&/g')
                escaped_new=$(printf '%s\n' "$new_relative" | sed 's/[[\.*^$()+?{|/]/\\&/g')

                if grep -q "$escaped_old" "$src_file" 2>/dev/null; then
                    rel_src="${src_file#$ROOT_DIR/}"
                    echo "| \`$rel_src\` | \`$pattern\` | \`$new_relative\` |" >> "$FIXES_REPORT"

                    if [[ "$MODE" == "--fix" ]]; then
                        sed -i '' "s|$escaped_old|$escaped_new|g" "$src_file"
                        echo "✓ Fixed: $rel_src"
                    else
                        echo "Would fix: $rel_src: $pattern → $new_relative"
                    fi
                    fix_count=$((fix_count + 1))
                fi
            fi
        done
    done
done

echo ""
echo "========================================"
echo "Total fixes: Check $FIXES_REPORT"
if [[ "$MODE" == "--dry-run" ]]; then
    echo "Run with --fix to apply changes"
fi
echo "========================================"
