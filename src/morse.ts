import { red } from 'chalk';
import { MorseArguments } from './argument-parser/arguments-parser';
import { checkNodeJSVersion } from './data/version';
import { MorseParser } from './morse-parser/morse-parser';

async function start() {
    try {
        // Check NodeJS version
        checkNodeJSVersion();

        // Get arguments
        const argumentParser = new MorseArguments();
        const args = argumentParser.getArguments();

        // Init/run Morse parser
        const morseParser = new MorseParser();
        await morseParser.run(args);

    } catch (error) {
        console.log(red(error.message));
        console.log('Try morse --help');
    }
}

start();
