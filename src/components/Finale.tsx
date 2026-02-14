import { type Component, onMount, createSignal } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
}

/**
 * Finale — Simple, elegant end card.
 * Shows the message from config, clearly visible.
 */
export const Finale: Component<Props> = (props) => {
  const [show, setShow] = createSignal(false);
  const [textReveal, setTextReveal] = createSignal(false);

  onMount(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setTextReveal(true), 1200);
    if ('vibrate' in navigator) navigator.vibrate(20);
  });

  // Soft floating particles
  const particles = Array.from({ length: 18 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 8,
    size: 2 + Math.random() * 3,
    opacity: 0.15 + Math.random() * 0.2,
  }));

  return (
    <div class="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient backdrop */}
      <div
        class="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{
          'background': 'radial-gradient(ellipse at 50% 45%, rgba(77,0,25,0.85), rgba(10,3,21,0.97))',
          'opacity': show() ? '1' : '0',
        }}
      />

      {/* Soft particles */}
      <div class="absolute inset-0 pointer-events-none"
        style={{ 'opacity': show() ? '0.5' : '0', 'transition': 'opacity 2s ease' }}
      >
        {particles.map((p) => (
          <div
            class="absolute rounded-full"
            style={{
              'left': `${p.left}%`,
              'bottom': '-2%',
              'width': `${p.size}px`,
              'height': `${p.size}px`,
              'background': `radial-gradient(circle, rgba(244,114,182,${p.opacity}), rgba(251,191,36,${p.opacity * 0.5}))`,
              'animation': `floatUp ${p.duration}s ease-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main message — simple, visible */}
      <div
        class="relative z-10 text-center px-8 max-w-lg"
        style={{
          'opacity': show() ? '1' : '0',
          'transform': show() ? 'translateY(0)' : 'translateY(30px)',
          'transition': 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <h1
          class="font-display text-4xl md:text-6xl font-bold leading-tight"
          style={{
            'opacity': textReveal() ? '1' : '0',
            'transform': textReveal() ? 'translateY(0)' : 'translateY(15px)',
            'transition': 'all 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
            'color': '#f9a8d4',
            'text-shadow': '0 2px 20px rgba(244,63,94,0.4), 0 0 40px rgba(251,191,36,0.15)',
          }}
        >
          {props.config.finale.message}, {props.config.card.to}
        </h1>

        <div
          class="mt-8"
          style={{
            'opacity': textReveal() ? '0.5' : '0',
            'transition': 'opacity 2s ease 1.5s',
            'color': '#f472b6',
            'font-size': '1.5rem',
          }}
        >
          ♥
        </div>
      </div>
    </div>
  );
};
