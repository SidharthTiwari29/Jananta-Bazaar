import React from "react";
import { Link } from "react-router-dom";

const DonationBanner = () => {
  return (
    <div className="bg-green-600 text-white py-4 text-center">
      <h2 className="text-xl">Support the Needy and Elderly</h2>
      <p>Your donations make a big difference. Donate today!</p>
      <Link to="/donation" className="text-lg underline">Donate Now</Link>
    </div>
  );
};

export default DonationBanner;

