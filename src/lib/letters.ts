/**
 * Letters utility — discovers .conf letter files at build time
 * Each letter is a .conf file in public/letters/
 * Filename format: {name}-{hash}.conf → slug = {name}-{hash}
 */
import fs from 'node:fs';
import path from 'node:path';

export interface LetterMeta {
    slug: string;
    name: string;       // human-readable name from filename
    hash: string;       // short hash portion
    confPath: string;   // path relative to public/
    // Parsed from .conf at build time:
    from: string;
    to: string;
    message: string;
}

/** Parse a minimal .conf to extract card metadata */
function parseConfMeta(text: string): { from: string; to: string; message: string; finaleMessage: string } {
    const result = { from: '', to: '', message: '', finaleMessage: '' };
    let section = '';

    for (const raw of text.split('\n')) {
        const line = raw.trim();
        if (!line || line.startsWith('#') || line.startsWith(';')) continue;

        const sectionMatch = line.match(/^\[([^\]]+)\]$/);
        if (sectionMatch) {
            section = sectionMatch[1];
            continue;
        }

        const kvMatch = line.match(/^([^=]+)=(.*)$/);
        if (kvMatch) {
            const key = kvMatch[1].trim();
            let value = kvMatch[2].trim();
            // Strip quotes
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }

            if (section === 'card') {
                if (key === 'from') result.from = value;
                if (key === 'to') result.to = value;
                if (key === 'message') result.message = value;
            }
            if (section === 'finale' && key === 'message') {
                result.finaleMessage = value;
            }
        }
    }

    return result;
}

/** Get all letters from public/letters/ */
export function getAllLetters(): LetterMeta[] {
    const lettersDir = path.join(process.cwd(), 'public', 'letters');

    if (!fs.existsSync(lettersDir)) {
        return [];
    }

    const files = fs.readdirSync(lettersDir).filter(f => f.endsWith('.conf'));

    return files.map(file => {
        const slug = file.replace('.conf', '');
        const parts = slug.split('-');
        const hash = parts.pop() || '';
        const name = parts.join('-') || slug;

        const confText = fs.readFileSync(path.join(lettersDir, file), 'utf-8');
        const meta = parseConfMeta(confText);

        return {
            slug,
            name: meta.to || name,
            hash,
            confPath: `/letters/${file}`,
            from: meta.from || 'Someone Special',
            to: meta.to || name,
            message: meta.message || 'Happy Valentine\'s Day!',
        };
    });
}

/** Get a single letter by slug */
export function getLetterBySlug(slug: string): LetterMeta | undefined {
    return getAllLetters().find(l => l.slug === slug);
}
