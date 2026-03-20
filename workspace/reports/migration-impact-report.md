# Migration Impact Report

Generated: 2026-03-08T01:36:54.234Z
Source: tasks/reports/component-governance-audit.md

## Risk Summary

| Risk level | File count | Total import rewrites (estimated) |
|-----------|-----------|----------------------------------|
| HIGH (50+ import rewrites) | 14 | 1386 |
| MEDIUM (10-49 rewrites) | 7 | 202 |
| LOW (&lt;10 rewrites) | 0 | 0 |

## Per-File Impact (ordered by total import rewrite count, highest first)

### snippets/components/display/video.jsx -> snippets/components/content/video.jsx + snippets/components/data/video.jsx

**Action:** SPLIT
**Exports affected:** `TitledVideo`, `ShowcaseVideo`, `Video`, `YouTubeVideo`, `YouTubeVideoData`, `LinkedInEmbed`, `YouTubeVideoDownload`, `CardVideo`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/video-examples.mdx | `import { YouTubeVideo, CardVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo, CardVideo } from "/snippets/components/content/video.jsx";` |
| snippets/pages/00_HOME/project-showcase.mdx | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/display/video.jsx'` | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/community/community-portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/community/livepeer-community/livepeer-latest-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/cn/community/livepeer-community/trending-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/cn/gateways/run-a-gateway/install/community-projects.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/home/about-livepeer/benefits.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/home/about-livepeer/evolution.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/home/about-livepeer/vision.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/home/primer.mdx | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo, } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/home/solutions/showcase.mdx | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/display/video.jsx'` | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoData, YouTubeVideoDownload } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoDownload } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/cn/resources/documentation-guide/snippets-inventory.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/cn/solutions/daydream/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/solutions/embody/overview.mdx | `import { Video } from '/snippets/components/display/video.jsx'` | `import { Video } from '/snippets/components/content/video.jsx'` |
| v2/cn/solutions/frameworks/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/cn/solutions/portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/community/community-portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/community/livepeer-community/trending-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/es/community/community-portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/community/livepeer-community/livepeer-latest-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/es/community/livepeer-community/trending-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/es/gateways/run-a-gateway/install/community-projects.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/home/about-livepeer/benefits.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/home/about-livepeer/evolution.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/home/about-livepeer/vision.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/home/primer.mdx | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo, } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/home/solutions/showcase.mdx | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/display/video.jsx'` | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoData, YouTubeVideoDownload } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoDownload } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/es/resources/documentation-guide/snippets-inventory.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/es/solutions/daydream/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/solutions/embody/overview.mdx | `import { Video } from '/snippets/components/display/video.jsx'` | `import { Video } from '/snippets/components/content/video.jsx'` |
| v2/es/solutions/frameworks/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/es/solutions/portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/community/community-portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/community/livepeer-community/livepeer-latest-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/fr/community/livepeer-community/trending-topics.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/fr/gateways/run-a-gateway/install/community-projects.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/home/about-livepeer/benefits.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/home/about-livepeer/evolution.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/home/about-livepeer/vision.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/home/primer.mdx | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo, } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/home/solutions/showcase.mdx | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/display/video.jsx'` | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoData, YouTubeVideoDownload } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoDownload } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/fr/resources/documentation-guide/snippets-inventory.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/fr/solutions/daydream/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/solutions/embody/overview.mdx | `import { Video } from '/snippets/components/display/video.jsx'` | `import { Video } from '/snippets/components/content/video.jsx'` |
| v2/fr/solutions/frameworks/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/fr/solutions/portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/gateways/run-a-gateway/install/community-projects.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/about-livepeer/benefits.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/about-livepeer/evolution.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/about-livepeer/vision.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/primer.mdx | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo, } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, YouTubeVideoDownload, CardVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/solutions/showcase.mdx | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/display/video.jsx'` | `import { TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'` |
| v2/home/trending.mdx | `import { YouTubeVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/internal/rfp/aims.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo, YouTubeVideoData } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, CardVideo, LinkedInEmbed, TitledVideo, ShowcaseVideo } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoData, YouTubeVideoDownload } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo, Video, TitledVideo, ShowcaseVideo, CardVideo, LinkedInEmbed, YouTubeVideoDownload } from '/snippets/components/content/video.jsx'`<br />`import { YouTubeVideoData } from '/snippets/components/data/video.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CardVideo } from "/snippets/components/display/video.jsx";` | `import { CardVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { LinkedInEmbed } from "/snippets/components/display/video.jsx";` | `import { LinkedInEmbed } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseVideo } from "/snippets/components/display/video.jsx";` | `import { ShowcaseVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { TitledVideo } from "/snippets/components/display/video.jsx";` | `import { TitledVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Video } from "/snippets/components/display/video.jsx";` | `import { Video } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoData } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoData } from "/snippets/components/data/video.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { YouTubeVideoDownload } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideoDownload } from "/snippets/components/content/video.jsx";` |
| v2/resources/documentation-guide/snippets-inventory.mdx | `import { YouTubeVideo } from "/snippets/components/display/video.jsx";` | `import { YouTubeVideo } from "/snippets/components/content/video.jsx";` |
| v2/solutions/daydream/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/solutions/daydream/overview1.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/solutions/embody/overview.mdx | `import { Video } from '/snippets/components/display/video.jsx'` | `import { Video } from '/snippets/components/content/video.jsx'` |
| v2/solutions/frameworks/overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/solutions/portal.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |
| v2/x-experimental/copy-trending-at-livepeer.mdx | `import { YouTubeVideo } from '/snippets/components/display/video.jsx'` | `import { YouTubeVideo } from '/snippets/components/content/video.jsx'` |

**Total rewrites:** 210
**Import sites:** 194
**Locale breakdown:** en: 40, es: 55, fr: 55, cn: 55, other: 5

**Split details:**
- Exports staying in this file: —
- Exports moving to `/snippets/components/content/video.jsx`: `CardVideo`, `LinkedInEmbed`, `ShowcaseVideo`, `TitledVideo`, `Video`, `YouTubeVideo`, `YouTubeVideoDownload`
- Exports moving to `/snippets/components/data/video.jsx`: `YouTubeVideoData`
- Pages that import BOTH staying and moving exports: `v2/cn/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/cn/community/livepeer-community/trending-topics.mdx`, `v2/cn/resources/documentation-guide/component-library/component-library.mdx`, `v2/cn/resources/documentation-guide/component-library/display.mdx`, `v2/community/livepeer-community/trending-topics.mdx`, `v2/es/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/es/community/livepeer-community/trending-topics.mdx`, `v2/es/resources/documentation-guide/component-library/component-library.mdx`, `v2/es/resources/documentation-guide/component-library/display.mdx`, `v2/fr/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/fr/community/livepeer-community/trending-topics.mdx`, `v2/fr/resources/documentation-guide/component-library/component-library.mdx`, `v2/fr/resources/documentation-guide/component-library/display.mdx`, `v2/home/trending.mdx`, `v2/resources/documentation-guide/component-library/component-library.mdx`, `v2/resources/documentation-guide/component-library/display.mdx`

### snippets/components/display/frameMode.jsx -> snippets/components/page-structure/frameMode.jsx

**Action:** MOVE
**Exports affected:** `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Divider`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/frameMode-examples.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| snippets/snippetsWiki/componentLibrary/examples/frame-mode.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6 } from '/snippets/components/display/frameMode.jsx';` | `import { PageHeader, H1, H2, H3, H4, H5, H6 } from '/snippets/components/page-structure/frameMode.jsx';` |
| snippets/snippetsWiki/componentLibrary/examples/frame-mode.mdx | `import { PageHeader, H1, H2, H3 } from '/snippets/components/display/frameMode.jsx';` | `import { PageHeader, H1, H2, H3 } from '/snippets/components/page-structure/frameMode.jsx';` |
| snippets/snippetsWiki/componentLibrary/examples/frame-mode.mdx | `import { PageHeader } from '/snippets/components/display/frameMode.jsx';` | `import { PageHeader } from '/snippets/components/page-structure/frameMode.jsx';` |
| snippets/snippetsWiki/theme-colors.mdx | `import { PageHeader, H1, H2, H3 } from '/snippets/components/display/frameMode.jsx';` | `import { PageHeader, H1, H2, H3 } from '/snippets/components/page-structure/frameMode.jsx';` |
| v2/about/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/about/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/community/community-portal.mdx | `import { H1, H2, H3, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H3, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/developers/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/gateways/gateways-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/home/mission-control.mdx | `import { H1, H2, P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/lpt/token-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/orchestrators/orchestrators-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/display/frameMode.jsx'` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/resources/documentation-guide/style-guide.mdx | `import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/cn/solutions/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/community/community-portal.mdx | `import { H1, H2, H3, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H3, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/developers/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/about/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/community/community-portal.mdx | `import { H1, H2, H3, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H3, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/developers/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/gateways/gateways-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/home/mission-control.mdx | `import { H1, H2, P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/lpt/token-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/orchestrators/orchestrators-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/display/frameMode.jsx'` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/resources/documentation-guide/style-guide.mdx | `import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/es/solutions/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/about/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/community/community-portal.mdx | `import { H1, H2, H3, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H3, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/developers/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/gateways/gateways-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/home/mission-control.mdx | `import { H1, H2, P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/lpt/token-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/orchestrators/orchestrators-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/display/frameMode.jsx'` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/resources/documentation-guide/style-guide.mdx | `import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/fr/solutions/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/gateways/gateways-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/home/mission-control.mdx | `import { H1, H2, P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/orchestrators/orchestrators-portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/display/frameMode.jsx'` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from '/snippets/components/page-structure/frameMode.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, H3, H4, H5, H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Divider } from "/snippets/components/display/frameMode.jsx";` | `import { Divider } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H1 } from "/snippets/components/display/frameMode.jsx";` | `import { H1 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H2 } from "/snippets/components/display/frameMode.jsx";` | `import { H2 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H3 } from "/snippets/components/display/frameMode.jsx";` | `import { H3 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H4 } from "/snippets/components/display/frameMode.jsx";` | `import { H4 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H5 } from "/snippets/components/display/frameMode.jsx";` | `import { H5 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { H6 } from "/snippets/components/display/frameMode.jsx";` | `import { H6 } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { P } from "/snippets/components/display/frameMode.jsx";` | `import { P } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/resources/documentation-guide/style-guide.mdx | `import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";` | `import { H1, H2, PageHeader } from "/snippets/components/page-structure/frameMode.jsx";` |
| v2/solutions/portal.mdx | `import { H1, H2, H5,P } from '/snippets/components/display/frameMode.jsx'` | `import { H1, H2, H5, P } from '/snippets/components/page-structure/frameMode.jsx'` |

**Total rewrites:** 154
**Import sites:** 154
**Locale breakdown:** en: 23, es: 42, fr: 42, cn: 42, other: 5

### snippets/components/content/data.jsx -> snippets/components/data/data.jsx

**Action:** MOVE
**Exports affected:** `BlogCard`, `CardBlogDataLayout`, `ColumnsBlogCardLayout`, `BlogDataLayout`, `PostCard`, `CardColumnsPostLayout`, `CardInCardLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/layout/examples/cards-examples.mdx | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/community/livepeer-community/livepeer-latest-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/cn/community/livepeer-community/trending-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/cn/community/livepeer-connect/events-and-community-streams.mdx | `import { LumaEvents } from '/snippets/components/content/data.jsx';` | `import { LumaEvents } from '/snippets/components/data/data.jsx';` |
| v2/cn/docs-guide/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/content/data.jsx'` | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/data/data.jsx'` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/content/data.jsx'` | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/data/data.jsx'` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/community/livepeer-community/livepeer-latest-topics.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/community/livepeer-community/trending-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/community/livepeer-connect/events-and-community-streams.mdx | `import { LumaEvents } from '/snippets/components/content/data.jsx';` | `import { LumaEvents } from '/snippets/components/data/data.jsx';` |
| v2/es/community/livepeer-community/livepeer-latest-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/es/community/livepeer-community/trending-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/es/community/livepeer-connect/events-and-community-streams.mdx | `import { LumaEvents } from '/snippets/components/content/data.jsx';` | `import { LumaEvents } from '/snippets/components/data/data.jsx';` |
| v2/es/docs-guide/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/content/data.jsx'` | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/data/data.jsx'` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/content/data.jsx'` | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/data/data.jsx'` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/community/livepeer-community/livepeer-latest-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/fr/community/livepeer-community/trending-topics.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/fr/community/livepeer-connect/events-and-community-streams.mdx | `import { LumaEvents } from '/snippets/components/content/data.jsx';` | `import { LumaEvents } from '/snippets/components/data/data.jsx';` |
| v2/fr/docs-guide/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/content/data.jsx'` | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/data/data.jsx'` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/content/data.jsx'` | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/data/data.jsx'` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/home/trending.mdx | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements, } from '/snippets/components/content/data.jsx'` | `import { PostCard, BlogCard, CardBlogDataLayout, CardColumnsPostLayout, ColumnsBlogCardLayout, ForumLatestLayout, DiscordAnnouncements } from '/snippets/components/data/data.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/content/data.jsx'` | `import { PostCard, CardColumnsPostLayout, BlogCard, CardBlogDataLayout } from '/snippets/components/data/data.jsx'` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/content/data.jsx'` | `import { BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout, CardColumnsPostLayout, ForumLatestLayout, DiscordAnnouncements, LumaEvents } from '/snippets/components/data/data.jsx'` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { BlogCard } from "/snippets/components/content/data.jsx";` | `import { BlogCard } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { BlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { BlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CardBlogDataLayout } from "/snippets/components/content/data.jsx";` | `import { CardBlogDataLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CardColumnsPostLayout } from "/snippets/components/content/data.jsx";` | `import { CardColumnsPostLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CardInCardLayout } from "/snippets/components/content/data.jsx";` | `import { CardInCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ColumnsBlogCardLayout } from "/snippets/components/content/data.jsx";` | `import { ColumnsBlogCardLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { DiscordAnnouncements } from "/snippets/components/content/data.jsx";` | `import { DiscordAnnouncements } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ForumLatestLayout } from "/snippets/components/content/data.jsx";` | `import { ForumLatestLayout } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { LumaEvents } from "/snippets/components/content/data.jsx";` | `import { LumaEvents } from "/snippets/components/data/data.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PostCard } from "/snippets/components/content/data.jsx";` | `import { PostCard } from "/snippets/components/data/data.jsx";` |
| v2/x-experimental/trending-layout-tests.mdx | `import { PostCard, CardColumnsPostLayout } from '/snippets/components/content/data.jsx'` | `import { PostCard, CardColumnsPostLayout } from '/snippets/components/data/data.jsx'` |

**Total rewrites:** 151
**Import sites:** 151
**Locale breakdown:** en: 23, es: 42, fr: 42, cn: 42, other: 2

**Merge-sensitive exports:** `BlogDataLayout`, `CardBlogDataLayout`
**Merge-sensitive importers:** `snippets/components/layout/examples/cards-examples.mdx`, `v2/cn/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/cn/community/livepeer-community/trending-topics.mdx`, `v2/cn/docs-guide/components-index.mdx`, `v2/cn/docs-guide/indexes/components-index.mdx`, `v2/cn/resources/documentation-guide/component-library/component-library.mdx`, `v2/cn/resources/documentation-guide/component-library/content.mdx`, `v2/cn/resources/documentation-guide/component-library/overview.mdx`, `v2/community/livepeer-community/trending-topics.mdx`, `v2/es/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/es/community/livepeer-community/trending-topics.mdx`, `v2/es/docs-guide/components-index.mdx`, `v2/es/docs-guide/indexes/components-index.mdx`, `v2/es/resources/documentation-guide/component-library/component-library.mdx`, `v2/es/resources/documentation-guide/component-library/content.mdx`, `v2/es/resources/documentation-guide/component-library/overview.mdx`, `v2/fr/community/livepeer-community/livepeer-latest-topics.mdx`, `v2/fr/community/livepeer-community/trending-topics.mdx`, `v2/fr/docs-guide/components-index.mdx`, `v2/fr/docs-guide/indexes/components-index.mdx`, `v2/fr/resources/documentation-guide/component-library/component-library.mdx`, `v2/fr/resources/documentation-guide/component-library/content.mdx`, `v2/fr/resources/documentation-guide/component-library/overview.mdx`, `v2/home/trending.mdx`, `v2/resources/documentation-guide/component-library/component-library.mdx`, `v2/resources/documentation-guide/component-library/content.mdx`, `v2/resources/documentation-guide/component-library/overview.mdx`
**Notes:** Symbol names may need consolidation in Phase 2b even when the file-path rewrite is straightforward.

### snippets/components/domain/SHARED/Portals.jsx -> snippets/components/page-structure/portals.jsx

**Action:** MOVE
**Exports affected:** `HeroSectionContainer`, `HeroImageBackgroundComponent`, `HeroContentContainer`, `HeroOverviewContent`, `PortalContentContainer`, `PortalHeroContent`, `PortalCardsHeader`, `PortalSectionHeader`, `LogoHeroContainer`, `RefCardContainer`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/domain/examples/Portals-examples.mdx | `import { HeroSectionContainer, HeroContentContainer, PortalHeroContent, PortalContentContainer, LogoHeroContainer, HeroOverviewContent, } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer, HeroContentContainer, PortalHeroContent, PortalContentContainer, LogoHeroContainer, HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| snippets/components/domain/examples/Portals-examples.mdx | `import { HeroSectionContainer, HeroContentContainer, PortalHeroContent, PortalContentContainer, LogoHeroContainer, } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer, HeroContentContainer, PortalHeroContent, PortalContentContainer, LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/about/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/about/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/community/community-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/developers/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/gateways/gateways-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/home/mission-control.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/lpt/token-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/orchestrators/orchestrators-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/cn/solutions/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/community/community-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/page-structure/portals.jsx'` |
| v2/developers/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/about/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/community/community-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/developers/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/gateways/gateways-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/home/mission-control.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/lpt/token-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/orchestrators/orchestrators-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/es/solutions/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/about/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/community/community-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/developers/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/gateways/gateways-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/home/mission-control.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/lpt/token-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/orchestrators/orchestrators-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/fr/solutions/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/gateways/gateways-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/home/mission-control.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/lpt/token-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer, PortalSectionHeader } from '/snippets/components/page-structure/portals.jsx'` |
| v2/orchestrators/orchestrators-portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { HeroContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { HeroImageBackgroundComponent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroImageBackgroundComponent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { HeroOverviewContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroOverviewContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { HeroSectionContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { HeroSectionContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { LogoHeroContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { LogoHeroContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PortalCardsHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalCardsHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PortalContentContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalContentContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PortalHeroContent } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalHeroContent } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PortalSectionHeader } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { PortalSectionHeader } from "/snippets/components/page-structure/portals.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { RefCardContainer } from "/snippets/components/domain/SHARED/Portals.jsx";` | `import { RefCardContainer } from "/snippets/components/page-structure/portals.jsx";` |
| v2/solutions/portal.mdx | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/domain/SHARED/Portals.jsx'` | `import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, HeroContentContainer, HeroSectionContainer, PortalCardsHeader, PortalContentContainer } from '/snippets/components/page-structure/portals.jsx'` |

**Total rewrites:** 134
**Import sites:** 134
**Locale breakdown:** en: 18, es: 38, fr: 38, cn: 38, other: 2

### snippets/components/domain/SHARED/previewCallouts.jsx -> snippets/components/primitives/previewCallouts.jsx

**Action:** MOVE
**Exports affected:** `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/domain/examples/previewCallouts-examples.mdx | `import { ComingSoonCallout, PreviewCallout, ReviewCallout, } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/orchestrators/about-orchestrators/architecture.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/about-orchestrators/economics.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/about-orchestrators/orchestrator-functions.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/about-orchestrators/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/orchestrator-tools-and-resources/community-pools.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/quickstart/orchestrator-setup.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/quickstart/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/orchestrators/references/cli-flags.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/changelog/changelog.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/changelog/migration-guide.mdx | `import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/cn/resources/documentation-guide/style-guide.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/livepeer-glossary.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/cn/resources/resources-portal.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/developers/ai-inference-on-livepeer/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/developers/ai-inference-on-livepeer/workload-fit.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/developers/quickstart/video/video-streaming-101.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/orchestrators/about-orchestrators/architecture.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/about-orchestrators/economics.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/about-orchestrators/orchestrator-functions.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/about-orchestrators/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/orchestrator-tools-and-resources/community-pools.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/quickstart/orchestrator-setup.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/quickstart/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/orchestrators/references/cli-flags.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/changelog/changelog.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/changelog/migration-guide.mdx | `import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/es/resources/documentation-guide/style-guide.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/livepeer-glossary.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/es/resources/resources-portal.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/orchestrators/about-orchestrators/architecture.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/about-orchestrators/economics.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/about-orchestrators/orchestrator-functions.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/about-orchestrators/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/orchestrator-tools-and-resources/community-pools.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/quickstart/orchestrator-setup.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/quickstart/overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/orchestrators/references/cli-flags.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/changelog/changelog.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/changelog/migration-guide.mdx | `import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/fr/resources/documentation-guide/style-guide.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/livepeer-glossary.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/fr/resources/resources-portal.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/gateways/_contextData_/docker-install-implementation.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/orchestrators/_context_data_/orchestrators-gateways-implementation-plan.mdx | `import { ComingSoonCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/orchestrators/setting-up-an-orchestrator/publish-offerings.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/resources/changelog/migration-guide.mdx | `import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/resources/concepts/brief-history-of-video.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout, PreviewCallout, ReviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout, ComingSoonCallout, ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ComingSoonCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ComingSoonCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { PreviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { PreviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ReviewCallout } from "/snippets/components/domain/SHARED/previewCallouts.jsx";` | `import { ReviewCallout } from "/snippets/components/primitives/previewCallouts.jsx";` |
| v2/resources/references/contract-addresses.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/about-livepeer/moved/livepeer-ecosystem.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/about-livepeer/moved/livepeer-evolution.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/about-livepeer/moved/why-livepeer.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/unmatched/04_gateways/_tests-to-delete/why.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/unmatched/04_gateways/run-a-gateway/quickstart/get-AI-to-setup-the-gateway.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/unmatched/09_internal/definitions.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/unmatched/09_internal/ecosystem.mdx | `import {ComingSoonCallout} from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { ComingSoonCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-deprecated/unmatched/09_internal/references.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-experimental/copy-trending-at-livepeer.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |
| v2/x-experimental/trending-layout-tests.mdx | `import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'` | `import { PreviewCallout } from '/snippets/components/primitives/previewCallouts.jsx'` |

**Total rewrites:** 99
**Import sites:** 99
**Locale breakdown:** en: 15, es: 24, fr: 24, cn: 24, other: 12

### snippets/components/primitives/containers.jsx -> snippets/components/layout/containers.jsx

**Action:** MOVE
**Exports affected:** `BorderedBox`, `CenteredContainer`, `FullWidthContainer`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/developers/builder-opportunities/bug-bounties.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/developers/builder-opportunities/grants-and-programmes.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/developers/builder-opportunities/oss-contributions.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/developers/builder-opportunities/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/gateways/run-a-gateway/requirements/setup.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/layout/containers.jsx'` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/community/livepeer-community/community-guidelines.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/ai-inference-on-livepeer/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/ai-inference-on-livepeer/workload-fit.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/ai-pipelines/byoc.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/ai-pipelines/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/ai-pipelines/workload-fit.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/builder-opportunities/bug-bounties.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/builder-opportunities/grants-and-programmes.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/builder-opportunities/oss-contributions.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/builder-opportunities/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/builder-opportunities/rfps-and-proposals.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/developer-path.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/developers/quickstart/video/video-streaming-101.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/developers/builder-opportunities/bug-bounties.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/developers/builder-opportunities/grants-and-programmes.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/developers/builder-opportunities/oss-contributions.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/developers/builder-opportunities/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/developers/builder-opportunities/rfps-and-proposals.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/gateways/run-a-gateway/requirements/setup.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/layout/containers.jsx'` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/developers/builder-opportunities/bug-bounties.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/developers/builder-opportunities/grants-and-programmes.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/developers/builder-opportunities/oss-contributions.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/developers/builder-opportunities/overview.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/gateways/run-a-gateway/requirements/setup.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/layout/containers.jsx'` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/run-a-gateway/requirements/setup.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/using-gateways/choosing-a-gateway.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/lpt/delegation/getting-started.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/orchestrators/advanced-setup/hosting-models.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/orchestrators/earnings.mdx | `import { BorderedBox } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox } from '/snippets/components/layout/containers.jsx'` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/primitives/containers.jsx'` | `import { BorderedBox, CenteredContainer, FullWidthContainer } from '/snippets/components/layout/containers.jsx'` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { BorderedBox } from "/snippets/components/primitives/containers.jsx";` | `import { BorderedBox } from "/snippets/components/layout/containers.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { CenteredContainer } from "/snippets/components/primitives/containers.jsx";` | `import { CenteredContainer } from "/snippets/components/layout/containers.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { FullWidthContainer } from "/snippets/components/primitives/containers.jsx";` | `import { FullWidthContainer } from "/snippets/components/layout/containers.jsx";` |

**Total rewrites:** 91
**Import sites:** 91
**Locale breakdown:** en: 31, es: 20, fr: 20, cn: 20, other: 0

### snippets/components/display/quote.jsx -> snippets/components/content/quote.jsx

**Action:** MOVE
**Exports affected:** `Quote`, `FrameQuote`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/quote-examples.mdx | `import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/about/livepeer-protocol/core-mechanisms.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/about/livepeer-protocol/governance-model.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/about/livepeer-protocol/livepeer-token.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/about/livepeer-protocol/overview.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/about/livepeer-protocol/technical-architecture.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/about/livepeer-protocol/treasury.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/core-mechanisms.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/governance-model.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/livepeer-token.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/overview.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/technical-architecture.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/about/livepeer-protocol/treasury.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/home/about-livepeer/benefits.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/cn/home/about-livepeer/ecosystem.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/home/about-livepeer/vision.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/orchestrators/quickstart/join-a-pool.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/cn/resources/documentation-guide/style-guide.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/es/about/livepeer-protocol/core-mechanisms.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/about/livepeer-protocol/governance-model.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/es/about/livepeer-protocol/livepeer-token.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/es/about/livepeer-protocol/overview.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/about/livepeer-protocol/technical-architecture.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/es/about/livepeer-protocol/treasury.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/es/home/about-livepeer/benefits.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/es/home/about-livepeer/ecosystem.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/home/about-livepeer/vision.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/orchestrators/quickstart/join-a-pool.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/es/resources/documentation-guide/style-guide.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/fr/about/livepeer-protocol/core-mechanisms.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/about/livepeer-protocol/governance-model.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/about/livepeer-protocol/livepeer-token.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/about/livepeer-protocol/overview.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/about/livepeer-protocol/technical-architecture.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/about/livepeer-protocol/treasury.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/home/about-livepeer/benefits.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/fr/home/about-livepeer/ecosystem.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/home/about-livepeer/vision.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/orchestrators/quickstart/join-a-pool.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/fr/resources/documentation-guide/style-guide.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/home/about-livepeer/benefits.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |
| v2/home/about-livepeer/ecosystem.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/home/about-livepeer/vision.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/internal/overview/docs-philosophy.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/internal/rfp/aims.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/internal/rfp/report.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/orchestrators/quickstart/join-a-pool.mdx | `import { Quote } from '/snippets/components/display/quote.jsx'` | `import { Quote } from '/snippets/components/content/quote.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Quote, FrameQuote } from '/snippets/components/display/quote.jsx'` | `import { Quote, FrameQuote } from '/snippets/components/content/quote.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { FrameQuote } from "/snippets/components/display/quote.jsx";` | `import { FrameQuote } from "/snippets/components/content/quote.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Quote } from "/snippets/components/display/quote.jsx";` | `import { Quote } from "/snippets/components/content/quote.jsx";` |
| v2/resources/documentation-guide/style-guide.mdx | `import { FrameQuote } from '/snippets/components/display/quote.jsx';` | `import { FrameQuote } from '/snippets/components/content/quote.jsx';` |

**Total rewrites:** 88
**Import sites:** 88
**Locale breakdown:** en: 18, es: 22, fr: 22, cn: 22, other: 4

### snippets/components/display/customCards.jsx -> snippets/components/primitives/customCards.jsx + snippets/components/layout/customCards.jsx

**Action:** SPLIT
**Exports affected:** `DisplayCard`, `CustomCardTitle`, `WidthCard`, `InlineImageCard`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/developers/builder-opportunities/bug-bounties.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/developers/builder-opportunities/grants-and-programmes.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/developers/builder-opportunities/oss-contributions.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/developers/builder-opportunities/overview.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/cn/home/about-livepeer/benefits.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/cn/home/about-livepeer/benefits.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/home/about-livepeer/roadmap.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/home/about-livepeer/vision.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/home/get-started.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/home/primer.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/cn/home/solutions/applications.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/community/livepeer-community/community-guidelines.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/developers/builder-opportunities/bug-bounties.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/developers/builder-opportunities/grants-and-programmes.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/developers/builder-opportunities/oss-contributions.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/developers/builder-opportunities/overview.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/developers/builder-opportunities/rfps-and-proposals.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/developers/builder-opportunities/bug-bounties.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/developers/builder-opportunities/grants-and-programmes.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/developers/builder-opportunities/oss-contributions.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/developers/builder-opportunities/overview.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/developers/builder-opportunities/rfps-and-proposals.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/es/home/about-livepeer/benefits.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/es/home/about-livepeer/benefits.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/home/about-livepeer/roadmap.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/home/about-livepeer/vision.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/home/get-started.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/home/primer.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/es/home/solutions/applications.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/developers/builder-opportunities/bug-bounties.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/developers/builder-opportunities/grants-and-programmes.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/developers/builder-opportunities/oss-contributions.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/developers/builder-opportunities/overview.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/home/about-livepeer/benefits.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/fr/home/about-livepeer/benefits.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/home/about-livepeer/roadmap.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/home/about-livepeer/vision.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/home/get-started.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/home/primer.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/fr/home/solutions/applications.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/gateways/quickstart/gateway-setup.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx';` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx';` |
| v2/home/about-livepeer/benefits.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/home/about-livepeer/benefits.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/home/about-livepeer/roadmap.mdx | `import { WidthCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/home/about-livepeer/vision.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/home/get-started.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/home/primer.mdx | `import { CustomCardTitle } from '/snippets/components/display/customCards.jsx'` | `import { CustomCardTitle } from '/snippets/components/primitives/customCards.jsx'` |
| v2/home/solutions/applications.mdx | `import { DisplayCard } from '/snippets/components/display/customCards.jsx'` | `import { DisplayCard } from '/snippets/components/layout/customCards.jsx'` |
| v2/internal/overview/docs-philosophy.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/internal/rfp/problem-statements.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx"` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx"` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CustomCardTitle } from "/snippets/components/display/customCards.jsx";` | `import { CustomCardTitle } from "/snippets/components/primitives/customCards.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { DisplayCard } from "/snippets/components/display/customCards.jsx";` | `import { DisplayCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { InlineImageCard } from "/snippets/components/display/customCards.jsx";` | `import { InlineImageCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { WidthCard } from "/snippets/components/display/customCards.jsx";` | `import { WidthCard } from "/snippets/components/layout/customCards.jsx";` |
| v2/resources/media-kit.mdx | `import { WidthCard, InlineImageCard } from '/snippets/components/display/customCards.jsx'` | `import { WidthCard, InlineImageCard } from '/snippets/components/layout/customCards.jsx'` |

**Total rewrites:** 84
**Import sites:** 84
**Locale breakdown:** en: 19, es: 21, fr: 21, cn: 21, other: 2

**Split details:**
- Exports staying in this file: —
- Exports moving to `/snippets/components/primitives/customCards.jsx`: `CustomCardTitle`
- Exports moving to `/snippets/components/layout/customCards.jsx`: `DisplayCard`, `InlineImageCard`, `WidthCard`
- Pages that import BOTH staying and moving exports: —

### snippets/components/display/zoomable-diagram.jsx -> snippets/components/content/zoomableDiagram.jsx

**Action:** MOVE
**Exports affected:** `ScrollableDiagram`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/zoomable-diagram-examples.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/about/livepeer-protocol/livepeer-token.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/about/livepeer-protocol/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/about/livepeer-protocol/livepeer-token.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/about/livepeer-protocol/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/cn/gateways/about-gateways/gateway-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/about/architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/references/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/connect/connect-with-offerings.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/connect/lp-marketplace.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/gateways/run-a-gateway/run-a-gateway.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/es/about/livepeer-protocol/livepeer-token.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/about/livepeer-protocol/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/es/gateways/about-gateways/gateway-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/about/architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/references/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/configure/video-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/connect/connect-with-offerings.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/connect/lp-marketplace.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/gateways/run-a-gateway/run-a-gateway.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/fr/about/livepeer-protocol/livepeer-token.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/about/livepeer-protocol/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/fr/gateways/about-gateways/gateway-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/about/architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/references/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/connect/connect-with-offerings.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/connect/lp-marketplace.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/gateways/run-a-gateway/run-a-gateway.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/gateways/about/architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/references/technical-architecture.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/configure/video-configuration-view.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/configure/video-configuration.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/connect/lp-marketplace.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/gateways/run-a-gateway/run-a-gateway.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from '/snippets/components/display/zoomable-diagram.jsx'` | `import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";` | `import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";` |

**Total rewrites:** 72
**Import sites:** 72
**Locale breakdown:** en: 17, es: 18, fr: 18, cn: 18, other: 1

### snippets/components/display/image.jsx -> snippets/components/primitives/image.jsx

**Action:** MOVE
**Exports affected:** `Image`, `LinkImage`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/image-examples.mdx | `import { Image, LinkImage } from "/snippets/components/display/image.jsx";` | `import { Image, LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/about/livepeer-protocol/technical-architecture.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/about/resources/blockchain-contracts.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/about/livepeer-protocol/technical-architecture.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/about/resources/blockchain-contracts.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/home/about-livepeer/benefits.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/home/about-livepeer/evolution.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/home/about-livepeer/vision.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from "/snippets/components/display/image.jsx";` | `import { Image, LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/community/livepeer-community/community-guidelines.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/about/livepeer-protocol/technical-architecture.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/about/resources/blockchain-contracts.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/es/home/about-livepeer/benefits.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/home/about-livepeer/evolution.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/home/about-livepeer/vision.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from "/snippets/components/display/image.jsx";` | `import { Image, LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/about/livepeer-protocol/technical-architecture.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/about/resources/blockchain-contracts.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/home/about-livepeer/benefits.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/home/about-livepeer/evolution.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/home/about-livepeer/vision.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from "/snippets/components/display/image.jsx";` | `import { Image, LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/home/about-livepeer/benefits.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/home/about-livepeer/evolution.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/home/about-livepeer/vision.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/home/primer.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Image, LinkImage } from "/snippets/components/display/image.jsx";` | `import { Image, LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Image, LinkImage } from '/snippets/components/display/image.jsx'` | `import { Image, LinkImage } from '/snippets/components/primitives/image.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Image } from "/snippets/components/display/image.jsx";` | `import { Image } from "/snippets/components/primitives/image.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { LinkImage } from "/snippets/components/display/image.jsx";` | `import { LinkImage } from "/snippets/components/primitives/image.jsx";` |
| v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx | `import { Image } from '/snippets/components/display/image.jsx'` | `import { Image } from '/snippets/components/primitives/image.jsx'` |

**Total rewrites:** 71
**Import sites:** 71
**Locale breakdown:** en: 15, es: 18, fr: 18, cn: 18, other: 2

### snippets/components/primitives/layout.jsx -> snippets/components/primitives/layout.jsx + snippets/components/layout/layout.jsx

**Action:** SPLIT
**Exports affected:** `FlexContainer`, `GridContainer`, `Spacer`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/docs-guide/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/cn/gateways/quickstart/gateway-setup.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/cn/gateways/run-a-gateway/run-a-gateway.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer, GridContainer, Spacer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer, GridContainer } from '/snippets/components/layout/layout.jsx'`<br />`import { Spacer } from '/snippets/components/primitives/layout.jsx'` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/cn/resources/documentation-guide/style-guide.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/community/livepeer-community/community-guidelines.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/developers/ai-inference-on-livepeer/overview.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/developers/ai-inference-on-livepeer/workload-fit.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/developers/ai-pipelines/workload-fit.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/es/gateways/quickstart/gateway-setup.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/es/gateways/run-a-gateway/run-a-gateway.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer, GridContainer, Spacer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer, GridContainer } from '/snippets/components/layout/layout.jsx'`<br />`import { Spacer } from '/snippets/components/primitives/layout.jsx'` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/es/resources/documentation-guide/style-guide.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/fr/docs-guide/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/fr/gateways/quickstart/gateway-setup.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/fr/gateways/run-a-gateway/run-a-gateway.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer, GridContainer, Spacer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer, GridContainer } from '/snippets/components/layout/layout.jsx'`<br />`import { Spacer } from '/snippets/components/primitives/layout.jsx'` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/fr/resources/documentation-guide/style-guide.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/gateways/quickstart/gateway-setup.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |
| v2/gateways/run-a-gateway/run-a-gateway.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx'` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer, GridContainer, Spacer } from '/snippets/components/primitives/layout.jsx'` | `import { FlexContainer, GridContainer } from '/snippets/components/layout/layout.jsx'`<br />`import { Spacer } from '/snippets/components/primitives/layout.jsx'` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { FlexContainer } from "/snippets/components/primitives/layout.jsx";` | `import { FlexContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { GridContainer } from "/snippets/components/primitives/layout.jsx";` | `import { GridContainer } from "/snippets/components/layout/layout.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` | `import { Spacer } from "/snippets/components/primitives/layout.jsx";` |
| v2/resources/documentation-guide/style-guide.mdx | `import { FlexContainer } from '/snippets/components/primitives/layout.jsx';` | `import { FlexContainer } from '/snippets/components/layout/layout.jsx';` |

**Total rewrites:** 66
**Import sites:** 62
**Locale breakdown:** en: 15, es: 17, fr: 17, cn: 17, other: 0

**Split details:**
- Exports staying in this file: `Spacer`
- Exports moving to `/snippets/components/layout/layout.jsx`: `FlexContainer`, `GridContainer`
- Pages that import BOTH staying and moving exports: `v2/cn/resources/documentation-guide/component-library/primitives.mdx`, `v2/es/resources/documentation-guide/component-library/primitives.mdx`, `v2/fr/resources/documentation-guide/component-library/primitives.mdx`, `v2/resources/documentation-guide/component-library/primitives.mdx`

### snippets/components/display/embed.jsx -> snippets/components/data/embed.jsx

**Action:** MOVE
**Exports affected:** `MarkdownEmbed`, `EmbedMarkdown`, `TwitterTimeline`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/embed-examples.mdx | `import { MarkdownEmbed, EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed, EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/cn/community/livepeer-community/livepeer-latest-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/cn/community/livepeer-community/trending-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/community/livepeer-community/trending-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/es/community/livepeer-community/livepeer-latest-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/es/community/livepeer-community/trending-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/fr/community/livepeer-community/livepeer-latest-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/fr/community/livepeer-community/trending-topics.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/home/trending.mdx | `import { TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/display/embed.jsx'` | `import { MarkdownEmbed, EmbedMarkdown, TwitterTimeline } from '/snippets/components/data/embed.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { EmbedMarkdown } from "/snippets/components/display/embed.jsx";` | `import { EmbedMarkdown } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { MarkdownEmbed } from "/snippets/components/display/embed.jsx";` | `import { MarkdownEmbed } from "/snippets/components/data/embed.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { TwitterTimeline } from "/snippets/components/display/embed.jsx";` | `import { TwitterTimeline } from "/snippets/components/data/embed.jsx";` |

**Total rewrites:** 63
**Import sites:** 63
**Locale breakdown:** en: 11, es: 17, fr: 17, cn: 17, other: 1

**Merge-sensitive exports:** `EmbedMarkdown`, `MarkdownEmbed`
**Merge-sensitive importers:** `snippets/components/display/examples/embed-examples.mdx`, `v2/cn/docs-guide/components-index.mdx`, `v2/cn/docs-guide/indexes/components-index.mdx`, `v2/cn/resources/documentation-guide/component-library/component-library.mdx`, `v2/cn/resources/documentation-guide/component-library/display.mdx`, `v2/cn/resources/documentation-guide/component-library/overview.mdx`, `v2/es/docs-guide/components-index.mdx`, `v2/es/docs-guide/indexes/components-index.mdx`, `v2/es/resources/documentation-guide/component-library/component-library.mdx`, `v2/es/resources/documentation-guide/component-library/display.mdx`, `v2/es/resources/documentation-guide/component-library/overview.mdx`, `v2/fr/docs-guide/components-index.mdx`, `v2/fr/docs-guide/indexes/components-index.mdx`, `v2/fr/resources/documentation-guide/component-library/component-library.mdx`, `v2/fr/resources/documentation-guide/component-library/display.mdx`, `v2/fr/resources/documentation-guide/component-library/overview.mdx`, `v2/resources/documentation-guide/component-library/component-library.mdx`, `v2/resources/documentation-guide/component-library/display.mdx`, `v2/resources/documentation-guide/component-library/overview.mdx`
**Notes:** Symbol names may need consolidation in Phase 2b even when the file-path rewrite is straightforward.

### snippets/components/primitives/tables.jsx -> snippets/components/layout/tables.jsx

**Action:** MOVE
**Exports affected:** `StyledTable`, `TableRow`, `TableCell`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/docs-guide/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/gateways/run-a-gateway/requirements/setup.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/cn/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable, TableRow, TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/developers/ai-pipelines/overview.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/developers/quickstart/video/video-streaming-101.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/es/gateways/run-a-gateway/requirements/setup.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/es/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable, TableRow, TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/gateways/run-a-gateway/requirements/setup.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/fr/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable, TableRow, TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/gateways/references/api-reference/AI-API/ai.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/gateways/run-a-gateway/requirements/setup.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/gateways/using-gateways/choosing-a-gateway.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/internal/rfp/report.mdx | `import { StyledTable, TableRow, TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable, TableRow, TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/lpt/delegation/getting-started.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/orchestrators/earnings.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/orchestrators/quickstart/orchestrator-setup.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { StyledTable } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable } from "/snippets/components/layout/tables.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { TableCell } from "/snippets/components/layout/tables.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { TableRow } from "/snippets/components/primitives/tables.jsx";` | `import { TableRow } from "/snippets/components/layout/tables.jsx";` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from '/snippets/components/primitives/tables.jsx'` | `import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'` |
| v2/resources/documentation-guide/component-library/primitives.mdx | `import { StyledTable, TableRow, TableCell } from "/snippets/components/primitives/tables.jsx";` | `import { StyledTable, TableRow, TableCell } from "/snippets/components/layout/tables.jsx";` |

**Total rewrites:** 53
**Import sites:** 53
**Locale breakdown:** en: 16, es: 12, fr: 12, cn: 12, other: 1

### snippets/components/domain/SHARED/HeroGif.jsx -> snippets/components/page-structure/heroGif.jsx

**Action:** MOVE
**Exports affected:** `Starfield`
**Risk:** HIGH

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/about/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/about/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/community/community-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/developers/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/gateways/gateways-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/home/mission-control.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/lpt/token-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/orchestrators/orchestrators-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from '/snippets/components/domain/SHARED/HeroGif.jsx'` | `import { Starfield } from '/snippets/components/page-structure/heroGif.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/cn/solutions/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/community/community-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/developers/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/about/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/community/community-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/developers/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/gateways/gateways-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/home/mission-control.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/lpt/token-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/orchestrators/orchestrators-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from '/snippets/components/domain/SHARED/HeroGif.jsx'` | `import { Starfield } from '/snippets/components/page-structure/heroGif.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/es/solutions/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/about/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/community/community-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/developers/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/gateways/gateways-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/home/mission-control.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/lpt/token-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/orchestrators/orchestrators-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from '/snippets/components/domain/SHARED/HeroGif.jsx'` | `import { Starfield } from '/snippets/components/page-structure/heroGif.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/fr/solutions/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/gateways/gateways-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/home/mission-control.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/lpt/token-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/orchestrators/orchestrators-portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from '/snippets/components/domain/SHARED/HeroGif.jsx'` | `import { Starfield } from '/snippets/components/page-structure/heroGif.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |
| v2/solutions/portal.mdx | `import { Starfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";` | `import { Starfield } from "/snippets/components/page-structure/heroGif.jsx";` |

**Total rewrites:** 50
**Import sites:** 50
**Locale breakdown:** en: 11, es: 13, fr: 13, cn: 13, other: 0

### snippets/components/content/external-content.jsx -> snippets/components/content/externalContent.jsx

**Action:** RENAME
**Exports affected:** `ExternalContent`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/content/examples/external-content-examples.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/about/resources/livepeer-whitepaper.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/about/resources/livepeer-whitepaper.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/developers/technical-references/awesome-livepeer.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/docs-guide/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/gateways/run-a-gateway/install/community-projects.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/cn/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/developers/technical-references/awesome-livepeer.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/about/resources/livepeer-whitepaper.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/developers/technical-references/awesome-livepeer.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/docs-guide/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/gateways/run-a-gateway/install/community-projects.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/es/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/fr/about/resources/livepeer-whitepaper.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/developers/technical-references/awesome-livepeer.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/docs-guide/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/gateways/run-a-gateway/install/community-projects.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/fr/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/gateways/run-a-gateway/configure/dual-configuration.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/gateways/run-a-gateway/install/community-projects.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from '/snippets/components/content/external-content.jsx'` | `import { ExternalContent } from '/snippets/components/content/externalContent.jsx'` |
| v2/resources/documentation-guide/component-library/content.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ExternalContent } from "/snippets/components/content/external-content.jsx";` | `import { ExternalContent } from "/snippets/components/content/externalContent.jsx";` |

**Total rewrites:** 43
**Import sites:** 43
**Locale breakdown:** en: 9, es: 11, fr: 11, cn: 11, other: 1

### snippets/components/integrations/coingecko.jsx -> snippets/components/data/coingecko.jsx

**Action:** MOVE
**Exports affected:** `CoinGeckoExchanges`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/integrations/examples/coingecko-examples.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/cn/gateways/references/arbitrum-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/cn/gateways/references/livepeer-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/cn/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/cn/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/es/gateways/references/arbitrum-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/es/gateways/references/livepeer-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/es/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/es/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/fr/gateways/references/arbitrum-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/fr/gateways/references/livepeer-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/fr/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/fr/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/gateways/references/arbitrum-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/gateways/references/livepeer-exchanges.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from '/snippets/components/integrations/coingecko.jsx'` | `import { CoinGeckoExchanges } from '/snippets/components/data/coingecko.jsx'` |
| v2/resources/documentation-guide/component-library/integrations.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CoinGeckoExchanges } from "/snippets/components/integrations/coingecko.jsx";` | `import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";` |

**Total rewrites:** 35
**Import sites:** 35
**Locale breakdown:** en: 7, es: 9, fr: 9, cn: 9, other: 1

### snippets/components/display/showcaseCards.jsx -> snippets/components/data/showcaseCards.jsx

**Action:** MOVE
**Exports affected:** `ShowcaseCards`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/showcaseCards-examples.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| snippets/pages/00_HOME/project-showcase.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx"` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx"` |
| v2/cn/docs-guide/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/cn/home/solutions/showcase.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx"` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx"` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/es/home/solutions/showcase.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx"` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx"` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/fr/home/solutions/showcase.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx"` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx"` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/home/solutions/showcase.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx"` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx"` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from '/snippets/components/display/showcaseCards.jsx'` | `import { ShowcaseCards } from '/snippets/components/data/showcaseCards.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";` | `import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";` |

**Total rewrites:** 32
**Import sites:** 32
**Locale breakdown:** en: 6, es: 8, fr: 8, cn: 8, other: 2

### snippets/components/display/CardCarousel.jsx -> snippets/components/layout/cardCarousel.jsx

**Action:** MOVE
**Exports affected:** `CardCarousel`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/CardCarousel-examples.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from '/snippets/components/display/CardCarousel.jsx'` | `import { CardCarousel } from '/snippets/components/layout/cardCarousel.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";` | `import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";` |

**Total rewrites:** 27
**Import sites:** 27
**Locale breakdown:** en: 5, es: 7, fr: 7, cn: 7, other: 1

### snippets/components/display/socialLinks.jsx -> snippets/components/primitives/socialLinks.jsx

**Action:** MOVE
**Exports affected:** `SocialLinks`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| snippets/components/display/examples/socialLinks-examples.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/cn/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/es/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/fr/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from '/snippets/components/display/socialLinks.jsx'` | `import { SocialLinks } from '/snippets/components/primitives/socialLinks.jsx'` |
| v2/resources/documentation-guide/component-library/display.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";` | `import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";` |

**Total rewrites:** 27
**Import sites:** 27
**Locale breakdown:** en: 5, es: 7, fr: 7, cn: 7, other: 1

### snippets/components/layout/SearchTable.jsx -> snippets/components/layout/searchTable.jsx

**Action:** RENAME
**Exports affected:** `SearchTable`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/cn/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { SearchTable } from "/snippets/components/layout/SearchTable.jsx";` | `import { SearchTable } from "/snippets/components/layout/searchTable.jsx";` |

**Total rewrites:** 20
**Import sites:** 20
**Locale breakdown:** en: 2, es: 6, fr: 6, cn: 6, other: 0

### snippets/components/layout/ListSteps.jsx -> snippets/components/layout/listSteps.jsx

**Action:** RENAME
**Exports affected:** `ListSteps`
**Risk:** MEDIUM

**Import rewrite inventory:**

| Importing page | Current import statement | New import statement |
|---------------|--------------------------|----------------------|
| v2/cn/docs-guide/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/cn/docs-guide/indexes/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from '/snippets/components/layout/ListSteps.jsx'` | `import { ListSteps } from '/snippets/components/layout/listSteps.jsx'` |
| v2/cn/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/cn/resources/documentation-guide/component-library/overview.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/es/docs-guide/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/es/docs-guide/indexes/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from '/snippets/components/layout/ListSteps.jsx'` | `import { ListSteps } from '/snippets/components/layout/listSteps.jsx'` |
| v2/es/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/es/resources/documentation-guide/component-library/overview.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/fr/docs-guide/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/fr/docs-guide/indexes/components-index.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from '/snippets/components/layout/ListSteps.jsx'` | `import { ListSteps } from '/snippets/components/layout/listSteps.jsx'` |
| v2/fr/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/fr/resources/documentation-guide/component-library/overview.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from '/snippets/components/layout/ListSteps.jsx'` | `import { ListSteps } from '/snippets/components/layout/listSteps.jsx'` |
| v2/resources/documentation-guide/component-library/component-library.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |
| v2/resources/documentation-guide/component-library/overview.mdx | `import { ListSteps } from "/snippets/components/layout/ListSteps.jsx";` | `import { ListSteps } from "/snippets/components/layout/listSteps.jsx";` |

**Total rewrites:** 18
**Import sites:** 18
**Locale breakdown:** en: 3, es: 5, fr: 5, cn: 5, other: 0


## Audit Drift Notes

- Export line drift: snippets/components/content/code.jsx :: CustomCodeBlock audit L1, live L37
- Export line drift: snippets/components/content/code.jsx :: CodeComponent audit L120, live L128
- Export line drift: snippets/components/content/code.jsx :: ComplexCodeBlock audit L154, live L184
- Export line drift: snippets/components/content/code.jsx :: CodeSection audit L241, live L261
- Export line drift: snippets/components/content/data.jsx :: BlogCard audit L1, live L32
- Export line drift: snippets/components/content/data.jsx :: CardBlogDataLayout audit L185, live L203
- Export line drift: snippets/components/content/data.jsx :: PostCard audit L247, live L278
- Export line drift: snippets/components/content/data.jsx :: CardColumnsPostLayout audit L386, live L406
- Export line drift: snippets/components/content/data.jsx :: DiscordAnnouncements audit L453, live L465
- Export line drift: snippets/components/content/data.jsx :: LumaEvents audit L559, live L572
- Export line drift: snippets/components/content/external-content.jsx :: ExternalContent audit L1, live L13
- Export line drift: snippets/components/content/release.jsx :: LatestVersion audit L1, live L4
- Export line drift: snippets/components/content/responseField.jsx :: ValueResponseField audit L115, live L12
- Export line drift: snippets/components/content/responseField.jsx :: CustomResponseField audit L115, live L56
- Export line drift: snippets/components/content/responseField.jsx :: ResponseFieldExpandable audit L115, live L72
- Export line drift: snippets/components/content/responseField.jsx :: ResponseFieldAccordion audit L115, live L83
- Export line drift: snippets/components/content/responseField.jsx :: ResponseFieldGroup audit L115, live L96
- Export line drift: snippets/components/display/CardCarousel.jsx :: CardCarousel audit L1, live L20
- Export line drift: snippets/components/display/customCards.jsx :: DisplayCard audit L1, live L12
- Export line drift: snippets/components/display/embed.jsx :: MarkdownEmbed audit L1, live L15
- Export line drift: snippets/components/display/embed.jsx :: EmbedMarkdown audit L26, live L40
- Export line drift: snippets/components/display/frameMode.jsx :: PageHeader audit L536, live L32
- Export line drift: snippets/components/display/frameMode.jsx :: H1 audit L536, live L166
- Export line drift: snippets/components/display/frameMode.jsx :: H2 audit L536, live L217
- Export line drift: snippets/components/display/frameMode.jsx :: H3 audit L536, live L267
- Export line drift: snippets/components/display/frameMode.jsx :: H4 audit L536, live L317
- Export line drift: snippets/components/display/frameMode.jsx :: H5 audit L536, live L367
- Export line drift: snippets/components/display/frameMode.jsx :: H6 audit L536, live L417
- Export line drift: snippets/components/display/frameMode.jsx :: P audit L536, live L472
- Export line drift: snippets/components/display/frameMode.jsx :: Divider audit L536, live L524
- Export line drift: snippets/components/display/image.jsx :: Image audit L1, live L25
- Export line drift: snippets/components/display/image.jsx :: LinkImage audit L37, live L62
- Export line drift: snippets/components/display/showcaseCards.jsx :: ShowcaseCards audit L1, live L470
- Export line drift: snippets/components/display/video.jsx :: TitledVideo audit L1, live L23
- Export line drift: snippets/components/display/video.jsx :: Video audit L133, live L158
- Export line drift: snippets/components/display/video.jsx :: YouTubeVideo audit L249, live L272
- Export line drift: snippets/components/display/video.jsx :: YouTubeVideoData audit L335, live L348
- Export line drift: snippets/components/display/video.jsx :: LinkedInEmbed audit L383, live L409
- Export line drift: snippets/components/display/video.jsx :: YouTubeVideoDownload audit L442, live L458
- Export line drift: snippets/components/display/video.jsx :: CardVideo audit L499, live L518
- Export line drift: snippets/components/display/zoomable-diagram.jsx :: ScrollableDiagram audit L1, live L57
- Export line drift: snippets/components/domain/SHARED/HeroGif.jsx :: Starfield audit L1, live L120
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: HeroImageBackgroundComponent audit L423, live L68
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: HeroContentContainer audit L423, live L100
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: PortalContentContainer audit L423, live L152
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: PortalHeroContent audit L423, live L181
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: LogoHeroContainer audit L423, live L362
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: RefCardContainer audit L423, live L407
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: HeroOverviewContent audit L423, live L117
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: HeroSectionContainer audit L423, live L39
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: PortalCardsHeader audit L423, live L313
- Export line drift: snippets/components/domain/SHARED/Portals.jsx :: PortalSectionHeader audit L423, live L330
- Export line drift: snippets/components/domain/SHARED/previewCallouts.jsx :: ComingSoonCallout audit L146, live L2
- Export line drift: snippets/components/domain/SHARED/previewCallouts.jsx :: PreviewCallout audit L146, live L70
- Export line drift: snippets/components/domain/SHARED/previewCallouts.jsx :: ReviewCallout audit L146, live L135
- Export line drift: snippets/components/integrations/coingecko.jsx :: CoinGeckoExchanges audit L1, live L8
- Export line drift: snippets/components/layout/ListSteps.jsx :: ListSteps audit L1, live L23
- Export line drift: snippets/components/layout/cards.jsx :: ScrollBox audit L1, live L22
- Export line drift: snippets/components/layout/lists.jsx :: BasicList audit L2, live L13
- Export line drift: snippets/components/layout/lists.jsx :: IconList audit L16, live L27
- Export line drift: snippets/components/layout/lists.jsx :: StepList audit L30, live L52
- Export line drift: snippets/components/layout/lists.jsx :: StepLinkList audit L64, live L86
- Export line drift: snippets/components/layout/lists.jsx :: UpdateList audit L98, live L109
- Export line drift: snippets/components/layout/lists.jsx :: UpdateLinkList audit L119, live L141
- Export line drift: snippets/components/layout/steps.jsx :: StyledSteps audit L1, live L22
- Export line drift: snippets/components/layout/steps.jsx :: StyledStep audit L53, live L73
- Export line drift: snippets/components/layout/table.jsx :: DynamicTable audit L1, live L10
- Export line drift: snippets/components/primitives/a11y.jsx :: FocusableScrollRegions audit L1, live L14
- Export line drift: snippets/components/primitives/buttons.jsx :: BasicBtn audit L1, live L12
- Export line drift: snippets/components/primitives/buttons.jsx :: DownloadButton audit L15, live L40
- Export line drift: snippets/components/primitives/containers.jsx :: BorderedBox audit L1, live L21
- Export line drift: snippets/components/primitives/containers.jsx :: CenteredContainer audit L56, live L75
- Export line drift: snippets/components/primitives/containers.jsx :: FullWidthContainer audit L94, live L113
- Export line drift: snippets/components/primitives/divider.jsx :: CustomDivider audit L1, live L22
- Export line drift: snippets/components/primitives/icons.jsx :: LivepeerSVG audit L1, live L16
- Export line drift: snippets/components/primitives/icons.jsx :: LivepeerIconOld audit L34, live L49
- Export line drift: snippets/components/primitives/icons.jsx :: LivepeerIconFlipped audit L57, live L72
- Export line drift: snippets/components/primitives/icons.jsx :: LivepeerIcon audit L82, live L100
- Export line drift: snippets/components/primitives/layout.jsx :: FlexContainer audit L1, live L24
- Export line drift: snippets/components/primitives/layout.jsx :: GridContainer audit L49, live L71
- Export line drift: snippets/components/primitives/layout.jsx :: Spacer audit L96, live L113
- Export line drift: snippets/components/primitives/links.jsx :: CustomCallout audit L361, live L22
- Export line drift: snippets/components/primitives/links.jsx :: BlinkingIcon audit L361, live L92
- Export line drift: snippets/components/primitives/links.jsx :: BlinkingTerminal audit L361, live L123
- Export line drift: snippets/components/primitives/links.jsx :: DoubleIconLink audit L361, live L148
- Export line drift: snippets/components/primitives/links.jsx :: GotoLink audit L361, live L195
- Export line drift: snippets/components/primitives/links.jsx :: GotoCard audit L361, live L237
- Export line drift: snippets/components/primitives/links.jsx :: TipWithArrow audit L361, live L267
- Export line drift: snippets/components/primitives/links.jsx :: LinkArrow audit L361, live L331
- Export line drift: snippets/components/primitives/tables.jsx :: StyledTable audit L1, live L24
- Export line drift: snippets/components/primitives/tables.jsx :: TableRow audit L53, live L72
- Export line drift: snippets/components/primitives/tables.jsx :: TableCell audit L105, live L122
- Export line drift: snippets/components/primitives/text.jsx :: CopyText audit L19, live L25
