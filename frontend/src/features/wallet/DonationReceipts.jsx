// DonationReceipts.jsx

import React from 'react';

const DonationReceipts = () => {
  const receipts = [
    {
      id: 1,
      amount: 100,
      cause: 'Support for Elderly Citizens',
      date: '2025-04-25',
      status: 'Success',
    },
    {
      id: 2,
      amount: 250,
      cause: 'Needy Family Grocery Support',
      date: '2025-05-01',
      status: 'Success',
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-orange-600 mb-4">Your Donation Receipts</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="p-2">Date</th>
            <th className="p-2">Cause</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id} className="border-b">
              <td className="p-2 text-sm">{receipt.date}</td>
              <td className="p-2 text-sm">{receipt.cause}</td>
              <td className="p-2 text-sm font-medium text-green-600">₹{receipt.amount}</td>
              <td className="p-2 text-sm text-blue-600">{receipt.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationReceipts;
