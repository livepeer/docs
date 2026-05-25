#!/usr/bin/env node
/**
 * @script      fetch-luma-events
 * @type        integrator
 * @concern     copy
 * @niche       social-feeds
 * @purpose     Fetch upcoming and past Livepeer events from the public Luma calendar iCal feed and emit a JSX module the Community Events & Streams page renders via the LumaEvents component — replaces the dead n8n-based refresh path
 * @description Reads the public Livepeer calendar at https://api2.luma.com/ics/get?entity=calendar&id=livepeer (no auth required — public iCal). Parses VEVENT blocks, extracts title/date/location/URL, splits into upcoming (start > now) and past (start <= now), sorts past desc / upcoming asc, writes a sorted JSX export to snippets/data/social-feeds/lumaEventsData.jsx. Matches the n8n workflow at snippets/assets/data/n8n/Luma-To-Mintlify.json so the schedule, endpoint, and transform are identical.
 * @mode        integrate
 * @pipeline    P5 (scheduled) via dispatch-social-feeds.js — note: NOT yet wired to the dispatcher pending operator verification
 * @scope       Livepeer Luma calendar iCal (read-only) → snippets/data/social-feeds/lumaEventsData.jsx
 * @usage       node operations/scripts/integrators/copy/social-feeds/fetch-luma-events.js [--dry-run]
 * @policy      F-R1 (data freshness); public endpoint only; no secrets in output
 */

'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const { escapeForJsx } = require(path.join(process.cwd(), 'operations/scripts/config/mdx-sanitise'));

const dryRun = process.argv.includes('--dry-run');
const verbose = process.argv.includes('--verbose');

// Livepeer's public Luma calendar ID. Discovered from https://luma.com/livepeer (link to calendar/{ID}).
// The legacy n8n config used the slug "livepeer" — that no longer resolves (Luma migrated to opaque IDs).
const CALENDAR_ID = process.env.LUMA_CALENDAR_ID || 'cal-X93qV3PuUH0wq0f';
const FEED_URL = `https://api2.luma.com/ics/get?entity=calendar&id=${CALENDAR_ID}`;
const OUTPUT_PATH = 'snippets/data/social-feeds/lumaEventsData.jsx';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'livepeer-docs-bot' } }, (res) => {
        // Follow redirects — resolve relative locations (e.g. `/path`) against the request URL.
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = new URL(res.headers.location, url).toString();
          return fetchUrl(next).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} from ${url}`));
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

// Parse iCal VEVENT block field. Handles fold-continuation (lines starting with space/tab).
function getField(block, field) {
  const re = new RegExp(`^${field}[^:\\n]*:(.*(?:\\n[ \\t].*)*)`, 'm');
  const m = block.match(re);
  if (!m) return '';
  return m[1].replace(/\n[ \t]/g, '').trim();
}

// Parse iCal date strings: "20251118T140000Z" or "20251118" (date-only) → Date.
function parseIcalDate(raw) {
  if (!raw) return null;
  const v = raw.replace(/[TZ]/g, '').trim();
  if (v.length < 8) return null;
  const year = v.slice(0, 4);
  const month = v.slice(4, 6);
  const day = v.slice(6, 8);
  const hour = v.length >= 10 ? v.slice(8, 10) : '00';
  const min = v.length >= 12 ? v.slice(10, 12) : '00';
  return new Date(`${year}-${month}-${day}T${hour}:${min}:00Z`);
}

function formatDate(date) {
  // Render in UTC so dates match the iCal source (DTSTART is published in UTC). Avoids system-locale drift
  // when the fetcher runs in CI vs locally and prevents off-by-one display for events near midnight.
  if (!date || Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

// iCal text fields use `\n`, `\,`, `\;` escapes. Unescape them.
function unescapeIcal(str) {
  return String(str || '')
    .replace(/\\n/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function extractLumaUrl(description) {
  const m = unescapeIcal(description).match(/https:\/\/luma\.com\/\w+/);
  return m ? m[0] : '';
}

function parseEvents(icalData) {
  const blocks = icalData.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];
  return blocks.map((block) => {
    const title = unescapeIcal(getField(block, 'SUMMARY'));
    const dtstart = parseIcalDate(getField(block, 'DTSTART'));
    const location = unescapeIcal(getField(block, 'LOCATION'));
    const description = getField(block, 'DESCRIPTION');
    const url = extractLumaUrl(description);
    return { title, start: dtstart, date: formatDate(dtstart), location, url };
  }).filter((e) => e.title && e.start);
}

function partitionEvents(events) {
  const now = Date.now();
  const upcoming = events.filter((e) => e.start.getTime() > now).sort((a, b) => a.start - b.start);
  const past = events.filter((e) => e.start.getTime() <= now).sort((a, b) => b.start - a.start);
  return { upcoming, past };
}

function buildJsx(payload) {
  const sanitiseEvent = (e) => ({
    title: escapeForJsx(e.title, { stripEntities: true }),
    date: e.date,
    location: e.location || '',
    url: e.url || '',
  });
  const upcoming = payload.upcoming.map(sanitiseEvent);
  const past = payload.past.map(sanitiseEvent);
  const lines = [];
  lines.push('export const lumaEventsData = {');
  lines.push(`  lastUpdated: ${JSON.stringify(new Date().toISOString())},`);
  lines.push('  upcoming: [');
  for (const e of upcoming) {
    lines.push('    {');
    lines.push(`      title: ${JSON.stringify(e.title)},`);
    lines.push(`      date: ${JSON.stringify(e.date)},`);
    lines.push(`      location: ${JSON.stringify(e.location)},`);
    lines.push(`      url: ${JSON.stringify(e.url)}`);
    lines.push('    },');
  }
  lines.push('  ],');
  lines.push('  past: [');
  for (const e of past) {
    lines.push('    {');
    lines.push(`      title: ${JSON.stringify(e.title)},`);
    lines.push(`      date: ${JSON.stringify(e.date)},`);
    lines.push(`      location: ${JSON.stringify(e.location)},`);
    lines.push(`      url: ${JSON.stringify(e.url)}`);
    lines.push('    },');
  }
  lines.push('  ]');
  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

async function main() {
  const startedAt = Date.now();
  let icalData;
  try {
    icalData = await fetchUrl(FEED_URL);
  } catch (err) {
    console.error(`fetch-luma-events: failed to fetch ${FEED_URL} — ${err.message}`);
    process.exit(1);
  }
  const events = parseEvents(icalData);
  const { upcoming, past } = partitionEvents(events);
  const jsx = buildJsx({ upcoming, past });

  console.log(`fetch-luma-events: parsed ${events.length} event(s) — ${upcoming.length} upcoming, ${past.length} past (${Date.now() - startedAt}ms)`);
  if (verbose) {
    console.log('Upcoming:');
    for (const e of upcoming.slice(0, 5)) console.log(`  ${e.date} — ${e.title}`);
    console.log('Past (first 5):');
    for (const e of past.slice(0, 5)) console.log(`  ${e.date} — ${e.title}`);
  }

  if (dryRun) {
    console.log('--dry-run: would write to', OUTPUT_PATH);
    process.exit(0);
  }
  fs.writeFileSync(OUTPUT_PATH, jsx, 'utf8');
  console.log(`fetch-luma-events: wrote ${OUTPUT_PATH}`);
}

main();
