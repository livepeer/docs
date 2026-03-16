/**
 * @component MathInline
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Math Inline primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/lpt/about/mechanics.mdx, v2/lpt/about/overview.mdx, v2/lpt/about/tokenomics.mdx, v2/lpt/delegation/about-delegators.mdx, v2/lpt/delegation/delegation-guide.mdx, v2/lpt/delegation/overview.mdx, v2/lpt/governance/model.mdx, v2/lpt/governance/overview.mdx, v2/lpt/governance/processes.mdx, v2/lpt/treasury/allocations.mdx, v2/lpt/treasury/overview.mdx, v2/lpt/treasury/proposals.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathInline latex="example" ariaLabel="example" />
 */
export const MathInline = ({ latex, className = "", ariaLabel }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <span className={className} aria-label={ariaLabel || "Math expression"}>
      {`$${value}$`}
    </span>
  );
};

/**
 * @component MathBlock
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Math Block primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/lpt/about/mechanics.mdx, v2/lpt/about/overview.mdx, v2/lpt/about/tokenomics.mdx, v2/lpt/delegation/about-delegators.mdx, v2/lpt/delegation/delegation-guide.mdx, v2/lpt/delegation/overview.mdx, v2/lpt/governance/model.mdx, v2/lpt/governance/overview.mdx, v2/lpt/governance/processes.mdx, v2/lpt/treasury/allocations.mdx, v2/lpt/treasury/overview.mdx, v2/lpt/treasury/proposals.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} latex - latex prop.
 * @param {string} [className=""] - class Name prop.
 * @param {any} ariaLabel - aria Label prop.
 * @example
 * <MathBlock latex="example" ariaLabel="example" />
 */
export const MathBlock = ({ latex, className = "", ariaLabel }) => {
  const value = latex === null || latex === undefined ? "" : String(latex);
  if (!value) return null;

  return (
    <div className={className} aria-label={ariaLabel || "Math expression"}>
      {`$$\n${value}\n$$`}
    </div>
  );
};
