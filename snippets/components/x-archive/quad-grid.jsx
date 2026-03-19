

/**
 * @component QuadGrid
 * @category layout
 * @tier composite
 * @status stable
 * @description Quad Grid layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-overview.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/vision.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} children - children prop.
 * @param {string} [icon="arrows-spin"] - icon prop.
 * @param {number} [iconSize=50] - icon Size prop.
 * @param {string} [iconColor="var(--accent)"] - icon Color prop.
 * @param {string} [spinDuration="10s"] - spin Duration prop.
 * @example
 * <QuadGrid>Example content</QuadGrid>
 */
export const QuadGrid = ({ 
  children, 
  icon = "arrows-spin", 
  iconSize = 50, 
  iconColor = "var(--accent)",
  spinDuration = "10s",
}) => {

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

