import React from "react";
import AboutUs from "../components/AboutProject"; // adjust path based on your folder structure
import KeyMotives from "../components/KeyMotive"; // adjust path based on your folder structure
import TeamMmbers from "../components/TeamMember"; // adjust path based on your folder structure
import Footer from "../components/Footer";


const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <KeyMotives />
        <TeamMmbers />
        <Footer />
    </div>
  );
};

export default AboutPage;
