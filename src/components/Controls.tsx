import { type Component, createSignal, createEffect, Show } from 'solid-js';
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
  const [hoveredBtn, setHoveredBtn] = createSignal<string | null>(null);
  const [showVolume, setShowVolume] = createSignal(false);
  const [isDragging, setIsDragging] = createSignal(false);
  let seekBarRef: HTMLDivElement | undefined;
  let volumeRef: HTMLDivElement | undefined;

  // Seek — supports both click and drag (touch + mouse)
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

  // Haptic feedback
  const haptic = (ms = 10) => {
    if ('vibrate' in navigator) navigator.vibrate(ms);
  };

  const ControlButton: Component<{
    id: string;
    onClick: () => void;
    children: any;
    label: string;
    large?: boolean;
  }> = (btnProps) => (
    <button
      class="relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none active:scale-90 btn-glow"
      classList={{
        'w-16 h-16': btnProps.large,
        'w-11 h-11': !btnProps.large,
      }}
      onClick={() => { haptic(); btnProps.onClick(); }}
      onPointerEnter={() => setHoveredBtn(btnProps.id)}
      onPointerLeave={() => setHoveredBtn(null)}
      aria-label={btnProps.label}
      title={btnProps.label}
      style={{
        'background': hoveredBtn() === btnProps.id
          ? 'rgba(244,63,94,0.25)'
          : btnProps.large
            ? 'rgba(225,29,72,0.2)'
            : 'rgba(255,255,255,0.06)',
        'border': hoveredBtn() === btnProps.id
          ? '1px solid rgba(244,114,182,0.3)'
          : '1px solid rgba(255,255,255,0.08)',
        'box-shadow': hoveredBtn() === btnProps.id
          ? '0 0 20px rgba(244,63,94,0.3), inset 0 0.5px 0 rgba(255,255,255,0.15)'
          : 'inset 0 0.5px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* Heart glow bg for play button */}
      {btnProps.large && (
        <div class="absolute inset-0 rounded-full animate-glow-pulse opacity-40" />
      )}
      <div class="relative z-10 text-white flex items-center justify-center"
        classList={{ 'drop-shadow-lg': btnProps.large }}
      >
        {btnProps.children}
      </div>
    </button>
  );

  // Waveform visualizer bars
  const WaveformBars = () => (
    <div class="flex items-end gap-px h-6 opacity-30 mx-2">
      {Array.from({ length: 32 }).map((_, i) => (
        <div
          class="w-px rounded-full"
          style={{
            'height': props.isPlaying
              ? `${20 + Math.sin(i * 0.7 + props.progress * Math.PI * 4) * 50 + Math.random() * 30}%`
              : '20%',
            'background': `linear-gradient(to top, ${props.config.theme.primary}, ${props.config.theme.accent})`,
            'transition': props.isPlaying ? 'height 0.15s ease' : 'height 0.5s ease',
          }}
        />
      ))}
    </div>
  );

  return (
    <div class="fixed bottom-0 left-0 right-0 z-40 safe-pb">
      <div class="max-w-md mx-auto px-4 pb-3">
        {/* Floating control dock */}
        <div class="glass-control px-5 py-4 relative overflow-hidden">

          {/* Waveform behind everything */}
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <WaveformBars />
          </div>

          {/* Track info & time */}
          <div class="flex items-center justify-between mb-3 relative z-10">
            <span class="text-[10px] text-valentine-300/60 font-body tracking-wider uppercase truncate">
              ♫ Someday My Prince Will Come
            </span>
            <span class="text-[10px] text-valentine-300/50 font-mono tabular-nums">
              {formatTime(props.currentTime)} / {formatTime(props.duration)}
            </span>
          </div>

          {/* Seek bar — touch-friendly, thick */}
          <div class="relative z-10 mb-4">
            <div
              ref={seekBarRef}
              class="relative h-2 w-full rounded-full cursor-pointer touch-none"
              style={{
                'background': 'rgba(255,255,255,0.08)',
              }}
              onPointerDown={handleSeekStart}
              onPointerMove={handleSeekMove}
              onPointerUp={handleSeekEnd}
              onPointerCancel={handleSeekEnd}
            >
              {/* Progress fill */}
              <div
                class="absolute top-0 left-0 h-full rounded-full transition-none"
                style={{
                  'width': `${props.progress * 100}%`,
                  'background': `linear-gradient(90deg, ${props.config.theme.primary}, ${props.config.theme.accent}, ${props.config.theme.gold})`,
                  'box-shadow': `0 0 10px ${props.config.theme.primary}80`,
                }}
              />
              {/* Seek thumb */}
              <div
                class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform duration-100"
                classList={{ 'scale-125': isDragging() }}
                style={{
                  'left': `calc(${props.progress * 100}% - 8px)`,
                  'background': `radial-gradient(circle, ${props.config.theme.accent}, ${props.config.theme.primary})`,
                  'box-shadow': `0 0 8px ${props.config.theme.primary}, 0 2px 6px rgba(0,0,0,0.4)`,
                  'border': '2px solid rgba(255,255,255,0.3)',
                }}
              />
            </div>
          </div>

          {/* Buttons row */}
          <div class="flex items-center justify-center gap-3 relative z-10">
            {/* Volume toggle */}
            <div class="relative">
              <ControlButton
                id="volume"
                onClick={() => setShowVolume(!showVolume())}
                label="Volume"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  {props.volume > 0.5 ? (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z"/>
                  ) : props.volume > 0 ? (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5z"/>
                  ) : (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3l2.5-2.5 1.42 1.42L17.92 12l2.5 2.5-1.42 1.42L16.5 13.5 14 16l-1.42-1.42L15.08 12l-2.5-2.5L14 8l2.5 2.5z"/>
                  )}
                </svg>
              </ControlButton>

              {/* Volume popup slider */}
              <Show when={showVolume()}>
                <div
                  class="absolute bottom-14 left-1/2 -translate-x-1/2 glass-dark rounded-2xl p-3 w-10"
                  style={{ 'z-index': '100' }}
                >
                  <div
                    ref={volumeRef}
                    class="relative h-24 w-2 mx-auto rounded-full cursor-pointer overflow-hidden"
                    style={{ 'background': 'rgba(255,255,255,0.1)' }}
                    onClick={handleVolumeChange}
                  >
                    <div
                      class="absolute bottom-0 left-0 w-full rounded-full"
                      style={{
                        'height': `${props.volume * 100}%`,
                        'background': `linear-gradient(to top, ${props.config.theme.primary}, ${props.config.theme.accent})`,
                      }}
                    />
                  </div>
                </div>
              </Show>
            </div>

            {/* Rewind */}
            <ControlButton id="rewind" onClick={props.onRewind} label="Rewind 10s">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M11.99 5V1l-5 5 5 5V7a6 6 0 11-6 6H4a8 8 0 108-8z"/>
                <text x="10" y="16" font-size="7" text-anchor="middle" fill="currentColor" font-weight="bold">10</text>
              </svg>
            </ControlButton>

            {/* Play/Pause — large */}
            <ControlButton id="play" onClick={props.onPlay} label={props.isPlaying ? 'Pause' : 'Play'} large>
              {props.isPlaying ? (
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              )}
            </ControlButton>

            {/* Forward */}
            <ControlButton id="forward" onClick={props.onForward} label="Forward 10s">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d="M12 5V1l5 5-5 5V7a6 6 0 106 6h2a8 8 0 11-8-8z"/>
                <text x="13" y="16" font-size="7" text-anchor="middle" fill="currentColor" font-weight="bold">10</text>
              </svg>
            </ControlButton>

            {/* Finale */}
            <ControlButton id="finale" onClick={props.onFinale} label="Finale">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </ControlButton>
          </div>
        </div>
      </div>
    </div>
  );
};
