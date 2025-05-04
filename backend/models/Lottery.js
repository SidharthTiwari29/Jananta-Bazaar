// backend/models/Lottery.js
const mongoose = require('mongoose');

const lotterySchema = new mongoose.Schema({
  prize: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  status: {
    type: String,
    enum: ['ongoing', 'completed'],
    default: 'ongoing',
  },
});

const Lottery = mongoose.model('Lottery', lotterySchema);

module.exports = Lottery;

