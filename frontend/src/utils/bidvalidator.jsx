// bidvalidator.jsx
export const isValidBid = (bid, currentPrice, minIncrement, maxBid) => {
  const numericBid = Number(bid);
  if (isNaN(numericBid)) return { valid: false, message: "Bid must be a number." };
  if (numericBid <= currentPrice)
    return { valid: false, message: `Bid must be higher than ₹${currentPrice}` };
  if ((numericBid - currentPrice) < minIncrement)
    return { valid: false, message: `Minimum increment is ₹${minIncrement}` };
  if (numericBid > maxBid)
    return { valid: false, message: `Bid exceeds maximum allowed ₹${maxBid}` };
  return { valid: true };
};

