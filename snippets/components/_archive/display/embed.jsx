/**
 * MarkdownEmbed - Fetches and renders markdown content from a URL
 *
 * @description
 * Dynamically fetches markdown content from a remote URL and renders it.
 * Uses React hooks to manage the fetch lifecycle.
 *
 * @param {string} url - URL of the markdown file to fetch and display
 *
 * @example
 * <MarkdownEmbed url="https://raw.githubusercontent.com/user/repo/main/README.md" />
 *
 * @author Livepeer Documentation Team
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
 * EmbedMarkdown - Alias for MarkdownEmbed
 *
 * @description
 * Alternative name for MarkdownEmbed component. Fetches and renders markdown from a URL.
 *
 * @param {string} url - URL of the markdown file to fetch and display
 *
 * @example
 * <EmbedMarkdown url="https://example.com/content.md" />
 *
 * @author Alison Haire
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
