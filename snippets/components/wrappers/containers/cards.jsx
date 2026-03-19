/**
 * @component ScrollBox
 * @category layout
 * @tier composite
 * @status stable
 * @description Scroll Box layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/home/solutions/showcase.mdx, v2/home/solutions/verticals.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} children - children prop.
 * @param {number} [maxHeight=300] - max Height prop.
 * @param {boolean} [showHint=true] - show Hint prop.
 * @param {string} [ariaLabel="Scrollable content"] - aria Label prop.
 * @param {any} style - style prop.
 * @example
 * <ScrollBox style="example">Example content</ScrollBox>
 */
export const ScrollBox = ({
  children,
  maxHeight = 300,
  showHint = true,
  ariaLabel = "Scrollable content",
  style,
}) => {
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const maxHeightPx =
          typeof maxHeight === "number"
            ? maxHeight
            : parseInt(maxHeight, 10) || 300;
        setIsOverflowing(contentRef.current.scrollHeight > maxHeightPx);
      }
    };
    checkOverflow();
    // Re-check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [maxHeight, children]);

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={contentRef}
        role="region"
        tabIndex={0}
        aria-label={ariaLabel}
        style={{
          maxHeight:
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
          overflowY: "auto",
          paddingRight: 4,
          ...style,
        }}
        onScroll={(e) => {
          const el = e.target;
          const atBottom =
            el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
          const hint = el.parentNode.querySelector("[data-scroll-hint]");
          if (hint) hint.style.opacity = atBottom ? "0" : "1";
        }}
      >
        {children}
      </div>
      {showHint && isOverflowing && (
        <div
          data-scroll-hint
          style={{
            fontSize: 11,
            color: "var(--lp-color-text-muted)",
            textAlign: "center",
            marginTop: 8,
            transition: "opacity 0.2s",
          }}
        >
          Scroll for more ↓
        </div>
      )}
    </div>
  );
};
