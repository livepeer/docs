# Add Callouts Script

## Overview

The `add-callouts.js` script automatically adds appropriate callout components to MDX pages in the v2/pages directory. It intelligently determines whether a page needs a `ComingSoonCallout` (for empty/placeholder pages) or a `PreviewCallout` (for pages with content).

## Purpose

This script helps maintain consistency across documentation by:
- Adding visual indicators to pages that are under construction
- Distinguishing between placeholder pages and pages with actual content
- Automating the process of adding callouts to multiple pages

## Files

- **add-callouts.js** - Main script that processes MDX files
- **test-add-callouts.js** - Test suite for the script logic
- **README-add-callouts.md** - This documentation file

## How It Works

### Content Detection Logic

The script analyzes each MDX file to determine if it has substantial content:

1. **Empty/Placeholder Pages** → Adds `ComingSoonCallout`
   - Pages with only metadata
   - Pages with only a title heading
   - Pages with minimal content

2. **Pages with Content** → Adds `PreviewCallout`
   - Pages with multiple paragraphs
   - Pages with multiple headings
   - Pages with substantial text content

### Callout Components

**ComingSoonCallout:**
```jsx
import {ComingSoonCallout} from '/snippets/components/primitives/previewCallouts.jsx'

<ComingSoonCallout />
```
Displays: "This page is still cooking... Expect big things soon!"

**PreviewCallout:**
```jsx
import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />
```
Displays: "Page is under construction. Feedback Welcome!"

### Safety Features

- **Skip existing callouts**: Won't add a callout if one already exists
- **Preserve metadata**: Maintains frontmatter structure
- **Dry-run mode**: Test changes before applying them
- **Validation**: Checks for proper metadata structure before processing

## Usage

### Basic Usage

```bash
# From the v2/scripts directory
node add-callouts.js
```

### Remove Top-Level Callouts (v2 en nav + content pages)

```bash
# Remove PreviewCallout/ComingSoonCallout from content pages in v2 English navigation
node add-callouts.js --remove
```

### Dry Run (Recommended First)

```bash
# Preview changes without modifying files
node add-callouts.js --dry-run
```

### Dry Run Removal

```bash
# Preview removals without modifying files
node add-callouts.js --remove --dry-run
```

This will show you what changes would be made without actually modifying any files.

### Running Tests

```bash
# Run the test suite
node test-add-callouts.js
```

## Expected Output

### Dry Run Output
```
🚀 Starting callout addition (DRY RUN)...

📄 Found 45 MDX files

🔍 [DRY RUN] Would add ComingSoonCallout to v2/pages/example/empty-page.mdx
🔍 [DRY RUN] Would add PreviewCallout to v2/pages/example/content-page.mdx
⏭️  Skipping v2/pages/example/has-callout.mdx - already has callout

✨ Done!
```

### Actual Run Output
```
🚀 Starting callout addition...

📄 Found 45 MDX files

✅ Added ComingSoonCallout to v2/pages/example/empty-page.mdx
✅ Added PreviewCallout to v2/pages/example/content-page.mdx
⏭️  Skipping v2/pages/example/has-callout.mdx - already has callout

✨ Done!
```

### Removal Output
```
🚀 Starting callout removal...

📄 Found 120 MDX files in v2 English navigation

✅ Removed top-level callout from v2/developers/example-page.mdx
⏭️  Skipping v2/developers/another-page.mdx - no top-level callout
⏭️  Skipping v2/developers/placeholder-page.mdx - no content

✨ Done!
```

## Test Suite

The test suite (`test-add-callouts.js`) validates:

1. ✅ Empty page detection
2. ✅ Page with only title heading detection
3. ✅ Page with content detection
4. ✅ Page with imports and content detection
5. ✅ Existing callout detection (ComingSoonCallout)
6. ✅ Existing callout detection (PreviewCallout)
7. ✅ Removal of top-level callouts on content pages
8. ✅ Import cleanup behavior when callouts are removed
9. ✅ Retaining callouts used later in the page

Run tests before using the script to ensure logic is working correctly.

## Important Notes

⚠️ **Before Running:**
1. Always run with `--dry-run` first to preview changes
2. Run the test suite to verify logic: `node test-add-callouts.js`
3. Consider creating a backup branch before running
4. Review the output carefully

⚠️ **Limitations:**
- Only processes `.mdx` files
- Requires proper frontmatter structure (content between `---` delimiters)
- Won't modify files that already have callouts
- Removal only applies to top-level callouts on pages with content that are listed in docs.json v2 English navigation

## Troubleshooting

**Script skips all files:**
- Check that files have proper frontmatter structure with `---` delimiters
- Verify you're running from the correct directory

**Wrong callout type added:**
- Review the content detection logic in the script
- Check if the page content matches expected patterns
- Run tests to verify logic: `node test-add-callouts.js`

**Files not found:**
- Ensure you're running from `v2/scripts/` directory
- Check that `v2/pages/` directory exists and contains MDX files

## Examples

### Before (Empty Page)
```mdx
---
title: 'New Feature'
---

# New Feature
```

### After (Empty Page)
```mdx
---
title: 'New Feature'
---

import {ComingSoonCallout} from '/snippets/components/primitives/previewCallouts.jsx'

<ComingSoonCallout />

# New Feature
```

### Before (Page with Content)
```mdx
---
title: 'API Guide'
---

# API Guide

This guide covers the API endpoints...
```

### After (Page with Content)
```mdx
---
title: 'API Guide'
---

import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />

# API Guide

This guide covers the API endpoints...
```

## Related Files

- Callout components: `/snippets/components/primitives/previewCallouts.jsx`
- Target directory: `v2/pages/` (and all subdirectories)
