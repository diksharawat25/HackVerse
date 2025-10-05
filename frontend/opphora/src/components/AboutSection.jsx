import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold">About Our Project</h2>
        <p className="mt-2 text-gray-700">
          Eventory helps students discover campus events, internships and
          challenges — curated to boost skills and careers.
        </p>

        <ul className="mt-3 list-disc pl-5 text-gray-700">
          <li>Connect students with real opportunities.</li>
          <li>Help organizers reach motivated participants.</li>
          <li>Make registration and tracking simple and transparent.</li>
        </ul>

        <h3 className="mt-4 font-semibold">Our Team</h3>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
                M{i + 1}
              </div>
              <span className="text-sm mt-2">Member {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
