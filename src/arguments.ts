import { program } from 'commander';
import { version } from './version';
import type { MorseArgs } from './args.type';

function setupArguments() {
  program
    .version(version)
    .description('Encode/decode from/to Morse code')
    .name('morse')
    .usage('[options]')
    .option('-d, --debug', 'prints intermediate steps', false)
    .option('-o, --operation <operation>', 'decode or encode', 'encode')
    .option('-if, --input-file <path>', 'input file path')
    .option('-of, --output-file <path>', 'output file location')
    .option('-id, --input-data <string>', 'data passed from command line');
}

function parseArguments() {
  program.parse(process.argv);
}

function setupListeners() {
  program.on('--help', () => {
    console.log();
    console.log('Usage:');
    console.log('    $ node morse ...');
  });
}

export function getArguments() {
  setupArguments();
  setupListeners();
  parseArguments();
}

export function getProgramAsMorseArguments() : MorseArgs {
  return (program as unknown) as MorseArgs;
}