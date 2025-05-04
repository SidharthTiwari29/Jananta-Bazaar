// backend/controllers/userController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator'); // for request validation

// Utility function for handling errors
const handleError = (res, error, status = 500) => {
  console.error(error);
  res.status(status).json({ message: error.message || 'Server Error' });
};

// Register a new user
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      subscriptionStatus: 'inactive', // Set default subscription status
      coins: 0, // Initial coins for the user
      walletBalance: 0, // Initial wallet balance
      createdAt: Date.now(),
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    handleError(res, error);
  }
};

// User login (authenticate user)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password with the hashed password stored in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    };

    // Sign JWT and send in response
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return JWT token to the client
    res.status(200).json({ token });
  } catch (error) {
    handleError(res, error);
  }
};

// Fetch user profile (private route)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      subscriptionStatus: user.subscriptionStatus,
      coins: user.coins,
      walletBalance: user.walletBalance,
    });
  } catch (error) {
    handleError(res, error);
  }
};

// Update user profile (name, email, etc.)
const updateUserProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Optionally update password if provided
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Update other fields
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    handleError(res, error);
  }
};

// Handle subscription updates (activate, renew, etc.)
const updateSubscription = async (req, res) => {
  const { subscriptionStatus } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the subscription status
    user.subscriptionStatus = subscriptionStatus;
    await user.save();

    res.status(200).json({ message: 'Subscription updated successfully', user });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  updateSubscription,
};

