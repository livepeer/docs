
/**
 * @component CustomCodeBlock
 * @type displays
 * @subniche code
 * @status stable
 * @description Code block with optional pre/post notes and expandable wrapper.
 * @accepts none
  * @aiDiscoverability none
 * @param {any} filename - filename prop.
 * @param {any} icon - icon prop.
 * @param {any} language - language prop.
 * @param {any} highlight - highlight prop.
 * @param {string} [codeString=""] - code String prop.
 * @param {string} [placeholderValue=""] - placeholder Value prop.
 * @param {boolean} [wrap=true] - wrap prop.
 * @param {boolean} [lines=true] - lines prop.
 * @param {string} [preNote=""] - pre Note prop.
 * @param {string} [postNote=""] - post Note prop.
 * @param {string} [output=""] - output prop.
 */
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
            color: "var(--muted-text)",
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
            color: "var(--muted-text)",
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
 * @component CodeComponent
 * @type displays
 * @subniche code
 * @status stable
 * @description Simple code block with title and language syntax highlighting.
 * @accepts className, style, ...rest
  * @aiDiscoverability none
 * @param {string} [filename=""] - filename prop.
 * @param {string} [icon="terminal"] - icon prop.
 * @param {string} [language=""] - language prop.
 * @param {string} [highlight=""] - highlight prop.
 * @param {boolean} [expandable=false] - expandable prop.
 * @param {boolean} [wrap=true] - wrap prop.
 * @param {boolean} [lines=true] - lines prop.
 * @param {string} [codeString=""] - code String prop.
 * @param {string} [placeholderValue=""] - placeholder Value prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
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
  className = "",
  style = {},
  ...rest
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
      className={className}
      style={style}
      {...rest}
    >
      {renderedCode}
    </CodeBlock>
  );
};

/**
 * @component ComplexCodeBlock
 * @type displays
 * @subniche code
 * @status stable
 * @description Code block with both pre-note and post-note sections.
 * @accepts none
  * @aiDiscoverability none
 * @param {any} filename - filename prop.
 * @param {any} icon - icon prop.
 * @param {any} language - language prop.
 * @param {any} highlight - highlight prop.
 * @param {string} [codeString=""] - code String prop.
 * @param {string} [placeholderValue=""] - placeholder Value prop.
 * @param {boolean} [wrap=true] - wrap prop.
 * @param {boolean} [lines=true] - lines prop.
 * @param {any} [preNote=null] - pre Note prop.
 * @param {any} [postNote=null] - post Note prop.
 */
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
            color: "var(--muted-text)",
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
            color: "var(--muted-text)",
          }}
        >
          {postNote}
        </div>
      )}
    </>
  );
};

/**
 * @component CodeSection
 * @type displays
 * @subniche code
 * @status stable
 * @description Expandable code section with title header.
 * @accepts className, style, ...rest
  * @aiDiscoverability none
 * @param {object} [fields={}] - fields prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const CodeSection = ({ fields = {}, className = "", style = {}, ...rest }) => {
  return <ComplexCodeBlock {...fields} className={className} style={style} {...rest} />;
};

// export const CodeSection = ({ fields = {} }) => {
//   return <ComplexCodeBlock {...fields} />;
// };
