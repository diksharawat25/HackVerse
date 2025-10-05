import React from 'react';
import './KeyMotives.css';

const motives = [
  { title: "Innovation", desc: "We innovate to grow and lead the future." },
  { title: "Sustainability", desc: "We care about our environment and planet." },
  { title: "Teamwork", desc: "We believe in growing together." },
  { title: "Customer First", desc: "We put our users at the heart of what we do." }
];

const KeyMotives = () => {
  return (
    <section className="key-motives">
      <h2>Key Motives</h2>
      <div className="motive-cards">
        {motives.map((motive, idx) => (
          <div className="motive-card" key={idx}>
            <h3>{motive.title}</h3>
            <p>{motive.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyMotives;
