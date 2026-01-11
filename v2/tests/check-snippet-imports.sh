#!/bin/bash
# Check imports within snippets/ folder for Mintlify compliance
# Mintlify requires all imports to start with "/snippets/" (no relative paths, no npm packages like react)
# Usage: ./check-snippet-imports.sh

cd "$(dirname "$0")/../.."

echo "# Snippet Import Validation Report"
echo "Generated: $(date)"
echo ""

# Find all JSX files in snippets/
files=$(find snippets -name "*.jsx" -type f 2>/dev/null | sort)
total_files=$(echo "$files" | wc -l | tr -d ' ')
echo "Total JSX files in snippets/: $total_files"
echo ""

echo "## Invalid Imports (not starting with /snippets/)"
echo ""
echo "| File | Invalid Import |"
echo "|------|----------------|"

invalid_count=0

while IFS= read -r file; do
  # Extract all imports
  imports=$(grep -E "^import .* from ['\"]" "$file" 2>/dev/null)
  
  if [ -n "$imports" ]; then
    while IFS= read -r line; do
      # Extract the import path
      import_path=$(echo "$line" | grep -o "from ['\"][^'\"]*['\"]" | sed "s/from ['\"]//g" | sed "s/['\"]//g")
      
      # Check if it starts with /snippets/
      if [[ ! "$import_path" =~ ^/snippets/ ]]; then
        echo "| $file | \`$import_path\` |"
        invalid_count=$((invalid_count + 1))
      fi
    done <<< "$imports"
  fi
done <<< "$files"

echo ""
echo "**Total invalid imports: $invalid_count**"
echo ""

if [ $invalid_count -gt 0 ]; then
  echo "## Required Fixes"
  echo ""
  echo "All imports in snippets/*.jsx must use absolute paths starting with \`/snippets/\`"
  echo ""
  echo "Example fixes:"
  echo "- \`import { X } from './buttons'\` → \`import { X } from '/snippets/components/primitives/buttons.jsx'\`"
  echo "- \`import { X } from '../folder/file.jsx'\` → \`import { X } from '/snippets/folder/file.jsx'\`"
  echo ""
  echo "**Note:** React hooks (useState, useEffect) should NOT be imported - they are globally available in Mintlify MDX context."
fi

exit $invalid_count

