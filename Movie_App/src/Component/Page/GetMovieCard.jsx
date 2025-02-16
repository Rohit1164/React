import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getMoviesData from "../FetchData/GetMoviesData";

function GetMovieCard() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackBtn = () => navigate(-1);

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getMoviesData(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      getdata();
    }
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center  justify-center min-h-screen ">
        <div className="w-12 h-12 border-4  border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <>
      <div className="bg-gray-800 text-white pt-10">
        <div className="w-[90%] border-t-2 border-b-2 border-t-white  p-8  shadow-gray-900  flex justify-evenly gap-20 m-16 ">
          <div className="flex">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="h-[400px] w-[400px] m-16 bg-no-repeat bg-cover"
            />
            <div className="p-10 ">
              <h1 className="font-bold text-6xl text-center m-4">
                <span className="font-semibold"></span>
                {movie.Title}
              </h1>
              <p>
                <span className="font-semibold">Writer: </span>
                {movie.Writer}
              </p>
              <p>
                <span className="font-semibold">Director: </span>
                {movie.Director}
              </p>
              <p>
                <span className="font-semibold">Country: </span>
                {movie.Country}
              </p>
              <p>
                <span className="font-semibold">Language: </span>
                {movie.Language}
              </p>
              <p>
                <span className="font-semibold">Released: </span>
                {movie.Releaased}
              </p>
              <p>
                <span className="font-semibold">Year: </span>
                {movie.Year}
              </p>
              <p>
                <span className="font-semibold">Rating: </span>
                {movie.Ratings?.[0]?.Value}
              </p>
              <p>
                <span className="font-semibold">Actors: </span>
                {movie.Actors}
              </p>
              <p>
                <span className="font-semibold">Genre: </span>
                {movie.Genre}
              </p>
            </div>
          </div>
        </div>
        <button
          className="px-4 py-2 cursor-pointer bg-gray-900 text-white rounded-md
    ml-[48%] m-10"
          onClick={handleBackBtn}
        >
          Go Back
        </button>
      </div>
    </>
  );
}

export default GetMovieCard;
