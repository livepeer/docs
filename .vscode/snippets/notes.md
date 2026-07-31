Option A — VSCode Snippets (zero code)
Define snippets in .vscode/ that trigger on a prefix (e.g. type lp-changelog + Tab and it expands the full template). Simple, no build step, works today.

Option B — Extend the existing extension
Add an "Insert Template" command to the tools/vscode/markdown-list extension that:

Scans snippets/templates/pages/ recursively
Shows a QuickPick list of all .mdx templates
Inserts the selected template at cursor (or replaces an empty file)

- Option B is more powerful — no need to remember prefix names, always reflects the actual template files, works for any contributor. Want me to build that into the existing extension?
