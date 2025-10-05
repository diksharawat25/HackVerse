import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/Images/Homebg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Decorative circles */}
      <div className="absolute top-16 left-10 w-60 h-60 bg-blue-400/20 blur-2xl rounded-full z-0"></div>
      <div className="absolute bottom-16 right-10 w-60 h-60 bg-purple-400/20 blur-2xl rounded-full z-0"></div>

      {/* Main content */}
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Unlock Your <span className="text-green-400">Potential</span>
        </h1>

        <p className="text-gray-200 mt-4 mb-6 text-lg md:text-xl">
          Explore Hackathons, Internships, and Coding Contests — all in one place.
        </p>

        <Link
          to="/signup"
          className="inline-block bg-green-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-green-500 transition duration-300"
        >
          Join Now 🚀
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 text-gray-300 text-sm animate-bounce z-10">
        ↓ Scroll Down
      </div>
    </section>
  );
};

export default HeroSection;

