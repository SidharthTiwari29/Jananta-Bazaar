import React from 'react';

const LotteryTicketModal = ({ isOpen, onClose, ticketNumber, reward }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center">
        <h2 className="text-xl font-bold text-purple-700 mb-2">Lottery Ticket Earned!</h2>
        <p className="text-sm text-gray-600 mb-1">Your Ticket Number:</p>
        <div className="text-2xl font-bold text-orange-600 mb-4">{ticketNumber}</div>
        {reward && (
          <p className="text-green-600 font-medium mb-3">
            Congratulations! You've won <strong>{reward}% cashback</strong>!
          </p>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LotteryTicketModal;

