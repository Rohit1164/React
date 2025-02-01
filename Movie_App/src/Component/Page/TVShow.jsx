// import React from "react";

// const tvShows = [
//   { id: 1, title: "Breaking Bad", image: "https://via.placeholder.com/150" },
//   { id: 2, title: "Stranger Things", image: "https://via.placeholder.com/150" },
//   { id: 3, title: "Game of Thrones", image: "https://via.placeholder.com/150" },
//   { id: 4, title: "The Witcher", image: "https://via.placeholder.com/150" },
//   { id: 5, title: "The Mandalorian", image: "https://via.placeholder.com/150" },
// ];

// function TVShow() {
//   const [search, setSearch] = useState("");

//   const filteredShows = tvShows.filter((show) =>
//     show.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">TV Shows</h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search TV Shows..."
//           className="px-4 py-2 rounded-lg bg-gray-800 text-white w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* TV Shows Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredShows.map((show) => (
//           <div
//             key={show.id}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               src={show.image}
//               alt={show.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{show.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TVShow;

import { useState } from "react";

const tvShows = [
  {
    id: 1,
    title: "Breaking Bad",
    image:
      "https://images.pexels.com/photos/8041994/pexels-photo-8041994.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Stranger Things",
    image:
      "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Game of Thrones",
    image:
      "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "The Witcher",
    image:
      "https://images.pexels.com/photos/12877877/pexels-photo-12877877.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "The Mandalorian",
    image:
      "https://images.pexels.com/photos/7499839/pexels-photo-7499839.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function TVShow() {
  const [search, setSearch] = useState("");

  const filteredShows = tvShows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">TV Shows</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search TV Shows..."
          className="px-4 py-2 rounded-lg bg-gray-800 text-white w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TV Shows Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredShows.map((show) => (
          <div
            key={show.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{show.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TVShow;
