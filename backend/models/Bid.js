// backend/models/Bid.js
const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  bidTime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'won'],
    default: 'active',
  },
});

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;

