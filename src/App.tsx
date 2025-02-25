import { Outlet } from "react-router-dom"; // 
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
