/**
 * Created By   : Palash Mondal
 * Created Date : 07/09/2017
 * Purpose      :
 *              1. Find PI to the Nth Digit
 *              2. User can pass a number and have the module generate PI up to that many decimal places.
 *              3. Keep a limit to how many decimal places will be generate if no values passed (default to 10)
 *
 * Using        : Bailey–Borwein–Plouffe formula
 * Reference    : https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula
 *
 * */
import Decimal from 'decimal.js/decimal';
import NodeCache from 'node-cache';
import isPositiveInt from 'is-positive-int';

Decimal.config({precision: 300});
const cachePI = new NodeCache({stdTTL: 0, checkperiod: 0});

function get(n = 200) {
	if (!isPositiveInt(n)) {
		return '0';
	} // Return 0 if a valid value was not passed

	if (n === 0) {
		return '3';
	} // Skip calculations

	let p16 = new Decimal(1);
	let pi = new Decimal(0);

	// Check if pi value is already cached
	const cachedPI = cachePI.get('cachedPI');
	if (cachedPI) {
		pi = cachedPI; // Set the value from cache
	} else {
		// Check the precision needed
		const {precision} = Decimal.config({});
		const one = new Decimal(1);
		const two = new Decimal(2);
		const four = new Decimal(4);
		let k8 = new Decimal(0);

		for (let k = new Decimal(0); k.lte(precision); k = k.plus(one)) {
			const f = four
				.div(k8.plus(1))
				.minus(two.div(k8.plus(4)))
				.minus(one.div(k8.plus(5)))
				.minus(one.div(k8.plus(6)));

			pi = pi.plus(p16.times(f));
			p16 = p16.div(16);
			k8 = k8.plus(8);
		}

		// Cache the original pi value here
		cachePI.set('cachedPI', pi);
	}

	// Validate number of places needed
	n = Math.min(n, 200);
	return pi.toPrecision(n + 2).slice(0, -1);
}

export default {get};
