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

describe('Test Fetch  /api/news path', () => {
  test('It should response the post method when all categories', (done) => {
    const categoryAll = { category: 'all' };
    request(app)
      .post('/api/news')
      .send(categoryAll)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, { statusCode, body }) => {
        if (error) return done(error);
        const { category } = body;
        expect(statusCode).toBe(201);
        expect(category).toBe('all');
        done();
      });
  });

  test('It should response the post method when category sport', (done) => {
    const categorySport = { category: 'sport' };
    request(app)
      .post('/api/news')
      .send(categorySport)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, { statusCode, body }) => {
        if (error) return done(error);
        const { category } = body;
        expect(statusCode).toBe(201);
        expect(category).toBe('sport');
        done();
      });
  });

  test('It should response the post method when category science', (done) => {
    const categoryScience = { category: 'science' };
    request(app)
      .post('/api/news')
      .send(categoryScience)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, { statusCode, body }) => {
        if (error) return done(error);
        const { category } = body;
        expect(statusCode).toBe(201);
        expect(category).toBe('science');
        done();
      });
  });
});
