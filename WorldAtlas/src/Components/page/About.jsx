import country from "../../API/country.json";
import connect from "../../API/connect.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { NavLink } from "react-router-dom";
const About = () => {
  const Icons = {
    FaLocationDot: <FaLocationDot />,
    IoCall: <IoCall />,
    IoMdMailUnread: <IoMdMailUnread />,
  };

  return (
    <>
      <div className="text-center font-bold text-5xl bg-gray-200 p-10">
        <h1>Here are the Interesting facts </h1>
        <h1>we proud of</h1>
      </div>
      <hr />
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-4 min-h-screen bg-gray-100 p-10">
        {country.map((data) => {
          const {
            id,
            name,
            code,
            capital,
            region,
            subregion,
            population,
            area,
            currency,
            language,
          } = data;
          return (
            <>
              <div
                key={id}
                className="max-w-sm mx-auto w-full border-2 duration-500 border-none bg-gray-800 text-white p-8 m-4 rounded-md hover:shadow-2xl hover:scale-y-110 hover:scale-x-110 sticky"
              >
                <h1 className="text-3xl font-bold text-center ">{name}</h1>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">code:</span> {code}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">Capital:</span> {capital}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">region:</span> {region}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">Subregion:</span> {subregion}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">Population:</span>{" "}
                  {population}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">Area:</span> {area}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">Currency:</span> {currency}
                </p>
                <p className="mt-2 ">
                  {" "}
                  <span className="font-semibold">language:</span> {language}
                </p>
              </div>
            </>
          );
        })}
      </ul>

      <ul
        className="flex  md:justify-between
      flex-wrap m-4 p-2 pl-20 pr-20 bg-gray-200"
      >
        {connect.map((data) => {
          const { id, icon, name, location } = data;
          return (
            <>
              <li
                key={id}
                className="flex cursor-pointer hover:text-gray-600 m-2"
              >
                <p className="mt-[14px] m-3">{Icons[icon]}</p>
                <div>
                  <h1 className="text-xl font-semibold">{name}</h1>
                  <p className="text-gray-400">{location}</p>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default About;
