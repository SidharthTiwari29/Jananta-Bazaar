// backend/controllers/bidControllers.js

const Bid = require('../models/Bid');
const Product = require('../models/Product');
const User = require('../models/User');
const { validationResult } = require('express-validator'); // for request validation

// Utility function for handling errors
const handleError = (res, error, status = 500) => {
  console.error(error);
  res.status(status).json({ message: error.message || 'Server Error' });
};

// Create a new bid
const createBid = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productId, amount } = req.body;

  try {
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Get the user placing the bid
    const user = await User.findById(req.user.id); // Assuming user info is in req.user (via middleware)

    // Create new bid entry
    const newBid = new Bid({
      user: user._id,
      product: product._id,
      amount,
      status: 'active', // Active bid
      createdAt: Date.now(),
    });

    // Save the bid to DB
    await newBid.save();

    // Update product bid details (if necessary, depending on your product schema)
    product.lastBid = newBid.amount;
    await product.save();

    res.status(201).json({ message: 'Bid placed successfully', bid: newBid });
  } catch (error) {
    handleError(res, error);
  }
};

// Get all active bids for a product
const getActiveBids = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const activeBids = await Bid.find({ product: productId, status: 'active' }).populate('user', 'name email');

    res.status(200).json({ activeBids });
  } catch (error) {
    handleError(res, error);
  }
};

// Update an existing bid (e.g., increase the amount)
const updateBid = async (req, res) => {
  const { bidId, newAmount } = req.body;

  try {
    // Check if the bid exists
    const bid = await Bid.findById(bidId);
    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    // Ensure that the new bid amount is greater than the previous one
    if (newAmount <= bid.amount) {
      return res.status(400).json({ message: 'New bid must be higher than the previous one' });
    }

    // Update the bid
    bid.amount = newAmount;
    bid.updatedAt = Date.now();
    await bid.save();

    // Update product's last bid amount
    const product = await Product.findById(bid.product);
    product.lastBid = newAmount;
    await product.save();

    res.status(200).json({ message: 'Bid updated successfully', bid });
  } catch (error) {
    handleError(res, error);
  }
};

// Close a bid (when a product is sold or bidding ends)
const closeBid = async (req, res) => {
  const { bidId } = req.body;

  try {
    const bid = await Bid.findById(bidId);
    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    // Close the bid and set its status to 'closed'
    bid.status = 'closed';
    bid.updatedAt = Date.now();
    await bid.save();

    // Optionally, you could also handle actions like transferring the product, updating the user's wallet, etc.

    res.status(200).json({ message: 'Bid closed successfully', bid });
  } catch (error) {
    handleError(res, error);
  }
};

// Get bid history for a product
const getBidHistory = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const bidHistory = await Bid.find({ product: productId }).populate('user', 'name email').sort({ createdAt: -1 });

    res.status(200).json({ bidHistory });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  createBid,
  getActiveBids,
  updateBid,
  closeBid,
  getBidHistory,
};

