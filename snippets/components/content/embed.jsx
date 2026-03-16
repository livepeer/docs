/**
 * @component MarkdownEmbed
 * @category content
 * @tier composite
 * @status stable
 * @description Markdown Embed content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies EmbedMarkdown
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} url - url prop.
 * @example
 * <MarkdownEmbed url="example" />
 */
export const MarkdownEmbed = ({ url }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent)
  }, [url])

  return <Markdown>{content}</Markdown>
}

/**
 * @component EmbedMarkdown
 * @category content
 * @tier composite
 * @status stable
 * @description Embed Markdown content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies MarkdownEmbed
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates MarkdownEmbed
 * @lastMeaningfulChange 2026-03-10
 * @param {any} url - url prop.
 * @example
 * <EmbedMarkdown url="example" />
 */
export const EmbedMarkdown = ({ url }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent)
  }, [url])

  return <Markdown>{content}</Markdown>
}

/**
 * @component TwitterTimeline
 * @category content
 * @tier composite
 * @status stable
 * @description Twitter Timeline content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies EmbedMarkdown, MarkdownEmbed
 * @usedIn v2/cn/community/livepeer-community/livepeer-latest-topics.mdx, v2/cn/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/es/community/livepeer-community/livepeer-latest-topics.mdx, v2/es/community/livepeer-community/trending-topics.mdx, v2/fr/community/livepeer-community/livepeer-latest-topics.mdx, v2/fr/community/livepeer-community/trending-topics.mdx, v2/x-archived/home/trending.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @example
 * <TwitterTimeline />
 */
/**
 * @component TwitterTimeline
 * @category content
 * @tier composite
 * @status stable
 * @description Twitter Timeline content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies EmbedMarkdown, MarkdownEmbed
 * @usedIn v2/community/livepeer-community/trending-topics.mdx, v2/home/trending.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @example
 * <TwitterTimeline />
 */
export const TwitterTimeline = ({}) => {
  return (
    <div
      style={{
        border: '3px solid var(--accent)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '600px',
      }}
    >
      <iframe
        src="https://feed.mikle.com/widget/v2/176804/"
        style={{
          border: 'none',
          transform: 'scale(1.01)', // Shrink by 1% to hide border
          transformOrigin: 'center',
        }}
        height="652px" // Increase height by 4px (2px top + 2px bottom)
        width="100%" // Increase width by 4px (2px left + 2px right)
        class="fw-iframe"
        frameborder="none"
        scrolling="no"
      ></iframe>
    </div>
  )
}

//Doesnt work
// export const TwitterTimeline = ({}) => {
//   return (
//     <a href="https://twitter.com/livepeer">
//       <div
//         style={{
//           overflow: "hidden",
//           height: "600px",
//           border: "3px solid var(--accent)",
//           borderRadius: "12px",
//         }}
//       >
//         <iframe
//           src="https://widgets.sociablekit.com/twitter-feed/iframe/25645137"
//           style={{
//             border: "none",
//             width: "100%",
//             height: "calc(600px + 240px)", // Container height + shift amount
//             transform: "translateY(-240px)",
//           }}
//         />
//       </div>
//     </a>
//   );
// };
