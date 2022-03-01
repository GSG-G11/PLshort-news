/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((error, response) => {
        if (error) return done(error);
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
