// src/utils/formatters.js

/**
 * Formats a number to INR currency style.
 * @param {number|string} value
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  const number = Number(value);
  if (isNaN(number)) return "₹0.00";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(number);
};

/**
 * Converts ISO date string to readable format.
 * @param {string} isoDate
 * @returns {string} Formatted date string
 */
export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return isNaN(date.getTime())
    ? "Invalid Date"
    : date.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} text
 * @returns {string}
 */
export const capitalize = (text) => {
  if (typeof text !== "string" || text.length === 0) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
