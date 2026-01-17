#!/usr/bin/env python3
import os
import sys

OLD_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"'
NEW_IMAGE = 'og:image: "/snippets/assets/domain/SHARED/LivepeerDocsHero.svg"'
EXCLUDE_FILES = ['mission-control.mdx']

changed = 0
skipped = 0

for root, dirs, files in os.walk('v2/pages'):
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

