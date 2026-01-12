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
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return <Markdown>{content}</Markdown>;
};

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
 * @author Livepeer Documentation Team
 */
export const EmbedMarkdown = ({ url }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return <Markdown>{content}</Markdown>;
};
