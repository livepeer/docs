/**
 * @component LazyLoad
 * @category wrappers
 * @subcategory containers
 * @status stable
 * @description Defers rendering of children until the element scrolls into (or near) the viewport. Uses IntersectionObserver — fires once, then disconnects. Fades content in over 400ms to prevent layout flash from async children (embeds, fetched data).
 * @aiDiscoverability none
 * @param {React.ReactNode} children - Content to render when visible.
 * @param {string} [height="200px"] - Placeholder min-height before content loads.
 * @param {string} [offset="200px"] - rootMargin for the IntersectionObserver (how far ahead to trigger).
 * @param {number} [fadeDuration=400] - Fade-in duration in milliseconds.
 * @param {string} [className=""] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const LazyLoad = ({ children, height = "200px", offset = "200px", fadeDuration = 400, className = "", style = {}, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  /* Observe viewport intersection — fire once, then disconnect */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: offset }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Once children are in the DOM (visible), wait one frame then trigger fade-in */
  useEffect(() => {
    if (!visible) return;
    const frameId = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  /* Placeholder shown before intersection triggers */
  const placeholder = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: height,
        color: "var(--text)",
        opacity: 0.4,
        fontSize: "0.85rem",
        fontFamily: "inherit",
        letterSpacing: "0.02em",
      }}
    >
      Loading...
    </div>
  );

  /* Fade-in wrapper for children */
  const fadeDurationSec = fadeDuration / 1000;
  const contentStyle = {
    opacity: ready ? 1 : 0,
    transition: `opacity ${fadeDurationSec}s ease-in-out`,
    minHeight: ready ? "auto" : height,
  };

  return (
    <div ref={ref} className={className} style={{ minHeight: visible ? "auto" : height, ...style }} {...rest}>
      {visible ? (
        <div style={contentStyle}>
          {children}
        </div>
      ) : placeholder}
    </div>
  );
};
