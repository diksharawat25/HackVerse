// RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    prize: "",
    criteria: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event Registered Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Event Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Event Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
          <textarea name="description" placeholder="Event Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="prize" placeholder="Prize (if any)" value={form.prize} onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="text" name="criteria" placeholder="Eligibility Criteria" value={form.criteria} onChange={handleChange} className="w-full border p-2 rounded" />
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
