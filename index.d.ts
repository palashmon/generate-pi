declare namespace _default {
	export {get};
}
export default _default;
/**
Generates a string representation of PI(π) up to a specified number of decimal places.

Using: Bailey–Borwein–Plouffe formula

Reference: https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula

@param n - The number of decimal places to generate. Defaults to 200, which generates pi to maximum precision.
@returns A string representation of PI(π) up to the specified number of decimal places.

@example
```
import generatePi from 'generate-pi';

// Find PI(π) to the 10 decimal places
const pi10 = generatePi.get(10);
// "3.1415926535"

// Default to 200 decimal places
const pi200 = generatePi.get();
```
*/
declare function get(n?: number): string;
