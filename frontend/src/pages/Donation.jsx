import React from "react";

const Donation = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold">Support the Needy and Elderly</h2>
      <p className="mt-4">Choose the amount you would like to donate to help others in need. You can also round up your bill when making a purchase to contribute to the cause.</p>

      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 rounded">Donate ₹500</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded ml-4">Donate ₹1000</button>
      </div>
    </div>
  );
};

export default Donation;

