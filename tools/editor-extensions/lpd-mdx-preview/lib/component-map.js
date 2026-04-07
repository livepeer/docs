'use strict';

const fs = require('fs');
const nodePath = require('path');
const mintlify = require('./mintlify-components');

function iconBadge(name) {
  if (!name) return '';
  return `<i class="fa-solid fa-${escapeHtml(name)}" style="color: var(--accent); margin-right: 6px;"></i>`;
}

/**
 * 3-tier component rendering:
 *   Tier 1: Mintlify built-ins (mintlify-components.js)
 *   Tier 2: High-use Livepeer custom components (below)
 *   Tier 3: Generic placeholder for everything else
 */

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Tier 2: Livepeer Custom Components ─── //

const livepeerComponents = {

  // Spacing
  CustomDivider(props, children) {
    const text = props.middleText || props.text || '';
    if (text) {
      return `<div class="lpd-divider">
        <span class="lpd-divider-line"></span>
        <span class="lpd-divider-text">${escapeHtml(text)}</span>
        <span class="lpd-divider-line"></span>
      </div>`;
    }
    return '<div class="lpd-divider"><span class="lpd-divider-line" style="width:100%"></span></div>';
  },

  Spacer(props) {
    const h = props.height || props.size || '24px';
    return `<div class="lpd-spacer" style="height: ${escapeHtml(h)};"></div>`;
  },

  // Containers
  BorderedBox(props, children) {
    const style = [];
    if (props.borderColor) style.push(`border-color: ${props.borderColor}`);
    if (props.backgroundColor) style.push(`background-color: ${props.backgroundColor}`);
    if (props.padding) style.push(`padding: ${props.padding}`);
    return `<div class="lpd-bordered-box"${style.length ? ` style="${style.join('; ')}"` : ''}>${children}</div>`;
  },

  CenteredContainer(props, children) {
    const maxWidth = props.maxWidth || '100%';
    return `<div class="lpd-centered" style="max-width: ${escapeHtml(maxWidth)};">${children}</div>`;
  },

  FullWidthContainer(props, children) {
    return `<div style="width: 100%; margin: 1em 0;">${children}</div>`;
  },

  FlexContainer(props, children) {
    const style = [];
    if (props.direction) style.push(`flex-direction: ${props.direction}`);
    if (props.gap) style.push(`gap: ${props.gap}`);
    if (props.align) style.push(`align-items: ${props.align}`);
    if (props.justify) style.push(`justify-content: ${props.justify}`);
    if (props.wrap) style.push('flex-wrap: wrap');
    return `<div class="lpd-flex"${style.length ? ` style="${style.join('; ')}"` : ''}>${children}</div>`;
  },

  GridContainer(props, children) {
    const style = [];
    if (props.columns) style.push(`grid-template-columns: ${props.columns}`);
    if (props.gap) style.push(`gap: ${props.gap}`);
    return `<div class="lpd-grid"${style.length ? ` style="${style.join('; ')}"` : ''}>${children}</div>`;
  },

  ScrollBox(props, children) {
    const maxHeight = props.maxHeight || '400px';
    return `<div class="lpd-scrollbox" style="max-height: ${escapeHtml(maxHeight)};">${children}</div>`;
  },

  // Diagrams
  ScrollableDiagram(props, children) {
    const title = props.title || '';
    const maxHeight = props.maxHeight || '';
    const style = maxHeight ? ` style="max-height: ${escapeHtml(maxHeight)}"` : '';
    return `<div class="lpd-scrollable-diagram"${style}>
      ${title ? `<div class="lpd-scrollable-diagram-title">${escapeHtml(title)}</div>` : ''}
      ${children}
    </div>`;
  },

  // Links
  LinkArrow(props) {
    const href = props.href || '#';
    const label = props.label || props.text || href;
    return `<a class="lpd-link-arrow" href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
  },

  GotoLink(props, children) {
    const href = props.href || '#';
    const label = props.label || children || '';
    return `<span style="display: inline-flex; align-items: center; gap: 4px;">
      → <a href="${escapeHtml(href)}" style="color: var(--accent);">${label}</a>
    </span>`;
  },

  GotoCard(props, children) {
    const href = props.href || '#';
    return `<div class="lpd-card"><a href="${escapeHtml(href)}">${children}</a></div>`;
  },

  CustomCallout(props, children) {
    const icon = props.icon || '';
    return `<div class="lpd-callout note">
      <span class="lpd-callout-icon">${icon ? escapeHtml(icon) : 'ℹ️'}</span>
      <div class="lpd-callout-body">${children}</div>
    </div>`;
  },

  TipWithArrow(props, children) {
    return `<div class="lpd-callout tip">
      <span class="lpd-callout-icon">💡</span>
      <div class="lpd-callout-body">${children}</div>
    </div>`;
  },

  // Text
  Subtitle(props, children) {
    return `<span class="lpd-subtitle">${children}</span>`;
  },

  CopyText(props) {
    const text = props.text || props.value || '';
    return `<code style="background: var(--code-bg); padding: 2px 6px; border-radius: 4px;">${escapeHtml(text)}</code>`;
  },

  CardTitleTextWithArrow(props, children) {
    return `<div style="display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--hero-text);">
      ${children} <span style="color: var(--accent);">→</span>
    </div>`;
  },

  AccordionTitleWithArrow(props, children) {
    return `<span style="display: inline-flex; align-items: center; gap: 6px;">
      ${children} <span style="color: var(--accent);">→</span>
    </span>`;
  },

  // Quotes
  Quote(props, children) {
    return `<blockquote class="lpd-quote">${children}</blockquote>`;
  },

  FrameQuote(props, children) {
    return `<div class="lpd-frame"><blockquote class="lpd-quote">${children}</blockquote></div>`;
  },

  // FrameMode headings
  H1(props, children) {
    return `<h1>${iconBadge(props.icon)}${children}</h1>`;
  },
  H2(props, children) {
    return `<h2>${iconBadge(props.icon)}${children}</h2>`;
  },
  H3(props, children) {
    return `<h3>${iconBadge(props.icon)}${children}</h3>`;
  },
  H4(props, children) {
    return `<h4>${iconBadge(props.icon)}${children}</h4>`;
  },
  H5(props, children) {
    return `<h5>${iconBadge(props.icon)}${children}</h5>`;
  },
  H6(props, children) {
    return `<h6>${iconBadge(props.icon)}${children}</h6>`;
  },
  P(props, children) {
    return `<p>${children}</p>`;
  },

  PageHeader(props, children) {
    const title = props.title || '';
    const subtitle = props.subtitle || '';
    return `<div style="text-align: center; margin: 2em 0;">
      ${title ? `<h1>${escapeHtml(title)}</h1>` : ''}
      ${subtitle ? `<h2 style="color: var(--muted-text); font-weight: 400;">${escapeHtml(subtitle)}</h2>` : ''}
      ${children}
    </div>`;
  },

  Divider() {
    return '<hr style="border: none; border-top: 1px solid var(--border); margin: 1.5em 0;">';
  },

  // Tables
  DynamicTable(props, children) {
    return `<div style="overflow-x: auto; margin: 1em 0;"><table>${children}</table></div>`;
  },

  SearchTable(props, children) {
    const searchPlaceholder = props.searchPlaceholder || 'Search…';
    const categoryLabel = props.categoryLabel || 'All categories';
    return `<div class="lpd-search-table">
      <div class="lpd-interactive-badge">⚡ interactive — static in preview</div>
      <div class="lpd-search-table-controls">
        <div class="lpd-search-input-mock">🔍 ${escapeHtml(searchPlaceholder)}</div>
        <div class="lpd-search-select-mock">▾ ${escapeHtml(categoryLabel)}</div>
      </div>
      <div style="overflow-x: auto;">${children}</div>
    </div>`;
  },

  // Cards
  DisplayCard(props, children) {
    const icon = props.icon || '';
    const title = props.title || '';
    return `<div class="lpd-card">
      <div class="lpd-card-title">${icon ? `<span class="icon-badge">[${escapeHtml(icon)}]</span>` : ''} ${escapeHtml(title)}</div>
      <div class="lpd-card-body">${children}</div>
    </div>`;
  },

  WidthCard(props, children) {
    const width = props.width || props.maxWidth || '100%';
    return `<div style="max-width: ${escapeHtml(width)}; margin: 0 auto;">
      <div class="lpd-card">${children}</div>
    </div>`;
  },

  InlineImageCard(props, children) {
    const src = props.src || '';
    return `<div class="lpd-card horizontal">
      ${src ? `<img src="${escapeHtml(src)}" style="max-width: 100px; border-radius: 6px;" alt="">` : ''}
      <div class="lpd-card-body">${children}</div>
    </div>`;
  },

  InteractiveCard(props, children) {
    const title = props.title || '';
    return `<div class="lpd-card">
      <div class="lpd-card-title">${escapeHtml(title)}</div>
      <div class="lpd-card-body">${children}</div>
    </div>`;
  },

  // Callout banners
  ComingSoonCallout(props, children) {
    return `<div class="lpd-banner">
      <span class="lpd-banner-icon">🚧</span>
      <div>Coming soon ${children}</div>
    </div>`;
  },

  PreviewCallout(props, children) {
    return `<div class="lpd-banner">
      <span class="lpd-banner-icon">👁️</span>
      <div>Preview ${children}</div>
    </div>`;
  },

  ReviewCallout(props, children) {
    return `<div class="lpd-banner">
      <span class="lpd-banner-icon">📝</span>
      <div>Under review ${children}</div>
    </div>`;
  },

  // Media
  Image(props) {
    const src = props.src || '';
    const alt = props.alt || '';
    const caption = props.caption || '';
    return `<div class="lpd-image">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}">
      ${caption ? `<div class="lpd-image-caption">${escapeHtml(caption)}</div>` : ''}
    </div>`;
  },

  LinkImage(props) {
    const src = props.src || '';
    const href = props.href || '#';
    const alt = props.alt || '';
    return `<a href="${escapeHtml(href)}"><div class="lpd-image">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}">
    </div></a>`;
  },

  YouTubeVideo(props) {
    const id = props.id || props.videoId || '';
    if (!id) return '<div class="lpd-placeholder"><span class="lpd-placeholder-tag">&lt;YouTubeVideo&gt;</span> (no video ID)</div>';
    return `<div class="lpd-youtube">
      <iframe src="https://www.youtube.com/embed/${escapeHtml(id)}" allowfullscreen></iframe>
    </div>`;
  },

  TitledVideo(props, children) {
    const title = props.title || '';
    return `<div style="margin: 1em 0;">
      ${title ? `<div style="font-weight: 500; color: var(--hero-text); margin-bottom: 6px;">${escapeHtml(title)}</div>` : ''}
      ${children}
    </div>`;
  },

  // Steps
  StyledSteps(props, children) {
    return `<div class="lpd-steps">${children}</div>`;
  },

  StyledStep(props, children) {
    const title = props.title || '';
    return `<div class="lpd-step">
      ${title ? `<div class="lpd-step-title">${escapeHtml(title)}</div>` : ''}
      <div>${children}</div>
    </div>`;
  },

  ListSteps(props, children) {
    return `<div class="lpd-steps">${children}</div>`;
  },

  // Grids
  QuadGrid(props, children) {
    return `<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 1em 0;">${children}</div>`;
  },

  CardCarousel(props, children) {
    return `<div style="display: flex; gap: 12px; overflow-x: auto; margin: 1em 0; padding-bottom: 8px;">${children}</div>`;
  },

  // Accordions
  AccordionLayout(props, children) {
    return `<div style="display: flex; flex-direction: column; gap: 8px;">${children}</div>`;
  },

  AccordionGroupList(props, children) {
    return `<div class="lpd-accordion-group">${children}</div>`;
  },

  // Portals / Scaffolding
  HeroSectionContainer(props, children) {
    return `<div style="width: 100%; margin: 1em 0;">${children}</div>`;
  },

  HeroContentContainer(props, children) {
    return `<div style="max-width: 960px; margin: 0 auto; padding: 24px;">${children}</div>`;
  },

  PortalHeroContent(props, children) {
    return `<div style="text-align: center; margin: 2em 0;">${children}</div>`;
  },

  PortalContentContainer(props, children) {
    return `<div style="max-width: 960px; margin: 0 auto;">${children}</div>`;
  },

  // Social
  SocialLinks(props) {
    return `<div style="display: flex; gap: 12px; margin: 0.5em 0; align-items: center;">
      <span class="lpd-interactive-badge">⚡ interactive — static in preview</span>
      <span style="color: var(--muted-text); font-size: 0.875em;">Social links</span>
    </div>`;
  },

  // Embeds
  MarkdownEmbed(props) {
    const src = props.src || props.url || '';
    return `<div style="border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin: 1em 0;">
      <div class="lpd-interactive-badge">⚡ interactive — static in preview</div>
      <div style="color: var(--muted-text); font-size: 0.875em;">MarkdownEmbed${src ? `: ${escapeHtml(src)}` : ''}</div>
    </div>`;
  },

  ExternalContent(props, children) {
    const title = props.title || 'External Content';
    return `<div style="border: 1px solid var(--border); border-radius: 8px; margin: 1em 0;">
      <div style="padding: 10px 14px; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--hero-text);">${escapeHtml(title)}</div>
      <div style="padding: 12px 14px; max-height: 400px; overflow-y: auto;">${children}</div>
    </div>`;
  },

  // Math (basic placeholder)
  MathInline(props) {
    const expr = props.expression || props.math || '';
    return `<code style="font-style: italic;">${escapeHtml(expr)}</code>`;
  },

  MathBlock(props) {
    const expr = props.expression || props.math || '';
    return `<div style="text-align: center; padding: 12px; margin: 1em 0;"><code style="font-style: italic; font-size: 1.1em;">${escapeHtml(expr)}</code></div>`;
  },

  // Icons
  LivepeerIcon() {
    return '<span class="icon-badge">[Livepeer]</span>';
  },

  BlinkingIcon(props) {
    const icon = props.icon || 'terminal';
    return `<span class="icon-badge">[${escapeHtml(icon)}]</span>`;
  },

  DownloadButton(props) {
    const href = props.href || '#';
    const label = props.label || 'Download';
    return `<a href="${escapeHtml(href)}" style="display: inline-flex; align-items: center; gap: 6px; color: var(--accent);">[⬇] ${escapeHtml(label)}</a>`;
  },

  // ─── Links ─── //

  DoubleIconLink(props) {
    const label = props.label || '';
    const href = props.href || '#';
    const text = props.text || '';
    const iconLeft = props.iconLeft || 'github';
    const iconRight = props.iconRight || 'arrow-up-right';
    return `<a href="${escapeHtml(href)}" style="display: inline-flex; align-items: center; gap: 6px; color: var(--accent); text-decoration: none; font-weight: 500;">
      <i class="fa-solid fa-${escapeHtml(iconLeft)}"></i>
      ${escapeHtml(text || label)}
      <i class="fa-solid fa-${escapeHtml(iconRight)}" style="font-size: 0.75em;"></i>
    </a>`;
  },

  BlinkingTerminal(props) {
    return '<span class="icon-badge" style="animation: pulse 1.5s ease-in-out infinite;">[terminal]</span>';
  },

  // ─── Portal / Hero Components ─── //

  HeroImageBackgroundComponent(props, children) {
    return `<div style="position: relative; min-height: 120px; margin: -1em 0 1em 0; padding: 1.5rem; border-radius: 8px; background: linear-gradient(135deg, #0d0d0d 0%, #1a2a1a 100%); overflow: hidden;">
      ${children}
    </div>`;
  },

  Starfield(props) {
    const density = props.density || '1.1';
    return `<div style="position: absolute; inset: 0; opacity: 0.3; background: radial-gradient(1px 1px at 20% 30%, rgba(60,181,64,0.6), transparent), radial-gradient(1px 1px at 60% 70%, rgba(60,181,64,0.4), transparent), radial-gradient(1px 1px at 80% 20%, rgba(60,181,64,0.5), transparent); z-index: 0;">
      <div style="font-size: 0.7em; color: var(--muted-text); padding: 4px;">✨ Starfield (density: ${escapeHtml(density)})</div>
    </div>`;
  },

  PortalCardsHeader(props, children) {
    const title = props.title || '';
    return `<div style="margin: 1.5rem 0 0.75rem 0;">
      <div style="font-style: italic; color: var(--muted-text); font-size: 0.85em; margin-bottom: 0.25rem;">
        <i class="fa-solid fa-signs-post" style="margin-right: 4px;"></i> Choose Your Mission:
      </div>
      ${title ? `<div style="font-weight: 600;">${escapeHtml(title)}</div>` : ''}
      ${children}
    </div>`;
  },

  LogoHeroContainer(props, children) {
    const src = props.src || '';
    const alt = props.alt || '';
    const imgHeight = props.imgHeight || '20px';
    return `<div style="display: flex; flex-direction: column; align-items: center; margin: 1rem auto 0 auto;">
      ${src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" style="height: ${escapeHtml(imgHeight)}; object-fit: contain;" />` : ''}
      ${children}
    </div>`;
  },

  PortalSectionHeader(props, children) {
    const title = props.title || '';
    const icon = props.icon || '';
    return `<div style="margin: 1.5rem 0 0.5rem 0;">
      <h3>${icon ? `<i class="fa-solid fa-${escapeHtml(icon)}" style="color: var(--accent); margin-right: 6px;"></i>` : ''}${escapeHtml(title)}</h3>
      ${children}
    </div>`;
  },

  RefCardContainer(props, children) {
    return `<div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">${children}</div>`;
  },

  HeroOverviewContent(props, children) {
    return `<div style="position: relative; z-index: 1; padding: 1rem 0;">${children}</div>`;
  },

  // ─── Data / Embed Components (static placeholders for live data) ─── //

  TwitterTimeline(props) {
    return `<div class="lpd-embed-placeholder">
      <i class="fa-brands fa-x-twitter" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>Twitter/X Timeline</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live embed — renders on Mintlify</div>
    </div>`;
  },

  CoinGeckoExchanges(props) {
    const coinId = props.coinId || 'arbitrum';
    return `<div class="lpd-embed-placeholder">
      <div style="font-weight: 600; margin-bottom: 4px;">CoinGecko Exchanges</div>
      <div style="font-size: 0.85em;">Sortable exchange table for <code>${escapeHtml(coinId)}</code></div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live API data — renders on Mintlify</div>
    </div>`;
  },

  YouTubeVideoData(props) {
    const cols = props.cols || '2';
    return `<div class="lpd-embed-placeholder">
      <div style="font-weight: 600; margin-bottom: 4px;">YouTube Video Grid</div>
      <div style="font-size: 0.85em;">${escapeHtml(cols)}-column video embed grid from data</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live embed — renders on Mintlify</div>
    </div>`;
  },

  DiscordAnnouncements(props) {
    const serverName = props.serverName || 'Livepeer';
    return `<div class="lpd-embed-placeholder">
      <i class="fa-brands fa-discord" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>Discord Announcements — ${escapeHtml(serverName)}</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live data — renders on Mintlify</div>
    </div>`;
  },

  ChainlistRPCs(props) {
    const chainId = props.chainId || '42161';
    return `<div class="lpd-embed-placeholder">
      <div style="font-weight: 600; margin-bottom: 4px;">Chainlist RPCs</div>
      <div style="font-size: 0.85em;">Public RPC endpoints for chain <code>${escapeHtml(chainId)}</code></div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live API data — renders on Mintlify</div>
    </div>`;
  },

  ForumLatestLayout(props) {
    return `<div class="lpd-embed-placeholder">
      <i class="fa-solid fa-comments" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>Forum Latest Posts</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live forum data — renders on Mintlify</div>
    </div>`;
  },

  ColumnsBlogCardLayout(props) {
    const cols = props.cols || '2';
    return `<div class="lpd-embed-placeholder">
      <div style="font-weight: 600; margin-bottom: 4px;">Blog Cards</div>
      <div style="font-size: 0.85em;">${escapeHtml(cols)}-column blog card layout from data</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live data — renders on Mintlify</div>
    </div>`;
  },

  StreamplacePlayer(props) {
    return `<div class="lpd-embed-placeholder">
      <i class="fa-solid fa-play" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>Streamplace Player</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live player — renders on Mintlify</div>
    </div>`;
  },

  LumaEvents(props) {
    return `<div class="lpd-embed-placeholder">
      <i class="fa-solid fa-calendar" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>Luma Events</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live event data — renders on Mintlify</div>
    </div>`;
  },

  RssBlogCardLayout(props) {
    return `<div class="lpd-embed-placeholder">
      <i class="fa-solid fa-rss" style="font-size: 1.2em; margin-bottom: 4px;"></i>
      <div>RSS Blog Cards</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Live RSS feed — renders on Mintlify</div>
    </div>`;
  },

  // ─── Content Components ─── //

  CustomCardTitle(props) {
    const icon = props.icon || '';
    const title = props.title || '';
    return `<div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
      ${icon ? `<i class="fa-solid fa-${escapeHtml(icon)}" style="color: var(--accent);"></i>` : ''}
      <span>${escapeHtml(title)}</span>
    </div>`;
  },

  LazyLoad(props, children) {
    return `<div>${children}</div>`;
  },

  ShowcaseCards(props) {
    return `<div class="lpd-embed-placeholder">
      <div style="font-weight: 600; margin-bottom: 4px;">Showcase Cards</div>
      <div style="font-size: 0.85em;">Paginated searchable card grid from data</div>
      <div style="font-size: 0.75em; color: var(--muted-text);">Interactive — renders on Mintlify</div>
    </div>`;
  },

  PdfEmbed(props) {
    const title = props.title || 'PDF Document';
    const src = props.src || '';
    return `<div class="lpd-embed-placeholder">
      <i class="fa-solid fa-file-pdf" style="font-size: 1.5em; margin-bottom: 4px;"></i>
      <div>${escapeHtml(title)}</div>
      ${src ? `<div style="font-size: 0.75em; color: var(--muted-text);">${escapeHtml(src)}</div>` : ''}
    </div>`;
  },

  Video(props, children) {
    const title = props.title || '';
    const src = props.src || '';
    const caption = props.caption || '';
    return `<div class="lpd-frame" style="text-align: center;">
      <div style="padding: 2rem; background: var(--card-bg); border-radius: 6px;">
        <i class="fa-solid fa-play" style="font-size: 2em; color: var(--accent); margin-bottom: 8px;"></i>
        ${title ? `<div style="font-weight: 600;">${escapeHtml(title)}</div>` : ''}
        ${src ? `<div style="font-size: 0.75em; color: var(--muted-text);">${escapeHtml(src)}</div>` : ''}
      </div>
      ${caption ? `<div style="font-size: 0.85em; color: var(--muted-text); margin-top: 4px;">${escapeHtml(caption)}</div>` : ''}
      ${children}
    </div>`;
  },

  UpdateLinkList(props) {
    return `<div style="margin: 1em 0; padding-left: 16px; border-left: 2px solid var(--accent);">
      <div style="font-size: 0.85em; color: var(--muted-text);">Update link list from data</div>
    </div>`;
  },

  IconBadgeWrapper(props, children) {
    const gap = props.gap || '0.75rem';
    return `<div style="display: flex; flex-wrap: wrap; gap: ${escapeHtml(gap)}; align-items: center;">${children}</div>`;
  },

  BadgeWrapper(props, children) {
    const gap = props.gap || '0.4rem';
    return `<div style="display: flex; flex-wrap: wrap; gap: ${escapeHtml(gap)}; align-items: center;">${children}</div>`;
  },

  FocusableScrollRegions() {
    return ''; // side-effect only — no visible output
  },

  TabsContainer(props, children) {
    return `<div class="lpd-tabs">${children}</div>`;
  },

  // ─── Orchestrator/Gateway tab-specific ─── //

  WindowsOnChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Windows (On-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  WindowsOffChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Windows (Off-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  LinuxOnChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Linux (On-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  LinuxOffChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Linux (Off-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  DockerOnChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Docker (On-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  DockerOffChainTab(props, children) { return `<div class="lpd-tab-section" data-tab-title="Docker (Off-Chain)"><div class="lpd-tab-panel-content">${children}</div></div>`; },
  MacSupport(props, children) { return `<div class="lpd-callout info"><span class="lpd-callout-icon">🍎</span><div class="lpd-callout-body">${children}</div></div>`; },
  LinuxSupport(props, children) { return `<div class="lpd-callout info"><span class="lpd-callout-icon">🐧</span><div class="lpd-callout-body">${children}</div></div>`; },
  DockerSupport(props, children) { return `<div class="lpd-callout info"><span class="lpd-callout-icon">🐳</span><div class="lpd-callout-body">${children}</div></div>`; },
  GatewayOnChainWarning(props, children) { return `<div class="lpd-callout warning"><span class="lpd-callout-icon">⚠️</span><div class="lpd-callout-body">${children}</div></div>`; },
  GatewayOffChainWarning(props, children) { return `<div class="lpd-callout warning"><span class="lpd-callout-icon">⚠️</span><div class="lpd-callout-body">${children}</div></div>`; },
  EthAccountSetup(props, children) { return `<div class="lpd-callout note"><span class="lpd-callout-icon">🔑</span><div class="lpd-callout-body">${children}</div></div>`; },

  // ─── Misc low-use ─── //

  PlayIcon() { return '<i class="fa-solid fa-play" style="color: var(--accent);"></i>'; },
  PauseIcon() { return '<i class="fa-solid fa-pause" style="color: var(--accent);"></i>'; },
  LivepeerIconOld() { return '<span class="icon-badge">[Livepeer]</span>'; },
  LivepeerIconFlipped() { return '<span class="icon-badge">[Livepeer]</span>'; },
  LivepeerSVG() { return '<span class="icon-badge">[Livepeer]</span>'; },

  DocsPhilosophy(props, children) { return `<div class="lpd-callout note"><span class="lpd-callout-icon">📖</span><div class="lpd-callout-body">${children}</div></div>`; },

  OrchestratorRoleDiagram(props, children) { return `<div style="margin: 1em 0; padding: 1rem; border: 1px solid var(--border); border-radius: 8px; background: var(--card-bg);">${children || '<div style="color: var(--muted-text);">Orchestrator role diagram</div>'}</div>`; },

  TestVideoDownload(props) {
    const href = props.href || '#';
    return `<a href="${escapeHtml(href)}" style="display: inline-flex; align-items: center; gap: 6px; color: var(--accent);">[⬇] Test Video Download</a>`;
  },

  ValueResponseField(props, children) {
    const name = props.name || '';
    const type = props.type || '';
    return `<div style="margin: 0.5em 0; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;">
      <code style="color: var(--accent);">${escapeHtml(name)}</code>
      ${type ? `<span style="color: var(--muted-text); margin-left: 8px; font-size: 0.85em;">${escapeHtml(type)}</span>` : ''}
      <div style="margin-top: 4px;">${children}</div>
    </div>`;
  },

  ResponseMetaField(props, children) {
    const name = props.name || '';
    return `<div style="margin: 0.5em 0; padding: 6px 12px; border-left: 2px solid var(--border);">
      <code style="font-size: 0.85em; color: var(--muted-text);">${escapeHtml(name)}</code>
      <div style="margin-top: 2px;">${children}</div>
    </div>`;
  },

  CustomCodeBlock(props, children) {
    const lang = props.language || props.lang || '';
    return `<pre><code class="language-${escapeHtml(lang)}">${children}</code></pre>`;
  },

  View(props, children) { return `<div>${children}</div>`; },
  ChildView(props, children) { return `<div>${children}</div>`; },
  Snippet(props, children) { return `<div>${children}</div>`; },
  Panel(props, children) { return `<div style="padding: 1rem; border: 1px solid var(--border); border-radius: 8px; margin: 1em 0;">${children}</div>`; },
  BoxConfig(props, children) { return `<div style="padding: 1rem; border: 1px solid var(--border); border-radius: 8px; margin: 1em 0; background: var(--card-bg);">${children}</div>`; },

  Color(props) {
    const value = props.value || props.hex || '#3CB540';
    return `<span style="display: inline-block; width: 14px; height: 14px; border-radius: 3px; background: ${escapeHtml(value)}; vertical-align: middle; margin-right: 4px; border: 1px solid var(--border);"></span>`;
  },

  LatestVersion(props) {
    return `<span style="font-size: 0.85em; color: var(--accent);">[latest version]</span>`;
  },

  OrchAddrNote(props, children) {
    return `<div class="lpd-callout note"><span class="lpd-callout-icon">📋</span><div class="lpd-callout-body">${children}</div></div>`;
  }
};


// ─── Data-driven components (context-aware, receive workspaceRoot) ─── //

/**
 * Known data identifiers → file paths (relative to workspace root).
 * When a component prop contains a JSX expression like {contractAddresses},
 * the parser strips braces and delivers the identifier string. This map
 * tells the renderer where to load the actual data from disk.
 */
const DATA_SOURCES = {
  contractAddresses: 'snippets/data/contract-addresses/contractAddressesData.json'
};

/** Cache parsed data files within a single render pass */
const _dataCache = new Map();

function loadDataFromFile(identifier, workspaceRoot) {
  if (!workspaceRoot || !DATA_SOURCES[identifier]) return null;

  const cacheKey = `${workspaceRoot}:${identifier}`;
  if (_dataCache.has(cacheKey)) return _dataCache.get(cacheKey);

  try {
    const filePath = nodePath.join(workspaceRoot, DATA_SOURCES[identifier]);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    _dataCache.set(cacheKey, data);
    return data;
  } catch {
    return null;
  }
}

function clearDataCache() {
  _dataCache.clear();
}

/**
 * Context-aware component renderers.
 * Signature: (props, childrenHtml, context) where context = { workspaceRoot }.
 */
const contextComponents = {};


// ─── Unified Component Map ─── //

const COMPONENT_MAP = Object.assign(
  {
    'Tree.Folder': mintlify.TreeFolder,
    'Tree.File': mintlify.TreeFile
  },
  mintlify,
  livepeerComponents,
  contextComponents
);


// ─── Tier 3: Generic Placeholder ─── //

function renderPlaceholder(tag, props, childrenHtml) {
  const propsDisplay = Object.keys(props).length > 0
    ? ' ' + Object.entries(props).map(([k, v]) =>
        v === true ? k : `${k}="${escapeHtml(String(v).slice(0, 40))}"`
      ).join(' ')
    : '';

  return `<div class="lpd-placeholder">
    <span class="lpd-placeholder-tag">&lt;${escapeHtml(tag)}${propsDisplay}&gt;</span>
    ${childrenHtml ? `<div class="lpd-placeholder-children">${childrenHtml}</div>` : ''}
  </div>`;
}


// ─── Segment Renderer ─── //

function renderSegments(segments, context) {
  clearDataCache();
  const parts = [];
  let hasMermaid = false;

  for (const seg of segments) {
    switch (seg.type) {
      case 'frontmatter':
        parts.push(renderFrontmatter(seg.content));
        break;

      case 'import':
        // imports are stripped from preview
        break;

      case 'markdown':
        // Wrap in a div that preview.js will process with markdown-it
        parts.push(`<div class="lpd-md-raw">${escapeHtml(seg.content)}</div>`);
        break;

      case 'mermaid':
        hasMermaid = true;
        parts.push(`<div class="mermaid">${escapeHtml(seg.content)}</div>`);
        break;

      case 'codeblock': {
        const lang = seg.lang ? ` class="language-${escapeHtml(seg.lang)}"` : '';
        parts.push(`<pre><code${lang}>${escapeHtml(seg.content)}</code></pre>`);
        break;
      }

      case 'jsx':
        parts.push(renderJsx(seg, context));
        break;

      case 'jsx-expression': {
        const exprEscaped = escapeHtml(seg.content.trim());
        parts.push(`<span class="lpd-expr-placeholder">{${exprEscaped}}</span>`);
        break;
      }

      case 'jsx-comment': {
        const escaped = escapeHtml(seg.content);
        parts.push(
          `<details class="lpd-comment">\n  <summary class="lpd-comment-summary">💬 comment</summary>\n  <div class="lpd-comment-body"><pre class="lpd-comment-pre">${escaped}</pre></div>\n</details>`
        );
        break;
      }

      default:
        break;
    }
  }

  return { html: parts.join('\n'), hasMermaid };
}

function renderJsx(seg, context) {
  const childrenHtml = seg.children && seg.children.length > 0
    ? renderSegments(seg.children, context).html
    : '';

  const renderer = COMPONENT_MAP[seg.tag];
  if (renderer) {
    return renderer(seg.props || {}, childrenHtml, context || {});
  }

  return renderPlaceholder(seg.tag, seg.props || {}, childrenHtml);
}

function renderFrontmatter(meta) {
  const title = meta.title || meta.sidebarTitle || '';
  const display = ['pageType', 'audience', 'status', 'purpose', 'lastVerified'];
  const badges = display
    .filter((k) => meta[k])
    .map((k) => `<span>${escapeHtml(k)}: ${escapeHtml(meta[k])}</span>`)
    .join('');

  return `<div class="lpd-frontmatter">
    ${title ? `<div class="lpd-frontmatter-title">${escapeHtml(title)}</div>` : ''}
    ${badges ? `<div class="lpd-frontmatter-meta">${badges}</div>` : ''}
  </div>`;
}

module.exports = { renderSegments, COMPONENT_MAP };
