const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('should return correct status code when :id is NOT a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      if (error) {
        done(error);
      } else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });
});
