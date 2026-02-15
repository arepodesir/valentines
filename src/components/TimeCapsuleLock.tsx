import { type Component, createSignal, onMount, onCleanup } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
  onUnlock: () => void;
}

export const TimeCapsuleLock: Component<Props> = (props) => {
  const [timeLeft, setTimeLeft] = createSignal<string>('');
  const [isLocked, setIsLocked] = createSignal(true);
  let timer: any;

  // Use a fallback if timecapsule is undefined (config parser ensures defaults, but just in case)
  const targetDateStr = props.config.timecapsule?.unlock_date;
  
  if (!targetDateStr) {
      if (isLocked()) { setIsLocked(false); props.onUnlock(); } // Immediate unlock if no date
      return null;
  }

  const targetDate = new Date(targetDateStr).getTime();

  const updateTimer = () => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      setIsLocked(false);
      props.onUnlock();
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  onMount(() => {
    updateTimer();
    timer = setInterval(updateTimer, 1000);
  });

  onCleanup(() => clearInterval(timer));

  if (!isLocked()) return null;

  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl text-white">
      <div class="text-center p-8 border border-white/10 rounded-2xl bg-white/5 max-w-md mx-4 animate-in fade-in zoom-in duration-500">
        <div class="text-5xl mb-6 animate-pulse">⏳</div>
        <h2 class="text-2xl font-serif font-bold mb-4">Time Capsule</h2>
        <p class="text-white/60 mb-8 leading-relaxed">
          {props.config.timecapsule?.locked_message || "This message is locked until the future."}
        </p>
        
        <div class="text-3xl font-mono tabular-nums tracking-widest text-[#fbbf24] font-bold">
          {timeLeft()}
        </div>
        
        <p class="mt-6 text-xs text-white/30 uppercase tracking-widest">
          Unlocks on {new Date(targetDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
