import React from "react";

const Sidebar = () => {
  return (
    <>
      <div
        className="w-80 h-screen 
       bg-green-500 "
      >
        <div className="grid text-xl   w-10/12 justify-center items-center rounded-2xl bg-red-500 ">
          <button className="bg-gray-200 h-24 hover:bg-gray-300">
            Select in Map
          </button>
          <button className="bg-gray-200 h-20 hover:bg-gray-300">
            Department
          </button>
          <button className="bg-gray-200 h-20 hover:bg-gray-300">Find</button>
        </div>
        <div>
          <button
            className=" h-20 hover:bg-gray-300 w-10/12
          text-xl bg-[#5652FF] text-white"
          >
            Consult Online Dr.
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
