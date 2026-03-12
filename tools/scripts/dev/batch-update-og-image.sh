#!/bin/bash
# @script            batch-update-og-image
# @category          remediator
# @purpose           feature:seo
# @scope             tools/scripts
# @owner             docs
# @needs             E-R19, F-R7
# @purpose-statement Batch OG image updater — updates og:image meta tags across multiple pages
# @pipeline          manual — developer tool
# @usage             bash tools/scripts/dev/batch-update-og-image.sh [flags]
OLD_IMAGE='og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"'
NEW_IMAGE='og:image: "/snippets/assets/domain/SHARED/LivepeerDocsHero.svg"'

echo "Finding files with old og:image..."
roots=(v2/pages v2/home v2/solutions v2/about v2/community v2/developers v2/gateways v2/orchestrators v2/lpt v2/resources v2/internal v2/deprecated v2/experimental v2/notes)
existing_roots=()
for root in "${roots[@]}"; do
  if [ -d "$root" ]; then
    existing_roots+=("$root")
  fi
done

files=$(grep -rl "$OLD_IMAGE" "${existing_roots[@]}" --include="*.mdx" 2>/dev/null | grep -v "mission-control.mdx" || true)

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
