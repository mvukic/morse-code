import { promises } from 'fs';
import { getProgramAsMorseArguments } from '../arguments';
import { green } from 'chalk';


export async function write(data: string[]): Promise<void> {
    const args = getProgramAsMorseArguments();
    if (args.outputFile) {
        await promises.writeFile(args.outputFile, data.join('\n'), 'utf8')
        console.log(green(`Result saved into ${args.outputFile}`));
    } else {
        console.log(data.join('\n'));
    }
}