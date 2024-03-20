import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
