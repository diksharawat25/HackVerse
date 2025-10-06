import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const SignupModal = ({ isOpen, onClose, openLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Supabase signup with email verification
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: "http://localhost:3000/dashboard", // redirect after verify
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Check your email to verify your account!");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>

        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {message && <p className="text-center text-sm text-gray-700 mt-3">{message}</p>}

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => {
                onClose();
                openLogin();
              }}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
