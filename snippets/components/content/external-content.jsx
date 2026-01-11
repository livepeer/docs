/**
 * ExternalContent - A reusable component for displaying external GitHub content
 * Usage:
 *   import { ExternalContent } from '/snippets/components/content/external-content.jsx'
 *   import MyContent from '/snippets/external/my-content.mdx'
 *   <ExternalContent
 *     repoName="livepeer/awesome-livepeer"
 *     githubUrl="https://github.com/livepeer/awesome-livepeer"
 *   >
 *     <MyContent />
 *   </ExternalContent>
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
        border: "1px solid #2d9a67",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#0d0d0d",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid #2d9a67",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Icon icon={icon} size={16} />
          <strong>{repoName}</strong>
        </span>
        <a
          href={githubUrl}
          target="_blank"
          style={{
            color: "#2d9a67",
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
      >
        {children}
      </div>
    </div>
  );
};
