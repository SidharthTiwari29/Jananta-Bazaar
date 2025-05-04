// coinrewardcalc.js
export const calculateCoins = (amount) => {
  return Math.floor(amount / 10); // ₹10 = 1 coin
};

export const getDiscountFromCoins = (coins) => {
  if (coins >= 500) return 850;
  if (coins >= 250) return 500;
  if (coins >= 100) return 200;
  return 0;
};
