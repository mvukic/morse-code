export interface MorseArgs {
    debug: boolean;
    operation: 'encode' | 'decode';
    inputFile: string | undefined;
    outputFile: string | undefined;
    inputData: string | undefined;
}