---
name: browser
description: >-
  Govern how Codex launches, probes, uses, and tears down browser-backed
  validation sessions in this repo. Use when running Mint preview checks,
  Puppeteer or Playwright page validation, or any browser workflow that could
  leak processes, reuse the wrong server, or validate the wrong route.
metadata:
  version: "1.2"
  category: "governance"
  type: "governance"
  concern: "validation"
  scope: "agent"
  status: "active"
  layer: "canonical"
aliases:
  - browser-governor
  - browser-validation-governor
---

# SKILL: Browser

Browser validation in this repo is governed runtime work, not an ad-hoc `open page and hope` step.

## When to use

- Running `lpd dev`, `mint dev`, Puppeteer, Playwright, or browser-backed validation
- Validating a docs page, route, or render state in a local Mint preview
- Reproducing a broken route or testing a scoped docs session
- Cleaning up leaked browser or Mint sessions after validation

## Rules

1. Use repo-managed launchers, not raw browser retries.
   Prefer `.githooks/server-manager.js`, `operations/tests/contracts-validator-contract.js`, or a repo-owned browser harness over repeated manual browser starts.

2. Start from a clean process state.
   Before new agent-owned browser validation, inspect or clean leaked sessions with:
   `node operations/scripts/integrators/governance/cleanup-local-dev-sessions.js --json`
   If non-3333 agent sessions are present, apply cleanup before continuing.

3. Use explicit non-human ports and explicit scope.
   Agent sessions must not use `3000` for direct Mint runs or `3333` for `lpd dev`.
   Prefer scoped launches with exact route prefixes instead of full-repo previews.

4. Never attach to ambient common-port servers for agent validation.
   Browser harnesses must pass an explicit `probePath` and set `allowCommonPorts: false`.
   Do not reuse whatever is listening on `3000-3010` just because it responds.

5. Treat server readiness and route readiness as separate gates.
   `preview ready` only means Mint is listening.
   Before browser assertions, confirm the exact target route returns the expected class of response.
   Reject wrong-route 404s, probe-path 5xx responses, and error pages before moving to semantic assertions.

6. Verify the route string before opening a browser.
   Derive the canonical route from `docs.json`, the owning test, or the current page contract.
   Do not assume the public-clean route and the `/v2/...` route are interchangeable.

7. Prefer repo Puppeteer harnesses when the browser MCP is unhealthy.
   If the MCP fails before navigation or session creation, stop retrying it.
   Switch to repo-managed Puppeteer validation and record the MCP failure as infrastructure, not page, evidence.

8. Browser assertions must include failure detection, not only happy-path checks.
   Capture console errors, page errors, 404 text, render-error text, and missing content before checking page-specific assertions.

9. Teardown is mandatory.
   After validation, stop the managed server or run cleanup and verify the listener is gone.
   A browser validation task is not complete while agent-owned non-3333 listeners or orphaned browser roots remain.

10. After two failed browser-validation attempts, stop and redesign.
    Re-check scope, probe path, route form, and harness choice before trying again.

## Workflow

1. Inspect current state.
   - Run `node operations/scripts/integrators/governance/cleanup-local-dev-sessions.js --json`
   - If needed, apply cleanup before launching new validation.

2. Choose the smallest valid validation surface.
   - Prefer a scoped prefix or contracts-style scoped bundle over a full-repo Mint session.
   - Pick one explicit target route and one explicit probe path.

3. Launch with a governed server contract.
   - Use `.githooks/server-manager.js` or a repo wrapper that sets:
     - explicit `MINT_BASE_URL`
     - explicit `MINT_SCOPE_PREFIXES` when scoping
     - `allowCommonPorts: false`
     - `probePath: <target-route>`

4. Probe before browser actions.
   - Confirm the route responds correctly before opening the browser.
   - If the route fails, inspect server logs and scope projection before spending more time in browser automation.

5. Run browser assertions.
   - Capture console/page errors.
   - Confirm the page is not an error boundary or 404 shell.
   - Only then run page-specific content checks.

6. Tear down and verify.
   - Stop the managed server or apply cleanup.
   - Re-check listeners and process roots so no agent-owned browser or Mint session remains.

## Preferred Evidence

- Probe path and base URL used
- Exact launcher command or harness used
- Server log tail for route failures
- Console/page errors captured by the browser harness
- Post-cleanup proof that non-3333 listeners are gone

## Failure Modes / Fallback

- If the browser MCP cannot initialise, treat that as browser infrastructure failure and switch to repo Puppeteer tooling.
- If scoped Mint is up but the route is broken, debug the route or scoped projection instead of restarting the browser repeatedly.
- If cleanup leaves orphaned non-3333 sessions, run the cleanup automation again and inspect process groups, not only parent PIDs.

## Validation Checklist

- [ ] Validation used a repo-managed launcher or harness.
- [ ] Scope and port were explicit and agent-safe.
- [ ] A real probe path was checked before browser assertions.
- [ ] Ambient common-port reuse was disabled.
- [ ] Browser errors and route-level failures were captured explicitly.
- [ ] Teardown ran and non-3333 agent sessions were removed.
