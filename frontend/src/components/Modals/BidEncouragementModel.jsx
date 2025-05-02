import React from 'react';

const BidEncouragementModal = ({ isOpen, onClose, onRebid }) => {
  if (!isOpen) return null;

  const encouragementLines = [
    "O bhai... itna kam bhi mat bol!",
    "Sasta hai toh sahi, par thoda aur lagao!",
    "Dil jeetne ke liye daam badhao!",
    "Desh ki dukaan hai bhai, sahi daam lagao!"
  ];

  const line = encouragementLines[Math.floor(Math.random() * encouragementLines.length)];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl text-center">
        <h2 className="text-lg font-semibold text-orange-600 mb-4">Thoda aur lagao yaar!</h2>
        <p className="mb-6 text-gray-700">{line}</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onRebid}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
          >
            Re-bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidEncouragementModal;

