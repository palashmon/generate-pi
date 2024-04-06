# generate-pi

> Find PI(π) to the Nth Digit

![CI](https://github.com/palashmon/generate-pi/actions/workflows/main.yaml/badge.svg)
[![npm version](https://img.shields.io/npm/v/generate-pi.svg)](http://npm.im/generate-pi)
[![npm downloads](https://img.shields.io/npm/dm/generate-pi.svg)](http://npm.im/generate-pi)

`generate-pi` provides a simple utility to find the value of Pi (π) up to the Nth decimal place. It offers both a default function to retrieve Pi with high precision and the flexibility to specify the number of decimal places required. The library uses the [Bailey–Borwein–Plouffe formula](https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula) to calculate Pi to the desired precision. It is lightweight and easy to use, making it a great choice for projects that require high-precision calculations of Pi.

## Installation

### Via Npm:

```sh
npm install generate-pi
```

## Usage

```javascript
import generatePi from 'generate-pi';

// Find PI(π) to the 'n' decimal places
// where n is any number between 0 and 200
const pi = generatePi.get(n);

// Find PI(π) to the 10 decimal places
const pi10 = generatePi.get(10);
// "3.1415926535"

// Default to 200 decimal places
const pi200 = generatePi.get();
```

## API

### generatePi.get(n)

Returns the value of PI(π) to the 'n' decimal places.

#### n
Type: `number`<br>
Default: 200

The number of decimal places to return. It should be a number between 0 and 200.

## Run Tests

```
npm run test
```

## License

MIT © [Palash Mondal](https://github.com/palashmon)
