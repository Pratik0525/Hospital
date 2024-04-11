import React from "react";
import { Link, Outlet } from "react-router-dom";
import DropDowns from "./DropDown";
import { useState } from "react";
import Droppp from "./DropDown";
const Navbar = () => {
  const [dropDown, setdropDown] = useState(false);
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const Navv = [
    {
      title: "Sign Up As Doctor",
      path: "/Blog",
    },
  ];
  return (
    <>
      <div className="h-20 w-full bg-[#E4E4E4] flex justify-between items-center">
        <div className="bg-white w-16 h-16 ml-28 rounded-full ">
          <img
            src="./src/assets/OIP.jpeg"
            alt=""
            className="w-fit h-fit rounded-full"
          />
        </div>
        <div
          className="text-black gap-24 font-semibold 
         h-full flex justify-center items-center mx-auto "
        >
          {navData.map((val, i) => {
            return (
              <div className=" h-full flex items-center">
                <Link
                  key={i}
                  to={val.path}
                  className="   text-lg transition-all delay-100 duration-300 ease-in-out "
                >
                  {val.title}
                </Link>
              </div>
            );
          })}
          <div
            onMouseEnter={() => {
              setdropDown(true);
            }}
            onMouseLeave={() => {
              setdropDown(false);
            }}
            className="  h-full flex items-center "
          >
            {Navv.map((val, i) => {
              return (
                <Link
                  key={i}
                  to={val.path}
                  className="  text-lg transition-all delay-100 duration-300 ease-in-out "
                >
                  {val.title}
                  {dropDown && <DropDowns />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
