import API from './axios';

// Get current lottery details
export const getCurrentLottery = async () => {
  const res = await API.get('/lottery/current');
  return res.data;
};

// Enter user into current lottery
export const enterLottery = async () => {
  const res = await API.post('/lottery/enter');
  return res.data;
};

// Get lottery history for the user
export const getUserLotteryHistory = async () => {
  const res = await API.get('/lottery/history');
  return res.data;
};

// Get leaderboard or winner list
export const getWinners = async () => {
  const res = await API.get('/lottery/winners');
  return res.data;
};

