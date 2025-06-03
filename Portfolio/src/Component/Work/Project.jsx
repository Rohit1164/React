import { useState } from "react";
import FirstProject from "../assets/wap.png";
import SecondProject from "../assets/map.png";
import ThirdProject from "../assets/moviedekho.png";
import Button from "../Button";
import { NavLink } from "react-router-dom";

function Project() {
  const data = [
    {
      id: 1,
      title: "World Atlas",
      image: FirstProject,
      content:
        "A 'World Atlas Project' can refer to several initiatives including the WorldAtlas.com, a large publishing resource for geography and related topics, as well as projects like the Global Ecosystems Atlas and Project Atlas focused on mapping and understanding specific areas like ecosystems or financial flows.",
    },
    {
      id: 2,
      title: "Mock Profile API",
      image: SecondProject,
      content:
        "Mock APIs enable more efficient testing and development, allowing developers to work in controlled environments with isolated components for more reliable test results. Real APIs, on the other hand, are production-grade interfaces providing access to actual data for end users.",
    },
    {
      id: 3,
      title: "MovieDekho",
      image: ThirdProject,
      content:
        "MovieDekho is a modern and responsive web application designed to help users explore, search, and discover movies and TV shows. It provides real-time access to movie information, trailers, ratings, genres, and more, powered by a movie database API.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const project = data[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-[90vh] px-6 py-20 md:py-32 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen transition duration-300">
        <div className="flex flex-col md:flex-row items-center gap-60">
          {/* Text Section */}
          <div className="w-96 rounded-md h-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              {project.title}
            </h1>
            <p className="text-lg mb-4">{project.content}</p>
            <Button>
              <NavLink to={`/mega-projects/${project.id}`}>
                More Details
              </NavLink>
            </Button>
          </div>

          {/* Image Section */}
          <img
            className="rounded-md md:h-96 h-72 shadow-blue-500 m-0 shadow-2xl object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-12">
          <Button onClick={prevProject}>Previous</Button>
          <Button onClick={nextProject}>Next</Button>
        </div>
      </div>

      <hr className="h-1 border-0 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-700 dark:via-white dark:to-gray-700" />
    </>
  );
}

export default Project;
