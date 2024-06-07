const request = require('request');
const { expect } = require('chai');

describe('API', () => {
  describe('Login endpoint', () => {
    it('should return correct message for POST /login', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: { userName: 'Betty' }
      };
      
      request(options, (error, response, body) => {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');
          done();
        }
      });
    });
  });

  describe('Available Payments endpoint', () => {
    it('should return correct object for GET /available_payments', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        }
      });
    });
  });
});

