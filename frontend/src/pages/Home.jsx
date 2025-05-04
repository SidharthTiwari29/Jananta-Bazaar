// src/pages/Home.jsx
import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import OfferOverview from "../components/home/OfferOverview";
import DealsSection from "../components/home/DealsSection";
import WinnersSection from "../components/home/WinnersSection";
import LiveBargains from "../components/home/LiveBargains";

const Home = () => {
  return (
    <main className="bg-orange-50 min-h-screen">
      <HeroSection />

      {/* What Janata Bazaar Offers */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <OfferOverview />
      </section>

      {/* Deals of the Day and Trending */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <DealsSection />
      </section>

      {/* Daily Winners */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <WinnersSection />
      </section>

      {/* Live Bargains */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <LiveBargains />
      </section>
    </main>
  );
};

export default Home;
