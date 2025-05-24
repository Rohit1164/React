import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";
// name this app SkillSetStudio
function App() {
  return (
    <div className="h-[100%]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen p-4">
//         <h1 className="text-2xl font-bold">Welcome to my portfolio</h1>
//         <p>This supports dark mode!</p>
//       </div>

//       <ColorModeToggle />
//       {/* Other portfolio components */}
//     </div>
//   );
// }
// export default App;
