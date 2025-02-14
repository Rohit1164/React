import React from "react";
import Earth from "../../assets/Earth.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 h-full pl-24 pr-24 bg-gray-200 shadow-2xl">
        <div className="grid w-full m-auto md:pt-10 pt-20  bg-gray-200 ">
          <h1 className="lg:text-7xl font-bold md:text-5xl text-5xl">
            Explore the World,One
          </h1>
          <h1 className="lg:text-7xl font-bold md:text-5xl text-5xl">
            County at a Time
          </h1>
          <p className="lg:text-xl p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            consequuntur. Commodi ad, non veniam nulla aliquid architecto
            aperiam natus odio!
          </p>
          <NavLink to={"/country"}>
            <button className="border-1 m-auto w-42 flex  rounded-4xl border-black pl-4 p-2 hover:bg-gray-800 hover:text-white hover:duration-750">
              Start Exploring <FaLongArrowAltRight className="m-auto" />
            </button>
          </NavLink>
        </div>
        <div>
          <img
            src={Earth}
            alt=""
            className="bg-no-repeat bg-cover bg-center lg:h-[550px] mr-16 lg:ml-52 mt-28"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
