#!/usr/bin/env node
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
  const jsxTagRegex = /<\/?([A-Z][a-zA-Z0-9]*)\s*[^>]*>/g;
  const selfClosingRegex = /<[A-Z][a-zA-Z0-9]*\s+[^>]*\/>/;
  
  // Remove code blocks to avoid false positives
  let contentToCheck = content;
  const codeBlockRegex = /```[\s\S]*?```/g;
  const codeBlockRanges = [];
  let codeMatch;
  
  while ((codeMatch = codeBlockRegex.exec(content)) !== null) {
    codeBlockRanges.push({
      start: codeMatch.index,
      end: codeMatch.index + codeMatch[0].length
    });
  }
  
  // Check if position is in a code block
  function isInCodeBlock(pos) {
    return codeBlockRanges.some(range => pos >= range.start && pos < range.end);
  }
  
  let match;
  let lineNumber = 1;
  let lastIndex = 0;
  
  while ((match = jsxTagRegex.exec(content)) !== null) {
    // Skip if in code block
    if (isInCodeBlock(match.index)) {
      continue;
    }
    // Update line number
    const beforeMatch = content.substring(lastIndex, match.index);
    lineNumber += (beforeMatch.match(/\n/g) || []).length;
    
    const fullTag = match[0];
    const tagName = match[1];
    const isClosing = fullTag.startsWith('</');
    const isSelfClosing = selfClosingRegex.test(fullTag) || fullTag.endsWith('/>');
    
    if (isSelfClosing) {
      continue;
    }
    
    if (isClosing) {
      // Find matching opening tag
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
    
    lastIndex = match.index + match[0].length;
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
  
  return { errors, warnings, frontmatter, imports };
}

module.exports = {
  extractFrontmatter,
  extractImports,
  checkUnclosedTags,
  validateMdx
};
