/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$DocLayout } from '../../chunks/DocLayout_BtiWdI3M.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Artists = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DocLayout", $$DocLayout, { "title": "Artist Guide", "description": "How to create themes, compose music, and earn royalties on Hearth.", "breadcrumb": "Artists", "emoji": "\u{1F3A8}", "data-astro-cid-g2x577a5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="intro" data-astro-cid-g2x577a5> <p data-astro-cid-g2x577a5>
Hearth is waiting for your art. We are creating a marketplace for 3D
            environments, character skins, and audio tracks. Contribute to the
            "Hallmark 2.0" ecosystem and earn perpetual royalties.
</p> </div> <h2 data-astro-cid-g2x577a5>1. Contributing Themes</h2> <p data-astro-cid-g2x577a5>
A Theme in Hearth is more than just a background image. It controls the
        entire atmosphere: fog, lighting, ground textures, and particle systems.
</p> <div class="glass-panel p-6 my-8 border border-white/10 rounded-xl" data-astro-cid-g2x577a5> <h3 class="text-xl font-bold text-accent mb-4" data-astro-cid-g2x577a5>Theme Spec (v1.0)</h3> <pre class="bg-black/40 p-4 rounded-lg text-xs font-mono text-white/80 overflow-x-auto border border-white/10" data-astro-cid-g2x577a5>interface SceneTheme &#123;
    label: string;          // e.g. "Cyberpunk City"
    fogColor: number;       // Hex color for distance fog
    fogDensity: number;     // 0.01 to 0.1
    groundColor: number;    // Base color of the infinite plane
    ambientColor: number;   // Global illumination tint
    tone: 'warm' | 'cool' | 'mystical' | 'solemn';
&#125;
    </pre> <p class="mt-4 text-sm text-white/70" data-astro-cid-g2x577a5>
To submit a theme, create a Pull Request with your theme definition
            in <code data-astro-cid-g2x577a5>src/lib/config.ts</code>
and include 3 high-quality screenshots.
</p> </div> <h2 data-astro-cid-g2x577a5>2. 3D Assets (GLB)</h2> <p data-astro-cid-g2x577a5>We support standard glTF 2.0 binary files (\`.glb\`) for scene props.</p> <ul class="space-y-2 mt-4 text-white/70" data-astro-cid-g2x577a5> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Poly Count</strong>: Keep individual props under 5,000 tris.
</li> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Textures</strong>: Max 1024x1024. Use compressed KTX2 if
            possible.
</li> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Animations</strong>: Bake animations into the GLB. Loopable
            idle animations are preferred.
</li> </ul> <h2 data-astro-cid-g2x577a5>3. Audio Tracks</h2> <p data-astro-cid-g2x577a5>
Music is the emotional core of Hearth. We accept original compositions
        in the following categories:
</p> <div class="grid grid-cols-2 gap-4 my-6" data-astro-cid-g2x577a5> <div class="p-4 border border-white/10 rounded-lg bg-white/5" data-astro-cid-g2x577a5> <h4 class="font-bold text-white mb-2" data-astro-cid-g2x577a5>Piano / Classical</h4> <p class="text-xs text-white/50" data-astro-cid-g2x577a5>Romantic, timeless, acoustic.</p> </div> <div class="p-4 border border-white/10 rounded-lg bg-white/5" data-astro-cid-g2x577a5> <h4 class="font-bold text-white mb-2" data-astro-cid-g2x577a5>Lo-Fi / Ambient</h4> <p class="text-xs text-white/50" data-astro-cid-g2x577a5>Relaxing, modern, nostalgic.</p> </div> <div class="p-4 border border-white/10 rounded-lg bg-white/5" data-astro-cid-g2x577a5> <h4 class="font-bold text-white mb-2" data-astro-cid-g2x577a5>Cinematic</h4> <p class="text-xs text-white/50" data-astro-cid-g2x577a5>Epic, swelling, emotional.</p> </div> <div class="p-4 border border-white/10 rounded-lg bg-white/5" data-astro-cid-g2x577a5> <h4 class="font-bold text-white mb-2" data-astro-cid-g2x577a5>Nature / SFX</h4> <p class="text-xs text-white/50" data-astro-cid-g2x577a5>Rain, forest, ocean sounds.</p> </div> </div> <h2 data-astro-cid-g2x577a5>4. Royalty Model</h2> <p data-astro-cid-g2x577a5>
When the NFT marketplace launches (Phase 3), artists will receive a <strong data-astro-cid-g2x577a5>30% direct revenue share</strong>
on mints using their assets.
</p> <ul data-astro-cid-g2x577a5> <li data-astro-cid-g2x577a5>Smart contracts handle automatic payouts.</li> <li data-astro-cid-g2x577a5>
Artists retain IP rights; Hearth gets a non-exclusive perpetual
            license.
</li> <li data-astro-cid-g2x577a5>Top-tier artists get "Featured" placement in the Composer UI.</li> </ul> <h2 data-astro-cid-g2x577a5>5. Critique & Quality Assurance</h2> <p data-astro-cid-g2x577a5>
We aim for <strong data-astro-cid-g2x577a5>"Pixar-lite"</strong> quality.
</p> <ul data-astro-cid-g2x577a5> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Cohesion</strong>: Assets must look good together. Avoid
            mixing low-poly with photoreal.
</li> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Optimized</strong>: Assets must load fast on mobile (under
            2MB total scene).
</li> <li data-astro-cid-g2x577a5> <strong data-astro-cid-g2x577a5>Accessibility</strong>: Colors must have sufficient
            contrast. Audio shouldn't be jarring.
</li> </ul> ` })} `;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/artists.astro", void 0);

const $$file = "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/artists.astro";
const $$url = "/docs/artists";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Artists,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
