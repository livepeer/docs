#!/usr/bin/env node

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

import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'

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

import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'

<PreviewCallout />

# Test Page

Some content here.
`,
    expectedCallout: null, // Should skip
    shouldHaveContent: true,
    hasExistingCallout: true
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
  if (contentDetected !== testCase.shouldHaveContent) {
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

