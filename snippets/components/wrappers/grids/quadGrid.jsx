

/**
 * @component QuadGrid
 * @category layout
 * @tier pattern
 * @status stable
 * @description Renders the quad grid component
 * @contentAffinity landing
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/about/livepeer-overview.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/vision.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [icon="arrows-spin"] - Icon configuration used by the component.
 * @param {number} [iconSize=50] - Icon configuration used by the component.
 * @param {string} [iconColor="var(--accent)"] - Icon configuration used by the component.
 * @param {string} [spinDuration="10s"] - Spin duration used by the component.
 *
 * @example
 * <QuadGrid>Example</QuadGrid>
 */
export const QuadGrid = ({ 
  children, 
  icon = "arrows-spin", 
  iconSize = 50, 
  iconColor = "var(--accent)",
  spinDuration = "10s",
}) => {
  if (children == null) {
    console.warn("[QuadGrid] Missing children");
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        @keyframes quadGridSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
