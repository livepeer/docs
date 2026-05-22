# Future Recommendations

Capture repo-wide follow-up items that should become GitHub issues later, without expanding the current editing task by default.

## Candidate Backlog

- Add a validator for guide-root review block presence and placement so guide pages consistently keep the shared TODO block directly below frontmatter and before imports.
- Add a validator for entity-led prose and flag reader-owned second-person phrasing such as `your gateway`, `your node`, or `your application` in explanatory content.
- Add a validator for Tabs and Accordions that checks for `icon` props and, if practical, validates icon names against the FontAwesome naming contract.
- Add a validator for context-aware `CustomDivider` margins so divider spacing can be checked against the surrounding content type and adjacent heading level.
- Align the style-guide validator with the approved `CustomDivider style={{margin: ...}}` authoring patterns so divider spacing can be recommended without triggering generic inline-style failures.
- Add a validator or fixer for `StyledTable` usage on authored guide pages to reduce raw Markdown tables in production MDX.
- Review whether the current usefulness rubric/journey tooling should expand to cover boilerplate openings, filler language, and positive-definition preferences in a later authoring phase.
- Review whether legacy inline-style and Tailwind cleanup should be handled as a dedicated repo-wide remediation project rather than folded into unrelated content edits.
