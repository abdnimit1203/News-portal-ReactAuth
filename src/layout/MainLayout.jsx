import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../Hook/AuthProvider";
import Header from "../components/Header/Header";
import BannerSlider from "../components/Banner/BannerSlider";

const MainLayout = () => {

  const loc = useLocation();
  //   console.log(loc);
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `NewsAuth | Home`;
    } else {
      document.title = `NewsAuth | ${
        loc.pathname.replace("/", "").charAt(0).toUpperCase() +
        loc.pathname.slice(2)
      }`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc]);

const {user} = useContext(AuthContext);

  return (
    <div className="w-[90%] mx-auto">
    <div>
      <Header></Header>
      <BannerSlider></BannerSlider>
    </div>
      <div className="font-Jost">
        <Navbar user={user}></Navbar>
      </div>
      <div className="font-poppins">
        <Outlet></Outlet>
      </div>
     
    </div>
  );
};

export default MainLayout;
