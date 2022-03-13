const { join } = require('path');

const relativePath = `${__dirname}/../../public/error`;

module.exports = {
  handleErrorNotFound: (_, res, next) => {
    try {
      res.status(404).sendFile(join(relativePath, '404.html'));
    } catch (err) {
      next(err);
    }
  },
  handleErrorServer: (_, __, res, next) => {
    try {
      res.status(500).sendFile(join(relativePath, '500.html'));
    } catch (error) {
      next(error);
    }
  },
};
