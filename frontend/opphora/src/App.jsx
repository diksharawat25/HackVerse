import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";


import Home from "./pages/Home";
import Login from "./pages/Login";


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
<<<<<<< HEAD

export default App;
=======
function App(){
  return <Login />
}
export default App;
>>>>>>> c5fb99772aeba1704e4ff563afe3ee140e073722
