import React from "react";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
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
    {
      title: "Sign Up As Doctor",
      path: "/Blog",
    },
  ];
  return (
    <>
      <div className="h-20 w-full bg-[#E4E4E4] flex justify-between items-center">
        <div className="bg-white w-16 h-16 ml-28 rounded-full "></div>
        <div className="  bg-gray-200 text-black gap-24 font-semibold  h-fit flex justify-center mx-auto ">
          {navData.map((val, i) => {
            return (
              <Link
                key={i}
                to={val.path}
                className="  text-xl hover:text-[#fee6af] transition-all delay-100 duration-300 ease-in-out "
              >
                {val.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
