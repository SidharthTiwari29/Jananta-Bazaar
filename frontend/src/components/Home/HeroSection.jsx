import React from "react";
import familyImage from "../../assets/images/family-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative">
      <img src={familyImage} alt="Family" className="w-full h-80 object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Janata Bazaar</h1>
        <p className="mt-2">The best deals at unbeatable prices.</p>
      </div>
    </section>
  );
};

export default HeroSection;

