#!/bin/bash
# Check all imports from /snippets/ in v2/pages MDX files
# Usage: ./check-imports.sh [--report]

cd "$(dirname "$0")/../.."

echo "# Import Validation Report"
echo "Generated: $(date)"
echo ""
echo "## Summary"
echo ""

# Find all MDX files in v2/pages
files=$(find v2/pages -name "*.mdx" -type f 2>/dev/null | sort)
total_files=$(echo "$files" | wc -l | tr -d ' ')
echo "Total MDX files in v2/pages: $total_files"
echo ""

# Track broken imports
broken_count=0
checked_count=0

echo "## Broken Imports"
echo ""
echo "| File | Broken Import Path |"
echo "|------|-------------------|"

while IFS= read -r file; do
  # Extract all imports from '/snippets/
  imports=$(grep -o "from '/snippets/[^']*'" "$file" 2>/dev/null | sed "s/from '//g" | sed "s/'//g")
  
  if [ -n "$imports" ]; then
    while IFS= read -r import_path; do
      # Check if file exists
      local_path=".${import_path}"
      if [ ! -f "$local_path" ]; then
        echo "| $file | $import_path |"
        broken_count=$((broken_count + 1))
      fi
    done <<< "$imports"
  fi
done <<< "$files"

echo ""
echo "**Total broken imports: $broken_count**"
echo ""
echo "---"
echo ""

if [ "$1" == "--report" ]; then
  echo "## All Files and Their Imports"
  echo ""

  while IFS= read -r file; do
    imports=$(grep -o "from '/snippets/[^']*'" "$file" 2>/dev/null | sed "s/from '//g" | sed "s/'//g")
    
    if [ -n "$imports" ]; then
      checked_count=$((checked_count + 1))
      echo "### $file"
      echo ""
      while IFS= read -r import_path; do
        local_path=".${import_path}"
        if [ -f "$local_path" ]; then
          echo "- ✅ \`$import_path\`"
        else
          echo "- ❌ \`$import_path\` (MISSING)"
        fi
      done <<< "$imports"
      echo ""
    fi
  done <<< "$files"

  echo "---"
  echo ""
  echo "**Files with imports checked: $checked_count**"
fi

exit $broken_count

