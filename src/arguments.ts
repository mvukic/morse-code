import { program } from 'commander';
import { morseVersion } from './version';
import type { MorseArgs } from './args.type';

function setupArguments() {
  program
    .version(morseVersion)
    .description('Encode/decode from/to Morse code')
    .name('morse')
    .usage('[arguments]')
    .option('-d, --debug', 'prints intermediate steps', false)
    .option('-op, --operation <operation>', 'decode or encode', 'encode')
    .option('-if, --input-file <path>', 'input file path')
    .option('-of, --output-file <path>', 'output file location')
    .option('-id, --input-data <string>', 'data passed from command line');
}

function parseArguments() {
  program.parse(process.argv);
  if (process.argv.length <= 2) {
    throw new Error('No arguments specified!');
  }
}

function setupListeners() {
  program.on('--help', () => {
    console.log();
    console.log('Usage:');
    console.log('    $ node morse [arguments]');
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