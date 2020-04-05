
export const morseVersion = '1.0.0';

export function checkNodeJSVersion() {
    const NODE_MAJOR_VERSION = (process.versions.node.split('.')[0] as unknown) as number;
    if (NODE_MAJOR_VERSION < 12) {
        throw new Error('Requires Node 12+');
    }
}