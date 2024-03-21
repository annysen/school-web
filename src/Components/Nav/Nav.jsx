import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Nav = () => {
  return (
    <nav className="flex justify-center gap-5 p mt-5">
      <ActiveLink className="mr-5 font-bold" to="/">
        Home
      </ActiveLink>
      <ActiveLink className="mr-5 font-bold" to="/about">
        About
      </ActiveLink>
      <ActiveLink className="mr-5 font-bold" to="/class">
        Class
      </ActiveLink>
      <ActiveLink className="mr-5 font-bold" to="/teachers">
        Teachers
      </ActiveLink>
      <ActiveLink className="mr-5 font-bold" to="/contact">
        Contact
      </ActiveLink>
    </nav>
  );
};

export default Nav;
