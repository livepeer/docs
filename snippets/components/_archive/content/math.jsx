export const MathInline = ({ latex, className = "", ariaLabel }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <span className={className} aria-label={ariaLabel || "Math expression"}>
      {`$${value}$`}
    </span>
  );
};

export const MathBlock = ({ latex, className = "", ariaLabel }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <div className={className} aria-label={ariaLabel || "Math expression"}>
      {`$$\n${value}\n$$`}
    </div>
  );
};
