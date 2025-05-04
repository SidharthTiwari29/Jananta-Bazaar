// backend/models/Subscription.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['free', 'premium'],
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'pending'],
    default: 'pending',
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'pending'],
    default: 'pending',
  },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;

