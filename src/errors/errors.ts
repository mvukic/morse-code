export class InputNotDefinedError extends Error {
    constructor() {
        super('At least one input has to be defined!');
    }
}

export class InputDataIsAnEmptyStringError extends Error {
    constructor() {
        super(`Input data is an empty string!`);
    }
}

export class IOFileError extends Error {
    constructor(path: string) {
        super(`There was an error with ${path}`);
    }
}