/**
 * @component Image
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Image primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies LinkImage
 * @usedIn v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/resources/blockchain-contracts.mdx, v2/cn/about/livepeer-protocol/technical-architecture.mdx, v2/cn/about/resources/blockchain-contracts.mdx, v2/cn/home/about-livepeer/benefits.mdx, v2/cn/home/about-livepeer/evolution.mdx, v2/cn/home/about-livepeer/vision.mdx, v2/cn/home/primer.mdx, v2/community/livepeer-community/community-guidelines.mdx, v2/es/about/livepeer-protocol/technical-architecture.mdx, v2/es/about/resources/blockchain-contracts.mdx, v2/es/home/about-livepeer/benefits.mdx, v2/es/home/about-livepeer/evolution.mdx, v2/es/home/about-livepeer/vision.mdx, v2/es/home/primer.mdx, v2/fr/about/livepeer-protocol/technical-architecture.mdx, v2/fr/about/resources/blockchain-contracts.mdx, v2/fr/home/about-livepeer/benefits.mdx, v2/fr/home/about-livepeer/evolution.mdx, v2/fr/home/about-livepeer/vision.mdx, v2/fr/home/primer.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/evolution.mdx, v2/home/about-livepeer/vision.mdx, v2/home/primer.mdx, v2/x-deprecated/about-livepeer/moved/livepeer-overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} src - src prop.
 * @param {any} alt - alt prop.
 * @param {any} caption - caption prop.
 * @param {any} icon - icon prop.
 * @param {any} hint - hint prop.
 * @param {boolean} [fullwidth=true] - fullwidth prop.
 * @example
 * <Image src="example" alt="example" />
 */
export const Image = ({ src, alt, caption, icon, hint, fullwidth = true }) => {
  icon = icon ? icon : "arrow-turn-down-right";
  return (
    <Frame caption={caption} hint={hint}>
      <img
        src={src}
        alt={alt}
        style={{ width: fullwidth ? "100%" : undefined }}
      />
    </Frame>
  );
};

/**
 * @component LinkImage
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Link Image primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies Image
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} src - src prop.
 * @param {any} alt - alt prop.
 * @param {any} caption - caption prop.
 * @param {any} icon - icon prop.
 * @param {any} hint - hint prop.
 * @param {any} href - href prop.
 * @example
 * <LinkImage src="example" alt="example" />
 */
export const LinkImage = ({ src, alt, caption, icon, hint, href }) => {
  icon = icon ? icon : "arrow-turn-down-right";
  return (
    <a href={href} target="_blank">
      <Frame caption={caption} hint={hint}>
        <img src={src} alt={alt} style={{ width: "100%" }} />
      </Frame>
    </a>
  );
};

// <Frame>
//   <img
//     src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjgxanlyczB0NW05M2xlYWEwdDg1N20zanowNGxmdzNnbWZ2bHQwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ae7SI3LoPYj8Q/giphy.gif"
//     alt="Livepeer Community GIF"
//   />
// </Frame>
