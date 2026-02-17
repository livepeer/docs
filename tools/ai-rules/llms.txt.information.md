This page is deliberately named incorrectly so as not to override the default
llms.txt file.

https://www.mintlify.com/docs/ai/llmstxt

An llms.txt file is a plain Markdown file that contains: Site title as an H1
heading. Structured content sections with links and a description of each page
in your documentation.

**Ensure all pages have a description for LLMs.txt to be useful.**

Each page’s description comes from the description field in its frontmatter.
Pages without a description field appear in the llms.txt file without a
description.

Example

```
# Site title

## Docs

- [API](https://example.com/docs/api): Endpoint list and usage
- [Install](https://example.com/docs/install): Setup steps
- [Getting started](https://example.com/docs/start): Intro guide
```

This structured approach allows LLMs to efficiently process your documentation
at a high level and locate relevant content for user queries, improving the
accuracy and speed of AI-assisted documentation searches.
