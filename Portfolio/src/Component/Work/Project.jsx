import ProjectDemo from "../assets/wap.png";
import boy from "../assets/map.png";
import Button from "../Button";
import { NavLink } from "react-router-dom";

function Project() {
  return (
    <>
      <div className="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[100vh] h-[150%] bg-gray-100 dark:bg-gray-900 text-black dark:text-whitesticky top-1">
        <div className=" w-96 rounded-md h-80 mt-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
          <h1 className="text-7xl font-bold font-mono ">World Atlas</h1>
          <p className="text-xl">
            A &quot;World Atlas Project&quot; can refer to several initiatives,
            including the WorldAtlas.com, a large publishing resource for
            geography and related topics, as well as projects like the Global
            Ecosystems Atlas and Project Atlas focused on mapping and
            understanding specific areas like ecosystems or financial flows
          </p>
          <Button>
            <NavLink to={"/details"}>more details</NavLink>
          </Button>
        </div>
        <img
          className="rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl"
          src={ProjectDemo}
          alt="boy"
        />
      </div>
      <hr className=" h-1 border-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-700 dark:via-white dark:to-gray-700" />

      <div className="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[110vh] h-[150%] bg-gray-100 dark:bg-gray-900 text-black dark:text-white sticky top-1">
        <div className="w-96 rounded-md h-80 mt-12">
          <h1 className="w-[100%] text-7xl font-bold font-mono bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            Mock profile Api
          </h1>
          <p className="text-xl">
            mock APIs enable more efficient testing and development, allowing
            developers to work in controlled environments with isolated
            components for more reliable test results. Real APIs, on the other
            hand, are production-grade interfaces providing access to actual
            data for end users.
          </p>
          <Button>more details</Button>
        </div>
        <img
          className="rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl"
          src={boy}
          alt="boy"
        />
      </div>
    </>
  );
}

export default Project;
