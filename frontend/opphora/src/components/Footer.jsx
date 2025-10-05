import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Opphora</h2>
          <p className="text-gray-200">
            Connecting students with tech events, hackathons, workshops, and more. Share or discover amazing opportunities today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-300 transition">Home</a>
            </li>
            <li>
              <a href="/events" className="hover:text-gray-300 transition">Events</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300 transition">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-200 mb-2">Email: support@opphora.com</p>
          <p className="text-gray-200 mb-4">Phone: +91 12345 67890</p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-200 mt-10 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Opphora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
