import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contactImage from "../assets/Images/Image.png"; // replace with your image path

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate Name: letters and spaces only
    if (name === "name") {
      if (/[^a-zA-Z\s]/.test(value)) {
        setErrors({ ...errors, name: "Name can only contain letters and spaces." });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name) {
      alert("Please fix errors before submitting!");
      return;
    }

    console.log("Form Submitted:", formData);
    setStatus("Message sent successfully 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 bg-gradient-to-br from-indigo-100 to-blue-50 py-16 px-6 md:px-12 gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={contactImage}
            alt="Contact Us"
            className="rounded-xl shadow-2xl w-full max-w-md object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 mt-1 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-indigo-400"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-green-600 font-medium">{status}</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
