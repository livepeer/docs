/**
 * FocusableScrollRegions - Adds focusability to known scrollable regions on the page.
 *
 * @description
 * Some Mintlify-rendered containers (tab panels, KaTeX spans) use overflow scrolling
 * but are not keyboard-focusable by default. This helper adds tabindex=0 so the
 * scrollable region can be accessed via keyboard, satisfying WCAG expectations.
 *
 * @param {string[]} [selectors] - CSS selectors to target for focusability.
 *
 * @example
 * <FocusableScrollRegions />
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
