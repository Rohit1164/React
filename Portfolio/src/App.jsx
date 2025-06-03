import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Outlet } from "react-router-dom";

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
