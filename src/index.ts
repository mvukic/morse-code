import fs from 'fs';
import { letterToCodeMap } from './alphabet';
import { Arguments, getArguments } from './arguments';
import * as yargs from 'yargs';

async function start() {
  const config = getArguments();
  read(config);
}

function read(config: Arguments) {
  
}

function process() {
//   const input: string = await fs.promises.readFile('./input/input.txt', { encoding: 'utf8' });
//   const coded = input.split('').map((letter) => {
//     const code = letterToCodeMap.get(letter.toUpperCase());
//     return code ? code : letter;
//   }).join('');
}

function write(config: Arguments, output: string) {
  console.log(output);
}

start();
