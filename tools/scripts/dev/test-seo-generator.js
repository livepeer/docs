/**
 * @script            test-seo-generator
 * @category          generator
 * @purpose           feature:seo
 * @scope             tools/scripts
 * @owner             docs
 * @needs             E-R19, F-R7
 * @purpose-statement Test for seo-generator — validates SEO generation logic
 * @pipeline          manual — developer tool
 * @usage             node tools/scripts/dev/test-seo-generator.js [flags]
 */
const fs = require('fs')
const path = require('path')
const {
  extractFrontmatter,
  generateKeywords,
  getOgImagePath,
  parseFrontmatterFields,
  rebuildFrontmatter,
  processFile,
} = require('./seo-generator-safe.js')

console.log('Testing SEO Generator Script\n')

// Test files
const testFiles = [
  fs.existsSync('v2/home/mission-control.mdx')
    ? 'v2/home/mission-control.mdx'
    : 'v2/home/mission-control.mdx',
  fs.existsSync('v2/about/portal.mdx')
    ? 'v2/about/portal.mdx'
    : 'v2/about/portal.mdx',
  fs.existsSync('v2/gateways/gateways-portal.mdx')
    ? 'v2/gateways/gateways-portal.mdx'
    : 'v2/gateways/gateways-portal.mdx',
]

let allTestsPassed = true

testFiles.forEach((testFile) => {
  console.log(`\n========== Testing: ${testFile} ==========`)

  const fullPath = path.join(process.cwd(), testFile)
  const originalContent = fs.readFileSync(fullPath, 'utf8')
  const originalExtracted = extractFrontmatter(originalContent)

  if (!originalExtracted) {
    console.error('❌ Failed to extract frontmatter')
    allTestsPassed = false
    return
  }

  // Parse original frontmatter
  const originalFields = parseFrontmatterFields(originalExtracted.frontmatter)

  // Process file (dry run)
  const result = processFile(testFile)

  if (!result.success) {
    console.error(`❌ Processing failed: ${result.error}`)
    allTestsPassed = false
    return
  }

  // Simulate what the new content would be
  const newKeywords = result.newKeywords
  const newOgImage = result.ogImage
  const newFrontmatter = rebuildFrontmatter(
    originalFields,
    newKeywords,
    newOgImage
  )
  const newContent = `---\n${newFrontmatter}\n---\n${originalExtracted.body}`

  // Parse new frontmatter
  const newExtracted = extractFrontmatter(newContent)
  const newFields = parseFrontmatterFields(newExtracted.frontmatter)

  // Verify all fields except keywords and og:image are preserved
  let fieldsPreserved = true
  for (const key in originalFields) {
    if (key === 'keywords' || key === 'og:image' || key === 'og') {
      continue // These are expected to change
    }

    if (originalFields[key] !== newFields[key]) {
      console.error(`❌ Field "${key}" was modified!`)
      console.error(`   Original: ${originalFields[key]}`)
      console.error(`   New: ${newFields[key]}`)
      fieldsPreserved = false
      allTestsPassed = false
    }
  }

  // Verify body content is unchanged
  if (originalExtracted.body !== newExtracted.body) {
    console.error('❌ Body content was modified!')
    console.error(`   Original length: ${originalExtracted.body.length}`)
    console.error(`   New length: ${newExtracted.body.length}`)
    allTestsPassed = false
  } else {
    console.log('✓ Body content preserved')
  }

  if (fieldsPreserved) {
    console.log(
      '✓ All frontmatter fields preserved (except keywords and og:image)'
    )
  }

  // Show what changed
  console.log('\nChanges:')
  console.log(
    `  Keywords: ${JSON.stringify(result.oldKeywords)} → ${JSON.stringify(result.newKeywords)}`
  )
  console.log(`  og:image: ${newOgImage}`)

  // Show preserved fields
  console.log('\nPreserved fields:')
  for (const key in originalFields) {
    if (key !== 'keywords' && key !== 'og:image' && key !== 'og') {
      const value =
        originalFields[key].length > 50
          ? originalFields[key].substring(0, 50) + '...'
          : originalFields[key]
      console.log(`  ${key}: ${value}`)
    }
  }
})

console.log('\n\n========== TEST SUMMARY ==========')
if (allTestsPassed) {
  console.log('✅ ALL TESTS PASSED')
  console.log('The script correctly:')
  console.log(
    '  - Preserves all frontmatter fields except keywords and og:image'
  )
  console.log('  - Preserves all body content')
  console.log('  - Only modifies keywords and og:image fields')
} else {
  console.log('❌ SOME TESTS FAILED')
  console.log('DO NOT USE THIS SCRIPT until all tests pass!')
}
console.log('==================================')

process.exit(allTestsPassed ? 0 : 1)
