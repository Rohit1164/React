import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getInvPosts } from "../../Service";

function FetchInvRQ() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["/post", id],
    queryFn: () => getInvPosts(id),
  });
  console.log(data);

  if (isLoading) return <div className="loading-circle"></div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="m-14 border-1 p-20 rounded-3xl bg-gray-800 text-white border-white">
      <h1 className="text-center text-4xl font-bold underline">Post Details</h1>
      <h2 className="text-xl  text-white font-semibold mb-2">ID- {data.id}</h2>
      <h2 className="text-xl  text-white font-semibold mb-2">
        Title- {data.title}
      </h2>
      <p className="text-white mb-4">Body- {data.body}</p>
    </div>
  );
}

export default FetchInvRQ;
