/**
 * @component ExternalContent
 * @category content
 * @tier composite
 * @status stable
 * @description External Content content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/resources/livepeer-whitepaper.mdx, v2/cn/about/resources/livepeer-whitepaper.mdx, v2/cn/developers/technical-references/awesome-livepeer.mdx, v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/cn/gateways/run-a-gateway/install/community-projects.mdx, v2/developers/technical-references/awesome-livepeer.mdx, v2/es/about/resources/livepeer-whitepaper.mdx, v2/es/developers/technical-references/awesome-livepeer.mdx, v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/es/gateways/run-a-gateway/install/community-projects.mdx, v2/fr/about/resources/livepeer-whitepaper.mdx, v2/fr/developers/technical-references/awesome-livepeer.mdx, v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/fr/gateways/run-a-gateway/install/community-projects.mdx, v2/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/gateways/run-a-gateway/install/community-projects.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} repoName - repo Name prop.
 * @param {any} githubUrl - github Url prop.
 * @param {string} [maxHeight="1000px"] - max Height prop.
 * @param {string} [icon="github"] - icon prop.
 * @param {any} children - children prop.
 * @example
 * <ExternalContent repoName="example" githubUrl="example">Example content</ExternalContent>
 */

export const ExternalContent = ({
  repoName,
  githubUrl,
  maxHeight = "1000px",
  icon = "github",
  children,
}) => {
  return (
    <div
      style={{
        border: "1px solid var(--accent)",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "1rem",
        }}
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
            target="_blank"
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
