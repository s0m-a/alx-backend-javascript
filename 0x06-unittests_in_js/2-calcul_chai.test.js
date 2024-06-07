const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 4 when inputs are 1 and 3', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });

        it('should return 5 when inputs are 1.2 and 3.7', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });

        it('should return 5 when inputs are 1.5 and 3.2', () => {
            expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
        });

        it('should return 6 when inputs are 1.5 and 4.5', () => {
            expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(6);
        });

        it('should return 0 when inputs are 0.4 and 0.4', () => {
            expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -2 when inputs are 1 and 3', () => {
            expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        });

        it('should return -3 when inputs are 1.2 and 4.7', () => {
            expect(calculateNumber('SUBTRACT', 1.2, 4.7)).to.equal(-3);
        });

        it('should return 0 when inputs are 3.5 and 3.5', () => {
            expect(calculateNumber('SUBTRACT', 3.5, 3.5)).to.equal(0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.25 when inputs are 1 and 4', () => {
            expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
        });

        it('should return 1 when inputs are 4.5 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
        });

        it('should return "Error" when inputs are 1 and 0.4', () => {
            expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error');
        });

        it('should return "Error" when inputs are 1 and 0', () => {
            expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
        });
    });

    it('should throw an error for invalid type', () => {
        expect(() => calculateNumber('MULTIPLY', 1, 3)).to.throw('Invalid type');
    });
});

