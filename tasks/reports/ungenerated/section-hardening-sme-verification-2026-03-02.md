# Section Hardening SME Verification

Date checked: 02-March-2026 (UTC)
Branch: `codex/merge-section-hardening-into-docs-v2`
Scope: Cloud SPE endpoint/auth, Studio `/api/beta/generate` status, `livepeercdn.studio` host status

## 1) Studio AI base path and auth

### Evidence
- Official docs page states the endpoint prefix is `/api/beta/generate`:
  - https://docs.livepeer.org/api-reference/generate/overview
- Live API checks:
  - `GET https://livepeer.studio/api/stream` returns `401` with `{"errors":["request is not authenticated"]}`
  - `POST https://livepeer.studio/api/beta/generate/text-to-image` without token returns `401` with `{"errors":["request is not authenticated"]}`

### Conclusion
- Studio-managed AI endpoint family remains under `https://livepeer.studio/api/beta/generate` as of check date.
- Bearer token auth remains required for Studio endpoints.

## 2) `livepeercdn.studio` host status

### Evidence
- Official Livepeer docs still show playback URLs under `https://livepeercdn.studio/hls/{playbackId}/index.m3u8`:
  - https://docs.livepeer.org/developers/guides/get-api-key
- Live host check:
  - `HEAD https://livepeercdn.studio/hls/placeholder/index.m3u8` returns `307` redirect to `https://playback.livepeer.studio/hls/placeholder/index.m3u8`

### Conclusion
- `livepeercdn.studio` is active and currently redirects to `playback.livepeer.studio` for HLS paths.

## 3) Cloud SPE direct AI endpoint/auth contract

### Evidence
- Cloud SPE tools settings page shows default gateway URL:
  - https://tools.livepeer.cloud/ai/settings
  - default displayed value: `https://dream-gateway.livepeer.cloud`
- Cloud SPE tools network activity during generation includes:
  - `POST https://dream-gateway.livepeer.cloud/text-to-image`
- Direct endpoint test:
  - unauthenticated `POST https://dream-gateway.livepeer.cloud/text-to-image` returned `200` with JSON image output payload.

### Conclusion
- As of check date, Cloud SPE tools default to `https://dream-gateway.livepeer.cloud` for AI generation and unauthenticated text-to-image requests succeed.
- Policy may change; keep tooling-page fallback guidance for current auth requirement.

## Content Action Taken

- Updated Cloud SPE provider page to remove mandatory bearer token from the default first-request example.
- Added dated note documenting current default endpoint and observed auth behavior.

