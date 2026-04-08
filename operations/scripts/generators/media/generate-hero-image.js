#!/usr/bin/env node

/**
 * generate-hero-image.js
 *
 * Generates a hero image by compositing a Font Awesome icon and Inter Bold
 * uppercase text onto any background image. Uses Puppeteer to screenshot
 * an HTML page — no native image deps required.
 *
 * Usage:
 *   node generate-hero-image.js \
 *     --background path/to/background.png \
 *     --icon play          # Font Awesome icon name (solid style) \
 *     --text "Get Started" # Auto-uppercased \
 *     --output path/to/output.png
 *
 * Options:
 *   --background  (required) Path to background image (png/jpg)
 *   --icon        (required) Font Awesome 6 solid icon name (e.g. play, rocket, code, server)
 *   --text        (required) Label text — auto-uppercased
 *   --output      (required) Output file path (.png)
 *   --width       (optional) Output width in px, default: auto from background
 *   --height      (optional) Output height in px, default: auto from background
 *   --icon-size   (optional) Icon size in px, default: 64
 *   --text-size   (optional) Text size in px, default: 36
 *   --color       (optional) Text/icon colour, default: white
 *   --circle      (optional) Show icon inside a white circle, default: true
 *   --circle-size (optional) Circle diameter in px, default: 100
 * @script      generate-hero-image
 * @type        generator
 * @description generate hero image
 * @mode        generate
 * @pipeline    manual
 * @scope       operations/scripts/generators/media
 * @usage       node operations/scripts/generators/media/generate-hero-image.js
 */

const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)

function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`)
  if (idx === -1 || idx + 1 >= args.length) return fallback
  return args[idx + 1]
}

function getBoolArg(name, fallback) {
  const val = getArg(name, null)
  if (val === null) return fallback
  return val !== 'false' && val !== '0'
}

const background = getArg('background')
const icon = getArg('icon')
const text = getArg('text')
const output = getArg('output')
const iconSize = parseInt(getArg('icon-size', '90'), 10)
const textSize = parseInt(getArg('text-size', '48'), 10)
const color = getArg('color', 'white')
const showCircle = getBoolArg('circle', true)
const circleSize = parseInt(getArg('circle-size', '100'), 10)

if (!background || !icon || !text || !output) {
  console.error('Usage: generate-hero-image.js --background <path> --icon <name> --text <label> --output <path>')
  console.error('Example: generate-hero-image.js --background bg.png --icon play --text "Get Started" --output hero.png')
  process.exit(1)
}

const bgAbsolute = path.resolve(background)
if (!fs.existsSync(bgAbsolute)) {
  console.error(`Background not found: ${bgAbsolute}`)
  process.exit(1)
}

const bgDataUri = `data:image/png;base64,${fs.readFileSync(bgAbsolute).toString('base64')}`
const upperText = text.toUpperCase()

// Inline SVG paths for FA solid icons — no CDN needed
const ICON_PATHS = {
  'bolt-lightning': 'M315.5 13.5C325.8 4.8 340.5 3.2 352.5 9.4s19 19.3 17.5 32.6l-24 205h119c13.2 0 25 8.1 29.7 20.4s1.5 26.3-8.1 35.2l-248 232c-10.7 10-26 12.2-39 5.6s-20.7-20.5-19.7-35l12-211H72c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 7.1-34.8l266-248z',
  'circle-play': 'M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.5-4.6-16.7-4.7-24.3-.5z',
  'laptop-code': 'M64 96c0-35.3 28.7-64 64-64H384c35.3 0 64 28.7 64 64V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H492.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z',
  'diagram-project': 'M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v16h192V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 256h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V304c0-1.3.1-2.6.2-3.9L144 224H48c-26.5 0-48-21.5-48-48V80z',
  'code': 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
  'file-code': 'M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304.3c-10-1.4-20.3-2.3-30.9-2.3c-97 0-178.2 65.1-203.3 154.1c-2.2-.1-4.5-.1-6.8-.1H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM208 349.3c-20-9.2-41.5-14.6-64-15.9V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v29.4c-22.5 1.3-44 6.7-64 15.9V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V384c0 8.8 7.2 16 16 16h16 16 64 16 16c8.8 0 16-7.2 16-16V349.3z',
  'comment-dots': 'M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6.6-1 1.1-1.3 1.4l-.3.3c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.8 54.6-30.5c22 6.9 45.7 10.8 70.8 10.8zM152 240a32 32 0 1 0-64 0 32 32 0 1 0 64 0zm104 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm136-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0z',
  'tower-broadcast': 'M256 0c-17.7 0-32 14.3-32 32V64.3C142 74.5 74.5 142 64.3 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64.3c6.2 49.9 31 93.9 67.3 125.3l-56.9 56.9c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l56.9-56.9C208.1 481 231.3 496 256 496s47.9-15 79.1-37.4l56.9 56.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-56.9-56.9c36.3-31.4 61.1-75.4 67.3-125.3H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H447.7C437.5 142 370 74.5 288 64.3V32c0-17.7-14.3-32-32-32zM208 256a48 48 0 1 1 96 0 48 48 0 1 1-96 0z',
  'table-cells': 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM448 96V224H288V96H448zM224 96V224H64V96H224zM64 288H224V416H64V288zM288 416V288H448V416H288z',
  'robot': 'M320 0c17.7 0 32 14.3 32 32V96H480c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0-80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z',
  'pencil': 'M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L14.1 366.4.5 416.8c-2 7.5.1 15.5 5.5 20.9s13.4 7.5 20.9 5.5l50.4-13.6 242.7-242.7 22.6-22.6 67.7-67.7zM480 220.8V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64H291.2L480 220.8z',
  'screwdriver-wrench': 'M78.6 5C69.1-2.4 55.6-1.5 47.3 7L7 47.3C-1.5 55.6-2.4 69.1 5 78.6s21 12.5 30.6 5.1l55-44 39.4 39.4L41.4 167.7c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l88.6-88.6 43.6 43.6-55 44c-9.5 7.6-10.4 21.1-2 30.6s21.1 10.4 30.6 2L448 53.7V32c0-17.7-14.3-32-32-32H393.7L78.6 5zM382.8 232.2c-5.6 5.6-13.2 8.8-21.2 8.8H336V432c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V241H150.4c-7.9 0-15.6-3.1-21.2-8.8L78.6 181.6 14.1 246.1c-18.7 18.7-18.7 49.1 0 67.9l176 176c18.7 18.7 49.1 18.7 67.9 0l64.5-64.5L382.8 232.2z',
  'grid': 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM448 96V224H288V96H448zM224 96V224H64V96H224zM64 288H224V416H64V288zM288 416V288H448V416H288z',
}

// Get viewBox width for icon (most FA solid icons are 512 or 640)
function getViewBox(iconName) {
  const wide = ['code', 'laptop-code']
  return wide.includes(iconName) ? '0 0 640 512' : '0 0 512 512'
}

const svgPath = ICON_PATHS[icon]
const iconSvg = svgPath
  ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${getViewBox(icon)}" width="${iconSize}" height="${iconSize}" fill="${color}" style="filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2))"><path d="${svgPath}"/></svg>`
  : `<div style="width:${iconSize}px;height:${iconSize}px;"></div>`

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      font-family: 'Inter', Arial, Helvetica, sans-serif;
    }
    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .container img.bg {
      display: block;
      width: 100%;
      height: auto;
    }
    .overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
    .label {
      font-family: 'Inter', Arial, Helvetica, sans-serif;
      font-weight: 700;
      font-size: ${textSize}px;
      color: ${color};
      letter-spacing: 2px;
      text-align: center;
      text-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .border-frame {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border: 6px solid rgba(255,255,255,0.85);
      border-radius: 5%;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <img class="bg" src="${bgDataUri}" />
    <div class="overlay">
      ${iconSvg}
      <div class="label">${upperText}</div>
    </div>
    <div class="border-frame"></div>
  </div>
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

  await page.setContent(html, { waitUntil: 'networkidle2', timeout: 30000 })

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready)
  await new Promise(r => setTimeout(r, 2000))

  const container = await page.$('.container')
  const box = await container.boundingBox()

  const outputAbsolute = path.resolve(output)
  const outputDir = path.dirname(outputAbsolute)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  await container.screenshot({
    path: outputAbsolute,
    type: 'png',
    clip: { x: box.x, y: box.y, width: box.width, height: box.height },
  })

  await browser.close()

  console.log(`Generated: ${outputAbsolute}`)
  console.log(`  Background: ${bgAbsolute}`)
  console.log(`  Icon: fa-solid fa-${icon}`)
  console.log(`  Text: ${upperText}`)
  console.log(`  Size: ${Math.round(box.width)}x${Math.round(box.height)}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
