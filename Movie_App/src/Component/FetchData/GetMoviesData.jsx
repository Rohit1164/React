const getMoviesData = async ({ params }) => {
  const movieID = params.id;
  console.log(movieID);
  try {
    const url = `https://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_API_KEY
    }&s=titanic`;
    const responce = await fetch(url);
    const data = responce.json();
    return data;
  } catch (error) {
    return <h1>{error}</h1>;
  }
};
export default getMoviesData;
