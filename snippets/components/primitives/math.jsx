/**
 * @component MathInline
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Math Inline primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/lpt/about/mechanics.mdx, v2/cn/lpt/about/overview.mdx, v2/cn/lpt/about/tokenomics.mdx, v2/cn/lpt/delegation/about-delegators.mdx, v2/cn/lpt/delegation/delegation-guide.mdx, v2/cn/lpt/delegation/overview.mdx, v2/cn/lpt/governance/model.mdx, v2/cn/lpt/governance/overview.mdx, v2/cn/lpt/governance/processes.mdx, v2/cn/lpt/treasury/allocations.mdx, v2/cn/lpt/treasury/overview.mdx, v2/cn/lpt/treasury/proposals.mdx, v2/es/lpt/about/mechanics.mdx, v2/es/lpt/about/overview.mdx, v2/es/lpt/about/tokenomics.mdx, v2/es/lpt/delegation/about-delegators.mdx, v2/es/lpt/delegation/delegation-guide.mdx, v2/es/lpt/delegation/overview.mdx, v2/es/lpt/governance/model.mdx, v2/es/lpt/governance/overview.mdx, v2/es/lpt/governance/processes.mdx, v2/es/lpt/treasury/allocations.mdx, v2/es/lpt/treasury/overview.mdx, v2/es/lpt/treasury/proposals.mdx, v2/fr/lpt/about/mechanics.mdx, v2/fr/lpt/about/overview.mdx, v2/fr/lpt/about/tokenomics.mdx, v2/fr/lpt/delegation/about-delegators.mdx, v2/fr/lpt/delegation/delegation-guide.mdx, v2/fr/lpt/delegation/overview.mdx, v2/fr/lpt/governance/model.mdx, v2/fr/lpt/governance/overview.mdx, v2/fr/lpt/governance/processes.mdx, v2/fr/lpt/treasury/allocations.mdx, v2/fr/lpt/treasury/overview.mdx, v2/fr/lpt/treasury/proposals.mdx, v2/lpt/about/mechanics.mdx, v2/lpt/about/overview.mdx, v2/lpt/about/tokenomics.mdx, v2/lpt/delegation/about-delegators.mdx, v2/lpt/delegation/delegation-guide.mdx, v2/lpt/delegation/overview.mdx, v2/lpt/governance/model.mdx, v2/lpt/governance/overview.mdx, v2/lpt/governance/processes.mdx, v2/lpt/treasury/allocations.mdx, v2/lpt/treasury/overview.mdx, v2/lpt/treasury/proposals.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
 * @usedIn v2/cn/lpt/about/mechanics.mdx, v2/cn/lpt/about/overview.mdx, v2/cn/lpt/about/tokenomics.mdx, v2/cn/lpt/delegation/about-delegators.mdx, v2/cn/lpt/delegation/delegation-guide.mdx, v2/cn/lpt/delegation/overview.mdx, v2/cn/lpt/governance/model.mdx, v2/cn/lpt/governance/overview.mdx, v2/cn/lpt/governance/processes.mdx, v2/cn/lpt/treasury/allocations.mdx, v2/cn/lpt/treasury/overview.mdx, v2/cn/lpt/treasury/proposals.mdx, v2/es/lpt/about/mechanics.mdx, v2/es/lpt/about/overview.mdx, v2/es/lpt/about/tokenomics.mdx, v2/es/lpt/delegation/about-delegators.mdx, v2/es/lpt/delegation/delegation-guide.mdx, v2/es/lpt/delegation/overview.mdx, v2/es/lpt/governance/model.mdx, v2/es/lpt/governance/overview.mdx, v2/es/lpt/governance/processes.mdx, v2/es/lpt/treasury/allocations.mdx, v2/es/lpt/treasury/overview.mdx, v2/es/lpt/treasury/proposals.mdx, v2/fr/lpt/about/mechanics.mdx, v2/fr/lpt/about/overview.mdx, v2/fr/lpt/about/tokenomics.mdx, v2/fr/lpt/delegation/about-delegators.mdx, v2/fr/lpt/delegation/delegation-guide.mdx, v2/fr/lpt/delegation/overview.mdx, v2/fr/lpt/governance/model.mdx, v2/fr/lpt/governance/overview.mdx, v2/fr/lpt/governance/processes.mdx, v2/fr/lpt/treasury/allocations.mdx, v2/fr/lpt/treasury/overview.mdx, v2/fr/lpt/treasury/proposals.mdx, v2/lpt/about/mechanics.mdx, v2/lpt/about/overview.mdx, v2/lpt/about/tokenomics.mdx, v2/lpt/delegation/about-delegators.mdx, v2/lpt/delegation/delegation-guide.mdx, v2/lpt/delegation/overview.mdx, v2/lpt/governance/model.mdx, v2/lpt/governance/overview.mdx, v2/lpt/governance/processes.mdx, v2/lpt/treasury/allocations.mdx, v2/lpt/treasury/overview.mdx, v2/lpt/treasury/proposals.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
