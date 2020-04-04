import { promises } from 'fs';
import { getProgramAsMorseArguments } from '../arguments';

export async function read(): Promise<string[]> {
    const args = getProgramAsMorseArguments();
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