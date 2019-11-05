import * as yargs from 'yargs';

export interface Arguments {
  /* encode or decode */
  mode?: string; // 'decode' | 'encode'
  /* save into file or print to the console */
  outType?: string; // 'file' | 'console'
  /* if outType is file , this is that file path */
  outPath?: string;
  /* get text from file or console */
  inType?: string; // 'file'
  /* if input is file then this is path to that filemode */
  inPath?: string;
}


export function getArguments(): Arguments {
  return yargs
    .usage('Usage: $0 [options]')
      .options({
        help: {
          alias: 'h',
          description: 'Show help',
          global: true
        },
        version: {
          alias: 'V',
          description: 'Show version number',
          global: false
        },
        mode: {
          type: 'string',
          default: 'encode',
          alias: 'm',
          description: 'Encode or decode mode. Values: "encode" or "decode", default is "encode"'
        },
        inType: {
          type: 'string',
          default: 'file',
          alias: 'it',
          description: 'Location of input data. Values: "file" or "console". Default is "file"'
        },
        outType: {
          type: 'string',
          default: 'console',
          alias: 'ot',
          description: 'Location of output data. Values: "file" or "console". Default is "file"'
        },
        outPath: {
          type: 'string',
          default: 'output.txt',
          alias: 'out',
          description: 'Output file path'
        },
        inPath: {
          type: 'string',
          default: 'input.txt',
          alias: 'in',
          description: 'Input file path'
        }
      })
      .showHelpOnFail(true)
      .argv;
}