export const Starfield = ({ density = 1.1 }) => {
  const canvasRef = useRef(null);

  const readThemeColor = (tokenName, fallback) => {
    if (typeof window === "undefined") return fallback;
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(tokenName)
      .trim();
    return value || fallback;
  };

  const brightenHex = (hexColor, amount) => {
    const normalized = String(hexColor || "").replace("#", "");
    const expanded =
      normalized.length === 3
        ? normalized
            .split("")
            .map((char) => `${char}${char}`)
            .join("")
        : normalized;

    if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
      return hexColor;
    }

    const channels = expanded.match(/.{2}/g).map((chunk) => Number.parseInt(chunk, 16));
    const adjusted = channels.map((channel) =>
      Math.max(0, Math.min(255, Math.round(channel + (255 - channel) * amount)))
    );

    return `#${adjusted.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
  };

  // Detect theme mode
  const isDarkMode = () => {
    if (typeof window === "undefined") return false;
    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const getColorPalette = () => {
    const accent = readThemeColor("--accent", "#5DD662");
    const accentDark = readThemeColor("--accent-dark", accent);

    return isDarkMode()
      ? [
          accent,
          accent,
          accentDark,
          brightenHex(accent, 0.18),
        ]
      : [
          brightenHex(accent, 0.22),
          brightenHex(accent, 0.22),
          brightenHex(accent, 0.38),
          brightenHex(accent, 0.52),
        ];
  };

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

    // Select color palette based on theme tokens so canvas tinting follows CSS theme state.
    const COLORS = getColorPalette();

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
