#!/usr/bin/env node

/**
 * generate-hero-background.js
 *
 * Generates a radial gradient background image from brand colours.
 * Uses Puppeteer to render a CSS gradient and screenshot it.
 *
 * Usage:
 *   node generate-hero-background.js \
 *     --center "#f8d0d0"    # Light centre colour \
 *     --mid "#d76d8f"       # Mid-ring colour (optional) \
 *     --edge "#4a6cf7"      # Edge colour \
 *     --corner "#7c5cbf"    # Corner colour (optional, blends with edge) \
 *     --output path/to/background.png
 *
 * Options:
 *   --center   (required) Centre colour — usually a light/pastel version of brand colour
 *   --mid      (optional) Mid-ring colour — creates a 3-stop gradient if provided
 *   --edge     (required) Edge colour — main brand colour
 *   --corner   (optional) Corner colour — if provided, adds a second radial layer for corner tinting
 *   --output   (required) Output file path (.png)
 *   --width    (optional) Width in px, default: 800
 *   --height   (optional) Height in px, default: 450
 *
 * Presets (use instead of manual colours):
 *   --preset daydream|studio|frameworks|streamplace|embody
 *
 * Colour file (use instead of manual colours or presets):
 *   --colors-file path/to/colors.jsx
 *   Reads hex values from any file containing #rrggbb values.
 *   Sorts by luminance: lightest → centre, next → mid, next → edge, darkest → corner.
 *   Format: export const colours = ['#39fe17', '#35d399', '#3ed1eb', '#0c2313']
 *   Also accepts unquoted: #39fe17, #35d399, #3ed1eb, #0c2313
 *
 * Examples:
 *   # From a colours data file:
 *   node generate-hero-background.js --colors-file v2/solutions/embody/data/colors.jsx --output bg.png
 *
 *   # Manual colours:
 *   node generate-hero-background.js --center "#f8d0d0" --edge "#4a6cf7" --output bg.png
 *
 *   # With mid ring:
 *   node generate-hero-background.js --center "#fce4ec" --mid "#d76d8f" --edge "#4a6cf7" --corner "#7c5cbf" --output bg.png
 *
 *   # Preset:
 *   node generate-hero-background.js --preset daydream --output bg.png
 */

const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)

function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`)
  if (idx === -1 || idx + 1 >= args.length) return fallback
  return args[idx + 1]
}

const PRESETS = {
  daydream: {
    center: '#fce4e4',
    mid: '#d87a9a',
    edge: '#4a7cf7',
    corner: '#7c5cbf',
  },
  studio: {
    center: '#e8fce8',
    mid: '#4eca8a',
    edge: '#18794e',
    corner: '#0d4a30',
  },
  frameworks: {
    center: '#fff3e0',
    mid: '#f5a623',
    edge: '#d4740e',
    corner: '#8b4513',
  },
  streamplace: {
    center: '#e8f0fe',
    mid: '#7baaf7',
    edge: '#1a56db',
    corner: '#1e3a5f',
  },
  embody: {
    center: '#f3e8ff',
    mid: '#b07ae8',
    edge: '#6d28d9',
    corner: '#4c1d95',
  },
}

// Parse hex colours from a file — extracts all #rrggbb values
// If --product is given, filters to only that product's line in the central colors.jsx
function parseColorsFile(filePath, product) {
  const abs = path.resolve(filePath)
  if (!fs.existsSync(abs)) {
    console.error(`Colours file not found: ${abs}`)
    process.exit(1)
  }
  let content = fs.readFileSync(abs, 'utf-8')
  // If product specified, extract only that product's line
  if (product) {
    const re = new RegExp(`${product}\\s*:\\s*\\[([^\\]]+)\\]`)
    const match = content.match(re)
    if (!match) {
      console.error(`Product "${product}" not found in ${abs}`)
      process.exit(1)
    }
    content = match[1]
  }
  const hexes = content.match(/#[0-9a-fA-F]{6}/g)
  if (!hexes || hexes.length < 2) {
    console.error(`Need at least 2 hex colours${product ? ` for "${product}"` : ''} in ${abs}, found ${hexes ? hexes.length : 0}`)
    process.exit(1)
  }
  // Sort by luminance (lightest first)
  const lum = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return 0.299 * r + 0.587 * g + 0.114 * b
  }
  const sorted = [...new Set(hexes)].sort((a, b) => lum(b) - lum(a))
  // Map to gradient stops: lightest → centre, darkest → corner
  if (sorted.length === 2) return { center: sorted[0], edge: sorted[1] }
  if (sorted.length === 3) return { center: sorted[0], mid: sorted[1], edge: sorted[2] }
  return { center: sorted[0], mid: sorted[1], edge: sorted[2], corner: sorted[3] }
}

const preset = getArg('preset')
const colorsFile = getArg('colors-file')
const product = getArg('product')
const presetColors = preset && PRESETS[preset] ? PRESETS[preset] : null
const fileColors = colorsFile ? parseColorsFile(colorsFile, product) : null
const src = fileColors || presetColors

const center = getArg('center', src?.center)
const mid = getArg('mid', src?.mid)
const edge = getArg('edge', src?.edge)
const corner = getArg('corner', src?.corner)
const output = getArg('output')
const width = parseInt(getArg('width', '800'), 10)
const height = parseInt(getArg('height', '450'), 10)

if ((!center || !edge) && !preset && !colorsFile) {
  console.error('Usage: generate-hero-background.js --colors-file <path> --output <path>')
  console.error('   or: generate-hero-background.js --center <color> --edge <color> --output <path>')
  console.error('   or: generate-hero-background.js --preset <name> --output <path>')
  console.error(`\nPresets: ${Object.keys(PRESETS).join(', ')}`)
  process.exit(1)
}

if (!output) {
  console.error('--output is required')
  process.exit(1)
}

// Build the radial gradient CSS
const stops = mid
  ? `${center} 0%, ${mid} 40%, ${edge} 75%`
  : `${center} 0%, ${edge} 75%`

const mainGradient = `radial-gradient(ellipse at center, ${stops})`

// Optional corner tint — a second radial layer
const cornerLayer = corner
  ? `, radial-gradient(ellipse at center, transparent 50%, ${corner} 100%)`
  : ''

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; }
    .gradient {
      width: ${width}px;
      height: ${height}px;
      background: ${mainGradient}${cornerLayer};
    }
  </style>
</head>
<body>
  <div class="gradient"></div>
</body>
</html>`

async function main() {
  let puppeteer
  try {
    puppeteer = require(path.join(__dirname, '..', '..', '..', '..', 'tools', 'node_modules', 'puppeteer'))
  } catch {
    try {
      puppeteer = require('puppeteer')
    } catch {
      console.error('Puppeteer not found. Install it or ensure tools/node_modules/puppeteer exists.')
      process.exit(1)
    }
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'load' })

  const el = await page.$('.gradient')
  const outputAbsolute = path.resolve(output)
  const outputDir = path.dirname(outputAbsolute)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  await el.screenshot({ path: outputAbsolute, type: 'png' })
  await browser.close()

  console.log(`Generated: ${outputAbsolute}`)
  console.log(`  Size: ${width}x${height}`)
  console.log(`  Centre: ${center}`)
  if (mid) console.log(`  Mid: ${mid}`)
  console.log(`  Edge: ${edge}`)
  if (corner) console.log(`  Corner: ${corner}`)
  if (preset) console.log(`  Preset: ${preset}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
