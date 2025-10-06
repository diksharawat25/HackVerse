import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Overview from "../components/OverView";
import MyEvents from "../components/MyEvents";
import FindInternships from "../components/Findinternship";
import CodingContests from "../components/CodingContests";
import MyProfile from "../components/UserProfile";
import DashboardNavbar from "../components/DashboardNavbar";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1">
        <DashboardNavbar />
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="/find-internships" element={<FindInternships />} />
            <Route path="/coding-contests" element={<CodingContests />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
