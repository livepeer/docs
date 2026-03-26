import { YouTubeVideo } from "/snippets/components/displays/video/Video.jsx";

/**
 * @component YouTubeVideoData
 * @type integrators
 * @subniche video-data
 * @status stable
 * @description Renders YouTube video data with video embed and metadata columns.
 * @dataSource automation/youtube
 * @accepts {Array} items, {number} limit, {number} cols, {string} className, {object} style, ...rest
  * @aiDiscoverability none
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
            {needsSpacer && <div key={`spacer-${idx}`} style={{ height: "1.5rem", width: "100%" }} />}
            {needsSpacer && <div key={`spacer2-${idx}`} style={{ height: "1.5rem", width: "100%" }} />}
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
