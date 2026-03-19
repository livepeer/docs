/**
 * @component Spacer
 * @type elements
 * @subniche spacing
 * @status stable
 * @description Empty spacer div with configurable size and direction.
 * @accepts style, className, ...rest
 * @param {string} [size="1rem"] - Size used by the component.
 * @param {string} [direction="vertical"] - Direction used by the component.
 *
 * @example
 * <Spacer />
 */
export const Spacer = ({ size = "1rem", direction = "vertical", className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        ...(direction === "vertical"
          ? { height: size, width: "100%" }
          : { width: size, height: "100%" }),
        ...style,
      }}
      {...rest}
    />
  );
};
