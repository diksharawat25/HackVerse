import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/LoginModal";
import Signup from "./pages/SignupModal";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

    </Router>
  );
}

export default App;


