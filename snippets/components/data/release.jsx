/**
 * @component LatestVersion
 * @category data
 * @tier composite
 * @status stable
 * @description Displays the latest release version value supplied by the release-version workflow.
 * @contentAffinity overview, reference
 * @owner docs
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource release-version workflow
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} version - version prop.
 * @example
 * <LatestVersion version="example" />
 */

export const LatestVersion = ({ version }) => {
  return <>{version}</>;
};
