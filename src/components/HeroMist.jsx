// src/components/HeroMist.jsx
import { useEffect, useRef } from "react";

// Ground mist over the hero photo. Dozens of soft fog puffs hug the grass
// and boulder line, drifting slowly like a morning field. The visitor's
// cursor pushes the fog aside — it swirls away and eases back home. The
// sky stays almost clear, like real settling mist. On touch screens (or
// when idle) a gentle wandering breeze stirs the fog instead.
export default function HeroMist() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    const SCALE = 0.5; // render at half resolution for performance
    const FOG = "246, 245, 242"; // warm off-white, matches the hazy sky

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let particles = [];
    let lastFrame = 0;
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0, t: -9999, active: false };
    const breeze = { x: 0, y: 0 };

    // pre-rendered lumpy puff sprites so each fog bank has irregular,
    // wispy edges instead of a perfect circle. Lobes are kept fully inside
    // the sprite canvas — a clipped lobe leaves a hard straight edge that
    // reads as a repeating grid across the field.
    const sprites = [];
    const buildSprites = () => {
      for (let v = 0; v < 8; v++) {
        const s = document.createElement("canvas");
        s.width = 256;
        s.height = 160;
        const c = s.getContext("2d");
        const lobes = 4 + Math.floor(Math.random() * 4);
        for (let i = 0; i < lobes; i++) {
          const lr = 34 + Math.random() * 42;
          const lx = lr + Math.random() * (256 - lr * 2);
          const ly = lr + Math.random() * (160 - lr * 2);
          const g = c.createRadialGradient(lx, ly, 0, lx, ly, lr);
          g.addColorStop(0, `rgba(${FOG}, ${0.26 + Math.random() * 0.2})`);
          g.addColorStop(1, `rgba(${FOG}, 0)`);
          c.fillStyle = g;
          c.beginPath();
          c.arc(lx, ly, lr, 0, Math.PI * 2);
          c.fill();
        }
        sprites.push(s);
      }
    };

    const buildParticles = () => {
      particles = [];
      const count = Math.round((w * h) / 2400);
      for (let i = 0; i < count; i++) {
        // bias home positions toward the ground, like settling mist
        const band = Math.sqrt(Math.random());
        const hy = h * (0.58 + band * 0.5);
        // fade to nothing above the grass line, keeping the sun clear
        const alpha =
          (0.1 + Math.random() * 0.15) *
          Math.min(1, Math.max(0, (hy / h - 0.52) / 0.24));
        if (alpha < 0.03) continue;
        const size = h * (0.18 + Math.random() * 0.34) * (0.6 + band * 0.55);
        const p = {
          hx: Math.random() * (w + size) - size / 2,
          hy,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          size,
          alpha,
          fade: 1,
          sprite: sprites[Math.floor(Math.random() * sprites.length)],
          flip: Math.random() < 0.5 ? -1 : 1,
          drift: (1.5 + Math.random() * 3.5) * (Math.random() < 0.5 ? -1 : 1),
          phase: Math.random() * Math.PI * 2,
          bob: h * (0.006 + Math.random() * 0.012),
          bobFreq: 0.25 + Math.random() * 0.5,
          // each puff meanders in its own slow loop, like eddying air
          wanderX: h * (0.02 + Math.random() * 0.05),
          wanderY: h * (0.01 + Math.random() * 0.03),
          wfx: 0.06 + Math.random() * 0.16,
          wfy: 0.05 + Math.random() * 0.14,
          rot: (Math.random() - 0.5) * 0.4,
          rotAmp: 0.06 + Math.random() * 0.12,
          rotFreq: 0.05 + Math.random() * 0.12,
        };
        p.x = p.hx;
        p.y = p.hy;
        particles.push(p);
      }
      // draw the biggest banks first so smaller wisps layer on top
      particles.sort((a, b) => b.size - a.size);
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = Math.max(2, Math.round(rect.width * SCALE));
      h = Math.max(2, Math.round(rect.height * SCALE));
      canvas.width = w;
      canvas.height = h;
      buildParticles();
    };

    const onMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const nx = (e.clientX - rect.left) * SCALE;
      const ny = (e.clientY - rect.top) * SCALE;
      const now = performance.now();
      if (mouse.x > -9000) {
        const dtMs = Math.max(8, now - mouse.t);
        // smoothed cursor velocity, px/s — this is the push direction
        const ivx = ((nx - mouse.x) / dtMs) * 1000;
        const ivy = ((ny - mouse.y) / dtMs) * 1000;
        mouse.vx += (ivx - mouse.vx) * 0.4;
        mouse.vy += (ivy - mouse.vy) * 0.4;
      }
      mouse.x = nx;
      mouse.y = ny;
      mouse.t = now;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const dt = Math.min(0.05, (now - lastFrame) / 1000 || 0.016);
      lastFrame = now;
      const t = now * 0.001;

      ctx.clearRect(0, 0, w, h);

      // thin haze that thickens toward the ground
      const haze = ctx.createLinearGradient(0, h * 0.55, 0, h);
      haze.addColorStop(0, `rgba(${FOG}, 0)`);
      haze.addColorStop(0.55, `rgba(${FOG}, 0.07)`);
      haze.addColorStop(1, `rgba(${FOG}, 0.18)`);
      ctx.fillStyle = haze;
      ctx.fillRect(0, h * 0.55, w, h * 0.45);

      // the disturbance: the cursor, or a wandering breeze when idle.
      // The push follows the disturbance's direction of travel, so fog
      // sweeps aside the way it's actually being pushed.
      mouse.vx *= Math.exp(-5 * dt);
      mouse.vy *= Math.exp(-5 * dt);
      let fx;
      let fy;
      let fvx;
      let fvy;
      if (mouse.active && now - mouse.t < 3000) {
        fx = mouse.x;
        fy = mouse.y;
        fvx = mouse.vx;
        fvy = mouse.vy;
      } else {
        fx = w * (0.5 + 0.34 * Math.sin(t * 0.19));
        fy = h * (0.78 + 0.12 * Math.sin(t * 0.11 + 1.7));
        fvx = (fx - breeze.x) / dt;
        fvy = (fy - breeze.y) / dt;
        if (!isFinite(fvx) || Math.hypot(fvx, fvy) > 400) {
          fvx = 0;
          fvy = 0;
        }
      }
      breeze.x = fx;
      breeze.y = fy;
      const fmag = Math.hypot(fvx, fvy);
      const fspeed = Math.min(800, fmag);
      const ux = fmag > 0.001 ? fvx / fmag : 0;
      const uy = fmag > 0.001 ? fvy / fmag : 0;
      const cursorHere = mouse.active && now - mouse.t < 3000;

      const R = h * 0.3;
      for (const p of particles) {
        // slow ambient drift; when a puff's home wraps to the far edge,
        // move the puff with it so it never races across the scene
        p.hx += p.drift * dt;
        if (p.hx < -p.size) {
          p.hx = w + p.size * 0.5;
          p.x = p.hx;
          p.vx = 0;
        } else if (p.hx > w + p.size) {
          p.hx = -p.size * 0.5;
          p.x = p.hx;
          p.vx = 0;
        }

        // fog is swept along the direction of motion; puffs ahead of the
        // cursor get the most push, with a small radial bulge for volume
        const dx = p.x - fx;
        const dy = p.y - fy;
        const d = Math.hypot(dx, dy) || 1;
        if (d < R && fspeed > 2) {
          const prox = (1 - d / R) ** 2;
          const ahead = 0.35 + 0.65 * Math.max(0, (dx * ux + dy * uy) / d);
          const push = prox * ahead * fspeed;
          p.vx += (ux * 3.2 + (dx / d) * 0.9) * push * dt;
          p.vy += (uy * 3.2 + (dy / d) * 0.9) * push * dt * 0.6;
        }

        // ease back toward a meandering home point, with damping
        const homeX =
          p.hx +
          Math.sin(t * p.wfx + p.phase) * p.wanderX +
          Math.sin(t * p.wfx * 1.73 + p.phase * 2.1) * p.wanderX * 0.5;
        const homeY =
          p.hy + Math.sin(t * p.wfy + p.phase * 1.4) * p.wanderY;
        p.vx += (homeX - p.x) * 1.3 * dt;
        p.vy += (homeY - p.y) * 1.3 * dt;
        const damp = Math.exp(-2.0 * dt);
        p.vx *= damp;
        p.vy *= damp;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // right at the cursor the mist fully dissipates — it breaks up
        // quickly on contact and re-condenses slowly once the cursor moves on
        const clearR = h * 0.2 + p.size * 0.15;
        const fadeTarget =
          cursorHere && d < clearR ? Math.min(1, (d / clearR) ** 1.5) : 1;
        const fadeRate = fadeTarget < p.fade ? 7 : 0.7;
        p.fade += (fadeTarget - p.fade) * Math.min(1, fadeRate * dt);

        const bobY = Math.sin(t * p.bobFreq + p.phase) * p.bob;
        ctx.globalAlpha = p.alpha * p.fade;
        ctx.save();
        ctx.translate(p.x, p.y + bobY);
        ctx.rotate(p.rot + Math.sin(t * p.rotFreq + p.phase) * p.rotAmp);
        ctx.scale(p.flip, 1);
        ctx.drawImage(
          p.sprite,
          -p.size / 2,
          -p.size * 0.31,
          p.size,
          p.size * 0.62
        );
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    };

    buildSprites();
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
