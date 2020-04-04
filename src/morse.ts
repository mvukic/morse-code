import { red } from 'chalk';
import { getArguments } from './arguments';
import { processInput, read, write } from './operations';
import { checkNodeJSVersion } from './version';

async function start() {
    try {
        // Check NodeJS version
        checkNodeJSVersion();
        // Get arguments
        getArguments();
        // Get from input file/command line
        const input = await read();
        // Encode/Decode
        const output = processInput(input);
        // Send to output file/print to command line
        await write(output);
    } catch (error) {
        console.log(red(error.message));
        console.log('Try morse --help');
    }
}

start();
