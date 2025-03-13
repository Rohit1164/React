import React, { useEffect, useState } from "react";
import Container from "../components/containers/Container";
import PostCard from "../components/Postcard";
import appwriteService from "../Appwrite/Config";
import { NavLink } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold">Loading posts...</h1>
        </Container>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <header className="text-center h-[85vh]  text-gray-900">
            <h2 className="text-8xl pt-40 font-extrabold">
              Welcome to Blogify
            </h2>
            <p className="mt-4 text-lg">
              Explore insightful articles on various topics.
            </p>
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
            <NavLink to={"/signup"}>
              <button className="mt-6 px-6 py-2 text-white bg-gray-900 rounded-full font-semibold hover:bg-white hover:text-gray-900 duration-500">
                Signup
              </button>
            </NavLink>
          </header>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
