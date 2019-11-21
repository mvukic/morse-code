import program, { CommanderStatic } from 'commander';

function setupArguments(): void {
  program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
}

function parseArguments(): program.Command {
  const parsed = program.parse(process.argv);
  return parsed;
}


export function getArguments(): program.Command{
  setupArguments();
  return parseArguments();
}