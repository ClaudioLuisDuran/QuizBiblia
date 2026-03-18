import React, { useEffect, useRef } from "react";

const COLORS = ["#a855f7", "#3b82f6", "#ec4899", "#f59e0b", "#10b981", "#f43f5e", "#6366f1", "#14b8a6"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Confetti({ active }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const piecesRef = useRef([]);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create pieces
    const pieces = [];
    for (let i = 0; i < 150; i++) {
      pieces.push({
        x: randomBetween(0, canvas.width),
        y: randomBetween(-canvas.height, 0),
        w: randomBetween(8, 16),
        h: randomBetween(5, 10),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: randomBetween(-2, 2),
        vy: randomBetween(3, 7),
        rotation: randomBetween(0, Math.PI * 2),
        rotSpeed: randomBetween(-0.1, 0.1),
        opacity: 1,
      });
    }
    piecesRef.current = pieces;

    let startTime = null;
    const duration = 3500;

    function draw(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      piecesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        // Fade out in last 30%
        if (progress > 0.7) {
          p.opacity = Math.max(0, 1 - (progress - 0.7) / 0.3);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (progress < 1) {
        animRef.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}