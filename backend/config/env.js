// config/env.js

require('dotenv').config(); // Load .env file

const envConfig = {
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  SENDGRID_SENDER_EMAIL: process.env.SENDGRID_SENDER_EMAIL,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 5000, // Default to 5000 if not provided
};

// Validate if necessary environment variables are set
const validateEnv = () => {
  const missingEnvVars = Object.entries(envConfig)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingEnvVars.length > 0) {
    console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
    process.exit(1); // Exit the application if necessary variables are missing
  }
};

validateEnv();

module.exports = envConfig;

