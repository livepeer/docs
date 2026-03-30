/**
 * @component ExternalContent
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Fetches and renders external markdown with scrollable container and source link.
 * @dataSource fetch(url)
  * @aiDiscoverability none
 * @param {string} repoName - Repo name used by the component.
 * @param {string} githubUrl - Github url used by the component.
 * @param {string} [maxHeight="1000px"] - Max height used by the component.
 * @param {string} [icon="github"] - Icon configuration used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ExternalContent = ({
  repoName,
  githubUrl,
  maxHeight = "1000px",
  icon = "github",
  children,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        border: "1px solid var(--accent)",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "1rem",
          ...style,
        }}
      {...rest}
      >
        <div
          style={{
            backgroundColor: "var(--card-background)",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Icon icon={icon} size={16} />
            <strong>{repoName}</strong>
          </span>
          <a
            href={githubUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              color: "var(--accent)",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            View on GitHub <Icon icon="arrow-up-right-from-square" size={12} />
          </a>
        </div>
        <div
          style={{
            maxHeight: maxHeight,
            overflowY: "auto",
            padding: "0 1rem",
          }}
          role="region"
          tabIndex={0}
          aria-label={repoName ? `Scrollable content for ${repoName}` : "Scrollable content"}
        >
          {children}
        </div>
      </div>
  );
};
