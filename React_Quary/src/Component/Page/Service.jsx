import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, getData, updatePost } from "../../Service/index";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Service() {
  const [pagination, setPagination] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["/posts", pagination],
    queryFn: () => getData(pagination),
    placeholderData: keepPreviousData,
  });

  const queryClient = useQueryClient();

  const handleDelete = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["/posts", pagination], (curEle) => {
        return curEle.filter((post) => post.id !== id);
      });
      console.log(data, id);
    },
  });

  const handleUpdate = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apidata, postId) => {
      queryClient.setQueryData(["/posts", pagination], (curEle) => {
        return curEle
          ? curEle.map((post) =>
              post.id === postId ? { ...post, title: apidata.data.title } : post
            )
          : [];
      });
      console.log("Api Data", apidata);
    },
  });

  if (isLoading) return <div className="loading-circle"></div>;
  if (isError)
    return <div>Error: {error?.message || "Something went wrong"}</div>;

  return (
    <>
      <h1 className="text-4xl font-bold underline text-center p-10">
        Json PlaceHolder Data
      </h1>
      <div className="h-full w-full bg-gray-900 relative py-20">
        <div className="md:pt-6 md:pl-16 mx-[52px] h-[410px] grid md:grid-cols-3 grid-cols-1 gap-5">
          {data?.map((post) => {
            const { id, title, body } = post;
            return (
              <div key={id} className="w-96 bg-gray-700 p-10 rounded-md">
                <NavLink to={`/service/${id}`}>
                  <h2 className="text-xl text-white font-semibold mb-2">
                    ID- {id}
                  </h2>
                  <h2 className="text-xl text-white font-semibold mb-2">
                    Title- {title}
                  </h2>
                  <p className="text-white mb-4">Body- {body}</p>
                </NavLink>

                <div className="flex gap-10 py-6 absolute ">
                  <button
                    onClick={() => handleDelete.mutate(id)}
                    className="bg-blue-600 rounded-md px-8 py-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate.mutate(id)}
                    className="bg-blue-600 rounded-md px-8 py-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-10 py-6 absolute">
          <button
            onClick={() => setPagination((prev) => Math.max(0, prev - 3))}
            className="bg-blue-600 rounded-md px-8 py-2 ml-[10%]"
            disabled={pagination === 1 ? true : false}
          >
            Back
          </button>
          <p className="py-2">{pagination / 3 + 1}</p>
          <button
            onClick={() => setPagination((prev) => prev + 3)}
            className="bg-blue-600 rounded-md px-8 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
