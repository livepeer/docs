#!/bin/bash
# Apply broken link fixes to v2/pages MDX files
# Reads from fix-proposals-verified.md and fix-proposals-found-elsewhere.md

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
REPORT_DIR="$ROOT_DIR/v2/tests/reports"

echo "========================================"
echo "  Applying Link Fixes"
echo "========================================"
echo ""

fix_count=0

# Function to escape special chars for sed
escape_sed() {
    printf '%s\n' "$1" | sed 's/[[\.*^$()+?{|/]/\\&/g'
}

# Function to convert absolute path to relative path
make_relative() {
    local source_file="$1"
    local target_path="$2"
    
    # If target starts with /, it's an absolute path from repo root
    if [[ "$target_path" == /* ]]; then
        # Remove leading / and use from repo root
        target_path="${target_path#/}"
    fi
    
    # Get directories
    local source_dir=$(dirname "$source_file")
    local target_dir=$(dirname "$target_path")
    local target_name=$(basename "$target_path")
    
    # Use Python for reliable relative path calculation
    python3 -c "import os; print(os.path.relpath('$ROOT_DIR/$target_path', '$ROOT_DIR/$source_dir'))"
}

# Apply verified fixes (simple replacements)
echo "Applying verified fixes..."
grep "^| \`v2/pages" "$REPORT_DIR/fix-proposals-verified.md" 2>/dev/null | while IFS='|' read -r _ file type broken fix _; do
    file=$(echo "$file" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    broken=$(echo "$broken" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    fix=$(echo "$fix" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    
    [[ -z "$file" || -z "$broken" || -z "$fix" ]] && continue
    [[ "$broken" == "$fix" ]] && continue
    
    if [[ -f "$ROOT_DIR/$file" ]]; then
        escaped_broken=$(escape_sed "$broken")
        escaped_fix=$(escape_sed "$fix")
        
        if grep -q "$escaped_broken" "$ROOT_DIR/$file" 2>/dev/null; then
            sed -i '' "s|$escaped_broken|$escaped_fix|g" "$ROOT_DIR/$file"
            echo "✓ $file: $broken → $fix"
            fix_count=$((fix_count + 1))
        fi
    fi
done

echo ""
echo "Applying found-elsewhere fixes..."
grep "^| \`v2/pages" "$REPORT_DIR/fix-proposals-found-elsewhere.md" 2>/dev/null | while IFS='|' read -r _ file type broken found _; do
    file=$(echo "$file" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    broken=$(echo "$broken" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    found=$(echo "$found" | tr -d '`' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    
    [[ -z "$file" || -z "$broken" || -z "$found" ]] && continue
    
    # Convert found path to relative from source file
    fix=$(make_relative "$file" "$found")
    
    [[ -z "$fix" ]] && continue
    [[ "$broken" == "$fix" ]] && continue
    
    if [[ -f "$ROOT_DIR/$file" ]]; then
        escaped_broken=$(escape_sed "$broken")
        escaped_fix=$(escape_sed "$fix")
        
        if grep -q "$escaped_broken" "$ROOT_DIR/$file" 2>/dev/null; then
            sed -i '' "s|$escaped_broken|$escaped_fix|g" "$ROOT_DIR/$file"
            echo "✓ $file: $broken → $fix"
            fix_count=$((fix_count + 1))
        fi
    fi
done

echo ""
echo "========================================"
echo "Fixes applied!"
echo "========================================"

