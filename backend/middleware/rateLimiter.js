// middleware/rateLimiter.js
const rateLimit = require('express-rate-limit');

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                  // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});

module.exports = limiter;

