# Section Closeout

Close a section only after both the work and the validation are complete.

## Required Reruns

Run the targeted checks that match the section edits:

- copy-framework checks
- scoped style checks
- scoped links/imports checks
- scoped MDX checks
- scoped quality checks
- supplemental docs-authoring-rules checks when they produced the original queue

Keep the reruns scoped to the current section unless the user asked for a broader validation sweep.

## Final Hook Gate

After the targeted reruns pass:

- stage the section or tranche diff
- run `bash .githooks/pre-commit`

Treat the hook as the final local gate before the tracker is updated.

## Tracker Then Move

Only after the hook passes:

- strike through completed page tasks
- close the section status line
- add the section completion note
- move to the next approved section in tracker order

If the hook fails, leave the section open and fix the failure first.
