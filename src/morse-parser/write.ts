import { green } from 'chalk';
import { promises } from 'fs';
import type { MorseArgs } from '../args.type';
import { IOFileError } from '../errors/errors';


export async function write(args: MorseArgs, data: string[]): Promise<void> {
    if (args.outputFile) {
        try {
            await promises.writeFile(args.outputFile, data.join('\n'), 'utf8')
            console.log(green(`Result saved into ${args.outputFile}`));
        } catch (error) {
            throw new IOFileError(args.outputFile);
        }
    } else {
        console.log(data.join('\n'));
    }
}