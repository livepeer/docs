/**
 * @component AccordionLayout
 * @category wrappers
 * @subcategory accordions
 * @status stable
 * @description Vertical stack layout with small gap, designed for accordion content sections.
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const AccordionLayout = ({ children, className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--lp-spacing-1)",
        marginTop: "var(--lp-spacing-1)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
