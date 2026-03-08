'use strict';

function toText(value) {
  return String(value || '').toLowerCase();
}

function countMatches(content, re) {
  return (String(content || '').match(re) || []).length;
}

function getSignalValue(page, signal) {
  const extractors = {
    internal_link_count: () => (page.internalLinks || []).length,
    code_block_count: () => (page.codeBlocks || []).length,
    word_count: () => Number(page.wordCount || 0),
    heading_count: () => (page.headings || []).length,
    max_heading_level: () => {
      const levels = (page.headings || []).map((heading) => Number(heading.level || 0)).filter(Boolean);
      if (levels.length === 0) return 0;
      return Math.max(...levels);
    },
    steps_component: () => ((page.components || []).includes('Steps') ? 1 : 0),
    h2_or_accordion_count: () => {
      const h2Count = (page.headings || []).filter((heading) => Number(heading.level) === 2).length;
      const accordionCount = countMatches(page.content, /<Accordion(?:Group)?[\s>]/g);
      return Math.max(h2Count, accordionCount);
    },
    code_inline_dense: () => countMatches(page.content, /`[^`]+`/g),
    error_keyword: () => (/\b(error|fail|exception|timeout|refused|denied|cannot|unable)\b/i.test(page.textContent || '') ? 1 : 0)
  };

  const extractor = extractors[signal];
  if (!extractor) {
    throw new Error(`Unknown signal: ${signal}`);
  }
  return extractor();
}

const JARGON_TERMS = [
  'orchestrator',
  'delegator',
  'transcoding',
  'transcode',
  'lpt',
  'arbitrum',
  'clearinghouse',
  'byoc',
  'go-livepeer',
  'aiserviceregistry',
  'pipeline',
  'epoch',
  'round',
  'bonding',
  'unbonding',
  'slashing',
  'erc-20',
  'wei',
  'gwei',
  'mainnet',
  'testnet'
];

const DEFINITION_SIGNALS = ['is a', 'refers to', 'means', 'defined as', 'also known as', 'i.e.'];

const BOOLEAN_CHECKS = {
  first_para_has_value_prop(page) {
    const firstPara = String(page.textContent || '').split(/\n\n/)[0] || '';
    const hasAudienceSignal = /you|developer|operator|delegat|build|run|stake|community/i.test(firstPara);
    const hasActionSignal = /learn|find|get started|discover|explore|choose|set up|start/i.test(firstPara);
    return hasAudienceSignal && hasActionSignal;
  },

  all_internal_links_resolve(page) {
    return !(page.flags || []).includes('broken_links');
  }
};

function splitByH2(page) {
  const text = String(page.textContent || '');
  const parts = text.split(/(?=^## )/m);
  return parts
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const lines = part.split('\n');
      const heading = lines[0].replace(/^##\s*/, '').trim();
      const body = lines.slice(1).join('\n').trim();
      const wordCount = body ? body.split(/\s+/).filter(Boolean).length : 0;
      return { heading, content: body, wordCount };
    });
}

const EVALUATORS = {
  boolean(page, rule) {
    const fn = BOOLEAN_CHECKS[rule.check];
    if (!fn) throw new Error(`Unknown boolean check: ${rule.check}`);
    return Boolean(fn(page));
  },

  threshold(page, rule) {
    const value = getSignalValue(page, rule.signal);
    if (rule.min !== undefined && value < rule.min) return false;
    if (rule.max !== undefined && value > rule.max) return false;
    return true;
  },

  absence(page, rule) {
    return getSignalValue(page, rule.signal) === 0;
  },

  presence(page, rule) {
    const components = Array.isArray(rule.components) ? rule.components : [];
    return components.some((component) => (page.components || []).includes(component));
  },

  heading_keyword(page, rule) {
    const keywords = (rule.keywords || []).map((keyword) => toText(keyword));
    return (page.headings || []).some((heading) => {
      const text = toText(heading.text);
      return keywords.some((keyword) => text.includes(keyword));
    });
  },

  content_keyword(page, rule) {
    const text = toText(page.textContent);
    return (rule.keywords || []).some((keyword) => text.includes(toText(keyword)));
  },

  presence_any(page, rule) {
    const signals = Array.isArray(rule.signals) ? rule.signals : [];
    return signals.some((signal) => {
      switch (signal) {
        case 'mermaid':
          return String(page.content || '').includes('```mermaid') || (page.components || []).includes('Mermaid');
        case 'image':
          return (page.images || []).length > 0;
        case 'table':
          return (page.tables || []).length > 0;
        case 'parameter_list':
          return /\|\s*(parameter|name|field|flag|option)\s*\|/i.test(page.content || '');
        case 'openapi_marker':
          return Boolean(page.frontmatter?.openapi) || /openapi/i.test(String(page.content || ''));
        case 'code_inline_dense':
          return countMatches(page.content, /`[^`]+`/g) > 5;
        case 'error_keyword':
          return /\b(error|fail|exception|timeout|cannot|unable)\b/i.test(page.textContent || '');
        default:
          return false;
      }
    });
  },

  content_check(page, rule) {
    if (rule.check !== 'first_200_words_no_jargon') {
      return true;
    }

    const words = String(page.textContent || '').split(/\s+/).slice(0, 200);
    const first200 = words.join(' ').toLowerCase();
    let undefinedJargon = 0;
    for (const term of JARGON_TERMS) {
      const idx = first200.indexOf(term);
      if (idx === -1) continue;
      const window = first200.slice(Math.max(0, idx - 80), idx + term.length + 80);
      const defined = DEFINITION_SIGNALS.some((signal) => window.includes(signal));
      if (!defined) undefinedJargon += 1;
    }
    return undefinedJargon <= 1;
  },

  heading_pattern(page, rule) {
    const headings = (page.headings || []).filter((heading) => Number(heading.level) <= 3);
    if (headings.length < 2) return false;

    switch (rule.pattern) {
      case 'question':
        return (
          headings.filter((heading) => {
            const text = String(heading.text || '').trim();
            return /\?$/.test(text) || /^(how|what|why|when|where|can|do|is|should|will)\b/i.test(text);
          }).length >= 3
        );
      case 'error_or_symptom':
        return (
          headings.filter((heading) => {
            const text = String(heading.text || '');
            return (
              /\b(error|fail|cannot|unable|timeout|crash|not working|issue|warning)\b/i.test(text) ||
              /^`[^`]+`/.test(text)
            );
          }).length >= 2
        );
      case 'alphabetical': {
        const h2 = (page.headings || [])
          .filter((heading) => Number(heading.level) === 2)
          .map((heading) => toText(heading.text));
        if (h2.length < 5) return true;
        let ordered = 0;
        for (let i = 1; i < h2.length; i += 1) {
          if (h2[i] >= h2[i - 1]) ordered += 1;
        }
        return ordered / (h2.length - 1) >= 0.7;
      }
      default:
        return true;
    }
  },

  avg_section_words(page, rule) {
    const sections = splitByH2(page);
    if (sections.length === 0) return false;
    const total = sections.reduce((sum, section) => sum + section.wordCount, 0);
    const average = total / sections.length;
    const min = rule.min !== undefined ? rule.min : 0;
    const max = rule.max !== undefined ? rule.max : Number.POSITIVE_INFINITY;
    return average >= min && average <= max;
  },

  advisory() {
    return true;
  }
};

module.exports = {
  EVALUATORS,
  JARGON_TERMS,
  BOOLEAN_CHECKS,
  getSignalValue,
  splitByH2
};
