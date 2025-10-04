import React from "react";

function Contact() {
  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            background: "darkblue",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
