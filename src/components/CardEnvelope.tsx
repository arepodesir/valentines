import { type Component, createSignal } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
  onOpen: () => void;
}

export const CardEnvelope: Component<Props> = (props) => {
  const [opening, setOpening] = createSignal(false);

  const handleClick = () => {
    setOpening(true);
    setTimeout(props.onOpen, 1000);
  };

  return (
    <div class={`fixed inset-0 z-30 flex items-center justify-center transition-opacity duration-1000 ${opening() ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div 
        class="bg-white p-8 rounded shadow-2xl max-w-md w-full text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
        onClick={handleClick}
      >
        <div class="text-4xl mb-4">{props.config.card.occasion === 'valentine' ? '💌' : '✉️'}</div>
        <h2 class="text-2xl font-serif font-bold text-gray-800 mb-2">For {props.config.card.to}</h2>
        <p class="text-gray-500 text-sm">Tap to Open</p>
      </div>
    </div>
  );
};
