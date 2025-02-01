import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-800 text-white pt-10 p-6 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Movie Dekho</h1>
        <p className="text-lg mb-6">
          Welcome to Movie Hub, your ultimate destination for discovering and
          exploring movies. Whether you are looking for the latest blockbusters
          or classic masterpieces, we have something for every movie enthusiast.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg mb-6">
          We aim to provide movie lovers with an easy and engaging way to
          explore and keep up with their favorite films. Our platform offers
          detailed movie descriptions, ratings, trailers, and much more.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>Extensive database of movies from different genres</li>
          <li>Up-to-date information on new releases</li>
          <li>User-friendly interface for seamless navigation</li>
          <li>Personalized recommendations based on your interests</li>
        </ul>
        <p className="text-lg">
          Join us in celebrating the magic of cinema. Start exploring today and
          dive into the world of movies like never before!
        </p>
      </div>
    </div>
  );
}

export default About;
