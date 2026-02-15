/* empty css                                  */
import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CcH1_L3r.mjs';
import fs from 'fs';
import path from 'path';
export { renderers } from '../renderers.mjs';

function getAllLetters() {
  const lettersDir = path.join(process.cwd(), "public/letters");
  if (!fs.existsSync(lettersDir)) return [];
  const files = fs.readdirSync(lettersDir);
  return files.filter((file) => file.endsWith(".conf")).map((file) => ({
    slug: file.replace(".conf", ""),
    path: path.join(lettersDir, file)
  }));
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const letters = getAllLetters();
  return letters.map((letter) => ({
    params: { slug: letter.slug },
    props: { confPath: `/letters/${letter.slug}.conf` }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { confPath } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n    // Add letter-mode class to body for UI adjustments\n    document.body.classList.add("letter-mode");\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": `Message for You - Hearth`, "description": "A personal 3D message waiting for you." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full h-[100dvh] overflow-hidden bg-black text-white"> ${renderComponent($$result2, "App", null, { "client:only": "solid-js", "slug": slug, "confPath": confPath, "client:component-hydration": "only", "client:component-path": "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/components/App", "client:component-export": "default" })} </main> ` }));
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/[slug].astro", void 0);

const $$file = "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
