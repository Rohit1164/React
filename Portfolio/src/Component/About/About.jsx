import { NavLink } from "react-router-dom";
import boy from "../assets/Boy.png";

function About() {
  return (
    <>
      <hr />
      <section className="bg-gray-300 dark:bg-green-950 text-black dark:text-white h-[130vh]">
        <h1 className="text-7xl pt-16 font-bold text-center bg-gray-300 dark:bg-green-950 text-black dark:text-white">
          About Us
        </h1>

        <div className="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[100vh] h-[100%] bg-gray-300 dark:bg-green-950 text-black dark:text-white sticky top-1">
          <div className=" w-96  rounded-md mt-12 h-80">
            <h1 className="text-7xl font-bold font-mono bg-gray-300 dark:bg-green-950 text-black dark:text-white">
              Rohit
            </h1>
            <p className="text-xl">
              As a recent graduate with a passion for web development, I am
              eager to contribute to a dynamic team, leveraging my strong
              foundation in HTML, CSS, and JavaScript, along with experience in
              React to build engaging and user-friendly web applications.
            </p>
            <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-gray-300 dark:bg-green-950 text-black dark:text-white">
              <NavLink to={"/about-more"}>About more</NavLink>
            </button>
          </div>
          <img
            className="rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl"
            src={boy}
            alt="boy"
          />
        </div>
      </section>
    </>
  );
}

export default About;
