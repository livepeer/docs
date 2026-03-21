/**
 * @component MathInline
 * @type elements
 * @subniche math
 * @status stable
 * @description Renders LaTeX as inline math using KaTeX.
 * @accepts style, className, ...rest
  * @aiDiscoverability none
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathInline latex="example" ariaLabel="example" />
  * @param {object} [style={}] - Optional inline style override.
 */
export const MathInline = ({ latex, className = "", ariaLabel, style = {}, ...rest }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <span className={className} aria-label={ariaLabel || "Math expression"} style={style} {...rest}>
      {`$${value}$`}
    </span>
  );
};

/**
 * @component MathBlock
 * @type elements
 * @subniche math
 * @status stable
 * @description Renders LaTeX as a block-level math expression using KaTeX.
 * @accepts style, className, ...rest
  * @aiDiscoverability none
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathBlock latex="example" ariaLabel="example" />
  * @param {object} [style={}] - Optional inline style override.
 */
export const MathBlock = ({ latex, className = "", ariaLabel, style = {}, ...rest }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <div className={className} aria-label={ariaLabel || "Math expression"} style={style} {...rest}>
      {`$$\n${value}\n$$`}
    </div>
  );
};
