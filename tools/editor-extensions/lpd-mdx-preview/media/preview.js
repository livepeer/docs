/* Livepeer MDX Preview — Client-side webview script */
(function () {
  'use strict';

  // ─── Mermaid Initialization ─── //
  const isDark = document.body.classList.contains('dark');

  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: isDark
        ? {
            primaryColor: '#2b9a66',
            primaryTextColor: '#E0E4E0',
            primaryBorderColor: '#18794E',
            lineColor: '#2b9a66',
            secondaryColor: '#1a1a1a',
            tertiaryColor: '#3CB540',
            background: '#0d0d0d',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }
        : {
            primaryColor: '#3CB540',
            primaryTextColor: '#181C18',
            primaryBorderColor: '#18794E',
            lineColor: '#3CB540',
            secondaryColor: '#f9fafb',
            tertiaryColor: '#6bbf59',
            background: '#ffffff',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }
    });

    renderMermaid();
  }

  function renderMermaid() {
    const blocks = document.querySelectorAll('.mermaid');
    if (blocks.length === 0) return;

    blocks.forEach(function (block, idx) {
      if (block.getAttribute('data-processed')) return;
      const code = block.textContent;
      const id = 'mermaid-' + idx + '-' + Date.now();

      try {
        mermaid.render(id, code).then(function (result) {
          block.innerHTML = result.svg;
          block.setAttribute('data-processed', 'true');
        }).catch(function (err) {
          block.innerHTML = '<pre style="color: var(--callout-warning);">'
            + 'Mermaid error: ' + escapeHtml(err.message || String(err))
            + '</pre>';
          block.setAttribute('data-processed', 'true');
        });
      } catch (err) {
        block.innerHTML = '<pre style="color: var(--callout-warning);">'
          + 'Mermaid error: ' + escapeHtml(err.message || String(err))
          + '</pre>';
        block.setAttribute('data-processed', 'true');
      }
    });
  }

  // ─── Tabs ─── //
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lpd-tab-btn');
    if (!btn) return;

    var tabs = btn.closest('.lpd-tabs');
    if (!tabs) return;

    var index = btn.getAttribute('data-index');

    tabs.querySelectorAll('.lpd-tab-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-index') === index);
    });

    tabs.querySelectorAll('.lpd-tab-panel').forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-index') === index);
    });
  });

  // ─── Markdown Rendering ─── //
  if (typeof markdownit !== 'undefined') {
    var md = markdownit({ html: true, linkify: true, typographer: true });
    var blocks = document.querySelectorAll('.lpd-md-raw');
    blocks.forEach(function (block) {
      var raw = block.textContent;
      block.outerHTML = md.render(raw);
    });
  }

  // ─── Helpers ─── //
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
