import { createSignal, onMount, Show, type Component } from 'solid-js';
import { loadConfig, type AppConfig } from '../lib/config';
import { ErrorBoundary } from './ErrorBoundary';
import { CardEnvelope } from './CardEnvelope';
import { Background } from './Background';
import { MusicBox } from './MusicBox';
import { Controls } from './Controls';
import { Finale } from './Finale';
import { LoadingScreen } from './LoadingScreen';
import { TimeCapsuleLock } from './TimeCapsuleLock';

export type AppPhase = 'loading' | 'envelope' | 'opening' | 'playing' | 'finale';

interface AppProps {
  confPath?: string;
  slug?: string;
}

/**
 * App 5.0 — Hearth Core (Restored)
 * - Orchestrates the entire letter experience
 * - Hides global nav when envelope opens
 * - Manages audio, scene, and UI phases
 */
const App: Component<AppProps> = (props) => {
  const [config, setConfig] = createSignal<AppConfig | null>(null);
  const [phase, setPhase] = createSignal<AppPhase>('loading');
  const [audioEl, setAudioEl] = createSignal<HTMLAudioElement | null>(null);
  const [audioProgress, setAudioProgress] = createSignal(0);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [volume, setVolume] = createSignal(0.8);
  const [showScene, setShowScene] = createSignal(false);
  const [isLocked, setIsLocked] = createSignal(false);

  // Load config & initialize
  onMount(async () => {
    try {
      const cfg = await loadConfig(props.confPath || '/program.conf');
      setConfig(cfg);
      
      // Check time capsule lock (if timecapsule exists and has unlock date in future)
      if (cfg.timecapsule?.unlock_date && new Date(cfg.timecapsule.unlock_date) > new Date()) {
        setIsLocked(true);
        setPhase('envelope'); // Ready state behind lock
      } else {
        setTimeout(() => setPhase('envelope'), 800);
      }

    } catch (err) {
      console.error('Failed to load config:', err);
    }
  });

  const hideGlobalNav = () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.add('hidden-nav');
  };

  const showGlobalNav = () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.classList.remove('hidden-nav');
  };

  const handleEnvelopeOpen = () => {
    if ('vibrate' in navigator) navigator.vibrate([10, 30, 10]);
    hideGlobalNav(); // Hide nav to focus on the experience
    setShowScene(true);
    setPhase('opening');

    setTimeout(() => {
      const audio = audioEl();
      if (audio && config()?.audio.autoplay) {
        audio.volume = volume();
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 1200);
  };

  const handleScenePhase = (scenePhase: 'opening' | 'playing' | 'finale') => {
    if (scenePhase === 'playing' && phase() !== 'playing') setPhase('playing');
    if (scenePhase === 'finale') handleFinale();
  };

  const handlePlay = () => {
    const audio = audioEl();
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleRewind = () => {
    const audio = audioEl();
    if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const handleForward = () => {
    const audio = audioEl();
    if (audio) audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
  };

  const handleSeek = (pct: number) => {
    const audio = audioEl();
    if (audio && audio.duration) audio.currentTime = audio.duration * pct;
  };

  const handleVolume = (vol: number) => {
    setVolume(vol);
    const audio = audioEl();
    if (audio) audio.volume = vol;
  };

  const handleFinale = () => {
    setPhase('finale');
    setShowScene(false);
    showGlobalNav(); // Show nav again at the end
    
    // Fade out audio gracefully
    const audio = audioEl();
    if (audio) {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 100);
    }
  };

  const setupAudio = (el: HTMLAudioElement) => {
    setAudioEl(el);
    el.volume = volume();
    el.addEventListener('timeupdate', () => {
      if (el.duration) {
        setAudioProgress(el.currentTime / el.duration);
        setCurrentTime(el.currentTime);
      }
    });
    el.addEventListener('loadedmetadata', () => setDuration(el.duration));
    el.addEventListener('durationchange', () => setDuration(el.duration));
    el.addEventListener('ended', () => {
      // safe access
      if (config()?.audio.loop) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        handleFinale();
      }
    });
  };

  return (
    <ErrorBoundary>
      <div class="relative w-full h-full overflow-hidden select-none">
        
        {/* Loading screen */}
        <Show when={phase() === 'loading'}>
          <LoadingScreen />
        </Show>

        <Show when={config()}>
          {(cfg) => (
            <>
              {/* Audio Element */}
              <audio
                ref={setupAudio}
                src={cfg().audio.src}
                preload="auto"
                loop={cfg().audio.loop}
              />

              {/* Background — always active, handles blur/glow */}
              <Background config={cfg()} />

              {/* Time Capsule Lock Overlay */}
              <Show when={isLocked()}>
                <TimeCapsuleLock 
                  config={cfg()} 
                  onUnlock={() => setIsLocked(false)} 
                />
              </Show>

              {/* Envelope Phase (only if unlocked) */}
              <Show when={phase() === 'envelope' && !isLocked()}>
                <CardEnvelope config={cfg()} onOpen={handleEnvelopeOpen} />
              </Show>

              {/* Scene Phase (Music Box 3D) */}
              <Show when={showScene()}>
                <MusicBox
                  config={cfg()}
                  phase={phase()}
                  onPhaseChange={handleScenePhase}
                />
              </Show>

              {/* Playback Controls — dock at bottom */}
              <Show when={phase() === 'playing'}>
                <Controls
                  config={cfg()}
                  isPlaying={isPlaying()}
                  progress={audioProgress()}
                  currentTime={currentTime()}
                  duration={duration()}
                  volume={volume()}
                  onPlay={handlePlay}
                  onRewind={handleRewind}
                  onForward={handleForward}
                  onSeek={handleSeek}
                  onVolume={handleVolume}
                  onFinale={handleFinale}
                />
              </Show>

              {/* Finale End Card */}
              <Show when={phase() === 'finale'}>
                <Finale config={cfg()} slug={props.slug} />
              </Show>
            </>
          )}
        </Show>
      </div>
    </ErrorBoundary>
  );
};

export default App;
