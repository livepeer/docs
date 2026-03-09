
/**
 * @component CustomCodeBlock
 * @category content
 * @tier composite
 * @status stable
 * @description Custom Code Block content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CodeSection, ComplexCodeBlock
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/cn/gateways/run-a-gateway/install/linux-install.mdx, v2/cn/gateways/run-a-gateway/install/windows-install.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/orchestrators/quickstart/orchestrator-setup.mdx, v2/cn/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx, v2/cn/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/run-a-gateway/install/linux-install.mdx, v2/es/gateways/run-a-gateway/install/windows-install.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/orchestrators/quickstart/orchestrator-setup.mdx, v2/es/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx, v2/es/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/run-a-gateway/install/linux-install.mdx, v2/fr/gateways/run-a-gateway/install/windows-install.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/orchestrators/quickstart/orchestrator-setup.mdx, v2/fr/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx, v2/fr/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/run-a-gateway/install/linux-install.mdx, v2/gateways/run-a-gateway/install/windows-install.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx, v2/orchestrators/setting-up-an-orchestrator/connect-to-arbitrum.mdx, v2/orchestrators/setting-up-an-orchestrator/install-go-livepeer.mdx, v2/orchestrators/setting-up-an-orchestrator/orch-config.mdx, v2/orchestrators/setting-up-an-orchestrator/orchestrator-stats.mdx, v2/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/quickstart-add-your-gpu-to-livepeer.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
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
 * @example
 * <CustomCodeBlock filename="example" icon="example" />
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
 * @category content
 * @tier composite
 * @status stable
 * @description Code Component content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CodeSection, ComplexCodeBlock, CustomCodeBlock
 * @usedIn v2/cn/gateways/run-a-gateway/install/linux-install.mdx, v2/es/gateways/run-a-gateway/install/linux-install.mdx, v2/fr/gateways/run-a-gateway/install/linux-install.mdx, v2/gateways/run-a-gateway/install/linux-install.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {string} [filename=""] - filename prop.
 * @param {string} [icon="terminal"] - icon prop.
 * @param {string} [language=""] - language prop.
 * @param {string} [highlight=""] - highlight prop.
 * @param {boolean} [expandable=false] - expandable prop.
 * @param {boolean} [wrap=true] - wrap prop.
 * @param {boolean} [lines=true] - lines prop.
 * @param {string} [codeString=""] - code String prop.
 * @param {string} [placeholderValue=""] - placeholder Value prop.
 * @example
 * <CodeComponent />
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
 * @component ComplexCodeBlock
 * @category content
 * @tier composite
 * @status stable
 * @description Complex Code Block content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies CodeSection, CustomCodeBlock
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
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
 * @example
 * <ComplexCodeBlock filename="example" icon="example" />
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
 * @category content
 * @tier composite
 * @status stable
 * @description Thin wrapper that maps a `fields` object into the complex code block renderer.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies ComplexCodeBlock, CustomCodeBlock
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {object} [fields={}] - fields prop.
 * @example
 * <CodeSection />
 */
export const CodeSection = ({ fields = {} }) => {
  return <ComplexCodeBlock {...fields} />;
};

// export const CodeSection = ({ fields = {} }) => {
//   return <ComplexCodeBlock {...fields} />;
// };
