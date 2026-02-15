/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CcH1_L3r.mjs';
import { Data } from 'effect';
export { renderers } from '../renderers.mjs';

const OCCASION_META = {
  valentine: { emoji: "🌹", label: "Affection", tone: "remark_crimson", defaultMessage: "My Dearest," },
  birthday: { emoji: "🕯️", label: "Milestone", tone: "remark_gold", defaultMessage: "On this day," },
  anniversary: { emoji: "💍", label: "Union", tone: "remark_obsidian", defaultMessage: "To our journey," },
  thankyou: { emoji: "🖋️", label: "Gratitude", tone: "remark_cream", defaultMessage: "With deepest thanks," },
  congratulations: { emoji: "🥂", label: "Triumph", tone: "remark_gold", defaultMessage: "A toast to you," },
  graduation: { emoji: "🎓", label: "Commencement", tone: "remark_obsidian", defaultMessage: "The world awaits," },
  wedding: { emoji: "🔔", label: "Covenant", tone: "remark_cream", defaultMessage: "Two souls, one path," },
  condolence: { emoji: "🕊️", label: "Remembrance", tone: "remark_solemn", defaultMessage: "In honored memory," },
  remembrance: { emoji: "🕯️", label: "Legacy", tone: "remark_solemn", defaultMessage: "Your light remains," },
  timecapsule: { emoji: "⏳", label: "Time Capsule", tone: "remark_mystic", defaultMessage: "For the future," },
  public: { emoji: "🏛️", label: "Public Ledger", tone: "remark_neutral", defaultMessage: "To whom it may concern," },
  general: { emoji: "📜", label: "Correspondence", tone: "remark_neutral", defaultMessage: "Greetings," }
};
const SCENE_THEME_META = {
  fairytale: { label: "Remark Gilded", fogColor: 2889744, ambientColor: 13938487 },
  garden: { label: "Remark Garden", fogColor: 1722154, ambientColor: 16645111 },
  winter: { label: "Remark Frost", fogColor: 14742270, ambientColor: 13938487 },
  cosmic: { label: "Remark Void", fogColor: 328200, ambientColor: 4915330 },
  classic: { label: "Remark Vellum", fogColor: 16645111, ambientColor: 16777215 },
  memorial: { label: "Remark Obsidian", fogColor: 0, ambientColor: 3355443 },
  aurora: { label: "Remark Aurora", fogColor: 0, ambientColor: 65484 }
};
class ConfigParseError extends Data.TaggedError("ConfigParseError") {
}

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const occasions = Object.entries(OCCASION_META).map(([key, meta]) => ({
    value: key,
    ...meta
  }));
  const themes = Object.entries(SCENE_THEME_META).map(([key, meta]) => ({
    value: key,
    ...meta
  }));
  const lang = Astro2.url.searchParams.get("lang") || "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Compose - ${t("create.title", lang)}`, "description": "Craft a permanent digital artifact with the Remark Composer.", "lang": lang }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-24 pb-20 px-6 min-h-screen max-w-7xl mx-auto"> <header class="text-center mb-16"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-6 backdrop-blur-sm"> <span class="text-xs font-serif italic text-[#D4AF37] uppercase tracking-[0.2em]">${t("create.header", lang)}</span> </div> <h1 class="text-6xl font-serif text-[#FDFBF7] mb-6 tracking-tight">
Craft Your Artifact
</h1> <p class="text-[#FDFBF7]/60 max-w-xl mx-auto font-serif italic text-lg leading-relaxed">
Design a message that will echo through time. <br>
Every detail is preserved on the perpetual ledger.
</p> </header> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16" id="creator-app"> <!-- Left: Form --> <div class="space-y-10"> <!-- Card Section --> <section class="p-8 rounded-xl border border-[#D4AF37]/20 bg-[#1A1A1A]/40 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/40 transition-colors"> <div class="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-[#D4AF37] select-none pointer-events-none">
I
</div> <h2 class="text-2xl font-serif text-[#D4AF37] mb-8 flex items-center gap-3 border-b border-[#D4AF37]/10 pb-4"> <span>🖋️</span> Inscription
</h2> <div class="space-y-6"> <div> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2 font-mono">Occasion</label> <select id="field-occasion" class="w-full bg-[#050505]/50 border border-[#D4AF37]/30 rounded-lg p-4 text-[#FDFBF7] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-serif"> ${occasions.map((occ) => renderTemplate`<option${addAttribute(occ.value, "value")}> ${occ.emoji} ${occ.label} </option>`)} </select> </div> <div class="grid grid-cols-2 gap-6"> <div> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2 font-mono">From</label> <input type="text" id="field-from" class="w-full bg-[#050505]/50 border border-[#D4AF37]/30 rounded-lg p-4 text-[#FDFBF7] focus:border-[#D4AF37] outline-none font-serif placeholder-[#FDFBF7]/20" value="Me" placeholder="Your name"> </div> <div> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2 font-mono">To</label> <input type="text" id="field-to" class="w-full bg-[#050505]/50 border border-[#D4AF37]/30 rounded-lg p-4 text-[#FDFBF7] focus:border-[#D4AF37] outline-none font-serif placeholder-[#FDFBF7]/20" value="You" placeholder="Recipient"> </div> </div> <div> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2 font-mono">Envelope Message</label> <textarea id="field-message" class="w-full bg-[#050505]/50 border border-[#D4AF37]/30 rounded-lg p-4 text-[#FDFBF7] h-32 focus:border-[#D4AF37] outline-none font-serif placeholder-[#FDFBF7]/20 resize-none leading-relaxed" placeholder="Open this when...">A message for you.</textarea> </div> </div> </section> <!-- Scene Section --> <section class="p-8 rounded-xl border border-[#D4AF37]/20 bg-[#1A1A1A]/40 backdrop-blur-md relative overflow-hidden group hover:border-[#D4AF37]/40 transition-colors"> <div class="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-[#D4AF37] select-none pointer-events-none">
II
</div> <h2 class="text-2xl font-serif text-[#D4AF37] mb-8 flex items-center gap-3 border-b border-[#D4AF37]/10 pb-4"> <span>🎭</span> Atmosphere
</h2> <div class="mb-8 pl-1"> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-4 font-mono">Theme Collection</label> <div class="flex flex-wrap gap-3" id="theme-selector"> ${themes.map((theme) => renderTemplate`<button type="button"${addAttribute(`theme-chip px-5 py-2.5 rounded-lg border border-[#D4AF37]/30 text-sm hover:bg-[#D4AF37]/10 transition-all flex items-center gap-3 font-serif italic ${theme.value === "fairytale" ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] active shadow-[0_0_10px_rgba(212,175,55,0.1)]" : "text-[#FDFBF7]/60"}`, "class")}${addAttribute(theme.value, "data-theme")}> <span class="w-2 h-2 rounded-full border border-white/10"${addAttribute(`background: #${theme.ambientColor.toString(16).padStart(6, "0")}`, "style")}></span> ${theme.label} </button>`)} </div> </div> <div> <label class="block text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-2 font-mono">Flow Speed</label> <div class="flex items-center gap-4"> <input type="range" id="field-speed" class="flex-1 accent-[#D4AF37] h-1 bg-[#D4AF37]/30 rounded-lg appearance-none cursor-pointer" min="0.5" max="2" step="0.1" value="1.0"> <span class="text-sm font-mono text-[#D4AF37]" id="speed-value">1.0×</span> </div> </div> </section> <!-- Simple Generator only for restoration speed --> <div class="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg text-[#D4AF37]/80 text-sm font-serif italic flex items-center gap-3"> <span class="text-xl">⚠️</span> Advanced character editing is
                    currently being refurbished by our artisans.
</div> </div> <!-- Right: Preview & Download --> <div class="relative"> <div class="sticky top-32"> <h2 class="text-2xl font-serif text-[#D4AF37] mb-6 flex items-center gap-3"> <span>📜</span> Manifest
</h2> <div class="bg-[#050505]/80 border border-[#D4AF37]/20 rounded-xl p-6 mb-8 overflow-x-auto shadow-2xl relative group"> <div class="absolute top-2 right-2 text-[#D4AF37]/20 text-xs font-mono uppercase tracking-widest">
Remark Config v1.0
</div> <pre id="conf-output" class="text-xs font-mono text-[#FDFBF7]/70 whitespace-pre leading-relaxed">                        </pre> </div> <div class="flex gap-4 mb-10"> <button id="btn-download" class="flex-1 bg-[#D4AF37] text-[#1A1A1A] py-4 rounded-lg font-bold hover:bg-[#E5C56C] transition-all flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98]"> <span>⬇️</span> Download Artifact
</button> <button id="btn-copy" class="px-6 border border-[#D4AF37]/30 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37]/10 transition-colors" title="Copy to clipboard">
📋
</button> </div> <div class="bg-[#1A1A1A]/40 rounded-xl p-6 border border-[#D4AF37]/10 text-sm text-[#FDFBF7]/50 backdrop-blur-sm"> <h3 class="text-[#D4AF37] font-serif font-bold mb-4 uppercase tracking-widest text-xs">
Preservation Instructions
</h3> <ol class="list-decimal pl-4 space-y-3 marker:text-[#D4AF37]"> <li>Download the <code>.conf</code> artifact</li> <li>Deposit it in <code>public/letters/</code></li> <li>
Execute <code>npm run build</code> to seal into the
                                ledger
</li> <li>Your message is now immutable.</li> </ol> </div> </div> </div> </div> </main> ` })} `;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/create.astro", void 0);

const $$file = "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/create.astro";
const $$url = "/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Create,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
