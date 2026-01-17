# Safe SEO Generator Script

## Overview

This script automatically generates and updates SEO metadata for MDX files in the documentation.

**IMPORTANT:** This script ONLY modifies two fields:
1. `keywords` - Generates keywords based on file path and name
2. `og:image` - Sets the correct social preview image based on directory

**ALL OTHER FRONTMATTER IS PRESERVED**, including:
- `title`
- `description`
- `sidebarTitle`
- `tag`
- Any other custom fields

## Files

- `seo-generator-safe.js` - Main script
- `test-seo-generator.js` - Test suite to verify safety
- `SEO-GENERATOR-README.md` - This documentation

## Safety Features

1. **DRY RUN by default** - Script runs in dry-run mode unless explicitly disabled
2. **Preserves all frontmatter** - Only modifies keywords and og:image
3. **Preserves all content** - Body content is never modified
4. **Test suite included** - Verify safety before running on all files
5. **Verbose output** - See exactly what will change

## Usage

### Test the script first

Always run the test suite before using the script:

```bash
node test-seo-generator.js
```

This will verify that the script correctly preserves all frontmatter and content.

### Run on specific files (dry run)

```bash
node seo-generator-safe.js v2/pages/00_home/mission-control.mdx
```

This will show what changes would be made WITHOUT actually modifying files.

### Run on specific files (actually modify)

Edit `seo-generator-safe.js` and change:
```javascript
const DRY_RUN = true;
```
to:
```javascript
const DRY_RUN = false;
```

Then run:
```bash
node seo-generator-safe.js v2/pages/00_home/mission-control.mdx
```

### Run on all MDX files

**WARNING: Only do this after testing!**

```bash
find v2/pages -name "*.mdx" -type f | xargs node seo-generator-safe.js
```

## How It Works

### Keyword Generation

Keywords are generated from:
1. **Existing keywords** - Preserved if they already exist
2. **File path** - Directory names (e.g., "gateways", "developers")
3. **File name** - Cleaned filename (e.g., "mission-control.mdx" → "mission control")

Limited to 10 keywords maximum.

### og:image Assignment

Images are assigned based on directory structure:
- `00_home` → `/snippets/assets/domain/00_HOME/social-preview-home.jpg`
- `01_about` → `/snippets/assets/domain/01_ABOUT/social-preview-about.jpg`
- `02_community` → `/snippets/assets/domain/02_COMMUNITY/social-preview-community.jpg`
- `03_developers` → `/snippets/assets/domain/03_DEVELOPERS/social-preview-developers.jpg`
- `04_gateways` → `/snippets/assets/domain/04_GATEWAYS/social-preview-gateways.jpg`
- `05_orchestrators` → `/snippets/assets/domain/05_ORCHESTRATORS/social-preview-orchestrators.jpg`
- `06_delegators` → `/snippets/assets/domain/06_DELEGATORS/social-preview-delegators.jpg`
- `07_resources` → `/snippets/assets/domain/07_RESOURCES/social-preview-resources.jpg`
- Default → `/snippets/assets/domain/social-preview-default.jpg`

## Example Output

```
Processing 3 file(s)...
DRY RUN: YES (no files will be modified)

✓ v2/pages/00_home/mission-control.mdx
  Keywords: ["home","index","landing","livepeer","mission control"]
  og:image: /snippets/assets/domain/00_HOME/social-preview-home.jpg

========== SUMMARY ==========
Processed: 3
Changed: 3
Errors: 0
DRY RUN: YES
=============================
```

## Verification

After running the script, verify changes with:

```bash
git diff v2/pages/00_home/mission-control.mdx
```

You should ONLY see changes to `keywords` and `og:image` fields.

## Troubleshooting

### Script shows "No frontmatter found"
- File must have frontmatter in format:
  ```
  ---
  title: 'Example'
  ---
  ```

### Fields are being modified
- DO NOT USE THE SCRIPT
- Run `node test-seo-generator.js` to identify the issue
- Report the problem

### Want to customize keyword generation
- Edit the `generateKeywords()` function in `seo-generator-safe.js`
- Test with `node test-seo-generator.js` before running on all files

## Safety Checklist

Before running on all files:

- [ ] Run `node test-seo-generator.js` - all tests pass
- [ ] Test on 3-5 sample files in dry-run mode
- [ ] Verify output looks correct
- [ ] Set `DRY_RUN = false`
- [ ] Test on 1-2 files with actual writes
- [ ] Check `git diff` to verify only keywords and og:image changed
- [ ] Commit those test files
- [ ] Run on all files
- [ ] Verify with `git diff --stat` that changes look reasonable
- [ ] Review a sample of changed files
- [ ] Commit changes

## Recovery

If something goes wrong:

```bash
# Discard all changes
git checkout -- v2/pages/

# Or restore from a specific commit
git checkout <commit-hash> -- v2/pages/
```

