import test from 'ava';
import generatePI from './index.js';

// PI value upto 200 decimal places
// Reference: http://www.math.com/tables/constants/pi.htm
const pi = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';

test('should be same as constant PI value of 200 decimal places', t => {
	t.is(generatePI.get(), pi);
});

test('get(\'abcd\') should be equal to 0', t => {
	t.is(generatePI.get('abcd'), '0');
});

test('get(0) should be equal to 3', t => {
	t.is(generatePI.get(0), '3');
});

test('get(5) should be same as constant PI 5 decimal places value', t => {
	t.is(generatePI.get(5), pi.slice(0, 5 + 2));
});

test('get(50) should be same as constant PI 50 decimal places value', t => {
	t.is(generatePI.get(50), pi.slice(0, 50 + 2));
});

test('get(75) should be same as constant PI 75 decimal places value', t => {
	t.is(generatePI.get(75), pi.slice(0, 75 + 2));
});

test('get(100) should be same as constant PI 100 decimal places value', t => {
	t.is(generatePI.get(100), pi.slice(0, 100 + 2));
});

test('handles large number of decimal places', t => {
	t.is(generatePI.get(300), pi.slice(0, 200 + 2));
});

test('handles negative number of decimal places', t => {
	t.is(generatePI.get(-1), '0');
});
