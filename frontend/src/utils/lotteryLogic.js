// lotterylogic.jsx
export const getRandomWinner = (participants) => {
  if (!participants.length) return null;
  const index = Math.floor(Math.random() * participants.length);
  return participants[index];
};

export const calculateReward = (spending) => {
  // ₹100+ gives a small reward chance, ₹500+ gives bigger chance
  if (spending >= 500) return "Big Prize";
  if (spending >= 100) return "Small Prize";
  return "No Prize";
};

