// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
// });
// export const getApiData = () => {
//   const data = api.get("/posts");
//   return data;
// };
// export const deleteData = (id) => {
//   const data = api.delete(`/posts/${id}`);
//   return data;
// };
// export const postData = (post) => {
//   const data = api.post(`/posts`, post);
//   return data;
// };

// export const updatePostData = (id, post) => {
//   return api.put(`/post/${id}`, post);
// };

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getApiData = async () => {
  try {
    return await api.get("/posts");
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    return await api.delete(`/posts/${id}`);
  } catch (error) {
    console.error(`Error deleting post with ID ${id}:`, error);
    throw error;
  }
};

export const postData = async (post) => {
  try {
    return await api.post(`/posts`, post);
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updatePostData = async (id, post) => {
  try {
    return await api.put(`/posts/${id}`, post);
  } catch (error) {
    console.error(`Error updating post with ID ${id}:`, error);
    throw error;
  }
};
