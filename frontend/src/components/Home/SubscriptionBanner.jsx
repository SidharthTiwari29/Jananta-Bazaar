import React from 'react';
import { FaCrown } from 'react-icons/fa';

const SubscriptionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-green-100 py-10 px-6 md:px-20 rounded-xl shadow-lg my-8 mx-4 md:mx-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="text-orange-500 text-4xl">
            <FaCrown />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              Janata Premium Club
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Exclusive rewards for top contributors and profit boosters!
            </p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-700 mb-2 italic">
            Stay in the top 10% and enjoy benefits like early lottery access, instant coin boosts, and festive vouchers.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
            View My Status
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;

