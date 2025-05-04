// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
          src="/images/family-shopping.jpg"
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
          class
