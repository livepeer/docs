/**
 * FlexContainer - Flexible container component for MDX files
 *
 * @description
 * Provides flexbox layout without requiring inline styles in MDX files.
 * All styling uses CSS Custom Properties for theme awareness.
 *
 * @param {React.ReactNode} children - Content to display
 * @param {string} [direction="row"] - Flex direction: "row" | "column" | "row-reverse" | "column-reverse"
 * @param {string} [gap="1rem"] - Gap between items (CSS value)
 * @param {string} [align="flex-start"] - Align items: "flex-start" | "center" | "flex-end" | "stretch"
 * @param {string} [justify="flex-start"] - Justify content: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
 * @param {boolean} [wrap=false] - Allow wrapping
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <FlexContainer gap="2rem" align="center">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 * </FlexContainer>
 *
 * @author Livepeer Documentation Team
 */
export const FlexContainer = ({
  children,
  direction = "row",
  gap = "1rem",
  align = "flex-start",
  justify = "flex-start",
  wrap = false,
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
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * GridContainer - CSS Grid container component for MDX files
 *
 * @description
 * Provides grid layout without requiring inline styles in MDX files.
 * All styling uses CSS Custom Properties for theme awareness.
 *
 * @param {React.ReactNode} children - Content to display
 * @param {string|number} [columns] - Number of columns or CSS grid-template-columns value
 * @param {string} [gap="1rem"] - Gap between items (CSS value)
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <GridContainer columns={3} gap="2rem">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </GridContainer>
 *
 * @author Livepeer Documentation Team
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
