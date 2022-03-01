const app = require('./app');

// listen for connections
app.listen(app.get('port'), () => {
  console.log(
    `App running on port ${app.get('port')}, http://localhost:${app.get(
      'port',
    )}`,
  );
});
