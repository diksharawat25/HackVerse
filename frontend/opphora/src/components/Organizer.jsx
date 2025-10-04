// Organizer.jsx
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function Organizer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold">Want to Organize an Event?</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        If you are an organizer and want students to register for your event, 
        click below to submit event details.
      </p>
      <button
        onClick={() => setShowForm(true)}
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
      >
        Register Your Event
      </button>

      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </section>
  );
}

export default Organizer;
