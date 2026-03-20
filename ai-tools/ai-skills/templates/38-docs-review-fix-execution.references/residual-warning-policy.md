# Residual Warning Policy

Residual warnings are acceptable only when they are clearly non-actionable in the current section pass.

## Acceptable Residual Cases

- code-fence text that trips prose heuristics
- component markup that triggers copy-style heuristics without exposing reader-facing prose issues
- known false positives already documented by the current lints or tests

## Not Acceptable

- live prose that still contains banned words, banned phrases, or weakened constructions
- authoring warnings that point to broken metadata, missing imports, malformed MDX, or policy violations
- unexplained structure warnings that affect readability or completion

## Documentation Rule

If a residual warning is accepted:

- name the exact warning family
- state why it is non-actionable in the current section
- record it in the section completion note

Do not silently ignore residuals.
