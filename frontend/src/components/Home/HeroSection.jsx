// src/components/Home/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/family-shopping-illustration.png";
import fireworkGlow from "../../assets/images/firework-glow.png";

const isFestival = true; // Set this dynamically in the future

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 py-20">
      {/* Firework Glow if Festival */}
      {isFestival && (
        <motion.img
          src={fireworkGlow}
          alt="Festival Glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none mix-blend-lighten"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">
        {/* Text Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="space-y-6 md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-800 via-red-600 to-yellow-500 bg-clip-text text-transparent font-serif drop-shadow-md">
            Janata Bazaar
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-orange-800 font-sans leading-snug drop-shadow-sm">
            Set Your Price. <br className="hidden md:block" />
            Build Your Dreams.
          </p>
          <Link to="/bidding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300"
            >
              Start Bidding
            </motion.button>
          </Link>
          <p className="text-sm text-orange-700 italic pt-2">
            “Why pay full price, when you can pay your price?”
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center relative"
        >
          <img
            src={heroImage}
            alt="Family Shopping"
            className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Decorative Gradient Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-2xl z-0" />
    </section>
  );
};

export default HeroSection;
