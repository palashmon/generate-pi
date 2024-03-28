import {expect} from 'chai';
import generatePI from "./index.js";

// PI value upto 200 decimal places
// Reference: http://www.math.com/tables/constants/pi.htm
var pi = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';

describe('start test generate-pi module', () => {
  describe('default', () => {
    it('should be same as constant PI value of 200 decimal places', () => {
      expect(generatePI.get()).to.equal(pi);
    });
  });

  describe('user defined', () => {
    it('get(\'abcd\') should be equal to 0', () => {
      expect(generatePI.get('abcd')).to.equal('0');
    });

    it('get(0) should be equal to 3', () => {
      expect(generatePI.get(0)).to.equal('3');
    });

    it('get(5) should be same as constant PI 5 decimal places value', () => {
      expect(generatePI.get(5)).to.equal(pi.slice(0,5 + 2));
    });

    it('get(50) should be same as constant PI 50 decimal places value', () => {
      expect(generatePI.get(50)).to.equal(pi.slice(0,50 + 2));
    });

    it('get(75) should be same as constant PI 75 decimal places value', () => {
      expect(generatePI.get(75)).to.equal(pi.slice(0,75 + 2));
    });

    it('get(100) should be same as constant PI 100 decimal places value', () => {
      expect(generatePI.get(100)).to.equal(pi.slice(0,100 + 2));
    });
  });
});
