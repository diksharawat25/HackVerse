import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Opphoralogo.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Opphora Logo" className="h-10 w-auto" />
        </div>

        {/* Right: Navigation Links + Auth Buttons */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <Link
            to="/"
            className="text-black text-lg font-extrabold hover:text-slate-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black text-lg font-extrabold hover:text-slate-700 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black text-lg font-extrabold hover:text-slate-700 transition-colors"
          >
            Contact
          </Link>

          {/* Auth Buttons */}
          <Link
            to="/login"
            className="px-5 py-2 text-slate-950 border border-slate-800 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-green-400 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-white bg-slate-950 rounded-lg font-semibold hover:bg-gradient-to-r hover:to-green-400 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



