// src/components/UpcomingEvents.jsx
import React from "react";
import { Calendar, Rocket, Briefcase } from "lucide-react";

const events = [
  {
    type: "Hackathon",
    title: "Hackathon 2025",
    date: "10 Oct 2025",
    description:
      "National-level hackathon with exciting cash prizes and networking opportunities.",
    color: "red",
    icon: <Rocket className="w-5 h-5 text-red-500" />,
    gradient: "from-red-400 to-red-600",
  },
  {
    type: "Competition",
    title: "AI Challenge",
    date: "15 Oct 2025",
    description:
      "Compete with AI developers and showcase your innovation skills.",
    color: "blue",
    icon: <Calendar className="w-5 h-5 text-blue-500" />,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    type: "Internship",
    title: "Internship Fair",
    date: "20 Oct 2025",
    description:
      "Top companies are offering internship opportunities for students and graduates!",
    color: "green",
    icon: <Briefcase className="w-5 h-5 text-green-500" />,
    gradient: "from-green-400 to-green-600",
  },
];

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-2">
          🚀 Upcoming Events
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover amazing opportunities to grow your skills and advance your career
        </p>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative border-l-4 border- w-full max-w-3xl pl-10">
          {events.map((event, idx) => (
            <div key={idx} className="relative mb-12">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-6 top-3 flex items-center justify-center w-12 h-12 bg-white border-4 border-${event.color}-500 rounded-full shadow-lg`}
              >
                {event.icon}
              </div>

              {/* Event Card */}
              <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">
                <span
                  className={`inline-block text-sm font-semibold bg-gradient-to-r ${event.gradient} text-white px-3 py-1 rounded-full`}
                >
                  {event.type}
                </span>

                <h3 className="text-2xl font-semibold mt-3 text-gray-900">
                  {event.title}
                </h3>

                <p className="flex items-center text-gray-500 mt-2">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {event.date}
                </p>

                <p className="mt-3 text-gray-700">{event.description}</p>

                <button
                  className={`mt-4 px-6 py-2 bg-gradient-to-r ${event.gradient} text-white rounded-lg hover:opacity-90 transition`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;




