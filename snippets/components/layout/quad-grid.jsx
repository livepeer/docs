

export const QuadGrid = ({ 
  children, 
  icon = "arrows-spin", 
  iconSize = 50, 
  iconColor = "var(--accent)",
  spinDuration = "10s",
}) => {

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        @keyframes quadGridSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
          backgroundColor: "var(--background)",
          borderRadius: "50%",
          padding: "0.5rem",
          animation: `quadGridSpin ${spinDuration} linear infinite`,
        }}>
          <Icon icon={icon} size={iconSize} color={iconColor} />
        </div>
      </div>
    </div>
  );
};

