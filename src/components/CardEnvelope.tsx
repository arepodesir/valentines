import { type Component, onMount, createSignal, createEffect } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
  onOpen: () => void;
}

/**
 * CardEnvelope 2.0 — Mobile-first, richer glassmorphic styling
 * Better animations, seal glow, perspective tilt on touch
 */
export const CardEnvelope: Component<Props> = (props) => {
  let envelopeRef: HTMLDivElement | undefined;
  const [isHovered, setIsHovered] = createSignal(false);
  const [opened, setOpened] = createSignal(false);
  const [tilt, setTilt] = createSignal({ x: 0, y: 0 });

  const handleTilt = (e: PointerEvent) => {
    if (!envelopeRef || opened()) return;
    const rect = envelopeRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  };

  const handleTiltEnd = () => setTilt({ x: 0, y: 0 });

  const handleOpen = () => {
    if (opened()) return;
    setOpened(true);

    // Haptic
    if ('vibrate' in navigator) navigator.vibrate(20);

    setTimeout(() => props.onOpen(), 800);
  };

  return (
    <div
      class="fixed inset-0 z-30 flex items-center justify-center p-6"
      style={{ 'pointer-events': opened() ? 'none' : 'auto' }}
    >
      <div
        ref={envelopeRef}
        class="relative w-full max-w-sm perspective-2000 cursor-pointer"
        onPointerMove={handleTilt}
        onPointerLeave={handleTiltEnd}
        onClick={handleOpen}
        style={{
          'transform': opened()
            ? 'scale(0.7) translateY(-60px) rotateX(20deg)'
            : `rotateX(${tilt().x}deg) rotateY(${tilt().y}deg)`,
          'opacity': opened() ? '0' : '1',
          'transition': opened()
            ? 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 0.3s ease-out',
          'transform-style': 'preserve-3d',
        }}
      >
        {/* Main envelope body */}
        <div
          class="rounded-3xl overflow-hidden relative"
          style={{
            'background': `linear-gradient(155deg,
              rgba(225,29,72,0.25) 0%,
              rgba(190,18,60,0.15) 30%,
              rgba(159,18,57,0.12) 60%,
              rgba(120,15,45,0.18) 100%)`,
            'backdrop-filter': 'blur(28px) saturate(220%)',
            '-webkit-backdrop-filter': 'blur(28px) saturate(220%)',
            'border': '1px solid rgba(244,114,182,0.18)',
            'box-shadow': isHovered()
              ? '0 24px 60px rgba(225,29,72,0.2), 0 8px 24px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.15)'
              : '0 16px 48px rgba(225,29,72,0.12), 0 4px 16px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(255,255,255,0.1)',
            'transition': 'box-shadow 0.4s ease',
            'padding': '2rem 2rem 2.5rem',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Envelope flap triangle */}
          <div
            class="absolute top-0 left-0 right-0 h-24 pointer-events-none"
            style={{
              'background': `linear-gradient(180deg, rgba(244,114,182,0.12) 0%, transparent 100%)`,
              'clip-path': 'polygon(0 0, 100% 0, 50% 80%)',
            }}
          />

          {/* Heart seal with glow */}
          <div class="relative flex justify-center mb-5">
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center animate-glow-pulse"
              style={{
                'background': 'rgba(225,29,72,0.2)',
                'border': '1.5px solid rgba(244,114,182,0.3)',
              }}
            >
              <span
                class="text-2xl animate-heart-pulse"
                style={{ 'filter': 'drop-shadow(0 0 8px rgba(244,63,94,0.5))' }}
              >
                💌
              </span>
            </div>
          </div>

          {/* FROM */}
          <div class="text-center mb-4">
            <p class="text-[10px] tracking-[0.25em] uppercase mb-1"
              style={{ 'color': 'rgba(244,114,182,0.6)' }}
            >
              From
            </p>
            <p class="font-display text-2xl md:text-3xl text-white text-shadow-glow font-semibold">
              {props.config.card.from}
            </p>
          </div>

          {/* Divider */}
          <div class="flex items-center justify-center mb-4 gap-3">
            <div class="h-px flex-1" style={{ 'background': 'linear-gradient(90deg, transparent, rgba(244,114,182,0.3), transparent)' }} />
            <span class="text-valentine-300/40 text-xs">♥</span>
            <div class="h-px flex-1" style={{ 'background': 'linear-gradient(90deg, transparent, rgba(244,114,182,0.3), transparent)' }} />
          </div>

          {/* TO */}
          <div class="text-center mb-5">
            <p class="text-[10px] tracking-[0.25em] uppercase mb-1"
              style={{ 'color': 'rgba(244,114,182,0.6)' }}
            >
              To
            </p>
            <p class="font-display text-3xl md:text-4xl text-white text-shadow-glow font-bold">
              {props.config.card.to}
            </p>
          </div>

          {/* Message */}
          <p class="text-center text-sm md:text-base italic mb-6"
            style={{ 'color': 'rgba(253,164,175,0.75)', 'font-family': "'Cormorant Garamond', serif" }}
          >
            {props.config.card.message}
          </p>

          {/* CTA button */}
          <div class="flex justify-center">
            <button
              class="px-6 py-2.5 rounded-full text-sm font-medium tracking-wider transition-all duration-300 btn-glow"
              style={{
                'background': 'rgba(244,114,182,0.12)',
                'border': '1px solid rgba(244,114,182,0.2)',
                'color': 'rgba(253,164,175,0.9)',
                'box-shadow': isHovered()
                  ? '0 0 24px rgba(244,63,94,0.25), inset 0 0.5px 0 rgba(255,255,255,0.1)'
                  : 'inset 0 0.5px 0 rgba(255,255,255,0.06)',
              }}
            >
              ✨ Tap to open ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
