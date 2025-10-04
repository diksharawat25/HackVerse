// EventCard.jsx
import React from "react";

function EventCard({ title, date, description }) {
  return (
    <div className="w-72 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-700">{description}</p>
      <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
        Register
      </button>
    </div>
  );
}

export default EventCard;
