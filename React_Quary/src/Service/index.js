import axios from "axios";

const app = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = async (pagination) => {
  const res = await app.get(`/posts?_start=${pagination}&_limit=3`);
  return res.data;
};

export const getInvPosts = async (id) => {
  try {
    const res = await app.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

export const getGithubAPIData = async ({ pageParam }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    return await app.delete(`/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const updatePost = async (id) => {
  try {
    return await app.patch(`/posts/${id}`, { title: "You have Updated" });
  } catch (error) {
    console.log(error);
  }
};
