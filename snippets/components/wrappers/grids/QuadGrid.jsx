

/**
 * @component QuadGrid
 * @type wrappers
 * @subniche grids
 * @status stable
 * @description 2x2 grid with centred rotating icon overlay. Respects prefers-reduced-motion.
 * @accepts children, className, style, ...rest
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [icon="arrows-spin"] - Icon configuration used by the component.
 * @param {number} [iconSize=50] - Icon configuration used by the component.
 * @param {string} [iconColor="var(--accent)"] - Icon configuration used by the component.
 * @param {string} [spinDuration="10s"] - Spin duration used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const QuadGrid = ({
  children,
  icon = "arrows-spin",
  iconSize = 50,
  iconColor = "var(--accent)",
  spinDuration = "10s",
  className = "",
  style = {},
  ...rest
}) => {
  if (children == null) {
    console.warn("[QuadGrid] Missing children");
    return null;
  }

  return (
    <div className={className} style={{ position: "relative", ...style }} {...rest}>
      <style>{`
        @keyframes quadGridSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
      <Columns cols={2}>
        {children}
      </Columns>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}>
        <div style={{
          backgroundColor: "var(--background)",
          borderRadius: "50%",
          padding: "0.5rem",
          animation: `quadGridSpin ${spinDuration} linear infinite`,
        }}>
          <Icon icon={icon} size={iconSize} color={iconColor} />
        </div>
      </div>
    </div>
  );
};
