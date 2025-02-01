import { NavLink } from "react-router-dom";
import bg from "../../assets/background.jpg";

import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 py-32 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to MovieDekho
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Explore the latest movies, trailers, and news!
          </p>
          <NavLink to="/movie">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
              Browse Movies
            </button>
          </NavLink>
        </div>
      </section>

      {/* Featured Movies Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Featured Movies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 m-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover"
                src="https://images.pexels.com/photos/9807584/pexels-photo-9807584.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Movie 1"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Space Travel</h3>
                <p className="text-sm text-gray-400">Release Date: 2025</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover"
                src="https://images.pexels.com/photos/12689070/pexels-photo-12689070.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Movie 2"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">facke Spider</h3>
                <p className="text-sm text-gray-400">Release Date: 2025</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-64 object-cover"
                src="https://images.pexels.com/photos/15850433/pexels-photo-15850433/free-photo-of-a-man-in-a-mask-holding-a-sign-that-says-miss.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Movie 3"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Joker 2.0</h3>
                <p className="text-sm text-gray-400">Release Date: 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
