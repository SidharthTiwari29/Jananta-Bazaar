// middleware/errorHandler.js
const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);  // Log the error
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
};

module.exports = errorHandler;
