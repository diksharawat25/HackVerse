import React from "react";

export default function UpcomingEvents({ events, onRegister }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">UPCOMING EVENTS</h2>
        <p className="text-sm text-gray-600 mt-1">
          Don't miss these — register early to secure your spot.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div key={ev.id} className="border rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg">{ev.title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                {ev.date} • {ev.type}
              </p>
              <p className="mt-3 text-sm text-gray-700">{ev.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium">Prize: {ev.prize}</span>
                <button
                  onClick={() => onRegister(ev)}
                  className="px-3 py-1 bg-indigo-600 text-white rounded"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
