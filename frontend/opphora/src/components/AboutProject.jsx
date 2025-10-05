import React from "react";
import Navbar from "../components/Navbar"; // make sure you have a Navbar component
import aboutImage from "../assets/Images/AboutImage.png"; // replace with your image path

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24"> {/* Added pt-24 to give space below fixed Navbar */}
      <Navbar />
      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">
            About Our Project
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            This project is built specially for students to keep them updated with the latest technology trends and opportunities. 
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Students can upgrade their skills by participating in various events, hackathons, coding contests, internships, and workshops listed on our platform.
          </p>
          <p className="text-gray-700 text-lg">
            Our goal is to create a hub where students can learn, grow, and stay competitive in the ever-changing tech world.
          </p>
        </div>
      </section>
    </div>
  );
};


export default AboutUs;
