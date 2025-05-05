// src/pages/Home.jsx
import { motion } from "framer-motion";
import HeroSection from "../components/Home/HeroSection";
import OfferOverview from "../components/Home/OfferOverview";
import DealsOfTheDay from "../components/Home/DealsOfTheDay";
import LiveBargains from "../components/Home/LiveBargains";
import Leaderboard from "../components/Home/Leaderboard";
import BiddingClock from "../components/Home/BiddingClock";
import DonationBanner from "../components/Home/DonationBanner";
import FestiveThemeSwitcher from "../components/Home/FestiveThemeSwitcher";
import FunnyQuotes from "../components/Home/FunnyQuotes";
import LotteryHighlights from "../components/Home/LotteryHighlights";
import SubscriptionBanner from "../components/Home/SubscriptionBanner";

const Home = () => {
  return (
    <main className="bg-orange-50 min-h-screen font-inter">
      <HeroSection />

      {/* Festive Theme Switcher */}
      <FestiveThemeSwitcher />

      {/* Humorous Quote */}
      <section className="text-center py-8 bg-orange-100 text-gray-800">
        <p className="text-xl italic font-medium">
          “Why pay more, when you can bid like a boss? – Janata knows best!”
        </p>
      </section>

      <FunnyQuotes />

      {/* Bidding Countdown Clock */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <BiddingClock />
      </section>

      {/* What Janata Bazaar Offers */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <OfferOverview />
      </section>

      {/* Deals of the Day */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <DealsOfTheDay />
      </section>

      {/* Lottery Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <LotteryHighlights />
      </section>

      {/* Leaderboard (Replaces WinnersSection) */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <Leaderboard />
      </section>

      {/* Donation Banner */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <DonationBanner />
      </section>

      {/* Live Bargains */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <LiveBargains />
      </section>

      {/* Newsletter / Subscription */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <SubscriptionBanner />
      </section>
    </main>
  );
};

export default Home;
