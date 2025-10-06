import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiStar, FiBriefcase, FiCode, FiUser, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    // clear tokens or auth data here
    localStorage.clear();
    navigate("/login");
  };

  const navItems = [
    { to: "/dashboard", icon: <FiHome />, label: "Overview" },
    { to: "/dashboard/my-events", icon: <FiStar />, label: "My Events" },
    { to: "/dashboard/find-internships", icon: <FiBriefcase />, label: "Find Internship" },
    { to: "/dashboard/coding-contests", icon: <FiCode />, label: "Coding Contest" },
    { to: "/dashboard/my-profile", icon: <FiUser />, label: "My Profile" },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">EventHub</h2>
      <nav className="flex flex-col gap-3 text-gray-700">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10 border-t pt-4">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-gray-100"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}
