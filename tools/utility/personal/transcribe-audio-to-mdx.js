#!/usr/bin/env node
/**
 * @script transcribe-audio-to-mdx
 * @summary Download audio from URL, chunk with ffmpeg, transcribe via OpenRouter, and write an MDX transcript page.
 * @owner docs
 * @scope tools/utility/personal, v2/internal/assets/transcripts
 * @pipeline manual — personal utility, not for shared pipelines
 *
 * @usage
 *   OPENROUTER_API_KEY=... node tools/utility/personal/transcribe-audio-to-mdx.js --audio-url "<url>" --title "<episode title>" --show "<show name>" --published-at YYYY-MM-DD
 *
 * @inputs
 *   --audio-url <url> (required)
 *   --title <string> (required)
 *   --show <string> (required)
 *   --published-at <YYYY-MM-DD> (required)
 *   --output-dir <path> (default: v2/internal/assets/transcripts/a16z)
 *   --slug <string> (default: slugified title)
 *   --model <openrouter-model-id> (default: google/gemini-2.5-flash)
 *   --chunk-seconds <positive-integer> (default: 600)
 *   --overwrite (optional flag)
 *
 * @outputs
 *   - <output-dir>/<published-at>-<slug>.mdx
 *
 * @exit-codes
 *   0 = transcript generated
 *   1 = invalid args, missing dependency/env, API failure, or write failure
 *
 * @examples
 *   OPENROUTER_API_KEY=... node tools/utility/personal/transcribe-audio-to-mdx.js --audio-url "https://example.com/episode.mp3" --title "My Episode" --show "My Show" --published-at 2026-01-01 --output-dir v2/internal/assets/transcripts/a16z --overwrite
 *
 * @notes
 *   Requires ffmpeg + ffprobe on PATH.
 *   OpenRouter audio input is sent as base64 via messages[].content input_audio.
 *   Logs per-chunk and total token/cost usage when provider usage fields are returned.
 */

const fs = require('fs')
const os = require('os')
const path = require('path')
const { spawnSync } = require('child_process')
const { pipeline } = require('stream/promises')
const { Readable } = require('stream')

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions'
const DEFAULT_OUTPUT_DIR = 'v2/internal/assets/transcripts/a16z'
const DEFAULT_MODEL = 'google/gemini-2.5-flash'
const DEFAULT_CHUNK_SECONDS = 600
const MAX_API_RETRIES = 5
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504])

function usage() {
  console.log(
    [
      'Usage:',
      '  OPENROUTER_API_KEY=... node tools/utility/personal/transcribe-audio-to-mdx.js \\',
      '    --audio-url "<url>" \\',
      '    --title "<episode title>" \\',
      '    --show "<show name>" \\',
      '    --published-at YYYY-MM-DD \\',
      '    [--output-dir v2/internal/assets/transcripts/a16z] \\',
      '    [--slug custom-slug] \\',
      '    [--model google/gemini-2.5-flash] \\',
      '    [--chunk-seconds 600] \\',
      '    [--overwrite]',
      '',
      'Environment:',
      '  OPENROUTER_API_KEY (required)',
      '  OPENROUTER_SITE_URL (optional, default: https://docs.livepeer.org)',
      '  OPENROUTER_SITE_NAME (optional, default: Livepeer Docs)',
    ].join('\n')
  )
}

function parseArgs(argv) {
  const args = {}
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (!token.startsWith('--')) continue
    const key = token.slice(2)
    const next = argv[i + 1]
    if (!next || next.startsWith('--')) {
      args[key] = true
    } else {
      args[key] = next
      i += 1
    }
  }
  return args
}

function toAbsolutePath(targetPath) {
  if (!targetPath) return process.cwd()
  return path.isAbsolute(targetPath)
    ? targetPath
    : path.join(process.cwd(), targetPath)
}

function slugify(input = '') {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function assertRequired(value, flagName) {
  if (value) return
  throw new Error(`Missing required flag: --${flagName}`)
}

function assertPublishedAt(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Invalid --published-at value "${value}". Expected YYYY-MM-DD.`)
  }
}

function parseChunkSeconds(value) {
  if (value === undefined) return DEFAULT_CHUNK_SECONDS
  const parsed = Number.parseInt(String(value), 10)
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(
      `Invalid --chunk-seconds value "${value}". Must be a positive integer.`
    )
  }
  return parsed
}

function runCommand(command, args, contextLabel) {
  const result = spawnSync(command, args, { encoding: 'utf8' })
  if (result.error) {
    throw new Error(`${contextLabel}: ${result.error.message}`)
  }
  if (result.status !== 0) {
    const stderr = (result.stderr || '').trim()
    throw new Error(`${contextLabel}: ${stderr || `exit code ${result.status}`}`)
  }
  return (result.stdout || '').trim()
}

function ensureFfmpeg() {
  try {
    runCommand('ffmpeg', ['-version'], 'ffmpeg check failed')
    runCommand('ffprobe', ['-version'], 'ffprobe check failed')
  } catch (_error) {
    throw new Error(
      'ffmpeg/ffprobe not found on PATH. Install ffmpeg before running this script.'
    )
  }
}

async function downloadAudio(audioUrl, outputPath) {
  console.log(`→ Downloading source audio`)
  const response = await fetch(audioUrl)
  if (!response.ok) {
    throw new Error(`Audio download failed (${response.status} ${response.statusText})`)
  }
  if (!response.body) {
    throw new Error('Audio download returned an empty response body.')
  }

  await pipeline(Readable.fromWeb(response.body), fs.createWriteStream(outputPath))
  const bytes = fs.statSync(outputPath).size
  if (!bytes) {
    throw new Error('Audio download produced an empty file.')
  }
  console.log(`  Downloaded ${(bytes / (1024 * 1024)).toFixed(2)} MB`)
}

function normalizeAndChunkAudio(inputPath, chunkDir, chunkSeconds) {
  console.log(`→ Normalizing/chunking audio with ffmpeg (${chunkSeconds}s chunks)`)
  const outputPattern = path.join(chunkDir, 'chunk_%03d.mp3')
  runCommand(
    'ffmpeg',
    [
      '-hide_banner',
      '-loglevel',
      'error',
      '-y',
      '-i',
      inputPath,
      '-vn',
      '-ac',
      '1',
      '-ar',
      '16000',
      '-b:a',
      '48k',
      '-f',
      'segment',
      '-segment_time',
      String(chunkSeconds),
      '-reset_timestamps',
      '1',
      outputPattern,
    ],
    'ffmpeg chunking failed'
  )

  const chunkFiles = fs
    .readdirSync(chunkDir)
    .filter((name) => name.startsWith('chunk_') && name.endsWith('.mp3'))
    .sort()
    .map((name) => path.join(chunkDir, name))

  if (!chunkFiles.length) {
    throw new Error('No chunk files were produced by ffmpeg.')
  }
  console.log(`  Produced ${chunkFiles.length} chunks`)
  return chunkFiles
}

function probeDurationSeconds(filePath) {
  const raw = runCommand(
    'ffprobe',
    [
      '-v',
      'error',
      '-show_entries',
      'format=duration',
      '-of',
      'default=noprint_wrappers=1:nokey=1',
      filePath,
    ],
    `ffprobe failed for ${path.basename(filePath)}`
  )
  const seconds = Number.parseFloat(raw)
  if (!Number.isFinite(seconds) || seconds <= 0) {
    throw new Error(`Unable to determine duration for ${path.basename(filePath)}.`)
  }
  return seconds
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function extractMessageText(content) {
  if (typeof content === 'string') return content.trim()
  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === 'string') return part
        if (part && typeof part.text === 'string') return part.text
        return ''
      })
      .join('\n')
      .trim()
  }
  if (content && typeof content === 'object' && typeof content.text === 'string') {
    return content.text.trim()
  }
  return ''
}

function toFiniteNumber(value) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function parseUsage(rawUsage) {
  return {
    promptTokens: toFiniteNumber(rawUsage?.prompt_tokens),
    completionTokens: toFiniteNumber(rawUsage?.completion_tokens),
    totalTokens: toFiniteNumber(rawUsage?.total_tokens),
    audioTokens: toFiniteNumber(rawUsage?.prompt_tokens_details?.audio_tokens),
    cost: toFiniteNumber(rawUsage?.cost),
  }
}

function formatCost(value) {
  return value === null ? 'n/a' : `$${value.toFixed(6)}`
}

async function transcribeChunk({
  chunkPath,
  model,
  openRouterKey,
  referer,
  titleHeader,
  chunkNumber,
  chunkCount,
}) {
  const audioBase64 = fs.readFileSync(chunkPath).toString('base64')
  const payload = {
    model,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Transcribe this audio verbatim. Return plain text only. Do not summarize or add commentary.',
          },
          {
            type: 'input_audio',
            input_audio: {
              data: audioBase64,
              format: 'mp3',
            },
          },
        ],
      },
    ],
  }

  for (let attempt = 0; attempt <= MAX_API_RETRIES; attempt += 1) {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${openRouterKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': referer,
        'X-Title': titleHeader,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const bodyText = await response.text()
      if (RETRYABLE_STATUS.has(response.status) && attempt < MAX_API_RETRIES) {
        const waitMs = 1000 * 2 ** attempt
        console.log(
          `  Chunk ${chunkNumber}/${chunkCount} received ${response.status}; retrying in ${(
            waitMs / 1000
          ).toFixed(0)}s`
        )
        await sleep(waitMs)
        continue
      }

      throw new Error(
        `OpenRouter request failed for chunk ${chunkNumber}/${chunkCount}: ${response.status} ${response.statusText} - ${bodyText.slice(
          0,
          300
        )}`
      )
    }

    const json = await response.json()
    const content = json?.choices?.[0]?.message?.content
    const transcript = extractMessageText(content)
    if (!transcript) {
      throw new Error(
        `OpenRouter returned empty transcript for chunk ${chunkNumber}/${chunkCount}.`
      )
    }
    return {
      text: transcript,
      usage: parseUsage(json?.usage),
      provider: json?.provider || null,
    }
  }

  throw new Error(`Exhausted retries for chunk ${chunkNumber}/${chunkCount}.`)
}

function formatTime(totalSeconds) {
  const safe = Math.max(0, Number.parseInt(String(totalSeconds), 10) || 0)
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`
}

function escapeYamlSingleQuoted(value = '') {
  return String(value).replace(/'/g, "''")
}

function renderMdx({
  title,
  showName,
  publishedAt,
  audioUrl,
  model,
  generatedAt,
  chunks,
}) {
  const lines = []

  lines.push('---')
  lines.push(`title: '${escapeYamlSingleQuoted(title)}'`)
  lines.push("sidebarTitle: 'Transcript'")
  lines.push(
    `description: '${escapeYamlSingleQuoted(`Transcript for ${title} from ${showName}.`)}'`
  )
  lines.push(
    `keywords: ['transcript', 'podcast', '${escapeYamlSingleQuoted(showName)}', 'openrouter']`
  )
  lines.push('---')
  lines.push('')
  lines.push(`# ${title}`)
  lines.push('')
  lines.push('## Metadata')
  lines.push('')
  lines.push(`- Show: ${showName}`)
  lines.push(`- Published: ${publishedAt}`)
  lines.push(`- Source audio: ${audioUrl}`)
  lines.push(`- Model: ${model}`)
  lines.push(`- Generated at: ${generatedAt}`)
  lines.push(`- Chunk count: ${chunks.length}`)
  lines.push('')
  lines.push('## Transcript')
  lines.push('')

  for (const chunk of chunks) {
    lines.push(`### ${formatTime(chunk.start)} - ${formatTime(chunk.end)}`)
    lines.push('')
    lines.push(chunk.text.trim())
    lines.push('')
  }

  return `${lines.join('\n').trim()}\n`
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help) {
    usage()
    return
  }

  assertRequired(args['audio-url'], 'audio-url')
  assertRequired(args.title, 'title')
  assertRequired(args.show, 'show')
  assertRequired(args['published-at'], 'published-at')
  assertPublishedAt(args['published-at'])

  const openRouterKey = process.env.OPENROUTER_API_KEY
  if (!openRouterKey) {
    throw new Error('Missing OPENROUTER_API_KEY environment variable.')
  }

  const audioUrl = args['audio-url']
  const title = args.title.trim()
  const showName = args.show.trim()
  const publishedAt = args['published-at']
  const model = (args.model || DEFAULT_MODEL).trim()
  const chunkSeconds = parseChunkSeconds(args['chunk-seconds'])
  const outputDir = toAbsolutePath(args['output-dir'] || DEFAULT_OUTPUT_DIR)
  const slug = slugify(args.slug || title)

  if (!slug) {
    throw new Error(
      'Could not derive a valid slug from title. Pass --slug with letters/numbers/hyphens.'
    )
  }

  const outputPath = path.join(outputDir, `${publishedAt}-${slug}.mdx`)
  if (fs.existsSync(outputPath) && !args.overwrite) {
    throw new Error(
      `Output already exists: ${outputPath}. Pass --overwrite to replace it.`
    )
  }

  ensureFfmpeg()
  fs.mkdirSync(outputDir, { recursive: true })

  const workspacePath = path.join(
    os.tmpdir(),
    'livepeer-transcripts',
    `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  )
  const inputAudioPath = path.join(workspacePath, 'input.mp3')
  const chunkDir = path.join(workspacePath, 'chunks')
  fs.mkdirSync(chunkDir, { recursive: true })

  const referer = process.env.OPENROUTER_SITE_URL || 'https://docs.livepeer.org'
  const titleHeader = process.env.OPENROUTER_SITE_NAME || 'Livepeer Docs'

  console.log('Starting transcript pipeline')
  console.log(`  Output: ${outputPath}`)
  console.log(`  Model: ${model}`)
  console.log(`  Temp workspace: ${workspacePath}`)

  try {
    await downloadAudio(audioUrl, inputAudioPath)
    const chunkFiles = normalizeAndChunkAudio(inputAudioPath, chunkDir, chunkSeconds)

    const chunkResults = []
    const usageTotals = {
      promptTokens: 0,
      completionTokens: 0,
      totalTokens: 0,
      audioTokens: 0,
      cost: 0,
      promptTokenSamples: 0,
      completionTokenSamples: 0,
      totalTokenSamples: 0,
      audioTokenSamples: 0,
      costSamples: 0,
    }
    let timelineSeconds = 0

    for (let i = 0; i < chunkFiles.length; i += 1) {
      const chunkPath = chunkFiles[i]
      const chunkNumber = i + 1
      const durationSeconds = Math.max(1, Math.round(probeDurationSeconds(chunkPath)))
      const start = timelineSeconds
      const end = start + durationSeconds - 1

      console.log(
        `→ Transcribing chunk ${chunkNumber}/${chunkFiles.length} (${formatTime(
          start
        )} - ${formatTime(end)})`
      )
      const chunkResult = await transcribeChunk({
        chunkPath,
        model,
        openRouterKey,
        referer,
        titleHeader,
        chunkNumber,
        chunkCount: chunkFiles.length,
      })
      const usage = chunkResult.usage
      const usageFields = [
        ['prompt', 'promptTokens', 'promptTokenSamples'],
        ['completion', 'completionTokens', 'completionTokenSamples'],
        ['total', 'totalTokens', 'totalTokenSamples'],
        ['audio', 'audioTokens', 'audioTokenSamples'],
        ['cost', 'cost', 'costSamples'],
      ]
      const usageParts = []

      for (const [label, valueKey, sampleKey] of usageFields) {
        const value = usage[valueKey]
        if (value === null) {
          if (label === 'cost') usageParts.push('cost=n/a')
          continue
        }

        usageTotals[valueKey] += value
        usageTotals[sampleKey] += 1
        if (label === 'cost') {
          usageParts.push(`cost=${formatCost(value)}`)
        } else {
          usageParts.push(`${label}=${value}`)
        }
      }

      if (chunkResult.provider) {
        usageParts.push(`provider=${chunkResult.provider}`)
      }
      console.log(`  Usage: ${usageParts.join(', ') || 'none returned by provider'}`)

      chunkResults.push({
        start,
        end,
        text: chunkResult.text,
      })
      timelineSeconds += durationSeconds
    }

    const generatedAt = new Date().toISOString()
    const mdx = renderMdx({
      title,
      showName,
      publishedAt,
      audioUrl,
      model,
      generatedAt,
      chunks: chunkResults,
    })

    fs.writeFileSync(outputPath, mdx, 'utf8')
    console.log('✓ Transcript written')
    console.log(`  File: ${outputPath}`)
    console.log(`  Chunks transcribed: ${chunkResults.length}`)

    const totalsParts = []
    if (usageTotals.promptTokenSamples) {
      totalsParts.push(`prompt=${usageTotals.promptTokens}`)
    }
    if (usageTotals.completionTokenSamples) {
      totalsParts.push(`completion=${usageTotals.completionTokens}`)
    }
    if (usageTotals.totalTokenSamples) {
      totalsParts.push(`total=${usageTotals.totalTokens}`)
    }
    if (usageTotals.audioTokenSamples) {
      totalsParts.push(`audio=${usageTotals.audioTokens}`)
    }
    if (usageTotals.costSamples) {
      totalsParts.push(`cost=${formatCost(usageTotals.cost)}`)
    }
    if (totalsParts.length) {
      console.log(`  Usage totals: ${totalsParts.join(', ')}`)
    } else {
      console.log('  Usage totals: not returned by provider')
    }
  } finally {
    fs.rmSync(workspacePath, { recursive: true, force: true })
  }
}

main().catch((error) => {
  console.error(`✗ ${error.message}`)
  process.exit(1)
})
