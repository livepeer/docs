<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->
<!-- Generator: operations/scripts/generators/components/library/generate-component-library.js -->
<!-- Generated: 2026-04-08T15:37:56.003Z -->
<!-- Regenerate: node operations/scripts/generators/components/library/generate-component-library.js --category integrators -->

# Integrators Component Library

Fetches, embeds, or binds to external or third-party data.

**Components:** 19 | **Stable:** 18 | **Experimental:** 1 | **Deprecated:** 0

---

## blog

### 🟢 BlogCard

> Blog post card with scrollable content, metadata, and CTA.

**Import:** `import { BlogCard } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `any` | — | title prop. |
| `content` | `any` | — | content prop. |
| `href` | `any` | — | href prop. |
| `author` | `string` | "Livepeer Team" | author prop. |
| `datePosted` | `any` | null | date Posted prop. |
| `excerpt` | `any` | null | excerpt prop. |
| `readingTime` | `any` | null | reading Time prop. |
| `icon` | `string` | "book-open" | icon prop. |
| `authorIcon` | `string` | "user-pen" | author Icon prop. |
| `dateIcon` | `string` | "calendar" | date Icon prop. |
| `cta` | `string` | "Read More" | cta prop. |
| `img` | `any` | null | img prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 BlogDataLayout

> Single-column BlogCard stack.

**Import:** `import { BlogDataLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 CardBlogDataLayout

> Grid layout rendering BlogCards from an items array.

**Import:** `import { CardBlogDataLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 CardColumnsPostLayout

> Multi-column PostCard layout.

**Import:** `import { CardColumnsPostLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `cols` | `number` | 2 | cols prop. |
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 CardInCardLayout

> PostCards rendered inside Card wrappers.

**Import:** `import { CardInCardLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 ColumnsBlogCardLayout

> Multi-column BlogCard layout using Mintlify Columns.

**Import:** `import { ColumnsBlogCardLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `cols` | `number` | 2 | cols prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 DiscordAnnouncements

> Discord announcement feed with parsed markdown content. Sanitised HTML.

**Import:** `import { DiscordAnnouncements } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 7

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 ForumLatestLayout

> Latest forum topics with banner image and topic cards.

**Import:** `import { ForumLatestLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 3

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 LumaEvents

> Upcoming/past event cards from Luma calendar data.

**Import:** `import { LumaEvents } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | `any` | — | data prop. |
| `limit` | `any` | — | limit prop. |
| `type` | `string` | "upcoming" | type prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 PostCard

> Post card with gradient header, scrollable content, and metadata.

**Import:** `import { PostCard } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `any` | — | title prop. |
| `content` | `any` | — | content prop. |
| `href` | `any` | — | href prop. |
| `author` | `string` | "Unknown" | author prop. |
| `datePosted` | `any` | null | date Posted prop. |
| `replyCount` | `any` | null | reply Count prop. |
| `icon` | `string` | "book-open" | icon prop. |
| `authorIcon` | `string` | "user-pen" | author Icon prop. |
| `dateIcon` | `string` | "calendar" | date Icon prop. |
| `cta` | `string` | "Read More" | cta prop. |
| `img` | `any` | null | img prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 RssBlogCard

> Blog card for RSS feed data. Matches BlogCard visual quality with icon title, metadata row, scrollable plain text excerpt, and scroll hint. Use for non-Ghost blog sources (Daydream, Streamplace, etc.).

**Import:** `import { RssBlogCard } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

---

### 🟢 RssBlogCardLayout

> Multi-column RssBlogCard layout. Use for RSS blog data (non-Ghost sources).

**Import:** `import { RssBlogCardLayout } from "/snippets/components/integrators/blog/BlogCards.jsx";`
**Status:** stable | **Imports:** 2

---

## embeds

### 🟢 ExternalContent

> Fetches and renders external markdown with scrollable container and source link.

**Import:** `import { ExternalContent } from "/snippets/components/integrators/embeds/DataEmbed.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `repoName` | `string` | — | Repo name used by the component. |
| `githubUrl` | `string` | — | Github url used by the component. |
| `maxHeight` | `string` | "1000px" | Max height used by the component. |
| `icon` | `string` | "github" | Icon configuration used by the component. |
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 PdfEmbed

> Embeds a PDF in a framed iframe with caption.

**Import:** `import { PdfEmbed } from "/snippets/components/integrators/embeds/DataEmbed.jsx";`
**Status:** stable | **Imports:** 3

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `React.ReactNode` | — | Title text rendered by the component. |
| `src` | `string` | — | Asset or embed source used by the component. |
| `height` | `string` | '700px' | Height used by the component. |
| `width` | `string` | '100%' | Width used by the component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 SolidityEmbed

> Fetches and renders a remote Solidity file with syntax highlighting inside a styled container. Lazy-loaded.

**Import:** `import { SolidityEmbed } from "/snippets/components/integrators/embeds/DataEmbed.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `url` | `string` | — | Raw GitHub URL to the .sol file. |
| `title` | `React.ReactNode` | — | Optional title displayed above the code block. Accepts strings or components. |
| `filename` | `string` | — | Filename shown on the CodeBlock header. |
| `maxHeight` | `string` | "500px" | Max height of the code container. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

---

### 🟢 TwitterTimeline

> Embeds a Twitter/X timeline feed widget via iframe.

**Import:** `import { TwitterTimeline } from "/snippets/components/integrators/embeds/DataEmbed.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## feeds

### 🟢 CoinGeckoExchanges

> Sortable table of exchanges listing a token. Keyboard-accessible sort headers.

**Import:** `import { CoinGeckoExchanges } from "/snippets/components/integrators/feeds/Coingecko.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `coinId` | `string` | "arbitrum" | coin Id prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🧪 LatestVersion

> Displays the latest release version string from automation data.

**Import:** `import { LatestVersion } from "/snippets/components/integrators/feeds/Release.jsx";`
**Status:** experimental | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `version` | `any` | — | version prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

## video-data

### 🟢 YouTubeVideoData

> Renders YouTube video data with video embed and metadata columns.

**Import:** `import { YouTubeVideoData } from "/snippets/components/integrators/video-data/VideoData.jsx";`
**Status:** stable | **Imports:** 7

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - Collection data rendered by the component. |
| `limit` | `number` | — | Limit used by the component. |
| `cols` | `number` | 2 | Cols used by the component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---
