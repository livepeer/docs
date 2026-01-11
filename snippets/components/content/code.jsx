export const CustomCodeBlock = ({
  filename,
  icon,
  language,
  highlight,
  codeString = "",
  placeholderValue = "",
  wrap = true,
  lines = true,
  preNote = "",
  postNote = "",
  output = "",
}) => {
  // Return null if no codeString is provided
  if (!codeString || codeString.trim() === "") {
    return null;
  }

  const renderedCode = codeString.replace(/\{PLACEHOLDER\}/g, placeholderValue);
  // const CalloutComponent = callout?.type ? callout.type : Note;

  return (
    <>
      {preNote && (
        <div
          style={{
            marginBottom: "0.5rem",
            fontSize: "0.875rem",
            color: "#9ca3af",
          }}
        >
          {preNote}
        </div>
      )}
      <CodeBlock
        filename={filename}
        icon={icon}
        language={language}
        lines
        highlight={highlight}
        wrap={wrap}
        line={lines}
      >
        {renderedCode}
      </CodeBlock>
      {postNote && (
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "#9ca3af",
            fontStyle: "italic",
          }}
        >
          {postNote}
        </div>
      )}
      {output?.codeString && (
        <>
          <Expandable
            title={
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                Expected Output
              </span>
            }
          >
            <CodeBlock
              filename={output.filename || "Output Example"}
              icon={output.icon || "terminal"}
              language={output.language || "bash"}
              highlight={output.highlight}
              wrap={output.wrap || false}
              line={output.lines || false}
            >
              {output.codeString}
            </CodeBlock>
          </Expandable>
          <br />
        </>
      )}
    </>
  );
};

/**
 * CodeComponent - Simple code display with {PLACEHOLDER} replacement
 *
 * Props:
 *   - codeString: string with {PLACEHOLDER} to replace
 *   - placeholderValue: string value to insert in place of {PLACEHOLDER}
 */
export const CodeComponent = ({
  filename = "",
  icon = "terminal",
  language = "",
  highlight = "",
  expandable = false,
  wrap = true,
  lines = true,
  codeString = "",
  placeholderValue = "",
}) => {
  const renderedCode = codeString.replace(/\{PLACEHOLDER\}/g, placeholderValue);
  return (
    <CodeBlock
      filename={filename}
      icon={icon}
      language={language}
      highlight={highlight}
      expandable={expandable}
      wrap={wrap}
      lines={lines}
    >
      {renderedCode}
    </CodeBlock>
  );
};

export const ComplexCodeBlock = ({
  filename,
  icon,
  language,
  highlight,
  codeString = "",
  placeholderValue = "",
  wrap = true,
  lines = true,
  preNote = null,
  postNote = null,
}) => {
  // Return null if no codeString is provided
  if (!codeString || codeString.trim() === "") {
    return null;
  }

  const renderedCode = codeString.replace(/\{PLACEHOLDER\}/g, placeholderValue);

  return (
    <>
      {preNote && (
        <div
          style={{
            marginBottom: "0.5rem",
            fontSize: "0.875rem",
            color: "#9ca3af",
          }}
        >
          {preNote}
        </div>
      )}
      <CodeBlock
        filename={filename}
        icon={icon}
        language={language}
        lines
        highlight={highlight}
        wrap={wrap}
        line={lines}
      >
        {renderedCode}
      </CodeBlock>
      {postNote && (
        <div
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "#9ca3af",
          }}
        >
          {postNote}
        </div>
      )}
    </>
  );
};

export const CodeSection = ({ fields = {} }) => {
  return <ComplexCodeBlock {...fields} />;
};

// export const CodeSection = ({ fields = {} }) => {
//   return <ComplexCodeBlock {...fields} />;
// };
