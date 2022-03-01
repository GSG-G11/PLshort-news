const express = require('express');
const path = require('path');
// const helmet = require('helmet');
const compression = require('compression');
require('env2')('.env');

const app = express();
app.set('port', process.env.PORT || 3000);

// disable powered by express header
// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: false,
//     directives: {
//       defaultSrc: ["'self'"],
//       scriptSrc: ["'self'", 'cdn.dribbble.com'],
//       objectSrc: ["'none'"],
//       upgradeInsecureRequests: [],
//     },
//   }),
// );

// use compression middleware
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set cache age (maxAge) to 30 days
app.use(
  express.static(path.join(__dirname, '..', 'public'), {
    maxAge: '30d',
  }),
);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', 'error', '404.html'));
});

app.use((err, req, res) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', 'error', '500.html'));
});

// listen for connections
app.listen(3000, () => {
  console.log(
    `App running on port ${app.get('port')}, http://localhost:${app.get(
      'port',
    )}`,
  );
});
