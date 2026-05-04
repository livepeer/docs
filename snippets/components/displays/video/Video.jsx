/**
 * @component TitledVideo
 * @category displays
 * @subcategory video
 * @status stable
 * @description Auto-playing video with title/subtitle overlay. Respects prefers-reduced-motion.
  * @aiDiscoverability none
 * @usedIn v2/home/solutions/showcase.mdx, v2/solutions/daydream/overview.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} src - src prop.
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
 * @param {boolean} [arrow=false] - arrow prop.
 * @param {string} [borderRadius="var(--lp-spacing-px-12)"] - border Radius prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const TitledVideo = ({
  src,
  title,
  subtitle,
  arrow = false,
  borderRadius = "var(--lp-spacing-px-12)",
  style = {},
  className = "",
  ...rest
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "block",
        borderRadius,
        overflow: "hidden",
        isolation: "isolate",
        ...style,
      }}
      {...rest}
    >
      <video
        autoPlay={!prefersReducedMotion}
        muted
        loop={!prefersReducedMotion}
        playsInline
        src={src}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          margin: "0",
          padding: "0",
        }}
      />
      {title && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            paddingTop: "var(--lp-spacing-2)",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: "10",
            pointerEvents: "none",
          }}
        >
            <span
              style={{
              background: "var(--lp-color-bg-overlay)",
              color: "var(--lp-color-on-accent)",
              fontSize: "18px",
              fontWeight: "800",
              padding: "6px 16px",
              borderRadius: "6px",
              border: "1px solid var(--lp-color-border-inverse)",
            }}
          >
            {title}
            <br />
            {subtitle}
          </span>
        </div>
      )}
      {arrow && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            display: "flex",
            paddingTop: "var(--lp-spacing-2)",
            paddingRight: "var(--lp-spacing-2)",
            alignItems: "flex-start",
            justifyContent: "right",
            zIndex: "10",
            pointerEvents: "none",
          }}
        >
          <span>
            <Icon icon="arrow-up-right" size={14} color="var(--lp-color-on-accent)" />
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * @component ShowcaseVideo
 * @category displays
 * @subcategory video
 * @status deprecated
 * @usedIn v2/home/solutions/showcase.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use TitledVideo with variant="showcase" instead.
 * @see TitledVideo
 * @description Full-width video with negative-margin breakout and rounded frame.
  * @aiDiscoverability none
 * @param {any} src - src prop.
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const ShowcaseVideo = ({ src, title, subtitle, className = "", style = {}, ...rest }) => {
  return (
    <TitledVideo
      className={className}
      {...rest}
      src={src}
      title={title}
      subtitle={subtitle}
      style={{
        marginLeft: "-1.5rem",
        marginRight: "-2.5rem",
        marginTop: "-1.5rem",
        borderRadius: 0,
        maxHeight: "300px",
        width: "calc(100% + 4rem)",
        ...style,
      }}
    />
  );
};

/**
 * @component Video
 * @category displays
 * @subcategory video
 * @status stable
 * @description Basic framed video player with caption support.
  * @aiDiscoverability none
 * @usedIn v2/solutions/daydream/overview.mdx, v2/solutions/embody/overview.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/livepeer-studio/overview.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} src - src prop.
 * @param {string} [title=""] - title prop.
 * @param {string} [author=""] - author prop.
 * @param {any} caption - caption prop.
 * @param {string} [href=""] - href prop.
 * @param {boolean} [controls=true] - controls prop.
 * @param {boolean} [autoPlay=false] - auto Play prop.
 * @param {boolean} [loop=false] - loop prop.
 * @param {boolean} [muted=false] - muted prop.
 * @param {any} children - children prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const Video = ({
  src,
  title = "",
  author = "",
  caption,
  href = "",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  children,
  className = "",
  style = {},
  ...rest
}) => {
  // Build caption from author and caption
  const buildCaption = () => {
    if (!author && caption) return caption;
    if (!author && !title) return null;
    return (
      // If author and title are provided, display author with microphone icon and title
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        <span>
          {author &&
            (href ? (
              <span
                style={{
                  display: "flex",
                  width: "100%",
                  height: "fit-content",
                  gap: "var(--lp-spacing-2)",
                }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon icon="microphone" size={16} />
                  <span
                    style={{
                      borderBottom: "2px solid var(--lp-color-accent)",
                      marginLeft: "0.2rem",
                    }}
                  >
                    <strong>{author}</strong>
                  </span>
                  <span style={{ alignSelf: "flex-end", marginLeft: "var(--lp-spacing-px-6)" }}>
                    <Icon
                      icon="arrow-up-right"
                      size={12}
                      color="var(--lp-color-accent)"
                    />
                  </span>
                </a>
              </span>
            ) : (
              <>
                <Icon icon="microphone" size={16} /> <strong>{author}</strong>
              </>
            ))}
          {author && title ? ` • ${title}` : title}
        </span>
        {caption && (
          <span style={{ marginTop: "var(--lp-spacing-2)", fontStyle: "italic" }}>
            {caption}
          </span>
        )}
      </span>
    );
  };

  const captionContent = buildCaption();
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div style={{ position: "relative", display: "block" }}>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title || author || "External link"}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{
            position: "absolute",
            top: "var(--lp-spacing-2)",
            right: "var(--lp-spacing-3)",
            zIndex: "2",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--lp-spacing-px-6)",
            background: linkHovered ? "var(--lp-color-border-default)" : "transparent",
            border: `1.5px solid ${linkHovered ? "var(--lp-color-accent)" : "var(--lp-color-text-primary)"}`,
            borderRadius: "6px",
            textDecoration: "none",
            lineHeight: 0,
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
        >
          <Icon icon="arrow-up-right" size={14} color={linkHovered ? "var(--lp-color-accent)" : "var(--lp-color-text-primary)"} />
        </a>
      )}
      <Frame className={className} style={style} {...(captionContent ? { caption: captionContent } : {})} {...rest}>
        <video
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          className="w-full aspect-video rounded-xl"
          src={src}
          title={title || author || "Video"}
        />
        {children}
      </Frame>
    </div>
  );
};

/**
 * @component YouTubeVideo
 * @category displays
 * @subcategory video
 * @status stable
 * @description YouTube embed via responsive iframe with aspect-ratio preservation.
  * @aiDiscoverability none
 * @usedIn v2/community/portal.mdx, v2/community/connect/trending-topics.mdx, v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/home/about/benefits.mdx, v2/home/about/evolution.mdx, v2/home/about/vision.mdx, v2/home/primer.mdx, v2/home/solutions/trending.mdx, v2/internal/rfp/aims.mdx, v2/solutions/daydream/community.mdx, v2/solutions/daydream/overview.mdx, v2/solutions/embody/community.mdx, v2/solutions/embody/overview.mdx, v2/solutions/frameworks/community.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/livepeer-studio/community.mdx, v2/solutions/livepeer-studio/overview.mdx, v2/solutions/portal.mdx, v2/solutions/streamplace/community.mdx, v2/solutions/streamplace/overview.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-09
 * @param {any} embedUrl - embed Url prop.
 * @param {any} url - Alias for embedUrl. Accepts regular YouTube watch, short, embed, or youtu.be URLs.
 * @param {string} [title=""] - title prop.
 * @param {string} [author=""] - author prop.
 * @param {string} [hint=""] - hint prop.
 * @param {any} caption - caption prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const YouTubeVideo = ({
  embedUrl,
  url,
  title = "",
  author = "",
  hint = "",
  caption,
  className = "",
  style = {},
  ...rest
}) => {
  const toEmbedUrl = (value) => {
    if (!value || typeof value !== "string") return "";
    const source = value.trim();
    if (!source) return "";

    try {
      const parsed = new URL(source);
      const host = parsed.hostname.replace(/^www\./, "");

      if (host === "youtube.com" || host === "youtube-nocookie.com") {
        if (parsed.pathname.startsWith("/embed/")) return source;

        const videoId =
          parsed.pathname.startsWith("/shorts/")
            ? parsed.pathname.split("/").filter(Boolean)[1]
            : parsed.searchParams.get("v");
        if (!videoId) return "";

        const params = new URLSearchParams(parsed.search);
        params.delete("v");
        const query = params.toString();
        return `https://www.youtube.com/embed/${videoId}${query ? `?${query}` : ""}`;
      }

      if (host === "youtu.be") {
        const videoId = parsed.pathname.split("/").filter(Boolean)[0];
        if (!videoId) return "";

        const query = parsed.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}${query ? `?${query}` : ""}`;
      }
    } catch (_err) {
      return "";
    }

    return "";
  };

  const resolvedEmbedUrl = toEmbedUrl(embedUrl || url);

  // Return null if embedUrl is missing or invalid
  if (!resolvedEmbedUrl) {
    return null;
  }

  // Basic validation for YouTube embed URLs
  const isValidYouTubeUrl = resolvedEmbedUrl.includes("youtube.com/embed/");
  if (!isValidYouTubeUrl) {
    console.warn("Invalid YouTube embed URL:", embedUrl || url);
    return null;
  }

  // Build caption from author and title if no custom caption provided
  const buildCaption = () => {
    if (caption) return caption;
    if (!author && !title) return null;
    return (
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        <span>
          {author && (
            <>
              <Icon icon="microphone" size={16} /> <strong>{author}</strong>
            </>
          )}
          {author && title ? `${" "} • ${title}` : title}
        </span>
      </span>
    );
  };

  const captionContent = buildCaption();

  return (
    <Frame
      className={className}
      style={style}
      {...(hint ? { hint } : {})}
      {...(captionContent ? { caption: captionContent } : {})}
      {...rest}
    >
      <iframe
        className="w-full aspect-video rounded-xl"
        src={resolvedEmbedUrl}
        title={title || author || "YouTube Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Frame>
  );
};

/**
 * @component YouTubeVideoData
 * @category displays
 * @subcategory video
 * @status deprecated
 * @usedIn v2/community/connect/trending-topics.mdx, v2/home/solutions/trending.mdx, v2/solutions/daydream/community.mdx, v2/solutions/embody/community.mdx, v2/solutions/frameworks/community.mdx, v2/solutions/livepeer-studio/community.mdx, v2/solutions/streamplace/community.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Duplicate — canonical version is in integrators/video-data/VideoData.jsx.
 * @see VideoData.jsx
 * @description Renders a columned grid of YouTubeVideo embeds from an items array.
  * @aiDiscoverability none
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @param {number} [cols=2] - cols prop.
 */
export const YouTubeVideoData = ({ items = [], limit, cols = 2 }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  if (!displayItems || displayItems.length === 0) {
    return (
      <Note>
        <p style={{ color: "var(--text-secondary)", textAlign: "center" }}>
          No videos at this time.
        </p>
      </Note>
    );
  }

  // Convert YouTube watch URL to embed URL
  const getEmbedUrl = (href) => {
    if (!href) return "";
    const videoId = href.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : href;
  };

  return (
    <Columns cols={cols}>
      {displayItems.map((item, idx) => {
        if (!item || !item.href) return null;
        return (
          <YouTubeVideo
            key={item.href || idx}
            embedUrl={getEmbedUrl(item.href)}
            title={item.title || ""}
            caption={`${item.author || ""} • ${item.publishedDate || ""}`}
          />
        );
      })}
    </Columns>
  );
};

/**
 * @component LinkedInEmbed
 * @category displays
 * @subcategory video
 * @status stable
 * @description LinkedIn post embed via responsive iframe with compact layout.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} embedUrl - embed Url prop.
 * @param {string} [title="Embedded post"] - title prop.
 * @param {string} [hint=""] - hint prop.
 * @param {any} caption - caption prop.
 * @param {string} [height="399"] - height prop.
 */
export const LinkedInEmbed = ({
  embedUrl,
  title = "Embedded post",
  hint = "",
  caption,
  height = "399",
}) => {
  // Ensure URL has compact parameter if not already present
  const finalUrl = embedUrl.includes("?") ? embedUrl : `${embedUrl}?compact=1`;

  return (
    <Frame
      {...(hint ? { hint } : {})}
      {...(caption
        ? {
            caption: (
              <span style={{ display: "flex", alignItems: "center" }}>
                <Icon icon="linkedin" color="grey" />
                <span style={{ marginLeft: 8 }}>{caption}</span>
              </span>
            ),
          }
        : {})}
    >
      <iframe
        src={finalUrl}
        title={title}
        height={height}
        className="w-full rounded-xl"
      />
    </Frame>
  );
};

/**
 * @component YouTubeVideoDownload
 * @category displays
 * @subcategory video
 * @status broken
 * @usedIn v2/home/primer.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Content is commented out — non-functional. Remove in next cleanup pass.
 * @description YouTube embed with download hint text below (BROKEN — render content commented out).
  * @aiDiscoverability none
 * @param {any} embedUrl - embed Url prop.
 * @param {any} title - title prop.
 * @param {any} hint - hint prop.
 * @param {string} [caption=""] - caption prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const YouTubeVideoDownload = ({
  embedUrl,
  title,
  hint,
  caption = "",
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "100%",
        ...style,
      }}
      {...rest}
    >
      {/* DownloadButton removed for Mintlify compatibility */}
      {/* <Frame
          {...(hint ? { hint } : {})}
          {...(caption
            ? {
                caption: (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Icon icon="microphone" color="grey" />
                    <span style={{ marginLeft: 8 }}>{caption}</span>
                  </span>
                ),
              }
            : {})}
        >
          <iframe
            className="w-full aspect-video rounded-xl"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Frame> */}
    </div>
  );
};

/**
 * @component CardVideo
 * @category displays
 * @subcategory video
 * @status stable
 * @description YouTube embed inside a Card wrapper with aspect-ratio iframe.
  * @aiDiscoverability none
 * @usedIn v2/home/primer.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} embedUrl - embed Url prop.
 * @param {any} title - title prop.
 * @param {any} style - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const CardVideo = ({ embedUrl, title, style = {}, className = "", ...rest }) => {
  return (
    <Card className={className} {...rest}>
      <iframe
        className="w-full aspect-video rounded-xl"
        style={{ aspectRatio: "16/9", ...style }}
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <span className="flex items-center justify-center">
        <Icon icon="microphone" color="grey" />
        <span className="ml-2" color="gray">
          {title}
        </span>
      </span>
    </Card>
  );
};

// Notes: Fetch video information for youtube videos

// Yes, **GitHub Actions is viable**. The workflow would:

// 1. **Trigger on commit/PR** to your code repo
// 2. **Run your script** to fetch YouTube metadata (title, description)
// 3. **Update MDX files** with the fetched data
// 4. **Commit changes** back to the repo (or create a new commit)
// 5. **Mintlify auto-builds** from the updated repo

// The key is that GitHub Actions can modify files and commit them before Mintlify's build process starts. You'd typically have the action commit directly to the branch or create a new commit that triggers Mintlify's deployment.

// **Example flow:**
// - Push code → GitHub Action runs → Script fetches YouTube data → Updates MDX → Commits changes → Mintlify detects new commit → Builds docs

// This is similar to how the [agent automation workflow](https://mintlify.com/docs/guides/automate-agent) works with GitHub Actions.
