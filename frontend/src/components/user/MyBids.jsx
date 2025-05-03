import React, { useEffect, useState } from 'react';

const MyBids = () => {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch user bids
    const fetchUserBids = async () => {
      setLoading(true);
      try {
        // Replace this with your backend API
        const userBids = [
          {
            id: 1,
            product: 'Aashirvaad Atta 5kg',
            bidAmount: 190,
            status: 'Won',
            time: '2025-05-02 14:00',
          },
          {
            id: 2,
            product: 'Tata Salt 1kg',
            bidAmount: 18,
            status: 'Pending',
            time: '2025-05-02 15:30',
          },
          {
            id: 3,
            product: 'Fortune Oil 1L',
            bidAmount: 99,
            status: 'Lost',
            time: '2025-05-01 18:00',
          },
        ];
        setBids(userBids);
      } catch (error) {
        console.error('Error fetching bids:', error);
      }
      setLoading(false);
    };

    fetchUserBids();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">My Bids</h2>
      {loading ? (
        <p className="text-gray-500">Loading your bids...</p>
      ) : bids.length === 0 ? (
        <p className="text-gray-500">You haven't placed any bids yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-100">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Bid Amount</th>
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr key={bid.id} className="border-t">
                  <td className="py-2 px-4">{bid.product}</td>
                  <td className="py-2 px-4">₹{bid.bidAmount}</td>
                  <td className="py-2 px-4">{bid.time}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      bid.status === 'Won'
                        ? 'text-green-600'
                        : bid.status === 'Lost'
                        ? 'text-red-500'
                        : 'text-yellow-600'
                    }`}
                  >
                    {bid.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBids;

