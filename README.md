# morse

![Node.js CI](https://github.com/mvukic/morse-code/workflows/Node.js%20CI/badge.svg)

Morse code encoder/decoder written in Typescript.

### Usage:
```shell
node morse --help
```

### Build:
```shell
yarn build
```

### Build and run:
```shell
yarn build:run [arguments]
```

### Run using ts-node:
```shell
yarn run-file [arguments]
```

### Test:
```shell
yarn test
```

### Try it on sample data
```shell
yarn run-file -op encode -if ./data/input.txt -of ./data/encoded.txt
```
```shell
yarn run-file -op decode -if ./data/encoded.txt -of ./data/decoded.txt
```