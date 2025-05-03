import React, { useEffect, useState } from 'react';

const BidTracker = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Fetch user's bids (mock data for now)
    const mockBids = [
      {
        id: 1,
        product: 'Aashirvaad Atta 5kg',
        bidPrice: 180,
        retailPrice: 210,
        status: 'Won',
        slot: 'Morning',
        date: '2025-05-02',
      },
      {
        id: 2,
        product: 'Parle-G 10 Pack',
        bidPrice: 50,
        retailPrice: 60,
        status: 'Lost',
        slot: 'Evening',
        date: '2025-05-01',
      },
    ];

    setBids(mockBids);
  }, []);

  const getProfitMargin = (bid) => {
    return bid.retailPrice - bid.bidPrice;
  };

  const statusColor = (status) => {
    return status === 'Won' ? 'text-green-600' : 'text-red-500';
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Bid Tracker</h2>
      {bids.length === 0 ? (
        <p className="text-gray-600">You haven't placed any bids yet.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Date</th>
              <th className="p-2">Product</th>
              <th className="p-2">Bid Price</th>
              <th className="p-2">Retail Price</th>
              <th className="p-2">Profit</th>
              <th className="p-2">Slot</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id} className="border-t">
                <td className="p-2">{bid.date}</td>
                <td className="p-2">{bid.product}</td>
                <td className="p-2">₹{bid.bidPrice}</td>
                <td className="p-2">₹{bid.retailPrice}</td>
                <td className="p-2 text-blue-600">
                  ₹{getProfitMargin(bid)}
                </td>
                <td className="p-2">{bid.slot}</td>
                <td className={`p-2 font-semibold ${statusColor(bid.status)}`}>
                  {bid.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BidTracker;

