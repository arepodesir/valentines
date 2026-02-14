import { createSignal, onMount, Show, type Component } from 'solid-js';
import { loadConfig, type AppConfig } from '../lib/config';
import { CardEnvelope } from './CardEnvelope';
import { Background } from './Background';
import { MusicBox } from './MusicBox';
import { Controls } from './Controls';
import { Finale } from './Finale';
import { LoadingScreen } from './LoadingScreen';

export type AppPhase = 'loading' | 'envelope' | 'opening' | 'playing' | 'finale';

interface AppProps {
  confPath?: string;
  slug?: string;
}

/**
 * App 3.0 — Auto-play driven architecture
 * After envelope opens, the scene takes over and plays by itself.
 * Music starts automatically, scene runs its own choreography.
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

  onMount(async () => {
    const cfg = await loadConfig(props.confPath || '/program.conf');
    setConfig(cfg);
    setTimeout(() => setPhase('envelope'), 1200);
  });

  // Envelope open → start the auto-play cinematic
  const handleEnvelopeOpen = () => {
    if ('vibrate' in navigator) navigator.vibrate(30);
    // Immediately show the scene and set phase — no opacity transition
    setShowScene(true);
    setPhase('opening');

    // Start music 2s after scene starts
    setTimeout(() => {
      const audio = audioEl();
      if (audio && config()?.audio.autoplay) {
        audio.volume = volume();
        audio.play().catch(() => {});
        setIsPlaying(true);
      }
    }, 2000);
  };

  // Scene tells us when it reaches phases
  const handleScenePhase = (scenePhase: 'opening' | 'playing' | 'finale') => {
    if (scenePhase === 'playing' && phase() !== 'playing') {
      setPhase('playing');
    }
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
    const audio = audioEl();
    if (audio) {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 60);
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
      if (config()?.audio.loop) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        handleFinale();
      }
    });
  };

  return (
    <div class="relative w-full h-full overflow-hidden">
      {/* Loading screen */}
      <Show when={phase() === 'loading'}>
        <LoadingScreen />
      </Show>

      <Show when={config()}>
        {(cfg) => (
          <>
            {/* Audio */}
            <audio
              ref={setupAudio}
              src={cfg().audio.src}
              preload="auto"
              loop={cfg().audio.loop}
            />

            {/* Background — always visible */}
            <Background config={cfg()} />

            {/* Card envelope — fades out when opened */}
            <Show when={phase() === 'envelope'}>
              <CardEnvelope config={cfg()} onOpen={handleEnvelopeOpen} />
            </Show>

            {/* Three.js scene — shown after envelope opens */}
            <Show when={showScene()}>
              <MusicBox
                config={cfg()}
                phase={phase()}
                onPhaseChange={handleScenePhase}
              />
            </Show>

            {/* Controls dock — overlays the scene during playing */}
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

            {/* Finale */}
            <Show when={phase() === 'finale'}>
              <Finale config={cfg()} slug={props.slug} />
            </Show>
          </>
        )}
      </Show>
    </div>
  );
};

export default App;
