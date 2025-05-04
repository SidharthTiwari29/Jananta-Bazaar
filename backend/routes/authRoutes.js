const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Public routes
router.post('/login', authController.login);  // Login route
router.post('/logout', authController.logout); // Logout route

// Protected routes
router.get('/profile', authController.verifyToken, authController.getProfile); // Profile route

module.exports = router;
