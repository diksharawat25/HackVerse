import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose, openSignup }) => {
  const navigate = useNavigate(); // ✅ moved inside component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      const user = data.user;
      if (user && !user.email_confirmed_at) {
        setErrorMsg("Please verify your email before logging in.");
      } else {
        onClose();
        navigate("/dashboard"); // ✅ redirect after login
      }
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
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
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
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
            className={`w-full py-3 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {errorMsg && (
            <p className="text-center text-sm text-red-600 mt-3">{errorMsg}</p>
          )}

          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={() => {
                onClose();
                openSignup();
              }}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
