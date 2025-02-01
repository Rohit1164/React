import Navbar from "./Component/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Component/Footer";
import "./App.css";
function App() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    <div className="loading-circle"></div>;
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
