import { NavLink } from "react-router-dom";
import myPic from "../assets/my.png";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-center items-center p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I&apos;m{" "}
          <span className="text-green-600 dark:text-green-400">
            Rohit kumar
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          A Passionate <span className="font-semibold">web Developer</span>
        </p>
        <NavLink
          to="/mega-porjects"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
        >
          View Projects
        </NavLink>
      </section>

      {/* Profile Image */}
      <div className="mt-10">
        <img
          src={myPic}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg"
        />
      </div>

      {/* Short Bio */}
      <section className="mt-10 max-w-2xl text-center text-lg">
        <p>
          I&apos;m a software developer who loves building beautiful, responsive
          web apps using modern tools like React, Tailwind CSS, and more.
          Let&apos;s work together to bring ideas to life!
        </p>
      </section>
    </div>
  );
}

export default Home;
