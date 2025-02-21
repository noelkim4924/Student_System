import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={reactLogo} width="30" height="30" alt="React Logo" />
        School
      </Link>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">Student List</Link>
        </li>
      </ul>

      <Link className="navbar-brand" to="/">TypeScript version</Link>
    </nav>
  );
};

export default NavBar;
