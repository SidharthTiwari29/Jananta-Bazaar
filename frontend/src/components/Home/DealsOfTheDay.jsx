// src/components/home/DealsOfTheDay.jsx
import React, { useEffect, useState } from 'react';
import DealCard from '../common/DealCard';

const mockDeals = [
  {
    id: 1,
    name: 'Aashirvaad Atta 5kg',
    image: '/images/products/atta.png',
    price: 275,
    mrp: 320,
    discount: '14%',
    timeLeft: 7200,
  },
  {
    id: 2,
    name: 'Tata Salt 1kg',
    image: '/images/products/salt.png',
    price: 22,
    mrp: 28,
    discount: '21%',
    timeLeft: 3600,
  },
  {
    id: 3,
    name: 'Surf Excel 1kg',
    image: '/images/products/surf.png',
    price: 189,
    mrp: 215,
    discount: '12%',
    timeLeft: 5400,
  },
];

const DealsOfTheDay = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    setTimeout(() => setDeals(mockDeals), 500);
  }, []);

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-12 px-4 md:px-12 rounded-xl shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
        Deals of the Day
      </h2>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {deals.map((deal) => (
          <DealCard key={deal.id} product={deal} />
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
