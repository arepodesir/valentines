import { type Component, createSignal, Show } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  volume: number;
  onPlay: () => void;
  onRewind: () => void;
  onForward: () => void;
  onSeek: (pct: number) => void;
  onVolume: (vol: number) => void;
  onFinale: () => void;
}

function formatTime(s: number): string {
  if (!isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export const Controls: Component<Props> = (props) => {
  const [showVolume, setShowVolume] = createSignal(false);
  const [isDragging, setIsDragging] = createSignal(false);
  let seekBarRef: HTMLDivElement | undefined;
  let volumeRef: HTMLDivElement | undefined;

  const handleSeekStart = (e: PointerEvent) => {
    setIsDragging(true);
    seekTo(e);
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
  };

  const handleSeekMove = (e: PointerEvent) => {
    if (isDragging()) seekTo(e);
  };

  const handleSeekEnd = () => {
    setIsDragging(false);
  };

  const seekTo = (e: PointerEvent) => {
    if (!seekBarRef) return;
    const rect = seekBarRef.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    props.onSeek(pct);
  };

  const handleVolumeChange = (e: PointerEvent) => {
    if (!volumeRef) return;
    const rect = volumeRef.getBoundingClientRect();
    const pct = 1 - Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    props.onVolume(pct);
  };

  const ControlButton: Component<{ onClick: () => void; children: any }> = (p) => (
    <button
      class="p-3 bg-white/10 rounded-full hover:bg-white/20 active:scale-95 transition-all text-white backdrop-blur-md"
      onClick={p.onClick}
    >
      {p.children}
    </button>
  );

  return (
    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center gap-4 shadow-2xl">
      
      {/* Time */}
      <div class="text-[10px] font-mono text-white/50 w-20 text-right">
        {formatTime(props.currentTime)}
      </div>

      {/* Progress */}
      <div 
        ref={seekBarRef}
        class="w-32 h-1 bg-white/10 rounded-full relative cursor-pointer group"
        onPointerDown={handleSeekStart}
        onPointerMove={handleSeekMove}
        onPointerUp={handleSeekEnd}
      >
        <div 
          class="absolute top-0 left-0 h-full bg-pink-500 rounded-full"
          style={{ width: `${props.progress * 100}%` }}
        />
        <div 
          class="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ left: `${props.progress * 100}%` }}
        />
      </div>

      {/* Controls */}
      <ControlButton onClick={props.onRewind}>
        <span class="text-xs">⏪</span>
      </ControlButton>

      <button 
        onClick={props.onPlay}
        class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all"
      >
        {props.isPlaying ? "⏸" : "▶"}
      </button>

      <ControlButton onClick={props.onForward}>
        <span class="text-xs">⏩</span>
      </ControlButton>
      
      <div class="relative">
        <ControlButton onClick={() => setShowVolume(!showVolume())}>
           🔊
        </ControlButton>
        <Show when={showVolume()}>
           <div class="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/80 p-2 rounded-xl border border-white/10">
               <div ref={volumeRef} class="h-24 w-1 bg-white/20 relative cursor-pointer" onClick={handleVolumeChange}>
                   <div class="absolute bottom-0 left-0 w-full bg-pink-500" style={{ height: `${props.volume * 100}%` }} />
               </div>
           </div>
        </Show>
      </div>

       <ControlButton onClick={props.onFinale}>
        <span class="text-xs">🏁</span>
      </ControlButton>

    </div>
  );
}
