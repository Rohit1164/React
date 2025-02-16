import { useLoaderData } from "react-router-dom";

function TVShow() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <div className="min-h-screen bg-gray-800 text-white p-20">
        <h2 className="text-4xl font-bold text-center text-white underline mb-16">
          TV Show & Websesies
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.Search.map((movieData) => {
            return (
              <>
                <li
                  // key={movieData.imdbID}
                  key={movieData.imdbID}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={movieData.Poster || movieData.Title}
                    alt=""
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-3xl font-semibold">{movieData.Title}</p>
                    <p className=" font-semibold">Type: {movieData.Type}</p>
                    <p className="text-gray-400">Release: {movieData.Year}</p>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default TVShow;
