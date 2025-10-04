import React from "react";

function OrganizerSection() {
  return (
    <section
      style={{
        padding: "50px",
        background: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <h2>Become an Event Organizer</h2>
      <p>
        If you are organizing an event and want students to register, click the
        button below to register your event.
      </p>
      <button
        style={{
          background: "linear-gradient(90deg, #ff8c00, #1e90ff)",
          color: "white",
          border: "none",
          padding: "10px 25px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Register Event
      </button>
    </section>
  );
}

export default OrganizerSection;
