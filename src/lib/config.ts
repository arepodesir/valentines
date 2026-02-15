import { Effect, Data, Context } from "effect";
import * as S from "effect/Schema";

// ─── TYPES ───

export type Occasion =
    | 'valentine' | 'birthday' | 'anniversary' | 'thankyou' | 'congratulations'
    | 'graduation' | 'wedding' | 'condolence' | 'remembrance' | 'timecapsule'
    | 'public' | 'general';

export type SceneTheme = 'fairytale' | 'garden' | 'winter' | 'cosmic' | 'classic' | 'memorial' | 'aurora';

export interface AppConfig {
    card: {
        from: string;
        to: string;
        message: string;
        occasion: Occasion;
    };
    audio: {
        src: string;
        autoplay: boolean;
        loop: boolean;
    };
    background: {
        image: string;
        blur: number;
        glow_radius: number;
        glow_intensity: number;
    };
    scene: {
        theme: SceneTheme;
        animation_speed: number;
    };
    characters: {
        prince_skin: string;
        prince_hair: string;
        prince_outfit: string;
        princess_skin: string;
        princess_hair: string;
        princess_outfit: string;
    };
    finale: {
        message: string;
        subtitle: string;
    };
    theme: {
        primary: string;
        accent: string;
        gold: string;
        glass_opacity: number;
        glass_blur: number;
    };
    timecapsule: {
        unlock_date?: string;
        locked_message?: string;
    };
    storage?: {
        mode: 'static' | 'p2p' | 'hybrid';
        ipfs_hash?: string;
    };
}

// ─── META DATA ───

export const OCCASION_META: Record<Occasion, { emoji: string; label: string; tone: string; defaultMessage: string }> = {
    valentine: { emoji: '🌹', label: 'Affection', tone: 'remark_crimson', defaultMessage: 'My Dearest,' },
    birthday: { emoji: '🕯️', label: 'Milestone', tone: 'remark_gold', defaultMessage: 'On this day,' },
    anniversary: { emoji: '💍', label: 'Union', tone: 'remark_obsidian', defaultMessage: 'To our journey,' },
    thankyou: { emoji: '🖋️', label: 'Gratitude', tone: 'remark_cream', defaultMessage: 'With deepest thanks,' },
    congratulations: { emoji: '🥂', label: 'Triumph', tone: 'remark_gold', defaultMessage: 'A toast to you,' },
    graduation: { emoji: '🎓', label: 'Commencement', tone: 'remark_obsidian', defaultMessage: 'The world awaits,' },
    wedding: { emoji: '🔔', label: 'Covenant', tone: 'remark_cream', defaultMessage: 'Two souls, one path,' },
    condolence: { emoji: '🕊️', label: 'Remembrance', tone: 'remark_solemn', defaultMessage: 'In honored memory,' },
    remembrance: { emoji: '🕯️', label: 'Legacy', tone: 'remark_solemn', defaultMessage: 'Your light remains,' },
    timecapsule: { emoji: '⏳', label: 'Time Capsule', tone: 'remark_mystic', defaultMessage: 'For the future,' },
    public: { emoji: '🏛️', label: 'Public Ledger', tone: 'remark_neutral', defaultMessage: 'To whom it may concern,' },
    general: { emoji: '📜', label: 'Correspondence', tone: 'remark_neutral', defaultMessage: 'Greetings,' },
};

export const SCENE_THEME_META: Record<SceneTheme, { label: string; fogColor: number; ambientColor: number }> = {
    fairytale: { label: 'Remark Gilded', fogColor: 0x2C1810, ambientColor: 0xD4AF37 },
    garden: { label: 'Remark Garden', fogColor: 0x1a472a, ambientColor: 0xFDFBF7 },
    winter: { label: 'Remark Frost', fogColor: 0xe0f2fe, ambientColor: 0xD4AF37 },
    cosmic: { label: 'Remark Void', fogColor: 0x050208, ambientColor: 0x4B0082 },
    classic: { label: 'Remark Vellum', fogColor: 0xFDFBF7, ambientColor: 0xffffff },
    memorial: { label: 'Remark Obsidian', fogColor: 0x000000, ambientColor: 0x333333 },
    aurora: { label: 'Remark Aurora', fogColor: 0x000000, ambientColor: 0x00ffcc },
};

// ─── PARSER ───

export class ConfigParseError extends Data.TaggedError("ConfigParseError")<{ message: string }> { }

export const loadConfig = (path: string) => Effect.runPromise(
    Effect.tryPromise({
        try: async () => {
            const res = await fetch(path);
            if (!res.ok) throw new Error(`Failed to load config: ${res.status}`);
            const text = await res.text();
            return parseConf(text);
        },
        catch: (e) => new ConfigParseError({ message: String(e) })
    })
);

function parseConf(text: string): AppConfig {
    const config: any = {
        card: {}, audio: {}, background: {}, scene: {}, characters: {},
        finale: {}, theme: {}, timecapsule: {}, storage: {}
    };

    let currentSection = '';
    const lines = text.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(';')) continue;

        if (trimmed.startsWith('[')) {
            currentSection = trimmed.slice(1, -1);
            continue;
        }

        const [key, val] = trimmed.split('=').map(s => s.trim());
        if (currentSection && key && val) {
            let processedVal: any = val;
            if (val === 'true') processedVal = true;
            else if (val === 'false') processedVal = false;
            else if (!isNaN(Number(val))) processedVal = Number(val);
            else if (val.startsWith('"') && val.endsWith('"')) processedVal = val.slice(1, -1);

            // Handle hex colors as strings
            if (typeof processedVal === 'string' && processedVal.startsWith('#')) {
                // nothing special needed
            }

            if (!config[currentSection]) config[currentSection] = {};
            config[currentSection][key] = processedVal;
        }
    }

    // Apply defaults logic here if needed
    // For now, return what we parsed
    return config as AppConfig;
}
