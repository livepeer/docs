'use strict';

/**
 * Tier 1 — Mintlify built-in component HTML templates.
 * Each function: (props, childrenHtml) => htmlString
 */

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function iconBadge(name) {
  if (!name) return '';
  return `<span class="icon-badge">[${escapeHtml(name)}]</span>`;
}

// ─── Callouts ─── //

function Note(props, children) {
  return `<div class="lpd-callout note">
    <span class="lpd-callout-icon">ℹ️</span>
    <div class="lpd-callout-body">${children}</div>
  </div>`;
}

function Tip(props, children) {
  return `<div class="lpd-callout tip">
    <span class="lpd-callout-icon">💡</span>
    <div class="lpd-callout-body">${children}</div>
  </div>`;
}

function Warning(props, children) {
  return `<div class="lpd-callout warning">
    <span class="lpd-callout-icon">⚠️</span>
    <div class="lpd-callout-body">${children}</div>
  </div>`;
}

function Info(props, children) {
  return `<div class="lpd-callout info">
    <span class="lpd-callout-icon">ℹ️</span>
    <div class="lpd-callout-body">${children}</div>
  </div>`;
}

function Callout(props, children) {
  const icon = props.icon || 'info';
  return `<div class="lpd-callout note">
    <span class="lpd-callout-icon">${iconBadge(icon)}</span>
    <div class="lpd-callout-body">${children}</div>
  </div>`;
}

// ─── Card / CardGroup ─── //

function Card(props, children) {
  const title = props.title || '';
  const icon = props.icon || '';
  const href = props.href || '';
  const horizontal = props.horizontal !== undefined;
  const arrow = props.arrow !== undefined;

  const cls = 'lpd-card' + (horizontal ? ' horizontal' : '');
  const inner = `
    <div class="lpd-card-title">
      ${iconBadge(icon)}
      ${escapeHtml(title)}
      ${arrow ? '<span class="lpd-card-arrow">→</span>' : ''}
    </div>
    <div class="lpd-card-body">${children}</div>
  `;

  if (href) {
    return `<div class="${cls}"><a href="${escapeHtml(href)}">${inner}</a></div>`;
  }
  return `<div class="${cls}">${inner}</div>`;
}

function CardGroup(props, children) {
  const cols = props.cols || '2';
  return `<div class="lpd-card-group" data-cols="${escapeHtml(cols)}">${children}</div>`;
}

// ─── Tabs ─── //

let tabGroupCounter = 0;

function Tabs(props, children) {
  // children contains rendered Tab components
  // We need to parse them into a tabbed interface
  tabGroupCounter++;
  return `<div class="lpd-tabs" data-group="${tabGroupCounter}">${children}</div>`;
}

function Tab(props, children) {
  const title = props.title || 'Tab';
  const icon = props.icon || '';
  // Tabs index is handled client-side via data attributes
  const idx = Math.random().toString(36).slice(2, 8);
  return `
    <div class="lpd-tab-section" data-tab-title="${escapeHtml(title)}" data-tab-icon="${escapeHtml(icon)}">
      <div class="lpd-tab-panel-content">${children}</div>
    </div>`;
}

// ─── Accordion ─── //

function Accordion(props, children) {
  const title = props.title || 'Details';
  const icon = props.icon || '';
  return `<details class="lpd-accordion">
    <summary>${iconBadge(icon)} ${escapeHtml(title)}</summary>
    <div class="lpd-accordion-body">${children}</div>
  </details>`;
}

function AccordionGroup(props, children) {
  return `<div class="lpd-accordion-group">${children}</div>`;
}

// ─── Steps ─── //

function Steps(props, children) {
  return `<div class="lpd-steps">${children}</div>`;
}

function Step(props, children) {
  const title = props.title || '';
  return `<div class="lpd-step">
    ${title ? `<div class="lpd-step-title">${escapeHtml(title)}</div>` : ''}
    <div class="lpd-step-body">${children}</div>
  </div>`;
}

// ─── Frame ─── //

function Frame(props, children) {
  return `<div class="lpd-frame">${children}</div>`;
}

// ─── Columns ─── //

function Columns(props, children) {
  return `<div class="lpd-columns">${children}</div>`;
}

// ─── Expandable ─── //

function Expandable(props, children) {
  const title = props.title || 'Show more';
  return `<details class="lpd-expandable">
    <summary>${escapeHtml(title)}</summary>
    <div class="lpd-expandable-body">${children}</div>
  </details>`;
}

// ─── CodeBlock ─── //

function CodeBlock(props, children) {
  const lang = props.language || props.lang || '';
  return `<pre><code class="language-${escapeHtml(lang)}">${children}</code></pre>`;
}

// ─── Icon ─── //

function Icon(props) {
  const name = props.icon || props.name || '';
  return iconBadge(name);
}

// ─── Update ─── //

function Update(props, children) {
  const label = props.label || props.date || '';
  return `<div style="margin: 1em 0; padding-left: 16px; border-left: 2px solid var(--accent);">
    ${label ? `<div style="font-weight: 600; color: var(--accent); margin-bottom: 4px;">${escapeHtml(label)}</div>` : ''}
    <div>${children}</div>
  </div>`;
}

// ─── ResponseField ─── //

function ResponseField(props, children) {
  const name = props.name || '';
  const type = props.type || '';
  return `<div style="margin: 0.5em 0; padding: 8px 12px; border: 1px solid var(--border); border-radius: 6px;">
    <code style="color: var(--accent);">${escapeHtml(name)}</code>
    ${type ? `<span style="color: var(--muted-text); margin-left: 8px; font-size: 0.85em;">${escapeHtml(type)}</span>` : ''}
    <div style="margin-top: 4px;">${children}</div>
  </div>`;
}

// ─── StyledTable variants (Mintlify uses these as globals too) ─── //

function StyledTable(props, children) {
  return `<div style="overflow-x: auto; margin: 1em 0;"><table>${children}</table></div>`;
}

function TableRow(props, children) {
  const isHeader = props.header !== undefined;
  return isHeader ? `<tr style="background: var(--card-bg);">${children}</tr>` : `<tr>${children}</tr>`;
}

function TableCell(props, children) {
  const isHeader = props.header !== undefined;
  return isHeader
    ? `<th style="font-weight: 600; color: var(--hero-text);">${children}</th>`
    : `<td>${children}</td>`;
}

module.exports = {
  Note, Tip, Warning, Info, Callout,
  Card, CardGroup,
  Tabs, Tab,
  Accordion, AccordionGroup,
  Steps, Step,
  Frame, Columns, Expandable,
  CodeBlock, Icon, Update, ResponseField,
  StyledTable, TableRow, TableCell
};
