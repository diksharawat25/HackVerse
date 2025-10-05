import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      {/* Member Image */}
      <img
        src={member.image}       // Profile picture
        alt={member.name}
        className="h-28 w-28 rounded-full object-cover mb-4"
      />

      {/* Member Name */}
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>

      {/* Member Role */}
      <p className="text-gray-600 mb-3">{member.role}</p>

      {/* Optional Social Links */}
      <div className="flex space-x-4">
        {member.social?.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
        )}
        {member.social?.github && (
          <a href={member.social.github} target="_blank" rel="noreferrer">
            <img src="/assets/github.png" alt="GitHub" className="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
