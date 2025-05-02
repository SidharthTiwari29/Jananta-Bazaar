import React from 'react';

const DealConfirmationModal = ({ isOpen, onClose, deal }) => {
  if (!isOpen || !deal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl text-center">
        <h2 className="text-xl font-bold text-green-600 mb-3">Deal Locked!</h2>
        <p className="text-gray-700 mb-4">
          You successfully locked <strong>{deal.name}</strong> at <strong>₹{deal.price}</strong>!
        </p>
        <p className="text-sm text-gray-500 mb-6">Thank you for shopping with Janata Bazaar.</p>
        <button
          onClick={onClose}
          className="px-5 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DealConfirmationModal;

