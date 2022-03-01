/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, response) => {
        if (error) return done(error);
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/home')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, response) => {
        if (error) return done(error);
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test the unknown path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/unknown')
      .expect(404)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, response) => {
        if (error) return done(error);
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});
