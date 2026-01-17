#!/bin/bash

OLD_IMAGE='og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"'
NEW_IMAGE='og:image: "/snippets/assets/domain/SHARED/LivepeerDocsHero.svg"'

echo "Finding files with old og:image..."
files=$(grep -rl "$OLD_IMAGE" v2/pages --include="*.mdx" | grep -v "mission-control.mdx")

count=0
for file in $files; do
    echo "Updating: $file"
    # Use perl for in-place replacement
    perl -pi -e "s|og:image: \"/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg\"|og:image: \"/snippets/assets/domain/SHARED/LivepeerDocsHero.svg\"|g" "$file"
    ((count++))
done

echo ""
echo "========== SUMMARY =========="
echo "Updated: $count files"
echo "============================="

