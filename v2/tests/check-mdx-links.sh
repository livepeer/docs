#!/bin/bash
# Check all internal links in MDX files in v2/pages
# Checks: relativePath props, markdown links
# Usage: ./check-mdx-links.sh

cd "$(dirname "$0")/../.."

echo "# MDX Internal Link Validation Report"
echo "Generated: $(date)"
echo ""

# Find all MDX files
total_files=$(find v2/pages -name "*.mdx" -type f 2>/dev/null | wc -l | tr -d ' ')
echo "Total MDX files scanned: $total_files"
echo ""

broken_count=0
total_count=0

echo "## Broken Links Found"
echo ""
echo "| File | Type | Link Path |"
echo "|------|------|-----------|"

find v2/pages -name "*.mdx" -type f 2>/dev/null | sort | while read -r file; do
  dir=$(dirname "$file")

  # Extract relativePath="..." values
  grep -oE 'relativePath="[^"]*"' "$file" 2>/dev/null | while read -r match; do
    link=$(echo "$match" | sed 's/relativePath="//' | sed 's/"$//')
    if [[ -n "$link" && ! "$link" =~ ^https?:// ]]; then
      resolved="$dir/$link"
      total_count=$((total_count + 1))
      if [[ ! -d "$resolved" && ! -f "$resolved" && ! -f "${resolved}.mdx" && ! -f "${resolved}/index.mdx" ]]; then
        echo "| $file | relativePath | \`$link\` |"
        broken_count=$((broken_count + 1))
      fi
    fi
  done

  # Extract markdown links [text](path) - skip images ![...]
  grep -oE '\[[^]!][^]]*\]\([^)]+\)' "$file" 2>/dev/null | while read -r match; do
    link=$(echo "$match" | sed 's/.*](//' | sed 's/)$//')
    if [[ -n "$link" && ! "$link" =~ ^https?:// && ! "$link" =~ ^mailto: && ! "$link" =~ ^# ]]; then
      link_path=$(echo "$link" | sed 's/#.*//')
      if [[ -n "$link_path" ]]; then
        total_count=$((total_count + 1))
        if [[ "$link_path" =~ ^/ ]]; then
          resolved=".$link_path"
        else
          resolved="$dir/$link_path"
        fi
        if [[ ! -d "$resolved" && ! -f "$resolved" && ! -f "${resolved}.mdx" && ! -f "${resolved}/index.mdx" ]]; then
          echo "| $file | markdown | \`$link\` |"
          broken_count=$((broken_count + 1))
        fi
      fi
    fi
  done
done

echo ""
echo "---"
echo "Scan complete."

