import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Opphora</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button>Login / Signup</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;