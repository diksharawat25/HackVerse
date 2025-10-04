import React from "react";

function Hero() {
  return (
    <section
      style={{
        height: "80vh",
        background:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem" }}>NEVER MISS AN OPPORTUNITY!</h1>
        <p>Stay updated with the latest events</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            background: "darkblue",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
