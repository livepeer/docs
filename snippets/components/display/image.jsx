/**
 * Image - Image component with Frame wrapper
 *
 * @description
 * Displays an image within a Frame component with optional caption and hint.
 * Supports full-width or auto-width display.
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} [caption] - Optional caption to display below the image
 * @param {string} [icon] - Icon name (currently unused in implementation)
 * @param {string} [hint] - Optional hint text
 * @param {boolean} [fullwidth=true] - Whether to display image at full width
 *
 * @example
 * <Image
 *   src="/images/diagram.png"
 *   alt="System Diagram"
 *   caption="Figure 1: System Architecture"
 *   hint="Click to enlarge"
 * />
 *
 * @author Livepeer Documentation Team
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
 * LinkImage - Clickable image that opens in a new tab
 *
 * @description
 * Displays an image within a Frame component that links to a URL.
 * Opens the link in a new tab when clicked.
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} [caption] - Optional caption to display below the image
 * @param {string} [icon] - Icon name (currently unused in implementation)
 * @param {string} [hint] - Optional hint text
 * @param {string} href - URL to navigate to when image is clicked
 *
 * @example
 * <LinkImage
 *   src="/images/preview.png"
 *   alt="Full diagram"
 *   href="/images/full-diagram.png"
 *   caption="Click to view full size"
 * />
 *
 * @author Livepeer Documentation Team
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
