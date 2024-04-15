import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const Navigation = useNavigate();
  return (
    <>
      <div className="flex flex-col  w-full h-fit relative" align="center">
        <div className="w-36 absolute top-3 left-[70%]">
          <div className="bg-gray-200 w-6 h-6 absolute left-4 rotate-45 -top-[12px] z-50 "></div>
          <ul className="flex flex-col  border-[.5px]  border-black">
            <Link to="/Signup">
              <li className="bg-[#5652FF] text-white hover:bg-white hover:text-[#5652FF] text-lg  cursor-pointer p-3">
                Doctor
              </li>
            </Link>
            <li className=" bg-[#5652FF] text-white text-lg hover:bg-white hover:text-[#5652FF] cursor-pointer p-3">
              Patient
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDown;
