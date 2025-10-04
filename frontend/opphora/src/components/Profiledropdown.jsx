import React, { useState } from "react";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 px-4 py-2 rounded-full"
      >
        👤 User
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <p className="px-4 py-2 border-b">User Name</p>
          <p className="px-4 py-2 border-b">user@example.com</p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
