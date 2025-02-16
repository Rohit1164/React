export const GetFeaturedMovie = async () => {
  try {
    const url = "https://www.omdbapi.com/?apikey=7daca2de&s=Joker";
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log("GetfeaturedMovies :: method ", error);
  }
};
