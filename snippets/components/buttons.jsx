export const BasicBtn = () => {
  return <div></div>;
};

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
