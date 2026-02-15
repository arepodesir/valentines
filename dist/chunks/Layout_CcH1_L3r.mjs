import { c as createComponent, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent, f as renderHead, e as renderSlot } from './astro/server_6cs0tMQa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/node_modules/astro/components/ViewTransitions.astro", void 0);

const translations = {
  en: {
    "app.title": "Remark",
    "app.tagline": "Sending sentiments that last.",
    "nav.create": "Compose",
    "nav.docs": "Manifesto",
    "hero.title": "Remark",
    "hero.subtitle": "The Perpetual Message Bridge.",
    "hero.description": "Sending sentiments that last.",
    "hero.cta": "Compose Artifact",
    "create.title": "Remark Composer",
    "create.header": "Remark Composer",
    "create.step1": "Select Occasion",
    "create.step2": "Choose Theme",
    "create.step3": "Compose Message",
    "create.step4": "Finalize",
    "docs.title": "Manifesto"
  },
  es: {
    "app.title": "Remark",
    "app.tagline": "Enviando sentimientos que perduran.",
    "nav.create": "Redactar",
    "nav.docs": "Manifiesto",
    "hero.title": "Remark",
    "hero.subtitle": "El Puente de Mensajes Perpetuo.",
    "hero.description": "Enviando sentimientos que perduran.",
    "hero.cta": "Crear Artefacto",
    "create.title": "Compositor Remark",
    "create.header": "Compositor Remark",
    "create.step1": "Seleccionar Ocasión",
    "create.step2": "Elegir Tema",
    "create.step3": "Redactar Mensaje",
    "create.step4": "Finalizar",
    "docs.title": "Manifiesto"
  },
  fr: {
    "app.title": "Remark",
    "app.tagline": "Envoyer des sentiments qui durent.",
    "nav.create": "Composer",
    "nav.docs": "Manifeste",
    "hero.title": "Remark",
    "hero.subtitle": "Le Pont de Messages Perpétuel.",
    "hero.description": "Envoyer des sentiments qui durent.",
    "hero.cta": "Créer un Artefact",
    "create.title": "Compositeur Remark",
    "create.header": "Compositeur Remark",
    "create.step1": "Sélectionner l'Occasion",
    "create.step2": "Choisir le Thème",
    "create.step3": "Rédiger le Message",
    "create.step4": "Finaliser",
    "docs.title": "Manifeste"
  },
  de: {
    "app.title": "Remark",
    "app.tagline": "Gefühle senden, die bleiben.",
    "nav.create": "Verfassen",
    "nav.docs": "Manifest",
    "hero.title": "Remark",
    "hero.subtitle": "Die ewige Nachrichtenbrücke.",
    "hero.description": "Gefühle senden, die bleiben.",
    "hero.cta": "Artefakt Erstellen",
    "create.title": "Remark Komponist",
    "create.header": "Remark Komponist",
    "create.step1": "Anlass Wählen",
    "create.step2": "Thema Wählen",
    "create.step3": "Nachricht Verfassen",
    "create.step4": "Abschließen",
    "docs.title": "Manifest"
  },
  ja: {
    "app.title": "Remark",
    "app.tagline": "永続する想いを送る。",
    "nav.create": "作成",
    "nav.docs": "マニフェスト",
    "hero.title": "Remark",
    "hero.subtitle": "永続的なメッセージブリッジ。",
    "hero.description": "永続する想いを送る。",
    "hero.cta": "遺物を作成",
    "create.title": "Remark コンポーザー",
    "create.header": "Remark コンポーザー",
    "create.step1": "機会を選択",
    "create.step2": "テーマを選択",
    "create.step3": "メッセージを作成",
    "create.step4": "完了",
    "docs.title": "マニフェスト"
  },
  ko: {
    "app.title": "Remark",
    "app.tagline": "영원한 마음을 전합니다.",
    "nav.create": "작성",
    "nav.docs": "선언문",
    "hero.title": "Remark",
    "hero.subtitle": "영원한 메시지 브리지.",
    "hero.description": "영원한 마음을 전합니다.",
    "hero.cta": "유물 생성",
    "create.title": "Remark 작곡가",
    "create.header": "Remark 작곡가",
    "create.step1": "기념일 선택",
    "create.step2": "테마 선택",
    "create.step3": "메시지 작성",
    "create.step4": "완료",
    "docs.title": "선언문"
  }
};
const t = (key, lang = "en") => {
  return translations[lang]?.[key] || key;
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Remark: The Perpetual Message Bridge",
    lang = "en"
  } = Astro2.props;
  const currentLang = lang || Astro2.url.searchParams.get("lang") || "en";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-[#050505] text-[#FDFBF7] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#1A1A1A]"> <!-- Navigation --> <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform" id="main-nav"> <div class="glass-panel px-8 py-3 rounded-full flex items-center gap-8 shadow-2xl backdrop-blur-xl bg-[#050505]/60 hover:border-[#D4AF37]/40 transition-colors"> <a href="/" class="font-serif font-bold text-xl tracking-tight text-[#D4AF37] hover:text-[#FDFBF7] transition-colors relative group">
Remark
<span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span> </a> <div class="h-4 w-px bg-[#D4AF37]/20"></div> <div class="flex items-center gap-6 text-sm font-medium text-[#FDFBF7]/70"> <a${addAttribute(`/create?lang=${currentLang}`, "href")} class="hover:text-[#D4AF37] transition-colors">${t("nav.create", currentLang)}</a> <a href="/docs/manifesto" class="hover:text-[#D4AF37] transition-colors">${t("nav.docs", currentLang)}</a> </div> </div> </nav> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/layouts/Layout.astro", void 0);

export { $$Layout as $, t };
