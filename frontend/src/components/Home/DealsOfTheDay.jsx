// src/components/Home/DealsOfTheDay.jsx
import React from "react";
import DealCard from "../common/DealCard";

const DealsOfTheDay = () => {
  const deals = [
    {
      id: 1,
      name: "Parle-G Biscuits (1kg)",
      image: "/images/products/parleg.png",
      mrp: 60,
      price: 45,
      discount: "25%",
      timeLeft: 3600, // 1 hour
    },
    {
      id: 2,
      name: "Aashirvaad Atta (5kg)",
      image: "/images/products/atta.png",
      mrp: 280,
      price: 225,
      discount: "20%",
      timeLeft: 5400,
    },
    {
      id: 3,
      name: "Fortune Sunflower Oil (1L)",
      image: "/images/products/oil.png",
      mrp: 150,
      price: 120,
      discount: "20%",
      timeLeft: 2700,
    },
    {
      id: 4,
      name: "Tata Salt (1kg)",
      image: "/images/products/salt.png",
      mrp: 30,
      price: 24,
      discount: "20%",
      timeLeft: 1800,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-inner">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10 tracking-tight">
        Deals of the Day
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {deals.map((product) => (
          <DealCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDay;
