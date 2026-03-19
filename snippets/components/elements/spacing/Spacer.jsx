/**
 * @component Spacer
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Provides consistent spacing without requiring inline styles or empty divs in MDX
 *   files
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} [size="1rem"] - Size used by the component.
 * @param {string} [direction="vertical"] - Direction used by the component.
 *
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
