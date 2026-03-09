/**
 * @component TitledVideo
 * @category content
 * @tier composite
 * @status stable
 * @description Titled Video content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, Video, YouTubeVideo, YouTubeVideoData
 * @usedIn v2/cn/home/solutions/showcase.mdx, v2/es/home/solutions/showcase.mdx, v2/fr/home/solutions/showcase.mdx, v2/home/solutions/showcase.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} src - src prop.
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
 * @param {boolean} [arrow=false] - arrow prop.
 * @param {string} [borderRadius="12px"] - border Radius prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <TitledVideo src="example" title="example" />
 */
export const TitledVideo = ({
  src,
  title,
  subtitle,
  arrow = false,
  borderRadius = "12px",
  style = {},
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "block",
        // width: "calc(100% + 4rem)",
        borderRadius,
        overflow: "hidden",
        isolation: "isolate",
        ...style,
      }}
    >
      <video
        autoPlay
        muted
        loop
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
            paddingTop: "0.5rem",
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
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
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
 * @category content
 * @tier composite
 * @status stable
 * @description Showcase Video content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, TitledVideo, Video, YouTubeVideo, YouTubeVideoData
 * @usedIn v2/cn/home/solutions/showcase.mdx, v2/es/home/solutions/showcase.mdx, v2/fr/home/solutions/showcase.mdx, v2/home/solutions/showcase.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} src - src prop.
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
 * @example
 * <ShowcaseVideo src="example" title="example" />
 */
export const ShowcaseVideo = ({ src, title, subtitle }) => {
  return (
    <TitledVideo
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
      }}
    />
  );
};

/**
 * @component Video
 * @category content
 * @tier composite
 * @status stable
 * @description Video content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, TitledVideo, YouTubeVideo, YouTubeVideoData
 * @usedIn v2/cn/solutions/embody/overview.mdx, v2/es/solutions/embody/overview.mdx, v2/fr/solutions/embody/overview.mdx, v2/solutions/embody/overview.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
 * @example
 * <Video src="example" caption="example">Example content</Video>
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
                  gap: "0.5rem",
                }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon icon="microphone" size={16} />
                  <span
                    style={{
                      borderBottom: "2px solid var(--accent)",
                      marginLeft: "0.2rem",
                    }}
                  >
                    <strong>{author}</strong>
                  </span>
                  <span style={{ alignSelf: "flex-end", marginLeft: "6px" }}>
                    <Icon
                      icon="arrow-up-right"
                      size={12}
                      color="var(--accent)"
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
          <span style={{ marginTop: "0.5rem", fontStyle: "italic" }}>
            {caption}
          </span>
        )}
      </span>
    );
  };

  const captionContent = buildCaption();

  return (
    <Frame {...(captionContent ? { caption: captionContent } : {})}>
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
  );
};

/**
 * @component YouTubeVideo
 * @category content
 * @tier composite
 * @status stable
 * @description You Tube Video content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, TitledVideo, Video, YouTubeVideoData
 * @usedIn v2/cn/community/community-portal.mdx, v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/cn/gateways/run-a-gateway/install/community-projects.mdx, v2/cn/home/about-livepeer/benefits.mdx, v2/cn/home/about-livepeer/evolution.mdx, v2/cn/home/about-livepeer/vision.mdx, v2/cn/home/primer.mdx, v2/cn/solutions/daydream/overview.mdx, v2/cn/solutions/frameworks/overview.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/community-portal.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/es/gateways/run-a-gateway/install/community-projects.mdx, v2/es/home/about-livepeer/benefits.mdx, v2/es/home/about-livepeer/evolution.mdx, v2/es/home/about-livepeer/vision.mdx, v2/es/home/primer.mdx, v2/es/solutions/daydream/overview.mdx, v2/es/solutions/frameworks/overview.mdx, v2/es/solutions/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/fr/gateways/run-a-gateway/install/community-projects.mdx, v2/fr/home/about-livepeer/benefits.mdx, v2/fr/home/about-livepeer/evolution.mdx, v2/fr/home/about-livepeer/vision.mdx, v2/fr/home/primer.mdx, v2/fr/solutions/daydream/overview.mdx, v2/fr/solutions/frameworks/overview.mdx, v2/fr/solutions/portal.mdx, v2/gateways/run-a-gateway/install/community-projects.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/evolution.mdx, v2/home/about-livepeer/vision.mdx, v2/home/primer.mdx, v2/internal/rfp/aims.mdx, v2/solutions/daydream/overview.mdx, v2/solutions/daydream/overview1.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/portal.mdx, v2/x-archived/home/trending.mdx, v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx, v2/x-experimental/copy-trending-at-livepeer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} embedUrl - embed Url prop.
 * @param {string} [title=""] - title prop.
 * @param {string} [author=""] - author prop.
 * @param {string} [hint=""] - hint prop.
 * @param {any} caption - caption prop.
 * @example
 * <YouTubeVideo embedUrl="example" caption="example" />
 */
export const YouTubeVideo = ({
  embedUrl,
  title = "",
  author = "",
  hint = "",
  caption,
}) => {
  // Return null if embedUrl is missing or invalid
  if (!embedUrl || typeof embedUrl !== "string" || embedUrl.trim() === "") {
    return null;
  }

  // Basic validation for YouTube embed URLs
  const isValidYouTubeUrl =
    embedUrl.includes("youtube.com/embed/") || embedUrl.includes("youtu.be/");
  if (!isValidYouTubeUrl) {
    console.warn("Invalid YouTube embed URL:", embedUrl);
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
      {...(hint ? { hint } : {})}
      {...(captionContent ? { caption: captionContent } : {})}
    >
      <iframe
        className="w-full aspect-video rounded-xl"
        src={embedUrl}
        title={title || author || "YouTube Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Frame>
  );
};

/**
 * @component YouTubeVideoData
 * @category content
 * @tier composite
 * @status stable
 * @description You Tube Video Data content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, TitledVideo, Video, YouTubeVideo
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {Array} [items=[]] - items prop.
 * @param {any} limit - limit prop.
 * @param {number} [cols=2] - cols prop.
 * @example
 * <YouTubeVideoData limit={1} />
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
 * @category content
 * @tier composite
 * @status stable
 * @description Linked In Embed content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, TitledVideo, Video, YouTubeVideo, YouTubeVideoData
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} embedUrl - embed Url prop.
 * @param {string} [title="Embedded post"] - title prop.
 * @param {string} [hint=""] - hint prop.
 * @param {any} caption - caption prop.
 * @param {string} [height="399"] - height prop.
 * @example
 * <LinkedInEmbed embedUrl="example" caption="example" />
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
 * @category content
 * @tier composite
 * @status deprecated
 * @description You Tube Video Download content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CardVideo, LinkedInEmbed, TitledVideo, Video, YouTubeVideo, YouTubeVideoData
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} embedUrl - embed Url prop.
 * @param {any} title - title prop.
 * @param {any} hint - hint prop.
 * @param {string} [caption=""] - caption prop.
 * @deprecated YouTubeVideoDownload is deprecated and should not be used for new content.
 * @see YouTubeVideo
 * @example
 * <YouTubeVideoDownload embedUrl="example" title="example" />
 */
export const YouTubeVideoDownload = ({
  embedUrl,
  title,
  hint,
  caption = "",
}) => {
  console.log("props", embedUrl, title, hint);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: "100%",
      }}
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
 * @category content
 * @tier composite
 * @status stable
 * @description Card Video content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies LinkedInEmbed, TitledVideo, Video, YouTubeVideo, YouTubeVideoData
 * @usedIn v2/cn/home/primer.mdx, v2/es/home/primer.mdx, v2/fr/home/primer.mdx, v2/home/primer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} embedUrl - embed Url prop.
 * @param {any} title - title prop.
 * @param {any} style - style prop.
 * @example
 * <CardVideo embedUrl="example" title="example" />
 */
export const CardVideo = ({ embedUrl, title, style }) => {
  console.log("Props:", { embedUrl, title }); // Add this
  return (
    <Card>
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
