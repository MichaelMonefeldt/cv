import React, { useEffect, useRef } from "react";

export default function PixelSprite({
  frames,
  fps = 8,
  scale = 4,
  playing = true,
  className = "",
  style = {},
}) {
  const canvasRef = useRef(null);

  const imagesRef = useRef([]);
  const readyRef = useRef(false);

  const frameIndexRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function loadFrames() {
      readyRef.current = false;
      imagesRef.current = [];

      const loaded = await Promise.all(
        frames.map(async (src) => {
          const img = new Image();
          img.src = src;

          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });

          if (img.decode) {
            try {
              await img.decode();
            } catch {}
          }

          return img;
        })
      );

      if (cancelled) return;

      imagesRef.current = loaded;
      frameIndexRef.current = 0;
      lastTimeRef.current = 0;
      readyRef.current = true;

      const canvas = canvasRef.current;
      const first = loaded[0];

      if (canvas && first) {
        const width = first.naturalWidth * scale;
        const height = first.naturalHeight * scale;

        canvas.width = width;
        canvas.height = height;

        // Prevent browser from resizing it differently in layout
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (ctx) {
          ctx.imageSmoothingEnabled = false;
        }
      }
    }

    loadFrames().catch((e) => {
      console.error("Failed to load sprite frames:", e);
    });

    return () => {
      cancelled = true;
    };
  }, [frames, scale]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    const frameDurationMs = 1000 / fps;

    function drawFrame(index) {
      const imgs = imagesRef.current;
      const img = imgs[index];
      if (!img) return;

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        0,
        0,
        img.naturalWidth * scale,
        img.naturalHeight * scale
      );
    }

    function tick(ts) {
      rafIdRef.current = requestAnimationFrame(tick);

      if (!playing || !readyRef.current) return;

      if (!lastTimeRef.current) {
        lastTimeRef.current = ts;
        drawFrame(frameIndexRef.current);
        return;
      }

      const elapsed = ts - lastTimeRef.current;
      if (elapsed >= frameDurationMs) {
        const framesToAdvance = Math.floor(elapsed / frameDurationMs);
        const count = imagesRef.current.length || 1;

        frameIndexRef.current = (frameIndexRef.current + framesToAdvance) % count;
        lastTimeRef.current += framesToAdvance * frameDurationMs;

        drawFrame(frameIndexRef.current);
      }
    }

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, [fps, scale, playing]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        imageRendering: "pixelated",
        ...style,
      }}
    />
  );
}