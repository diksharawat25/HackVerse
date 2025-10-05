import React from 'react';
import './TeamMembers.css';

const team = [
  {
    name: "Diksha Rawat",
    desc: "Team Lead / Project Manager",
    img: "/team/diksha.jpg", // make sure this image exists in public/team/
  },
  {
    name: "Shanaz Faridi",
    desc: "Frontend Developer",
    img: "/team/shanaz.jpg",
  },
  {
    name: "Gungun Chauhan",
    desc: "UI/UX Designer",
    img: "/team/gungun.jpg",
  },
  {
    name: "Aditi Gupta",
    desc: "Backend Developer",
    img: "/team/aditi.jpg",
  },
  {
    name: "Basudha Chauhan",
    desc: "DevOps Engineer",
    img: "/team/basudha.jpg",
  },
];

const TeamMembers = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-cards">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
