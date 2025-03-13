import React, { useState, useEffect } from "react";
import { Query } from "appwrite";
import Container from "../components/containers/Container";
import PostCard from "../components/Postcard";
import appwriteService from "../Appwrite/Config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {}, []);
  // appwriteService.getPosts([Query.equal("status", "active")]).then((posts) => {
  //   if (posts) {
  //     setPosts(posts.documents);
  //   }
  // });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

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

export default AllPosts;
