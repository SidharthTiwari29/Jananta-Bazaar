import React from 'react';

const dummyLeaders = [
  { name: 'Ravi Kumar', profit: 320, rank: 1 },
  { name: 'Anjali Singh', profit: 290, rank: 2 },
  { name: 'Tushar Patel', profit: 275, rank: 3 },
  { name: 'Kiran Joshi', profit: 260, rank: 4 },
  { name: 'Maya Verma', profit: 250, rank: 5 },
];

const Leaderboard = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Top Bidders of the Day
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead>
            <tr className="bg-green-100 text-green-900 text-sm">
              <th className="py-3 px-4 border-b">Rank</th>
              <th className="py-3 px-4 border-b">User</th>
              <th className="py-3 px-4 border-b">Profit Generated (₹)</th>
            </tr>
          </thead>
          <tbody>
            {dummyLeaders.map((user, index) => (
              <tr
                key={index}
                className={`text-center text-gray-800 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
              >
                <td className="py-2 px-4 border-b font-semibold">{user.rank}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">₹{user.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4 italic">
        Top 10% earn lottery rewards and exclusive benefits!
      </p>
    </section>
  );
};

export default Leaderboard;

