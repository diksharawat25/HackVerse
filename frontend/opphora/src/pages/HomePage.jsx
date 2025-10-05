import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomigEvents";
import EventOrganizerBanner from "../components/EventOrganiserBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="pt-16">
      <Navbar />
      <HeroSection />
      <UpcomingEvents />
      <EventOrganizerBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

