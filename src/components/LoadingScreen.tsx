import { type Component, createSignal, onMount, onCleanup } from 'solid-js';

export const LoadingScreen: Component = () => {
    const [progress, setProgress] = createSignal(0);

    onMount(() => {
        const interval = setInterval(() => {
            setProgress(p => Math.min(100, p + 5));
        }, 100);
        onCleanup(() => clearInterval(interval));
    });

    return (
        <div class="fixed inset-0 z-50 bg-[#050208] flex flex-col items-center justify-center text-white">
            <h1 class="text-3xl font-serif mb-4 animate-pulse">Hearth</h1>
            <div class="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-pink-500 transition-all duration-300" style={{ width: `${progress()}%` }} />
            </div>
            <p class="mt-2 text-xs text-white/40 font-mono">{progress()}%</p>
        </div>
    );
};
