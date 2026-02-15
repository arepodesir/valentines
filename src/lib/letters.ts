import fs from 'fs';
import path from 'path';

export interface Letter {
    slug: string;
    path: string;
}

export function getAllLetters(): Letter[] {
    const lettersDir = path.join(process.cwd(), 'public/letters');

    if (!fs.existsSync(lettersDir)) return [];

    const files = fs.readdirSync(lettersDir);
    return files
        .filter(file => file.endsWith('.conf'))
        .map(file => ({
            slug: file.replace('.conf', ''),
            path: path.join(lettersDir, file)
        }));
}
