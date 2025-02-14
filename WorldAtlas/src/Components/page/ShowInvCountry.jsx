import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GetIndCountry } from "../../API/GetIndCountry";
import Error from "./Error";
function ShowInvCountry() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!name) return;
      setLoading(true);
      try {
        const country = await GetIndCountry(name);
        setData(country);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-12 h-12 border-4  border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <Error />;
  if (!data) return <p>No country data found.</p>;

  return (
    <>
      <div
        key={data.name?.common}
        className="w-[90%] border-t-2 border-b-2 border-t-gray-950 p-8  shadow-gray-900  flex justify-evenly gap-20 m-10 "
      >
        <img
          src={data.flags?.svg || "https://via.placeholder.com/150"}
          alt={data.name?.common || "Unknown"}
          className="h-72 w-[500px] m-16 bg-no-repeat bg-cover"
        />
        <div className="p-10">
          <h1 className="font-bold text-6xl text-center m-4">
            {data.name?.common || "Unknown"}
          </h1>
          <p className="text-xl">
            <span className="font-semibold">Capital: </span>{" "}
            {data.capital?.[0] || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Continent: </span>{" "}
            {data.continents?.[0] || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Population: </span>{" "}
            {data.population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Languages: </span>
            {data.languages ? Object.values(data.languages).join(", ") : "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">TimeZone: </span>{" "}
            {data.timezones?.[0] || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Region: </span>{" "}
            {data.region || "N/A"}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Details: </span>{" "}
            {data.altSpellings?.[1] || "N/A"}
          </p>
        </div>
      </div>
      <NavLink to={"/country"}>
        <button
          className="px-4 py-2 cursor-pointer bg-gray-900 text-white rounded-md
        ml-[48%] m-10"
        >
          Go Back
        </button>
      </NavLink>
    </>
  );
}

export default ShowInvCountry;
