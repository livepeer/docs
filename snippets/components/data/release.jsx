/**
 * @component LatestVersion
 * @category data
 * @tier composite
 * @status stable
 * @description Displays the latest release version value supplied by the release-version workflow.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/gateways/quickstart/gateway-setup.mdx, v2/es/gateways/quickstart/gateway-setup.mdx, v2/fr/gateways/quickstart/gateway-setup.mdx, v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource release-version workflow
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} version - version prop.
 * @example
 * <LatestVersion version="example" />
 */

export const LatestVersion = ({ version }) => {
  return <>{version}</>;
};
