/**
 * SocialLinks - Social media icon links
 *
 * @description
 * Displays a row of social media icon links for Livepeer.
 * Icons use official brand colors for each platform.
 *
 * @param {number} [size=20] - Icon size
 * @param {string} [gap="0.5rem"] - Gap between icons
 * @param {string} [justify="center"] - Justify content (center, flex-start, flex-end)
 *
 * @example
 * <SocialLinks />
 * <SocialLinks size={24} justify="flex-start" />
 *
 * @author Livepeer Documentation Team
 */

    {/* <span style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
    <a href="https://discord.com/invite/livepeer" target="_blank" rel="noopener noreferrer" style={{border: "0px solide white"}}></a>
    <a href="https://github.com/livepeer" target="_blank" rel="noopener noreferrer"></a>
    <a href="https://forum.livepeer.org" target="_blank" rel="noopener noreferrer"><Icon icon="discord" size={20} color="var(--accent)" /></a>
    <a href="https://github.com/livepeer" target="_blank" rel="noopener noreferrer"><Icon icon="github" size={20} color="var(--accent)" /></a>
    <a href="https://forum.livepeer.org" target="_blank" rel="noopener noreferrer"><Icon icon="message" size={20} color="var(--accent)" /></a>
    <a href="https://twitter.com/livepeer" target="_blank" rel="noopener noreferrer"><Icon icon="twitter" size={20} color="var(--accent)" /></a>
    </span> */}
export const SocialLinks = ({
  size = 20,
  gap = "0.75rem",
  justify = "center",
  color,
}) => {
  const linkStyle = {
    border: "none",
    borderBottom: "none",
    textDecoration: "none",
    display: "inline-flex",
  };

  // Brand colors
  const colors = {
    discord: color ? color : "#5865F2",
    twitter: color ? color : "var(--hero-text)",
    github: color ? color : "#f0f0f0",
    forum: color ? color : "#00AEEF",
    website: color ? color : "var(--accent)",
    blog: color ? color : "var(--accent)",
  };

  return (
    <>
      <style>{`
        .social-links a {
          border: none !important;
          border-bottom: none !important;
        }
      `}</style>
      <span
        className="social-links"
        style={{
          display: "flex",
          justifyContent: justify,
          gap: gap,
          marginTop: "0.5rem",
        }}
      >
                <a
          href="https://discord.com/invite/livepeer"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer Discord">
            <Icon icon="discord" size={size} color={colors.discord} />
          </Tooltip>
        </a>
        <a
          href="https://livepeer.org"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer Website">
            <Icon icon="globe" size={size} color={colors.website} />
          </Tooltip>
        </a>
        <a
          href="https://github.com/livepeer"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer GitHub">
            <Icon icon="github" size={size} color={colors.github} />
          </Tooltip>
        </a>
                        <a
          href="https://forum.livepeer.org"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer Forum">
            <Icon icon="comment-pen" size={size} color={colors.forum} />
          </Tooltip>
        </a>
        <a
          href="https://livepeer.org/blog"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer Blog">
            <Icon icon="pen-line" size={size} color={colors.blog} />
          </Tooltip>
        </a>
                <a
          href="https://x.com/livepeer"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <Tooltip headline="Livepeer X">
            <Icon icon="x-twitter" size={size} color={colors.twitter} />
          </Tooltip>
        </a>
      </span>
    </>
  );
};

