import { type Component, Show, createSignal } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
  slug?: string;
}

export const Finale: Component<Props> = (props) => (
  <div class="fixed inset-0 z-40 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-white text-center p-6 animate-in fade-in duration-1000">
    <h1 class="text-5xl font-serif font-bold mb-4 text-pink-500 animate-float">{props.config.finale.message}</h1>
    <p class="text-xl text-white/80 mb-8">{props.config.finale.subtitle}</p>
    
    <div class="flex gap-4">
      <button onClick={() => window.location.reload()} class="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition">Replay</button>
      <a href="/create" class="px-6 py-3 bg-pink-600 rounded-full hover:bg-pink-500 transition font-bold">Create Your Own</a>
    </div>

    <Show when={props.slug}>
       <p class="mt-8 text-xs text-white/30">ID: {props.slug}</p>
    </Show>
  </div>
);
