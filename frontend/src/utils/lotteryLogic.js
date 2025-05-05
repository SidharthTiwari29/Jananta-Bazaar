// src/utils/lotteryLogic.js

/**
 * Randomly selects a winner from the participant list.
 * @param {Array} participants - List of participant objects
 * @returns {Object|null} Random winner or null if empty
 */
export const getRandomWinner = (participants) => {
  if (!Array.isArray(participants) || participants.length === 0) return null;
  const index = Math.floor(Math.random() * participants.length);
  return participants[index];
};

/**
 * Determines reward tier based on user spending.
 * @param {number} spending - User's total spending in ₹
 * @returns {string} Reward category
 */
export const calculateReward = (spending) => {
  const amount = Number(spending);
  if (isNaN(amount) || amount < 0) return "Invalid";

  if (amount >= 500) return "Big Prize";
  if (amount >= 100) return "Small Prize";
  return "No Prize";
};
