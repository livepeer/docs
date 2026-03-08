/**
 * CardCarousel
 *
 * Renders a simple carousel that paginates through a fixed number of cards.
 * Uses theme-aware colors for buttons and indicators.
 *
 * @param {React.ReactNode} children - Card elements to display.
 * @param {number} visibleCount - Number of cards to show per view.
 * @param {string|number} gap - Gap between cards (CSS value).
 * @param {boolean} showDots - Whether to show page indicator dots.
 * @param {object} style - Container style overrides.
 * @example
 * <CardCarousel visibleCount={3}>
 *   <InteractiveCard ... />
 *   <InteractiveCard ... />
 *   <InteractiveCard ... />
 *   <InteractiveCard ... />
 * </CardCarousel>
 */
export const CardCarousel = ({
  children,
  visibleCount = 3,
  gap = "1.5rem",
  showDots = true,
  style,
}) => {
  const cards = useMemo(() => {
    if (children == null || children === false) return [];
    if (Array.isArray(children)) {
      return children.filter((child) => child != null && child !== false);
    }
    return [children];
  }, [children]);
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        width: "100%",
        ...style,
      }}
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
            gap: "1rem",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            style={{
              border: "1px solid var(--accent)",
              background: "var(--card-background)",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--text)",
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
                        ? "var(--accent)"
                        : "var(--border)",
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
              border: "1px solid var(--accent)",
              background: "var(--card-background)",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--text)",
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};
