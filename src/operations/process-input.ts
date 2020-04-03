import { letterToCodeMap } from '../alphabet';
import { getProgramAsMorseArguments } from '../arguments';

export function processInput(input: string): string {
    const args = getProgramAsMorseArguments();
    if (args.operation === 'encode') {
        return encode(input);
    } else {
        return decode(input);
    }
}

function encode(input: string): string {
    const encodedInput = input.split('').map((letter) => {
        const code = letterToCodeMap.get(letter.toUpperCase());
        return code ? code : letter;
    }).join('');
    return encodedInput;
}

function decode(input: string): string {
    throw new Error('Decoding is not implemented yet!');
}