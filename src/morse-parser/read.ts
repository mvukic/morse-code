import { promises } from 'fs';
import type { MorseArgs } from '../args.type';

export async function read(args: MorseArgs): Promise<string[]> {
    if (!args.inputFile && !args.inputData) {
        throw new Error('At least one input has to be defined!');
    }

    let input = '';
    if (args.inputFile) {
        input = await promises.readFile(args.inputFile, 'utf8');
    } else {
        input = args.inputData;
    }
    if (input.trim().length === 0) {
        throw new Error(`Input data is an empty string!`);
    }
    return input.trim().split(/[\r\n]+/);
}