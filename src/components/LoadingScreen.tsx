import { type Component, onMount } from 'solid-js';

/**
 * Animated loading screen — spinning heart with subtle shimmer
 */
export const LoadingScreen: Component = () => {
  return (
    <div class="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{
        'background': 'radial-gradient(ellipse at center, #1a0811, #050208)',
      }}
    >
      {/* Spinning heart */}
      <div
        class="text-6xl mb-6"
        style={{
          'animation': 'spinIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards, heartPulse 1.2s ease-in-out 1.2s infinite',
          'filter': 'drop-shadow(0 0 30px rgba(244,63,94,0.5))',
        }}
      >
        💝
      </div>

      {/* Loading text with shimmer */}
      <div
        class="font-display text-lg tracking-[0.3em] uppercase"
        style={{
          'background': 'linear-gradient(90deg, #9f1239, #f472b6, #fbbf24, #f472b6, #9f1239)',
          'background-size': '200% auto',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'animation': 'shimmer 2.5s linear infinite',
        }}
      >
        Preparing your surprise
      </div>

      {/* Subtle dots */}
      <div class="flex gap-1 mt-3">
        {[0, 1, 2].map((i) => (
          <div
            class="w-1.5 h-1.5 rounded-full"
            style={{
              'background': 'rgba(244,114,182,0.5)',
              'animation': `heartPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
