/**
 * Configuration parser for program.conf
 * Fetches INI-style config at runtime and provides typed access
 */

export interface AppConfig {
    card: {
        from: string;
        to: string;
        message: string;
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
        horse_name: string;
        animation_speed: number;
    };
    finale: {
        kiss_sound: string;
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
}

const DEFAULTS: AppConfig = {
    card: { from: 'Someone Special', to: 'My Love', message: 'Happy Valentine\'s Day!' },
    audio: { src: '/audio/music.mp3', autoplay: true, loop: true },
    background: { image: '/images/nature.jpg', blur: 6, glow_radius: 120, glow_intensity: 0.4 },
    scene: { horse_name: 'Veronica', animation_speed: 1.0 },
    finale: { kiss_sound: '/audio/kiss.mp3', message: 'Happy Valentine\'s Day', subtitle: 'with all our love 💕' },
    theme: { primary: '#e11d48', accent: '#f472b6', gold: '#fbbf24', glass_opacity: 0.15, glass_blur: 16 },
};

function parseINI(text: string): Record<string, Record<string, string>> {
    const result: Record<string, Record<string, string>> = {};
    let currentSection = '';

    for (const raw of text.split('\n')) {
        const line = raw.trim();
        if (!line || line.startsWith('#') || line.startsWith(';')) continue;

        const sectionMatch = line.match(/^\[([^\]]+)\]$/);
        if (sectionMatch) {
            currentSection = sectionMatch[1];
            if (!result[currentSection]) result[currentSection] = {};
            continue;
        }

        const kvMatch = line.match(/^([^=]+)=(.*)$/);
        if (kvMatch && currentSection) {
            result[currentSection][kvMatch[1].trim()] = kvMatch[2].trim();
        }
    }

    return result;
}

function coerce(value: string): string | number | boolean {
    // TOML: strip surrounding quotes from string values
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
        return value.slice(1, -1);
    }
    if (value === 'true') return true;
    if (value === 'false') return false;
    const num = Number(value);
    if (!isNaN(num) && value !== '') return num;
    return value;
}

function mergeConfig(parsed: Record<string, Record<string, string>>): AppConfig {
    const config = structuredClone(DEFAULTS);

    for (const [section, values] of Object.entries(parsed)) {
        if (section in config) {
            const target = config[section as keyof AppConfig] as Record<string, unknown>;
            for (const [key, rawValue] of Object.entries(values)) {
                if (key in target) {
                    target[key] = coerce(rawValue);
                }
            }
        }
    }

    return config;
}

let cachedConfig: AppConfig | null = null;

export async function loadConfig(): Promise<AppConfig> {
    if (cachedConfig) return cachedConfig;

    try {
        const response = await fetch('/program.conf');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();
        const parsed = parseINI(text);
        cachedConfig = mergeConfig(parsed);
    } catch (e) {
        console.warn('Could not load program.conf, using defaults:', e);
        cachedConfig = structuredClone(DEFAULTS);
    }

    // Apply theme CSS variables
    const root = document.documentElement;
    root.style.setProperty('--glass-opacity', String(cachedConfig.theme.glass_opacity));
    root.style.setProperty('--glass-blur', `${cachedConfig.theme.glass_blur}px`);
    root.style.setProperty('--color-primary', cachedConfig.theme.primary);
    root.style.setProperty('--color-accent', cachedConfig.theme.accent);
    root.style.setProperty('--color-gold', cachedConfig.theme.gold);

    return cachedConfig;
}

export function getConfig(): AppConfig {
    return cachedConfig ?? structuredClone(DEFAULTS);
}
