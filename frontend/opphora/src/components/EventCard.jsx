import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

function UpcomingEvents() {
  const events = [
    {
      title: "Hackathon",
      details: [
        "📅 Date: 17/11/25 - 18/11/25",
        "💸 Registration Fees: ₹500",
        "🏆 Prize Pool: ₹1,50,000",
        "📍 Place: Mumbai",
      ],
    },
    {
      title: "Workshop",
      details: [
        "📅 Date: 26/10/25 - 27/10/25",
        "💸 Registration Fees: ₹199",
        "📜 Provides Certificate",
        "📍 Place: IIT Delhi",
      ],
    },
    {
      title: "Internship",
      details: [
        "📅 Date: 13/10/25 - 24/10/25",
        "💸 Registration Fees: ₹179",
        "📜 Provides Certificate and Offer Letter",
        "🌐 Platform: InternPe",
      ],
    },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
        Upcoming Events
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {events.map((event, i) => (
          <div
            key={i}
            style={{
              width: "300px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h3>{event.title}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {event.details.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
