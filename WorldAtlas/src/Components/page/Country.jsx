import { useEffect, useState } from "react";
import { getApiData } from "../../API/Country";
import { NavLink } from "react-router-dom";
import Error from "./Error";

function Country() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [island, setIsland] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getApiData();
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const searchData = data.filter((curData) =>
    curData.name?.common.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...searchData].sort((curData, index) => {
    return isAscending
      ? curData.name.common.localeCompare(index.name.common)
      : index.name.common.localeCompare(curData.name.common);
  });

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  const Isisland = sortedData.filter((curData) => {
    return curData ? (
      curData.region?.toLowerCase().includes(island.toLowerCase())
    ) : (
      <h1>Enter correct island</h1>
    );
  });

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error) return <Error />;

  return (
    <>
      <div className="grid lg:grid-cols-3 md:my-4  m-8 md:grid-cols-1 grid-cols-1 p-4 text-white bg-gray-900 h-full  shadow-2xl shadow-zinc-900 border-none rounded-md ">
        <div className="w-80 md:pl-14 m-2">
          <label>Order : </label>
          <button
            onClick={toggleSortOrder}
            className="px-4 md:py-2 m-3 cursor-pointer bg-gray-800 hover:bg-gray-950 duration-150   shadow-3xl text-white rounded-md"
          >
            {isAscending ? "Asanding" : "Desanding"}
          </button>
        </div>
        <div className="w-80  rounded-md">
          <input
            type="text"
            name="Userinput"
            placeholder="Search Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 md:pl-2 md:p-2 m-3 w-[350px] md:w-full bg-white text-black  border-none rounded-md"
          />
        </div>
        <div className="w-96 rounded-md">
          <input
            type="text"
            name=""
            placeholder="Search island"
            value={island}
            onChange={(e) => setIsland(e.target.value)}
            className="h-10 md:pl-2 md:p-2 m-3 w-[350px] bg-white text-black  border-none rounded-md"
          />
        </div>
      </div>
      <div className="bg-gray-200  p-8 grid md:grid-cols-3 grid-cols-1  gap-10">
        {Isisland.map((country) => (
          <NavLink to={`/country/${country.name?.common}`}>
            <div
              key={country.name?.common}
              className="w-full border-none duration-500 text-white p-8 rounded-md hover:shadow-2xl bg-gray-900 shadow-gray-900 hover:scale-x-110 hover:scale-y-110 sticky"
            >
              <img
                src={country.flags?.svg || "https://via.placeholder.com/150"}
                alt={country.name?.common || "Unknown"}
                className="h-56 w-full  bg-no-repeat bg-cover"
              />
              <h1 className="font-bold text-2xl text-center m-2">
                {country.name?.common || "Unknown"}
              </h1>
              <p>
                <span className="font-semibold">Capital: </span>{" "}
                {country.capital?.[0] || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Continent: </span>{" "}
                {country.continents?.[0] || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>{" "}
                {country.population?.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {country.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="font-semibold">TimeZone: </span>{" "}
                {country.timezones?.[0] || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Region: </span>{" "}
                {country.region || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Details: </span>{" "}
                {country.altSpellings?.[1] || "N/A"}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Country;
