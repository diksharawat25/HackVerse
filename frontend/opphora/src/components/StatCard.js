import React from "react";

export default function StatCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
      <p className="text-3xl font-bold text-purple-700">{value}</p>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}
