/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$DocLayout } from '../../chunks/DocLayout_BtiWdI3M.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Architecture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Architecture;
  return renderTemplate`${renderComponent($$result, "DocLayout", $$DocLayout, { "title": "Architecture", "description": "Under the hood of Hearth: Effect.ts, Three.js, and FSM-driven logic.", "breadcrumb": "Architecture", "emoji": "\u2699\uFE0F", "data-astro-cid-uyvx2lj4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="intro" data-astro-cid-uyvx2lj4> <p data-astro-cid-uyvx2lj4>
Hearth is built on a modern, type-safe stack designed for
            performance, correctness, and longevity. We use Functional
            Programming (FP) principles to ensure the core logic is robust, and
            a component-based approach for UI flexibility.
</p> </div> <h2 data-astro-cid-uyvx2lj4>1. Technology Stack</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8" data-astro-cid-uyvx2lj4> <div class="glass-panel p-6 border border-white/10 rounded-xl" data-astro-cid-uyvx2lj4> <h3 class="text-xl font-bold text-accent mb-2" data-astro-cid-uyvx2lj4>Frontend Core</h3> <ul class="text-sm text-white/70 space-y-1" data-astro-cid-uyvx2lj4> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Astro</strong>: Static Site Generation (SSG) for
                    fast routing and zero-JS initial load.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>SolidJS</strong>: High-performance, fine-grained
                    reactivity for UI islands.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>TailwindCSS</strong>: Utility-first styling with
                    custom plugin system.
</li> </ul> </div> <div class="glass-panel p-6 border border-white/10 rounded-xl" data-astro-cid-uyvx2lj4> <h3 class="text-xl font-bold text-accent mb-2" data-astro-cid-uyvx2lj4>Engine</h3> <ul class="text-sm text-white/70 space-y-1" data-astro-cid-uyvx2lj4> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Three.js</strong>: WebGL renderer for the 3D Music
                    Box scene.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>GSAP</strong>: Timeline-based animation
                    orchestration.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Effect.ts</strong>: Functional error handling,
                    dependency injection, and resource management.
</li> </ul> </div> </div> <h2 data-astro-cid-uyvx2lj4>2. The FSM Config Parser</h2> <p data-astro-cid-uyvx2lj4>
At the heart of Hearth is the <code data-astro-cid-uyvx2lj4>.conf</code> format — a simple, human-readable
        INI dialect that defines universal message parameters. We parse this using
        a strict <strong data-astro-cid-uyvx2lj4>Finite State Machine (FSM)</strong>.
</p> <pre class="bg-black/40 p-4 rounded-lg text-xs font-mono text-white/80 overflow-x-auto border border-white/10" data-astro-cid-uyvx2lj4>// State Definitions
type FSMState = 'IDLE' | 'SECTION' | 'KV';

// Transitions
IDLE -> SECTION ("[header]")
SECTION -> KV (key=value)
KV -> KV (key=value)
KV -> SECTION ("[header]")
</pre> <p data-astro-cid-uyvx2lj4>
This ensures that invalid configs fail gracefully with precise line
        numbers, and allows us to extend the schema without breaking legacy
        parsers.
</p> <h2 data-astro-cid-uyvx2lj4>3. Reactivity Model</h2> <p data-astro-cid-uyvx2lj4>
Hearth uses SolidJS signals for state management. The <code data-astro-cid-uyvx2lj4>App.tsx</code> component orchestrates the entire lifecycle:
</p> <ol class="list-decimal pl-5 space-y-2 mt-4 text-white/70" data-astro-cid-uyvx2lj4> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Loading Phase</strong>: Parallel fetch of config, audio, and
            texture assets.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Envelope Phase</strong>: Static HTML/CSS envelope
            interactive layer.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Scene Phase</strong>: 3D Canvas initialization. The <code data-astro-cid-uyvx2lj4>MusicBoxScene</code> class manages its own Three.js render loop but reacts to Solid props.
</li> <li data-astro-cid-uyvx2lj4> <strong data-astro-cid-uyvx2lj4>Finale Phase</strong>: Cleanup of WebGL context and
            transition to end card.
</li> </ol> <h2 data-astro-cid-uyvx2lj4>4. Decentralized Future</h2> <p data-astro-cid-uyvx2lj4>
We are decoupling the data from the presentation logic. A Hearth message
        is just a JSON/Config object. This object can live on:
</p> <ul data-astro-cid-uyvx2lj4> <li data-astro-cid-uyvx2lj4>LocalStorage (Drafts)</li> <li data-astro-cid-uyvx2lj4>Static Files (Current)</li> <li data-astro-cid-uyvx2lj4>IPFS / Arweave (Immutable)</li> <li data-astro-cid-uyvx2lj4>GunDB / P2P (Live Collaboration)</li> </ul> <p data-astro-cid-uyvx2lj4>
The renderer (this app) is just a viewer for that data. This
        "Viewer/Data Separation" ensures that messages can outlive the platform
        itself.
</p> ` })} `;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/architecture.astro", void 0);

const $$file = "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/architecture.astro";
const $$url = "/docs/architecture";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Architecture,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
