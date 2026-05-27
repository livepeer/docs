# Livepeer Docs — `docs-v3` (clean slate)

This is an **orphan branch** created to experiment with a fresh docs structure
without the historical weight of `docs-v2`. It shares no commit history with
`main` or `docs-v2`.

## Why this exists

`docs-v2` grew complex. `docs-v3` is a sandbox for the docs writer to try a
new information architecture from scratch, while remaining in the same repo
so Mintlify's per-repo billing applies once.

## Local preview

```bash
mintlify dev --port 3333
```

Do not use port `3000` — it is reserved per repo policy.

## Returning to `docs-v2`

```bash
git checkout docs-v2
```

The two branches are independent; switching is safe.
