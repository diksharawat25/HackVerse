import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import KeyMotives from '../components/KeyMotives';
import TeamMembers from '../components/TeamMembers';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <KeyMotives />
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default About;
