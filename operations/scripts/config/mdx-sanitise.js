#!/usr/bin/env node
/**
 * @script      mdx-sanitise
 * @type        
 * @concern     
 * @niche       
 * @purpose     infrastructure:shared-lib
 * @description Shared sanitisation utilities for all scripts that write content consumed by MDX pages.
 * @mode        read-only
 * @pipeline    external content -> sanitise -> safe MDX/JSX output
 * @scope       operations/scripts/config/, .github/scripts/
 * @usage       const { sanitiseForMdx, escapeForJsx } = require('../../operations/scripts/config/mdx-sanitise')
 */

"use strict";

// ── sanitiseForMdx ─────────────────────────────────────────────────────────
//
// For content written directly to .mdx files (changelogs, scan-fix rewrites).
// MDX parses angle brackets as JSX tags, @ as decorator syntax in some contexts,
// and curly braces as JSX expressions. This function makes arbitrary text safe
// for inline MDX rendering.
//
// Does NOT escape content inside JSX string literals (use escapeForJsx for that).

const sanitiseForMdx = (text) => {
  if (!text) return "";
  return (
    text
      // Remove "by @user, @user, and @user in [#NNN](...)" attribution patterns
      .replace(
        /\s+by\s+@[\w-]+(?:,\s*@[\w-]+)*(?:,?\s*and\s+@[\w-]+)?\s+in\s+\[#\d+\]\([^)]+\)(?:,\s*\[#\d+\]\([^)]+\))*/g,
        ""
      )
      // Remove standalone "by @user in https://..." attribution patterns
      .replace(
        /\s+by\s+@[\w-]+(?:,\s*@[\w-]+)*(?:,?\s*and\s+@[\w-]+)?\s+in\s+https?:\/\/\S+/g,
        ""
      )
      // Convert angle-bracketed URLs to plain URLs (MDX parses <url> as JSX tags)
      .replace(/<(https?:\/\/[^>]+)>/g, "$1")
      // Remove Co-authored-by / Signed-off-by lines (contain <email> that breaks MDX)
      .replace(/^\s*co-authored-by:.*$/gim, "")
      .replace(/^\s*signed-off-by:.*$/gim, "")
      // Escape angle-bracketed emails (e.g. <user@domain.com>) before general < escaping
      .replace(/<([^>]*@[^>]+)>/g, "($1)")
      // Escape remaining < that are not valid HTML/JSX tag starts
      .replace(/<(?![a-zA-Z/!])/g, "&lt;")
      // Clean trailing whitespace per line
      .replace(/[ \t]+$/gm, "")
      // Collapse 3+ blank lines to 2
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
};

// ── escapeForJsx ───────────────────────────────────────────────────────────
//
// For content written to .jsx string literals (data exports consumed by components).
// Escapes characters that break JavaScript string syntax: quotes, backticks,
// backslashes, template literal interpolation ($). Also normalises Unicode
// punctuation (smart quotes, em-dashes, non-breaking spaces) to ASCII equivalents.
//
// Options:
//   stripEntities (default false) - strip HTML entities like &amp; &lt; etc.
//     Enable for scripts where source content has HTML entities that should not
//     appear in the rendered output (e.g. YouTube descriptions).

const escapeForJsx = (text, opts = {}) => {
  if (!text) return "";
  let result = (text || "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/"/g, '\\"')
    .replace(/\$/g, "\\$")
    // Smart quotes to straight
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201C|\u201D/g, '\\"')
    // Dashes to ASCII
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-")
    // Bullets and arrows to ASCII
    .replace(/\u2022/g, "-")
    .replace(/\u2192/g, "->")
    // Non-breaking space to regular space
    .replace(/[\u00A0]/g, " ")
    // Strip carriage returns, normalise tabs
    .replace(/\r/g, "")
    .replace(/\t/g, " ");

  if (opts.stripEntities) {
    result = result.replace(/&[#\w]+;/g, "");
  }

  return result;
};

// ── validateUrl ────────────────────────────────────────────────────────────
//
// Returns the URL string if it has an http or https scheme. Returns null otherwise.
// Use before embedding external URLs in HTML/JSX output.

const validateUrl = (url) => {
  if (!url || typeof url !== "string") return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
    return null;
  } catch {
    return null;
  }
};

// ── stripHtmlTags ──────────────────────────────────────────────────────────
//
// Removes HTML tags preserving text content. Decodes common entities EXCEPT
// angle brackets (to avoid reintroducing MDX-unsafe characters).
// Use for user-generated HTML content (forum posts, RSS content:encoded).

const stripHtmlTags = (html) => {
  if (!html) return "";
  return (
    html
      // Remove all HTML tags
      .replace(/<[^>]*>/g, "")
      // Decode safe entities only (not &lt; &gt; which would reintroduce angle brackets)
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&nbsp;/g, " ")
      // Collapse whitespace runs
      .replace(/[ \t]+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
};

module.exports = {
  sanitiseForMdx,
  escapeForJsx,
  validateUrl,
  stripHtmlTags,
};
