#!/usr/bin/env node
/**
 * Unit tests for operations/scripts/config/mdx-sanitise.js
 * Run: node operations/tests/unit/mdx-sanitise.test.js
 */

"use strict";

const assert = require("assert");
const { sanitiseForMdx, escapeForJsx, validateUrl, stripHtmlTags } = require("../../scripts/config/mdx-sanitise");

let passed = 0;
let failed = 0;

const test = (name, fn) => {
  try {
    fn();
    console.log(`  PASS  ${name}`);
    passed++;
  } catch (err) {
    console.log(`  FAIL  ${name}`);
    console.log(`        ${err.message}`);
    failed++;
  }
};

// ── sanitiseForMdx ─────────────────────────────────────────────────────────

console.log("\nsanitiseForMdx:");

test("escapes angle bracket in version constraint", () => {
  assert.strictEqual(sanitiseForMdx("fix: pin numpy<2.0"), "fix: pin numpy&lt;2.0");
});

test("removes Co-authored-by lines (mixed case)", () => {
  const input = "fix something\nCo-Authored-By: Name <email@x.com>\ndone";
  assert.ok(!sanitiseForMdx(input).includes("Co-Authored-By"));
  assert.ok(!sanitiseForMdx(input).includes("email@x.com"));
});

test("removes Signed-off-by lines", () => {
  const input = "commit message\nSigned-off-by: Dev <dev@example.com>";
  assert.ok(!sanitiseForMdx(input).includes("Signed-off-by"));
});

test("converts angle-bracketed URLs to plain URLs", () => {
  assert.strictEqual(sanitiseForMdx("<https://github.com/foo>"), "https://github.com/foo");
});

test("escapes angle-bracketed emails", () => {
  const result = sanitiseForMdx("contact <user@domain.com> for info");
  assert.ok(!result.includes("<user@domain.com>"));
  assert.ok(result.includes("(user@domain.com)"));
});

test("strips by @user in [#NNN](url) attribution", () => {
  const input = "* fix bug by @someone in [#123](https://github.com/org/repo/pull/123)";
  const result = sanitiseForMdx(input);
  assert.ok(!result.includes("@someone"));
  assert.ok(!result.includes("[#123]"));
});

test("strips by @user in https://... attribution", () => {
  const input = "* fix bug by @user in https://github.com/org/repo/pull/123";
  assert.ok(!sanitiseForMdx(input).includes("@user"));
});

test("collapses multiple blank lines", () => {
  const input = "line1\n\n\n\n\nline2";
  assert.strictEqual(sanitiseForMdx(input), "line1\n\nline2");
});

test("trims trailing whitespace", () => {
  const input = "line1   \nline2\t\t";
  const result = sanitiseForMdx(input);
  assert.ok(!result.includes("   \n"));
  assert.ok(!result.endsWith("\t"));
});

test("preserves valid HTML tags", () => {
  const input = "use <strong>bold</strong> text";
  assert.strictEqual(sanitiseForMdx(input), "use <strong>bold</strong> text");
});

test("returns empty string for null/undefined", () => {
  assert.strictEqual(sanitiseForMdx(null), "");
  assert.strictEqual(sanitiseForMdx(undefined), "");
  assert.strictEqual(sanitiseForMdx(""), "");
});

// ── escapeForJsx ───────────────────────────────────────────────────────────

console.log("\nescapeForJsx:");

test("escapes double quotes", () => {
  assert.strictEqual(escapeForJsx('say "hello"'), 'say \\"hello\\"');
});

test("escapes backticks", () => {
  assert.strictEqual(escapeForJsx("use `code`"), "use \\`code\\`");
});

test("escapes dollar signs", () => {
  assert.strictEqual(escapeForJsx("price: $100"), "price: \\$100");
});

test("escapes backslashes", () => {
  assert.strictEqual(escapeForJsx("path\\to\\file"), "path\\\\to\\\\file");
});

test("normalises em-dash to hyphen", () => {
  assert.strictEqual(escapeForJsx("word\u2014word"), "word-word");
});

test("normalises en-dash to hyphen", () => {
  assert.strictEqual(escapeForJsx("word\u2013word"), "word-word");
});

test("normalises smart quotes", () => {
  assert.strictEqual(escapeForJsx("\u201Chello\u201D"), '\\"hello\\"');
  assert.strictEqual(escapeForJsx("\u2018hi\u2019"), "'hi'");
});

test("normalises non-breaking space", () => {
  assert.strictEqual(escapeForJsx("hello\u00A0world"), "hello world");
});

test("strips carriage returns", () => {
  assert.strictEqual(escapeForJsx("line1\r\nline2"), "line1\nline2");
});

test("strips HTML entities when opted in", () => {
  assert.strictEqual(escapeForJsx("A &amp; B", { stripEntities: true }), "A  B");
  assert.strictEqual(escapeForJsx("a&lt;b", { stripEntities: true }), "ab");
});

test("preserves HTML entities by default", () => {
  assert.strictEqual(escapeForJsx("A &amp; B"), "A &amp; B");
});

test("returns empty string for null/undefined", () => {
  assert.strictEqual(escapeForJsx(null), "");
  assert.strictEqual(escapeForJsx(undefined), "");
});

// ── validateUrl ────────────────────────────────────────────────────────────

console.log("\nvalidateUrl:");

test("accepts https URL", () => {
  assert.strictEqual(validateUrl("https://github.com/foo"), "https://github.com/foo");
});

test("accepts http URL", () => {
  assert.strictEqual(validateUrl("http://example.com"), "http://example.com/");
});

test("rejects javascript: scheme", () => {
  assert.strictEqual(validateUrl("javascript:alert('xss')"), null);
});

test("rejects data: scheme", () => {
  assert.strictEqual(validateUrl("data:text/html,<h1>hi</h1>"), null);
});

test("rejects ftp: scheme", () => {
  assert.strictEqual(validateUrl("ftp://files.example.com"), null);
});

test("rejects empty/null/malformed", () => {
  assert.strictEqual(validateUrl(""), null);
  assert.strictEqual(validateUrl(null), null);
  assert.strictEqual(validateUrl("not a url"), null);
});

// ── stripHtmlTags ──────────────────────────────────────────────────────────

console.log("\nstripHtmlTags:");

test("strips tags preserving text", () => {
  assert.strictEqual(stripHtmlTags("<p>hello <strong>world</strong></p>"), "hello world");
});

test("strips tags with attributes", () => {
  assert.strictEqual(stripHtmlTags('<a href="bad" onclick="evil">click</a>'), "click");
});

test("decodes safe entities", () => {
  assert.strictEqual(stripHtmlTags("A &amp; B"), "A & B");
  assert.strictEqual(stripHtmlTags("say &quot;hi&quot;"), 'say "hi"');
});

test("does NOT decode angle bracket entities (prevents reintroduction)", () => {
  const result = stripHtmlTags("a &lt;script&gt; tag");
  assert.ok(result.includes("&lt;"));
  assert.ok(result.includes("&gt;"));
});

test("collapses whitespace runs", () => {
  assert.strictEqual(stripHtmlTags("<p>  too   many   spaces  </p>"), "too many spaces");
});

test("returns empty string for null/undefined", () => {
  assert.strictEqual(stripHtmlTags(null), "");
  assert.strictEqual(stripHtmlTags(undefined), "");
});

// ── Summary ────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
