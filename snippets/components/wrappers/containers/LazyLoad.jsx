/**
 * @component LazyLoad
 * @type wrappers
 * @subniche containers
 * @status stable
 * @description Defers rendering of children until the element scrolls into (or near) the viewport. Uses IntersectionObserver — fires once, then disconnects.
 * @accepts children, height, offset, className, style, ...rest
 * @aiDiscoverability none
 * @param {React.ReactNode} children - Content to render when visible.
 * @param {string} [height="200px"] - Placeholder min-height before content loads.
 * @param {string} [offset="200px"] - rootMargin for the IntersectionObserver (how far ahead to trigger).
 * @param {string} [className=""] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const LazyLoad = ({ children, height = "200px", offset = "200px", className = "", style = {}, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div ref={ref} className={className} style={{ minHeight: visible ? "auto" : height, ...style }} {...rest}>
      {visible ? children : null}
    </div>
  );
};
