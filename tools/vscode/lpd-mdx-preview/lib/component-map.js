'use strict';

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
    return `<div style="margin: 1em 0;">
      <div style="margin-bottom: 8px; color: var(--muted-text); font-size: 0.85em;">[Search table — interactive in Mintlify]</div>
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
    return `<div style="display: flex; gap: 12px; margin: 0.5em 0; color: var(--muted-text);">
      [Social links — rendered in Mintlify]
    </div>`;
  },

  // Embeds
  MarkdownEmbed(props, children) {
    return `<div style="border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin: 1em 0;">${children}</div>`;
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
  }
};


// ─── Unified Component Map ─── //

const COMPONENT_MAP = Object.assign({}, mintlify, livepeerComponents);


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

function renderSegments(segments) {
  const parts = [];

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
        parts.push(`<div class="mermaid">${escapeHtml(seg.content)}</div>`);
        break;

      case 'codeblock': {
        const lang = seg.lang ? ` class="language-${escapeHtml(seg.lang)}"` : '';
        parts.push(`<pre><code${lang}>${escapeHtml(seg.content)}</code></pre>`);
        break;
      }

      case 'jsx':
        parts.push(renderJsx(seg));
        break;

      case 'jsx-expression':
        // skip comments and expressions
        break;

      default:
        break;
    }
  }

  return parts.join('\n');
}

function renderJsx(seg) {
  const childrenHtml = seg.children && seg.children.length > 0
    ? renderSegments(seg.children)
    : '';

  const renderer = COMPONENT_MAP[seg.tag];
  if (renderer) {
    return renderer(seg.props || {}, childrenHtml);
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
