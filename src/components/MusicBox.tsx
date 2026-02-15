import { type Component, createEffect, onCleanup } from 'solid-js';
import type { AppConfig, SceneTheme } from '../lib/config';

interface Props {
  config: AppConfig;
  phase: 'opening' | 'playing' | 'finale';
  onPhaseChange: (phase: 'opening' | 'playing' | 'finale') => void;
}

export const MusicBox: Component<Props> = (props) => {
  let canvasRef: HTMLCanvasElement | undefined;
  let sceneInstance: any;

  createEffect(() => {
    if (!canvasRef) return;
    
    // Dynamic import to avoid SSR issues and circular deps
    import('../lib/scene/MusicBoxScene').then(({ MusicBoxScene }) => {
      if (sceneInstance) return;
      
      sceneInstance = new MusicBoxScene(canvasRef!, props.config);
      sceneInstance.play();
      
      // Simulate scene lifecycle
      if (props.phase === 'opening') {
         // Scene handles its own opening animation
      }
    });
  });
  
  onCleanup(() => {
    sceneInstance?.dispose();
  });

  return (
    <div class="fixed inset-0 z-10 w-full h-full">
      <canvas ref={canvasRef} class="block w-full h-full touch-none" />
    </div>
  );
};
