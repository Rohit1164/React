import axios from "axios";
import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: "https://restcountries.com",
  // baseURL: "https://restcouies.com",
});
export const getApiData = async () => {
  try {
    return await api.get("/v3.1/all");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
