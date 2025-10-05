import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onGetStarted }) {
  return (
    <section id="home" className="relative h-[72vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60')",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="max-w-6xl mx-auto relative z-10 px-6 text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            NEVER MISS OPPORTUNITY! STAY UPDATED
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Discover upcoming events, internships, and coding challenges — all
            in one place.
          </p>
          <div className="mt-6">
            <button
              onClick={onGetStarted}
              className="px-6 py-3 bg-indigo-600 rounded-md font-semibold shadow"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
