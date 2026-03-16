/**
 * TitledVideo - A video component with an overlay title
 *
 * @description
 * Displays a looping video with an optional title overlay and styled border.
 *
 * @param {string} src - Video source URL
 * @param {string} [title] - Title text to overlay on the video
 * @param {string} [titlePosition="top"] - Position of title: "top" or "bottom"
 * @param {string} [borderRadius="12px"] - Border radius of the video
 * @param {string} [borderColor="var(--border)"] - Border color
 * @param {string} [borderWidth="1px"] - Border width
 * @param {object} [style={}] - Additional styles for the container
 *
 * @example
 * <TitledVideo
 *   src="https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/daydream.mp4"
 *   title="Daydream Demo"
 * />
 *
 * @author Livepeer Documentation Team
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
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              fontSize: "18px",
              fontWeight: "800",
              padding: "6px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255, 255, 255, 0.5)",
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
            <Icon icon="arrow-up-right" size={14} color="rgba(0, 0, 0, 0.5)" />
          </span>
        </div>
      )}
    </div>
  );
};

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
 * Video - Self-hosted video component
 *
 * @description
 * Displays a self-hosted video file within a Frame component.
 * Supports local .mp4 files and other video formats.
 *
 * @param {string} src - Path to the video file (e.g., "https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/HeroBackground.mp4")
 * @param {string} [title=""] - Video title for accessibility
 * @param {string} [author=""] - Author name to display with microphone icon
 * @param {string} [caption] - Optional caption text (if author provided, styled with icon)
 * @param {boolean} [controls=true] - Whether to show video controls
 * @param {boolean} [autoPlay=false] - Whether to autoplay the video
 * @param {boolean} [loop=false] - Whether to loop the video
 * @param {boolean} [muted=false] - Whether to mute the video
 * @param {ReactNode} [children] - Optional children to render inside Frame
 *
 * @example
 * <Video src="https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/HeroBackground.mp4" title="Demo Video" />
 * <Video src="https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/livepeer-founders-post.mp4" author="Doug Petkanics" title="Livepeer Vision" />
 * <Video src="https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/livepeer-founders-post.mp4" caption="Introduction" autoPlay muted loop />
 *
 * @author Livepeer Documentation Team
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
 * YouTubeVideo - Embeds a YouTube video with optional caption and hint
 *
 * @description
 * Displays a YouTube video in a responsive iframe within a Frame component.
 * Supports optional hint text and caption with microphone icon.
 *
 * @param {string} embedUrl - YouTube embed URL (e.g., "https://www.youtube.com/embed/VIDEO_ID")
 * @param {string} [title=""] - Video title for accessibility and caption display
 * @param {string} [author=""] - Author name to display in caption
 * @param {string} [hint=""] - Optional hint text to display
 * @param {string} [caption] - Optional custom caption (overrides author/title format)
 *
 * @example
 * <YouTubeVideo
 *   embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
 *   author="Doug Petkanics"
 *   title="A Decade of Bleeding Edge Innovation"
 * />
 *
 * @author Livepeer Documentation Team
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
 * YouTubeVideoData - Renders YouTube videos from youtubeData.jsx format
 *
 * @param {Array} items - Array of video objects from youtubeData.jsx
 * @param {number} [limit] - Optional limit on number of videos to display
 *
 * @example
 * import { youtubeData } from '/snippets/automations/youtube/youtubeData.jsx';
 * import { filterVideos } from '/snippets/automations/youtube/filterVideos.js';
 *
 * <YouTubeVideoData items={filterVideos(youtubeData)} limit={3} />
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
 * LinkedInEmbed - Embeds a LinkedIn post with optional caption and hint
 *
 * @description
 * Displays a LinkedIn post in a responsive iframe within a Frame component.
 * Follows LinkedIn's official embed requirements and terms of use.
 * See: https://developer.linkedin.com/legal/embed-terms-of-use
 *
 * @param {string} embedUrl - LinkedIn embed URL (e.g., "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:...")
 *                            Note: URL should include ?compact=1 parameter for proper rendering
 * @param {string} [title="Embedded post"] - Post title for accessibility (matches LinkedIn default)
 * @param {string} [hint=""] - Optional hint text to display
 * @param {string} [caption] - Optional caption text to display below the post
 * @param {string} [height="399"] - Height of the embed iframe (LinkedIn default: 399px)
 *
 * @example
 * <LinkedInEmbed
 *   embedUrl="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7387171661868933120?compact=1"
 *   title="Livepeer Update"
 *   caption="Latest news from the Livepeer team"
 *   height="500"
 * />
 *
 * @author Livepeer Documentation Team
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
 * YouTubeVideoDownload - Placeholder for YouTube video with download functionality
 *
 * @description
 * Originally intended for YouTube videos with download capability.
 * Currently returns an empty container as DownloadButton was removed for Mintlify compatibility.
 *
 * @param {string} embedUrl - YouTube embed URL (currently unused)
 * @param {string} title - Video title (currently unused)
 * @param {string} hint - Hint text (currently unused)
 * @param {string} [caption=""] - Caption text (currently unused)
 *
 * @deprecated This component is currently non-functional. Use YouTubeVideo instead.
 * @author Livepeer Documentation Team
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
 * CardVideo - YouTube video embedded in a Card component
 *
 * @description
 * Displays a YouTube video within a Card component with a title caption below.
 * Uses responsive aspect ratio for proper video display.
 *
 * @param {string} embedUrl - YouTube embed URL
 * @param {string} title - Video title to display below the video
 *
 * @example
 * <CardVideo
 *   embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
 *   title="Getting Started with Livepeer"
 * />
 *
 * @author Livepeer Documentation Team
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
