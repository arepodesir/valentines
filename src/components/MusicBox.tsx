import { type Component, onMount, onCleanup, createEffect } from 'solid-js';
import type { AppConfig } from '../lib/config';
import type { AppPhase } from './App';
import { MusicBoxScene } from '../lib/scene/MusicBoxScene';

interface Props {
  config: AppConfig;
  phase: AppPhase;
  onPhaseChange: (phase: 'opening' | 'playing' | 'finale') => void;
}

/**
 * MusicBox 3.0 — Self-playing cinematic scene
 * The scene auto-progresses through phases on its own
 */
export const MusicBox: Component<Props> = (props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  let scene: MusicBoxScene | null = null;
  let hasStartedAutoPlay = false;

  onMount(() => {
    if (!canvasRef) return;

    // Small delay to ensure canvas is properly sized in DOM
    requestAnimationFrame(() => {
      if (!canvasRef) return;
      scene = new MusicBoxScene(canvasRef, props.config);
      scene.start();

      // If we're already in opening phase, start autoPlay immediately
      if (props.phase === 'opening' && !hasStartedAutoPlay) {
        hasStartedAutoPlay = true;
        // Slight delay to let first frame render
        setTimeout(() => {
          scene?.autoPlay((scenePhase) => {
            props.onPhaseChange(scenePhase);
          });
        }, 300);
      }
    });
  });

  createEffect(() => {
    const p = props.phase;
    if (!scene) return;

    if (p === 'opening' && !hasStartedAutoPlay) {
      hasStartedAutoPlay = true;
      scene.autoPlay((scenePhase) => {
        props.onPhaseChange(scenePhase);
      });
    }

    if (p === 'finale') {
      scene.dispose();
      scene = null;
    }
  });

  onCleanup(() => {
    scene?.dispose();
    scene = null;
  });

  return (
    <div class="fixed inset-0 z-10">
      <canvas
        ref={canvasRef}
        class="w-full h-full block"
        style={{ 'touch-action': 'none' }}
      />
    </div>
  );
};
