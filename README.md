# morse-code

Morse code encoder/decoder written in Typescript.

### Usage:
```shell
node morse --help
```

### Build:
```shell
yarn build
```

```shell
node ./dist/morse.js -op encode -if ./data/input.txt -of ./data/encoded.txt
```

### Run using ts-node:
```shell
yarn run-file [arguments]
```

### Try it on sample data
```shell
yarn run-file -op encode -if ./data/input.txt -of ./data/encoded.txt
```
```shell
yarn run-file -op decode -if ./data/encoded.txt -of ./data/decoded.txt
```