const { join } = require('path');

const handleErrorNotFound = (req, res) => {
  res
    .status(404)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '404.html'));
};
const handleErrorServer = (err, req, res) => {
  res
    .status(500)
    .sendFile(join(__dirname, '..', '..', 'public', 'error', '500.html'));
};

module.exports = { handleErrorNotFound, handleErrorServer };
