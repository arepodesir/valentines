import { type Component, createSignal, Show } from 'solid-js';

interface Props {
  slug: string;
  to: string;
  from: string;
}

/**
 * Social share buttons — appears in the finale / controls
 * Uses native Web Share API with fallback to manual buttons
 */
export const ShareButtons: Component<Props> = (props) => {
  const [copied, setCopied] = createSignal(false);
  const [showMenu, setShowMenu] = createSignal(false);

  const getUrl = () => {
    const base = typeof window !== 'undefined' ? window.location.origin : '';
    return `${base}/${props.slug}`;
  };

  const shareText = () => `💌 ${props.from} sent ${props.to} a Valentine's Music Box! Open it and let the magic play`;

  const handleNativeShare = async () => {
    if ('share' in navigator) {
      try {
        await navigator.share({
          title: `Valentine for ${props.to} 💕`,
          text: shareText(),
          url: getUrl(),
        });
        return;
      } catch {}
    }
    setShowMenu(!showMenu());
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const twitterUrl = () =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(getUrl())}`;

  const facebookUrl = () =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`;

  const whatsappUrl = () =>
    `https://wa.me/?text=${encodeURIComponent(shareText() + ' ' + getUrl())}`;

  const emailUrl = () =>
    `mailto:?subject=${encodeURIComponent(`Valentine for ${props.to} 💕`)}&body=${encodeURIComponent(shareText() + '\n\n' + getUrl())}`;

  return (
    <div class="relative">
      {/* Main share button */}
      <button
        onClick={handleNativeShare}
        class="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
        style={{
          'background': 'rgba(244,114,182,0.2)',
          'color': '#f9a8d4',
          'border': '1px solid rgba(244,114,182,0.3)',
          'backdrop-filter': 'blur(12px)',
        }}
        aria-label="Share this valentine"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        Share this Valentine
      </button>

      {/* Dropdown fallback for browsers without native share */}
      <Show when={showMenu()}>
        <div
          class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 rounded-xl p-2 min-w-[200px] shadow-2xl"
          style={{
            'background': 'rgba(30,10,25,0.95)',
            'border': '1px solid rgba(244,114,182,0.2)',
            'backdrop-filter': 'blur(20px)',
          }}
        >
          <a href={twitterUrl()} target="_blank" rel="noopener"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-pink-200 text-sm transition-colors">
            <span class="text-base">𝕏</span> Twitter / X
          </a>
          <a href={facebookUrl()} target="_blank" rel="noopener"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-pink-200 text-sm transition-colors">
            <span class="text-base">📘</span> Facebook
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener"
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-pink-200 text-sm transition-colors">
            <span class="text-base">💬</span> WhatsApp
          </a>
          <a href={emailUrl()}
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-pink-200 text-sm transition-colors">
            <span class="text-base">✉️</span> Email
          </a>
          <button onClick={handleCopy}
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-pink-200 text-sm transition-colors w-full text-left">
            <span class="text-base">{copied() ? '✓' : '🔗'}</span>
            {copied() ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </Show>
    </div>
  );
};
