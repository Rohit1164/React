import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to our website! We are dedicated to providing the best
          services and solutions for our customers. Our team works hard to
          ensure high-quality experiences for everyone.
        </p>
        <p className="text-gray-600 text-lg">
          Feel free to explore our website and learn more about what we do. If
          you have any questions, don’t hesitate to reach out!
        </p>
      </div>
    </div>
  );
};

export default About;
