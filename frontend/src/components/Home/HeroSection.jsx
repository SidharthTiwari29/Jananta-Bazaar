// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import heroImage from "../../assets/images/family-shopping-illustration.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-orange-300 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900">
            Janata Bazaar
          </h1>
          <p className="text-2xl font-semibold text-orange-800">
            Set Your Price. <br /> Build Your Dreams.
          </p>
          <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full">
            Start Bidding
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 md:mt-0 md:w-1/2"
        >
          <img
            src={heroImage}
            alt="Family shopping illustration"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
