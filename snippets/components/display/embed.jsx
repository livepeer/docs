export const MarkdownEmbed = ({ url }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return <Markdown>{content}</Markdown>;
};

export const EmbedMarkdown = ({ url }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
  }, [url]);

  return <Markdown>{content}</Markdown>;
};
