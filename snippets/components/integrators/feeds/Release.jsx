/**
 * @component LatestVersion
 * @type integrators
 * @subniche feeds
 * @status experimental
 * @description Displays the latest release version string from automation data.
 * @dataSource release-version workflow
 * @accepts {any} version, {string} className, {object} style, ...rest
 * @param {any} version - version prop.
 */

export const LatestVersion = ({ version, className = "", style = {}, ...rest }) => {
  return <span className={className} style={style} {...rest}>{version}</span>;
};
