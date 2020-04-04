import { letterToCodeMap, codeToLetterMap } from '../alphabet';
import { getProgramAsMorseArguments } from '../arguments';

const CHAR_SPACE = ' ';
const WORD_SPACE = '   ';

export function processInput(lines: string[]): string[] {
    const args = getProgramAsMorseArguments();
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
            // Decode wach char and join them
            return word.split(CHAR_SPACE).map(char => codeToLetterMap.get(char)).join('');
        }).join(' ');
    });
}
