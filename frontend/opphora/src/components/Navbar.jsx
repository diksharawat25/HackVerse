import React from "react";

export default function Navbar({ onAuthOpen }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            EO
          </div>
          <span className="font-semibold text-lg">Eventory</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button
            onClick={onAuthOpen}
            className="ml-4 px-4 py-2 border rounded-md bg-indigo-600 text-white hover:opacity-95"
          >
            Login / Sign up
          </button>
        </nav>

        <div className="md:hidden">
          <button onClick={onAuthOpen} className="px-3 py-2 border rounded">Auth</button>
        </div>
      </div>
    </header>
  );
}
