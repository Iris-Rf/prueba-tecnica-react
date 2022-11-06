import { NavLink } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <nav className="NavBar">
      <NavLink to="">DEMO Streaming</NavLink>
      <h1 className="h1Nav">Popular Titles</h1>
    </nav>
  );
};

export default Nav;
