// frontend/src/utils/utils.jsx

/**
 * Format a number to currency (INR).
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate long text with ellipsis.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncateText(text, maxLength = 100) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

/**
 * Capitalize the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate a random humorous quote (can be extended).
 * @returns {string}
 */
export function getRandomHumorQuote() {
  const quotes = [
    "Prices so low, even your neighbor will ask how!",
    "Bid like a boss, shop like a king.",
    "MRP? More like My Real Price!",
    "Sabse kam daam, full paisa vasool!",
    "Janata ki choice, Janata Bazaar ka price!",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

