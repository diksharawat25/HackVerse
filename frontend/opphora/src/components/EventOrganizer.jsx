import React from "react";

export default function EventOrganizer({ onOpenForm }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="p-6 rounded-lg border bg-white shadow">
        <h2 className="text-2xl font-bold">Are you an Event Organizer?</h2>
        <p className="mt-2 text-gray-600">
          Host events, post internships, or run coding challenges. Students can
          register directly.
        </p>
        <div className="mt-4">
          <button
            onClick={onOpenForm}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Create Event / Open Registration Form
          </button>
        </div>
      </div>
    </section>
  );
}
