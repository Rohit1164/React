import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getGithubAPIData } from "../../Service";
import { useInView } from "react-intersection-observer";

function GithubUser() {
  const {
    data,
    isError,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam = 1 }) => getGithubAPIData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === 10 ? allPages.length + 1 : undefined,
  });

  console.log(data);

  // Scroll use of React Query

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isbotton =
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight - 10;
  //     if (isbotton && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasNextPage]);

  // Scroll use of React Intersection Observer

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <div className=".loading-circle"></div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <div className="p-6 bg-gray-900 text-white">
        <h2 className="text-4xl underline text-center font-semibold mb-4">
          GitHub Users
        </h2>
        <ul>
          {data?.pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="p-20 grid md:grid-cols-3 grid-cols-1 gap-4"
            >
              {page.map((user) => (
                <li
                  key={user.id}
                  className="mb-2 border-1 border-white rounded-3xl"
                >
                  <img
                    src={user.avatar_url}
                    alt="Users Name"
                    className="h-80 w-full"
                  />
                  <h1 className="text-2xl font-bold p-4 text-center">
                    Name-{user.login}
                  </h1>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      <div ref={ref}>
        {isFetchingNextPage
          ? "Loading more"
          : hasNextPage
          ? "Loading more than"
          : "your are reached"}
      </div>
    </>
  );
}

export default GithubUser;
