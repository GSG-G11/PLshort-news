const app = require('./app');

// listen for connections
app.listen(3000, () => {
  console.log(
    `App running on port ${app.get('port')}, http://localhost:${app.get(
      'port',
    )}`,
  );
});
