#!/usr/bin/env python3
# @script            replace-og-image
# @category          remediator
# @purpose           feature:seo
# @scope             tools/scripts
# @owner             docs
# @needs             E-R19, F-R7
# @purpose-statement OG image replacer — replaces og:image path in a single page frontmatter
# @pipeline          manual — developer tool
# @usage             python3 tools/scripts/dev/replace-og-image.py [flags]
import os
import sys

OLD_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"'
NEW_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsHero.svg"'
EXCLUDE_FILES = ['mission-control.mdx']

changed = 0
skipped = 0

roots = [
    'v2/pages',
    'v2/home',
    'v2/solutions',
    'v2/about',
    'v2/community',
    'v2/developers',
    'v2/gateways',
    'v2/orchestrators',
    'v2/lpt',
    'v2/resources',
    'v2/internal',
    'v2/deprecated',
    'v2/experimental',
    'v2/notes',
]

for doc_root in roots:
    if not os.path.isdir(doc_root):
        continue
    for root, dirs, files in os.walk(doc_root):
        for file in files:
            if file.endswith('.mdx'):
                filepath = os.path.join(root, file)

                # Skip excluded files
                if file in EXCLUDE_FILES:
                    print(f"⊘ {filepath} - Excluded")
                    skipped += 1
                    continue

                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()

                    if OLD_IMAGE in content:
                        new_content = content.replace(OLD_IMAGE, NEW_IMAGE)

                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)

                        print(f"✓ {filepath}")
                        changed += 1
                    else:
                        skipped += 1

                except Exception as e:
                    print(f"✗ {filepath}: {e}")

print(f"\n========== SUMMARY ==========")
print(f"Changed: {changed}")
print(f"Skipped: {skipped}")
print(f"=============================")
