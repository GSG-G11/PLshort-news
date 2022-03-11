/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');
const { users } = require('../models/data.json');

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
  test('It should response the post method when  category (all), and search key (a)', (done) => {
    const categoryAll = { category: 'all', query: 'a' };
    request(app)
      .post('/api/news/search')
      .send(categoryAll)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(201);
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

describe('Test Fetch  /api/login path', () => {
  test('It should response the post method', (done) => {
    const invalidDataAuth = {
      email: 'emaIl_023@email.com',
      password: 'Super123pass@@#',
    };
    request(app)
      .post('/api/login')
      .send(invalidDataAuth)
      .expect(401)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(401);
        done();
      });
  });

  test('It should response the post method', (done) => {
    const validDataAuth = {
      email: 'Admin_123@admin.com',
      password: 'Admin_123@admin.com',
    };
    request(app)
      .post('/api/login')
      .send(validDataAuth)
      .expect(302)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(302);
        done();
      });
  });

  test('It should response the post method,use data.json', (done) => {
    const validDataAuth = {
      email: users[3].email,
      password: users[3].password,
    };
    request(app)
      .post('/api/login')
      .send(validDataAuth)
      .expect(302)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(302);
        done();
      });
  });

  test('It should response the post method,use data.json', (done) => {
    const invalidDataAuth = {
      email: users[1].email,
      password: users[2].password,
    };
    request(app)
      .post('/api/login')
      .send(invalidDataAuth)
      .expect(401)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(401);
        done();
      });
  });

  test('It should response the GET method, in /register', (done) => {
    request(app)
      .get('/register')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end((error, response) => {
        if (error) return done(error);
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test Fetch  /api/register path', () => {
  test('It should response the post method', (done) => {
    const userData = {
      email: 'New_email_456@email.com',
      password: 'New_email_456@email.com',
    };
    request(app)
      .post('/api/register')
      .send(userData)
      .expect(302)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((error, { statusCode }) => {
        if (error) return done(error);
        expect(statusCode).toBe(302);
        done();
      });
  });
});
