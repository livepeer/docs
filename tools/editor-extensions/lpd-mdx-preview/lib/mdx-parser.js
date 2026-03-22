'use strict';

/**
 * Lightweight MDX parser. Produces an array of typed segments from MDX source.
 *
 * Segment types:
 *   frontmatter  – YAML metadata block
 *   import       – import statement (stripped from preview)
 *   markdown     – standard markdown text
 *   mermaid      – fenced mermaid code block
 *   codeblock    – other fenced code blocks
 *   jsx          – JSX component tag (open/close or self-closing)
 *   jsx-expression – {/* comments * /} and {expressions}
 */

// Reused from authoring-tools/lib/authoring-core.js (L297-317)
function isFenceLine(line) {
  return /^(\s*)(```|~~~)/.test(line);
}

function isStandaloneOpenTag(line) {
  const match = line.match(/^(\s*)<([A-Z][A-Za-z0-9.]*)\b([^>]*)>\s*$/);
  if (!match) return null;
  if (/\/>\s*$/.test(line)) return null;
  return { indent: match[1], name: match[2], propsStr: match[3] };
}

function isSelfClosingTag(line) {
  const match = line.match(/^(\s*)<([A-Z][A-Za-z0-9.]*)\b([^>]*)\/>\s*$/);
  if (!match) return null;
  return { indent: match[1], name: match[2], propsStr: match[3] };
}

function isStandaloneCloseTag(line) {
  const match = line.match(/^(\s*)<\/([A-Z][A-Za-z0-9.]*)>\s*$/);
  if (!match) return null;
  return { indent: match[1], name: match[2] };
}

function parseProps(propsStr) {
  const props = {};
  if (!propsStr) return props;
  let pos = 0;
  const s = propsStr.replace(/\n/g, ' ');
  const len = s.length;
  while (pos < len) {
    while (pos < len && /\s/.test(s[pos])) pos++;
    if (pos >= len) break;
    const keyMatch = s.slice(pos).match(/^(\w[\w-]*)/);
    if (!keyMatch) { pos++; continue; }
    const key = keyMatch[1];
    pos += key.length;
    while (pos < len && /\s/.test(s[pos])) pos++;
    if (pos >= len || s[pos] !== '=') { props[key] = true; continue; }
    pos++; // skip '='
    while (pos < len && /\s/.test(s[pos])) pos++;
    if (pos >= len) { props[key] = true; break; }
    const ch = s[pos];
    if (ch === '"' || ch === "'") {
      pos++;
      let val = '';
      while (pos < len && s[pos] !== ch) val += s[pos++];
      if (pos < len) pos++;
      props[key] = val;
    } else if (ch === '{') {
      let depth = 0;
      const start = pos;
      while (pos < len) {
        if (s[pos] === '{') depth++;
        else if (s[pos] === '}') { depth--; if (depth === 0) { pos++; break; } }
        pos++;
      }
      props[key] = s.slice(start + 1, pos - 1);
    } else {
      let val = '';
      while (pos < len && !/\s/.test(s[pos])) val += s[pos++];
      props[key] = val;
    }
  }
  return props;
}

function extractFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { frontmatter: null, rest: text };

  const raw = match[1];
  const meta = {};
  for (const line of raw.split('\n')) {
    const kv = line.match(/^([A-Za-z][\w.-]*):\s*(.*)$/);
    if (kv) {
      let val = kv[2].trim();
      if ((val.startsWith("'") && val.endsWith("'")) ||
          (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      meta[kv[1]] = val;
    }
  }

  return {
    frontmatter: meta,
    rest: text.slice(match[0].length)
  };
}

function parse(text) {
  const segments = [];
  const { frontmatter, rest } = extractFrontmatter(text);

  if (frontmatter) {
    segments.push({ type: 'frontmatter', content: frontmatter });
  }

  const lines = rest.split('\n');
  let i = 0;
  let mdBuffer = [];
  let inFence = false;
  let fenceLang = '';
  let fenceContent = [];
  const jsxStack = []; // stack of { name, props, children, childMd }

  function flushMd() {
    const text = mdBuffer.join('\n').trim();
    if (text) {
      const target = jsxStack.length > 0
        ? jsxStack[jsxStack.length - 1]
        : null;
      const seg = { type: 'markdown', content: text };
      if (target) {
        flushChildMd(target);
        target.children.push(seg);
      } else {
        segments.push(seg);
      }
    }
    mdBuffer = [];
  }

  function flushChildMd(frame) {
    // no-op: mdBuffer is flushed via flushMd into children
  }

  function pushSegment(seg) {
    if (jsxStack.length > 0) {
      flushMd();
      jsxStack[jsxStack.length - 1].children.push(seg);
    } else {
      flushMd();
      segments.push(seg);
    }
  }

  while (i < lines.length) {
    const line = lines[i];

    // --- Import lines ---
    if (!inFence && jsxStack.length === 0 && /^\s*import\s+/.test(line)) {
      flushMd();
      segments.push({ type: 'import', content: line });
      i++;
      continue;
    }

    // --- Fenced code blocks ---
    if (isFenceLine(line)) {
      if (!inFence) {
        flushMd();
        inFence = true;
        const langMatch = line.match(/^(\s*)(```|~~~)\s*(\S*)/);
        fenceLang = langMatch ? langMatch[3] : '';
        fenceContent = [];
        i++;
        continue;
      } else {
        // closing fence
        inFence = false;
        const content = fenceContent.join('\n');
        if (fenceLang === 'mermaid') {
          pushSegment({ type: 'mermaid', content });
        } else {
          pushSegment({ type: 'codeblock', lang: fenceLang, content });
        }
        fenceContent = [];
        fenceLang = '';
        i++;
        continue;
      }
    }

    if (inFence) {
      fenceContent.push(line);
      i++;
      continue;
    }

    // --- JSX expression lines {/* comment */} (single-line) ---
    if (/^\s*\{\/\*.*\*\/\}\s*$/.test(line)) {
      i++;
      continue; // skip single-line JSX comments
    }

    // --- Multi-line JSX comments {/* ... spans multiple lines ... */} ---
    if (/^\s*\{\/\*/.test(line)) {
      const commentLines = [];
      const openContent = line.replace(/^\s*\{\/\*\s?/, '').trimEnd();
      if (openContent) commentLines.push(openContent);
      i++;
      while (i < lines.length) {
        const cl = lines[i];
        if (/\*\/\}\s*$/.test(cl)) {
          const closeContent = cl.replace(/\s*\*\/\}\s*$/, '').trimEnd();
          if (closeContent) commentLines.push(closeContent);
          i++;
          break;
        }
        commentLines.push(lines[i]);
        i++;
      }
      pushSegment({ type: 'jsx-comment', content: commentLines.join('\n') });
      continue;
    }

    // --- Self-closing JSX tags ---
    const selfClose = isSelfClosingTag(line);
    if (selfClose) {
      const seg = {
        type: 'jsx',
        tag: selfClose.name,
        props: parseProps(selfClose.propsStr),
        children: [],
        selfClosing: true
      };
      pushSegment(seg);
      i++;
      continue;
    }

    // --- Opening JSX tags ---
    const openTag = isStandaloneOpenTag(line);
    if (openTag) {
      flushMd();
      jsxStack.push({
        name: openTag.name,
        props: parseProps(openTag.propsStr),
        children: [],
        childMd: []
      });
      i++;
      continue;
    }

    // --- Closing JSX tags ---
    const closeTag = isStandaloneCloseTag(line);
    if (closeTag && jsxStack.length > 0) {
      flushMd();
      const frame = jsxStack.pop();
      const seg = {
        type: 'jsx',
        tag: frame.name,
        props: frame.props,
        children: frame.children,
        selfClosing: false
      };
      pushSegment(seg);
      i++;
      continue;
    }

    // --- Multi-line JSX tags (props span multiple lines) ---
    if (/^\s*<([A-Z][A-Za-z0-9.])/.test(line)) {
      const tagLines = [line];
      let depth = 0;
      for (const ch of line) {
        if (ch === '{') depth++;
        else if (ch === '}') depth--;
      }
      const alreadyComplete = depth <= 0 && (/\/>\s*$/.test(line) || />\s*$/.test(line));
      if (!alreadyComplete) {
        while (i + 1 < lines.length) {
          i++;
          const cl = lines[i];
          tagLines.push(cl);
          for (const ch of cl) {
            if (ch === '{') depth++;
            else if (ch === '}') depth--;
          }
          if (depth <= 0 && (/\/>\s*$/.test(cl) || />\s*$/.test(cl))) break;
        }
      }
      i++;
      const fullTag = tagLines.join('\n');
      const scMatch = fullTag.match(/^\s*<([A-Z][A-Za-z0-9.]*)\b([\s\S]*?)\/>\s*$/);
      if (scMatch) {
        pushSegment({ type: 'jsx', tag: scMatch[1], props: parseProps(scMatch[2]), children: [], selfClosing: true });
        continue;
      }
      const openMatch = fullTag.match(/^\s*<([A-Z][A-Za-z0-9.]*)\b([\s\S]*?)>\s*$/);
      if (openMatch) {
        flushMd();
        jsxStack.push({ name: openMatch[1], props: parseProps(openMatch[2]), children: [], childMd: [] });
        continue;
      }
      // Couldn't parse — treat as markdown
      for (const tl of tagLines) mdBuffer.push(tl);
      continue;
    }

    // --- Regular markdown line ---
    mdBuffer.push(line);
    i++;
  }

  flushMd();
  return segments;
}

module.exports = { parse, parseProps };
