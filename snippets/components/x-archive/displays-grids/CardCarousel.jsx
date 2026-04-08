/**
 * @component CardCarousel
 * @category wrappers
 * @subcategory grids
 * @status stable
 * @description Paginated horizontal carousel with prev/next navigation and dot indicators.
 * @aiDiscoverability none
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
