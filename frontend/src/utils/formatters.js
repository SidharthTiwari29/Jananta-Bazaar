// formatters.jsx
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);

export const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

