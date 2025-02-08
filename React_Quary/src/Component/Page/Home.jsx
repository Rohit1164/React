import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Project 🚀
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Build amazing applications with modern tools and technologies. This
          project is designed to help you get started quickly!
        </p>
        <NavLink to="/service">
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition">
            Get Started
          </button>
        </NavLink>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-8 px-10">
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🚀 Fast Performance</h2>
          <p className="text-gray-400">Optimized for speed and efficiency.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🎨 Modern UI</h2>
          <p className="text-gray-400">
            Designed with Tailwind CSS for a sleek look.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
          <h2 className="text-xl font-semibold mb-2">💻 Easy Integration</h2>
          <p className="text-gray-400">
            Seamlessly connects with APIs & databases.
          </p>
        </div>
      </section>
    </div>
  );
}
