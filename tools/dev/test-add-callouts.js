#!/usr/bin/env node
/**
 * @script            test-add-callouts
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Test for add-callouts.js — validates callout insertion logic against fixtures
 * @pipeline          manual — developer tool
 * @usage             node tools/scripts/dev/test-add-callouts.js [flags]
 */

/**
 * Test suite for add-callouts.js script
 * 
 * Tests the logic for detecting content and adding appropriate callouts
 * 
 * Usage: node test-add-callouts.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Test cases
const testCases = [
  {
    name: 'Empty page with only metadata',
    content: `---
title: 'Test Page'
---
`,
    expectedCallout: 'ComingSoonCallout',
    shouldHaveContent: false
  },
  {
    name: 'Page with only title heading',
    content: `---
title: 'Test Page'
---

# Test Page
`,
    expectedCallout: 'ComingSoonCallout',
    shouldHaveContent: false
  },
  {
    name: 'Page with content',
    content: `---
title: 'Test Page'
---

# Test Page

This is some actual content that makes this a real page.
`,
    expectedCallout: 'PreviewCallout',
    shouldHaveContent: true
  },
  {
    name: 'Page with imports and content',
    content: `---
title: 'Test Page'
---

import { SomeComponent } from '/snippets/components/test.jsx'

# Test Page

This page has content and imports.
`,
    expectedCallout: 'PreviewCallout',
    shouldHaveContent: true
  },
  {
    name: 'Page that already has ComingSoonCallout',
    content: `---
title: 'Test Page'
---

import {ComingSoonCallout} from '/snippets/components/primitives/previewCallouts.jsx'

<ComingSoonCallout />
`,
    expectedCallout: null, // Should skip
    shouldHaveContent: false,
    hasExistingCallout: true
  },
  {
    name: 'Page that already has PreviewCallout',
    content: `---
title: 'Test Page'
---

import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />

# Test Page

Some content here.
`,
    expectedCallout: null, // Should skip
    shouldHaveContent: true,
    hasExistingCallout: true
  },
  {
    name: 'Remove top-level PreviewCallout with content',
    content: `---
title: 'Test Page'
---

import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />

# Test Page

Some content here.
`,
    removal: {
      shouldRemove: true,
      shouldHavePreviewImport: false,
      shouldHaveCallout: false
    }
  },
  {
    name: 'Remove top-level ComingSoonCallout with content',
    content: `---
title: 'Test Page'
---

import {ComingSoonCallout} from '/snippets/components/primitives/previewCallouts.jsx'

<ComingSoonCallout />

# Test Page

Some content here.
`,
    removal: {
      shouldRemove: true,
      shouldHavePreviewImport: false,
      shouldHaveCallout: false
    }
  },
  {
    name: 'Do not remove callout used later in examples',
    content: `---
title: 'Test Page'
---

import { PreviewCallout, ReviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />

# Test Page

Some content here.

## Examples

<PreviewCallout />
`,
    removal: {
      shouldRemove: true,
      shouldHavePreviewImport: true,
      shouldHaveCallout: true
    }
  },
  {
    name: 'Skip removal on page without content',
    content: `---
title: 'Test Page'
---

import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'

<PreviewCallout />
`,
    removal: {
      shouldRemove: false,
      shouldHavePreviewImport: true,
      shouldHaveCallout: true
    }
  }
];

// Import the functions we need to test (simplified versions for testing)
function hasContent(content) {
  const parts = content.split('---');
  if (parts.length < 3) return false;
  
  const afterMetadata = parts.slice(2).join('---').trim();
  const withoutImports = afterMetadata.replace(/^import\s+.*$/gm, '').trim();
  const withoutCallouts = withoutImports
    .replace(/<ComingSoonCallout\s*\/>/g, '')
    .replace(/<PreviewCallout\s*\/>/g, '')
    .trim();
  
  const lines = withoutCallouts.split('\n').filter(line => line.trim().length > 0);
  
  if (lines.length === 0 || (lines.length === 1 && lines[0].trim().startsWith('#'))) {
    return false;
  }
  
  return true;
}

function hasCallout(content) {
  return content.includes('<ComingSoonCallout') || 
         content.includes('<PreviewCallout') ||
         content.includes('<ReviewCallout') ||
         content.includes('<CookingCallout');
}

function cleanupPreviewCalloutImports(content, usage) {
  const importRegex = /^\s*import\s+\{([^}]*)\}\s+from\s+(['"])\/snippets\/components\/domain\/SHARED\/previewCallouts\.jsx\2;?\s*$/;

  return content
    .split('\n')
    .map((line) => {
      const match = line.match(importRegex);
      if (!match) return line;

      const quote = match[2];
      const hasSemicolon = line.trim().endsWith(';');
      const items = match[1]
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);

      const filtered = items.filter((item) => {
        if (item === 'PreviewCallout') return usage.keepPreview;
        if (item === 'ComingSoonCallout') return usage.keepComing;
        return true;
      });

      if (filtered.length === 0) return null;

      return `import { ${filtered.join(', ')} } from ${quote}/snippets/components/primitives/previewCallouts.jsx${quote}${hasSemicolon ? ';' : ''}`;
    })
    .filter((line) => line !== null)
    .join('\n');
}

function removeTopLevelCallout(content) {
  const parts = content.split('---');
  if (parts.length < 3) return { content, removed: false };

  const beforeMetadata = parts[0];
  const metadata = parts[1];
  const afterMetadata = parts.slice(2).join('---');

  const lines = afterMetadata.split('\n');
  const importRegex = /^\s*import\s+\{[^}]*\}\s+from\s+['"]\/snippets\/components\/domain\/SHARED\/previewCallouts\.jsx['"];?\s*$/;
  const calloutRegex = /^\s*<\s*(PreviewCallout|ComingSoonCallout)\b[^>]*\/>\s*$/;

  let firstNonImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;
    if (/^\s*import\s+/.test(lines[i])) continue;
    firstNonImportIndex = i;
    break;
  }

  let calloutIndex = -1;
  if (firstNonImportIndex !== -1 && calloutRegex.test(lines[firstNonImportIndex])) {
    calloutIndex = firstNonImportIndex;
  }

  let importIndex = -1;
  if (calloutIndex !== -1) {
    for (let i = 0; i < calloutIndex; i++) {
      if (importRegex.test(lines[i]) && /(PreviewCallout|ComingSoonCallout)/.test(lines[i])) {
        importIndex = i;
        break;
      }
    }
  }

  if (calloutIndex === -1 && importIndex === -1) {
    return { content, removed: false };
  }

  const filteredLines = lines.filter((_, index) => index !== calloutIndex && index !== importIndex);
  let newAfter = filteredLines.join('\n');

  const usage = {
    keepPreview: /<PreviewCallout\b/.test(newAfter),
    keepComing: /<ComingSoonCallout\b/.test(newAfter),
  };

  newAfter = cleanupPreviewCalloutImports(newAfter, usage);

  if (!newAfter.startsWith('\n')) {
    newAfter = `\n${newAfter}`;
  }

  const newContent = `${beforeMetadata}---${metadata}---${newAfter}`;
  return { content: newContent, removed: newContent !== content };
}

// Run tests
console.log('🧪 Running tests for add-callouts.js\n');

let passed = 0;
let failed = 0;

for (const testCase of testCases) {
  console.log(`Testing: ${testCase.name}`);
  
  const contentDetected = hasContent(testCase.content);
  const calloutDetected = hasCallout(testCase.content);
  
  let testPassed = true;
  
  // Test content detection
  if (typeof testCase.shouldHaveContent === 'boolean' && contentDetected !== testCase.shouldHaveContent) {
    console.log(`  ❌ Content detection failed: expected ${testCase.shouldHaveContent}, got ${contentDetected}`);
    testPassed = false;
  }
  
  // Test callout detection
  if (testCase.hasExistingCallout && !calloutDetected) {
    console.log(`  ❌ Callout detection failed: should have detected existing callout`);
    testPassed = false;
  }
  
  // Test expected callout type
  if (testCase.expectedCallout) {
    const expectedType = testCase.expectedCallout === 'ComingSoonCallout' ? 'ComingSoon' : 'Preview';
    const actualType = contentDetected ? 'Preview' : 'ComingSoon';
    
    if (expectedType !== actualType) {
      console.log(`  ❌ Callout type mismatch: expected ${expectedType}, would add ${actualType}`);
      testPassed = false;
    }
  }

  if (testCase.removal) {
    const removalResult = contentDetected ? removeTopLevelCallout(testCase.content) : { content: testCase.content, removed: false };
    const hasPreviewImport = removalResult.content.includes('PreviewCallout');
    const hasCalloutRemaining = hasCallout(removalResult.content);

    if (removalResult.removed !== testCase.removal.shouldRemove) {
      console.log(`  ❌ Removal detection failed: expected ${testCase.removal.shouldRemove}, got ${removalResult.removed}`);
      testPassed = false;
    }

    if (hasPreviewImport !== testCase.removal.shouldHavePreviewImport) {
      console.log(`  ❌ Import cleanup failed: expected preview import ${testCase.removal.shouldHavePreviewImport}, got ${hasPreviewImport}`);
      testPassed = false;
    }

    if (hasCalloutRemaining !== testCase.removal.shouldHaveCallout) {
      console.log(`  ❌ Callout cleanup failed: expected callout ${testCase.removal.shouldHaveCallout}, got ${hasCalloutRemaining}`);
      testPassed = false;
    }
  }
  
  if (testPassed) {
    console.log(`  ✅ Passed`);
    passed++;
  } else {
    failed++;
  }
  
  console.log('');
}

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('✨ All tests passed!');
  process.exit(0);
} else {
  console.log('❌ Some tests failed');
  process.exit(1);
}
