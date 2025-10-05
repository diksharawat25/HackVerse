import React, { useState } from "react";
import EventForm from "./EventForm";

const EventOrganizerBanner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-24 flex justify-center items-center">
        <div className="text-center text-white max-w-2xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Are you an Event Organizer?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Share your amazing events with students all over! Join us today.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition shadow-lg"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && <EventForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default EventOrganizerBanner;






