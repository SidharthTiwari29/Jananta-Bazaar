// src/pages/Home.jsx

import React from "react";
import HeroSection from "../components/home/HeroSection";
import OfferOverview from "../components/home/OfferOverview";
import DealsSection from "../components/home/DealsSection";
import WinnersSection from "../components/home/WinnersSection";
import LiveBargains from "../components/home/LiveBargains";

const Home = () => {
  return (
    <main className="bg-orange-50 min-h-screen">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <HeroSection />
      </section>

      {/* What Janata Bazaar Offers */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <OfferOverview />
      </section>

      {/* Deals of the Day and Trending Products */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <DealsSection />
      </section>

      {/* Daily Winners Display */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <WinnersSection />
      </section>

      {/* Live Bargains Feed */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <LiveBargains />
      </section>
    </main>
  );
};

export default Home;
