const { verify } = require('jsonwebtoken');
const { join } = require('path');

module.exports = {
  authenticateToken: ({ cookies }, res, next) => {
    const { accessToken } = cookies;
    const token = accessToken && accessToken.split(' ')[1];
    if (!token) return res.status(302).redirect('/');

    return verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return res.status(302).redirect('/');
      }
      return next();
    });
  },
  redirectToDefault: ({ cookies }, res, next) => {
    const { accessToken } = cookies;
    const token = accessToken && accessToken.split(' ')[1];
    if (!token) return next();

    return verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        return res
          .status(401)
          .sendFile(join(__dirname, '..', '..', 'public', 'error', '401.html'));
      }
      return res.status(302).redirect('/home');
    });
  },
};
