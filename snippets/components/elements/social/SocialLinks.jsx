/**
 * @component SocialLinks
 * @type elements
 * @subniche social
 * @status stable
 * @description Row of icon-only social media links with tooltips and aria-labels. Pass a `links` array to customise per product; omit for Livepeer defaults.
 * @accepts links, size, gap, justify, iconColor, color, style, className, ...rest
 * @aiDiscoverability none
 * @param {Array} [links] - Array of {icon, href, label} objects. Falls back to Livepeer defaults if omitted.
 * @param {number} [size=20] - Size used by the component.
 * @param {string} [gap="0.75rem"] - Gap used by the component.
 * @param {string} [justify="center"] - Justify used by the component.
 * @param {string} [iconColor] - Override all icons to a single colour. If omitted, brand colours are used per icon.
 * @param {string} [color] - Alias for iconColor (backwards compat).
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 *
 * @example
 * <SocialLinks color="value" />
 * @example
 * <SocialLinks links={[
 *   { icon: "github", href: "https://github.com/org", label: "GitHub" },
 *   { icon: "discord", href: "https://discord.gg/invite", label: "Discord" },
 * ]} />
 */
export const SocialLinks = ({
  links,
  size = 20,
  gap = "0.75rem",
  justify = "center",
  iconColor,
  color,
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || color;
  const linkStyle = {
    border: "none",
    borderBottom: "none",
    textDecoration: "none",
    display: "inline-flex",
  };

  // Brand colors — resolvedIconColor overrides all when iconColor prop is passed
  const colors = {
    discord: resolvedIconColor || "var(--lp-color-brand-discord)",
    twitter: resolvedIconColor || "var(--hero-text)",
    github: resolvedIconColor || "var(--lp-color-brand-github)",
    forum: resolvedIconColor || "var(--lp-color-brand-forum)",
    website: resolvedIconColor || "var(--accent)",
    blog: resolvedIconColor || "var(--accent)",
    globe: resolvedIconColor || "var(--lp-color-brand-globe)",
    twitch: resolvedIconColor || "var(--lp-color-brand-twitch)",
    youtube: resolvedIconColor || "var(--lp-color-brand-youtube)",
    instagram: resolvedIconColor || "var(--lp-color-brand-instagram)",
    linkedin: resolvedIconColor || "var(--lp-color-brand-linkedin)",
  };

  const iconColorMap = {
    discord: "discord",
    "x-twitter": "twitter",
    github: "github",
    "comment-pen": "forum",
    "pen-line": "blog",
    "pencil-line": "blog",
    globe: "globe",
    "book-open": "website",
    twitch: "twitch",
    youtube: "youtube",
    instagram: "instagram",
    linkedin: "linkedin",
  };

  const defaultLinks = [
    { icon: "discord", href: "https://discord.com/invite/livepeer", label: "Livepeer Discord" },
    { icon: "globe", href: "https://livepeer.org", label: "Livepeer Website" },
    { icon: "github", href: "https://github.com/livepeer", label: "Livepeer GitHub" },
    { icon: "comment-pen", href: "https://forum.livepeer.org", label: "Livepeer Forum" },
    { icon: "pen-line", href: "https://livepeer.org/blog", label: "Livepeer Blog" },
    { icon: "x-twitter", href: "https://x.com/livepeer", label: "Livepeer X" },
  ];

  const items = links || defaultLinks;

  return (
    <div className={className} style={style} {...rest}>
      <style>{`
        .social-links a {
          border: none;
          border-bottom: none;
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
        {items.map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} style={linkStyle}>
            <Tooltip headline={item.label}>
              <Icon icon={item.icon} size={size} color={colors[iconColorMap[item.icon] || "website"] || "var(--accent)"} aria-hidden="true" />
            </Tooltip>
          </a>
        ))}
      </span>
    </div>
  );
};
