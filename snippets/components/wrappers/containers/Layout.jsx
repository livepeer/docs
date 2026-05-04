/**
 * Layout utilities — LazyLoad and ScrollBox.
 */

// Re-exports for consumers that import these from Layout.jsx
export { FlexContainer, GridContainer } from '/snippets/components/wrappers/containers/Containers.jsx';

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
'use client'

export const LazyLoad = ({ children, height = "200px", offset = "200px", fadeDuration = 400, className = "", style = {}, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

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

  useEffect(() => {
    if (!visible) return;
    const frameId = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  const placeholder = (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: height, ...style }}
      {...rest}
    />
  );

  if (!visible) return placeholder;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: ready ? 1 : 0,
        transition: `opacity ${fadeDuration}ms ease-in`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * @component ScrollBox
 * @category wrappers
 * @subcategory containers
 * @status stable
 * @description Scrollable container with max-height, overflow hint, and accessible region role.
 * @aiDiscoverability none
 * @usedIn v2/community/connect/trending-topics.mdx, v2/home/solutions/showcase.mdx, v2/home/solutions/trending.mdx, v2/home/solutions/verticals.mdx, v2/resources/changelog/ai-compute/ai-runner.mdx, v2/resources/changelog/ai-compute/comfystream.mdx, v2/resources/changelog/ai-compute/pytrickle.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx, v2/resources/changelog/apis-sdks/livepeer-js.mdx, v2/resources/changelog/apis-sdks/livepeer-python.mdx, v2/resources/changelog/ecosystem/awesome-livepeer.mdx, v2/resources/changelog/ecosystem/website.mdx, v2/resources/changelog/protocol/go-livepeer.mdx, v2/resources/changelog/protocol/lips.mdx, v2/resources/changelog/protocol/naap.mdx, v2/resources/changelog/protocol/subgraph.mdx, v2/resources/changelog/tooling/explorer.mdx, v2/resources/changelog/tooling/livepeer-data.mdx, v2/resources/changelog/tooling/livepeer-python-gateway.mdx, v2/solutions/daydream/changelog.mdx, v2/solutions/daydream/community.mdx, v2/solutions/embody/changelog.mdx, v2/solutions/embody/community.mdx, v2/solutions/frameworks/changelog.mdx, v2/solutions/frameworks/community.mdx, v2/solutions/livepeer-studio/changelog.mdx, v2/solutions/livepeer-studio/community.mdx, v2/solutions/portal.mdx, v2/solutions/streamplace/changelog.mdx, v2/solutions/streamplace/community.mdx
 * @breakingChangeRisk high
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {number} [maxHeight=300] - max Height prop.
 * @param {boolean} [showHint=true] - show Hint prop.
 * @param {string} [ariaLabel="Scrollable content"] - aria Label prop.
 * @param {any} style - style prop.
 * @param {string} [className=""] - CSS class name.
 */
export const ScrollBox = ({
  children,
  maxHeight = 300,
  showHint = true,
  ariaLabel = "Scrollable content",
  style = {},
  className = "",
  ...rest
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
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [maxHeight, children]);

  return (
    <div className={className} style={{ position: "relative", ...style }} {...rest}>
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
