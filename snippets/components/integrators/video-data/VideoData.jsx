import { YouTubeVideo } from "/snippets/components/displays/video/Video.jsx";

/**
 * @component YouTubeVideoData
 * @category integrators
 * @subcategory video-data
 * @status stable
 * @description Renders YouTube video data with video embed and metadata columns.
 * @dataSource automation/youtube
  * @aiDiscoverability none
 * @usedIn v2/community/connect/trending-topics.mdx, v2/home/solutions/trending.mdx, v2/solutions/daydream/community.mdx, v2/solutions/embody/community.mdx, v2/solutions/frameworks/community.mdx, v2/solutions/livepeer-studio/community.mdx, v2/solutions/streamplace/community.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-08
 * @param {Array} [items=[]] - Collection data rendered by the component.
 * @param {number} limit - Limit used by the component.
 * @param {number} [cols=2] - Cols used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
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
        const needsSpacer = idx > 0 && idx % cols === 0;
        return (
          <>
            {needsSpacer && <div key={`spacer-${idx}`} style={{ height: "var(--lp-spacing-6)", width: "100%" }} />}
            {needsSpacer && <div key={`spacer2-${idx}`} style={{ height: "var(--lp-spacing-6)", width: "100%" }} />}
            <YouTubeVideo
              key={item.href || idx}
              embedUrl={getEmbedUrl(item.href)}
              title={item.title || ""}
              caption={`${item.author || ""} • ${item.publishedDate || ""}`}
            />
          </>
        );
      })}
    </Columns>
  );
};
