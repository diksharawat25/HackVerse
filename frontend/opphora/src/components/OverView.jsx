import React from "react";
import StatCard from "../components/StatCard";

export default function Overview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard label="Total Events Enrolled" value="7" />
        <StatCard label="Events Completed" value="4" />
        <StatCard label="Upcoming Events" value="3" />
      </div>
    </div>
  );
}
