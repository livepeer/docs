/**
 * @script      mdx-constraints-injector
 * @type        
 * @concern     
 * @niche       
 * @purpose     Auto-injects Mintlify MDX constraints when user messages involve page/component editing
 * @description UserPromptSubmit hook. Keyword-matches the user message for MDX/component/page
 * @mode        read-only
 * @pipeline    UserPromptSubmit hook → reads stdin user message → keyword match → inject constraints
 * @scope       .claude/settings.json UserPromptSubmit hook
 * @usage       Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.
 */

const { stdin } = process;

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const message = (data.message || data.content || '').toLowerCase();

    // Keywords that signal MDX/component/page editing work
    const mdxSignals = [
      /\.mdx/,
      /component/,
      /import.*from/,
      /jsx/,
      /snippet/,
      /mintlify/,
      /frontmatter/,
      /accordion/,
      /tab.*group/,
      /card.*group/,
      /styled\s*step/,
      /edit.*page/,
      /fix.*page/,
      /update.*page/,
      /rewrite.*page/,
      /add.*section/,
      /broken.*render/,
      /hydration/,
      /layout.*component/,
    ];

    const matches = mdxSignals.some(re => re.test(message));

    if (matches) {
      console.log(JSON.stringify({
        systemMessage: [
          'MINTLIFY MDX CONSTRAINTS (auto-injected):',
          '1. Do NOT import React or hooks — they are global',
          '2. Do NOT import Mintlify built-ins (Card, Tabs, Accordion, Steps, etc.) — they are global',
          '3. Use root-absolute imports for shared repo resources, include file extensions, and only use page-local relative imports for tightly colocated route files',
          '4. Keep data flow in parent MDX for MDX-facing JSX components; do not make JSX own shared data/constants',
          '5. Cross-JSX component imports are not the safe default — only use proven repo patterns',
          '6. Verify every import path exists before using it (Glob or Grep first)',
          'Full reference: docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md',
        ].join(' | ')
      }));
    }

    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
