import { NavLink, useLoaderData } from "react-router-dom";
import bg from "../../assets/background.jpg";

import React from "react";

const Home = () => {
  const featuredData = useLoaderData();
  console.log(featuredData);
  return (
    <div className="bg-gray-900 text-white min-h-screen">
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

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 underline">
            Featured Movies
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-16">
            {featuredData.Search.map((movieData) => {
              return (
                <>
                  <li
                    key={movieData.imdbID}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                  >
                    <img
                      src={movieData.Poster || movieData.Title}
                      alt=""
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-3xl font-semibold">
                        {movieData.Title}
                      </p>
                      <p className=" font-semibold">Type: {movieData.Type}</p>
                      <p className="text-gray-400">Release: {movieData.Year}</p>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
