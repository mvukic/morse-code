import fs from 'fs';

import { letterToCodeMap } from './alphabet';

async function start() {
  const input: string = await fs.promises.readFile('./input/input.txt', { encoding: 'utf8' });
  const coded = input.split('').map((letter) => {
    const code = letterToCodeMap.get(letter.toUpperCase());
    return code ? code : letter;
  }).join('');
  console.log(coded);
}

start();
