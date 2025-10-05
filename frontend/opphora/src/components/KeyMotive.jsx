import React from "react";

// You can replace these with your actual images
import innovationImg from "../assets/Images/image1.jpg";
import accessibilityImg from "../assets/Images/image2.jpg";
import opportunityImg from "../assets/Images/opportunity.jpeg";

const KeyMotives = () => {
  const cards = [
    {
      title: "Innovation",
      image: innovationImg,
      description:
        "Encouraging students to think creatively and bring new ideas to life through participation in events.",
    },
    {
      title: "Accessibility",
      image: accessibilityImg,
      description:
        "Making technology and learning opportunities available to every student, everywhere.",
    },
    {
      title: "Opportunity",
      image: opportunityImg,
      description:
        "Providing students with chances to participate, learn, and grow their skills in real-world scenarios.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-indigo-600 mb-10 text-center">
        Key Motives
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img src={card.image} alt={card.title} className="h-20 w-20 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyMotives;
