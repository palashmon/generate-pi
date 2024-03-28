# generate-pi

> Find PI(π) to the Nth Digit

![CI](https://github.com/palashmon/generate-pi/actions/workflows/main.yml/badge.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/generate-pi.svg)](http://npm.im/generate-pi)
[![codecov](https://codecov.io/gh/palashmon/generate-pi/branch/master/graph/badge.svg)](https://codecov.io/gh/palashmon/generate-pi)
[![npm downloads](https://img.shields.io/npm/dm/generate-pi.svg)](http://npm.im/generate-pi)

## Installation

### Via Npm:

```
npm install generate-pi
```

### Usage

```javascript
var generatePi = require('generate-pi');

// Find PI(π) to the 'n' decimal places
// where n is any number between 0 and 200
var pi = generatePi.get(n);

// Find PI(π) to the 10 decimal places
var pi10 = generatePi.get(10);
// "3.1415926535"

// Default to 200 decimal places
var pi200 = generatePi.get();
```

### Via Browser:

```javascript
<script src="dist/index.umd.min.js"></script>
<script>
var pi10 = generatePi.get(10);
var pi200 = generatePi.get();
```

## Run Tests

```
npm run test
```
