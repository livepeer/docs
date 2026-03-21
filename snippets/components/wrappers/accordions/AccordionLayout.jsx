/**
 * @component AccordionLayout
 * @type wrappers
 * @subniche accordions
 * @status stable
 * @description Vertical stack layout with small gap, designed for accordion content sections.
 * @accepts children, className, style, ...rest
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
        gap: "0.25rem",
        marginTop: "0.25rem",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
