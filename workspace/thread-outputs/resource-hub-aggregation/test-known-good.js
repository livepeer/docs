#!/usr/bin/env node
/**
 * Validate extract-and-wrap.js against the existing contract-addresses pattern.
 * - Reads the existing canonical at snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
 * - Reads one of the existing wrappers
 * - Confirms our utility would produce structurally equivalent output
 */

const fs = require('fs');
const path = require('path');
const { splitMdx, buildWrapper, toComponentName } = require('./extract-and-wrap.js');

const ROOT = path.resolve(__dirname, '../../..');

const CANONICAL = path.join(ROOT, 'snippets/composables/pages/canonical/livepeer-contract-addresses.mdx');
const WRAPPER = path.join(ROOT, 'v2/about/resources/reference/livepeer-contract-addresses.mdx');

const canonicalSrc = fs.readFileSync(CANONICAL, 'utf8');
const wrapperSrc = fs.readFileSync(WRAPPER, 'utf8');

const { frontmatter: canFm, body: canBody } = splitMdx(canonicalSrc);
const { frontmatterRaw: wrapperFmRaw, frontmatter: wrapperFm, body: wrapperBody } = (() => {
  // splitMdx exported doesn't return frontmatterRaw; re-derive
  const end = wrapperSrc.indexOf('\n---', 4) + 4;
  return {
    frontmatterRaw: wrapperSrc.slice(0, end),
    frontmatter: splitMdx(wrapperSrc).frontmatter,
    body: wrapperSrc.slice(end).replace(/^\n/, '')
  };
})();

console.log('=== Known-good validation: contract-addresses ===\n');

// Check 1: Existing wrapper body matches the wrapper boilerplate pattern (import + render)
console.log('1. Existing wrapper body shape:');
console.log(`   Body (${wrapperBody.length} bytes):`);
console.log('   ---');
console.log('   ' + wrapperBody.split('\n').slice(0, 8).join('\n   '));
console.log('   ---');

const hasImport = wrapperBody.includes(`import ContractAddressesCanonical`);
const hasRender = wrapperBody.includes(`<ContractAddressesCanonical />`);
console.log(`   has import:  ${hasImport ? '✓' : '✗'}`);
console.log(`   has render:  ${hasRender ? '✓' : '✗'}`);

// Check 2: My utility would produce a structurally equivalent wrapper given the same source frontmatter
const compName = 'ContractAddressesCanonical';
const synthWrapper = buildWrapper(wrapperFmRaw, '/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx', compName);
const synthHasImport = synthWrapper.includes(`import ${compName} from "/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx"`);
const synthHasRender = synthWrapper.includes(`<${compName} />`);
const synthPreservesFm = synthWrapper.startsWith(wrapperFmRaw);

console.log(`\n2. My utility's synthesized wrapper for the same source:`);
console.log(`   has import:        ${synthHasImport ? '✓' : '✗'}`);
console.log(`   has render:        ${synthHasRender ? '✓' : '✗'}`);
console.log(`   preserves frontmatter: ${synthPreservesFm ? '✓' : '✗'}`);

// Check 3: Canonical exists and has body content
console.log(`\n3. Existing canonical:`);
console.log(`   path: ${CANONICAL.replace(ROOT + '/', '')}`);
console.log(`   total bytes: ${canonicalSrc.length}`);
console.log(`   body bytes (no frontmatter): ${canBody.length}`);
console.log(`   body sample (first 200 chars):`);
console.log('   ---');
console.log('   ' + canBody.slice(0, 200).replace(/\n/g, '\n   '));
console.log('   ---');

// Check 4: Component name derivation works
console.log(`\n4. Component name derivation:`);
const cases = [
  ['cli-reference', 'CliReferenceCanonical'],
  ['gpu-support', 'GpuSupportCanonical'],
  ['hardware-requirements', 'HardwareRequirementsCanonical'],
  ['cli-commands', 'CliCommandsCanonical'],
];
for (const [slug, expected] of cases) {
  const actual = toComponentName(slug);
  console.log(`   ${slug} -> ${actual} ${actual === expected ? '✓' : `✗ (expected ${expected})`}`);
}

// Check 5: Constraint — canonical should NOT be in docs.json
const docsJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs.json'), 'utf8'));
const docsStr = JSON.stringify(docsJson);
const canonicalRouted = docsStr.includes('snippets/composables/pages/canonical/livepeer-contract-addresses');
console.log(`\n5. Mintlify constraint check:`);
console.log(`   canonical routed in docs.json: ${canonicalRouted ? '✗ VIOLATED' : '✓ correctly absent'}`);

console.log('\n=== Validation complete ===');
