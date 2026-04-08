// ─── Grids — CardCarousel + QuadGrid ─── //

/**
 * @component CardCarousel
 * @category displays
 * @subcategory grids
 * @status stable
 * @description Paginated horizontal carousel with prev/next navigation and dot indicators.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {number} [visibleCount=3] - Visible count used by the component.
 * @param {string} [gap="var(--lp-spacing-6)"] - Gap used by the component.
 * @param {boolean} [showDots=true] - Boolean flag that controls component behaviour.
 * @param {object} style - Style used by the component.
 * @param {string} [className=""] - CSS class name.
 */
export const CardCarousel = ({
  children,
  visibleCount = 3,
  gap = "var(--lp-spacing-6)",
  showDots = true,
  style = {},
  className = "",
  ...rest
}) => {
  const cards = useMemo(() => {
    if (children == null || children === false) return [];
    if (Array.isArray(children)) {
      return children.filter((child) => child != null && child !== false);
    }
    return [children];
  }, [children]);

  if (cards.length === 0) {
    console.warn("[CardCarousel] Missing children");
    return null;
  }

  const total = cards.length;
  const count = Math.max(1, Math.min(visibleCount, total || 1));
  const pageCount = Math.max(1, Math.ceil(total / count));
  const [pageIndex, setPageIndex] = useState(0);

  const startIndex = pageIndex * count;
  const pageCards = cards.slice(startIndex, startIndex + count);

  const goPrev = () =>
    setPageIndex((prev) => (prev - 1 + pageCount) % pageCount);
  const goNext = () => setPageIndex((prev) => (prev + 1) % pageCount);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--lp-spacing-3)",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
          gap,
        }}
      >
        {pageCards}
      </div>

      {pageCount > 1 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--lp-spacing-4)",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            style={{
              border: "1px solid var(--lp-color-accent)",
              background: "var(--lp-color-bg-card)",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--lp-color-text-secondary)",
            }}
          >
            ←
          </button>

          {showDots && (
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {Array.from({ length: pageCount }).map((_, index) => (
                <span
                  key={`carousel-dot-${index}`}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background:
                      index === pageIndex
                        ? "var(--lp-color-accent)"
                        : "var(--lp-color-border-default)",
                  }}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            style={{
              border: "1px solid var(--lp-color-accent)",
              background: "var(--lp-color-bg-card)",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--lp-color-text-secondary)",
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};



/**
 * @component QuadGrid
 * @category displays
 * @subcategory grids
 * @status stable
 * @description 2x2 grid with centred rotating icon overlay. Respects prefers-reduced-motion.
  * @aiDiscoverability none
 * @usedIn v2/about/concepts/livepeer-overview.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/vision.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [icon="arrows-spin"] - Icon configuration used by the component.
 * @param {number} [iconSize=50] - Icon configuration used by the component.
 * @param {string} [iconColor="var(--lp-color-accent)"] - Icon configuration used by the component.
 * @param {string} [spinDuration="10s"] - Spin duration used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const QuadGrid = ({
  children,
  icon = "arrows-spin",
  iconSize = 50,
  iconColor = "var(--lp-color-accent)",
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
          backgroundColor: "var(--lp-color-bg-page)",
          borderRadius: "50%",
          padding: "var(--lp-spacing-2)",
          animation: `quadGridSpin ${spinDuration} linear infinite`,
        }}>
          <Icon icon={icon} size={iconSize} color={iconColor} />
        </div>
      </div>
    </div>
  );
};
