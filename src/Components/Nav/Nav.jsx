import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center mt-5">
      <Link className="mr-5 font-bold" to="/">
        Home
      </Link>
      <Link className="mr-5 font-bold" to="/about">
        About
      </Link>
      <Link className="mr-5 font-bold" to="/class">
        Class
      </Link>
      <Link className="mr-5 font-bold" to="/teachers">
        Teachers
      </Link>
      <Link className="mr-5 font-bold" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
