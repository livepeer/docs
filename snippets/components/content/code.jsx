
/**
 * CustomCodeBlock - Advanced code block with placeholder replacement and optional output
 *
 * @description
 * Displays a code block with support for placeholder replacement, pre/post notes,
 * and expandable expected output section.
 *
 * @param {string} filename - Name of the file to display in the code block header
 * @param {string} icon - Icon to display in the code block header
 * @param {string} language - Programming language for syntax highlighting
 * @param {string} highlight - Line numbers or ranges to highlight (e.g., "1-3,5")
 * @param {string} [codeString=""] - The code content to display
 * @param {string} [placeholderValue=""] - Value to replace {PLACEHOLDER} with in the code
 * @param {boolean} [wrap=true] - Whether to wrap long lines
 * @param {boolean} [lines=true] - Whether to show line numbers
 * @param {string} [preNote=""] - Note to display before the code block
 * @param {string} [postNote=""] - Note to display after the code block
 * @param {Object} [output=""] - Optional output configuration object
 * @param {string} [output.codeString] - Output code content
 * @param {string} [output.filename] - Output filename
 * @param {string} [output.icon] - Output icon
 * @param {string} [output.language] - Output language
 *
 * @example
 * <CustomCodeBlock
 *   filename="config.js"
 *   language="javascript"
 *   codeString="const API_KEY = '{PLACEHOLDER}';"
 *   placeholderValue="your-api-key-here"
 *   preNote="Add this to your configuration file"
 *   output={{ codeString: "Config loaded successfully", language: "bash" }}
 * />
 *
 * @author Livepeer Documentation Team
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

/**
 * ComplexCodeBlock - Code block with placeholder replacement and pre/post notes
 *
 * @description
 * Similar to CustomCodeBlock but without the output section.
 * Supports placeholder replacement and optional notes before/after the code.
 *
 * @param {string} filename - Name of the file to display
 * @param {string} icon - Icon for the code block header
 * @param {string} language - Programming language for syntax highlighting
 * @param {string} highlight - Line numbers to highlight
 * @param {string} [codeString=""] - The code content
 * @param {string} [placeholderValue=""] - Value to replace {PLACEHOLDER} with
 * @param {boolean} [wrap=true] - Whether to wrap long lines
 * @param {boolean} [lines=true] - Whether to show line numbers
 * @param {React.ReactNode} [preNote=null] - Note to display before the code
 * @param {React.ReactNode} [postNote=null] - Note to display after the code
 *
 * @example
 * <ComplexCodeBlock
 *   filename="setup.sh"
 *   language="bash"
 *   codeString="export API_KEY={PLACEHOLDER}"
 *   placeholderValue="abc123"
 *   preNote="Run this command in your terminal"
 * />
 *
 * @author Livepeer Documentation Team
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
 * CodeSection - Wrapper component for ComplexCodeBlock
 *
 * @description
 * Convenience wrapper that accepts a fields object and spreads it to ComplexCodeBlock.
 * Useful for passing configuration objects.
 *
 * @param {Object} [fields={}] - Object containing all ComplexCodeBlock props
 *
 * @example
 * const codeConfig = {
 *   filename: "app.js",
 *   language: "javascript",
 *   codeString: "console.log('Hello');"
 * };
 * <CodeSection fields={codeConfig} />
 *
 * @author Livepeer Documentation Team
 */
export const CodeSection = ({ fields = {} }) => {
  return <ComplexCodeBlock {...fields} />;
};

// export const CodeSection = ({ fields = {} }) => {
//   return <ComplexCodeBlock {...fields} />;
// };
