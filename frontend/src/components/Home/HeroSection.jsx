// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import familyShoppingImage from "@/assets/images/family-shopping.jpg"; // Import the image

const HeroSection = () => {
  return (
    <section className="relative bg-green-50 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <img
          src={familyShoppingImage}
          alt="Family Shopping"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-6 backdrop-blur-sm bg-white/60">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-green-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Set Your Price. <br /> Build Your Dreams.
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="bg-green-700 text-white hover:bg-green-800 text-lg px-6 py-3 rounded-full">
            Start Bidding
          </Button>
          <Button className="bg-white text-green-800 border border-green-700 hover:bg-green-100 text-lg px-6 py-3 rounded-full">
            See Deals
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
