// backend/models/Wallet.js
const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  }],
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;

