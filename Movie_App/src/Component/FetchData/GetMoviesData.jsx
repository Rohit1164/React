const getMoviesData = async (movieID) => {
  try {
    const url = `https://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_API_KEY
    }&i=${movieID}`;
    const responce = await fetch(url);
    const data = responce.json();
    return data;
  } catch (error) {
    return <h1>{error}</h1>;
  }
};
export default getMoviesData;
