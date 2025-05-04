// src/components/home/DealsSection.jsx
import DealsOfTheDay from "./DealsOfTheDay";
// Future: import TrendingProducts from "./TrendingProducts";

const DealsSection = () => {
  return (
    <div className="space-y-12">
      {/* Time-sensitive deals */}
      <DealsOfTheDay />

      {/* Trending or hot picks (optional for now) */}
      {/* <TrendingProducts /> */}
    </div>
  );
};

export default DealsSection;
