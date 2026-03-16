# Project Showcase Application Workflow (n8n)

Workflow file:
- `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/snippets/automations/scripts/n8n/project-showcase-application-workflow.json`

This workflow handles:
- New project submission intake from Google Sheets
- Validation and transformation into showcase format
- Reviewer notification and approval/denial handling
- Media/logo commit + showcase data commit to GitHub
- Submitter/reviewer Discord notifications

## What was changed

1. Centralized configuration variables via set nodes:
- `Google Sheet Config VARS`
- `Github Config VARS`
- `Discord Config VARS`

2. Replaced hardcoded values with config references:
- Google Sheet IDs/URLs/sheet names
- GitHub owner/repo/branch/file paths
- Discord API base URL and reviewer user ID
- Approval form URL + response sheet URL in reviewer message buttons

3. Added workflow-level error handling:
- `Workflow Error Trigger`
- `Create DM To Reviewer (Error)`
- `Send Workflow Error Message`

4. Added trigger routing node to prevent cross-trigger execution:
- `Route Trigger Path`

5. Added section runbook details directly into sticky notes:
- Workflow steps by section
- Credentials required by section
- External config required by section

## Config variables

### Google Sheet Config VARS
- `googleSheetId`: Spreadsheet ID
- `projectApplicationSubmissionsSheetUrl`: URL for form response sheet tab
- `projectApplicationReviewResponsesSheetUrl`: URL for review response tab
- `transformedResponsesSheetName`: Sheet name used for transformed records
- `approvalFormBaseUrl`: Google Form URL used for approve/deny links

### Github Config VARS
- `githubOwner`: GitHub org/user
- `githubRepo`: GitHub repository
- `githubDataBranch`: branch for showcase data commits (`docs-v2-preview`)
- `githubAssetsBranch`: branch for media/logo commits (`docs-v2-assets`)
- `showcaseDataFilePath`: target `showcaseData.jsx` path
- `showcaseAssetsBasePath`: base path for media/logo asset commits

### Discord Config VARS
- `discordReviewerUserId`: reviewer DM target user ID
- `discordApiBaseUrl`: Discord API base URL (`https://discord.com/api/v10`)

## Error handling behavior

If any node fails during execution:
1. `Workflow Error Trigger` fires
2. Workflow creates a DM channel to reviewer
3. Workflow sends an error message with:
- Workflow name
- Last executed node
- Error message
- Execution URL (if available)

This gives immediate operational visibility without checking n8n manually.

## Operational notes

- Credentials are still managed in n8n credentials UI (not in config vars):
  - Google Sheets OAuth2
  - Google Drive OAuth2
  - GitHub API token
  - Discord Bot token
- Config set nodes are now executed before both trigger paths.
- `Route Trigger Path` sends:
  - Review events (`Approved?` present) -> approval flow
  - New submissions (no `Approved?`) -> validation/submission flow

## Suggested improvements (next)

1. Add a dedicated error log sink:
- Append structured errors to a `Workflow Errors` Google Sheet tab or Slack channel.

2. Add retry strategy on critical network nodes:
- GitHub commit nodes and Discord send nodes should have bounded retries with backoff.

3. Add idempotency guard:
- Prevent duplicate processing by keying on `submissionId` + execution timestamp.

4. Remove fragile string field dependencies:
- Normalize form field names in one mapping node to avoid breakage from label changes.

5. Add schema/version tag:
- Include a config variable like `workflowVersion` and inject into logs/messages for traceability.

6. Split into child workflows:
- Separate intake, approval, and publish steps with `Execute Workflow` for easier maintenance.

## Upgrade possibility: GitHub Actions equivalent

Added implementation:
- Workflow: `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/.github/workflows/project-showcase-sync.yml`
- Script: `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current/.github/scripts/project-showcase-sync.js`

What it supports:
- `schedule` polling mode (every 15 minutes)
- `workflow_dispatch` mode (`poll` or `dispatch`)
- `repository_dispatch` event (`showcase-review-submitted`) for webhook bridge setups (for example Google Apps Script)
- New-submission intake from Sheets (validate, transform, append transformed row, reviewer notify)
- Review decision processing (`approve`/`deny`) from Google Sheets
- Asset sync on approval (download source media/logo, commit to `docs-v2-assets`)
- Update of `showcaseData.jsx` in GitHub after approvals/denials
- Discord notifications to reviewer and submitter
- Error notification to reviewer DM

Required GitHub secrets:
- `SHOWCASE_GOOGLE_SERVICE_ACCOUNT_JSON`
- `SHOWCASE_DISCORD_BOT_TOKEN`

Required GitHub variables:
- `SHOWCASE_GOOGLE_SHEET_ID`
- `SHOWCASE_REVIEW_SHEET_NAME`
- `SHOWCASE_SUBMISSIONS_SHEET_NAME`
- `SHOWCASE_SUBMISSIONS_SHEET_URL`
- `SHOWCASE_TRANSFORMED_SHEET_NAME`
- `SHOWCASE_REVIEW_PROCESSED_COLUMN`
- `SHOWCASE_APPROVAL_FORM_BASE_URL`
- `SHOWCASE_GITHUB_OWNER`
- `SHOWCASE_GITHUB_REPO`
- `SHOWCASE_GITHUB_DATA_BRANCH`
- `SHOWCASE_GITHUB_ASSETS_BRANCH`
- `SHOWCASE_DATA_FILE_PATH`
- `SHOWCASE_ASSETS_BASE_PATH`
- `SHOWCASE_DISCORD_REVIEWER_USER_ID`
- `SHOWCASE_DISCORD_API_BASE_URL`
- `SHOWCASE_MAX_ROWS_PER_RUN`

Notes:
- This is the upgrade path for moving the full intake/review/publish pipeline from n8n into GitHub Actions.
