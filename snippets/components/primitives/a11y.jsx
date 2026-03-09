/**
 * @component FocusableScrollRegions
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Focusable Scroll Regions primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/resources/documentation-guide/style-guide.mdx, v2/es/resources/documentation-guide/style-guide.mdx, v2/fr/resources/documentation-guide/style-guide.mdx, v2/resources/documentation-guide/style-guide.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} selectors - selectors prop.
 * @example
 * <FocusableScrollRegions selectors="example" />
 */
export const FocusableScrollRegions = ({ selectors }) => {
  useEffect(() => {
    const fallbackSelectors = [
      '[data-component-part="tab-content"]',
      '.katex',
    ];
    const list =
      Array.isArray(selectors) && selectors.length > 0
        ? selectors
        : fallbackSelectors;
    list.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.hasAttribute('tabindex')) {
          el.setAttribute('tabindex', '0');
        }
      });
    });
  }, [selectors]);

  return null;
};
