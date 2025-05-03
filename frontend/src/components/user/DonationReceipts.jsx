// frontend/src/components/user/DonationReceipts.jsx
import React from 'react';

const DonationReceipts = ({ receipts }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Donation Receipts</h2>
      {receipts && receipts.length > 0 ? (
        <ul className="space-y-3">
          {receipts.map((receipt, idx) => (
            <li key={idx} className="p-3 border rounded">
              <div><strong>Date:</strong> {receipt.date}</div>
              <div><strong>Amount:</strong> ₹{receipt.amount}</div>
              <div><strong>NGO:</strong> {receipt.ngo}</div>
              <div><strong>Receipt ID:</strong> {receipt.receiptId}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No donations made yet.</p>
      )}
    </div>
  );
};

export default DonationReceipts;
