// src/components/home/OfferOverview.jsx
import { motion } from "framer-motion";
import { Lightbulb, Coins, Gift, ShieldCheck } from "lucide-react";

const offers = [
  {
    icon: <Coins className="w-8 h-8 text-green-700" />,
    title: "Bid Your Price",
    description: "You decide what to pay — the lowest unique bid wins!",
  },
  {
    icon: <Gift className="w-8 h-8 text-yellow-600" />,
    title: "Hourly Lottery",
    description: "Shop & enter hourly draws to win surprise gifts!",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Fair Pricing",
    description: "Transparent competition with MRP & rival prices shown.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
    title: "Smart Suggestions",
    description: "AI guides you to smart bid ranges and product picks.",
  },
];

const OfferOverview = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {offers.map((offer, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-3">{offer.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{offer.title}</h3>
          <p className="text-gray-600 text-sm">{offer.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default OfferOverview;
