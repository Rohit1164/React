import Frontend from "../assets/Frontend.png";
import programming from "../assets/programming.png";
import Framwork from "../assets/Framwork.png";

function Skill() {
  return (
    <>
      <hr />
      <div
        className="lg:h-[100vh] md:h-[100vh] h-[100%] w-[100%] bg-gray-300 dark:bg-green-950 text-black dark:text-white
               sticky top-1"
      >
        <h1 className="text-7xl pt-16 font-bold text-center ">Skills</h1>
        <div className="md:flex md:justify-evenly grid items-center md:pl-10  pl-32  md:py-4 lg:py-8  ">
          <div className="lg:py-5 md:py-16 md:80 h-60 w-72 pt-10">
            <img src={Frontend} alt="Frontend" className="md:h-60 h-52" />
            <span className="text-3xl font-bold text-green-950">Front End</span>
            <p>
              User-friendly interface enabling seamless interaction, data
              display, and intuitive navigation for enhanced digital
              experiences.
            </p>
            <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-fuchsia-200">
              VIEW{" "}
            </button>
          </div>
          <div className="lg:py-5 md:py-16 md:80 h-60 w-72 pt-52">
            <img src={Framwork} alt="Framwork" className="md:h-60 h-52" />
            <span className="text-3xl font-bold ">Framworks </span>
            <p>
              CSS frameworks are prewritten stylesheets that simplify
              responsive, consistent web design using reusable classes and
              components.
            </p>
            <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md ">
              VIEW
            </button>
          </div>
          <div className="lg:py-5 md:py-16 md:80 h-60 w-72 pt-96">
            <img src={programming} alt="programming" className="md:h-60 h-52" />
            <span className="text-3xl font-bold text-green-950">
              Programming Language
            </span>
            <p>
              Languages are systems of communication using sounds, symbols, or
              gestures to express ideas and emotions.
            </p>
            <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md ">
              VIEW{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
