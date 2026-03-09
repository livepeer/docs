// SVG needs fixing...
// export const Starfield1 = () => {
//   const canvasRef = useRef(null);

//   // === LIVEPEER LOGO SVG (INLINE) ===
//   const LIVEPEER_SVG = `
// <svg viewBox="0 0 332 403" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd"
//     d="M0.0168457 0.37V165.818H71.0445V236.846H0.0168488V403.294H332.312V0.37H0.0168457ZM71.0445 71.398H261.285V331.266H71.0445V236.846H142.072V165.818H71.0445V71.398Z"
//     fill="COLOR_REPLACE"/>
// </svg>
// `;

//   const COLORS = ["#3CB540", "#2b9a66", "#18794E", "#6BBF59"];

//   const SIZE_BUCKETS = [
//     { scale: 0.25, weight: 0.65 },
//     { scale: 0.45, weight: 0.2 },
//     { scale: 0.8, weight: 0.1 },
//     { scale: 1.2, weight: 0.04 },
//     { scale: 1.6, weight: 0.01 },
//   ];

//   const pickScale = () => {
//     const r = Math.random();
//     let acc = 0;
//     for (const b of SIZE_BUCKETS) {
//       acc += b.weight;
//       if (r <= acc) return b.scale;
//     }
//     return 0.25;
//   };

//   const makeLogoImage = (color) => {
//     const svg = LIVEPEER_SVG.replace("COLOR_REPLACE", color);
//     const img = new Image();
//     img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
//     return img;
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let rafId;
//     let stars = [];

//     const logoImages = COLORS.map(makeLogoImage);

//     const resize = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const rect = canvas.getBoundingClientRect();

//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//       const count = Math.floor((rect.width * rect.height) / 16000);

//       stars = Array.from({ length: count }).map(() => ({
//         x: Math.random() * rect.width,
//         y: Math.random() * rect.height,
//         scale: pickScale(),
//         base: Math.random() * 0.45 + 0.25,
//         speed: Math.random() * 0.015 + 0.003,
//         phase: Math.random() * Math.PI * 2,
//         img: logoImages[Math.floor(Math.random() * logoImages.length)],
//       }));
//     };

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (const s of stars) {
//         s.phase += s.speed;
//         s.rotation += s.rotSpeed;

//         const alpha = s.base + Math.sin(s.phase) * 0.25;
//         const size = 10 * s.scale;

//         ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

//         const tinted = makeTinted(s.color);

//         ctx.save();
//         ctx.translate(s.x, s.y);
//         ctx.rotate(s.rotation);
//         ctx.drawImage(tinted, -size / 2, -size / 2, size, size);
//         ctx.restore();
//       }

//       rafId = requestAnimationFrame(draw);
//     };

//     resize();
//     draw();
//     window.addEventListener("resize", resize);

//     return () => {
//       cancelAnimationFrame(rafId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         inset: 0,
//         width: "100%",
//         height: "100%",
//         pointerEvents: "none",
//         zIndex: 0,
//       }}
//     />
//   );
// };

export const Starfield = ({ density = 1.1 }) => {
  const canvasRef = useRef(null);

  // Detect theme mode
  const isDarkMode = () => {
    if (typeof window === "undefined") return false;
    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  // Theme-aware color palettes - leaning toward primary green for each mode
  const COLORS_LIGHT = [
    "#5DD662", // Brighter primary green (more weight)
    "#5DD662", // Brighter primary green (duplicate for higher probability)
    "#7FE584", // Very bright green
    "#A0F0A5", // Lightest bright accent
  ];

  const COLORS_DARK = [
    "#2b9a66", // Primary dark green (more weight)
    "#2b9a66", // Primary dark green (duplicate for higher probability)
    "#18794E", // Darker shade
    "#3CB540", // Light green accent
  ];

  const SIZE_BUCKETS = [
    { scale: 0.3, weight: 0.65 },
    { scale: 0.5, weight: 0.2 },
    { scale: 0.9, weight: 0.1 },
    { scale: 1.3, weight: 0.04 },
    { scale: 1.8, weight: 0.01 },
  ];

  const pickScale = () => {
    const r = Math.random();
    let acc = 0;
    for (const b of SIZE_BUCKETS) {
      acc += b.weight;
      if (r <= acc) return b.scale;
    }
    return 0.25;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let rafId;
    let stars = [];
    let tintedCache = new Map(); // key: color -> tinted ImageBitmap|canvas

    // Select color palette based on theme
    const COLORS = isDarkMode() ? COLORS_DARK : COLORS_LIGHT;

    // IMPORTANT: try no leading slash first in Mintlify
    const logo = new Image();
    logo.src = "/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg";

    const makeTinted = (color) => {
      if (tintedCache.has(color)) return tintedCache.get(color);

      const off = document.createElement("canvas");
      const octx = off.getContext("2d");

      const base = 32; // base logo render size in px (scaled per star)
      off.width = base;
      off.height = base;

      // draw the white SVG
      octx.clearRect(0, 0, base, base);
      octx.drawImage(logo, 0, 0, base, base);

      // tint it: keep alpha/shape from SVG, fill with color
      octx.globalCompositeOperation = "source-in";
      octx.fillStyle = color;
      octx.fillRect(0, 0, base, base);
      octx.globalCompositeOperation = "source-over";

      tintedCache.set(color, off);
      return off;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor(((rect.width * rect.height) / 16000) * density);
      stars = Array.from({ length: count }).map(() => {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          scale: pickScale(),
          base: Math.random() * 0.45 + 0.25,
          speed: Math.random() * 0.015 + 0.003,
          phase: Math.random() * Math.PI * 2,
          color,
          rotation: Math.random() * Math.PI * 2, // fixed random angle
          rotSpeed: Math.random() * 0.002 - 0.001, // very subtle drift
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.phase += s.speed;
        s.rotation += s.rotSpeed;

        const alpha = s.base + Math.sin(s.phase) * 0.25;
        const size = 10 * s.scale;

        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

        const tinted = makeTinted(s.color);

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.drawImage(tinted, -size / 2, -size / 2, size, size);
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    logo.onload = () => {
      resize();
      draw();
      window.addEventListener("resize", resize);
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};
