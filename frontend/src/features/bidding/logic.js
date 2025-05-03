// frontend/src/features/bidding/logic.jsx

export const calculateProfit = (basePrice, userBid) => {
  const profit = basePrice - userBid;
  const profitPercentage = (profit / basePrice) * 100;
  return {
    profit,
    profitPercentage: Math.round(profitPercentage * 100) / 100,
  };
};

export const determineSlot = (userProfitPercent, allBids) => {
  const sorted = [...allBids].sort((a, b) => b.profitPercentage - a.profitPercentage);
  const index = sorted.findIndex(bid => bid.userId === 'currentUser');

  if (index === -1) return null;

  const total = sorted.length;
  const percent = (index / total) * 100;

  if (percent < 10) return 'Top 10%';
  if (percent < 25) return 'Top 25%';
  if (percent < 50) return 'Top 50%';
  return 'Below 50%';
};

export const checkLotteryEligibility = (slot, continuousDaysTop10) => {
  const eligible = slot === 'Top 10%';
  const rewards = eligible
    ? continuousDaysTop10 >= 3
      ? { eligible: true, rewardType: 'subscription' }
      : { eligible: true, rewardType: 'lottery', percentage: Math.random() < 0.5 ? 50 : 30 }
    : { eligible: false };

  return rewards;
};

export const encourageHigherBid = (userBid, basePrice, slot) => {
  const { profitPercentage } = calculateProfit(basePrice, userBid);

  if (slot === 'Below 50%' && profitPercentage < 5) {
    return {
      showEncouragement: true,
      message: `You're missing out! Increase your bid just a bit to qualify for bonus coins or lottery.`,
    };
  }

  return {
    showEncouragement: false,
  };
};

