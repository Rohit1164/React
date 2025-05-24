import ProjectDemo from "./wap.png";
import boy from "./map.png";

function Project() {
  return (
    <>
      <div className="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[100vh] h-[150%] bg-pink-400 sticky top-1">
        <div className=" w-96 rounded-md h-80 mt-12">
          <h1 className="text-7xl font-bold font-mono text-green-950">
            World Atlas
          </h1>
          <p className=" text-xl">
            A &quot;World Atlas Project&quot; can refer to several initiatives,
            including the WorldAtlas.com, a large publishing resource for
            geography and related topics, as well as projects like the Global
            Ecosystems Atlas and Project Atlas focused on mapping and
            understanding specific areas like ecosystems or financial flows
          </p>
          {/* <a
            href="https://worldatlas21625.netlify.app/"
            className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-green-400"
          >
            VIEW
          </a> */}
          <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-pink-400">
            more details
          </button>
        </div>
        <img
          className="rounded-md md:h-96 h-72 my-20 shadow-blue-500 shadow-2xl"
          src={ProjectDemo}
          alt="boy"
        />
      </div>
      <hr />
      <div className="md:flex md:justify-evenly grid items-center w-[100%] px-20  py-52 md:h-[110vh] h-[150%] bg-pink-400 sticky top-1">
        <div className="w-96 rounded-md h-80 mt-12">
          <h1 className="w-[100%] text-7xl font-bold font-mono text-green-950">
            Mock profile Api
          </h1>
          <p className="text-xl">
            mock APIs enable more efficient testing and development, allowing
            developers to work in controlled environments with isolated
            components for more reliable test results. Real APIs, on the other
            hand, are production-grade interfaces providing access to actual
            data for end users.
          </p>
          {/* <a
            href="https://mockprofileapi.netlify.app/"
            className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-amber-400"
          >
            VIEW
          </a> */}
          <button className="h-12 w-44 text-2xl p-2 m-10 rounded-md bg-green-950 text-pink-400">
            more details
          </button>
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
