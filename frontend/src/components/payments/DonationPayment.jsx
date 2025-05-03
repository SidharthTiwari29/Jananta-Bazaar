import React, { useState } from 'react';

const DonationPayments = () => {
  const [amount, setAmount] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDonation = (e) => {
    e.preventDefault();

    // Placeholder for actual payment gateway logic
    if (parseFloat(amount) > 0) {
      setSuccess(true);
      setAmount('');
    }
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mx-4 md:mx-16 my-10 shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
        Support the Needy & Elderly
      </h2>

      <p className="text-gray-700 mb-4">
        Your kindness goes a long way. Every rupee helps someone get essential groceries.
      </p>

      <form onSubmit={handleDonation} className="flex flex-col md:flex-row gap-4 items-start md:items-end">
        <div className="flex flex-col w-full md:w-auto">
          <label className="text-sm text-gray-600 mb-1">Enter Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100"
            min="1"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition"
        >
          Donate Now
        </button>
      </form>

      {success && (
        <div className="mt-4 text-green-600 font-semibold">
          Thank you for your contribution!
        </div>
      )}
    </div>
  );
};

export default DonationPayments;

