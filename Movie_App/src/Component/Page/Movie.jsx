import { NavLink, useLoaderData } from "react-router-dom";

const Movie = () => {
  const movieInfo = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-800 text-white p-20">
      <h2 className="text-4xl font-bold text-center text-white underline mb-16">
        Movies
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movieInfo.Search.map((movieData) => {
          return (
            <>
              <li
                key={movieData.imdbID}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={movieData.Poster}
                  alt=""
                  className="w-full h-96 object-cover"
                />
                <div className="p-4">
                  <p className="text-lg font-semibold">
                    Name: {movieData.Title}
                  </p>
                  <p className="text-gray-400">Release: {movieData.Year}</p>
                </div>
                <NavLink to={`/movie/${movieData.imdbID}`}>
                  <button className="ml-[40%] m-2 border-none bg-gray-700 p-2 rounded-md shadow-lg">
                    Watch
                  </button>
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Movie;
