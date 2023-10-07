/* eslint-disable react/prop-types */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { MdEditSquare } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, allSignOut } = useContext(AuthContext);

  const toastSignOutSuccess = () => toast("Signed Out SuccessFully");
  const toastSignOuterror = (err) => toast("Opps: ", err);
  console.log(user);

  //Signout
  const handleSignOut = () => {
    allSignOut()
      .then(() => {
        toastSignOutSuccess();
        navigate("/login");
      })
      .catch((error) => {
        toastSignOuterror(error.message);
      });
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " active text-red-500" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " active text-red-500" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? " active text-red-500" : ""
        }
      >
        Register
      </NavLink>
      
    </>
  );
  const navlinksUser = (
    <>
      {!user && (
        <Link to={"/login"}>
          <ul>
            <li className="btn  bg-[#403F3F] hover:bg-[#6e6e6e]  px-10 rounded-sm text-white">
              Login
            </li>
          </ul>
        </Link>
      )}
      {user && (
        <div className="flex items-center justify-center">
          {user.photoURL ? (
            <img
              src={user?.photoURL}
              alt="profilepic"
              className="w-12 rounded-full aspect-square"
            />
          ) : (
            <h2 className="font-semibold px-2">{user.email} </h2>
          )}

          <h3 className="font-semibold px-2">
            {user?.displayName}
            <span className="flex justify-center items-center text-xs font-light bg-teal-500 text-white rounded-xl px-2">
              <p>Edit profile</p>
              <Link to={"/update-profile"}>
                <MdEditSquare className="ml-2" />
              </Link>
            </span>
          </h3>
          <button className="btn btn-xs" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </>
  );
  return (
    <div>
      <ToastContainer />
      <div className="navbar bg-base-100 mb-8 border-b-2 ">
        <div className="hidden md:flex md:navbar-start">
          <p></p>
        </div>
        <div className="flex  md:navbar-center mx-auto">
          <ul className="menu menu-horizontal px-4 gap-4 text-lg font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end  ">{navlinksUser}</div>
      </div>
    </div>
  );
};

export default Navbar;
