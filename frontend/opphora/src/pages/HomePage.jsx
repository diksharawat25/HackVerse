import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomigEvents";
import EventOrganizerBanner from "../components/EventOrganiserBanner";
import Contact from "../components/Contact";


const HomePage = () => {
  return (
    <div className="pt-16">
      <Navbar />
      <HeroSection />
      <UpcomingEvents />
      <EventOrganizerBanner />
      <Contact />

    </div>
  );
};

export default HomePage;

