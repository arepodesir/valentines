import { type Component, onMount, onCleanup, createSignal } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
}

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  hue: number;
}

/**
 * Background 3.0 — Magical blur inversion with fizzing sparkle trail
 * - Glowier: multiple layered radial gradients with screen blending
 * - Fizzier: sparkle particles burst outward from the pointer and fade
 * - Magic: warm light rays from pointer, outer halo ring, color shimmer
 */
export const Background: Component<Props> = (props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  const [targetPos, setTargetPos] = createSignal({ x: -9999, y: -9999 });
  const [imgLoaded, setImgLoaded] = createSignal(false);
  let animId = 0;
  let blurredImg: HTMLCanvasElement | null = null;
  let sharpImg: HTMLImageElement | null = null;
  let sparks: Spark[] = [];
  let sparkTimer = 0;

  const handlePointer = (e: PointerEvent) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  const handlePointerLeave = () => {
    setTargetPos({ x: -9999, y: -9999 });
  };

  onMount(() => {
    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      sharpImg = img;
      const offscreen = document.createElement('canvas');
      offscreen.width = img.width;
      offscreen.height = img.height;
      const octx = offscreen.getContext('2d')!;
      octx.filter = `blur(${props.config.background.blur * 2.5}px)`;
      octx.drawImage(img, 0, 0);
      blurredImg = offscreen;
      setImgLoaded(true);
      startRenderLoop();
    };
    img.src = props.config.background.image;
  });

  onCleanup(() => {
    cancelAnimationFrame(animId);
    window.removeEventListener('pointermove', handlePointer);
    window.removeEventListener('pointerleave', handlePointerLeave);
  });

  const startRenderLoop = () => {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d')!;
    let currentPos = { x: -9999, y: -9999 };
    let time = 0;

    const resize = () => {
      if (!canvasRef) return;
      canvasRef.width = window.innerWidth;
      canvasRef.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!canvasRef || !blurredImg || !sharpImg) return;
      const w = canvasRef.width;
      const h = canvasRef.height;
      const target = targetPos();
      time += 0.016;

      // Smooth lerp
      currentPos = {
        x: currentPos.x + (target.x - currentPos.x) * 0.06,
        y: currentPos.y + (target.y - currentPos.y) * 0.06,
      };

      // Cover dimensions
      const imgAspect = sharpImg.width / sharpImg.height;
      const canvasAspect = w / h;
      let drawW: number, drawH: number, drawX: number, drawY: number;
      if (canvasAspect > imgAspect) {
        drawW = w; drawH = w / imgAspect;
        drawX = 0; drawY = (h - drawH) / 2;
      } else {
        drawH = h; drawW = h * imgAspect;
        drawX = (w - drawW) / 2; drawY = 0;
      }

      // 1. Draw blurred base
      ctx.drawImage(blurredImg, drawX - 20, drawY - 20, drawW + 40, drawH + 40);

      // 2. Vignette
      const vignette = ctx.createRadialGradient(w / 2, h / 2, w * 0.15, w / 2, h / 2, w * 0.75);
      vignette.addColorStop(0, 'rgba(5,2,8,0.1)');
      vignette.addColorStop(1, 'rgba(5,2,8,0.55)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // 3. Magic reveal at pointer
      const active = currentPos.x > -5000;
      if (active) {
        const baseRadius = props.config.background.glow_radius * 2;
        // Breathing radius
        const radius = baseRadius + Math.sin(time * 2) * 12;
        const intensity = props.config.background.glow_intensity;

        // Sharp image reveal with soft edge
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, radius, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(sharpImg, drawX, drawY, drawW, drawH);

        // Feathered edge
        const feather = ctx.createRadialGradient(
          currentPos.x, currentPos.y, radius * 0.4,
          currentPos.x, currentPos.y, radius
        );
        feather.addColorStop(0, 'rgba(5,2,8,0)');
        feather.addColorStop(0.7, 'rgba(5,2,8,0.3)');
        feather.addColorStop(1, 'rgba(5,2,8,0.85)');
        ctx.fillStyle = feather;
        ctx.fillRect(currentPos.x - radius, currentPos.y - radius, radius * 2, radius * 2);
        ctx.restore();

        // === MAGICAL GLOW LAYERS (screen composite) ===
        ctx.globalCompositeOperation = 'screen';

        // Layer 1: Wide outer pink halo (breathing)
        const halo1R = radius * 2.2 + Math.sin(time * 1.5) * 20;
        const halo1 = ctx.createRadialGradient(
          currentPos.x, currentPos.y, 0,
          currentPos.x, currentPos.y, halo1R
        );
        halo1.addColorStop(0, `rgba(244,114,182,${intensity * 0.2})`);
        halo1.addColorStop(0.3, `rgba(251,191,36,${intensity * 0.12})`);
        halo1.addColorStop(0.6, `rgba(217,70,239,${intensity * 0.06})`);
        halo1.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = halo1;
        ctx.fillRect(0, 0, w, h);

        // Layer 2: Bright center glow (warm gold-pink core)
        const coreR = radius * 0.7;
        const core = ctx.createRadialGradient(
          currentPos.x, currentPos.y, 0,
          currentPos.x, currentPos.y, coreR
        );
        core.addColorStop(0, `rgba(255,240,220,${intensity * 0.5})`);
        core.addColorStop(0.2, `rgba(251,191,36,${intensity * 0.35})`);
        core.addColorStop(0.5, `rgba(244,114,182,${intensity * 0.2})`);
        core.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = core;
        ctx.fillRect(currentPos.x - coreR, currentPos.y - coreR, coreR * 2, coreR * 2);

        // Layer 3: Shimmer ring (rotating color band)
        const ringR = radius * 1.3;
        const shimmerAngle = time * 0.8;
        for (let i = 0; i < 6; i++) {
          const a = shimmerAngle + (i / 6) * Math.PI * 2;
          const rx = currentPos.x + Math.cos(a) * ringR * 0.7;
          const ry = currentPos.y + Math.sin(a) * ringR * 0.7;
          const spotR = 30 + Math.sin(time * 3 + i) * 10;
          const spotGrad = ctx.createRadialGradient(rx, ry, 0, rx, ry, spotR);
          const hues = [
            'rgba(244,114,182,0.15)',
            'rgba(251,191,36,0.12)',
            'rgba(217,70,239,0.1)',
            'rgba(244,63,94,0.15)',
            'rgba(251,146,60,0.1)',
            'rgba(168,85,247,0.08)',
          ];
          spotGrad.addColorStop(0, hues[i]);
          spotGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = spotGrad;
          ctx.fillRect(rx - spotR, ry - spotR, spotR * 2, spotR * 2);
        }

        ctx.globalCompositeOperation = 'source-over';

        // === FIZZING SPARKLE PARTICLES ===
        sparkTimer += 0.016;
        if (sparkTimer > 0.03) {
          sparkTimer = 0;
          // Emit 2-3 sparks per frame
          for (let s = 0; s < 3; s++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 3;
            sparks.push({
              x: currentPos.x + (Math.random() - 0.5) * 20,
              y: currentPos.y + (Math.random() - 0.5) * 20,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 1,
              life: 1,
              maxLife: 0.6 + Math.random() * 0.8,
              size: 1 + Math.random() * 2.5,
              hue: Math.random() > 0.5 ? 340 : (Math.random() > 0.5 ? 40 : 280),
            });
          }
        }
      }

      // Update and draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05; // gravity
        s.vx *= 0.98; // drag
        s.life -= 0.016 / s.maxLife;

        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        const alpha = s.life * 0.8;
        ctx.globalCompositeOperation = 'screen';
        const sparkGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
        sparkGrad.addColorStop(0, `hsla(${s.hue}, 90%, 80%, ${alpha})`);
        sparkGrad.addColorStop(0.3, `hsla(${s.hue}, 80%, 60%, ${alpha * 0.6})`);
        sparkGrad.addColorStop(1, `hsla(${s.hue}, 70%, 50%, 0)`);
        ctx.fillStyle = sparkGrad;
        ctx.fillRect(s.x - s.size * 3, s.y - s.size * 3, s.size * 6, s.size * 6);
        ctx.globalCompositeOperation = 'source-over';
      }

      // Cap sparks
      if (sparks.length > 150) sparks.splice(0, sparks.length - 150);

      animId = requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div class="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        class="absolute inset-0 w-full h-full"
        style={{ 'image-rendering': 'auto' }}
      />

      {/* Ambient floating particles */}
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          const isPetal = i < 10;
          const size = isPetal ? 6 + Math.random() * 10 : 2 + Math.random() * 3;
          return (
            <div
              class="absolute"
              style={{
                'width': `${size}px`,
                'height': `${size}px`,
                'left': `${Math.random() * 100}%`,
                'top': `${Math.random() * 100}%`,
                'background': isPetal
                  ? `radial-gradient(ellipse, rgba(244,114,182,${0.3 + Math.random() * 0.3}), rgba(225,29,72,${0.15 + Math.random() * 0.15}))`
                  : `rgba(251,191,36,${0.3 + Math.random() * 0.4})`,
                'border-radius': isPetal ? '50% 0 50% 0' : '50%',
                'transform': isPetal ? `rotate(${Math.random() * 360}deg)` : 'none',
                'animation': `floatGentle ${5 + Math.random() * 5}s ease-in-out infinite`,
                'animation-delay': `${Math.random() * 8}s`,
                'filter': isPetal ? 'none' : `blur(${Math.random()}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
