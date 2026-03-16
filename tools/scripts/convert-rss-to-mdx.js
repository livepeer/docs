#!/usr/bin/env node
/**
 * @script            convert-rss-to-mdx
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             tools/scripts, v2/internal/assets/transcripts
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement RSS-to-MDX converter — imports RSS feed items and converts to MDX page format
 * @pipeline          manual — not yet in pipeline
 * @usage             node tools/scripts/convert-rss-to-mdx.js [flags]
 */

const fs = require('fs')
const path = require('path')

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

function toAbsolutePath(p) {
  if (!p) return ''
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p)
}

function decodeEntities(input = '') {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function stripHtml(input = '') {
  return decodeEntities(input)
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function firstMatch(regex, text, fallback = '') {
  const match = text.match(regex)
  return match ? match[1].trim() : fallback
}

function escapeYamlSingleQuoted(value = '') {
  return String(value).replace(/'/g, "''")
}

function parseRss(xml) {
  const channelBlock = firstMatch(/<channel>([\s\S]*?)<item>/i, xml, xml)

  const title = decodeEntities(
    firstMatch(/<title>([\s\S]*?)<\/title>/i, channelBlock, 'RSS Feed')
  )
  const description = stripHtml(
    firstMatch(/<description>([\s\S]*?)<\/description>/i, channelBlock, '')
  )
  const feedLink =
    firstMatch(/<atom:link[^>]*href="([^"]+)"/i, channelBlock, '') ||
    firstMatch(/<link>([\s\S]*?)<\/link>/i, channelBlock, '')
  const author = decodeEntities(
    firstMatch(/<author>([\s\S]*?)<\/author>/i, channelBlock, '') ||
      firstMatch(
        /<itunes:author>([\s\S]*?)<\/itunes:author>/i,
        channelBlock,
        ''
      )
  )
  const language = decodeEntities(
    firstMatch(/<language>([\s\S]*?)<\/language>/i, channelBlock, '')
  )
  const lastBuildDate = firstMatch(
    /<lastBuildDate>([\s\S]*?)<\/lastBuildDate>/i,
    channelBlock,
    ''
  )

  const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(
    (m) => m[1]
  )

  const episodes = itemBlocks.map((block, index) => {
    const episodeTitle = decodeEntities(
      firstMatch(/<title>([\s\S]*?)<\/title>/i, block, `Episode ${index + 1}`)
    ).trim()

    return {
      title: episodeTitle,
      pubDate: firstMatch(/<pubDate>([\s\S]*?)<\/pubDate>/i, block, ''),
      duration: firstMatch(
        /<itunes:duration>([\s\S]*?)<\/itunes:duration>/i,
        block,
        ''
      ),
      explicit: firstMatch(
        /<itunes:explicit>([\s\S]*?)<\/itunes:explicit>/i,
        block,
        ''
      ),
      link: firstMatch(/<link>([\s\S]*?)<\/link>/i, block, ''),
      audioUrl: firstMatch(/<enclosure[^>]*url="([^"]+)"/i, block, ''),
      summary: stripHtml(
        firstMatch(/<description>([\s\S]*?)<\/description>/i, block, '') ||
          firstMatch(/<itunes:summary>([\s\S]*?)<\/itunes:summary>/i, block, '')
      ),
    }
  })

  return {
    title,
    description,
    feedLink,
    author,
    language,
    lastBuildDate,
    episodes,
  }
}

function buildMdx(feed) {
  const lines = []

  lines.push('---')
  lines.push(`title: '${escapeYamlSingleQuoted(feed.title)}'`)
  lines.push("sidebarTitle: 'RSS Feed'")
  lines.push(
    `description: '${escapeYamlSingleQuoted(feed.description || 'Converted from RSS to MDX')}'`
  )
  lines.push("keywords: ['rss', 'podcast', 'transcript', 'feed']")
  lines.push('---')
  lines.push('')

  lines.push(`# ${feed.title}`)
  lines.push('')

  if (feed.description) {
    lines.push(feed.description)
    lines.push('')
  }

  if (feed.feedLink) lines.push(`- Feed URL: ${feed.feedLink}`)
  if (feed.author) lines.push(`- Author: ${feed.author}`)
  if (feed.language) lines.push(`- Language: ${feed.language}`)
  if (feed.lastBuildDate) lines.push(`- Last build date: ${feed.lastBuildDate}`)
  lines.push(`- Episode count: ${feed.episodes.length}`)
  lines.push('')
  lines.push('## Episodes')
  lines.push('')

  feed.episodes.forEach((episode) => {
    lines.push(`### ${episode.title}`)
    lines.push('')
    if (episode.pubDate) lines.push(`- Published: ${episode.pubDate}`)
    if (episode.duration) lines.push(`- Duration: ${episode.duration}`)
    if (episode.explicit) lines.push(`- Explicit: ${episode.explicit}`)
    if (episode.link) lines.push(`- Episode link: ${episode.link}`)
    if (episode.audioUrl) lines.push(`- Audio: ${episode.audioUrl}`)
    lines.push('')
    if (episode.summary) {
      lines.push(episode.summary)
      lines.push('')
    }
  })

  return `${lines.join('\n')}\n`
}

function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.help || !args.input || !args.output) {
    console.log(
      'Usage: node tools/scripts/convert-rss-to-mdx.js --input <rssPath> --output <mdxPath>'
    )
    process.exit(args.help ? 0 : 1)
  }

  const inputPath = toAbsolutePath(args.input)
  const outputPath = toAbsolutePath(args.output)

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`)
  }

  const xml = fs.readFileSync(inputPath, 'utf8')
  const feed = parseRss(xml)
  const mdx = buildMdx(feed)

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, mdx, 'utf8')

  console.log(`✓ Converted RSS to MDX`)
  console.log(`  Input:  ${inputPath}`)
  console.log(`  Output: ${outputPath}`)
  console.log(`  Episodes: ${feed.episodes.length}`)
}

try {
  main()
} catch (error) {
  console.error(`✗ ${error.message}`)
  process.exit(1)
}
