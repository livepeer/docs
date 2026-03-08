#!/usr/bin/env node
/**
 * @script            v2-wcag-audit.selftest
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/integration, v2, git index
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures
 * @pipeline          manual — not yet in pipeline
 * @usage             node tests/integration/v2-wcag-audit.selftest.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const http = require('http');
const path = require('path');
const { spawnSync } = require('child_process');
const puppeteer = require('puppeteer');
const wcag = require('./v2-wcag-audit');

function getRepoRoot() {
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

async function withHttpFixture(html, fn) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });

  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const addr = server.address();
  const url = `http://127.0.0.1:${addr.port}`;

  try {
    return await fn(url);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

function runGit(args) {
  const cmd = spawnSync('git', args, { cwd: getRepoRoot(), encoding: 'utf8' });
  return {
    status: cmd.status,
    stdout: (cmd.stdout || '').trim(),
    stderr: (cmd.stderr || '').trim()
  };
}

async function testBrowserAxeFixture() {
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>WCAG Fixture</title>
  </head>
  <body>
    <main>
      <h1>Fixture</h1>
      <img src="/missing-alt.png">
      <a href="https://example.com"><span aria-hidden="true">🔗</span></a>
      <div tabindex="5">Focusable</div>
    </main>
  </body>
</html>`;

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    return await withHttpFixture(html, async (url) => {
      const result = await wcag.runAxeOnUrl(browser, url, {
        file: 'v2/internal/wcag-fixture.mdx',
        routeKey: 'v2/internal/wcag-fixture'
      });

      assert.strictEqual(result.ok, true);
      assert.ok(Array.isArray(result.wcagViolations));
      assert.ok(Array.isArray(result.bestPracticeViolations));
      assert.ok(result.wcagViolations.length >= 1, 'expected at least one WCAG violation');
      const ids = new Set(result.wcagViolations.map((v) => v.id));
      assert.ok(ids.has('image-alt') || ids.has('link-name'), 'expected image-alt or link-name violation');
      result.wcagViolations.forEach((v) => {
        assert.strictEqual(v.type, 'wcag');
        assert.ok(['critical', 'serious', 'moderate', 'minor', 'unknown'].includes(v.impact));
      });
      result.bestPracticeViolations.forEach((v) => {
        assert.strictEqual(v.type, 'best-practice');
      });
      return result;
    });
  } finally {
    await browser.close();
  }
}

async function testRunAuditFixAndStage() {
  const root = getRepoRoot();
  const nonce = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  const rel = `v2/internal/__wcag-selftest-${nonce}.mdx`;
  const abs = path.join(root, rel);
  const reportMd = `/tmp/v2-wcag-selftest-${nonce}.md`;
  const reportJson = `/tmp/v2-wcag-selftest-${nonce}.json`;

  fs.writeFileSync(abs, '# Temp WCAG Selftest\n\n<img src="/tmp-selftest.png" />\n', 'utf8');

  const testV2Pages = require('../../tools/scripts/test-v2-pages');
  const originalGetV2Pages = testV2Pages.getV2Pages;
  testV2Pages.getV2Pages = function patchedGetV2Pages() {
    const base = originalGetV2Pages.call(this);
    const route = rel.replace(/\.mdx?$/i, '');
    return [...new Set([...base, route])];
  };

  try {
    const noFix = await wcag.runAudit({ argv: ['--files', rel, '--no-fix', '--max-pages', '0', '--report', reportMd, '--report-json', reportJson] });
    assert.ok(fs.readFileSync(abs, 'utf8').includes('<img src="/tmp-selftest.png" />'));
    assert.strictEqual(noFix.results.length, 1);
    assert.strictEqual(noFix.results[0].kind, 'static-only');
    assert.strictEqual(noFix.results[0].autofixes.length, 0);
    assert.ok(noFix.results[0].staticFindings.some((f) => f.rule === 'raw-img-missing-alt'));

    const withFix = await wcag.runAudit({ argv: ['--files', rel, '--fix', '--stage', '--max-pages', '0', '--report', reportMd, '--report-json', reportJson] });
    const fixedContent = fs.readFileSync(abs, 'utf8');
    assert.ok(/<img\b[^>]*\balt=/.test(fixedContent), 'expected img alt autofix');
    assert.ok(withFix.summary.totals.autofixes >= 1);

    const staged = runGit(['diff', '--cached', '--name-only', '--', rel]);
    assert.strictEqual(staged.status, 0);
    assert.ok(staged.stdout.split('\n').map((s) => s.trim()).includes(rel));

    // Unstage only the temp file to avoid touching user changes.
    const unstage = runGit(['restore', '--staged', '--', rel]);
    if (unstage.status !== 0) {
      const fallback = runGit(['rm', '--cached', '-q', '--', rel]);
      assert.strictEqual(fallback.status, 0, fallback.stderr || fallback.stdout);
    }
  } finally {
    testV2Pages.getV2Pages = originalGetV2Pages;
    try {
      fs.unlinkSync(abs);
    } catch (_error) {
      // ignore
    }
    try {
      const cleanup = runGit(['restore', '--staged', '--', rel]);
      if (cleanup.status !== 0) runGit(['rm', '--cached', '-q', '--', rel]);
    } catch (_error) {
      // ignore
    }
    try {
      fs.unlinkSync(reportMd);
    } catch (_error) {
      // ignore
    }
    try {
      fs.unlinkSync(reportJson);
    } catch (_error) {
      // ignore
    }
  }
}

async function main() {
  const failures = [];
  const run = async (name, fn) => {
    process.stdout.write(`🧪 ${name}... `);
    try {
      await fn();
      console.log('✅');
    } catch (error) {
      console.log('❌');
      failures.push({ name, error });
    }
  };

  await run('Browser axe fixture captures WCAG violations and separates best-practice results', testBrowserAxeFixture);
  await run('runAudit respects --no-fix and stages autofix changes with --stage', testRunAuditFixAndStage);

  if (failures.length > 0) {
    console.error(`\n❌ ${failures.length} self-test(s) failed`);
    failures.forEach((f) => console.error(`  - ${f.name}: ${f.error.message}`));
    process.exit(1);
  }

  console.log('\n✅ v2 WCAG audit self-tests passed (2 cases)');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
