/**
 * @component FocusableScrollRegions
 * @category elements
 * @subcategory a11y
 * @status stable
 * @description Makes scroll regions keyboard-focusable by adding tabindex to matching selectors.
 * @aiDiscoverability none
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
