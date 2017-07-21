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
var Decimal = require('decimal.js');
Decimal.config({ precision: 200});

/**
 * Function: findPI
 * @param: {integer} n - generate PI up to that many decimal places
 * deafults to 200 decimal places
 */
function get() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var p16 = new Decimal(1);
  var pi = new Decimal(0);

  // Check the precision needed
  var precision = Decimal.config({}).precision;
  var one = new Decimal(1);
  var two = new Decimal(2);
  var four = new Decimal(4);
  var k8 = new Decimal(0);

  for (var k = new Decimal(0); k.lte(precision); k = k.plus(one)) {
    var f = four.div(k8.plus(1)).minus(two.div(k8.plus(4))).minus(one.div(k8.plus(5))).minus(one.div(k8.plus(6)));

    pi = pi.plus(p16.times(f));
    p16 = p16.div(16);
    k8 = k8.plus(8);
  }

  // validte number of places needed
  n = n > 200 ? 200 : n;
  return pi.toPrecision(n + 2).slice(0, -1);
}

exports.get = get;