import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/* Column 1: Opphora */}
      <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>Opphora</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
          Connecting students with amazing events and opportunities.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            onClick={() => scrollToSection("home")}
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Column 3: Categories */}
      <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Categories</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            onClick={() => alert("Hackathons clicked")}
            style={{ background: "none", border: "none", color: "white", padding: 0, cursor: "pointer", textAlign: "left" }}
          >
            Hackathons
          </button>
          <button
            onClick={() => alert("Internships clicked")}
            style={{ background: "none", border: "none", color: "white", padding: 0, cursor: "pointer", textAlign: "left" }}
          >
            Internships
          </button>
          <button
            onClick={() => alert("Workshops clicked")}
            style={{ background: "none", border: "none", color: "white", padding: 0, cursor: "pointer", textAlign: "left" }}
          >
            Workshops
          </button>
          <button
            onClick={() => alert("Challenges clicked")}
            style={{ background: "none", border: "none", color: "white", padding: 0, cursor: "pointer", textAlign: "left" }}
          >
            Challenges
          </button>
        </div>
      </div>

      {/* Column 4: Follow Us */}
      <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Follow Us</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <FaFacebook /> Facebook
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <FaTwitter /> Twitter
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid #444",
          paddingTop: "20px",
          fontSize: "0.9rem",
        }}
      >
        <span style={{ borderRadius: "50%", border: "1px solid white", padding: "5px 8px", marginRight: "5px" }}>©</span>
        2025 Opphora | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
