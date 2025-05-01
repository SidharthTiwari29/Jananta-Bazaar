import React from "react";
import HeroSection from "../components/home/HeroSection";
import DealsOfTheDay from "../components/home/DealsOfTheDay";
import FunnyQuotes from "../components/home/FunnyQuotes";
import LotteryHighlights from "../components/home/LotteryHighlights";
import SubscriptionBanner from "../components/home/SubscriptionBanner";
import DonationBanner from "../components/home/DonationBanner";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DealsOfTheDay />
      <FunnyQuotes />
      <LotteryHighlights />
      <SubscriptionBanner />
      <DonationBanner />
    </div>
  );
};

export default Home;

