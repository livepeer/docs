#!/bin/bash
# Comprehensive MDX Link Validator for v2/pages
# Checks ALL link types: href, relativePath, markdown links, src attributes
# Output: v2/tests/reports/link-validation-report.md
#
# Usage: ./check-all-links.sh
# Note: Does NOT modify snippets folder

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
PAGES_DIR="$ROOT_DIR/v2/pages"
REPORT_DIR="$ROOT_DIR/v2/tests/reports"
REPORT_FILE="$REPORT_DIR/link-validation-report.md"

cd "$ROOT_DIR"

# Create report header
cat > "$REPORT_FILE" << 'EOF'
# Comprehensive Link Validation Report
Generated: DATE_PLACEHOLDER

## Summary
This report checks ALL internal links in v2/pages MDX files including:
- `href="..."` attributes in components (Card, Link, etc.)
- `relativePath="..."` props in custom components  
- `src="..."` attributes for images/assets
- Markdown links `[text](path)`

**Note: External URLs (https://) and snippet paths are excluded from validation.**

---

EOF

# Replace date
sed -i.bak "s/DATE_PLACEHOLDER/$(date)/" "$REPORT_FILE" && rm -f "$REPORT_FILE.bak"

echo "Scanning v2/pages for broken links..."
echo ""

# Count files
total_files=$(find "$PAGES_DIR" -name "*.mdx" -type f 2>/dev/null | wc -l | tr -d ' ')
echo "Total MDX files to scan: $total_files" | tee -a "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Initialize counters
broken_count=0
checked_count=0

# Create temp file for results
TEMP_RESULTS=$(mktemp)

# Function to check if a path exists
check_path() {
    local base_dir="$1"
    local link_path="$2"
    local resolved=""
    
    # Skip external URLs
    [[ "$link_path" =~ ^https?:// ]] && return 0
    [[ "$link_path" =~ ^mailto: ]] && return 0
    [[ "$link_path" =~ ^# ]] && return 0
    
    # Skip snippet imports (these are handled by Mintlify)
    [[ "$link_path" =~ ^/snippets ]] && return 0
    [[ "$link_path" =~ ^snippets ]] && return 0
    
    # Remove anchor from path
    link_path="${link_path%%#*}"
    # Remove query string
    link_path="${link_path%%\?*}"
    # Remove quotes
    link_path="${link_path//\"/}"
    link_path="${link_path//\'/}"
    
    [[ -z "$link_path" ]] && return 0
    
    # Resolve path
    if [[ "$link_path" =~ ^/ ]]; then
        resolved="$ROOT_DIR$link_path"
    else
        resolved="$base_dir/$link_path"
    fi
    
    # Normalize path
    resolved=$(cd "$(dirname "$resolved")" 2>/dev/null && echo "$(pwd)/$(basename "$resolved")" 2>/dev/null) || resolved=""
    
    # Check variations
    [[ -d "$resolved" ]] && return 0
    [[ -f "$resolved" ]] && return 0
    [[ -f "${resolved}.mdx" ]] && return 0
    [[ -f "${resolved}/index.mdx" ]] && return 0
    [[ -f "${resolved}.md" ]] && return 0
    
    return 1
}

# Process each MDX file
find "$PAGES_DIR" -name "*.mdx" -type f 2>/dev/null | sort | while read -r file; do
    dir=$(dirname "$file")
    rel_file="${file#$ROOT_DIR/}"
    
    # Extract href="..." (not starting with http/https/mailto/#)
    grep -oE 'href="[^"]*"' "$file" 2>/dev/null | sed 's/href="//;s/"$//' | while read -r link; do
        if ! check_path "$dir" "$link"; then
            echo "$rel_file|href|$link" >> "$TEMP_RESULTS"
        fi
    done
    
    # Extract relativePath="..."
    grep -oE 'relativePath="[^"]*"' "$file" 2>/dev/null | sed 's/relativePath="//;s/"$//' | while read -r link; do
        if ! check_path "$dir" "$link"; then
            echo "$rel_file|relativePath|$link" >> "$TEMP_RESULTS"
        fi
    done
    
    # Extract src="..." for local assets (not http/https)
    grep -oE 'src="[^"]*"' "$file" 2>/dev/null | sed 's/src="//;s/"$//' | grep -v "^https\?://" | while read -r link; do
        if ! check_path "$dir" "$link"; then
            echo "$rel_file|src|$link" >> "$TEMP_RESULTS"
        fi
    done
    
    # Extract markdown links [text](path) - skip images ![...]
    grep -oE '\[[^]!][^]]*\]\([^)]+\)' "$file" 2>/dev/null | while read -r match; do
        # Extract just the path from [text](path)
        link=$(echo "$match" | sed -E 's/.*\]\(([^)]+)\)/\1/')
        if ! check_path "$dir" "$link"; then
            echo "$rel_file|markdown|$link" >> "$TEMP_RESULTS"
        fi
    done

done

echo "" >> "$REPORT_FILE"
echo "## Broken Links Found" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Count and format results
if [[ -s "$TEMP_RESULTS" ]]; then
    broken_count=$(wc -l < "$TEMP_RESULTS" | tr -d ' ')

    echo "| File | Link Type | Broken Path |" >> "$REPORT_FILE"
    echo "|------|-----------|-------------|" >> "$REPORT_FILE"

    # Group by file for better readability
    sort "$TEMP_RESULTS" | while IFS='|' read -r file type link; do
        echo "| \`$file\` | $type | \`$link\` |" >> "$REPORT_FILE"
    done
else
    echo "✅ No broken links found!" >> "$REPORT_FILE"
    broken_count=0
fi

echo "" >> "$REPORT_FILE"
echo "---" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "## Statistics" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "- **Total files scanned:** $total_files" >> "$REPORT_FILE"
echo "- **Total broken links:** $broken_count" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Group by type
echo "### Broken Links by Type" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
if [[ -s "$TEMP_RESULTS" ]]; then
    echo "| Type | Count |" >> "$REPORT_FILE"
    echo "|------|-------|" >> "$REPORT_FILE"
    awk -F'|' '{print $2}' "$TEMP_RESULTS" | sort | uniq -c | while read -r count type; do
        echo "| $type | $count |" >> "$REPORT_FILE"
    done
fi

echo "" >> "$REPORT_FILE"
echo "### Broken Links by Directory" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
if [[ -s "$TEMP_RESULTS" ]]; then
    echo "| Directory | Count |" >> "$REPORT_FILE"
    echo "|-----------|-------|" >> "$REPORT_FILE"
    awk -F'|' '{print $1}' "$TEMP_RESULTS" | xargs -I{} dirname {} | sort | uniq -c | sort -rn | head -20 | while read -r count dir; do
        echo "| \`$dir\` | $count |" >> "$REPORT_FILE"
    done
fi

# Cleanup
rm -f "$TEMP_RESULTS"

echo ""
echo "=========================================="
echo "Report generated: $REPORT_FILE"
echo "Total broken links found: $broken_count"
echo "=========================================="

