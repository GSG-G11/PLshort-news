const { join } = require('path');

const handleErrorNotFound = (req, res, next) => {
  try {
    res
      .status(404)
      .sendFile(join(__dirname, '..', '..', 'public', 'error', '404.html'));
  } catch (err) {
    next(err);
  }
};
const handleErrorServer = (err, req, res, next) => {
  try {
    res
      .status(500)
      .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html'));
  } catch (error) {
    next(error);
  }
};

module.exports = { handleErrorNotFound, handleErrorServer };
