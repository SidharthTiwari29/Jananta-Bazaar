// src/utils/coinRewardCalc.js

/**
 * Calculates the number of reward coins based on amount spent.
 * @param {number} amount - The purchase amount in ₹
 * @returns {number} Coins earned (1 coin per ₹10)
 */
export const calculateCoins = (amount) => {
  const numericAmount = Number(amount);
  if (isNaN(numericAmount) || numericAmount <= 0) return 0;
  return Math.floor(numericAmount / 10);
};

/**
 * Returns discount in ₹ based on the number of reward coins.
 * @param {number} coins - Number of coins a user has
 * @returns {number} Discount amount in ₹
 */
export const getDiscountFromCoins = (coins) => {
  const numericCoins = Number(coins);
  if (isNaN(numericCoins) || numericCoins < 0) return 0;

  if (numericCoins >= 500) return 850;
  if (numericCoins >= 250) return 500;
  if (numericCoins >= 100) return 200;
  return 0;
};
