import { ThemeProvider } from "./Context/ThemeSwitcher";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
