#!/usr/bin/env node
/**
 * @script            mdx-parser
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             tests
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement MDX parser utility — extracts frontmatter, components, content blocks from MDX files
 * @pipeline          indirect — library module
 * @usage             node tests/utils/mdx-parser.js [flags]
 */
/**
 * MDX parsing utilities for validation
 */

const yaml = require('js-yaml');

/**
 * Extract frontmatter from MDX file
 */
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { exists: false, data: null, raw: null };
  }
  
  try {
    const data = yaml.load(match[1]);
    return { exists: true, data, raw: match[1] };
  } catch (error) {
    return { exists: true, data: null, raw: match[1], error: error.message };
  }
}

/**
 * Extract imports from MDX file
 */
function extractImports(content) {
  const importRegex = /^import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"];?/gm;
  const imports = [];
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      full: match[0],
      path: match[1],
      line: content.substring(0, match.index).split('\n').length
    });
  }
  
  return imports;
}

/**
 * Check for unclosed JSX tags
 */
function checkUnclosedTags(content) {
  const errors = [];
  const tagStack = [];
  const ignoreRanges = [];
  const ignoreRegexes = [
    /```[\s\S]*?```/g,      // markdown code blocks
    /`[^`\n]*`/g,           // inline code spans
    /\{\/\*[\s\S]*?\*\/\}/g, // JSX comments
    /<!--[\s\S]*?-->/g      // HTML comments
  ];

  ignoreRegexes.forEach((regex) => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      ignoreRanges.push({
        start: match.index,
        end: match.index + match[0].length
      });
    }
  });

  function isInIgnoredRange(pos) {
    return ignoreRanges.some((range) => pos >= range.start && pos < range.end);
  }

  function getLineNumber(pos) {
    return content.slice(0, pos).split('\n').length;
  }

  function findTagEnd(startIndex) {
    let quote = null;
    let braceDepth = 0;

    for (let i = startIndex + 1; i < content.length; i++) {
      const ch = content[i];
      const prev = content[i - 1];

      // Inside JSX expression braces, only track nested braces.
      // This avoids treating apostrophes in JSX text (e.g. Livepeer's)
      // as string delimiters, which can hide the real closing '>'.
      if (braceDepth > 0) {
        if (ch === '{') {
          braceDepth += 1;
          continue;
        }

        if (ch === '}') {
          braceDepth -= 1;
          continue;
        }

        continue;
      }

      if (quote) {
        if (ch === quote && prev !== '\\') {
          quote = null;
        }
        continue;
      }

      if (ch === '"' || ch === '\'' || ch === '`') {
        quote = ch;
        continue;
      }

      if (ch === '{') {
        braceDepth += 1;
        continue;
      }

      if (ch === '>' && braceDepth === 0) {
        return i;
      }
    }

    return -1;
  }

  for (let cursor = 0; cursor < content.length; ) {
    const tagStart = content.indexOf('<', cursor);
    if (tagStart === -1) {
      break;
    }

    if (isInIgnoredRange(tagStart)) {
      cursor = tagStart + 1;
      continue;
    }

    let nameStart = tagStart + 1;
    let isClosing = false;

    if (content[nameStart] === '/') {
      isClosing = true;
      nameStart += 1;
    }

    if (!/[A-Z]/.test(content[nameStart] || '')) {
      cursor = tagStart + 1;
      continue;
    }

    let nameEnd = nameStart + 1;
    while (/[A-Za-z0-9]/.test(content[nameEnd] || '')) {
      nameEnd += 1;
    }

    const tagName = content.slice(nameStart, nameEnd);
    const lineNumber = getLineNumber(tagStart);
    const tagEnd = findTagEnd(tagStart);

    if (tagEnd === -1) {
      errors.push({
        line: lineNumber,
        message: `Unclosed tag <${tagName}>`,
        tag: tagName
      });
      break;
    }

    const fullTag = content.slice(tagStart, tagEnd + 1);
    const isSelfClosing = /\/\s*>$/.test(fullTag);

    if (!isSelfClosing) {
      if (isClosing) {
        let found = false;
        for (let i = tagStack.length - 1; i >= 0; i--) {
          if (tagStack[i].name === tagName) {
            tagStack.splice(i);
            found = true;
            break;
          }
        }
        if (!found) {
          errors.push({
            line: lineNumber,
            message: `Closing tag </${tagName}> without matching opening tag`,
            tag: tagName
          });
        }
      } else {
        tagStack.push({ name: tagName, line: lineNumber });
      }
    }

    cursor = tagEnd + 1;
  }
  
  // Check for unclosed tags
  tagStack.forEach(tag => {
    errors.push({
      line: tag.line,
      message: `Unclosed tag <${tag.name}>`,
      tag: tag.name
    });
  });
  
  return errors;
}

/**
 * Validate MDX structure
 */
function validateMdx(content, filePath) {
  const errors = [];
  const warnings = [];
  
  // Check frontmatter
  const frontmatter = extractFrontmatter(content);
  if (!frontmatter.exists) {
    warnings.push('Missing frontmatter (optional but recommended)');
  } else if (frontmatter.error) {
    errors.push(`Invalid frontmatter YAML: ${frontmatter.error}`);
  }
  
  // Check for unclosed tags
  const tagErrors = checkUnclosedTags(content);
  errors.push(...tagErrors);
  
  // Check imports
  const imports = extractImports(content);
  // Skip style guide (it documents relative imports as examples of what NOT to do)
  if (!filePath || !filePath.includes('style-guide.mdx')) {
    imports.forEach(imp => {
      // Check for relative imports to snippets
      if (imp.path.includes('snippets') && !imp.path.startsWith('/snippets')) {
        errors.push({
          line: imp.line,
          message: `Relative import path for snippets: ${imp.path}. Use absolute path: /snippets/...`,
          import: imp.path
        });
      }
    });
  }
  
  return { errors, warnings, frontmatter, imports };
}

module.exports = {
  extractFrontmatter,
  extractImports,
  checkUnclosedTags,
  validateMdx
};
