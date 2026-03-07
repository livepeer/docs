/**
 * @script            filterVideos
 * @category          automation
 * @purpose           infrastructure:data-feeds
 * @scope             external
 * @owner             docs
 * @needs             F-R1
 * @purpose-statement YouTube video filter — post-processes fetched YouTube data to filter/sort videos for display
 * @pipeline          manual — not yet in pipeline
 * @usage             node snippets/automations/youtube/filterVideos.js [flags]
 */
export const filterVideos = (
  videos,
  excludeKeywords = ["fireside", "watercooler"]
) => {
  return videos.filter((video) => {
    const title = video.title.toLowerCase();
    return !excludeKeywords.some((keyword) =>
      title.includes(keyword.toLowerCase())
    );
  });
};
