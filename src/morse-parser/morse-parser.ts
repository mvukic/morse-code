import type { MorseArgs } from '../args.type';
import { read } from './read';
import { write } from './write';
import { processInput } from './process-input';

export class MorseParser {

    async run(args: MorseArgs): Promise<void> {
        // Get from input file/command line
        const input = await read(args);
        // Encode/Decode
        const output = processInput(args, input);
        // Send to output file/print to command line
        await write(args, output);
    }

}