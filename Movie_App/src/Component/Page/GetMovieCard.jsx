import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function GetMovieCard() {
  const param = useParams();
  console.log(param);
  // const movieData = useLoaderData();
  // console.log(movieData);
  return <div>GetMovieCard {param.id}</div>;
}

export default GetMovieCard;
