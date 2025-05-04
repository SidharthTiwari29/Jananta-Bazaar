// server.js
const express = require('express');
const app = require('./app');
const http = require('http');
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Gracefully shutting down...');
  server.close(() => {
    console.log('Closed all connections');
    process.exit(0);
  });
});

