import { letterToCodeMap, codeToLetterMap } from '../data/alphabet';
import type { MorseArgs } from '../args.type';

const CHAR_SPACE = ' ';
const WORD_SPACE = '   ';

export function processInput(args: MorseArgs, lines: string[]): string[] {
    return args.operation === 'encode' ? encode(lines) : decode(lines);
}

function encode(lines: string[]): string[] {
    return lines.map(line => {
        return line.split('').map(letter => {
            const code = letterToCodeMap.get(letter.toUpperCase());
            // For unknown code return the original letter
            if (!code) { return letter; }
            // Return 3 spaces after every word and 1 after every letter
            return code === ' ' ? `${WORD_SPACE}` : `${code}${CHAR_SPACE}`;
        }).join('').trim();
    });

}

function decode(lines: string[]): string[] {
    return lines.map(line => {
        // Decode and join each word with a space
        return line.split(WORD_SPACE).map(word => {
            // Decode each char and join them
            return word.split(CHAR_SPACE).map(char => codeToLetterMap.get(char)).join('');
        }).join(' ');
    });
}
