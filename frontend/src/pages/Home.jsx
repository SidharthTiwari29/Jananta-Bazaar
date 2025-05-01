import React from 'react';
import familyCartoon from '../assets/images/family-cartoon.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">
          Welcome to Janata Bazaar
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          India’s smartest grocery marketplace — where your bids decide the price!
        </p>
        <div className="flex justify-center">
          <img
            src={familyCartoon}
            alt="Happy family shopping"
            className="w-full max-w-3xl rounded-2xl shadow-xl"
          />
        </div>
        <p className="mt-6 text-md text-gray-600">
          Join thousands of smart shoppers unlocking the best grocery deals every day!
        </p>
      </section>
    </div>
  );
};

export default Home;
