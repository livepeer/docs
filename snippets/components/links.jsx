export const CustomCallout = ({
  children,
  icon = "lightbulb",
  color = "#2d9a67",
  iconSize = 16,
  textSize = "0.875rem",
  textColor,
}) => {
  // Default textColor to match the icon color if not specified
  const resolvedTextColor = textColor || color;
  // Convert hex to rgba for proper opacity
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px 20px",
        borderRadius: "16px",
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        backgroundColor: hexToRgba(color, 0.1),
        marginTop: "16px",
        marginBottom: "16px",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: "2px", width: iconSize, flexShrink: 0 }}>
        <Icon icon={icon} size={iconSize} color={color} />
      </div>
      <div
        style={{
          fontSize: textSize,
          color: resolvedTextColor,
          minWidth: 0,
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const BlinkingIcon = ({
  icon = "terminal",
  size = 16,
  color = "#2d9a67",
}) => {
  return (
    <span
      style={{
        display: "inline-flex",
        animation: "blink 3s ease-in-out infinite",
      }}
    >
      <Icon icon={icon} size={size} color={color} />
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </span>
  );
};

// Alias for backwards compatibility
export const BlinkingTerminal = BlinkingIcon;

export const DoubleIconLink = ({
  label = "",
  href = "#",
  text = "",
  iconLeft = "github",
  iconRight = "arrow-up-right",
}) => {
  return (
    <span
      style={{
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        marginLeft: "0.3rem",
      }}
    >
      {text && <span style={{ marginRight: 8 }}>{text}</span>}
      <Icon icon={iconLeft} />
      <a href={href}>{label}</a>
      <Icon icon={iconRight} size={12} color="#2d9a67" />
    </span>
  );
};

export const GotoLink = ({
  label,
  relativePath,
  text = "",
  icon = "arrow-turn-down-right",
}) => {
  return (
    <span>
      <p style={{ marginRight: 8 }}>{text}</p>
      <Icon icon={icon} />
      <a href={relativePath} style={{ marginLeft: 6 }}>
        {label}
      </a>
    </span>
  );
};

export const GotoCard = ({ label, relativePath, icon, text, cta = "" }) => {
  icon = icon ? icon : "arrow-turn-down-right";
  return (
    <Card title={label} icon={icon} href={relativePath} arrow cta={cta}>
      {text}
    </Card>
  );
};

export const TipWithArrow = ({
  children,
  icon = "lightbulb",
  arrowIcon = "arrow-up-right",
  color = "#2d9a67",
  iconSize = 16,
  arrowSize = 16,
}) => {
  // Convert hex to rgba for proper opacity
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px 20px",
        paddingRight: "48px", // Extra space for the arrow
        borderRadius: "16px",
        border: `1px solid ${hexToRgba(color, 0.2)}`,
        backgroundColor: hexToRgba(color, 0.1),
        marginTop: "16px",
        marginBottom: "16px",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: "2px", width: iconSize, flexShrink: 0 }}>
        <Icon icon={icon} size={iconSize} color={color} />
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          color: color,
          minWidth: 0,
          width: "100%",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          opacity: 0.6,
        }}
      >
        <Icon icon={arrowIcon} size={arrowSize} color={color} />
      </div>
    </div>
  );
};
