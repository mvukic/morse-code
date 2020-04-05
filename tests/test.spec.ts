import { MorseArgs } from '../src/args.type';
import { InputNotDefinedError, IOFileError } from '../src/errors/errors';
import { MorseParser } from '../src/morse-parser/morse-parser';

export const encodingData: string[][] = [
    ['sos', '... --- ...'],
    ['building', '-... ..- .. .-.. -.. .. -. --.'],
    ['two words', '- .-- ---    .-- --- .-. -.. ...']
];
export const decodingdata: string[][] = encodingData.map(([input, output]) => [output, input]);

describe('Morse parser tests', () => {

    test('throw InputNotDefinedError if theres no input data', async () => {
        const parser = new MorseParser();
        const args: MorseArgs = getDefaultMorseArgs();
        await expect(parser.run(args)).rejects.toThrowError(InputNotDefinedError);
    });

    test('throw IOFileError if theres no input file', async () => {
        const parser = new MorseParser();
        const args: MorseArgs = getDefaultMorseArgs({ inputFile: 'path_not_found' });
        await expect(parser.run(args)).rejects.toThrowError(IOFileError);
    });

    describe('Correctly encode values', () => {

        test.each(encodingData)('%s -> %s', async (input, output) => {
            const parser = new MorseParser();
            const args: MorseArgs = getDefaultMorseArgs({ inputData: input });
            console.log = jest.fn();
            await parser.run(args);
            expect(console.log).toHaveBeenCalledWith(output.toUpperCase());
        });

    });

    describe('Correctly decode values', () => {

        test.each(decodingdata)('%s -> %s', async (input, output) => {
            const parser = new MorseParser();
            const args: MorseArgs = getDefaultMorseArgs({ inputData: input, operation: 'decode' });
            console.log = jest.fn();
            await parser.run(args);
            expect(console.log).toHaveBeenCalledWith(output.toUpperCase());
        });

    });

});

function getDefaultMorseArgs(overrides: Partial<MorseArgs> = {}): MorseArgs {
    return {
        debug: false,
        inputData: undefined,
        inputFile: undefined,
        operation: 'encode',
        outputFile: undefined,
        ...overrides
    }
}