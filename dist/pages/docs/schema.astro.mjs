/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_CcH1_L3r.mjs';
export { renderers } from '../../renderers.mjs';

const $$Schema = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Letter Schema \u2014 Love Letters \u{1F48C}", "description": "Formal specification for .conf letter files." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-16 pb-20 px-4 sm:px-6"> <div class="max-w-3xl mx-auto"> <!-- Header --> <div class="py-10 sm:py-16 border-b border-pink-500/10"> <p class="text-xs font-mono text-pink-400/50 tracking-wider uppercase mb-3">
Documentation
</p> <h1 class="font-display text-3xl sm:text-5xl font-bold text-pink-100 mb-4">
Letter Schema
</h1> <p class="text-base sm:text-lg text-pink-300/60 leading-relaxed">
Formal specification for <code class="text-pink-400 bg-pink-950/50 px-1.5 py-0.5 rounded text-sm">.conf</code> letter files. TOML-compatible INI format — human-readable, git-friendly,
                    zero build tooling required.
</p> </div> <!-- Overview --> <section class="py-10 border-b border-pink-500/10"> <h2 class="text-xl sm:text-2xl font-bold text-pink-200 mb-6">
Overview
</h2> <div class="space-y-3 text-sm text-pink-300/70 leading-relaxed"> <p>
Each letter is a single <code class="text-pink-400 bg-pink-950/40 px-1 rounded">.conf</code> file placed in <code class="text-pink-400 bg-pink-950/40 px-1 rounded">public/letters/</code>.
</p> <p> <strong class="text-pink-200">Filename format:</strong> <code class="text-pink-400 bg-pink-950/40 px-1 rounded">${`{name}-{4-hex-hash}.conf`}</code> </p> <p>
The filename becomes the URL slug: <code class="text-pink-400 bg-pink-950/40 px-1 rounded">james-a3f8.conf</code> → <code class="text-pink-400 bg-pink-950/40 px-1 rounded">/james-a3f8</code> </p> <p>
Generate a hash: <code class="text-pink-400 bg-pink-950/40 px-1 rounded">openssl rand -hex 2</code> </p> </div> </section> <!-- Sections --> <section class="py-10 border-b border-pink-500/10"> <h2 class="text-xl sm:text-2xl font-bold text-pink-200 mb-6">
Sections
</h2> <!-- [card] --> <div class="mb-8"> <h3 class="text-lg font-bold text-pink-100 mb-3 flex items-center gap-2"> <span class="text-pink-400 font-mono text-sm">[card]</span> <span class="text-xs text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded-full">required</span> </h3> <p class="text-sm text-pink-300/60 mb-4">
Core identity of the letter — who it's from, who it's
                        for, and the message.
</p> <div class="overflow-x-auto -mx-4 px-4"> <table class="w-full text-sm"> <thead> <tr class="text-left text-pink-300/40 text-xs uppercase tracking-wider"> <th class="py-2 pr-4">Field</th> <th class="py-2 pr-4">Type</th> <th class="py-2 pr-4">Default</th> <th class="py-2">Description</th> </tr> </thead> <tbody class="text-pink-200/70"> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">from</td> <td class="py-2.5 pr-4">string</td> <td class="py-2.5 pr-4 text-pink-400/40">"Someone Special"</td> <td class="py-2.5">Sender's name</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">to</td> <td class="py-2.5 pr-4">string</td> <td class="py-2.5 pr-4 text-pink-400/40">"My Love"</td> <td class="py-2.5">Recipient's name</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">message</td> <td class="py-2.5 pr-4">string</td> <td class="py-2.5 pr-4 text-pink-400/40">"Happy Valentine's Day!"</td> <td class="py-2.5">Card message (shown on envelope)</td> </tr> </tbody> </table> </div> </div> <!-- [audio] --> <div class="mb-8"> <h3 class="text-lg font-bold text-pink-100 mb-3 flex items-center gap-2"> <span class="text-pink-400 font-mono text-sm">[audio]</span> <span class="text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">optional</span> </h3> <p class="text-sm text-pink-300/60 mb-4">
Music playback configuration.
</p> <div class="overflow-x-auto -mx-4 px-4"> <table class="w-full text-sm"> <thead> <tr class="text-left text-pink-300/40 text-xs uppercase tracking-wider"> <th class="py-2 pr-4">Field</th> <th class="py-2 pr-4">Type</th> <th class="py-2 pr-4">Default</th> <th class="py-2">Description</th> </tr> </thead> <tbody class="text-pink-200/70"> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">src</td> <td class="py-2.5 pr-4">path</td> <td class="py-2.5 pr-4 text-pink-400/40">/audio/music.mp3</td> <td class="py-2.5">Audio file path (relative to public/)</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">autoplay</td> <td class="py-2.5 pr-4">boolean</td> <td class="py-2.5 pr-4 text-pink-400/40">true</td> <td class="py-2.5">Start playback after opening</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">loop</td> <td class="py-2.5 pr-4">boolean</td> <td class="py-2.5 pr-4 text-pink-400/40">true</td> <td class="py-2.5">Loop audio</td> </tr> </tbody> </table> </div> </div> <!-- [background] --> <div class="mb-8"> <h3 class="text-lg font-bold text-pink-100 mb-3 flex items-center gap-2"> <span class="text-pink-400 font-mono text-sm">[background]</span> <span class="text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">optional</span> </h3> <p class="text-sm text-pink-300/60 mb-4">
Background image and atmospheric effects.
</p> <div class="overflow-x-auto -mx-4 px-4"> <table class="w-full text-sm"> <thead> <tr class="text-left text-pink-300/40 text-xs uppercase tracking-wider"> <th class="py-2 pr-4">Field</th> <th class="py-2 pr-4">Type</th> <th class="py-2 pr-4">Default</th> <th class="py-2">Description</th> </tr> </thead> <tbody class="text-pink-200/70"> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">image</td> <td class="py-2.5 pr-4">path</td> <td class="py-2.5 pr-4 text-pink-400/40">/images/nature.jpg</td> <td class="py-2.5">Background image path</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">blur</td> <td class="py-2.5 pr-4">number</td> <td class="py-2.5 pr-4 text-pink-400/40">6</td> <td class="py-2.5">Blur radius (px)</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">glow_radius</td> <td class="py-2.5 pr-4">number</td> <td class="py-2.5 pr-4 text-pink-400/40">120</td> <td class="py-2.5">Atmospheric glow radius</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">glow_intensity</td> <td class="py-2.5 pr-4">number</td> <td class="py-2.5 pr-4 text-pink-400/40">0.4</td> <td class="py-2.5">Glow intensity (0–1)</td> </tr> </tbody> </table> </div> </div> <!-- [finale] --> <div class="mb-8"> <h3 class="text-lg font-bold text-pink-100 mb-3 flex items-center gap-2"> <span class="text-pink-400 font-mono text-sm">[finale]</span> <span class="text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">optional</span> </h3> <p class="text-sm text-pink-300/60 mb-4">
End-of-experience screen and message.
</p> <div class="overflow-x-auto -mx-4 px-4"> <table class="w-full text-sm"> <thead> <tr class="text-left text-pink-300/40 text-xs uppercase tracking-wider"> <th class="py-2 pr-4">Field</th> <th class="py-2 pr-4">Type</th> <th class="py-2 pr-4">Default</th> <th class="py-2">Description</th> </tr> </thead> <tbody class="text-pink-200/70"> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">message</td> <td class="py-2.5 pr-4">string</td> <td class="py-2.5 pr-4 text-pink-400/40">"Happy Valentine's Day"</td> <td class="py-2.5">Finale big text (appended with <code class="text-pink-400">card.to</code>)</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">subtitle</td> <td class="py-2.5 pr-4">string</td> <td class="py-2.5 pr-4 text-pink-400/40">"with all our love 💕"</td> <td class="py-2.5">Secondary text</td> </tr> </tbody> </table> </div> </div> <!-- [theme] --> <div class="mb-8"> <h3 class="text-lg font-bold text-pink-100 mb-3 flex items-center gap-2"> <span class="text-pink-400 font-mono text-sm">[theme]</span> <span class="text-xs text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">optional</span> </h3> <p class="text-sm text-pink-300/60 mb-4">
Visual theming — colors, glass effects.
</p> <div class="overflow-x-auto -mx-4 px-4"> <table class="w-full text-sm"> <thead> <tr class="text-left text-pink-300/40 text-xs uppercase tracking-wider"> <th class="py-2 pr-4">Field</th> <th class="py-2 pr-4">Type</th> <th class="py-2 pr-4">Default</th> <th class="py-2">Description</th> </tr> </thead> <tbody class="text-pink-200/70"> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">primary</td> <td class="py-2.5 pr-4">hex</td> <td class="py-2.5 pr-4"><span class="inline-block w-3 h-3 rounded-full mr-1" style="background:#e11d48;"></span>#e11d48</td> <td class="py-2.5">Primary accent color</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">accent</td> <td class="py-2.5 pr-4">hex</td> <td class="py-2.5 pr-4"><span class="inline-block w-3 h-3 rounded-full mr-1" style="background:#f472b6;"></span>#f472b6</td> <td class="py-2.5">Secondary accent color</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">gold</td> <td class="py-2.5 pr-4">hex</td> <td class="py-2.5 pr-4"><span class="inline-block w-3 h-3 rounded-full mr-1" style="background:#fbbf24;"></span>#fbbf24</td> <td class="py-2.5">Gold highlight color</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">glass_opacity</td> <td class="py-2.5 pr-4">number</td> <td class="py-2.5 pr-4 text-pink-400/40">0.15</td> <td class="py-2.5">Glass effect opacity (0–1)</td> </tr> <tr class="border-t border-pink-500/5"> <td class="py-2.5 pr-4 font-mono text-pink-400 text-xs">glass_blur</td> <td class="py-2.5 pr-4">number</td> <td class="py-2.5 pr-4 text-pink-400/40">16</td> <td class="py-2.5">Glass blur radius (px)</td> </tr> </tbody> </table> </div> </div> </section> <!-- Example --> <section class="py-10 border-b border-pink-500/10"> <h2 class="text-xl sm:text-2xl font-bold text-pink-200 mb-6">
Full Example
</h2> <pre class="p-4 sm:p-6 rounded-xl text-xs sm:text-sm leading-relaxed overflow-x-auto" style="background: rgba(10,3,15,0.8); border: 1px solid rgba(244,114,182,0.1);"><code class="text-pink-200/80"><span class="text-pink-400">[card]</span>
from = Arepo
to = James
message = <span class="text-amber-300">"Happy Valentine's Day, my love!"</span>

<span class="text-pink-400">[audio]</span>
src = <span class="text-amber-300">"/audio/prince.mp3"</span>
autoplay = <span class="text-emerald-400">true</span>
loop = <span class="text-emerald-400">true</span>

<span class="text-pink-400">[background]</span>
image = <span class="text-amber-300">"/images/nature.jpg"</span>
blur = <span class="text-blue-300">6</span>
glow_radius = <span class="text-blue-300">120</span>
glow_intensity = <span class="text-blue-300">0.4</span>

<span class="text-pink-400">[scene]</span>
horse_name = Veronica
animation_speed = <span class="text-blue-300">1.0</span>

<span class="text-pink-400">[finale]</span>
message = <span class="text-amber-300">"Happy Valentine's Day"</span>
subtitle = <span class="text-amber-300">"Handsome Prince 💕"</span>

<span class="text-pink-400">[theme]</span>
primary = <span class="text-rose-400">#e11d48</span>
accent = <span class="text-pink-400">#f472b6</span>
gold = <span class="text-amber-400">#fbbf24</span>
glass_opacity = <span class="text-blue-300">0.10</span>
glass_blur = <span class="text-blue-300">12</span></code></pre> </section> <!-- File naming --> <section class="py-10"> <h2 class="text-xl sm:text-2xl font-bold text-pink-200 mb-6">
File Naming Convention
</h2> <div class="space-y-4 text-sm text-pink-300/70"> <div class="p-4 rounded-xl" style="background: rgba(10,3,15,0.6); border: 1px solid rgba(244,114,182,0.1);"> <p class="font-mono text-pink-400 mb-2"> ${`public/letters/{name}-{hash}.conf`} </p> <ul class="space-y-1 text-xs text-pink-300/50"> <li>
• <strong class="text-pink-200/70">name</strong> —
                                lowercase, 1–32 chars, letters/numbers/hyphens
</li> <li>
• <strong class="text-pink-200/70">hash</strong> —
                                4 hex characters (generate: <code class="text-pink-400 bg-pink-950/40 px-1 rounded">openssl rand -hex 2</code>)
</li> <li>
• URL becomes: <code class="text-pink-400 bg-pink-950/40 px-1 rounded">yoursite.com/name-hash</code> </li> </ul> </div> </div> </section> </div> </main> ` })}`;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/schema.astro", void 0);

const $$file = "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/schema.astro";
const $$url = "/docs/schema";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Schema,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
