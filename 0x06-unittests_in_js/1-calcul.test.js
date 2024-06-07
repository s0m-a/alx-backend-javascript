const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 4 when inputs are 1 and 3', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        });

        it('should return 5 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });

        it('should return 5 when inputs are 1.5 and 3.2', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.2), 5);
        });

        it('should return 6 when inputs are 1.5 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 6);
        });

        it('should return 0 when inputs are 0.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -2 when inputs are 1 and 3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        });

        it('should return -3 when inputs are 1.2 and 4.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 4.7), -3);
        });

        it('should return 0 when inputs are 3.5 and 3.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 3.5), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.25 when inputs are 1 and 4', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 4), 0.25);
        });

        it('should return 1 when inputs are 4.5 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
        });

        it('should return "Error" when inputs are 1 and 0.4', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 0.4), 'Error');
        });

        it('should return "Error" when inputs are 1 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
        });
    });

    it('should throw an error for invalid type', () => {
        assert.throws(() => calculateNumber('MULTIPLY', 1, 3), Error, 'Invalid type');
    });
});
