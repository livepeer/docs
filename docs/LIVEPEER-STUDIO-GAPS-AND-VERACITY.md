# Livepeer Studio v2 Pages: Gaps and Veracity Notes

This document records **missing gaps** and **veracity** considerations for the new Livepeer Studio section under **Platforms → Livepeer Studio**. Content was migrated from v1 and aligned with the [inventory and IA](LIVEPEER-STUDIO-V1-INVENTORY-AND-IA.md).

---

## Missing gaps

### 1. **Internal link paths**

- Studio pages use **relative** links (e.g. `[create-livestream](create-livestream)`) for same-section pages. The **overview** page uses **absolute** paths (e.g. `/products/livepeer-studio/quickstart`). Confirm with your Mintlify/base URL setup:
  - If the site is served under a version or locale (e.g. `/en/v2/...`), overview Card hrefs may need to be updated or use relative paths.
  - Same-section links should resolve as long as the sidebar and URL structure match the file paths.

### 2. **Legacy `livepeer-studio.mdx`**

- The old entry point `v2/pages/010_products/products/livepeer-studio/livepeer-studio.mdx` (title only) is **no longer in the nav**. The new entry point is **overview.mdx**. Options:
  - **Keep** `livepeer-studio.mdx` as a redirect to overview (if your stack supports redirects).
  - **Delete** it to avoid duplicate or dead entry points.
  - **Leave** it for now and remove once you confirm overview is the canonical entry.

### 3. **Images from v1**

- v1 guides referenced images under `/v1/images/` (e.g. OBS screenshots, webhooks UI, stream health). The new Studio pages **do not** include those image paths to avoid 404s in v2. Where visuals would help (e.g. OBS settings, dashboard Health tab), the text describes the steps. Consider:
  - Copying the relevant v1 images into a v2-appropriate path and re-adding them to [stream-via-obs](v2/pages/010_products/products/livepeer-studio/stream-via-obs.mdx), [stream-health](v2/pages/010_products/products/livepeer-studio/stream-health.mdx), and [access-control-webhooks](v2/pages/010_products/products/livepeer-studio/access-control-webhooks.mdx).

### 4. **Full API reference**

- The Studio section has an [API overview](v2/pages/010_products/products/livepeer-studio/api-overview.mdx) (auth + high-level). The **full API reference** (every endpoint for stream, asset, playback, webhook, etc.) still lives in v1 or on [livepeer.studio/docs](https://livepeer.studio/docs). Links from Studio pages point to **livepeer.studio/docs** for:
  - Exact endpoint paths and request/response shapes.
  - Transcode, viewership, signing-key, room, task, generate (AI) APIs.
- **Gap:** If you want the full API reference inside this docs repo, that would be a separate migration; for now, external links are used for accuracy and single source of truth.

### 5. **AI / Generate API**

- The IA listed an optional **AI / Generate** page. It was **not** created. Studio’s Generate API (`/api/beta/generate`) is documented on [livepeer.studio/docs](https://livepeer.studio/docs) and in v1. If you want a short “Studio AI” page under Platforms → Livepeer Studio, add it and link to the external API/docs.

### 6. **SDK deep dives**

- [sdks-overview](v2/pages/010_products/products/livepeer-studio/sdks-overview.mdx) links to npm/PyPI/Go and [Livepeer Studio docs](https://livepeer.studio/docs). **No** in-repo SDK reference (e.g. per-method docs for livepeer-js) was added. That remains on the external docs or in v1.

### 7. **Code examples (TypeT, signAccessJwt)**

- Some v1 examples used `TypeT.Webhook`, `TypeT.Jwt` from `livepeer/dist/models/components` and `signAccessJwt` from `@livepeer/core/crypto`. The new pages use generic descriptions (e.g. “type: webhook”, “sign a JWT”) to avoid tying the docs to a specific SDK version. **Veracity:** Confirm with current [livepeer](https://www.npmjs.com/package/livepeer) and [@livepeer/react](https://www.npmjs.com/package/@livepeer/react) / [@livepeer/core](https://www.npmjs.com/package/@livepeer/core) that:
  - Playback policy types and signing flow are still as described.
  - Package and export names (e.g. `signAccessJwt`) are still correct.

### 8. **Thumbnails date**

- [thumbnails-vod](v2/pages/010_products/products/livepeer-studio/thumbnails-vod.mdx) states that assets uploaded “after November 21, 2023” have thumbnails. **Veracity:** Confirm this date and behavior with the current product (e.g. whether all new assets get thumbnails by default).

### 9. **Project deletion**

- [managing-projects](v2/pages/010_products/products/livepeer-studio/managing-projects.mdx) states that project deletion is not currently supported. **Veracity:** Confirm with current Studio; if deletion is added, update the doc.

### 10. **Clip max length**

- [clip-livestream](v2/pages/010_products/products/livepeer-studio/clip-livestream.mdx) and playback-livestream embed section mention a **max clip length of 120 seconds**. **Veracity:** Confirm with the current [Create Clip API](https://livepeer.studio/docs/api-reference/stream/create-clip) that this limit is still in effect.

---

## Veracity summary

- **Source:** All new pages are based on v1 content and the [inventory](LIVEPEER-STUDIO-V1-INVENTORY-AND-IA.md). No information was invented; wording was shortened and adapted for v2.
- **External links:** Where behavior or API shape might change, links to [livepeer.studio](https://livepeer.studio) and [livepeer.studio/docs](https://livepeer.studio/docs) are used so users get the latest product and API details.
- **Recommendations:**
  - Periodically confirm: CORS key deprecation, API key auth, webhook signature scheme, JWT/signing key flow, and embed URLs (`lvpr.tv`) with the Livepeer Studio team or official docs.
  - After any Studio product or API change, run a quick pass over the Studio section (especially quickstart, playback, access control, webhooks, and API overview) and update or add links to the official docs as needed.
