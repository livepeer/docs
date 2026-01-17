/**
 * BasicBtn - Basic button component (placeholder)
 *
 * @description
 * Placeholder component for basic button functionality. Currently returns empty div.
 *
 * @example
 * <BasicBtn />
 *
 * @author Livepeer Documentation Team
 */
export const BasicBtn = () => {
  return <div></div>;
};

/**
 * DownloadButton - Interactive download button with lazy loading
 *
 * @description
 * A download button that uses IntersectionObserver for lazy rendering.
 * Only renders the full button when it becomes visible in the viewport.
 * Supports custom icons, labels, and optional border styling.
 *
 * @param {string} [label="Download"] - Button text label
 * @param {string} [icon="download"] - Left icon name
 * @param {string} downloadLink - URL of the file to download
 * @param {string} [rightIcon=""] - Optional right icon name
 * @param {boolean} [border=false] - Whether to show a border around the button
 *
 * @example
 * <DownloadButton
 *   label="Download PDF"
 *   downloadLink="https://example.com/file.pdf"
 *   icon="file-pdf"
 *   border={true}
 * />
 *
 * @author Livepeer Documentation Team
 */
export const DownloadButton = ({
  label = "Download",
  icon = "download",
  downloadLink,
  rightIcon = "",
  border = false,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  downloadLink = downloadLink ? downloadLink : "https://Livepeer.org";

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (!isVisible) {
    return (
      <span ref={ref} style={{ minHeight: "20px", display: "inline-block" }} />
    );
  }

  return (
    <span
      ref={ref}
      style={
        border
          ? {
              border: "1px solid grey",
              borderRadius: "6px",
              padding: "6px 10px",
              display: "inline-block",
              cursor: "pointer",
            }
          : { cursor: "pointer" }
      }
    >
      <Icon icon={icon} size={20} />
      <button
        onClick={handleDownload}
        style={{
          marginRight: 8,
          marginLeft: 8,
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          textDecoration: "underline",
          padding: 0,
          font: "inherit",
        }}
      >
        {label}
      </button>
      {rightIcon && (
        <Icon icon={rightIcon} style={{ marginLeft: 8 }} size={20} />
      )}
    </span>
  );
};
