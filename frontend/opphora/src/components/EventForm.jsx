
import React, { useState } from "react";

const EventForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    banner: null,
    date: "",
    mode: "",
    location: "",
    eligibility: "",
    prize: "",
    fee: "",
    organizerName: "",
    organizerEmail: "",
    organizerCompany: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data:", formData);
    alert("Event saved! Check console for data.");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-12 z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Register Your Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Details */}
          <div>
            <label className="block font-semibold">Event Title / Name *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Event Type *</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option value="">Select Type</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Internship">Internship</option>
              <option value="Coding Contest">Coding Contest</option>
              <option value="Workshop">Workshop</option>
              <option value="Challenge">Challenge</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Event Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded px-3 py-2 mt-1"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold">Event Banner</label>
            <input
              type="file"
              name="banner"
              onChange={handleChange}
              className="w-full mt-1"
            />
          </div>

          {/* Key Information */}
          <h3 className="font-bold mt-4 mb-2">Key Information</h3>

          <div>
            <label className="block font-semibold">Date / Deadline / Duration *</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              placeholder="e.g., 20 Oct 2025 or 3 days"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Mode *</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {formData.mode === "Offline" && (
            <div>
              <label className="block font-semibold">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
          )}

          <div>
            <label className="block font-semibold">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Prize / Rewards</label>
            <input
              type="text"
              name="prize"
              value={formData.prize}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Registration Fee</label>
            <input
              type="text"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Organizer Details */}
          <h3 className="font-bold mt-4 mb-2">Organizer Details</h3>

          <div>
            <label className="block font-semibold">Organizer Name *</label>
            <input
              type="text"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Organizer Email / Contact *</label>
            <input
              type="email"
              name="organizerEmail"
              value={formData.organizerEmail}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Organization / College / Company Name *</label>
            <input
              type="text"
              name="organizerCompany"
              value={formData.organizerCompany}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition mt-4"
          >
            Save Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
