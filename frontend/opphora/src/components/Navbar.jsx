import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/LoginModal";
import SignupModal from "../pages/SignupModal";
import logo from "../assets/Images/Opphoralogo.png";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/30 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Opphora Logo" className="h-10 w-auto" />

        <div className="flex items-center space-x-6">
          <Link to="/" className="text-black text-lg font-extrabold hover:text-slate-700">
            Home
          </Link>
          <Link to="/about" className="text-black text-lg font-extrabold hover:text-slate-700">
            About
          </Link>
          <Link to="/contact" className="text-black text-lg font-extrabold hover:text-slate-700">
            Contact
          </Link>

          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-5 py-2 text-slate-950 border border-slate-800 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-green-400 hover:text-white transition"
          >
            Login
          </button>

          <button
            onClick={() => setIsSignupOpen(true)}
            className="px-5 py-2 text-white bg-slate-950 rounded-lg font-semibold hover:bg-gradient-to-r hover:to-green-400 hover:text-white transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        openSignup={() => setIsSignupOpen(true)}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        openLogin={() => setIsLoginOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
