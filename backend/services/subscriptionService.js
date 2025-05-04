// services/subscriptionService.js
const sendEmail = require('../utils/sendEmail');

const sendSubscriptionReminder = async (user) => {
  const subject = 'Your subscription is about to expire!';
  const text = 'Your subscription is about to expire. Please renew it to continue enjoying premium features.';
  const html = `<p>Your subscription is about to expire. <strong>Please renew it</strong> to continue enjoying premium features.</p>`;

  await sendEmail(user.email, subject, text, html);
};

module.exports = { sendSubscriptionReminder };
