import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EventBanner from "../components/EventBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EventBanner />
      <Footer />
    </>
  );
};

export default Home;