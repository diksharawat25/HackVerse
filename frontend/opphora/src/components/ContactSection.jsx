import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-1">Have questions? Send us a message.</p>

        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Name" className="border rounded p-2" />
          <input placeholder="Email" className="border rounded p-2" />
          <textarea
            placeholder="Message"
            className="border rounded p-2 md:col-span-2"
            rows={4}
          />
          <div className="md:col-span-2 flex justify-end">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
