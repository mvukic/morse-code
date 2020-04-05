import { promises } from 'fs';
import type { MorseArgs } from '../args.type';
import { InputDataIsAnEmptyStringError, InputNotDefinedError, IOFileError } from '../errors/errors';

export async function read(args: MorseArgs): Promise<string[]> {
    if (!args.inputFile && !args.inputData) {
        throw new InputNotDefinedError();
    }

    let input = '';
    if (args.inputFile) {
        try {
            input = await promises.readFile(args.inputFile, 'utf8');
        } catch (error) {
            throw new IOFileError(args.inputFile);
        }
    } else {
        input = args.inputData;
    }
    if (input.trim().length === 0) {
        throw new InputDataIsAnEmptyStringError();
    }
    return input.trim().split(/[\r\n]+/);
}