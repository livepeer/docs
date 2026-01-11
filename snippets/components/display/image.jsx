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
