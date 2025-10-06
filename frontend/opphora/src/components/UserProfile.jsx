import React from "react";

export default function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "", email: "" };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p className="mt-2"><span className="font-semibold">Email:</span> {user.email}</p>
      </div>
    </div>
  );
}
