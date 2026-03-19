/**
 * @component FlexContainer
 * @category layout
 * @tier composite
 * @status stable
 * @description Flex Container layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies GridContainer, Spacer
 * @usedIn v2/community/livepeer-community/community-guidelines.mdx, v2/developers/build/workload-fit.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/setup/run-a-gateway.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {any} children - children prop.
 * @param {string} [direction="row"] - direction prop.
 * @param {string} [gap="1rem"] - gap prop.
 * @param {string} [align="flex-start"] - align prop.
 * @param {string} [justify="flex-start"] - justify prop.
 * @param {boolean} [wrap=false] - wrap prop.
 * @param {string} [marginTop=""] - Optional top margin override.
 * @param {string} [marginBottom=""] - Optional bottom margin override.
 * @param {object} [style={}] - style prop.
 * @example
 * <FlexContainer>Example content</FlexContainer>
 */
export const FlexContainer = ({
  children,
  direction = "row",
  gap = "1rem",
  align = "flex-start",
  justify = "flex-start",
  wrap = false,
  marginTop = "",
  marginBottom = "",
  style = {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...(marginTop ? { marginTop } : {}),
        ...(marginBottom ? { marginBottom } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * @component GridContainer
 * @category layout
 * @tier composite
 * @status stable
 * @description Grid Container layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies FlexContainer, Spacer
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {any} children - children prop.
 * @param {any} columns - columns prop.
 * @param {string} [gap="1rem"] - gap prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <GridContainer columns="example">Example content</GridContainer>
 */
export const GridContainer = ({
  children,
  columns,
  gap = "1rem",
  style = {},
}) => {
  const gridTemplateColumns = columns
    ? typeof columns === "number"
      ? `repeat(${columns}, 1fr)`
      : columns
    : "1fr";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: gridTemplateColumns,
        gap: gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * @component Spacer
 * @category layout
 * @tier composite
 * @status stable
 * @description Spacer layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies FlexContainer, GridContainer
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {string} [size="1rem"] - size prop.
 * @param {string} [direction="vertical"] - direction prop.
 * @example
 * <Spacer />
 */
export const Spacer = ({ size = "1rem", direction = "vertical" }) => {
  return (
    <div
      style={{
        ...(direction === "vertical"
          ? { height: size, width: "100%" }
          : { width: size, height: "100%" }),
      }}
    />
  );
};
