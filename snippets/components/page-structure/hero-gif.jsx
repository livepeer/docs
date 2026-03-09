/**
 * @component Starfield
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Animated Livepeer logo starfield background for frame-mode hero sections.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/portal.mdx, v2/cn/about/portal.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/home/mission-control.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/es/about/portal.mdx, v2/es/community/community-portal.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/home/mission-control.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/portal.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/home/mission-control.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {number} [density=1.1] - density prop.
 * @example
 * <Starfield />
 */
export const Starfield = ({ density = 1.1 }) => {
  const canvasRef = useRef(null);

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
    const resolvePalette = () => {
      const computed = window.getComputedStyle(document.documentElement);
      return [
        computed.getPropertyValue("--lp-color-accent-bright").trim(),
        computed.getPropertyValue("--lp-color-accent-bright").trim(),
        computed.getPropertyValue("--lp-color-accent-brightest").trim(),
        computed.getPropertyValue("--lp-color-accent").trim(),
      ].filter(Boolean);
    };

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
      const palette = resolvePalette();
      stars = Array.from({ length: count }).map(() => {
        const color = palette[Math.floor(Math.random() * palette.length)];
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
