export const GetTVShowData = async () => {
  try {
    const api = "https://www.omdbapi.com/?apikey=7daca2de&s=Westworld&page=1";
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
