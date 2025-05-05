// src/utils/bidValidator.jsx

/**
 * Validates a bid against current price, increment rules, and maximum bid.
 * @param {number|string} bid - The bid amount entered by user
 * @param {number} currentPrice - The current highest bid or base price
 * @param {number} minIncrement - The minimum allowed increment over currentPrice
 * @param {number} maxBid - The maximum bid allowed
 * @returns {{ valid: boolean, message?: string }}
 */
export const isValidBid = (bid, currentPrice, minIncrement, maxBid) => {
  const numericBid = Number(bid);

  if (isNaN(numericBid) || bid === '') {
    return { valid: false, message: 'Bid must be a valid number.' };
  }

  if (numericBid <= currentPrice) {
    return {
      valid: false,
      message: `Your bid must be higher than ₹${currentPrice}.`,
    };
  }

  if ((numericBid - currentPrice) < minIncrement) {
    return {
      valid: false,
      message: `Minimum increment is ₹${minIncrement}.`,
    };
  }

  if (numericBid > maxBid) {
    return {
      valid: false,
      message: `Bid exceeds the maximum allowed value of ₹${maxBid}.`,
    };
  }

  return { valid: true };
};
