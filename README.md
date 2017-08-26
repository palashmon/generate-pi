# generate-pi

[![Greenkeeper badge](https://badges.greenkeeper.io/palashmon/generate-pi.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/palashmon/generate-pi.svg?branch=master)](https://travis-ci.org/palashmon/generate-pi)
[![npm version](https://img.shields.io/npm/v/generate-pi.svg)](http://npm.im/generate-pi)
[![npm downloads](https://img.shields.io/npm/dm/generate-pi.svg)](http://npm-stat.com/charts.html?package=generate-pi&from=2017-07-01)
[![Dependency Status](https://david-dm.org/palashmon/generate-pi.svg)](https://david-dm.org/palashmon/generate-pi)
[![devDependency Status](https://david-dm.org/palashmon/generate-pi/dev-status.svg)](https://david-dm.org/palashmon/generate-pi?type=dev)
[![MIT License](https://img.shields.io/npm/l/generate-pi.svg?colorB=0BD6D3)](http://opensource.org/licenses/MIT)

Find PI(π) to the Nth Digit 

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
