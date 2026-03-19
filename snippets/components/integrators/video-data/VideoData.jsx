import { YouTubeVideo } from "/snippets/components/displays/video/Video.jsx";

/**
 * @component YouTubeVideoData
 * @category integrators
 * @subniche video-data
 * @tier pattern
 * @status stable
 * @description YouTubeVideoData - Renders YouTube videos from youtubeData.jsx format
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/community/livepeer-community/trending-topics.mdx, v2/home/trending.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource /snippets/automations/youtube/youtubeData.jsx
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {Array} [items=[]] - Collection data rendered by the component.
 * @param {number} limit - Limit used by the component.
 * @param {number} [cols=2] - Cols used by the component.
 *
 * @example
 * <YouTubeVideoData limit={1} />
 */
export const YouTubeVideoData = ({ items = [], limit, cols = 2, className = "", style = {}, ...rest }) => {
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

  const getEmbedUrl = (href) => {
    if (!href) return "";
    const videoId = href.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : href;
  };

  return (
    <Columns cols={cols} className={className} style={style} {...rest}>
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
