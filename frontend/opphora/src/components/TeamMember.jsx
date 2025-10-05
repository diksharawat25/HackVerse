import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import dikshaImg from "../assets/Images/diksha.jpg";
import gungunImg from "../assets/Images/gungun.jpg";
import basudhaImg from "../assets/Images/basudha.jpg";
import shanazImg from "../assets/Images/shanaz.jpg";
import aditiImg from "../assets/Images/aditi.jpg";


// Sample data for 5 members
const teamMembers = [
  { name: "Diksha Rawat", role: "Frontend Developer", image: dikshaImg },
  { name: "Gungun", role: "Backend Developer", image: gungunImg },
  { name: "Basudha", role: "UI/UX Designer", image: basudhaImg },
  { name: "Shanaz Faridi", role: "AI/ML Engineer", image: shanazImg },
  { name: "Aditi Gupta", role: "Content Strategist", image: aditiImg },
];

const TeamMembers = () => {
  // Split into top row (3) and bottom row (2)
  const topRowMembers = teamMembers.slice(0, 3);
  const bottomRowMembers = teamMembers.slice(3, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Meet Our Team
      </h2>

      {/* Top Row: 3 Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {topRowMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>

      {/* Bottom Row: 2 Members centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-2/3 lg:w-1/2">
          {bottomRowMembers.map((member, index) => (
            <TeamMemberCard key={index + 3} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

