import React from "react";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "User" };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-10">
      <h1 className="text-xl font-semibold text-purple-700">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium">{user.name}</span>
        <div className="bg-purple-600 text-white h-10 w-10 rounded-full flex items-center justify-center uppercase">
          {user.name.charAt(0)}
        </div>
      </div>
    </div>
  );
}
