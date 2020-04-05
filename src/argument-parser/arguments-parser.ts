import commander from 'commander';
import { morseVersion } from '../data/version';
import type { MorseArgs } from '../args.type';

export class MorseArguments {

  private program: commander.Command;

  constructor() {
    this.initProgram();
    this.setupArguments();
    this.setupListeners();
    this.parseArguments();
  }

  private initProgram() {
    if (process.argv.length <= 2) {
      throw new Error('No arguments specified!');
    }
    this.program = commander.createCommand();
  }

  private setupArguments() {
    this.program
      .version(morseVersion)
      .description('Encode/decode from/to Morse code')
      .name('morse')
      .usage('[arguments]')
      .option('-d, --debug', 'prints intermediate steps', false)
      .option('-op, --operation <operation>', 'decode or encode', 'encode')
      .option('-if, --input-file <path>', 'input file path')
      .option('-of, --output-file <path>', 'output file location')
      .option('-id, --input-data <string>', 'data passed from command line')
      .option('-dash, --dash-symbol', 'dash symbol', '-')
      .option('-dot, --dot-symbol', 'dot symbol', '.');
  }

  private parseArguments() {
    this.program.parse(process.argv);
  }

  private setupListeners() {
    this.program.on('--help', () => {
      console.log();
      console.log('Usage:');
      console.log('    $ node morse [arguments]');
    });
  }

  getArguments() : MorseArgs {
    return (this.program as unknown) as MorseArgs;
  }

}
